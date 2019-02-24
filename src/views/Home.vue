<template>
  <v-container>
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>This is the home page.</h1>
    <List></List>
  </v-container>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import List from '../components/List.vue';
  @Component({
    components: {
      List
    },
  })
  export default class Home extends Vue {}
</script>
