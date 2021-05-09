<template>
  <el-table
    :data="tableData"
    style="width: 100%"
  >
    <!-- :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))" -->
    <el-table-column  :label="item.title" :prop="tableData[index].name" :width="[index==0 ? '380':'130']" v-for="(item,index) in tableTitle" :key="index">
      <template v-if="index == 0" slot-scope="scope">
        <div class="table-item-task-name flex-center">
          <img src="@/assets/img/icon-专项任务.png" alt="" class="mr06">
          <div class="table-text">{{scope.row.name}}</div>
        </div>
      </template>
      <template v-if="index > 0" slot-scope="scope">
        <div class="table-text">{{scope.row.name}}</div>
      </template>
    </el-table-column>
    <!-- <el-table-column  label="任务名称" prop="date" width="380" >
      <div class="table-item-task-name flex-center">
        <img src="@/assets/img/icon-专项任务.png" alt="" class="mr06">
        <div class="table-text">巡视酒店各区域</div>
      </div>
    </el-table-column>
    <el-table-column  label="任务总数" prop="name" width="130">
      <div class="table-text">
        0
      </div>
    </el-table-column>
    <el-table-column  label="待执行" prop="name" width="130">
      <div class="table-text">
        0
      </div>
    </el-table-column>
    <el-table-column  label="待审核" prop="name" width="130">
      <div class="table-text">
        0
      </div>
    </el-table-column>
    <el-table-column  label="已执行" prop="name" width="130">
      <div class="table-text">
        0
      </div>
    </el-table-column>
    <el-table-column  label="超期执行" prop="name" width="130">
      <div class="table-text">
        0
      </div>
    </el-table-column>
    <el-table-column  label="草稿" prop="name" width="130">
      <div class="table-text">
        0
      </div>
    </el-table-column>
    <el-table-column  label="已驳回" prop="name" width="130">
      <div class="table-text">
        0
      </div>
    </el-table-column>
    <el-table-column  label="代执行" prop="name" width="130">
      <div class="table-text">
        0
      </div>
    </el-table-column> -->
  </el-table>
</template>

<script>
export default {
    name: "Table",
    data() {
      return {
        tableTitle:[
          {
            title:'任务名称',
          },
          {
            title:'任务总数',
          },
          {
            title:'待执行',
          },
          {
            title:'待审核',
          },
          {
            title:'已执行',
          },
          {
            title:'超期执行',
          },
          {
            title:'草稿',
          },
          {
            title:'已驳回',
          },
          {
            title:'代执行',
          },
        ],
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
::v-deep .has-gutter tr th:nth-child(1){
  padding-left: 50px;
}
::v-deep .has-gutter tr th{
  font-size: 14px;
  color: #333333;
  font-weight: 900;
}
.table-text{
  font-size: 12px;
  color: $menuActiveText;
}
.table-item-task-name{
  padding-left: 50px;
}
</style>