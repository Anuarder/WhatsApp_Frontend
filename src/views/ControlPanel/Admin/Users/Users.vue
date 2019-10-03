<template>
    <div class="users">
        <div class="users__content">
            <a-table 
                :headers="headers" 
                :data="users"
                empty="ПОЛЬЗОВАТЕЛЕЙ"
                create="Добавить пользователя"
                to="/user/admin-create-user"
                actions>
            </a-table>
        </div>
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
                    title: 'ФИО',
                    value: 'fullname'
                },
                {
                    title: 'Номер',
                    value: 'phone'
                },
                {
                    title: 'Подписка',
                    value: 'subscriptions'
                },
            ],
            users: [
                {
                    fullname: 'Тажибаев Арман',
                    phone: '+7 777 366 66 66',
                    subscriptions: 'до 25.10.19 12:00:05'
                },
                {
                    fullname: 'Тажибаев Арман',
                    phone: '+7 777 366 66 66',
                    subscriptions: 'до 25.10.19 12:00:05'
                }
            ]
        }
    }
}
</script>