import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'

import theme from "./theme.js";

export default defineUserConfig({
  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),
  theme: theme,
  base: "/./",
  head: [
    ['link', { rel: 'icon', href: 'https://avatars.githubusercontent.com/u/90495619?v=4' }]
    ['meta', { name: 'algolia-site-verification', content: '85D4DB2CA351BEC9' }],
    ['meta', { name: 'referrer', content: 'never' }],
  ],
  locales: {
    "/": {
      lang: "zh-CN",
      title: "WAADRI 文档",
      description: "WAADRI 超新星学习通在线自动签到抢答系统 文档",
    },
  },
})