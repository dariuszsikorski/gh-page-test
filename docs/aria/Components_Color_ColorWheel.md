# ColorWheel

**Source**: [https://react-spectrum.adobe.com/react-aria/ColorWheel.html](https://react-spectrum.adobe.com/react-aria/ColorWheel.html)

> Documentation for ColorWheel in the React Aria package.

---

A color wheel allows users to adjust the hue of an HSL or HSB color value on a circular track.

* * *

```
import {ColorWheel, ColorWheelTrack, ColorThumb} from 'react-aria-components';

<ColorWheel outerRadius={100} innerRadius={74}>
  <ColorWheelTrack />
  <ColorThumb />
</ColorWheel>
```

```
import {
  ColorThumb,
  ColorWheel,
  ColorWheelTrack
} from 'react-aria-components';

<ColorWheel outerRadius={100} innerRadius={74}>
  <ColorWheelTrack />
  <ColorThumb />
</ColorWheel>
```

```
import {
  ColorThumb,
  ColorWheel,
  ColorWheelTrack
} from 'react-aria-components';

<ColorWheel
  outerRadius={100}
  innerRadius={74}
>
  <ColorWheelTrack />
  <ColorThumb />
</ColorWheel>
```

Show CSS

```
.react-aria-ColorThumb {
  border: 2px solid white;
  box-shadow: 0 0 0 1px black, inset 0 0 0 1px black;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  box-sizing: border-box;

  &[data-focus-visible] {
    width: 24px;
    height: 24px;
  }
}
```

```
.react-aria-ColorThumb {
  border: 2px solid white;
  box-shadow: 0 0 0 1px black, inset 0 0 0 1px black;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  box-sizing: border-box;

  &[data-focus-visible] {
    width: 24px;
    height: 24px;
  }
}
```

```
.react-aria-ColorThumb {
  border: 2px solid white;
  box-shadow: 0 0 0 1px black, inset 0 0 0 1px black;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  box-sizing: border-box;

  &[data-focus-visible] {
    width: 24px;
    height: 24px;
  }
}
```

* * *

The [<input type="color">](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color) HTML element can be used to build a color picker, however it is very inconsistent across browsers and operating systems and consists of a complete color picker rather than only a hue color wheel. `useColorWheel` helps achieve accessible and touch-friendly color wheels that can be styled as needed.

-   **Customizable** – Support for adjusting the hue of an HSL or HSB color value, with customizable radius and track thickness.
-   **High quality interactions** – Mouse, touch, and keyboard input is supported via the [useMove](https://react-spectrum.adobe.com/react-aria/useMove.html) hook. Pressing the track moves the thumb to that position. Text selection and touch scrolling are prevented while dragging.
-   **Accessible** – Announces localized hue descriptions for screen reader users (e.g. "cyan blue"). Uses a visually hidden `<input>` element for mobile screen reader support and HTML form integration.

* * *

Shows a color wheel component with labels pointing to its parts, including the track, and thumb elements.TrackThumb

A color wheel consists of a circular track and a thumb that the user can drag to change the color hue. A visually hidden `<input>` element is used to represent the value to assistive technologies.

```
import {ColorWheel, ColorWheelTrack, ColorThumb} from 'react-aria-components';

<ColorWheel>
  <ColorWheelTrack />
  <ColorThumb />
</ColorWheel>
```

```
import {
  ColorThumb,
  ColorWheel,
  ColorWheelTrack
} from 'react-aria-components';

<ColorWheel>
  <ColorWheelTrack />
  <ColorThumb />
</ColorWheel>
```

```
import {
  ColorThumb,
  ColorWheel,
  ColorWheelTrack
} from 'react-aria-components';

<ColorWheel>
  <ColorWheelTrack />
  <ColorThumb />
</ColorWheel>
```

* * *

To help kick-start your project, we offer starter kits that include example implementations of all React Aria components with various styling solutions. All components are fully styled, including support for dark mode, high contrast mode, and all UI states. Each starter comes with a pre-configured [Storybook](https://storybook.js.org/) that you can experiment with, or use as a starting point for your own component library.

* * *

If you will use a ColorWheel in multiple places in your app, you can wrap all of the pieces into a reusable component. This way, the DOM structure, styling code, and other logic are defined in a single place and reused everywhere to ensure consistency.

```
import type {ColorWheelProps} from 'react-aria-components';

interface MyColorWheelProps
  extends Omit<ColorWheelProps, 'outerRadius' | 'innerRadius'> {}

export function MyColorWheel(props: MyColorWheelProps) {
  return (
    <ColorWheel {...props} outerRadius={100} innerRadius={74}>
      <ColorWheelTrack />
      <ColorThumb />
    </ColorWheel>
  );
}

<MyColorWheel defaultValue="hsl(30, 100%, 50%)" />
```

```
import type {ColorWheelProps} from 'react-aria-components';

interface MyColorWheelProps
  extends
    Omit<ColorWheelProps, 'outerRadius' | 'innerRadius'> {}

export function MyColorWheel(props: MyColorWheelProps) {
  return (
    <ColorWheel
      {...props}
      outerRadius={100}
      innerRadius={74}
    >
      <ColorWheelTrack />
      <ColorThumb />
    </ColorWheel>
  );
}

<MyColorWheel defaultValue="hsl(30, 100%, 50%)" />
```

```
import type {ColorWheelProps} from 'react-aria-components';

interface MyColorWheelProps
  extends
    Omit<
      ColorWheelProps,
      | 'outerRadius'
      | 'innerRadius'
    > {}

export function MyColorWheel(
  props:
    MyColorWheelProps
) {
  return (
    <ColorWheel
      {...props}
      outerRadius={100}
      innerRadius={74}
    >
      <ColorWheelTrack />
      <ColorThumb />
    </ColorWheel>
  );
}

<MyColorWheel defaultValue="hsl(30, 100%, 50%)" />
```

* * *

A ColorWheel's `value` specifies the position of the ColorWheel's thumb on the track, and accepts a string or `[Color](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/color/src/index.d.ts:Color)` object.

By default, `ColorWheel` is uncontrolled with a default value of red (hue = 0˚). You can change the default value using the `defaultValue` prop.

```
<MyColorWheel defaultValue="hsl(80, 100%, 50%)" />
```

```
<MyColorWheel defaultValue="hsl(80, 100%, 50%)" />
```

```
<MyColorWheel defaultValue="hsl(80, 100%, 50%)" />
```

A `ColorWheel` can be made controlled using the `value` prop. The `[parseColor](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/color/src/Color.ts:parseColor)` function is used to parse the initial color from an HSL string, stored in state. The `onChange` prop is used to update the value in state when the user drags the thumb.

```
import {parseColor} from 'react-aria-components';

function Example() {
  let [color, setColor] = React.useState(parseColor('hsl(0, 100%, 50%)'));
  return (
    <>
      <MyColorWheel value={color} onChange={setColor} />
      <p>Current color value: {color.toString('hsl')}</p>
    </>
  );
}
```

```
import {parseColor} from 'react-aria-components';

function Example() {
  let [color, setColor] = React.useState(
    parseColor('hsl(0, 100%, 50%)')
  );
  return (
    <>
      <MyColorWheel value={color} onChange={setColor} />
      <p>Current color value: {color.toString('hsl')}</p>
    </>
  );
}
```

```
import {parseColor} from 'react-aria-components';

function Example() {
  let [color, setColor] =
    React.useState(
      parseColor(
        'hsl(0, 100%, 50%)'
      )
    );
  return (
    <>
      <MyColorWheel
        value={color}
        onChange={setColor}
      />
      <p>
        Current color
        value:{' '}
        {color.toString(
          'hsl'
        )}
      </p>
    </>
  );
}
```

ColorWheel supports the `name` prop for integration with HTML forms. The value will be submitted as a number between 0 and 360 degrees.

```
<MyColorWheel name="hue" />
```

```
<MyColorWheel name="hue" />
```

```
<MyColorWheel name="hue" />
```

* * *

ColorWheel supports two events: `onChange` and `onChangeEnd`. `onChange` is triggered whenever the ColorWheel's handle is dragged, and `onChangeEnd` is triggered when the user stops dragging the handle. Both events receive a `[Color](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/color/src/index.d.ts:Color)` object as a parameter.

The example below uses `onChange` and `onChangeEnd` to update two separate elements with the ColorWheel's value.

```
function Example() {
  let [currentValue, setCurrentValue] = React.useState(
    parseColor('hsl(50, 100%, 50%)')
  );
  let [finalValue, setFinalValue] = React.useState(currentValue);

  return (
    <div>
      <MyColorWheel
        value={currentValue}
        onChange={setCurrentValue}
        onChangeEnd={setFinalValue}
      />
      <p>Current value: {currentValue.toString('hsl')}</p>
      <p>Final value: {finalValue.toString('hsl')}</p>
    </div>
  );
}
```

```
function Example() {
  let [currentValue, setCurrentValue] = React.useState(
    parseColor('hsl(50, 100%, 50%)')
  );
  let [finalValue, setFinalValue] = React.useState(
    currentValue
  );

  return (
    <div>
      <MyColorWheel
        value={currentValue}
        onChange={setCurrentValue}
        onChangeEnd={setFinalValue}
      />
      <p>Current value: {currentValue.toString('hsl')}</p>
      <p>Final value: {finalValue.toString('hsl')}</p>
    </div>
  );
}
```

```
function Example() {
  let [
    currentValue,
    setCurrentValue
  ] = React.useState(
    parseColor(
      'hsl(50, 100%, 50%)'
    )
  );
  let [
    finalValue,
    setFinalValue
  ] = React.useState(
    currentValue
  );

  return (
    <div>
      <MyColorWheel
        value={currentValue}
        onChange={setCurrentValue}
        onChangeEnd={setFinalValue}
      />
      <p>
        Current value:
        {' '}
        {currentValue
          .toString(
            'hsl'
          )}
      </p>
      <p>
        Final value:{' '}
        {finalValue
          .toString(
            'hsl'
          )}
      </p>
    </div>
  );
}
```

* * *

A `ColorWheel` can be disabled using the `isDisabled` prop. This prevents the thumb from being focused or dragged. It's up to you to style your color wheel to appear disabled accordingly.

```
<MyColorWheel defaultValue="hsl(80, 100%, 50%)" isDisabled />
```

```
<MyColorWheel
  defaultValue="hsl(80, 100%, 50%)"
  isDisabled
/>
```

```
<MyColorWheel
  defaultValue="hsl(80, 100%, 50%)"
  isDisabled
/>
```

Show CSS

```
.react-aria-ColorWheel {
  &[data-disabled] {
    .react-aria-ColorWheelTrack {
      background: gray !important;
    }

    .react-aria-ColorThumb {
      background: gray !important;
      opacity: 0.5;
    }
  }
}
```

```
.react-aria-ColorWheel {
  &[data-disabled] {
    .react-aria-ColorWheelTrack {
      background: gray !important;
    }

    .react-aria-ColorThumb {
      background: gray !important;
      opacity: 0.5;
    }
  }
}
```

```
.react-aria-ColorWheel {
  &[data-disabled] {
    .react-aria-ColorWheelTrack {
      background: gray !important;
    }

    .react-aria-ColorThumb {
      background: gray !important;
      opacity: 0.5;
    }
  }
}
```

* * *

By default, a localized string for the "hue" channel name is used as the `aria-label` for the ColorWheel. If you wish to override this with a more specific label, an `aria-label` or `aria-labelledby` prop may be passed to further identify the element to assistive technologies.

For example, for a ColorArea that adjusts a background color you might pass the `aria-label` prop, "Background color". If you provide your own `aria-label` or `aria-labelledby`, be sure to localize the string appropriately.

```
<div style={{ display: 'flex', gap: 8, alignItems: 'end', flexWrap: 'wrap' }}>
  <MyColorWheel
    aria-label="Background color"    defaultValue="hsl(0, 100%, 50%)"
  />
  <div>
    <label id="hsl-aria-labelledby-id">Background color</label>    <MyColorWheel
      aria-labelledby="hsl-aria-labelledby-id"      defaultValue="hsl(0, 100%, 50%)"
    />
  </div>
</div>
```

```
<div
  style={{
    display: 'flex',
    gap: 8,
    alignItems: 'end',
    flexWrap: 'wrap'
  }}
>
  <MyColorWheel
    aria-label="Background color"    defaultValue="hsl(0, 100%, 50%)"
  />
  <div>
    <label id="hsl-aria-labelledby-id">
      Background color
    </label>    <MyColorWheel
      aria-labelledby="hsl-aria-labelledby-id"      defaultValue="hsl(0, 100%, 50%)"
    />
  </div>
</div>
```

```
<div
  style={{
    display: 'flex',
    gap: 8,
    alignItems: 'end',
    flexWrap: 'wrap'
  }}
>
  <MyColorWheel
    aria-label="Background color"    defaultValue="hsl(0, 100%, 50%)"
  />
  <div>
    <label id="hsl-aria-labelledby-id">
      Background color
    </label>    <MyColorWheel
      aria-labelledby="hsl-aria-labelledby-id"      defaultValue="hsl(0, 100%, 50%)"
    />
  </div>
</div>
```

The `aria-valuetext` of the `<input>` element is formatted according to the user's locale automatically. It also includes a localized description of the selected color hue (e.g. "cyan blue").

* * *

Name

Type

Default

Description

`outerRadius`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)`

—

The outer radius of the color wheel.

`innerRadius`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)`

—

The inner radius of the color wheel.

`isDisabled`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the ColorWheel is disabled.

`defaultValue`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) | [Color](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/color/src/index.d.ts:Color)`

`'hsl(0, 100%, 50%)'`

The default value (uncontrolled).

`value`

`T`

—

The current value (controlled).

`name`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

The name of the input element, used when submitting an HTML form. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname).

`form`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

The `<form>` element to associate the input with. The value of this attribute must be the id of a `<form>` in the same document. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#form).

`children`

`[ChildrenOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ChildrenOrFunction)<[ColorWheelRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/ColorWheel.tsx:ColorWheelRenderProps)>`

—

The children of the component. A function may be provided to alter the children based on component state.

`className`

`[ClassNameOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ClassNameOrFunction)<[ColorWheelRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/ColorWheel.tsx:ColorWheelRenderProps)>`

—

The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.

`style`

`[StyleOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:StyleOrFunction)<[ColorWheelRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/ColorWheel.tsx:ColorWheelRenderProps)>`

—

The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.

Events

Name

Type

Description

`onChange`

`( (value: [Color](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/color/src/index.d.ts:Color) )) => void`

Handler that is called when the value changes, as the user drags.

`onChangeEnd`

`( (value: [Color](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/color/src/index.d.ts:Color) )) => void`

Handler that is called when the user stops dragging.

Layout

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

The `<ColorWheelTrack>` component renders a circular gradient representing the colors that can be selected for the color channel.

Show props

Name

Type

Description

`className`

`[ClassNameOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ClassNameOrFunction)<[ColorWheelTrackRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/ColorWheel.tsx:ColorWheelTrackRenderProps)>`

The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.

`style`

`[StyleOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:StyleOrFunction)<[ColorWheelTrackRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/ColorWheel.tsx:ColorWheelTrackRenderProps)>`

The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.

EventsPositioning

The `<ColorThumb>` component renders a draggable thumb with a preview of the selected color.

Show props

Name

Type

Description

`children`

`[ChildrenOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ChildrenOrFunction)<[ColorThumbRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/ColorThumb.tsx:ColorThumbRenderProps)>`

The children of the component. A function may be provided to alter the children based on component state.

`className`

`[ClassNameOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ClassNameOrFunction)<[ColorThumbRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/ColorThumb.tsx:ColorThumbRenderProps)>`

The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.

`style`

`[StyleOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:StyleOrFunction)<[ColorThumbRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/ColorThumb.tsx:ColorThumbRenderProps)>`

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

Positioning

* * *

React Aria components can be styled in many ways, including using CSS classes, inline styles, utility classes (e.g. Tailwind), CSS-in-JS (e.g. Styled Components), etc. By default, all components include a builtin `className` attribute which can be targeted using CSS selectors. These follow the `react-aria-ComponentName` naming convention.

```
.react-aria-ColorWheel {
  /* ... */
}
```

```
.react-aria-ColorWheel {
  /* ... */
}
```

```
.react-aria-ColorWheel {
  /* ... */
}
```

A custom `className` can also be specified on any component. This overrides the default `className` provided by React Aria with your own.

```
<ColorWheel className="my-color-wheel">
  {/* ... */}
</ColorWheel>
```

```
<ColorWheel className="my-color-wheel">
  {/* ... */}
</ColorWheel>
```

```
<ColorWheel className="my-color-wheel">
  {/* ... */}
</ColorWheel>
```

In addition, some components support multiple UI states (e.g. focused, placeholder, readonly, etc.). React Aria components expose states using data attributes, which you can target in CSS selectors. For example:

```
.react-aria-ColorThumb[data-dragging] {
  /* ... */
}

.react-aria-ColorThumb[data-focused] {
  /* ... */
}
```

```
.react-aria-ColorThumb[data-dragging] {
  /* ... */
}

.react-aria-ColorThumb[data-focused] {
  /* ... */
}
```

```
.react-aria-ColorThumb[data-dragging] {
  /* ... */
}

.react-aria-ColorThumb[data-focused] {
  /* ... */
}
```

The `className` and `style` props also accept functions which receive states for styling. This lets you dynamically determine the classes or styles to apply, which is useful when using utility CSS libraries like [Tailwind](https://tailwindcss.com/).

```
<ColorThumb
  className={({ isDragging }) => isDragging ? 'scale-150' : 'scale-100'}
/>
```

```
<ColorThumb
  className={({ isDragging }) =>
    isDragging ? 'scale-150' : 'scale-100'}
/>
```

```
<ColorThumb
  className={(
    { isDragging }
  ) =>
    isDragging
      ? 'scale-150'
      : 'scale-100'}
/>
```

The states, selectors, and render props for each component used in a `ColorWheel` are documented below.

The `ColorWheel` component can be targeted with the `.react-aria-ColorWheel` CSS selector, or by overriding with a custom `className`. It supports the following states:

Name

CSS Selector

Description

`isDisabled`

`[data-disabled]`

Whether the color wheel is disabled.

`state`

`—`

State of the color wheel.

The `ColorWheelTrack` component can be targeted with the `.react-aria-ColorWheelTrack` CSS selector, or by overriding with a custom `className`. It supports the following states:

Name

CSS Selector

Description

`isDisabled`

`[data-disabled]`

Whether the color wheel is disabled.

`state`

`—`

State of the color wheel.

The `ColorThumb` component can be targeted with the `.react-aria-ColorThumb` CSS selector, or by overriding with a custom `className`. It supports the following states:

Name

CSS Selector

Description

`color`

`—`

The selected color, excluding the alpha channel.

`isDragging`

`[data-dragging]`

Whether this thumb is currently being dragged.

`isHovered`

`[data-hovered]`

Whether the thumb is currently hovered with a mouse.

`isFocused`

`[data-focused]`

Whether the thumb is currently focused.

`isFocusVisible`

`[data-focus-visible]`

Whether the thumb is keyboard focused.

`isDisabled`

`[data-disabled]`

Whether the thumb is disabled.

* * *

All React Aria Components export a corresponding context that can be used to send props to them from a parent element. This enables you to build your own compositional APIs similar to those found in React Aria Components itself. You can send any prop or ref via context that you could pass to the corresponding component. The local props and ref on the component are merged with the ones passed via context, with the local props taking precedence (following the rules documented in [mergeProps](https://react-spectrum.adobe.com/react-aria/mergeProps.html)).

Component

Context

Props

Ref

`ColorWheel`

`ColorWheelContext`

`[ColorWheelProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/ColorWheel.tsx:ColorWheelProps)`

`[HTMLDivElement](https://developer.mozilla.org/docs/Web/API/HTMLDivElement)`

This example shows a `ColorWheelDescription` component that accepts a color wheel in its children and renders a description element below it. It uses the [useId](https://react-spectrum.adobe.com/react-aria/useId.html) hook to generate a unique id for the description, and associates it with the color wheel via the `aria-describedby` attribute passed to the `ColorWheelContext` provider.

```
import {ColorWheelContext} from 'react-aria-components';
import {useId} from 'react-aria';

interface ColorWheelDescriptionProps {
  children?: React.ReactNode;
  description?: string;
}

function ColorWheelDescription(
  { children, description }: ColorWheelDescriptionProps
) {
  let descriptionId = useId();
  return (
    <div>
      <ColorWheelContext.Provider value={{ 'aria-describedby': descriptionId }}>        {children}
      </ColorWheelContext.Provider>
      <small id={descriptionId}>{description}</small>
    </div>
  );
}

<ColorWheelDescription description="Choose a background color for your profile.">
  <MyColorWheel />
</ColorWheelDescription>
```

```
import {ColorWheelContext} from 'react-aria-components';
import {useId} from 'react-aria';

interface ColorWheelDescriptionProps {
  children?: React.ReactNode;
  description?: string;
}

function ColorWheelDescription(
  { children, description }: ColorWheelDescriptionProps
) {
  let descriptionId = useId();
  return (
    <div>
      <ColorWheelContext.Provider
        value={{ 'aria-describedby': descriptionId }}
      >        {children}
      </ColorWheelContext.Provider>
      <small id={descriptionId}>{description}</small>
    </div>
  );
}

<ColorWheelDescription description="Choose a background color for your profile.">
  <MyColorWheel />
</ColorWheelDescription>
```

```
import {ColorWheelContext} from 'react-aria-components';
import {useId} from 'react-aria';

interface ColorWheelDescriptionProps {
  children?:
    React.ReactNode;
  description?: string;
}

function ColorWheelDescription(
  {
    children,
    description
  }: ColorWheelDescriptionProps
) {
  let descriptionId =
    useId();
  return (
    <div>
      <ColorWheelContext.Provider
        value={{
          'aria-describedby':
            descriptionId
        }}
      >        {children}
      </ColorWheelContext.Provider>
      <small
        id={descriptionId}
      >
        {description}
      </small>
    </div>
  );
}

<ColorWheelDescription description="Choose a background color for your profile.">
  <MyColorWheel />
</ColorWheelDescription>
```

ColorWheel provides a `[ColorWheelState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/color/src/useColorWheelState.ts:ColorWheelState)` object to its children via `ColorWheelStateContext`. This can be used to access and manipulate the color wheel's state.

This example shows a `HueField` component that can be placed within a `ColorWheel` to allow the user to enter a number and update the hue.

```
import {ColorWheelStateContext, Input, NumberField, useLocale} from 'react-aria-components';

function HueField() {
  let state = React.useContext(ColorWheelStateContext)!;  let { locale } = useLocale();
  return (
    <NumberField
      aria-label={state.value.getChannelName('hue', locale)}
      value={state.value.getChannelValue('hue')}
      onChange={(v) => state.setValue(state.value.withChannelValue('hue', v))}
      formatOptions={state.value.getChannelFormatOptions('hue')}
    >
      <Input />
    </NumberField>
  );
}

<ColorWheel outerRadius={100} innerRadius={74}>
  <ColorWheelTrack />
  <ColorThumb />
  <HueField /></ColorWheel>
```

```
import {
  ColorWheelStateContext,
  Input,
  NumberField,
  useLocale
} from 'react-aria-components';

function HueField() {
  let state = React.useContext(ColorWheelStateContext)!;  let { locale } = useLocale();
  return (
    <NumberField
      aria-label={state.value.getChannelName('hue', locale)}
      value={state.value.getChannelValue('hue')}
      onChange={(v) =>
        state.setValue(
          state.value.withChannelValue('hue', v)
        )}
      formatOptions={state.value.getChannelFormatOptions(
        'hue'
      )}
    >
      <Input />
    </NumberField>
  );
}

<ColorWheel outerRadius={100} innerRadius={74}>
  <ColorWheelTrack />
  <ColorThumb />
  <HueField /></ColorWheel>
```

```
import {
  ColorWheelStateContext,
  Input,
  NumberField,
  useLocale
} from 'react-aria-components';

function HueField() {
  let state = React
    .useContext(
      ColorWheelStateContext
    )!;  let { locale } =
    useLocale();
  return (
    <NumberField
      aria-label={state
        .value
        .getChannelName(
          'hue',
          locale
        )}
      value={state.value
        .getChannelValue(
          'hue'
        )}
      onChange={(v) =>
        state.setValue(
          state.value
            .withChannelValue(
              'hue',
              v
            )
        )}
      formatOptions={state
        .value
        .getChannelFormatOptions(
          'hue'
        )}
    >
      <Input />
    </NumberField>
  );
}

<ColorWheel
  outerRadius={100}
  innerRadius={74}
>
  <ColorWheelTrack />
  <ColorThumb />
  <HueField /></ColorWheel>
```

Show CSS

```
.react-aria-Input {
  width: 4ch;
}
```

```
.react-aria-Input {
  width: 4ch;
}
```

```
.react-aria-Input {
  width: 4ch;
}
```

If you need to customize things even further, such as accessing internal state or customizing DOM structure, you can drop down to the lower level Hook-based API. See [useColorWheel](https://react-spectrum.adobe.com/react-aria/useColorWheel.html) for more details.