import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '@/components/login'
import Usermanagement from '@/components/usermanagement';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/usermanagement',
            name: 'usermanagement',
            component: Usermanagement
        }
    ]
});

export default router;