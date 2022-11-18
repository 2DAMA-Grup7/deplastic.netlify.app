<template>
  <v-table density="compact">
    <thead>
      <tr>
        <th class="text-left">Marker ID</th>
        <th class="text-left">Name</th>
        <th class="text-left">Latitude</th>
        <th class="text-left">Longitude</th>
        <th class="text-left">Description</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="marker in listMarkers" :key="marker.id_marker">
        <td class="text-left">{{ marker.id_marker }}</td>
        <td class="text-left">{{ marker.name }}</td>
        <td class="text-left">{{ marker.latitude }}</td>
        <td class="text-left">{{ marker.longitude }}</td>
        <td class="text-left">{{ marker.Description }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<script>
export default {
  data() {
    return {
      listMarkers: [],
    };
  },
  methods: {
    async getData() {
      const res = await fetch("/.netlify/functions/api/markers");
      const finalRes = await res.json();
      this.listMarkers = finalRes;
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
