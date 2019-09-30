<template>
    <div class="create-subscription">
        <div class="create-subscription__content">
            <div class="create-subscription__form">
                <div class="create-subscription__back">
                    <img src="@/assets/images/arrow_back.svg" alt="back">
                    <u>
                        СОЗДАТЬ ПОДПИСКУ
                    </u>
                </div>
                <form>
                    <div class="create-subscription__input">
                        <label>Название подписки</label>
                        <input type="text" v-model="a">
                    </div>
                    <div class="create-subscription__input">
                        <label>Цена</label>
                        <input type="text" v-model="a">
                    </div>
                    <div class="create-subscription__input">
                        <label>Скидочная цена</label>
                        <input type="text" v-model="a">
                    </div>
                    <div class="create-subscription__buttons">
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
    src="./create_subscription.scss">
</style>