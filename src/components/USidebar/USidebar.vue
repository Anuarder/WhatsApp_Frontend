<template>
    <div class="sidebar">
        <div class="sidebar__logo">
            <img src="@/assets/images/dark_logo.svg" alt="logo">
        </div>
        <div class="sidebar__container">
            <div class="sidebar__links">
                <router-link  
                    class="sidebar__link"
                    active-class="sidebar__link__active"
                    v-for="(item, i) in links"
                    @click.native="go(item.path)"
                    :to="item.path"
                    :key="i">
                    {{item.name}}
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from "vuex"
export default {
    data(){
        return{
            user_links: [
                {
                    name: 'Подписки',
                    path: 'subscriptions'
                },
                {
                    name: 'Личные данные',
                    path: 'data'
                },
                {
                    name: 'Сменить пароль',
                    path: 'password-reset'
                }
            ],
            admin_links: [
                {
                    name: 'Сообщения',
                    path: 'admin-messages'
                },
                {
                    name: 'Пользователи',
                    path: 'admin-users'
                },
                {
                    name: 'Промокоды',
                    path: 'admin-promocodes'
                },
                {
                    name: 'Подписки',
                    path: 'admin-subscriptions'
                },
                {
                    name: 'Настройки',
                    path: 'admin-settings'
                },
                {
                    name: 'Сменить пароль',
                    path: 'admin-password-reset'
                }
            ]
        }
    },
    computed: {
        ...mapGetters(['GET_USER']),
        links(){
            if(this.GET_USER.is_admin){
                return this.admin_links
            }else{
                return this.user_links
            }
        }
    },
    methods: {
        go(){
            this.$store.commit('SET_SIDEBAR', false);
        }
    }
}
</script>
<style 
    lang="scss" 
    scoped
    src="./usidebar.scss">
</style>