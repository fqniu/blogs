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
        node-key="id"
        ref="tree"
        highlight-current
        :expand-on-click-node="false"
        :props="defaultProps"
        :filter-node-method="filterNode"
        @check="getCheckNape"
        :default-expanded-keys="[1]"
      >
      <!-- 展开所有 default-expand-all -->
      </el-tree>
    </div>
  </div>
</template>

<script>
import InputSelect from '@/components/Search/InputSelect';
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
    },
  },
  data() {
    return {
      // 标识用于父元素查找 注意唯一性
      treeHotelFlag:'treeHotelFlag',
      // 树形结构
      // treeFormData:[],
      treeSelected:[],
      gruopManage:[],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      // 树形品牌
      taskObj: [
        {
          selectedValue: '',
          label: '全部',
        },{
          // selectedValue: 'YS',
          selectedValue: '宜尚',
          label: '宜尚',
        },{
          // selectedValue: 'JT',
          selectedValue: '精途',
          label: '精途',
        },{
          // selectedValue: 'CSBJ',
          selectedValue: '城市便捷',
          label: '城市便捷',
        },{
          // selectedValue: 'BM',
          selectedValue: '柏曼',
          label: '柏曼',
        },{
          // selectedValue: 'JC',
          selectedValue: '瑾程',
          label: '瑾程',
        },{
          // selectedValue: 'CSJX',
          selectedValue: '城市精选',
          label: '城市精选',
        },{
          // selectedValue: 'BLFR',
          selectedValue: '蓓利夫人',
          label: '蓓利夫人',
        },{
          // selectedValue: 'YC',
          selectedValue: '怡程',
          label: '怡程',
        },{
          // selectedValue: 'YM',
          selectedValue: '隐沫',
          label: '隐沫',
        },{
          // selectedValue: 'FTD',
          selectedValue: '锋态度',
          label: '锋态度',
        },{
          // selectedValue: 'FFI',
          selectedValue: '万枫',
          label: '万枫',
        },{
          // selectedValue: 'BD',
          selectedValue: '铂顿',
          label: '铂顿',
        },{
          // selectedValue: 'DY',
          selectedValue: '殿影',
          label: '殿影',
        },{
          // selectedValue: 'YSP',
          selectedValue: '宜尚Plus',
          label: '宜尚Plus',
        }
      ],
      treeBrand:'',
      treeIptSearch:'',
      // defaultShowNodes:[],
    };
  },
  watch: {
    treeIptSearch(value) {
      // if(this.treeBrand){
      //   value = this.treeBrand + value
      // }
      // console.log(value);
      this.$refs.tree.filter(value);
    },
    // treeFormData: {
		//   handler () {
		//   	// 我这里默认展开一级, 指定几级就往里遍历几层取到 id 就可以了
    //     this.treeFormData[0].children.forEach(item=>{
    //       this.defaultShowNodes.push(String(item.id))
    //     })
    //     console.log(this.defaultShowNodes);
		//   },
		//   deep: true
	  // }
  },
  methods: {
    // 树形选择
    handleBrand(value){
      // console.log(value);
      this.treeIptSearch = ""
      this.treeBrand = value
      this.$refs.tree.filter(value);
      // this.$emit('handleBrand', value);
    },
    // 树形搜索
    filterNode(value, data) {
      // console.log(value, data.label, this.treeBrand, this.treeIptSearch);
      if (!this.treeBrand && !this.treeIptSearch) return true;
      let label = data.label;
      let regIpt = new RegExp(this.treeIptSearch, "g");
      let regBrand = new RegExp( this.treeBrand, "g");
      if(this.treeBrand && this.treeIptSearch){
        if(label.match(regIpt) && label.match(regBrand)){
          return true
        }else{
          return false
        }
      }else if(!this.treeBrand && this.treeIptSearch){
        if(label.match(regIpt)){
          return true
        }else{
          return false
        }
      }else if(this.treeBrand && !this.treeIptSearch){
        if(label.match(regBrand)){
          return true
        }else{
          return false
        }
      }
      // console.log(data.label.indexOf(value) !== -1);
      // return data.label.indexOf(value) !== -1;
    },
    // 获取选中的项
    getCheckNape(data, nodeobj){
      console.log(data, nodeobj);
      console.log('传递选中的=',this.$refs.tree.getCheckedNodes(true, true));
      this.$emit('treeSelectedData', { executeObj:1, data: this.$refs.tree.getCheckedNodes(true, true)})
    },
  },
  // mounted(){
  //   this.$nextTick(() => {
  //     this.$refs.tree.setCurrentKey(this.defaultShowNodes);
  //   });
  // }
};
</script>
<style  lang="scss" scoped>
@import "~@/styles/mixin.scss";
@import "~@/styles/variables.scss";
.tree-wrapper{
  width: 99%;
  height: 370px;
  overflow: auto;
  @include scrollList(10px,5px,#CCCDD8,#F5F6FB);
}
</style>
