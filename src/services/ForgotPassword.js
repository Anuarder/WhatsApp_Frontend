import Api from '@/services/Api'

export default {
    forgot(payload){
        return Api().post("/subscriber/forgot", payload);
    },
    restore(payload){
        return Api().post("/subscriber/restore", payload);
    },
    reset(payload){
        return Api().post("/subscriber/reset", payload);
    }
}