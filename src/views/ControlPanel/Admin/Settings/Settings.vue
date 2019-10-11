<template>
    <div class="settings">
        <div class="create__content">
            <div class="create__form">
                <form>
                    <div class="create__input">
                        <label>SMTP Host</label>
                        <div class="create__input__container">
                            <input
                                v-if="isEdit"
                                type="text"  
                                class="create__input__element" 
                                v-model="first_name">
                            <span 
                                v-else 
                                class="create__input__element">
                                {{email.host}}
                            </span>
                        </div>
                    </div>
                    <div class="create__input">
                        <label>SMTP порт</label>
                        <div class="create__input__container">
                            <input 
                                v-if="isEdit" 
                                type="text"  
                                class="create__input__element" 
                                v-model="last_name">
                            <div 
                                v-else 
                                class="create__input__element">
                                {{email.port}}
                            </div>
                        </div>
                    </div>
                    <div class="create__input">
                        <label>SMTP email</label>
                        <div class="create__input__container">
                            <input
                                v-if="isEdit"
                                type="text"  
                                class="create__input__element" 
                                v-model="first_name">
                            <span 
                                v-else 
                                class="create__input__element">
                                {{email.auth.user}}
                            </span>
                        </div>
                    </div>
                    <div class="create__input">
                        <label>SMTP пароль</label>
                        <div class="create__input__container">
                            <input 
                                v-if="isEdit" 
                                type="text"  
                                class="create__input__element" 
                                v-model="last_name">
                            <div 
                                v-else 
                                class="create__input__element">
                                {{email.auth.pass}}
                            </div>
                        </div>
                    </div>
                    <div class="create__input">
                        <label>WhatsApp api_url</label>
                        <div class="create__input__container">
                            <input 
                                v-if="isEdit" 
                                type="text"  
                                class="create__input__element" 
                                v-model="last_name">
                            <div 
                                v-else 
                                class="create__input__element">
                                {{wp.api_url}}
                            </div>
                        </div>
                    </div>
                    <div class="create__input">
                        <label>WhatsApp token</label>
                        <div class="create__input__container">
                            <input 
                                v-if="isEdit" 
                                type="text"  
                                class="create__input__element" 
                                v-model="phone" >
                            <span 
                                v-else 
                                class="create__input__element">
                                {{wp.token}}
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
            email: {
                "host": "smtp.gmail.com",
                "auth": {
                    "user": "ktoizhan@gmail.com",
                    "pass": "Ywnwa!(8213061994aabcE"
                },
                "port": 465
            },
            wp: {
                "api_url": "https://eu7.chat-api.com/instance72226/",
                "token":"ctc7ocbmeejntf2w"
            },
            isEdit: false
        }
    }
}
</script>