const state = {
    token: null,
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
const mutations = {}
const actions = {}

export default {
    state, getters, mutations, actions
}