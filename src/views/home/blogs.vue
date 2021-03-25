<template>
  <div>
    <!-- <EditTableField :val="obj.nickname"></EditTableField>
        <EditTableField :val="obj.age"></EditTableField>
        <EditTableField :val="obj.gender"></EditTableField>
        <ImgPreview :imgSrc="imgSrc"></ImgPreview>
        <MoreImgPreview :imgSrcList="imgSrcList"></MoreImgPreview>
        <Drawer v-model="visible" :position='pos' height="300px" width="500px">
            <div>内容</div>
        </Drawer>
        <button @click="showDrawer()">按钮</button> -->
    <!-- <Calendar></Calendar> -->
    <!-- <ul>
            <li v-for="(item,index) in list" :key='index'>{{item.areaName}}</li>
        </ul>
        <Pagination :total='total' :page-size='pageSize' v-model="pageIndex"></Pagination> -->
    <!-- 这里的change是为了拿到里面的页数  用v-model也可以 -->
    <!-- {{pageIndex}} -->
    <!-- <Pagination :total='15' :page-size='5' @change='pageIndex=$event'></Pagination> -->
    <!-- <Pagination :total='15' :page-size='5'></Pagination>
        <Pagination :total='20'></Pagination> -->
    <div>博客</div>
    <div class="block">
      <!-- <span class="demonstration">默认</span> -->
      <el-date-picker
        v-model="value1"
        type="daterange"
        range-separator="—"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        value-format="yyyy-MM-dd"
      >
      </el-date-picker>
    </div>
  </div>
</template>
<script>
// import {getPageData,getCityArea} from '../../api/test'
// import EditTableField from "../../components/EditTableField";
// import ImgPreview from "../../components/SingleImagePreview";
// import MoreImgPreview from "../../components/MoreImagePreview";
// import Drawer from '../../components/Drawer';
// import Calendar from '../../components/Calendar';
// import Pagination from '../../components/Pagination';
export default {
  name: "blogs",
  components: {
    // EditTableField,
    // ImgPreview,
    // MoreImgPreview,
    // Drawer,
    // Calendar,
    // Pagination
  },
  data() {
    return {
      // obj: {
      //   nickname: "fqniu",
      //   age: 24,
      //   gender: "male",
      // },
      // imgSrc:
      //   "https://wallpaperm.cmcm.com/live/preview_img_raw/e1150dfe0cb7ff8cd08647d1936627f3_preview_raw.jpg",
      // imgSrcList: [
      //   "https://wallpaperm.cmcm.com/live/preview_img_raw/e1150dfe0cb7ff8cd08647d1936627f3_preview_raw.jpg",
      //   "http://pic4.bbzhi.com/fengjingbizhi/22cungaoqingkuanpingfengjingbizhi/22cungaoqingkuanpingfengjingbizhi_354063_10.jpg",
      //   "http://img3.iqilu.com/data/attachment/forum/201308/22/162302kr33om9mkog93tm7.jpg",
      // ],
      // visible: false,
      // // pos:'left',
      // // pos:'right',
      // pos: "top",
      // // pos:'bottom',

      // pageIndex: 1,
      // pageSize: 50,
      // total: null,
      // list: [],
      value1: "",
    };
  },
  computed: {},
  methods: {
    showDrawer() {
      this.visible = !this.visible;
      // this.$emit()
    },
    async getData() {
      let params = {
        // 页数
        page: this.pageIndex,
        limit: this.pageSize,
        // 市和区
        city: "",
        district: "",
        // 半径
        r: "",
        // 经纬度
        lon: "",
        lat: "",
        // 行业
        tmt: "",
        secondTmt: "",
        // 日曝光量
        dayExposure: "",
        // 男女比例
        ratio: "",
      };
      let { data } = await getPageData(params);
      // let data = await getCityArea()
      console.log(data);
      this.list = data.advertInfoList;
      this.total = data.total;
    },
  },
  created() {
    // this.getData()
  },
  watch: {
    pageIndex() {
      this.getData();
    },
  },
};
</script>
<style lang="scss" scoped>
</style>