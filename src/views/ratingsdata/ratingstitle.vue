<template>
  <div>
    <div class="ratings-line"></div>
    <div class="ratings-data">
      <div class="select-block">
        <div class="block first">全部57</div>
        <div class="block">满意47</div>
        <div class="block last">不满意10</div>
      </div>
      <div class="click-title">
        <i class="icon-check_circle circel"></i><span class="click-content">只看有内容的评价</span>
      </div>
    </div>
  </div>
</template>
<script>
</script>



<style lang="stylus">
.ratings-line
  width 100%
  height 20px
  background rgba(147,153,159,.2)
  border-top 1px solid rgba(147,153,159,.3)
  border-bottom 1px solid rgba(147,153,159,.3)
.ratings-data
  border-bottom 1px solid rgba(147,153,159,.3) 
.select-block
    width 90%
    height 56px
    border-bottom 1px solid rgba(147,153,159,.3)
    margin 16px auto
.block
  border-radius 2px
  float left
  font-size 12px
  line-height 32px
  color rgb(255,255,255)
  background rgba(0,160,220,.2)
  margin-right 8px
  padding 4px 8px
  text-align center
  color rgb(77,85,93)
.first
  background rgb(0,160,220)
  color #fff
.last
  background rgba(77,85,93,0.2)
.click-title
  width 90%
  padding 12px 0
  margin 0 auto
.circel
  font-size 24px 
  color rgb(147,153,159)
  line-height 24px
  margin-right 4px
.click-content
  font-size 12px
  color rgb(147,153,159)
  line-height 24px
  vertical-align top
</style>
 
