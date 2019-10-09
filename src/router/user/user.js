import UserSubscriptions from '@/views/ControlPanel/User/Subscriptions/Subscriptions.vue'
import UserCheckoutSubscription from "@/views/ControlPanel/User/CheckoutSubscription/CheckoutSubscription.vue"
import UserData from '@/views/ControlPanel/User/UserData/UserData.vue'
import UserPasswordReset from '@/views/ControlPanel/User/PasswordReset/PasswordReset.vue'
import ConfirmSubscriptionPurchase from "@/views/ControlPanel/User/ConfirmSubscriptionPurchase/ConfirmSubscriptionPurchase.vue"

export default  [
    {
        path: '/user/subscriptions',
        name: 'user_subscriptions',
        component: UserSubscriptions
    },
    {
        path: '/user/checkout-subscriptions',
        name: 'user_checkout_subscriptions',
        component: UserCheckoutSubscription
    },
    {
        path: '/user/confirm-subscription-purchase',
        name: 'confirm_subscription_purchase',
        component: ConfirmSubscriptionPurchase
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
]