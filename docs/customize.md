# Customizing the button

To be able to customize the button, you need to import `useEaseButton` from `ease-button-ui`:

```js
import { useEaseButton } from "ease-button-ui";

const easeButton = useEaseButton();
```

### Modifying Default Style

You can modify ease button default style to your favorite style by using `easeButton.defaultStyle({})`. Take a look at this, this is the default style used on `ease-button-ui`:

```js
easeButton.defaultStyle({
    color: '#fff',
    bgColor: '#1d4ed8',
    border: "2px solid #1d4ed8",
    borderRadius: "0.2rem",
    outlineStyle: 'solid',
    outlineColor: "#1d4ed8",
    outlineColorOpacity: 0.5,
});
```
To modify the default style, you don't have to define all styles manually. Instead, if you just want to modify the button default `background-color`, you can do it like this:

```js
easeButton.defaultStyle({
    bgColor: '#303030',
});
```
The code above only modify the button default `background-color`. The rest of styles you don't define will still be applied by default style.

### Adding Classes

If you want to add some classes to the button by default, you can add these:

```js
easeButton.defaultStyle({
    ...
    classes: 'your-classes'
});
```

Make sure not to add classes related to the properties of the [default button styles](customize?id=modifying-default-style), it won't works!

### Adding Variant

You also want to add button variants other than just `primary`, `secondary`, and `link` by using `easeButton.addVariant({})`:

```js
easeButton.addVariant({
    success: {
        color: '#fff',
        bgColor: '#16a34a',
        // the rest of styles will follow the default button style
    },
    danger: {
        color: '#fff',
        bgColor: '#dc2626',
        // the rest of styles will follow the default button style
    },
});
```

