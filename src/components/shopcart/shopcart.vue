<template>
<div>
  <div class="shopcart">
    <div class="content-cart" @click="toggleList">
      <div class="content-left">
        <div class="log-wrapper">
          <div class="num" v-show="totalCount">{{totalCount}}</div>
          <div class="logo" :class="{'hightlight hightbg':totalCount>0}">
            <i class="icon-shopping_cart"></i>
          </div>
        </div>
        <div class="price-cart" :class="{'hightlight':totalCount>0}">￥{{totalPrice}}元</div>
        <div class="desc-cart">另需配送费{{deliveryPrice}}元</div>
      </div>
      <div class="content-right">
        <div class="pay" :class="payClass">{{descPay}}</div>
      </div>
    </div>
    <transition name="fold">
    <div class="shopcart-list" v-show="listShow" >
      <div class="list-header">
        <h1 class="cart-list-title">购物车</h1>
        <span class="empty" @click="empty">清空</span>
      </div>

      <div class="list-content" ref="showList">
        <ul>
          <li class="food" v-for="(food,index) in selectFoods" :key="index">
            <span class="cart-name">{{food.name}}</span>
            <div class="price">
              <span>￥{{food.price*food.count}}</span>
            </div>
            <div class="cartcontrol-wrapper">
              <cartcontrol :food="food"></cartcontrol>
            </div>
          </li>
        </ul>
      </div>
    </div>
    </transition>
  </div>
  <div class="list-mask" v-show="listShow" transition="fade"></div>
  </div>
</template>
<script>
import cartcontrol from "../cartcontrol/cartcontrol";
import BScroll from 'better-scroll'
export default {
  components: {
    cartcontrol
  },
  props: {
    selectFoods: {
      type: Array,
      default() {
        return [
          {
            price: 10,
            count: 3
          }
        ];
      }
    },
    deliveryPrice: {
      type: Number,
      default: 0
    },
    minPrice: {
      type: Number,
      default: 0
    }
  },
  computed: {
    totalPrice() {
      let total = 0;
      this.selectFoods.forEach(food => {
        total += food.price * food.count;
      });
      return total;
    },
    totalCount() {
      let count = 0;
      this.selectFoods.forEach(food => {
        count += food.count;
      });
      return count;
    },
    descPay() {
      if (this.totalPrice === 0) {
        return `￥${this.minPrice}起送`;
      } else if (this.totalPrice < this.minPrice) {
        let unenought = this.minPrice - this.totalPrice;
        return `还差${unenought}起送`;
      } else {
        return "去结算";
      }
    },
    payClass() {
      if (this.totalPrice < this.minPrice) {
        return;
      } else {
        return "hightlight hightbg";
      }
    },
    listShow() {
      if (!this.totalCount) {
        this.fold = true;
        return false;
      }
      let show = !this.fold;
      if(show){
        this.$nextTick(() =>{
          if(!this.scroll){
             this.scroll = new BScroll(this.$refs.showList,{
            click:true
          });
          }else{
            this.scroll.refresh();
          }
         
        });
      }
      return show;
    }
  },
  data() {
    return {
      fold: true
    };
  },
  methods: {
    toggleList() {
      if (!this.totalCount) {
        return;
      }
      this.fold = !this.fold;
    },
    empty(){
      this.selectFoods.forEach((food) => {
        food.count = 0;
      })
    }
  }
};
</script>
<style lang="stylus">
.shopcart {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 50;
  width: 100%;
  height: 48px;
}

.content-cart {
  display: flex;
  background: #141d27;
  font-size: 0;
  color: rgba(255, 255, 255, 0.4);
}

.content-left {
  flex: 1;
}

.log-wrapper {
  display: inline-block;
  position: relative;
  top: -10px;
  margin: 0 12px;
  padding: 6px;
  width: 56px;
  height: 56px;
  box-sizing: border-box;
  vertical-align: top;
  border-radius: 50%;
  background: #141d27;
}

.logo {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: #2b343c;
  font-size: 24px;
  color: #80858a;
  text-align: center;
  line-height: 44px;
}

.hightlight {
  color: #fff;
}

.hightbg {
  background: green !important;
}

.num {
  position: absolute;
  top: 0;
  right: 0;
  width: 24px;
  height: 16px;
  line-height: 16px;
  text-align: center;
  border-radius: 16px;
  font-size: 9px;
  font-weight: 700;
  color: #fff;
  background: rgb(240, 20, 20);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
}

.price-cart {
  display: inline-block;
  vertical-align: top;
  margin-top: 12px;
  line-height: 24px;
  padding-right: 12px;
  box-sizing: border-box;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 16px;
  font-weight: 700;
}

.desc-cart {
  display: inline-block;
  vertical-align: top;
  margin: 12px 0 0 12px;
  line-height: 24px;
  font-size: 14px;
}

.content-right {
  display: 0 0 105px;
  width: 105px;
}

.pay {
  height: 48px;
  line-height: 48px;
  text-align: center;
  font-size: 12px;
  font-weight: 700;
  background: #2b333b;
}

.shopcart-list {
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: -1;
  width: 100%;
  font-size: 16px;
  background: #fff;
  margin-bottom: 48px;
  padding-bottom: 8px;
}
.fold-leave-active {
    transition: all .5s linear;
    transform: translate3d(0, 100%, 0);
  }
.list-header {
  height: 40px;
  background: #f3f5f7;
  line-height: 40px;
  border-bottom: 1px solid rgba(7, 17, 27, 0.1);
}

.cart-list-title {
  font-size: 14px;
  font-weight: 200;
  color: rgb(7, 17, 27);
  float: left;
  margin: 0;
  padding-left: 18px;
}

.empty {
  font-size: 12px;
  color: rgb(0, 160, 220);
  float: right;
  padding-right: 18px;
}

.list-content {
  padding: 0 18px;
  max-height: 217px;
  background: #fff;
  overflow: hidden;
}
.food{
  position relative
  padding 12px 0
  box-sizing border-box
  border-bottom 1px solid #f3f5f7
  &:last-child{
    border none
    }
}
  .cart-name
    line-height 24px
    font-size 14px
    color rgb(7,17,27)
  .price
    position absolute
    right 90px
    bottom 12px
    line-height 24px
    font-size 14px
    font-weight 700
    color rgb(240,20,20)
.cartcontrol-wrapper{
    margin 6px 0px
}
.list-mask{
  position fixed
  top 0
  left 0
  width 100%
  height 100%
  z-index 40
  background rgba(7,17,27,0.6)
  backdrop-filter blur(10px)
}
.fade-enter-active{
  transition all 0.5s
  opacity 1
  background rgba(7,17,27,0.6)
}
.fade-enter, .fade-leave{
  opacity 0
  background rgba(7,17,27,0)
}
</style>

