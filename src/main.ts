import './style.css';
import './assets/output.tailwind.css';

import { createApp } from 'vue';
import { createPinia } from "pinia";
import App from './App.vue';

const pinia = createPinia();
const vue = createApp(App);

vue.use(pinia);
vue.mount('#app')
