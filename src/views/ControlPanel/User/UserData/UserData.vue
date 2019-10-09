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
                                v-model="first_name">
                            <span 
                                v-else 
                                class="create__input__element">
                                {{first_name}}
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
                                v-model="last_name">
                            <div 
                                v-else 
                                class="create__input__element">
                                {{last_name}}
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
                                v-model="email">
                            <span 
                                v-else 
                                class="create__input__element">
                                {{email}}
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
                                v-model="phone" >
                            <span 
                                v-else 
                                class="create__input__element">
                                {{phone}}
                            </span>
                        </div>
                    </div>
                    <div 
                        v-if="isEdit" 
                        class="create__buttons">
                        <button 
                            class="w-button" 
                            @click="isEdit = false">
                            Сохранить
                        </button>
                        <button 
                            class="w-button w-button__outline">
                            Отмена
                        </button>
                    </div>
                </form>
            </div>
            <div 
                class="create__actions" 
                v-if="!isEdit"
                @click="isEdit = true">
                <img src="@/assets/images/edit.svg" alt="edit">
                Редактировать
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            first_name: 'Арман',
            last_name: 'Тажибаев',
            email: 'armant89@mail.ru',
            phone: '+7 777 366 66 66',
            isEdit: false
        }
    }
}
</script>