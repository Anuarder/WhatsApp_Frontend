import AuthServices from "@/services/Auth"
import httpError from "@/handlers/httpError"

const state = {
    reset_password_token: null
}

const getters = {
    GET_RESET_PASSWORD_TOKEN(state){
        return state.reset_password_token;
    },
}

const mutations = {
    SET_RESET_PASSWORD_TOKEN(state, token){
        state.reset_password_token = token;
    }
}

const actions = {
    async FORGOT_PASSWORD(payload){
        try{
            const response = await AuthServices.forgot_password(payload);
            if(response.data.id){
                return {
                    status: true
                }
            }else{
                throw new Error("Пользователь не найден")
            }
        }catch(err){
            return httpError(err);
        }
    },
    async RESTORE_PASSWORD({ commit }, payload){
        try{
            const response = await AuthServices.restore_password(payload);
            if(response.data.reset_token){
                commit('SET_RESET_PASSWORD_TOKEN', response.data.reset_token);
                return {
                    status: true
                }
            }else{
                throw new Error("Пользователь не найден")
            }
        }catch(err){
            return httpError(err);
        }
    },
    async RESET_PASSWORD(payload){
        try{
            const response = await AuthServices.reset_password(payload);
            if(response.data.status === 'password_has_been_changed'){
                return {
                    status: true
                }
            }else{
                throw new Error("Ошибка");
            }
        }catch(err){
            return httpError(err);
        }
    }
}

export default {
    state, getters, mutations, actions
}