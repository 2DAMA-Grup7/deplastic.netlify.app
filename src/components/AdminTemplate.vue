<template >
    <v-layout>
        <v-app-bar color="green">
          <img src="../assets/logo.svg" alt="logo" width="60" height="60" />
          <v-toolbar-title-margin >Deplastic</v-toolbar-title-margin>
          <v-spacer></v-spacer>
          <v-avatar color="white" location="right" >A</v-avatar>
        </v-app-bar>
    
        <v-navigation-drawer floating permanent color="green" >
          <v-list
           density="compact"
           nav
           color="green"
         >
           <v-list-item prepend-icon="mdi-map-marker" title="Markers" value="Markers"></v-list-item>
           <v-list-item prepend-icon="mdi-account-multiple" title="Users" value="Users"></v-list-item>
         </v-list>
        </v-navigation-drawer>
    </v-layout>
    
      
    </template>
    <script>
    export default {};
    </script>