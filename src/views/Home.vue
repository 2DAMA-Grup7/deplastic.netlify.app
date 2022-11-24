<template>
  <v-container fill-height>
    <v-row class="text-center">
      <v-col cols="12">
        <img src="../assets/logo.svg" alt="logo" width="300" height="300" />
      </v-col>
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Welcome to Deplastic</h1>
        <p class="subheading font-weight-regular">
          The objective is to design, implement and present a solution
          <br />to the challenge proposed by the Centrino project.
        </p>
        <v-btn color="green" to="/dashboard" prepend-icon="mdi-arrow-right-top">
          Dashboard
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
