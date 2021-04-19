/* eslint-disable */
import { createStore } from 'vuex'
window.axios = require('axios');
const store = createStore({
  state(data) {
    return{
      loggedIn : false,
      authdata: {
      token: '',
      refreshtoken: '',
      tokenExp: "",
      userName: ""
      },
      roomname: ''
    }
    console.log("state");
    data = []

    console.log(data);

  },
  mutations: {
    APPLICATION_NUMBER(state, formData) {
      state.data.push({
        data: formData,
        completed: false
      })
    }
  },
  actions: {
    applicationNumber({ commit }, formData) {
      commit('APPLICATION_NUMBER', formData)
    }
  },
  getters: {
  },
})
export default store
