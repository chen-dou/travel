<template>
    <div>
        <router-link to="/" tag="div" class="iconfont header-back" v-show="showAbs">&#xe642;</router-link>
        <div class="header-fixed" v-show="!showAbs" ref="title" :style="styleObj">景点详情</div>
    </div>
</template>
<script>
export default {
    name:'DetailHeader',
    data(){
        return {
            showAbs:true,
            styleObj:{
                opacity:0
            }
        }
    },
    methods:{
        handleScroll(){
            console.log(6666)
            const top = document.documentElement.scrollTop
            if(top>60){
                let opacity = top / 140
                opacity = opacity > 1 ? 1 : opacity
                this.styleObj = {opacity}
                this.showAbs = false    
            }else{
                this.showAbs = true         
            } 
        }
    },
    mounted(){
        window.addEventListener('scroll',this.handleScroll)
    },
    /*deactivated(){
        window.removeEventListener('scroll',this.handleScroll)    
    }*/
    destroyed(){
        console.log('destroyed')
        window.removeEventListener('scroll',this.handleScroll)
    }
}
</script>
<style>
    .header-back{
        position:absolute;
        left:20px;
        top:20px;
        width:80px;
        height:80px;
        background:rgba(0,0,0,.8);
        text-align:center;
        color:#fff;
        line-height:80px;
        font-size:40px;
        border-radius:40px;
    }
    .header-fixed{
        z-index:999;
        position:fixed;
        top:0;
        left:0;
        right:0;
        text-align:center;
        color:#fff;
        font-size:32px;
        line-height:80px;
        background:#00bcd4;
    }
</style>
