import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import Datetime from 'vue-datetime'
import 'vue-datetime/dist/vue-datetime.css'
import "./assets/css/root.scss"
import VActions from "@/components/Actions/Actions"

Vue.component('v-actions', VActions)
Vue.use(Datetime);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')