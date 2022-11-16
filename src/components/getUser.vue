<template>
  <v-table density="compact">
    <thead>
      <tr>
        <th class="text-left">User ID</th>
        <th class="text-left">Roles</th>
        <th class="text-left">Email</th>
        <th class="text-left">Username</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in listUsers" :key="user.username">
        <td class="text-left">{{ user.USER_ID }}</td>
        <td class="text-left">{{ user.username }}</td>
        <td class="text-left">{{ user.roles }}</td>
        <td class="text-left">{{ user.email }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<script>
export default {
  data() {
    return {
      listUsers: [],
    };
  },
  methods: {
    async getData() {
      const res = await fetch("/.netlify/functions/api/user");
      const finalRes = await res.json();
      this.listUsers = finalRes;
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
