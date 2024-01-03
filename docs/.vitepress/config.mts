import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Vant Pro',
  description: '基于 Vant 的业务组件',
  head: [['link', { rel: 'icon', href: '/logo.png' }]],
  themeConfig: {
    logo: '/logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '组件', link: '/components/sku' },
    ],

    sidebar: {
      '/components': [
        {
          text: '业务组件',
          items: [{ text: 'SKU', link: '/components/sku' }],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/edram/vant-pro' },
    ],
  },
});
