import path from 'node:path';
import { readFileSync } from 'node:fs';

import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import del from 'rollup-plugin-delete';
import flatDts from 'rollup-plugin-flat-dts';
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
const iconIndexFiles = ['src/outline/index.ts', 'src/filled/index.ts', 'src/chars/index.ts'];

function iconIdentifiers() {
  const names = iconIndexFiles.flatMap((file) =>
    Array.from(readFileSync(file, 'utf8').matchAll(/^export \{ (\w+) \}/gm), ([, name]) => name)
  );

  if (new Set(names).size !== names.length) {
    throw new Error('Icon export names must be unique to generate identifiers.');
  }

  const code = `export const iconNames = ${JSON.stringify(names)};\nexport default iconNames;\n`;

  return {
    name: 'icon-identifiers',
    transform(_, id) {
      return id === path.resolve(identifierSource) ? { code, map: null } : null;
    },
  };
}

function identifierDeclarations() {
  return {
    name: 'icon-identifier-declarations',
    generateBundle() {
      this.emitFile({
        type: 'asset',
        fileName: 'identifiers.d.ts',
        source: 'export declare const iconNames: readonly string[];\nexport default iconNames;\n',
      });
    },
  };
}

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
      { file: pkg.main, format: 'cjs', plugins: [flatDts()], exports: 'named' },
      // Outputs the packaged lib in ES Module format
      {
        file: pkg.module,
        format: 'esm',
        plugins: [flatDts()],
        exports: 'named',
      },
    ],
  },
  {
    input: identifierSource,
    plugins: [
      iconIdentifiers(),
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
        plugins: [identifierDeclarations()],
        exports: 'named',
      },
      {
        file: 'dist/identifiers.esm.js',
        format: 'esm',
        plugins: [identifierDeclarations()],
        exports: 'named',
      },
    ],
  },
];

export default config;
