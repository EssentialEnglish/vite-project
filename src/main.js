import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

createApp(App).mount('#app')

// Copied from learn Vue - connect to firbase lesson
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router);

app.mount("#app");
