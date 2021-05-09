<template>
  <div class="flex-center ipt-select">
    <div class="operation-text" v-if="title">{{title}}</div>
    <el-date-picker
      v-model="value"
      type="daterange"
      range-separator="—"
      start-placeholder="开始时间"
      end-placeholder="结束时间"
      value-format="yyyy-MM-dd"
      @blur="handleDate"
      :class="[width ==='120' ?'w120':'w240']"
      @change="change"
    ></el-date-picker>
  </div>
</template>

<script>
export default {
  name: 'InputTime',
  data () {
    return {
      value: this.val,
    };
  },
  props:{
    val:{
      type:Array,
      default:()=>{
        return []
      }
    },
    title:{
      type:String,
      default:'时间'
    },
    width:{
      type: String,
      default: '240'
    }
  },
  watch:{
    val(newVal){
      if (newVal == null) {
       this.value = [];
      }
      this.value = newVal
      console.log('watch',newVal);
    }
  },
  methods: {
    // 时间
    change(val) {
      this.$emit('change',val)
    },
    handleDate(value){
      // console.log(value);
    }
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
