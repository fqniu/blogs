<template>
  <div>
    <div class="flex mt14">
      <InputSelect title="品牌" :options="taskObj" class="ml20" @change="handleBrand" :val="treeBrand"/>
      <div class="fs14 ml32">搜索</div>
      <el-input placeholder="输入关键字进行过滤" v-model="treeIptSearch" class="w270 ml10"></el-input>
    </div>
    <div class="mt32 pd055 tree-wrapper">
      <el-tree
        :data="treeFormData"
        show-checkbox
        node-key="label"
        ref="tree"
        default-expand-all
        highlight-current
        :props="defaultProps"
        :filter-node-method="filterNode"
        @check="getCheckNape"
      >
      </el-tree>
    </div>
    <div @click="clearData">清空</div>
  </div>
</template>

<script>
import InputSelect from '../Search/InputSelect';
export default {
  name: "TreeHotel",
  components: {
    InputSelect
  },
  props: {
    treeFormData:{
      type: Array,
      // required: true,
      default: () => {
        return []
      }
    }
  },
  data() {
    return {
      // 树形结构
      // treeFormData:[],
      treeSelected:[],
      gruopManage:[],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      // 树形品牌
      taskObj: [{
          selectedValue: '0',
          label: '全部',
        },
        {
          selectedValue: '1',
          label: '集团品牌',
        }
      ],
      treeBrand:'',
      treeIptSearch:'',
    };
  },
  watch: {
    treeIptSearch(val) {
      this.$refs.tree.filter(val);
    }
  },
  methods: {
    // 树形选择
    handleBrand(value){
      this.treeBrand = value
    },
    // 树形搜索
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    },
    // getCheckedNodes() {
    //   console.log(this.$refs.tree.getCheckedNodes());
    // },
    // getCheckedKeys() {
    //   console.log(this.$refs.tree.getCheckedKeys());
    // },
    // handleNodeClick(data) {
    //   console.log(data);
    // },
    // 获取选中的项
    getCheckNape(data, nodeobj,halfCheckedNodes,halfCheckedKeys){
      console.log(this.$refs.tree.getCheckedKeys(true));
      console.log(11111,this.$refs.tree.getCheckedNodes(true, true));
      // console.log(data, nodeobj,halfCheckedNodes,halfCheckedKeys);
      // function ch(data){
      //   if(data.children.length > 0){
      //     data.children.forEach(item=>{
      //       if(item.children.length > 0){
      //         ch(item)
      //       }
      //     })
      //   }
      // }
      // if(data.organizationType == 'SHOP'){
      //   this.treeSelected.push(data)
      // }
      // if(data.children && data.organizationType !== 'SHOP'){
      //   nodeobj.checkedNodes.forEach(item=>{
      //     if(item.organizationType == 'SHOP'){
      //       this.treeSelected.push(item)
      //     }
      //   })
      //   console.log(data, nodeobj);
      // }
      // console.log(data);
      // this.$emit('treeSelectedData', this.treeSelected)
      // console.log(data, nodeobj);
      // this.$emit('treeSelectedData', data)
      this.$emit('treeSelectedData', this.$refs.tree.getCheckedNodes(true, true))
    },
    clearData(){
      // console.log(111);
      // this.$refs.tree.setCheckedKeys([])
    }
  },
};
</script>
<style  lang="scss" scoped>
// @import "~@/styles/mixin.scss";
// @import "~@/styles/variables.scss";
.tree-wrapper{
  width: 99%;
  height: 370px;
  overflow: auto;
  // @include scrollList(10px,5px,#CCCDD8,#F5F6FB);
}
</style>
