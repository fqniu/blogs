<template>
  <div>
    <!-- <template v-if="hasOneShowingChild(item.children,item) && (!onlyOneChild.children||onlyOneChild.noShowingChildren)&&!item.alwaysShow">
      <app-link v-if="onlyOneChild.meta" :to="resolvePath(onlyOneChild.path)">
        <el-menu-item :index="resolvePath(onlyOneChild.path)" :class="{'submenu-title-noDropdown':!isNest}">
          <item :icon="onlyOneChild.meta.icon||(item.meta&&item.meta.icon)" :title="onlyOneChild.meta.title" />
        </el-menu-item>
      </app-link>
    </template> -->

    <!-- <el-submenu v-else ref="subMenu" :index="resolvePath(item.path)" popper-append-to-body>
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

    <!-- <el-submenu index="1" class="pl28">
      <template slot="title">
        <div class="flex-center">
          <img :src= "submenuIndex == 1 ? iconTaskSelectedUrl : iconTaskUnselectedUrl" alt="" class="submenu-left-icon">
          <span class="submenu-title">任务信息</span>
          <img :src= "submenuIndex == 1 ? iconCloseUrl : iconOpenUrl" alt="" class="">
        </div>
      </template>
      <el-menu-item index="/taskInfo/list" @click="setStyle('/taskInfo/list')" :class="['/taskInfo/list'== $route.path ? 'el-menu-item-active':'']">我的任务</el-menu-item>
      <el-menu-item index="/taskInfo/pendingApproval" @click="setStyle('/taskInfo/pendingApproval')" :class="['/taskInfo/pendingApproval' == $route.path ? 'el-menu-item-active':'']">待我审批</el-menu-item>
      <el-menu-item index="/taskInfo/executiveLogging" @click="setStyle('/taskInfo/executiveLogging')" :class="['/taskInfo/executiveLogging' == $route.path ? 'el-menu-item-active':'']">执行记录</el-menu-item>
    </el-submenu> -->

    <!-- <el-submenu index="2" class="pl28">
      <template slot="title">
        <div class="flex-center">
          <img :src= "submenuIndex == 2 ? iconSystemSelectedUrl : iconSystemUnselectedUrl" alt="" class="submenu-left-icon">
          <span class="submenu-title">系统管理</span>
          <img :src= "submenuIndex == 2 ? iconCloseUrl : iconOpenUrl" class="">
        </div>
      </template>
      <el-menu-item index="/systemManage/list" @click="setStyle('/systemManage/list')" :class="['/systemManage/list'== $route.path ? 'el-menu-item-active':'']">计划任务安排</el-menu-item>
      <el-menu-item index="/systemManage/performRecordManage" @click="setStyle('/systemManage/performRecordManage')" :class="['/systemManage/performRecordManage'== $route.path ? 'el-menu-item-active':'']">执行记录管理</el-menu-item>
    </el-submenu> -->

     <el-submenu ref="subMenu" index="2">
      <template slot="title">
        <div>123</div>
        <!-- <item v-if="item.meta" :icon="item.meta && item.meta.icon" :title="item.meta.title" /> -->
      </template>
      <sidebar-item
        v-for="(child,index) in item.children"
        :key="index"
        :item="child"
        class="nest-menu"
      />
    </el-submenu>
  </div>
</template>
<script>
// import SidebarItem from './SidebarItem'
export default {
  name: 'SidebarItem',
  components:{
    // SidebarItem
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
  },
}
</script>
<style lang="scss" scoped>

</style>