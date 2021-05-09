<template>
  <div>
    <!-- <el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button>
    <el-dialog title="任务报备" :visible.sync="dialogFormVisible">
      <div class="row-line"></div>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="申请报备" name="0">用户管理</el-tab-pane>
        <el-tab-pane label="我发起的" name="1">配置管理</el-tab-pane>
        <el-tab-pane label="待我审批" name="2">角色管理</el-tab-pane>
        <el-tab-pane label="我已审批" name="3">定时任务补偿</el-tab-pane>
      </el-tabs>
    </el-dialog> -->

    <!-- <div v-for="item in contentData" :key="item.id">
      <el-radio-group v-model="item.val" size="small" v-if="item.status ==1">
        <el-radio :label="elm.val" v-for="elm in item.options" :key="elm.id">{{elm.val}}</el-radio>
      </el-radio-group>
      <el-checkbox-group v-model="item.val" v-if="item.status == 2">
        <el-checkbox :label="elm.val" v-for="elm in item.options" :key="elm.id">{{elm.val}}</el-checkbox>
      </el-checkbox-group>
    </div>
    <div @click="showdata('ruleForm')">显示数据</div> -->

    <!-- <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <div class="selected-time">
        <el-form-item label="选择时间" required  prop="startDate">
          <InputTime title="" @change="handleStartTime($event)" :val="startTimeVal" />
          <InputTimeTwo title=""  v-model="ruleForm.startDate" />
        </el-form-item>
      </div>
      <el-form-item label="任务类型" prop="taskType" required>
        <el-select v-model="ruleForm.taskType" placeholder="请选择任务类型"  @change="taskTypeChange">
          <el-option label="门店任务" value="1"></el-option>
          <el-option label="个人任务" value="2"></el-option>
        </el-select>

      </el-form-item>
      <el-form-item label="选择门店" prop="taskStore" required v-if="ruleForm.taskType==1">
        <el-select v-model="ruleForm.taskStore" placeholder="请选择门店" @change="selectedStore">
          <el-option :label="task.name" :value="task.id" v-for="(task,idx) in stores" :key="idx"></el-option>
          <el-option label="门店任务" value="1"></el-option>
          <el-option label="个人任务" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="选择任务" prop="task"  required>
        <el-select v-model="ruleForm.task" placeholder="请选择任务" multiple  @change="selectedTask">
          <el-option :label="item.name" :value="item.id" v-for="(item,idx) in tasks" :key="idx"></el-option>
           <el-option label="门店任务" value="1"></el-option>
          <el-option label="个人任务" value="2"></el-option>
        </el-select>
      </el-form-item>
      <div class="task-detail pr">
        <el-form-item label="报备原因" prop="taskDesc" required>
          <div class="flex-center upload-position">
            <ImgUpload @imgData="imgData" />
            <FileUpload  class="ml10" @fileData="fileData" />
          </div>
          <el-input
            type="textarea"
            v-model="ruleForm.taskDesc"
            placeholder="请输入报备原因"
            maxlength="200"
            @input="checkiptTaskDesc()"
          ></el-input>
          <div class="ipt-taskDesc-length">{{checkIptTaskDescLen}}/200</div>
          <div class="img-list mt10 flex">
            <ImgZoomIn :imagesList="imagesList" @deleteImg="deleteImg"></ImgZoomIn>
          </div>
          <div class="dotted-line" v-if="imagesList.length > 0 && filesList.length > 0"></div>
          <div class="file-item">
            <HandleFile :filesList="filesList" @deleteFile="deleteFile"></HandleFile>
          </div>
        </el-form-item>
      </div>
      <div class="btn flex-center-center mt70 h28 mb50">
        <Button text="确认报备" background="#4646E6" color="#fff" class="content-set"  @click.native="submitForm('ruleForm')" ></Button>
        <Button text="取消报备" background="#fff" color="#4646E6" border="#4646E6" class="ml10 reset"  @click.native="resetForm('ruleForm')" ></Button>
      </div>
    </el-form> -->
    <!-- <contentSet></contentSet> -->
    <contentSetTest></contentSetTest>
  </div>
  
</template>
<script>
import Button from './components/Button';
import ImgZoomIn from './components/ImageZoomIn';
import imgUpload from './components/imgUpload';
// import contentSet from './components/contentSet';
import contentSetTest from './components/contentSetTest';

export default {
  name: "StudentAdd",
  components:{
    // Button,
    // imgUpload,
    // ImgZoomIn,
    // contentSet,
    contentSetTest
  },
  data() {
    return {
      dialogFormVisible: false,
      activeName: '0',
      contentData:[],
      hotelId:'',
      // 表格
      stores:[],
      tasks:[],
      ruleForm: {
        taskType:"",
        taskDesc:"",
        startDate:[],
        taskStore:"",
        task:[],
      },
      rules: {
        taskType:[
          { required: true, type:'string', message: "请选择任务类型" }
        ],
        taskDesc: [
          { required: true, message: "请输入报备原因" },
          { max: 100, message: "长度在200个字符以内" }
        ],
        startDate:[
          { required: true, message: "请输入开始时间" },
        ],
        task:[
          { required: true, message: "请选择报备任务" },
        ],
        taskStore:[
          { required: true, message: "请选择任务门店" },
        ],
      },
      // 输入长度
      checkIptTaskNameLen: 0,
      checkIptTaskDescLen:0,
      // 提交图片 提交API
      imagesList:[],
      filesList:[],
      // 提交数据
      taskDetailIds:"",
    };
  },
  created() {
    this.contentData = [
      {
        id:1,
        name:'fqniu',
        val:'',
        status:1,
        options:[
          {id:101,val:'备选项1',xxx:2},
          {id:102,val:'备选项2',xxx:2},
        ]
      },  {
        id:2,
        name:'fqniu',
        val:[],
        status:2,
        options:[
          {id:201,val:'备选项3',xxx:2},
          {id:202,val:'备选项4',xxx:2},
        ]
      },  {
        id:3,
        name:'fqniu',
        val:"",
        status:1,
        options:[
          {id:301,val:'备选项5',xxx:2},
          {id:302,val:'备选项6',xxx:2},
        ]
      },{
        id:4,
        name:'fqniu',
        val:[],
        status:2,
        options:[
          {id:301,val:'备选项5',xxx:2},
          {id:302,val:'备选项6',xxx:2},
        ]
      },
    
    ]
  },
  computed: {},
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    showdata(ruleForm){
      console.log(this.contentData);
      console.log(this.ruleForm);
      this.$refs[ruleForm].validate(valid => {
        if (valid) {
          // 提交任务报备
          console.log('任务报备');
          // this.handleContentSetBtn();
          // this.$refs[formName].resetFields();
          // this.$emit('changeMyTaskReoprt')
        } else {
          this.$message.error('请完善任务设置');
          return false;
        }
      });
    },
     // 任务类型
    taskTypeChange(value){
      console.log(value);
      if(value == 1){
        this.getTaskHotelList();
      } else {
        this.hotelId = "";
        this.ruleForm.taskStore = "";
        this.getTaskReportList();
      }
    },
    // 选择门店
    selectedStore(value){
      console.log('门店', value);
      // let str = ''
      // value.forEach(item => {
      //   str += item + ','
      // })
      this.hotelId = value;
      this.ruleForm.startDate = []
      this.getTaskReportList();
    },
    // 选择任务
    selectedTask(){
      console.log('任务');
      if(this.ruleForm.startDate.length == 0){
        return
      }
      console.log(this.ruleForm.task);
      let str = ''
      this.ruleForm.task.forEach(item => {
        str += item + ','
      })
      this.taskDetailIds = str;
      console.log(str);
    },
    // 输入长度限制 任务描述
    checkiptTaskDesc(){
      var txtVal = this.ruleForm.taskDesc.length;
      this.checkIptTaskDescLen = txtVal;
    },
    // 图片数据
    imgData(value){
      this.imagesList.push({
        imgUrl: value,
      })
    },
    // 图片删除
    deleteImg(value){
      this.imagesList.forEach((item,idx) => {
        if(item.imgUrl == value.imgUrl){
          this.imagesList.splice(idx, 1)
        }
      })
    },
    // 附件数据
    fileData(value){
      this.filesList.push({
        fileName:value.fileName,
        fileUrl:value.fileUrl,
      });
    },
    // 附件删除
    deleteFile(value){
      this.filesList.forEach((item,idx) => {
        if(item.fileUrl == value.fileUrl){
          this.filesList.splice(idx, 1)
        }
      })
    },
    // 提交表单
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // 提交任务报备
          console.log('任务报备');
          this.handleContentSetBtn();
          this.$refs[formName].resetFields();
          this.$emit('changeMyTaskReoprt')
        } else {
          this.$message.error('请完善任务设置');
          return false;
        }
      });
    },
    // 重置表单 取消报备
    resetForm(formName) {
      this.$refs[formName].resetFields();
      // this.$emit('closeReport', false);
    },
     // 跳转内容设置页面
    async handleContentSetBtn(){
      // 图片文件
      let imgUrl = ''
      if(this.imagesList.length > 0){
        this.imagesList.forEach(item=>{
          imgUrl += item.imgUrl + '|'
        })
      };
      let fileName = '';
      let fileUrl = '';
      if(this.filesList.length > 0){
        this.filesList.forEach(item=>{
          fileName += item.fileName + '|';
          fileUrl += item.fileUrl + '|'
        })
      };
      // 提交数据
      let data = {
        userId: this.userAccountID,
        startTime:this.ruleForm.startDate[0] == undefined ? '' : this.ruleForm.startDate[0],
        endTime:this.ruleForm.startDate[1] == undefined ? '' : this.ruleForm.startDate[1],
        hotelId: this.hotelId,
        taskDetailIds: this.taskDetailIds,
        taskActionType: this. ruleForm.taskType,
        imgUrl: imgUrl,
        fileName: fileName,
        fileUrl: fileUrl,
      }
      console.log(data);
      let res = await taskReportAdd(data)
      console.log(res);
      this.$message.success('任务报备成功');
    }
  },
};
</script>
<style lang="scss" scoped>
.row-line{
  width: 100%;
  height: 1px;
  background: #ccc;
}
::v-deep .el-tabs__nav-wrap::after{
  height: 0;
}
::v-deep .el-tabs__nav{
  width: 100%;
  display: flex;
  justify-content: space-around;
  background: #ccc;
}
::v-deep .el-tabs__active-bar{
  height: 0;
}
::v-deep .el-tabs__item{
  padding: 0;
}
::v-deep .is-active{
  &::after{
    content: '';
    width: 100%;
    height: 2px;
    background: blue;
    position: absolute;
    bottom: 0;
    left: 0;
  }
}
</style>