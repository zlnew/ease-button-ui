# Ease Button UI

A simple yet customizable button UI for your Vue.js projects. With Ease!

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
    <!-- Basic Usage -->
    <EaseButton text="Hello World!" />

    <!-- With slotted content -->
    <EaseButton slotted>
        Hello World!
    </EaseButton>

    <!-- Loading with text -->
    <EaseButton
      v-bind="{
        text: 'Wait for me!',
        loading: true,
        onLoading: () => ({
          text: 'Loading...',
          icon: EaseLoading, // loading component
        }),
      }"
    />

    <!-- loading without text -->
    <EaseButton
      v-bind="{
        text: 'Loading with text!',
        loading: true,
        onLoading: () => ({
          text: false,
          icon: EaseLoading, // loading component
        }),
      }"
    />
</template>
```

## Custom Style

You can modify ease button default style to your favorite style!. Take a look at this:

```js
import { useEaseButton} from "ease-button-ui";

const easeButton = useEaseButton();

easeButton.defaultStyle({
    color: '#fff',
    bgColor: '#1d4ed8',
    border: "2px solid #1d4ed8",
    borderRadius: "0.2rem",
    outlineStyle: 'solid',
    outlineColor: "#1d4ed8",
    outlineColorOpacity: 0.5,
    classes: 'transition ease-in-out',
});
```

## Custom Variant

You also want to add variants other than primary, secondary, and link:

```js
easeButton.addVariant({
    success: {
        color: '#fff',
        bgColor: '#16a34a',
        // the rest are the same as defaultStyle
    },
    danger: {
        color: '#fff',
        bgColor: '#dc2626',
        // the rest are the same as defaultStyle
    },
});
```

## Available properties

The Available properties are:

```ts
interface EaseButtonProps {
    type?: 'button' | 'submit' | 'reset', // defaults `button`
    text?: string;
    size?: 'sm' | 'base' | 'lg' | 'xl'; // defaults `base`
    variant?: 'primary' | 'secondary' | 'link'; // defaults `primary`
    rounded?: 'none' | 'base' | 'full'; // defaults `base`
    slotted?: boolean; // defaults `false`
    loading?: boolean; // defaults `false`
    onLoading?: () => ({
        text?: string; // defaults `text`
        icon?: VueComponent | boolean; // defaults `EaseIcon` 
        disabled?: boolean; // defaults `true`
    });
}

interface IButtonStyle {
    color?: string | null;
    bgColor?: string | null;
    border?: string | null;
    borderRadius?: string | null;
    outlineStyle?: string | null;
    outlineColor?: string | null;
    outlineColorOpacity?: number | null;
    textDecoration?: string | null;
    classes?: string | null;
}

export interface IButtonVariant {
    [key: string]: IButtonStyle;
}
```