import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
import './registerServiceWorker';
import Vuetify from 'vuetify';
import * as firebase from 'firebase';
import { config } from './firebaseConfig';

Vue.config.productionTip = false;
Vue.use(Vuetify);

new Vue({
  router,
  store,
  created() {
    firebase.initializeApp(config);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$router.push('/dashboard');
      } else {
        this.$router.push('/sign-in');
      }
    });
  },
  render: (h) => h(App),
}).$mount('#app');
