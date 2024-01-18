import terser from '@rollup/plugin-terser';
import { babel } from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import { dts } from 'rollup-plugin-dts';

/** @type {import("rollup").RollupOptions} */
const config = {
  input: 'src/index.ts',
  output: [
    {
      name: 'vant-pro',
      file: 'dist/vant-pro.js',
      format: 'umd',
      plugins: [],
      globals: {
        vue: 'vue',
        vant: 'vant',
      },
    },
    {
      name: 'vant-pro',
      file: 'dist/vant-pro.min.js',
      format: 'umd',
      plugins: [terser()],
      globals: {
        vue: 'vue',
        vant: 'vant',
      },
    },
    {
      name: 'vant-pro',
      file: 'dist/vant-pro.es.js',
      format: 'es',
      plugins: [],
    },
  ],

  plugins: [
    babel({
      babelHelpers: 'inline',
      extensions: ['.js', '.jsx', '.tsx', '.ts'],
    }),
    commonjs(),
    resolve({
      extensions: ['.ts', '.tsx', '.js', '.mjs'],
    }),
  ],

  external: ['vue', 'vant'],
};

/** @type {import("rollup").RollupOptions} */
const less = {
  input: 'src/index.less',
  output: [
    {
      name: 'vant-pro',
      file: 'dist/vant-pro.css',
    },
  ],

  plugins: [postcss({ extract: true })],
};

const types = {
  input: 'src/index.ts',
  output: [{ file: 'dist/vant-pro.d.ts', format: 'es' }],
  plugins: [
    dts({
      compilerOptions: {
        preserveSymlinks: false,
      },
      tsconfig: './tsconfig.build.json',
    }),
  ],
};

export default [config, less, types];
