<template>
	<div class="confirm-subscription-purchase">
        <div class="create__content">
            <div class="create__form">
                <div class="create__back" @click="$router.back()">
                    <i class="material-icons">arrow_back_ios</i>
                    <u>
                        ПОДТВЕРДИТЕ ОФОРМЛЕНИЕ
                    </u>
                </div>
                <form>
                    <div class="create__input">
                        <div class="create__input__container">
                            <span class="create__input__element">
                                Сумма: 500 тг
                            </span>
                        </div>
                    </div>
                    <div class="create__buttons">
                        <a class="w-button">Оформить</a>
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
.confirm-subscription-purchase{
    .create{
        &__input{
            &__element{
                justify-content: center;
            }
        }
        &__buttons{
            margin-top: 1rem;
            margin-left: 0;
            justify-content: center;
            a{
                margin: 0;
                padding: 1rem
            }
        }
    }
}
</style>