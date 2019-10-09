import adminRoutes from "./admin"
import userRoutes from "./user"
import ControlPanel from '@/views/ControlPanel/ControlPanel.vue'

export default  [
    {
        path: '/user',
        name: 'user',
        redirect: '/user/admin-subscriptions',
        component: ControlPanel,
        children: [
            ...userRoutes,
            ...adminRoutes
        ]
    },
]