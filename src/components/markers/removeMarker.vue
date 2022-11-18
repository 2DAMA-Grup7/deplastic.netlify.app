<template>
  <v-form ref="delete form" lazy-validation>
    <v-text-field v-model="name" label="Delete Marker (name)" required></v-text-field>
    <v-btn color="success" class="mr-4" @click="deleteMarker"> Delete </v-btn>
    <v-btn color="error" class="mr-4" @click="reset"> Reset </v-btn>
  </v-form>
  <v-snackbar :timeout="3000" v-model="snackbar">
    {{ text }}
    <template v-slot:actions>
      <v-btn variant="text" @click="snackbar = false"> Close </v-btn>
    </template>
  </v-snackbar>
</template>
<script>
export default {
  data: () => ({
    snackbar: false,
    text: "",
    name: "",
  }),
  methods: {
    deleteMarker() {
      fetch("/.netlify/functions/api/markers", {
        method: "DELETE",
        body: JSON.stringify({ name: this.name }),
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.text = data;
          this.snackbar = true;
        });
    },
    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>
