import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/Login.vue";

const routes = [
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("../views/Admin.vue"),
    meta: {
      authRequired: true,
    },
  },
  {
    path: "/admin/markers",
    name: "markers",
    component: () => import("../views/Markers.vue"),
    meta: {
      authRequired: true,
    },
  },
  {
    path: "/admin/users",
    name: "users",
    component: () => import("../views/Users.vue"),
    meta: {
      authRequired: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
