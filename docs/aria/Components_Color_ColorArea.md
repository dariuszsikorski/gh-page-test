# ColorArea

**Source**: [https://react-spectrum.adobe.com/react-aria/ColorArea.html](https://react-spectrum.adobe.com/react-aria/ColorArea.html)

> Documentation for ColorArea in the React Aria package.

---

A color area allows users to adjust two channels of an RGB, HSL or HSB color value against a two-dimensional gradient background.

* * *

```
import {ColorArea, ColorThumb} from 'react-aria-components';

<ColorArea>
  <ColorThumb />
</ColorArea>
```

```
import {ColorArea, ColorThumb} from 'react-aria-components';

<ColorArea>
  <ColorThumb />
</ColorArea>
```

```
import {
  ColorArea,
  ColorThumb
} from 'react-aria-components';

<ColorArea>
  <ColorThumb />
</ColorArea>
```

Show CSS

```
.react-aria-ColorArea {
  width: 192px;
  height: 192px;
  border-radius: 4px;
  flex-shrink: 0;
}

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
.react-aria-ColorArea {
  width: 192px;
  height: 192px;
  border-radius: 4px;
  flex-shrink: 0;
}

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
.react-aria-ColorArea {
  width: 192px;
  height: 192px;
  border-radius: 4px;
  flex-shrink: 0;
}

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

The [<input type="color">](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color) HTML element can be used to build a color picker, however it is very inconsistent across browsers and operating systems and consists of a complete color picker rather than a color area. `ColorArea` helps achieve accessible and touch-friendly color areas that can be styled as needed.

-   **Customizable** – Support for adjusting two-channel values of an HSL, HSB or RGB color value.
-   **High quality interactions** – Mouse, touch, and keyboard input is supported via the [useMove](https://react-spectrum.adobe.com/react-aria/useMove.html) hook. Pressing the color area moves the thumb to that position. Text selection and touch scrolling are prevented while dragging.
-   **Accessible** – Announces localized color descriptions for screen reader users (e.g. "dark vibrant blue"). Uses two visually hidden `<input>` elements for mobile screen reader support and HTML form integration.

* * *

Shows a color area component with labels pointing to its parts, including the area, and thumb elements.AreaThumb

A color area consists of a rectangular background area that provides, using a two-dimensional gradient, a visual representation of the range of color values from which a user can select, and a thumb that the user can drag to change the selected color value. Two visually hidden `<input>` elements are used to represent the color channel values to assistive technologies.

```
import {ColorArea, ColorThumb} from 'react-aria-components';

<ColorArea>
  <ColorThumb />
</ColorArea>
```

```
import {ColorArea, ColorThumb} from 'react-aria-components';

<ColorArea>
  <ColorThumb />
</ColorArea>
```

```
import {
  ColorArea,
  ColorThumb
} from 'react-aria-components';

<ColorArea>
  <ColorThumb />
</ColorArea>
```

* * *

To help kick-start your project, we offer starter kits that include example implementations of all React Aria components with various styling solutions. All components are fully styled, including support for dark mode, high contrast mode, and all UI states. Each starter comes with a pre-configured [Storybook](https://storybook.js.org/) that you can experiment with, or use as a starting point for your own component library.

* * *

If you will use a ColorArea in multiple places in your app, you can wrap all of the pieces into a reusable component. This way, the DOM structure, styling code, and other logic are defined in a single place and reused everywhere to ensure consistency.

```
import type {ColorAreaProps} from 'react-aria-components';

export function MyColorArea(props: ColorAreaProps) {
  return (
    <ColorArea {...props}>
      <ColorThumb />
    </ColorArea>
  );
}

<MyColorArea defaultValue="hsl(30, 100%, 50%)" />
```

```
import type {ColorAreaProps} from 'react-aria-components';

export function MyColorArea(props: ColorAreaProps) {
  return (
    <ColorArea {...props}>
      <ColorThumb />
    </ColorArea>
  );
}

<MyColorArea defaultValue="hsl(30, 100%, 50%)" />
```

```
import type {ColorAreaProps} from 'react-aria-components';

export function MyColorArea(
  props: ColorAreaProps
) {
  return (
    <ColorArea
      {...props}
    >
      <ColorThumb />
    </ColorArea>
  );
}

<MyColorArea defaultValue="hsl(30, 100%, 50%)" />
```

* * *

A ColorArea requires either an uncontrolled default value or a controlled value, provided using the `defaultValue` or `value` props respectively. The value provided to either of these props should be a color string or `[Color](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/color/src/index.d.ts:Color)` object. `xChannel` and `yChannel` props may also be provided to specify which color channels the color area should display, and the direction of each channel in the color gradient. This must be one of the channels included in the color value, for example, for RGB colors, the "red", "green", and "blue" channels are available. For a full list of supported channels, see the [Props](#props) table below.

By default, color area is uncontrolled, with a default value of white using the RGB color space (`rgb(255, 255, 255)`). You can change the default value using the `defaultValue` prop, and the color area will use the color space of the provided value.

```
<MyColorArea defaultValue="hsb(219, 58%, 93%)" />
```

```
<MyColorArea defaultValue="hsb(219, 58%, 93%)" />
```

```
<MyColorArea defaultValue="hsb(219, 58%, 93%)" />
```

If no `xChannel` or `yChannel` is provided, for the RGB color space, the `red` color channel maps to the horizontal axis or `xChannel`, and the `green` color channel maps to the vertical axis or `yChannel`. Similarly, for the HSL and HSB color spaces, the `hue` color channel maps to the horizontal axis or `xChannel`, and the `saturation` color channel maps to the vertical axis or `yChannel`.

In the example below, the `[parseColor](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/color/src/Color.ts:parseColor)` function is used to parse the initial color from an HSL string. This is passed to the `value` prop to make the `ColorArea` controlled, and updated in the `onChange` event.

```
import {parseColor} from 'react-aria-components';

function Example() {
  let [value, setValue] = React.useState(parseColor('hsl(0, 100%, 50%)'));
  return (
    <>
      <MyColorArea
        value={value}
        onChange={setValue}
        xChannel="saturation"
        yChannel="lightness" />
      <p>Value: {value.toString('hex')}</p>
    </>
  );
}
```

```
import {parseColor} from 'react-aria-components';

function Example() {
  let [value, setValue] = React.useState(
    parseColor('hsl(0, 100%, 50%)')
  );
  return (
    <>
      <MyColorArea
        value={value}
        onChange={setValue}
        xChannel="saturation"
        yChannel="lightness"
      />
      <p>Value: {value.toString('hex')}</p>
    </>
  );
}
```

```
import {parseColor} from 'react-aria-components';

function Example() {
  let [value, setValue] =
    React.useState(
      parseColor(
        'hsl(0, 100%, 50%)'
      )
    );
  return (
    <>
      <MyColorArea
        value={value}
        onChange={setValue}
        xChannel="saturation"
        yChannel="lightness"
      />
      <p>
        Value:{' '}
        {value.toString(
          'hex'
        )}
      </p>
    </>
  );
}
```

ColorArea supports the `xName` and `yName` props for integration with HTML forms. The values will be submitted as numbers between the minimum and maximum value for the corresponding channel in the X and Y direction.

```
<MyColorArea xName="red" yName="green" />
```

```
<MyColorArea xName="red" yName="green" />
```

```
<MyColorArea
  xName="red"
  yName="green"
/>
```

* * *

ColorArea supports two events: `onChange` and `onChangeEnd`. `onChange` is triggered whenever the ColorArea's handle is dragged, and `onChangeEnd` is triggered when the user stops dragging the handle. Both events receive a `[Color](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/color/src/index.d.ts:Color)` object as a parameter.

The example below uses `onChange` and `onChangeEnd` to update two separate elements with the ColorArea's value.

```
function Example() {
  let [currentValue, setCurrentValue] = React.useState(
    parseColor('hsl(50, 100%, 50%)')
  );
  let [finalValue, setFinalValue] = React.useState(currentValue);

  return (
    <div>
      <MyColorArea
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
      <MyColorArea
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
      <MyColorArea
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

To build a fully functional color picker, combine a ColorArea, which adjusts two channels of a color value, with a separate control, like a [ColorSlider](https://react-spectrum.adobe.com/react-aria/ColorSlider.html) or [ColorWheel](https://react-spectrum.adobe.com/react-aria/ColorWheel.html), to adjust the value of the third channel.

```
import {ColorSlider, Label, SliderOutput, SliderTrack} from 'react-aria-components';

function Example() {
  let [color, setColor] = React.useState(parseColor('hsl(50, 100%, 50%)'));

  return (
    <div>
      <MyColorArea
        value={color}
        onChange={setColor}
        xChannel="saturation"
        yChannel="lightness"
      />
      <ColorSlider
        channel="hue"
        value={color}
        onChange={setColor}
        style={{ width: 192, marginTop: 8 }}
      >
        <Label />
        <SliderOutput />
        <SliderTrack>
          <ColorThumb />
        </SliderTrack>
      </ColorSlider>
      <p>Current value: {color.toString('hsl')}</p>
    </div>
  );
}
```

```
import {
  ColorSlider,
  Label,
  SliderOutput,
  SliderTrack
} from 'react-aria-components';

function Example() {
  let [color, setColor] = React.useState(
    parseColor('hsl(50, 100%, 50%)')
  );

  return (
    <div>
      <MyColorArea
        value={color}
        onChange={setColor}
        xChannel="saturation"
        yChannel="lightness"
      />
      <ColorSlider
        channel="hue"
        value={color}
        onChange={setColor}
        style={{ width: 192, marginTop: 8 }}
      >
        <Label />
        <SliderOutput />
        <SliderTrack>
          <ColorThumb />
        </SliderTrack>
      </ColorSlider>
      <p>Current value: {color.toString('hsl')}</p>
    </div>
  );
}
```

```
import {
  ColorSlider,
  Label,
  SliderOutput,
  SliderTrack
} from 'react-aria-components';

function Example() {
  let [color, setColor] =
    React.useState(
      parseColor(
        'hsl(50, 100%, 50%)'
      )
    );

  return (
    <div>
      <MyColorArea
        value={color}
        onChange={setColor}
        xChannel="saturation"
        yChannel="lightness"
      />
      <ColorSlider
        channel="hue"
        value={color}
        onChange={setColor}
        style={{
          width: 192,
          marginTop: 8
        }}
      >
        <Label />
        <SliderOutput />
        <SliderTrack>
          <ColorThumb />
        </SliderTrack>
      </ColorSlider>
      <p>
        Current value:
        {' '}
        {color.toString(
          'hsl'
        )}
      </p>
    </div>
  );
}
```

* * *

A color area can be disabled using the `isDisabled` prop. This prevents the thumb from being focused or dragged. It's up to you to style your color area to appear disabled accordingly.

```
<MyColorArea defaultValue="#ff0" isDisabled />
```

```
<MyColorArea defaultValue="#ff0" isDisabled />
```

```
<MyColorArea
  defaultValue="#ff0"
  isDisabled
/>
```

Show CSS

```
.react-aria-ColorArea {
  &[data-disabled] {
    background: gray !important;

    .react-aria-ColorThumb {
      background: gray !important;
    }
  }
}
```

```
.react-aria-ColorArea {
  &[data-disabled] {
    background: gray !important;

    .react-aria-ColorThumb {
      background: gray !important;
    }
  }
}
```

```
.react-aria-ColorArea {
  &[data-disabled] {
    background: gray !important;

    .react-aria-ColorThumb {
      background: gray !important;
    }
  }
}
```

* * *

By default, ColorArea provides an `aria-label` for the localized string "Color Picker", which labels the visually hidden `<input>` elements for the two color channels. If you wish to override this with a more specific label, an `aria-label` or `aria-labelledby` prop may be passed to further identify the element to assistive technologies.

For example, for a ColorArea that adjusts a background color you might pass the `aria-label` prop, "Background color". If you provide your own `aria-label` or `aria-labelledby`, be sure to localize the string appropriately.

```
<div style={{ display: 'flex', gap: 8, alignItems: 'end', flexWrap: 'wrap' }}>
  <MyColorArea
    aria-label="Background color"    defaultValue="hsl(0, 100%, 50%)"
    xChannel="saturation"
    yChannel="lightness"
  />
  <div>
    <label id="hsl-aria-labelledby-id">Background color</label>    <MyColorArea
      aria-labelledby="hsl-aria-labelledby-id"      defaultValue="hsl(0, 100%, 50%)"
      xChannel="saturation"
      yChannel="lightness"
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
  <MyColorArea
    aria-label="Background color"    defaultValue="hsl(0, 100%, 50%)"
    xChannel="saturation"
    yChannel="lightness"
  />
  <div>
    <label id="hsl-aria-labelledby-id">
      Background color
    </label>    <MyColorArea
      aria-labelledby="hsl-aria-labelledby-id"      defaultValue="hsl(0, 100%, 50%)"
      xChannel="saturation"
      yChannel="lightness"
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
  <MyColorArea
    aria-label="Background color"    defaultValue="hsl(0, 100%, 50%)"
    xChannel="saturation"
    yChannel="lightness"
  />
  <div>
    <label id="hsl-aria-labelledby-id">
      Background color
    </label>    <MyColorArea
      aria-labelledby="hsl-aria-labelledby-id"      defaultValue="hsl(0, 100%, 50%)"
      xChannel="saturation"
      yChannel="lightness"
    />
  </div>
</div>
```

In order to communicate to a screen reader user that the ColorArea adjusts in two dimensions, ColorArea provides an `aria-roledescription`, using the localized string "2D Slider", on each of the visually hidden `<input>` elements.

The `aria-valuetext` of each `<input>` element within the ColorArea is formatted according to the user's locale automatically. It will include the localized color channel name and current value for each channel, along with a localized description of the selected color (e.g. "dark vibrant blue").

In right-to-left languages, color areas should be mirrored. Orientation of the gradient background, positioning of the thumb, and dragging behavior is automatically mirrored by `ColorArea`.

* * *

Name

Type

Description

`xName`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

The name of the x channel input element, used when submitting an HTML form. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname).

`yName`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

The name of the y channel input element, used when submitting an HTML form. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname).

`form`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

The `<form>` element to associate the ColorArea with. The value of this attribute must be the id of a `<form>` in the same document. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#form).

`colorSpace`

`[ColorSpace](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/color/src/index.d.ts:ColorSpace)`

The color space that the color area operates in. The `xChannel` and `yChannel` must be in this color space. If not provided, this defaults to the color space of the `color` or `defaultColor` value.

`xChannel`

`[ColorChannel](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/color/src/index.d.ts:ColorChannel)`

Color channel for the horizontal axis.

`yChannel`

`[ColorChannel](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/color/src/index.d.ts:ColorChannel)`

Color channel for the vertical axis.

`isDisabled`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether the ColorArea is disabled.

`value`

`T`

The current value (controlled).

`defaultValue`

`T`

The default value (uncontrolled).

`children`

`[ChildrenOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ChildrenOrFunction)<[ColorAreaRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/ColorArea.tsx:ColorAreaRenderProps)>`

The children of the component. A function may be provided to alter the children based on component state.

`className`

`[ClassNameOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ClassNameOrFunction)<[ColorAreaRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/ColorArea.tsx:ColorAreaRenderProps)>`

The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.

`style`

`[StyleOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:StyleOrFunction)<[ColorAreaRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/ColorArea.tsx:ColorAreaRenderProps)>`

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
.react-aria-ColorArea {
  /* ... */
}
```

```
.react-aria-ColorArea {
  /* ... */
}
```

```
.react-aria-ColorArea {
  /* ... */
}
```

A custom `className` can also be specified on any component. This overrides the default `className` provided by React Aria with your own.

```
<ColorArea className="my-color-area">
  {/* ... */}
</ColorArea>
```

```
<ColorArea className="my-color-area">
  {/* ... */}
</ColorArea>
```

```
<ColorArea className="my-color-area">
  {/* ... */}
</ColorArea>
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

The states, selectors, and render props for each component used in a `ColorArea` are documented below.

The `ColorArea` component can be targeted with the `.react-aria-ColorArea` CSS selector, or by overriding with a custom `className`. It supports the following states:

Name

CSS Selector

Description

`isDisabled`

`[data-disabled]`

Whether the color area is disabled.

`state`

`—`

State of the color area.

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

`ColorArea`

`ColorAreaContext`

`[ColorAreaProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/ColorArea.tsx:ColorAreaProps)`

`[HTMLDivElement](https://developer.mozilla.org/docs/Web/API/HTMLDivElement)`

This example shows a `ColorAreaDescription` component that accepts a color wheel in its children and renders a description element below it. It uses the [useId](https://react-spectrum.adobe.com/react-aria/useId.html) hook to generate a unique id for the description, and associates it with the color wheel via the `aria-describedby` attribute passed to the `ColorAreaContext` provider.

```
import {ColorAreaContext} from 'react-aria-components';
import {useId} from 'react-aria';

interface ColorAreaDescriptionProps {
  children?: React.ReactNode;
  description?: string;
}

function ColorAreaDescription(
  { children, description }: ColorAreaDescriptionProps
) {
  let descriptionId = useId();
  return (
    <div>
      <ColorAreaContext.Provider value={{ 'aria-describedby': descriptionId }}>        {children}
      </ColorAreaContext.Provider>
      <small id={descriptionId}>{description}</small>
    </div>
  );
}

<ColorAreaDescription description="Choose a background color for your profile.">
  <MyColorArea />
</ColorAreaDescription>
```

```
import {ColorAreaContext} from 'react-aria-components';
import {useId} from 'react-aria';

interface ColorAreaDescriptionProps {
  children?: React.ReactNode;
  description?: string;
}

function ColorAreaDescription(
  { children, description }: ColorAreaDescriptionProps
) {
  let descriptionId = useId();
  return (
    <div>
      <ColorAreaContext.Provider
        value={{ 'aria-describedby': descriptionId }}
      >        {children}
      </ColorAreaContext.Provider>
      <small id={descriptionId}>{description}</small>
    </div>
  );
}

<ColorAreaDescription description="Choose a background color for your profile.">
  <MyColorArea />
</ColorAreaDescription>
```

```
import {ColorAreaContext} from 'react-aria-components';
import {useId} from 'react-aria';

interface ColorAreaDescriptionProps {
  children?:
    React.ReactNode;
  description?: string;
}

function ColorAreaDescription(
  {
    children,
    description
  }: ColorAreaDescriptionProps
) {
  let descriptionId =
    useId();
  return (
    <div>
      <ColorAreaContext.Provider
        value={{
          'aria-describedby':
            descriptionId
        }}
      >        {children}
      </ColorAreaContext.Provider>
      <small
        id={descriptionId}
      >
        {description}
      </small>
    </div>
  );
}

<ColorAreaDescription description="Choose a background color for your profile.">
  <MyColorArea />
</ColorAreaDescription>
```

ColorArea provides a `[ColorAreaState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/color/src/useColorAreaState.ts:ColorAreaState)` object to its children via `ColorAreaStateContext`. This can be used to access and manipulate the color area's state.

If you need to customize things even further, such as accessing internal state or customizing DOM structure, you can drop down to the lower level Hook-based API. See [useColorArea](https://react-spectrum.adobe.com/react-aria/useColorArea.html) for more details.