<template>
    <div v-for="user in listUsers">
      {{user.username}},
      {{user.roles}}
    </div>
  </template>


<script>
  export default {
    data() {
      return {
        listUsers: []
      }
    },
    methods: {
      async getData() {
        const res = await fetch("/.netlify/functions/api/user");
        const finalRes = await res.json();
        this.listUsers = finalRes;
      }
    },
    mounted() {
      this.getData()
    }
  }
</script>