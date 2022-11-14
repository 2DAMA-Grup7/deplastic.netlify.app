<script setup>
import AdminMain from "../components/AdminMain.vue";
import getCookie from "../functions/getcookies";
import AdminTemplate from "../components/AdminTemplate.vue";
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
    if (!data.auth) {
      window.location.href = "/login";
    }
  });
</script>

<template>
  <AdminMain />
  <AdminTemplate />
</template>

<style scoped></style>
