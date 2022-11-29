<template>
  <v-card>
    <v-toolbar class="bg-deep-purple" flat>
      <v-toolbar-title>Log</v-toolbar-title>
      <v-card ></v-card>
      <v-button @click="getLog"></v-button>
      <v-table>
        <thead>
          <tr >
            <td class="text-left"  ></td>
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
      
    };
  },
  
 
};


</script>

 