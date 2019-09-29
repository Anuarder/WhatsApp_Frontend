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
                to="/" 
                :style="`color: ${isDark ? 'white' : 'black'}`">
                Войти
            </router-link>
        </div>
    </div>
</template>
<script>
import dark_logo from "@/assets/images/dark_logo.svg"
import logo from "@/assets/images/logo.svg"
export default {
    props: {
        isDark: Boolean
    },
    data(){
        return{
            dark_logo,
            logo
        }
    }
}
</script>
<style 
    lang="scss" 
    scoped
    src="./pnavigation.scss">
</style>