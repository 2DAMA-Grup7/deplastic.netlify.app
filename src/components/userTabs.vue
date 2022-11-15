<template >
     
     
  <v-card >
    <v-tabs
      v-model="tab"
      bg-color="green"
      
    >
      <v-tab value="one" >Add User</v-tab>
      <v-tab value="two">Edit User</v-tab>
      <v-tab value="three">Remove User</v-tab>
      <v-tab value="four">Get User</v-tab>
    </v-tabs>

    <v-card-text>
      <v-window v-model="tab">
        <v-window-item value="one">
        <CreateUsers/>

        </v-window-item>

        <v-window-item value="two">
          Two
        </v-window-item>

        <v-window-item value="three">
          Three
        </v-window-item>

        <v-window-item value="four">
          Three
        </v-window-item>

      </v-window>
    </v-card-text>
    
  </v-card>

    </template>
<script>
import CreateUsers from './CreateUsers.vue';

export default {
    data: () => ({
        tab: null,
    }),
    components: { CreateUsers }
}
</script>