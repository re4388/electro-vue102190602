import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'




if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */

import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'


new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
