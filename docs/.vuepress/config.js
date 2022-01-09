module.exports = {
    // base:'/sxyblog/',
    title: 'TCL博客',
    description: '尘埃入世',
    port: '8080',
    head: require('./config/headConf'),
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
        nav: require('./config/navConf'),
        version: '1.0',
        // sidebar: require('./config/sidebarConfig')
    },
    plugins: require('./config/pluginConf')
}
