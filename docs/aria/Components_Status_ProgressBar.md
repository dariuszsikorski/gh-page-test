# ProgressBar

**Source**: [https://react-spectrum.adobe.com/react-aria/ProgressBar.html](https://react-spectrum.adobe.com/react-aria/ProgressBar.html)

> Documentation for ProgressBar in the React Aria package.

---

Progress bars show either determinate or indeterminate progress of an operation over time.

* * *

```
import {ProgressBar, Label} from 'react-aria-components';

<ProgressBar value={80}>
  {({percentage, valueText}) => <>
    <Label>Loading…</Label>
    <span className="value">{valueText}</span>
    <div className="bar">
      <div className="fill" style={{width: percentage + '%'}} />
    </div>
  </>}
</ProgressBar>
```

```
import {Label, ProgressBar} from 'react-aria-components';

<ProgressBar value={80}>
  {({ percentage, valueText }) => (
    <>
      <Label>Loading…</Label>
      <span className="value">{valueText}</span>
      <div className="bar">
        <div
          className="fill"
          style={{ width: percentage + '%' }}
        />
      </div>
    </>
  )}
</ProgressBar>
```

```
import {
  Label,
  ProgressBar
} from 'react-aria-components';

<ProgressBar
  value={80}
>
  {(
    {
      percentage,
      valueText
    }
  ) => (
    <>
      <Label>
        Loading…
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
</ProgressBar>
```

Show CSS

```
@import "@react-aria/example-theme";

.react-aria-ProgressBar {
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
    will-change: transform;
  }

  .fill {
    background: var(--highlight-background);
    height: 100%;
  }
}
```

```
@import "@react-aria/example-theme";

.react-aria-ProgressBar {
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
    will-change: transform;
  }

  .fill {
    background: var(--highlight-background);
    height: 100%;
  }
}
```

```
@import "@react-aria/example-theme";

.react-aria-ProgressBar {
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
    will-change: transform;
  }

  .fill {
    background: var(--highlight-background);
    height: 100%;
  }
}
```

* * *

The [<progress>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress) HTML element can be used to build a progress bar, however it is very difficult to style cross browser. `ProgressBar` helps achieve accessible progress bars and spinners that can be styled as needed.

-   **Accessible** – Follows the [ARIA progressbar pattern](https://www.w3.org/TR/wai-aria-1.2/#progressbar), supporting both determinate and indeterminate progress bars. A nested label is automatically associated with the progress bar semantically.
-   **International** – The value is formatted as a percentage or custom format according to the user's locale.

* * *

Shows a progress bar with labels pointing to its parts, including the label, fill, track, and value label elements.ValueLabelLoading data…26%TrackFill

Progress bars consist of a track element showing the full progress of an operation, a fill element showing the current progress, a label, and an optional value label. The track and bar elements represent the progress visually, while a wrapper element represents the progress to assistive technology using the [progressbar](https://www.w3.org/TR/wai-aria-1.2/#progressbar) ARIA role.

```
import {ProgressBar, Label} from 'react-aria-components';

<ProgressBar>
  <Label />
</ProgressBar>
```

```
import {ProgressBar, Label} from 'react-aria-components';

<ProgressBar>
  <Label />
</ProgressBar>
```

```
import {
  Label,
  ProgressBar
} from 'react-aria-components';

<ProgressBar>
  <Label />
</ProgressBar>
```

If there is no visual label, an `aria-label` or `aria-labelledby` prop must be passed instead to identify the element to screen readers.

A `ProgressBar` uses the following components, which may also be used standalone or reused in other components.

[

Label

A label provides context for an element.

](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label)

* * *

[![](https://react-spectrum.adobe.com/loading-progress.e117d8b4.png)

Loading ProgressBar

A loading ProgressBar styled with Tailwind CSS.

](https://react-spectrum.adobe.com/react-aria/examples/loading-progress.html)

* * *

To help kick-start your project, we offer starter kits that include example implementations of all React Aria components with various styling solutions. All components are fully styled, including support for dark mode, high contrast mode, and all UI states. Each starter comes with a pre-configured [Storybook](https://storybook.js.org/) that you can experiment with, or use as a starting point for your own component library.

* * *

If you will use a ProgressBar in multiple places in your app, you can wrap all of the pieces into a reusable component. This way, the DOM structure, styling code, and other logic are defined in a single place and reused everywhere to ensure consistency.

This example wraps `ProgressBar` and all of its children together into a single component which accepts a `label` prop that is passed to the right place.

```
import type {ProgressBarProps} from 'react-aria-components';

interface MyProgressBarProps extends ProgressBarProps {
  label?: string
}

function MyProgressBar({label, ...props}: MyProgressBarProps) {
  return (
    <ProgressBar {...props}>
      {({percentage, valueText}) => <>
        <Label>{label}</Label>
        <span className="value">{valueText}</span>
        <div className="bar">
          <div className="fill" style={{width: percentage + '%'}} />
        </div>
      </>}
    </ProgressBar>
  );
}

<MyProgressBar label="Loading…" value={80} />
```

```
import type {ProgressBarProps} from 'react-aria-components';

interface MyProgressBarProps extends ProgressBarProps {
  label?: string;
}

function MyProgressBar(
  { label, ...props }: MyProgressBarProps
) {
  return (
    <ProgressBar {...props}>
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
    </ProgressBar>
  );
}

<MyProgressBar label="Loading…" value={80} />
```

```
import type {ProgressBarProps} from 'react-aria-components';

interface MyProgressBarProps
  extends
    ProgressBarProps {
  label?: string;
}

function MyProgressBar(
  { label, ...props }:
    MyProgressBarProps
) {
  return (
    <ProgressBar
      {...props}
    >
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
    </ProgressBar>
  );
}

<MyProgressBar
  label="Loading…"
  value={80}
/>
```

* * *

ProgressBars are controlled with the `value` prop. By default, the `value` prop represents the current percentage of progress, as the minimum and maximum values default to 0 and 100, respectively.

```
<MyProgressBar label="Loading…" value={25} />
```

```
<MyProgressBar label="Loading…" value={25} />
```

```
<MyProgressBar
  label="Loading…"
  value={25}
/>
```

A custom value scale can be used by setting the `minValue` and `maxValue` props.

```
<MyProgressBar
  label="Loading…"
  minValue={50}
  maxValue={150}
  value={100} />
```

```
<MyProgressBar
  label="Loading…"
  minValue={50}
  maxValue={150}
  value={100} />
```

```
<MyProgressBar
  label="Loading…"
  minValue={50}
  maxValue={150}
  value={100} />
```

The `isIndeterminate` prop can be used to represent an indeterminate operation.

```
<MyProgressBar
  aria-label="Loading…"
  isIndeterminate />
```

```
<MyProgressBar
  aria-label="Loading…"
  isIndeterminate />
```

```
<MyProgressBar
  aria-label="Loading…"
  isIndeterminate />
```

Show CSS

```
.react-aria-ProgressBar {
  &:not([aria-valuenow]) {
    .fill {
      width: 120px;
      border-radius: inherit;
      animation: indeterminate 1.5s infinite ease-in-out;
      will-change: transform;
    }
  }
}

@keyframes indeterminate {
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(250px);
  }
}
```

```
.react-aria-ProgressBar {
  &:not([aria-valuenow]) {
    .fill {
      width: 120px;
      border-radius: inherit;
      animation: indeterminate 1.5s infinite ease-in-out;
      will-change: transform;
    }
  }
}

@keyframes indeterminate {
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(250px);
  }
}
```

```
.react-aria-ProgressBar {
  &:not([aria-valuenow]) {
    .fill {
      width: 120px;
      border-radius: inherit;
      animation: indeterminate 1.5s infinite ease-in-out;
      will-change: transform;
    }
  }
}

@keyframes indeterminate {
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(250px);
  }
}
```

* * *

Values are formatted as a percentage by default, but this can be modified by using the `formatOptions` prop to specify a different format. `formatOptions` is compatible with the option parameter of [Intl.NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat) and is applied based on the current locale.

```
<MyProgressBar
  label="Sending…"
  formatOptions={{style: 'currency', currency: 'JPY'}}
  value={60} />
```

```
<MyProgressBar
  label="Sending…"
  formatOptions={{style: 'currency', currency: 'JPY'}}
  value={60} />
```

```
<MyProgressBar
  label="Sending…"
  formatOptions={{
    style: 'currency',
    currency: 'JPY'
  }}
  value={60}
/>
```

The `valueLabel` prop allows the formatted value to be replaced with a custom string.

```
<MyProgressBar
  label="Feeding…"
  valueLabel="30 of 100 dogs"
  value={30} />
```

```
<MyProgressBar
  label="Feeding…"
  valueLabel="30 of 100 dogs"
  value={30} />
```

```
<MyProgressBar
  label="Feeding…"
  valueLabel="30 of 100 dogs"
  value={30}
/>
```

* * *

Progress bars may also be represented using a circular visualization rather than a line. This is often used to represent indeterminate operations, but may also be used for determinate progress indicators when space is limited. The following example shows a progress bar visualized as a circular spinner using SVG.

```
let center = 16;
let strokeWidth = 4;
let r = 16 - strokeWidth;
let c = 2 * r * Math.PI;

<ProgressBar aria-label="Loading…" value={60}>
  {({ percentage }) => (
    <>
      <svg
        width={64}
        height={64}
        viewBox="0 0 32 32"
        fill="none"
        strokeWidth={strokeWidth}
      >
        <circle
          cx={center}
          cy={center}
          r={r - (strokeWidth / 2 - 0.25)}
          stroke="var(--border-color)"
          strokeWidth={0.5}
        />
        <circle
          cx={center}
          cy={center}
          r={r + (strokeWidth / 2 - 0.25)}
          stroke="var(--border-color)"
          strokeWidth={0.5}
        />
        <circle
          cx={center}
          cy={center}
          r={r}
          stroke="var(--highlight-background)"
          strokeDasharray={`${c} ${c}`}
          strokeDashoffset={c - percentage / 100 * c}
          strokeLinecap="round"
          transform="rotate(-90 16 16)"
        />
      </svg>
    </>
  )}
</ProgressBar>
```

```
let center = 16;
let strokeWidth = 4;
let r = 16 - strokeWidth;
let c = 2 * r * Math.PI;

<ProgressBar aria-label="Loading…" value={60}>
  {({ percentage }) => (
    <>
      <svg
        width={64}
        height={64}
        viewBox="0 0 32 32"
        fill="none"
        strokeWidth={strokeWidth}
      >
        <circle
          cx={center}
          cy={center}
          r={r - (strokeWidth / 2 - 0.25)}
          stroke="var(--border-color)"
          strokeWidth={0.5}
        />
        <circle
          cx={center}
          cy={center}
          r={r + (strokeWidth / 2 - 0.25)}
          stroke="var(--border-color)"
          strokeWidth={0.5}
        />
        <circle
          cx={center}
          cy={center}
          r={r}
          stroke="var(--highlight-background)"
          strokeDasharray={`${c} ${c}`}
          strokeDashoffset={c - percentage / 100 * c}
          strokeLinecap="round"
          transform="rotate(-90 16 16)"
        />
      </svg>
    </>
  )}
</ProgressBar>
```

```
let center = 16;
let strokeWidth = 4;
let r = 16 - strokeWidth;
let c = 2 * r * Math.PI;

<ProgressBar
  aria-label="Loading…"
  value={60}
>
  {(
    { percentage }
  ) => (
    <>
      <svg
        width={64}
        height={64}
        viewBox="0 0 32 32"
        fill="none"
        strokeWidth={strokeWidth}
      >
        <circle
          cx={center}
          cy={center}
          r={r -
            (strokeWidth /
                2 -
              0.25)}
          stroke="var(--border-color)"
          strokeWidth={0.5}
        />
        <circle
          cx={center}
          cy={center}
          r={r +
            (strokeWidth /
                2 -
              0.25)}
          stroke="var(--border-color)"
          strokeWidth={0.5}
        />
        <circle
          cx={center}
          cy={center}
          r={r}
          stroke="var(--highlight-background)"
          strokeDasharray={`${c} ${c}`}
          strokeDashoffset={c -
            percentage /
              100 * c}
          strokeLinecap="round"
          transform="rotate(-90 16 16)"
        />
      </svg>
    </>
  )}
</ProgressBar>
```

* * *

Name

Type

Default

Description

`isIndeterminate`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether presentation is indeterminate when progress isn't known.

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

`[ChildrenOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ChildrenOrFunction)<[ProgressBarRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/ProgressBar.tsx:ProgressBarRenderProps)>`

—

The children of the component. A function may be provided to alter the children based on component state.

`className`

`[ClassNameOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ClassNameOrFunction)<[ProgressBarRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/ProgressBar.tsx:ProgressBarRenderProps)>`

—

The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.

`style`

`[StyleOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:StyleOrFunction)<[ProgressBarRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/ProgressBar.tsx:ProgressBarRenderProps)>`

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
.react-aria-ProgressBar {
  /* ... */
}
```

```
.react-aria-ProgressBar {
  /* ... */
}
```

```
.react-aria-ProgressBar {
  /* ... */
}
```

A custom `className` can also be specified on any component. This overrides the default `className` provided by React Aria with your own.

```
<ProgressBar className="my-progressbar">
  {/* ... */}
</ProgressBar>
```

```
<ProgressBar className="my-progressbar">
  {/* ... */}
</ProgressBar>
```

```
<ProgressBar className="my-progressbar">
  {/* ... */}
</ProgressBar>
```

The `className` and `style` props also accept functions which receive states for styling. This lets you dynamically determine the classes or styles to apply, which is useful when using utility CSS libraries like [Tailwind](https://tailwindcss.com/).

```
<ProgressBar
  className={({ percentage }) =>
    percentage > 50 ? 'bg-green-400' : 'bg-yellow-100'}
>
  Item
</ProgressBar>
```

```
<ProgressBar
  className={({ percentage }) =>
    percentage > 50 ? 'bg-green-400' : 'bg-yellow-100'}
>
  Item
</ProgressBar>
```

```
<ProgressBar
  className={(
    { percentage }
  ) =>
    percentage > 50
      ? 'bg-green-400'
      : 'bg-yellow-100'}
>
  Item
</ProgressBar>
```

The selectors and render props for each component used in a `ProgressBar` are documented below.

A `ProgressBar` can be targeted with the `.react-aria-ProgressBar` CSS selector, or by overriding with a custom `className`. It supports the following states and render props:

Name

CSS Selector

Description

`percentage`

`—`

The value as a percentage between the minimum and maximum.

`valueText`

`[aria-valuetext]`

A formatted version of the value.

`isIndeterminate`

`:not([aria-valuenow])`

Whether the progress bar is indeterminate.

A `Label` can be targeted with the `.react-aria-Label` CSS selector, or by overriding with a custom `className`.

* * *

All React Aria Components export a corresponding context that can be used to send props to them from a parent element. This enables you to build your own compositional APIs similar to those found in React Aria Components itself. You can send any prop or ref via context that you could pass to the corresponding component. The local props and ref on the component are merged with the ones passed via context, with the local props taking precedence (following the rules documented in [mergeProps](https://react-spectrum.adobe.com/react-aria/mergeProps.html)).

Component

Context

Props

Ref

`ProgressBar`

`ProgressBarContext`

`[ProgressBarProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/ProgressBar.tsx:ProgressBarProps)`

`[HTMLDivElement](https://developer.mozilla.org/docs/Web/API/HTMLDivElement)`

This example sets the `formatOptions` via context, which applies to all nested progress bars.

```
import {ProgressBarContext} from 'react-aria-components';

<ProgressBarContext.Provider value={{ formatOptions: { style: 'decimal' } }}>
  <MyProgressBar label="Converting…" value={28.5} />
  <MyProgressBar label="Uploading…" value={68.75} />
</ProgressBarContext.Provider>
```

```
import {ProgressBarContext} from 'react-aria-components';

<ProgressBarContext.Provider
  value={{ formatOptions: { style: 'decimal' } }}
>
  <MyProgressBar label="Converting…" value={28.5} />
  <MyProgressBar label="Uploading…" value={68.75} />
</ProgressBarContext.Provider>
```

```
import {ProgressBarContext} from 'react-aria-components';

<ProgressBarContext.Provider
  value={{
    formatOptions: {
      style: 'decimal'
    }
  }}
>
  <MyProgressBar
    label="Converting…"
    value={28.5}
  />
  <MyProgressBar
    label="Uploading…"
    value={68.75}
  />
</ProgressBarContext.Provider>
```

If you need to customize things further, such as customizing the DOM structure, you can drop down to the lower level Hook-based API. See [useProgressBar](https://react-spectrum.adobe.com/react-aria/useProgressBar.html) for more details.