import request  from '../service2/common'

console.log(request)
// 获取地区筛选
/**
 * 无参数
 */
export const getCityArea = () => {
    return request({
        url: '/screen/intelligentDelivery/returnToCity',
        type: 'get',
        item:'M3'
    })
}