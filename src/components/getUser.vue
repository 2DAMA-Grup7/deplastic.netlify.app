<template>
    <div v-for="item in listUsers">
      {{item.username}}
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
        const res = await fetch("https://deplastic.netlify.app/.netlify/functions/api/user");
        const finalRes = await res.json();
        this.listUsers = finalRes;
      }
    },
    mounted() {
      this.getData()
    }
  }
</script>