# TextField

**Source**: [https://react-spectrum.adobe.com/react-aria/TextField.html](https://react-spectrum.adobe.com/react-aria/TextField.html)

> Documentation for TextField in the React Aria package.

---

A text field allows a user to enter a plain text value with a keyboard.

* * *

```
import {TextField, Label, Input} from 'react-aria-components';

<TextField>
  <Label>First name</Label>
  <Input />
</TextField>
```

```
import {
  Input,
  Label,
  TextField
} from 'react-aria-components';

<TextField>
  <Label>First name</Label>
  <Input />
</TextField>
```

```
import {
  Input,
  Label,
  TextField
} from 'react-aria-components';

<TextField>
  <Label>
    First name
  </Label>
  <Input />
</TextField>
```

Show CSS

```
@import "@react-aria/example-theme";

.react-aria-TextField {
  display: flex;
  flex-direction: column;
  width: fit-content;
  color: var(--text-color);

  .react-aria-Input,
  .react-aria-TextArea {
    padding: 0.286rem;
    margin: 0;
    border: 1px solid var(--border-color);
    border-radius: 6px;
    background: var(--field-background);
    font-size: 1.143rem;
    color: var(--field-text-color);

    &[data-focused] {
      outline: 2px solid var(--focus-ring-color);
      outline-offset: -1px;
    }
  }
}
```

```
@import "@react-aria/example-theme";

.react-aria-TextField {
  display: flex;
  flex-direction: column;
  width: fit-content;
  color: var(--text-color);

  .react-aria-Input,
  .react-aria-TextArea {
    padding: 0.286rem;
    margin: 0;
    border: 1px solid var(--border-color);
    border-radius: 6px;
    background: var(--field-background);
    font-size: 1.143rem;
    color: var(--field-text-color);

    &[data-focused] {
      outline: 2px solid var(--focus-ring-color);
      outline-offset: -1px;
    }
  }
}
```

```
@import "@react-aria/example-theme";

.react-aria-TextField {
  display: flex;
  flex-direction: column;
  width: fit-content;
  color: var(--text-color);

  .react-aria-Input,
  .react-aria-TextArea {
    padding: 0.286rem;
    margin: 0;
    border: 1px solid var(--border-color);
    border-radius: 6px;
    background: var(--field-background);
    font-size: 1.143rem;
    color: var(--field-text-color);

    &[data-focused] {
      outline: 2px solid var(--focus-ring-color);
      outline-offset: -1px;
    }
  }
}
```

* * *

Text fields can be built with [<input>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) or [<textarea>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea) and [<label>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label) elements, but you must manually ensure that they are semantically connected via ids for accessibility. `TextField` helps automate this, and handle other accessibility features while allowing for custom styling.

-   **Accessible** – Uses a native `<input>` element. Label, description, and error message elements are automatically associated with the field.
-   **Validation** – Support for native HTML constraint validation with customizable UI, custom validation functions, realtime validation, and server-side validation errors.

* * *

Shows a text field component with labels pointing to its parts, including the input, and label elements.ValueLabelInputLabelHelp textDescription or error message

Text fields consist of an input element and a label. `TextField` automatically manages the relationship between the two elements using the `for` attribute on the `<label>` element and the `aria-labelledby` attribute on the `<input>` element.

`TextField` also supports optional description and error message elements, which can be used to provide more context about the field, and any validation messages. These are linked with the input via the `aria-describedby` attribute.

```
import {TextField, Label, Input, FieldError, Text} from 'react-aria-components';

<TextField>
  <Label />
  <Input />
  <Text slot="description" />
  <FieldError />
</TextField>
```

```
import {
  FieldError,
  Input,
  Label,
  Text,
  TextField
} from 'react-aria-components';

<TextField>
  <Label />
  <Input />
  <Text slot="description" />
  <FieldError />
</TextField>
```

```
import {
  FieldError,
  Input,
  Label,
  Text,
  TextField
} from 'react-aria-components';

<TextField>
  <Label />
  <Input />
  <Text slot="description" />
  <FieldError />
</TextField>
```

If there is no visual label, an `aria-label` or `aria-labelledby` prop must be passed instead to identify the element to screen readers.

`TextField` makes use of the following concepts:

[

Forms

Validating and submitting form data, and integrating with form libraries.

](https://react-spectrum.adobe.com/react-aria/forms.html)

A `TextField` uses the following components, which may also be used standalone or reused in other components.

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

If you will use a TextField in multiple places in your app, you can wrap all of the pieces into a reusable component. This way, the DOM structure, styling code, and other logic are defined in a single place and reused everywhere to ensure consistency.

This example wraps `TextField` and all of its children together into a single component which accepts a `label` prop, which is passed to the right place. It also shows how to use the `description` slot to render [help text](#description), and `FieldError` component to render [validation errors](#validation).

```
import type {TextFieldProps, ValidationResult} from 'react-aria-components';
import {FieldError, Text} from 'react-aria-components';

interface MyTextFieldProps extends TextFieldProps {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
}

function MyTextField(
  { label, description, errorMessage, ...props }: MyTextFieldProps
) {
  return (
    <TextField {...props}>
      <Label>{label}</Label>
      <Input />
      {description && <Text slot="description">{description}</Text>}
      <FieldError>{errorMessage}</FieldError>
    </TextField>
  );
}

<MyTextField label="Name" />
```

```
import type {
  TextFieldProps,
  ValidationResult
} from 'react-aria-components';
import {FieldError, Text} from 'react-aria-components';

interface MyTextFieldProps extends TextFieldProps {
  label?: string;
  description?: string;
  errorMessage?:
    | string
    | ((validation: ValidationResult) => string);
}

function MyTextField(
  { label, description, errorMessage, ...props }:
    MyTextFieldProps
) {
  return (
    <TextField {...props}>
      <Label>{label}</Label>
      <Input />
      {description && (
        <Text slot="description">{description}</Text>
      )}
      <FieldError>{errorMessage}</FieldError>
    </TextField>
  );
}

<MyTextField label="Name" />
```

```
import type {
  TextFieldProps,
  ValidationResult
} from 'react-aria-components';
import {
  FieldError,
  Text
} from 'react-aria-components';

interface MyTextFieldProps
  extends
    TextFieldProps {
  label?: string;
  description?: string;
  errorMessage?:
    | string
    | ((
      validation:
        ValidationResult
    ) => string);
}

function MyTextField({
  label,
  description,
  errorMessage,
  ...props
}: MyTextFieldProps) {
  return (
    <TextField
      {...props}
    >
      <Label>
        {label}
      </Label>
      <Input />
      {description && (
        <Text slot="description">
          {description}
        </Text>
      )}
      <FieldError>
        {errorMessage}
      </FieldError>
    </TextField>
  );
}

<MyTextField label="Name" />
```

* * *

A TextField's `value` is empty by default, but an initial, uncontrolled, value can be provided using the `defaultValue` prop.

```
<MyTextField
  label="Email"
  defaultValue="me@email.com" />
```

```
<MyTextField
  label="Email"
  defaultValue="me@email.com" />
```

```
<MyTextField
  label="Email"
  defaultValue="me@email.com"
/>
```

The `value` prop can be used to make the value controlled. The `onChange` event is fired when the user edits the text, and receives the new value.

```
function Example() {
  let [text, setText] = React.useState('');

  return (
    <>
      <MyTextField label="Your text" onChange={setText} />
      <p>Mirrored text: {text}</p>
    </>
  );
}
```

```
function Example() {
  let [text, setText] = React.useState('');

  return (
    <>
      <MyTextField label="Your text" onChange={setText} />
      <p>Mirrored text: {text}</p>
    </>
  );
}
```

```
function Example() {
  let [text, setText] =
    React.useState('');

  return (
    <>
      <MyTextField
        label="Your text"
        onChange={setText}
      />
      <p>
        Mirrored text:
        {' '}
        {text}
      </p>
    </>
  );
}
```

TextField supports the `name` prop for integration with HTML forms. In addition, attributes such as `type`, `pattern`, `inputMode`, and others are passed through to the underlying `<input>` element.

```
<MyTextField label="Email" name="email" type="email" />
```

```
<MyTextField label="Email" name="email" type="email" />
```

```
<MyTextField
  label="Email"
  name="email"
  type="email"
/>
```

* * *

TextField supports HTML constraint validation props such as `isRequired`, `type="email"`, `minLength`, and `pattern`, as well as custom validation functions, realtime validation, and server-side validation. It can also be integrated with other form libraries. See the [Forms](https://react-spectrum.adobe.com/react-aria/forms.html) guide to learn more.

To display validation errors, add a `<FieldError>` element as a child of the TextField. This allows you to render error messages from all of the above sources with consistent custom styles.

```
import {Form, FieldError, Button} from 'react-aria-components';

<Form>
  <TextField name="email" type="email" isRequired>    <Label>Email</Label>
    <Input />
    <FieldError />  </TextField>
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
  <TextField name="email" type="email" isRequired>    <Label>Email</Label>
    <Input />
    <FieldError />  </TextField>
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
  <TextField
    name="email"
    type="email"
    isRequired
  >    <Label>
      Email
    </Label>
    <Input />
    <FieldError />  </TextField>
  <Button type="submit">
    Submit
  </Button>
</Form>
```

Show CSS

```
.react-aria-TextField {
  .react-aria-Input,
  .react-aria-TextArea {
    &[data-invalid] {
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
.react-aria-TextField {
  .react-aria-Input,
  .react-aria-TextArea {
    &[data-invalid] {
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
.react-aria-TextField {
  .react-aria-Input,
  .react-aria-TextArea {
    &[data-invalid] {
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

The `description` slot can be used to associate additional help text with a text field.

```
<TextField>
  <Label>Email</Label>
  <Input />
  <Text slot="description">
    Enter an email for us to contact you about your order.
  </Text></TextField>
```

```
<TextField>
  <Label>Email</Label>
  <Input />
  <Text slot="description">
    Enter an email for us to contact you about your order.
  </Text></TextField>
```

```
<TextField>
  <Label>Email</Label>
  <Input />
  <Text slot="description">
    Enter an email for
    us to contact you
    about your order.
  </Text></TextField>
```

Show CSS

```
.react-aria-TextField {
  [slot=description] {
    font-size: 12px;
  }
}
```

```
.react-aria-TextField {
  [slot=description] {
    font-size: 12px;
  }
}
```

```
.react-aria-TextField {
  [slot=description] {
    font-size: 12px;
  }
}
```

* * *

A TextField can be disabled using the `isDisabled` prop.

```
<MyTextField label="Email" isDisabled />
```

```
<MyTextField label="Email" isDisabled />
```

```
<MyTextField
  label="Email"
  isDisabled
/>
```

Show CSS

```
.react-aria-TextField {
  .react-aria-Input,
  .react-aria-TextArea {
    &[data-disabled] {
      border-color: var(--border-color-disabled);
      color: var(--text-color-disabled);
    }
  }
}
```

```
.react-aria-TextField {
  .react-aria-Input,
  .react-aria-TextArea {
    &[data-disabled] {
      border-color: var(--border-color-disabled);
      color: var(--text-color-disabled);
    }
  }
}
```

```
.react-aria-TextField {
  .react-aria-Input,
  .react-aria-TextArea {
    &[data-disabled] {
      border-color: var(--border-color-disabled);
      color: var(--text-color-disabled);
    }
  }
}
```

The `isReadOnly` boolean prop makes the TextField's text content immutable. Unlike `isDisabled`, the TextField remains focusable and the contents can still be copied. See [the MDN docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly) for more information.

```
<MyTextField label="Email" defaultValue="abc@adobe.com" isReadOnly />
```

```
<MyTextField
  label="Email"
  defaultValue="abc@adobe.com"
  isReadOnly
/>
```

```
<MyTextField
  label="Email"
  defaultValue="abc@adobe.com"
  isReadOnly
/>
```

* * *

TextField supports using the `TextArea` component in place of `Input` for multi-line text input.

```
import {TextField, Label, TextArea} from 'react-aria-components';

<TextField>
  <Label>Comment</Label>
  <TextArea />
</TextField>
```

```
import {
  Label,
  TextArea,
  TextField
} from 'react-aria-components';

<TextField>
  <Label>Comment</Label>
  <TextArea />
</TextField>
```

```
import {
  Label,
  TextArea,
  TextField
} from 'react-aria-components';

<TextField>
  <Label>
    Comment
  </Label>
  <TextArea />
</TextField>
```

* * *

Name

Type

Default

Description

`isInvalid`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the value is invalid.

`enterKeyHint`

`'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send'`

—

An enumerated attribute that defines what action label or icon to preset for the enter key on virtual keyboards. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/enterkeyhint).

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

`validate`

`( (value: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) )) => [ValidationError](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/inputs.d.ts:ValidationError) | true | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null) | [undefined](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined)`

—

A function that returns an error message if a given value is invalid. Validation errors are displayed to the user when the form is submitted if `validationBehavior="native"`. For realtime validation, use the `isInvalid` prop instead.

`autoFocus`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the element should receive focus on render.

`value`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

The current value (controlled).

`defaultValue`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

The default value (uncontrolled).

`autoComplete`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

Describes the type of autocomplete functionality the input should provide if any. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefautocomplete).

`maxLength`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)`

—

The maximum number of characters supported by the input. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefmaxlength).

`minLength`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)`

—

The minimum number of characters required by the input. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefminlength).

`pattern`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

Regex pattern that the value of the input must match to be valid. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefpattern).

`type`

`'text' | 'search' | 'url' | 'tel' | 'email' | 'password' | [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) &  & {}`

`'text'`

The type of input to render. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdeftype).

`inputMode`

`'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search'`

—

Hints at the type of data that might be entered by the user while editing the element or its contents. See [MDN](https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute).

`autoCorrect`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

An attribute that takes as its value a space-separated string that describes what, if any, type of autocomplete functionality the input should provide. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#autocomplete).

`spellCheck`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

An enumerated attribute that defines whether the element may be checked for spelling errors. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/spellcheck).

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

`[ChildrenOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ChildrenOrFunction)<[TextFieldRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/TextField.tsx:TextFieldRenderProps)>`

—

The children of the component. A function may be provided to alter the children based on component state.

`className`

`[ClassNameOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ClassNameOrFunction)<[TextFieldRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/TextField.tsx:TextFieldRenderProps)>`

—

The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.

`style`

`[StyleOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:StyleOrFunction)<[TextFieldRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/TextField.tsx:TextFieldRenderProps)>`

—

The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.

Events

Name

Type

Description

`onFocus`

`( (e: [FocusEvent](https://developer.mozilla.org/docs/Web/API/FocusEvent)<T> )) => void`

Handler that is called when the element receives focus.

`onBlur`

`( (e: [FocusEvent](https://developer.mozilla.org/docs/Web/API/FocusEvent)<T> )) => void`

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

`excludeFromTabOrder`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether to exclude the element from the sequential tab order. If true, the element will not be focusable via the keyboard by tabbing. This should be avoided except in rare scenarios where an alternative means of accessing the element or its functionality via the keyboard is available.

`aria-activedescendant`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application.

`aria-autocomplete`

`'none' | 'inline' | 'list' | 'both'`

Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be presented if they are made.

`aria-haspopup`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | 'false' | 'true' | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog'`

Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.

`aria-controls`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

Identifies the element (or elements) whose contents or presence are controlled by the current element.

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

An `<Input>` accepts all HTML attributes.

A `<TextArea>` accepts all HTML attributes.

`<Text>` accepts all HTML attributes.

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
.react-aria-TextField {
  /* ... */
}
```

```
.react-aria-TextField {
  /* ... */
}
```

```
.react-aria-TextField {
  /* ... */
}
```

A custom `className` can also be specified on any component. This overrides the default `className` provided by React Aria with your own.

```
<TextField className="my-textfield">
  {/* ... */}
</TextField>
```

```
<TextField className="my-textfield">
  {/* ... */}
</TextField>
```

```
<TextField className="my-textfield">
  {/* ... */}
</TextField>
```

In addition, some components support multiple UI states (e.g. focused, placeholder, readonly, etc.). React Aria components expose states using data attributes, which you can target in CSS selectors. For example:

```
input[data-hovered] {
  /* ... */
}

input[data-disabled] {
  /* ... */
}
```

```
input[data-hovered] {
  /* ... */
}

input[data-disabled] {
  /* ... */
}
```

```
input[data-hovered] {
  /* ... */
}

input[data-disabled] {
  /* ... */
}
```

The states, selectors, and render props for each component used in a `TextField` are documented below.

A `TextField` can be targeted with the `.react-aria-TextField` CSS selector, or by overriding with a custom `className`. It supports the following states:

Name

CSS Selector

Description

`isDisabled`

`[data-disabled]`

Whether the text field is disabled.

`isInvalid`

`[data-invalid]`

Whether the value is invalid.

`isReadOnly`

`[data-readonly]`

Whether the text field is read only.

`isRequired`

`[data-required]`

Whether the text field is required.

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

A `TextArea` can be targeted with the `.react-aria-TextArea` CSS selector, or by overriding with a custom `className`. It supports the same states as `Input` described above.

The help text elements within a `TextField` can be targeted with the `[slot=description]` and `[slot=errorMessage]` CSS selectors, or by adding a custom `className`.

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

If you need to customize one of the components within a `TextField`, such as `Label` or `Input`, in many cases you can create a wrapper component. This lets you customize the props passed to the component.

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

`TextField`

`TextFieldContext`

`[TextFieldProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/TextField.tsx:TextFieldProps)`

`[HTMLDivElement](https://developer.mozilla.org/docs/Web/API/HTMLDivElement)`

This example shows a `FieldGroup` component that renders a group of text fields with a title and optional error message. It uses the [useId](https://react-spectrum.adobe.com/react-aria/useId.html) hook to generate a unique id for the error message. All of the child TextFields are marked invalid and associated with the error message via the `aria-describedby` attribute passed to the `TextFieldContext` provider.

```
import {TextFieldContext} from 'react-aria-components';
import {useId} from 'react-aria';

interface FieldGroupProps {
  title?: string;
  children?: React.ReactNode;
  errorMessage?: string;
}

function FieldGroup({ title, children, errorMessage }: FieldGroupProps) {
  let errorId = useId();
  return (
    <fieldset>
      <legend>{title}</legend>
      <TextFieldContext.Provider
        value={{
          isInvalid: !!errorMessage,
          'aria-describedby': errorMessage ? errorId : undefined
        }}
      >        {children}
      </TextFieldContext.Provider>
      {errorMessage && (
        <small id={errorId} className="invalid">{errorMessage}</small>
      )}
    </fieldset>
  );
}

<FieldGroup title="Account details" errorMessage="Invalid account details.">
  <MyTextField label="Name" defaultValue="Devon" />
  <MyTextField label="Email" defaultValue="devon@example.com" />
</FieldGroup>
```

```
import {TextFieldContext} from 'react-aria-components';
import {useId} from 'react-aria';

interface FieldGroupProps {
  title?: string;
  children?: React.ReactNode;
  errorMessage?: string;
}

function FieldGroup(
  { title, children, errorMessage }: FieldGroupProps
) {
  let errorId = useId();
  return (
    <fieldset>
      <legend>{title}</legend>
      <TextFieldContext.Provider
        value={{
          isInvalid: !!errorMessage,
          'aria-describedby': errorMessage
            ? errorId
            : undefined
        }}
      >        {children}
      </TextFieldContext.Provider>
      {errorMessage && (
        <small id={errorId} className="invalid">
          {errorMessage}
        </small>
      )}
    </fieldset>
  );
}

<FieldGroup
  title="Account details"
  errorMessage="Invalid account details."
>
  <MyTextField label="Name" defaultValue="Devon" />
  <MyTextField
    label="Email"
    defaultValue="devon@example.com"
  />
</FieldGroup>
```

```
import {TextFieldContext} from 'react-aria-components';
import {useId} from 'react-aria';

interface FieldGroupProps {
  title?: string;
  children?:
    React.ReactNode;
  errorMessage?: string;
}

function FieldGroup(
  {
    title,
    children,
    errorMessage
  }: FieldGroupProps
) {
  let errorId = useId();
  return (
    <fieldset>
      <legend>
        {title}
      </legend>
      <TextFieldContext.Provider
        value={{
          isInvalid:
            !!errorMessage,
          'aria-describedby':
            errorMessage
              ? errorId
              : undefined
        }}
      >        {children}
      </TextFieldContext.Provider>
      {errorMessage && (
        <small
          id={errorId}
          className="invalid"
        >
          {errorMessage}
        </small>
      )}
    </fieldset>
  );
}

<FieldGroup
  title="Account details"
  errorMessage="Invalid account details."
>
  <MyTextField
    label="Name"
    defaultValue="Devon"
  />
  <MyTextField
    label="Email"
    defaultValue="devon@example.com"
  />
</FieldGroup>
```

Show CSS

```
fieldset {
  padding: 1.5em;
  width: fit-content;
}

.invalid {
  color: var(--invalid-color);
  margin-top: 1em;
  display: block;
}
```

```
fieldset {
  padding: 1.5em;
  width: fit-content;
}

.invalid {
  color: var(--invalid-color);
  margin-top: 1em;
  display: block;
}
```

```
fieldset {
  padding: 1.5em;
  width: fit-content;
}

.invalid {
  color: var(--invalid-color);
  margin-top: 1em;
  display: block;
}
```

TextField passes props to its child components, such as the label and input, via their associated contexts. These contexts are exported so you can also consume them in your own custom components. This enables you to reuse existing components from your app or component library together with React Aria Components.

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

`TextArea`

`TextAreaContext`

`[TextAreaProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/TextArea.tsx:TextAreaProps)`

`[HTMLTextAreaElement](https://developer.mozilla.org/docs/Web/API/HTMLTextAreaElement)`

`Text`

`TextContext`

`[TextProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Text.tsx:TextProps)`

`[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)`

This example consumes from `LabelContext` in an existing styled label component to make it compatible with React Aria Components. The `[useContextProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:useContextProps)` hook merges the local props and ref with the ones provided via context by TextField.

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

Now you can use `MyCustomLabel` within a `TextField`, in place of the builtin React Aria Components `Label`.

```
<TextField>
  <MyCustomLabel>Name</MyCustomLabel>  <Input />
</TextField>
```

```
<TextField>
  <MyCustomLabel>Name</MyCustomLabel>  <Input />
</TextField>
```

```
<TextField>
  <MyCustomLabel>
    Name
  </MyCustomLabel>  <Input />
</TextField>
```

If you need to customize things even further, such as accessing internal state or intercepting events, you can drop down to the lower level Hook-based API. See [useTextField](https://react-spectrum.adobe.com/react-aria/useTextField.html) for more details.