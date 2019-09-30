<template>
    <div class="password-reset form-page">
        <p-navigation></p-navigation>
        <div class="password-reset__container form-page__container">
            <div class="password-reset__content form-page__content">
                <div class="password-reset__title form-page__title">
                    ВОССТАНОВЛЕНИЕ ПАРОЛЯ
                </div>
                <div class="password-reset__form form-page__from">
                    <form @submit.prevent="password_reset">
                        <div class="password-reset__input form-page__input">
                            <input 
                                type="email" 
                                placeholder="Email" 
                                v-model="email">
                        </div>
                        <div class="password-reset__link form-page__link">
                            <router-link to="/password_reset">
                                Отправьте нам свой e-mail и мы вышлем <br>
                                вам код
                            </router-link>
                        </div>
                        <div class="password-reset__button form-page__button">
                            <button type="submit" class="w-button">
                                Отправить
                            </button>
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
                password: ''
            }
        },
        methods: {
            password_reset(){
                console.log('password_reset')
            }
        }
    }
</script>
<style 
    lang="scss" 
    scoped
    src="./password_reset.scss">
</style>