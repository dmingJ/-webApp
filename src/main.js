import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import axios from 'axios'
import VueAxios from 'vue-axios'
import qs from 'qs'
import cssLoader from 'css-loader'

Vue.prototype.$axios = axios
Vue.prototype.qs = qs
Vue.use(VueAxios, axios)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  axios,
  cssLoader,
  render: h => h(App)
}).$mount('#app')
