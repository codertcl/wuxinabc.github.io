//避免隐私信息泄露
const secert=require('./secert')
module.exports = {
    //评论模块
    '@vssue/vuepress-plugin-vssue': {
        // 设置 `platform` 而不是 `api`
        platform: 'github',
        // 其他的 Vssue 配置
        owner: 'wuxinabc',
        repo: 'sxyblog',
        clientId: secert.clientId,
        clientSecret: secert.clientSecret,
        autoCreateIssue:true,
    },
    //回到顶部
    '@vuepress/back-to-top':true,
    //图片缩放
    '@vuepress/medium-zoom': {
        selector: 'img.flexibile',//flexibile类的图片缩放
        // selector: 'img',//全部缩放 具有指定类名的图片缩放
    },
    //自动生成侧边栏
    "autobar":{},
    // "vuepress-plugin-auto-sidebar":{
    //
    // }
}
