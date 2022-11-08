<template>
  <v-card class="mx-auto" width="400" variant="outlined">
    <v-card-text>
      <v-card-text>
        <v-form>
          <v-text-field
            v-model="email"
            prepend-icon="mdi-account"
            label="Login"
            type="text"
          ></v-text-field>
          <v-text-field
            v-model="password"
            prepend-icon="mdi-lock"
            label="Password"
            type="password"
          ></v-text-field>
        </v-form>
      </v-card-text>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn :loading="loading[4]" :disabled="loading[4]" @click="load(4)"
        >Login</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      loading: [],
    };
  },
  methods: {
    load(i) {
      this.loading[i] = true;
      setTimeout(() => (this.loading[i] = false), 3000);
      fetch("/.netlify/functions/api/login", {
        method: "POST",
        body: JSON.stringify({ email: this.email, password: this.password }),
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          document.cookie = `login_token=${data.token}; SameSite=Strict`;
          document.cookie = `email=${this.email}; SameSite=Strict`;
          window.location.href = "/admin";
        });
    },
  },
};
</script>
