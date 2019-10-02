import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        sidebar: false,
        user: {
            role: 'admin'
        },
        token: null
    },
    mutations: {
        setSidebar(state, isVisible){
            state.sidebar = isVisible;
        }
    },
    actions: {

    }
})