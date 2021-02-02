import axios2 from 'axios';

// import {Toast} from 'vant';
// import {getToken,getAgentId} from '@/utils/util'
import config from '@/config'

const URL = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro
/**
 * 创建axios实例
 * @type {AxiosInstance}
 */
var instance = axios2.create({
    baseURL: URL,
    timeout: 10000,
});
/**
 * 请求参数处理
 */
instance.interceptors.request.use((config) => {
        const token = getToken()
        if (token) {
            config.headers['Authorization'] = 'Bearer ' + token
        }
        return config
    }
)


//响应拦截器即异常处理
instance.interceptors.response.use(
    (response) => {
        if (response.data.code === 0) {
            // 服务端定义的响应code码为0时请求成功
            // 使用Promise.resolve 正常响应
            return Promise.resolve(response.data)
        } else {
            // 使用Promise.reject 响应
            Toast({message: response.data.message, position: 'bottom', duration: 1000});
            return Promise.reject(response.data)
        }
    }, error => {
        let message = ''
        console.log(error)
        if (error && error.response) {
            switch (error.response.status) {
                case 401:
                    location.reload()
                    return
                case 403 || 400:
                    message = error.response.data.path + ',' + error.response.data.message
                    break
                case 500 || 502:
                    message = '网络繁忙，请稍等后再试'
                    break
                // case 502:
                //     message = '连接服务器失败'
                //     break
                default:
                    message = error.response.data.message ? error.response.data.message : '网络繁忙，请稍等后再试'
                    break
            }
            Toast({message: message, position: 'bottom', duration: 1000});
            // 请求错误处理
            return Promise.reject(error)
        } else {
            message = '连接服务器失败'
            Toast({message: message, position: 'bottom', duration: 1000});
            return Promise.reject(error)
        }
    }
)

export default instance
