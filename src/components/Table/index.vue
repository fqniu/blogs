<template>
  <el-table
    :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%"
  >
    <el-table-column type="selection" width="55" />
    <el-table-column  label="任务名称" prop="date" width="300">
      <div class="table-item-task-name flex-center">
        <img src="@/assets/img/icon-专项任务.png" alt="" class="mr06">
        <div class="table-text">巡视酒店各区域</div>
      </div>
    </el-table-column>
    <el-table-column  label="任务状态" prop="name" width="100">
      <div class="table-item-task-status">
        待执行
      </div>
    </el-table-column>
    <el-table-column  label="任务状标签" prop="name" width="300">
      <div class="table-item-task-tags">
        <img src="@/assets/img/icon-草稿.png" alt="">
      </div>
    </el-table-column>
    <el-table-column  label="截止时间" prop="name" width="150">
      <div class="table-item-stop-time">
        01-11 23:59
      </div>
    </el-table-column>
    <el-table-column  label="执行门店" prop="name" width="200">
      <div class="table-text">
        城市便捷白云山店
      </div>
    </el-table-column>
    <el-table-column  label="操作管理" prop="name" width="300">
      <div class="flex"> 
        <div class="operation-btn history flex-center-center mr10">
          <img src="@/assets/img/icon-历史.png" alt="" class="mr06">
          <div>历史</div>
        </div>
        <div class="operation-btn statistics flex-center-center mr10">
          <img src="@/assets/img/icon-统计.png" alt="" class="mr06">
          <div>统计</div>
        </div>
        <div class="operation-btn execute flex-center-center mr10" >
          <img src="@/assets/img/icon-执行.png" alt="" class="mr06">
          <div>执行</div>
        </div>
      </div>
    </el-table-column>
    <!-- <el-table-column align="right">
      <template slot="header" slot-scope="scope">
        <el-input
          v-model="search"
          size="mini"
          placeholder="输入关键字搜索"
          @input="ipt(scope)"
        />
      </template>
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
      </template>
    </el-table-column> -->
  </el-table>
</template>

<script>
export default {
    name: "index",
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        search: ''
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    },
  }
</script>

<style lang="scss" scoped>
@import "~@/styles/mixin.scss";
@import "~@/styles/variables.scss";
::v-deep .el-table__row{
  height: 59px;
}
::v-deep .has-gutter tr{
  height: 78px;
}
.table-text{
  font-size: 12px;
  color: $menuActiveText;
}
.operation-btn{
  color: #fff;
  padding: 0 8px;
  border-radius: 4px;
  cursor: pointer;
  img{
    display: block;
  }
}
.history{
  background: #7373D5;
}
.statistics{
  background: #32BA8E;
}
.execute{
  background: #2872F0;
}
</style>