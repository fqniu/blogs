<template>
    <div class="container">
        <div>title</div>
        <ul class="titles">
            <li v-for="(item,idx) in titles" :key="idx"
            :class="{active:idx===active}"
            @click="active=idx"
            >{{item}}</li>
        </ul>
        <div>
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: 'TabControl',
    props:{
        value:{
            type:Number,
            required:true,
            default:0
        }
    },
    data() {
        return {
            titles:[],
            active:0
        }
    },
    created(){
    },
    computed:{
    },
    methods:{
    },
    mounted() {
        console.log(this.$children)
        // 当前组件中的孩子组件的个数
        // this.$children[2].show = true
        this.$children[this.active].show = true
    },
    watch: {
        active(idx){
            this.$children.forEach((item,j)=>{
                item.show = idx === j
            })
            // 或者写法如下
            // this.$children.forEach(item=>{
            //     item.show  = false
            // })
            // this.$children[idx].show = true

            // 把当前的i传递给外面
            this.$emit('input',idx)
        }
    },
}
</script>
<style lang="scss" scoped>
.container{
    width: 600px;
    // border: 1px solid red;
}
.container .titles{
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid #ccc;
 
}
.container .titles li{
    flex: 1;
    text-align: center;
    padding: 20px;
}
.container .titles .active{
    color: red;
    border-bottom: 2px solid red;
}
</style>