<template>
    <div class="login form-page">
        <p-navigation></p-navigation>
        <div class="login__container form-page__container">
            <div class="login__content form-page__content">
                <div class="login__title form-page__title">
                    ВХОД
                </div>
                <div class="login__form form-page__form">
                    <div class="form-page__error">
                        {{error_message}}
                    </div>
                    <form @submit.prevent="login">
                        <div class="login__input form-page__input">
                            <input 
                                type="email" 
                                placeholder="Email" 
                                v-model="email">
                        </div>
                        <div class="login__input form-page__input">
                            <input 
                                type="password" 
                                placeholder="Пароль" 
                                v-model="password">
                        </div>
                        <div class="login__link form-page__link">
                            <router-link to="/password-reset">
                                Забыли пароль?
                            </router-link>
                        </div>
                        <div class="login__button form-page__button">
                            <button type="submit" class="w-button">
                                <span v-if="isLoading">Загрузка...</span>
                                <span v-else>Войти</span>
                            </button>
                        </div>
                        <div class="login__link form-page__link">
                            <router-link to="/register">
                                Нет аккаунта? 
                                <u>Зарегистрироваться</u>
                            </router-link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import PNavigation from "@/components/PNavigation/PNavigation"
    export default {
        components: {
            PNavigation
        },
        data(){
            return{
                email: '',
                password: '',
                error_message: '',
                isLoading: false
            }
        },
        methods: {
            async login(){
                try{
                    this.isLoading = true;
                    const response = await this.$store.dispatch('LOGIN', {
                        email: this.email,
                        password: this.password
                    });
                    if(response.status){
                        this.isLoading = false;
                        this.$router.push('user')
                    }else{
                        throw response;
                    }
                }catch(err){
                    this.isLoading = false;
                    this.error_message = err.error;
                }
            }
        }
    }
</script>
<style 
    lang="scss" 
    scoped
    src="./login.scss">
</style>