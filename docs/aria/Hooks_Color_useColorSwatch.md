# useColorSwatch

**Source**: [https://react-spectrum.adobe.com/react-aria/useColorSwatch.html](https://react-spectrum.adobe.com/react-aria/useColorSwatch.html)

> Documentation for useColorSwatch in the React Aria package.

---

Provides the accessibility implementation for a color swatch component. A color swatch displays a preview of a selected color.

* * *

`useColorSwatch( (props: [AriaColorSwatchProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/color/src/useColorSwatch.ts:AriaColorSwatchProps) )): [ColorSwatchAria](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/color/src/useColorSwatch.ts:ColorSwatchAria)`

* * *

A color swatch may seem simple to build with a `<div>`, but requires additional semantics and labeling for accessibility.

-   **Accessible** – Includes a localized color description for screen reader users (e.g. "dark vibrant blue"). Uses the [img](https://w3c.github.io/aria/#img) role with a custom `aria-roledescription` of "color swatch".
-   **International** – Accessible color description and role description are translated into over 30 languages.

* * *

A color swatch consists of a color preview, which is exposed to assistive technology with a localized color description.

`useColorSwatch` returns props that you should spread onto the color swatch element, along with the parsed color value:

Name

Type

Description

`colorSwatchProps`

`[HTMLAttributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)<[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)>`

Props for the color swatch element.

`color`

`[Color](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/color/src/index.d.ts:Color)`

The parsed color value of the swatch.

* * *

This example renders a color swatch component, with a checkerboard pattern behind partially transparent colors.

```
import {AriaColorSwatchProps, useColorSwatch} from 'react-aria';

function ColorSwatch(props: AriaColorSwatchProps) {
  let { colorSwatchProps, color } = useColorSwatch(props);

  return (
    <div
      {...colorSwatchProps}
      style={{
        ...colorSwatchProps.style,
        width: 32,
        height: 32,
        borderRadius: 4,
        background: `linear-gradient(${color}, ${color}),
          repeating-conic-gradient(#CCC 0% 25%, white 0% 50%) 50% / 16px 16px`
      }}
    />
  );
}

<ColorSwatch color="#f00a" />
```

```
import {
  AriaColorSwatchProps,
  useColorSwatch
} from 'react-aria';

function ColorSwatch(props: AriaColorSwatchProps) {
  let { colorSwatchProps, color } = useColorSwatch(props);

  return (
    <div
      {...colorSwatchProps}
      style={{
        ...colorSwatchProps.style,
        width: 32,
        height: 32,
        borderRadius: 4,
        background: `linear-gradient(${color}, ${color}),
          repeating-conic-gradient(#CCC 0% 25%, white 0% 50%) 50% / 16px 16px`
      }}
    />
  );
}

<ColorSwatch color="#f00a" />
```

```
import {
  AriaColorSwatchProps,
  useColorSwatch
} from 'react-aria';

function ColorSwatch(
  props:
    AriaColorSwatchProps
) {
  let {
    colorSwatchProps,
    color
  } = useColorSwatch(
    props
  );

  return (
    <div
      {...colorSwatchProps}
      style={{
        ...colorSwatchProps
          .style,
        width: 32,
        height: 32,
        borderRadius: 4,
        background:
          `linear-gradient(${color}, ${color}),
          repeating-conic-gradient(#CCC 0% 25%, white 0% 50%) 50% / 16px 16px`
      }}
    />
  );
}

<ColorSwatch color="#f00a" />
```

* * *

The following examples show how to use the `ColorSwatch` component created in the above example.

ColorSwatch accepts a value via the `color` prop. The value should be a color string or `[Color](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/color/src/index.d.ts:Color)` object. This example uses the `[parseColor](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/color/src/Color.ts:parseColor)` function to parse a color from an HSL string.

```
import {parseColor} from 'react-stately';

<ColorSwatch color={parseColor('hsl(35, 100%, 50%)')} />
```

```
import {parseColor} from 'react-stately';

<ColorSwatch color={parseColor('hsl(35, 100%, 50%)')} />
```

```
import {parseColor} from 'react-stately';

<ColorSwatch
  color={parseColor(
    'hsl(35, 100%, 50%)'
  )}
/>
```

By default, useColorSwatch includes a localized color description for screen reader users (e.g. "dark vibrant blue") as an `aria-label`. If you have a more specific color name (e.g. Pantone colors), the automatically generated color description can be overridden via the `colorName` prop. An additional label describing the context of the color swatch (e.g. "Background color") can also be provided via the `aria-label` or `aria-labelledby` props.

In the example below, the full accessible name of the color swatch will be "Fire truck red, Background color".

```
<ColorSwatch
  color="#f00"
  aria-label="Background color"
  colorName="Fire truck red"
/>
```

```
<ColorSwatch
  color="#f00"
  aria-label="Background color"
  colorName="Fire truck red"
/>
```

```
<ColorSwatch
  color="#f00"
  aria-label="Background color"
  colorName="Fire truck red"
/>
```