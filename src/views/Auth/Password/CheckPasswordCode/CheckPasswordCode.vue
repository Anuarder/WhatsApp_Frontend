<template>
    <div class="check-password-code form-page">
        <p-navigation></p-navigation>
        <div class="check-password-code__container form-page__container">
            <div class="check-password-code__content form-page__content">
                <div class="check-password-code__title form-page__title">
                    ВОССТАНОВЛЕНИЕ ПАРОЛЯ
                </div>
                <div class="check-password-code__form form-page__form">
                    <form @submit.prevent="check_password_code">
                        <div class="check-password-code__input form-page__input">
                            <input 
                                type="text" 
                                placeholder="Введите код из почты" 
                                v-model="code">
                        </div>
                        <div class="check-password-code__link form-page__link">
                            <router-link to="/password-reset">
                                <u>
                                    Отправить код снова
                                </u>
                            </router-link>
                        </div>
                        <div class="check-password-code__button form-page__button">
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
                code: '',
            }
        },
        methods: {
            check_password_code(){
                console.log('21000')
            }
        }
    }
</script>
<style 
    lang="scss" 
    scoped
    src="./check_password_code.scss">
</style>