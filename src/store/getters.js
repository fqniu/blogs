export default {
  // setAuth(state,auth){
  //   state.hasAuth = auth
  // },
  // setUserRouters(state,userRouters){
  //   state.userRouters = userRouters
  // },
  btnPermission(state){
    let arr = []
    function addBtn(val){
      val.forEach(item=>{
        arr.push(item.meta.btnPermission[0])
        if(item.children){
          addBtn(item.children)
        }
      })
    }
    addBtn(state.addBtnPermission)
    return arr
  },
  one(state, getters){
    return getters.btnPermission.includes(state.one)
  },
  Student(state, getters){
    return getters.btnPermission.includes(state.Student)
  }
  // showPermission(state){
  //   console.log(state.getters.btnPermission); 
  //   let arr = ['one','two','three','four','five', "Course", "Operate", "CourseInfoData", "CourseAdd", "Student", "StudentOperate", "StudentAdd" ];
  //   return state.getters.btnPermission.includes()
  //   // !btnPermission.includes(binding.value)
  // }
  // one(){
  //   let allBtn =  this.btnPermission
  //   return allBtn.includes('one')
  // },
  // Student(){
  //   let allBtn =  this.btnPermission
  //   return allBtn.includes('Student')
  // }
}