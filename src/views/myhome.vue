<template>
  <div>
    <div>首页</div>
    <div>
      <div class="flex">
        <div class="user-name">用户名字</div>
        <el-input v-model="input" placeholder="请输入内容" @input="searchAction(input)"></el-input>
      </div>
      <!-- <input type="text" placeholder="请搜索" @input="searchAction($event)" /> -->
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

    <div class="test">

    </div>
  </div>
</template>
<script>
import courseData from "@/data/course";
import {throttle} from '@/utils'

export default {
  name: "myhome",
  data() {
    return {
      courseData,
      searchResult:[],
      input:'',
    };
  },
  created() {},
  computed: {},
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
    searchAction:throttle(function(){
      this.searchResult = this.courseData.filter(item=>{
        if(item.course_name.includes(this.input)){
          return item
        }
      })
    },1000),
  },
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
</style>