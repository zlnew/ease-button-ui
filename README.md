# Ease Button UI

A simple yet customisable button UI for your Vue.js projects. With Ease!

## Installation

You can install `ease-button-ui` via npm by running the following command:

```bash
npm install ease-button-ui --save-dev
```
* this package require you to install pinia, so make sure you already have it.
Or install it by running the following command:

```bash
npm install pinia
```

## Registration

On your `'main.js'`

```js
import "ease-button-ui/style";
import { createPinia } from "pinia";

import { createApp } from 'vue';
import App from './App.vue';

const pinia = createPinia();
const vue = createApp(App);

vue.use(pinia);
vue.mount('#app')
```

## Usage

```vue
<script>
import { EaseButton } from "ease-button-ui";
</script>

<template>
    <EaseButton text="Hello World!" variant="primary" size="base" rounded="base" />

    <EaseButton text="Loading.." variant="primary" size="base" rounded="base" loading />

    <EaseButton text="Hello World!" variant="primary" size="base" rounded="base" slot>
        Hello World!
    </EaseButton>
</template>
```

## Custom Color

You can modify the default color to your favorite color, by using this:

```vue
<script>
import { EaseButton, useCustomButton} from "ease-button-ui";

const ease = useCustomButton();

ease.defineColor('--favorite-color') * accept only css variable and hex code;
</script>
```

## available properties

```ts
interface EaseButtonProps {
    text?: string;
    size?: 'sm' | 'base' | 'lg' | 'xl'; * default 'base'
    variant?: 'primary' | 'secondary' | 'link'; * default 'primary'
    rounded?: 'none' | 'base' | 'full'; * default 'base'
    slot?: boolean; * default false
    loading?: boolean; * dwfault false
}
```