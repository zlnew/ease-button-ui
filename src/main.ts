import './style.css';
import './assets/output.tailwind.css';

import { createApp } from 'vue';
import { createPinia } from "pinia";
import { EaseButton, useEaseButton } from './index';
import App from './App.vue';

const pinia = createPinia();
const vue = createApp(App);

vue.use(pinia);
vue.component('EaseButton', EaseButton);
vue.mount('#app');

const easeButton = useEaseButton();

easeButton.defaultStyle({
    classes: 'transition ease-in-out',
});

easeButton.addVariant({
    success: {
        color: '#fff',
        bgColor: '#16a34a',
    },
    danger: {
        color: '#fff',
        bgColor: '#dc2626',
    },
});
