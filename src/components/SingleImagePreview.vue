<template>
    <div>
        <img class="image-small"
            :src="imgSrc"
            alt=""
            @click="isPreview=true"
        />
        <div class="preview-img" v-if="isPreview" @click.stop="handleClick" @click="isPreview=false">
            <img class="image-big"
                :src="imgSrc"
                alt=""
            />
        </div>
    </div>
</template>
<script>
export default {
    name: "SingleImagePreview",
    props:{
        imgSrc:{
            type:String,
            defalut:''
        }
    },
    data() {
        return {
            isPreview:false,
            showImg:true
        };
    },
    created() {},
    computed: {},
    methods: {
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
    background: rgba(255,255,255, 0.2);
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>