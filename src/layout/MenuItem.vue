<template>
  <div>
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      background-color="#fffff"
      text-color="#000000"
      active-text-color="#58bc58"
      :unique-opened="true"
      @open="handleOpen"
      @close="handleClose"
      router
    >
      <!-- <sidebarItem v-for="(route, index) in $store.state.userRouters" :key="index" :item="route"></sidebarItem> -->
      <sidebarItem v-for="(route, index) in testData" :key="index" :item="route"></sidebarItem>
    </el-menu>
  </div>
</template>
<script>
import sidebarItem from './SidebarItem'
export default {
  name: "MenuItem",
  components:{
    sidebarItem
  },
  props: {
    item: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  data() {
    return {
      submenuIndex:0,
      testData:[
        {
          id:1,
          title:'学生管理1',
          path:'/student',
          children:[{
            id:11,
            title:'学生信息1-1',
            path:'/student/operate',
          },{
            id:12,
            title:'学生信息1-2',
            path:'/student/add',
          }]
        }, {
          id:2,
          path:'/course',
          title:'学生管理2',
          children:[{
            id:21, 
            title:'学生管理2-1',
            path:'"/course/operate',
            children:[{
              id:221,
              title:'学生信息2-1',
              path:'/course/operate/info_data',
            }]
          }]
        }, {
          id:3,
          path:'/',
          title:'学生管理3',
          children:[{
            id:31,
            path:'/',
            title:'学生信息3',
          }]
        },{
          id:4,
          path:'/',
          title:'学生管理4',
        }
      ]
    };
  },
  created() {},
  computed: {
    userRouters(){
      return this.$store.state.userRouters
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      this.submenuIndex = key
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      this.submenuIndex = 0
      console.log(key, keyPath);
    },
    setStyle(path){
      console.log(path);
      this.path = path
    }
  },
};
</script>
<style lang="scss" scoped>
</style>