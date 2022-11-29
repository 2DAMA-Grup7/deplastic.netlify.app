<template>
  <v-card>
    <v-toolbar class="bg-deep-purple" flat>
      <v-toolbar-title>Log</v-toolbar-title>
      <v-button id:logButton >LOG</v-button>
     
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
document.getElementById('logButton').addEventListener("click",getLog)

function getLog(){  
 fetch("../../netlify/functions/routes/Log.txt")
 .then(function(response){
    return response.text()
 }).then(function(data){
    console.log(data)
 })
}


</script>

 