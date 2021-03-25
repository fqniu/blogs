<template>
    <div v-show="show">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'TabItem',
    props:{
        label:{
            type:String
        }
    },
    data() {
        return {
            show:false
        }
    },
    created(){
        // 当前组件中的父亲组件中的参数
        console.log(this.$parent.titles)
        this.$parent.titles.push(this.label)
    },
    computed:{

    },
    methods:{

    },
}
</script>
<style lang="scss" scoped>

</style>