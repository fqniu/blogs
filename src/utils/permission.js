// import { constantRoutes } from '@/router'
// import { menuConfig } from '@/config'
// import Layout from '@/layout'

/*
 * 构造树形菜单
 * @param {Array} data 需要处理的扁平数组
 * @param {String} pid 父级id
 * @return
 * */
function toTreeData(data, pid) {
  console.log('data=', data);
    function tree(id) {
        let arr = [];
        data.filter(item => {
            return item.parentID === id;
        }).forEach(item => {
            arr.push({
                id: item.functionID,
                code: item.functionCode,
                name: item.functionName,
                path: item.url,
                key: item.functionCode,
                parentID: item.parentID,
                children: tree(item.functionID),
                meta: {},
                isMenu:item.functionType
            });
        })
        // console.log('构造树形=',arr);
        return arr;
    }
    return tree(pid);
}

/*
 * 构造树形菜单 menu
 * @param {Array} data 需要处理的扁平数组
 * @param {String} pid 父级id
 * @return
 * */
function toTreeMenuData(data, pid) {
    function tree(id) {
        let arr = [];
        data.filter(item => {
            return item.parentId === id;
        }).forEach(item => {
            arr.push({
                code: item.code,
                name: item.name,
                path: item.url,
                parentId: item.parentId,
                children: tree(item.id),
                meta: {},
            });
        })
        // console.log('构造树形菜单=',arr);
        return arr;
    }
    return tree(pid);
}

/*
 * 构造路由数据结构
 * @param {Array} tree 需要处理的树形数据结构
 * @param {Object} config 映射配置
 * @return
 * */
// function toRouteData(tree, config) {
//     let menu = []
//     tree.map(item => {
//         let children = []
//         item.children.map(child => {
//             let btnPermission = []
//             child.children.map(button => btnPermission.push(button.code))
//             config[child.code] && children.push({
//                 path: (child.path.indexOf('edit') !== -1 || child.path.indexOf('view') !== -1) ? `${child.path}/:id` : child.path,
//                 name: config[child.code].name,
//                 component: config[child.code].component,
//                 meta: { title: child.name, activeMenu: item.path, btnPermission: btnPermission },
//                 isMenu:child.isMenu == "MENU" ? true : false,
//                 // hidden: true
//             })
//         })
//         config[item.code] && menu.push({
//             path: item.path,
//             name: config[item.code].name,
//             component: Layout,
//             redirect: `${item.path}/list`,
//             meta: {
//                 title: item.name,
//                 icon: config[item.code].icon
//             },
//             children: children
//         })
//     })
//     // menu.push({
//     //     path: '*',
//     //     redirect: '/404',
//     //     hidden: true
//     // })
//     console.log('构造路由数据结构menu=',menu);
//     return menu;
// }

// function test(value){
//   item.children.map(child => {
//     let btnPermission = []
//     console.log('child=',child);
//     child.children.map(button => btnPermission.push(button.code))
//     let routes = {
//       path: (child.path.indexOf('edit') !== -1 || child.path.indexOf('view') !== -1) ? `${child.path}/:id` : child.path,
//       name: config[child.code].name,
//       component: config[child.code].component,
//       meta: { title: child.name, activeMenu: item.path, btnPermission: btnPermission },
//       // meta: { title: child.name },
//       isMenu:child.isMenu == "MENU" ? true : false,
//       // hidden: true
//       children: test(child.children)
//     }
//     config[child.code] && children.push(routes)
//   })
// }
// test(item)

/*
 * 构造路由数据结构
 * @param {Array}  tree 需要处理的树形数据结构
 * @param {Object} config 映射配置
 * @param {flag} flag  用于判断重定向的标识
 * @return 
 * */
function generateRouter(tree, config, flag){
  let newRouters = tree.map(r => {
    console.log('r=',r);
    console.log('r.children=',r.children);
    let btnPermission = []
    r.children.map(button => btnPermission.push(button.code))
    let routes = {
      path:(r.path.indexOf('edit') !== -1 || r.path.indexOf('view') !== -1) ? `${r.path}/:id` : r.path,
      name: config[r.code].name,
      component: config[r.code].component,
      meta:{ title: r.name,  btnPermission: btnPermission },
      isMenu: r.isMenu == "MENU" ? true : false,
    }
    // 用于判断重定向的标识
    if(flag){
      routes.redirect =  `${r.path}/list`;
    }
    if(r.children.length > 0){
      routes.children = generateRouter(r.children, config, false)
    }
    return routes
  })
  return newRouters
}

function toRouteData(tree, config) {
  let menu = []
  console.log('tree=', tree);
  tree.map(item => {
    // console.log('item=', item);
    let children = []
    item.children.map(child => {
      let btnPermission = []
      // console.log('child=',child);
      // console.log('child.children=',child.children);
      child.children.map(button => btnPermission.push(button.code))
      var routes = {
        path: (child.path.indexOf('edit') !== -1 || child.path.indexOf('view') !== -1) ? `${child.path}/:id` : child.path,
        name: config[child.code].name,
        component: config[child.code].component,
        // meta: { title: child.name },
        meta: { title: child.name, activeMenu: item.path, btnPermission: btnPermission },
        isMenu:child.isMenu == "MENU" ? true : false,
        // hidden: true
        children:[]
      }
      config[child.code] && children.push(routes)
    })

    config[item.code] && menu.push({
      path: item.path,
      name: config[item.code].name,
      component: Layout,
      redirect: `${item.path}/list`,
      meta: {
          title: item.name,
          icon: config[item.code].icon
      },
      children: children
    })
  })
  console.log('构造路由数据结构menu=',menu);
  return menu;
}

const state = {
    routes: [],
    addRoutes: [],
    menuList:[]
}

const mutations = {
    SET_ROUTES: (state, routes) => {
        state.addRoutes = routes
        state.routes = constantRoutes.concat(routes)
    },
    SET_MENU_ROUTES: (state, routes) => {
        state.menuList = routes
    },
}

const actions = {
    generateRoutes({ commit }, {pageList,menuList}) {
        return new Promise(resolve => {
            // console.log("page=",pageList);
            // console.log("menu=",menuList);
            let treeData = toTreeData(pageList, '')
            let menuData = toTreeMenuData(menuList, '')
            // let menuData = toTreeData(menuList, menuList.parentId)
            // console.log('treeData=',treeData);
            // console.log('menuData=',menuData);
            let accessedRoutes = toRouteData(treeData, menuConfig());
            let menuListRoutes = toRouteData(menuData, menuConfig());
            // console.log('generateRoutes=',accessedRoutes);
            // console.log('menuListRoutes=',menuListRoutes);
            commit('SET_ROUTES', accessedRoutes)
            commit('SET_MENU_ROUTES', menuListRoutes)
            resolve(accessedRoutes)
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
