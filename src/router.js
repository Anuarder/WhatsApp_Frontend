import Vue from 'vue'
import store from "./store"
import Router from 'vue-router'
import Promo from './views/Promo/Promo.vue'
import Login from './views/Auth/Login/Login.vue'
import Register from './views/Auth/Register/Register.vue'
import PasswordReset from './views/Auth/PasswordReset/PasswordReset.vue'
import ControlPanel from './views/ControlPanel/ControlPanel.vue'
import UserSubscriptions from './views/ControlPanel/User/Subscriptions/Subscriptions.vue'
import UserData from './views/ControlPanel/User/UserData/UserData.vue'
import UserPasswordReset from './views/ControlPanel/User/PasswordReset/PasswordReset.vue'
import AdminSubscriptions from './views/ControlPanel/Admin/Subscriptions/Subscriptions.vue'
import AdminCreateSubscription from './views/ControlPanel/Admin/Subscriptions/CreateSubscription.vue'
import AdminPromocodes from './views/ControlPanel/Admin/Promocodes/Promocodes.vue'
import AdminCreatePromocode from './views/ControlPanel/Admin/Promocodes/CreatePromocode.vue'
import AdminUsers from './views/ControlPanel/Admin/Users/Users.vue'
import AdminCreateUser from './views/ControlPanel/Admin/Users/CreateUser.vue'
import AdminMessages from './views/ControlPanel/Admin/Messages/Messages.vue'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'promo',
            component: Promo,
            meta: {
                auth: false
            }
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
                    component: UserSubscriptions
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
                    path: '/user/admin-create-subscription',
                    name: 'user_admin-create-subscription',
                    component: AdminCreateSubscription
                },
                {
                    path: '/user/admin-promocodes',
                    name: 'user_admin-promocodes',
                    component: AdminPromocodes
                },
                {
                    path: '/user/admin-create-promocode',
                    name: 'user_admin-create-promocode',
                    component: AdminCreatePromocode
                },
                {
                    path: '/user/admin-users',
                    name: 'user_admin-users',
                    component: AdminUsers
                },
                {
                    path: '/user/admin-create-user',
                    name: 'user_admin-create-user',
                    component: AdminCreateUser
                },
                {
                    path: '/user/admin-messages',
                    name: 'user_admin-messages',
                    component: AdminMessages
                },
            ]
        },
    ]
})

router.beforeEach((to, from, next) => {
    console.log(store.getters.GET_TOKEN)
    next();
});

export default router;