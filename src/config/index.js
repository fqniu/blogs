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
        pro: 'http://test.barteringmedia.com/',
        // dev:'http://api.barteringmedia.com',
        // pro:'http://api.barteringmedia.com/', 
    },
    //   projectName:'xiaoxiangui',
    // projectName:'hewego',
    // projectName: 'udian',
    // projectName:'changtong',
    /**
     * @description 默认打开的首页的路由name值，默认为home
     */
    //   homeName: 'home'
}
