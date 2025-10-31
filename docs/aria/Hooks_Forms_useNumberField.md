# useNumberField

**Source**: [https://react-spectrum.adobe.com/react-aria/useNumberField.html](https://react-spectrum.adobe.com/react-aria/useNumberField.html)

> Documentation for useNumberField in the React Aria package.

---

Provides the behavior and accessibility implementation for a number field component. Number fields allow users to enter a number, and increment or decrement the value using stepper buttons.

* * *

`useNumberField( props: [AriaNumberFieldProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/numberfield/src/index.d.ts:AriaNumberFieldProps), state: [NumberFieldState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/numberfield/src/useNumberFieldState.ts:NumberFieldState), inputRef: RefObject<[HTMLInputElement](https://developer.mozilla.org/docs/Web/API/HTMLInputElement) |  | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)> ): [NumberFieldAria](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/numberfield/src/useNumberField.ts:NumberFieldAria)`

* * *

Number fields can be built with `<input type="number">`, but the behavior is very inconsistent across browsers and platforms, it supports limited localized formatting options, and it is challenging to style the stepper buttons. `useNumberField` helps achieve accessible number fields that support internationalized formatting options and can be styled as needed.

-   Support for internationalized number formatting and parsing including decimals, percentages, currency values, and units
-   Support for the Latin, Arabic, and Han positional decimal numbering systems in [over 30 locales](https://react-spectrum.adobe.com/react-aria/internationalization.html#supported-locales)
-   Automatically detects the numbering system used and supports parsing numbers not in the default numbering system for the locale
-   Support for multiple currency formats including symbol, code, and name in standard or accounting notation
-   Validates keyboard entry as the user types so that only valid numeric input according to the locale and numbering system is accepted
-   Handles composed input from input method editors, e.g. Pinyin
-   Automatically selects an appropriate software keyboard for mobile according to the current platform and allowed values
-   Supports rounding to a configurable number of fraction digits
-   Support for clamping the value between a configurable minimum and maximum, and snapping to a step value
-   Support for stepper buttons and arrow keys to increment and decrement the value according to the step value
-   Supports pressing and holding the stepper buttons to continuously increment or decrement
-   Handles floating point rounding errors when incrementing, decrementing, and snapping to step
-   Supports using the scroll wheel to increment and decrement the value
-   Exposed to assistive technology as a text field with a custom localized role description using ARIA
-   Follows the [spinbutton](https://www.w3.org/WAI/ARIA/apg/patterns/spinbutton/) ARIA pattern
-   Works around bugs in VoiceOver with the spinbutton role
-   Uses an ARIA live region to ensure that value changes are announced
-   Support for native HTML constraint validation with customizable UI, custom validation functions, realtime validation, and server-side validation errors

Read our [blog post](https://react-spectrum.adobe.com/blog/how-we-internationalized-our-numberfield.html) for more details about the interactions and internationalization support implemented by `useNumberField`.

* * *

Shows a number field with labels pointing to its parts, including the label, group, input, increment button, and decrement button elements.1280LabelInputLabelIncrement buttonDecrement buttonGroup

Number fields consist of an input element that shows the current value and allows the user to type a new value, optional stepper buttons to increment and decrement the value, a group containing the input and stepper buttons, and a label.

`useNumberField` also supports optional description and error message elements, which can be used to provide more context about the field, and any validation messages. These are linked with the input via the `aria-describedby` attribute.

`useNumberField` returns props for each of these, which you should spread onto the appropriate elements:

Name

Type

Description

`labelProps`

`[LabelHTMLAttributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label#attributes)<[HTMLLabelElement](https://developer.mozilla.org/docs/Web/API/HTMLLabelElement)>`

Props for the label element.

`groupProps`

`[GroupDOMAttributes](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dom.d.ts:GroupDOMAttributes)`

Props for the group wrapper around the input and stepper buttons.

`inputProps`

`[InputHTMLAttributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes)<[HTMLInputElement](https://developer.mozilla.org/docs/Web/API/HTMLInputElement)>`

Props for the input element.

`incrementButtonProps`

`[AriaButtonProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/button/src/index.d.ts:AriaButtonProps)`

Props for the increment button, to be passed to [useButton](https://react-spectrum.adobe.com/react-aria/useButton.html).

`decrementButtonProps`

`[AriaButtonProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/button/src/index.d.ts:AriaButtonProps)`

Props for the decrement button, to be passed to [useButton](https://react-spectrum.adobe.com/react-aria/useButton.html).

`descriptionProps`

`[DOMAttributes](https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes)`

Props for the number field's description element, if any.

`errorMessageProps`

`[DOMAttributes](https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes)`

Props for the number field's error message element, if any.

`isInvalid`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether the input value is invalid.

`validationErrors`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)[]`

The current error messages for the input if it is invalid, otherwise an empty array.

`validationDetails`

`ValidityState`

The native validation details for the input.

State is managed by the `[useNumberFieldState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/numberfield/src/useNumberFieldState.ts:useNumberFieldState)` hook from `@react-stately/numberfield`. The state object should be passed as an option to `useNumberField`

If there is no visual label, an `aria-label` or `aria-labelledby` prop must be passed instead to identify the element to screen readers.

* * *

The following example shows how to build a simple number field. It includes an input element where the user can type a number, along with increment and decrement buttons on either side. The `Button` component used in this example is independent and can be used separately from `NumberField`.

**Note:** Due to [a bug](https://bugs.webkit.org/show_bug.cgi?id=219188) in Safari on macOS, pointer events may not be dispatched after a `<button>` element is disabled while the mouse is pressed. This may require the user to click twice when incrementing or decrementing the value from the minimum or maximum value. While out of scope for this example, you may wish to use a `<div>` element instead of a `<button>` to avoid this issue. See the [useButton docs](https://react-spectrum.adobe.com/react-aria/useButton.html#custom-element-type) for an example of a button with a custom element type.

In addition, see [useTextField](https://react-spectrum.adobe.com/react-aria/useTextField.html) for an example of the description and error message elements.

```
import {useNumberFieldState} from 'react-stately';
import {useLocale, useNumberField} from 'react-aria';

// Reuse the Button from your component library. See below for details.
import {Button} from 'your-component-library';

function NumberField(props) {
  let { locale } = useLocale();
  let state = useNumberFieldState({ ...props, locale });
  let inputRef = React.useRef(null);
  let {
    labelProps,
    groupProps,
    inputProps,
    incrementButtonProps,
    decrementButtonProps
  } = useNumberField(props, state, inputRef);

  return (
    <div>
      <label {...labelProps}>{props.label}</label>
      <div {...groupProps}>
        <Button {...decrementButtonProps}>-</Button>
        <input {...inputProps} ref={inputRef} />
        <Button {...incrementButtonProps}>+</Button>
      </div>
    </div>
  );
}

<NumberField
  label="Price"
  defaultValue={6}
  formatOptions={{
    style: 'currency',
    currency: 'USD'
  }}
/>
```

```
import {useNumberFieldState} from 'react-stately';
import {useLocale, useNumberField} from 'react-aria';

// Reuse the Button from your component library. See below for details.
import {Button} from 'your-component-library';

function NumberField(props) {
  let { locale } = useLocale();
  let state = useNumberFieldState({ ...props, locale });
  let inputRef = React.useRef(null);
  let {
    labelProps,
    groupProps,
    inputProps,
    incrementButtonProps,
    decrementButtonProps
  } = useNumberField(props, state, inputRef);

  return (
    <div>
      <label {...labelProps}>{props.label}</label>
      <div {...groupProps}>
        <Button {...decrementButtonProps}>-</Button>
        <input {...inputProps} ref={inputRef} />
        <Button {...incrementButtonProps}>+</Button>
      </div>
    </div>
  );
}

<NumberField
  label="Price"
  defaultValue={6}
  formatOptions={{
    style: 'currency',
    currency: 'USD'
  }}
/>
```

```
import {useNumberFieldState} from 'react-stately';
import {
  useLocale,
  useNumberField
} from 'react-aria';

// Reuse the Button from your component library. See below for details.
import {Button} from 'your-component-library';

function NumberField(
  props
) {
  let { locale } =
    useLocale();
  let state =
    useNumberFieldState({
      ...props,
      locale
    });
  let inputRef = React
    .useRef(null);
  let {
    labelProps,
    groupProps,
    inputProps,
    incrementButtonProps,
    decrementButtonProps
  } = useNumberField(
    props,
    state,
    inputRef
  );

  return (
    <div>
      <label
        {...labelProps}
      >
        {props.label}
      </label>
      <div
        {...groupProps}
      >
        <Button
          {...decrementButtonProps}
        >
          -
        </Button>
        <input
          {...inputProps}
          ref={inputRef}
        />
        <Button
          {...incrementButtonProps}
        >
          +
        </Button>
      </div>
    </div>
  );
}

<NumberField
  label="Price"
  defaultValue={6}
  formatOptions={{
    style: 'currency',
    currency: 'USD'
  }}
/>
```

The `Button` component is used in the above example to increment and decrement the value. It is built using the [useButton](https://react-spectrum.adobe.com/react-aria/useButton.html) hook, and can be shared with many other components.

Show code

```
import {useButton} from 'react-aria';

function Button(props) {
  let ref = React.useRef(null);
  let { buttonProps } = useButton(props, ref);
  return <button {...buttonProps} ref={ref}>{props.children}</button>;
}
```

```
import {useButton} from 'react-aria';

function Button(props) {
  let ref = React.useRef(null);
  let { buttonProps } = useButton(props, ref);
  return (
    <button {...buttonProps} ref={ref}>
      {props.children}
    </button>
  );
}
```

```
import {useButton} from 'react-aria';

function Button(props) {
  let ref = React.useRef(
    null
  );
  let { buttonProps } =
    useButton(
      props,
      ref
    );
  return (
    <button
      {...buttonProps}
      ref={ref}
    >
      {props.children}
    </button>
  );
}
```

* * *

The following examples show how to use the `NumberField` component created in the above example.

By default, `NumberField` is uncontrolled. However, when using the `value` prop, it becomes controlled. This allows you to store the current value in your own state, and use it elsewhere.

The `onChange` event is triggered whenever the number value updates. This happens when the user types a value and blurs the input, or when incrementing or decrementing the value. It does not happen as the user types because partial input may not be parseable to a valid number.

```
function Example() {
  let [value, setValue] = React.useState(6);

  return (
    <>
      <NumberField
        label="Controlled value"
        value={value}
        onChange={setValue} />
      <div>Current value prop: {value}</div>
    </>
  );
}
```

```
function Example() {
  let [value, setValue] = React.useState(6);

  return (
    <>
      <NumberField
        label="Controlled value"
        value={value}
        onChange={setValue} />
      <div>Current value prop: {value}</div>
    </>
  );
}
```

```
function Example() {
  let [value, setValue] =
    React.useState(6);

  return (
    <>
      <NumberField
        label="Controlled value"
        value={value}
        onChange={setValue}
      />
      <div>
        Current value
        prop: {value}
      </div>
    </>
  );
}
```

The default formatting style for `NumberField` is decimal, but you can configure various aspects via the `formatOptions` prop. All options supported by [Intl.NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat) are supported, including configuration of minimum and maximum fraction digits, sign display, grouping separators, etc. Currently only standard notation is supported, though scientific, engineering, and compact notation may be supported in the future.

The following example uses the `signDisplay` option to include the plus sign for positive numbers, for example to display an offset from some value. In addition, it always displays a minimum of 1 digit after the decimal point, and allows up to 2 fraction digits. If the user enters more than 2 fraction digits, the result will be rounded.

```
<NumberField
  label="Adjust exposure"
  defaultValue={0}
  formatOptions={{
    signDisplay: 'exceptZero',
    minimumFractionDigits: 1,
    maximumFractionDigits: 2
  }} />
```

```
<NumberField
  label="Adjust exposure"
  defaultValue={0}
  formatOptions={{
    signDisplay: 'exceptZero',
    minimumFractionDigits: 1,
    maximumFractionDigits: 2
  }} />
```

```
<NumberField
  label="Adjust exposure"
  defaultValue={0}
  formatOptions={{
    signDisplay:
      'exceptZero',
    minimumFractionDigits:
      1,
    maximumFractionDigits:
      2
  }}
/>
```

The `style: 'percent'` option can be passed to the `formatOptions` prop to treat the value as a percentage. In this mode, the value is multiplied by 100 before it is displayed, i.e. `0.45` is displayed as `45%`. The reverse is also true: when the user enters a value, the `onChange` event will be triggered with the entered value divided by 100. When the percent option is enabled, the default step automatically changes to `0.01` such that incrementing and decrementing occurs by `1%`. This can be overridden with the `step` prop. [See below](#step-values) for details.

```
<NumberField
  label="Sales tax"
  defaultValue={0.05}
  formatOptions={{
    style: 'percent'
  }} />
```

```
<NumberField
  label="Sales tax"
  defaultValue={0.05}
  formatOptions={{
    style: 'percent'
  }} />
```

```
<NumberField
  label="Sales tax"
  defaultValue={0.05}
  formatOptions={{
    style: 'percent'
  }} />
```

The `style: 'currency'` option can be passed to the `formatOptions` prop to treat the value as a currency value. The `currency` option must also be passed to set the currency code (e.g. `USD`) to use. In addition, the `currencyDisplay` option can be used to choose whether to display the currency symbol, currency code, or currency name. Finally, the `currencySign` option can be set to `accounting` to use accounting notation for negative numbers, which uses parentheses rather than a minus sign in some locales.

If you need to allow the user to change the currency, you should include a separate dropdown next to the number field. The number field itself will not determine the currency from the user input.

```
<NumberField
  label="Transaction amount"
  defaultValue={45}
  formatOptions={{
    style: 'currency',
    currency: 'EUR',
    currencyDisplay: 'code',
    currencySign: 'accounting'
  }} />
```

```
<NumberField
  label="Transaction amount"
  defaultValue={45}
  formatOptions={{
    style: 'currency',
    currency: 'EUR',
    currencyDisplay: 'code',
    currencySign: 'accounting'
  }} />
```

```
<NumberField
  label="Transaction amount"
  defaultValue={45}
  formatOptions={{
    style: 'currency',
    currency: 'EUR',
    currencyDisplay:
      'code',
    currencySign:
      'accounting'
  }}
/>
```

The `style: 'unit'` option can be passed to the `formatOptions` prop to format the value with a unit of measurement. The `unit` option must also be passed to set which unit to use (e.g. `inch`). In addition, the `unitDisplay` option can be used to choose whether to display the unit in long, short, or narrow format.

If you need to allow the user to change the unit, you should include a separate dropdown next to the number field. The number field itself will not determine the unit from the user input.

**Note:** the unit style is not currently supported in Safari. A [polyfill](https://formatjs.io/docs/polyfills/intl-numberformat/) may be necessary.

```
<NumberField
  label="Package width"
  defaultValue={4}
  formatOptions={{
    style: 'unit',
    unit: 'inch',
    unitDisplay: 'long'
  }} />
```

```
<NumberField
  label="Package width"
  defaultValue={4}
  formatOptions={{
    style: 'unit',
    unit: 'inch',
    unitDisplay: 'long'
  }} />
```

```
<NumberField
  label="Package width"
  defaultValue={4}
  formatOptions={{
    style: 'unit',
    unit: 'inch',
    unitDisplay: 'long'
  }} />
```

### Minimum and maximum values[#](#minimum-and-maximum-values)

The `minValue` and `maxValue` props can be used to limit the entered value to a specific range. The value will be clamped when the user blurs the input field. In addition, the increment and decrement buttons will be disabled when the value is within one `step` value from the bounds ([see below](#step-values) for info about steps). Ranges can be open ended by only providing either `minValue` or `maxValue` rather than both.

If a valid range is known ahead of time, it is a good idea to provide it to `NumberField` so it can optimize the experience. For example, when the minimum value is greater than or equal to zero, it is possible to use a numeric keyboard on iOS rather than a full text keyboard (necessary to enter a minus sign).

```
<NumberField
  label="Enter your age"
  minValue={0} />
```

```
<NumberField
  label="Enter your age"
  minValue={0} />
```

```
<NumberField
  label="Enter your age"
  minValue={0} />
```

The `step` prop can be used to snap the value to certain increments. If there is a `minValue` defined, the steps are calculated starting from the minimum. For example, if `minValue={2}`, and `step={3}`, the valid step values would be 2, 5, 8, 11, etc. If no `minValue` is defined, the steps are calculated starting from zero and extending in both directions. In other words, such that the values are evenly divisible by the step. If no `step` is defined, any decimal value may be typed, but incrementing and decrementing snaps the value to an integer.

If the user types a value that is between two steps and blurs the input, the value will be snapped to the nearest step. When incrementing or decrementing, the value is snapped to the nearest step that is higher or lower, respectively. When incrementing or decrementing from an empty field, the value starts at the `minValue` or `maxValue`, respectively, if defined. Otherwise, the value starts from `0`.

```
<NumberField
  label="Step"
  step={10} />
<NumberField
  label="Step + minValue"
  minValue={2}
  step={3} />
<NumberField
  label="Step + minValue + maxValue"
  minValue={2}
  maxValue={21}
  step={3} />
```

```
<NumberField
  label="Step"
  step={10} />
<NumberField
  label="Step + minValue"
  minValue={2}
  step={3} />
<NumberField
  label="Step + minValue + maxValue"
  minValue={2}
  maxValue={21}
  step={3} />
```

```
<NumberField
  label="Step"
  step={10}
/>
<NumberField
  label="Step + minValue"
  minValue={2}
  step={3}
/>
<NumberField
  label="Step + minValue + maxValue"
  minValue={2}
  maxValue={21}
  step={3}
/>
```

### Disabled and read only[#](#disabled-and-read-only)

The `isDisabled` and `isReadOnly` props can be used prevent the user from editing the value of the number field. The difference is that `isReadOnly` still allows the input to be focused, while `isDisabled` prevents all user interaction.

```
<NumberField label="Disabled" isDisabled value={25} />
<NumberField label="Read only" isReadOnly value={32} />
```

```
<NumberField label="Disabled" isDisabled value={25} />
<NumberField label="Read only" isReadOnly value={32} />
```

```
<NumberField
  label="Disabled"
  isDisabled
  value={25}
/>
<NumberField
  label="Read only"
  isReadOnly
  value={32}
/>
```

* * *

`useNumberField` handles many aspects of internationalization automatically, including formatting and parsing numbers according to the current locale and numbering system. In addition, the increment and decrement buttons have localized ARIA labels. You are responsible for localizing the label text passed into the number field.

In right-to-left languages, the number field should be mirrored. The order of the input and buttons should be flipped, and the input text should be right aligned instead of left aligned. Ensure that your CSS accounts for this.