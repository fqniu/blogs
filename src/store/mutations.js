export default {
  setAuth(state,auth){
    state.hasAuth = auth
  },
  setUserRouters(state,userRouters){
    state.userRouters = userRouters
  },
  addBtnPermission(state,addBtnPermission){
    state.addBtnPermission = addBtnPermission
  },
  // one(state, one){
  //   return state.btnPermission.includes(one)
  // },
  // showPermission(state, value){
  //   // console.log(store.getters.btnPermission);
  //   console.log(value);
  //   console.log(value[1].includes(value[0]));
  //   return value[1].includes(value[0])
  // }
}