import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '@/components/login';
import Usermanagement from '@/components/usermanagement';
import UserHome from '@/components/userhome';
import Registration from '@/components/registration';
import Key from '@/components/key';

Vue.use(VueRouter);

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
        }
    ]
});

export default router;