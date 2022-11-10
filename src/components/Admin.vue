
<template>
  <v-layout>
    <v-app-bar color="green">
      <img src="../assets/logo.svg" alt="logo" width="60" height="60" />
      <v-toolbar-title-margin >Deplastic</v-toolbar-title-margin>
      <v-spacer></v-spacer>
      <v-avatar color="light-blue lighten-4" location="right" >A</v-avatar>
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
    <v-main>
      <v-card
    max-width="400"
    class="mx-auto"
  >
      <v-row  >

        <v-col cols="50" >
          <v-card 
            color="green"
            theme="dark"
          >
            <v-card-actions >
              <button >
                <v-icon>mdi-map-marker</v-icon> <v-card-title  class="text-h5"> x Markers</v-card-title> 
            </button>
            </v-card-actions>
          </v-card>
        </v-col>  
        <v-col cols="50" >
          <v-card 
            color="green"
            theme="dark"
          >
            <v-card-actions >
              <button >
                <v-icon>mdi-account-multiple</v-icon> <v-card-title  class="text-h5"> x Users</v-card-title> 
            </button>
            </v-card-actions>
          </v-card>
        </v-col>
        
      </v-row>
   
  </v-card>
    </v-main>
  </v-layout>
</template>

<script>
export default {};
</script>

