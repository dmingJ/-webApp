import Vue from 'vue'
import Router from 'vue-router'
import goods from './components/goods/Goods'
import ratings from './components/ratings/Ratings'
import sell from './components/sell/Sell'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'goods',
      component: goods
    },
    {
      path: '/ratings',
      name: 'ratings',
      component: ratings
    },
    {
      path: '/sell',
      name: 'sell',
      component: sell
    }
  ]
})
