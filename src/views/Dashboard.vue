<template>
   <v-container fluid grid-list-md>
       <v-layout row wrap justify-center>
           <v-flex xs3 v-for="item in dashItems">
               <DashButton
                       class="dash-button"
                       v-bind:source="item.imgSrc"
                       v-bind:text="item.text"
                       v-bind:link="item.path"
               />
           </v-flex>
       </v-layout>
      </v-container>
</template>

<script>
   import DashButton from '@/components/DashButton.vue'
   import { Component, Vue } from 'vue-property-decorator';

   @Component({
     components: {
        DashButton,
     },
   })

    export default class Dashboard extends Vue{
      logOut() {
         this.$firebase.auth().signOut();
      }
      data() {
          return {
              dashItems: [
                  { text: "Settings", imgSrc: require('../assets/settings.svg'), path: "/settings"},
                  { text: "Groups", imgSrc: require('../assets/groups.svg'), path: "/settings"},
                  { text: "Messages", imgSrc: require('../assets/messages.svg'), path: "/settings"},
                  { text: "Sad Things", imgSrc: require('../assets/sad_face.svg'), path: "/settings"},
                  { text: "Marriage Certificates", imgSrc: require('../assets/marriage.svg'), path: "/settings"},
                  { text: "Personal Notes", imgSrc: require('../assets/notes.svg'), path: "/settings"},
              ]
          }
      }
    }
</script>

<style scoped>
.dash-button {
}
</style>
