<template>
    <div>
        <div @click="showData($event)">测试子组件到父组件的传值</div>
    </div>
</template>
<script>
export default {
    name: 'test',
    data() {
        return {
        }
    },
    created(){
    },
    computed:{
    },
    methods:{
        showData(val){
            console.log(val)
            // this.$emit('change',val)
            this.$emit('change','hello world')
        }
    },
}
</script>
<style lang="scss" scoped>

</style>