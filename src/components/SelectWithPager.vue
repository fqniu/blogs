<template>
    <div>
      <a-popover placement="bottomLeft" trigger="click" v-model="visible">
            <template slot="content">
                <ul class="list">
                    <li v-for="(item,idx) in options" :key="idx" @click="setVal(item)">{{item.areaName}}</li>
                </ul>
                {{pageIndex}}
                <a-pagination size="small" v-model="pageIndex" :total="total" :page-size="pageSize" />
            </template>
            <template slot="title">
                <span>Title</span>
            </template>
            <div class="sb-select-pager flex">
                <div>{{currentItem.areaName}}</div>
                <a-icon type="down" class="select-icon" :class="{up:visible}"></a-icon>
            </div>
        </a-popover>
    </div>
</template>
<script>
// 注意这里需要进一步根据情况封装请求接口
import {getPageData} from '../api/test'
export default {
    name: 'SelectWithPager',
    props:{
        value:{
            type:Number || String,
            default:0
        },
        actionUrl:{
            type:String,
            required:true,
        }
    },
    data() {
        return {
            visible:false,
            currentItem:[],
            options:[],
            pageIndex:1,
            pageSize:10,
            total:0,
        }
    },
    created(){
        // 请求分页数据
        this.getList()
        this.currentItem = this.options.find((r)=>{
            r.id ===  this.value
        }) || {}
      
    },
    watch: {
        // 当pageIndex变化时调用函数
        pageIndex(){
            this.getList()
        }
    },
    computed:{
    },
    methods:{
        setVal(val){
            this.currentItem = val
            console.log(val);
            this.visible = false
            this.$emit("change",{...this.currentItem})
            this.$emit("input",val.id)
        },
        // 请求分页数据
        async getList(){
            let params = {
                page : this.pageIndex, 
                limit: this.pageSize,
                city: '',
                district:'',
                r: '',
                lon: '',
                lat:'',
                tmt: '',
                secondTmt: '',
                dayExposure: '',
                ratio: '',
                // actionUrl:actionUrl
                // actions-url 地址可以传递进去 方便修改地址不同，请求的数据不同
            }
            let {data} = await getPageData(params)
            console.log(data)
            // 注意这里可以将接口中的字段改为组件所需要的字段 map转换
            this.options = data.advertInfoList
            this.total = Number(data.total)
        }
    },
}
</script>
<style lang="scss" scoped>
.flex{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}
.list li:hover{
    cursor: pointer;
    background: #ccc;
}
.sb-select-pager{
    width: 200px;
    height: 40px;
    border: 1px solid #ccc;
    margin: 50px;
}
.select-icon{
   transition: 0.5s; 
}
.up{
    transform:rotate(180deg);
}
</style>