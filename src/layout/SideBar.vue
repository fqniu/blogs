<template>
  <div class="side-bar">
    <ul>
      <li>
        <router-link to="/">首页</router-link>
      </li>
    </ul>
    <MenuItem />
  </div>
</template>
<script>
import MenuItem from "./MenuItem";
export default {
  name: "SildBar",
  components: {
    MenuItem,
  },
  data() {
    return {};
  },
  created() {},
  computed: {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.side-bar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 200px;
  height: 100%;
  padding-top: 60px;
  box-sizing: border-box;
  background: #ccc;
}
</style>