//避免隐私信息泄露
const secert=require('./secert')
module.exports = {
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
    '@vuepress/back-to-top':true
}
