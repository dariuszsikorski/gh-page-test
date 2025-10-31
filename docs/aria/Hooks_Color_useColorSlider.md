# useColorSlider

**Source**: [https://react-spectrum.adobe.com/react-aria/useColorSlider.html](https://react-spectrum.adobe.com/react-aria/useColorSlider.html)

> Documentation for useColorSlider in the React Aria package.

---

Provides the behavior and accessibility implementation for a color slider component. Color sliders allow users to adjust an individual channel of a color value.

* * *

`useColorSlider( (props: [AriaColorSliderOptions](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/color/src/useColorSlider.ts:AriaColorSliderOptions), , state: [ColorSliderState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/color/src/useColorSliderState.ts:ColorSliderState) )): [ColorSliderAria](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/color/src/useColorSlider.ts:ColorSliderAria)`

* * *

The [<input type="color">](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color) HTML element can be used to build a color picker, however it is very inconsistent across browsers and operating systems and consists of a complete color picker rather than a single color channel slider. `useColorSlider` helps achieve accessible and touch-friendly color sliders that can be styled as needed.

-   Support for adjusting a single channel of RGBA, HSLA, and HSBA colors
-   Support for mouse, touch, and keyboard via the [useMove](https://react-spectrum.adobe.com/react-aria/useMove.html) hook
-   Multi-touch support for dragging multiple sliders at once
-   Pressing on the track moves the thumb to that position
-   Supports using the arrow keys, as well as page up/down, home, and end keys
-   Support for both horizontal and vertical orientations
-   Support for disabling the color slider
-   Prevents text selection while dragging
-   Exposed to assistive technology as a `slider` element via ARIA
-   Uses a hidden native input element to support touch screen readers
-   Automatic ARIA labeling using localized channel names by default
-   Support for visually labeling the slider
-   Support for displaying the current value using an `<output>` element
-   Internationalized number formatting based on the color channel type
-   Support for mirroring in RTL locales

* * *

Shows a color slider component with labels pointing to its parts, including the track, thumb, label, and output elements.ThumbTrackOutputLabelLabelHue230°

A color slider consists of a track element and a thumb that the user can drag to change a single channel of a color value. It may also include optional label and `<output>` elements to display the color channel name and current numeric value, respectively. A visually hidden `<input>` element is used to represent the value to assistive technologies.

`useColorSlider` returns props that you should spread onto the appropriate elements:

Name

Type

Description

`labelProps`

`[DOMAttributes](https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes)`

Props for the label element.

`trackProps`

`[DOMAttributes](https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes)`

Props for the track element.

`thumbProps`

`[DOMAttributes](https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes)`

Props for the thumb element.

`inputProps`

`[InputHTMLAttributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes)<[HTMLInputElement](https://developer.mozilla.org/docs/Web/API/HTMLInputElement)>`

Props for the visually hidden range input element.

`outputProps`

`[DOMAttributes](https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes)`

Props for the output element, displaying the value of the color slider.

State is managed by the `[useColorSliderState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/color/src/useColorSliderState.ts:useColorSliderState)` hook from `@react-stately/color`. The state object should be passed as an option to `useColorSlider`

By default, `useColorSlider` provides an `aria-label` for the localized color channel name. If you wish to display a visual label, or override this with a more specific label, a `label`, `aria-label` or `aria-labelledby` prop may be passed instead.

* * *

This example shows how to build a horizontal color slider. It also includes a label which can be clicked to focus the thumb. Styling for the track background and positioning of the thumb are provided by `useColorSlider` in the returned `style` prop for each element.

If no `label` prop is given, it uses the `[Color](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/color/src/index.d.ts:Color)` object to get a localized string for the channel name using the `getChannelName` method. In addition, an `<output>` element is used to display the current channel value as text. This is formatted using the Color object's `formatChannelValue` method, which formats the value according to the channel type and locale settings.

The visually hidden `<input>` element inside the thumb is used to represent the color slider to assistive technology. The thumb also uses the [useFocusRing](https://react-spectrum.adobe.com/react-aria/useFocusRing.html) hook to grow in size when it is keyboard focused (try tabbing to it).

```
import {useColorSliderState} from 'react-stately';
import {useColorSlider, useFocusRing, useLocale} from 'react-aria';

const TRACK_THICKNESS = 28;
const THUMB_SIZE = 20;

function ColorSlider(props) {
  let { isDisabled } = props;
  let { locale } = useLocale();
  let state = useColorSliderState({ ...props, locale });
  let trackRef = React.useRef(null);
  let inputRef = React.useRef(null);

  // Default label to the channel name in the current locale
  let label = props.label || state.value.getChannelName(props.channel, locale);

  let { trackProps, thumbProps, inputProps, labelProps, outputProps } =
    useColorSlider({
      ...props,
      label,
      trackRef,
      inputRef
    }, state);

  let { focusProps, isFocusVisible } = useFocusRing();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: 300
      }}
    >
      {/* Create a flex container for the label and output element. */}
      <div style={{ display: 'flex', alignSelf: 'stretch' }}>
        <label {...labelProps}>{label}</label>
        <output {...outputProps} style={{ flex: '1 0 auto', textAlign: 'end' }}>
          {state.value.formatChannelValue(props.channel, locale)}
        </output>
      </div>
      {/* The track element holds the visible track line and the thumb. */}
      <div
        {...trackProps}
        ref={trackRef}
        style={{
          ...trackProps.style,
          height: TRACK_THICKNESS,
          width: '100%',
          borderRadius: 4,
          background: isDisabled
            ? 'rgb(142, 142, 142)'
            : trackProps.style.background
        }}
      >
        <div
          {...thumbProps}
          style={{
            ...thumbProps.style,
            top: TRACK_THICKNESS / 2,
            background: isDisabled
              ? 'rgb(142, 142, 142)'
              : state.getDisplayColor().toString('css'),
            border: `2px solid ${isDisabled ? 'rgb(142, 142, 142)' : 'white'}`,
            boxShadow: '0 0 0 1px black, inset 0 0 0 1px black',
            width: isFocusVisible ? TRACK_THICKNESS + 4 : THUMB_SIZE,
            height: isFocusVisible ? TRACK_THICKNESS + 4 : THUMB_SIZE,
            borderRadius: '50%',
            boxSizing: 'border-box'
          }}
        >
          <input ref={inputRef} {...inputProps} {...focusProps} />
        </div>
      </div>
    </div>
  );
}

<ColorSlider channel="hue" defaultValue="hsl(0, 100%, 50%)" />
```

```
import {useColorSliderState} from 'react-stately';
import {
  useColorSlider,
  useFocusRing,
  useLocale
} from 'react-aria';

const TRACK_THICKNESS = 28;
const THUMB_SIZE = 20;

function ColorSlider(props) {
  let { isDisabled } = props;
  let { locale } = useLocale();
  let state = useColorSliderState({ ...props, locale });
  let trackRef = React.useRef(null);
  let inputRef = React.useRef(null);

  // Default label to the channel name in the current locale
  let label = props.label ||
    state.value.getChannelName(props.channel, locale);

  let {
    trackProps,
    thumbProps,
    inputProps,
    labelProps,
    outputProps
  } = useColorSlider({
    ...props,
    label,
    trackRef,
    inputRef
  }, state);

  let { focusProps, isFocusVisible } = useFocusRing();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: 300
      }}
    >
      {/* Create a flex container for the label and output element. */}
      <div
        style={{ display: 'flex', alignSelf: 'stretch' }}
      >
        <label {...labelProps}>{label}</label>
        <output
          {...outputProps}
          style={{ flex: '1 0 auto', textAlign: 'end' }}
        >
          {state.value.formatChannelValue(
            props.channel,
            locale
          )}
        </output>
      </div>
      {/* The track element holds the visible track line and the thumb. */}
      <div
        {...trackProps}
        ref={trackRef}
        style={{
          ...trackProps.style,
          height: TRACK_THICKNESS,
          width: '100%',
          borderRadius: 4,
          background: isDisabled
            ? 'rgb(142, 142, 142)'
            : trackProps.style.background
        }}
      >
        <div
          {...thumbProps}
          style={{
            ...thumbProps.style,
            top: TRACK_THICKNESS / 2,
            background: isDisabled
              ? 'rgb(142, 142, 142)'
              : state.getDisplayColor().toString('css'),
            border: `2px solid ${
              isDisabled ? 'rgb(142, 142, 142)' : 'white'
            }`,
            boxShadow:
              '0 0 0 1px black, inset 0 0 0 1px black',
            width: isFocusVisible
              ? TRACK_THICKNESS + 4
              : THUMB_SIZE,
            height: isFocusVisible
              ? TRACK_THICKNESS + 4
              : THUMB_SIZE,
            borderRadius: '50%',
            boxSizing: 'border-box'
          }}
        >
          <input
            ref={inputRef}
            {...inputProps}
            {...focusProps}
          />
        </div>
      </div>
    </div>
  );
}

<ColorSlider
  channel="hue"
  defaultValue="hsl(0, 100%, 50%)"
/>
```

```
import {useColorSliderState} from 'react-stately';
import {
  useColorSlider,
  useFocusRing,
  useLocale
} from 'react-aria';

const TRACK_THICKNESS =
  28;
const THUMB_SIZE = 20;

function ColorSlider(
  props
) {
  let { isDisabled } =
    props;
  let { locale } =
    useLocale();
  let state =
    useColorSliderState({
      ...props,
      locale
    });
  let trackRef = React
    .useRef(null);
  let inputRef = React
    .useRef(null);

  // Default label to the channel name in the current locale
  let label =
    props.label ||
    state.value
      .getChannelName(
        props.channel,
        locale
      );

  let {
    trackProps,
    thumbProps,
    inputProps,
    labelProps,
    outputProps
  } = useColorSlider({
    ...props,
    label,
    trackRef,
    inputRef
  }, state);

  let {
    focusProps,
    isFocusVisible
  } = useFocusRing();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection:
          'column',
        alignItems:
          'center',
        width: 300
      }}
    >
      {/* Create a flex container for the label and output element. */}
      <div
        style={{
          display:
            'flex',
          alignSelf:
            'stretch'
        }}
      >
        <label
          {...labelProps}
        >
          {label}
        </label>
        <output
          {...outputProps}
          style={{
            flex:
              '1 0 auto',
            textAlign:
              'end'
          }}
        >
          {state.value
            .formatChannelValue(
              props
                .channel,
              locale
            )}
        </output>
      </div>
      {/* The track element holds the visible track line and the thumb. */}
      <div
        {...trackProps}
        ref={trackRef}
        style={{
          ...trackProps
            .style,
          height:
            TRACK_THICKNESS,
          width: '100%',
          borderRadius:
            4,
          background:
            isDisabled
              ? 'rgb(142, 142, 142)'
              : trackProps
                .style
                .background
        }}
      >
        <div
          {...thumbProps}
          style={{
            ...thumbProps
              .style,
            top:
              TRACK_THICKNESS /
              2,
            background:
              isDisabled
                ? 'rgb(142, 142, 142)'
                : state
                  .getDisplayColor()
                  .toString(
                    'css'
                  ),
            border:
              `2px solid ${
                isDisabled
                  ? 'rgb(142, 142, 142)'
                  : 'white'
              }`,
            boxShadow:
              '0 0 0 1px black, inset 0 0 0 1px black',
            width:
              isFocusVisible
                ? TRACK_THICKNESS +
                  4
                : THUMB_SIZE,
            height:
              isFocusVisible
                ? TRACK_THICKNESS +
                  4
                : THUMB_SIZE,
            borderRadius:
              '50%',
            boxSizing:
              'border-box'
          }}
        >
          <input
            ref={inputRef}
            {...inputProps}
            {...focusProps}
          />
        </div>
      </div>
    </div>
  );
}

<ColorSlider
  channel="hue"
  defaultValue="hsl(0, 100%, 50%)"
/>
```

This example shows how to build a vertical color slider. The main difference from horizontal color sliders is the addition of the `orientation: 'vertical'` option to `useColorSlider`. This automatically adjusts the internal positioning and dragging logic. Additionally, this example does not have a visible label or `<output>` element. This can be done by simply not using the returned `labelProps` and `outputProps`. The color slider will have a default `aria-label` using the localized channel name, which can be overridden by passing an `aria-label` prop to `useColorSlider`.

```
function ColorSlider(props) {
  let { locale } = useLocale();
  let state = useColorSliderState({ ...props, locale });
  let trackRef = React.useRef(null);
  let inputRef = React.useRef(null);
  let { trackProps, thumbProps, inputProps } = useColorSlider({
    ...props,
    orientation: 'vertical',
    trackRef,
    inputRef
  }, state);

  let { focusProps, isFocusVisible } = useFocusRing();

  return (
    <div
      style={{
        height: 200
      }}
    >
      <div
        {...trackProps}
        ref={trackRef}
        style={{
          ...trackProps.style,
          width: TRACK_THICKNESS,
          height: '100%',
          borderRadius: 4
        }}
      >
        <div
          {...thumbProps}
          style={{
            ...thumbProps.style,
            left: TRACK_THICKNESS / 2,
            border: '2px solid white',
            boxShadow: '0 0 0 1px black, inset 0 0 0 1px black',
            width: isFocusVisible ? TRACK_THICKNESS + 4 : THUMB_SIZE,
            height: isFocusVisible ? TRACK_THICKNESS + 4 : THUMB_SIZE,
            borderRadius: '50%',
            boxSizing: 'border-box',
            background: state.getDisplayColor().toString('css')
          }}
        >
          <input ref={inputRef} {...inputProps} {...focusProps} />
        </div>
      </div>
    </div>
  );
}

<ColorSlider channel="hue" defaultValue="hsl(0, 100%, 50%)" />
```

```
function ColorSlider(props) {
  let { locale } = useLocale();
  let state = useColorSliderState({ ...props, locale });
  let trackRef = React.useRef(null);
  let inputRef = React.useRef(null);
  let { trackProps, thumbProps, inputProps } =
    useColorSlider({
      ...props,
      orientation: 'vertical',
      trackRef,
      inputRef
    }, state);

  let { focusProps, isFocusVisible } = useFocusRing();

  return (
    <div
      style={{
        height: 200
      }}
    >
      <div
        {...trackProps}
        ref={trackRef}
        style={{
          ...trackProps.style,
          width: TRACK_THICKNESS,
          height: '100%',
          borderRadius: 4
        }}
      >
        <div
          {...thumbProps}
          style={{
            ...thumbProps.style,
            left: TRACK_THICKNESS / 2,
            border: '2px solid white',
            boxShadow:
              '0 0 0 1px black, inset 0 0 0 1px black',
            width: isFocusVisible
              ? TRACK_THICKNESS + 4
              : THUMB_SIZE,
            height: isFocusVisible
              ? TRACK_THICKNESS + 4
              : THUMB_SIZE,
            borderRadius: '50%',
            boxSizing: 'border-box',
            background: state.getDisplayColor().toString(
              'css'
            )
          }}
        >
          <input
            ref={inputRef}
            {...inputProps}
            {...focusProps}
          />
        </div>
      </div>
    </div>
  );
}

<ColorSlider
  channel="hue"
  defaultValue="hsl(0, 100%, 50%)"
/>
```

```
function ColorSlider(
  props
) {
  let { locale } =
    useLocale();
  let state =
    useColorSliderState({
      ...props,
      locale
    });
  let trackRef = React
    .useRef(null);
  let inputRef = React
    .useRef(null);
  let {
    trackProps,
    thumbProps,
    inputProps
  } = useColorSlider({
    ...props,
    orientation:
      'vertical',
    trackRef,
    inputRef
  }, state);

  let {
    focusProps,
    isFocusVisible
  } = useFocusRing();

  return (
    <div
      style={{
        height: 200
      }}
    >
      <div
        {...trackProps}
        ref={trackRef}
        style={{
          ...trackProps
            .style,
          width:
            TRACK_THICKNESS,
          height: '100%',
          borderRadius: 4
        }}
      >
        <div
          {...thumbProps}
          style={{
            ...thumbProps
              .style,
            left:
              TRACK_THICKNESS /
              2,
            border:
              '2px solid white',
            boxShadow:
              '0 0 0 1px black, inset 0 0 0 1px black',
            width:
              isFocusVisible
                ? TRACK_THICKNESS +
                  4
                : THUMB_SIZE,
            height:
              isFocusVisible
                ? TRACK_THICKNESS +
                  4
                : THUMB_SIZE,
            borderRadius:
              '50%',
            boxSizing:
              'border-box',
            background:
              state
                .getDisplayColor()
                .toString(
                  'css'
                )
          }}
        >
          <input
            ref={inputRef}
            {...inputProps}
            {...focusProps}
          />
        </div>
      </div>
    </div>
  );
}

<ColorSlider
  channel="hue"
  defaultValue="hsl(0, 100%, 50%)"
/>
```

* * *

The following examples show how to use the `ColorSlider` component created in the above example.

This example shows how you could build an RGBA color picker using four color sliders bound to the same color value in state. The `[parseColor](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/color/src/Color.ts:parseColor)` function is used to parse the initial color from a hex value, stored in state. The `value` and `onChange` props of `ColorSlider` are used to make the sliders controlled, so that they all update when the color is modified.

```
import {parseColor} from 'react-stately';

function Example() {
  let [color, setColor] = React.useState(parseColor('#7f007f'));
  return (
    <>
      <ColorSlider channel="red" value={color} onChange={setColor} />
      <ColorSlider channel="green" value={color} onChange={setColor} />
      <ColorSlider channel="blue" value={color} onChange={setColor} />
      <ColorSlider channel="alpha" value={color} onChange={setColor} />
    </>
  );
}
```

```
import {parseColor} from 'react-stately';

function Example() {
  let [color, setColor] = React.useState(
    parseColor('#7f007f')
  );
  return (
    <>
      <ColorSlider
        channel="red"
        value={color}
        onChange={setColor}
      />
      <ColorSlider
        channel="green"
        value={color}
        onChange={setColor}
      />
      <ColorSlider
        channel="blue"
        value={color}
        onChange={setColor}
      />
      <ColorSlider
        channel="alpha"
        value={color}
        onChange={setColor}
      />
    </>
  );
}
```

```
import {parseColor} from 'react-stately';

function Example() {
  let [color, setColor] =
    React.useState(
      parseColor(
        '#7f007f'
      )
    );
  return (
    <>
      <ColorSlider
        channel="red"
        value={color}
        onChange={setColor}
      />
      <ColorSlider
        channel="green"
        value={color}
        onChange={setColor}
      />
      <ColorSlider
        channel="blue"
        value={color}
        onChange={setColor}
      />
      <ColorSlider
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
  let [color, setColor] = React.useState(parseColor('hsl(0, 100%, 50%)'));
  return (
    <>
      <ColorSlider channel="hue" value={color} onChange={setColor} />
      <ColorSlider channel="saturation" value={color} onChange={setColor} />
      <ColorSlider channel="lightness" value={color} onChange={setColor} />
      <ColorSlider channel="alpha" value={color} onChange={setColor} />
    </>
  );
}
```

```
function Example() {
  let [color, setColor] = React.useState(
    parseColor('hsl(0, 100%, 50%)')
  );
  return (
    <>
      <ColorSlider
        channel="hue"
        value={color}
        onChange={setColor}
      />
      <ColorSlider
        channel="saturation"
        value={color}
        onChange={setColor}
      />
      <ColorSlider
        channel="lightness"
        value={color}
        onChange={setColor}
      />
      <ColorSlider
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
        'hsl(0, 100%, 50%)'
      )
    );
  return (
    <>
      <ColorSlider
        channel="hue"
        value={color}
        onChange={setColor}
      />
      <ColorSlider
        channel="saturation"
        value={color}
        onChange={setColor}
      />
      <ColorSlider
        channel="lightness"
        value={color}
        onChange={setColor}
      />
      <ColorSlider
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
  let [color, setColor] = React.useState(parseColor('hsb(0, 100%, 50%)'));
  return (
    <>
      <ColorSlider channel="hue" value={color} onChange={setColor} />
      <ColorSlider channel="saturation" value={color} onChange={setColor} />
      <ColorSlider channel="brightness" value={color} onChange={setColor} />
      <ColorSlider channel="alpha" value={color} onChange={setColor} />
    </>
  );
}
```

```
function Example() {
  let [color, setColor] = React.useState(
    parseColor('hsb(0, 100%, 50%)')
  );
  return (
    <>
      <ColorSlider
        channel="hue"
        value={color}
        onChange={setColor}
      />
      <ColorSlider
        channel="saturation"
        value={color}
        onChange={setColor}
      />
      <ColorSlider
        channel="brightness"
        value={color}
        onChange={setColor}
      />
      <ColorSlider
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
        'hsb(0, 100%, 50%)'
      )
    );
  return (
    <>
      <ColorSlider
        channel="hue"
        value={color}
        onChange={setColor}
      />
      <ColorSlider
        channel="saturation"
        value={color}
        onChange={setColor}
      />
      <ColorSlider
        channel="brightness"
        value={color}
        onChange={setColor}
      />
      <ColorSlider
        channel="alpha"
        value={color}
        onChange={setColor}
      />
    </>
  );
}
```

The `onChangeEnd` prop can be used to handle when a user stops dragging a color slider, whereas the `onChange` prop is called as the user drags.

```
function Example() {
  let [color, setColor] = React.useState(parseColor('#7f007f'));
  return (
    <>
      <ColorSlider channel="red" defaultValue={color} onChangeEnd={setColor} />
      <p>Current color value: {color.toString('hex')}</p>
    </>
  );
}
```

```
function Example() {
  let [color, setColor] = React.useState(
    parseColor('#7f007f')
  );
  return (
    <>
      <ColorSlider
        channel="red"
        defaultValue={color}
        onChangeEnd={setColor}
      />
      <p>Current color value: {color.toString('hex')}</p>
    </>
  );
}
```

```
function Example() {
  let [color, setColor] =
    React.useState(
      parseColor(
        '#7f007f'
      )
    );
  return (
    <>
      <ColorSlider
        channel="red"
        defaultValue={color}
        onChangeEnd={setColor}
      />
      <p>
        Current color
        value:{' '}
        {color.toString(
          'hex'
        )}
      </p>
    </>
  );
}
```

A `ColorSlider` can be disabled using the `isDisabled` prop. This prevents the thumb from being focused or dragged. It's up to you to style your color slider to appear disabled accordingly.

```
<ColorSlider channel="red" defaultValue="#7f007f" isDisabled />
```

```
<ColorSlider
  channel="red"
  defaultValue="#7f007f"
  isDisabled
/>
```

```
<ColorSlider
  channel="red"
  defaultValue="#7f007f"
  isDisabled
/>
```

ColorSlider supports the `name` prop for integration with HTML forms. The value will be submitted as a number between the minimum and maximum value for the displayed channel.

```
<ColorSlider
  defaultValue="#7f0000"
  channel="red"
  name="red" />
```

```
<ColorSlider
  defaultValue="#7f0000"
  channel="red"
  name="red" />
```

```
<ColorSlider
  defaultValue="#7f0000"
  channel="red"
  name="red" />
```

* * *

By default, a localized string for the channel name is used as the `aria-label` for the `ColorSlider`. When a custom `aria-label` or visual `label` is provided, it should be localized accordingly. To get a localized channel name to use as the visual label, you can use the `color.getChannelName` method.

The `aria-valuetext` of the `<input>` element is formatted according to the user's locale automatically. If you wish to display this value visually in the `<output>` element, you can use the `color.formatChannelValue` method.

In right-to-left languages, color sliders should be mirrored. The label should be right aligned, and the value should be left aligned. Ensure that your CSS accounts for this. Positioning of the thumb and dragging behavior is automatically mirrored by `useColorSlider`.