<template>
	<div class="loading" v-if="!ready">
		<div class="static-loading-wrapper" :hidden="ready">
			<!-- <image src="/static/loading-icon.png"  class="loadimg"></image>
			<div class="loadtips">加载中..</div> -->
      <div class="main">
        <div class="app-main">
          <div class="load-container">
            <div class="boxLoading"></div>
          </div>
        </div>
      </div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		ready:{
			type:Boolean,
			default:false
		},
	},
	data() {
		return {

		}
	},
};
</script>

<style scoped lang="scss">

@keyframes quan {
	0% {
		-webkit-transform: rotate(0);
		transform: rotate(0);
	}
	to {
		-webkit-transform: rotate(360deg);
		transform: rotate(360deg);
	}
}
.static-loading-wrapper {
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	z-index: 9999;
	background-color: #fff;
}
.loadtips {
	position: fixed;
	color: #333;
	font-family: 'NotoSans-Light, NotoSans-Light-Edge, Arial, Helvetica, sans-serif';
	font-size: 32px;
	width: 100%;
	height: 32px;
	top: 140px;
	bottom: 0;
	margin: auto;
	text-align: center;
}
.loadimg {
	width: 120px;
	height: 120px;
	position: fixed;
	top: -72px;
	bottom: 0;
	right: 0;
	left: 0;
	margin: auto;
	animation: quan 0.7s linear infinite;
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
        width: 120px;
        height: 10px;
        background: #000;
        opacity: 0.1;
        position: absolute;
        top: 109px;
        left: -10px;
        border-radius: 50%;
        animation: shadow 0.5s linear infinite;
      }
      &:after {
        content: "";
        width: 100px;
        height: 100px;
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
