<template>
    <div class="wrap">
        <div class="header">

        </div>
        <div class="banner ignore">
            <swiper :options="swiperOption" ref="mySwiper">
                <!-- slides -->
                <swiper-slide>I'm Slide 1</swiper-slide>
                <swiper-slide>I'm Slide 2</swiper-slide>
                <!-- Optional controls -->
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>        
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            swiperOption:{
                delay: 3000,
                autoplay:true,
                loop:true,
                pagination: {
                el: '.swiper-pagination',
                clickable :true
                }
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    .banner.ignore{
        /deep/ .swiper-pagination-bullet{
            width:8px !important;
            height:8px !important;
        } 
    }
    .banner{
        width:750px;
        height:600px;
        /deep/ .swiper-container{
            height:600px;
        }
    }
</style>
