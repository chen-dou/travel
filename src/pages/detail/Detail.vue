<template>
    <div>
        <detail-banner :bannerImg="bannerImg" :sightName="sightName" :gallaryImgs="gallaryImgs"></detail-banner>
        <detail-header></detail-header>
        <div class="content">
            <detail-list :categoryList="categoryList"></detail-list>
        </div>
        <div style="height:1000px;">{{this.$route.params.id}}{{this.$store.state.city}}</div>
    </div>
</template>
<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'
export default {
    name:'Detail',
    components:{
        DetailBanner,
        DetailHeader,
        DetailList
    },
    data(){
        return {
            bannerImg:'',
            sightName:'',
            gallaryImgs:[],
            categoryList:[]
        }
    },
    methods:{
        getDetailData(){
            axios.get('/api/detail.json',{
                params:{
                    id: this.$route.params.id
                }
            }).then(this.getRes)
        },
        getRes(res){
            res = res.data
            if(res.ret && res.data){
                const data = res.data
                this.bannerImg = data.bannerImg
                this.sightName = data.sightName
                this.gallaryImgs = data.gallaryImgs
                this.categoryList = data.categoryList
            }
        }
    },
    mounted(){
        this.getDetailData()
    }
}
</script>
<style>

</style>
