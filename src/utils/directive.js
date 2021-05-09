import Vue from 'vue'

Vue.directive('permission', {
  inserted(el, binding, vnode) {
    // console.log('vnode.context=',el, binding, vnode);
    // let btnPermission = vnode.context.$route.meta.btnPermission;
    // console.log(btnPermission);
    let btnPermission = ['one','two','three','four','five'];
    // console.log('btnPermission', el.parentNode);
    !btnPermission.includes(binding.value) && el.parentNode.removeChild(el);
  }
});
