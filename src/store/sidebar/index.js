const state = {
    sidebar: false
}
const getters = {
    sidebar(state){
        return state.sidebar
    }
}
const mutations = {
    setSidebar(state, isVisible){
        state.sidebar = isVisible;
    }
}
export default {
    state, getters, mutations
}