import Api from '@/services/Api'

export default {
    getPaymentLink(payload){
        return Api().post("/subscriber/subscription", payload);
    },
}