<template>
  <div>
    <!-- <loading :ready="ready"></loading> -->
    <div>首页</div>
    <!-- <div>
      <div class="flex">
        <div class="user-name">用户名字</div>
        <el-input v-model="input" placeholder="请输入内容" @input="searchAction(input)"></el-input>
      </div>
      <ul v-if="searchResult.length > 0">
        <li v-for="(item, i) in searchResult" :key="i">
          <div>
            {{ item.course_name }}
          </div>
        </li>
      </ul>
      <ul v-else>
        <li v-for="(item, i) in courseData" :key="i">
          <div>
            {{ item.course_name }}
          </div>
        </li>
      </ul>
    </div>
    <div class="test"></div> -->

    <!-- <div class="img-wrapper">
      <ImgzoomIn :imgUrl="imagesList" @deleteImg="deleteImg"></ImgzoomIn>
      <div>上传图片</div>
    </div> -->

    <div>
      <!-- {{treeSelected}} -->
      <!-- <Tree></Tree> -->
      <!-- <TreeHotel :treeFormData="treeFormData" @treeSelectedData="treeSelectedData"></TreeHotel> -->
      <TreeUser ref="treeUser" :testFunction="btn"></TreeUser>
    </div>

    <div @click="btn">删除</div>

    <!-- <el-checkbox-group v-model="selectedPauseDay">
       <li v-for="(item,idx) in 31" :key="idx" class="task-period-list-item">
         <el-checkbox :label="item">{{ item }}日</el-checkbox>
       </li>
       <li class="task-period-list-item">
         <el-checkbox :label=32 >最后一日</el-checkbox>
       </li>
    </el-checkbox-group>
    <el-checkbox-group v-model="selectedPauseWeek">
      <li v-for="(item) in weekList" :key="item.week" class="task-period-list-item">
        <el-checkbox :label="item.val">星期{{ item.week }}</el-checkbox>
      </li>
    </el-checkbox-group>
    <el-checkbox-group v-model="selectedPauseMonth">
      <li v-for="(item, idx) in 12" :key="idx" class="task-period-list-item">
        <el-checkbox :label="item" v-if="item < 10">0{{ item }}月</el-checkbox>
        <el-checkbox :label="item" v-else>{{ item }}月</el-checkbox>
      </li>
    </el-checkbox-group> -->
    <!-- <el-tree
      :data="data"
      show-checkbox
      default-expand-all
      node-key="label"
      ref="tree"
      highlight-current
      :props="defaultProps"
      @check="getCheckNape"
    >
    </el-tree>

    <div class="buttons">
      <el-button @click="getCheckedNodes">通过 node 获取</el-button>
      <el-button @click="getCheckedKeys">通过 key 获取</el-button>
      <el-button @click="setCheckedNodes">通过 node 设置</el-button>
      <el-button @click="setCheckedKeys">通过 key 设置</el-button>
      <el-button @click="resetChecked">清空</el-button>
    </div> -->

    <!-- <div v-permission="'one'">1111111</div>
    <div v-permission="'two'">2222222</div>
    <div v-permission="'three'">3333333</div>
    <div v-permission="'four'">4444444</div>
    <div v-permission="'five5'" v-if="true">555555555</div>
    <div>addBtnPermission = {{addBtnPermission}}</div>
    <div>btnPermission = {{btnPermission}}</div>
    <div v-if="one">one</div>
    <div v-if="Student">Student</div>
    <div>
      <ul>
        <div style="display:flex" v-for="(item,idx) in treeSelectedTest" :key="idx">
          <li >{{item.label}}</li>
          <button @click="deleteTreeSelected(item)">删除</button>
        </div>
      </ul>
    </div> -->

    <!-- <div class="flex single pr">
      <el-date-picker
        v-model="value1"
        type="date"
        placeholder="开始时间"
        disabled
        class="hiddenIcon"
      >
      </el-date-picker>
      <div class="line-date">-</div> 
      <el-date-picker
        v-model="value2"
        type="date"
        placeholder="结束时间"
        :picker-options="pickerOptions"
        class="showIcon"
      >
      </el-date-picker>
    </div> -->

    <!-- <el-date-picker
      v-model="value"
      type="daterange"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      unlink-panels
      disabled
    >
    </el-date-picker> -->

    <!-- <InputTimeTwo :val="value"></InputTimeTwo> -->
    <!-- <el-checkbox-group v-model="checkList">
      <el-checkbox :label="1">复选框 A</el-checkbox>
      <el-checkbox :label="2">复选框 B</el-checkbox>
      <el-checkbox :label="3">复选框 C</el-checkbox>
    </el-checkbox-group>-->
    {{checkList}} 
    <el-checkbox-group v-model="checkList">
      <el-checkbox v-for="(item,idx) in content" :label="String(idx+1)" :key="item.name" :checked="item.b"  @change="changeEvent($event,item)">{{item.name}}</el-checkbox>
    </el-checkbox-group>
  </div>
</template>
<script>
// import ImgzoomIn from '@/components/ImageZoomIn';
// import Tree from './components/Tree';
// import TreeHotel from './components/Tree/TreeHotel';
import TreeUser from './components/Tree/TreeUser';
// import InputTimeTwo from '@/components/Search/InputTimeTwo';

import courseData from "@/data/course";
import {throttle} from '@/utils';
  
export default {
  name: "myhome",
  components:{
    // ImgzoomIn,
    // Tree,
    // TreeHotel,
    TreeUser,
    // InputTimeTwo
  },
  data() {
    return {
      checkList:[],
      // content:['牛','富','强'],
      content:[
      {
        id:1,
        name:'牛',
        b:false,
      },{
        id:2,
        name:'富',
        b:false,
      },{
        id:3,
        name:'强',
        b:false,
        }
      ],
      courseData,
      searchResult:[],
      input:'',
      ready: false,
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
      treeFormData:[
        {
          label: '一级 1',
          organizationType:'store',
          children: [{
            label: '二级 1-1',
            organizationType:'store',
            children: [{
              label: '三级 1-1-1',
              organizationType:'SHOP',
            }]
          }]
        }, {
          label: '一级 2',
          organizationType:'store',
          children: [{
            label: '二级 2-1',
            organizationType:'store',
            children: [{
              label: '三级 2-1-1',
              organizationType:'SHOP',
            }]
          }, {
            label: '二级 2-2',
            organizationType:'store',
            children: [{
              label: '三级 2-2-1',
              organizationType:'SHOP',
            },{
              label: '三级 2-2-2',
              organizationType:'SHOP',
            }]
          }]
        }, {
          label: '一级 3',
          organizationType:'store',
          children: [{
            label: '二级 3-1',
            organizationType:'store',
            children: [{
              label: '三级 3-1-1',
              organizationType:'SHOP',
            },{
              label: '三级 3-1-2',
              organizationType:'SHOP',
            },{
              label: '三级 3-1-3',
              organizationType:'SHOP',
            }]
          }, {
            label: '二级 3-2',
            organizationType:'store',
            children: [{
              label: '三级 3-2-1',
              organizationType:'SHOP',
            }]
          },
          {
            label: '二级 3-3',
            organizationType:'store',
             children: [{
              label: '三级 3-3-1',
              organizationType:'SHOP',
            }]
          }, 
          {
            label: '二级 3-4',
            organizationType:'SHOP',
          },
            {
            label: '二级 3-5',
            organizationType:'store',
          },
          ]
          }
        ],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      treeSelected:[],
      data: [{
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }],
        // defaultProps: {
        //   children: 'children',
        //   label: 'label'
        // }
      treeSelectedTest:[],
      pickerOptions: {
          disabledDate(time) {
            return time.getTime() < Date.now();
          },
          // shortcuts: [{
          //   text: '今天',
          //   onClick(picker) {
          //     picker.$emit('pick', new Date());
          //   }
          // }, {
          //   text: '昨天',
          //   onClick(picker) {
          //     const date = new Date();
          //     date.setTime(date.getTime() - 3600 * 1000 * 24);
          //     picker.$emit('pick', date);
          //   }
          // }, {
          //   text: '一周前',
          //   onClick(picker) {
          //     const date = new Date();
          //     date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
          //     picker.$emit('pick', date);
          //   }
          // }]
      },
      value1: '2021-04-27',
      value2: '2021-04-28',
      value: ['2021-04-27', '2021-04-28'],
      // value: ['2021-04-27',new Date()],
      selectedPauseDay:[1, 2, 3, 32],
      selectedPauseWeek:[1,3,7],
      selectedPauseMonth:[1,5,7],
      weekList:[{
        val:1,
        week:'一',
        text:'星期一'
        },{
        val:2,
        week:'二',
        text:'星期二'
        },{
        val:3,
        week:'三',
        text:'星期三'
        },{
        val:4,
        week:'四',
        text:'星期四'
        },{
        val:5,
        week:'五',
        text:'星期五'
        },{
        val:6,
        week:'六',
        text:'星期六'
        },{
        val:7,
        week:'日',
        text:'星期日'
        }
      ],
    };
  },
  created() {
    setTimeout(() => {
      this.ready = true
    }, 3000);
  },
  computed: {
    addBtnPermission(){
      return this.$store.state.addBtnPermission
    },
    btnPermission(){
      return this.$store.getters.btnPermission
    },
    one(){
      return this.$store.getters.one
    },
    Student(){
      return this.$store.getters.Student
    }
    // one(){
    //   let allBtn =  this.btnPermission
    //   return allBtn.includes('one')
    // },
    // Student(){
    //   let allBtn =  this.btnPermission
    //   return allBtn.includes('Student')
    // }
  },
  methods: {
    // // 使用节流前
    // searchAction(e){
    //   console.log(e);
    //   const iptValue = e.target.value
    //   this.searchResult = this.courseData.filter(item=>{
    //     if(item.course_name.includes(iptValue)){
    //       return item
    //     }
    //   })
    // },
    // 使用节流后
    // searchAction:throttle(function(e){
    //   console.log(e);
    //   const iptValue = e.target.value
    //   this.searchResult = this.courseData.filter(item=>{
    //     if(item.course_name.includes(iptValue)){
    //       return item
    //     }
    //   })
    // },1000),
    // searchAction:throttle(function(){
    //   this.searchResult = this.courseData.filter(item=>{
    //     if(item.course_name.includes(this.input)){
    //       return item
    //     }
    //   })
    // },1000),
    // // 删除图片
    // deleteImg(value){
    //   console.log(value);
    //   this.imagesList.map((item, idx)=>{
    //     if(value.imgUrl == item.imgUrl){
    //       this.imagesList.splice(idx, 1)
    //     }
    //   })
    // }
    treeSelectedData(value){
      console.log(value);
      // let arr =[]
      // function fn(data){
      //   data.forEach(item => {
      //     if(item.children == undefined && item.organizationType == 'SHOP'){
      //       arr.push(item);
      //     }
      //     if(item.children && item.organizationType !== 'SHOP'){
      //       fn(item.children);
      //     }
      //   })
      // }
      // fn(value)
      // console.log(arr);
      this.treeSelected = value;
    },
    getCheckedNodes() {
      console.log(this.$refs.tree.getCheckedNodes());
    },
    getCheckedKeys() {
      console.log(this.$refs.tree.getCheckedKeys());
    },
    setCheckedNodes() {
      this.$refs.tree.setCheckedNodes([{
        id: 5,
        label: '二级 2-1'
      }, {
        id: 9,
        label: '三级 1-1-1'
      }]);
    },
    setCheckedKeys() {
      this.$refs.tree.setCheckedKeys(['二级 2-1']);
    },
    resetChecked() {
      this.$refs.tree.setCheckedKeys([]);
    },
    // 设置获取的值
    getCheckNape(){
      this.treeSelectedTest = this.$refs.tree.getCheckedNodes(true, true)
    },
    // // 删除同步树形结构
    // deleteTreeSelected(value){
    //   console.log(value);
    //   this.treeSelectedTest.forEach((item,idx)=>{
    //     if(value.id == item.id){
    //       this.treeSelectedTest.splice(idx, 1)
    //     }
    //   })
    //   console.log(this.treeSelectedTest);
    //   let arr = []
    //   this.treeSelectedTest.forEach(item=>{
    //     arr.push(item.id)
    //   })
    //   this.$refs.tree.setCheckedKeys(arr);
    // },
    btn(){
      console.log('调用删除');
      console.log(this.$children);
      // this.$children[0].$children[0].setCheckedKeys([1, 4, 8])
      // console.log(this.$children[0].$children[0].setCheckedKeys([1,2]));
      // console.log(this.$refs.treeUser);
      // this.$refs.tree.setCheckedKeys([1,2]);
    },
    // changeEvent(value,item){
    //   console.log(value,item);
    // },
    changeEvent(value,item){
      console.log(value,item);
      this.content.forEach(element => {
        if(element.id == item.id && value){
          item.b = true
        }else if(element.id == item.id && !value){
          item.b = false
        }
      });
      console.log(this.content);
    },
  }, 
  created(){
    console.log(this.$route);
    console.log(this.$router);
  }
};
</script>
<style lang="scss" scoped>
.test{
  width: 1rem;
  height: 1rem;
  background: #ccc;
}
.flex{
  display: flex;
  align-items: center;
}
.user-name{
  margin-right: 50px;
}
.el-input{
  width: 200px;
}
.img-wrapper{
  display: flex;
  // justify-content: center;
  // align-content: center;
}

::v-deep .el-input__inner{
  border: 0;
}
.single{
  width: 350px;
  border-radius:2px;
  border: 1px solid #DCDFE6;
  position: relative;
}
::v-deep .single .el-icon-date:before{
  // content:'';
  position: absolute;
  top: 0;
  left: 130px;
}
.line-date{
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  z-index: 99;
}
::v-deep .hiddenIcon .el-icon-date:before{
  content:''; 
}
</style>