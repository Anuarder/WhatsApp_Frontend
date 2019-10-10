import jwt from "jsonwebtoken"
import AuthServices from "@/services/Auth"
import httpError from "@/handlers/httpError"
import reset_password from "./reset_password"

const state = {
    token: null,
    tokenEXP: null,
    user: null
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
        state.tokenEXP = jwt.decode(token).exp;
    },
    LOGOUT(state){
        state.token = null;
        state.tokenEXP = null;
        state.user = null;
    }
}

const actions = {
    async LOGIN({ commit }, payload){
        try{
            const response = await AuthServices.login(payload);
            if(response.data.token){
                commit('SET_USER', response.data.user);
                commit('SET_TOKEN', response.data.token);
                return {
                    status: true
                }
            }else{
                throw new Error("Отсутсвует токен");
            }
        }catch(err){
            return httpError(err);
        }
    },
    async REGISTER(payload){
        try{
            const response = await AuthServices.register(payload);
            if(response.data.message === 'ok'){
                return {
                    status: true
                }
            }else{
                throw new Error("Ошибка");
            }
        }catch(err){
            return httpError(err);
        }
    },
}

const modules = [reset_password];
export default {
    state, getters, mutations, modules, actions
}