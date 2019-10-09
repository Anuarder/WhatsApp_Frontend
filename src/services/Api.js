import axios from 'axios'
import store from '@/store/index'

export default () => {
    return axios.create({
        baseURL: `http://192.168.88.29:5000/api`,
        headers: {
          Authorization: `Bearer ${store.state.token}`,
        }
    });
}

