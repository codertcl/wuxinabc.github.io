module.exports = {
    // base:'/sxyblog/',
    title: 'demo模板',
    description: '我的第一个',
    port: '8080',
    head: [
        ['link', {rel: 'icon', href: 'favicon.ico'}],//设置页面标签icon
        ['meta', {author: 'SXY', content: 'TCL'}],
        ['meta', {name: 'keyowrds', content: 'vuepress,个人博客'}]
    ],
    markdown: {
        lineNumbers: true
    },
    subSidebar: 'auto',//在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
    sidebar: "auto",//所有页面自动生成侧边栏
    theme: 'reco', // 使用皮肤
    // blogConfig: {
    //     category: {
    //         location: 2,     // 在导航栏菜单中所占的位置，默认2
    //         text: 'Category' // 默认文案 “分类”
    //     },
    //     tag: {
    //         location: 3,     // 在导航栏菜单中所占的位置，默认3
    //         text: 'Tag'      // 默认文案 “标签”
    //     },
    //     socialLinks: [     // 信息栏展示社交信息
    //         { icon: 'reco-github', link: 'https://github.com/recoluan' },
    //         { icon: 'reco-npm', link: 'https://www.npmjs.com/~reco_luan' }
    //     ]
    // },
    themeConfig: {
        lastUpdated: '最近更新',
        nav: require('./nav'),
        version: '1.0',
        // sidebar: [
        //     '/',
        //     '/about', {
        //         title: 'CSS 1',   // 必要的
        //         path: '/foo/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        //         collapsable: false, // 可选的, 默认值是 true,
        //         sidebarDepth: 1,    // 可选的, 默认值是 1
        //         children: [
        //             '/'
        //         ]
        //     },
        //     '/about1', {
        //         title: 'CSS 1',   // 必要的
        //         path: '/foo/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        //         collapsable: false, // 可选的, 默认值是 true,
        //         sidebarDepth: 1,    // 可选的, 默认值是 1
        //         children: [
        //             '/'
        //         ]
        //     },
        // ],
    },
    plugins: {
        '@vssue/vuepress-plugin-vssue': {
            // 设置 `platform` 而不是 `api`
            platform: 'github',
            // 其他的 Vssue 配置
            owner: 'wuxinabc',
            repo: 'sxyblog',
            clientId: 'f9368a69c836bd3cfcb2',
            clientSecret: 'c4e7623d3e4649428252d19b62d1c28a8547ab59',
            autoCreateIssue:true,
        },
    }
}
