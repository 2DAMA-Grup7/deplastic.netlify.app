<template>
  <v-card>
    <v-tabs v-model="tab" bg-color="green">
      <v-tab value="one">Get Marker</v-tab>
      <v-tab value="two">Add Marker</v-tab>
      <v-tab value="three">Edit Marker</v-tab>
      <v-tab value="four">Remove Marker</v-tab>
    </v-tabs>

    <v-card-text>
      <v-window v-model="tab">
        <v-window-item value="one">
          <GetMarker />
        </v-window-item>

        <v-window-item value="two">
          <CreateMarker />
        </v-window-item>

        <v-window-item value="three">
          <EditMarker />
        </v-window-item>

        <v-window-item value="four">
          <RemoveMarker />
        </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
</template>
<script>
import CreateMarker from "./CreateMarker.vue";
import GetMarker from "./getMarker.vue";
import RemoveMarker from "./removeMarker.vue";
import EditMarker from "./editMarker.vue";

export default {
  data: () => ({
    tab: null,
  }),
  components: { CreateMarker, RemoveMarker, GetMarker, EditMarker },
};
</script>
