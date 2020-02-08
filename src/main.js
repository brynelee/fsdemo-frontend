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

Vue.config.productionTip = false;

//添加路由控制
router.beforeEach((to, from, next) => {
  // 检测路由配置中是否有requiresAuth这个meta属性
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // 判断是否已登录
    if (store.getters.isLoggedIn) {
      next();
      return;
    }
    // 未登录则跳转到登录界面
    next('/login');
  } else {
    next()
  }
});

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');
