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
    
    .ignore >>> .swiper-pagination-bullet{
        width:8px;
        height:8px;
    }
    .banner{
        width:750px;
        height:600px;
        >>> .swiper-container{
            height:750px;
        }
    }
</style>
