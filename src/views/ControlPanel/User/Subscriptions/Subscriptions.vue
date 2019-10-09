<template>
    <div class="subscriptions">
        <div class="subscriptions__content">
            <div class="subscriptions__empty" v-if="subscriptions.length <= 0">
                <h1>У ВАС НЕТ ПОДПИСОК</h1>
                <button class="w-button">Купить</button>
            </div>
            <div class="subscriptions__table" v-else>
                <div class="subscriptions__header">
                    <div class="subscriptions__header__item">
                        Название
                    </div>
                    <div class="subscriptions__header__item">
                        Дата окончания
                    </div>
                </div>
                <div class="subscriptions__body">
                    <div 
                        class="subscriptions__body__item"
                        v-for="item in subscriptions"
                        :key="item.id">
                        <div class="subscriptions__body__content">
                            <div class="subscriptions__body__name">
                                <div class="only-mobile">Название</div> 
                                {{item.name}}
                            </div>
                            <div class="subscriptions__body__date">
                                <div class="only-mobile">Дата окончания</div> 
                                {{item.date}}
                            </div>
                            <div class="subscriptions__body__actions">
                                <router-link 
                                    v-if="item.isEnd" 
                                    to="/user/checkout-subscriptions" 
                                    class="only-desktop">
                                        Продлить
                                    </router-link>
                                <div class="only-mobile">
                                    <router-link 
                                        v-if="item.isEnd" 
                                        to="/user/checkout-subscriptions" 
                                        tag="button">
                                        Продлить
                                    </router-link>
                                </div>
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
                    id: 1,
                    name: 'Название подписки',
                    date: '25.10.19 12:00:05',
                    isEnd: true
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