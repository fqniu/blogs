<template>
  <div class="steps">
    <div class="step-box">
      <div class="item" v-for="(item,index) of dataSource" :key="index">
        <div>
          <img class="img" src="@/assets/img/icon-节点完成.png" v-if="item.checked" />
          <img class="img" src="@/assets/img/icon-节点未开始.png" v-if="!item.checked" />
          <div class="line"  :class="[item.checked && index !== 2 ? 'cur' : 'hidden-border']" v-if="index !==dataSource.length -1"></div>
        </div>
        <div class="progress flex fs14">
          <div v-if="index == 0">审批申请</div>
          <div v-else>{{numberToUpperCase(index - 1)}}级审批</div>
          <div class="progress-title" :class="{unstart: !item.checked }" >{{item.name}}</div>
          <div class="progress-title pass" v-if="index==1">【审批通过】</div>
          <div class="progress-title reject" v-if="index==2">【已驳回】</div>
          <div class="progress-title unstart" v-if="index==3">【未开始】</div>
        </div>
        <div class="auditor fs12" :class="{unstart: !item.checked}">{{item.auditor}} <span v-if="item.userRoleName">({{item.userRoleName}})</span></div>
        <div class="time">{{item.time}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import {numberToUpperCase} from '@/utils'

export default {
  props: {
    dataSource: {
      type: Array
    }
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    numberToUpperCase,
  },
  mounted() {},
  watch: {}
};
</script>
<style lang="scss" scoped>
@import "~@/styles/mixin.scss";
@import "~@/styles/variables.scss";
.steps {
  .step-box {
    display: flex;
    // width: 1064px;
    width: 100%;
    overflow: hidden;
    .item {
      position: relative;
      display: flex;
      flex: 1;
      flex-direction: column;
    }
    .img {
      width: 16px;
      height: 16px;
      vertical-align: middle;
    }
    .line {
      position: absolute;
      top: 8px;
      left: 16px;
      width: 95%;
      border-bottom: 1px dashed #eaebf2;
    }
    .progress-title {
      font-size: 14px;
      color: #333333;
      font-weight: 600;
    }
    .progress {
      margin: 7px 0 5px;
    }
    .pass {
      color: #32ba8e;
    }
    .reject {
      color: #ef6e49;
    }
    .unstart {
      color: $menuText;
    }
    .auditor{
      margin: 5px 0 5px;
    }
    .time {
      width: 115px;
      font-size: 12px;
      color: #cccdd8;
      line-height: 17px;
      margin-top: 5px;
    }
    .cur {
      border-bottom: 1px solid $subMenuActiveText;
    }
  }
}
</style>
