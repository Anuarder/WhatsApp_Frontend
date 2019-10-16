const state = {
    sidebar: false
}
const getters = {
    GET_SIDEBAR: (state) => (state.sidebar)
}
const mutations = {
    SET_SIDEBAR(state, isVisible){
        state.sidebar = isVisible;
    }
}
export default {
    state, getters, mutations
}