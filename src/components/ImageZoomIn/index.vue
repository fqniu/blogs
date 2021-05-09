<template>
  <div class="iamge-zoomIn">
    <ul class="ul-wrapper">
      <li class="li-item" v-for="(item,index) in imagesList" :key="item.imgUrl">
        <img :src="item.imgUrl" alt class="li-img" @click.stop="zoomIn(item.imgUrl, index)" />
        <div class="delete-img" @click.stop="deleteImg(item)" v-show="deleteImgBtn">
          <img src="@/assets/img/icon-图片删除.png" alt="">
        </div>
      </li>
    </ul>

    <div class="img-zoomIn" v-if="isShow" @click.stop="closeImg">
      <div class="zoomIn-wrapper">
        <img :src="showZoomInImg" alt />
        <div class="change-btn">
          <div class="icon-left" @click.stop="leftBtn()">
            <img src="@/assets/img/icon-上一张.png" alt="">
          </div>
          <div class="icon-right" @click.stop="rightBtn()">
            <img src="@/assets/img/icon-下一张.png" alt="">
          </div>
        </div>
        <div class="close-img" @click="closeImg">X</div>
        <div class="img-num">
          <span>{{imgNum + 1 }} / {{imagesList.length}}</span>
          <span style="margin-left:10px">共{{imagesList.length}}张</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  components: {},
  props: {
    imagesList:{
      type: Array,
      required: true,
      default:()=>{
        return []
      }
    },
    deleteImgBtn:{
      type:Boolean,
      default:true
    }
  },
  data() {
    return {
      isShow: false,
      showZoomInImg: "",
      imgNum: ""
    };
  },
  methods: {
    // 删除
    deleteImg(item){
      // console.log(item);
      this.$emit('deleteImg',item)
    },
    // 放大
    zoomIn(url, index) {
      this.isShow = true;
      this.showZoomInImg = url;
      this.imgNum = index;
    },
    // 关闭
    closeImg() {
      this.isShow = false;
    },
    // 切换-左
    leftBtn() {
      console.log(this.imgNum);
      if (this.imgNum <= 0) {
        this.imgNum = this.imagesList.length;
      }
      this.imgNum--;
      this.showZoomInImg = this.imagesList[this.imgNum].imgUrl;
    },
    // 切换-右
    rightBtn() {
      this.imgNum++;
      console.log(this.imgNum);
      if (this.imgNum >= this.imagesList.length) {
        this.imgNum = 0;
      }
      this.showZoomInImg = this.imagesList[this.imgNum].imgUrl;
    }
  }
};
</script>
<style  lang="scss" scoped>
.ul-wrapper {
  display: flex;
  position: relative;
}
.li-item {
  width: 60px;
  height: 60px;
  margin-right: 12px;
  cursor: pointer;
  position: relative;
  .li-img {
    width: 100%;
    height: 100%;
    border-radius: 3px;
  }
  .delete-img{
    position: absolute;
    top: -14px;
    right: -7px;
    width: 14px;
    height: 14px;
    img{
      width: 100%;
      height: 100%;
    }
  }
}
.img-zoomIn {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 99999;
}
.zoomIn-wrapper {
  width: 721px;
  height: 560px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  img {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    background: rgba(0, 0, 0, 0.1);
  }
}
.close-img {
  position: absolute;
  top: 4%;
  right: 4%;
  color: #fff;
  cursor: pointer;
}
.icon-left {
  position: absolute;
  top: 50%;
  left: -20%;
  color: #fff;
  cursor: pointer;
}
.icon-right {
  position: absolute;
  top: 50%;
  right: -25%;
  color: #fff;
  cursor: pointer;
}
.img-num {
  height: 46px;
  padding: 0px 20px;
  border-radius: 26px 26px;
  color: #fff;
  background: rgba(0, 0, 0, 0.2);
  position: absolute;
  bottom: -12%;
  left: 50%;
  text-align: center;
  line-height: 46px;
  transform: translate(-50%);
}
</style>
