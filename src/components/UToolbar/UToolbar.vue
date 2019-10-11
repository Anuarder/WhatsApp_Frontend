<template>
    <div class="toolbar">
        <div class="toolbar__button" @click.stop="showSidebar">
            <img src="@/assets/images/toolbar_button.svg" alt="toolbar_button">
        </div>
        <div class="toolbar__actions" @click="logout">
            Выйти
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        showSidebar(){
            this.$store.commit('SET_SIDEBAR', true)
        },
        logout(){
            this.$store.commit('LOGOUT');
            this.$router.push('/login');
        }
    }
}
</script>
<style 
    lang="scss" 
    scoped
    src="./utoolbar.scss">
</style>