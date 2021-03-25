<template>
    <div class="drawer"  v-if="value"  @click="innerVisible=false">
        <div class="container" :style="{width,height}" v-if="value" :class="position"  @click.stop>
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Drawer',
    props:{
        value:{
            type:Boolean,
            default:false
        },
        width:{
            type:String,
            // default:'300px'
        },
        height:{
            type:String,
            // default:'300px'
        },
        position:{
            type:String,
            default:'left'
        }
    },
    data() {
        return {
            innerVisible:this.value
        }
    },
    watch:{
        value(){
            this.innerVisible = this.value
        },
        innerVisible(val){
            this.$emit('input',val)
        }
    },
    created(){
        
    },
    computed:{

    },
    methods:{
        
    },
}
</script>
<style lang="scss" scoped>
.container{
    position: fixed;
    background: #fff;
    z-index: 999;
}
.drawer{
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    z-index: 9;
}
.container.left{
    position: absolute;
    height: 100%;
    left:0;
    top: 0;
}
.container.right{
    position: absolute;
    height: 100%;
    right:0;
    top: 0;
}
.container.top{
    position: absolute;
    width: 100%;
    left:0;
    top: 0;
}
.container.bottom{
    position: absolute;
    width: 100%;
    left:0;
    bottom: 0;
}
</style>