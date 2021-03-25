<template>
  <div class="home">
    <!-- <a-layout>
      <a-layout-header>
        <div class="nav-left" @click="gotoHome()">行走的恒星</div>
        <div class="nav-right">
          <div
            class="nav-item"
            v-for="(item, idx) in tabbar"
            :key="idx"
            @click="tabChange(idx, item.path)"
            :class="{ active: tabIndex === idx }"
          >
            {{ item.value }}
          </div>
        </div>
      </a-layout-header>

      <a-layout-content>
        <router-view></router-view>
      </a-layout-content>

      <a-layout-footer>
        <div class="footer">某年某月某天某日</div>
      </a-layout-footer>
    </a-layout> -->
    <div class="nav-right">
      <div
        class="nav-item"
        v-for="(item, idx) in tabbar"
        :key="idx"
        @click="tabChange(idx, item.path)"
        :class="{ active: tabIndex === idx }"
      >
        {{ item.value }}
      </div>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  name: "home",
  data() {
    return {
      tabbar: [
        {
          value: "首页",
          path: "homePage",
        },
        {
          value: "博客",
          path: "blogs",
        },
        {
          value: "内容",
          path: "detailsCenter",
        },
        {
          value: "我的",
          path: "mine",
        },
      ],
      tabIndex: 0,
    };
  },
  methods: {
    gotoHome() {
      this.$router.push({ name: "homePage" });
    },
    tabChange(index, path) {
      this.tabIndex = index;
      this.$router.push({ name: `${path}` });
    },
  },
  created() {},
  computed: {},
  mounted() {
    // this.$router.push({ name: `homePage` });
  },
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
.nav-left {
  float: left;
  text-align: center;
  height: 100%;
  line-height: 64px;
  padding: 0 20px;
  background: #f5f5f5;
}
.nav-right {
  // float: right;
  width: 100%;
  height: 40px;
}
.nav-item {
  width: 64px;
  height: 100%;
  text-align: center;
  line-height: 64px;
  float: left;
  cursor: pointer;
  &:hover {
    // color: rgb(35, 226, 226);
    color: red;
  }
}
.active {
  // color: rgb(35, 226, 226);
  color: red;
}
</style>