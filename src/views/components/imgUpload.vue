<template>
  <div class="ele-upload-styl">
    <el-upload
      :action="uploadProps.action"
      :headers="uploadProps.headers"
      list-type="picture-card"
      multiple
      :show-file-list="false"
      :on-success="handleSuccess"
    >
      <div class="img-cont pr">
        <img  slot="trigger" class="img-icon" src="@/assets/img/icon-附件.png" alt="">
        <span slot="tip" class="img-text ml06">图片</span>
      </div>
    </el-upload>
  </div>
</template>

<script>
// import { getAccessToken, getRefreshToken, getAccessTokenTTL } from '@/utils/auth'
export default {
  name: 'imgUpload',
  components: {},
  props: {},
  computed: {
    userAccountID(){
      return this.$store.state.user.userAccountID;
    },
    uploadProps() {
      return {
        action: `http://localhost:5000/api/upload/uploadImg`,
        headers: {
          // 接口可能要带token: "",
          // Authorization: getAccessToken(),
        },
        data: {},
      };
    },
  },
  data () {
    return {
      // 提交图片 提交API
      // imgUploadApi: `${process.env.VUE_APP_BASE_API}/api/image/upload`,
    };
  },
  methods: {
    handleSuccess(res) {
      console.log(res);
      if (res.code == 'success') {
        this.$emit('imgData', res.filename);
        this.$message.success('上传成功！');
      } else {
        this.$message.error('上传失败！');
      }
    },
  },
}

</script>
<style  lang="scss" scoped>
::v-deep .el-upload,
::v-deep .el-upload--picture-card{
  // width: 50px;
  height: 24px;
  border: none;
  line-height: 0;
  display: block;
  background: #F5F6FB;
}
::v-deep .el-upload{
  width: 50px;
}
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
