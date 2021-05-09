<template>
  <div class="flex-center ipt-select">
    <div class="operation-text">{{title}}</div>
    <el-date-picker
      v-model="value"
      type="date"
      placeholder="选择日期"
      @change="change"
    ></el-date-picker>
  </div>
</template>

<script>
export default {
  name: 'InputSingleTime',
  data () {
    return {
      value: "",
    };
  },
  props:{
    title:{
      type:String,
      default:''
    }
  },
  methods: {
    // 时间
    change(val) {
      // console.log(val);
      // console.log(this.value);
      this.$emit('change',val)
    },
  },
}
</script>
<style  lang="scss" scoped>
@import "~@/styles/mixin.scss";
@import "~@/styles/variables.scss";
::v-deep .el-date-editor .el-range__icon {
  position: absolute;
  right: 0;
}
::v-deep .el-range-separator {
  color: #ccc;
}
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