# useSlider

**Source**: [https://react-spectrum.adobe.com/react-aria/useSlider.html](https://react-spectrum.adobe.com/react-aria/useSlider.html)

> Documentation for useSlider in the React Aria package.

---

Provides the behavior and accessibility implementation for a slider component representing one or more values.

* * *

`useSlider<T extends [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) | [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)[]>( props: [AriaSliderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/slider/src/index.d.ts:AriaSliderProps)<T>, state: [SliderState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/slider/src/useSliderState.ts:SliderState), trackRef: [RefObject](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/refs.d.ts:RefObject)<[Element](https://developer.mozilla.org/docs/Web/API/Element) |  | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)> ): [SliderAria](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/slider/src/useSlider.ts:SliderAria)` `useSliderThumb( (opts: [AriaSliderThumbOptions](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/slider/src/useSliderThumb.ts:AriaSliderThumbOptions), , state: [SliderState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/slider/src/useSliderState.ts:SliderState) )): [SliderThumbAria](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/slider/src/useSliderThumb.ts:SliderThumbAria)`

* * *

The [<input type="range">](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range) HTML element can be used to build a slider, however it is very difficult to style cross browser. `useSlider` and `useSliderThumb` help achieve accessible sliders that can be styled as needed.

-   Support for one or multiple thumbs
-   Support for mouse, touch, and keyboard via the [useMove](https://react-spectrum.adobe.com/react-aria/useMove.html) hook
-   Multi-touch support for dragging multiple thumbs or multiple sliders at once
-   Pressing on the track moves the nearest thumb to that position
-   Supports using the arrow keys, as well as page up/down, home, and end keys
-   Support for both horizontal and vertical orientations
-   Support for custom min, max, and step values with handling for rounding errors
-   Support for disabling the whole slider or individual thumbs
-   Prevents text selection while dragging
-   Exposed to assistive technology as a `group` of `slider` elements via ARIA
-   Slider thumbs use hidden native input elements to support touch screen readers
-   Support for labeling both the slider as a whole and individual thumbs
-   Support for displaying the current thumb values using an `<output>` element
-   Internationalized number formatting as a percentage or value
-   Support for mirroring in RTL locales

* * *

Shows a slider with labels pointing to its parts including the label, group, track, thumb, and output elements.OutputLabelLabelLabel24TrackThumbGroup

Sliders consist of a track element showing the range of available values, one or more thumbs showing the current values, an optional [<output>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/output) element displaying the current values textually, and a label. The thumbs can be dragged to allow a user to change their value. In addition, the track can be clicked to move the nearest thumb to that position.

`useSlider` returns several sets of props and you should spread each one onto the appropriate element:

Name

Type

Description

`labelProps`

`[LabelHTMLAttributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label#attributes)<[HTMLLabelElement](https://developer.mozilla.org/docs/Web/API/HTMLLabelElement)>`

Props for the label element.

`groupProps`

`[DOMAttributes](https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes)`

Props for the root element of the slider component; groups slider inputs.

`trackProps`

`[DOMAttributes](https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes)`

Props for the track element.

`outputProps`

`[OutputHTMLAttributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/output#attributes)<HTMLOutputElement>`

Props for the output element, displaying the value of the slider thumbs.

If there is no visual label, an `aria-label` or `aria-labelledby` prop must be passed instead to identify the element to screen readers.

`useSliderThumb` returns props that you should spread onto the appropriate elements, along with states for styling:

Name

Type

Description

`thumbProps`

`[DOMAttributes](https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes)`

Props for the root thumb element; handles the dragging motion.

`inputProps`

`[InputHTMLAttributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes)<[HTMLInputElement](https://developer.mozilla.org/docs/Web/API/HTMLInputElement)>`

Props for the visually hidden range input element.

`labelProps`

`[LabelHTMLAttributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label#attributes)<[HTMLLabelElement](https://developer.mozilla.org/docs/Web/API/HTMLLabelElement)>`

Props for the label element for this thumb (optional).

`isDragging`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether this thumb is currently being dragged.

`isFocused`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether the thumb is currently focused.

`isDisabled`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether the thumb is disabled.

If there is no visual label, an `aria-label` or `aria-labelledby` prop must be passed instead to identify each thumb to screen readers.

Slider state is managed by the `[useSliderState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/slider/src/useSliderState.ts:useSliderState)` hook.

* * *

This example shows how to build a simple horizontal slider with a single thumb. In addition, it includes a label which can be clicked to focus the slider thumb, and an `<output>` element to display the current slider value as text. This is formatted using a locale aware number formatter provided by the [useNumberFormatter](https://react-spectrum.adobe.com/react-aria/useNumberFormatter.html) hook.

The `<input>` element inside the thumb is used to represent the slider to assistive technology, and is hidden from view using the [VisuallyHidden](https://react-spectrum.adobe.com/react-aria/VisuallyHidden.html) component. The thumb also uses the [useFocusRing](https://react-spectrum.adobe.com/react-aria/useFocusRing.html) hook to display using a different color when it is keyboard focused (try tabbing to it).

```
import {useSliderState} from 'react-stately';

import {mergeProps, useFocusRing, useNumberFormatter, useSlider, useSliderThumb, VisuallyHidden} from 'react-aria';

function Slider(props) {
  let trackRef = React.useRef(null);
  let numberFormatter = useNumberFormatter(props.formatOptions);
  let state = useSliderState({ ...props, numberFormatter });
  let {
    groupProps,
    trackProps,
    labelProps,
    outputProps
  } = useSlider(props, state, trackRef);

  return (
    <div {...groupProps} className={`slider ${state.orientation}`}>
      {/* Create a container for the label and output element. */}
      {props.label &&
        (
          <div className="label-container">
            <label {...labelProps}>{props.label}</label>
            <output {...outputProps}>
              {state.getThumbValueLabel(0)}
            </output>
          </div>
        )}
      {/* The track element holds the visible track line and the thumb. */}
      <div
        {...trackProps}
        ref={trackRef}
        className={`track ${state.isDisabled ? 'disabled' : ''}`}
      >
        <Thumb index={0} state={state} trackRef={trackRef} name={props.name} />
      </div>
    </div>
  );
}

function Thumb(props) {
  let { state, trackRef, index, name } = props;
  let inputRef = React.useRef(null);
  let { thumbProps, inputProps, isDragging } = useSliderThumb({
    index,
    trackRef,
    inputRef,
    name
  }, state);

  let { focusProps, isFocusVisible } = useFocusRing();
  return (
    <div
      {...thumbProps}
      className={`thumb ${isFocusVisible ? 'focus' : ''} ${
        isDragging ? 'dragging' : ''
      }`}
    >
      <VisuallyHidden>
        <input ref={inputRef} {...mergeProps(inputProps, focusProps)} />
      </VisuallyHidden>
    </div>
  );
}

<Slider label="Opacity" />
```

```
import {useSliderState} from 'react-stately';

import {
  mergeProps,
  useFocusRing,
  useNumberFormatter,
  useSlider,
  useSliderThumb,
  VisuallyHidden
} from 'react-aria';

function Slider(props) {
  let trackRef = React.useRef(null);
  let numberFormatter = useNumberFormatter(
    props.formatOptions
  );
  let state = useSliderState({ ...props, numberFormatter });
  let {
    groupProps,
    trackProps,
    labelProps,
    outputProps
  } = useSlider(props, state, trackRef);

  return (
    <div
      {...groupProps}
      className={`slider ${state.orientation}`}
    >
      {/* Create a container for the label and output element. */}
      {props.label &&
        (
          <div className="label-container">
            <label {...labelProps}>{props.label}</label>
            <output {...outputProps}>
              {state.getThumbValueLabel(0)}
            </output>
          </div>
        )}
      {/* The track element holds the visible track line and the thumb. */}
      <div
        {...trackProps}
        ref={trackRef}
        className={`track ${
          state.isDisabled ? 'disabled' : ''
        }`}
      >
        <Thumb
          index={0}
          state={state}
          trackRef={trackRef}
          name={props.name}
        />
      </div>
    </div>
  );
}

function Thumb(props) {
  let { state, trackRef, index, name } = props;
  let inputRef = React.useRef(null);
  let { thumbProps, inputProps, isDragging } =
    useSliderThumb({
      index,
      trackRef,
      inputRef,
      name
    }, state);

  let { focusProps, isFocusVisible } = useFocusRing();
  return (
    <div
      {...thumbProps}
      className={`thumb ${isFocusVisible ? 'focus' : ''} ${
        isDragging ? 'dragging' : ''
      }`}
    >
      <VisuallyHidden>
        <input
          ref={inputRef}
          {...mergeProps(inputProps, focusProps)}
        />
      </VisuallyHidden>
    </div>
  );
}

<Slider label="Opacity" />
```

```
import {useSliderState} from 'react-stately';

import {
  mergeProps,
  useFocusRing,
  useNumberFormatter,
  useSlider,
  useSliderThumb,
  VisuallyHidden
} from 'react-aria';

function Slider(props) {
  let trackRef = React
    .useRef(null);
  let numberFormatter =
    useNumberFormatter(
      props.formatOptions
    );
  let state =
    useSliderState({
      ...props,
      numberFormatter
    });
  let {
    groupProps,
    trackProps,
    labelProps,
    outputProps
  } = useSlider(
    props,
    state,
    trackRef
  );

  return (
    <div
      {...groupProps}
      className={`slider ${state.orientation}`}
    >
      {/* Create a container for the label and output element. */}
      {props.label &&
        (
          <div className="label-container">
            <label
              {...labelProps}
            >
              {props
                .label}
            </label>
            <output
              {...outputProps}
            >
              {state
                .getThumbValueLabel(
                  0
                )}
            </output>
          </div>
        )}
      {/* The track element holds the visible track line and the thumb. */}
      <div
        {...trackProps}
        ref={trackRef}
        className={`track ${
          state
              .isDisabled
            ? 'disabled'
            : ''
        }`}
      >
        <Thumb
          index={0}
          state={state}
          trackRef={trackRef}
          name={props
            .name}
        />
      </div>
    </div>
  );
}

function Thumb(props) {
  let {
    state,
    trackRef,
    index,
    name
  } = props;
  let inputRef = React
    .useRef(null);
  let {
    thumbProps,
    inputProps,
    isDragging
  } = useSliderThumb({
    index,
    trackRef,
    inputRef,
    name
  }, state);

  let {
    focusProps,
    isFocusVisible
  } = useFocusRing();
  return (
    <div
      {...thumbProps}
      className={`thumb ${
        isFocusVisible
          ? 'focus'
          : ''
      } ${
        isDragging
          ? 'dragging'
          : ''
      }`}
    >
      <VisuallyHidden>
        <input
          ref={inputRef}
          {...mergeProps(
            inputProps,
            focusProps
          )}
        />
      </VisuallyHidden>
    </div>
  );
}

<Slider label="Opacity" />
```

Show CSS

```
.slider {
  display: flex;
}

.slider.horizontal {
  flex-direction: column;
  width: 300px;
}

.slider.vertical {
  height: 150px;
}

.label-container {
  display: flex;
  justify-content: space-between;
}

.slider.horizontal .track {
  height: 30px;
  width: 100%;
}

/* track line */
.track:before {
  content: attr(x);
  display: block;
  position: absolute;
  background: gray;
}

.slider.horizontal .track:before {
  height: 3px;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
}

.slider.vertical .track {
  width: 30px;
  height: 100%;
}

.slider.vertical .track:before {
  width: 3px;
  height: 100%;
  left: 50%;
  transform: translateX(-50%);
}

.thumb {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: gray;
}

.thumb.dragging {
  background: dimgray;
}

.thumb.focus {
  background: orange;
}

.slider.horizontal .thumb {
  top: 50%;
}

.slider.vertical .thumb {
  left: 50%;
}

.track.disabled {
  opacity: 0.4;
}
```

```
.slider {
  display: flex;
}

.slider.horizontal {
  flex-direction: column;
  width: 300px;
}

.slider.vertical {
  height: 150px;
}

.label-container {
  display: flex;
  justify-content: space-between;
}

.slider.horizontal .track {
  height: 30px;
  width: 100%;
}

/* track line */
.track:before {
  content: attr(x);
  display: block;
  position: absolute;
  background: gray;
}

.slider.horizontal .track:before {
  height: 3px;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
}

.slider.vertical .track {
  width: 30px;
  height: 100%;
}

.slider.vertical .track:before {
  width: 3px;
  height: 100%;
  left: 50%;
  transform: translateX(-50%);
}

.thumb {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: gray;
}

.thumb.dragging {
  background: dimgray;
}

.thumb.focus {
  background: orange;
}

.slider.horizontal .thumb {
  top: 50%;
}

.slider.vertical .thumb {
  left: 50%;
}

.track.disabled {
  opacity: 0.4;
}
```

```
.slider {
  display: flex;
}

.slider.horizontal {
  flex-direction: column;
  width: 300px;
}

.slider.vertical {
  height: 150px;
}

.label-container {
  display: flex;
  justify-content: space-between;
}

.slider.horizontal .track {
  height: 30px;
  width: 100%;
}

/* track line */
.track:before {
  content: attr(x);
  display: block;
  position: absolute;
  background: gray;
}

.slider.horizontal .track:before {
  height: 3px;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
}

.slider.vertical .track {
  width: 30px;
  height: 100%;
}

.slider.vertical .track:before {
  width: 3px;
  height: 100%;
  left: 50%;
  transform: translateX(-50%);
}

.thumb {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: gray;
}

.thumb.dragging {
  background: dimgray;
}

.thumb.focus {
  background: orange;
}

.slider.horizontal .thumb {
  top: 50%;
}

.slider.vertical .thumb {
  left: 50%;
}

.track.disabled {
  opacity: 0.4;
}
```

This example shows how to build a slider with multiple thumbs. The thumb component is the same one shown in the previous example. The main difference in this example is that there are two `<Thumb>` elements rendered with different `index` props. In addition, the `<output>` element uses `state.getThumbValueLabel` for each thumb to display the selected range.

```
function RangeSlider(props) {
  let trackRef = React.useRef(null);

  let numberFormatter = useNumberFormatter(props.formatOptions);
  let state = useSliderState({ ...props, numberFormatter });
  let {
    groupProps,
    trackProps,
    labelProps,
    outputProps
  } = useSlider(props, state, trackRef);

  return (
    <div {...groupProps} className={`slider ${state.orientation}`}>
      {props.label &&
        (
          <div className="label-container">
            <label {...labelProps}>{props.label}</label>
            <output {...outputProps}>
              {`${state.getThumbValueLabel(0)} - ${
                state.getThumbValueLabel(1)
              }`}
            </output>
          </div>
        )}
      <div
        {...trackProps}
        ref={trackRef}
        className={`track ${state.isDisabled ? 'disabled' : ''}`}
      >
        <Thumb index={0} state={state} trackRef={trackRef} />
        <Thumb index={1} state={state} trackRef={trackRef} />
      </div>
    </div>
  );
}

<RangeSlider
  label="Price Range"
  formatOptions={{ style: 'currency', currency: 'USD' }}
  maxValue={500}
  defaultValue={[100, 350]}
  step={10}
/>
```

```
function RangeSlider(props) {
  let trackRef = React.useRef(null);

  let numberFormatter = useNumberFormatter(
    props.formatOptions
  );
  let state = useSliderState({ ...props, numberFormatter });
  let {
    groupProps,
    trackProps,
    labelProps,
    outputProps
  } = useSlider(props, state, trackRef);

  return (
    <div
      {...groupProps}
      className={`slider ${state.orientation}`}
    >
      {props.label &&
        (
          <div className="label-container">
            <label {...labelProps}>{props.label}</label>
            <output {...outputProps}>
              {`${state.getThumbValueLabel(0)} - ${
                state.getThumbValueLabel(1)
              }`}
            </output>
          </div>
        )}
      <div
        {...trackProps}
        ref={trackRef}
        className={`track ${
          state.isDisabled ? 'disabled' : ''
        }`}
      >
        <Thumb
          index={0}
          state={state}
          trackRef={trackRef}
        />
        <Thumb
          index={1}
          state={state}
          trackRef={trackRef}
        />
      </div>
    </div>
  );
}

<RangeSlider
  label="Price Range"
  formatOptions={{ style: 'currency', currency: 'USD' }}
  maxValue={500}
  defaultValue={[100, 350]}
  step={10}
/>
```

```
function RangeSlider(
  props
) {
  let trackRef = React
    .useRef(null);

  let numberFormatter =
    useNumberFormatter(
      props.formatOptions
    );
  let state =
    useSliderState({
      ...props,
      numberFormatter
    });
  let {
    groupProps,
    trackProps,
    labelProps,
    outputProps
  } = useSlider(
    props,
    state,
    trackRef
  );

  return (
    <div
      {...groupProps}
      className={`slider ${state.orientation}`}
    >
      {props.label &&
        (
          <div className="label-container">
            <label
              {...labelProps}
            >
              {props
                .label}
            </label>
            <output
              {...outputProps}
            >
              {`${
                state
                  .getThumbValueLabel(
                    0
                  )
              } - ${
                state
                  .getThumbValueLabel(
                    1
                  )
              }`}
            </output>
          </div>
        )}
      <div
        {...trackProps}
        ref={trackRef}
        className={`track ${
          state
              .isDisabled
            ? 'disabled'
            : ''
        }`}
      >
        <Thumb
          index={0}
          state={state}
          trackRef={trackRef}
        />
        <Thumb
          index={1}
          state={state}
          trackRef={trackRef}
        />
      </div>
    </div>
  );
}

<RangeSlider
  label="Price Range"
  formatOptions={{
    style: 'currency',
    currency: 'USD'
  }}
  maxValue={500}
  defaultValue={[
    100,
    350
  ]}
  step={10}
/>
```

* * *

The following examples show how to use the `Slider` and `RangeSlider` components created in the above examples.

Sliders are horizontally oriented by default. The `orientation` prop can be set to `"vertical"` to create a vertical slider. This example also uses `aria-label` rather than `label` to create a slider with no visible label.

```
<Slider
  orientation="vertical"
  aria-label="Opacity"
  maxValue={1}
  step={0.01} />
```

```
<Slider
  orientation="vertical"
  aria-label="Opacity"
  maxValue={1}
  step={0.01} />
```

```
<Slider
  orientation="vertical"
  aria-label="Opacity"
  maxValue={1}
  step={0.01} />
```

The `value` prop paired with the `onChange` event can be used to make a slider controlled. The value must fall between the Slider's minimum and maximum values, which default to 0 and 100 respectively. The `onChange` event receives the new slider value as a parameter, which can be used to update state.

```
function Example() {
  let [value, setValue] = React.useState(25);
  return (
    <>
      <Slider
        label="Cookies to buy"
        value={value}
        onChange={setValue} />
      <p>Current value: {value}</p>
    </>
  );
}
```

```
function Example() {
  let [value, setValue] = React.useState(25);
  return (
    <>
      <Slider
        label="Cookies to buy"
        value={value}
        onChange={setValue} />
      <p>Current value: {value}</p>
    </>
  );
}
```

```
function Example() {
  let [value, setValue] =
    React.useState(25);
  return (
    <>
      <Slider
        label="Cookies to buy"
        value={value}
        onChange={setValue}
      />
      <p>
        Current value:
        {' '}
        {value}
      </p>
    </>
  );
}
```

Multi thumb sliders specify their values as an array rather than a single number.

```
function Example() {
  let [value, setValue] = React.useState([25, 75]);
  return (
    <>
      <RangeSlider
        label="Range"
        value={value}
        onChange={setValue} />
      <p>Current value: {value.join(' – ')}</p>
    </>
  );
}
```

```
function Example() {
  let [value, setValue] = React.useState([25, 75]);
  return (
    <>
      <RangeSlider
        label="Range"
        value={value}
        onChange={setValue} />
      <p>Current value: {value.join(' – ')}</p>
    </>
  );
}
```

```
function Example() {
  let [value, setValue] =
    React.useState([
      25,
      75
    ]);
  return (
    <>
      <RangeSlider
        label="Range"
        value={value}
        onChange={setValue}
      />
      <p>
        Current value:
        {' '}
        {value.join(
          ' – '
        )}
      </p>
    </>
  );
}
```

The `onChangeEnd` prop can be used to handle when a user stops dragging a slider, whereas the `onChange` prop is called as the user drags.

```
function Example() {
  let [value, setValue] = React.useState(25);
  return (
    <>
      <Slider
        label="Cookies to buy"
        defaultValue={value}
        onChangeEnd={setValue} />
      <p>Current value: {value}</p>
    </>
  );
}
```

```
function Example() {
  let [value, setValue] = React.useState(25);
  return (
    <>
      <Slider
        label="Cookies to buy"
        defaultValue={value}
        onChangeEnd={setValue} />
      <p>Current value: {value}</p>
    </>
  );
}
```

```
function Example() {
  let [value, setValue] =
    React.useState(25);
  return (
    <>
      <Slider
        label="Cookies to buy"
        defaultValue={value}
        onChangeEnd={setValue}
      />
      <p>
        Current value:
        {' '}
        {value}
      </p>
    </>
  );
}
```

By default, slider values are percentages between 0 and 100. A different scale can be used by setting the `minValue` and `maxValue` props.

```
<Slider
  label="Cookies to buy"
  minValue={50}
  maxValue={150}
  defaultValue={100} />
```

```
<Slider
  label="Cookies to buy"
  minValue={50}
  maxValue={150}
  defaultValue={100} />
```

```
<Slider
  label="Cookies to buy"
  minValue={50}
  maxValue={150}
  defaultValue={100} />
```

Values are formatted as a percentage by default, but this can be modified by using the `formatOptions` prop to specify a different format. `formatOptions` is compatible with the option parameter of [Intl.NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat) and is applied based on the current locale.

```
<Slider
  label="Currency"
  formatOptions={{style: 'currency', currency: 'JPY'}}
  defaultValue={60} />
```

```
<Slider
  label="Currency"
  formatOptions={{style: 'currency', currency: 'JPY'}}
  defaultValue={60} />
```

```
<Slider
  label="Currency"
  formatOptions={{
    style: 'currency',
    currency: 'JPY'
  }}
  defaultValue={60}
/>
```

The `step` prop can be used to snap the value to certain increments. The steps are calculated starting from the minimum. For example, if `minValue={2}`, and `step={3}`, the valid step values would be 2, 5, 8, 11, etc. This example allows increments of 5 between 0 and 100.

```
<Slider
  label="Amount"
  formatOptions={{style: 'currency', currency: 'USD'}}
  minValue={0}
  maxValue={100}
  step={5} />
```

```
<Slider
  label="Amount"
  formatOptions={{style: 'currency', currency: 'USD'}}
  minValue={0}
  maxValue={100}
  step={5} />
```

```
<Slider
  label="Amount"
  formatOptions={{
    style: 'currency',
    currency: 'USD'
  }}
  minValue={0}
  maxValue={100}
  step={5}
/>
```

A slider can be disabled using the `isDisabled` prop.

```
<Slider
  label="Cookies to share"
  defaultValue={25}
  isDisabled />
```

```
<Slider
  label="Cookies to share"
  defaultValue={25}
  isDisabled />
```

```
<Slider
  label="Cookies to share"
  defaultValue={25}
  isDisabled
/>
```

useSliderThumb supports the `name` prop for integration with HTML forms.

```
<Slider
  label="Opacity"
  defaultValue={50}
  name="opacity" />
```

```
<Slider
  label="Opacity"
  defaultValue={50}
  name="opacity" />
```

```
<Slider
  label="Opacity"
  defaultValue={50}
  name="opacity" />
```

* * *

Formatting the value that should be displayed in the value label or `aria-valuetext` is handled by `[useSliderState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/slider/src/useSliderState.ts:useSliderState)`. The formatting can be controlled using the `formatOptions` prop. If you want to change locales, the `[I18nProvider](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/i18n/src/context.tsx:I18nProvider)` must be somewhere in the hierarchy above the Slider. This will tell the formatter what locale to use.

In right-to-left languages, the slider should be mirrored. The label is right-aligned, the value is left-aligned. Ensure that your CSS accounts for this.