function load(component) {
    return resolve => require([`../views/${component}/${component}`], resolve)
}

const routes = [
    {
        path: '/',
        name: 'home',
        component: load('home'),
        meta: {
            title: '首页'
        }
    },
    {
        path: '/mine',
        name: 'mine',
        component: load('mine'),
        meta: {
            title: '我的'
        }
    },
    {
        path: '*',
        redirect: {
            path: '/'
        }
    }
];
export default routes;
