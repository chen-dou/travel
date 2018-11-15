<template>
    <div class="banner" @click="handleGallaryClick">
        <swiper :options="swiperOption" ref="mySwiper">
            <!-- slides -->
            <swiper-slide v-for="(item,index) in gallaryImgs" :key="index"><img :src="item"/></swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>             
    </div>
</template>
<script>
export default {
    props:{
        gallaryImgs:Array
    },
    data(){
        return {
            swiperOption:{
                pagination:{
                    el: '.swiper-pagination',
                    type: 'fraction',
                },
                observeParents: true,
                observer: true
            }       
        }
    },
    methods:{
        handleGallaryClick(){
            this.$emit('close')
        }
    }
}
</script>
<style lang="scss" scoped>
    .banner{
        /deep/ .swiper-container{
            width:750px;
            overflow:visible;
        }
    } 
    .banner{
        position:fixed;
        z-index:999;
        top:0;
        bottom:0;
        left:0;
        right:0;
        display:flex;
        align-items:center;
        background:#000;
        img{
            width:750px;
        }
        .swiper-pagination{
            color:#fff;
            bottom:0px;
            bottom:-100px;
        }
    }    
</style>
