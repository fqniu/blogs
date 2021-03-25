import request from '@/service/index'
import postJson from "@/service/postJson"

// 获取地区筛选
/**
 * 无参数
 */
export const getCityArea = () => {
    return request({
        url: 'screen/intelligentDelivery/returnToCity',
        method: 'get',
    })
}

export const getPageData = (params) => {
    return request({
        url: '/screen/intelligentDelivery/selectAdvertSiteList',
        method: 'get',
        params
    })
}


/**
 * 搜索接口
 * */ 
export const search = (params) => {
    return request({
        url: `v3/search?q=${params.q}&t=all&p=1&s=0&tm=0&lv=-1&ft=0&l=&u=&ct=-1&pnt=-1&ry=-1&ss=-1&dct=-1&platform=pc`,
        method: 'get',
    })
}

/**
 * 模糊搜索
 * */ 
export const fuzzySearch = (params) => {
    return request({
        url: `v3/search?q=${params.q}&t=all&p=1&s=0&tm=0&lv=-1&ft=0&l=&u=&ct=-1&pnt=-1&ry=-1&ss=-1&dct=-1&platform=pc`,
        method: 'get',
    })
}


/**
 * 搜索提示
 * */ 
export const searchHint = () => {
    return request({
        url: `assemble/list/channel/pc_hot_word?channel_name=pc_hot_word&size=10&platform=pc&imei=10_30706525170-1612333398942-258444`,
        method: 'get',
    })
}


