<template>
    <div class="actions">
        <div 
            class="actions__button" 
            @click.stop="actions = !actions" >
           <img src="@/assets/images/actions.svg" alt="">
        </div>
        <div
            class="actions__items" 
            v-if="actions" 
            v-click-outside="config">
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
import vClickOutside from 'v-click-outside'
export default {
    props: {

    },
    data(){
        return{
            config: {
                handler: this.hide,
                events: ["dblclick", "click"]
            },
            actions: false,
        }
    },
    directives: {
        clickOutside: vClickOutside.directive
    },
    methods: {
        hide(){
            this.actions = false;
        }
    },
}
</script>
<style 
    lang="scss" 
    scoped
    src="./actions.scss">
</style>