import Login from '@/views/Auth/Login/Login.vue'
import Register from '@/views/Auth/Register/Register.vue'
import PasswordReset from '@/views/Auth/PasswordReset/PasswordReset.vue'

export default [
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
]