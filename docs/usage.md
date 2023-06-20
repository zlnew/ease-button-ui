# Using the component

In this page you will get to know how to use the component and the properties of the component.

## Basic Usage

This is the most basic usage of the component:

- text: `string`
- variant: `primary` | `secondary` | `link`
- size: `sm` | `base` | `lg` | `xl`
- rounded: `none` | `base` | `full`

```vue
<EaseButton text="Hello World!" variant="primary" size="sm" rounded="none" />
<EaseButton text="Hello World!" variant="secondary" size="base" rounded="base" />
<EaseButton text="Hello World!" variant="link" size="lg" rounded="full" />
```

## Slotted Text

If you want the button text is more than just a text, you can add `slotted` as the button properties:

- slotted: `boolean`

```vue
<EaseButton variant="primary" size="base" rounded="base" slotted>
  <your-icon /> Hello World!
</EaseButton>
```

## Loading...

You can use the button as a loading button too. `Ease Button UI` already comes with the default loading svg:

- loading: `boolean`

```vue
<EaseButton text="Hello World!" :loading="isLoading" />
```

- `onLoading:` () => ({
 text: `string` | `false`, 
 disabled: `boolean`, 
 icon: `VueComponent`
})

```vue
<EaseButton text="Hello World!" :loading="isLoading"
  :onLoading="{
    text: 'Loading...', 
    disabled: true
  }"
/>
```

If you set the `text` to `false`, the button will not show the text when loading