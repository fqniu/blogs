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
        isLoading:true,
    })
}