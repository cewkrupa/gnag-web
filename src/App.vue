<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <router-link to="/" tag="span" style="cursor: pointer">
          GNAG
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <p v-if="isAuthorized">Welcome, {{userEmail}} <button @click="logOut">Log out</button></p>
      <router-link class="menu-items" v-for="item in menuItems" :key="item.title" :to="item.path">
        {{item.title}}
      </router-link>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Home from './views/Home'
import {mapActions} from 'vuex'
import {mapGetters} from 'vuex'


export default {
  name: 'App',
  components: {
    Home
  },
  methods: {
    ...mapActions(['setUser', "toggleIsAuthorized"]),
    logOut() {
      this.$firebase.auth().signOut();
    }
  },
  created() {
    this.$store.dispatch('setUser')
  },
  computed: {
    ...mapGetters(["getUser", "getIsAuthorized"]),
    isAuthorized() {
      return this.$store.state.isAuthorized
    },
    userEmail() {
      return this.$store.state.user.email
    }
  },
  data () {
    return {
      menuItems: [
        { title: 'Home', path: '/',},
        { title: 'Sign In', path: '/sign-in',},
        { title: 'Dashboard', path: '/dashboard'}
      ]
    }
  }
}
</script>

<style>
  .menu-items {
    padding: 1em;
  }
</style>
