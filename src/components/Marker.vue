<template>
  <v-card>
    <v-toolbar class="bg-green-darken-1" flat>
      <v-toolbar-title>Marker</v-toolbar-title>
      <v-btn variant="outlined" @click="dialog = true"> New Item </v-btn>
    </v-toolbar>
    <v-table>
      <thead>
        <tr>
          <th class="text-left">ID</th>
          <th class="text-left">NAME</th>
          <th class="text-left">LATITUDE</th>
          <th class="text-left">LONGITUDE</th>
          <th class="text-left">DESCRIPTION</th>
          <th class="text-left">ACTIONS</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="marker in listMarkers" :key="marker.id_marker">
          <td class="text-left">{{ marker.id_marker }}</td>
          <td class="text-left">{{ marker.name }}</td>
          <td class="text-left">{{ marker.latitude }}</td>
          <td class="text-left">{{ marker.longitude }}</td>
          <td class="text-left">{{ marker.Description }}</td>
          <td class="text-left">
            <v-dialog v-model="dialog" width="600" persistent>
              <template v-slot:activator="{ props }">
                <v-btn
                  class="bg-green-darken-1"
                  icon="mdi-pencil"
                  size="small"
                  v-bind="props"
                  @click="inputMarker = marker"
                />
              </template>
              <v-card>
                <v-form ref="form">
                  <v-text-field
                    v-model="inputMarker.name"
                    label="Name"
                  ></v-text-field>
                  <v-text-field
                    v-model="inputMarker.latitude"
                    label="Latitude"
                  ></v-text-field>
                  <v-text-field
                    v-model="inputMarker.longitude"
                    label="Longitude"
                  ></v-text-field>
                  <v-text-field
                    v-model="inputMarker.Description"
                    label="Description"
                  ></v-text-field>
                  <v-btn color="success" class="mr-4" @click="editMarker">
                    Submit
                  </v-btn>
                  <v-btn
                    color="blue-darken-1"
                    variant="text"
                    @click="closeDialog"
                  >
                    Close
                  </v-btn>
                </v-form>
              </v-card>
            </v-dialog>
            <v-btn
              class="bg-green-darken-1"
              icon="mdi-trash-can-outline"
              size="small"
              @click="deleteUser(marker.id_marker)"
            />
            <v-snackbar :timeout="3000" v-model="snackbar">
              <label color="red">ERROR </label>{{ errorText }}
              <template v-slot:actions>
                <v-btn variant="text" @click="snackbar = false"> Close </v-btn>
              </template>
            </v-snackbar>
          </td>
        </tr>
      </tbody>
    </v-table>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      snackbar: false,
      errorText: "Something went wrong!",
      listMarkers: [],
      inputMarker: {},
      dialog: false,
    };
  },
  methods: {
    async getData() {
      const res = await fetch("/.netlify/functions/api/markers");
      const finalRes = await res.json();
      this.listMarkers = finalRes;
    },
    deleteUser(id) {
      fetch("/.netlify/functions/api/markers", {
        method: "DELETE",
        body: JSON.stringify({ id_marker: id }),
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          let logsItems = localStorage.getItem("logs") || "{}";
          logsItems = JSON.parse(logsItems);
          logsItems.push({ logs: "Removed Marker" });
          localStorage.setItem("logs", JSON.stringify(logsItems));
          window.location.reload();
        });
    },
    editMarker() {
      if (this.inputMarker.id_marker) {
        fetch("/.netlify/functions/api/markers", {
          method: "PUT",
          body: JSON.stringify({
            id_marker: this.inputMarker.id_marker,
            name: this.inputMarker.name,
            latitude: this.inputMarker.latitude,
            longitude: this.inputMarker.longitude,
            description: this.inputMarker.Description,
          }),
          headers: { "Content-Type": "application/json" },
        })
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log(data);
            if (data.success) {
              this.closeDialog();
            } else {
              this.snackbar = true;
            }
          });
      } else {
        this.createMarker();
      }
    },
    createMarker() {
      fetch("/.netlify/functions/api/markers", {
        method: "POST",
        body: JSON.stringify({
          name: this.inputMarker.name,
          latitude: this.inputMarker.latitude,
          longitude: this.inputMarker.longitude,
          description: this.inputMarker.Description,
        }),
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          if (data.success) {
            this.closeDialog();
          } else {
            this.snackbar = true;
          }
        });
    },
    closeDialog() {
      this.inputMarker = {};
      this.dialog = false;
      window.location.reload();
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
