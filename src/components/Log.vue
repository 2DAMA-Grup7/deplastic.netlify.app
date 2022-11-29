<template>
  <v-card>
    <v-toolbar class="bg-deep-purple" flat>
      <v-toolbar-title>Log</v-toolbar-title>
      <v-card></v-card>
      <v-table>
        <thead>
          <tr >
            <td class="text-left" id:fileDisplayArea></td>
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
      dialog: false,
    };
  },
  
 
};
var fileDisplayArea = document.getElementById('fileDisplayArea');
function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                fileDisplayArea.innerText = allText 
            }
        }
    }
    rawFile.send(null);
}
readTextFile("../../netlify/functions/routes/log.txt");

</script>

 