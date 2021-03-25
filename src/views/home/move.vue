<template>
  <div>
    <div class="module-list-wrap">
      <div @click="leftmove">+</div>
      <!-- 左箭头 -->
      <ul
        class="module-list"
        ref="modulelist"
        :style="{
          width: itemlist.length * 100 + 'px',
          'margin-left': ml * 100 + 'px',
        }"
      >
        <li v-for="(item, index) in itemlist" :key="index" class="list-item">
          <!-- itemlist 文案的数组 -->
          {{ item }}
        </li>
      </ul>

      <div @click="rightmove">-</div>
      <!-- 右箭头 -->
    </div>
  </div>
</template>
<script>
export default {
  name: "move",
  data() {
    return {
      itemlist: [
        "平凡的世界",
        "高级编码规范",
        "马克思理论",
        "邓小平思想",
        "想见你",
        "火影忍者",
        "当幸福来敲门",
        "肖克申的救赎",
      ],
      ml: 0,
    };
  },
  created() {},
  computed: {},
  methods: {
    leftmove() {
      if (this.ml < 0) {
        this.ml += 1;
      }
    },
    rightmove() {
      if (this.ml > -(this.itemlist.length + this.ml)) {
        this.ml -= 1;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.module-list-wrap {
  margin-left: 50px;
}
.module-list {
  width: 100px;
  display: flex;
}
.list-item {
  padding: 20px;
  border: 1px solid red;
}
</style>