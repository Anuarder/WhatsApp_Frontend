<template>
    <div class="promocodes">
        <a-table 
            :headers="headers" 
            :data="promocodes"
            empty="ПРОМОКОДОВ"
            create="Создать промокод"
            to="/user/admin-create-promocode"
            @edit="_edit"
            @delete="_delete"
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
                    title: 'Проценты %',
                    value: 'percent'
                },
                {
                    title: 'Кол-во использования',
                    value: 'use_amount'
                },
                {
                    title: 'Дата',
                    value: 'date'
                },
            ],
            promocodes: [
                {
                    _id: 1,
                    name: 'Подписка',
                    percent: '150',
                    use_amount: '5',
                    date: '25.10.19 12:00:05'
                },
                {
                    _id: 2,
                    name: 'Подписка',
                    percent: '150',
                    use_amount: '5',
                    date: '25.10.19 12:00:05'
                },
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
