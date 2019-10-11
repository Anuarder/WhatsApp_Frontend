import store from "@/store/index"
import UserSubscriptions from '@/views/ControlPanel/User/Subscriptions/Subscriptions.vue'
import UserCheckoutSubscription from "@/views/ControlPanel/User/CheckoutSubscription/CheckoutSubscription.vue"
import UserData from '@/views/ControlPanel/User/UserData/UserData.vue'
import UserPasswordReset from '@/views/ControlPanel/PasswordReset/PasswordReset.vue'
import ConfirmSubscriptionPurchase from "@/views/ControlPanel/User/ConfirmSubscriptionPurchase/ConfirmSubscriptionPurchase.vue"

export default  [
    {
        path: '/user/subscriptions',
        name: 'user_subscriptions',
        component: UserSubscriptions,
        beforeEnter(to, from, next){
            checkAdmin(to, from, next)
        }
    },
    {
        path: '/user/checkout-subscriptions',
        name: 'user_checkout_subscriptions',
        component: UserCheckoutSubscription,
        beforeEnter(to, from, next){
            checkAdmin(to, from, next)
        }
    },
    {
        path: '/user/confirm-subscription-purchase',
        name: 'confirm_subscription_purchase',
        component: ConfirmSubscriptionPurchase,
        beforeEnter(to, from, next){
            checkAdmin(to, from, next)
        }
    },
    {
        path: '/user/data',
        name: 'user_data',
        component: UserData,
        beforeEnter(to, from, next){
            checkAdmin(to, from, next)
        }
    },
    {
        path: '/user/password-reset',
        name: 'user_password-reset',
        component: UserPasswordReset,
        beforeEnter(to, from, next){
            checkAdmin(to, from, next)
        }
    },
]

function checkAdmin(to, from, next){
    const user = store.getters.GET_USER;
    if(!user.is_admin){
        next();
    }else{
        next(false)
    }
}