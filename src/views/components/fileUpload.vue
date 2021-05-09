<template>
  <div class="ele-upload-styl">
    <el-upload
      ref="fileUpload"
      :action="uploadProps.action"
      :headers="uploadProps.headers"
      list-type="picture-card"
      :show-file-list="false"
      :on-change="encFileEdit"
      :on-success="handleSuccess"
    >
      <div class="img-cont pr">
        <img slot="trigger" class="img-icon" src="@/assets/img/icon-附件.png" alt=""/>
        <span slot="tip" class="img-text ml06">附件</span>
      </div>
    </el-upload>
  </div>
</template>

<script>
// import { getAccessToken, getRefreshToken, getAccessTokenTTL } from "@/utils/auth";

export default {
  name: "fileUpload",
  components: {},
  props: {},
  computed: {
    userAccountID() {
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
  data() {
    return {
      // 提交图片 提交API
      // fileUploadApi: `${process.env.VUE_APP_BASE_API}/api/file/upload`,
      applyInfo:[],
    };
  },
  methods: {
    encFileEdit(file, fileList) {
      if (fileList.length > 1) {
        //这里只获取最后一次选择的文件
        fileList.splice(0, 1);
      }
      if (fileList.length > 0) {
        let fileName = fileList[0].name.substring(
          fileList[0].name.lastIndexOf(".") + 1
        );
        let extension1 = fileName === "xlsx";
        let extension2 = fileName === "xls";
        let extension3 = fileName === "docx";
        let extension4 = fileName === "doc";
        let extension5 = fileName === "pdf";
        if (!extension1 && !extension2 && !extension3 && !extension4 &&! extension5) {
          this.$refs.fileUpload.clearFiles();
          this.$notify({
            type: "error",
            title: "提示",
            message: "请选择附件文件类型",
          });
          // return false;
        } else {
          this.applyInfo = fileList[0].raw;
          // console.log(this.applyInfo);
        }
      }
    },
    handleSuccess(res) {
      console.log(res);
      if (res.code == 0) {
        this.$emit('fileData', res.item)
        this.$message.success("上传成功！");
      } else {
        this.$message.error("上传失败！");
      }
    },
  },
};
</script>

<style  lang="scss" scoped>
::v-deep .el-upload,
.el-upload--picture-card {
  // width: 50px;
  height: 24px;
  border: none;
  line-height: 0;
  display: block;
  background: #f5f6fb;
}
.el-upload {
  width: 50px;
}
.img-cont {
  width: 50px;
  height: 24px;
  background: #f5f6fb;
  .img-icon {
    color: #ccc;
  }
  .img-text {
    font-size: 12px;
    height: 24px;
    color: #000;
  }
}
</style>
