<template>
    <div>
        <div class="container">
            <ul class="flex">
                <li v-for='(item,index) in "日一二三四五六"' :key="index" >{{item}}</li>
            </ul>
            <ul class="flex content">
                <li v-for="(z,index) in repairBefore" :key="index" class="disabled">{{z}}</li>
                <li 
                    v-for='(d,index) in monthDays' 
                    :key="index" 
                    :class="{active:isToday(d)}"
                >
                    {{d}}
                </li>
                <li v-for='(z,index) in repairAfter' :key="index" class="disabled">{{z}}</li>
            </ul>
            {{repairBefore}}
        </div>  
    </div>
</template>
<script>
export default {
    name: 'Calendar',
    data() {
        return {
            // globalDate:new Date('2021-02-05'),
            globalDate:new Date(),
            today:new Date()
        }
    },
    created(){
    },
    computed:{
        monthDays(){
            // switch(this.globalDate.getMonth() + 1){
            //     case 1: case 3: case 5: case 7: case 8: case 10: case 12: 
            //         return 31
            //         // break;
            //     case 4: case 6: case 9: case 11:
            //         return 30
            //         // break;
            //     case 2:
            //         return 28
            //         // break;
            // }
            let res = [31,28,31,30,31,30,31,31,30,31,30,31][this.globalDate.getMonth()]
            let year = this.globalDate.getFullYear()
            // 如果是闰年 并且是二月，则天数+1
            if(((year % 4 == 0 && year % 100 !== 0) || year % 400 === 0) && this.globalDate.getMonth()==1){
                res += 1
            }
            return res 
        },
        repairBefore(){
            let firstDay = new Date(this.globalDate)
            firstDay.setDate(1)
            let days = firstDay.getDay()
            let res = []
            for (let i = 0; i < days; i++) {
                firstDay.setDate(firstDay.getDate() - 1)
                res.unshift(firstDay.getDate())
            }
            return res
        },
        repairAfter(){
            let lastDay = new Date(this.globalDate)
            lastDay.setDate(this.monthDays)
            let days = 6 - lastDay.getDay()
            let res = []
            for (let i = 1; i <= days; i++) {
                res.push(i)
            }
            return res
        }
    },
    methods:{
        isToday(d){
            return this.today.getDate() === d &&
            this.today.getMonth() === this.globalDate.getMonth() &&
            this.today.getFullYear() === this.globalDate.getFullYear()
        }
    },
}
</script>
<style lang="scss" scoped>
ul{
    padding: 0;
    margin: 0;
}
.flex{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}
.container{
    width: 420px;
    border: 1px solid #ccc;
    // box-sizing: border-box;
}
.container ul{
    width: 420px;
}
.container li{
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    
}
.content li{
    // box-sizing: border-box;
    box-shadow: 0 0 1px #aaa;
}
.content li:hover{
    cursor: pointer;
    background: #ccc;
}
.content li.disabled{
    background: rgba(0,0,0,0.1);
    color: #666;
    cursor: not-allowed;
}
.content li.active{
    background: red;
    color: #fff;
}
</style>