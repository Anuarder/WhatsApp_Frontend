<template>
    <div class="password-reset">
        <div class="create__content">
            <div class="create__form">
                <form>
                    <div class="create__input">
                        <label>
                            Введите ваш
                            <br />текущий пароль
                        </label>
                        <div class="create__input__container">
                            <input type="text" v-model="current_password" class="create__input__element" />
                        </div>
                    </div>
                    <div class="create__input">
                        <label>
                            Введите новый
                            <br />пароль
                        </label>
                        <div class="create__input__container">
                            <input type="text" v-model="new_password" class="create__input__element" />
                        </div>
                    </div>
                    <div class="create__input">
                        <label>
                            И повторите
                            <br />его
                        </label>
                        <div class="create__input__container">
                            <input type="text" v-model="confirm_new_password" class="create__input__element" />
                        </div>
                    </div>
                    <div class="create__buttons">
                        <button class="w-button">Сохранить</button>
                        <button class="w-button w-button__outline">Отмена</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
	data() {
		return {
			current_password: "",
			new_password: "",
			confirm_new_password: ""
		};
	}
};
</script>