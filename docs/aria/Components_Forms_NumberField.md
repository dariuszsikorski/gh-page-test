# NumberField

**Source**: [https://react-spectrum.adobe.com/react-aria/NumberField.html](https://react-spectrum.adobe.com/react-aria/NumberField.html)

> Documentation for NumberField in the React Aria package.

---

A number field allows a user to enter a number, and increment or decrement the value using stepper buttons.

* * *

```
import {NumberField, Label, Group, Input, Button} from 'react-aria-components';
import {Plus, Minus} from 'lucide-react';

<NumberField defaultValue={1024} minValue={0}>
  <Label>Width</Label>
  <Group>
    <Button slot="decrement"><Minus size={18} /></Button>
    <Input />
    <Button slot="increment"><Plus size={18} /></Button>
  </Group>
</NumberField>
```

```
import {
  Button,
  Group,
  Input,
  Label,
  NumberField
} from 'react-aria-components';
import {Minus, Plus} from 'lucide-react';

<NumberField defaultValue={1024} minValue={0}>
  <Label>Width</Label>
  <Group>
    <Button slot="decrement">
      <Minus size={18} />
    </Button>
    <Input />
    <Button slot="increment">
      <Plus size={18} />
    </Button>
  </Group>
</NumberField>
```

```
import {
  Button,
  Group,
  Input,
  Label,
  NumberField
} from 'react-aria-components';
import {
  Minus,
  Plus
} from 'lucide-react';

<NumberField
  defaultValue={1024}
  minValue={0}
>
  <Label>Width</Label>
  <Group>
    <Button slot="decrement">
      <Minus
        size={18}
      />
    </Button>
    <Input />
    <Button slot="increment">
      <Plus
        size={18}
      />
    </Button>
  </Group>
</NumberField>
```

Show CSS

```
@import "@react-aria/example-theme";

.react-aria-NumberField {
  margin-bottom: 8px;
  color: var(--text-color);

  .react-aria-Group {
    display: flex;
    width: fit-content;
    border-radius: 4px;

    &[data-focus-within] {
      outline: 1px solid var(--focus-ring-color);
      .react-aria-Input,
      .react-aria-Button {
        border-color: var(--focus-ring-color);
      }
    }
  }

  .react-aria-Button {
    font-size: 1.4rem;
    width: 2.3rem;
    padding: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    &[slot=decrement] {
      border-start-end-radius: 0;
      border-end-end-radius: 0;
    }

    &[slot=increment] {
      border-start-start-radius: 0;
      border-end-start-radius: 0;
    }
  }

  .react-aria-Input {
    background: var(--field-background);
    border: 1px solid var(--border-color);
    border-radius: 0;
    color: var(--field-text-color);
    margin: 0 -1px;
    z-index: 1;
    font-size: 1rem;
    padding: 0.429rem 0.571rem;
    outline: none;
    width: 6rem;
    flex: 1;
  }
}
```

```
@import "@react-aria/example-theme";

.react-aria-NumberField {
  margin-bottom: 8px;
  color: var(--text-color);

  .react-aria-Group {
    display: flex;
    width: fit-content;
    border-radius: 4px;

    &[data-focus-within] {
      outline: 1px solid var(--focus-ring-color);
      .react-aria-Input,
      .react-aria-Button {
        border-color: var(--focus-ring-color);
      }
    }
  }

  .react-aria-Button {
    font-size: 1.4rem;
    width: 2.3rem;
    padding: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    &[slot=decrement] {
      border-start-end-radius: 0;
      border-end-end-radius: 0;
    }

    &[slot=increment] {
      border-start-start-radius: 0;
      border-end-start-radius: 0;
    }
  }

  .react-aria-Input {
    background: var(--field-background);
    border: 1px solid var(--border-color);
    border-radius: 0;
    color: var(--field-text-color);
    margin: 0 -1px;
    z-index: 1;
    font-size: 1rem;
    padding: 0.429rem 0.571rem;
    outline: none;
    width: 6rem;
    flex: 1;
  }
}
```

```
@import "@react-aria/example-theme";

.react-aria-NumberField {
  margin-bottom: 8px;
  color: var(--text-color);

  .react-aria-Group {
    display: flex;
    width: fit-content;
    border-radius: 4px;

    &[data-focus-within] {
      outline: 1px solid var(--focus-ring-color);
      .react-aria-Input,
      .react-aria-Button {
        border-color: var(--focus-ring-color);
      }
    }
  }

  .react-aria-Button {
    font-size: 1.4rem;
    width: 2.3rem;
    padding: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    &[slot=decrement] {
      border-start-end-radius: 0;
      border-end-end-radius: 0;
    }

    &[slot=increment] {
      border-start-start-radius: 0;
      border-end-start-radius: 0;
    }
  }

  .react-aria-Input {
    background: var(--field-background);
    border: 1px solid var(--border-color);
    border-radius: 0;
    color: var(--field-text-color);
    margin: 0 -1px;
    z-index: 1;
    font-size: 1rem;
    padding: 0.429rem 0.571rem;
    outline: none;
    width: 6rem;
    flex: 1;
  }
}
```

* * *

Number fields can be built with `<input type="number">`, but the behavior is very inconsistent across browsers and platforms, it supports limited localized formatting options, and it is challenging to style the stepper buttons. `NumberField` helps achieve accessible number fields that support internationalized formatting options and can be styled as needed.

-   **Customizable formatting** – Support for internationalized number formatting and parsing including decimals, percentages, currency values, and units. Multiple currency formats are supported, including symbol, code, and name in standard or accounting notation.
-   **International** – Support for the Latin, Arabic, Devanagari, Bengali, and Han positional decimal numbering systems in [over 30 locales](https://react-spectrum.adobe.com/react-aria/internationalization.html#supported-locales). The numbering system is automatically detected from user input, and input method editors such as Pinyin are supported.
-   **Validation** – Keyboard input is validated as the user types so that only numeric input is accepted, according to the locale and numbering system. Values are automatically rounded and clamped according to configurable decimal, minimum, maximum, and step values. Custom client and server-side validation is also supported.
-   **Mobile friendly** – An appropriate software keyboard is automatically selected based on the allowed values for ease of use.
-   **Accessible** – Follows the [spinbutton](https://www.w3.org/WAI/ARIA/apg/patterns/spinbutton/) ARIA pattern, with support for arrow keys, scroll wheel, and stepper buttons to increment and decrement the value. Extensively tested across many devices and [assistive technologies](https://react-spectrum.adobe.com/react-aria/accessibility.html#testing) to ensure announcements and behaviors are consistent.

Read our [blog post](https://react-spectrum.adobe.com/blog/how-we-internationalized-our-numberfield.html) for more details about the interactions and internationalization support implemented by `NumberField`.

* * *

Shows a number field with labels pointing to its parts, including the label, group, input, increment button, and decrement button elements.1280LabelInputLabelIncrement buttonDecrement buttonGroup

Number fields consist of an input element that shows the current value and allows the user to type a new value, optional stepper buttons to increment and decrement the value, a group containing the input and stepper buttons, and a label.

`NumberField` also supports optional description and error message elements, which can be used to provide more context about the field, and any validation messages. These are linked with the input via the `aria-describedby` attribute.

```
import {Button, FieldError, Group, Input, Label, NumberField, Text} from 'react-aria-components';

<NumberField>
  <Label />
  <Group>
    <Input />
    <Button slot="increment" />
    <Button slot="decrement" />
  </Group>
  <Text slot="description" />
  <FieldError />
</NumberField>
```

```
import {
  Button,
  FieldError,
  Group,
  Input,
  Label,
  NumberField,
  Text
} from 'react-aria-components';

<NumberField>
  <Label />
  <Group>
    <Input />
    <Button slot="increment" />
    <Button slot="decrement" />
  </Group>
  <Text slot="description" />
  <FieldError />
</NumberField>
```

```
import {
  Button,
  FieldError,
  Group,
  Input,
  Label,
  NumberField,
  Text
} from 'react-aria-components';

<NumberField>
  <Label />
  <Group>
    <Input />
    <Button slot="increment" />
    <Button slot="decrement" />
  </Group>
  <Text slot="description" />
  <FieldError />
</NumberField>
```

If there is no visual label, an `aria-label` or `aria-labelledby` prop must be passed instead to identify the element to screen readers.

`NumberField` makes use of the following concepts:

[

Forms

Validating and submitting form data, and integrating with form libraries.

](https://react-spectrum.adobe.com/react-aria/forms.html)

A `NumberField` uses the following components, which may also be used standalone or reused in other components.

[

Label

A label provides context for an input element.

](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label)[

Input

An input allows a user to enter a plain text value with a keyboard.

](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)[

Button

A button allows a user to perform an action.

](https://react-spectrum.adobe.com/react-aria/Button.html)

* * *

To help kick-start your project, we offer starter kits that include example implementations of all React Aria components with various styling solutions. All components are fully styled, including support for dark mode, high contrast mode, and all UI states. Each starter comes with a pre-configured [Storybook](https://storybook.js.org/) that you can experiment with, or use as a starting point for your own component library.

* * *

If you will use a NumberField in multiple places in your app, you can wrap all of the pieces into a reusable component. This way, the DOM structure, styling code, and other logic are defined in a single place and reused everywhere to ensure consistency.

This example wraps `NumberField` and all of its children together into a single component which accepts a `label` prop, which is passed to the right place. It also shows how to use the `description` slot to render [help text](#description), and `FieldError` component to render [validation errors](#validation).

```
import type {NumberFieldProps, ValidationResult} from 'react-aria-components';
import {FieldError, Text} from 'react-aria-components';

interface MyNumberFieldProps extends NumberFieldProps {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
}

function MyNumberField(
  { label, description, errorMessage, ...props }: MyNumberFieldProps
) {
  return (
    <NumberField {...props}>
      <Label>{label}</Label>
      <Group>
        <Button slot="decrement">
          <Minus size={18} />
        </Button>
        <Input />
        <Button slot="increment">
          <Plus size={18} />
        </Button>
      </Group>
      {description && <Text slot="description">{description}</Text>}
      <FieldError>{errorMessage}</FieldError>
    </NumberField>
  );
}

<MyNumberField label="Cookies" />
```

```
import type {
  NumberFieldProps,
  ValidationResult
} from 'react-aria-components';
import {FieldError, Text} from 'react-aria-components';

interface MyNumberFieldProps extends NumberFieldProps {
  label?: string;
  description?: string;
  errorMessage?:
    | string
    | ((validation: ValidationResult) => string);
}

function MyNumberField(
  { label, description, errorMessage, ...props }:
    MyNumberFieldProps
) {
  return (
    <NumberField {...props}>
      <Label>{label}</Label>
      <Group>
        <Button slot="decrement">
          <Minus size={18} />
        </Button>
        <Input />
        <Button slot="increment">
          <Plus size={18} />
        </Button>
      </Group>
      {description && (
        <Text slot="description">{description}</Text>
      )}
      <FieldError>{errorMessage}</FieldError>
    </NumberField>
  );
}

<MyNumberField label="Cookies" />
```

```
import type {
  NumberFieldProps,
  ValidationResult
} from 'react-aria-components';
import {
  FieldError,
  Text
} from 'react-aria-components';

interface MyNumberFieldProps
  extends
    NumberFieldProps {
  label?: string;
  description?: string;
  errorMessage?:
    | string
    | ((
      validation:
        ValidationResult
    ) => string);
}

function MyNumberField({
  label,
  description,
  errorMessage,
  ...props
}: MyNumberFieldProps) {
  return (
    <NumberField
      {...props}
    >
      <Label>
        {label}
      </Label>
      <Group>
        <Button slot="decrement">
          <Minus
            size={18}
          />
        </Button>
        <Input />
        <Button slot="increment">
          <Plus
            size={18}
          />
        </Button>
      </Group>
      {description && (
        <Text slot="description">
          {description}
        </Text>
      )}
      <FieldError>
        {errorMessage}
      </FieldError>
    </NumberField>
  );
}

<MyNumberField label="Cookies" />
```

* * *

By default, `NumberField` is uncontrolled. However, when using the `value` prop, it becomes controlled. This allows you to store the current value in your own state, and use it elsewhere.

The `onChange` event is triggered whenever the number value updates. This happens when the user types a value and blurs the input, or when incrementing or decrementing the value. It does not happen as the user types because partial input may not be parseable to a valid number.

```
function Example() {
  let [value, setValue] = React.useState(6);

  return (
    <>
      <MyNumberField
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
      <MyNumberField
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
      <MyNumberField
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

NumberField supports the `name` prop for integration with HTML forms. The value will be submitted to the server as a raw number (e.g. `45`), not as a locale-dependent formatted string (e.g. `"$45.00"`).

```
<MyNumberField
  label="Transaction amount"
  name="amount"  defaultValue={45}
  formatOptions={{
    style: 'currency',
    currency: 'USD'
  }} />
```

```
<MyNumberField
  label="Transaction amount"
  name="amount"  defaultValue={45}
  formatOptions={{
    style: 'currency',
    currency: 'USD'
  }} />
```

```
<MyNumberField
  label="Transaction amount"
  name="amount"  defaultValue={45}
  formatOptions={{
    style: 'currency',
    currency: 'USD'
  }}
/>
```

* * *

The default formatting style for `NumberField` is decimal, but you can configure various aspects via the `formatOptions` prop. All options supported by [Intl.NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat) are supported, including configuration of minimum and maximum fraction digits, sign display, grouping separators, etc. Currently only standard notation is supported, though scientific, engineering, and compact notation may be supported in the future.

The following example uses the `signDisplay` option to include the plus sign for positive numbers, for example to display an offset from some value. In addition, it always displays a minimum of 1 digit after the decimal point, and allows up to 2 fraction digits. If the user enters more than 2 fraction digits, the result will be rounded.

```
<MyNumberField
  label="Adjust exposure"
  defaultValue={0}
  formatOptions={{
    signDisplay: 'exceptZero',
    minimumFractionDigits: 1,
    maximumFractionDigits: 2
  }} />
```

```
<MyNumberField
  label="Adjust exposure"
  defaultValue={0}
  formatOptions={{
    signDisplay: 'exceptZero',
    minimumFractionDigits: 1,
    maximumFractionDigits: 2
  }} />
```

```
<MyNumberField
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
<MyNumberField
  label="Sales tax"
  defaultValue={0.05}
  formatOptions={{
    style: 'percent'
  }} />
```

```
<MyNumberField
  label="Sales tax"
  defaultValue={0.05}
  formatOptions={{
    style: 'percent'
  }} />
```

```
<MyNumberField
  label="Sales tax"
  defaultValue={0.05}
  formatOptions={{
    style: 'percent'
  }} />
```

The `style: 'currency'` option can be passed to the `formatOptions` prop to treat the value as a currency value. The `currency` option must also be passed to set the currency code (e.g. `USD`) to use. In addition, the `currencyDisplay` option can be used to choose whether to display the currency symbol, currency code, or currency name. Finally, the `currencySign` option can be set to `accounting` to use accounting notation for negative numbers, which uses parentheses rather than a minus sign in some locales.

If you need to allow the user to change the currency, you should include a separate dropdown next to the number field. The number field itself will not determine the currency from the user input.

```
<MyNumberField
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
<MyNumberField
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
<MyNumberField
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
<MyNumberField
  label="Package width"
  defaultValue={4}
  formatOptions={{
    style: 'unit',
    unit: 'inch',
    unitDisplay: 'long'
  }} />
```

```
<MyNumberField
  label="Package width"
  defaultValue={4}
  formatOptions={{
    style: 'unit',
    unit: 'inch',
    unitDisplay: 'long'
  }} />
```

```
<MyNumberField
  label="Package width"
  defaultValue={4}
  formatOptions={{
    style: 'unit',
    unit: 'inch',
    unitDisplay: 'long'
  }} />
```

* * *

### Minimum and maximum values[#](#minimum-and-maximum-values)

The `minValue` and `maxValue` props can be used to limit the entered value to a specific range. The value will be clamped when the user blurs the input field. In addition, the increment and decrement buttons will be disabled when the value is within one `step` value from the bounds ([see below](#step-values) for info about steps). Ranges can be open ended by only providing either `minValue` or `maxValue` rather than both.

If a valid range is known ahead of time, it is a good idea to provide it to `NumberField` so it can optimize the experience. For example, when the minimum value is greater than or equal to zero, it is possible to use a numeric keyboard on iOS rather than a full text keyboard (necessary to enter a minus sign).

```
<MyNumberField
  label="Enter your age"
  minValue={0} />
```

```
<MyNumberField
  label="Enter your age"
  minValue={0} />
```

```
<MyNumberField
  label="Enter your age"
  minValue={0} />
```

The `step` prop can be used to snap the value to certain increments. If there is a `minValue` defined, the steps are calculated starting from the minimum. For example, if `minValue={2}`, and `step={3}`, the valid step values would be 2, 5, 8, 11, etc. If no `minValue` is defined, the steps are calculated starting from zero and extending in both directions. In other words, such that the values are evenly divisible by the step. If no `step` is defined, any decimal value may be typed, but incrementing and decrementing snaps the value to an integer.

If the user types a value that is between two steps and blurs the input, the value will be snapped to the nearest step. When incrementing or decrementing, the value is snapped to the nearest step that is higher or lower, respectively. When incrementing or decrementing from an empty field, the value starts at the `minValue` or `maxValue`, respectively, if defined. Otherwise, the value starts from `0`.

```
<MyNumberField
  label="Step"
  step={10} />
<MyNumberField
  label="Step + minValue"
  minValue={2}
  step={3} />
<MyNumberField
  label="Step + minValue + maxValue"
  minValue={2}
  maxValue={21}
  step={3} />
```

```
<MyNumberField
  label="Step"
  step={10} />
<MyNumberField
  label="Step + minValue"
  minValue={2}
  step={3} />
<MyNumberField
  label="Step + minValue + maxValue"
  minValue={2}
  maxValue={21}
  step={3} />
```

```
<MyNumberField
  label="Step"
  step={10}
/>
<MyNumberField
  label="Step + minValue"
  minValue={2}
  step={3}
/>
<MyNumberField
  label="Step + minValue + maxValue"
  minValue={2}
  maxValue={21}
  step={3}
/>
```

NumberField supports the `isRequired` prop to ensure the user enters a value, as well as custom validation functions, realtime validation, and server-side validation. It can also be integrated with other form libraries. See the [Forms](https://react-spectrum.adobe.com/react-aria/forms.html) guide to learn more.

To display validation errors, add a `<FieldError>` element as a child of the NumberField. This allows you to render error messages from all of the above sources with consistent custom styles.

```
import {Form, FieldError} from 'react-aria-components';

<Form>
  <NumberField name="width" isRequired>    <Label>Width</Label>
    <Group>
       <Button slot="decrement"><Minus size={18} /></Button>
       <Input />
       <Button slot="increment"><Plus size={18} /></Button>
     </Group>
    <FieldError />  </NumberField>
  <Button type="submit">Submit</Button>
</Form>
```

```
import {Form, FieldError} from 'react-aria-components';

<Form>
  <NumberField name="width" isRequired>    <Label>Width</Label>
    <Group>
       <Button slot="decrement"><Minus size={18} /></Button>
       <Input />
       <Button slot="increment"><Plus size={18} /></Button>
     </Group>
    <FieldError />  </NumberField>
  <Button type="submit">Submit</Button>
</Form>
```

```
import {
  FieldError,
  Form
} from 'react-aria-components';

<Form>
  <NumberField
    name="width"
    isRequired
  >    <Label>
      Width
    </Label>
    <Group>
      <Button slot="decrement">
        <Minus
          size={18}
        />
      </Button>
      <Input />
      <Button slot="increment">
        <Plus
          size={18}
        />
      </Button>
    </Group>
    <FieldError />  </NumberField>
  <Button type="submit">
    Submit
  </Button>
</Form>
```

Show CSS

```
.react-aria-NumberField {
  &[data-invalid] {
    .react-aria-Input,
    .react-aria-Button {
      border-color: var(--invalid-color);
    }

    &:focus-within {
      .react-aria-Input,
      .react-aria-Button {
        border-color: var(--focus-ring-color);
      }
    }
  }

  .react-aria-FieldError {
    font-size: 12px;
    color: var(--invalid-color);
  }
}
```

```
.react-aria-NumberField {
  &[data-invalid] {
    .react-aria-Input,
    .react-aria-Button {
      border-color: var(--invalid-color);
    }

    &:focus-within {
      .react-aria-Input,
      .react-aria-Button {
        border-color: var(--focus-ring-color);
      }
    }
  }

  .react-aria-FieldError {
    font-size: 12px;
    color: var(--invalid-color);
  }
}
```

```
.react-aria-NumberField {
  &[data-invalid] {
    .react-aria-Input,
    .react-aria-Button {
      border-color: var(--invalid-color);
    }

    &:focus-within {
      .react-aria-Input,
      .react-aria-Button {
        border-color: var(--focus-ring-color);
      }
    }
  }

  .react-aria-FieldError {
    font-size: 12px;
    color: var(--invalid-color);
  }
}
```

By default, `FieldError` displays default validation messages provided by the browser. See [Customizing error messages](https://react-spectrum.adobe.com/react-aria/forms.html#customizing-error-messages) in the Forms guide to learn how to provide your own custom errors.

The `description` slot can be used to associate additional help text with a number field.

```
<NumberField>
  <Label>Width</Label>
  <Group>
    <Button slot="decrement"><Minus size={18} /></Button>
    <Input />
    <Button slot="increment"><Plus size={18} /></Button>
  </Group>
  <Text slot="description">Enter a width in centimeters.</Text></NumberField>
```

```
<NumberField>
  <Label>Width</Label>
  <Group>
    <Button slot="decrement">
      <Minus size={18} />
    </Button>
    <Input />
    <Button slot="increment">
      <Plus size={18} />
    </Button>
  </Group>
  <Text slot="description">
    Enter a width in centimeters.
  </Text></NumberField>
```

```
<NumberField>
  <Label>Width</Label>
  <Group>
    <Button slot="decrement">
      <Minus
        size={18}
      />
    </Button>
    <Input />
    <Button slot="increment">
      <Plus
        size={18}
      />
    </Button>
  </Group>
  <Text slot="description">
    Enter a width in
    centimeters.
  </Text></NumberField>
```

Show CSS

```
.react-aria-NumberField {
  [slot=description] {
    font-size: 12px;
  }
}
```

```
.react-aria-NumberField {
  [slot=description] {
    font-size: 12px;
  }
}
```

```
.react-aria-NumberField {
  [slot=description] {
    font-size: 12px;
  }
}
```

* * *

The `isDisabled` prop can be used prevent the user from editing the value of the number field.

```
<MyNumberField label="Disabled" isDisabled value={25} />
```

```
<MyNumberField label="Disabled" isDisabled value={25} />
```

```
<MyNumberField
  label="Disabled"
  isDisabled
  value={25}
/>
```

Show CSS

```
.react-aria-NumberField {
  .react-aria-Button {
    &[data-disabled] {
      border-color: var(--border-color-disabled);
      color: var(--text-color-disabled);
    }
  }

  .react-aria-Input {
    &[data-disabled] {
      border-color: var(--border-color-disabled);
      color: var(--text-color-disabled);
    }
  }
}
```

```
.react-aria-NumberField {
  .react-aria-Button {
    &[data-disabled] {
      border-color: var(--border-color-disabled);
      color: var(--text-color-disabled);
    }
  }

  .react-aria-Input {
    &[data-disabled] {
      border-color: var(--border-color-disabled);
      color: var(--text-color-disabled);
    }
  }
}
```

```
.react-aria-NumberField {
  .react-aria-Button {
    &[data-disabled] {
      border-color: var(--border-color-disabled);
      color: var(--text-color-disabled);
    }
  }

  .react-aria-Input {
    &[data-disabled] {
      border-color: var(--border-color-disabled);
      color: var(--text-color-disabled);
    }
  }
}
```

The `isReadOnly` prop makes the NumberField's value immutable. Unlike `isDisabled`, the NumberField remains focusable and the contents can still be copied. See [the MDN docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly) for more information.

```
<MyNumberField label="Read only" isReadOnly value={32} />
```

```
<MyNumberField label="Read only" isReadOnly value={32} />
```

```
<MyNumberField
  label="Read only"
  isReadOnly
  value={32}
/>
```

* * *

Name

Type

Default

Description

`decrementAriaLabel`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

A custom aria-label for the decrement button. If not provided, the localized string "Decrement" is used.

`incrementAriaLabel`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

A custom aria-label for the increment button. If not provided, the localized string "Increment" is used.

`isWheelDisabled`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Enables or disables changing the value with scroll.

`formatOptions`

`[Intl.NumberFormatOptions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat)`

—

Formatting options for the value displayed in the number field. This also affects what characters are allowed to be typed by the user.

`isDisabled`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the input is disabled.

`isReadOnly`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the input can be selected but not changed by the user.

`isRequired`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether user input is required on the input before form submission.

`isInvalid`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the input value is invalid.

`validate`

`( (value: [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) )) => [ValidationError](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/inputs.d.ts:ValidationError) | true | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null) | [undefined](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined)`

—

A function that returns an error message if a given value is invalid. Validation errors are displayed to the user when the form is submitted if `validationBehavior="native"`. For realtime validation, use the `isInvalid` prop instead.

`autoFocus`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the element should receive focus on render.

`value`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)`

—

The current value (controlled).

`defaultValue`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)`

—

The default value (uncontrolled).

`minValue`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)`

—

The smallest value allowed for the input.

`maxValue`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)`

—

The largest value allowed for the input.

`step`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)`

—

The amount that the input value changes with each increment or decrement "tick".

`validationBehavior`

`'native' | 'aria'`

`'native'`

Whether to use native HTML form validation to prevent form submission when the value is missing or invalid, or mark the field as required or invalid via ARIA.

`name`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

The name of the input element, used when submitting an HTML form. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname).

`form`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

The `<form>` element to associate the input with. The value of this attribute must be the id of a `<form>` in the same document. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#form).

`children`

`[ChildrenOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ChildrenOrFunction)<[NumberFieldRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/NumberField.tsx:NumberFieldRenderProps)>`

—

The children of the component. A function may be provided to alter the children based on component state.

`className`

`[ClassNameOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ClassNameOrFunction)<[NumberFieldRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/NumberField.tsx:NumberFieldRenderProps)>`

—

The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.

`style`

`[StyleOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:StyleOrFunction)<[NumberFieldRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/NumberField.tsx:NumberFieldRenderProps)>`

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

`onChange`

`( (value: T )) => void`

Handler that is called when the value changes.

`onCopy`

`ClipboardEventHandler<[HTMLInputElement](https://developer.mozilla.org/docs/Web/API/HTMLInputElement)>`

Handler that is called when the user copies text. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/oncopy).

`onCut`

`ClipboardEventHandler<[HTMLInputElement](https://developer.mozilla.org/docs/Web/API/HTMLInputElement)>`

Handler that is called when the user cuts text. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/oncut).

`onPaste`

`ClipboardEventHandler<[HTMLInputElement](https://developer.mozilla.org/docs/Web/API/HTMLInputElement)>`

Handler that is called when the user pastes text. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/onpaste).

`onCompositionStart`

`CompositionEventHandler<[HTMLInputElement](https://developer.mozilla.org/docs/Web/API/HTMLInputElement)>`

Handler that is called when a text composition system starts a new text composition session. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/compositionstart_event).

`onCompositionEnd`

`CompositionEventHandler<[HTMLInputElement](https://developer.mozilla.org/docs/Web/API/HTMLInputElement)>`

Handler that is called when a text composition system completes or cancels the current text composition session. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/compositionend_event).

`onCompositionUpdate`

`CompositionEventHandler<[HTMLInputElement](https://developer.mozilla.org/docs/Web/API/HTMLInputElement)>`

Handler that is called when a new character is received in the current text composition session. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/compositionupdate_event).

`onSelect`

`ReactEventHandler<[HTMLInputElement](https://developer.mozilla.org/docs/Web/API/HTMLInputElement)>`

Handler that is called when text in the input is selected. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/select_event).

`onBeforeInput`

`FormEventHandler<[HTMLInputElement](https://developer.mozilla.org/docs/Web/API/HTMLInputElement)>`

Handler that is called when the input value is about to be modified. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/beforeinput_event).

`onInput`

`FormEventHandler<[HTMLInputElement](https://developer.mozilla.org/docs/Web/API/HTMLInputElement)>`

Handler that is called when the input value is modified. See [MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event).

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

A `<Group>` accepts all HTML attributes.

An `<Input>` accepts all props supported by the `<input>` HTML element.

A `<Button>` accepts its contents as `children`. Other props such as `onPress` and `isDisabled` will be set by the `NumberField`.

Show props

Name

Type

Default

Description

`isPending`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the button is in a pending state. This disables press and hover events while retaining focusability, and announces the pending state to screen readers.

`isDisabled`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the button is disabled.

`autoFocus`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the element should receive focus on render.

`type`

`'button' | 'submit' | 'reset'`

`'button'`

The behavior of the button when used in an HTML form.

`form`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

The `<form>` element to associate the button with. The value of this attribute must be the id of a `<form>` in the same document. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button#form).

`formAction`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

The URL that processes the information submitted by the button. Overrides the action attribute of the button's form owner.

`formEncType`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

Indicates how to encode the form data that is submitted.

`formMethod`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

Indicates the HTTP method used to submit the form.

`formNoValidate`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Indicates that the form is not to be validated when it is submitted.

`formTarget`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

Overrides the target attribute of the button's form owner.

`name`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

Submitted as a pair with the button's value as part of the form data.

`value`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

The value associated with the button's name when it's submitted with the form data.

`children`

`[ChildrenOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ChildrenOrFunction)<[ButtonRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Button.tsx:ButtonRenderProps)>`

—

The children of the component. A function may be provided to alter the children based on component state.

`className`

`[ClassNameOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ClassNameOrFunction)<[ButtonRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Button.tsx:ButtonRenderProps)>`

—

The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.

`style`

`[StyleOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:StyleOrFunction)<[ButtonRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Button.tsx:ButtonRenderProps)>`

—

The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.

Events

Name

Type

Description

`onPress`

`( (e: [PressEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/events.d.ts:PressEvent) )) => void`

Handler that is called when the press is released over the target.

`onPressStart`

`( (e: [PressEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/events.d.ts:PressEvent) )) => void`

Handler that is called when a press interaction starts.

`onPressEnd`

`( (e: [PressEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/events.d.ts:PressEvent) )) => void`

Handler that is called when a press interaction ends, either over the target or when the pointer leaves the target.

`onPressChange`

`( (isPressed: [boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) )) => void`

Handler that is called when the press state changes.

`onPressUp`

`( (e: [PressEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/events.d.ts:PressEvent) )) => void`

Handler that is called when a press is released over the target, regardless of whether it started on the target or not.

`onClick`

`( (e: [MouseEvent](https://developer.mozilla.org/docs/Web/API/MouseEvent)<[FocusableElement](https://developer.mozilla.org/en-US/docs/Web/API/Element)> )) => void`

**Not recommended – use `onPress` instead.** `onClick` is an alias for `onPress` provided for compatibility with other libraries. `onPress` provides additional event details for non-mouse interactions.

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

`excludeFromTabOrder`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether to exclude the element from the sequential tab order. If true, the element will not be focusable via the keyboard by tabbing. This should be avoided except in rare scenarios where an alternative means of accessing the element or its functionality via the keyboard is available.

`preventFocusOnPress`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether to prevent focus from moving to the button when pressing it.

Caution, this can make the button inaccessible and should only be used when alternative keyboard interaction is provided, such as ComboBox's MenuTrigger or a NumberField's increment/decrement control.

`aria-disabled`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | 'true' | 'false'`

Indicates whether the element is disabled to users of assistive technology.

`aria-expanded`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | 'true' | 'false'`

Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.

`aria-haspopup`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog' | 'true' | 'false'`

Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.

`aria-controls`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

Identifies the element (or elements) whose contents or presence are controlled by the current element.

`aria-pressed`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | 'true' | 'false' | 'mixed'`

Indicates the current "pressed" state of toggle buttons.

`aria-current`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | 'true' | 'false' | 'page' | 'step' | 'location' | 'date' | 'time'`

Indicates whether this element represents the current item within a container or set of related elements.

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

A `<FieldError>` displays validation errors.

Show props

Name

Type

Description

`children`

`[ChildrenOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ChildrenOrFunction)<[FieldErrorRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/FieldError.tsx:FieldErrorRenderProps)>`

The children of the component. A function may be provided to alter the children based on component state.

`className`

`[ClassNameOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ClassNameOrFunction)<[FieldErrorRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/FieldError.tsx:FieldErrorRenderProps)>`

The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.

`style`

`[StyleOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:StyleOrFunction)<[FieldErrorRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/FieldError.tsx:FieldErrorRenderProps)>`

The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.

EventsPositioningAccessibility

Name

Type

Description

`id`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

The element's unique identifier. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id).

* * *

React Aria components can be styled in many ways, including using CSS classes, inline styles, utility classes (e.g. Tailwind), CSS-in-JS (e.g. Styled Components), etc. By default, all components include a builtin `className` attribute which can be targeted using CSS selectors. These follow the `react-aria-ComponentName` naming convention.

```
.react-aria-NumberField {
  /* ... */
}
```

```
.react-aria-NumberField {
  /* ... */
}
```

```
.react-aria-NumberField {
  /* ... */
}
```

A custom `className` can also be specified on any component. This overrides the default `className` provided by React Aria with your own.

```
<NumberField className="my-number-field">
  {/* ... */}
</NumberField>
```

```
<NumberField className="my-number-field">
  {/* ... */}
</NumberField>
```

```
<NumberField className="my-number-field">
  {/* ... */}
</NumberField>
```

In addition, some components support multiple UI states (e.g. focused, placeholder, readonly, etc.). React Aria components expose states using data attributes, which you can target in CSS selectors. For example:

```
.react-aria-Button[data-pressed] {
  /* ... */
}
```

```
.react-aria-Button[data-pressed] {
  /* ... */
}
```

```
.react-aria-Button[data-pressed] {
  /* ... */
}
```

The `className` and `style` props also accept functions which receive states for styling. This lets you dynamically determine the classes or styles to apply, which is useful when using utility CSS libraries like [Tailwind](https://tailwindcss.com/).

```
<Button
  className={({ isPressed }) => isPressed ? 'bg-gray-700' : 'bg-gray-600'}
/>
```

```
<Button
  className={({ isPressed }) =>
    isPressed ? 'bg-gray-700' : 'bg-gray-600'}
/>
```

```
<Button
  className={(
    { isPressed }
  ) =>
    isPressed
      ? 'bg-gray-700'
      : 'bg-gray-600'}
/>
```

The states, selectors, and render props for each component used in a `NumberField` are documented below.

A `NumberField` can be targeted with the `.react-aria-NumberField` CSS selector, or by overriding with a custom `className`. It supports the following states:

Name

CSS Selector

Description

`isDisabled`

`[data-disabled]`

Whether the number field is disabled.

`isInvalid`

`[data-invalid]`

Whether the number field is invalid.

`isRequired`

`[data-required]`

Whether the number field is required.

`state`

`—`

State of the number field.

A `Label` can be targeted with the `.react-aria-Label` CSS selector, or by overriding with a custom `className`.

A `Group` can be targeted with the `.react-aria-Group` selector, or by overriding with a custom `className`. It supports the following states:

Name

CSS Selector

Description

`isHovered`

`[data-hovered]`

Whether the group is currently hovered with a mouse.

`isFocusWithin`

`[data-focus-within]`

Whether an element within the group is focused, either via a mouse or keyboard.

`isFocusVisible`

`[data-focus-visible]`

Whether an element within the group is keyboard focused.

`isDisabled`

`[data-disabled]`

Whether the group is disabled.

`isInvalid`

`[data-invalid]`

Whether the group is invalid.

An `Input` can be targeted with the `.react-aria-Input` CSS selector, or by overriding with a custom `className`. It supports the following states:

Name

CSS Selector

Description

`isHovered`

`[data-hovered]`

Whether the input is currently hovered with a mouse.

`isFocused`

`[data-focused]`

Whether the input is focused, either via a mouse or keyboard.

`isFocusVisible`

`[data-focus-visible]`

Whether the input is keyboard focused.

`isDisabled`

`[data-disabled]`

Whether the input is disabled.

`isInvalid`

`[data-invalid]`

Whether the input is invalid.

A [Button](https://react-spectrum.adobe.com/react-aria/Button.html) can be targeted with the `.react-aria-Button` CSS selector, or by overriding with a custom `className`. Within a `NumberField`, there are two slots, which can be targeted with the `[slot=increment]` and `[slot=decrement]` CSS selectors. Buttons support the following states:

Name

CSS Selector

Description

`isHovered`

`[data-hovered]`

Whether the button is currently hovered with a mouse.

`isPressed`

`[data-pressed]`

Whether the button is currently in a pressed state.

`isFocused`

`[data-focused]`

Whether the button is focused, either via a mouse or keyboard.

`isFocusVisible`

`[data-focus-visible]`

Whether the button is keyboard focused.

`isDisabled`

`[data-disabled]`

Whether the button is disabled.

`isPending`

`[data-pending]`

Whether the button is currently in a pending state.

The help text elements within a `NumberField` can be targeted with the `[slot=description]` and `[slot=errorMessage]` CSS selectors, or by adding a custom `className`.

A `FieldError` can be targeted with the `.react-aria-FieldError` CSS selector, or by overriding with a custom `className`. It supports the following render props:

Name

Description

`isInvalid`

Whether the input value is invalid.

`validationErrors`

The current error messages for the input if it is invalid, otherwise an empty array.

`validationDetails`

The native validation details for the input.

* * *

If you need to customize one of the components within a `NumberField`, such as `Label` or `Input`, in many cases you can create a wrapper component. This lets you customize the props passed to the component.

```
function MyInput(props) {
  return <Input {...props} className="my-input" />
}
```

```
function MyInput(props) {
  return <Input {...props} className="my-input" />
}
```

```
function MyInput(props) {
  return (
    <Input
      {...props}
      className="my-input"
    />
  );
}
```

All React Aria Components export a corresponding context that can be used to send props to them from a parent element. This enables you to build your own compositional APIs similar to those found in React Aria Components itself. You can send any prop or ref via context that you could pass to the corresponding component. The local props and ref on the component are merged with the ones passed via context, with the local props taking precedence (following the rules documented in [mergeProps](https://react-spectrum.adobe.com/react-aria/mergeProps.html)).

Component

Context

Props

Ref

`NumberField`

`NumberFieldContext`

`[NumberFieldProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/NumberField.tsx:NumberFieldProps)`

`[HTMLDivElement](https://developer.mozilla.org/docs/Web/API/HTMLDivElement)`

This example shows a `FieldGroup` component that renders a group of number fields with a title. The entire group can be marked as read only via the `isReadOnly` prop, which is passed to all child number fields via the `NumberFieldContext` provider.

```
import {NumberFieldContext} from 'react-aria-components';

interface FieldGroupProps {
  title?: string,
  children?: React.ReactNode,
  isReadOnly?: boolean
}

function FieldGroup({title, children, isReadOnly}: FieldGroupProps) {
  return (
    <fieldset>
      <legend>{title}</legend>
      <NumberFieldContext.Provider value={{isReadOnly}}>        {children}
      </NumberFieldContext.Provider>
    </fieldset>
  );
}

<FieldGroup title="Dimensions" isReadOnly>
  <MyNumberField label="Width" defaultValue={1024} />
  <MyNumberField label="Height" defaultValue={768} />
</FieldGroup>
```

```
import {NumberFieldContext} from 'react-aria-components';

interface FieldGroupProps {
  title?: string;
  children?: React.ReactNode;
  isReadOnly?: boolean;
}

function FieldGroup(
  { title, children, isReadOnly }: FieldGroupProps
) {
  return (
    <fieldset>
      <legend>{title}</legend>
      <NumberFieldContext.Provider value={{ isReadOnly }}>        {children}
      </NumberFieldContext.Provider>
    </fieldset>
  );
}

<FieldGroup title="Dimensions" isReadOnly>
  <MyNumberField label="Width" defaultValue={1024} />
  <MyNumberField label="Height" defaultValue={768} />
</FieldGroup>
```

```
import {NumberFieldContext} from 'react-aria-components';

interface FieldGroupProps {
  title?: string;
  children?:
    React.ReactNode;
  isReadOnly?: boolean;
}

function FieldGroup(
  {
    title,
    children,
    isReadOnly
  }: FieldGroupProps
) {
  return (
    <fieldset>
      <legend>
        {title}
      </legend>
      <NumberFieldContext.Provider
        value={{
          isReadOnly
        }}
      >        {children}
      </NumberFieldContext.Provider>
    </fieldset>
  );
}

<FieldGroup
  title="Dimensions"
  isReadOnly
>
  <MyNumberField
    label="Width"
    defaultValue={1024}
  />
  <MyNumberField
    label="Height"
    defaultValue={768}
  />
</FieldGroup>
```

Show CSS

```
fieldset {
  padding: 1.5em;
  width: fit-content;
}
```

```
fieldset {
  padding: 1.5em;
  width: fit-content;
}
```

```
fieldset {
  padding: 1.5em;
  width: fit-content;
}
```

NumberField passes props to its child components, such as the label and input, via their associated contexts. These contexts are exported so you can also consume them in your own custom components. This enables you to reuse existing components from your app or component library together with React Aria Components.

Component

Context

Props

Ref

`Label`

`LabelContext`

`[LabelProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Label.tsx:LabelProps)`

`[HTMLLabelElement](https://developer.mozilla.org/docs/Web/API/HTMLLabelElement)`

`Group`

`GroupContext`

`[GroupProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Group.tsx:GroupProps)`

`[HTMLDivElement](https://developer.mozilla.org/docs/Web/API/HTMLDivElement)`

`Input`

`InputContext`

`[InputProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Input.tsx:InputProps)`

`[HTMLInputElement](https://developer.mozilla.org/docs/Web/API/HTMLInputElement)`

`Button`

`ButtonContext`

`[ButtonProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Button.tsx:ButtonProps)`

`[HTMLButtonElement](https://developer.mozilla.org/docs/Web/API/HTMLButtonElement)`

`Text`

`TextContext`

`[TextProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Text.tsx:TextProps)`

`[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)`

This example consumes from `LabelContext` in an existing styled label component to make it compatible with React Aria Components. The `[useContextProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:useContextProps)` hook merges the local props and ref with the ones provided via context by NumberField.

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

Now you can use `MyCustomLabel` within a `NumberField`, in place of the builtin React Aria Components `Label`.

```
<NumberField>
  <MyCustomLabel>Value</MyCustomLabel>  <Group>
    <Button slot="decrement"><Minus size={18} /></Button>
    <Input />
    <Button slot="increment"><Plus size={18} /></Button>
  </Group>
</NumberField>
```

```
<NumberField>
  <MyCustomLabel>Value</MyCustomLabel>  <Group>
    <Button slot="decrement"><Minus size={18} /></Button>
    <Input />
    <Button slot="increment"><Plus size={18} /></Button>
  </Group>
</NumberField>
```

```
<NumberField>
  <MyCustomLabel>
    Value
  </MyCustomLabel>  <Group>
    <Button slot="decrement">
      <Minus
        size={18}
      />
    </Button>
    <Input />
    <Button slot="increment">
      <Plus
        size={18}
      />
    </Button>
  </Group>
</NumberField>
```

NumberField provides a `[NumberFieldState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/numberfield/src/useNumberFieldState.ts:NumberFieldState)` object to its children via `NumberFieldStateContext`. This can be used to access and manipulate the NumberField's state.

If you need to customize things even further, such as accessing internal state or customizing DOM structure, you can drop down to the lower level Hook-based API. See [useNumberField](https://react-spectrum.adobe.com/react-aria/useNumberField.html) for more details.