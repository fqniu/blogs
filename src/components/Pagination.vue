<template>
    <div>
        <ul class="page flex">
            <li v-show="current>1" @click="current=1">first</li>
            <li :class="{disaled:current==1}" @click="current--" >prev</li>
            <li class="item" 
                :class="{active:item===current}"
                v-for='(item,index) in pageCount' :key="index"
                @click="current=item"
            >{{item}}</li>
            <li  :class="{disaled:current==pageCount}" @click="current++">nest</li>
            <li  v-show="current<pageCount"  @click="current=pageCount">last</li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'Pagination',
    props:{
        total:{
            // type:Number,
            required:true,
            default:10
        },
        pageSize:{
            type:Number,
            default:10
        },
        value:{
            type:Number,
            defalult:1
        }
    },
    data() {
        return {
            current:this.value,
        }
    },
    created(){
    },
    computed:{
        pageCount(){
            return Math.ceil(this.total/this.pageSize)
        }
    },
    methods:{
    },
    watch: {
        current(val){
            if(val < 1) this.current = 1
            else if(val > this.pageCount) this.current = this.pageCount
            // 把带有当前页数传递出去
            this.$emit('input',this.current)
        }
    },
}
</script>
<style lang="scss" scoped>
.page{
    display: flex;
}
.page li{
    border: 1px solid red;
    width: 30px;
    height: 30px;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 2px;
    -moz-user-select: none;
    cursor: pointer;
}
.page li:not(.item){
    width: 50px;
}
.page li.active{
    background: red;
    color: #fff;
}
.page li.disaled{
    background: #ccc;
    color: #eee;
    border: 1px solid #eee;
    cursor: not-allowed;
}
</style>