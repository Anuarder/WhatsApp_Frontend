<template>
    <div class="user-data">
        <div class="create__content">
            <div class="create__form">
                <form>
                    <div class="create__input">
                        <label>Имя</label>
                        <div class="create__input__container">
                            <input
                                v-if="isEdit"
                                type="text"  
                                class="create__input__element" 
                                v-model="editable_fields.first_name">
                            <span 
                                v-else 
                                class="create__input__element">
                                {{user.first_name}}
                            </span>
                        </div>
                    </div>
                    <div class="create__input">
                        <label>Фамилия</label>
                        <div class="create__input__container">
                            <input 
                                v-if="isEdit" 
                                type="text"  
                                class="create__input__element" 
                                v-model="editable_fields.last_name">
                            <div 
                                v-else 
                                class="create__input__element">
                                {{user.last_name}}
                            </div>
                        </div>
                    </div>
                    <div class="create__input">
                        <label>Email</label>
                        <div class="create__input__container">
                            <input 
                                v-if="isEdit" 
                                type="text"  
                                class="create__input__element" 
                                v-model="editable_fields.email">
                            <span 
                                v-else 
                                class="create__input__element">
                                {{user.email}}
                            </span>
                        </div>
                    </div>
                    <div class="create__input">
                        <label>Ваш номер</label>
                        <div class="create__input__container">
                            <input 
                                v-if="isEdit" 
                                type="text"  
                                class="create__input__element" 
                                v-model="editable_fields.phone" >
                            <span 
                                v-else 
                                class="create__input__element">
                                {{user.phone}}
                            </span>
                        </div>
                    </div>
                    <div 
                        v-if="isEdit" 
                        class="create__buttons">
                        <button 
                            class="w-button" 
                            @click="edit">
                            <span v-if="isLoading">
                                Загрузка...
                            </span>
                            <span v-else>
                                Сохранить
                            </span>
                        </button>
                        <button 
                            class="w-button w-button__outline"
                            @click="isEdit = false">
                            Отмена
                        </button>
                    </div>
                </form>
            </div>
            <div 
                class="create__actions" 
                v-if="!isEdit" 
                @click="allow_editing">
                <img src="@/assets/images/edit.svg" alt="edit">
                Редактировать
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from "vuex"
export default {
    data(){
        return{
            editable_fields: null,
            isEdit: false,
            isLoading: false
        }
    },
    computed: {
        ...mapGetters(['GET_USER']),
        user(){
            return this.GET_USER;
        }
    },
    methods: {
        allow_editing(){
            this.editable_fields = {
                ...this.user
            }
            this.isEdit = true;
        },
        async edit(){
            try{
                this.isLoading = true;
                const response = await this.$store.dispatch('EDIT_USER', this.editable_fields);
                if(response.status){
                    this.isLoading = false;
                }else{
                    throw response;
                }
            }catch(err){
                console.log(err);
            }
        }
    }
}
</script>