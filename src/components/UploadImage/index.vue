<template>
  <div>
    <el-upload
      :action="uploadProps.action"
      :headers="uploadProps.headers"
      list-type="picture-card"
      multiple
      :show-file-list="false"
      :on-success="handleSuccess"
    >
      <div class="flex-center">
        <slot></slot>
      </div>
    </el-upload>
  </div>
</template>

<script>
import { getAccessToken, getRefreshToken, getAccessTokenTTL } from '@/utils/auth'
export default {
  name: "index",
  components:{},
  computed: {
    userAccountID(){
      return this.$store.state.user.userAccountID;
    },
    uploadProps() {
      return {
        action: `${process.env.VUE_APP_BASE_API}/api/image/upload`,
        headers: {
          // 接口可能要带token: "",
          Authorization: getAccessToken(),
        },
        data: {},
      };
    },
  },
  data() {
    return {

    };
  },
  methods: {
    handleSuccess(res) {
      console.log(res);
      if (res.code == 0) {
        this.$emit('imgData', res.item);
        this.$message.success('上传成功！');
      } else {
        this.$message.error('上传失败！');
      }
    },
  },
};
</script>

<style  lang="scss" scoped>
::v-deep .el-upload,
::v-deep .el-upload--picture-card{
  // width: 120px;
  height: 24px;
  height: 0;
  border: none;
  line-height: 0;
  display: block;
  background: #F5F6FB;
}
// ::v-deep .el-upload{
//   width: 50px;
// }
.img-cont{
  width: 50px;
  height: 24px;
  background: #F5F6FB;
  .img-icon{
    color: #ccc;
  }
  .img-text{
    font-size: 12px;
    height: 24px;
    color: #000;
  }
}
</style>
