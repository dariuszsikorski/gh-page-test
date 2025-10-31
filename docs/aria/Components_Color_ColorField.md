# ColorField

**Source**: [https://react-spectrum.adobe.com/react-aria/ColorField.html](https://react-spectrum.adobe.com/react-aria/ColorField.html)

> Documentation for ColorField in the React Aria package.

---

A color field allows users to edit a hex color or individual color channel value.

* * *

```
import {ColorField, Label, Input} from 'react-aria-components';

<ColorField defaultValue="#ff0">
  <Label>Primary Color</Label>
  <Input />
</ColorField>
```

```
import {
  ColorField,
  Input,
  Label
} from 'react-aria-components';

<ColorField defaultValue="#ff0">
  <Label>Primary Color</Label>
  <Input />
</ColorField>
```

```
import {
  ColorField,
  Input,
  Label
} from 'react-aria-components';

<ColorField defaultValue="#ff0">
  <Label>
    Primary Color
  </Label>
  <Input />
</ColorField>
```

Show CSS

```
@import "@react-aria/example-theme";

.react-aria-ColorField {
  display: flex;
  flex-direction: column;
  color: var(--text-color);

  .react-aria-Input {
    padding: 0.286rem;
    margin: 0;
    border: 1px solid var(--border-color);
    border-radius: 6px;
    background: var(--field-background);
    font-size: 1.143rem;
    color: var(--field-text-color);
    width: 100%;
    max-width: 12ch;
    box-sizing: border-box;

    &[data-focused] {
      outline: 2px solid var(--focus-ring-color);
      outline-offset: -1px;
    }
  }
}
```

```
@import "@react-aria/example-theme";

.react-aria-ColorField {
  display: flex;
  flex-direction: column;
  color: var(--text-color);

  .react-aria-Input {
    padding: 0.286rem;
    margin: 0;
    border: 1px solid var(--border-color);
    border-radius: 6px;
    background: var(--field-background);
    font-size: 1.143rem;
    color: var(--field-text-color);
    width: 100%;
    max-width: 12ch;
    box-sizing: border-box;

    &[data-focused] {
      outline: 2px solid var(--focus-ring-color);
      outline-offset: -1px;
    }
  }
}
```

```
@import "@react-aria/example-theme";

.react-aria-ColorField {
  display: flex;
  flex-direction: column;
  color: var(--text-color);

  .react-aria-Input {
    padding: 0.286rem;
    margin: 0;
    border: 1px solid var(--border-color);
    border-radius: 6px;
    background: var(--field-background);
    font-size: 1.143rem;
    color: var(--field-text-color);
    width: 100%;
    max-width: 12ch;
    box-sizing: border-box;

    &[data-focused] {
      outline: 2px solid var(--focus-ring-color);
      outline-offset: -1px;
    }
  }
}
```

* * *

The [<input type="color">](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color) HTML element can be used to build a color picker, however it is very inconsistent across browsers and operating systems and consists of a complete color picker rather than a single field for editing a hex value or individual color channel. `ColorField` helps achieve accessible color fields that can be styled as needed.

-   **Interactions** – Supports entering a value using a keyboard, incrementing and decrementing with the arrow keys, and adjusting the value with the scroll wheel.
-   **Validation** – Keyboard input is validated as the user types so that only valid characters are accepted. Custom client and server-side validation is also supported.
-   **Accessible** – Follows the [spinbutton](https://www.w3.org/WAI/ARIA/apg/patterns/spinbutton/) ARIA pattern. Extensively tested across many devices and [assistive technologies](https://react-spectrum.adobe.com/react-aria/accessibility.html#testing) to ensure announcements and behaviors are consistent.

* * *

Shows a color field component with labels pointing to its parts, including the input, and label elements.#ABCDEFBackground colorInputLabel

A color field consists of an input element and a label. It also supports optional description and error message elements, which can be used to provide more context about the field, and any validation messages.

```
import {ColorField, FieldError, Input, Label, Text} from 'react-aria-components';

<ColorField>
  <Label />
  <Input />
  <Text slot="description" />
  <FieldError />
</ColorField>
```

```
import {
  ColorField,
  FieldError,
  Input,
  Label,
  Text
} from 'react-aria-components';

<ColorField>
  <Label />
  <Input />
  <Text slot="description" />
  <FieldError />
</ColorField>
```

```
import {
  ColorField,
  FieldError,
  Input,
  Label,
  Text
} from 'react-aria-components';

<ColorField>
  <Label />
  <Input />
  <Text slot="description" />
  <FieldError />
</ColorField>
```

If there is no visual label, an `aria-label` or `aria-labelledby` prop must be passed instead to identify the element to screen readers.

`ColorField` makes use of the following concepts:

[

Forms

Validating and submitting form data, and integrating with form libraries.

](https://react-spectrum.adobe.com/react-aria/forms.html)

A `ColorField` uses the following components, which may also be used standalone or reused in other components.

[

Label

A label provides context for an input element.

](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label)[

Input

An input allows a user to enter a plain text value with a keyboard.

](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)

* * *

To help kick-start your project, we offer starter kits that include example implementations of all React Aria components with various styling solutions. All components are fully styled, including support for dark mode, high contrast mode, and all UI states. Each starter comes with a pre-configured [Storybook](https://storybook.js.org/) that you can experiment with, or use as a starting point for your own component library.

* * *

If you will use a ColorField in multiple places in your app, you can wrap all of the pieces into a reusable component. This way, the DOM structure, styling code, and other logic are defined in a single place and reused everywhere to ensure consistency.

This example wraps `ColorField` and all of its children together into a single component which accepts a `label` prop, which is passed to the right place. It also shows how to use the `description` slot to render [help text](#description), and `FieldError` component to render [validation errors](#validation).

```
import type {ColorFieldProps, ValidationResult} from 'react-aria-components';
import {FieldError, Text} from 'react-aria-components';

interface MyColorFieldProps extends ColorFieldProps {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
}

export function MyColorField(
  { label, description, errorMessage, ...props }: MyColorFieldProps
) {
  return (
    <ColorField {...props}>
      {label && <Label>{label}</Label>}
      <Input />
      {description && <Text slot="description">{description}</Text>}
      <FieldError>{errorMessage}</FieldError>
    </ColorField>
  );
}

<MyColorField label="Color" />
```

```
import type {
  ColorFieldProps,
  ValidationResult
} from 'react-aria-components';
import {FieldError, Text} from 'react-aria-components';

interface MyColorFieldProps extends ColorFieldProps {
  label?: string;
  description?: string;
  errorMessage?:
    | string
    | ((validation: ValidationResult) => string);
}

export function MyColorField(
  { label, description, errorMessage, ...props }:
    MyColorFieldProps
) {
  return (
    <ColorField {...props}>
      {label && <Label>{label}</Label>}
      <Input />
      {description && (
        <Text slot="description">{description}</Text>
      )}
      <FieldError>{errorMessage}</FieldError>
    </ColorField>
  );
}

<MyColorField label="Color" />
```

```
import type {
  ColorFieldProps,
  ValidationResult
} from 'react-aria-components';
import {
  FieldError,
  Text
} from 'react-aria-components';

interface MyColorFieldProps
  extends
    ColorFieldProps {
  label?: string;
  description?: string;
  errorMessage?:
    | string
    | ((
      validation:
        ValidationResult
    ) => string);
}

export function MyColorField(
  {
    label,
    description,
    errorMessage,
    ...props
  }: MyColorFieldProps
) {
  return (
    <ColorField
      {...props}
    >
      {label && (
        <Label>
          {label}
        </Label>
      )}
      <Input />
      {description && (
        <Text slot="description">
          {description}
        </Text>
      )}
      <FieldError>
        {errorMessage}
      </FieldError>
    </ColorField>
  );
}

<MyColorField label="Color" />
```

* * *

A ColorField accepts either a color string or `[Color](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/color/src/index.d.ts:Color)` object as a value.

By default, `ColorField` is uncontrolled. You can set a default value using the `defaultValue` prop.

```
<MyColorField label="Color" defaultValue="#7f007f" />
```

```
<MyColorField label="Color" defaultValue="#7f007f" />
```

```
<MyColorField
  label="Color"
  defaultValue="#7f007f"
/>
```

A `ColorField` can be made controlled. The `[parseColor](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/color/src/Color.ts:parseColor)` function is used to parse the initial color from a hex string, stored in state. The `value` and `onChange` props are used to update the value in state when the edits the value.

```
import {parseColor} from 'react-aria-components';

function Example() {
  let [color, setColor] = React.useState(parseColor('#7f007f'));
  return (
    <>
      <MyColorField label="Color" value={color} onChange={setColor} />
      <p>Current color value: {color?.toString('hex')}</p>
    </>
  );
}
```

```
import {parseColor} from 'react-aria-components';

function Example() {
  let [color, setColor] = React.useState(
    parseColor('#7f007f')
  );
  return (
    <>
      <MyColorField
        label="Color"
        value={color}
        onChange={setColor}
      />
      <p>Current color value: {color?.toString('hex')}</p>
    </>
  );
}
```

```
import {parseColor} from 'react-aria-components';

function Example() {
  let [color, setColor] =
    React.useState(
      parseColor(
        '#7f007f'
      )
    );
  return (
    <>
      <MyColorField
        label="Color"
        value={color}
        onChange={setColor}
      />
      <p>
        Current color
        value:{' '}
        {color?.toString(
          'hex'
        )}
      </p>
    </>
  );
}
```

ColorField supports the `name` prop for integration with HTML forms. The value will be submitted to the server as a hex color string. When a `channel` prop is provided, the value will be submitted as a number instead.

```
<MyColorField label="Color" name="color" />
```

```
<MyColorField label="Color" name="color" />
```

```
<MyColorField
  label="Color"
  name="color"
/>
```

* * *

By default, ColorField allows the user to edit the color as a hex value. When the `colorSpace` and `channel` props are provided, ColorField displays the value for that channel formatted as a number instead. Rendering multiple ColorFields together can allow a user to edit a color.

```
function Example() {
  let [color, setColor] = React.useState(parseColor('#7f007f'));
  return (
    <>
      <div style={{ display: 'flex', gap: 8 }}>
        <MyColorField
          label="Hue"
          value={color}
          onChange={setColor}
          colorSpace="hsl"
          channel="hue"
        />
        <MyColorField
          label="Saturation"
          value={color}
          onChange={setColor}
          colorSpace="hsl"
          channel="saturation"
        />
        <MyColorField
          label="Lightness"
          value={color}
          onChange={setColor}
          colorSpace="hsl"
          channel="lightness"
        />
      </div>
      <p>Current color value: {color?.toString('hex')}</p>
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
      <div style={{ display: 'flex', gap: 8 }}>
        <MyColorField
          label="Hue"
          value={color}
          onChange={setColor}
          colorSpace="hsl"
          channel="hue"
        />
        <MyColorField
          label="Saturation"
          value={color}
          onChange={setColor}
          colorSpace="hsl"
          channel="saturation"
        />
        <MyColorField
          label="Lightness"
          value={color}
          onChange={setColor}
          colorSpace="hsl"
          channel="lightness"
        />
      </div>
      <p>Current color value: {color?.toString('hex')}</p>
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
      <div
        style={{
          display:
            'flex',
          gap: 8
        }}
      >
        <MyColorField
          label="Hue"
          value={color}
          onChange={setColor}
          colorSpace="hsl"
          channel="hue"
        />
        <MyColorField
          label="Saturation"
          value={color}
          onChange={setColor}
          colorSpace="hsl"
          channel="saturation"
        />
        <MyColorField
          label="Lightness"
          value={color}
          onChange={setColor}
          colorSpace="hsl"
          channel="lightness"
        />
      </div>
      <p>
        Current color
        value:{' '}
        {color?.toString(
          'hex'
        )}
      </p>
    </>
  );
}
```

* * *

ColorField supports the `isRequired` prop to ensure the user enters a value, as well as custom validation functions, realtime validation, and server-side validation. It can also be integrated with other form libraries. See the [Forms](https://react-spectrum.adobe.com/react-aria/forms.html) guide to learn more.

To display validation errors, add a `<FieldError>` element as a child of the ColorField. This allows you to render error messages from all of the above sources with consistent custom styles.

```
import {Form, FieldError, Button} from 'react-aria-components';

<Form>
  <ColorField name="color" isRequired>    <Label>Color</Label>
    <Input />
    <FieldError />  </ColorField>
  <Button type="submit">Submit</Button>
</Form>
```

```
import {
  Button,
  FieldError,
  Form
} from 'react-aria-components';

<Form>
  <ColorField name="color" isRequired>    <Label>Color</Label>
    <Input />
    <FieldError />  </ColorField>
  <Button type="submit">Submit</Button>
</Form>
```

```
import {
  Button,
  FieldError,
  Form
} from 'react-aria-components';

<Form>
  <ColorField
    name="color"
    isRequired
  >    <Label>
      Color
    </Label>
    <Input />
    <FieldError />  </ColorField>
  <Button type="submit">
    Submit
  </Button>
</Form>
```

Show CSS

```
.react-aria-ColorField {
  &[data-invalid] {
    .react-aria-Input {
      border-color: var(--invalid-color);
    }
  }

  .react-aria-FieldError {
    font-size: 12px;
    color: var(--invalid-color);
  }
}
```

```
.react-aria-ColorField {
  &[data-invalid] {
    .react-aria-Input {
      border-color: var(--invalid-color);
    }
  }

  .react-aria-FieldError {
    font-size: 12px;
    color: var(--invalid-color);
  }
}
```

```
.react-aria-ColorField {
  &[data-invalid] {
    .react-aria-Input {
      border-color: var(--invalid-color);
    }
  }

  .react-aria-FieldError {
    font-size: 12px;
    color: var(--invalid-color);
  }
}
```

By default, `FieldError` displays default validation messages provided by the browser. See [Customizing error messages](https://react-spectrum.adobe.com/react-aria/forms.html#customizing-error-messages) in the Forms guide to learn how to provide your own custom errors.

* * *

The `description` slot can be used to associate additional help text with a color field.

```
<ColorField>
  <Label>Color</Label>
  <Input />
  <Text slot="description">Enter a background color.</Text></ColorField>
```

```
<ColorField>
  <Label>Color</Label>
  <Input />
  <Text slot="description">Enter a background color.</Text></ColorField>
```

```
<ColorField>
  <Label>Color</Label>
  <Input />
  <Text slot="description">
    Enter a background
    color.
  </Text></ColorField>
```

Show CSS

```
.react-aria-ColorField {
  [slot=description] {
    font-size: 12px;
  }
}
```

```
.react-aria-ColorField {
  [slot=description] {
    font-size: 12px;
  }
}
```

```
.react-aria-ColorField {
  [slot=description] {
    font-size: 12px;
  }
}
```

* * *

The `isDisabled` prop can be used prevent the user from editing the value of the color field.

```
<MyColorField label="Disabled" defaultValue="#7f007f" isDisabled />
```

```
<MyColorField
  label="Disabled"
  defaultValue="#7f007f"
  isDisabled
/>
```

```
<MyColorField
  label="Disabled"
  defaultValue="#7f007f"
  isDisabled
/>
```

Show CSS

```
.react-aria-ColorField {
  .react-aria-Input {
    &[data-disabled] {
      border-color: var(--border-color-disabled);
      color: var(--text-color-disabled);
    }
  }
}
```

```
.react-aria-ColorField {
  .react-aria-Input {
    &[data-disabled] {
      border-color: var(--border-color-disabled);
      color: var(--text-color-disabled);
    }
  }
}
```

```
.react-aria-ColorField {
  .react-aria-Input {
    &[data-disabled] {
      border-color: var(--border-color-disabled);
      color: var(--text-color-disabled);
    }
  }
}
```

The `isReadOnly` prop makes the ColorField's value immutable. Unlike `isDisabled`, the ColorField remains focusable and the contents can still be copied. See [the MDN docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly) for more information.

```
<MyColorField label="Read only" isReadOnly value="#7f007f" />
```

```
<MyColorField
  label="Read only"
  isReadOnly
  value="#7f007f"
/>
```

```
<MyColorField
  label="Read only"
  isReadOnly
  value="#7f007f"
/>
```

* * *

Name

Type

Default

Description

`channel`

`[ColorChannel](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/color/src/index.d.ts:ColorChannel)`

—

The color channel that this field edits. If not provided, the color is edited as a hex value.

`colorSpace`

`[ColorSpace](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/color/src/index.d.ts:ColorSpace)`

—

The color space that the color field operates in if a `channel` prop is provided. If no `channel` is provided, the color field always displays the color as an RGB hex value.

`isWheelDisabled`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Enables or disables changing the value with scroll.

`value`

`T`

—

The current value (controlled).

`defaultValue`

`T`

—

The default value (uncontrolled).

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

`( (value: [Color](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/color/src/index.d.ts:Color) |  | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null) )) => [ValidationError](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/inputs.d.ts:ValidationError) | true | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null) | [undefined](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined)`

—

A function that returns an error message if a given value is invalid. Validation errors are displayed to the user when the form is submitted if `validationBehavior="native"`. For realtime validation, use the `isInvalid` prop instead.

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

`validationBehavior`

`'native' | 'aria'`

`'native'`

Whether to use native HTML form validation to prevent form submission when the value is missing or invalid, or mark the field as required or invalid via ARIA.

`children`

`[ChildrenOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ChildrenOrFunction)<[ColorFieldRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/ColorField.tsx:ColorFieldRenderProps)>`

—

The children of the component. A function may be provided to alter the children based on component state.

`className`

`[ClassNameOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ClassNameOrFunction)<[ColorFieldRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/ColorField.tsx:ColorFieldRenderProps)>`

—

The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.

`style`

`[StyleOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:StyleOrFunction)<[ColorFieldRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/ColorField.tsx:ColorFieldRenderProps)>`

—

The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.

Events

Name

Type

Description

`onChange`

`( (color: [Color](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/color/src/index.d.ts:Color) |  | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null) )) => void`

Handler that is called when the value changes.

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

`excludeFromTabOrder`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether to exclude the element from the sequential tab order. If true, the element will not be focusable via the keyboard by tabbing. This should be avoided except in rare scenarios where an alternative means of accessing the element or its functionality via the keyboard is available.

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

A `<Label>` accepts all HTML attributes.

An `<Input>` accepts all props supported by the `<input>` HTML element.

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
.react-aria-ColorField {
  /* ... */
}
```

```
.react-aria-ColorField {
  /* ... */
}
```

```
.react-aria-ColorField {
  /* ... */
}
```

A custom `className` can also be specified on any component. This overrides the default `className` provided by React Aria with your own.

```
<ColorField className="my-color-field">
  {/* ... */}
</ColorField>
```

```
<ColorField className="my-color-field">
  {/* ... */}
</ColorField>
```

```
<ColorField className="my-color-field">
  {/* ... */}
</ColorField>
```

In addition, some components support multiple UI states (e.g. focused, placeholder, readonly, etc.). React Aria components expose states using data attributes, which you can target in CSS selectors. For example:

```
.react-aria-Input[data-focus-visible] {
  /* ... */
}
```

```
.react-aria-Input[data-focus-visible] {
  /* ... */
}
```

```
.react-aria-Input[data-focus-visible] {
  /* ... */
}
```

The `className` and `style` props also accept functions which receive states for styling. This lets you dynamically determine the classes or styles to apply, which is useful when using utility CSS libraries like [Tailwind](https://tailwindcss.com/).

```
<Input
  className={({ isFocused }) =>
    isFocused ? 'border-blue-500' : 'border-gray-600'}
/>
```

```
<Input
  className={({ isFocused }) =>
    isFocused ? 'border-blue-500' : 'border-gray-600'}
/>
```

```
<Input
  className={(
    { isFocused }
  ) =>
    isFocused
      ? 'border-blue-500'
      : 'border-gray-600'}
/>
```

The states, selectors, and render props for each component used in a `ColorField` are documented below.

A `ColorField` can be targeted with the `.react-aria-ColorField` CSS selector, or by overriding with a custom `className`. It supports the following states:

Name

CSS Selector

Description

`isDisabled`

`[data-disabled]`

Whether the color field is disabled.

`isInvalid`

`[data-invalid]`

Whether the color field is invalid.

`channel`

`[data-channel="hex | hue | saturation | ..."]`

The color channel that this field edits, or "hex" if no `channel` prop is set.

`state`

`—`

State of the color field.

A `Label` can be targeted with the `.react-aria-Label` CSS selector, or by overriding with a custom `className`.

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

The help text elements within a `ColorField` can be targeted with the `[slot=description]` and `[slot=errorMessage]` CSS selectors, or by adding a custom `className`.

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

If you need to customize one of the components within a `ColorField`, such as `Label` or `Input`, in many cases you can create a wrapper component. This lets you customize the props passed to the component.

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

`ColorField`

`ColorFieldContext`

`[ColorFieldProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/ColorField.tsx:ColorFieldProps)`

`[HTMLDivElement](https://developer.mozilla.org/docs/Web/API/HTMLDivElement)`

This example shows a `FieldGroup` component that renders a group of color fields with a title. The entire group can be marked as read only via the `isReadOnly` prop, which is passed to all child color fields via the `ColorFieldContext` provider.

```
import {ColorFieldContext} from 'react-aria-components';

interface FieldGroupProps {
  title?: string,
  children?: React.ReactNode,
  isReadOnly?: boolean
}

function FieldGroup({title, children, isReadOnly}: FieldGroupProps) {
  return (
    <fieldset>
      <legend>{title}</legend>
      <ColorFieldContext.Provider value={{isReadOnly}}>        {children}
      </ColorFieldContext.Provider>
    </fieldset>
  );
}

<FieldGroup title="Colors" isReadOnly>
  <MyColorField label="Background" defaultValue="#fff" />
  <MyColorField label="Foreground" defaultValue="#000" />
</FieldGroup>
```

```
import {ColorFieldContext} from 'react-aria-components';

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
      <ColorFieldContext.Provider value={{ isReadOnly }}>        {children}
      </ColorFieldContext.Provider>
    </fieldset>
  );
}

<FieldGroup title="Colors" isReadOnly>
  <MyColorField label="Background" defaultValue="#fff" />
  <MyColorField label="Foreground" defaultValue="#000" />
</FieldGroup>
```

```
import {ColorFieldContext} from 'react-aria-components';

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
      <ColorFieldContext.Provider
        value={{
          isReadOnly
        }}
      >        {children}
      </ColorFieldContext.Provider>
    </fieldset>
  );
}

<FieldGroup
  title="Colors"
  isReadOnly
>
  <MyColorField
    label="Background"
    defaultValue="#fff"
  />
  <MyColorField
    label="Foreground"
    defaultValue="#000"
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

ColorField passes props to its child components, such as the label and input, via their associated contexts. These contexts are exported so you can also consume them in your own custom components. This enables you to reuse existing components from your app or component library together with React Aria Components.

Component

Context

Props

Ref

`Label`

`LabelContext`

`[LabelProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Label.tsx:LabelProps)`

`[HTMLLabelElement](https://developer.mozilla.org/docs/Web/API/HTMLLabelElement)`

`Input`

`InputContext`

`[InputProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Input.tsx:InputProps)`

`[HTMLInputElement](https://developer.mozilla.org/docs/Web/API/HTMLInputElement)`

`Text`

`TextContext`

`[TextProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Text.tsx:TextProps)`

`[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)`

This example consumes from `LabelContext` in an existing styled label component to make it compatible with React Aria Components. The `[useContextProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:useContextProps)` hook merges the local props and ref with the ones provided via context by ColorField.

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

Now you can use `MyCustomLabel` within a `ColorField`, in place of the builtin React Aria Components `Label`.

```
<ColorField>
  <MyCustomLabel>Value</MyCustomLabel>  <Input />
</ColorField>
```

```
<ColorField>
  <MyCustomLabel>Value</MyCustomLabel>  <Input />
</ColorField>
```

```
<ColorField>
  <MyCustomLabel>
    Value
  </MyCustomLabel>  <Input />
</ColorField>
```

ColorField provides a `[ColorFieldState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/color/src/useColorFieldState.ts:ColorFieldState)` object to its children via `ColorFieldStateContext`. This can be used to access and manipulate the ColorField's state.

If you need to customize things even further, such as accessing internal state or customizing DOM structure, you can drop down to the lower level Hook-based API. See [useColorField](https://react-spectrum.adobe.com/react-aria/useColorField.html) for more details.