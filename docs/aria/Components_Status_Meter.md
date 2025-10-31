# Meter

**Source**: [https://react-spectrum.adobe.com/react-aria/Meter.html](https://react-spectrum.adobe.com/react-aria/Meter.html)

> Documentation for Meter in the React Aria package.

---

A meter represents a quantity within a known range, or a fractional value.

* * *

```
import {Meter, Label} from 'react-aria-components';

<Meter value={25}>
  {({percentage, valueText}) => <>
    <Label>Storage space</Label>
    <span className="value">{valueText}</span>
    <div className="bar">
      <div className="fill" style={{width: percentage + '%'}} />
    </div>
  </>}
</Meter>
```

```
import {Label, Meter} from 'react-aria-components';

<Meter value={25}>
  {({ percentage, valueText }) => (
    <>
      <Label>Storage space</Label>
      <span className="value">{valueText}</span>
      <div className="bar">
        <div
          className="fill"
          style={{ width: percentage + '%' }}
        />
      </div>
    </>
  )}
</Meter>
```

```
import {
  Label,
  Meter
} from 'react-aria-components';

<Meter value={25}>
  {(
    {
      percentage,
      valueText
    }
  ) => (
    <>
      <Label>
        Storage space
      </Label>
      <span className="value">
        {valueText}
      </span>
      <div className="bar">
        <div
          className="fill"
          style={{
            width:
              percentage +
              '%'
          }}
        />
      </div>
    </>
  )}
</Meter>
```

Show CSS

```
@import "@react-aria/example-theme";

.react-aria-Meter {
  --fill-color: forestgreen;

  display: grid;
  grid-template-areas: "label value"
                       "bar bar";
  grid-template-columns: 1fr auto;
  gap: 4px;
  width: 250px;
  color: var(--text-color);

  .value {
    grid-area: value;
  }

  .bar {
    grid-area: bar;
    box-shadow: inset 0px 0px 0px 1px var(--border-color);
    forced-color-adjust: none;
    height: 10px;
    border-radius: 5px;
    overflow: hidden;
  }

  .fill {
    background: var(--fill-color);
    height: 100%;
  }
}

@media (forced-colors: active) {
  .react-aria-Meter {
    --fill-color: Highlight;
  }
}
```

```
@import "@react-aria/example-theme";

.react-aria-Meter {
  --fill-color: forestgreen;

  display: grid;
  grid-template-areas: "label value"
                       "bar bar";
  grid-template-columns: 1fr auto;
  gap: 4px;
  width: 250px;
  color: var(--text-color);

  .value {
    grid-area: value;
  }

  .bar {
    grid-area: bar;
    box-shadow: inset 0px 0px 0px 1px var(--border-color);
    forced-color-adjust: none;
    height: 10px;
    border-radius: 5px;
    overflow: hidden;
  }

  .fill {
    background: var(--fill-color);
    height: 100%;
  }
}

@media (forced-colors: active) {
  .react-aria-Meter {
    --fill-color: Highlight;
  }
}
```

```
@import "@react-aria/example-theme";

.react-aria-Meter {
  --fill-color: forestgreen;

  display: grid;
  grid-template-areas: "label value"
                       "bar bar";
  grid-template-columns: 1fr auto;
  gap: 4px;
  width: 250px;
  color: var(--text-color);

  .value {
    grid-area: value;
  }

  .bar {
    grid-area: bar;
    box-shadow: inset 0px 0px 0px 1px var(--border-color);
    forced-color-adjust: none;
    height: 10px;
    border-radius: 5px;
    overflow: hidden;
  }

  .fill {
    background: var(--fill-color);
    height: 100%;
  }
}

@media (forced-colors: active) {
  .react-aria-Meter {
    --fill-color: Highlight;
  }
}
```

* * *

The [<meter>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meter) HTML element can be used to build a meter, however it is very difficult to style cross browser. `Meter` helps achieve accessible meters that can be styled as needed.

-   **Accessible** – Follows the [ARIA meter pattern](https://www.w3.org/WAI/ARIA/apg/patterns/meter/), with fallback to `progressbar` where unsupported. A nested label is automatically associated with the meter semantically.
-   **International** – The value is formatted as a percentage or custom format according to the user's locale.

Note: Meters are similar to progress bars, but represent a quantity as opposed to progress over time. See [ProgressBar](https://react-spectrum.adobe.com/react-aria/ProgressBar.html) for more details about progress bars.

* * *

Shows a meter with labels pointing to its parts, including the label, fill, track, and value label elements.ValueLabelTasks completed4 of 5TrackFill

Meters consist of a track element showing the full value in a range, a fill element showing the current value, a label, and an optional value label. The track and bar elements represent the value visually, while a wrapper element represents the meter to assistive technology using the [meter](https://www.w3.org/WAI/ARIA/apg/patterns/meter/) ARIA role.

```
import {Meter, Label} from 'react-aria-components';

<Meter>
  <Label />
</Meter>
```

```
import {Meter, Label} from 'react-aria-components';

<Meter>
  <Label />
</Meter>
```

```
import {
  Label,
  Meter
} from 'react-aria-components';

<Meter>
  <Label />
</Meter>
```

If there is no visual label, an `aria-label` or `aria-labelledby` prop must be passed instead to identify the element to screen readers.

A `Meter` uses the following components, which may also be used standalone or reused in other components.

[

Label

A label provides context for an element.

](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label)

* * *

To help kick-start your project, we offer starter kits that include example implementations of all React Aria components with various styling solutions. All components are fully styled, including support for dark mode, high contrast mode, and all UI states. Each starter comes with a pre-configured [Storybook](https://storybook.js.org/) that you can experiment with, or use as a starting point for your own component library.

* * *

If you will use a Meter in multiple places in your app, you can wrap all of the pieces into a reusable component. This way, the DOM structure, styling code, and other logic are defined in a single place and reused everywhere to ensure consistency.

This example wraps `Meter` and all of its children together into a single component which accepts a `label` prop that is passed to the right place.

```
import type {MeterProps} from 'react-aria-components';

interface MyMeterProps extends MeterProps {
  label?: string
}

function MyMeter({label, ...props}: MyMeterProps) {
  return (
    <Meter {...props}>
      {({percentage, valueText}) => <>
        <Label>{label}</Label>
        <span className="value">{valueText}</span>
        <div className="bar">
          <div className="fill" style={{width: percentage + '%'}} />
        </div>
      </>}
    </Meter>
  );
}

<MyMeter label="Storage space" value={80} />
```

```
import type {MeterProps} from 'react-aria-components';

interface MyMeterProps extends MeterProps {
  label?: string;
}

function MyMeter({ label, ...props }: MyMeterProps) {
  return (
    <Meter {...props}>
      {({ percentage, valueText }) => (
        <>
          <Label>{label}</Label>
          <span className="value">{valueText}</span>
          <div className="bar">
            <div
              className="fill"
              style={{ width: percentage + '%' }}
            />
          </div>
        </>
      )}
    </Meter>
  );
}

<MyMeter label="Storage space" value={80} />
```

```
import type {MeterProps} from 'react-aria-components';

interface MyMeterProps
  extends MeterProps {
  label?: string;
}

function MyMeter(
  { label, ...props }:
    MyMeterProps
) {
  return (
    <Meter {...props}>
      {(
        {
          percentage,
          valueText
        }
      ) => (
        <>
          <Label>
            {label}
          </Label>
          <span className="value">
            {valueText}
          </span>
          <div className="bar">
            <div
              className="fill"
              style={{
                width:
                  percentage +
                  '%'
              }}
            />
          </div>
        </>
      )}
    </Meter>
  );
}

<MyMeter
  label="Storage space"
  value={80}
/>
```

* * *

Meters are controlled with the `value` prop. By default, the `value` prop represents the current percentage of progress, as the minimum and maximum values default to 0 and 100, respectively.

```
<MyMeter
  label="Storage space"
  value={25} />
```

```
<MyMeter
  label="Storage space"
  value={25} />
```

```
<MyMeter
  label="Storage space"
  value={25} />
```

A custom value scale can be used by setting the `minValue` and `maxValue` props.

```
<MyMeter
  label="Widgets Used"
  minValue={50}
  maxValue={150}
  value={100} />
```

```
<MyMeter
  label="Widgets Used"
  minValue={50}
  maxValue={150}
  value={100} />
```

```
<MyMeter
  label="Widgets Used"
  minValue={50}
  maxValue={150}
  value={100} />
```

* * *

Values are formatted as a percentage by default, but this can be modified by using the `formatOptions` prop to specify a different format. `formatOptions` is compatible with the option parameter of [Intl.NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat) and is applied based on the current locale.

```
<MyMeter
  label="Currency"
  formatOptions={{style: 'currency', currency: 'JPY'}}
  value={60} />
```

```
<MyMeter
  label="Currency"
  formatOptions={{style: 'currency', currency: 'JPY'}}
  value={60} />
```

```
<MyMeter
  label="Currency"
  formatOptions={{
    style: 'currency',
    currency: 'JPY'
  }}
  value={60}
/>
```

The `valueLabel` prop allows the formatted value to be replaced with a custom string.

```
<MyMeter
  label="Space used"
  valueLabel="54 of 60GB"
  value={90} />
```

```
<MyMeter
  label="Space used"
  valueLabel="54 of 60GB"
  value={90} />
```

```
<MyMeter
  label="Space used"
  valueLabel="54 of 60GB"
  value={90} />
```

* * *

Name

Type

Default

Description

`formatOptions`

`[Intl.NumberFormatOptions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat)`

`{style: 'percent'}`

The display format of the value label.

`valueLabel`

`[ReactNode](https://reactjs.org/docs/rendering-elements.html)`

—

The content to display as the value's label (e.g. 1 of 4).

`value`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)`

`0`

The current value (controlled).

`minValue`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)`

`0`

The smallest value allowed for the input.

`maxValue`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)`

`100`

The largest value allowed for the input.

`children`

`[ChildrenOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ChildrenOrFunction)<[MeterRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Meter.tsx:MeterRenderProps)>`

—

The children of the component. A function may be provided to alter the children based on component state.

`className`

`[ClassNameOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ClassNameOrFunction)<[MeterRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Meter.tsx:MeterRenderProps)>`

—

The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.

`style`

`[StyleOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:StyleOrFunction)<[MeterRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Meter.tsx:MeterRenderProps)>`

—

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
.react-aria-Meter {
  /* ... */
}
```

```
.react-aria-Meter {
  /* ... */
}
```

```
.react-aria-Meter {
  /* ... */
}
```

A custom `className` can also be specified on any component. This overrides the default `className` provided by React Aria with your own.

```
<Meter className="my-meter">
  {/* ... */}
</Meter>
```

```
<Meter className="my-meter">
  {/* ... */}
</Meter>
```

```
<Meter className="my-meter">
  {/* ... */}
</Meter>
```

The `className` and `style` props also accept functions which receive states for styling. This lets you dynamically determine the classes or styles to apply, which is useful when using utility CSS libraries like [Tailwind](https://tailwindcss.com/).

```
<Meter
  className={({ percentage }) =>
    percentage > 50 ? 'bg-green-400' : 'bg-yellow-100'}
>
  Item
</Meter>
```

```
<Meter
  className={({ percentage }) =>
    percentage > 50 ? 'bg-green-400' : 'bg-yellow-100'}
>
  Item
</Meter>
```

```
<Meter
  className={(
    { percentage }
  ) =>
    percentage > 50
      ? 'bg-green-400'
      : 'bg-yellow-100'}
>
  Item
</Meter>
```

The selectors and render props for each component used in a `Meter` are documented below.

A `Meter` can be targeted with the `.react-aria-Meter` CSS selector, or by overriding with a custom `className`. It supports the following states and render props:

Name

CSS Selector

Description

`percentage`

`—`

The value as a percentage between the minimum and maximum.

`valueText`

`[aria-valuetext]`

A formatted version of the value.

A `Label` can be targeted with the `.react-aria-Label` CSS selector, or by adding a custom `className`.

* * *

All React Aria Components export a corresponding context that can be used to send props to them from a parent element. This enables you to build your own compositional APIs similar to those found in React Aria Components itself. You can send any prop or ref via context that you could pass to the corresponding component. The local props and ref on the component are merged with the ones passed via context, with the local props taking precedence (following the rules documented in [mergeProps](https://react-spectrum.adobe.com/react-aria/mergeProps.html)).

Component

Context

Props

Ref

`Meter`

`MeterContext`

`[MeterProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Meter.tsx:MeterProps)`

`[HTMLDivElement](https://developer.mozilla.org/docs/Web/API/HTMLDivElement)`

This example sets the `formatOptions` via context, which applies to all nested meters.

```
import {MeterContext} from 'react-aria-components';

<MeterContext.Provider value={{formatOptions: {style: 'decimal'}}}>
  <MyMeter label="Widgets" value={28.5} />
  <MyMeter label="Cookies" value={68.75} />
</MeterContext.Provider>
```

```
import {MeterContext} from 'react-aria-components';

<MeterContext.Provider
  value={{ formatOptions: { style: 'decimal' } }}
>
  <MyMeter label="Widgets" value={28.5} />
  <MyMeter label="Cookies" value={68.75} />
</MeterContext.Provider>
```

```
import {MeterContext} from 'react-aria-components';

<MeterContext.Provider
  value={{
    formatOptions: {
      style: 'decimal'
    }
  }}
>
  <MyMeter
    label="Widgets"
    value={28.5}
  />
  <MyMeter
    label="Cookies"
    value={68.75}
  />
</MeterContext.Provider>
```

If you need to customize things further, such as customizing the DOM structure, you can drop down to the lower level Hook-based API. See [useMeter](https://react-spectrum.adobe.com/react-aria/useMeter.html) for more details.