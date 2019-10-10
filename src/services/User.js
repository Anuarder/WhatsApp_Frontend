import Api from '@/services/Api'

export default {
    getSubscription(id){
        return Api().get(`/subscriber/get_subscription/${id}`);
    },
}