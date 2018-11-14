<template>
    <div>
        <div class="header" ref="header">
            <div class="header-top">
                <router-link to="/"><div class="iconfont">&#xe642;</div></router-link>
                <h3>城市选择</h3>
            </div>
            <div class="header-bottom">
                <input type="text" v-model="keyword" placeholder="输入城市名或拼音">
            </div>
            <div class="search-content" v-show="keyword" ref="search">
                <ul>
                    <li v-for="item in searchList" :key="item.id" @click="handleCityClick(item.name)">{{item.name}}</li>
                    <li v-show="hasNoData">没有找到匹配数据</li>
                </ul>
            </div>  
        </div>
        <div class="list-wrap" ref="wrapper">
            <div>
                <div class="list">
                    <div class="currentcity city">
                        <h4>当前城市</h4>
                        <ul>
                            <li class="border">{{city}}</li>
                        </ul>
                    </div>
                    <div class="currentcity city">
                        <h4>热门城市</h4>
                        <ul>
                            <li class="border" v-for="item in hotCities" :key="item.id" @click="handleCityClick(item.name)">{{item.name}}</li>
                        </ul>
                    </div>
                </div>
                <div class="citysort">
                    <div class="city" v-for="(item,key) in cities" :Key="key" :ref="key">
                        <h4>{{key}}</h4>
                        <ul>
                            <li v-for="innerItem in item" :key="innerItem.id" @click="handleCityClick(innerItem.name)">{{innerItem.name}}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="character">
            <ul>
                <li v-for="item in letters" :key="item" :ref="item+item" @click="handleLetterClick(item)" @touchstart="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd">{{item}}</li>
            </ul>
        </div>        
    </div>
</template>
<script>
import BScroll from 'better-scroll'
import axios from 'axios'
import {mapActions,mapState} from 'vuex'
export default {
    data(){
        return {
            cities:{},
            hotCities:[],
            letter:'',
            touchStatus:false,
            keyword:'',
            searchList:[]
        }
    },
    methods:{
        handleCityClick(city){
            this.changeCity(city)
            this.$router.push('/')
        },
        ...mapActions(['changeCity']),
        getCityInfo(){
            return new Promise((resolve,reject)=>{
                axios.get('/api/city.json').then((res)=>{
                    res = res.data
                    if(res.ret&&res.data){
                        const data = res.data
                        this.cities = data.cities
                        this.hotCities = data.hotCities
                    }
                    resolve()
                }) 
            })
               
        },
        handleLetterClick(letter){
            this.letter = letter
        },
        handleTouchStart(){
            this.touchStatus = true        
        },
        handleTouchMove(e){
            if(this.touchStatus){
                if(this.timer2){
                    clearTimeout(this.timer2)
                }
                this.timer2 = setTimeout(()=>{
                    const touchY = e.touches[0].clientY-this.headerH
                    const index = Math.floor((touchY-this.startY)/18)
                    if(index>=0 && index<this.letters.length){
                        this.letter = this.letters[index]
                    }        
                },16)
            }    
        },
        handleTouchEnd(){
            this.touchStatus = false
        }
    },
    watch:{
        letter(){
            const element = this.$refs[this.letter][0]
            this.scroll.scrollToElement(element)
        },
        keyword(){
            if(this.timer){
                clearTimeout(this.timer)
            }
            if(!this.keyword){
               this.searchList = []
                return
            }
            this.timer = setTimeout(()=>{
                const result = []
                for(let i in this.cities){
                    this.cities[i].forEach((v,k)=>{
                        if(v.name.indexOf(this.keyword)!=-1||v.spell.indexOf(this.keyword)!=-1){
                            result.push(v)
                        }
                    })
                }
                this.searchList = result
                this.$nextTick(()=>{
                    this.scroll2 = new BScroll(this.$refs.search,{click:true})     
                })
            },100)
        }    
    },
    computed:{
        ...mapState([
            'city'
        ]),
        hasNoData(){
           return !this.searchList.length
        },
        letters(){
            var letters = []
            for(let i in this.cities){
                letters.push(i)
            }        
            return letters
        }
    },
    async mounted(){
        this.scroll = new BScroll(this.$refs.wrapper,{
            click: true
        })
        await this.getCityInfo()
        this.$nextTick(()=>{
            this.startY = this.$refs.AA[0].offsetTop
            this.headerH = this.$refs.header.offsetHeight 
        })
    }
}
</script>
<style lang="scss" scoped>
    .search-content{
        position:absolute;
        top:165px;
        bottom:0;
        left:0;
        right:0;
        z-index:999;
        background:#eee;
        overflow:hidden;
        li{
            line-height:62px;
            padding-left:20px;
            background:#fff;
            color:#666;
            font-size:28px;
        }
    }
    .character{
        position:fixed;
        display:flex;
        flex-direction:column;
        justify-content:center;
        right:10px;
        top:165px;
        bottom:0;
        li{
            font-size:20px;
            color:#ccc;
        }
    }
    .list-wrap{
        position:absolute;
        top:164px;
        left:0;
        bottom:0;
        right:0;
        overflow:hidden;
    }
    .citysort{
        ul{
            li{
                font-size:24px;
                padding:20px;
                &+li{
                    border-top:1px solid #eee;
                }
            }
        }
    }
    .city{
        h4{
            padding-left:13px;
            background:#eee;
            font-size:26px;
            line-height:54px;
            color:#666;
        }
    }
    .list{
        .currentcity{
            ul{
                display:flex;
                padding:0 20px 20px;
                flex-wrap:wrap;
                margin-left:-20px;
                li{
                    padding:5px 50px;
                    font-size:24px;
                    margin:20px 0 0 20px;
                    color:#666;
                    &.border:before{
                        content:'';
                        border-radius:5px;
                        border-color:#ccc;
                    }  
                }
            }
        }
    }
    .header{
        padding:0 10px 10px;
        background:#00bcd4;
        .header-top{
            color:#fff;
            position:relative;
            line-height:86px;
            .iconfont{
                font-size:46px;
                position:absolute;
                left:0;
                top:0;
                color:#fff;
            }
            h3{
                display:flex;
                justify-content:center;
                font-size:32px;
            }
        }
        .header-bottom{
            input{
                padding:0 10px;
                border-radius:6px;
                text-align:center;
                border:none;
                width:100%;
                box-sizing:border-box;
                color:#666;
                font-size:32px;
                height:62px;
            }
        }
    }
</style>
