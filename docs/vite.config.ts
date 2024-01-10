import { defineConfig } from 'vite';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';

export default defineConfig({
  plugins: [
    // Components({
    //   dts: '.vitepress/components.d.ts',
    //   include: [/\.vue$/, /\.vue\?vue/, /\.md$/, /\.ts$/],
    //   resolvers: [VantResolver()],
    // }),
  ],
});
