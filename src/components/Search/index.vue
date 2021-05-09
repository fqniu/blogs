<template>
    <div class="operation-flex" style="width: 100%">
      <!-- 时间 -->
      <div class="flex task-time">
        <div class="operation-text">时间</div>
        <el-date-picker
          v-model="selectedDate"
          type="daterange"
          range-separator="—"
          start-placeholder="开始时间"
          end-placeholder="结束时间"
          value-format="yyyy-MM-dd"
          @blur="handleDate"
        >
        </el-date-picker>
      </div>
      <!-- 任务类型 -->
      <div class="flex task-type" style="width:120px">
        <div class="operation-text">任务类型</div>
        <el-select
          v-model="selectedTaskType"
          placeholder="全部"
          @change="handleTaskType(selectedTaskType)"
        >
          <el-option
            v-for="item in options"
            :key="item.selectedValue"
            :label="item.label"
            :value="item.label"
          >
          </el-option>
        </el-select>
      </div>
      <!-- 任务周期 -->
      <div class="flex" style="width: 120px">
        <div class="operation-text">任务周期</div>
        <el-select
          v-model="selectedTaskPeriod"
          placeholder="全部"
          @change="handleTaskPeriod(selectedTaskPeriod)"
        >
          <el-option
            v-for="item in options"
            :key="item.selectedValue"
            :label="item.label"
            :value="item.label"
          >
          </el-option>
        </el-select>
      </div>

      <div class="flex" style="width: 120px">
        <div class="operation-text">是否待执行</div>
        <el-select
          v-model="selectedIsExecute"
          placeholder="全部"
          @change="handleIsExecute(selectedIsExecute)"
        >
          <el-option
            v-for="item in options"
            :key="item.selectedValue"
            :label="item.label"
            :value="item.label"
          >
          </el-option>
        </el-select>
      </div>

      <div class="flex" style="width:120px">
        <div class="operation-text">报备情况</div>
        <el-select
          v-model="selectedReportCase"
          placeholder="全部"
          @change="handleReportCase(selectedReportCase)"
        >
          <el-option
            v-for="item in options"
            :key="item.selectedValue"
            :label="item.label"
            :value="item.label"
          >
          </el-option>
        </el-select>
      </div>

      <!-- 任务名称 -->
      <div class="flex" style="width: 240px">
        <div class="operation-text">任务名称</div>
        <el-input
          v-model="iptTaskName"
          placeholder="请输入内容"
          @change="handleTaskName"
        ></el-input>
      </div>

      <div class="flex" style="width: 120px">
        <div class="operation-text">任务对象</div>
        <el-select
          v-model="selectedTaskObj"
          placeholder="全部"
          @change="handleTaskObj(selectedTaskObj)"
        >
          <el-option
            v-for="item in options"
            :key="item.selectedValue"
            :label="item.label"
            :value="item.label"
          >
          </el-option>
        </el-select>
      </div>

      <el-button type="primary" @click="taskSearch">搜索</el-button>
      <el-button plain @click="taskReset">重置</el-button>

      <div>显示已报备</div>

      <div class="flex" style="width: 240px">
        <el-select
          v-model="selectedFormType"
          placeholder="选择报表类型"
          @change="handleFormType"
        >
          <el-option
            v-for="item in options"
            :key="item.selectedValue"
            :label="item.label"
            :value="item.label"
          >
          </el-option>
        </el-select>
      </div>

      <div>导出Excel</div>
    </div>
</template>
<script>
export default {
  name: "Search",
  props: {
    taskTime:{
      
    }
  },
  data() {
    return {
      // 下拉选项
      options: [
        {
          selectedValue: "选项1",
          label: "黄金糕",
        },
        {
          selectedValue: "选项2",
          label: "双皮奶",
        },
        {
          selectedValue: "选项3",
          label: "蚵仔煎",
        },
        {
          selectedValue: "选项4",
          label: "龙须面",
        },
        {
          selectedValue: "选项5",
          label: "北京烤鸭",
        },
      ],
      selectedDate: "",
      selectedTaskType: "",
      selectedTaskPeriod: "",
      selectedIsExecute: "",
      selectedReportCase: "",
      iptTaskName: "",
      selectedTaskObj: "",
      selectedFormType: "",
    };
  },
  created() {},
  computed: {},
  methods: {
    // 时间
    handleDate() {
      console.log(this.selectedDate);
    },
    // 任务类型
    handleTaskType() {
      console.log("任务类型", this.selectedTaskType);
    },
    // 任务周期
    handleTaskPeriod() {
      console.log("任务周期", this.selectedTaskPeriod);
    },
    // 是否待执行
    handleIsExecute() {
      console.log("是否待执行", this.selectedIsExecute);
    },
    // 报备情况
    handleReportCase() {
      console.log("报备情况", this.selectedReportCase);
    },
    // 任务名称
    handleTaskName() {
      console.log("任务名称", this.iptTaskName);
    },
    // 任务对象
    handleTaskObj() {
      console.log("任务对象", this.selectedTaskObj);
    },
    // 报表类型
    handleFormType() {
      console.log("报表类型", this.selectedFormType);
    },
    // 搜索和重置
    taskSearch() {
      console.log("搜索");
    },
    taskReset() {
      console.log("重置");
      this.selectedDate = "";
      this.selectedTaskType = "";
      this.selectedTaskPeriod = "";
      this.selectedIsExecute = "";
      this.selectedReportCase = "";
      this.iptTaskName = "";
      this.selectedTaskObj = "";
      this.selectedFormType = "";
    },
    // 全部
    handleAll(value) {
      console.log("全部", value);
    },
  },
};
</script>
<style lang="scss" scoped>
.operation-flex {
  display: flex;
  flex-wrap: wrap;
}
.container {
  padding: 20px;
}
.operation-text {
  display: flex;
  justify-content: center;
  align-items: center;
}
::v-deep .el-date-editor .el-range__icon {
  position: absolute;
  right: 0;
}
::v-deep .el-range-separator {
  color: #ccc;
}
</style>