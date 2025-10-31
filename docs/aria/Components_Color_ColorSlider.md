# ColorSlider

**Source**: [https://react-spectrum.adobe.com/react-aria/ColorSlider.html](https://react-spectrum.adobe.com/react-aria/ColorSlider.html)

> Documentation for ColorSlider in the React Aria package.

---

A color slider allows users to adjust an individual channel of a color value.

* * *

```
import {ColorSlider, ColorThumb, Label, SliderOutput, SliderTrack} from 'react-aria-components';

<ColorSlider channel="hue" defaultValue="hsl(0, 100%, 50%)">
  <Label />
  <SliderOutput />
  <SliderTrack>
    <ColorThumb />
  </SliderTrack>
</ColorSlider>
```

```
import {
  ColorSlider,
  ColorThumb,
  Label,
  SliderOutput,
  SliderTrack
} from 'react-aria-components';

<ColorSlider
  channel="hue"
  defaultValue="hsl(0, 100%, 50%)"
>
  <Label />
  <SliderOutput />
  <SliderTrack>
    <ColorThumb />
  </SliderTrack>
</ColorSlider>
```

```
import {
  ColorSlider,
  ColorThumb,
  Label,
  SliderOutput,
  SliderTrack
} from 'react-aria-components';

<ColorSlider
  channel="hue"
  defaultValue="hsl(0, 100%, 50%)"
>
  <Label />
  <SliderOutput />
  <SliderTrack>
    <ColorThumb />
  </SliderTrack>
</ColorSlider>
```

Show CSS

```
.react-aria-ColorSlider {
  display: grid;
  grid-template-areas: "label output"
                       "track track";
  grid-template-columns: 1fr auto;
  gap: 4px;
  width: 100%;
  max-width: 300px;

  .react-aria-Label {
    grid-area: label;
    color: var(--text-color);
  }

  .react-aria-SliderOutput {
    grid-area: output;
    width: 4ch;
    text-align: end;
    color: var(--text-color);
  }

  .react-aria-SliderTrack {
    grid-area: track;
    border-radius: 4px;
  }

  &[data-orientation=horizontal] {
    .react-aria-SliderTrack {
      height: 28px;
    }

    .react-aria-ColorThumb {
      top: 50%;
    }
  }
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
.react-aria-ColorSlider {
  display: grid;
  grid-template-areas: "label output"
                       "track track";
  grid-template-columns: 1fr auto;
  gap: 4px;
  width: 100%;
  max-width: 300px;

  .react-aria-Label {
    grid-area: label;
    color: var(--text-color);
  }

  .react-aria-SliderOutput {
    grid-area: output;
    width: 4ch;
    text-align: end;
    color: var(--text-color);
  }

  .react-aria-SliderTrack {
    grid-area: track;
    border-radius: 4px;
  }

  &[data-orientation=horizontal] {
    .react-aria-SliderTrack {
      height: 28px;
    }

    .react-aria-ColorThumb {
      top: 50%;
    }
  }
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
.react-aria-ColorSlider {
  display: grid;
  grid-template-areas: "label output"
                       "track track";
  grid-template-columns: 1fr auto;
  gap: 4px;
  width: 100%;
  max-width: 300px;

  .react-aria-Label {
    grid-area: label;
    color: var(--text-color);
  }

  .react-aria-SliderOutput {
    grid-area: output;
    width: 4ch;
    text-align: end;
    color: var(--text-color);
  }

  .react-aria-SliderTrack {
    grid-area: track;
    border-radius: 4px;
  }

  &[data-orientation=horizontal] {
    .react-aria-SliderTrack {
      height: 28px;
    }

    .react-aria-ColorThumb {
      top: 50%;
    }
  }
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

The [<input type="color">](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color) HTML element can be used to build a color picker, however it is very inconsistent across browsers and operating systems and consists of a complete color picker rather than a single color channel slider. `ColorSlider` helps achieve accessible and touch-friendly color sliders that can be styled as needed.

-   **Customizable** – Support for adjusting a single channel of RGBA, HSLA, and HSBA colors, in both horizontal and vertical orientations.
-   **High quality interactions** – Mouse, touch, and keyboard input is supported via the [useMove](https://react-spectrum.adobe.com/react-aria/useMove.html) hook. Pressing the track moves the thumb to that position. Text selection and touch scrolling are prevented while dragging.
-   **Accessible** – Announces localized color descriptions for screen reader users (e.g. "dark vibrant blue"). Uses a visually hidden `<input>` element for mobile screen reader support and HTML form integration.
-   **International** – Channel value is formatted according to the user's locale. The color slider automatically mirrors all interactions in right-to-left languages.

* * *

Shows a color slider component with labels pointing to its parts, including the track, thumb, label, and output elements.ThumbTrackOutputLabelLabelHue230°

A color slider consists of a track element and a thumb that the user can drag to change a single channel of a color value. It may also include optional label and `<output>` elements to display the color channel name and current numeric value, respectively. A visually hidden `<input>` element is used to represent the value to assistive technologies.

```
import {ColorSlider, ColorThumb, Label, SliderOutput, SliderTrack} from 'react-aria-components';

<ColorSlider>
  <Label />
  <SliderOutput />
  <SliderTrack>
    <ColorThumb />
  </SliderTrack>
</ColorSlider>
```

```
import {
  ColorSlider,
  ColorThumb,
  Label,
  SliderOutput,
  SliderTrack
} from 'react-aria-components';

<ColorSlider>
  <Label />
  <SliderOutput />
  <SliderTrack>
    <ColorThumb />
  </SliderTrack>
</ColorSlider>
```

```
import {
  ColorSlider,
  ColorThumb,
  Label,
  SliderOutput,
  SliderTrack
} from 'react-aria-components';

<ColorSlider>
  <Label />
  <SliderOutput />
  <SliderTrack>
    <ColorThumb />
  </SliderTrack>
</ColorSlider>
```

A `ColorSlider` uses the following components, which may also be used standalone or reused in other components.

[

Label

A label provides context for an input element.

](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label)

* * *

To help kick-start your project, we offer starter kits that include example implementations of all React Aria components with various styling solutions. All components are fully styled, including support for dark mode, high contrast mode, and all UI states. Each starter comes with a pre-configured [Storybook](https://storybook.js.org/) that you can experiment with, or use as a starting point for your own component library.

* * *

If you will use a ColorSlider in multiple places in your app, you can wrap all of the pieces into a reusable component. This way, the DOM structure, styling code, and other logic are defined in a single place and reused everywhere to ensure consistency.

This example wraps `ColorSlider` and all of its children together into a single component which accepts an optional `label` prop, which is passed to the right place. It also shows how to use the `defaultStyle` [render prop](https://react-spectrum.adobe.com/react-aria/styling.html#render-props) to add a checkerboard pattern behind partially transparent gradients.

```
import type {ColorSliderProps} from 'react-aria-components';

interface MyColorSliderProps extends ColorSliderProps {
  label?: string;
}

export function MyColorSlider({ label, ...props }: MyColorSliderProps) {
  return (
    <ColorSlider {...props}>
      <Label>{label}</Label>
      <SliderOutput />
      <SliderTrack
        style={({ defaultStyle }) => ({
          background: `${defaultStyle.background},
            repeating-conic-gradient(#CCC 0% 25%, white 0% 50%) 50% / 16px 16px`
        })}
      >
        <ColorThumb />
      </SliderTrack>
    </ColorSlider>
  );
}

<MyColorSlider label="Red Opacity" defaultValue="#f00" channel="alpha" />
```

```
import type {ColorSliderProps} from 'react-aria-components';

interface MyColorSliderProps extends ColorSliderProps {
  label?: string;
}

export function MyColorSlider(
  { label, ...props }: MyColorSliderProps
) {
  return (
    <ColorSlider {...props}>
      <Label>{label}</Label>
      <SliderOutput />
      <SliderTrack
        style={({ defaultStyle }) => ({
          background: `${defaultStyle.background},
            repeating-conic-gradient(#CCC 0% 25%, white 0% 50%) 50% / 16px 16px`
        })}
      >
        <ColorThumb />
      </SliderTrack>
    </ColorSlider>
  );
}

<MyColorSlider
  label="Red Opacity"
  defaultValue="#f00"
  channel="alpha"
/>
```

```
import type {ColorSliderProps} from 'react-aria-components';

interface MyColorSliderProps
  extends
    ColorSliderProps {
  label?: string;
}

export function MyColorSlider(
  { label, ...props }:
    MyColorSliderProps
) {
  return (
    <ColorSlider
      {...props}
    >
      <Label>
        {label}
      </Label>
      <SliderOutput />
      <SliderTrack
        style={(
          {
            defaultStyle
          }
        ) => ({
          background:
            `${defaultStyle.background},
            repeating-conic-gradient(#CCC 0% 25%, white 0% 50%) 50% / 16px 16px`
        })}
      >
        <ColorThumb />
      </SliderTrack>
    </ColorSlider>
  );
}

<MyColorSlider
  label="Red Opacity"
  defaultValue="#f00"
  channel="alpha"
/>
```

* * *

A ColorSlider requires either an uncontrolled default value or a controlled value, provided using the `defaultValue` or `value` props respectively. The value provided to either of these props should be a color string or `[Color](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/color/src/index.d.ts:Color)` object. The `channel` prop must also be provided to specify which color channel the slider should display. This must be one of the channels included in the color value, for example, for RGB colors, the "red", "green", and "blue" channels are available. For a full list of supported channels, see the [Props](#props) table below.

In the example below, the `[parseColor](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/color/src/Color.ts:parseColor)` function is used to parse the initial color from an HSL string. This is passed to the `value` prop to make the `ColorSlider` controlled, and updated in the `onChange` event.

```
import {parseColor} from 'react-aria-components';

function Example() {
  let [value, setValue] = React.useState(parseColor('hsl(0, 100%, 50%)'));
  return (
    <>
      <MyColorSlider
        label="Hue (controlled)"
        value={value}
        onChange={setValue}
        channel="hue" />
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
      <MyColorSlider
        label="Hue (controlled)"
        value={value}
        onChange={setValue}
        channel="hue"
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
      <MyColorSlider
        label="Hue (controlled)"
        value={value}
        onChange={setValue}
        channel="hue"
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

ColorSlider supports the `name` prop for integration with HTML forms. The value will be submitted as a number between the minimum and maximum value for the displayed channel.

```
<MyColorSlider
  defaultValue="#7f0000"
  channel="red"
  name="red" />
```

```
<MyColorSlider
  defaultValue="#7f0000"
  channel="red"
  name="red" />
```

```
<MyColorSlider
  defaultValue="#7f0000"
  channel="red"
  name="red" />
```

* * *

ColorSlider supports two events: `onChange` and `onChangeEnd`. `onChange` is triggered whenever the ColorSlider's handle is dragged, and `onChangeEnd` is triggered when the user stops dragging the handle. Both events receive a `[Color](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/color/src/index.d.ts:Color)` object as a parameter.

The example below uses `onChange` and `onChangeEnd` to update two separate elements with the ColorSlider's value.

```
function Example() {
  let [currentValue, setCurrentValue] = React.useState(
    parseColor('hsl(50, 100%, 50%)')
  );
  let [finalValue, setFinalValue] = React.useState(currentValue);

  return (
    <div>
      <MyColorSlider
        value={currentValue}
        channel="hue"
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
      <MyColorSlider
        value={currentValue}
        channel="hue"
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
      <MyColorSlider
        value={currentValue}
        channel="hue"
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

This example shows how you could build an RGBA color picker using four color sliders bound to the same color value in state. The `[parseColor](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/color/src/Color.ts:parseColor)` function is used to parse the initial color from a hex value, stored in state. The `value` and `onChange` props of ColorSlider are used to make the sliders controlled, so that they all update when the color is modified.

```
function Example() {
  let [color, setColor] = React.useState(parseColor('#ff00ff'));

  return (
    <>
      <MyColorSlider channel="red" value={color} onChange={setColor} />
      <MyColorSlider channel="green" value={color} onChange={setColor} />
      <MyColorSlider channel="blue" value={color} onChange={setColor} />
      <MyColorSlider channel="alpha" value={color} onChange={setColor} />
    </>
  );
}
```

```
function Example() {
  let [color, setColor] = React.useState(
    parseColor('#ff00ff')
  );

  return (
    <>
      <MyColorSlider
        channel="red"
        value={color}
        onChange={setColor}
      />
      <MyColorSlider
        channel="green"
        value={color}
        onChange={setColor}
      />
      <MyColorSlider
        channel="blue"
        value={color}
        onChange={setColor}
      />
      <MyColorSlider
        channel="alpha"
        value={color}
        onChange={setColor}
      />
    </>
  );
}
```

```
function Example() {
  let [color, setColor] =
    React.useState(
      parseColor(
        '#ff00ff'
      )
    );

  return (
    <>
      <MyColorSlider
        channel="red"
        value={color}
        onChange={setColor}
      />
      <MyColorSlider
        channel="green"
        value={color}
        onChange={setColor}
      />
      <MyColorSlider
        channel="blue"
        value={color}
        onChange={setColor}
      />
      <MyColorSlider
        channel="alpha"
        value={color}
        onChange={setColor}
      />
    </>
  );
}
```

This example shows how to build a similar color picker to the one above, using HSLA colors instead.

```
function Example() {
  let [color, setColor] = React.useState(parseColor('hsla(0, 100%, 50%, 0.5)'));

  return (
    <>
      <MyColorSlider channel="hue" value={color} onChange={setColor} />
      <MyColorSlider channel="saturation" value={color} onChange={setColor} />
      <MyColorSlider channel="lightness" value={color} onChange={setColor} />
      <MyColorSlider channel="alpha" value={color} onChange={setColor} />
    </>
  );
}
```

```
function Example() {
  let [color, setColor] = React.useState(
    parseColor('hsla(0, 100%, 50%, 0.5)')
  );

  return (
    <>
      <MyColorSlider
        channel="hue"
        value={color}
        onChange={setColor}
      />
      <MyColorSlider
        channel="saturation"
        value={color}
        onChange={setColor}
      />
      <MyColorSlider
        channel="lightness"
        value={color}
        onChange={setColor}
      />
      <MyColorSlider
        channel="alpha"
        value={color}
        onChange={setColor}
      />
    </>
  );
}
```

```
function Example() {
  let [color, setColor] =
    React.useState(
      parseColor(
        'hsla(0, 100%, 50%, 0.5)'
      )
    );

  return (
    <>
      <MyColorSlider
        channel="hue"
        value={color}
        onChange={setColor}
      />
      <MyColorSlider
        channel="saturation"
        value={color}
        onChange={setColor}
      />
      <MyColorSlider
        channel="lightness"
        value={color}
        onChange={setColor}
      />
      <MyColorSlider
        channel="alpha"
        value={color}
        onChange={setColor}
      />
    </>
  );
}
```

This example shows how to build an HSBA color picker.

```
function Example() {
  let [color, setColor] = React.useState(parseColor('hsba(0, 100%, 50%, 0.5)'));
  return (
    <>
      <MyColorSlider channel="hue" value={color} onChange={setColor} />
      <MyColorSlider channel="saturation" value={color} onChange={setColor} />
      <MyColorSlider channel="brightness" value={color} onChange={setColor} />
      <MyColorSlider channel="alpha" value={color} onChange={setColor} />
    </>
  );
}
```

```
function Example() {
  let [color, setColor] = React.useState(
    parseColor('hsba(0, 100%, 50%, 0.5)')
  );
  return (
    <>
      <MyColorSlider
        channel="hue"
        value={color}
        onChange={setColor}
      />
      <MyColorSlider
        channel="saturation"
        value={color}
        onChange={setColor}
      />
      <MyColorSlider
        channel="brightness"
        value={color}
        onChange={setColor}
      />
      <MyColorSlider
        channel="alpha"
        value={color}
        onChange={setColor}
      />
    </>
  );
}
```

```
function Example() {
  let [color, setColor] =
    React.useState(
      parseColor(
        'hsba(0, 100%, 50%, 0.5)'
      )
    );
  return (
    <>
      <MyColorSlider
        channel="hue"
        value={color}
        onChange={setColor}
      />
      <MyColorSlider
        channel="saturation"
        value={color}
        onChange={setColor}
      />
      <MyColorSlider
        channel="brightness"
        value={color}
        onChange={setColor}
      />
      <MyColorSlider
        channel="alpha"
        value={color}
        onChange={setColor}
      />
    </>
  );
}
```

* * *

Sliders are horizontally oriented by default. The `orientation` prop can be set to `"vertical"` to create a vertical slider. This example also hides the visual label. By default, an `aria-label` is provided using the localized channel name (e.g. Hue).

```
<MyColorSlider
  orientation="vertical"
  defaultValue="hsb(0, 100%, 100%)"
  channel="hue" />
```

```
<MyColorSlider
  orientation="vertical"
  defaultValue="hsb(0, 100%, 100%)"
  channel="hue" />
```

```
<MyColorSlider
  orientation="vertical"
  defaultValue="hsb(0, 100%, 100%)"
  channel="hue"
/>
```

Show CSS

```
.react-aria-ColorSlider {
  &[data-orientation=vertical] {
    height: 150px;
    display: block;

    .react-aria-Label,
    .react-aria-SliderOutput {
      display: none;
    }

    .react-aria-SliderTrack {
      width: 28px;
      height: 100%;
    }

    .react-aria-ColorThumb {
      left: 50%;
    }
  }
}
```

```
.react-aria-ColorSlider {
  &[data-orientation=vertical] {
    height: 150px;
    display: block;

    .react-aria-Label,
    .react-aria-SliderOutput {
      display: none;
    }

    .react-aria-SliderTrack {
      width: 28px;
      height: 100%;
    }

    .react-aria-ColorThumb {
      left: 50%;
    }
  }
}
```

```
.react-aria-ColorSlider {
  &[data-orientation=vertical] {
    height: 150px;
    display: block;

    .react-aria-Label,
    .react-aria-SliderOutput {
      display: none;
    }

    .react-aria-SliderTrack {
      width: 28px;
      height: 100%;
    }

    .react-aria-ColorThumb {
      left: 50%;
    }
  }
}
```

A `ColorSlider` can be disabled using the `isDisabled` prop. This prevents the thumb from being focused or dragged. It's up to you to style your color slider to appear disabled accordingly.

```
<MyColorSlider channel="red" defaultValue="#7f007f" isDisabled />
```

```
<MyColorSlider
  channel="red"
  defaultValue="#7f007f"
  isDisabled
/>
```

```
<MyColorSlider
  channel="red"
  defaultValue="#7f007f"
  isDisabled
/>
```

Show CSS

```
.react-aria-ColorSlider {
  &[data-disabled] {
    .react-aria-SliderTrack {
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
.react-aria-ColorSlider {
  &[data-disabled] {
    .react-aria-SliderTrack {
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
.react-aria-ColorSlider {
  &[data-disabled] {
    .react-aria-SliderTrack {
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

By default, `ColorSlider` provides an `aria-label` for the localized color channel name. If a `<Label>` element is rendered, its children default to the channel name. If you wish to override this with a more specific label, custom children can be provided to the `<Label>`, or an `aria-label` or `aria-labelledby` prop may be passed instead.

```
<ColorSlider channel="hue" defaultValue="hsl(0, 100%, 50%)">
  <Label>Background Hue</Label>  <SliderOutput />
  <SliderTrack>
    <ColorThumb />
  </SliderTrack>
</ColorSlider>
<ColorSlider
  aria-label="Background Saturation"  channel="saturation"
  defaultValue="hsl(0, 100%, 50%)">
  <SliderTrack>
    <ColorThumb />
  </SliderTrack>
</ColorSlider>
```

```
<ColorSlider channel="hue" defaultValue="hsl(0, 100%, 50%)">
  <Label>Background Hue</Label>  <SliderOutput />
  <SliderTrack>
    <ColorThumb />
  </SliderTrack>
</ColorSlider>
<ColorSlider
  aria-label="Background Saturation"  channel="saturation"
  defaultValue="hsl(0, 100%, 50%)">
  <SliderTrack>
    <ColorThumb />
  </SliderTrack>
</ColorSlider>
```

```
<ColorSlider
  channel="hue"
  defaultValue="hsl(0, 100%, 50%)"
>
  <Label>
    Background Hue
  </Label>  <SliderOutput />
  <SliderTrack>
    <ColorThumb />
  </SliderTrack>
</ColorSlider>
<ColorSlider
  aria-label="Background Saturation"  channel="saturation"
  defaultValue="hsl(0, 100%, 50%)"
>
  <SliderTrack>
    <ColorThumb />
  </SliderTrack>
</ColorSlider>
```

The `aria-valuetext` of the `<input>` element is formatted according to the user's locale automatically. It also includes a localized description of the selected color (e.g. "dark vibrant blue").

In right-to-left languages, color sliders should be mirrored. The label should be right aligned, and the value should be left aligned. Orientation of the gradient background, positioning of the thumb, and dragging behavior is automatically mirrored by `ColorSlider`.

* * *

Name

Type

Default

Description

`channel`

`[ColorChannel](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/color/src/index.d.ts:ColorChannel)`

—

The color channel that the slider manipulates.

`colorSpace`

`[ColorSpace](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/color/src/index.d.ts:ColorSpace)`

—

The color space that the slider operates in. The `channel` must be in this color space. If not provided, this defaults to the color space of the `color` or `defaultColor` value.

`orientation`

`[Orientation](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/orientation.d.ts:Orientation)`

`'horizontal'`

The orientation of the Slider.

`isDisabled`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the whole Slider is disabled.

`value`

`T`

—

The current value (controlled).

`defaultValue`

`T`

—

The default value (uncontrolled).

`name`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

The name of the input element, used when submitting an HTML form. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname).

`form`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

The `<form>` element to associate the input with. The value of this attribute must be the id of a `<form>` in the same document. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#form).

`children`

`[ChildrenOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ChildrenOrFunction)<[ColorSliderRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/ColorSlider.tsx:ColorSliderRenderProps)>`

—

The children of the component. A function may be provided to alter the children based on component state.

`className`

`[ClassNameOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ClassNameOrFunction)<[ColorSliderRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/ColorSlider.tsx:ColorSliderRenderProps)>`

—

The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.

`style`

`[StyleOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:StyleOrFunction)<[ColorSliderRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/ColorSlider.tsx:ColorSliderRenderProps)>`

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

A `<Label>` accepts all HTML attributes.

A `<SliderOutput>` renders the current value of the color slider as text.

Show props

Name

Type

Description

`children`

`[ChildrenOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ChildrenOrFunction)<[SliderRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Slider.tsx:SliderRenderProps)>`

The children of the component. A function may be provided to alter the children based on component state.

`className`

`[ClassNameOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ClassNameOrFunction)<[SliderRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Slider.tsx:SliderRenderProps)>`

The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.

`style`

`[StyleOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:StyleOrFunction)<[SliderRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Slider.tsx:SliderRenderProps)>`

The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.

EventsPositioning

The `<SliderTrack>` component renders a gradient representing the colors that can be selected for the color channel, and contains a `<ColorThumb>` element.

Show props

Name

Type

Description

`children`

`[ChildrenOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ChildrenOrFunction)<[SliderTrackRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Slider.tsx:SliderTrackRenderProps)>`

The children of the component. A function may be provided to alter the children based on component state.

`className`

`[ClassNameOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ClassNameOrFunction)<[SliderTrackRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Slider.tsx:SliderTrackRenderProps)>`

The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.

`style`

`[StyleOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:StyleOrFunction)<[SliderTrackRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Slider.tsx:SliderTrackRenderProps)>`

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
.react-aria-ColorSlider {
  /* ... */
}
```

```
.react-aria-ColorSlider {
  /* ... */
}
```

```
.react-aria-ColorSlider {
  /* ... */
}
```

A custom `className` can also be specified on any component. This overrides the default `className` provided by React Aria with your own.

```
<ColorSlider className="my-color-slider">
  {/* ... */}
</ColorSlider>
```

```
<ColorSlider className="my-color-slider">
  {/* ... */}
</ColorSlider>
```

```
<ColorSlider className="my-color-slider">
  {/* ... */}
</ColorSlider>
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

Render props may also be used as children to alter what elements are rendered based on the current state. For example, you could implement custom formatting for the slider's current value.

```
<SliderOutput>
  {state => `Value: ${state.getThumbValueLabel(0)}`}
</SliderOutput>
```

```
<SliderOutput>
  {state => `Value: ${state.getThumbValueLabel(0)}`}
</SliderOutput>
```

```
<SliderOutput>
  {(state) =>
    `Value: ${
      state
        .getThumbValueLabel(
          0
        )
    }`}
</SliderOutput>
```

The states, selectors, and render props for each component used in a `ColorSlider` are documented below.

The `ColorSlider` component can be targeted with the `.react-aria-ColorSlider` CSS selector, or by overriding with a custom `className`. It supports the following states:

Name

CSS Selector

Description

`orientation`

`[data-orientation="horizontal | vertical"]`

The orientation of the color slider.

`isDisabled`

`[data-disabled]`

Whether the color slider is disabled.

`state`

`—`

State of the color slider.

A `Label` can be targeted with the `.react-aria-Label` CSS selector, or by overriding with a custom `className`.

The `SliderOutput` component can be targeted with the `.react-aria-SliderOutput` CSS selector, or by overriding with a custom `className`. It supports the following states:

Name

CSS Selector

Description

`orientation`

`[data-orientation="horizontal | vertical"]`

The orientation of the slider.

`isDisabled`

`[data-disabled]`

Whether the slider is disabled.

`state`

`—`

State of the slider.

The `SliderTrack` component can be targeted with the `.react-aria-SliderTrack` CSS selector, or by overriding with a custom `className`. It supports the following states:

Name

CSS Selector

Description

`isHovered`

`[data-hovered]`

Whether the slider track is currently hovered with a mouse.

`orientation`

`[data-orientation="horizontal | vertical"]`

The orientation of the slider.

`isDisabled`

`[data-disabled]`

Whether the slider is disabled.

`state`

`—`

State of the slider.

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

If you need to customize one of the components within a `ColorSlider`, such as `Label` or `SliderOutput`, in many cases you can create a wrapper component. This lets you customize the props passed to the component.

```
function MySliderOutput(props) {
  return <SliderOutput {...props} className="my-slider-output" />
}
```

```
function MySliderOutput(props) {
  return (
    <SliderOutput {...props} className="my-slider-output" />
  );
}
```

```
function MySliderOutput(
  props
) {
  return (
    <SliderOutput
      {...props}
      className="my-slider-output"
    />
  );
}
```

All React Aria Components export a corresponding context that can be used to send props to them from a parent element. This enables you to build your own compositional APIs similar to those found in React Aria Components itself. You can send any prop or ref via context that you could pass to the corresponding component. The local props and ref on the component are merged with the ones passed via context, with the local props taking precedence (following the rules documented in [mergeProps](https://react-spectrum.adobe.com/react-aria/mergeProps.html)).

Component

Context

Props

Ref

`ColorSlider`

`ColorSliderContext`

`[ColorSliderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/ColorSlider.tsx:ColorSliderProps)`

`[HTMLDivElement](https://developer.mozilla.org/docs/Web/API/HTMLDivElement)`

This example shows a `ColorSliderDescription` component that accepts a color slider in its children and renders a description element below it. It uses the [useId](https://react-spectrum.adobe.com/react-aria/useId.html) hook to generate a unique id for the description, and associates it with the color slider via the `aria-describedby` attribute passed to the `ColorSliderContext` provider.

```
import {ColorSliderContext} from 'react-aria-components';
import {useId} from 'react-aria';

interface ColorSliderDescriptionProps {
  children?: React.ReactNode;
  description?: string;
}

function ColorSliderDescription(
  { children, description }: ColorSliderDescriptionProps
) {
  let descriptionId = useId();
  return (
    <div>
      <ColorSliderContext.Provider
        value={{ 'aria-describedby': descriptionId }}
      >        {children}
      </ColorSliderContext.Provider>
      <small id={descriptionId}>{description}</small>
    </div>
  );
}

<ColorSliderDescription description="It's not easy being green.">
  <MyColorSlider channel="green" defaultValue="#006" />
</ColorSliderDescription>
```

```
import {ColorSliderContext} from 'react-aria-components';
import {useId} from 'react-aria';

interface ColorSliderDescriptionProps {
  children?: React.ReactNode;
  description?: string;
}

function ColorSliderDescription(
  { children, description }: ColorSliderDescriptionProps
) {
  let descriptionId = useId();
  return (
    <div>
      <ColorSliderContext.Provider
        value={{ 'aria-describedby': descriptionId }}
      >        {children}
      </ColorSliderContext.Provider>
      <small id={descriptionId}>{description}</small>
    </div>
  );
}

<ColorSliderDescription description="It's not easy being green.">
  <MyColorSlider channel="green" defaultValue="#006" />
</ColorSliderDescription>
```

```
import {ColorSliderContext} from 'react-aria-components';
import {useId} from 'react-aria';

interface ColorSliderDescriptionProps {
  children?:
    React.ReactNode;
  description?: string;
}

function ColorSliderDescription(
  {
    children,
    description
  }: ColorSliderDescriptionProps
) {
  let descriptionId =
    useId();
  return (
    <div>
      <ColorSliderContext.Provider
        value={{
          'aria-describedby':
            descriptionId
        }}
      >        {children}
      </ColorSliderContext.Provider>
      <small
        id={descriptionId}
      >
        {description}
      </small>
    </div>
  );
}

<ColorSliderDescription description="It's not easy being green.">
  <MyColorSlider
    channel="green"
    defaultValue="#006"
  />
</ColorSliderDescription>
```

ColorSlider passes props to its child components, such as the label, via their associated contexts. These contexts are exported so you can also consume them in your own custom components. This enables you to reuse existing components from your app or component library together with React Aria Components.

Component

Context

Props

Ref

`Label`

`LabelContext`

`[LabelProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Label.tsx:LabelProps)`

`[HTMLLabelElement](https://developer.mozilla.org/docs/Web/API/HTMLLabelElement)`

This example consumes from `LabelContext` in an existing styled label component to make it compatible with React Aria Components. The `[useContextProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:useContextProps)` hook merges the local props and ref with the ones provided via context by ColorSlider.

```
import type {LabelProps} from 'react-aria-components';
import {LabelContext, useContextProps} from 'react-aria-components';

const MyCustomLabel = React.forwardRef(
  (props: LabelProps, ref: React.ForwardedRef<HTMLLabelElement>) => {
    // Merge the local props and ref with the ones provided via context.
    [props, ref] = useContextProps(props, ref, LabelContext);
    // ... your existing Label component
    return <label {...props} ref={ref} />;
  }
);
```

```
import type {LabelProps} from 'react-aria-components';
import {
  LabelContext,
  useContextProps
} from 'react-aria-components';

const MyCustomLabel = React.forwardRef(
  (
    props: LabelProps,
    ref: React.ForwardedRef<HTMLLabelElement>
  ) => {
    // Merge the local props and ref with the ones provided via context.
    [props, ref] = useContextProps(
      props,
      ref,
      LabelContext
    );
    // ... your existing Label component
    return <label {...props} ref={ref} />;
  }
);
```

```
import type {LabelProps} from 'react-aria-components';
import {
  LabelContext,
  useContextProps
} from 'react-aria-components';

const MyCustomLabel =
  React.forwardRef(
    (
      props: LabelProps,
      ref:
        React.ForwardedRef<
          HTMLLabelElement
        >
    ) => {
      // Merge the local props and ref with the ones provided via context.
      [props, ref] =
        useContextProps(
          props,
          ref,
          LabelContext
        );
      // ... your existing Label component
      return (
        <label
          {...props}
          ref={ref}
        />
      );
    }
  );
```

Now you can use `MyCustomLabel` within a `ColorSlider`, in place of the builtin React Aria Components `Label`.

```
<ColorSlider>
  <MyCustomLabel>Opacity</MyCustomLabel>  <SliderTrack>
    <ColorThumb />
  </SliderTrack>
</ColorSlider>
```

```
<ColorSlider>
  <MyCustomLabel>Opacity</MyCustomLabel>  <SliderTrack>
    <ColorThumb />
  </SliderTrack>
</ColorSlider>
```

```
<ColorSlider>
  <MyCustomLabel>
    Opacity
  </MyCustomLabel>  <SliderTrack>
    <ColorThumb />
  </SliderTrack>
</ColorSlider>
```

ColorSlider provides a `[ColorSliderState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/color/src/useColorSliderState.ts:ColorSliderState)` object to its children via `ColorSliderStateContext`. This can be used to access and manipulate the slider's state.

This example shows a `ColorNumberField` component that can be placed within a `ColorSlider` to allow the user to enter a number and update the channel value.

```
import {ColorSliderStateContext, Input, LabelContext, NumberField, useSlottedContext} from 'react-aria-components';

function ColorNumberField({ channel }) {
  let state = React.useContext(ColorSliderStateContext)!;  let labelProps = useSlottedContext(LabelContext)!;
  return (
    <NumberField
      aria-labelledby={labelProps.id}
      value={state.value.getChannelValue(channel)}
      minValue={state.value.getChannelRange(channel).minValue}
      maxValue={state.value.getChannelRange(channel).maxValue}
      onChange={(v) => state.setValue(state.value.withChannelValue(channel, v))}
      formatOptions={state.value.getChannelFormatOptions(channel)}
    >
      <Input />
    </NumberField>
  );
}

<ColorSlider channel="hue" defaultValue="hsl(0, 100%, 50%)">
  <Label />
  <ColorNumberField channel="hue" />  <SliderTrack>
    <ColorThumb />
  </SliderTrack>
</ColorSlider>
```

```
import {
  ColorSliderStateContext,
  Input,
  LabelContext,
  NumberField,
  useSlottedContext
} from 'react-aria-components';

function ColorNumberField({ channel }) {
  let state = React.useContext(ColorSliderStateContext)!;  let labelProps = useSlottedContext(LabelContext)!;
  return (
    <NumberField
      aria-labelledby={labelProps.id}
      value={state.value.getChannelValue(channel)}
      minValue={state.value.getChannelRange(channel)
        .minValue}
      maxValue={state.value.getChannelRange(channel)
        .maxValue}
      onChange={(v) =>
        state.setValue(
          state.value.withChannelValue(channel, v)
        )}
      formatOptions={state.value.getChannelFormatOptions(
        channel
      )}
    >
      <Input />
    </NumberField>
  );
}

<ColorSlider
  channel="hue"
  defaultValue="hsl(0, 100%, 50%)"
>
  <Label />
  <ColorNumberField channel="hue" />  <SliderTrack>
    <ColorThumb />
  </SliderTrack>
</ColorSlider>
```

```
import {
  ColorSliderStateContext,
  Input,
  LabelContext,
  NumberField,
  useSlottedContext
} from 'react-aria-components';

function ColorNumberField(
  { channel }
) {
  let state = React
    .useContext(
      ColorSliderStateContext
    )!;  let labelProps =
    useSlottedContext(
      LabelContext
    )!;
  return (
    <NumberField
      aria-labelledby={labelProps
        .id}
      value={state.value
        .getChannelValue(
          channel
        )}
      minValue={state
        .value
        .getChannelRange(
          channel
        ).minValue}
      maxValue={state
        .value
        .getChannelRange(
          channel
        ).maxValue}
      onChange={(v) =>
        state.setValue(
          state.value
            .withChannelValue(
              channel,
              v
            )
        )}
      formatOptions={state
        .value
        .getChannelFormatOptions(
          channel
        )}
    >
      <Input />
    </NumberField>
  );
}

<ColorSlider
  channel="hue"
  defaultValue="hsl(0, 100%, 50%)"
>
  <Label />
  <ColorNumberField channel="hue" />  <SliderTrack>
    <ColorThumb />
  </SliderTrack>
</ColorSlider>
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

If you need to customize things even further, such as accessing internal state or customizing DOM structure, you can drop down to the lower level Hook-based API. See [useColorSlider](https://react-spectrum.adobe.com/react-aria/useColorSlider.html) for more details.