<template>
   <div class="bgfff bdr20 mt20 fs14 pd2330">
    <div class="flex-center-evenly w1032 h28">
      <div class="content-item">
        <div class="content-item-title fs14">内容{{ idx+1 }}</div>
      </div>
      <div class="flex-center h28">
        <Button text="删除内容" background="#fff" color="#4646E6" border="#4646E6" class="delete"  @click.native="handleDeleteBtn(idx)" v-if="idx>0||idx==1"></Button>
        <Button text="新增内容" background="#4646E6" color="#fff" border="#4646E6" class="delete ml10"  @click.native="handleAddBtn(idx)"></Button>
      </div>
    </div>
    <div class="w1032 mt23">
      <el-form
        :model="contentSetForm"
        :rules="rules"
        ref="contentSetForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <div class="task-name pr">
          <el-form-item label="内容标题" prop="contTitle">
            <el-input
              v-model="contentSetForm.contTitle"
              placeholder="请输入内容标题（100字符以内）"
              @input="checkiptTitle()"
            ></el-input>
            <div class="ipt-taskName-length">{{checkIptTitleLen}}/100</div>
          </el-form-item>
        </div>
        <div class="task-detail">
          <el-form-item label="内容描述" prop="contDesc">
            <el-input
              type="textarea"
              v-model="contentSetForm.contDesc"
              placeholder="请输入内容描述（200字符以内）"
              @input="checkiptDesc()"
            ></el-input>
             <div class="ipt-taskDesc-length">{{checkIptDescLen}}/200</div>
          </el-form-item>
        </div>
        <div class="selected-item">
          <el-form-item label="提交形式" prop="submitform">
            <el-select v-model="contentSetForm.submitform" placeholder="请选择">
              <!-- 1-单选 2-多选 3-文本 4-图片上传 5-附件上传 -->
              <el-option label="单选" value="1"></el-option>
              <el-option label="多选" value="2"></el-option>
              <el-option label="文本" value="3"></el-option>
              <el-option label="图片上传" value="4"></el-option>
              <el-option label="附件上传" value="5"></el-option>
            </el-select>
          </el-form-item>
        </div>
        <div class="flex-center" v-if="contentSetForm.submitform < 3">
          <div class="selected-item">
            <el-form-item
              :label="labelVal(iptItem.label, iptIdx)"
              :prop="contentSetForm.iptDataObj[iptIdx].value"
              v-for="(iptItem, iptIdx) in contentSetForm.iptDataObj"
              :key="iptIdx"
            >
              <div class="flex-center h28">
                <el-input v-model="contentSetForm.iptDataObj[iptIdx].value" placeholder="请输入内容"></el-input>
                <img src="@/assets/img/icon-删减.png" alt="" class="delete-btn ml14" @click="deleteInputSelected(iptItem, iptIdx)" v-if="iptIdx>0">
                <img src="@/assets/img/icon-添加.png" alt="" class="add-btn ml14" @click="addInputSelected">
              </div>
            </el-form-item>
          </div>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import Button from './Button';

export default {
  name: 'fromItem',
  components: {
    Button,
  },
  props: {
    idx:{
      type:Number,
      default:1
    }
  },
  computed:{
    // option(){
    //   this.contentSetForm.iptDataObj.map(element => {
    //     if(element){
    //       return element.value
    //     }
    //   });
    // }
  },
  data () {
    return {
      form:'form',
      taskId:'',
      contentData: {},
      checkIptTitleLen: 0,
      checkIptDescLen: 0,
      contentSetForm: {
        contTitle: "",
        contDesc: "",
        submitform: "",
        iptDataObj:[
          {
            label:'选项',
            value:"",
          }
        ]
      },
      rules: {
        contTitle: [
          { required: true, message: "请输入任务名称", trigger: "blur" },
          { min: 1, max: 100, message: "长度在100个字符以内", trigger: "blur" }
        ],
        option:[
          { required: true, message: "请输入选项", trigger: "blur" },
        ],
        submitform: [
          { required: true, message: "请选择提交形式", trigger: "change" }
        ],
      },
    };
  },
  methods: {
    // 输入长度限制 内容标题
    checkiptTitle(){
      var txtVal = this.contentSetForm.contTitle.length;
      this.checkIptTitleLen = txtVal;
    },
    // 输入长度限制 内容描述
    checkiptDesc(){
      var txtVal = this.contentSetForm.contDesc.length;
      this.checkIptDescLen = txtVal;
    },
    labelVal(val,num){
      // console.log(val,num);
      return `${val}${num + 1}`;
    },
    submitForm(formName) {
      this.$refs[formName][i].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    deleteInputSelected(item,index){
      console.log('delete', item, index);
      this.contentSetForm.iptDataObj.splice(index, 1)
    },
    addInputSelected(){
      console.log('add');
      this.contentSetForm.iptDataObj.push({
        label:'选项',
        value:"",
      })
    },
    handleDeleteBtn(val){
      console.log('删除');
      this.$emit('deleteItem',val);
    },
    handleAddBtn(val){
      console.log('添加');
      this.$emit('addItem', val);
    }
  },
}
</script>

<style  lang="scss" scoped>
@import "~@/styles/mixin.scss";
@import "~@/styles/variables.scss";
::v-deep .el-textarea__inner{
  height: 110px;
}
::v-deep .el-select{
  width: 260px;
}
.selected-item ::v-deep .el-input{
  width: 260px;
}
.w1032{
  width: 1032px;
}
.content-item{
  width: 50%;
  height: 36px;
  position: relative;
  color: #fff;
  .content-item-title{
    position: absolute;
    left: -20px;
    top: 0;
    background: #ccc;
    padding: 8px 12px 8px 37px;
  }
}
.delete{
  padding: 0 11px;
}
.delete-btn,.add-btn{
  width: 20px;
  height: 20px;
  cursor: pointer;
}
.ipt-taskName-length{
  position: absolute;
  top: 50%;
  right: 20px;
  color: #CCCDD8;
  transform: translateY(-50%);
}
.ipt-taskDesc-length{
  position: absolute;
  bottom: 0;
  right: 20px;
  color: #CCCDD8;
}
</style>
