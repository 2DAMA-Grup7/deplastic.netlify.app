
<template>
  <v-layout>
  
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

