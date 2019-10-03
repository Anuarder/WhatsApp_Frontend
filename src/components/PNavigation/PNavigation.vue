<template>
    <div class="navigation">
        <div class="navigation__logo">
            <router-link to="/">
                <img 
                    :src="isDark ? dark_logo : logo" 
                    alt="logo">
            </router-link>
        </div>
        <div class="navigation__actions">
            <router-link 
                v-if="!GET_TOKEN"
                to="/login" 
                :style="`color: ${isDark ? 'white' : 'black'}`">
                Войти
            </router-link>
            <router-link 
                v-else
                to="/user" 
                :style="`color: ${isDark ? 'white' : 'black'}`">
                Личный кабинет
            </router-link>
        </div>
    </div>
</template>
<script>
import dark_logo from "@/assets/images/dark_logo.svg"
import logo from "@/assets/images/logo.svg"
import { mapGetters } from 'vuex'
export default {
    props: {
        isDark: Boolean
    },
    data(){
        return{
            dark_logo,
            logo
        }
    },
    computed: {
        ...mapGetters(['GET_TOKEN'])
    }
}
</script>
<style 
    lang="scss" 
    scoped
    src="./pnavigation.scss">
</style>