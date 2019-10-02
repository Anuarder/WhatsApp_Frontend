<template>
    <div class="a-table">
        <div class="a-table__content">
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
                    :key="item.id">
                    <div 
                        class="a-table__body__content" 
                        :style="`grid-template-columns: repeat(${length}, 1fr)`">
                        <div 
                            class="a-table__body__fields"
                            v-for="key in headers"
                            :key="key.value">
                            <span v-if="item[key.value]">
                                {{item[key.value]}}
                            </span>
                        </div>
                        <div 
                            class="a-table__body__actions" 
                            v-if="actions">
                            <v-actions></v-actions>
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
        to: String
    },
    computed: {
        length(){
            if(this.actions){
                return this.headers.length + 1;
            }else{
                return this.headers.length;
            }
        }
    }
}
</script>
<style 
    lang="scss" 
    scoped
    src="./a_table.scss">
</style>