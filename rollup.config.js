import path from 'node:path';
import { readFileSync } from 'node:fs';

import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import del from 'rollup-plugin-delete';
import nodePolyfills from 'rollup-plugin-node-polyfills';
import prettier from 'rollup-plugin-prettier';
import { swc } from 'rollup-plugin-swc3';
import { typescriptPaths } from 'rollup-plugin-typescript-paths';

import pkg from './package.json' with { type: 'json' };

const external = [
  ...Object.keys(pkg.peerDependencies || {}),
  'react/jsx-runtime', // 👈 required for automatic JSX runtime
  'react/jsx-dev-runtime', // 👈 required for dev runtime
];

const identifierSource = 'src/identifiers.ts';
const loaderSource = 'src/loader.ts';
const iconIndexFiles = [
  { category: 'Outline', file: 'src/outline/index.ts' },
  { category: 'Filled', file: 'src/filled/index.ts' },
  { category: 'Chars', file: 'src/chars/index.ts' },
];

function getIconEntries() {
  const entries = iconIndexFiles.flatMap(({ category, file }) =>
    Array.from(
      readFileSync(file, 'utf8').matchAll(
        /^export \{ (\w+) \} from '\.\/([^']+)';$/gm
      ),
      ([, name, source]) => ({
        category,
        name,
        sourceFile: path.resolve(path.dirname(file), `${source}.tsx`),
      })
    )
  );

  if (new Set(entries.map(({ name }) => name)).size !== entries.length) {
    throw new Error(
      'Icon export names must be unique to generate identifiers.'
    );
  }

  for (const { name, sourceFile } of entries) {
    try {
      readFileSync(sourceFile);
    } catch {
      throw new Error(
        `Icon ${name} points to a missing source module: ${sourceFile}`
      );
    }
  }

  return entries;
}

function iconIdentifiers(entries) {
  const names = entries.map(({ name }) => name);

  const code = `export const iconNames = ${JSON.stringify(names)};\nexport default iconNames;\n`;

  return {
    name: 'icon-identifiers',
    transform(_, id) {
      return id === path.resolve(identifierSource) ? { code, map: null } : null;
    },
  };
}

function rootEsmBarrel(entries) {
  const iconExports = entries
    .map(
      ({ name }) => `export { default as ${name} } from './icons/${name}.js';`
    )
    .join('\n');

  const code = [
    iconExports,
    "export { default, Outline, Filled, Chars } from './index.legacy.esm.js';",
    '',
  ].join('\n');

  return {
    name: 'root-esm-barrel',
    renderChunk() {
      return { code, map: null };
    },
  };
}

function legacyEsmModule(entries) {
  const imports = entries
    .map(({ name }) => `import ${name} from './icons/${name}.js';`)
    .join('\n');
  const categories = iconIndexFiles
    .map(({ category }) => {
      const names = entries
        .filter((entry) => entry.category === category)
        .map(({ name }) => name)
        .join(', ');
      return `const ${category} = { ${names} };`;
    })
    .join('\n');
  const categoryNames = iconIndexFiles.map(({ category }) => category);
  const code = [
    imports,
    '',
    categories,
    '',
    `const icons = { ${categoryNames.map((name) => `...${name}`).join(', ')} };`,
    '',
    `export { ${categoryNames.join(', ')}, icons as default };`,
    '',
  ].join('\n');

  return {
    name: 'legacy-esm-module',
    renderChunk() {
      return { code, map: null };
    },
  };
}

function rootDeclarations(entries) {
  const iconExports = entries
    .map(
      ({ name }) => `export { default as ${name} } from './icons/${name}.js';`
    )
    .join('\n');
  const categories = iconIndexFiles
    .map(({ category }) => {
      const properties = entries
        .filter((entry) => entry.category === category)
        .map(
          ({ name }) =>
            `  ${name}: typeof import('./icons/${name}.js').default;`
        )
        .join('\n');
      return `export declare const ${category}: {\n${properties}\n};`;
    })
    .join('\n\n');

  return {
    name: 'root-declarations',
    generateBundle() {
      this.emitFile({
        type: 'asset',
        fileName: 'index.d.ts',
        source: [
          iconExports,
          '',
          categories,
          '',
          'declare const icons: typeof Outline & typeof Filled & typeof Chars;',
          'export default icons;',
          '',
        ].join('\n'),
      });
    },
  };
}

function nativeIconModules(entries) {
  const entryByVirtualId = new Map(
    entries.map((entry) => [`\0native-icon:${entry.name}`, entry])
  );

  return {
    name: 'native-icon-modules',
    resolveId(source) {
      return source.startsWith('native-icon:') ? `\0${source}` : null;
    },
    load(id) {
      const entry = entryByVirtualId.get(id);
      if (!entry) {
        return null;
      }

      return `export { ${entry.name} as default, ${entry.name} } from ${JSON.stringify(
        entry.sourceFile
      )};`;
    },
    transform(code, id) {
      if (id !== path.resolve(loaderSource)) {
        return null;
      }

      const marker =
        'const iconLoaders: Record<NativeIconId, NativeIconLoader> = {};';
      if (!code.includes(marker)) {
        throw new Error(
          'The loader source is missing its generated registry marker.'
        );
      }

      const registry = entries
        .map(
          ({ name }) =>
            `  ${name}: () => import(${JSON.stringify(`native-icon:${name}`)}),`
        )
        .join('\n');

      return {
        code: code.replace(
          marker,
          `const iconLoaders = {\n${registry}\n} satisfies Record<NativeIconId, NativeIconLoader>;`
        ),
        map: null,
      };
    },
  };
}

function iconChunkName(id) {
  const match = id.match(/^\0native-icon:(.+)$/);
  return match ? match[1] : null;
}

function iconDeclarations(entries) {
  return {
    name: 'native-icon-declarations',
    generateBundle() {
      for (const { name } of entries) {
        this.emitFile({
          type: 'asset',
          fileName: `icons/${name}.d.ts`,
          source: [
            "import type { SVGProps } from 'react';",
            `declare function ${name}(props: SVGProps<SVGSVGElement>): import('react').JSX.Element;`,
            `export { ${name} };`,
            `export default ${name};`,
            '',
          ].join('\n'),
        });
      }
    },
  };
}

function loaderDeclarations() {
  return {
    name: 'native-icon-loader-declarations',
    generateBundle() {
      this.emitFile({
        type: 'asset',
        fileName: 'loader.d.ts',
        source: [
          "import type { JSX, SVGProps } from 'react';",
          "import type { NativeIconId } from './icon-types.js';",
          '',
          'export type { NativeIconId };',
          '',
          'export type NativeIconComponent = (props: SVGProps<SVGSVGElement>) => JSX.Element;',
          '',
          'export type NativeIconModule = {',
          '  default: NativeIconComponent;',
          '};',
          '',
          'export type NativeIconLoader = () => Promise<NativeIconModule>;',
          '',
          'export declare function isNativeIconId(value: string): value is NativeIconId;',
          'export declare function getIconLoader(iconId: string): NativeIconLoader | null;',
          'export declare function loadIconById(',
          '  iconId: string',
          '): Promise<NativeIconComponent | null>;',
          '',
        ].join('\n'),
      });
    },
  };
}

function identifierDeclarations(entries) {
  return {
    name: 'icon-identifier-declarations',
    generateBundle() {
      const ids = entries.map(({ name }) => `  | '${name}'`).join('\n');
      this.emitFile({
        type: 'asset',
        fileName: 'identifiers.d.ts',
        source:
          "import type { NativeIconId } from './icon-types.js';\nexport declare const iconNames: readonly NativeIconId[];\nexport default iconNames;\n",
      });
      this.emitFile({
        type: 'asset',
        fileName: 'icon-types.d.ts',
        source: `export type NativeIconId =\n${ids};\n`,
      });
    },
  };
}

const iconEntries = getIconEntries();
const config = [
  {
    input: 'src/index.ts',
    external,
    plugins: [
      del({ targets: ['dist/*'] }),
      nodeResolve(),
      typescriptPaths({
        preserveExtensions: true,
      }),
      json(),
      commonjs(),
      nodePolyfills(), // Circular dependencies warning cant be fixed and will be ignored until further notice
      // Transpile with swc
      swc({
        jsc: {
          baseUrl: path.resolve('./src'),
          paths: { '@/*': ['*'] },
          parser: {
            syntax: 'typescript',
            tsx: true,
          },
          target: 'es2019',
          loose: false,
          minify: {
            compress: false,
            mangle: false,
          },
        },
      }),
      prettier(),
    ],
    output: [
      // Outputs the packaged lib in CommonJS format
      {
        file: pkg.main,
        format: 'cjs',
        plugins: [rootDeclarations(iconEntries)],
        exports: 'named',
      },
      // Preserves the previous ESM default and category namespace exports.
      {
        file: 'dist/index.legacy.esm.js',
        format: 'esm',
        plugins: [legacyEsmModule(iconEntries)],
        exports: 'named',
      },
      // Keeps named root imports ergonomic while exposing per-icon module edges
      // to consumer bundlers and Next.js package-import optimization.
      {
        file: pkg.module,
        format: 'esm',
        plugins: [rootEsmBarrel(iconEntries)],
        exports: 'named',
      },
    ],
  },
  {
    input: identifierSource,
    plugins: [
      iconIdentifiers(iconEntries),
      swc({
        jsc: {
          parser: {
            syntax: 'typescript',
          },
          target: 'es2019',
        },
      }),
      prettier(),
    ],
    output: [
      {
        file: 'dist/identifiers.cjs',
        format: 'cjs',
        plugins: [identifierDeclarations(iconEntries)],
        exports: 'named',
      },
      {
        file: 'dist/identifiers.esm.js',
        format: 'esm',
        plugins: [identifierDeclarations(iconEntries)],
        exports: 'named',
      },
    ],
  },
  {
    input: loaderSource,
    external,
    plugins: [
      nativeIconModules(iconEntries),
      nodeResolve(),
      typescriptPaths({
        preserveExtensions: true,
      }),
      commonjs(),
      nodePolyfills(),
      swc({
        jsc: {
          baseUrl: path.resolve('./src'),
          paths: { '@/*': ['*'] },
          parser: {
            syntax: 'typescript',
            tsx: true,
          },
          target: 'es2019',
          loose: false,
          minify: {
            compress: false,
            mangle: false,
          },
        },
      }),
      prettier(),
      loaderDeclarations(),
      iconDeclarations(iconEntries),
    ],
    output: [
      {
        dir: 'dist',
        format: 'cjs',
        entryFileNames: 'loader.cjs',
        chunkFileNames: 'icons/[name].cjs',
        manualChunks: iconChunkName,
      },
      {
        dir: 'dist',
        format: 'esm',
        entryFileNames: 'loader.esm.js',
        chunkFileNames: 'icons/[name].js',
        manualChunks: iconChunkName,
      },
    ],
  },
];

export default config;
