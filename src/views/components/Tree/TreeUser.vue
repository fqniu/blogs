<template>
  <div class="custom-tree-container">
    <div class="block">
      <el-tree
        :data="data"
        show-checkbox
        ref="tree"
        node-key="id"
        default-expand-all
        :expand-on-click-node="false"
        @check="getCheckNape"
      >
        <div class="custom-tree-node" slot-scope="{ node, data }">
          <span>{{ node.label }}</span>
          <div @click="showPopover(data.id)">显示</div>
          <el-popover
            placement="top"
            width="200"
            :ref="refNamePopover + data.id"
          >
            <div class="tree-check-person">
              <el-checkbox-group v-model="data.checkList" :ref="refNameCheckbox + data.id">
                <el-checkbox  :label="item.person" v-for="(item,idx) in data.checkObj" :key="idx" @change="change(data, data.id, item, data.checkList)"></el-checkbox>
              </el-checkbox-group>
            </div>
            <div style="text-align: right; margin: 0">
              <el-button size="mini" type="text" @click="cancelDelete(data.id, data.checkList)">取消</el-button>
              <el-button type="primary" size="mini" @click="sureCurData(data.id, data.checkList)">确定</el-button>
            </div>
            {{data.checkList}}
          </el-popover>
        </div>
      </el-tree>
      {{checkboxData}}
    </div>
  </div>
</template>

<script>
export default {
  name:'treeUser',
  props:{
    testFunction:{
      type:Function,
      defalut:""
    }
  },
  data() {
    const data = [
      {
        id: 1,
        label: "一级 1",
        checkList: [],
        checkObj: [
          {
            person:'一级 1.1',
          }, {
            person:'一级 1.2',
          }, {
            person:'一级 1.3',
          },
        ],
        children: [
          {
            id: 4,
            label: "二级 1-1",
            checkList:[],
            checkObj:[
              {
                person:'二级 1-1.1',
              }, {
                person:'二级 1-1.2',
              }, {
                person:'二级 1-1.3',
              },
            ],
            children: [
              {
                id: 9,
                label: "三级 1-1-1",
                checkList: [],
                checkObj:[
              {
                person:'三级 1-1-1.1',
              }, {
                person:'三级 1-1-1.2',
              }, {
                person:'三级 1-1-1.3',
              },
            ],
              },
              {
                id: 10,
                label: "三级 1-1-2",
                checkList: [],
                checkObj:[
              {
                person:'三级 1-1-2.1',
              }, {
                person:'三级 1-1-2.2',
              }, {
                person:'三级 1-1-2.3',
              },
            ],
              },
            ],
          },
        ],
      },
      {
        id: 2,
        label: "一级 2",
        checkList: [],
        checkObj:[
              {
                person:'一级 2.1',
              }, {
                person:'一级 2.2',
              }, {
                person:'一级 2.3',
              },
            ],
        children: [
          {
            id: 5,
            label: "二级 2-1",
            checkList: [],
            checkObj:[
              {
                person:'二级 2-1.1',
              }, {
                person:'二级 2-1.2',
              }, {
                person:'二级 2-1.3',
              },
            ],
          },
          {
            id: 6,
            label: "二级 2-2",
            checkList: [],
            checkObj:[
              {
                person:'二级 2-2.1',
              }, {
                person:'二级 2-2.2',
              }, {
                person:'二级 2-2.3',
              },
            ],
          },
        ],
      },
      {
        id: 3,
        label: "一级 3",
        checkList: [],
        checkObj: [
          {
            person:'一级 3.1',
          }, {
            person:'一级 3.2',
          }, {
            person:'一级 3.3',
          },
        ],
        children: [
          {
            id: 7,
            label: "二级 3-1",
            checkList: [],
            checkObj: [
              {
                person:'二级 3-1.1',
              }, {
                person:'二级 3-1.2',
              }, {
                person:'二级 3-1.3',
              },
            ],
          },
          {
            id: 8,
            label: "二级 3-2",
            checkList: [],
            checkObj:[
              {
                person:'二级 3-2.1',
              }, {
                person:'二级 3-2.2',
              }, {
                person:'二级 3-2.3',
              },
            ],
          },
        ],
      },
    ];
    return {
      data: JSON.parse(JSON.stringify(data)),
      visible: false,
      refNamePopover: "popover-", // popover ref名称前缀
      refNameCheckbox:"checkbox-",
      // checkList: {},
      checkboxData:[],
      idArr:[],
    };
  },

  methods: {
    // 显示
    showPopover(id) {
      let refNamePopover = this.refNamePopover + id;
      // console.log(this.$refs[refNamePopover],this.$refs);
      // 先关闭所有弹框，再点击要显示的那一个弹框
      for (const i in this.$refs) {
        // console.log(this.$refs[i]);
        if(this.$refs[i].doClose){
          this.$refs[i].doClose()
        }
      }
      this.$refs[refNamePopover].showPopper = true;
    },
    // 取消删除
    cancelDelete(id, value) {
      let refNamePopover = this.refNamePopover + id;
      // let refCheckbox = this.refNameCheckbox + id;
      this.$refs[refNamePopover].doClose();
      // console.log(value);
      // console.log(this.data);
      // function searchId(value,id){
      //   value.forEach((item, index) => {
      //     if(item.id == id){
      //       item.checkList = []
      //     }
      //     if(item.children){
      //       searchId(item.children, id)
      //     }
      //   })
      // }
      // searchId(this.data,id)
    },
    // 确认当前数据
    sureCurData(id,value) {
      let refNamePopover = this.refNamePopover + id;
      let refCheckbox = this.refNameCheckbox + id;
      // 通过操作dom树，关闭popover
      this.$refs[refNamePopover].doClose();
      // console.log(this.checkList);
      console.log(this.$refs[refCheckbox]);
      console.log(value);
    },
    // 获取选中的项
    getCheckNape(value){
      console.log(value);
      console.log(11111, this.$refs.tree.getCheckedNodes(true, true));
      let arr = this.$refs.tree.getCheckedNodes(true, true);
      console.log(arr);
      arr.forEach((item, index) => {
        let val = []
        console.log(item);
        item.checkObj.forEach(elm=>{
          val.push(elm.person)
        })
        item.checkList =  val
        console.log(val);
      });
      if(arr.length == 0){
        value.checkList = []
      }
    },
    change(v, id, val, value){
      console.log(999, v, id, val, value);
      if(v.checkList.length > 0){
        this.idArr.push(id)
        this.idArr = [...new Set(this.idArr)] 
        console.log(this.idArr);
        // let flag = this.idArr.every(item=>{
        //   return item == id
        // })
        // if(flag){
        //   this.idArr = [...new Set(this.idArr)] 
        // }
        // console.log(this.idArr);
        // this.$refs.tree.setCheckedKeys([6,7]);
      } else {
        // console.log(this.idArr);
        this.idArr = this.idArr.filter(item=>{
          return item == v
        })
        // this.$refs.tree.setCheckedKeys([this.idArr]);
        console.log(this.idArr);
        // this.arr.slice(id);
      }
      // console.log(11111, this.$refs.tree.getCheckedKeys());
      // console.log(22222, this.$refs.tree.getCheckedNodes(true, true));
      // let arr = []
      console.log('id=', id);
      console.log(this.idArr);
      this.$refs.tree.setCheckedKeys([this.idArr]);
      
      // this.checkboxData = this.checkboxData.concat(data.checkList)
      this.checkboxData = value
      // if(val.length > 0){
      //   // this.$refs.tree.setCheckedKeys([this.$refs.tree.getCheckedNodes(true, true)[0].label]);
      // }else{
      //   this.$refs.tree.setCheckedKeys([]);
      // }
      console.log(111,'调用方法了');
    },
    // testFunction(){
    //   console.log(111,'调用方法了');
    // },
    test(){
      console.log('外部调用此方法');
    }
  },
  created(){
    // console.log(this.testFunction());
    // for (let key in this.queryData) {
    //   this.$set(this.checked, key, [])
    // }
  }
};
</script>

<style lang="scss" scoped>
/* .custom-tree-node */
.custom-tree-node {
  /* flex: 1; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
.tree-check-person .el-checkbox {
 display: block;
}
</style>
