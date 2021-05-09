<template>
  <div>
    <div class="flex mt14">
      <div class="fs14 ml32">搜索</div>
      <el-input
        placeholder="输入关键字进行过滤"
        v-model="treeIptSearch"
        class="w270 ml10"
      ></el-input>
    </div>
    <div class="tree-wrapper mt32 pd055">
      <el-tree
        :data="TreeFormData"
        ref="tree"
        node-key="id"
        highlight-current
        :expand-on-click-node="false"
        :props="defaultProps"
        :filter-node-method="filterNode"
        @check="getCheckNape"
        default-expand-all
      >
      <!-- show-checkbox check-strictly :default-expanded-keys="[1]"-->
      <!-- 展开所有 default-expand-all -->
        <div class="custom-tree-node" slot-scope="{ node, data }">
          <span>{{ node.label }}</span>
          <div
            @click.stop="showPopover(data.id)"
            class="ml10"
            v-if="data.orgUserList !== null"
          >
            <img src="@/assets/img/icon-选集.png" alt="" />
          </div>
          <el-popover
            placement="top"
            width="200"
            :ref="refNamePopover + data.id"
          >
            <div class="tree-check-person">
              <!-- <el-checkbox-group v-model="data.checkList" :ref="refNameCheckbox + data.id">
                  <el-checkbox  :label="item.userAccountName" v-for="(item,idx) in data.orgUserList" :key="idx" :checked="item.checked" @change="change($event, data, data.id, item, data.checkList)"></el-checkbox>
                </el-checkbox-group> -->
              <el-checkbox-group
                v-model="data.checkList"
                :ref="refNameCheckbox + data.id"
              >
                <el-checkbox
                  :label="item.userAccountName"
                  v-for="(item, idx) in data.orgUserList"
                  :key="idx"
                  :checked="item.checked"
                  @change="change($event, item, data.checkList, data.id)"
                >{{ item.userAccountName }}</el-checkbox>
              </el-checkbox-group>
            </div>
            <div
              style="text-align: center; margin: 20px 0 0"
              class="btn-wrapper"
            >
              <el-button
                type="primary"
                size="mini"
                @click="sureCurData(data, data.id, data.checkList)"
              >确定</el-button>
              <el-button
                size="mini"
                type="text"
                @click="cancelDelete(data.id, data.checkList)"
              >取消</el-button>
            </div>
          </el-popover>
        </div>
      </el-tree>
    </div>
  </div>
</template>

<script>
import InputSelect from "@/components/Search/InputSelect";
export default {
  name: "TreeUser",
  components: {
    InputSelect,
  },
  props: {
    treeFormData: {
      type: Array,
      // required: true,
      default: () => {
        return [];
      },
    },
  },
  data() {
    return {
      // 标识用于父元素查找 注意唯一性
      treeUserFlag: "treeUserFlag",
      // TreeFormData: JSON.parse(JSON.stringify(this.treeFormData)),
      refNamePopover: "popover-", // popover ref名称前缀
      refNameCheckbox: "checkbox-",
      treeId:[],
      // 树形结构
      // treeFormData:[],
      treeSelected: [],
      gruopManage: [],
      defaultProps: {
        children: "children",
        label: "label",
      },
      treeIptSearch: "",
      // treeData: JSON.parse(JSON.stringify(this.treeFormData)),
    };
  },
  computed: {
    TreeFormData: {
      get() {
        return JSON.parse(JSON.stringify(this.treeFormData));
      },
      set(newVal) {
        console.log(newVal);
        this.treeData = newVal;
      },
    },
  },
  watch: {
    treeFormData: {
      handler(newVal, oldName) {
        this.TreeFormData = newVal;
      },
      immediate: true,
      deep: true
    },
    treeIptSearch(val) {
      this.$refs.tree.filter(val);
    },
  },
  methods: {
    // 树形搜索
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1;
    },
    // 显示复选框
    showPopover(id) {
      let refNamePopover = this.refNamePopover + id;
      console.log(this.$refs[refNamePopover]);
      // 先关闭所有弹框，再点击要显示的那一个弹框
      for (const i in this.$refs) {
        // console.log(this.$refs[i]);
        if (this.$refs[i].doClose) {
          this.$refs[i].doClose();
        }
      }
      this.$refs[refNamePopover].showPopper = true;
    },
    // 取消按钮
    cancelDelete(id, value) {
      // console.log('取消', id, value);
      let refNamePopover = this.refNamePopover + id;
      this.$refs[refNamePopover].doClose();
    },
    // 确认按钮
    sureCurData(data, id, value) {
      // console.log('确定', data, id, value);
      let refNamePopover = this.refNamePopover + id;
      // let refCheckbox = this.refNameCheckbox + id;
      // 通过操作dom树，关闭popover
      this.$refs[refNamePopover].doClose();
      // this.$emit("treeSelectedData", this.checkboxData);
    },
    // 获取选中的项
    getCheckNape($event, value) {
      // console.log($event, value);
      // executeObj 参与对象 2 个人 |  data 数据 | selected 代表参与对象 1全选中 0单个选中
      // this.$emit("treeSelectedData", { executeObj: 2, data: value, selected:1 });
    },
    change(event, item, checkList,id) {
      console.log(event, item, checkList, id);
      // 回显树形结构数据
      // if(checkList.length == 0){
      //   this.treeId.forEach((item, idx) => {
      //     if(item == id){
      //       this.treeId.splice(idx,1)
      //     }
      //   })
      // } else {
      //   this.treeId.push(id)
      //   this.treeId = [...new Set(this.treeId)]
      // }
      // this.$refs.tree.setCheckedKeys(this.treeId);
      // console.log(this.treeId);
      // console.log(this.treeFormData);
      function getId(tdata){
        if (Array.isArray(tdata) && tdata.length > 0) {
          tdata.forEach(elm => {
            if(elm.orgUserList && elm.orgUserList.length>0){
              elm.orgUserList.forEach(elm => {
                if(elm.userAccountId == item.userAccountId ){
                  elm.checked = true
                }
              })
            }
            if(elm.children){
              getId(elm.children);
            }
          })
        }
      }
      getId(this.TreeFormData)
      // console.log(this.treeFormData);
      // executeObj 参与对象 2 个人 |  data 数据 | selected 代表参与对象 1全选中 0单个选中
      this.$emit("treeSelectedData", {executeObj: 2, flag: event, data: item,  selected: 0, treeFormData: this.TreeFormData});
    },
  },
  created() {
    console.log(this.treeFormData);
  },
};
</script>

<style  lang="scss" scoped>
@import "~@/styles/mixin.scss";
@import "~@/styles/variables.scss";
.tree-wrapper {
  width: 99%;
  height: 370px;
  overflow: auto;
  @include scrollList(10px, 5px, #cccdd8, #f5f6fb);
}
/* .custom-tree-node */
.custom-tree-node {
  /* flex: 1; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
::v-deep .el-popover {
  padding: 23px;
}
.tree-check-person .el-checkbox {
  display: block;
}
.btn-wrapper ::v-deep .el-button--text {
  border: 1px solid $subMenuActiveText;
  padding: 7px 22px;
  margin-left: 10px;
}
.btn-wrapper ::v-deep .el-button--mini {
  padding: 7px 22px;
}

.tree-left {
  width: 640px;
  height: 486px;
  border-radius: 6px;
  border: 1px solid #efeff6;
  margin-right: 28px;
  .tree-wrapper {
    width: 99%;
    height: 370px;
    overflow: auto;
    @include scrollList(10px, 5px, #cccdd8, #f5f6fb);
  }
}
.tree-right {
  width: 640px;
  height: 486px;
  .tree {
    width: 100%;
    height: 230px;
    border-radius: 6px;
    border: 1px solid #efeff6;
  }
  .tree-active {
    border: 1px solid #f56c6c;
  }
  .tree-selected {
    padding: 19px 21px;
    .selected-title {
      color: $menuActiveText;
      font-weight: 600;
    }
    .selected-num {
      color: #ef6e49;
      margin-left: 5px;
    }
  }
  .tree-selected-wrapper {
    width: 100%;
    height: 153px;
    margin-top: 12px;
    overflow: auto;
    @include scrollList(10px, 5px, #cccdd8, #f5f6fb);
  }
  .li-item {
    float: left;
    width: 50%;
  }
  .li-item-text {
    width: 230px;
    margin-right: 20px;
    cursor: pointer;
  }
  .icon-delete,
  .icon-edit {
    width: 15px;
    height: 15px;
  }
  .tree-manage {
    padding: 19px 21px;
  }
  .icon {
    cursor: pointer;
  }
  .a-line {
    color: $subMenuActiveText;
    text-decoration: underline;
    cursor: pointer;
  }
}
</style>
