<template>
  <div class="header-container">头部</div>
</template>
<script>
export default {
  name: "MHeader",
  data() {
    return {};
  },
  created() {},
  computed: {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.header-container {
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  background: #000;
  color: #fff;
  font-size: 24px;
  z-index: 2;
}
</style>