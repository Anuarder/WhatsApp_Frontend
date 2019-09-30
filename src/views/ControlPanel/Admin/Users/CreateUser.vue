<template>
    <div class="create-user">
        <div class="create__content">
            <div class="create__form">
                <div class="create__back">
                    <i class="material-icons">arrow_back_ios</i>
                    <u>
                        Добавить пользователя
                    </u>
                </div>
                <form>
                    <div class="create__input">
                        <label>Имя</label>
                        <div class="create__input__container">
                            <input type="text" v-model="a">
                        </div>
                    </div>
                    <div class="create__input">
                        <label>Фамилия</label>
                        <div class="create__input__container">
                            <input type="text" v-model="a">
                        </div>
                    </div>
                    <div class="create__input">
                        <label>Email</label>
                        <div class="create__input__container">
                            <input type="text" v-model="a">
                        </div>
                    </div>
                    <div class="create__input">
                        <label>Ваш номер</label>
                        <div class="create__input__container">
                            <input type="text" v-model="a">
                        </div>
                    </div>
                    <div class="create__input">
                        <label>Ваш пароль</label>
                        <div class="create__input__container">
                            <input type="text" v-model="a">
                        </div>
                    </div>
                    <div class="create__input">
                        <label>Подписка</label>
                        <div class="create__input__container">
                            <div class="create__input__select mr-2">
                                <select>
                                    <option value="">день</option>
                                </select>
                            </div>
                            <div class="create__input__select mr-2">
                                <select class="mr-2">
                                    <option value="">месяц</option>
                                </select>
                            </div>
                            <div class="create__input__select">
                                <select>
                                    <option value="">год</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="create__buttons">
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
            a: ''
        }
    }
}
</script>