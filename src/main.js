import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入antd 
// import 'ant-design-vue/dist/antd.css';
// import Antd from 'ant-design-vue';
// Vue.use(Antd);
// import {Button} from 'ant-design-vue';
// Vue.component(Button.name, Button)

// 引入elementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './styles/element-variables.scss'
Vue.use(ElementUI);

// 适配
// require('@/utils/rem')
import 'lib-flexible'


// 全局样式必须放在ul框架后面
import 'css/base.scss';

import Sticky from './components/sticky/index'
Vue.use(Sticky)

// 全局混入
import mixins from './minxins'
Vue.mixin(mixins)

import {generateRouter} from '@/utils';
router.beforeEach(async (to, form, next)=>{
  if(!store.state.hasAuth){
    await store.dispatch('setUserRouters')
    const newRouters = generateRouter(store.state.userRouters)
    router.addRoutes(newRouters)
    console.log(newRouters);
    next({path:to.path})
  }else{
    next()
  }
})

// // 拖拽
// Vue.directive('drag', { // 全局弹窗拖拽指令
//     bind: function (el, binding, vnode) {
//         console.log("parent",el.parentNode) 
//         let oDiv = el;
//         let self = vnode.context;
//         oDiv.onmousedown = (e) => {
//             let disX = e.clientX - oDiv.offsetLeft;
//             let disY = e.clientY - oDiv.offsetTop;
//             console.log("1123",disX,disY);
//             document.onmousemove = (e) => {
//                 let left = e.clientX - disX;
//                 let top = e.clientY - disY;
//                 if (!left && !top) {
//                     oDiv.style.left = self.currentLeft;
//                     oDiv.style.top = self.currentTop;
//                 } else {
//                     oDiv.style.left = left + "px";
//                     oDiv.style.top = top + "px";
//                 }
//             };
//             document.onmouseup = (e) => {
//                 document.onmousemove = null;
//                 document.onmouseup = null;
//             };
//         };
//     },
//     // inserted : function (el, binding, vnode) {
//     //     console.log("parent",el.parentNode) 
//     //     let oDiv = el;
//     //     let self = vnode.context;
//     //     oDiv.onmousedown = (e) => {
//     //         let disX = e.clientX - oDiv.offsetLeft;
//     //         let disY = e.clientY - oDiv.offsetTop;
//     //         console.log("1123",disX,disY);
//     //         document.onmousemove = (e) => {
//     //             let left = e.clientX - disX;
//     //             let top = e.clientY - disY;
//     //             if (!left && !top) {
//     //                 oDiv.style.left = self.currentLeft;
//     //                 oDiv.style.top = self.currentTop;
//     //             } else {
//     //                 oDiv.style.left = left + "px";
//     //                 oDiv.style.top = top + "px";
//     //             }
//     //         };
//     //         document.onmouseup = (e) => {
//     //             document.onmousemove = null;
//     //             document.onmouseup = null;
//     //         };
//     //     };
//     // },
// })
// Vue.directive('drag', {
//     inserted(el) {
//         let switchPos = {
//             x: 10,
//             y: 85,
//             startX: 0,
//             startY: 0,
//             endX: 0,
//             endY: 0
//         }
//         el.addEventListener('touchstart', function (e) {
//             console.log(e)
//             switchPos.startX = e.touches[0].pageX
//             switchPos.startY = e.touches[0].pageY
//         })
//         el.addEventListener('touchend', function (e) {
//             switchPos.x = switchPos.endX
//             switchPos.y = switchPos.endY
//             switchPos.startX = 0
//             switchPos.startY = 0
//         })
//         el.addEventListener('touchmove', function (e) {
//             if (e.touches.length > 0) {
//                 let offsetX = e.touches[0].pageX - switchPos.startX
//                 let offsetY = e.touches[0].pageY - switchPos.startY
//                 let x = switchPos.x - offsetX
//                 let y = switchPos.y - offsetY
//                 if (x + el.offsetWidth > document.documentElement.offsetWidth) {
//                     x = document.documentElement.offsetWidth - el.offsetWidth
//                 }
//                 if (y + el.offsetHeight > document.documentElement.offsetHeight) {
//                     y = document.documentElement.offsetHeight - el.offsetHeight
//                 }
//                 if (x < 0) {
//                     x = 0
//                 }
//                 if (y < 0) {
//                     y = 0
//                 }
//                 el.style.right = x + 'px'
//                 el.style.bottom = y + 'px'
//                 switchPos.endX = x
//                 switchPos.endY = y
//                 e.preventDefault()
//             }
//         })
//     }
// })

// //在main.js中引入axios
// import axios from 'axios'
// //引入 utls.js
// import {domain} from './service2/utils'
// //引入 common.js
// import common from './service2/common'
// Vue.use(common)
// //配置axios
// //->1,模块一接口,url地址
// axios.defaults.baseM1URL = domain.Base_M1_URL
// //->2,模块二接口,url地址
// axios.defaults.baseM2URL = domain.Base_M2_URL
// //->3,模块三接口,url地址
// axios.defaults.baseM3URL = domain.Base_M3_URL
// //->4,模块四接口,url地址
// axios.defaults.baseM4URL = domain.Base_M4_URL

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

console.log(new Vue)
