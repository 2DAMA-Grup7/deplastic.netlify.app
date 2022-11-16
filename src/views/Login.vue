<script setup>
import AdminTemplate from "../components/AdminTemplate.vue";
import Login from "../components/Login.vue";
import getCookie from "../functions/getcookies";
fetch("/.netlify/functions/api/user", {
  method: "POST",
  body: JSON.stringify({
    token: getCookie("login_token"),
    email: getCookie("email"),
    type: 2,
  }),
  headers: { "Content-Type": "application/json" },
})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    if (data.auth) {
      window.location.href = "/admin";
    }
  });
</script>

<template>
  <Login />
</template>

<style scoped></style>
