import AuthServices from "@/services/Auth"
import httpError from "@/handlers/httpError"

const state = {
    token: null,
    new_user: {
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        password: ""
    },
    user: {
        role: 'user'
    },
}

const getters = {
    GET_TOKEN(state){
        return state.token;
    },
    GET_USER(state){
        return state.user;
    },
}

const mutations = {
    SET_USER(state, user){
        state.user = user;
    },
    SET_TOKEN(state, token){
        state.token = token;
    }
}

const actions = {
    async LOGIN({ commit }, payload){
        try{
            const response = await AuthServices.login(payload);
            console.log(response)
            if(response.status === 200){
                if(response.data.token){
                    commit('SET_USER', response.data.user);
                    commit('SET_TOKEN', response.data.token);
                    return {
                        status: true
                    }
                }
            }else{
                throw new Error("Нет токена");
            }
        }catch(err){
            return httpError(err);
        }
    },
    async REGISTER(payload){
        try{
            const response = await AuthServices.register(payload);
            if(response.data.message == 'ok'){
                return {
                    status: true
                }
            }
        }catch(err){
            return httpError(err);
        }
    }
}

export default {
    state, getters, mutations, actions
}