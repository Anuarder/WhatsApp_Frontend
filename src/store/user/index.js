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
    },
    GET_LOADING(state){
        return state.loading;
    },
    GET_LOGIN_ERRORS(state){
        return state.login_errors;
    }
}

const mutations = {
    SET_USER(state, user){
        state.user = user;
    },
    SET_LOADING(state, loading){
        state.loading = loading;
    },
    SET_TOKEN(state, token){
        state.token = token;
    }
}

const actions = {
    async LOGIN({ commit }, payload){
        try{
            commit('SET_LOADING', true)
            const response = await AuthServices.login(payload);
            if(response.data.token){
                commit('SET_USER', response.data.user);
                commit('SET_TOKEN', response.data.token);
                commit('SET_LOADING', false);
                this.$router.push('/user');
            }else{
                commit('SET_LOADING', false);
            }
        }catch(err){
            commit('SET_LOADING', false);
            if(err.response.data){
                commit('SET_LOAGIN_ERROR', err.response.data.errors);
            }else{
                commit('SET_LOAGIN_ERROR', 'Ошибка');
            }
        }
    },
    async REGISTER({ commit }, payload){
        try{
            const response = await AuthServices.register(payload);
            if(response.status == 200){
                commit('')
            }
        }catch(err){
            console.log(err);
        }
    }
}

export default {
    state, getters, mutations, actions
}