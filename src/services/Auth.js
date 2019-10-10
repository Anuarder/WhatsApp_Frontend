import Api from '@/services/Api'

export default {
    login(payload){
        return Api().post("/subscriber/sign_in", payload);
    },
    register(payload){
        return Api().post("/subscriber/sign_up", payload);
    },
}