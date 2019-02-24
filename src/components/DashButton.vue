<template>
<v-container>
   <a :href="link">
      <v-flex>
         <v-card class="dash-card">
            <v-img :src="source" contain height = "200"></v-img>
            <v-layout class="justify-center">
               <v-card-title primary-title>
                  <div>
                     <h3 class="headline mb-0">{{text}}</h3>
                  </div>
               </v-card-title>
            </v-layout>
         </v-card>
      </v-flex>
   </a>
</v-container>
</template>

<script>


   export default {
      name: 'DashButton',
      props: ['source', 'text', 'link']
   }

</script>

<style>
   .dash-card {
      padding-top: 2em;
   }

</style>
