import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '@/components/login';
import Usermanagement from '@/components/usermanagement';
import UserHome from '@/components/userhome';

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
            path: 'userhome',
            name: 'userhome',
            component: UserHome
        },
        {
            path: '/usermanagement',
            name: 'usermanagement',
            component: Usermanagement
        }
    ]
});

export default router;