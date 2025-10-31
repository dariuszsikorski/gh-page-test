# useColorWheel

**Source**: [https://react-spectrum.adobe.com/react-aria/useColorWheel.html](https://react-spectrum.adobe.com/react-aria/useColorWheel.html)

> Documentation for useColorWheel in the React Aria package.

---

Provides the behavior and accessibility implementation for a color wheel component. Color wheels allow users to adjust the hue of an HSL or HSB color value on a circular track.

* * *

`useColorWheel( props: [AriaColorWheelOptions](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/color/src/useColorWheel.ts:AriaColorWheelOptions), state: [ColorWheelState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/color/src/useColorWheelState.ts:ColorWheelState), inputRef: [RefObject](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/refs.d.ts:RefObject)<[HTMLInputElement](https://developer.mozilla.org/docs/Web/API/HTMLInputElement) |  | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)> ): [ColorWheelAria](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/color/src/useColorWheel.ts:ColorWheelAria)`

* * *

The [<input type="color">](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color) HTML element can be used to build a color picker, however it is very inconsistent across browsers and operating systems and consists of a complete color picker rather than only a hue color wheel. `useColorWheel` helps achieve accessible and touch-friendly color wheels that can be styled as needed.

-   Support for adjusting the hue of an HSL or HSB color value
-   Support for mouse, touch, and keyboard via the [useMove](https://react-spectrum.adobe.com/react-aria/useMove.html) hook
-   Multi-touch support
-   Pressing on the track moves the thumb to that position
-   Supports using the arrow keys, as well as page up/down, home, and end keys
-   Support for disabling the color wheel
-   Prevents text selection while dragging
-   Exposed to assistive technology as a `slider` element via ARIA
-   Uses a hidden native input element to support touch screen readers
-   Automatic ARIA labeling using the localized channel name by default

* * *

Shows a color wheel component with labels pointing to its parts, including the track, and thumb elements.TrackThumb

A color wheel consists of a circular track and a thumb that the user can drag to change the color hue. A visually hidden `<input>` element is used to represent the value to assistive technologies.

`useColorWheel` returns three sets of props that you should spread onto the appropriate elements:

Name

Type

Description

`trackProps`

`[DOMAttributes](https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes)`

Props for the track element.

`thumbProps`

`[DOMAttributes](https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes)`

Props for the thumb element.

`inputProps`

`[InputHTMLAttributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes)<[HTMLInputElement](https://developer.mozilla.org/docs/Web/API/HTMLInputElement)>`

Props for the visually hidden range input element.

State is managed by the `[useColorWheelState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/color/src/useColorWheelState.ts:useColorWheelState)` hook from `@react-stately/color`. The state object should be passed as an option to `useColorWheel`

By default, `useColorWheel` provides an `aria-label` for the localized string "Hue". If you wish to override this with a more specific label, an `aria-label` or `aria-labelledby` prop may be passed instead to identify the element to assistive technologies.

* * *

This example shows how to build a simple color wheel with a draggable thumb to adjust the hue value of a color. Styling for the track background and positioning of the thumb are provided by `useColorWheel` in the returned `style` prop for each element. The visually hidden `<input>` element inside the thumb is used to represent the color wheel to assistive technology. The thumb also uses the [useFocusRing](https://react-spectrum.adobe.com/react-aria/useFocusRing.html) hook to grow in size when it is keyboard focused (try tabbing to it).

```
import {useColorWheelState} from 'react-stately';
import {useColorWheel, useFocusRing} from 'react-aria';

const RADIUS = 100;
const TRACK_THICKNESS = 28;
const THUMB_SIZE = 20;

function ColorWheel(props) {
  let { isDisabled } = props;
  let state = useColorWheelState(props);
  let inputRef = React.useRef(null);
  let { trackProps, inputProps, thumbProps } = useColorWheel(
    {
      ...props,
      outerRadius: RADIUS,
      innerRadius: RADIUS - TRACK_THICKNESS
    },
    state,
    inputRef
  );

  let { focusProps, isFocusVisible } = useFocusRing();

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <div
        {...trackProps}
        style={{
          ...trackProps.style,
          background: isDisabled
            ? 'rgb(142, 142, 142)'
            : trackProps.style.background
        }}
      />
      <div
        {...thumbProps}
        style={{
          ...thumbProps.style,
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
        <input {...inputProps} {...focusProps} ref={inputRef} />
      </div>
    </div>
  );
}

<ColorWheel />
```

```
import {useColorWheelState} from 'react-stately';
import {useColorWheel, useFocusRing} from 'react-aria';

const RADIUS = 100;
const TRACK_THICKNESS = 28;
const THUMB_SIZE = 20;

function ColorWheel(props) {
  let { isDisabled } = props;
  let state = useColorWheelState(props);
  let inputRef = React.useRef(null);
  let { trackProps, inputProps, thumbProps } =
    useColorWheel(
      {
        ...props,
        outerRadius: RADIUS,
        innerRadius: RADIUS - TRACK_THICKNESS
      },
      state,
      inputRef
    );

  let { focusProps, isFocusVisible } = useFocusRing();

  return (
    <div
      style={{
        position: 'relative',
        display: 'inline-block'
      }}
    >
      <div
        {...trackProps}
        style={{
          ...trackProps.style,
          background: isDisabled
            ? 'rgb(142, 142, 142)'
            : trackProps.style.background
        }}
      />
      <div
        {...thumbProps}
        style={{
          ...thumbProps.style,
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
          {...inputProps}
          {...focusProps}
          ref={inputRef}
        />
      </div>
    </div>
  );
}

<ColorWheel />
```

```
import {useColorWheelState} from 'react-stately';
import {
  useColorWheel,
  useFocusRing
} from 'react-aria';

const RADIUS = 100;
const TRACK_THICKNESS =
  28;
const THUMB_SIZE = 20;

function ColorWheel(
  props
) {
  let { isDisabled } =
    props;
  let state =
    useColorWheelState(
      props
    );
  let inputRef = React
    .useRef(null);
  let {
    trackProps,
    inputProps,
    thumbProps
  } = useColorWheel(
    {
      ...props,
      outerRadius:
        RADIUS,
      innerRadius:
        RADIUS -
        TRACK_THICKNESS
    },
    state,
    inputRef
  );

  let {
    focusProps,
    isFocusVisible
  } = useFocusRing();

  return (
    <div
      style={{
        position:
          'relative',
        display:
          'inline-block'
      }}
    >
      <div
        {...trackProps}
        style={{
          ...trackProps
            .style,
          background:
            isDisabled
              ? 'rgb(142, 142, 142)'
              : trackProps
                .style
                .background
        }}
      />
      <div
        {...thumbProps}
        style={{
          ...thumbProps
            .style,
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
          {...inputProps}
          {...focusProps}
          ref={inputRef}
        />
      </div>
    </div>
  );
}

<ColorWheel />
```

* * *

The following examples show how to use the `ColorWheel` component created in the above example.

By default, `ColorWheel` is uncontrolled with a default value of red (hue = 0˚). You can change the default value using the `defaultValue` prop.

```
<ColorWheel defaultValue="hsl(80, 100%, 50%)" />
```

```
<ColorWheel defaultValue="hsl(80, 100%, 50%)" />
```

```
<ColorWheel defaultValue="hsl(80, 100%, 50%)" />
```

A `ColorWheel` can be made controlled using the `value` prop. The `[parseColor](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/color/src/Color.ts:parseColor)` function is used to parse the initial color from an HSL string, stored in state. The `onChange` prop is used to update the value in state when the user drags the thumb.

```
import {parseColor} from 'react-stately';

function Example() {
  let [color, setColor] = React.useState(parseColor('hsl(0, 100%, 50%)'));
  return (
    <>
      <ColorWheel value={color} onChange={setColor} />
      <p>Current color value: {color.toString('hsl')}</p>
    </>
  );
}
```

```
import {parseColor} from 'react-stately';

function Example() {
  let [color, setColor] = React.useState(
    parseColor('hsl(0, 100%, 50%)')
  );
  return (
    <>
      <ColorWheel value={color} onChange={setColor} />
      <p>Current color value: {color.toString('hsl')}</p>
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
        'hsl(0, 100%, 50%)'
      )
    );
  return (
    <>
      <ColorWheel
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

The `onChangeEnd` prop can be used to handle when a user stops dragging the color wheel, whereas the `onChange` prop is called as the user drags.

```
function Example() {
  let [color, setColor] = React.useState(parseColor('hsl(0, 100%, 50%)'));
  return (
    <>
      <ColorWheel defaultValue={color} onChangeEnd={setColor} />
      <p>Current color value: {color.toString('hsl')}</p>
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
      <ColorWheel
        defaultValue={color}
        onChangeEnd={setColor}
      />
      <p>Current color value: {color.toString('hsl')}</p>
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
      <ColorWheel
        defaultValue={color}
        onChangeEnd={setColor}
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

A `ColorWheel` can be disabled using the `isDisabled` prop. This prevents the thumb from being focused or dragged. It's up to you to style your color wheel to appear disabled accordingly.

```
<ColorWheel defaultValue="hsl(80, 100%, 50%)" isDisabled />
```

```
<ColorWheel defaultValue="hsl(80, 100%, 50%)" isDisabled />
```

```
<ColorWheel
  defaultValue="hsl(80, 100%, 50%)"
  isDisabled
/>
```

ColorWheel supports the `name` prop for integration with HTML forms. The value will be submitted as a number between 0 and 360 degrees.

```
<ColorWheel name="hue" />
```

```
<ColorWheel name="hue" />
```

```
<ColorWheel name="hue" />
```

* * *

By default, a localized string for the "hue" channel name is used as the `aria-label` for the `ColorWheel`. When a custom `aria-label` is provided, it should be localized accordingly. To get a localized channel name to use as a visual label, you can use the `color.getChannelName` method.

The `aria-valuetext` of the `<input>` element is formatted according to the user's locale automatically. If you wish to display this value visually, you can use the `color.formatChannelValue` method.

Color wheels should not be mirrored in right-to-left languages.