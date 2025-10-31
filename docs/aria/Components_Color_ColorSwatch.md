# ColorSwatch

**Source**: [https://react-spectrum.adobe.com/react-aria/ColorSwatch.html](https://react-spectrum.adobe.com/react-aria/ColorSwatch.html)

> Documentation for ColorSwatch in the React Aria package.

---

A ColorSwatch displays a preview of a selected color.

* * *

```
import {ColorSwatch} from 'react-aria-components';

<ColorSwatch color="#f00" />
```

```
import {ColorSwatch} from 'react-aria-components';

<ColorSwatch color="#f00" />
```

```
import {ColorSwatch} from 'react-aria-components';

<ColorSwatch color="#f00" />
```

Show CSS

```
.react-aria-ColorSwatch {
  width: 32px;
  height: 32px;
  border-radius: 4px;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
}
```

```
.react-aria-ColorSwatch {
  width: 32px;
  height: 32px;
  border-radius: 4px;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
}
```

```
.react-aria-ColorSwatch {
  width: 32px;
  height: 32px;
  border-radius: 4px;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
}
```

* * *

A color swatch may seem simple to build with a `<div>`, but requires additional semantics and labeling for accessibility.

-   **Accessible** – Includes a localized color description for screen reader users (e.g. "dark vibrant blue"). Uses the [img](https://w3c.github.io/aria/#img) role with a custom `aria-roledescription` of "color swatch".
-   **International** – Accessible color description and role description are translated into over 30 languages.

* * *

A color swatch consists of a color preview, which is exposed to assistive technology with a localized color description.

```
import {ColorSwatch} from 'react-aria-components';

<ColorSwatch />
```

```
import {ColorSwatch} from 'react-aria-components';

<ColorSwatch />
```

```
import {ColorSwatch} from 'react-aria-components';

<ColorSwatch />
```

* * *

To help kick-start your project, we offer starter kits that include example implementations of all React Aria components with various styling solutions. All components are fully styled, including support for dark mode, high contrast mode, and all UI states. Each starter comes with a pre-configured [Storybook](https://storybook.js.org/) that you can experiment with, or use as a starting point for your own component library.

* * *

If you will use a ColorSwatch in multiple places in your app, you can wrap all of the pieces into a reusable component. This way, the DOM structure, styling code, and other logic are defined in a single place and reused everywhere to ensure consistency.

This example wraps `ColorSwatch` and shows how to use the `color` [render prop](https://react-spectrum.adobe.com/react-aria/styling.html#render-props) to add a checkerboard pattern behind partially transparent colors.

```
import type {ColorSwatchProps} from 'react-aria-components';

export function MyColorSwatch(props: ColorSwatchProps) {
  return (
    <ColorSwatch 
      {...props}
      style={({color}) => ({
        background: `linear-gradient(${color}, ${color}),
          repeating-conic-gradient(#CCC 0% 25%, white 0% 50%) 50% / 16px 16px`
      })} />
  );
}

<MyColorSwatch color="#f00a" />
```

```
import type {ColorSwatchProps} from 'react-aria-components';

export function MyColorSwatch(props: ColorSwatchProps) {
  return (
    <ColorSwatch
      {...props}
      style={({ color }) => ({
        background: `linear-gradient(${color}, ${color}),
          repeating-conic-gradient(#CCC 0% 25%, white 0% 50%) 50% / 16px 16px`
      })}
    />
  );
}

<MyColorSwatch color="#f00a" />
```

```
import type {ColorSwatchProps} from 'react-aria-components';

export function MyColorSwatch(
  props: ColorSwatchProps
) {
  return (
    <ColorSwatch
      {...props}
      style={(
        { color }
      ) => ({
        background:
          `linear-gradient(${color}, ${color}),
          repeating-conic-gradient(#CCC 0% 25%, white 0% 50%) 50% / 16px 16px`
      })}
    />
  );
}

<MyColorSwatch color="#f00a" />
```

* * *

ColorSwatch accepts a value via the `color` prop. The value should be a color string or `[Color](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/color/src/index.d.ts:Color)` object.

In the example below, the `[parseColor](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/color/src/Color.ts:parseColor)` function is used to parse the initial color from an HSL string. This is passed to the `value` prop of a [ColorSlider](https://react-spectrum.adobe.com/react-aria/ColorSlider.html), and the `color` prop of a `ColorSwatch` to show a preview of the selected color.

```
import {ColorSlider, ColorThumb, parseColor, SliderTrack} from 'react-aria-components';

function Example() {
  let [color, setColor] = React.useState(parseColor('hsl(0, 100%, 50%)'));
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <ColorSlider value={color} onChange={setColor} channel="hue">
        <SliderTrack>
          <ColorThumb />
        </SliderTrack>
      </ColorSlider>
      <MyColorSwatch color={color} />
    </div>
  );
}
```

```
import {
  ColorSlider,
  ColorThumb,
  parseColor,
  SliderTrack
} from 'react-aria-components';

function Example() {
  let [color, setColor] = React.useState(
    parseColor('hsl(0, 100%, 50%)')
  );
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }}
    >
      <ColorSlider
        value={color}
        onChange={setColor}
        channel="hue"
      >
        <SliderTrack>
          <ColorThumb />
        </SliderTrack>
      </ColorSlider>
      <MyColorSwatch color={color} />
    </div>
  );
}
```

```
import {
  ColorSlider,
  ColorThumb,
  parseColor,
  SliderTrack
} from 'react-aria-components';

function Example() {
  let [color, setColor] =
    React.useState(
      parseColor(
        'hsl(0, 100%, 50%)'
      )
    );
  return (
    <div
      style={{
        display: 'flex',
        flexDirection:
          'column',
        gap: 8
      }}
    >
      <ColorSlider
        value={color}
        onChange={setColor}
        channel="hue"
      >
        <SliderTrack>
          <ColorThumb />
        </SliderTrack>
      </ColorSlider>
      <MyColorSwatch
        color={color}
      />
    </div>
  );
}
```

* * *

By default, ColorSwatch includes a localized color description for screen reader users (e.g. "dark vibrant blue") as an `aria-label`. If you have a more specific color name (e.g. Pantone colors), the automatically generated color description can be overridden via the `colorName` prop. An additional label describing the context of the color swatch (e.g. "Background color") can also be provided via the `aria-label` or `aria-labelledby` props.

In the example below, the full accessible name of the color swatch will be "Fire truck red, Background color".

```
<MyColorSwatch
  color="#f00"
  aria-label="Background color"
  colorName="Fire truck red"
/>
```

```
<MyColorSwatch
  color="#f00"
  aria-label="Background color"
  colorName="Fire truck red"
/>
```

```
<MyColorSwatch
  color="#f00"
  aria-label="Background color"
  colorName="Fire truck red"
/>
```

* * *

Name

Type

Description

`color`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) | [Color](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/color/src/index.d.ts:Color)`

The color value to display in the swatch.

`colorName`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

A localized accessible name for the color. By default, a description is generated from the color value, but this can be overridden if you have a more specific color name (e.g. Pantone colors).

`className`

`[ClassNameOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ClassNameOrFunction)<[ColorSwatchRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/ColorSwatch.tsx:ColorSwatchRenderProps)>`

The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.

`style`

`[StyleOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:StyleOrFunction)<[ColorSwatchRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/ColorSwatch.tsx:ColorSwatchRenderProps)>`

The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.

EventsLayout

Name

Type

Description

`slot`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)`

A slot name for the component. Slots allow the component to receive props from a parent component. An explicit `null` value indicates that the local props completely override all props received from a parent.

PositioningAccessibility

Name

Type

Description

`id`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

The element's unique identifier. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id).

`aria-label`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

Defines a string value that labels the current element.

`aria-labelledby`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

Identifies the element (or elements) that labels the current element.

`aria-describedby`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

Identifies the element (or elements) that describes the object.

`aria-details`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

Identifies the element (or elements) that provide a detailed, extended description for the object.

* * *

React Aria components can be styled in many ways, including using CSS classes, inline styles, utility classes (e.g. Tailwind), CSS-in-JS (e.g. Styled Components), etc. By default, all components include a builtin `className` attribute which can be targeted using CSS selectors. These follow the `react-aria-ComponentName` naming convention.

```
.react-aria-ColorSwatch {
  /* ... */
}
```

```
.react-aria-ColorSwatch {
  /* ... */
}
```

```
.react-aria-ColorSwatch {
  /* ... */
}
```

A custom `className` can also be specified on any component. This overrides the default `className` provided by React Aria with your own.

```
<ColorSwatch className="my-color-swatch">
  {/* ... */}
</ColorSwatch>
```

```
<ColorSwatch className="my-color-swatch">
  {/* ... */}
</ColorSwatch>
```

```
<ColorSwatch className="my-color-swatch">
  {/* ... */}
</ColorSwatch>
```

The `className` and `style` props also accept functions which receive states for styling. This lets you dynamically determine the classes or styles to apply, which is useful when using utility CSS libraries like [Tailwind](https://tailwindcss.com/).

```
<ColorSwatch style={({ color }) => ({ background: color.toString('css') })} />
```

```
<ColorSwatch
  style={({ color }) => ({
    background: color.toString('css')
  })}
/>
```

```
<ColorSwatch
  style={(
    { color }
  ) => ({
    background: color
      .toString('css')
  })}
/>
```

The render props for `ColorSwatch` are documented below.

Name

Description

`color`

The color of the swatch.

* * *

All React Aria Components export a corresponding context that can be used to send props to them from a parent element. This enables you to build your own compositional APIs similar to those found in React Aria Components itself. You can send any prop or ref via context that you could pass to the corresponding component. The local props and ref on the component are merged with the ones passed via context, with the local props taking precedence (following the rules documented in [mergeProps](https://react-spectrum.adobe.com/react-aria/mergeProps.html)).

Component

Context

Props

Ref

`ColorSwatch`

`ColorSwatchContext`

`[ColorSwatchProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/ColorSwatch.tsx:ColorSwatchProps)`

`[HTMLDivElement](https://developer.mozilla.org/docs/Web/API/HTMLDivElement)`

```
import {ColorSwatchContext} from 'react-aria-components';

<ColorSwatchContext.Provider value={{color: '#ff0'}}>
  <ColorSwatch />
</ColorSwatchContext.Provider>
```

```
import {ColorSwatchContext} from 'react-aria-components';

<ColorSwatchContext.Provider value={{color: '#ff0'}}>
  <ColorSwatch />
</ColorSwatchContext.Provider>
```

```
import {ColorSwatchContext} from 'react-aria-components';

<ColorSwatchContext.Provider
  value={{
    color: '#ff0'
  }}
>
  <ColorSwatch />
</ColorSwatchContext.Provider>
```

If you need to customize things even further, such as accessing internal state or customizing DOM structure, you can drop down to the lower level Hook-based API. See [useColorSwatch](https://react-spectrum.adobe.com/react-aria/useColorSwatch.html) for more details.