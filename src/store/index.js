import Vue from 'vue'
import Vuex from 'vuex'
import sidebar from './sidebar'
import user from './user'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
    plugins: [createPersistedState()],
    modules: [
        sidebar,
        user
    ]
})