<template>
    <div>
        <img
            class="image-small"
            :src="img"
            alt=""
            @click="visibleImg(img)"
            v-for="(img,index) in imgSrcList"
            :key='index'
        />
        <div
            class="preview-img"
            v-if="isPreview"
            @click="isPreview = false"
        >
            <img class="image-big" :src="currentImg" alt="" @click.stop />
        </div>
    </div>
</template>
<script>
export default {
    name: "MoreImagePreview",
    props:{
        imgSrcList:{
            type:Array,
            default:()=>{
                return []
            }
        }
    },
    data() {
        return {
            currentImg:'',
            isPreview:false
        };
    },
    created() {},
    computed: {},
    methods: {
        visibleImg(img){
            this.isPreview = true
            this.currentImg = img
        },
        handleClick(e){
            console.log(e)
            // 阻止事件冒泡 或者用@click.stop
            e.stopPropagation();
            // this.isPreview=false;
        }
    },
};
</script>
<style lang="scss" scoped>
.image-small{
    width: 200px;
    height: 100px;
}
.image-big{
    width: 500px;
    height: 300px;
}
.preview-img {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0, 0.2);
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>