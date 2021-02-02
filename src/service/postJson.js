import axios from 'axios';

// import {Toast} from 'vant';
// import {getToken,getAgentId,removeToken} from '@/utils/util'
import config from '@/config'
import Vue from 'vue'
let $vue  = new Vue

const URL = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro

/**
 * 创建axios实例
 * @type {AxiosInstance}
 */
const service = axios.create({
    baseURL: URL, // api的base_url
    timeout: 30000  // 设置请求超时时间30s
})

/**
 * 请求参数处理
 */
service.interceptors.request.use((config) => {
        // let user = JSON.parse(sessionStorage.getItem('user'));
        // const agentId = getAgentId();
        // if(config.data && agentId){
        //     config.data.agentId = agentId
        // }
        // if(config.params && agentId){
        //     config.params.agentId = agentId
        // }
        // if(user && user.shop && user.shop.agentId){
        //     if(config.data){
        //         config.data.agentId = user.shop.agentId
        //     }
        //     if(config.params){
        //         config.params.agentId = user.shop.agentId
        //     }
        // }
        config.method === 'post'
            ? config.data = {...config.data}
            : config.params = {...config.params}
        // const token = getToken()
        // if (token) {
        //     config.headers['Authorization'] = 'Bearer ' + token
        // }
        // if(config.isNeedToken && !token){
        //     try {
        //         console.log("再次获取token")
        //         // 再次调用原生方法，获取token
        //         // u.native.getUserInfo()
        //         const token = getToken()
        //         config.headers['Authorization'] = 'Bearer ' + token
        //     } catch (error) {
        //         console.log("原生方法未注入", error);
        //     }
        // }

        // 用于测试的token值 login登录更新token
        // config.headers['Authorization'] = 'Bearer ' + "7816014465510072321f41238a-c847-4ff1-9381-e641bc2d5f16" //188 测试
        // config.headers['Authorization'] = 'Bearer ' + "78116742149561958402382f7d-483f-4fc3-b934-e6fc9ee3ce4a" //156
        // config.headers['Authorization'] = 'Bearer ' + "801756553907535872602001db-4c23-4949-8596-9daeda65bd40"  //家
        // config.headers['Authorization'] = 'Bearer ' + "803320347343454208a23f2d16-0cf4-4af4-bd02-f3ad6b24996e"
        // config.headers['Authorization'] = 'Bearer ' + "79849685364034764858d5eee5-1924-4f94-9bf9-e15e3d6f8b76" //188 正式
        console.log("请求的token",config.headers['Authorization'])
        return config
    }
)


//响应拦截器即异常处理
service.interceptors.response.use(
    (response) => {
        if (response.data.code === 0) {
            // 服务端定义的响应code码为0时请求成功
            // 使用Promise.resolve 正常响应
            return Promise.resolve(response.data)
        } else {
            // 使用Promise.reject 响应
            // Toast({message: response.data.message, position: 'bottom', duration: 1000});
            return Promise.reject(response.data)
        }
    }, error => {
        let message = ''
        console.log(error)
        if(error && error.response){
            switch (error.response.status) {
                case 401:
                    if(error.response.data.code === 2012){
                        // Toast({message: '请重新登录', position: 'bottom', duration: 1000});
                        // 判断token是否失效
                        // removeToken()
                        // if($vue.$getUserAgent() == 0){
                        //     try{
                        //         u.native.toLogin() 
                        //     }catch (e) {
                        //         console.log("原生方法未注入", error)
                        //     }
                        // }else{
                        //     try{
                        //         window.webkit.messageHandlers.toLogin.postMessage({});
                        //     }catch (e) {
                        //         console.log("ios方法未注入", error)
                        //     }
                        // }
                    }
                    return
                case 403 || 400:
                    message = error.response.data.path + ',' + error.response.data.message
                    break
                // case 500 || 502:
                //     message = '网络繁忙，请稍后再试'
                //     break
                // case 502:
                //     message = '连接服务器失败'
                //     break
                default:
                    message = error.response.data.message ? error.response.data.message : '网络繁忙，请稍后再试'
                    break
            }
            // Toast({message: message, position: 'bottom', duration: 1000});
            // 请求错误处理
            return Promise.reject(error)
        } else {
            message = '网络繁忙，请稍后再试'
            // Toast({message: message, position: 'bottom', duration: 1000});
            return Promise.reject(error)
        }
    }
)

export default service
