<template>
  <div  
    class="btn fs12" 
    :class="[icon?'pd014':'pd023']"
    :style="{background:background, borderColor:border, color:color}"
  >
    <div v-if="icon" class="mr10">
      <slot/>
    </div>
    <div>{{text}}</div> 
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {

    };
  },
  props:{
    text:{
      type:String,
      default:''
    },
    // height:{
    //   type:String,
    //   default:'28'
    // },
    border:{
      type:String,
      default:'#fff'
    },
    background:{
      type:String,
      default:'#fff'
    },
    color:{
      type:String,
      default:'#fff'
    },
    icon:{
      type:Boolean,
      default:false
    }
  },
  methods: {
    handleBtn(){
      console.log(111);
    }
  }
}
</script>

<style  lang="scss" scoped>
@import "~@/styles/mixin.scss";
@import "~@/styles/variables.scss";
.btn{
  display: flex;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-style: solid;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  // width: 100%;
  height: 100%;
}
// .borderDefault{
//   border: 1px solid #fff;
// }
// .borderChange{
//   border: 1px solid red;
// }
// .bgDefault{
//   background: #fff;
// }
// .bgChange{
//   background: #fff;
// }
.mr10{
  margin-right: 10px;
}
.pd014{
  padding: 0 14px;
}
</style>