<template>
   <v-container>
   <a :href="link">

      <v-flex>
         <v-card>
            <v-img class = "" :src="source" contain height = "200"></v-img>
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
      props: ['source', 'text', 'link']
   }

</script>

<style>

</style>
