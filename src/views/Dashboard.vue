<template>
   <div>
      <DashButton :source = "require('../assets/settings.svg')" text = "Settings" link = "Settings" />

   </div>
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
    }
</script>

<style scoped>

</style>
