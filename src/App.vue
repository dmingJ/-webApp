<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/" class="linkActiveClass">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/sell">商家</router-link>
      </div>
    </div>
    <transition>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
import header from "./views/header/header";
import tab from "./views/tab";
import content from "./views/content";

export default {
  data(){
    return{
      seller:{},
      goods:{},
      ratings:{}
    }
  },
  components: {
    "v-header": header,
    tab,
    "v-content": content
  },
  
 created(){
   this.axios.get('http://192.168.1.105:8080/data.json').then((res) => {
     this.seller = res.data.seller
   })
   }
};
</script>



<style lang="scss">
body{
  text-decoration: none;
  margin: 0;
  padding: 0;
  list-style: none;
}
ul{
  margin: 0;
  padding: 0;
}
#app{
  width: 100%;
  height: 100%;
}
#app .tab {
  display: flex;
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
}
.tab .tab-item {
  flex: 1;
  font-size: 14px;
  color: rgb(77, 85, 93);
  border-bottom: 1px solid rgba(7,17,27,0.1);
  a {
    display: block;
    text-decoration: none;
    color: rgb(77, 85, 93);
    &.router-link-exact-active {
      color: rgb(250, 117, 8);
    }
  }
}
</style>
