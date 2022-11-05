import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import Home from "./views/Home.vue";
import Admin from "./views/Admin.vue";
// Vuetify
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
// VueRouter
import { createRouter, createWebHistory } from "vue-router";

const webFontLoader = await import("webfontloader");
webFontLoader.load({
  google: {
    families: ["Roboto:100,300,400,500,700,900&display=swap"],
  },
});

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/admin", component: Admin },
  ],
});

const vuetify = createVuetify({
  components,
  directives,
});

createApp(App).use(vuetify).use(router).mount("#app");
