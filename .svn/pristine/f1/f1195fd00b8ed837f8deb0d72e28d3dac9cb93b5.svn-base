// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '../static/reset.css'
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import axios from './http'
import Lockr from 'lockr'
import App from './App'
import Fn from './assets/common/js/global'
import { AlertPlugin, ToastPlugin, WechatPlugin } from 'vux'
import router from './router'
import store from './vuex/store'

Vue.use(WechatPlugin)
Vue.use(AlertPlugin)
Vue.use(ToastPlugin)

FastClick.attach(document.body)

Vue.config.productionTip = false


window.axios = axios
window.router = router
window.store = store

window.Lockr = Lockr
window.Fn = Fn
const bus = new Vue()
window.bus = bus

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
