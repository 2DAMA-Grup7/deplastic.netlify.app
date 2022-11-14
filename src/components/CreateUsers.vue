<template >
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

   
    <v-select
  label="Role"
  :items="['User', 'Artist']"
  required
></v-select>

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="createUser"
    >
      Create
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Reset Form
    </v-btn>

   
  </v-form>
 

    </template>
   <script>
   export default {
     data: () => ({
       valid: true,
       name: '',
       nameRules: [
         v => !!v || 'Name is required',
         v => (v && v.length <= 20) || 'Name must be less than 20 characters',
       ],
       email: '',
       emailRules: [
         v => !!v || 'E-mail is required',
         v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
       ],
       select: null,
       
       checkbox: false,
     }),
 
     methods: {
       createuser () {
         this.$refs.form. fetch("/.netlify/functions/api/users", {
        method: "POST",
        body: JSON.stringify({ email: this.email, password: this.password, role: this.role}),
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          if (!data.auth) {
            this.snackbar = true;
          }
          if (data.token) {
            document.cookie = `login_token=${data.token}; SameSite=Strict`;
            document.cookie = `email=${this.email}; SameSite=Strict`;
            window.location.href = "/admin";
          }
        });
       },
       reset () {
         this.$refs.form.reset()
       },
       
       
     },
   }
 </script>