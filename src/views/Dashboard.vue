<template>
   <v-container fluid>
    <v-layout column>
      <v-flex>
               <v-layout row >

                  <v-flex xs:3>
               <dashbutton :source = "require('../assets/settings.svg')" text = "Settings" link = "Settings" />
                  </v-flex>
                  <v-flex xs:3>
               <dashbutton :source = "require('../assets/groups.svg')" text = "Groups" link = "Settings" />
                  </v-flex>
                  <v-flex xs:3>
               <dashbutton :source = "require('../assets/messages.svg')" text = "Messages" link = "Settings" />
                  </v-flex>


                  <v-flex xs:3>
               <dashbutton :source = "require('../assets/noose.svg')" text = "Suicide Letters" link = "Settings" />
                  </v-flex>
               <v-flex xs:3>
               <dashbutton :source = "require('../assets/marriage.svg')" text = "Marriage Certificates" link = "Settings" />
                  </v-flex>
               <v-flex xs:3>
               <dashbutton :source = "require('../assets/notes.svg')" text = "Personal Notes" link = "Settings" />
                  </v-flex>
               </v-layout>
            </v-flex>
         </v-layout>
      </v-container>

   </div>
</template>

<script>
   import dashbutton from '@/components/DashButton.vue'
   import { Component, Vue } from 'vue-property-decorator';

   @Component({
     components: {
        dashbutton,
     },
   })

    export default class Dashboard extends Vue{
      logOut() {
         this.$firebase.auth().signOut();
      }
    }
</script>

<style scoped>

</style>
