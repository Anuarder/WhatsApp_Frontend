<template>
    <div class="password-reset">
        <div class="password-reset__content">
            <div class="password-reset__form">
                <form>
                    <div class="password-reset__input">
                        <label>Введите ваш <br> текущий пароль</label>
                        <input type="text" v-model="current_password">
                    </div>
                    <div class="password-reset__input">
                        <label>Введите новый <br> пароль</label>
                        <input type="text" v-model="new_password">
                    </div>
                    <div class="password-reset__input">
                        <label>И повторите <br> его</label>
                        <input type="text" v-model="confirm_new_password">
                    </div>
                    <div class="password-reset__buttons">
                        <button class="w-button">
                            Сохранить
                        </button>
                        <button class="w-button w-button__outline">
                            Отмена
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            current_password: '',
            new_password: '',
            confirm_new_password: ''
        }
    }
}
</script>
<style 
    lang="scss" 
    scoped
    src="./password_reset.scss">
</style>