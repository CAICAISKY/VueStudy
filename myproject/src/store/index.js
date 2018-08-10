import Vue from 'vue'
import Vuex from 'vuex'
import state from './state.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  actions: {
    funcNameA (cxt, city) {
      cxt.commit('changeCity', city)
    }
  },
  mutations: {
    changeCity (state, city) {
      state.city = city
      try {
        localStorage.city = city
      } catch (e) {}
    }
  }
})
