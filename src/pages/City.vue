<template>
    <div>
        <div class="header">
            <div class="header-top">
                <div class="iconfont">&#xe642;</div>
                <h3>城市选择</h3>
            </div>
            <div class="header-bottom">
                <input type="text" placeholder="输入城市名或拼音">
            </div>
        </div>
        <div class="list">
            <div class="currentcity city">
                <h4>当前城市</h4>
                <ul>
                    <li>上海</li>
                    <li>上海</li>
                    <li>上海</li>
                    <li>上海</li>
                    <li>上海</li>
                </ul>
            </div>
            <div class="hotcity city">
                <h4>热门城市</h4>
                <ul>
                    <li></li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            msg:'123'
        }
    }       
}
</script>

<style lang="scss" scoped>
    .list{
        .city{
            h4{
                padding-left:13px;
                background:#eee;
                font-size:26px;
                line-height:54px;
                color:#666;
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
