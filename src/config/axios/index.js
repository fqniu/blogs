/*
 * @Description: file content
 * @Author: Wenmin He
 * @Date: 2020-06-15 09:41:17
 * @LastEditors: Wenmin He
 * @LastEditTime: 2020-12-15 10:35:18
 */
import axios from "axios";
import qs from 'qs'

// 请求拦截
axios.interceptors.request.use(function (config) {
    //请求request通用处理
    config.headers["xxx"] = '0123456789';
    if (config.paramType === 'formData') {
        config.headers["Content-Type"] = "application/x-www-form-urlencoded"
        config.data = qs.stringify(config.data)
    } else {
        config.headers["Content-Type"] = "application/json";
    }
    return config
});

// 请求响应
axios.interceptors.response.use(
    function (response) {
        if (response.data) {
            return response.data;
        }
    },
    error => {
        console.log('error', error)
        // 登录失效处理
        if (error.response.status === 401) {
            window.parent.location.href = process.env.VUE_APP_LOGIN_URL
        }
        return error.response.data
    }
);

// 请求
const fetch = {
    post: (url, params) => {
        let baseUrl = process.env.VUE_APP_API_BASE;
        return new Promise((resolve, reject) => {
            axios.post(`${baseUrl}${url}`, params).then(res => {
                resolve(res)
            }, err => {
                reject(err)
            })
        })
    },
    get: (url, params) => {
        let baseUrl = process.env.VUE_APP_API_BASE;
        return new Promise((resolve, reject) => {
            axios.get(`${baseUrl}${url}`, {
                params: params
            }).then(res => {
                resolve(res)
            }, err => {
                reject(err)
            })
        })
    },
}
export default fetch