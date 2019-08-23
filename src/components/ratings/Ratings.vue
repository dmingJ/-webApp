<template>
    <div class="ratings">
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
        </div>
    </div>
</template>
<script>
import start from '@/views/start/start'

    export default{
        props: {
            seller:{
                type:Object
            }
        },
        components:{
            start
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
                        margin-right 10px
                        font-size 12px
                        color rgb(255,153,0)
                        line-height 20px
                    .delive
                        font-size 12px
                        color rgb(147,153,159)
                        line-height 20px
</style>
