import Vue from 'vue';
import Vuex from 'vuex';

import user from './modules/user';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    appTitle: 'GNAG',
    user: null,
    error: null,
    loading: false,
  },
  getters: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {
    user,
  },
});
