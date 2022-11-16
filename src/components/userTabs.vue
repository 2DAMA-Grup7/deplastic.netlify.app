<template>
  <v-card>
    <v-tabs v-model="tab" bg-color="green">
      <v-tab value="one">Get User</v-tab>
      <v-tab value="two">Add User</v-tab>
      <v-tab value="three">Edit User</v-tab>
      <v-tab value="four">Remove User</v-tab>
    </v-tabs>

    <v-card-text>
      <v-window v-model="tab">
        <v-window-item value="one">
          <GetUser />
        </v-window-item>

        <v-window-item value="two">
          <CreateUsers />
        </v-window-item>

        <v-window-item value="three"> edit </v-window-item>

        <v-window-item value="four">
          <RemoveUser />
        </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
</template>
<script>
import CreateUsers from "./CreateUsers.vue";
import GetUser from "./getUser.vue";
import RemoveUser from "./removeUser.vue";

export default {
  data: () => ({
    tab: null,
  }),
  components: { CreateUsers, RemoveUser, GetUser },
};
</script>
