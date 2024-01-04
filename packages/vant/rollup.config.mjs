import terser from '@rollup/plugin-terser';
import { babel } from '@rollup/plugin-babel';


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
      },
    },
    {
      name: 'vant-pro',
      file: 'dist/vant-pro.min.js',
      format: 'umd',
      plugins: [terser()],
      globals: {
        vue: 'vue',
      },
    },
  ],

  plugins: [
    babel({
      babelHelpers: 'inline',
      extensions: ['.js', '.jsx', '.tsx', '.ts'],
    }),
  ],

  external: ['vue'],
};

export default config;
