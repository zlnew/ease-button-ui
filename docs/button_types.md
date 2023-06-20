# Button types interface

### Properties

| Property | Type | Default Value |
| --- | --- | --- |
| type | `button` or `submit` or `reset` | `button` |
| size | `sm` or `base` or `lg` or `xl` | `base` |
| variant | `primary` or `secondary` or `link` | `primary` |
| rounded | `none` or `base` or `full` | `base` |
| slotted | `boolean` | `false` |
| loading | `boolean` | `false` |
| onLoading | `function` | `({text: string, icon: VueComponent, disabled: boolean})` |

### Styles

- Interface name: `IButtonStyle`

| Property | Type | Value |
| --- | --- | --- |
| color | `string` | "`CSS variables` or `hex` or `rgb`" |
| bgColor | `string` | "`CSS variables` or `hex` or `rgb`" |
| border | `string` | "`border-width` `border-style` `border-color`" |
| borderRadius | `string` | "border-radius" |
| outlineStyle | `string` | "outline-style" |
| outlineColor | `string` | "`CSS variables` or `hex` or `rgb`" |
| outlineColorOpacity | `number` | `0.0` to `1.0` |
| textDecoration | `string` | "text-decoration" |
| classes | `string` | "css class" |


### Variant

- Interface name: `IButtonvariant`

| Property | Type | Value |
| --- | --- | --- |
| [key: `string`] | `Object` | `IButtonStyle` |