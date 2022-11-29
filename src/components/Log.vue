<template>
  <v-card>
    <v-toolbar class="bg-deep-purple" flat>
      <v-toolbar-title>Log</v-toolbar-title>
      <v-card></v-card>
      <v-table>
        <thead>
          <tr v-for="item in allText">
            <td class="text-left">{{toString( allText.item) }}</td>
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
  
  mounted() {
    this.getData();
  },
};
</script>

 