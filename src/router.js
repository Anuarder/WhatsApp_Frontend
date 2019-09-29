import Vue from 'vue'
import Router from 'vue-router'
import Promo from './views/Promo/Promo.vue'
import Login from './views/Login/Login.vue'
import Register from './views/Register/Register.vue'
import PasswordReset from './views/PasswordReset/PasswordReset.vue'
import ControlPanel from './views/ControlPanel/ControlPanel.vue'
import Subscriptions from './views/ControlPanel/Subscriptions/Subscriptions.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'promo',
            component: Promo
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: '/password-reset',
            name: 'password-reset',
            component: PasswordReset
        },
        {
            path: '/user',
            name: 'user',
            redirect: '/user/subscriptions',
            component: ControlPanel,
            children: [
                {
                    path: '/user/subscriptions',
                    name: '/user/subscriptions',
                    component: Subscriptions
                }
            ]
        },
    ]
})