import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase';
Vue.use(Vuex);

export const store = new Vuex.Store({
  state:{
    user: <any> null,
    isAuthorized: false
  },
  mutations: {
    setUser: state => {
      state.user = firebase.auth().currentUser;
    },
    setIsAuthorized: (state, p) => {
      state.isAuthorized = p
    }
  },
  getters: {
    getUser: state => {
      return state.user
    },
    getIsAuthorized: state => {
      return state.isAuthorized
    }
  },
  actions: {
    setUser: context => {
      context.commit('setUser');
    }
  }
});
