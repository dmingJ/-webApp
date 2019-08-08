<template>
<div class="goods">
    <div class="meun-wrapper" ref="meunWrapper">
        <ul>
            <li v-for="(item,index) in goods" :key="index" class="meun-li" 
            :class="{'current':currentIndex===index}" @click="selectMenu(index,$event)">
                <span class="text">{{item.name}}</span>
            </li>
        </ul>
    </div>
    <div class="foods-wrapper" ref="foodWrapper">
        <ul>
            <li v-for="(item,index) in goods" :key="index" class="food-list food-list-hook">
                <div class="foodtitle">{{item.name}}</div>
                <ul>
                    <li v-for="(food,index) in item.foods" :key="index" class="item ">
                        <div>
                            <img :src="food.icon" width="57" height="57" class="foodicon">
                        </div>
                        <div class="food-content">
                            <p class="food-name">{{food.name}}</p>
                            <p class="desc">{{food.description}}</p>
                            <div class="extra">
                                <span class="food-sell">月售{{food.sellCount}}份</span>
                                <span>好评率{{food.sellCount}}</span>
                            </div>
                            <div class="food-price">
                                <span class="now-price">￥{{food.price}}</span>
                                <span v-show="food.oldPrice" class="old-price">￥{{food.oldPrice}}</span>
                                <div class="cartcontrol-wrapper">
                                <cartcontrol :food="food"></cartcontrol>
                            </div>
                            </div>
                            
                        </div>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
    <shopcart :select-foods="selectFoods" :delivery-price="seller.deliveryPrice"
     :min-price="seller.minPrice"></shopcart>
 </div>   
</template>
<script>
import BScroll from 'better-scroll'
import shopcart from '../shopcart/shopcart'
import cartcontrol from "../cartcontrol/cartcontrol"

export default {
    components:{
        shopcart,
        cartcontrol
    },
    props: {
        seller: {
            type:Object
        }
    },
    data(){
        return{
            goods:[],
            listHeight:[],
            scrollY:0,
        }
    },
    computed: {
        currentIndex() {
            for(let i = 0; i < this.listHeight.length; i++) {
                let height1 = this.listHeight[i];
                let height2 = this.listHeight[i+1];
                if(!height2 || (this.scrollY >= height1 && this.scrollY < height2) ) {
                    return i;
                }
            }
            return 0;
        },
        selectFoods() {
            let foods = [];
            this.goods.forEach((good) => {
                good.foods.forEach((food) => {
                    if(food.count) {
                        foods.push(food);
                    }
                })
            })
            return foods;
        }
    },
    created() {
    this.axios.get('http://192.168.1.105:8080/data.json').then((res) => {
     this.goods = res.data.goods;
     this.seller = res.data.seller;
     this.$nextTick(()=>{
          this._initScroll();
          this._calculateHeight();
     });
   })
    },
    methods: {
        selectMenu(index,event){
            if(!event._constructed){
                return;
            }
            let foodList = this.$refs.foodWrapper.getElementsByClassName('food-list-hook');
            let el = foodList[index];
            this.foodScroll.scrollToElement(el,300);
        },
        _initScroll() {
            this.menuScroll = new BScroll(this.$refs.meunWrapper,{
                click: true
            });
            this.foodScroll = new BScroll(this.$refs.foodWrapper,{
                probeType:3,
                click: true
            });
            this.foodScroll.on('scroll',(pos) => {
                this.scrollY = Math.abs(Math.round(pos.y))
            })
        },
        _calculateHeight() {
              let foodList = this.$refs.foodWrapper.getElementsByClassName('food-list-hook');
              let height = 0;
              this.listHeight.push(height);
              for(let i=0; i < foodList.length; i++){
                  let item = foodList[i];
                  height += item.clientHeight;
                  this.listHeight.push(height);
              }
          }
    }
}
</script>
<style lang="scss">
    .goods{
        display: flex;
        position: absolute;
        width:100%;
        top: 174px;
        bottom:46px;
        overflow: hidden;

    }
    .meun-wrapper{
        flex: 0 0 80px;
        width: 8px;
        background: #f3f5f7;
    }
    .goods-wrapper{
        flex: 1;
    }
.meun-li{
    display: table;
    height: 54px;
    width: 56px;
    font-size: 12px;
    color: rgb(40,20,20);
    font-weight: 100;
    line-height: 14px;
    background: #f3f5f7;
    text-align: center;
        padding: 0 12px;
}
.meun-li .text{
    width: 100%;
    height: 54px;
    display: table-cell;
    vertical-align: middle;
    line-height: 14px;
    border-bottom: 1px solid rgba(7,17,27,0.1);
}
.foodtitle{
    padding-left: 14px;
    height: 26px;
    line-height: 26px;
    border-left: 2px solid #d9dde1;
    font-size: 12px;
    color: rgb(147,153,159);
    background: #f3f5f7;
}
.current{
    position: relative;
    background: #fff;
    z-index: 10;
    margin-top: -1px;
    font-weight: 700;

}
.item{
    display: flex;
    margin: 18px;
    padding-bottom:18px;
    border-bottom: 1px solid rgba(7,17,27,0.1); 
    &:last-child{
        border: none;
    }
}
.foodicon{
    flex: 0 0 57px;
    margin-right: 10px;
}
.food-content{
    flex: 1;
}
.food-name{
    margin: 2px 0 8px 0;
    height: 14px;
    line-height: 14px;
    font-size: 14px;
    font-weight: bold;
}
.desc,.extra{
    font-size: 10px;
    color: rgb(147,153,159);
    line-height: 10px;
}
.food-sell{
    margin-right: 12px;
}
.now-price{
    font-size: 14px;
    color: rgb(255, 0, 0);
    font-weight: 700;
    line-height: 24px;
}
.old-price{
    font-size: 10px;
    color: rgb(147,153,159);
    line-height: 24px;
    text-decoration: line-through;
}
.food-price{
    position: relative;
}
.cartcontrol-wrapper{
    position: absolute;
    right: 0;
    bottom: 0;
}
</style>

