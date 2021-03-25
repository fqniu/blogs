import axios from "axios";
// 请求拦截
axios.interceptors.request.use(function (config) {
    const token = window.sessionStorage.getItem("token");
    config.headers["xxx"] = token;
    config.headers["Content-Type"] = "application/json; charset=UTF-8";
    return config
});
// 请求响应
axios.interceptors.response.use(
    function (response) {
        return response;
    },
    error => {
        console.log(error)
    }
);

let apis = {
    hzHttp: process.env.VUE_APP_HZURL,
    requestByHzUrl: '/api/v2/requestByHzUrl'
}
export const requestByHzUrl = (url, param = {}) => {
    let t = new Date().getTime()
    return axios.post(apis.requestByHzUrl + `?t=${t}`, {
        url: `${apis.hzHttp}${url}`,
        param
    })
}

// export const jtApi = (url, param = {}, requestByHzUrl = '/v2/requestByHzUrl') => {
//     return axios.post('/api/smart-city' + requestByHzUrl, {
//         url: `${apis.hzHttp}${url}`,
//         param,
//     }, {
//         headers: {
//             "x-tif-uid": 1234567890
//         }
//     })
// }