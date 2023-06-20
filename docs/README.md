# Ease Button UI

A simple yet customizable button UI for your Vue.js projects. With Ease!

## Installation

You can install `ease-button-ui` via npm by running the following command:

```bash
npm install ease-button-ui --save-dev
```
this package require you to install pinia, so make sure you already have it.
Or install it by running the following command:

```bash
npm install pinia
```

for more information about pinia, see https://pinia.vuejs.org/getting-started.html

## Local Registration

To register the component locally, you can import `EaseButton` to your `*.vue` files.

```vue
<script setup>
import { EaseButton } from "ease-button-ui";
</script>
```

## Global Registration

If you want to register the component globally, you can do so by doing the following commands in your `main.js` file:

```js
import { createApp } from 'vue';
import { createPinia } from "pinia";
import { EaseButton } from 'ease-button-ui';
import App from './App.vue';

const pinia = createPinia();
const vue = createApp(App);

vue.use(pinia);
vue.component('EaseButton', EaseButton); // add this
vue.mount('#app');
```