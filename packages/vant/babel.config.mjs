export default {
  presets: ['@babel/preset-typescript'],
  plugins: [
    [
      '@vue/babel-plugin-jsx',
      {
        enableObjectSlots: false,
      },
    ],
  ],
};
