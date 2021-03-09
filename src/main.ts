import { createApp } from 'vue'
import router from "./router";
import App from './App.vue';
import '../src/assets/css/reset.css';

// @ts-ignore
createApp(App).use(router).mount('#app')
