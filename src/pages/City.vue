<template>
    <div>
        <div class="header">
            <div class="header-top">
                <router-link to="/"><div class="iconfont">&#xe642;</div></router-link>
                <h3>城市选择</h3>
            </div>
            <div class="header-bottom">
                <input type="text" placeholder="输入城市名或拼音">
            </div>
        </div>
        <div class="list-wrap" ref="wrapper">
            <div>
            <div class="list">
                <div class="currentcity city">
                    <h4>当前城市</h4>
                    <ul>
                        <li class="border">上海</li>
                        <li class="border">上海</li>
                        <li class="border">上海</li>
                        <li class="border">上海</li>
                        <li class="border">上海</li>
                    </ul>
                </div>
                <div class="currentcity city">
                    <h4>热门城市</h4>
                    <ul>
                        <li class="border">上海</li>
                        <li class="border">上海</li>
                        <li class="border">上海</li>
                        <li class="border">上海</li>
                        <li class="border">上海</li>
                        <li class="border">上海</li>
                        <li class="border">上海</li>
                        <li class="border">上海</li>
                        <li class="border">上海</li>
                    </ul>
                </div>
            </div>
            <div class="citysort">
                <div class="city">
                    <h4>A</h4>
                    <ul>
                        <li>阿拉尔</li>
                        <li>阿拉尔</li>
                        <li>阿拉尔</li>
                        <li>阿拉尔</li>
                    </ul>
                </div>
                <div class="city">
                    <h4>B</h4>
                    <ul>
                        <li>阿拉尔</li>
                        <li>阿拉尔</li>
                        <li>阿拉尔</li>
                        <li>阿拉尔</li>
                    </ul>
                </div>
                <div class="city">
                    <h4>C</h4>
                    <ul>
                        <li>阿拉尔</li>
                        <li>阿拉尔</li>
                        <li>阿拉尔</li>
                        <li>阿拉尔</li>
                    </ul>
                </div>
                <div class="city">
                    <h4>D</h4>
                    <ul>
                        <li>阿拉尔</li>
                        <li>阿拉尔</li>
                        <li>阿拉尔</li>
                        <li>阿拉尔</li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
        <div class="character">
            <ul>
                <li>A</li>
                <li>A</li>
                <li>A</li>
                <li>A</li>
                <li>A</li>
                <li>A</li>
            </ul>
        </div>        
    </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
    data(){
        return {
            msg:'123'
        }
    },
    mounted(){
        this.scroll = new BScroll(this.$refs.wrapper)
    }     
}
</script>
<style lang="scss" scoped>
    .character{
        position:fixed;
        right:10px;
        top:660px;
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
