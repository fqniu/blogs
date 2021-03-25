<template>
  <div>
    <!-- {{ select }} -->
    <!-- 这里的 action-url 是为了请求接口时的url地址 -->
    <!-- <SelectWithPager
            @change="zzzz"
            v-model="select"
            action-url="/aaa/bbb/ccc"
        ></SelectWithPager> -->
    <!-- <ul>
      <Sticky :sticky-top="200">
        <li class="sticky_demo">我是要sticky的</li>
      </Sticky>
      <li>我是夏利</li>
      <li>我是夏利</li>
      <li>我是夏利</li>
      <li>我是夏利</li>
      <li>我是夏利</li>
      <li>我是夏利</li>
      <li>我是夏利</li>
      <li>我是夏利</li>
      <li>我是夏利</li>
      <li>我是夏利</li>
      <li>我是夏利</li>
      <li>我是夏利</li>
      <li>我是夏利</li>
      <li>我是夏利</li>
      <li>我是夏利</li>
      <li>我是夏利</li>
      <li>我是夏利</li>
      <li>我是夏利</li>
      <li>我是夏利</li>
      <li>我是夏利</li>
      <li>我是夏利</li>
      <li>我是夏利</li>
      <li>我是夏利</li>
      <li>我是夏利</li>
      <li>我是夏利</li>
      <li>我是夏利</li>
      <li>我是夏利</li>
      <li>我是夏利</li>
      <li>我是夏利</li>
    </ul> -->
    <div>我的</div>
  </div>
</template>
<script>
// import SelectWithPager from "../../components/SelectWithPager";
export default {
  name: "mine",
  components: {
    // SelectWithPager,
  },
  data() {
    return {
      select: 2,
    };
  },
  created() {},
  computed: {},
  methods: {
    zzzz(val) {
      console.log(val);
    },
  },
};
</script>
<style lang="scss" scoped>
ul {
  display: block;
  height: 3000px;
}
.sticky_demo {
  background: #000;
  color: #fff;
}
</style>