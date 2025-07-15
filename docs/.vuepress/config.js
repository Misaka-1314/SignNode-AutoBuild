import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'

import theme from "./theme.js";

export default defineUserConfig({
    bundler: viteBundler({
        viteOptions: {
            optimizeDeps: {
                include: ['naive-ui']
            },
            ssr: {
                noExternal: ['naive-ui']
            }
        }
    }),
    theme: theme,
    base: "/./",
    head: [
        ['link', { rel: 'icon', href: 'https://github.com/WAADRI.png' }],
        ['meta', { name: 'referrer', content: 'never' }],
        ['script', { type: 'text/javascript', src: '/js/analyze.js' }],
    ],
    locales: {
        "/": {
            lang: "zh-CN",
            title: "WAADRI 文档",
            description: "WAADRI 超新星学习通在线自动签到抢答系统 文档",
        },
    },
    plugins: [],
})
