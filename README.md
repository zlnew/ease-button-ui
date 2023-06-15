# Vue Colorful Button UI

A Colorful Bootstrap-like button UI component for your Vue.js projects.

## Installation

You can install `vue-colorful-button-ui` via npm by running the following command:

```bash
npm install vue-colorful-button-ui
```

## Usage

Basic usage example:
- Global registration
```js
import { createApp } from 'vue';
import App from './App.vue';
import ColorfulButton from "vue-colorful-button-ui";

const app = createApp(App);

app.component('ColorfulButton', ColorfulButton);
app.mount('#app')
```

- Local Registration
```vue
<script>
import ColorfulButton from "vue-colorful-button-ui";
</script>

<template>
    <ColorfulButton text="Hello World!" />
</template>
```

With properties:

```vue
<ColorfulButton text="Hello World!" color="success" size="lg" />
```

properties usage with v-bind:

```vue
<ColorfulButton v-bind={
    text: 'Hello World!',
    color: 'success',
    size: 'lg',
} />
```

What if you want to `slots'` content inside the button instead using `text` properties? Just do this:

```vue
<ColorfulButton slot>
    Hello World!
</ColorfulButton>
```

## Props

The `vue-colorful-button-ui` component supports the following props:

```ts
slot: boolean // default: false
text: string
color: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' // default: 'primary'
size: 'sm' | 'base' | 'lg' | 'xl' //default 'base'
```