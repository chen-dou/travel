<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" :src="bannerImg">
            <div class="banner-info">
                <div class="banner-title">{{sightName}}</div>
                <div class="banner-number"><span class="iconfont">&#xe796;</span>{{gallaryImgs.length}}</div>
            </div>
        </div>
        <fade-animation>
            <common-gallary :gallaryImgs="gallaryImgs" @close="handleGallaryClose" v-show="showGallary"></common-gallary>  
        </fade-animation>  
    </div>
</template>
<script>
import CommonGallary from 'common/gallary/Gallary'
import FadeAnimation from 'common/fade/FadeAnimation'
export default {
    name:'DetailBanner',
    components:{
        CommonGallary,
        FadeAnimation
    },
    props:{
        bannerImg:String,
        sightName:String,
        gallaryImgs:Array,
    },
    data(){
        return {
            showGallary:false
        }
    },
    methods:{
        handleBannerClick(){
            this.showGallary = true
        },
        handleGallaryClose(){
            this.showGallary = false    
        }
    }
}
</script>
<style lang="scss" scoped>
.banner{
    position:relative;
    .banner-img{
        width:750px;
    }
    .banner-info{
        position:absolute;
        bottom:0;
        left:0;
        right:0;
        display:flex;
        color:#fff;
        align-items:center;
        background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
        .banner-title{
            font-size:32px;
            flex:1;
        }
        .banner-number{
            background: rgba(0, 0, 0, .8);
            padding:0 40px;
            font-size:24px;
            border-radius:20px;
        }   
    }
}
</style>
