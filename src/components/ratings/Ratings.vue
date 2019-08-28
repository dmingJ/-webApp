<template>
    <div class="ratings" ref="Ratings">
        <div class="ratings-content">
            <div class="overview">
                <div class="view-left">
                    <div class="score">{{seller.score}}</div>
                    <div class="ratings-title">综合评分</div>
                        <div class="rank">高于周边商家{{seller.rankRate}}%</div>
                </div>
                <div class="view-right">
                    <div class="score-wrapper">
                        <span class="title">服务态度</span>
                        <start class="ratings-start"/>
                        <div class="start-score">{{seller.foodScore}}</div>
                    </div>
                    <div class="score-wrapper">
                        <span class="title">服务态度</span>
                        <start class="ratings-start"/>
                        <div class="start-score">{{seller.foodScore}}</div>
                    </div>
                    <div class="score-wrapper">
                        <span class="title">送达时间</span>
                        <div class="delive">{{seller.deliveryTime}}分钟</div>
                    </div>

                </div>
            </div>
            <div class="downview">
                <ratingstitle></ratingstitle>
                <div class="ratings-list">
                    <ul>
                        <li v-for="(item,index) in ratings" :key="index" class=" ratingsList">
                            <div class="avatar_img"><img :src="item.avatar" alt="" width="28" height="28"></div>
                            <div class="avater-conter">
                                <div class="avatar-title">
                                    <span class="avatar-name">{{item.username}}</span>
                                    <span class="avatar-time">{{item.rateTime}}</span>
                                </div>
                                <div class="start-time">
                                    <start class="start-list"/>
                                    <span class="gettime">{{item.deliveryTime}}分送达</span>
                                </div>
                                <div>
                                    <div class="content-text">{{item.text}}</div>
                                    <div ><i class="icon-thumb_up ratings-icon" ></i>
                                        
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
import BScroll from 'better-scroll'
import start from '@/views/start/start'
import ratingstitle from '@/views/ratingsdata/ratingstitle.vue'
    export default{
        data (){
            return{
                ratings:{}
            }
        },
        props: {
            seller:{
                type:Object
            },
        },
        created() {
            this.axios.get('http://192.168.1.105:8080/data.json').then((res) => {
                this.ratings = res.data.ratings
                this.$nextTick(() => {
                this.scroll = new BScroll(this.$refs.Ratings,{
                    click: true
                })
            })
            })
        },
        components:{
            start,
            ratingstitle
        }
    };
</script>

<style lang="stylus">
    .ratings
        position absolute
        width 100%
        top 174px
        left 0
        bottom 0
        overflow hidden
        .overview
            padding 18px 0
            display flex
            .view-left
                padding 6px 0
                flex 0 0 137px
                width 137px
                border-right 1px solid rgba(7,17,27,0.2)
                text-align center
                line-height 10px
                .score
                    padding 6px 0 
                    line-height 28px
                    font-size 24px
                    color rgb(255,153,0)
                .ratings-title
                    line-height 12px
                    font-size 12px
                    color rgb(7,17,27)
                    padding 6px 0
                .rank
                    line-height 10px
                    font-size 10px
                    color rgba(7,17,27,.3)
            .view-right
                flex 1
                padding-left 12px
                .score-wrapper
                    display flex
                    padding 6px 0
                    .title
                        flex 0 0 70px
                    .ratings-start
                        flex 1
                        width 180px
                        margin 0
                        span
                            background-size 12px
                            width 12px
                            height 12px
                    .start-score
                        float left
                        margin-right 20px
                        font-size 12px
                        color rgb(255,153,0)
                        line-height 20px
                    .delive
                        font-size 12px
                        color rgb(147,153,159)
                        line-height 20px
        .downview
            width 100%
            height 100%
            margin-top 10px
.ratingsList
    display flex
    border-bottom 1px solid rgba(7,17,27,0.2) 
    .avatar_img
        flex 0 0 58px
        margin 18px 12px 0px 18px
        img
            display block
            border-radius 50%
    .avater-conter
        flex 1
        margin 18px 18px 18px 0
        
        .avatar-title
            margin 0 0 12px 0
            .avatar-name
                font-size 10px
                color rgb(7,17,27)
                line-height 12px
                float left
            .avatar-time
                font-size 10px
                font-weight 200
                color rgb(147,153,159)
                line-height 12px
                float right 
.start-time
    margin 8px 0px
    .start-list         
        float left
        margin 8px 0px 8px 0px
        span
            background-size 10px
            width 10px
             
    .gettime
        font-size 10px
        font-weight 200
        color rgb(147,153,159)
.content-text
    font-size 12px
    color rgb(7,17,27)
    line-height 18px
    margin 10px 0
.ratings-icon
    font-size 12px
    color rgb(0,160,220)
    line-height 16px
.buy
    margin 0px 6px
    font-size 9px
    color rgb(147,153,159)
    line-height 16px
    border 1px solid rgba(7,17,27,.1) 
    border-radius 2px
    background-color rgb(255,255,255)
    display inline-block
    height 16px
</style>
