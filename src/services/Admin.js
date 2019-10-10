import Api from '@/services/Api'

export default {
    getSubscribers(){
        return Api().get("/subscription/subscriber/get_subscribers");
    },
}