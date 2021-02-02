<template>
    <div class="home">
        <div class="header">
            <div class="nav-left" @click="gotoHome()">行走的恒星</div>
            <div class="nav-right">
                <div class="nav-item" 
                    v-for="(item, idx) in tabbar" :key="idx" 
                    @click="tabChange(idx,item.path)"
                    :class="{active:tabIndex === idx}"
                >
                    {{ item.value }}
                </div>
            </div>
        </div>
        <div class="main">
            <router-view></router-view>
        </div>
        <div class="footer">2021 想念你的第某天</div>
    </div>
</template>
<script>
export default {
    name: "home",
    data() {
        return {
            tabbar: [
                {
                    value: "首页",
                    path:'homePage'
                },
                {
                    value: "博客",
                    path:'blogs'
                },
                {
                    value: "内容",
                    path:'detailsCenter'
                },
                {
                    value: "我的",
                    path:'mine'
                },
            ],
            tabIndex:0,
        };
    },
    methods: {
        gotoHome(){
            this.$router.push({ name:'home' });
        },
        tabChange(index,path){
            this.tabIndex = index
            this.$router.push({ name: `${path}` });
        }
    },
    created() {
        // this.tabChange()
    },
    computed: {},
};
</script>

<style lang="scss" scoped>
.home-title {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    text-align: center;
}
.header {
    width: 100%;
    overflow: hidden;
    background: #fff;
    .nav-left {
        float: left;
        text-align: center;
        height: 100%;
        line-height: 88px;
        padding: 0 20px;
        background: #f5f5f5;
    }
    .nav-right {
        float: right;
    }
    .nav-item {
        width: 88px;
        height: 100%;
        text-align: center;
        line-height: 88px;
        float: left;
        cursor: pointer;
        &:hover{
            color: rgb(35, 226, 226);    
        }
    }
    .active{
        color: rgb(35, 226, 226);
    }
}
.main{
    width: 100%;
    height: 500px;
}
.footer {
    width: 100%;
    height: 88px;
    background: #f5f5f5;
}
</style>