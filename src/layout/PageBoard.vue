<template>
  <div class="page-board">
    <breadcrumb class="breadcrumb-container" />
    <!-- <test v-for="(item,index) in testData" :key="index" :item="item"></test> -->
    <router-view></router-view>
  </div>
</template>
<script>
// import test from './test';
import Breadcrumb from '@/components/Breadcrumb'
export default {
  name: "PageBoard",
  components:{
    // test,
    Breadcrumb,
  },
  data() {
    return {
        testData:[
        {
          id:1,
          children:[{
            id:11,
          }]
        }, {
          id:2,
          children:[{
            id:21, 
            children:[{
              id:221,
            }]
          }]
        }, {
          id:3,
          children:[{
            id:31,
          }]
        },{
          id:4,
        }
      ]
    };
  },
  created() {},
  computed: {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.page-board {
  width: 100%;
  height: 100%;
  padding: 90px 30px 30px 230px;
  // background: cadetblue;
}
</style>