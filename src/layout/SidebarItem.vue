<template>
  <div>
    <!-- <template v-if="hasOneShowingChild(item.children,item) && (!onlyOneChild.children||onlyOneChild.noShowingChildren)&&!item.alwaysShow">
      <app-link v-if="onlyOneChild.meta" :to="resolvePath(onlyOneChild.path)">
        <el-menu-item :index="resolvePath(onlyOneChild.path)" :class="{'submenu-title-noDropdown':!isNest}">
          <item :icon="onlyOneChild.meta.icon||(item.meta&&item.meta.icon)" :title="onlyOneChild.meta.title" />
        </el-menu-item>
      </app-link>
    </template>
    <el-submenu v-else ref="subMenu" :index="resolvePath(item.path)" popper-append-to-body>
      <template slot="title">
        <item v-if="item.meta" :icon="item.meta && item.meta.icon" :title="item.meta.title" />
      </template>
      <sidebar-item
        v-for="child in item.children"
        :key="child.path"
        :is-nest="true"
        :item="child"
        :base-path="resolvePath(child.path)"
        class="nest-menu"
      />
    </el-submenu> -->

    <div class="menu-wrapper">
    <el-submenu v-if="item.children" ref="subMenu" :index="item.path">
      <template slot="title">
        <div class="flex-center pl28">
          <!-- <img src="@/assets/img/icon-任务信息-选中状态.png" alt="" class="submenu-left-icon" v-if="active==item.path">
          <img src="@/assets/img/icon-任务系统-未选中.png" alt="" class="submenu-left-icon" v-else> -->
          <span class="submenu-title">{{item.title}}</span>
          <!-- <img src="@/assets/img/icon-展开.png" alt="" class="" v-if="active==item.path">
          <img src="@/assets/img/icon-收起.png" alt="" class="" v-else> -->
        </div>
      </template>
      <SidebarItem
        v-for="child in item.children"
        :key="child.path"
        :item="child"
        :base-path="child.path"
      />
    </el-submenu>

    <el-menu-item :index="item.path" v-else>
      <div @click="setStyle(item.path)" class="item.path">{{item.title}}</div>
    </el-menu-item>
  </div>

  </div>
</template>
<script>
import SidebarItem from './SidebarItem'
export default {
  name: 'SidebarItem',
  components:{
    SidebarItem
  },
  props:{
    item:{
      type: Object,
      default:()=>{
        return {}
      }
    }
  },
  data() {
    return {
    }
  },
  created(){
  },
  computed:{
  },
  methods:{
    setStyle(value){
      console.log(value);
    }
  },
}
</script>
<style lang="scss" scoped>

</style>