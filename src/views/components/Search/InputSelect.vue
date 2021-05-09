<template>
   <div class="flex-center ipt-select">
    <div class="operation-text">{{title}}</div>
    <el-select
      v-model="value"
      :placeholder="placeholder"
      @change="change"
      :class="[width ==='120' ?'w120':'w240']"
    >
      <el-option
        v-for="item in options"
        :key="item.selectedValue"
        :label="item.label"
        :value="item.selectedValue"
      >
      </el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  name: 'InputSelect',
  props: {
    val:{
      type:String,
      default:''
    },
    title:{
      type: String,
      default: ''
    },
    options:{
      type: Array,
      default: ()=>{
        return []
      }
    },
    placeholder:{
      type:String,
      default:'全部'
    },
    width:{
      type: String,
      default: '120'
    }
  },
  data () {
    return {
      value:this.val
    };
  },
  watch:{
    val(value){
      this.value = value
    }
  },
  methods: {
    change(val){
      this.$emit('change',val)
    }
  },
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
