import Vue from 'vue'
import App from './App.vue'
import store from './store'

import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

import VueMask from 'v-mask'
Vue.use(VueMask);

import './assets/css/index.css';

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
