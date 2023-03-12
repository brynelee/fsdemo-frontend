import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '@/components/login';
import Usermanagement from '@/components/usermanagement';
import UserHome from '@/components/userhome';
import Registration from '@/components/registration';
import ArticlesManagement from "@/components/articlesManagement.vue";
import Key from '@/components/key';

Vue.use(VueRouter);

//let authURL = "/oauth/authorize?client_id=fsdemo-frontend&redirect_uri=http://fsdemo-usercenter:8081/usercenter/auth&response_type=code&scope=all&state=fsdemo-frontend";
//let authURL1 = "http://localhost:8084/oauth/authorize?client_id=fsdemo-frontend&redirect_uri=http://fsdemo-usercenter:8081/usercenter/auth&response_type=code&scope=all&state=fsdemo-frontend";

const router = new VueRouter({



    routes: [
        {
            path: '/',
            redirect: '/Login'
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
          path: '/registration',
          name: 'registration',
          component: Registration
        },
        {
            path: '/userhome',
            name: 'userhome',
            component: UserHome,
            meta: { requiresAuth: true }
        },
        {
            path: '/key',
            name: 'key',
            component: Key,
        },
        {
            path: '/usermanagement',
            name: 'usermanagement',
            component: Usermanagement,
            meta: { requiresAuth: true }
        },
        {
            path: '/articlesManagement',
            name: 'articlesManagement',
            component: ArticlesManagement,
            meta: { requiresAuth: false }
        }
    ]
});

export default router;