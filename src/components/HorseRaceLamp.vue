<template>
    <div>
        <div class="demo" :style="{background:c}" v-for="(c,idx) in colors" :key=idx></div>
        <!-- 等同于如下写法 -->
        <!-- <div class="demo" style="background:black"></div>
        <div class="demo" style="background:red"></div>
        <div class="demo" style="background:green"></div> -->
    </div>
</template>
<script>
export default {
    name: 'HorseRaceLamp',
    data() {
        return {
            colors:['black','red','green'],
            timer:null
        }
    },
    created(){
    },
    computed:{
    },
    methods:{
    },
    mounted() {
        // 思路: 依次删除第一个 添加到最后一个
        // setTimeout(() => {
        //     this.colors = ['red','green','black']
        // }, 1000);   
        this.timer =  setInterval(() => {
            let last = this.colors.pop()
            console.log(last);
            this.colors.unshift(last)
        }, 1000);  
    },
    beforeDestroy() {
        // 注意定时器的销毁
        clearInterval(this.timer)
        this.timer = null
    },
}
</script>
<style lang="scss" scoped>
.demo{
    width: 50px;
    height: 50px;
    border: 1px solid #ddd;
}
</style>