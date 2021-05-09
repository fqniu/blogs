<template>
  <div class="skeleton-wrapper">
    <div class="side-container">
      <div class="title"></div>
      <div class="item" v-for="idx in 5" :key="idx"></div>
    </div>
    <div class="main-container flex">
      <div class="menu">
        <div class="menu-item" v-for="idx in 2" :key="idx"></div>
      </div>
      <div class="main">
        <div class="navbar">
          <div class="left"><span></span><i>/</i><span></span></div>
          <div class="right"></div>
        </div>
        <div class="app-main">
          <div class="load-container">
            <div class="boxLoading"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.skeleton-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
  background: #4646e6;
}
.side-container {
  width: 110px;
  background: #4646e6;
  height: 100%;
  overflow: hidden;
  float: left;
  .title {
    margin: 50px auto 50px;
    width: 70px;
    height: 70px;
    background-color: rgba(255, 255, 255, 0.45);
    border-radius: 35px;
  }
  .item {
    margin: 0 auto 30px;
    width: 70px;
    height: 110px;
    background-color: rgba(255, 255, 255, 0.45);
    border-radius: 35px;
  }
}
.main-container {
  float: right;
  width: calc(100% - 110px);
  height: 100%;
  border-radius: 40px 0 0 40px;
  .menu {
    width: 220px;
    height: 100%;
    background: #fff;
    padding-top: 50px;
    border-radius: 40px 0 0 40px;
    .menu-item {
      width: 160px;
      height: 50px;
      background: rgba(220, 220, 220, 0.6);
      margin-top: 20px;
      margin-left: 10px;
      border-radius: 8px;
    }
  }
}
.main {
  width: 100%;
  height: 80px;
  background: #fff;
  padding: 0 20px;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}
.navbar {
  overflow: hidden;
  .left {
    display: flex;
    align-items: center;
    padding: 0 20px;
    height: 80px;
    float: left;
    span {
      width: 60px;
      height: 18px;
      background-color: rgba(220, 220, 220, 0.6);
      border-radius: 6px;
    }
    i {
      margin: 0 9px;
      font-weight: 700;
      color: #c0c4cc;
    }
  }
  .right {
    float: right;
    width: 500px;
    height: 40px;
    margin-top: 20px;
    border-radius: 8px;
    background-color: rgba(220, 220, 220, 0.6);
  }
}
.main {
  width: 100%;
  height: 100%;
  position: relative;
  .load-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 100px;
    .boxLoading {
      width: 50px;
      height: 50px;
      margin: auto;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      &:before {
        content: "";
        width: 50px;
        height: 5px;
        background: #000;
        opacity: 0.1;
        position: absolute;
        top: 59px;
        left: 0;
        border-radius: 50%;
        animation: shadow 0.5s linear infinite;
      }
      &:after {
        content: "";
        width: 50px;
        height: 50px;
        background: #409eff;
        animation: animate 0.5s linear infinite;
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 3px;
      }
    }
  }
}

@keyframes animate {
  17% {
    border-bottom-right-radius: 3px;
  }
  25% {
    transform: translateY(9px) rotate(22.5deg);
  }
  50% {
    transform: translateY(18px) scale(1, 0.9) rotate(45deg);
    border-bottom-right-radius: 40px;
  }
  75% {
    transform: translateY(9px) rotate(67.5deg);
  }
  100% {
    transform: translateY(0) rotate(90deg);
  }
}

@keyframes shadow {
  0%,
  100% {
    transform: scale(1, 1);
  }
  50% {
    transform: scale(1.2, 1);
  }
}
</style>
