import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
// Vuetify
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
// VueRouter
import router from "./router";

const vuetify = createVuetify({ components, directives });

createApp(App).use(vuetify).use(router).mount("#app");
