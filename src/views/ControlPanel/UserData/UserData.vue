<template>
    <div class="user-data">
        <div class="create__content">
            <div class="create__form">
                <form>
                    <div class="create__input">
                        <label>Имя</label>
                        <div class="create__input__container">
                            <input type="text" v-model="first_name" v-if="isEdit">
                            <span v-else>{{first_name}}</span>
                        </div>
                    </div>
                    <div class="create__input">
                        <label>Фамилия</label>
                        <div class="create__input__container">
                            <input type="text" v-model="last_name" v-if="isEdit">
                            <span v-else>{{last_name}}</span>
                        </div>
                    </div>
                    <div class="create__input">
                        <label>Email</label>
                        <div class="create__input__container">
                            <input type="text" v-model="email" v-if="isEdit">
                            <span v-else>{{email}}</span>
                        </div>
                    </div>
                    <div class="create__input">
                        <label>Ваш номер</label>
                        <div class="create__input__container">
                            <input type="text" v-model="phone" v-if="isEdit">
                            <span v-else>{{phone}}</span>
                        </div>
                    </div>
                    <div class="create__buttons" v-if="isEdit">
                        <button class="w-button" @click="isEdit = false">
                            Сохранить
                        </button>
                        <button class="w-button w-button__outline">
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