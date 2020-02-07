import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/index'

// 引入axios
import axios from 'axios'
// 使用axios
Vue.prototype.axios = axios;

// 引入qs
import qs from 'qs'
// 使用qs
Vue.prototype.qs = qs;

// use elementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 后端的每个请求地址公共的部分

Vue.prototype.baseURL = "http://localhost:8081";

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
