export default {
    /**
     * @description token在Cookie中存储的天数，默认7天
     */
    cookieExpires: 7,

    /**
     * @description api请求基础路径
     */
    baseUrl: {
        // dev: 'http://112.35.188.133:8888',
        // dev:'http://118.190.156.237:8200',
        dev: 'http://test.barteringmedia.com',
        // dev:'https://so.csdn.net/api/',
        // https://silkroad.csdn.net/api/v2/assemble/list/channel/pc_hot_word?channel_name=pc_hot_word&size=10&platform=pc&imei=10_30706525170-1612333398942-258444
        pro: 'http://test.barteringmedia.com/',
        // dev:'http://api.barteringmedia.com',
        // pro:'http://api.barteringmedia.com/', 
    },
    // projectName:'xiaoxiangui',
    /**
     * @description 默认打开的首页的路由name值，默认为home
     */
    //   homeName: 'home'
}
