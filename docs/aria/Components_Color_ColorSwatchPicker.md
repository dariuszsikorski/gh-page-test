# ColorSwatchPicker

**Source**: [https://react-spectrum.adobe.com/react-aria/ColorSwatchPicker.html](https://react-spectrum.adobe.com/react-aria/ColorSwatchPicker.html)

> Documentation for ColorSwatchPicker in the React Aria package.

---

A ColorSwatchPicker displays a list of color swatches and allows a user to select one of them.

* * *

```
import {ColorSwatch, ColorSwatchPicker, ColorSwatchPickerItem} from 'react-aria-components';

<ColorSwatchPicker>
  <ColorSwatchPickerItem color="#A00">
    <ColorSwatch />
  </ColorSwatchPickerItem>
  <ColorSwatchPickerItem color="#f80">
    <ColorSwatch />
  </ColorSwatchPickerItem>
  <ColorSwatchPickerItem color="#080">
    <ColorSwatch />
  </ColorSwatchPickerItem>
  <ColorSwatchPickerItem color="#08f">
    <ColorSwatch />
  </ColorSwatchPickerItem>
  <ColorSwatchPickerItem color="#088">
    <ColorSwatch />
  </ColorSwatchPickerItem>
  <ColorSwatchPickerItem color="#008">
    <ColorSwatch />
  </ColorSwatchPickerItem>
</ColorSwatchPicker>
```

```
import {
  ColorSwatch,
  ColorSwatchPicker,
  ColorSwatchPickerItem
} from 'react-aria-components';

<ColorSwatchPicker>
  <ColorSwatchPickerItem color="#A00">
    <ColorSwatch />
  </ColorSwatchPickerItem>
  <ColorSwatchPickerItem color="#f80">
    <ColorSwatch />
  </ColorSwatchPickerItem>
  <ColorSwatchPickerItem color="#080">
    <ColorSwatch />
  </ColorSwatchPickerItem>
  <ColorSwatchPickerItem color="#08f">
    <ColorSwatch />
  </ColorSwatchPickerItem>
  <ColorSwatchPickerItem color="#088">
    <ColorSwatch />
  </ColorSwatchPickerItem>
  <ColorSwatchPickerItem color="#008">
    <ColorSwatch />
  </ColorSwatchPickerItem>
</ColorSwatchPicker>
```

```
import {
  ColorSwatch,
  ColorSwatchPicker,
  ColorSwatchPickerItem
} from 'react-aria-components';

<ColorSwatchPicker>
  <ColorSwatchPickerItem color="#A00">
    <ColorSwatch />
  </ColorSwatchPickerItem>
  <ColorSwatchPickerItem color="#f80">
    <ColorSwatch />
  </ColorSwatchPickerItem>
  <ColorSwatchPickerItem color="#080">
    <ColorSwatch />
  </ColorSwatchPickerItem>
  <ColorSwatchPickerItem color="#08f">
    <ColorSwatch />
  </ColorSwatchPickerItem>
  <ColorSwatchPickerItem color="#088">
    <ColorSwatch />
  </ColorSwatchPickerItem>
  <ColorSwatchPickerItem color="#008">
    <ColorSwatch />
  </ColorSwatchPickerItem>
</ColorSwatchPicker>
```

Show CSS

```
@import "@react-aria/example-theme";

.react-aria-ColorSwatchPicker {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.react-aria-ColorSwatchPickerItem {
  position: relative;
  outline: none;
  border-radius: 4px;
  width: fit-content;
  forced-color-adjust: none;

  &[data-focus-visible] {
    outline: 2px solid var(--focus-ring-color);
    outline-offset: 2px;
  }

  &[data-selected]::after {
    content: '';
    position: absolute;
    inset: 0;
    border: 2px solid black;
    outline: 2px solid white;
    outline-offset: -4px;
    border-radius: inherit;
  }
}
```

```
@import "@react-aria/example-theme";

.react-aria-ColorSwatchPicker {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.react-aria-ColorSwatchPickerItem {
  position: relative;
  outline: none;
  border-radius: 4px;
  width: fit-content;
  forced-color-adjust: none;

  &[data-focus-visible] {
    outline: 2px solid var(--focus-ring-color);
    outline-offset: 2px;
  }

  &[data-selected]::after {
    content: '';
    position: absolute;
    inset: 0;
    border: 2px solid black;
    outline: 2px solid white;
    outline-offset: -4px;
    border-radius: inherit;
  }
}
```

```
@import "@react-aria/example-theme";

.react-aria-ColorSwatchPicker {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.react-aria-ColorSwatchPickerItem {
  position: relative;
  outline: none;
  border-radius: 4px;
  width: fit-content;
  forced-color-adjust: none;

  &[data-focus-visible] {
    outline: 2px solid var(--focus-ring-color);
    outline-offset: 2px;
  }

  &[data-selected]::after {
    content: '';
    position: absolute;
    inset: 0;
    border: 2px solid black;
    outline: 2px solid white;
    outline-offset: -4px;
    border-radius: inherit;
  }
}
```

* * *

A `ColorSwatchPicker` wraps the [ListBox](https://react-spectrum.adobe.com/react-aria/ListBox.html) component to simplify building color swatch pickers that work with a [ColorPicker](https://react-spectrum.adobe.com/react-aria/ColorPicker.html).

-   **Item selection** – A single color value can be selected from a list of unique colors. Color swatches are automatically matched with the value no matter the color space they are defined in.
-   **Keyboard navigation** – Color swatches can be navigated using the arrow keys, along with page up/down, home/end, etc.
-   **Layout options** – Items can be arranged in a vertical or horizontal stack, or as a two-dimensional grid.
-   **Accessible** – Follows the [ARIA listbox pattern](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/). Each swatch includes a localized color description for screen reader users (e.g. "dark vibrant blue").
-   **Styleable** – Items include builtin states for styling, such as hover, press, focus, selected, and disabled.

* * *

A ColorSwatchPicker consists of a container element, with a list of color swatches inside. Users can select a color by clicking, tapping, or navigating with the keyboard.

```
import {ColorSwatch, ColorSwatchPicker, ColorSwatchPickerItem} from 'react-aria-components';

<ColorSwatchPicker>
  <ColorSwatchPickerItem>
    <ColorSwatch />
  </ColorSwatchPickerItem>
</ColorSwatchPicker>
```

```
import {
  ColorSwatch,
  ColorSwatchPicker,
  ColorSwatchPickerItem
} from 'react-aria-components';

<ColorSwatchPicker>
  <ColorSwatchPickerItem>
    <ColorSwatch />
  </ColorSwatchPickerItem>
</ColorSwatchPicker>
```

```
import {
  ColorSwatch,
  ColorSwatchPicker,
  ColorSwatchPickerItem
} from 'react-aria-components';

<ColorSwatchPicker>
  <ColorSwatchPickerItem>
    <ColorSwatch />
  </ColorSwatchPickerItem>
</ColorSwatchPicker>
```

ColorSwatchPicker is a convenience wrapper around the [ListBox](https://react-spectrum.adobe.com/react-aria/ListBox.html) component. If you need additional flexibility, such as support for multiple selection, duplicate colors, drag and drop, etc., you can use the ListBox component directly.

* * *

To help kick-start your project, we offer starter kits that include example implementations of all React Aria components with various styling solutions. All components are fully styled, including support for dark mode, high contrast mode, and all UI states. Each starter comes with a pre-configured [Storybook](https://storybook.js.org/) that you can experiment with, or use as a starting point for your own component library.

* * *

If you will use a ColorSwatchPicker in multiple places in your app, you can wrap all of the pieces into a reusable component. This way, the DOM structure, styling code, and other logic are defined in a single place and reused everywhere to ensure consistency.

This example wraps `ColorSwatchPicker` and `ColorSwatchPickerItem`, reusing the `MyColorSwatch` component from the [ColorSwatch](https://react-spectrum.adobe.com/react-aria/ColorSwatch.html#reusable-wrappers) docs.

```
import type {ColorSwatchPickerItemProps, ColorSwatchPickerProps} from 'react-aria-components';
import {MyColorSwatch} from './ColorSwatch';

export function MyColorSwatchPicker(
  { children, ...props }: ColorSwatchPickerProps
) {
  return (
    <ColorSwatchPicker {...props}>
      {children}
    </ColorSwatchPicker>
  );
}

export function MyColorSwatchPickerItem(props: ColorSwatchPickerItemProps) {
  return (
    <ColorSwatchPickerItem {...props}>
      <MyColorSwatch />
    </ColorSwatchPickerItem>
  );
}

<MyColorSwatchPicker>
  <MyColorSwatchPickerItem color="#A00" />
  <MyColorSwatchPickerItem color="#f80" />
  <MyColorSwatchPickerItem color="#080" />
  <MyColorSwatchPickerItem color="#08f" />
  <MyColorSwatchPickerItem color="#088" />
  <MyColorSwatchPickerItem color="#008" />
</MyColorSwatchPicker>
```

```
import type {
  ColorSwatchPickerItemProps,
  ColorSwatchPickerProps
} from 'react-aria-components';
import {MyColorSwatch} from './ColorSwatch';

export function MyColorSwatchPicker(
  { children, ...props }: ColorSwatchPickerProps
) {
  return (
    <ColorSwatchPicker {...props}>
      {children}
    </ColorSwatchPicker>
  );
}

export function MyColorSwatchPickerItem(
  props: ColorSwatchPickerItemProps
) {
  return (
    <ColorSwatchPickerItem {...props}>
      <MyColorSwatch />
    </ColorSwatchPickerItem>
  );
}

<MyColorSwatchPicker>
  <MyColorSwatchPickerItem color="#A00" />
  <MyColorSwatchPickerItem color="#f80" />
  <MyColorSwatchPickerItem color="#080" />
  <MyColorSwatchPickerItem color="#08f" />
  <MyColorSwatchPickerItem color="#088" />
  <MyColorSwatchPickerItem color="#008" />
</MyColorSwatchPicker>
```

```
import type {
  ColorSwatchPickerItemProps,
  ColorSwatchPickerProps
} from 'react-aria-components';
import {MyColorSwatch} from './ColorSwatch';

export function MyColorSwatchPicker(
  { children, ...props }:
    ColorSwatchPickerProps
) {
  return (
    <ColorSwatchPicker
      {...props}
    >
      {children}
    </ColorSwatchPicker>
  );
}

export function MyColorSwatchPickerItem(
  props:
    ColorSwatchPickerItemProps
) {
  return (
    <ColorSwatchPickerItem
      {...props}
    >
      <MyColorSwatch />
    </ColorSwatchPickerItem>
  );
}

<MyColorSwatchPicker>
  <MyColorSwatchPickerItem color="#A00" />
  <MyColorSwatchPickerItem color="#f80" />
  <MyColorSwatchPickerItem color="#080" />
  <MyColorSwatchPickerItem color="#08f" />
  <MyColorSwatchPickerItem color="#088" />
  <MyColorSwatchPickerItem color="#008" />
</MyColorSwatchPicker>
```

* * *

ColorSwatchPicker accepts either an uncontrolled default value or a controlled value, provided using the `defaultValue` or `value` props respectively. The value provided to either of these props should be a color string or `[Color](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/color/src/index.d.ts:Color)` object. The value is matched against the color of each ColorSwatch, including equivalent colors in different color spaces.

In the example below, the `[parseColor](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/color/src/Color.ts:parseColor)` function is used to parse the initial color from a HSL string so that `value`'s type remains consistent.

```
import {parseColor} from 'react-aria-components';

function Example() {
  let [color, setColor] = React.useState(parseColor('hsl(0, 100%, 33.33%)'));

  return (
    <MyColorSwatchPicker value={color} onChange={setColor}>
      <MyColorSwatchPickerItem color="#A00" />
      <MyColorSwatchPickerItem color="#f80" />
      <MyColorSwatchPickerItem color="#080" />
    </MyColorSwatchPicker>
  );
}
```

```
import {parseColor} from 'react-aria-components';

function Example() {
  let [color, setColor] = React.useState(
    parseColor('hsl(0, 100%, 33.33%)')
  );

  return (
    <MyColorSwatchPicker value={color} onChange={setColor}>
      <MyColorSwatchPickerItem color="#A00" />
      <MyColorSwatchPickerItem color="#f80" />
      <MyColorSwatchPickerItem color="#080" />
    </MyColorSwatchPicker>
  );
}
```

```
import {parseColor} from 'react-aria-components';

function Example() {
  let [color, setColor] =
    React.useState(
      parseColor(
        'hsl(0, 100%, 33.33%)'
      )
    );

  return (
    <MyColorSwatchPicker
      value={color}
      onChange={setColor}
    >
      <MyColorSwatchPickerItem color="#A00" />
      <MyColorSwatchPickerItem color="#f80" />
      <MyColorSwatchPickerItem color="#080" />
    </MyColorSwatchPicker>
  );
}
```

**Note**: ColorSwatches rendered inside a ColorSwatchPicker must have unique colors, even between different color spaces. For example, the values `#f00`, `hsl(0, 100%, 50%)`, and `hsb(0, 100%, 100%)` are all equivalent and considered duplicates. This is required so that selection behavior works properly.

* * *

By default, `ColorSwatchPicker` has an `aria-label` with the localized string "Color swatches". This can be overridden with a more specific accessibility label using the `aria-label` or `aria-labelledby` props. All labels should be localized.

```
<MyColorSwatchPicker aria-label="Fill color">
  <MyColorSwatchPickerItem color="#A00" />
  <MyColorSwatchPickerItem color="#f80" />
  <MyColorSwatchPickerItem color="#080" />
</MyColorSwatchPicker>
```

```
<MyColorSwatchPicker aria-label="Fill color">
  <MyColorSwatchPickerItem color="#A00" />
  <MyColorSwatchPickerItem color="#f80" />
  <MyColorSwatchPickerItem color="#080" />
</MyColorSwatchPicker>
```

```
<MyColorSwatchPicker aria-label="Fill color">
  <MyColorSwatchPickerItem color="#A00" />
  <MyColorSwatchPickerItem color="#f80" />
  <MyColorSwatchPickerItem color="#080" />
</MyColorSwatchPicker>
```

* * *

ColorSwatchPicker accepts an `onChange` prop which is triggered whenever the value is edited by the user. It receives a `[Color](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/color/src/index.d.ts:Color)` object as a parameter.

The example below uses `onChange` to update a separate element with the color value as a string.

```
import {parseColor} from 'react-aria-components';

function Example() {
  let [value, setValue] = React.useState(parseColor('#A00'));

  return (
    <div>
      <MyColorSwatchPicker value={value} onChange={setValue}>
        <MyColorSwatchPickerItem color="#A00" />
        <MyColorSwatchPickerItem color="#f80" />
        <MyColorSwatchPickerItem color="#080" />
        <MyColorSwatchPickerItem color="#08f" />
        <MyColorSwatchPickerItem color="#088" />
        <MyColorSwatchPickerItem color="#008" />
      </MyColorSwatchPicker>
      <p>Selected color: {value.toString('rgb')}</p>
    </div>
  );
}
```

```
import {parseColor} from 'react-aria-components';

function Example() {
  let [value, setValue] = React.useState(
    parseColor('#A00')
  );

  return (
    <div>
      <MyColorSwatchPicker
        value={value}
        onChange={setValue}
      >
        <MyColorSwatchPickerItem color="#A00" />
        <MyColorSwatchPickerItem color="#f80" />
        <MyColorSwatchPickerItem color="#080" />
        <MyColorSwatchPickerItem color="#08f" />
        <MyColorSwatchPickerItem color="#088" />
        <MyColorSwatchPickerItem color="#008" />
      </MyColorSwatchPicker>
      <p>Selected color: {value.toString('rgb')}</p>
    </div>
  );
}
```

```
import {parseColor} from 'react-aria-components';

function Example() {
  let [value, setValue] =
    React.useState(
      parseColor('#A00')
    );

  return (
    <div>
      <MyColorSwatchPicker
        value={value}
        onChange={setValue}
      >
        <MyColorSwatchPickerItem color="#A00" />
        <MyColorSwatchPickerItem color="#f80" />
        <MyColorSwatchPickerItem color="#080" />
        <MyColorSwatchPickerItem color="#08f" />
        <MyColorSwatchPickerItem color="#088" />
        <MyColorSwatchPickerItem color="#008" />
      </MyColorSwatchPicker>
      <p>
        Selected color:
        {' '}
        {value.toString(
          'rgb'
        )}
      </p>
    </div>
  );
}
```

* * *

A `ColorSwatchPickerItem` can be disabled using the `isDisabled` prop. Disabled swatches cannot be selected, and are not focusable or interactive.

```
<MyColorSwatchPicker>
  <MyColorSwatchPickerItem color="#A00" />
  <MyColorSwatchPickerItem color="#f80" isDisabled />
  <MyColorSwatchPickerItem color="#080" />
</MyColorSwatchPicker>
```

```
<MyColorSwatchPicker>
  <MyColorSwatchPickerItem color="#A00" />
  <MyColorSwatchPickerItem color="#f80" isDisabled />
  <MyColorSwatchPickerItem color="#080" />
</MyColorSwatchPicker>
```

```
<MyColorSwatchPicker>
  <MyColorSwatchPickerItem color="#A00" />
  <MyColorSwatchPickerItem
    color="#f80"
    isDisabled
  />
  <MyColorSwatchPickerItem color="#080" />
</MyColorSwatchPicker>
```

Show CSS

```
.react-aria-ColorSwatchPickerItem {
  &[data-disabled] {
    opacity: 0.2;
  }
}
```

```
.react-aria-ColorSwatchPickerItem {
  &[data-disabled] {
    opacity: 0.2;
  }
}
```

```
.react-aria-ColorSwatchPickerItem {
  &[data-disabled] {
    opacity: 0.2;
  }
}
```

* * *

By default, ColorSwatchPicker expects items to be arranged horizontally, optionally wrapping to form a grid, and implements keyboard navigation and drag and drop accordingly. The `layout` prop can be used to display the swatches as a vertical stack instead.

```
<MyColorSwatchPicker layout="stack">
  <MyColorSwatchPickerItem color="#A00" />
  <MyColorSwatchPickerItem color="#f80" />
  <MyColorSwatchPickerItem color="#080" />
  <MyColorSwatchPickerItem color="#08f" />
  <MyColorSwatchPickerItem color="#088" />
  <MyColorSwatchPickerItem color="#008" />
</MyColorSwatchPicker>
```

```
<MyColorSwatchPicker layout="stack">
  <MyColorSwatchPickerItem color="#A00" />
  <MyColorSwatchPickerItem color="#f80" />
  <MyColorSwatchPickerItem color="#080" />
  <MyColorSwatchPickerItem color="#08f" />
  <MyColorSwatchPickerItem color="#088" />
  <MyColorSwatchPickerItem color="#008" />
</MyColorSwatchPicker>
```

```
<MyColorSwatchPicker layout="stack">
  <MyColorSwatchPickerItem color="#A00" />
  <MyColorSwatchPickerItem color="#f80" />
  <MyColorSwatchPickerItem color="#080" />
  <MyColorSwatchPickerItem color="#08f" />
  <MyColorSwatchPickerItem color="#088" />
  <MyColorSwatchPickerItem color="#008" />
</MyColorSwatchPicker>
```

Show CSS

```
.react-aria-ColorSwatchPicker {
  &[data-layout=stack] {
    flex-direction: column;
  }
}
```

```
.react-aria-ColorSwatchPicker {
  &[data-layout=stack] {
    flex-direction: column;
  }
}
```

```
.react-aria-ColorSwatchPicker {
  &[data-layout=stack] {
    flex-direction: column;
  }
}
```

* * *

Name

Type

Default

Description

`children`

`[ReactNode](https://reactjs.org/docs/rendering-elements.html)`

—

The children of the ColorSwatchPicker.

`layout`

`'grid' | 'stack'`

`'grid'`

Whether the items are arranged in a stack or grid.

`value`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) | [Color](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/color/src/index.d.ts:Color)`

—

The current value (controlled).

`defaultValue`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) | [Color](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/color/src/index.d.ts:Color)`

—

The default value (uncontrolled).

`className`

`[ClassNameOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ClassNameOrFunction)<[ColorSwatchPickerRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/ColorSwatchPicker.tsx:ColorSwatchPickerRenderProps)>`

—

The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.

`style`

`[StyleOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:StyleOrFunction)<[ColorSwatchPickerRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/ColorSwatchPicker.tsx:ColorSwatchPickerRenderProps)>`

—

The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.

Events

Name

Type

Description

`onChange`

`( (value: [Color](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/color/src/index.d.ts:Color) )) => void`

Handler that is called when the value changes.

PositioningAccessibility

Name

Type

Description

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

A `<ColorSwatchPickerItem>` represents an individual item within a `<ColorSwatchPicker>`. It should contain a `<ColorSwatch>`.

Name

Type

Description

`color`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) | [Color](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/color/src/index.d.ts:Color)`

The color of the swatch.

`isDisabled`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether the color swatch is disabled.

`children`

`[ChildrenOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ChildrenOrFunction)<[ColorSwatchPickerItemRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/ColorSwatchPicker.tsx:ColorSwatchPickerItemRenderProps)>`

The children of the component. A function may be provided to alter the children based on component state.

`className`

`[ClassNameOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ClassNameOrFunction)<[ColorSwatchPickerItemRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/ColorSwatchPicker.tsx:ColorSwatchPickerItemRenderProps)>`

The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.

`style`

`[StyleOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:StyleOrFunction)<[ColorSwatchPickerItemRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/ColorSwatchPicker.tsx:ColorSwatchPickerItemRenderProps)>`

The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.

Events

Name

Type

Description

`onHoverStart`

`( (e: [HoverEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/events.d.ts:HoverEvent) )) => void`

Handler that is called when a hover interaction starts.

`onHoverEnd`

`( (e: [HoverEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/events.d.ts:HoverEvent) )) => void`

Handler that is called when a hover interaction ends.

`onHoverChange`

`( (isHovering: [boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) )) => void`

Handler that is called when the hover state changes.

`onPress`

`( (e: [PressEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/events.d.ts:PressEvent) )) => void`

Handler that is called when the press is released over the target.

`onPressStart`

`( (e: [PressEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/events.d.ts:PressEvent) )) => void`

Handler that is called when a press interaction starts.

`onPressEnd`

`( (e: [PressEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/events.d.ts:PressEvent) )) => void`

Handler that is called when a press interaction ends, either over the target or when the pointer leaves the target.

`onPressChange`

`( (isPressed: [boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) )) => void`

Handler that is called when the press state changes.

`onPressUp`

`( (e: [PressEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/events.d.ts:PressEvent) )) => void`

Handler that is called when a press is released over the target, regardless of whether it started on the target or not.

`onClick`

`( (e: [MouseEvent](https://developer.mozilla.org/docs/Web/API/MouseEvent)<[FocusableElement](https://developer.mozilla.org/en-US/docs/Web/API/Element)> )) => void`

**Not recommended – use `onPress` instead.** `onClick` is an alias for `onPress` provided for compatibility with other libraries. `onPress` provides additional event details for non-mouse interactions.

Positioning

* * *

React Aria components can be styled in many ways, including using CSS classes, inline styles, utility classes (e.g. Tailwind), CSS-in-JS (e.g. Styled Components), etc. By default, all components include a builtin `className` attribute which can be targeted using CSS selectors. These follow the `react-aria-ComponentName` naming convention.

```
.react-aria-ColorSwatchPicker {
  /* ... */
}
```

```
.react-aria-ColorSwatchPicker {
  /* ... */
}
```

```
.react-aria-ColorSwatchPicker {
  /* ... */
}
```

A custom `className` can also be specified on any component. This overrides the default `className` provided by React Aria with your own.

```
<ColorSwatchPicker className="my-color-swatch-picker">
  {/* ... */}
</ColorSwatchPicker>
```

```
<ColorSwatchPicker className="my-color-swatch-picker">
  {/* ... */}
</ColorSwatchPicker>
```

```
<ColorSwatchPicker className="my-color-swatch-picker">
  {/* ... */}
</ColorSwatchPicker>
```

In addition, some components support multiple UI states (e.g. focused, placeholder, readonly, etc.). React Aria components expose states using data attributes, which you can target in CSS selectors. For example:

```
.react-aria-ColorSwatchPickerItem[data-selected] {
  /* ... */
}
```

```
.react-aria-ColorSwatchPickerItem[data-selected] {
  /* ... */
}
```

```
.react-aria-ColorSwatchPickerItem[data-selected] {
  /* ... */
}
```

The `className` and `style` props also accept functions which receive states for styling. This lets you dynamically determine the classes or styles to apply, which is useful when using utility CSS libraries like [Tailwind](https://tailwindcss.com/).

```
<ColorSwatchPickerItem
  className={({ isSelected }) =>
    isSelected ? 'border-black' : 'border-transparent'}
/>
```

```
<ColorSwatchPickerItem
  className={({ isSelected }) =>
    isSelected ? 'border-black' : 'border-transparent'}
/>
```

```
<ColorSwatchPickerItem
  className={(
    { isSelected }
  ) =>
    isSelected
      ? 'border-black'
      : 'border-transparent'}
/>
```

The states, selectors, and render props for each component used in a `ColorSwatchPicker` are documented below.

The `ColorSwatchPicker` component can be targeted with the `.react-aria-ColorSwatchPicker` CSS selector, or by overriding with a custom `className`. It supports the following states:

Name

CSS Selector

Description

`isEmpty`

`[data-empty]`

Whether the listbox has no items and should display its empty state.

`isFocused`

`[data-focused]`

Whether the listbox is currently focused.

`isFocusVisible`

`[data-focus-visible]`

Whether the listbox is currently keyboard focused.

`layout`

`[data-layout="stack | grid"]`

Whether the items are arranged in a stack or grid.

`state`

`—`

State of the listbox.

The `ColorSwatchPickerItem` component can be targeted with the `.react-aria-ColorSwatchPickerItem` CSS selector, or by overriding with a custom `className`. It supports the following states:

Name

CSS Selector

Description

`color`

`—`

The color of the swatch.

`isHovered`

`[data-hovered]`

Whether the item is currently hovered with a mouse.

`isPressed`

`[data-pressed]`

Whether the item is currently in a pressed state.

`isSelected`

`[data-selected]`

Whether the item is currently selected.

`isFocused`

`[data-focused]`

Whether the item is currently focused.

`isFocusVisible`

`[data-focus-visible]`

Whether the item is currently keyboard focused.

`isDisabled`

`[data-disabled]`

Whether the item is non-interactive, i.e. both selection and actions are disabled and the item may not be focused. Dependent on `disabledKeys` and `disabledBehavior`.

The `ColorSwatch` component can be targeted with the `.react-aria-ColorSwatch` CSS selector, or by overriding with a custom `className`. It supports the following states:

Name

Description

`color`

The color of the swatch.

* * *

If you need to customize one of the components within a `ColorSwatchPicker`, such as `ColorSwatchPickerItem` or `ColorSwatch`, in many cases you can create a wrapper component. This lets you customize the props passed to the component.

```
function MyColorSwatchPickerItem(props) {
  return <ColorSwatchPickerItem {...props} className="my-swatch" />
}
```

```
function MyColorSwatchPickerItem(props) {
  return (
    <ColorSwatchPickerItem
      {...props}
      className="my-swatch"
    />
  );
}
```

```
function MyColorSwatchPickerItem(
  props
) {
  return (
    <ColorSwatchPickerItem
      {...props}
      className="my-swatch"
    />
  );
}
```

All React Aria Components export a corresponding context that can be used to send props to them from a parent element. This enables you to build your own compositional APIs similar to those found in React Aria Components itself. You can send any prop or ref via context that you could pass to the corresponding component. The local props and ref on the component are merged with the ones passed via context, with the local props taking precedence (following the rules documented in [mergeProps](https://react-spectrum.adobe.com/react-aria/mergeProps.html)).

Component

Context

Props

Ref

`ColorSwatchPicker`

`ColorSwatchPickerContext`

`[ColorSwatchPickerProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/ColorSwatchPicker.tsx:ColorSwatchPickerProps)`

`[HTMLDivElement](https://developer.mozilla.org/docs/Web/API/HTMLDivElement)`

This example shows how to synchronize a ColorSwatchPicker and a [ColorField](https://react-spectrum.adobe.com/react-aria/ColorField.html) via context.

```
import {ColorSwatchPickerContext} from 'react-aria-components';
import {MyColorField} from './ColorField';

function ColorSelector({children}) {
  let [value, setValue] = React.useState(parseColor('#A00'));
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: 8}}>
      <MyColorField label="Color" value={value} onChange={setValue} />
      <ColorSwatchPickerContext.Provider value={{value, onChange: setValue}}>
        {children}
      </ColorSwatchPickerContext.Provider>    </div>
  );
}

<ColorSelector>
  <MyColorSwatchPicker>
    <MyColorSwatchPickerItem color="#A00" />
    <MyColorSwatchPickerItem color="#f80" />
    <MyColorSwatchPickerItem color="#080" />
  </MyColorSwatchPicker>
</ColorSelector>
```

```
import {ColorSwatchPickerContext} from 'react-aria-components';
import {MyColorField} from './ColorField';

function ColorSelector({ children }) {
  let [value, setValue] = React.useState(
    parseColor('#A00')
  );
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }}
    >
      <MyColorField
        label="Color"
        value={value}
        onChange={setValue}
      />
      <ColorSwatchPickerContext.Provider
        value={{ value, onChange: setValue }}
      >
        {children}
      </ColorSwatchPickerContext.Provider>    </div>
  );
}

<ColorSelector>
  <MyColorSwatchPicker>
    <MyColorSwatchPickerItem color="#A00" />
    <MyColorSwatchPickerItem color="#f80" />
    <MyColorSwatchPickerItem color="#080" />
  </MyColorSwatchPicker>
</ColorSelector>
```

```
import {ColorSwatchPickerContext} from 'react-aria-components';
import {MyColorField} from './ColorField';

function ColorSelector(
  { children }
) {
  let [value, setValue] =
    React.useState(
      parseColor('#A00')
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
      <MyColorField
        label="Color"
        value={value}
        onChange={setValue}
      />
      <ColorSwatchPickerContext.Provider
        value={{
          value,
          onChange:
            setValue
        }}
      >
        {children}
      </ColorSwatchPickerContext.Provider>    </div>
  );
}

<ColorSelector>
  <MyColorSwatchPicker>
    <MyColorSwatchPickerItem color="#A00" />
    <MyColorSwatchPickerItem color="#f80" />
    <MyColorSwatchPickerItem color="#080" />
  </MyColorSwatchPicker>
</ColorSelector>
```