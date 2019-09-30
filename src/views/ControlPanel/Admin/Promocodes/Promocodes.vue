<template>
    <div class="promocodes">
        <a-table 
            :headers="headers" 
            :data="promocodes"
            create="Создать промокод"
            to="/user/admin-create-promocode"
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
                    title: 'Кол-во <br> использования',
                    value: 'use_amount'
                },
                {
                    title: 'Дата',
                    value: 'date'
                },
            ],
            promocodes: [
                {
                    name: 'Подписка',
                    percent: '150',
                    use_amount: '5',
                    date: '25.10.19 12:00:05'
                }
            ]
        }
    }
}
</script>
