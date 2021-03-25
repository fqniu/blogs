<template>
    <div class="container">
        <div class="wrapper">
            <div>
                {{label}}
            </div>
            <ul class="item-li">
                <li :class="{active:idx===active}" 
                    v-for="(item,idx) in itemCount" :key="idx"
                    @click="active=idx"
                ></li>
            </ul>
            <div class="flex btns">
                <div class="arrow" @click="active--">←</div>
                <div class="arrow"  @click="active++">→</div> 
            </div>
        </div>

        <div>
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: "TabControl",
    props: {
        value: {
            type: Number,
            required: true,
            default: 0,
        },
        label:{
            type:String,
        }
    },
    data() {
        return {
            titles: [],
            active: 0,
            itemCount:0
        };
    },
    methods: {},
    computed: {
        // itemCount(){
        //     return this.$children.length
        // }
    },
    created() {},
    mounted() {
        console.log(this.$children);
        // 当前组件中的孩子组件的个数
        this.itemCount = this.$children.length

        this.$children[0].show = true
    },
    watch: {
        active(idx){
            let max = this.$children.length
            if(idx < 0) this.active = max - 1
            else if(idx >= max) this.active = 0
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
};
</script>
<style lang="scss" scoped>
.flex{
    display: flex;
    justify-content: center;
    align-items: center;
}
.container {
    width: 600px;
    border: 1px solid red;
}
.container .item-li {
    display: flex;
    justify-content: center;
    align-items: center;
}
.container .item-li li {
    text-align: center;
    padding: 20px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #ddd;
    cursor: pointer;
}
.container .item-li .active {
    color: red;
    background: #aaa;
}
.wrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-content: center;
}
.btns{
    margin: 0 10px;
    cursor: pointer;
}
.btns .arrow{
    padding: 0 10px;
}
</style>