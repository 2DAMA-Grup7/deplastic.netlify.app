<template>
  <v-card>
    <v-toolbar class="bg-deep-purple" flat>
      <v-toolbar-title>Log</v-toolbar-title>
      <v-card></v-card>
      <v-table>
        <thead>
          <tr v-for="item in logtxt">
            <td class="text-left">{{toString( logtxt.item) }}</td>
          </tr>
        </thead>
      </v-table>
    </v-toolbar>
  </v-card>
</template>

<script>
import logtxt from "../../netlify/functions/routes/Log.txt";
export default {
  data() {
    return {
      snackbar: false,
      errorText: "Something went wrong!",
      dialog: false,
    };
  },
  
  mounted() {
    this.getData();
  },
};
document.getElementById("Log")
.addEventListener('change', function() {

var fr=new FileReader();
fr.onload=function(){
document.getElementById('output')
.textContent=fr.result;
}

.readAsText(this.files[0]);
})
</script>

 