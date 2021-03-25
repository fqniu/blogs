import { getUserRouters } from '@/server4';
import {formateRouterTree,generateRouter} from '@/utils'

export default {
  async setUserRouters({commit,state}){
    const userRouters = await getUserRouters(state.uid),
    payload = formateRouterTree(userRouters);
    // console.log(userRouters);
    // console.log(payload);
    // console.log(generateRouter(payload));
    commit('setUserRouters',payload)
    commit('setAuth',true)
  }
}