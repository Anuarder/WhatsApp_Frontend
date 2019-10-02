<template>
    <div class="messages">
        <div class="messages__content">
            
            <div class="messages__text">
                
                <editor-menu-bar 
                    :editor="editor" 
                    v-slot="{ commands, isActive }">
                    <div class="messages__text__menu-bar">
                        <div class="messages__date">
                            <datetime 
                                type="datetime" 
                                zone="UTC+6" 
                                input-class="input-date" 
                                placeholder="Выберите дату"
                                v-model="date">
                            </datetime>
                        </div>
                        <div class="messages__text__edit-bar">
                            <button 
                                :class="{ 'is-active': isActive.bold() }" 
                                class="messages__text__menu-item"
                                @click="commands.bold">
                                <b>Ж</b>
                            </button>
                            <button 
                                :class="{ 'is-active': isActive.italic() }" 
                                class="messages__text__menu-item"
                                @click="commands.italic">
                                <em>K</em>
                            </button>
                            <button 
                                :class="{ 'is-active': isActive.strike() }" 
                                class="messages__text__menu-item"
                                @click="commands.strike">
                                <s>abc</s>
                            </button>
                            <label class="messages__text__menu-item">
                                <img src="@/assets/images/file.svg" alt="file">
                                <input type="file" class="input-file" @change="fileChange">
                            </label>
                            <div class="messages__text__emoji">
                                <emoji-picker @emoji="insert">
                                    <div 
                                        class="emoji-invoker"
                                        slot="emoji-invoker" 
                                        slot-scope="{ events: { click: clickEvent } }" 
                                        @click.stop="clickEvent">
                                        <button 
                                            type="button" 
                                            class="messages__text__menu-item">
                                            <img src="@/assets/images/emoji.svg" alt="emoji">
                                        </button>
                                    </div>
                                    <div 
                                        slot="emoji-picker" 
                                        slot-scope="{ emojis, insert }">
                                        <div class="emoji-picker" >
                                            <div 
                                                v-for="(emojiGroup, category) in emojis" 
                                                :key="category">
                                                <h5>{{ category }}</h5>
                                                <div class="emojis">
                                                    <span
                                                        v-for="(emoji, emojiName) in emojiGroup"
                                                        :key="emojiName"
                                                        @click="insert(emoji)"
                                                        :title="emojiName">
                                                        {{ emoji }}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </emoji-picker>
                            </div>
                        </div>
                    </div>
                </editor-menu-bar>
                <editor-content 
                    :editor="editor" 
                    class="messages__text__editor"/>
                <div class="messages__text__actions">
                    <span>
                        {{ file_name }}
                    </span>
                    <button @click="sendMessage" class="w-button">
                        Отправить
                    </button>
                </div>
            </div>
            <div class="messages__container">
                <div class="messages__items">
                    <div 
                        class="messages__item"
                        v-for="item in messages"
                        :key="item.id">
                        <div class="messages__item__actions">
                            <div class="messages__item__date">
                                <span>Сообщение будет отправлено:</span>
                                <b>{{item.date}}</b>
                            </div>
                            <div class="messages__item__action">
                                <v-actions></v-actions>
                            </div>
                        </div>
                        <div class="messages__item__data">
                            {{item.message}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { Editor, EditorContent, EditorMenuBar  } from 'tiptap'
import {  Bold, Italic, Strike } from 'tiptap-extensions'
import EmojiPicker from 'vue-emoji-picker'

export default {
    components: {
        EditorContent,
        EditorMenuBar,
        EmojiPicker,
    },
    data(){
        return{
            date: '',
            file_name: '',
			file_data: '',
            editor: null,
            message: '',
            messages: [
                {
                    id: 6,
                    date: '22. 08. 2019 12:05:30',
                    message: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях. При создании генератора мы использовали небезизвестный универсальный код речей'
                },
                {
                    id: 7,
                    date: '22. 08. 2019 12:05:30',
                    message: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях. При создании генератора мы использовали небезизвестный универсальный код речей'
                },
                {
                    id: 8,
                    date: '22. 08. 2019 12:05:30',
                    message: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях. При создании генератора мы использовали небезизвестный универсальный код речей'
                },
                {
                    id: 9,
                    date: '22. 08. 2019 12:05:30',
                    message: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему оратору отточить навык публичных выступлений в домашних условиях. При создании генератора мы использовали небезизвестный универсальный код речей'
                },
            ]
        }
    },
    mounted(){
        this.editor = new Editor({
            content: 'Напишите сообщение',
            extensions: [
                new Bold(),
                new Italic(),
                new Strike(),
            ],
            onUpdate: ({ getHTML }) => {
                this.message = getHTML();
            }
        })
    },
    beforeDestroy() {
        this.editor.destroy();
    },
    methods: {
        sendMessage(){
            console.log(this.message);
        },
        insert(emoji) {
            this.editor.setContent(this.message += emoji);
        },
        setMessage(){
            this.editor.setContent('<p>This is <strong>some</strong> inserted text. 👋</p>')
        },
        fileChange(e) {
			this.file_name = e.target.files.length
				? e.target.files[0].name
				: this.file_name;
			this.file_data = e.target.files.length ? e.target.files[0] : "";
        },
        createFormData() {
			const formData = new FormData();
			// formData.append("name", this.name);
			// formData.append("phone", this.phone);
			// formData.append("email", this.email);
			// formData.append("utm_params", utm_params);
			// formData.append("file", this.file_data);
			return formData;
		},
    }
}
</script>
<style 
    lang="scss" 
    scoped
    src="./messages.scss">
</style>