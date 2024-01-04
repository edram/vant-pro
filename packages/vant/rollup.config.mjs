import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';

/** @type {import("rollup").RollupOptions} */
const config = {
  input: 'src/index.ts',
  output: [
    {
      name: "vant-pro",
      file: 'dist/vant-pro.js',
      format: 'umd',
      plugins: [],
    },
    {
      name: "vant-pro",
      file: 'dist/vant-pro.min.js',
      format: 'umd',
      plugins: [terser()],
    },
  ],

  plugins: [typescript({
    tsconfig: 'tsconfig.rollup.json'
  })]
};

export default config;
