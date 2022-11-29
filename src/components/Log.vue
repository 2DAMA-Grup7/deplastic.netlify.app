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

    <tr v-for="item in data">
      <td class="text-left">{{ data.item }}</td>
    </tr>
  </v-card>
</template>

<script>
import Login from "@/views/Login.vue";

export default {
  data() {
    return {
      snackbar: false,
      errorText: "Something went wrong!",

      dialog: false,
    };
  },
  methods: {
    async readFile() {
      fs.readFile(
        "../../netlify/functions/routes/Log.txt",
        "utf8",
        (err, data) => {
          if (err) {
            return err;
          } else {
            return data;
          }
        }
      );
    },
    async getData() {
      const res = await fetch("");
      const finalRes = await res.json();
      this.listMarkers = finalRes;
    },
  },
  components: { Login },
};
</script>
