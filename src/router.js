import Vue from 'vue'
import Router from 'vue-router'
import Promo from './views/Promo/Promo.vue'
import Login from './views/Login/Login.vue'
import Register from './views/Register/Register.vue'
import PasswordReset from './views/PasswordReset/PasswordReset.vue'
import ControlPanel from './views/ControlPanel/ControlPanel.vue'
import Subscriptions from './views/ControlPanel/Subscriptions/Subscriptions.vue'
import UserData from './views/ControlPanel/UserData/UserData.vue'
import UserPasswordReset from './views/ControlPanel/PasswordReset/PasswordReset.vue'
import AdminSubscriptions from './views/ControlPanel/Admin/Subscriptions/Subscriptions.vue'
import AdminCreateSubscriptions from './views/ControlPanel/Admin/Subscriptions/CreateSubscriptions/CreateSubscriptions.vue'

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
            redirect: '/user/admin-subscriptions',
            component: ControlPanel,
            children: [
                {
                    path: '/user/subscriptions',
                    name: 'user_subscriptions',
                    component: Subscriptions
                },
                {
                    path: '/user/data',
                    name: 'user_data',
                    component: UserData
                },
                {
                    path: '/user/password-reset',
                    name: 'user_password-reset',
                    component: UserPasswordReset
                },
                {
                    path: '/user/admin-subscriptions',
                    name: 'user_admin-subscriptions',
                    component: AdminSubscriptions
                },
                {
                    path: '/user/admin-create-subscriptions',
                    name: 'user_admin-create-subscriptions',
                    component: AdminCreateSubscriptions
                },
            ]
        },
    ]
})