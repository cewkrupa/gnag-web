<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <router-link to="/" tag="span" style="cursor: pointer">
          GNAG
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!--<router-link class="menu-items" v-for="item in menuItems" :key="item.title" :to="item.path">-->
        <!--{{item.title}}-->
      <!--</router-link>-->
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      menuItems: [
        // { title: 'Home', path: '/',},
        // { title: 'Sign Up', path: '/signup',},
        // { title: 'Sign In', path: '/signin',}
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
