<template>
    <div class="set-new-password form-page">
        <p-navigation></p-navigation>
        <div class="set-new-password__container form-page__container">
            <div class="set-new-password__content form-page__content">
                <div class="set-new-password__title form-page__title">
                    ВОССТАНОВЛЕНИЕ ПАРОЛЯ
                </div>
                <div class="set-new-password__form form-page__form">
                    <form @submit.prevent="set_new_password">
                        <div class="set-new-password__input form-page__input">
                            <input 
                                type="password" 
                                placeholder="Введите новый пароль" 
                                v-model="password">
                        </div>
                        <div class="set-new-password__input form-page__input">
                            <input 
                                type="password" 
                                placeholder="Повторите новый пароль" 
                                v-model="new_password">
                        </div>
                        <div class="set-new-password__button form-page__button">
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
                password: '',
                new_password: ''
            }
        },
        methods: {
            set_new_password(){
                console.log('setpassword')
            }
        }
    }
</script>
<style 
    lang="scss" 
    scoped
    src="./set_new_password.scss">
</style>