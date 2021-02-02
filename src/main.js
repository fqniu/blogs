import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'css/base.scss'

// 全局混入
import mixins from './minxins'
Vue.mixin(mixins)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
