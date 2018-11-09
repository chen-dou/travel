<template>
    <div class="wrap">
        <div class="header">
            <div class="header-left iconfont">&#xe642;</div>
            <div class="header-center"><span class="iconfont">&#xe662;</span><span>输入城市/景点/游玩主题</span></div>
            <router-link to="city"><div class="header-right"><span class="iconfont">杭州 &#xe62b;</span></div></router-link>
        </div>
        <div class="banner ignore">
            <swiper :options="swiperOption" ref="mySwiper" v-if="swiperList.length">
                <!-- slides -->
                <swiper-slide v-for="item in swiperList" :key="item.id"><img :src="item.imgUrl"/></swiper-slide>
                <!-- Optional controls -->
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>        
        </div>
        <div class="nav ignore">
            <swiper :options="swiperOption2">
                <swiper-slide v-for="(list,index) in navPage" :key="index">    
                    <ul>
                        <li v-for="item in list" :key="item.id"><img :src="item.imgUrl"><p>{{item.desc}}</p></li>
                    </ul>
                </swiper-slide>
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>
        <div class="guesslike">
            <h3>猜你喜欢</h3>
            <div class="list">
                <ul>
                    <li v-for="item in recommendList" :key="item.id" class="border-bottom">
                        <img :src="item.imgUrl"/>
                        <div class="list-right">
                            <p class="title">{{item.title}}</p>
                            <p class="desc">{{item.desc}}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="weekend">
            <h3>周末去哪儿</h3>
            <div class="list">
                <ul>
                    <li v-for="item in weekendList" :key="item.id">
                        <img :src="item.imgUrl"/>
                        <div class="list-right">
                            <p class="title">{{item.title}}</p>
                            <p class="desc">{{item.desc}}</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data () {
        return {
            lastCity: '',
            swiperList: [],
            iconList: [],
            recommendList: [],
            weekendList: [],
            swiperOption:{
                autoplay:true,
                loop:true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable :true
                }
            },
            swiperOption2:{
                pagination: {
                    el: '.swiper-pagination',
                    clickable :true
                }
            }
        }
    },
    async mounted(){
        this.getData()
    },
    methods:{
        async getData(){
            try{
                let res = await axios.get('/api/index.json')
                res = res.data
                if(res.ret&&res.data){
                    res = res.data
                    this.swiperList = res.swiperList
                    this.weekendList = res.weekendList
                    this.iconList = res.iconList
                    this.recommendList = res.recommendList
                }
            }catch(err){
                console.log(err)
            }
        }
    },
    computed:{
        navPage(){
            let arr = []
            let page = ''
            this.iconList.forEach(function(item,key){
                page = Math.floor(key/8)
                if(!arr[page]){
                    arr[page] = []
                }
                arr[page].push(item)
            })
            return arr                
        }
    }
}
</script>
<style lang="scss" scoped>
    .weekend{
        h3{
            font-size:32px;
            padding-left:26px;
            color:#212121;
            line-height:70px;
        }
        .list{
            ul{
                li{
                    padding:20px 0;
                    img{
                        width:100%;
                        height:38.01%;
                        display:block;
                    }
                    .list-right{
                        padding:14px 20px 0px 20px;
                        .title{
                            color:#212121;
                            line-height:48px;
                            font-size:28px;
                        }
                        .desc{
                            line-height:42px;
                            overflow: hidden;
                            text-overflow:ellipsis;
                            white-space: nowrap;
                            font-size:24px;
                            color:#616161;
                        }
                    }    
                }
            }
        }    
    }
    .guesslike{
        padding:0 24px;
        h3{
            font-size:32px;
        }
        .list{
            ul{
                li{
                    display:flex;
                    padding:20px 0;
                    
                    img{
                        width:200px;
                        height:200px;
                        margin-right:22px;
                    }
                    .list-right{
                        flex:1;
                        display:flex;
                        flex-direction:column;
                        justify-content:space-around;
                        min-width:0;
                        .title{
                            color:#212121;
                            font-size:28px;
                        }
                        .desc{
                            overflow: hidden;
                            text-overflow:ellipsis;
                            white-space: nowrap;
                            font-size:24px;
                            color:#616161;
                        }
                    }    
                }
            }
        }
    }
    .nav{
        height:0;
        padding-bottom:380px;
        padding-top:10px;
        overflow:hidden;
        ul{
            display:flex;
            flex-wrap:wrap;
            li{
                margin-top:10px;
                width:25%;
                text-align:center;
                img{
                    width:110px;
                    height:110px;
                }
                p{
                    font-size:28px;
                    color:#212121;
                    margin-top:10px;
                }
            }
        }    
    }
    .nav.ignore{
        /deep/ .swiper-container{
            overflow:visible;
            .swiper-pagination{
                bottom:-15px !important;
                font-size:0;
                .swiper-pagination-bullet{
                    width:6px !important;
                    height:6px !important;
                    background:rgba(144,144,144,0.8);
                    opacity:1;
                    margin:0 5px;
                }
                .swiper-pagination-bullet-active{
                    background:rgba(0,175,190,.8);   
                } 
            }  
        }  
    }
    .header{
        background:#00bcd4;
        height:88px;
        display:flex;
        .header-left{
            font-size:44px;
            color:#fff;
            padding-left:10px;
            flex:0 0 80px;
            width:80px;
            line-height:88px;
            box-sizing:border-box;
        }
        .header-center{
            font-size:28px;
            background:#fff;
            border-radius:6px;
            flex:1;
            margin:14px 0;
            color:#e4e7ea;
            line-height:60px;
            padding:0 20px;
            span:nth-of-type(1){
                font-size:36px;
                margin-right:14px;
            }
            span:nth-of-type(2){
                font-size:30px;
            }
        }
        .header-right{
            width:132px;
            text-align:center;
            color:#fff;
            line-height:88px;
            span{
                font-size:28px;
            }
        }
    }
    .banner.ignore{
        /deep/ .swiper-pagination{
            font-size:0;
            bottom:5px !important;
            .swiper-pagination-bullet{
                width:6px !important;
                height:6px !important;
                background:rgba(255,255,255,.5);
                opacity:1;
                margin:0 5px;
            }
            .swiper-pagination-bullet-active{
                background:rgba(255,255,255,1);   
            } 
        }
    }
    .banner{
        width:750px;
        height:0;
        padding-bottom:31.25%;
    }
</style>
