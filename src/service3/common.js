//1->common.js中引入axios
import Axios from 'axios'
import {domain} from './utils'
console.log(domain)
Axios.defaults.timeout = 10000
// import { message } from 'ant-design-vue'

/**
 * 请求参数处理
 */
Axios.interceptors.request.use((config) => {
    console.log(config)
    config.method === 'post'
        ? config.data = qs.stringify({...config.data})
        : config.params = {...config.params} 

    switch (config.item) {
        case 'M1':
            Axios.defaults.baseURL = domain.Base_M1_URL
            break;
        case 'M2':
            Axios.defaults.baseURL = domain.Base_M2_URL
            break;
        case 'M3':
            Axios.defaults.baseURL = domain.Base_M3_URL
            break;
        default:
            Axios.defaults.baseURL = domain.Base_M4_URL
    }  
    // message.config({
    //     top: `100px`,
    //     duration: 2,
    //     maxCount: 3,
    // });
    return config
})

//响应拦截器即异常处理
Axios.interceptors.response.use((response) => {
    console.log(response)
    // Toast.clear();
    if (response.data.code === 0) {
        // 服务端定义的响应code码为0时请求成功
        // 使用Promise.resolve 正常响应
        return Promise.resolve(response.data)
    } else if(response.data.code == 5000){
        // 使用Promise.reject 响应
        // Toast({message: response.data.message, position: 'bottom', duration: 1000});
        return Promise.reject(response.data)
    }
}, error => {
    console.log("请求错误-------------", error);
})

export default Axios 

// //2->对get请求传递过来的参数处理
// function paramsToUrl(url, params) {
//     if (!params) return url
//     for (var key in params) {
//         if (params[key] && params[key] != 'undefined') {
//             if (url.indexOf('?') != -1) {
//                 url += '&' + '' + key + '=' + params[key] || '' + ''
//             } else {
//                 url += '?' + '' + key + '=' + params[key] || '' + ''
//             }
//         }
//     }
//     return url
// }

// //3->在common.js中封装公用方法-----封装请求的方法
// function requireData(url, params, type, item) {
//     if (!url) return false
//     switch (item) {
//         case 'M1':
//             url = Axios.defaults.baseM1URL + url
//             break;
//         case 'M2':
//             url = Axios.defaults.baseM2URL + url
//             break;
//         case 'M3':
//             url = Axios.defaults.baseM3URL + url
//             break;
//         default:
//             url = Axios.defaults.baseM4URL + url
//     }
//     if (type === 'get') {
//         url = paramsToUrl(url, params)
//         return new Promise((resolve, reject) => {
//             Axios.get(url, params).then(res => {
//                 resolve(res.data)
//             }).catch(err => {
//                 reject(err)
//             })
//         })
//     } else {
//         return new Promise((resolve, reject) => {
//             Axios.post(url, params).then(res => {
//                 resolve(res.data)
//             }).catch(err => {
//                 reject(err)
//             })
//         })
//     }
// }

// export default {
//     install(Vue, options) {
//         //->接口1的请求数据方法
//         Vue.prototype.reqM1Service = function (url, params, type) {
//             return requireData.call(this, url, params, type, 'M1')
//         }
//         //->接口2的请求数据方法
//         Vue.prototype.reqM2Service = function (url, params, type) {
//             return requireData.call(this, url, params, type, 'M2')
//         }
//         //->接口3的请求数据方法
//         Vue.prototype.reqM3Service = function (url, params, type) {
//             return requireData.call(this, url, params, type, 'M3')
//         }
//         //->接口4的请求数据方法
//         Vue.prototype.reqM4Service = function (url, params, type) {
//             return requireData.call(this, url, params, type, 'M4')
//         }
//     }
// }
