import Vue from 'vue'
import store from "@/store"
import Router from 'vue-router'
import Promo from '@/views/Promo/Promo.vue'

import AuthRouter from "./auth"
import UserRouter from "./user"

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'promo',
            component: Promo,
        },
        ...AuthRouter,
        ...UserRouter
    ]
})

router.beforeEach((to, from, next) => {
    console.log(store.getters.GET_TOKEN)
    next();
});

export default router;