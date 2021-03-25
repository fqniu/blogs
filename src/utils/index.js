// 格式化树形结构
function formateRouterTree(data) {
    let parents = data.filter(p => p.pid === 0),
        children = data.filter(c => c.pid !== 0)
    dataToTree(parents, children)

    function dataToTree(parents, children) {
        parents.map(p => {
            children.map((c, i) => {
                if (c.pid === p.id) {
                    let _c = JSON.parse(JSON.stringify(children))
                    _c.splice(i, 1);
                    dataToTree([c], _c)
                    if (p.children) {
                        p.children.push(c)
                    } else {
                        p.children = [c]
                    }
                }
            })
        })
    }
    return parents
}

// 转为vue 路由格式
function generateRouter(userRouters){
  let newRouters = userRouters.map(r => {
    let routes = {
      path:r.path,
      name:r.name,
      component:() => import(`@/views/${r.name}.vue`)
    }
    if(r.children){
      routes.children = generateRouter(r.children)
    }
    return routes
  })
  return newRouters
}

// 搜索的节流 delay 
// 节流：就是在一段时间内触发一次 
// 防抖：就是在一段时间后触发，但是在这段时间内又输入，要重新计时
function throttle(fn,delay){
  var t = null,
    begin = new Date().getTime()

  return function(){
    var _self = this,
      args = arguments,
      cur = new Date().getTime()

    clearTimeout(t)
    if(cur -begin >= delay){
      fn.apply(_self,args)
      begin = cur
    }else{
      t = setTimeout(function(){
        fn.apply(_self,args)
      },delay)
    }
  }
}
export {
  formateRouterTree,
  generateRouter,
  throttle
} 
