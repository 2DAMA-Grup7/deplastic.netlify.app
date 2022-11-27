<template>
  <div class="main">
    <v-card width="400" variant="outlined">
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
    <v-snackbar :timeout="3000" v-model="snackbar">
      <label color="red">ERROR:</label>{{ text }}
      <template v-slot:actions>
        <v-btn variant="text" @click="snackbar = false"> Close </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import router from "../router";
export default {
  data() {
    return {
      email: "",
      password: "",
      loading: [],
      snackbar: false,
      text: `Incorrect password or e-mail`,
    };
  },
  methods: {
    load(i) {
      this.loading[i] = true;
      setTimeout(() => (this.loading[i] = false), 3000);
      fetch("/.netlify/functions/api/login", {
        method: "POST",
        body: JSON.stringify({
          email: this.email,
          password: this.password,
        }),
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          if (!data.auth) {
            this.snackbar = true;
          } else {
            document.cookie = `login_token=${data.token}; SameSite=Strict`;
            document.cookie = `email=${this.email}; SameSite=Strict`;
            document.cookie = `username=${data.username}; SameSite=Strict`;
            router.push({ name: "dashboard" });
          }
        });
    },
  },
};
</script>
<style scoped>
.main {
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
</style>
