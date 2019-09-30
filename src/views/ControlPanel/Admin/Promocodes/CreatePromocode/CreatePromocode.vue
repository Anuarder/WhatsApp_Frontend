<template>
    <div class="create-promocode">
        <div class="create-promocode__content">
            <div class="create-promocode__form">
                <div class="create-promocode__back">
                    <img src="@/assets/images/arrow_back.svg" alt="back">
                    <u>
                        СОЗДАТЬ ПРОМОКОД
                    </u>
                </div>
                <form>
                    <div class="create-promocode__input">
                        <label>Название промокода</label>
                        <div class="create-promocode__input__container">
                            <input type="text" v-model="a">
                        </div>
                    </div>
                    <div class="create-promocode__input">
                        <label>Действителен до</label>
                        <div class="create-promocode__input__container">
                            <input type="text" v-model="a">
                        </div>
                    </div>
                    <div class="create-promocode__input">
                        <label>Проценты</label>
                        <div class="create-promocode__input__container">
                            <input type="text" v-model="a">
                        </div>
                    </div>
                    <div class="create-promocode__input">
                        <label>Промокод можно <br> использовать</label>
                        <div class="create-promocode__input__container">
                            <select class="mr-1">
                                <option value="">неограниченно</option>
                            </select>
                            <input type="number" value="5" class="mr-1">
                            раз
                        </div>
                    </div>
                    <div class="create-promocode__buttons">
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
<style 
    lang="scss" 
    scoped
    src="./create_promocode.scss">
</style>