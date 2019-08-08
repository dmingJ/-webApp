<template>
  <div class="header">
    <div class="content-wraper">
      <div class="avatar">
        <img :src="seller.avatar" width="64" height="64" />
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="descript">
          <span>{{seller.description}}/{{seller.deliveryTime}}送达</span>
        </div>
        <div class="support" v-if="seller.supports">
          <span class="icon"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div v-if="seller.supports" class="support-count" @click="Show">
        <span class="count">{{seller.supports.length}}个</span>
        <i class="i-icon icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="buttom-wraper" @click="Show">
      <span class="roal"></span>
      <span class="bulletin">
        {{seller.bulletin}}
        <i class="i-icon i-info ">></i>
      </span>
    </div>
    <div class="detail" v-show="detailShow">
      <div class="detail-warpper">
        <div class="detail-content">
        <h1 class="name">{{seller.name}}</h1>
        <star></star>
        <div class="title-content">
          <div class="line"></div>
          <p class="text-content">优惠信息</p>
          <div class="line"></div>
        </div>
        <ul v-if="seller.supports" class="preference">
          <li v-for="(item,index) in seller.supports" :key="index" class="icon-li">
            <img :src="seller.supports[index].icon" class="icon-img">
            <p class="icon-list">{{seller.supports[index].description}}</p>
          </li>
        </ul>
        <div class="title-content">
          <div class="line"></div>
          <p class="text-content">商家公告</p>
          <div class="line"></div>
        </div>
        <div class="roal-text"><p>{{seller.bulletin}}</p></div>
        </div>
       
      </div> <div class="close" @click="Close"> <i class="icon-close"></i></div>
    </div>
  </div>
</template>

<script>
import star from '../start/start'
export default {
  components:{
    star
  },
  props: {
    seller: {
      type: Object
    }
  },
  data() {
    return {
      detailShow: false
    };
  },
  methods: {
    Show() {
      this.detailShow = !this.detailShow;
    },
    Close() {
       this.detailShow = !this.detailShow;  
    }
  }
};
</script>

<style>
*{
  list-style: none;
}
.header {
  background-size: 100%;
  background: url("http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg")
    100% 100% no-repeat;
}
.content-wraper {
  padding: 24px 12px 18px 24px;
  background-color: rgba(7, 17, 27, 0.5);
  font-size: 0;
  position: relative;
}
.avatar {
  display: inline-block;
}
.avatar img {
  border-radius: 5px;
}
.content {
  display: inline-block;
  margin-left: 14px;
  color: #fff;
  font-size: 14px;
}
.brand {
  vertical-align: top;
  width: 30px;
  height: 18px;
  padding: 2px 0 4px 0;
  display: inline-block;
  background: url("./brand@2x.png") no-repeat;
  background-size: 30px 18px;
}
.name {
  margin-left: 6px;
  font-size: 16px;
  line-height: 18px;
  font-weight: bold;
}
.icon {
  width: 12px;
  height: 12px;
  display: inline-block;
  background: url("./decrease_1@2x.png") no-repeat;
  background-size: 12px;
  margin-right: 2px;
  margin-top: 4px;
}
.descript {
  margin-bottom: 4px;
}
.support-count {
  position: absolute;
  right: 12px;
  bottom: 18px;
  padding: 0 8px;
  height: 24px;
  line-height: 24px;
  border-radius: 14px;
  background: rgba(0, 0, 0, 0.2);
  text-align: center;
  color: #fff;
}
.count {
  font-size: 10px;
  margin-right: 4px;
}
.i-icon {
  font-size: 10px;
}

.roal {
  display: inline-block;
  margin-right: 4px;
  margin-top: 8px;
  background: url(./bulletin@2x.png) no-repeat;
  background-size: 22px 12px;
  width: 22px;
  height: 12px;
  vertical-align: top;
}
.buttom-wraper {
  font-weight: bold;
  height: 28px;
  overflow: hidden;
  color: #fff;
  font-size: 10px;
  white-space: nowrap;
  text-overflow: ellipsis;
  line-height: 28px;
  background-color: rgba(7, 17, 27, 0.7);
  padding: 0px 12px;
  vertical-align: top;
  position: relative;
}
.icon {
  width: 12px;
  height: 12px;
  display: inline-block;
  background: url("./decrease_1@2x.png") no-repeat;
  background-size: 12px;
  margin-right: 2px;
}
.i-info {
  position: absolute;
  right: 8px;
  top: 1px;
}
.detail {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(7, 17, 27, 0.8);
  z-index: 99;
  overflow-y: auto;
  
}
.detail-warpper {
  min-height: 100%;
  min-width: 100%;
  color: #fff;
}
.detail-content {
  margin-top: 64px;
  padding-bottom:64px; 
  text-align: center;
}
.title-content{
  display: flex;
  width: 80%;
  margin: 30px auto 24px auto;
}
.text-content{
  margin: 16px 12px;
}
 .preference{
   display: block;
   margin: 0 auto;
} 
.line{
  flex: 1;
  position: relative;
  top: -26px;
  border-bottom:1px solid rgba(255,255,255,0.2);  
}
.name{
    font-size: 16px;
    text-align: center;
    font-weight: 700;
}
.close {
  position: relative;
  width: 32px;
  height: 32px;
  margin: -70px auto 0 auto;
  clear: both;
  color: #fff;
  font-size: 32px;
}
.icon-li{
  line-height: 10px;
  width: 100%;
  text-align: left;
  margin-left: 24px;
}
.icon-img{
  width: 20px;
  height: 20px;
  display:inline-block;
  margin: -4px 20px; 
}
.icon-list{
  display: inline-block;
}
.roal-text{
  padding: 0px 50px;
  line-height: 24px;
  font-size: 12px;
  font-weight: 100;
  text-align: left;
}
</style>


