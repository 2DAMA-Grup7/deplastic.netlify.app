<template>
  <v-card>
    <v-toolbar class="bg-deep-purple" flat>
      <v-toolbar-title>Log</v-toolbar-title>
      <v-card id:logCard></v-card>
      <v-table>
        <thead>
          <tr >
            <td class="text-left"  >{{getLog}}</td>
          </tr>
        </thead>
      </v-table>
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
      log:this.allText
    };
  },
  
 
};


</script>

 