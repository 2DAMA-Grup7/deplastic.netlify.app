/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

// VueRouter
import router from "./router";

const app = createApp(App).use(router)

registerPlugins(app)

app.mount('#app')
