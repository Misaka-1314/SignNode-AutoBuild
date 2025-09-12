import { hopeTheme } from "vuepress-theme-hope";

export default hopeTheme(
    {
        docsDir: "docs",
        logo: "https://avatars.githubusercontent.com/u/90495619?v=4",
        repo: "Misaka-1314/SignNode-AutoBuild",
        hostname: "https://doc.waadri.top",

        author: {
            name: "Misaka",
            url: "https://github.com/Misaka-1314",
        },
        navbar: ["/guide/", "/faq/"],

        pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

        markdown: {
            imgMark: true,      // 支持图片标记
            imgLazyload: true,  // 支持图片懒加载
            imgSize: true,      // 支持图片大小
            tabs: true,         // 支持表格
            gfm: true,          // 支持完整的 GFM 语法
            tasklist: true,     // 支持任务列表
            include: true,      // 支持 include 语法
            align: true,        // 支持对齐
            mark: true,         // 支持标记
            sub: true,          // 支持下标
            sup: true,          // 支持上标
            demo: true,         // 支持 demo
            plantuml: true,     // 支持 PlantUML
            codeTabs: true,     // 支持代码块分组
        },
        plugins: {
            // 本地搜索
            search: {
                locales: {
                    "/": {
                        placeholder: "搜索文档~♡",
                    },
                },
            },
            // 图标
            icon: {
                assets: [
                    "https://at.alicdn.com/t/c/font_2410206_5vb9zlyghj.css",
                    "https://npm.elemecdn.com/font6pro@6.4.0/css/fontawesome.min.css",
                    "https://npm.elemecdn.com/font6pro@6.4.0/css/all.min.css",
                ]
            },
            // 临时弹窗
            notice: [
                {
                    path: "/",
                    title: '温馨提示',
                    content: '<i class="fa-solid fa-light-emergency-on fa-bounce" style="color: #ff0000;"></i>&nbsp;<span style="color:rgb(255, 0, 0);font-weight:bold;">在群里提问文档中包含的内容，可能被禁言或请出群聊！</span><br/><br/>本文档由 WAADRI 和 Misaka 提供支持，网站由 WAADRI 维护！',
                    actions: [],
                    showOnce: true,
                }
            ],
            // 水印
            watermark: {
                watermarkOptions: {
                    content: "WAADRI 免费的学习通签到平台",
                    movable: true,
                },
            },
            // SEO
            seo: true,
            // 启用 Tabs 支持
            markdown: {
                tabs: true,
            },
        },
    },
    {
        check: true,
        compact: true,
        custom: true,
        debug: false,
    }
);
