<template>
<div class="cartcontrol">
  <div class="cart-minus" v-show="this.food.count>0" @click="minusCount" transition="move">
    <span class="inner icon-remove_circle_outline"></span>
  </div>
  <div class="cart-count" v-show="this.food.count>0">{{food.count}}</div>
  <div class="cart-add icon-add_circle" @click="addCount"></div> 
</div>
</template>
<script>
import Vue from 'vue';

export default {
  props:{
    food:{
      type:Object
    }
  },
  methods: {
    addCount(event){
       if(!event._constructed){
                return;
            }
        // console.log(1)
      if(!this.food.count) {
        Vue.set(this.food, 'count', 1);
      }else{
        this.food.count++;
      }
    },
    minusCount(){
      if(!event._constructed){
                return;
            }
        // console.log(0)
      if(this.food.count) {
        this.food.count--;
      }
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .cartcontrol
    font-size 0
  .cart-minus
    display inline-block
    padding 6px
    transition all 0.4s linear
  .move-transition
      opacity 1
      transform translate3d(0,0,0)
  .move-enter, &.move-leave
      opacity 0
      transform translate3d(24px,0,0)
  .inner  
    font-size 24px
    line-height 24px
    color rgb(0,160,220)
  .cart-count
    display inline-block
    vertical-align top
    font-size 10px
    width 12px
    padding-top 6px
    line-height 24px
    text-align center
    color rgb(147,153,159)
  .cart-add
    display inline-block
    font-size 24px
    padding 6px
    line-height 24px
    color rgb(0,160,220)
</style>


