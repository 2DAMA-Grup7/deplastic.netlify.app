<template>
  <v-card>
    <v-toolbar class="bg-deep-purple" flat>
      <v-toolbar-title>Log</v-toolbar-title>
      <v-button @click="getLog">LOG</v-button>
     
    </v-toolbar>
  </v-card>
</template>

<script>
import getLog from '@/functions/getLog';


export default {
  data() {
    return {
      snackbar: false,
      errorText: "Something went wrong!",
      dialog: false,
      
    };
  },
  
 
};


</script>

 