<template>
  <v-card>
    <v-toolbar class="bg-deep-purple" flat>
      <v-toolbar-title>Log</v-toolbar-title>
      <thead>
        <th class="text-left">Logs</th>
      </thead>
      <tbody>
      <tr v-for="item in logs" :key="item">
          </tr>
        </tbody>
      <v-card>
    {{this.logs}}
      </v-card>
      <v-card>
    {{logs}}
      </v-card>
  
    </v-toolbar>
  </v-card>
</template>

<script>
import logtxt from "raw-loader!../../netlify/functions/routes/Log.txt"


export default{

  data(){
    //return{logs:logtxt.split(/[\n]+/)}
    return{logs:["a","b"]}
  }
}

</script>

