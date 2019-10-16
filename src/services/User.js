import Api from '@/services/Api'

export default {
    getSubscription(id){
        return Api().get(`/subscriber/get_subscription/${id}`);
    },
    changePassword(payload){
        return Api().post(`/subscriber/change`, payload);
    },
    update(payload){
        return Api().put(`/subscriber/${payload.id}`, payload);
    }
}