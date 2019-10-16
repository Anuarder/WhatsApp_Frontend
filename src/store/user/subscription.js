import SubscriptionServices from "@/services/Subscription"
import httpError from "@/handlers/httpError"

const state = {
    payment_link: null
}

const getters = {
    GET_PAYMENT_LINK: (state) => (state.payment_link)
}

const mutations = {
    SET_PAYMENT_LINK(state, payment_link){
        state.payment_link = payment_link
    }
}

const actions = {
    async COMPUTE_PAYMENT({ commit }){
        try{
            const response = await SubscriptionServices.getPaymentLink();
            if(response.data.payment_link){
                commit('SET_PAYMENT_LINK');
                return {
                    status: true
                }
            }else{
                throw new Error("Ссылка для оплаты отсутсвует")
            }

        }catch(err){
            return httpError(err);
        }
    }
}

export default {
    state, getters, mutations, actions
}