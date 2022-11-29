<template>
  <v-card>
    <v-toolbar class="bg-deep-purple" flat>
      <v-toolbar-title>Log</v-toolbar-title>
      <v-table>
        <thead>
          <tr v-for="item in data">
            <td class="text-left">{{ data.item }}</td>
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
      data: String,
      dialog: false,
    };
  },
  methods: {
    async readFile() {
      var fr = new FileReader();
      fr.onload = function () {
        document.getElementById("Log").textContent = fr.result;
      };
      this.data = fr.readAsText(this.files[0]);
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
