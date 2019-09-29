<template>
    <div class="subscriptions">
        <div class="subscriptions__content">
            <!-- <div class="subscriptions__button">
                <button class="w-button">
                    <span>+</span>
                    Создать подписку
                </button>
            </div> -->
            <div class="subscriptions__table">
                <div class="subscriptions__header">
                    <div class="subscriptions__header__item">
                        Название
                    </div>
                    <div class="subscriptions__header__item">
                        Цена, KZT
                    </div>
                    <div class="subscriptions__header__item">
                        Скидочная цена
                    </div>
                </div>
                <div class="subscriptions__body">
                    <div 
                        class="subscriptions__body__item"
                        v-for="item in subscriptions"
                        :key="item.id">
                        <div class="subscriptions__body__content">
                            <div class="subscriptions__body__name">
                                {{item.name}}
                            </div>
                            <div class="subscriptions__body__price">
                                {{item.price}}
                            </div>
                            <div class="subscriptions__body__discount-price">
                                {{item.discount_price}}
                            </div>
                            <div class="subscriptions__body__actions">
                                <img src="@/assets/images/actions.svg" alt="actions">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            subscriptions: [
                {
                    name: 'Подписка',
                    price: '150',
                    discount_price: '150'
                }
            ]
        }
    }
}
</script>
<style 
    lang="scss" 
    scoped
    src="./subscriptions.scss">
</style>