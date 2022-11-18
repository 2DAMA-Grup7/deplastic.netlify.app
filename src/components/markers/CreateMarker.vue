<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field v-model="name" label="Name" required></v-text-field>
    <v-text-field v-model="latitude" label="Latitude" required></v-text-field>
    <v-text-field v-model="longitude" label="Longitude" required></v-text-field>
    <v-text-field v-model="description" label="Description"></v-text-field>
    <v-btn :disabled="!valid" color="success" class="mr-4" @click="createMarker"> Create </v-btn>
    <v-btn color="error" class="mr-4" @click="reset"> Reset Form </v-btn>
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
    valid: true,
    name: "",
    latitude: "",
    longitude: "",
    description: "",
    select: null,
    checkbox: false,
  }),

  methods: {
    createMarker() {
      fetch("/.netlify/functions/api/markers", {
        method: "POST",
        body: JSON.stringify({
          name: this.name,
          latitude: this.latitude,
          longitude: this.longitude,
          description: this.description,
        }),
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
