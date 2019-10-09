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
            <div class="actions__item" @click="_edit" v-if="isEdit">
                Редактировать
            </div>
            <div class="actions__item red" @click="_delete" v-if="isDelete">
                Удалить
            </div>
        </div>
    </div>
</template>
<script>
import vClickOutside from 'v-click-outside'
export default {
    props: {
        isEdit: Boolean,
        isDelete: Boolean
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
        },
        _edit(){
            this.$emit('edit');
        },
        _delete(){
            this.$emit('delete');
        },
    },
}
</script>
<style 
    lang="scss" 
    scoped
    src="./actions.scss">
</style>