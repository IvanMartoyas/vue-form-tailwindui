import Vue from 'vue'
import Vuex from 'vuex'

import form_sitys from './form_sitys.js'
import message from './message.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    message,
    form_sitys
  }
})
