import Vue from 'vue';
import Router from 'vue-router';

import Auth from 'views/Auth.vue'
import Home from './views/Home.vue'
import Dashboard from './views/Dashboard.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/auth',
      name: 'auth',
      component: Auth,
      meta: {
        guestOnly: true
      }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      meta:{
        requiresAuth: true
      }
    },
    // {
    //   path: '*',
    //   redirect: '/home'
    // }
  ],
});
