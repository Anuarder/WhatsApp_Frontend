import Api from '@/services/Api'

export default {
    login(payload){
        return Api().post("/subscription/subscriber/sign_in", payload);
    },
    register(payload){
        return Api().post("/subscription/subscriber/sign_up", payload);
    },
}