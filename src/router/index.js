import { createRouter, createWebHistory } from "vue-router";

import getCookie from "../functions/getcookie.js";

function guardMyroute(to, from, next) {
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
      if (data.auth) {
        next();
      } else {
        next("/login");
      }
    });
}

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/dashboard",
    name: "dashboard",
    beforeEnter: guardMyroute,
    component: () => import("../views/Dashboard.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
