<template>
    <div class="home">
        <div class="fz-14">home</div>
        <div class="test">
            {{tip}}
            {{moduleTip}} 
        </div>
      
    </div>
</template>
<script>
import {getCityArea} from '@/api/test'
export default {
    name: 'home',
    data() {
        return {

        }
    },
    created(){
        this.getData()
    },
    computed:{
    },
    methods:{
        async getData(){
            let res  = await getCityArea()
        }
    },
}
</script>
<style lang="scss" scoped>
.test{
    font-size: 24px;
}
</style>