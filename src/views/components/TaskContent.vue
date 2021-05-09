<template>
  <div>
    <div class="task-content bdr20">
      <div class="fs14 title">任务内容</div>
      <!-- 题目类型 1-单选 2-多选 3-文本 4-图片上传 5-附件上传 -->
      <div v-for="(content,idx) in contentsData" :key="idx">
        <!-- 01 -->
        <div v-if="content.questionType==4">
          <div class="mg12 fs12 title">{{idx + 1}}、拍照（酒店拍照）</div>
          <div class="wrapper bdr08">
            <!-- <ImageZoomIn :imagesList="imgStrToArr(content.item)" @deleteImg="deleteImg($event, imgStrToArr(content.item), idx, contentsData)"></ImageZoomIn> -->
            <ImageZoomIn :imagesList="content.imagesList" @deleteImg="deleteImg($event, content.imagesList, idx, contentsData)"></ImageZoomIn>
            <UploadImage @imgData="imgData($event, content.imagesList)" class="mt20">
              <div class="photo-btn fs14">
                <Button text="拍照" background="#4646E6" color="#fff" :icon="true">
                  <img src="@/assets/img/icon-拍照上传.png" alt="" class="phone-icon-img">
                </Button>
              </div>
            </UploadImage>
          </div>
        </div>

        <!-- 02 -->
        <div class="mt30" v-if="content.questionType==1">
          <div class="mg12 fs12 title">{{idx + 1}}、单选（请单选）</div>
          <div>
            <el-radio-group v-model="content.radioVal" @change="changeRadio(content.radioVal)">
              <el-radio  v-for="radio in strToArr(content.item)" :label="radio" :key="radio">{{radio}}</el-radio>
            </el-radio-group>
          </div>
        </div>

        <!-- 03 -->
        <div class="mt30" v-if="content.questionType==2">
          <div class="mg12 fs12 title">{{idx + 1}}、多选（请多选）</div>
          <div>
            <el-checkbox-group v-model="content.checkboxVal" @change="changeCheckbox(content.checkboxVal)">
              <el-checkbox v-for="checkbox in strToArr(content.item)" :label="checkbox" :key="checkbox">{{checkbox}}</el-checkbox>
            </el-checkbox-group>
          </div>
        </div>

        <!-- 04 -->
        <div class="mt30" v-if="content.questionType==3">
          <div class="mg12 fs12 title">{{idx + 1}}、文本输入</div>
          <div>
            <InputText title="" :disabled="false"  @change="handleIptTaskDetail" :val="content.textVal" v-model="content.textVal" placeholder="请输入文本" type="textarea" class="task-detail"></InputText>
          </div>
        </div>

        <!-- 05 -->
        <div class="mt30" v-if="content.questionType==5">
          <div class="mg12 fs12 title">{{idx + 1}}、附件上传</div>
          <div class="wrapper bdr08">
            <HandleFile :filesList="content.filesList" @deleteFile="deleteFile($event, content.filesList, idx, contentsData)"></HandleFile>
            <UploadFile @fileData="fileData($event, content.filesList)">
              <div class="photo-btn fs14">
                <Button text="附件" background="#4646E6" color="#fff" :icon="true">
                  <img src="@/assets/img/icon-附件上传.png" alt="" class="file-icon-img">
                </Button>
              </div>
            </UploadFile>
          </div>
        </div>

      </div>

      <!-- 审核信息 -->
      <!-- <div class="mt30">
        <div class="mg12 fs12 title">审核信息</div>
        <div class="step-check-info bdr08 ofhidden">
          <Steps :dataSource="dataSource"></Steps>
        </div>
      </div> -->

      <!-- 提交 -->
      <div class="flex-center-center h28 mt70 fs12">
        <Button text="保存提交" background="#4646E6" color="#fff" @click.native="handleSaveSubmitBtn" class="m05"></Button>
        <Button text="存为草稿" background="#4646E6" color="#fff" @click.native="handleSaveDraftBtn" class="m05"></Button>
        <Button text="授权代执行" background="#4646E6" color="#fff" @click.native="handleAuthBtn" class="m05"></Button>
        <Button text="重新填写" background="#fff" color="#4646E6" border="#4646E6" @click.native="handleResetBtn" class="m05"></Button>
      </div>
    </div>

    <!-- 驳回原因 -->
    <!-- <div class=" task-content mt30 bdr20 fs12">
      <div class="fs14 title mb12">驳回原因</div>
      <InputText title="" :disabled="false" :value="rejectReason" placeholder="请输入文本" type="textarea" class="task-detail"></InputText>
      <div class="flex-center-center h28 mt70">
        <Button text="确定" background="#4646E6" color="#fff" @click.native="handleSureBtn" class="m05"></Button>
        <Button text="取消" background="#fff" color="#4646E6" border="#4646E6" @click.native="handleCancelBtn" class="m05"></Button>
      </div>
    </div> -->

  </div>
</template>

<script>
import Button from './Button';
import InputText from './Search/InputText';
import UploadImage from './UploadImage';
import ImageZoomIn from './ImageZoomIn';
import UploadFile from './UploadFile';
import HandleFile from './HandleFile';

// import { taskDetailUserExecute } from '@/api/myTask';

export default {
  name: 'TaskContent',
  components: {
    Button,
    InputText,
    UploadImage,
    ImageZoomIn,
    UploadFile,
    HandleFile
  },
  props:{
    itemContent:{
      type: Array,
      default:()=>{
        return []
      }
    },
    id:{
      // type: Number,
      default: 0,
    }
  },
  data () {
    return {
      taskDetail: '',
      iptTaskDetail:'',
      contentsData: [],
      // dataSource:[
      //   {
      //     name:'执行完成',
      //     auditor:'城市便捷广州白云山店',
      //     time:'2021-03-16',
      //     checked:true,
      //   },{
      //     name :'一级审批',
      //     auditor:'张起灵（执行官）',
      //     time:'2021-03-16',
      //     checked:true,
      //   },{
      //     name :'二级审批',
      //     auditor:'吴邪（区域总）',
      //     time:'2021-03-16',
      //     checked:true,
      //   },{
      //     name :'三级审批',
      //     auditor:'王胖（战区运营）',
      //     time:'',
      //     checked:false,
      //   }
      // ],
      // 图片上传
      // 附件上传
      disabled: false,
      // 拒绝 原因
      rejectReason:'',

      // 选中的数据
      radioArr:[],
       // 提交图片 提交API
      imagesList:[
        {
          imgUrl:'http://211.97.0.116:8077/StaticFile/store/task_execute/file/529820EA03274D4CBE26AFF9658D2B47.jpg'
        },
        {
          imgUrl:'http://211.97.0.116:8077/StaticFile/store/task_execute/file/E6CF6429AE594322B7A81B62CCE15539.jpg'
        },
        {
          imgUrl:'http://211.97.0.116:8077/StaticFile/store/task_execute/file/785C304046764B01A9DB66B0C1FD1E19.jpg'
        },
      ],
      filesList:[
        {
          fileName: "contest_templates1.xlsx",
          fileUrl:'http://211.97.0.116:8077/StaticFile/store/task_execute/file/75EB73BDC92242F7B5390E4A446BDD41.xlsx'
        },
        {
          fileName: "contest_templates2.xlsx",
          fileUrl:'http://211.97.0.116:8077/StaticFile/store/task_execute/file/75EB73BDC92242F7B5390E4A446BDD42.xlsx'
        },
        {
          fileName: "contest_templates3.xlsx",
          fileUrl:'http://211.97.0.116:8077/StaticFile/store/task_execute/file/75EB73BDC92242F7B5390E4A446BDD43.xlsx'
        },
      ],
    };
  },
  watch:{
    // itemContent(newVal){
    //   this.contentsData = newVal
    // }
  },
  computed:{
    userAccountID(){
      return this.$store.state.user.userAccountID;
    },
  },
  created(){
    // console.log(this.itemContent);
    this.handleData(this.itemContent)
  },
  activated(){
    // console.log(this.itemContent);
    this.handleData(this.itemContent)
  },
  methods: {
    // 数据处理
    handleData(itemContent){
      var arr = []
      itemContent.forEach(item => {
        // 题目类型 1-单选 2-多选 3-文本 4-图片上传 5-附件上传
        switch (item.questionType) {
          case 1:
            // console.log(1);
            var obj = {}
            obj.radioVal = ''
            obj.questionType = item.questionType
            obj.item = item.item
            arr.push(obj)
            break;
          case 2:
            // console.log(2);
            var obj = {}
            obj.checkboxVal = []
            obj.questionType = item.questionType
            obj.item = item.item
            arr.push(obj)
            break;
          case 3:
            // console.log(3);
            var obj = {}
            obj.textVal = ''
            obj.questionType = item.questionType
            obj.item = item.item
            arr.push(obj)
            break;
          case 4:
            // console.log(4);
            var obj = {}
            obj.questionType = item.questionType
            obj.item = item.item
            obj.imagesList = this.imgStrToArr(item.item)
            arr.push(obj)
            break;
          case 5:
            // console.log(5);
            var obj = {}
            obj.questionType = item.questionType
            obj.item = item.item
            obj.filesList = this.filesStrToArr(item.item)
            arr.push(obj)
            break;
          default:
            break;
        }
      })
      this.contentsData = arr;
      // console.log('arr=',arr);
    },
    // 数据转换
    strToArr(value){
      if(value){
        // item: "选项内容1|选项内容2|选项内容3|选项内容4|"
        let arr = value.split('|')
        arr.pop()
        return arr
      }
    },
    // 图片数据处理
    imgStrToArr(value){
      // console.log(value);
      if(value){
        let arr = value.split('|')
        arr.pop()
        let newArr = []
        arr.forEach(item => {
          var obj = {}
          obj.imgUrl = item
          newArr.push(obj)
        })
        return newArr
      }
    },
    // 附件数据处理
    filesStrToArr(value){
      // console.log(value);
      if(value){
        let arr = value.split('|')
        arr.pop()
        let newArr = []
        arr.forEach(item => {
          var obj = {}
          obj.fileName = item
          // obj.fileUrl = item.fileUrl
          newArr.push(obj)
        })
        return newArr
      }
    },
    // 清除数据处理
    clearData(itemContent){
        var arr = []
        itemContent.forEach(item => {
        // 题目类型 1-单选 2-多选 3-文本 4-图片上传 5-附件上传
        switch (item.questionType) {
          case 1:
            console.log(1);
            var obj = {}
            obj.radioVal = ''
            obj.questionType = item.questionType
            obj.item = item.item
            arr.push(obj)
            break;
          case 2:
            console.log(2);
            var obj = {}
            obj.checkboxVal = []
            obj.questionType = item.questionType
            obj.item = item.item
            arr.push(obj)
            break;
          case 3:
            console.log(3);
            var obj = {}
            obj.textVal = ''
            obj.questionType = item.questionType
            obj.item = item.item
            arr.push(obj)
            break;
          case 4:
            console.log(4);
            var obj = {}
            obj.questionType = item.questionType
            obj.item = item.item
            obj.imagesList = []
            arr.push(obj)
            break;
          case 5:
            console.log(5);
            var obj = {}
            obj.questionType = item.questionType
            obj.item = item.item
            obj.filesList = []
            arr.push(obj)
            break;
          default:
            break;
        }
      })
      this.contentsData = arr;
      console.log('arr=',arr);
    },
    // 单选框
    changeRadio(value){
      console.log(value);
      // this.radioArr.push(value)
    },
    // 复选框
    changeCheckbox(value){
      console.log(value);
    },
    // 文本输入
    handleIptTaskDetail(value){
      this.taskDetail = value
    },
    // 图片数据
    imgData(value1,value2){
      value2.push({
        imgUrl: value1,
      })
    },
    // 图片删除
    deleteImg(value1, value2, index, value){
      console.log(value1, value2, index, value);
      value2.forEach((item, idx) => {
        if(item.imgUrl == value1.imgUrl){
          value2.splice(idx, 1)
        }
      })
      console.log(value1,value2);
    },
    // 附件数据
    fileData(value1,value2){
      value2.push({
        fileName:value1.fileName,
        fileUrl:value1.fileUrl,
      });
    },
    // 附件删除
    deleteFile(value1, value2, index, value){
      console.log(value1, value2, index, value);
      value2.forEach((item, idx) => {
        if(item.fileName == value1.fileName){
          value2.splice(idx, 1)
        }
      })
    },
    // 提交数据
    async submitData(flag,executeFlag){
      let params = {
        taskDetailId: this.id,
        userAccountId: this.userAccountID,
        questionIds:'111',
        questionAnswer:'222',
        // 提交类型 0-草稿 1-真实提交
        submitType: flag,
        // 代执行标记 0-非代执行 1-代执行
        helpExecuteFlag: executeFlag,
      }
      console.log(params);
      // let res = await taskDetailUserExecute(params)
      // console.log(res);
    },
    handleSaveSubmitBtn(){
      console.log("保存提交");
      console.log(this.contentsData);
      // this.submitData(1, '')
      // this.$router.push({ path: '/taskInfo/list' })
    },
    handleSaveDraftBtn(){
      console.log("存为草稿");
      // this.submitData(0, '')
    },
    handleAuthBtn(){
      console.log("授权代执行");
      //  this.submitData(1, 1)
    },
    handleResetBtn(){
      console.log("重新填写");
      this.clearData(this.contentsData)
    },
    handleSureBtn(){
      console.log('确定');
    },
    handleCancelBtn(){
      console.log('取消');
    },
  },
}
</script>

<style  lang="scss" scoped>
// @import "~@/styles/mixin.scss";
// @import "~@/styles/variables.scss";
::v-deep .task-detail .el-textarea__inner{
  width: 986px;
  height: 110px;
  background: #F5F6FB;
}
::v-deep .ipt-select .operation-text{
  margin-right: 0;
}
::v-deep .el-radio{
  margin-right: 0px;
  width: 120px;
}
::v-deep .el-checkbox{
  margin-right: 0px;
  width: 120px;
}
.task-content{
  padding: 40px 43px 70px;
  background: #fff;
}
.wrapper{
  width: 986px;
  min-height: 110px;
  border: 1px solid #ccc;
  padding: 20px 18px 60px;
}
.photo-btn{
  width: 120px;
  height: 36px;
}
.title{
  font-weight: 700;
  color: #ccc;
}
.phone-icon-img{
  width: 16px;
  height: 13px;
}
.file-icon-img{
  width: 22px;
  height: 22px;
}
.step-check-info{
  width: 986px;
  height: 142px;
  border: 1px solid #ccc;
  padding: 25px 28px;
}
</style>
