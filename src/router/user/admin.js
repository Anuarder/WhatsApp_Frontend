import store from "@/store/index"
import AdminSubscriptions from '@/views/ControlPanel/Admin/Subscriptions/Subscriptions.vue'
import AdminCreateSubscription from '@/views/ControlPanel/Admin/Subscriptions/CreateSubscription.vue'
import AdminPromocodes from '@/views/ControlPanel/Admin/Promocodes/Promocodes.vue'
import AdminCreatePromocode from '@/views/ControlPanel/Admin/Promocodes/CreatePromocode.vue'
import AdminUsers from '@/views/ControlPanel/Admin/Users/Users.vue'
import AdminPasswordReset from '@/views/ControlPanel/PasswordReset/PasswordReset.vue'
import AdminCreateUser from '@/views/ControlPanel/Admin/Users/CreateUser.vue'
import AdminMessages from '@/views/ControlPanel/Admin/Messages/Messages.vue'
import AdminSettings from '@/views/ControlPanel/Admin/Settings/Settings.vue'

export default  [
    {
        path: '/user/admin-subscriptions',
        name: 'user_admin-subscriptions',
        component: AdminSubscriptions,
        beforeEnter(to, from, next){
            checkAdmin(to, from, next)
        }
    },
    {
        path: '/user/admin-create-subscription',
        name: 'user_admin-create-subscription',
        component: AdminCreateSubscription,
        beforeEnter(to, from, next){
            checkAdmin(to, from, next)
        }
    },
    {
        path: '/user/admin-promocodes',
        name: 'user_admin-promocodes',
        component: AdminPromocodes,
        beforeEnter(to, from, next){
            checkAdmin(to, from, next)
        }
    },
    {
        path: '/user/admin-create-promocode',
        name: 'user_admin-create-promocode',
        component: AdminCreatePromocode,
        beforeEnter(to, from, next){
            checkAdmin(to, from, next)
        }
    },
    {
        path: '/user/admin-users',
        name: 'user_admin-users',
        component: AdminUsers,
        beforeEnter(to, from, next){
            checkAdmin(to, from, next)
        }
    },
    {
        path: '/user/admin-create-user',
        name: 'user_admin-create-user',
        component: AdminCreateUser,
        beforeEnter(to, from, next){
            checkAdmin(to, from, next)
        }
    },
    {
        path: '/user/admin-messages',
        name: 'user_admin-messages',
        component: AdminMessages,
        beforeEnter(to, from, next){
            checkAdmin(to, from, next)
        }
    },
    {
        path: '/user/admin-settings',
        name: 'user_admin-settings',
        component: AdminSettings,
        beforeEnter(to, from, next){
            checkAdmin(to, from, next)
        }
    },
    {
        path: '/user/admin-password-reset',
        name: 'user_admin_password-reset',
        component: AdminPasswordReset,
        beforeEnter(to, from, next){
            checkAdmin(to, from, next)
        }
    },
]

function checkAdmin(to, from, next){
    const user = store.getters.GET_USER;
    if(user.is_admin){
        next();
    }else{
        next(false)
    }
}