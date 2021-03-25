<template>
  <div>
    <div v-if="item.children && item.children.length > 0">
      {{item.id}}
        <template v-for="(c,index) in item.children">
          <test :key="index"  :item="c"></test>
        </template>
    </div>
    <div v-else>
      <div>{{item.id}}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "test",
  props:{
    item:Array,
    default:()=>{
      return []
    }
  },
  data() {
    return {
    
    };
  },
  created() {},
  computed: {},
  methods: {},
};
</script>
<style lang="scss" scoped>
</style>