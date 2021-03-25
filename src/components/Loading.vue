<template>
	<div class="loading" v-if="!ready">
		<div class="static-loading-wrapper" :hidden="ready">
			<image src="/static/loading-icon.png"  class="loadimg"></image>
			<div class="loadtips">加载中..</div>
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
</style>
