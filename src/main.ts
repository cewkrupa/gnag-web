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
        this.$store.dispatch('toggleIsAuthorized')
        console.log("onAuthState: " + user.email)
      }
      else {
        console.log('logged out ')
      }
    });
  },
  render: (h) => h(App),
}).$mount('#app');
