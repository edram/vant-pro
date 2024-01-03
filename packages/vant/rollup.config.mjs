import terser from '@rollup/plugin-terser';

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
};

export default config;
