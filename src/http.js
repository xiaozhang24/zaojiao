import axios from 'axios'
import store from '@/vuex/store'
import router from './router'
import Lockr from 'lockr'
// axios 配置
axios.defaults.timeout = 1000 * 15

// http request拦截器
axios.interceptors.request.use(
        config => {
            store.commit('setLoading', true)
            if (store.state.isLogin) {
                config.headers['X-Requested-With'] = 'XMLHttpRequest'
                config.headers.token = Lockr.get('token')
            } else {
                router.replace({
                    path: '/login'
                })
            }
            return config
        },
        error => { 
                return Promise.reject(error.data)
        });

        // http response拦截器
        axios.interceptors.response.use(
            response => {
                store.commit('setLoading', false)
                if (response.data.code == 101) {
                    store.commit('setLogin', false);
                    router.replace({
                        path: '/login'
                    })
                }
                return response;
            },
            error => {
                 store.commit('setLoading', false)
                return Promise.reject(error.data)
            });

        if (store.state.isLogin) {
            axios.post('/master/Account/checkLogin').then((response) => {})
        }

        export default axios