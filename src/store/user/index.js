import AuthServices from "@/services/Auth"

const state = {
    token: null,
    login_errors: null,
    login_loading: false,
    user: {
        role: 'admin'
    },
}

const getters = {
    GET_TOKEN(state){
        return state.token;
    },
    GET_USER(state){
        return state.user;
    }
}

const mutations = {
    SET_USER(state, user){
        state.user = user
    },
    SET_LOADING(state, loading){
        state.loading = loading;
    }
}

const actions = {
    async LOGIN({ commit }, payload){
        try{
            commit('SET_LOADING', true)
            const response = await AuthServices.login(payload);
            if(response.data.status){
                commit('SET_USER', response.data.user);
                commit('SET_LOADING', false);
            }else{
                console.log('fuck')
                commit('SET_LOADING', false);
            }
        }catch(err){
            console.log(err);
        }
    }
}

export default {
    state, getters, mutations, actions
}