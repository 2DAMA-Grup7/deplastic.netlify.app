<template>
  <v-card title:Log align:center> </v-card>
  <tr v-for="item in data">
    <td class="text-left">{{ data.item }}</td>
  </tr>
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
