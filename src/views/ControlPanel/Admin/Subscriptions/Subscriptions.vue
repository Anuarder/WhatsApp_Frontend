<template>
    <div class="subscriptions">
        <a-table 
            :headers="headers" 
            :data="subscriptions"
            @edit="_edit"
            @delete="_delete"
            isEdit
            actions>
        </a-table>
    </div>
</template>
<script>
import ATable from "@/components/ATable/ATable"
export default {
    components: {
        ATable
    },
    data(){
        return{
            headers: [
                {
                    title: 'Название',
                    value: 'name'
                },
                {
                    title: 'Цена, KZT',
                    value: 'price'
                },
                {
                    title: 'Скидочная цена',
                    value: 'discount_price'
                },
            ],
            subscriptions: [
                {
                    _id: 1,
                    name: 'Подписка',
                    price: '150',
                    discount_price: '150'
                }
            ]
        }
    },
    methods: {
        _edit(id){
            console.log(id)
        },
        _delete(id){
            console.log(id)
        }
    }
}
</script>
