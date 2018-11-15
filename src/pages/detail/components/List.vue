<template>
    <div>
        <div class="item" v-for="(item,index) in categoryList" :key="index">
            <div class="item-title border-bottom">
                <span class="item-title-icon"></span>
                {{item.title}}
            </div>
            <div v-if="item.children" class="item-chilren">
                <detail-list :categoryList="item.children"></detail-list>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'DetailList',
    props:{
        categoryList:Array
    }
}
</script>
<style lang="scss" scoped>
    .item{
        .item-title{
            font-size:32px;
            height:80px;
            padding:0 20px;
            display:flex;
            align-items: center;
            .item-title-icon{
                background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -45px no-repeat;
                width:36px;
                height:36px;
                background-size:40px 300px;
                margin-right:10px;
            }
        }
        .item-chilren{
            padding:0 20px;
        }
    }
    
</style>
