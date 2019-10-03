import Api from '@/services/Api'

export default {
    getSubscribers(){
        return Api().get("/subscription/subscriber/get_subscribers");
    },
    getSubscriberById(id){
        return Api().get(`/subscription/subscriber/get_subscribers/${id}`);
    }
}