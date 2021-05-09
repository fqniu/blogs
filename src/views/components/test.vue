<template>
    <div>
      <div @click="handle()">测试按钮</div>
      <div>{{item.val}}</div>
      <div @click="add()">+</div>
      <div @click="subtract()">-</div>
    </div>
</template>
<script>
export default {
    name: 'test',
    props:{
      item:{
        type:Object,
        default:()=>{
          return {}
        }
      }
    },
    data() {
      return {
      }
    },
    created(){
    },
    computed:{
    },
    methods:{
      handle(){
        this.$emit('handle', this.item)
      },
      add(){
        // this.item.val++ 
        this.$emit('add',this.item)
      },
      subtract(){
        // this.item.val--
        this.$emit('subtract',this.item)
      }
    },
}
</script>
<style lang="scss" scoped>

</style>