<template>
	<div class="checkout-subscriptions">
        <div class="create__content">
            <div class="create__form">
                <div class="create__back" @click="$router.back()">
                    <i class="material-icons">arrow_back_ios</i>
                    <u>
                        ОФОРМИТЬ ПОДПИСКУ
                    </u>
                </div>
                <form>
                    <div class="create__input">
                        <div class="create__input__container">
                            <input 
                                type="text" 
                                class="create__input__element" 
                                placeholder="Промокод"/>
                        </div>
                    </div>
                    <div class="create__buttons">
                        <button
                            class="w-button">
                            Оформить
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.checkout-subscriptions{
    .create{
        &__buttons{
            margin-top: 1rem;
            margin-left: 0;
            justify-content: center;
            button{
                margin: 0;
                padding: 1rem
            }
        }
    }
}
</style>