<template>
    <div class="create-subscription">
        <div class="create__content">
            <div class="create__form">
                <div class="create__back"  @click="$router.back()">
                    <i class="material-icons">arrow_back_ios</i>
                    <u>
                        СОЗДАТЬ ПОДПИСКУ
                    </u>
                </div>
                <form>
                    <div class="create__input">
                        <label>Название подписки</label>
                        <div class="create__input__container">
                            <input 
                                type="text" 
                                class="create__input__element" 
                                v-model="a">
                        </div>
                    </div>
                    <div class="create__input">
                        <label>Цена</label>
                        <div class="create__input__container">
                            <input 
                                type="text" 
                                class="create__input__element" 
                                v-model="a">
                        </div>
                    </div>
                    <div class="create__input">
                        <label>Скидочная цена</label>
                        <div class="create__input__container">
                            <input 
                                type="text" 
                                class="create__input__element" 
                                v-model="a">
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
            date: '',
        }
    }
}
</script>