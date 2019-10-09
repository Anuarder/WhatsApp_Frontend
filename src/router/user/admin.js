import AdminSubscriptions from '@/views/ControlPanel/Admin/Subscriptions/Subscriptions.vue'
import AdminCreateSubscription from '@/views/ControlPanel/Admin/Subscriptions/CreateSubscription.vue'
import AdminPromocodes from '@/views/ControlPanel/Admin/Promocodes/Promocodes.vue'
import AdminCreatePromocode from '@/views/ControlPanel/Admin/Promocodes/CreatePromocode.vue'
import AdminUsers from '@/views/ControlPanel/Admin/Users/Users.vue'
import AdminCreateUser from '@/views/ControlPanel/Admin/Users/CreateUser.vue'
import AdminMessages from '@/views/ControlPanel/Admin/Messages/Messages.vue'

export default  [
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