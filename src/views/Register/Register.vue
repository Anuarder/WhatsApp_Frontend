<template>
    <div class="register form-page">
        <p-navigation></p-navigation>
        <div class="register__container form-page__container">
            <div class="register__content form-page__content">
                <h1 class="register__title form-page__title">РЕГИСТРАЦИЯ</h1>
                <div class="register__form form-page__form">
                    <form @submit.prevent="register">
                        <div class="register__input form-page__input">
                            <label>Имя</label>
                            <input type="text" v-model="first_name">
                        </div>
                        <div class="register__input form-page__input">
                            <label>Фамилия</label>
                            <input type="text" v-model="last_name">
                        </div>
                        <div class="register__input form-page__input">
                            <label>Email</label>
                            <input type="text" v-model="email">
                        </div>
                        <div class="register__input form-page__input">
                            <label>Ваш номер</label>
                            <input type="text" v-model="phone">
                        </div>
                        <div class="register__input form-page__input">
                            <label>Подтвердите номер</label>
                            <input type="text" v-model="confirm_phone">
                        </div>
                        <div class="register__input form-page__input">
                            <label>Ваш пароль</label>
                            <input type="password" v-model="password">
                        </div>
                        <div class="register__input form-page__input">
                            <label>Подтвердите пароль</label>
                            <input type="password" v-model="confirm_password">
                        </div>
                        <div class="register__button form-page__button">
                            <button type="submit" class="w-button">
                                Зарегистрироваться
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
        head(){
            return{
                title: "Регистрация",
            }
        },
        data(){
            return{
                first_name: '',
                last_name: '',
                email: '',
                phone: '',
                confirm_phone: '',
                password: '',
                confirm_password: ''
            }
        },
        methods: {
            async register(){
                try{
                    const response = 'Register waa';
                    console.log(response);
                    this.$router.push('/login')
                }catch(err){
                    console.log(err);
                }
            }
        }
    }
</script>
<style 
    lang="scss" 
    scoped
    src="@/assets/css/form-page.scss">
</style>
<style 
    lang="scss" 
    scoped
    src="./register.scss">
</style>