<template>
  <v-card>
    <v-toolbar class="bg-green-darken-1" flat>
      <v-toolbar-title>User</v-toolbar-title>
      <v-btn variant="outlined" @click="dialog = true"> New Item </v-btn>
    </v-toolbar>
    <v-table>
      <thead>
        <tr>
          <th class="text-left">ID</th>
          <th class="text-left">USERNAME</th>
          <th class="text-left">EMAIL</th>
          <th class="text-left">ROLES</th>
          <th class="text-left">PASSWORD</th>
          <th class="text-left">BALANCE</th>
          <th class="text-left">ACTIONS</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in listUsers" :key="user.USER_ID">
          <td class="text-left">{{ user.USER_ID }}</td>
          <td class="text-left">{{ user.username }}</td>
          <td class="text-left">{{ user.email }}</td>
          <td class="text-left">{{ user.roles }}</td>
          <td class="text-left">{{ user.password }}</td>
          <td class="text-left">{{ user.PointTotal }}</td>

          <td class="text-left">
            <v-dialog v-model="dialog" width="600" persistent>
              <template v-slot:activator="{ props }">
                <v-btn
                  class="bg-green-darken-1"
                  icon="mdi-pencil"
                  size="small"
                  v-bind="props"
                  @click="inputUser = user"
                />
              </template>
              <v-card>
                <v-form ref="form">
                  <v-text-field
                    v-model="inputUser.username"
                    label="Username"
                  ></v-text-field>
                  <v-text-field
                    v-model="inputUser.email"
                    label="Email"
                  ></v-text-field>
                  <v-select
                    v-model="inputUser.roles"
                    label="Roles"
                    :items="['client', 'artist']"
                  ></v-select>
                  <v-text-field
                    v-model="inputUser.password"
                    label="Password"
                  ></v-text-field>
                  <v-text-field
                    v-model="inputUser.PointTotal"
                    label="Balance"
                  ></v-text-field>
                  <v-btn color="success" class="mr-4" @click="editUser">
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
              @click="deleteUser(user.USER_ID)"
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
      listUsers: [],
      inputUser: {},
      dialog: false,
    };
  },
  methods: {
    async getData() {
      const res = await fetch("/.netlify/functions/api/user");
      const finalRes = await res.json();
      this.listUsers = finalRes;
    },
    deleteUser(id) {
      fetch("/.netlify/functions/api/user", {
        method: "DELETE",
        body: JSON.stringify({ USER_ID: id }),
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          window.location.reload();
        });
    },
    editUser() {
      if (this.inputUser.USER_ID) {
        fetch("/.netlify/functions/api/user", {
          method: "PUT",
          body: JSON.stringify({
            USER_ID: this.inputUser.USER_ID,
            username: this.inputUser.username,
            password: this.inputUser.password,
            email: this.inputUser.email,
            roles: this.inputUser.PointTotal,
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
        this.createUser();
      }
    },
    createUser() {
      fetch("/.netlify/functions/api/register", {
        method: "POST",
        body: JSON.stringify({
          username: this.inputUser.username,
          password: this.inputUser.password,
          email: this.inputUser.email,
          roles: this.inputUser.roles,
          PointTotal: this.inputUser.roles,
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
      // reload inputUser
      this.inputUser = {};
      this.dialog = false;
      window.location.reload();
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
