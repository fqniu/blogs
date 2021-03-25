<template>
  <div>
    <!-- {{ index }} -->
    <!-- 这里的style可以设置大小 会自动添加到组件样式中 -->
    <!-- <TabControl v-model="index" style="width:400px">
      <tabItem label="全部"></tabItem>
      <tabItem label="已购买"></tabItem>
      <tabItem label="未购买"></tabItem>
      <tabItem label="待发货"></tabItem>
    </TabControl> -->

    <!-- <tab v-model="index" label="电影" style="width: 600px">
      <tabItem>想见你</tabItem>
      <tabItem>火影忍者</tabItem>
      <tabItem>当幸福来敲门</tabItem>
      <tabItem>肖克申的救赎</tabItem>
    </tab>

    <tab v-model="index" label="书籍" style="width: 400px">
      <tabItem>平凡的世界</tabItem>
      <tabItem>高级编码规范</tabItem>
      <tabItem>马克思理论</tabItem>
      <tabItem>邓小平思想</tabItem>
    </tab>
    <move></move> -->
    <div>内容</div>
  </div>
</template>

<script>
// import HorseRaceLamp from '../../components/HorseRaceLamp';
// import TabControl from '../../components/TabControl';
// import tab from "../../components/Tab";
// import tabItem from "../../components/TabItem";
// import move from "./move";
export default {
  name: "detailsCenter",
  components: {
    // HorseRaceLamp,
    // TabControl,
    // tabItem,
    // tab,
    // move,
  },
  data() {
    return {
      index: 0,
    };
  },
  created() {},
  computed: {},
  methods: {},
};
</script>
<style lang="scss" scoped>
</style>