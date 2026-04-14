import path from 'node:path';

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
];

export default config;
