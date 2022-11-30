<template>
  <v-layout>
    <v-navigation-drawer class="bg-deep-purple" theme="dark">
      <v-list>
        <v-list-item
          prepend-icon="mdi-account"
          :title="getCookie('username')"
          :subtitle="getCookie('email')"
        ></v-list-item>
      </v-list>
      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item
          prepend-icon="mdi-view-dashboard"
          title="Dashboard"
          to="/dashboard"
        ></v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn block to="/" @click="clearCookie()">Logout</v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-main>
        <v-sheet class="d-flex" color="transparent" width="500dp">
          <v-sheet class="ma-2 pa-2" color="transparent">
            <Marker />
          </v-sheet>
          <v-sheet class="ma-2 pa-2" color="transparent">
            <User />
          </v-sheet>
          <v-sheet class="ma-2 pa-2" color="transparent">
            <Product />
          </v-sheet>
        </v-sheet>
    </v-main>
  </v-layout>
</template>
<script setup>
import getCookie from "../functions/getcookie.js";
import clearCookie from "../functions/clearcookie.js";
import Marker from "../components/Marker.vue";
import User from "../components/User.vue";
import Product from "@/components/Product.vue";


</script>
