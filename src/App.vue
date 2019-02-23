<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <router-link to="/" tag="span" style="cursor: pointer">
          GNAG
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
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

export default {
  name: 'App',
  components: {
    Home
  },
  data () {
    return {
      menuItems: [
        { title: 'Home', path: '/',},
        { title: 'Sign In', path: '/sign-in',}
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
