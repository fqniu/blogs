<template>
  <!-- <div>
    <a-input-search
      placeholder="请输入内容"
      enter-button
      @search="onSearch"
      style="width: 300px"
    />
    <a-input-search
      placeholder="请输入内容"
      enter-button
      @search="onSearch2"
      style="width: 300px"
    />
    <div v-drag class="ipt">
      <a-input-search
        placeholder="请输入内容"
        enter-button
        @search="test1"
        style="width: 300px"
      />
    </div>
    <div>
      <a-input-search
        placeholder="请输入内容"
        enter-button
        @search="test2"
        style="width: 300px"
      />
    </div>
    <div>
      <a-input-search
        placeholder="请输入内容"
        enter-button
        @search="test3"
        style="width: 300px"
      />
    </div>
    <div>
      <a-button type="primary" @click="getdata($event)">按钮</a-button>
    </div>
    <test @change="showData($event)"></test>
    {{ test }}

    <h1 v-drag class="drag"></h1>

    <div v-fontSize="40">牛奶</div>

    <input type="button" value="按钮" @click="toggle" />
    <transition-group name="fade">
      <div class="box" v-if="isShow" :key="1">123</div>
    </transition-group>
  </div> -->
  <div>
    <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="success">成功按钮</el-button>
    <el-button type="info">信息按钮</el-button>
    <el-button type="warning">警告按钮</el-button>
    <el-button type="danger">危险按钮</el-button>
  </div>
</template>
<script>
// import { search, searchHint } from "@/api/test";
// import { getCityArea } from "@/api/test2";
// import test from "../../components/test";

export default {
  name: "homePage",
  components: {
    // test,
  },
  data() {
    return {
      test: "",
      isShow: false,
    };
  },
  created() {},
  computed: {},
  methods: {
    showData(val) {
      console.log(val);
      this.test = val;
    },
    async getdata(e) {
      // let params = {

      // }
      // let res = await getCityArea(params)
      // console.log(res)
      console.log(e);
    },
    // async onSearch(value){
    //     let params = {
    //         q : value
    //     }
    //     let res = await search(params)
    //     console.log(res)
    // },
    // async onSearch2(){
    //     // let params = {
    //     //     q : value
    //     // }
    //     let res = await searchHint()
    //     console.log(res)
    // },

    test1(value) {
      //->调用第一个个接口的请求服务
      let params = {
        q: value,
      };
      let url = `/search?&t=all&p=1&s=0&tm=0&lv=-1&ft=0&l=&u=&ct=-1&pnt=-1&ry=-1&ss=-1&dct=-1&platform=pc`;
      this.reqM1Service(url, params, "get").then((res) => {
        console.log(res);
      });
    },
    test2(value) {
      console.log(value);
      //->调用第二个个接口的请求服务
      let params = {};
      // https://silkroad.csdn.net/api/v2/assemble/list/channel/pc_hot_word?channel_name=pc_hot_word&size=10&platform=pc&imei=10_30706525170-1612333398942-258444
      let url =
        "/assemble/list/channel/pc_hot_word?channel_name=pc_hot_word&size=10&platform=pc&imei=10_30706525170-1612333398942-258444";
      this.reqM2Service(url, params, "get").then((res) => {
        console.log(res);
      });
    },
    test3() {
      //->调用第三个个接口的请求服务
      let url = "/screen/intelligentDelivery/returnToCity";
      let params = {};
      this.reqM3Service(url, params, "get").then((res) => {
        console.log(res);
      });
    },
    toggle() {
      this.isShow = !this.isShow;
    },
  },
  mounted() {
    console.log(this.$el);
    // this.$el.style.backgroundColor = "green"
  },
  directives: {
    fontSize: function (el, binding) {
      el.style.fontSize = binding.value + "px";
    },
  },
};
</script>

<style scoped lang="scss" >
.example {
  text-align: center;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  margin-bottom: 20px;
  padding: 30px 50px;
  margin: 20px 0;
}
.ipt {
  position: fixed;
  z-index: 99;
  right: 10px;
  bottom: 85px;
  width: 40px;
  height: 40px;
}
.drag {
  width: 200px;
  height: 200px;
  background: #ccc;
  text-align: center;
  line-height: 200px;
  color: #fff;
  cursor: move;
  position: fixed;
  z-index: 99;
  right: 10px;
  bottom: 85px;
  width: 40px;
  height: 40px;
}
.box {
  width: 200px;
  height: 200px;
  background: #ccc;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 2s;
}
.fade-enter-to,
.fade-leave {
  opacity: 1;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateY(100px);
}
</style>