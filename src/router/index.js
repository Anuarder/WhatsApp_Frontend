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
	const requaresAuth = to.matched.some(record => record.meta.requaresAuth);
    const currentUser = store.getters.GET_TOKEN;
    const isTimeOver = store.getters.GET_TOKEN_EXP < Math.floor(new Date().getTime() / 1000);
	if (requaresAuth && !currentUser) {
		next('/login');
	} else if (requaresAuth && currentUser) {
        if(isTimeOver){
            next('/login');
        }
		next();
	} else {
		next();
	}
});

export default router;