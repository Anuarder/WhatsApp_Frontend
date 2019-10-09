<template>
    <div class="a-table">
        <div 
            class="a-table__empty" 
            v-if="data.length === 0">
            <h1>У ВАС НЕТ {{empty}}</h1>
            <router-link 
                class="w-button" 
                tag="button" 
                :to="to">
                {{ create }}
            </router-link>
        </div>
        <div class="a-table__content" v-else>
            <div 
                class="a-table__button" 
                v-if="create">
                <router-link 
                    class="w-button" 
                    tag="button" 
                    :to="to">
                    <span>+</span>
                    {{create}}
                </router-link>
            </div>
            <div 
                class="a-table__header" 
                :style="`grid-template-columns: repeat(${length}, 1fr);`">
                <div 
                    class="a-table__header__item"
                    v-for="item in headers"
                    :key="item.value">
                    <span v-html="item.title"></span>
                </div>
            </div>
            <div class="a-table__body" >
                <div 
                    class="a-table__body__item"
                    v-for="item in data"
                    :key="item._id">
                    <div 
                        class="a-table__body__content" 
                        :style="`grid-template-columns: repeat(${length}, 1fr)`">
                        <div 
                            class="a-table__body__fields"
                            v-for="key in headers"
                            :key="key.value">
                            <span v-if="item[key.value]" class="only-mobile__container">
                                <span v-html="key.title" class="only-mobile"></span>
                                <span class="only-mobile__title">{{item[key.value]}}</span>
                            </span>
                        </div>
                        <div 
                            class="a-table__body__actions" 
                            v-if="actions">
                            <v-actions 
                                @edit="_edit(item._id)" 
                                @delete="_delete(item._id)"
                                :isEdit="isEdit"
                                :isDelete="isDelete">
                            </v-actions>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        headers: Array,
        data: Array,
        actions: Boolean,
        create: String,
        to: String,
        empty: String,
        isDelete: Boolean,
        isEdit: Boolean
    },
    computed: {
        length(){
            if(this.actions){
                return this.headers.length + 1;
            }else{
                return this.headers.length;
            }
        }
    },
    methods: {
        _edit(id){
            this.$emit('edit', id)
        },
        _delete(id){
            this.$emit('delete', id)
        }
    }
}
</script>
<style 
    lang="scss" 
    scoped
    src="./a_table.scss">
</style>