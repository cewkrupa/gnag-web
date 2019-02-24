import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase';
Vue.use(Vuex);

export const store = new Vuex.Store({
  state:{
    user: <any> null,
    isAuthorized: false,
    list: [
      {
          id: 1,
          text: "This is text",
          checked: true
      },
      {
          id: 2,
          text: "this is more text",
          checked: false
      },
      {
          id: 3,
          text: "foo bar",
          checked: false
      }
    ],
  },
  mutations: {
    setUser: state => {
      state.user = firebase.auth().currentUser;
    },
    setIsAuthorized: (state, p) => {
      state.isAuthorized = p
    },
    deleteItemFromListById: (state, id) => {
        let itemIndex = state.list.findIndex(item => item.id === id)
        state.list.splice(itemIndex,1)
        console.log('removed item at index ' + itemIndex)
    }
  },
  getters: {
    getUser: state => {
        return state.user
    },
    getIsAuthorized: state => {
        return state.isAuthorized
    },
    getItemFromListById: (state) => (id: Number) => {
        return state.list.find(item => item.id === id)
    }
  },
  actions: {
    setUser: context => {
      context.commit('setUser');
    },
  }
});
