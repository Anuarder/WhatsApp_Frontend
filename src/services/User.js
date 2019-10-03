import Api from '@/services/Api'

export default {
    getSubscription(id){
        return Api().get(`/subscription/subscriber/get_subscription/${id}`);
    },
    paySubscription(id){
        return Api().get(`subscription/subscriber/pay_subscription/${id}`);
    }
}