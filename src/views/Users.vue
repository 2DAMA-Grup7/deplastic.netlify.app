<script setup>
import AdminTemplate from "../components/AdminTemplate.vue";
import Users from "../components/Users.vue";
import getCookie from "../functions/getcookies";
fetch("/.netlify/functions/api/token", {
  method: "POST",
  body: JSON.stringify({
    token: getCookie("login_token"),
    email: getCookie("email"),
  }),
  headers: { "Content-Type": "application/json" },
})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    if (!data.auth) {
      window.location.href = "/login";
    }
  });
</script>

<template>
  <Users />
  <AdminTemplate/>
</template>

<style scoped></style>
