import Vue from 'vue'
import App from './App.vue'

// 引入axios
import axios from 'axios'
// 使用axios
Vue.prototype.axios = axios;

// 引入qs
import qs from 'qs'
// 使用qs
Vue.prototype.qs = qs;

// 后端的每个请求地址公共的部分
 
	Vue.prototype.baseURL = "http://ubuntu:8080";

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
