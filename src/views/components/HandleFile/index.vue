<template>
  <div class="handle-file">
    <div class="flex-center file fs12 mb10" v-for="(item,idx) in filesList" :key="idx">
      <img src="@/assets/img/icon-附件.png" alt="">
      <div class="flex-center">
        <div class="file-name ellipse c-pointer">{{item.fileName}}</div>
        <!-- <div>pdf</div> -->
      </div>
      <div class="delete ml20"  @click.stop="deleteFile(item,idx)" v-if="deleteFileBtn">删除</div>
      <div class="dialog" v-show="showDialog == idx">
        <div class="dialog-title">是否删除附件“{{item.fileName}}”？</div>
        <div class="flex-center-center">
          <div class="sure c-pointer" @click.stop="sure(item)">确定</div>
          <div class="cancel c-pointer" @click.stop="cancel">取消</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  components: {},
  props: {
    filesList:{
      type:  Array,
      required: true,
      default:() => {
        return []
      }
    },
    deleteFileBtn:{
      type: Boolean,
      default: true,
    }
  },
  data () {
    return {
      fileUrl: "",
      showDialog: -1,
    };
  },
  methods: {
    deleteFile(item, idx){
      this.showDialog = idx
    },
    sure(value){
      this.showDialog = -1
      this.$emit('deleteFile',value)
    },
    cancel(){
      this.showDialog = -1
    }
  },
}

</script>
<style  lang="scss" scoped>
// @import "~@/styles/mixin.scss";
// @import "~@/styles/variables.scss";
.file{
  color: #ccc;
  text-decoration: underline;
  position: relative;
}
.file-name{
  width: 150px;
}
.dialog{
  position: absolute;
  z-index: 99;
  width: 246px;
  min-height: 120px;
  background: #fff;
  padding: 24px;
  box-shadow: 0px 2px 12px 0px rgba(167, 167, 167, 0.5);
  border-radius: 12px;
  left: 220px;
  top: 10px;
}
.dialog-title{
  font-size: 14px;
  text-align: center;
  color:#ccc;
  margin-bottom: 20px;
}
.delete{
  cursor: pointer;
}
.sure{
  width: 70px;
  height: 28px;
  text-align: center;
  line-height: 28px;
  border-radius: 6px;
  color: #fff;
  background: #ccc;
}
.cancel{
  width: 70px;
  height: 28px;
  text-align: center;
  line-height: 28px;
  border-radius: 6px;
  color: #ccc;
  border: 1px solid #ccc;
  margin-left: 10px;
}
</style>
