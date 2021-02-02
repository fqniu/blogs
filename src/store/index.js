import Vue from 'vue'
import Vuex from 'vuex'
import demo from './module/demo'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        tip:'欢迎使用vuex'
    },
    getters:{
        tip:state=>state.tip
    },
    mutations: {
        SET_TIP(state,data){
            state.tip = data
        }
    },
    actions: {},
    modules: {
        demo
    }
})
