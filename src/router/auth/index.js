import Login from '@/views/Auth/Login/Login.vue'
import Register from '@/views/Auth/Register/Register.vue'
import PasswordReset from '@/views/Auth/Password/PasswordReset/PasswordReset.vue'
import CheckPasswordCode from '@/views/Auth/Password/CheckPasswordCode/CheckPasswordCode.vue'
import SetNewPassword from '@/views/Auth/Password/SetNewPassword/SetNewPassword.vue'

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
    {
        path: '/check-password-code',
        name: 'check-password-code',
        component: CheckPasswordCode
    },
    {
        path: '/set-new-password',
        name: 'set-new-password',
        component: SetNewPassword
    }
]