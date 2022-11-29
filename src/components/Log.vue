<template>
  <v-card>
    <v-toolbar class="bg-deep-purple" flat>
      <v-toolbar-title>Log</v-toolbar-title>
      <v-card>{{allText}}</v-card>
      <v-table>
        <thead>
          <tr v-for="item in allText">
            <td class="text-left">{{ allText.item }}</td>
          </tr>
        </thead>
      </v-table>
    </v-toolbar>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      snackbar: false,
      errorText: "Something went wrong!",
      data: [],
      dialog: false,
      file:"../../netlify/funtions/routes/log.",
    };
  },
  methods:/* {
    async readFile() {
      var fr = new FileReader();
      fr.onload = function () {
        document.getElementById("Log").textContent = fr.result;
      };
      this.data = fr.readAsText(this.files[0]);
    },*/ 
    {
    readTextFile(file){
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                alert(allText);
            }
        }
    }
    rawFile.send(null);
}},
  
  mounted() {
    this.getData();
  },
};
</script>

function 