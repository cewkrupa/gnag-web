<template>
   <v-container>
   <a :href="link">
      <img :src="source" contain height = "200"></img>
      <span>{{text}}</span>
   </a>
   </v-container>
</template>

<script>


   export default {
      props: ['source', 'text', 'link']
   }

</script>

<style>

</style>
