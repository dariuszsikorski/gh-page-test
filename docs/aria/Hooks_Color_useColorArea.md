# useColorArea

**Source**: [https://react-spectrum.adobe.com/react-aria/useColorArea.html](https://react-spectrum.adobe.com/react-aria/useColorArea.html)

> Documentation for useColorArea in the React Aria package.

---

Provides the behavior and accessibility implementation for a color area component. Color area allows users to adjust two channels of an RGB, HSL or HSB color value against a two-dimensional gradient background.

* * *

`useColorArea( (props: [AriaColorAreaOptions](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/color/src/useColorArea.ts:AriaColorAreaOptions), , state: [ColorAreaState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/color/src/useColorAreaState.ts:ColorAreaState) )): [ColorAreaAria](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/color/src/useColorArea.ts:ColorAreaAria)`

* * *

The [<input type="color">](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color) HTML element can be used to build a color picker, however it is very inconsistent across browsers and operating systems and consists of a complete color picker rather than a color area. `useColorArea` helps achieve accessible and touch-friendly color areas that can be styled as needed.

-   Support for adjusting two-channel values of an HSL, HSB or RGB color value
-   Support for mouse, touch, and keyboard via the [useMove](https://react-spectrum.adobe.com/react-aria/useMove.html) hook
-   Multi-touch support
-   Pressing on the color area background moves the thumb to that position
-   Supports using the arrow keys, for changing value by step, as well as shift + arrow key, page up/down, home, and end keys, for changing the value by page step.
-   Support for disabling the color area
-   Prevents text selection while dragging
-   Exposed to assistive technology as a `2D slider` element via ARIA
-   Uses two hidden native input elements within a group to support touch screen readers
-   Automatic ARIA labeling using the localized channel names by default
-   Support for mirroring in RTL locales

* * *

Shows a color area component with labels pointing to its parts, including the area, and thumb elements.AreaThumb

A color area consists of a rectangular background area that provides, using a two-dimensional gradient, a visual representation of the range of color values from which a user can select, and a thumb that the user can drag to change the selected color value. Two visually hidden `<input>` elements are used to represent the color channel values to assistive technologies.

`useColorArea` returns five sets of props that you should spread onto the appropriate elements:

Name

Type

Description

`colorAreaProps`

`[DOMAttributes](https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes)`

Props for the color area container element.

`thumbProps`

`[DOMAttributes](https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes)`

Props for the thumb element.

`xInputProps`

`[InputHTMLAttributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes)<[HTMLInputElement](https://developer.mozilla.org/docs/Web/API/HTMLInputElement)>`

Props for the visually hidden horizontal range input element.

`yInputProps`

`[InputHTMLAttributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes)<[HTMLInputElement](https://developer.mozilla.org/docs/Web/API/HTMLInputElement)>`

Props for the visually hidden vertical range input element.

State is managed by the `[useColorAreaState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/color/src/useColorAreaState.ts:useColorAreaState)` hook from `@react-stately/color`. The state object should be passed as an option to `useColorArea`.

By default, `useColorArea` provides an `aria-label` for the localized string "Color Picker", which labels the visually hidden `<input>` elements for the two color channels, or on mobile devices, the group containing them. If you wish to override this with a more specific label, an `aria-label` or `aria-labelledby` prop may be passed to further to identify the element to assistive technologies.

The `aria-valuetext` for each `<input>` will include the localized color channel name and current value for each channel.

* * *

This example shows how to build a color area with a draggable thumb to adjust two color channel values of a color. Styling for the background gradient and positioning of the thumb are provided by `useColorArea` in the returned props for each element. The two `<input>` elements inside the thumb represent the color channel values to assistive technologies, and are hidden from view. The thumb also uses the [useFocusRing](https://react-spectrum.adobe.com/react-aria/useFocusRing.html) hook to grow in size when it is keyboard focused (try tabbing to it).

```
import {useColorAreaState} from 'react-stately';
import {useColorArea, useFocusRing} from 'react-aria';

const SIZE = 192;
const FOCUSED_THUMB_SIZE = 28;
const THUMB_SIZE = 20;
const BORDER_RADIUS = 4;

function ColorArea(props) {
  let inputXRef = React.useRef(null);
  let inputYRef = React.useRef(null);
  let containerRef = React.useRef(null);

  let state = useColorAreaState(props);

  let { isDisabled } = props;

  let {
    colorAreaProps,
    xInputProps,
    yInputProps,
    thumbProps
  } = useColorArea({ ...props, inputXRef, inputYRef, containerRef }, state);

  let { focusProps, isFocusVisible } = useFocusRing();

  return (
    <div
      ref={containerRef}
      {...colorAreaProps}
      style={{
        ...colorAreaProps.style,
        width: SIZE,
        height: SIZE,
        borderRadius: BORDER_RADIUS,
        background: isDisabled
          ? 'rgb(142, 142, 142)'
          : colorAreaProps.style.background,
        opacity: isDisabled ? 0.3 : undefined
      }}
    >
      <div
        {...thumbProps}
        style={{
          ...thumbProps.style,
          background: isDisabled
            ? 'rgb(142, 142, 142)'
            : state.getDisplayColor().toString('css'),
          border: `2px solid ${isDisabled ? 'rgb(142, 142, 142)' : 'white'}`,
          borderRadius: '50%',
          boxShadow: '0 0 0 1px black, inset 0 0 0 1px black',
          boxSizing: 'border-box',
          height: isFocusVisible ? FOCUSED_THUMB_SIZE + 4 : THUMB_SIZE,
          width: isFocusVisible ? FOCUSED_THUMB_SIZE + 4 : THUMB_SIZE
        }}
      >
        <input ref={inputXRef} {...xInputProps} {...focusProps} />
        <input ref={inputYRef} {...yInputProps} {...focusProps} />
      </div>
    </div>
  );
}

<ColorArea />
```

```
import {useColorAreaState} from 'react-stately';
import {useColorArea, useFocusRing} from 'react-aria';

const SIZE = 192;
const FOCUSED_THUMB_SIZE = 28;
const THUMB_SIZE = 20;
const BORDER_RADIUS = 4;

function ColorArea(props) {
  let inputXRef = React.useRef(null);
  let inputYRef = React.useRef(null);
  let containerRef = React.useRef(null);

  let state = useColorAreaState(props);

  let { isDisabled } = props;

  let {
    colorAreaProps,
    xInputProps,
    yInputProps,
    thumbProps
  } = useColorArea({
    ...props,
    inputXRef,
    inputYRef,
    containerRef
  }, state);

  let { focusProps, isFocusVisible } = useFocusRing();

  return (
    <div
      ref={containerRef}
      {...colorAreaProps}
      style={{
        ...colorAreaProps.style,
        width: SIZE,
        height: SIZE,
        borderRadius: BORDER_RADIUS,
        background: isDisabled
          ? 'rgb(142, 142, 142)'
          : colorAreaProps.style.background,
        opacity: isDisabled ? 0.3 : undefined
      }}
    >
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
          borderRadius: '50%',
          boxShadow:
            '0 0 0 1px black, inset 0 0 0 1px black',
          boxSizing: 'border-box',
          height: isFocusVisible
            ? FOCUSED_THUMB_SIZE + 4
            : THUMB_SIZE,
          width: isFocusVisible
            ? FOCUSED_THUMB_SIZE + 4
            : THUMB_SIZE
        }}
      >
        <input
          ref={inputXRef}
          {...xInputProps}
          {...focusProps}
        />
        <input
          ref={inputYRef}
          {...yInputProps}
          {...focusProps}
        />
      </div>
    </div>
  );
}

<ColorArea />
```

```
import {useColorAreaState} from 'react-stately';
import {
  useColorArea,
  useFocusRing
} from 'react-aria';

const SIZE = 192;
const FOCUSED_THUMB_SIZE =
  28;
const THUMB_SIZE = 20;
const BORDER_RADIUS = 4;

function ColorArea(
  props
) {
  let inputXRef = React
    .useRef(null);
  let inputYRef = React
    .useRef(null);
  let containerRef =
    React.useRef(null);

  let state =
    useColorAreaState(
      props
    );

  let { isDisabled } =
    props;

  let {
    colorAreaProps,
    xInputProps,
    yInputProps,
    thumbProps
  } = useColorArea({
    ...props,
    inputXRef,
    inputYRef,
    containerRef
  }, state);

  let {
    focusProps,
    isFocusVisible
  } = useFocusRing();

  return (
    <div
      ref={containerRef}
      {...colorAreaProps}
      style={{
        ...colorAreaProps
          .style,
        width: SIZE,
        height: SIZE,
        borderRadius:
          BORDER_RADIUS,
        background:
          isDisabled
            ? 'rgb(142, 142, 142)'
            : colorAreaProps
              .style
              .background,
        opacity:
          isDisabled
            ? 0.3
            : undefined
      }}
    >
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
          borderRadius:
            '50%',
          boxShadow:
            '0 0 0 1px black, inset 0 0 0 1px black',
          boxSizing:
            'border-box',
          height:
            isFocusVisible
              ? FOCUSED_THUMB_SIZE +
                4
              : THUMB_SIZE,
          width:
            isFocusVisible
              ? FOCUSED_THUMB_SIZE +
                4
              : THUMB_SIZE
        }}
      >
        <input
          ref={inputXRef}
          {...xInputProps}
          {...focusProps}
        />
        <input
          ref={inputYRef}
          {...yInputProps}
          {...focusProps}
        />
      </div>
    </div>
  );
}

<ColorArea />
```

* * *

The following examples show how to use the `ColorArea` component created in the above example.

By default, color area is uncontrolled, with a default value of white using the RGB color space (`rgb(255, 255, 255)`). You can change the default value using the `defaultValue` prop, and the color area will use the color space of the provided value. If no `xChannel` or `yChannel` is provided, for the RGB color space, the `red` color channel maps to the horizontal axis or `xChannel`, and the `green` color channel maps to the vertical axis or `yChannel`. Similarly, for the HSL and HSB color spaces, the `hue` color channel maps to the horizontal axis or `xChannel`, and the `saturation` color channel maps to the vertical axis or `yChannel`.

```
<label id="hsb-label-id">x: Hue, y: Saturation</label>
<ColorArea
  aria-labelledby="hsb-label-id"
  defaultValue="hsb(219, 58%, 93%)" />
```

```
<label id="hsb-label-id">x: Hue, y: Saturation</label>
<ColorArea
  aria-labelledby="hsb-label-id"
  defaultValue="hsb(219, 58%, 93%)" />
```

```
<label id="hsb-label-id">
  x: Hue, y: Saturation
</label>
<ColorArea
  aria-labelledby="hsb-label-id"
  defaultValue="hsb(219, 58%, 93%)"
/>
```

A color area can be made controlled using the `value` prop. The `[parseColor](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/color/src/Color.ts:parseColor)` function is used to parse the initial color from an RGB, HSL or HSB string, stored in state.

The `onChange` prop is used to update the value in the state when the user drags the thumb. This is the more common usage because it allows to adjust the third color channel using a separate control, like a color slider using the [useColorSlider](https://react-spectrum.adobe.com/react-aria/useColorSlider.html) hook or a color wheel using the [useColorWheel](https://react-spectrum.adobe.com/react-aria/useColorWheel.html) hook, or to display the color value stored in a state using a preview swatch.

The `onChangeEnd` prop can be used to handle when a user stops dragging the color area.

```
import {parseColor} from 'react-stately';

function Example() {
  let [
    color,
    setColor
  ] = React.useState(parseColor('hsba(219, 58%, 93%, 0.75)'));
  let [
    endColor,
    setEndColor
  ] = React.useState(color);
  let [
    xChannel,
    yChannel,
    zChannel
  ] = color.getColorChannels();
  return (
    <>
      <label id="hsb-label-id-1">
        x: {color.getChannelName(xChannel, 'en-US')}, y:{' '}
        {color.getChannelName(yChannel, 'en-US')}
      </label>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem'
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}
        >
          <ColorArea
            aria-labelledby="hsb-label-id-1"
            value={color}
            onChange={setColor}
            onChangeEnd={setEndColor}
            xChannel={xChannel}
            yChannel={yChannel}
          />
          <ColorSlider
            channel={zChannel}
            value={color}
            onChange={setColor}
            onChangeEnd={setEndColor}
          />
          <ColorSlider
            channel="alpha"
            value={color}
            onChange={setColor}
            onChangeEnd={setEndColor}
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: '6px'
            }}
          >
            <ColorSwatch
              color={color.withChannelValue('alpha', 1)}
              aria-label={`current color swatch: ${color.toString('hsl')}`}
            />
            <ColorSwatch
              color={color}
              aria-label={`current color swatch with alpha channel: ${
                color.toString('hsla')
              }`}
            />
          </div>
          <div
            style={{
              display: 'flex',
              gap: '6px'
            }}
          >
            <ColorSwatch
              color={endColor.withChannelValue('alpha', 1)}
              aria-label={`end color swatch: ${endColor.toString('hsb')}`}
            />
            <ColorSwatch
              color={endColor}
              aria-label={`end color swatch with alpha channel: ${
                endColor.toString('hsba')
              }`}
            />
          </div>
        </div>
      </div>
      <p>Current color value: {color.toString('hsba')}</p>
      <p>End color value: {endColor.toString('hsba')}</p>
    </>
  );
}
```

```
import {parseColor} from 'react-stately';

function Example() {
  let [
    color,
    setColor
  ] = React.useState(
    parseColor('hsba(219, 58%, 93%, 0.75)')
  );
  let [
    endColor,
    setEndColor
  ] = React.useState(color);
  let [
    xChannel,
    yChannel,
    zChannel
  ] = color.getColorChannels();
  return (
    <>
      <label id="hsb-label-id-1">
        x: {color.getChannelName(xChannel, 'en-US')}, y:
        {' '}
        {color.getChannelName(yChannel, 'en-US')}
      </label>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem'
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}
        >
          <ColorArea
            aria-labelledby="hsb-label-id-1"
            value={color}
            onChange={setColor}
            onChangeEnd={setEndColor}
            xChannel={xChannel}
            yChannel={yChannel}
          />
          <ColorSlider
            channel={zChannel}
            value={color}
            onChange={setColor}
            onChangeEnd={setEndColor}
          />
          <ColorSlider
            channel="alpha"
            value={color}
            onChange={setColor}
            onChangeEnd={setEndColor}
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: '6px'
            }}
          >
            <ColorSwatch
              color={color.withChannelValue('alpha', 1)}
              aria-label={`current color swatch: ${
                color.toString('hsl')
              }`}
            />
            <ColorSwatch
              color={color}
              aria-label={`current color swatch with alpha channel: ${
                color.toString('hsla')
              }`}
            />
          </div>
          <div
            style={{
              display: 'flex',
              gap: '6px'
            }}
          >
            <ColorSwatch
              color={endColor.withChannelValue('alpha', 1)}
              aria-label={`end color swatch: ${
                endColor.toString('hsb')
              }`}
            />
            <ColorSwatch
              color={endColor}
              aria-label={`end color swatch with alpha channel: ${
                endColor.toString('hsba')
              }`}
            />
          </div>
        </div>
      </div>
      <p>Current color value: {color.toString('hsba')}</p>
      <p>End color value: {endColor.toString('hsba')}</p>
    </>
  );
}
```

```
import {parseColor} from 'react-stately';

function Example() {
  let [
    color,
    setColor
  ] = React.useState(
    parseColor(
      'hsba(219, 58%, 93%, 0.75)'
    )
  );
  let [
    endColor,
    setEndColor
  ] = React.useState(
    color
  );
  let [
    xChannel,
    yChannel,
    zChannel
  ] = color
    .getColorChannels();
  return (
    <>
      <label id="hsb-label-id-1">
        x:{' '}
        {color
          .getChannelName(
            xChannel,
            'en-US'
          )}, y:{' '}
        {color
          .getChannelName(
            yChannel,
            'en-US'
          )}
      </label>
      <div
        style={{
          display:
            'flex',
          flexWrap:
            'wrap',
          gap: '1rem'
        }}
      >
        <div
          style={{
            display:
              'flex',
            flexDirection:
              'column',
            gap: '1rem'
          }}
        >
          <ColorArea
            aria-labelledby="hsb-label-id-1"
            value={color}
            onChange={setColor}
            onChangeEnd={setEndColor}
            xChannel={xChannel}
            yChannel={yChannel}
          />
          <ColorSlider
            channel={zChannel}
            value={color}
            onChange={setColor}
            onChangeEnd={setEndColor}
          />
          <ColorSlider
            channel="alpha"
            value={color}
            onChange={setColor}
            onChangeEnd={setEndColor}
          />
        </div>
        <div
          style={{
            display:
              'flex',
            flexDirection:
              'column',
            gap: '1rem'
          }}
        >
          <div
            style={{
              display:
                'flex',
              gap: '6px'
            }}
          >
            <ColorSwatch
              color={color
                .withChannelValue(
                  'alpha',
                  1
                )}
              aria-label={`current color swatch: ${
                color
                  .toString(
                    'hsl'
                  )
              }`}
            />
            <ColorSwatch
              color={color}
              aria-label={`current color swatch with alpha channel: ${
                color
                  .toString(
                    'hsla'
                  )
              }`}
            />
          </div>
          <div
            style={{
              display:
                'flex',
              gap: '6px'
            }}
          >
            <ColorSwatch
              color={endColor
                .withChannelValue(
                  'alpha',
                  1
                )}
              aria-label={`end color swatch: ${
                endColor
                  .toString(
                    'hsb'
                  )
              }`}
            />
            <ColorSwatch
              color={endColor}
              aria-label={`end color swatch with alpha channel: ${
                endColor
                  .toString(
                    'hsba'
                  )
              }`}
            />
          </div>
        </div>
      </div>
      <p>
        Current color
        value:{' '}
        {color.toString(
          'hsba'
        )}
      </p>
      <p>
        End color value:
        {' '}
        {endColor
          .toString(
            'hsba'
          )}
      </p>
    </>
  );
}
```

The `ColorSlider` component used in the example above controls the channel value not controlled by the `ColorArea`, in this case, the `brightness` channel, or the `alpha` channel. It is built using the [useColorSlider](https://react-spectrum.adobe.com/react-aria/useColorSlider.html) hook, and can be shared with other color components.

Show code

```
import {useColorSliderState} from 'react-stately';
import {useColorSlider, useFocusRing, useLocale, VisuallyHidden} from 'react-aria';

function ColorSlider(props) {
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
        width: SIZE
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
        className="color-slider-track"
        {...trackProps}
        ref={trackRef}
        style={{
          height: FOCUSED_THUMB_SIZE
        }}
      >
        <div className="color-slider-track-background"></div>
        <div
          className="color-slider-track-color"
          style={{
            ...trackProps.style
          }}
        >
        </div>
        <div
          className={`color-slider-thumb${isFocusVisible ? ' is-focused' : ''}`}
          {...thumbProps}
          style={{
            ...thumbProps.style
          }}
        >
          <div className="color-slider-thumb-background"></div>
          <div
            className="color-slider-thumb-color"
            style={{
              background: state.getDisplayColor().toString('css')
            }}
          >
          </div>
          <VisuallyHidden>
            <input ref={inputRef} {...inputProps} {...focusProps} />
          </VisuallyHidden>
        </div>
      </div>
    </div>
  );
}
```

```
import {useColorSliderState} from 'react-stately';
import {
  useColorSlider,
  useFocusRing,
  useLocale,
  VisuallyHidden
} from 'react-aria';

function ColorSlider(props) {
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
        width: SIZE
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
        className="color-slider-track"
        {...trackProps}
        ref={trackRef}
        style={{
          height: FOCUSED_THUMB_SIZE
        }}
      >
        <div className="color-slider-track-background">
        </div>
        <div
          className="color-slider-track-color"
          style={{
            ...trackProps.style
          }}
        >
        </div>
        <div
          className={`color-slider-thumb${
            isFocusVisible ? ' is-focused' : ''
          }`}
          {...thumbProps}
          style={{
            ...thumbProps.style
          }}
        >
          <div className="color-slider-thumb-background">
          </div>
          <div
            className="color-slider-thumb-color"
            style={{
              background: state.getDisplayColor().toString(
                'css'
              )
            }}
          >
          </div>
          <VisuallyHidden>
            <input
              ref={inputRef}
              {...inputProps}
              {...focusProps}
            />
          </VisuallyHidden>
        </div>
      </div>
    </div>
  );
}
```

```
import {useColorSliderState} from 'react-stately';
import {
  useColorSlider,
  useFocusRing,
  useLocale,
  VisuallyHidden
} from 'react-aria';

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
        width: SIZE
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
        className="color-slider-track"
        {...trackProps}
        ref={trackRef}
        style={{
          height:
            FOCUSED_THUMB_SIZE
        }}
      >
        <div className="color-slider-track-background">
        </div>
        <div
          className="color-slider-track-color"
          style={{
            ...trackProps
              .style
          }}
        >
        </div>
        <div
          className={`color-slider-thumb${
            isFocusVisible
              ? ' is-focused'
              : ''
          }`}
          {...thumbProps}
          style={{
            ...thumbProps
              .style
          }}
        >
          <div className="color-slider-thumb-background">
          </div>
          <div
            className="color-slider-thumb-color"
            style={{
              background:
                state
                  .getDisplayColor()
                  .toString(
                    'css'
                  )
            }}
          >
          </div>
          <VisuallyHidden>
            <input
              ref={inputRef}
              {...inputProps}
              {...focusProps}
            />
          </VisuallyHidden>
        </div>
      </div>
    </div>
  );
}
```

Show CSS

```
  .color-slider-track,
  .color-slider-track-background,
  .color-slider-track-color {
    width: 100%;
    border-radius: 4px;
    forced-color-adjust: none;
    position: relative;
  }

  .color-slider-track-background,
  .color-slider-track-color {
    position: absolute;
    height: 100%;
  }

  .color-slider-thumb {
    position: absolute;
    top: 14px;
    border: 2px solid white;
    box-shadow:
      0 0 0 1px black,
      inset 0 0 0 1px black;
    border-radius: 50%;
    box-sizing: border-box;
    width: 20px;
    height: 20px;
  }

  .color-slider-thumb.is-focused {
    width: 32px;
    height: 32px;
  }

  .color-slider-track-background,
  .color-slider-thumb-background {
    background-size: 16px 16px;
    background-position:
      -2px -2px,
      -2px 6px,
      6px -10px,
      -10px -2px;
    background-color: white;
    background-image:
      linear-gradient(-45deg, transparent 75.5%, rgb(188, 188, 188) 75.5%),
      linear-gradient(45deg, transparent 75.5%, rgb(188, 188, 188) 75.5%),
      linear-gradient(-45deg, rgb(188, 188, 188) 25.5%, transparent 25.5%),
      linear-gradient(45deg, rgb(188, 188, 188) 25.5%, transparent 25.5%);
  }

  .color-slider-thumb-background,
  .color-slider-thumb-color {
    position: absolute;
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }
```

```
  .color-slider-track,
  .color-slider-track-background,
  .color-slider-track-color {
    width: 100%;
    border-radius: 4px;
    forced-color-adjust: none;
    position: relative;
  }

  .color-slider-track-background,
  .color-slider-track-color {
    position: absolute;
    height: 100%;
  }

  .color-slider-thumb {
    position: absolute;
    top: 14px;
    border: 2px solid white;
    box-shadow:
      0 0 0 1px black,
      inset 0 0 0 1px black;
    border-radius: 50%;
    box-sizing: border-box;
    width: 20px;
    height: 20px;
  }

  .color-slider-thumb.is-focused {
    width: 32px;
    height: 32px;
  }

  .color-slider-track-background,
  .color-slider-thumb-background {
    background-size: 16px 16px;
    background-position:
      -2px -2px,
      -2px 6px,
      6px -10px,
      -10px -2px;
    background-color: white;
    background-image:
      linear-gradient(-45deg, transparent 75.5%, rgb(188, 188, 188) 75.5%),
      linear-gradient(45deg, transparent 75.5%, rgb(188, 188, 188) 75.5%),
      linear-gradient(-45deg, rgb(188, 188, 188) 25.5%, transparent 25.5%),
      linear-gradient(45deg, rgb(188, 188, 188) 25.5%, transparent 25.5%);
  }

  .color-slider-thumb-background,
  .color-slider-thumb-color {
    position: absolute;
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }
```

```
  .color-slider-track,
  .color-slider-track-background,
  .color-slider-track-color {
    width: 100%;
    border-radius: 4px;
    forced-color-adjust: none;
    position: relative;
  }

  .color-slider-track-background,
  .color-slider-track-color {
    position: absolute;
    height: 100%;
  }

  .color-slider-thumb {
    position: absolute;
    top: 14px;
    border: 2px solid white;
    box-shadow:
      0 0 0 1px black,
      inset 0 0 0 1px black;
    border-radius: 50%;
    box-sizing: border-box;
    width: 20px;
    height: 20px;
  }

  .color-slider-thumb.is-focused {
    width: 32px;
    height: 32px;
  }

  .color-slider-track-background,
  .color-slider-thumb-background {
    background-size: 16px 16px;
    background-position:
      -2px -2px,
      -2px 6px,
      6px -10px,
      -10px -2px;
    background-color: white;
    background-image:
      linear-gradient(-45deg, transparent 75.5%, rgb(188, 188, 188) 75.5%),
      linear-gradient(45deg, transparent 75.5%, rgb(188, 188, 188) 75.5%),
      linear-gradient(-45deg, rgb(188, 188, 188) 25.5%, transparent 25.5%),
      linear-gradient(45deg, rgb(188, 188, 188) 25.5%, transparent 25.5%);
  }

  .color-slider-thumb-background,
  .color-slider-thumb-color {
    position: absolute;
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }
```

The `ColorSwatch` component used in the example above implements an image preview of the color with the [useColorSwatch](https://react-spectrum.adobe.com/react-aria/useColorSwatch.html) hook.

Show code

```
import {useColorSwatch} from 'react-aria';

function ColorSwatch(props) {
  let { colorSwatchProps, color } = useColorSwatch(props);

  return (
    <span
      {...colorSwatchProps}
      style={{
        ...colorSwatchProps.style,
        display: 'inline-block',
        width: 32,
        height: 32,
        borderRadius: 4,
        background: `linear-gradient(${color}, ${color}),
          repeating-conic-gradient(#CCC 0% 25%, white 0% 50%) 50% / 16px 16px`,
        ...props.style
      }}
    />
  );
}
```

```
import {useColorSwatch} from 'react-aria';

function ColorSwatch(props) {
  let { colorSwatchProps, color } = useColorSwatch(props);

  return (
    <span
      {...colorSwatchProps}
      style={{
        ...colorSwatchProps.style,
        display: 'inline-block',
        width: 32,
        height: 32,
        borderRadius: 4,
        background: `linear-gradient(${color}, ${color}),
          repeating-conic-gradient(#CCC 0% 25%, white 0% 50%) 50% / 16px 16px`,
        ...props.style
      }}
    />
  );
}
```

```
import {useColorSwatch} from 'react-aria';

function ColorSwatch(
  props
) {
  let {
    colorSwatchProps,
    color
  } = useColorSwatch(
    props
  );

  return (
    <span
      {...colorSwatchProps}
      style={{
        ...colorSwatchProps
          .style,
        display:
          'inline-block',
        width: 32,
        height: 32,
        borderRadius: 4,
        background:
          `linear-gradient(${color}, ${color}),
          repeating-conic-gradient(#CCC 0% 25%, white 0% 50%) 50% / 16px 16px`,
        ...props.style
      }}
    />
  );
}
```

### xChannel and yChannel[#](#xchannel-and-ychannel)

The color channel for each axis of a color area can be specified using the `xChannel` and `yChannel` props. An array of channel names for a color can be returned using the `color.getColorChannels` method. To get a localized channel name to use as a label, you can use the `color.getChannelName` method.

```
import {parseColor} from 'react-stately';

function Example() {
  let [
    color,
    setColor
  ] = React.useState(parseColor('rgb(100, 149, 237)'));
  let [
    rChannel,
    gChannel,
    bChannel
  ] = color.getColorChannels();
  return (
    <>
      <div style={{ display: 'inline-flex', flexWrap: 'wrap' }}>
        <div style={{ marginRight: '2rem', marginBottom: '2rem' }}>
          <label id="gbr-label-id-1">
            x: {color.getChannelName(gChannel, 'en-US')}, y:{' '}
            {color.getChannelName(bChannel, 'en-US')}
          </label>
          <ColorArea
            aria-labelledby="gbr-label-id-1"
            value={color}
            onChange={setColor}
            xChannel={gChannel}
            yChannel={bChannel}
          />
          <ColorSlider
            channel={rChannel}
            value={color}
            onChange={setColor}
          />
        </div>
        <div style={{ marginRight: '2rem', marginBottom: '2rem' }}>
          <label id="brg-label-id-1">
            x: {color.getChannelName(bChannel, 'en-US')}, y:{' '}
            {color.getChannelName(rChannel, 'en-US')}
          </label>
          <ColorArea
            aria-labelledby="brg-label-id-1"
            value={color}
            onChange={setColor}
            xChannel={bChannel}
            yChannel={rChannel}
          />
          <ColorSlider
            channel={gChannel}
            value={color}
            onChange={setColor}
          />
        </div>
        <div style={{ marginRight: '2rem', marginBottom: '2rem' }}>
          <label id="rgb-label-id-1">
            x: {color.getChannelName(rChannel, 'en-US')}, y:{' '}
            {color.getChannelName(gChannel, 'en-US')}
          </label>
          <ColorArea
            aria-labelledby="rgb-label-id-1"
            value={color}
            onChange={setColor}
            xChannel={rChannel}
            yChannel={gChannel}
          />
          <ColorSlider
            channel={bChannel}
            value={color}
            onChange={setColor}
          />
        </div>
      </div>
      <p>
        Current RGB color value:{' '}
        <ColorSwatch
          color={color}
          style={{
            width: '16px',
            height: '16px',
            verticalAlign: 'text-bottom'
          }}
        />{' '}
        {color.toString('rgb')}
      </p>
    </>
  );
}
```

```
import {parseColor} from 'react-stately';

function Example() {
  let [
    color,
    setColor
  ] = React.useState(parseColor('rgb(100, 149, 237)'));
  let [
    rChannel,
    gChannel,
    bChannel
  ] = color.getColorChannels();
  return (
    <>
      <div
        style={{ display: 'inline-flex', flexWrap: 'wrap' }}
      >
        <div
          style={{
            marginRight: '2rem',
            marginBottom: '2rem'
          }}
        >
          <label id="gbr-label-id-1">
            x: {color.getChannelName(gChannel, 'en-US')}, y:
            {' '}
            {color.getChannelName(bChannel, 'en-US')}
          </label>
          <ColorArea
            aria-labelledby="gbr-label-id-1"
            value={color}
            onChange={setColor}
            xChannel={gChannel}
            yChannel={bChannel}
          />
          <ColorSlider
            channel={rChannel}
            value={color}
            onChange={setColor}
          />
        </div>
        <div
          style={{
            marginRight: '2rem',
            marginBottom: '2rem'
          }}
        >
          <label id="brg-label-id-1">
            x: {color.getChannelName(bChannel, 'en-US')}, y:
            {' '}
            {color.getChannelName(rChannel, 'en-US')}
          </label>
          <ColorArea
            aria-labelledby="brg-label-id-1"
            value={color}
            onChange={setColor}
            xChannel={bChannel}
            yChannel={rChannel}
          />
          <ColorSlider
            channel={gChannel}
            value={color}
            onChange={setColor}
          />
        </div>
        <div
          style={{
            marginRight: '2rem',
            marginBottom: '2rem'
          }}
        >
          <label id="rgb-label-id-1">
            x: {color.getChannelName(rChannel, 'en-US')}, y:
            {' '}
            {color.getChannelName(gChannel, 'en-US')}
          </label>
          <ColorArea
            aria-labelledby="rgb-label-id-1"
            value={color}
            onChange={setColor}
            xChannel={rChannel}
            yChannel={gChannel}
          />
          <ColorSlider
            channel={bChannel}
            value={color}
            onChange={setColor}
          />
        </div>
      </div>
      <p>
        Current RGB color value:{' '}
        <ColorSwatch
          color={color}
          style={{
            width: '16px',
            height: '16px',
            verticalAlign: 'text-bottom'
          }}
        />{' '}
        {color.toString('rgb')}
      </p>
    </>
  );
}
```

```
import {parseColor} from 'react-stately';

function Example() {
  let [
    color,
    setColor
  ] = React.useState(
    parseColor(
      'rgb(100, 149, 237)'
    )
  );
  let [
    rChannel,
    gChannel,
    bChannel
  ] = color
    .getColorChannels();
  return (
    <>
      <div
        style={{
          display:
            'inline-flex',
          flexWrap:
            'wrap'
        }}
      >
        <div
          style={{
            marginRight:
              '2rem',
            marginBottom:
              '2rem'
          }}
        >
          <label id="gbr-label-id-1">
            x:{' '}
            {color
              .getChannelName(
                gChannel,
                'en-US'
              )}, y:{' '}
            {color
              .getChannelName(
                bChannel,
                'en-US'
              )}
          </label>
          <ColorArea
            aria-labelledby="gbr-label-id-1"
            value={color}
            onChange={setColor}
            xChannel={gChannel}
            yChannel={bChannel}
          />
          <ColorSlider
            channel={rChannel}
            value={color}
            onChange={setColor}
          />
        </div>
        <div
          style={{
            marginRight:
              '2rem',
            marginBottom:
              '2rem'
          }}
        >
          <label id="brg-label-id-1">
            x:{' '}
            {color
              .getChannelName(
                bChannel,
                'en-US'
              )}, y:{' '}
            {color
              .getChannelName(
                rChannel,
                'en-US'
              )}
          </label>
          <ColorArea
            aria-labelledby="brg-label-id-1"
            value={color}
            onChange={setColor}
            xChannel={bChannel}
            yChannel={rChannel}
          />
          <ColorSlider
            channel={gChannel}
            value={color}
            onChange={setColor}
          />
        </div>
        <div
          style={{
            marginRight:
              '2rem',
            marginBottom:
              '2rem'
          }}
        >
          <label id="rgb-label-id-1">
            x:{' '}
            {color
              .getChannelName(
                rChannel,
                'en-US'
              )}, y:{' '}
            {color
              .getChannelName(
                gChannel,
                'en-US'
              )}
          </label>
          <ColorArea
            aria-labelledby="rgb-label-id-1"
            value={color}
            onChange={setColor}
            xChannel={rChannel}
            yChannel={gChannel}
          />
          <ColorSlider
            channel={bChannel}
            value={color}
            onChange={setColor}
          />
        </div>
      </div>
      <p>
        Current RGB color
        value:{' '}
        <ColorSwatch
          color={color}
          style={{
            width:
              '16px',
            height:
              '16px',
            verticalAlign:
              'text-bottom'
          }}
        />{' '}
        {color.toString(
          'rgb'
        )}
      </p>
    </>
  );
}
```

```
import {parseColor} from 'react-stately';

function Example() {
  let [
    color,
    setColor
  ] = React.useState(parseColor('hsl(219, 79%, 66%)'));
  let [
    hChannel,
    sChannel,
    lChannel
  ] = color.getColorChannels();
  return (
    <>
      <div style={{ display: 'inline-flex', flexWrap: 'wrap' }}>
        <div style={{ marginRight: '2rem', marginBottom: '2rem' }}>
          <label id="slh-label-id-1">
            x: {color.getChannelName(sChannel, 'en-US')}, y:{' '}
            {color.getChannelName(lChannel, 'en-US')}
          </label>
          <ColorArea
            aria-labelledby="slh-label-id-1"
            value={color}
            onChange={setColor}
            xChannel={sChannel}
            yChannel={lChannel}
          />
          <ColorSlider
            channel={hChannel}
            value={color}
            onChange={setColor}
          />
        </div>
        <div style={{ marginRight: '2rem', marginBottom: '2rem' }}>
          <label id="lhs-label-id-1">
            x: {color.getChannelName(hChannel, 'en-US')}, y:{' '}
            {color.getChannelName(lChannel, 'en-US')}
          </label>
          <ColorArea
            aria-labelledby="lhs-label-id-1"
            value={color}
            onChange={setColor}
            xChannel={hChannel}
            yChannel={lChannel}
          />
          <ColorSlider
            channel={sChannel}
            value={color}
            onChange={setColor}
          />
        </div>
        <div style={{ marginRight: '2rem', marginBottom: '2rem' }}>
          <label id="hsl-label-id-1">
            x: {color.getChannelName(hChannel, 'en-US')}, y:{' '}
            {color.getChannelName(sChannel, 'en-US')}
          </label>
          <ColorArea
            aria-labelledby="hsl-label-id-1"
            value={color}
            onChange={setColor}
            xChannel={hChannel}
            yChannel={sChannel}
          />
          <ColorSlider
            channel={lChannel}
            value={color}
            onChange={setColor}
          />
        </div>
      </div>
      <p>
        Current HSL color value:{' '}
        <ColorSwatch
          color={color}
          aria-hidden="true"
          style={{
            width: '16px',
            height: '16px',
            verticalAlign: 'text-bottom'
          }}
        />{' '}
        {color.toString('hsl')}
      </p>
    </>
  );
}
```

```
import {parseColor} from 'react-stately';

function Example() {
  let [
    color,
    setColor
  ] = React.useState(parseColor('hsl(219, 79%, 66%)'));
  let [
    hChannel,
    sChannel,
    lChannel
  ] = color.getColorChannels();
  return (
    <>
      <div
        style={{ display: 'inline-flex', flexWrap: 'wrap' }}
      >
        <div
          style={{
            marginRight: '2rem',
            marginBottom: '2rem'
          }}
        >
          <label id="slh-label-id-1">
            x: {color.getChannelName(sChannel, 'en-US')}, y:
            {' '}
            {color.getChannelName(lChannel, 'en-US')}
          </label>
          <ColorArea
            aria-labelledby="slh-label-id-1"
            value={color}
            onChange={setColor}
            xChannel={sChannel}
            yChannel={lChannel}
          />
          <ColorSlider
            channel={hChannel}
            value={color}
            onChange={setColor}
          />
        </div>
        <div
          style={{
            marginRight: '2rem',
            marginBottom: '2rem'
          }}
        >
          <label id="lhs-label-id-1">
            x: {color.getChannelName(hChannel, 'en-US')}, y:
            {' '}
            {color.getChannelName(lChannel, 'en-US')}
          </label>
          <ColorArea
            aria-labelledby="lhs-label-id-1"
            value={color}
            onChange={setColor}
            xChannel={hChannel}
            yChannel={lChannel}
          />
          <ColorSlider
            channel={sChannel}
            value={color}
            onChange={setColor}
          />
        </div>
        <div
          style={{
            marginRight: '2rem',
            marginBottom: '2rem'
          }}
        >
          <label id="hsl-label-id-1">
            x: {color.getChannelName(hChannel, 'en-US')}, y:
            {' '}
            {color.getChannelName(sChannel, 'en-US')}
          </label>
          <ColorArea
            aria-labelledby="hsl-label-id-1"
            value={color}
            onChange={setColor}
            xChannel={hChannel}
            yChannel={sChannel}
          />
          <ColorSlider
            channel={lChannel}
            value={color}
            onChange={setColor}
          />
        </div>
      </div>
      <p>
        Current HSL color value:{' '}
        <ColorSwatch
          color={color}
          aria-hidden="true"
          style={{
            width: '16px',
            height: '16px',
            verticalAlign: 'text-bottom'
          }}
        />{' '}
        {color.toString('hsl')}
      </p>
    </>
  );
}
```

```
import {parseColor} from 'react-stately';

function Example() {
  let [
    color,
    setColor
  ] = React.useState(
    parseColor(
      'hsl(219, 79%, 66%)'
    )
  );
  let [
    hChannel,
    sChannel,
    lChannel
  ] = color
    .getColorChannels();
  return (
    <>
      <div
        style={{
          display:
            'inline-flex',
          flexWrap:
            'wrap'
        }}
      >
        <div
          style={{
            marginRight:
              '2rem',
            marginBottom:
              '2rem'
          }}
        >
          <label id="slh-label-id-1">
            x:{' '}
            {color
              .getChannelName(
                sChannel,
                'en-US'
              )}, y:{' '}
            {color
              .getChannelName(
                lChannel,
                'en-US'
              )}
          </label>
          <ColorArea
            aria-labelledby="slh-label-id-1"
            value={color}
            onChange={setColor}
            xChannel={sChannel}
            yChannel={lChannel}
          />
          <ColorSlider
            channel={hChannel}
            value={color}
            onChange={setColor}
          />
        </div>
        <div
          style={{
            marginRight:
              '2rem',
            marginBottom:
              '2rem'
          }}
        >
          <label id="lhs-label-id-1">
            x:{' '}
            {color
              .getChannelName(
                hChannel,
                'en-US'
              )}, y:{' '}
            {color
              .getChannelName(
                lChannel,
                'en-US'
              )}
          </label>
          <ColorArea
            aria-labelledby="lhs-label-id-1"
            value={color}
            onChange={setColor}
            xChannel={hChannel}
            yChannel={lChannel}
          />
          <ColorSlider
            channel={sChannel}
            value={color}
            onChange={setColor}
          />
        </div>
        <div
          style={{
            marginRight:
              '2rem',
            marginBottom:
              '2rem'
          }}
        >
          <label id="hsl-label-id-1">
            x:{' '}
            {color
              .getChannelName(
                hChannel,
                'en-US'
              )}, y:{' '}
            {color
              .getChannelName(
                sChannel,
                'en-US'
              )}
          </label>
          <ColorArea
            aria-labelledby="hsl-label-id-1"
            value={color}
            onChange={setColor}
            xChannel={hChannel}
            yChannel={sChannel}
          />
          <ColorSlider
            channel={lChannel}
            value={color}
            onChange={setColor}
          />
        </div>
      </div>
      <p>
        Current HSL color
        value:{' '}
        <ColorSwatch
          color={color}
          aria-hidden="true"
          style={{
            width:
              '16px',
            height:
              '16px',
            verticalAlign:
              'text-bottom'
          }}
        />{' '}
        {color.toString(
          'hsl'
        )}
      </p>
    </>
  );
}
```

```
import {parseColor} from 'react-stately';

function Example() {
  let [
    color,
    setColor
  ] = React.useState(parseColor('hsb(219, 58%, 93%)'));
  let [
    hChannel,
    sChannel,
    bChannel
  ] = color.getColorChannels();
  return (
    <>
      <div style={{ display: 'inline-flex', flexWrap: 'wrap' }}>
        <div style={{ marginRight: '2rem', marginBottom: '2rem' }}>
          <label id="sbh-label-id-1">
            x: {color.getChannelName(sChannel, 'en-US')}, y:{' '}
            {color.getChannelName(bChannel, 'en-US')}
          </label>
          <ColorArea
            aria-labelledby="sbh-label-id-1"
            value={color}
            onChange={setColor}
            xChannel={sChannel}
            yChannel={bChannel}
          />
          <ColorSlider
            channel={hChannel}
            value={color}
            onChange={setColor}
          />
        </div>
        <div style={{ marginRight: '2rem', marginBottom: '2rem' }}>
          <label id="bhs-label-id-1">
            x: {color.getChannelName(hChannel, 'en-US')}, y:{' '}
            {color.getChannelName(bChannel, 'en-US')}
          </label>
          <ColorArea
            aria-labelledby="bhs-label-id-1"
            value={color}
            onChange={setColor}
            xChannel={hChannel}
            yChannel={bChannel}
          />
          <ColorSlider
            channel={sChannel}
            value={color}
            onChange={setColor}
          />
        </div>
        <div style={{ marginRight: '2rem', marginBottom: '2rem' }}>
          <label id="hsb-label-id-2">
            x: {color.getChannelName(hChannel, 'en-US')}, y:{' '}
            {color.getChannelName(sChannel, 'en-US')}
          </label>
          <ColorArea
            aria-labelledby="hsb-label-id-2"
            value={color}
            onChange={setColor}
            xChannel={hChannel}
            yChannel={sChannel}
          />
          <ColorSlider
            channel={bChannel}
            value={color}
            onChange={setColor}
          />
        </div>
      </div>
      <p>
        Current HSB color value:{' '}
        <ColorSwatch
          color={color}
          style={{
            width: '16px',
            height: '16px',
            verticalAlign: 'text-bottom'
          }}
        />{' '}
        {color.toString('hsb')}
      </p>
    </>
  );
}
```

```
import {parseColor} from 'react-stately';

function Example() {
  let [
    color,
    setColor
  ] = React.useState(parseColor('hsb(219, 58%, 93%)'));
  let [
    hChannel,
    sChannel,
    bChannel
  ] = color.getColorChannels();
  return (
    <>
      <div
        style={{ display: 'inline-flex', flexWrap: 'wrap' }}
      >
        <div
          style={{
            marginRight: '2rem',
            marginBottom: '2rem'
          }}
        >
          <label id="sbh-label-id-1">
            x: {color.getChannelName(sChannel, 'en-US')}, y:
            {' '}
            {color.getChannelName(bChannel, 'en-US')}
          </label>
          <ColorArea
            aria-labelledby="sbh-label-id-1"
            value={color}
            onChange={setColor}
            xChannel={sChannel}
            yChannel={bChannel}
          />
          <ColorSlider
            channel={hChannel}
            value={color}
            onChange={setColor}
          />
        </div>
        <div
          style={{
            marginRight: '2rem',
            marginBottom: '2rem'
          }}
        >
          <label id="bhs-label-id-1">
            x: {color.getChannelName(hChannel, 'en-US')}, y:
            {' '}
            {color.getChannelName(bChannel, 'en-US')}
          </label>
          <ColorArea
            aria-labelledby="bhs-label-id-1"
            value={color}
            onChange={setColor}
            xChannel={hChannel}
            yChannel={bChannel}
          />
          <ColorSlider
            channel={sChannel}
            value={color}
            onChange={setColor}
          />
        </div>
        <div
          style={{
            marginRight: '2rem',
            marginBottom: '2rem'
          }}
        >
          <label id="hsb-label-id-2">
            x: {color.getChannelName(hChannel, 'en-US')}, y:
            {' '}
            {color.getChannelName(sChannel, 'en-US')}
          </label>
          <ColorArea
            aria-labelledby="hsb-label-id-2"
            value={color}
            onChange={setColor}
            xChannel={hChannel}
            yChannel={sChannel}
          />
          <ColorSlider
            channel={bChannel}
            value={color}
            onChange={setColor}
          />
        </div>
      </div>
      <p>
        Current HSB color value:{' '}
        <ColorSwatch
          color={color}
          style={{
            width: '16px',
            height: '16px',
            verticalAlign: 'text-bottom'
          }}
        />{' '}
        {color.toString('hsb')}
      </p>
    </>
  );
}
```

```
import {parseColor} from 'react-stately';

function Example() {
  let [
    color,
    setColor
  ] = React.useState(
    parseColor(
      'hsb(219, 58%, 93%)'
    )
  );
  let [
    hChannel,
    sChannel,
    bChannel
  ] = color
    .getColorChannels();
  return (
    <>
      <div
        style={{
          display:
            'inline-flex',
          flexWrap:
            'wrap'
        }}
      >
        <div
          style={{
            marginRight:
              '2rem',
            marginBottom:
              '2rem'
          }}
        >
          <label id="sbh-label-id-1">
            x:{' '}
            {color
              .getChannelName(
                sChannel,
                'en-US'
              )}, y:{' '}
            {color
              .getChannelName(
                bChannel,
                'en-US'
              )}
          </label>
          <ColorArea
            aria-labelledby="sbh-label-id-1"
            value={color}
            onChange={setColor}
            xChannel={sChannel}
            yChannel={bChannel}
          />
          <ColorSlider
            channel={hChannel}
            value={color}
            onChange={setColor}
          />
        </div>
        <div
          style={{
            marginRight:
              '2rem',
            marginBottom:
              '2rem'
          }}
        >
          <label id="bhs-label-id-1">
            x:{' '}
            {color
              .getChannelName(
                hChannel,
                'en-US'
              )}, y:{' '}
            {color
              .getChannelName(
                bChannel,
                'en-US'
              )}
          </label>
          <ColorArea
            aria-labelledby="bhs-label-id-1"
            value={color}
            onChange={setColor}
            xChannel={hChannel}
            yChannel={bChannel}
          />
          <ColorSlider
            channel={sChannel}
            value={color}
            onChange={setColor}
          />
        </div>
        <div
          style={{
            marginRight:
              '2rem',
            marginBottom:
              '2rem'
          }}
        >
          <label id="hsb-label-id-2">
            x:{' '}
            {color
              .getChannelName(
                hChannel,
                'en-US'
              )}, y:{' '}
            {color
              .getChannelName(
                sChannel,
                'en-US'
              )}
          </label>
          <ColorArea
            aria-labelledby="hsb-label-id-2"
            value={color}
            onChange={setColor}
            xChannel={hChannel}
            yChannel={sChannel}
          />
          <ColorSlider
            channel={bChannel}
            value={color}
            onChange={setColor}
          />
        </div>
      </div>
      <p>
        Current HSB color
        value:{' '}
        <ColorSwatch
          color={color}
          style={{
            width:
              '16px',
            height:
              '16px',
            verticalAlign:
              'text-bottom'
          }}
        />{' '}
        {color.toString(
          'hsb'
        )}
      </p>
    </>
  );
}
```

A color area can be disabled using the `isDisabled` prop. This prevents the thumb from being focused or dragged. It's up to you to style your color area to appear disabled accordingly.

```
<ColorArea
  defaultValue="hsl(0, 100%, 50%)"
  xChannel="saturation"
  yChannel="lightness"
  isDisabled />
```

```
<ColorArea
  defaultValue="hsl(0, 100%, 50%)"
  xChannel="saturation"
  yChannel="lightness"
  isDisabled />
```

```
<ColorArea
  defaultValue="hsl(0, 100%, 50%)"
  xChannel="saturation"
  yChannel="lightness"
  isDisabled
/>
```

ColorArea supports the `xName` and `yName` props for integration with HTML forms. The values will be submitted as numbers between the minimum and maximum value for the corresponding channel in the X and Y direction.

```
<ColorArea xName="red" yName="green" />
```

```
<ColorArea xName="red" yName="green" />
```

```
<ColorArea
  xName="red"
  yName="green"
/>
```

* * *

By default, `useColorArea` provides an `aria-label` for the localized string "Color Picker", which labels the visually hidden `<input>` elements for the two color channels, or on mobile devices, the group containing them. If you wish to override this with a more specific label, an `aria-label` or `aria-labelledby` prop may be passed to further to identify the element to assistive technologies. For example, for a color area that adjusts a text color you might pass the `aria-label` prop, "Text color", which `useColorArea` will return as the `aria-label` prop "Text color, Color picker". When a custom `aria-label` is provided, it should be localized accordingly.

In order to communicate to a screen reader user that the color area adjusts in two dimensions, `useColorArea` provides an `aria-roledescription`, using the localized string "2D Slider", on each of the visually hidden `<input>` elements.

The `aria-valuetext` of each `<input>` element is formatted according to the user's locale automatically. It includes the localized color channel name and current value for each channel, with the channel name and value that the `<input>` element controls coming before the channel name and value for the adjacent `<input>` element. For example, for an RGB color area where the `xChannel` is "blue", the `yChannel` is "green", when the current selected color is yellow (`rgb(255, 255, 0)`), the `<input>` representing the blue channel will have `aria-valuetext` to announce as "Blue: 0, Green: 255", and the `<input>` representing the green channel will have `aria-valuetext` to announce as "Green: 255, Blue: 0".

In right-to-left languages, color areas should be mirrored. Orientation of the gradient background, positioning of the thumb, and dragging behavior is automatically mirrored by `useColorArea`.