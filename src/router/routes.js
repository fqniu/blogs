// function load(component) {
//     return resolve => require([`../views/${component}/${component}`], resolve)
// }

const routes = [
    {
        path: '/',
        component: resolve => require(['@/views/myhome.vue'], resolve),
    },
    {
        path: '/home',
        name: 'home',
        component: resolve => require(['@/views/myhome.vue'], resolve),
        meta: {
            title: '首页'
        },
        // children: [{
        //     path: '/home/homePage',
        //     name: 'homePage',
        //     component: resolve => require(['@/views/home/homePage.vue'], resolve),
        // }, {
        //     path: '/home/blogs',
        //     name: 'blogs',
        //     component: resolve => require(['@/views/home/blogs.vue'], resolve),
        // }, {
        //     path: '/home/detailsCenter',
        //     name: 'detailsCenter',
        //     component: resolve => require(['@/views/home/detailsCenter.vue'], resolve),
        // }, {
        //     path: '/home/mine',
        //     name: 'mine',
        //     component: resolve => require(['@/views/home/mine.vue'], resolve),
        // }]
    },
    {
        path: '*',
        name:'NotFound',
        component:()=>import ('../views/NotFound.vue'),
        // redirect: {
        //     path: '/'
        // }
    }
];
export default routes;
