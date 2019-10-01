<template>
    <div class="actions">
        <div class="actions__button" @click="actions = !actions" v-click-outside="hide">
           <!-- <i class="material-icons">more_horiz</i> -->
           <img src="../../assets/images/actions.svg" alt="">
        </div>
        <div class="actions__items" v-show="actions">
            <div class="actions__item">
                Редактировать
            </div>
            <div class="actions__item red">
                Удалить
            </div>
        </div>
    </div>
</template>
<script>
import ClickOutside from 'vue-click-outside'

export default {
    props: {

    },
    data(){
        return{
            actions: false
        }
    },
    methods: {
        hide(){
            if(this.actions){
                this.actions = false;
            }
        }
    },
    directives: {
        ClickOutside
    }
}
</script>
<style 
    lang="scss" 
    scoped
    src="./actions.scss">
</style>