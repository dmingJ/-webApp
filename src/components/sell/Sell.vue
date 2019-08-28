<template>
<div class="View" ref="sellerView">
    <div class="seller" >
        <div class="seller-content">
            <div class="topview">
                <div class="leftview">
                    <span class="title-name">{{seller.name}}</span>
                    <span class="sell-text">({{seller.ratingCount}})</span>
                    <span class="sell-text">月售{{seller.sellCount}}单</span>
                    <start class="start-list"/>
                </div>
                <div class="heart">
                    <i class="icon-favorite"></i>
                    <br><span class="favorite">已收藏</span>
                </div>
            </div>
            <div class="bottomview">
                <div class="view-block">
                    <span class="view-text">起送价</span>
                    <span class="view-count">{{seller.minPrice}}</span>元
                </div>
                <div class="view-block">
                    <span class="view-text">商家配送</span>
                    <span class="view-count">
                        {{seller.deliveryPrice}}</span>元
                </div>
                <div class="view-block">
                    <span class="view-text">评价配送时间</span>
                    <span class="view-count">
                        {{seller.deliveryTime}}</span>分钟
                </div>
            </div>
        </div>
        <reline></reline>
        <div class="roal-active">
            <span class="active-title">公告与活动</span><br>
            <span class="active-content">{{seller.bulletin}}</span>
            <div>
                <ul v-if="seller.supports" class="preference">
                    <li v-for="(item,index) in seller.supports" :key="index" class="icon-li seller-li">
                        <img :src="seller.supports[index].icon" class="icon-img">
                        <p class="icon-list">{{seller.supports[index].description}}</p>
                    </li>
                </ul>
            </div>
        </div>
        <reline></reline>
        <div class="sellerImg">
            <div class="shop-title">商家实景</div>
            <div class="shop-img" ref="picWrapper">
                <ul class="pic-list" ref="picList">
                    <li class="pic-item" v-for="(pic,index) in seller.pics" :key="index">
                        <img :src="pic" alt="" width="120" height="90">
                    </li>
                </ul>
            </div>
        </div>
        <reline></reline>
        <div class="info">
            <div class="shop-title">商家信息</div>
            <div>
            <ul>
                <li class="info-list" v-for="(item,index) in seller.infos" :key="index">
                    {{item}}
                </li>
            </ul>
        </div>
        </div>
        
    </div>
</div>
</template>
<script>
import start from '@/views/start/start'
import BScroll from 'better-scroll'
import reline from '@/views/ratingsdata/reline'
import shopcart from '../shopcart/shopcart'
    export default{
        components:{
            start,
            reline,
            shopcart
        },
        data() {
           return{
               seller:{}
           }
        },
        watch:{
            'seller'(){
                this._initPics();
            }
        },
        methods:{
            _initPics(){
                if(this.seller.pics){
                let picWidth = 120;
                let margin = 6;
                let width = (picWidth+margin)*this.seller.pics.length-margin;
                this.$refs.picList.style.width = width
                this.$nextTick(() => {
                    this.picScroll = new BScroll(this.$refs.picWrapper,{
                        scrollX:true,
                        eventPassthrough: 'vertical'
                    })
                })
            }
            }
        },
        mounted(){
            this._initPics();
        },
        created() {
            this.axios.get('http://192.168.1.105:8080/data.json').then((res) => {
                this.seller = res.data.seller
                this.$nextTick(() => {
                this.scroll = new BScroll(this.$refs.sellerView,{
                    click: true
                })
            })
            })
        }
    }
</script>

<style lang="stylus">
.View
    position absolute
    width 100%
    top 174px
    left 0
    bottom 0
    overflow hidden
.seller
    .seller-content
        margin 18px
        .topview
            padding-bottom 18px 
            border-bottom 1px solid rgba(7,17,27,.1)
            display flex
            .leftview
                flex 1
                .title-name
                    font-size 14px
                    color rgb(7,17,27)
                    line-height 14px
                    font-weight bold
                .start-list  
                    margin 8px 0  
                    width 100%     
                    span
                        background-size 20px
                        width 20px
                .sell-text
                    margin 0px 12px 0px 8px
                    font-size 10px
                    color rgb(77,85,93)
                    line-height 18px    
            .heart
                flex 0 0 40px
                .icon-favorite
                    font-size 24px
                    color rgb(240,20,20)
                    line-height 24px
                .favorite
                    font-size 10px
                    color rgb(77,85,93)
                    line-height 10px
                    
.bottomview
    display flex
    .view-block
        margin 18px 0
        flex 1                   
        border-right 1px solid rgba(7,17,27,0.1)
        text-align center
        font-size 10px
        &:last-child
            border none
        .view-text
           font-size 10px
           color rgb(147,153,159) 
           line-height 10px
           display block
           margin-bottom 4px
        .view-count
            font-size 24px
            font-weight 200 
            color rgb(7,17,27)
            line-height 24px
.roal-active
    margin 18px
    font-size 14px
    .active-content
        margin 8px 12px
        font-size 12px
        font-weight 200
        color rgb(240,20,20)
        line-height 24px
.seller-li
    margin 0
    border-bottom 1px solid rgba(7,17,27,.3)
    &:last-child
        border none           
.sellerImg
    padding 18px
    .shop-title
        margin-bottom 12px
        line-height 14px
        color rgb(7,17,27)
        font-size 14px
    .pic-list
        width 100%
        overflow hidden
        white-space nowrap
        .pic-item
            display inline-block
            margin-right 6px
.info
    padding 18px
    padding-bottom 20px
.info-list
    margin 16px 12px
    border-bottom 1px solid rgba(7,17,27,.3)
    font-size 12px
    font-weight 200
    color rgb(7,17,27)
    line-height 16px
    padding-bottom 16px
    &:last-child
        border none
</style>
