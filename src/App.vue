<template>
  <div id="app">
    <!-- <div class="wrapper"> -->
    <!-- <router-view /> -->
    <MHeader />
    <SideBar />
    <PageBoard />
    <!-- </div> -->

  </div>
</template>

<script>
import MHeader from "@/layout/MHeader.vue";
import SideBar from "@/layout/SideBar.vue";
import PageBoard from "@/layout/PageBoard.vue";
// import { getUserRouters } from '@/server4'
export default {
  name: "App",
  components: {
    MHeader,
    SideBar,
    PageBoard,
  },
  created() {},
  methods: {},
  // async mounted() {
  //   const data = await getUserRouters(2)
  //   console.log(data);
  // },
};
</script>
<style>
#app {
  width: 100%;
  height: 100%;
}
/* .wrapper {
  margin: 0 auto;
  width: 1120px;
  height: 100%;
} */
</style>