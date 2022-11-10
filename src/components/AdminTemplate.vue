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
         <router-link class="button" to="admin/markers">markers</router-link>
          
         </v-list>
        </v-navigation-drawer>
    </v-layout>
    
      
    </template>
    <script>
    function redirectMarkers(){
      router.push('/admin/markers')
    }
    export default {};
    </script>