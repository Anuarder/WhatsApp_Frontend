<template>
    <div class="create-promocode">
        <div class="create__content">
            <div class="create__form">
                <div class="create__back" @click="$router.back()">
                    <i class="material-icons">arrow_back_ios</i>
                    <u>
                        СОЗДАТЬ ПРОМОКОД
                    </u>
                </div>
                <form>
                    <div class="create__input">
                        <label>Название промокода</label>
                        <div class="create__input__container">
                            <input 
                                type="text" 
                                class="create__input__element"
                                v-model="name">
                        </div>
                    </div>
                    <div class="create__input">
                        <label>Действителен до</label>
                        <div class="create__input__container">
                            <datetime 
                                zone="UTC+6" 
                                input-class="input-date" 
                                placeholder="Выберите дату"
                                v-model="date">
                            </datetime> 
                        </div>
                    </div>
                    <div class="create__input">
                        <label>Проценты</label>
                        <div class="create__input__container">
                            <input 
                                type="text" 
                                class="create__input__element"
                                v-model="percent"  >
                        </div>
                    </div>
                    <div class="create__input">
                        <label>Промокод можно <br> использовать</label>
                        <div class="create__input__container">
                            <input 
                                type="number" 
                                class="create__input__element mr-2"
                                v-model="quantity">
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
            name: '',
            date: '',
            percent: '',
            quantity: ''
        }
    }
}
</script>