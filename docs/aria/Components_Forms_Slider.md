# Slider

**Source**: [https://react-spectrum.adobe.com/react-aria/Slider.html](https://react-spectrum.adobe.com/react-aria/Slider.html)

> Documentation for Slider in the React Aria package.

---

A slider allows a user to select one or more values within a range.

* * *

```
import {Label, Slider, SliderOutput, SliderThumb, SliderTrack} from 'react-aria-components';

<Slider defaultValue={30}>
  <Label>Opacity</Label>
  <SliderOutput />
  <SliderTrack>
    <SliderThumb />
  </SliderTrack>
</Slider>
```

```
import {
  Label,
  Slider,
  SliderOutput,
  SliderThumb,
  SliderTrack
} from 'react-aria-components';

<Slider defaultValue={30}>
  <Label>Opacity</Label>
  <SliderOutput />
  <SliderTrack>
    <SliderThumb />
  </SliderTrack>
</Slider>
```

```
import {
  Label,
  Slider,
  SliderOutput,
  SliderThumb,
  SliderTrack
} from 'react-aria-components';

<Slider
  defaultValue={30}
>
  <Label>
    Opacity
  </Label>
  <SliderOutput />
  <SliderTrack>
    <SliderThumb />
  </SliderTrack>
</Slider>
```

Show CSS

```
@import "@react-aria/example-theme";

.react-aria-Slider {
  display: grid;
  grid-template-areas: "label output"
                       "track track";
  grid-template-columns: 1fr auto;
  max-width: 300px;
  color: var(--text-color);

  .react-aria-Label {
    grid-area: label;
  }

  .react-aria-SliderOutput {
    grid-area: output;
  }

  .react-aria-SliderTrack {
    grid-area: track;
    position: relative;

    /* track line */
    &:before {
      content: '';
      display: block;
      position: absolute;
      background: var(--border-color);
    }
  }

  .react-aria-SliderThumb {
    width: 1.429rem;
    height: 1.429rem;
    border-radius: 50%;
    background: var(--highlight-background);
    border: 2px solid var(--background-color);
    forced-color-adjust: none;

    &[data-dragging] {
      background: var(--highlight-background-pressed);
    }

    &[data-focus-visible] {
      outline: 2px solid var(--focus-ring-color);
    }
  }

  &[data-orientation=horizontal] {
    flex-direction: column;
    width: 300px;

    .react-aria-SliderTrack {
      height: 30px;
      width: 100%;

      &:before {
        height: 3px;
        width: 100%;
        top: 50%;
        transform: translateY(-50%);
      }
    }

    .react-aria-SliderThumb {
      top: 50%;
    }
  }
}
```

```
@import "@react-aria/example-theme";

.react-aria-Slider {
  display: grid;
  grid-template-areas: "label output"
                       "track track";
  grid-template-columns: 1fr auto;
  max-width: 300px;
  color: var(--text-color);

  .react-aria-Label {
    grid-area: label;
  }

  .react-aria-SliderOutput {
    grid-area: output;
  }

  .react-aria-SliderTrack {
    grid-area: track;
    position: relative;

    /* track line */
    &:before {
      content: '';
      display: block;
      position: absolute;
      background: var(--border-color);
    }
  }

  .react-aria-SliderThumb {
    width: 1.429rem;
    height: 1.429rem;
    border-radius: 50%;
    background: var(--highlight-background);
    border: 2px solid var(--background-color);
    forced-color-adjust: none;

    &[data-dragging] {
      background: var(--highlight-background-pressed);
    }

    &[data-focus-visible] {
      outline: 2px solid var(--focus-ring-color);
    }
  }

  &[data-orientation=horizontal] {
    flex-direction: column;
    width: 300px;

    .react-aria-SliderTrack {
      height: 30px;
      width: 100%;

      &:before {
        height: 3px;
        width: 100%;
        top: 50%;
        transform: translateY(-50%);
      }
    }

    .react-aria-SliderThumb {
      top: 50%;
    }
  }
}
```

```
@import "@react-aria/example-theme";

.react-aria-Slider {
  display: grid;
  grid-template-areas: "label output"
                       "track track";
  grid-template-columns: 1fr auto;
  max-width: 300px;
  color: var(--text-color);

  .react-aria-Label {
    grid-area: label;
  }

  .react-aria-SliderOutput {
    grid-area: output;
  }

  .react-aria-SliderTrack {
    grid-area: track;
    position: relative;

    /* track line */
    &:before {
      content: '';
      display: block;
      position: absolute;
      background: var(--border-color);
    }
  }

  .react-aria-SliderThumb {
    width: 1.429rem;
    height: 1.429rem;
    border-radius: 50%;
    background: var(--highlight-background);
    border: 2px solid var(--background-color);
    forced-color-adjust: none;

    &[data-dragging] {
      background: var(--highlight-background-pressed);
    }

    &[data-focus-visible] {
      outline: 2px solid var(--focus-ring-color);
    }
  }

  &[data-orientation=horizontal] {
    flex-direction: column;
    width: 300px;

    .react-aria-SliderTrack {
      height: 30px;
      width: 100%;

      &:before {
        height: 3px;
        width: 100%;
        top: 50%;
        transform: translateY(-50%);
      }
    }

    .react-aria-SliderThumb {
      top: 50%;
    }
  }
}
```

* * *

The [<input type="range">](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range) HTML element can be used to build a slider, however it is very difficult to style cross browser. `Slider` helps achieve accessible sliders that can be styled as needed.

-   **Customizable** – Support for one or multiple thumbs, in both horizontal and vertical orientations. The whole slider, or individual thumbs can be disabled. Custom minimum, maximum, and step values are supported as well.
-   **High quality interactions** – Mouse, touch, and keyboard input is supported via the [useMove](https://react-spectrum.adobe.com/react-aria/useMove.html) hook. Pressing the track moves the nearest thumb to that position. Text selection and touch scrolling are prevented while dragging.
-   **Touch friendly** – Multiple thumbs or sliders can be dragged at once on multi-touch screens.
-   **Accessible** – Slider thumbs use visually hidden `<input>` elements for mobile screen reader support, and HTML form integration. `<label>` and `<output>` elements are automatically associated to provide context for assistive technologies.
-   **International** – Output value is formatted as a percentage or custom format according to the user's locale. The slider automatically mirrors all interactions in right-to-left languages.

* * *

Shows a slider with labels pointing to its parts including the label, group, track, thumb, and output elements.OutputLabelLabelLabel24TrackThumbGroup

Sliders consist of a track element showing the range of available values, one or more thumbs showing the current values, an optional [<output>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/output) element displaying the current values textually, and a label. The thumbs can be dragged to allow a user to change their value. In addition, the track can be clicked to move the nearest thumb to that position.

```
import {Label, Slider, SliderOutput, SliderThumb, SliderTrack} from 'react-aria-components';

<Slider>
  <Label />
  <SliderOutput />
  <SliderTrack>
    <SliderThumb />
    <SliderThumb>
      <Label />
    </SliderThumb>
  </SliderTrack>
</Slider>
```

```
import {
  Label,
  Slider,
  SliderOutput,
  SliderThumb,
  SliderTrack
} from 'react-aria-components';

<Slider>
  <Label />
  <SliderOutput />
  <SliderTrack>
    <SliderThumb />
    <SliderThumb>
      <Label />
    </SliderThumb>
  </SliderTrack>
</Slider>
```

```
import {
  Label,
  Slider,
  SliderOutput,
  SliderThumb,
  SliderTrack
} from 'react-aria-components';

<Slider>
  <Label />
  <SliderOutput />
  <SliderTrack>
    <SliderThumb />
    <SliderThumb>
      <Label />
    </SliderThumb>
  </SliderTrack>
</Slider>
```

If there is no visual label, an `aria-label` or `aria-labelledby` prop must be passed instead to identify the slider and thumbs to screen readers.

A `Slider` uses the following components, which may also be used standalone or reused in other components.

[

Label

A label provides context for an input element.

](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label)

* * *

[![](https://react-spectrum.adobe.com/opacity-slider.9da6d01a.png)

Opacity Slider

An opacity slider styled with Tailwind CSS.

](https://react-spectrum.adobe.com/react-aria/examples/opacity-slider.html)

* * *

To help kick-start your project, we offer starter kits that include example implementations of all React Aria components with various styling solutions. All components are fully styled, including support for dark mode, high contrast mode, and all UI states. Each starter comes with a pre-configured [Storybook](https://storybook.js.org/) that you can experiment with, or use as a starting point for your own component library.

* * *

If you will use a Slider in multiple places in your app, you can wrap all of the pieces into a reusable component. This way, the DOM structure, styling code, and other logic are defined in a single place and reused everywhere to ensure consistency.

This example wraps `Slider` and all of its children together into a single component which accepts a `label` prop, which is passed to the right place. It also shows how to use the `SliderTrack` and `SliderOutput` render props to render multiple slider thumbs, depending on the provided values. When multiple thumbs are rendered, each `SliderThumb` should have an `aria-label`, which is provided via the `thumbLabels` prop in this example.

```
import type {SliderProps} from 'react-aria-components';

interface MySliderProps<T> extends SliderProps<T> {
  label?: string;
  thumbLabels?: string[];
}

function MySlider<T extends number | number[]>(
  { label, thumbLabels, ...props }: MySliderProps<T>
) {
  return (
    <Slider {...props}>
      {label && <Label>{label}</Label>}
      <SliderOutput>
        {({ state }) =>
          state.values.map((_, i) => state.getThumbValueLabel(i)).join(' – ')}
      </SliderOutput>
      <SliderTrack>
        {({ state }) =>
          state.values.map((_, i) => (
            <SliderThumb key={i} index={i} aria-label={thumbLabels?.[i]} />
          ))}
      </SliderTrack>
    </Slider>
  );
}

<MySlider
  label="Range"
  defaultValue={[30, 60]}
  thumbLabels={['start', 'end']}
/>
```

```
import type {SliderProps} from 'react-aria-components';

interface MySliderProps<T> extends SliderProps<T> {
  label?: string;
  thumbLabels?: string[];
}

function MySlider<T extends number | number[]>(
  { label, thumbLabels, ...props }: MySliderProps<T>
) {
  return (
    <Slider {...props}>
      {label && <Label>{label}</Label>}
      <SliderOutput>
        {({ state }) =>
          state.values.map((_, i) =>
            state.getThumbValueLabel(i)
          ).join(' – ')}
      </SliderOutput>
      <SliderTrack>
        {({ state }) =>
          state.values.map((_, i) => (
            <SliderThumb
              key={i}
              index={i}
              aria-label={thumbLabels?.[i]}
            />
          ))}
      </SliderTrack>
    </Slider>
  );
}

<MySlider
  label="Range"
  defaultValue={[30, 60]}
  thumbLabels={['start', 'end']}
/>
```

```
import type {SliderProps} from 'react-aria-components';

interface MySliderProps<
  T
> extends
  SliderProps<T> {
  label?: string;
  thumbLabels?: string[];
}

function MySlider<
  T extends
    | number
    | number[]
>(
  {
    label,
    thumbLabels,
    ...props
  }: MySliderProps<T>
) {
  return (
    <Slider {...props}>
      {label && (
        <Label>
          {label}
        </Label>
      )}
      <SliderOutput>
        {({ state }) =>
          state.values
            .map((
              _,
              i
            ) =>
              state
                .getThumbValueLabel(
                  i
                )
            ).join(
              ' – '
            )}
      </SliderOutput>
      <SliderTrack>
        {({ state }) =>
          state.values
            .map((
              _,
              i
            ) => (
              <SliderThumb
                key={i}
                index={i}
                aria-label={thumbLabels
                  ?.[i]}
              />
            ))}
      </SliderTrack>
    </Slider>
  );
}

<MySlider
  label="Range"
  defaultValue={[
    30,
    60
  ]}
  thumbLabels={[
    'start',
    'end'
  ]}
/>
```

* * *

The `value` prop paired with the `onChange` event can be used to make a slider controlled. The value must fall between the Slider's minimum and maximum values, which default to 0 and 100 respectively. The `onChange` event receives the new slider value as a parameter, which can be used to update state.

```
function Example() {
  let [value, setValue] = React.useState(25);
  return (
    <>
      <MySlider<number>
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
      <MySlider<number>
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
      <MySlider<number>
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
      <MySlider<number[]>
        label="Range"
        thumbLabels={['start', 'end']}
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
      <MySlider<number[]>
        label="Range"
        thumbLabels={['start', 'end']}
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
      <MySlider<number[]>
        label="Range"
        thumbLabels={[
          'start',
          'end'
        ]}
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

Each SliderThumb supports the `name` prop for integration with HTML forms.

```
<Slider defaultValue={50}>
  <Label>Opacity</Label>
  <SliderOutput />
  <SliderTrack>
    <SliderThumb name="opacity" />  </SliderTrack>
</Slider>
```

```
<Slider defaultValue={50}>
  <Label>Opacity</Label>
  <SliderOutput />
  <SliderTrack>
    <SliderThumb name="opacity" />  </SliderTrack>
</Slider>
```

```
<Slider
  defaultValue={50}
>
  <Label>
    Opacity
  </Label>
  <SliderOutput />
  <SliderTrack>
    <SliderThumb name="opacity" />  </SliderTrack>
</Slider>
```

* * *

The `onChange` prop is called as the user drags a slider. The `onChangeEnd` prop can be used to handle when a user stops dragging.

```
function Example() {
  let [value, setValue] = React.useState(25);
  return (
    <>
      <MySlider<number>
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
      <MySlider<number>
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
      <MySlider<number>
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

* * *

By default, slider values are percentages between 0 and 100. A different scale can be used by setting the `minValue` and `maxValue` props.

```
<MySlider
  label="Cookies to buy"
  minValue={50}
  maxValue={150}
  defaultValue={100} />
```

```
<MySlider
  label="Cookies to buy"
  minValue={50}
  maxValue={150}
  defaultValue={100} />
```

```
<MySlider
  label="Cookies to buy"
  minValue={50}
  maxValue={150}
  defaultValue={100} />
```

The `step` prop can be used to snap the value to certain increments. The steps are calculated starting from the minimum. For example, if `minValue={2}`, and `step={3}`, the valid step values would be 2, 5, 8, 11, etc. This example allows increments of 5 between 0 and 100.

```
<MySlider
  label="Amount"
  formatOptions={{style: 'currency', currency: 'USD'}}
  minValue={0}
  maxValue={100}
  step={5} />
```

```
<MySlider
  label="Amount"
  formatOptions={{style: 'currency', currency: 'USD'}}
  minValue={0}
  maxValue={100}
  step={5} />
```

```
<MySlider
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

* * *

Sliders are horizontally oriented by default. The `orientation` prop can be set to `"vertical"` to create a vertical slider. This example also uses `aria-label` rather than `label` to create a slider with no visible label.

```
<MySlider
  orientation="vertical"
  aria-label="Opacity"
  maxValue={1}
  step={0.01} />
```

```
<MySlider
  orientation="vertical"
  aria-label="Opacity"
  maxValue={1}
  step={0.01} />
```

```
<MySlider
  orientation="vertical"
  aria-label="Opacity"
  maxValue={1}
  step={0.01} />
```

Show CSS

```
.react-aria-Slider {
  &[data-orientation=vertical] {
    height: 150px;
    display: block;

    .react-aria-Label,
    .react-aria-SliderOutput {
      display: none;
    }

    .react-aria-SliderTrack {
      width: 30px;
      height: 100%;

      &:before {
        width: 3px;
        height: 100%;
        left: 50%;
        transform: translateX(-50%);
      }
    }

    .react-aria-SliderThumb {
      left: 50%;
    }
  }
}
```

```
.react-aria-Slider {
  &[data-orientation=vertical] {
    height: 150px;
    display: block;

    .react-aria-Label,
    .react-aria-SliderOutput {
      display: none;
    }

    .react-aria-SliderTrack {
      width: 30px;
      height: 100%;

      &:before {
        width: 3px;
        height: 100%;
        left: 50%;
        transform: translateX(-50%);
      }
    }

    .react-aria-SliderThumb {
      left: 50%;
    }
  }
}
```

```
.react-aria-Slider {
  &[data-orientation=vertical] {
    height: 150px;
    display: block;

    .react-aria-Label,
    .react-aria-SliderOutput {
      display: none;
    }

    .react-aria-SliderTrack {
      width: 30px;
      height: 100%;

      &:before {
        width: 3px;
        height: 100%;
        left: 50%;
        transform: translateX(-50%);
      }
    }

    .react-aria-SliderThumb {
      left: 50%;
    }
  }
}
```

Values are formatted as a percentage by default, but this can be modified by using the `formatOptions` prop to specify a different format. `formatOptions` is compatible with the option parameter of [Intl.NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat) and is applied based on the current locale.

```
<MySlider
  label="Currency"
  formatOptions={{style: 'currency', currency: 'JPY'}}
  defaultValue={60} />
```

```
<MySlider
  label="Currency"
  formatOptions={{style: 'currency', currency: 'JPY'}}
  defaultValue={60} />
```

```
<MySlider
  label="Currency"
  formatOptions={{
    style: 'currency',
    currency: 'JPY'
  }}
  defaultValue={60}
/>
```

A slider can be disabled using the `isDisabled` prop.

```
<MySlider
  label="Cookies to share"
  defaultValue={25}
  isDisabled />
```

```
<MySlider
  label="Cookies to share"
  defaultValue={25}
  isDisabled />
```

```
<MySlider
  label="Cookies to share"
  defaultValue={25}
  isDisabled
/>
```

Show CSS

```
.react-aria-Slider {
  &[data-disabled] {
    .react-aria-SliderTrack:before {
      background: var(--border-color-disabled);
    }

    .react-aria-SliderThumb {
      background: var(--border-color-disabled);
    }
  }
}
```

```
.react-aria-Slider {
  &[data-disabled] {
    .react-aria-SliderTrack:before {
      background: var(--border-color-disabled);
    }

    .react-aria-SliderThumb {
      background: var(--border-color-disabled);
    }
  }
}
```

```
.react-aria-Slider {
  &[data-disabled] {
    .react-aria-SliderTrack:before {
      background: var(--border-color-disabled);
    }

    .react-aria-SliderThumb {
      background: var(--border-color-disabled);
    }
  }
}
```

* * *

Name

Type

Default

Description

`formatOptions`

`[Intl.NumberFormatOptions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat)`

—

The display format of the value label.

`orientation`

`[Orientation](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/orientation.d.ts:Orientation)`

`'horizontal'`

The orientation of the Slider.

`isDisabled`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the whole Slider is disabled.

`minValue`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)`

`0`

The slider's minimum value.

`maxValue`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)`

`100`

The slider's maximum value.

`step`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)`

`1`

The slider's step value.

`value`

`T`

—

The current value (controlled).

`defaultValue`

`T`

—

The default value (uncontrolled).

`children`

`[ChildrenOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ChildrenOrFunction)<[SliderRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Slider.tsx:SliderRenderProps)>`

—

The children of the component. A function may be provided to alter the children based on component state.

`className`

`[ClassNameOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ClassNameOrFunction)<[SliderRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Slider.tsx:SliderRenderProps)>`

—

The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.

`style`

`[StyleOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:StyleOrFunction)<[SliderRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Slider.tsx:SliderRenderProps)>`

—

The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.

Events

Name

Type

Description

`onChangeEnd`

`( (value: T )) => void`

Fired when the slider stops moving, due to being let go.

`onChange`

`( (value: T )) => void`

Handler that is called when the value changes.

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

A `<SliderOutput>` renders the current value of the slider as text.

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

The `<SliderTrack>` component is a grouping of one or more `<SliderThumb>` elements.

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

The `<SliderThumb>` component renders an individual thumb within a `<SliderTrack>`.

Name

Type

Default

Description

`inputRef`

`[RefObject](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/refs.d.ts:RefObject)<[HTMLInputElement](https://developer.mozilla.org/docs/Web/API/HTMLInputElement) | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)>`

—

A ref for the HTML input element.

`isDisabled`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the Thumb is disabled.

`index`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)`

`0`

Index of the thumb within the slider.

`autoFocus`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the element should receive focus on render.

`name`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

The name of the input element, used when submitting an HTML form. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname).

`form`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

The `<form>` element to associate the input with. The value of this attribute must be the id of a `<form>` in the same document. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#form).

`children`

`[ChildrenOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ChildrenOrFunction)<[SliderThumbRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Slider.tsx:SliderThumbRenderProps)>`

—

The children of the component. A function may be provided to alter the children based on component state.

`className`

`[ClassNameOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ClassNameOrFunction)<[SliderThumbRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Slider.tsx:SliderThumbRenderProps)>`

—

The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.

`style`

`[StyleOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:StyleOrFunction)<[SliderThumbRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Slider.tsx:SliderThumbRenderProps)>`

—

The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.

Events

Name

Type

Description

`onFocus`

`( (e: [FocusEvent](https://developer.mozilla.org/docs/Web/API/FocusEvent)<Target> )) => void`

Handler that is called when the element receives focus.

`onBlur`

`( (e: [FocusEvent](https://developer.mozilla.org/docs/Web/API/FocusEvent)<Target> )) => void`

Handler that is called when the element loses focus.

`onFocusChange`

`( (isFocused: [boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) )) => void`

Handler that is called when the element's focus status changes.

`onKeyDown`

`( (e: [KeyboardEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/events.d.ts:KeyboardEvent) )) => void`

Handler that is called when a key is pressed.

`onKeyUp`

`( (e: [KeyboardEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/events.d.ts:KeyboardEvent) )) => void`

Handler that is called when a key is released.

`onHoverStart`

`( (e: [HoverEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/events.d.ts:HoverEvent) )) => void`

Handler that is called when a hover interaction starts.

`onHoverEnd`

`( (e: [HoverEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/events.d.ts:HoverEvent) )) => void`

Handler that is called when a hover interaction ends.

`onHoverChange`

`( (isHovering: [boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) )) => void`

Handler that is called when the hover state changes.

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

`aria-errormessage`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

Identifies the element that provides an error message for the object.

* * *

React Aria components can be styled in many ways, including using CSS classes, inline styles, utility classes (e.g. Tailwind), CSS-in-JS (e.g. Styled Components), etc. By default, all components include a builtin `className` attribute which can be targeted using CSS selectors. These follow the `react-aria-ComponentName` naming convention.

```
.react-aria-Slider {
  /* ... */
}
```

```
.react-aria-Slider {
  /* ... */
}
```

```
.react-aria-Slider {
  /* ... */
}
```

A custom `className` can also be specified on any component. This overrides the default `className` provided by React Aria with your own.

```
<Slider className="my-slider">
  {/* ... */}
</Slider>
```

```
<Slider className="my-slider">
  {/* ... */}
</Slider>
```

```
<Slider className="my-slider">
  {/* ... */}
</Slider>
```

In addition, some components support multiple UI states (e.g. focused, placeholder, readonly, etc.). React Aria components expose states using data attributes, which you can target in CSS selectors. For example:

```
.react-aria-SliderThumb[data-dragging] {
  /* ... */
}

.react-aria-SliderThumb[data-focused] {
  /* ... */
}
```

```
.react-aria-SliderThumb[data-dragging] {
  /* ... */
}

.react-aria-SliderThumb[data-focused] {
  /* ... */
}
```

```
.react-aria-SliderThumb[data-dragging] {
  /* ... */
}

.react-aria-SliderThumb[data-focused] {
  /* ... */
}
```

The `className` and `style` props also accept functions which receive states for styling. This lets you dynamically determine the classes or styles to apply, which is useful when using utility CSS libraries like [Tailwind](https://tailwindcss.com/).

```
<SliderThumb
  className={({ isDragging }) => isDragging ? 'bg-gray-700' : 'bg-gray-600'}
/>
```

```
<SliderThumb
  className={({ isDragging }) =>
    isDragging ? 'bg-gray-700' : 'bg-gray-600'}
/>
```

```
<SliderThumb
  className={(
    { isDragging }
  ) =>
    isDragging
      ? 'bg-gray-700'
      : 'bg-gray-600'}
/>
```

Render props may also be used as children to alter what elements are rendered based on the current state. For example, you could implement custom formatting for the slider's current value.

```
<SliderOutput>
  {state => `${state.getThumbValueLabel(0)} cookies`}
</SliderOutput>
```

```
<SliderOutput>
  {state => `${state.getThumbValueLabel(0)} cookies`}
</SliderOutput>
```

```
<SliderOutput>
  {(state) =>
    `${
      state
        .getThumbValueLabel(
          0
        )
    } cookies`}
</SliderOutput>
```

The states, selectors, and render props for each component used in a `Slider` are documented below.

The `Slider` component can be targeted with the `.react-aria-Slider` CSS selector, or by overriding with a custom `className`. It supports the following states:

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

The `SliderThumb` component can be targeted with the `.react-aria-SliderThumb` CSS selector, or by overriding with a custom `className`. It supports the following states:

Name

CSS Selector

Description

`state`

`—`

State of the slider.

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

If you need to customize one of the components within a `Slider`, such as `Label` or `SliderOutput`, in many cases you can create a wrapper component. This lets you customize the props passed to the component.

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

`Slider`

`SliderContext`

`[SliderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Slider.tsx:SliderProps)`

`[HTMLDivElement](https://developer.mozilla.org/docs/Web/API/HTMLDivElement)`

This example shows a `SliderDescription` component that accepts a slider in its children and renders a description element below it. It uses the [useId](https://react-spectrum.adobe.com/react-aria/useId.html) hook to generate a unique id for the description, and associates it with the slider via the `aria-describedby` attribute passed to the `SliderContext` provider.

```
import {SliderContext} from 'react-aria-components';
import {useId} from 'react-aria';

interface SliderDescriptionProps {
  children?: React.ReactNode;
  description?: string;
}

function SliderDescription({ children, description }: SliderDescriptionProps) {
  let descriptionId = useId();
  return (
    <div>
      <SliderContext.Provider value={{ 'aria-describedby': descriptionId }}>        {children}
      </SliderContext.Provider>
      <small id={descriptionId}>{description}</small>
    </div>
  );
}

<SliderDescription description="Keeping your display on may shorten its life.">
  <MySlider
    label="Turn off display after"
    minValue={10}
    maxValue={60}
    defaultValue={45}
    formatOptions={{ style: 'unit', unit: 'minute' }}
  />
</SliderDescription>
```

```
import {SliderContext} from 'react-aria-components';
import {useId} from 'react-aria';

interface SliderDescriptionProps {
  children?: React.ReactNode;
  description?: string;
}

function SliderDescription(
  { children, description }: SliderDescriptionProps
) {
  let descriptionId = useId();
  return (
    <div>
      <SliderContext.Provider
        value={{ 'aria-describedby': descriptionId }}
      >        {children}
      </SliderContext.Provider>
      <small id={descriptionId}>{description}</small>
    </div>
  );
}

<SliderDescription description="Keeping your display on may shorten its life.">
  <MySlider
    label="Turn off display after"
    minValue={10}
    maxValue={60}
    defaultValue={45}
    formatOptions={{ style: 'unit', unit: 'minute' }}
  />
</SliderDescription>
```

```
import {SliderContext} from 'react-aria-components';
import {useId} from 'react-aria';

interface SliderDescriptionProps {
  children?:
    React.ReactNode;
  description?: string;
}

function SliderDescription(
  {
    children,
    description
  }: SliderDescriptionProps
) {
  let descriptionId =
    useId();
  return (
    <div>
      <SliderContext.Provider
        value={{
          'aria-describedby':
            descriptionId
        }}
      >        {children}
      </SliderContext.Provider>
      <small
        id={descriptionId}
      >
        {description}
      </small>
    </div>
  );
}

<SliderDescription description="Keeping your display on may shorten its life.">
  <MySlider
    label="Turn off display after"
    minValue={10}
    maxValue={60}
    defaultValue={45}
    formatOptions={{
      style: 'unit',
      unit: 'minute'
    }}
  />
</SliderDescription>
```

Slider passes props to its child components, such as the label, via their associated contexts. These contexts are exported so you can also consume them in your own custom components. This enables you to reuse existing components from your app or component library together with React Aria Components.

Component

Context

Props

Ref

`Label`

`LabelContext`

`[LabelProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Label.tsx:LabelProps)`

`[HTMLLabelElement](https://developer.mozilla.org/docs/Web/API/HTMLLabelElement)`

This example consumes from `LabelContext` in an existing styled label component to make it compatible with React Aria Components. The `[useContextProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:useContextProps)` hook merges the local props and ref with the ones provided via context by Slider.

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

Now you can use `MyCustomLabel` within a `Slider`, in place of the builtin React Aria Components `Label`.

```
<Slider>
  <MyCustomLabel>Opacity</MyCustomLabel>  <SliderTrack>
    <SliderThumb />
  </SliderTrack>
</Slider>
```

```
<Slider>
  <MyCustomLabel>Opacity</MyCustomLabel>  <SliderTrack>
    <SliderThumb />
  </SliderTrack>
</Slider>
```

```
<Slider>
  <MyCustomLabel>
    Opacity
  </MyCustomLabel>  <SliderTrack>
    <SliderThumb />
  </SliderTrack>
</Slider>
```

Slider provides a `[SliderState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/slider/src/useSliderState.ts:SliderState)` object to its children via `SliderStateContext`. This can be used to access and manipulate the slider's state.

This example shows a `SliderNumberField` component that can be placed within a `Slider` to allow the user to enter a number and update the slider's value.

```
import {Input, LabelContext, NumberField, SliderStateContext, useSlottedContext} from 'react-aria-components';

function SliderNumberField() {
  let state = React.useContext(SliderStateContext)!;  let labelProps = useSlottedContext(LabelContext)!;
  return (
    <NumberField
      aria-labelledby={labelProps.id}
      value={state.values[0]}
      onChange={(v) => state.setThumbValue(0, v)}
    >
      <Input />
    </NumberField>
  );
}

<Slider defaultValue={30}>
  <Label>Opacity</Label>
  <SliderNumberField />  <SliderTrack>
    <SliderThumb />
  </SliderTrack>
</Slider>
```

```
import {
  Input,
  LabelContext,
  NumberField,
  SliderStateContext,
  useSlottedContext
} from 'react-aria-components';

function SliderNumberField() {
  let state = React.useContext(SliderStateContext)!;  let labelProps = useSlottedContext(LabelContext)!;
  return (
    <NumberField
      aria-labelledby={labelProps.id}
      value={state.values[0]}
      onChange={(v) => state.setThumbValue(0, v)}
    >
      <Input />
    </NumberField>
  );
}

<Slider defaultValue={30}>
  <Label>Opacity</Label>
  <SliderNumberField />  <SliderTrack>
    <SliderThumb />
  </SliderTrack>
</Slider>
```

```
import {
  Input,
  LabelContext,
  NumberField,
  SliderStateContext,
  useSlottedContext
} from 'react-aria-components';

function SliderNumberField() {
  let state = React
    .useContext(
      SliderStateContext
    )!;  let labelProps =
    useSlottedContext(
      LabelContext
    )!;
  return (
    <NumberField
      aria-labelledby={labelProps
        .id}
      value={state
        .values[0]}
      onChange={(v) =>
        state
          .setThumbValue(
            0,
            v
          )}
    >
      <Input />
    </NumberField>
  );
}

<Slider
  defaultValue={30}
>
  <Label>
    Opacity
  </Label>
  <SliderNumberField />  <SliderTrack>
    <SliderThumb />
  </SliderTrack>
</Slider>
```

Show CSS

```
.react-aria-Input {
  border-radius: 6px;
  width: 3ch;
}
```

```
.react-aria-Input {
  border-radius: 6px;
  width: 3ch;
}
```

```
.react-aria-Input {
  border-radius: 6px;
  width: 3ch;
}
```

If you need to customize things even further, such as accessing internal state or customizing DOM structure, you can drop down to the lower level Hook-based API. See [useSlider](https://react-spectrum.adobe.com/react-aria/useSlider.html) for more details.