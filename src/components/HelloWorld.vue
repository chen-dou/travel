<template>
  <div class="hello ignore">
    <h1 class="">{{ msg }}</h1>
    <div class="iconfont">&#xe662;</div>
    <div class="iconfont">&#xe642;</div>
    <div class="iconfont">&#xe62b;</div>
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide>I'm Slide 1</swiper-slide>
      <swiper-slide>I'm Slide 2</swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '陈豆',
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss" scoped>
.hello{
  width:750px;
  background:#f00;
  
}
.hello h1{
    font-size:36px;
    color:#fff;
  }
</style>
