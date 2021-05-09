<template>
  <div>
    <div>学生操作</div>
    <!-- <ImgzoomIn :imagesList="imagesList" :lookFlag="lookFlag" />
    <ImgzoomIn :imagesList="imagesList"  />
    <el-radio-group v-model="radio">
      <el-radio :label="3" >备选项</el-radio>
      <el-radio :label="6" >备选项</el-radio>
      <el-radio :label="9" >备选项</el-radio>
    </el-radio-group>
    <el-checkbox-group v-model="checkList">
      <el-checkbox label="复选框 A" disabled></el-checkbox>
      <el-checkbox label="复选框 B" disabled></el-checkbox>
      <el-checkbox label="复选框 C" disabled></el-checkbox>
      <el-checkbox label="禁用" disabled></el-checkbox>
      <el-checkbox label="选中且禁用" disabled></el-checkbox>
    </el-checkbox-group> -->
    <TaskContent :itemContent="itemContent"></TaskContent>
    <div v-for="item in testdata" :key="item.id">
      <test :item="item" @handle="handle" @add="add" @subtract="subtract"></test>
    </div>
  </div>
</template>
<script>
// import ImgzoomIn from '@/components/ImageZoomIn';
import TaskContent from './components/TaskContent';
import test from './components/test';

export default {
  name: "StudentOperate",
  components:{
    // ImgzoomIn,
    TaskContent,
    test
  },
  data() {
    return {
      lookFlag:false,
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
      radio: 3,
      checkList: ['选中且禁用','复选框 A'],
      // 题目类型 1-单选 2-多选 3-文本 4-图片上传 5-附件上传 
      itemContent:[
        {
          createTime: "2021-04-13 16:58:53",
          id: 10424,
          item: "多选1|多选2|多选3|多选4|",
          mustBe: null,
          questionDescribe: "2222",
          questionType: 2,
          status: 1,
          taskDetailExecute: null,
          taskId: 22,
          title: "222",
          updateTime: null,
        },  {
          createTime: "2021-04-13 16:58:53",
          id: 10425,
          item: "单选1|单选2|单选3|单选4|单选5|",
          mustBe: null,
          questionDescribe: "2222",
          questionType: 1,
          status: 1,
          taskDetailExecute: null,
          taskId: 22,
          title: "222",
          updateTime: null,
        }, {
          createTime: "2021-04-13 16:58:53",
          id: 10426,
          item: '',
          mustBe: null,
          questionDescribe: "2222",
          questionType: 3,
          status: 1,
          taskDetailExecute: null,
          taskId: 22,
          title: "222",
          updateTime: null,
        }, {
          createTime: "2021-04-13 16:58:53",
          id: 10427,
          item: 'http://211.97.0.116:8077/StaticFile/store/task_execute/file/529820EA03274D4CBE26AFF9658D2B47.jpg|',
          mustBe: null,
          questionDescribe: "2222",
          questionType: 4,
          status: 1,
          taskDetailExecute: null,
          taskId: 22,
          title: "222",
          updateTime: null,
        },{
          createTime: "2021-04-13 16:58:53",
          id: 10427,
          item: "http://211.97.0.116:8077/StaticFile/store/task_execute/file/529820EA03274D4CBE26AFF9658D2B47.jpg|http://211.97.0.116:8077/StaticFile/store/task_execute/file/E6CF6429AE594322B7A81B62CCE15539.jpg|http://211.97.0.116:8077/StaticFile/store/task_execute/file/785C304046764B01A9DB66B0C1FD1E19.jpg|",
          mustBe: null,
          questionDescribe: "2222",
          questionType: 4,
          status: 1,
          taskDetailExecute: null,
          taskId: 22,
          title: "222",
          updateTime: null,
        },{
          createTime: "2021-04-13 16:58:53",
          id: 10428,
          item: "contest_templates1.xlsx|contest_templates2.xlsx|contest_templates3.xlsx|",
          mustBe: null,
          questionDescribe: "2222",
          questionType: 5,
          status: 1,
          taskDetailExecute: null,
          taskId: 22,
          title: "222",
          updateTime: null,
        },
      ],
      testdata:[
        {id:1, val:1},
        {id:2, val:2},
        {id:3, val:3},
        {id:4, val:4},
      ],
    };
  },
  created() {},
  computed: {},
  methods: {
    handle(value){
      console.log(value);
      console.log(this.$children);
    },
    add(value){
      console.log(value);
      value.val++
    },
    subtract(value){
      console.log(value);
      value.val--
    }
  },
};
</script>
<style lang="scss" scoped>
::v-deep .el-radio__input.is-disabled.is-checked .el-radio__inner::after{
  background: url('../assets/img/icon-已选择.png');
}
::v-deep .el-radio__input.is-disabled.is-checked .el-radio__inner{
  background: url('../assets/img/icon-已选择.png');
  background-size: 12px;
}
::v-deep .el-radio__input.is-checked .el-radio__inner::after{
  background: url('../assets/img/icon-已选择true.png');
  background-size: 12px;
}
::v-deep .el-radio__input.is-checked .el-radio__inner{
  background: url('../assets/img/icon-已选择true.png');
  background-size: 12px;
  border-color: #5843BE;
}
::v-deep .el-radio__inner::after{
  width: 0;
  height: 0;
}
</style>