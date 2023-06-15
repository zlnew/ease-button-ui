# Vue Colorful Button

A Colorful Bootstrap-like button UI component for your Vue.js projects.

## Installation

You can install `vue-colorful-button` via npm by running the following command:

```bash
npm install vue-colorful-button-ui
```

## Usage

Basic usage example:
- Global registration
```js
[label main.js]
import { createApp } from 'vue';
import App from './App.vue';
import ColorfulButton from "vue-colorful-button-ui";

const app = createApp(App);

app.component('ColorfulButton', ColorfulButton);
app.mount('#app')
```

- Local Registration
```vue
[App.vue]
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

You want to slot the content inside the button? just do this:

```vue
<ColorfulButton slot>
    Hello World!
</ColorfulButton>
```

## Props

The `vue-colorful-button` component supports the following props:

- `slot` (Boolean): Whether the button contains a slot. Defaults to `false`.
- `text` (String): The text of the button.
- `color` (String): The type of the button. Available options: `'primary'`, `'secondary'` `'success'`, `'danger'`, `'warning'`, `'info'`, `'light`, `'dark'`. Defaults to `'primary'`.
- `size` (String): The size of the button. Available options: `'sm'`, `'base'`, `'lg'`, `'xl'`. Defaults to `'base'`.