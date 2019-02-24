import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { store }from './store/store';
import './registerServiceWorker';
import Vuetify from 'vuetify';
import * as firebase from 'firebase';
import { config } from './firebaseConfig';

Vue.config.productionTip = false;
Vue.use(Vuetify);
firebase.initializeApp(config);
Vue.prototype.$firebase = firebase;

new Vue({
  router,
  store,
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        this.$store.dispatch('setUser')
        this.$store.commit('setIsAuthorized', true)
        console.log("onAuthState: " + user.email)
        console.log("isAuthorized: " + this.$store.state.isAuthorized)
      }
      else {
        this.$store.commit('setIsAuthorized', false)
        console.log('logged out ')
        console.log("isAuthorized: " + this.$store.state.isAuthorized)

      }
    });
  },
  render: (h) => h(App),
}).$mount('#app');
