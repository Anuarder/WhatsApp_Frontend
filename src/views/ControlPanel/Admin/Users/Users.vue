<template>
    <div class="users">
        <div class="users__content">
            <a-table 
                :headers="headers" 
                :data="users"
                empty="ПОЛЬЗОВАТЕЛЕЙ"
                create="Добавить пользователя"
                to="/user/admin-create-user"
                @edit="_edit"
                @delete="_delete"
                isEdit
                isDelete
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
                    _id: 1,
                    fullname: 'Тажибаев Арман',
                    phone: '+7 777 366 66 66',
                    subscriptions: 'до 25.10.19 12:00:05'
                },
                {
                    _id: 2,
                    fullname: 'Тажибаев Арман',
                    phone: '+7 777 366 66 66',
                    subscriptions: 'до 25.10.19 12:00:05'
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