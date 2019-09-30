<template>
    <div class="create-promocode">
        <div class="create__content">
            <div class="create__form">
                <div class="create__back">
                    <i class="material-icons">arrow_back_ios</i>
                    <u>
                        СОЗДАТЬ ПРОМОКОД
                    </u>
                </div>
                <form>
                    <div class="create__input">
                        <label>Название промокода</label>
                        <div class="create__input__container">
                            <input type="text" v-model="a">
                        </div>
                    </div>
                    <div class="create__input">
                        <label>Действителен до</label>
                        <div class="create__input__container">
                            <input type="text" v-model="a">
                        </div>
                    </div>
                    <div class="create__input">
                        <label>Проценты</label>
                        <div class="create__input__container">
                            <input type="text" v-model="a">
                        </div>
                    </div>
                    <div class="create__input">
                        <label>Промокод можно <br> использовать</label>
                        <div class="create__input__container">
                            <div class="create__input__select mr-2">
                                <select>
                                    <option value="">неограниченно</option>
                                </select>
                            </div>
                            <input type="number" value="5" class="mr-2">
                            раз
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
            a: '',
        }
    }
}
</script>