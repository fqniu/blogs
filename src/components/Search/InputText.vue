<template>
  <div class="flex-center ipt-select">
    <div class="operation-text">{{title}}</div>
    <el-input
      v-model="iptValue"
      :placeholder="placeholder"
      @change="change"
      @input="input"
      :class="[width ==='120' ?'w120':'w240']"
      :disabled="disabled"
      :type="type"
      :autosize="{ minRows: 4, maxRows: 8 }"
    ></el-input>
  </div>
</template>

<script>
export default {
  name: 'InputText',
  data () {
    return {
      iptValue:this.val
    };
  },
  props:{
    val:{
      type:String,
      default:''
    },
    title:{
      type: String,
      default: ''
    },
    disabled:{
      type:Boolean,
      default:false
    },
    placeholder:{
      type:String,
      default:'请输入任务名称'
    },
    width:{
      type: String,
      default: '240'
    },
    value:{
      type:String,
      default:''
    },
    type:{
      type:String,
      defalut:'text'
    }
  },
  watch:{
    val(value){
      this.iptValue = value
    }
  },
  methods: {
    change(val){
      this.$emit('change',val)
    },
    input(val){
      this.$emit('input',val)
    }
  },
  components: {},
  created(){
    if(this.value){
      this.iptValue = this.value
    }
  },
  // mounted(){
  //   if(this.value){
  //     this.selectedValue = this.value
  //   }
  // }
}

</script>
<style  lang="scss" scoped>
@import "~@/styles/mixin.scss";
@import "~@/styles/variables.scss";

.ipt-select{
  .operation-text{
    font-size: 14px;
    margin-right: 10px;
    color: $menuActiveText;
  }
}
.w120{
  width: 120px;
}
.w240{
  width: 240px;
}
</style>
