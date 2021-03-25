<template>
    <div>
        <div v-if="isEdit">
            <input type="text" v-model='newVal'>
            <button @click="save">保存</button>
            <button @click="cancel">取消</button>
        </div>
        <div v-else @dblclick="edit">{{newVal}}</div>
    </div>
</template>
<script>
export default {
    name: 'EditTableField',
    props:['val'],
    data() {
        return {
            newVal:this.val,
            bakup:null,
            isEdit:false,
            nameCom: 'EditTableField',
        }
    },
    created(){
    },
    computed:{
    },
    methods:{
        cancel(){
            this.newVal = this.bakup
            this.isEdit = false
        },
        save(){
            this.isEdit = false
        },
        edit(){
            this.bakup = this.newVal
            // 拿到所有的父级下的子级元素
            // console.log(this.$parent.$children)
            console.log(this.$parent.$children.filter(item=>item.nameCom === 'EditTableField'))
            // 让其他的编辑框都隐藏
            this.$parent.$children.filter(item=>item.nameCom === 'EditTableField').forEach(item=>{
                item.isEdit = false
            })
            this.isEdit = true
        }
    },
}
</script>
<style lang="scss" scoped>

</style>