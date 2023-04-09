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

//for skywalking configuration
import ClientMonitor from 'skywalking-client-js';

// Report collected data to `http:// + window.location.host + /browser/perfData` in default
ClientMonitor.register({
  //Use core/default/restPort in the OAP server.
    //collector: 'http://127.0.0.1:12800',
    service: 'fsdemo-frontend',
    pagePath: location.href,
    serviceVersion: 'v1.0.0',
});



//添加路由控制
router.beforeEach((to, from, next) => {

    ClientMonitor.setPerformance({
        //collector: 'http://127.0.0.1:12800',
        service: 'fsdemo-frontend',
        serviceVersion: 'v1.0.0',
        pagePath: location.href,
        useFmp: true
    });

  // 检测路由配置中是否有requiresAuth这个meta属性
  if (to.matched.some(record => record.meta.requiresAuth)) {
    console.log("main.js: router check - requiresAuth - true.");
    // 判断是否已登录
    if (store.getters.isLoggedIn) {
      console.log("main.js: router check - isLoggedIn - true.");
      next();
      return;
    }
    // 未登录则跳转到登录界面
    console.log("main.js: router check - isLoggedIn - false.");
    next('/login');
  } else {
    console.log("main.js: router check - requiresAuth - false.");
    next()
  }
});

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');

