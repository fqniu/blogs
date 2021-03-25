<template>
  <div>
    <!-- <ul v-if="item.children && item.children.length > 0">
      <li>
        <router-link :to="item.link || item.path">{{ item.title }}</router-link>
        <template v-for="(c, i) in item.children">
          <MenuItem :key="i" :item="c" />
        </template>
      </li>
    </ul>
    <ul v-else>
      <li>
        <router-link :to="item.link || item.path">{{ item.title }}</router-link>
      </li>
    </ul> -->
    
     <el-menu
        :default-active="$route.path"
        class="el-menu-vertical-demo"
        background-color="#fff"
        text-color="#36395C"
        active-text-color="#4646E6"
        :unique-opened="true"
        @open="handleOpen"
        @close="handleClose"
        router
      >
        <sidebarItem v-for="(route, index) in $store.state.userRouters" :key="index" :item="route"></sidebarItem>
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
    };
  },
  created() {},
  computed: {},
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