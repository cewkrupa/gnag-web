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
    toggleIsAuthorized: state => {
      state.isAuthorized ? state.isAuthorized = false : state.isAuthorized = true
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
    },
    toggleIsAuthorized: context => {
      context.commit('toggleIsAuthorized')
    }
  }
});
