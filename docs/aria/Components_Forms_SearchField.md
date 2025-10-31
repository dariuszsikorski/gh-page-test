# SearchField

**Source**: [https://react-spectrum.adobe.com/react-aria/SearchField.html](https://react-spectrum.adobe.com/react-aria/SearchField.html)

> Documentation for SearchField in the React Aria package.

---

A search field allows a user to enter and clear a search query.

* * *

```
import {SearchField, Label, Input, Button} from 'react-aria-components';
import {X} from 'lucide-react';

<SearchField>
  <Label>Search</Label>
  <Input />
  <Button><X size={14} /></Button>
</SearchField>
```

```
import {
  Button,
  Input,
  Label,
  SearchField
} from 'react-aria-components';
import {X} from 'lucide-react';

<SearchField>
  <Label>Search</Label>
  <Input />
  <Button>
    <X size={14} />
  </Button>
</SearchField>
```

```
import {
  Button,
  Input,
  Label,
  SearchField
} from 'react-aria-components';
import {X} from 'lucide-react';

<SearchField>
  <Label>Search</Label>
  <Input />
  <Button>
    <X size={14} />
  </Button>
</SearchField>
```

Show CSS

```
@import "@react-aria/example-theme";

.react-aria-SearchField {
  display: grid;
  grid-template-areas: "label label"
                       "input button"
                       "help  help";
  grid-template-columns: 1fr auto;
  align-items: center;
  width: fit-content;
  color: var(--text-color);

  .react-aria-Input {
    grid-area: input;
    width: 100%;
    padding: 0.286rem 1.714rem 0.286rem 0.286rem;
    margin: 0;
    border: 1px solid var(--border-color);
    border-radius: 6px;
    background: var(--field-background);
    font-size: 1.143rem;
    color: var(--field-text-color);
    outline: none;

    &::-webkit-search-cancel-button,
    &::-webkit-search-decoration {
      -webkit-appearance: none;
    }

    &::placeholder {
      color: var(--text-color-placeholder);
      opacity: 1;
    }

    &[data-focused] {
      outline: 2px solid var(--focus-ring-color);
      outline-offset: -1px;
    }
  }

  .react-aria-Button {
    grid-area: button;
    width: 1.143rem;
    height: 1.143rem;
    border-radius: 1.143rem;
    margin-left: -1.429rem;
    font-size: 0.857rem;
    line-height: 0.857rem;
    vertical-align: middle;
    text-align: center;
    background: var(--gray-500);
    color: var(--gray-50);
    border: none;
    padding: 0;

    &[data-pressed] {
      background: var(--gray-600);
    }
  }

  &[data-empty] button {
    display: none;
  }
}
```

```
@import "@react-aria/example-theme";

.react-aria-SearchField {
  display: grid;
  grid-template-areas: "label label"
                       "input button"
                       "help  help";
  grid-template-columns: 1fr auto;
  align-items: center;
  width: fit-content;
  color: var(--text-color);

  .react-aria-Input {
    grid-area: input;
    width: 100%;
    padding: 0.286rem 1.714rem 0.286rem 0.286rem;
    margin: 0;
    border: 1px solid var(--border-color);
    border-radius: 6px;
    background: var(--field-background);
    font-size: 1.143rem;
    color: var(--field-text-color);
    outline: none;

    &::-webkit-search-cancel-button,
    &::-webkit-search-decoration {
      -webkit-appearance: none;
    }

    &::placeholder {
      color: var(--text-color-placeholder);
      opacity: 1;
    }

    &[data-focused] {
      outline: 2px solid var(--focus-ring-color);
      outline-offset: -1px;
    }
  }

  .react-aria-Button {
    grid-area: button;
    width: 1.143rem;
    height: 1.143rem;
    border-radius: 1.143rem;
    margin-left: -1.429rem;
    font-size: 0.857rem;
    line-height: 0.857rem;
    vertical-align: middle;
    text-align: center;
    background: var(--gray-500);
    color: var(--gray-50);
    border: none;
    padding: 0;

    &[data-pressed] {
      background: var(--gray-600);
    }
  }

  &[data-empty] button {
    display: none;
  }
}
```

```
@import "@react-aria/example-theme";

.react-aria-SearchField {
  display: grid;
  grid-template-areas: "label label"
                       "input button"
                       "help  help";
  grid-template-columns: 1fr auto;
  align-items: center;
  width: fit-content;
  color: var(--text-color);

  .react-aria-Input {
    grid-area: input;
    width: 100%;
    padding: 0.286rem 1.714rem 0.286rem 0.286rem;
    margin: 0;
    border: 1px solid var(--border-color);
    border-radius: 6px;
    background: var(--field-background);
    font-size: 1.143rem;
    color: var(--field-text-color);
    outline: none;

    &::-webkit-search-cancel-button,
    &::-webkit-search-decoration {
      -webkit-appearance: none;
    }

    &::placeholder {
      color: var(--text-color-placeholder);
      opacity: 1;
    }

    &[data-focused] {
      outline: 2px solid var(--focus-ring-color);
      outline-offset: -1px;
    }
  }

  .react-aria-Button {
    grid-area: button;
    width: 1.143rem;
    height: 1.143rem;
    border-radius: 1.143rem;
    margin-left: -1.429rem;
    font-size: 0.857rem;
    line-height: 0.857rem;
    vertical-align: middle;
    text-align: center;
    background: var(--gray-500);
    color: var(--gray-50);
    border: none;
    padding: 0;

    &[data-pressed] {
      background: var(--gray-600);
    }
  }

  &[data-empty] button {
    display: none;
  }
}
```

* * *

Search fields can be built with `<input type="search">`, but these can be hard to style consistently cross browser. `SearchField` helps achieve accessible search fields that can be styled as needed.

-   **Clearable** – A custom clear button can be shown to allow the input to be easily reset.
-   **Accessible** – Uses a native `<input type="search">` element, with support for the Enter and Escape keys to submit and clear the field, respectively. Label, description, and error message elements are automatically associated with the field.
-   **Validation** – Support for native HTML constraint validation with customizable UI, custom validation functions, realtime validation, and server-side validation errors.

* * *

Shows a search field component with labels pointing to its parts, including the label, input, and clear button elements.ValueLabelInputLabelClear button

Search fields consist of an input element, a label, and an optional clear button. `SearchField` automatically manages the labeling and relationships between the elements, and handles keyboard events. Users can press the Escape key to clear the search field, or the Enter key to trigger the `onSubmit` event.

`SearchField` also supports optional description and error message elements, which can be used to provide more context about the field, and any validation messages. These are linked with the input via the `aria-describedby` attribute.

```
import {Button, FieldError, Input, Label, SearchField, Text} from 'react-aria-components';

<SearchField>
  <Label />
  <Input />
  <Button />
  <Text slot="description" />
  <FieldError />
</SearchField>
```

```
import {
  Button,
  FieldError,
  Input,
  Label,
  SearchField,
  Text
} from 'react-aria-components';

<SearchField>
  <Label />
  <Input />
  <Button />
  <Text slot="description" />
  <FieldError />
</SearchField>
```

```
import {
  Button,
  FieldError,
  Input,
  Label,
  SearchField,
  Text
} from 'react-aria-components';

<SearchField>
  <Label />
  <Input />
  <Button />
  <Text slot="description" />
  <FieldError />
</SearchField>
```

If there is no visual label, an `aria-label` or `aria-labelledby` prop must be passed instead to identify the element to screen readers.

`SearchField` makes use of the following concepts:

[

Forms

Validating and submitting form data, and integrating with form libraries.

](https://react-spectrum.adobe.com/react-aria/forms.html)

A `SearchField` uses the following components, which may also be used standalone or reused in other components.

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

If you will use a SearchField in multiple places in your app, you can wrap all of the pieces into a reusable component. This way, the DOM structure, styling code, and other logic are defined in a single place and reused everywhere to ensure consistency.

This example wraps `SearchField` and all of its children together into a single component which accepts a `label` prop, which is passed to the right place. It also shows how to use the `description` slot to render [help text](#description), and `FieldError` component to render [validation errors](#validation).

```
import type {SearchFieldProps, ValidationResult} from 'react-aria-components';
import {FieldError, Text} from 'react-aria-components';

interface MySearchFieldProps extends SearchFieldProps {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  placeholder?: string;
}

export function MySearchField(
  { label, description, errorMessage, placeholder, ...props }:
    MySearchFieldProps
) {
  return (
    <SearchField {...props}>
      {label && <Label>{label}</Label>}
      <Input placeholder={placeholder} />
      <Button>
        <X size={14} />
      </Button>
      {description && <Text slot="description">{description}</Text>}
      <FieldError>{errorMessage}</FieldError>
    </SearchField>
  );
}

<MySearchField label="Search" />
```

```
import type {
  SearchFieldProps,
  ValidationResult
} from 'react-aria-components';
import {FieldError, Text} from 'react-aria-components';

interface MySearchFieldProps extends SearchFieldProps {
  label?: string;
  description?: string;
  errorMessage?:
    | string
    | ((validation: ValidationResult) => string);
  placeholder?: string;
}

export function MySearchField(
  {
    label,
    description,
    errorMessage,
    placeholder,
    ...props
  }: MySearchFieldProps
) {
  return (
    <SearchField {...props}>
      {label && <Label>{label}</Label>}
      <Input placeholder={placeholder} />
      <Button>
        <X size={14} />
      </Button>
      {description && (
        <Text slot="description">{description}</Text>
      )}
      <FieldError>{errorMessage}</FieldError>
    </SearchField>
  );
}

<MySearchField label="Search" />
```

```
import type {
  SearchFieldProps,
  ValidationResult
} from 'react-aria-components';
import {
  FieldError,
  Text
} from 'react-aria-components';

interface MySearchFieldProps
  extends
    SearchFieldProps {
  label?: string;
  description?: string;
  errorMessage?:
    | string
    | ((
      validation:
        ValidationResult
    ) => string);
  placeholder?: string;
}

export function MySearchField(
  {
    label,
    description,
    errorMessage,
    placeholder,
    ...props
  }: MySearchFieldProps
) {
  return (
    <SearchField
      {...props}
    >
      {label && (
        <Label>
          {label}
        </Label>
      )}
      <Input
        placeholder={placeholder}
      />
      <Button>
        <X size={14} />
      </Button>
      {description && (
        <Text slot="description">
          {description}
        </Text>
      )}
      <FieldError>
        {errorMessage}
      </FieldError>
    </SearchField>
  );
}

<MySearchField label="Search" />
```

* * *

A SearchField's `value` is empty by default, but an initial, uncontrolled, value can be provided using the `defaultValue` prop.

```
<MySearchField
  label="Search"
  defaultValue="Puppies" />
```

```
<MySearchField
  label="Search"
  defaultValue="Puppies" />
```

```
<MySearchField
  label="Search"
  defaultValue="Puppies"
/>
```

The `value` prop can be used to make the value controlled. The `onChange` event is fired when the user edits the text, and receives the new value.

```
function Example() {
  let [text, setText] = React.useState('');

  return (
    <>
      <MySearchField label="Search" onChange={setText} />
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
      <MySearchField label="Search" onChange={setText} />
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
      <MySearchField
        label="Search"
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

SearchField supports the `name` prop for integration with HTML forms. In addition, attributes such as `type`, `pattern`, `inputMode`, and others are passed through to the underlying `<input>` element.

```
<MySearchField label="Email" name="email" type="email" />
```

```
<MySearchField label="Email" name="email" type="email" />
```

```
<MySearchField
  label="Email"
  name="email"
  type="email"
/>
```

* * *

The most commonly used handlers for events in SearchField are the:

-   `onChange` prop which is triggered whenever the value is edited by the user.
-   `onSubmit` prop which is triggered whenever the value is submitted by the user (e.g. by pressing Enter).
-   `onClear` prop which is triggered whenever the value is cleared by the user (e.g. by pressing clear button or Escape key).

The example below uses `onChange`, `onSubmit`, and `onClear` to update two separate elements with the text entered into the SearchField.

```
function Example() {
  let [currentText, setCurrentText] = React.useState('');
  let [submittedText, setSubmittedText] = React.useState('');

  return (
    <div>
      <MySearchField
        onClear={() => setCurrentText('')}
        onChange={setCurrentText}
        onSubmit={setSubmittedText}
        label="Your text"
        value={currentText}
      />
      <p>Mirrored text: {currentText}</p>
      <p>Submitted text: {submittedText}</p>
    </div>
  );
}
```

```
function Example() {
  let [currentText, setCurrentText] = React.useState('');
  let [submittedText, setSubmittedText] = React.useState(
    ''
  );

  return (
    <div>
      <MySearchField
        onClear={() => setCurrentText('')}
        onChange={setCurrentText}
        onSubmit={setSubmittedText}
        label="Your text"
        value={currentText}
      />
      <p>Mirrored text: {currentText}</p>
      <p>Submitted text: {submittedText}</p>
    </div>
  );
}
```

```
function Example() {
  let [
    currentText,
    setCurrentText
  ] = React.useState('');
  let [
    submittedText,
    setSubmittedText
  ] = React.useState('');

  return (
    <div>
      <MySearchField
        onClear={() =>
          setCurrentText(
            ''
          )}
        onChange={setCurrentText}
        onSubmit={setSubmittedText}
        label="Your text"
        value={currentText}
      />
      <p>
        Mirrored text:
        {' '}
        {currentText}
      </p>
      <p>
        Submitted text:
        {' '}
        {submittedText}
      </p>
    </div>
  );
}
```

* * *

SearchField supports HTML constraint validation props such as `isRequired`, `minLength`, and `pattern`, as well as custom validation functions, realtime validation, and server-side validation. It can also be integrated with other form libraries. See the [Forms](https://react-spectrum.adobe.com/react-aria/forms.html) guide to learn more.

To display validation errors, add a `<FieldError>` element as a child of the SearchField. This allows you to render error messages from all of the above sources with consistent custom styles.

```
import {Form, FieldError} from 'react-aria-components';

<Form>
  <SearchField name="search" isRequired>    <Label>Search</Label>
    <Input />
    <Button><X size={14} /></Button>
    <FieldError />  </SearchField>
  <Button type="submit">Submit</Button>
</Form>
```

```
import {Form, FieldError} from 'react-aria-components';

<Form>
  <SearchField name="search" isRequired>    <Label>Search</Label>
    <Input />
    <Button><X size={14} /></Button>
    <FieldError />  </SearchField>
  <Button type="submit">Submit</Button>
</Form>
```

```
import {
  FieldError,
  Form
} from 'react-aria-components';

<Form>
  <SearchField
    name="search"
    isRequired
  >    <Label>
      Search
    </Label>
    <Input />
    <Button>
      <X size={14} />
    </Button>
    <FieldError />  </SearchField>
  <Button type="submit">
    Submit
  </Button>
</Form>
```

Show CSS

```
.react-aria-SearchField {
  .react-aria-Input{
    &[data-invalid] {
      border-color: var(--invalid-color);
    }
  }

  .react-aria-FieldError {
    grid-area: help;
    font-size: 12px;
    color: var(--invalid-color);
  }
}
```

```
.react-aria-SearchField {
  .react-aria-Input{
    &[data-invalid] {
      border-color: var(--invalid-color);
    }
  }

  .react-aria-FieldError {
    grid-area: help;
    font-size: 12px;
    color: var(--invalid-color);
  }
}
```

```
.react-aria-SearchField {
  .react-aria-Input{
    &[data-invalid] {
      border-color: var(--invalid-color);
    }
  }

  .react-aria-FieldError {
    grid-area: help;
    font-size: 12px;
    color: var(--invalid-color);
  }
}
```

By default, `FieldError` displays default validation messages provided by the browser. See [Customizing error messages](https://react-spectrum.adobe.com/react-aria/forms.html#customizing-error-messages) in the Forms guide to learn how to provide your own custom errors.

The `description` slot can be used to associate additional help text with a search field.

```
<SearchField>
  <Label>Email</Label>
  <Input />
  <Button>
    <X size={14} />
  </Button>
  <Text slot="description">
    Enter an email for us to contact you about your order.
  </Text></SearchField>
```

```
<SearchField>
  <Label>Email</Label>
  <Input />
  <Button>
    <X size={14} />
  </Button>
  <Text slot="description">
    Enter an email for us to contact you about your order.
  </Text></SearchField>
```

```
<SearchField>
  <Label>Email</Label>
  <Input />
  <Button>
    <X size={14} />
  </Button>
  <Text slot="description">
    Enter an email for
    us to contact you
    about your order.
  </Text></SearchField>
```

Show CSS

```
.react-aria-SearchField {
  [slot=description] {
    grid-area: help;
    font-size: 12px;
  }
}
```

```
.react-aria-SearchField {
  [slot=description] {
    grid-area: help;
    font-size: 12px;
  }
}
```

```
.react-aria-SearchField {
  [slot=description] {
    grid-area: help;
    font-size: 12px;
  }
}
```

* * *

A SearchField can be disabled using the `isDisabled` prop.

```
<MySearchField label="Email" isDisabled />
```

```
<MySearchField label="Email" isDisabled />
```

```
<MySearchField
  label="Email"
  isDisabled
/>
```

Show CSS

```
.react-aria-SearchField {
  .react-aria-Input {
    &[data-disabled] {
      border-color: var(--border-color-disabled);
      color: var(--text-color-disabled);
    }
  }
}
```

```
.react-aria-SearchField {
  .react-aria-Input {
    &[data-disabled] {
      border-color: var(--border-color-disabled);
      color: var(--text-color-disabled);
    }
  }
}
```

```
.react-aria-SearchField {
  .react-aria-Input {
    &[data-disabled] {
      border-color: var(--border-color-disabled);
      color: var(--text-color-disabled);
    }
  }
}
```

The `isReadOnly` boolean prop makes the SearchField's text content immutable. Unlike `isDisabled`, the SearchField remains focusable and the contents can still be copied. See [the MDN docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly) for more information.

```
<MySearchField label="Email" defaultValue="abc@adobe.com" isReadOnly />
```

```
<MySearchField
  label="Email"
  defaultValue="abc@adobe.com"
  isReadOnly
/>
```

```
<MySearchField
  label="Email"
  defaultValue="abc@adobe.com"
  isReadOnly
/>
```

* * *

Name

Type

Default

Description

`enterKeyHint`

`'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send'`

—

An enumerated attribute that defines what action label or icon to preset for the enter key on virtual keyboards. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/enterkeyhint).

`type`

`'text' | 'search' | 'url' | 'tel' | 'email' | 'password' | [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) &  & {}`

`'search'`

The type of input to render. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdeftype).

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

`[ChildrenOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ChildrenOrFunction)<[SearchFieldRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/SearchField.tsx:SearchFieldRenderProps)>`

—

The children of the component. A function may be provided to alter the children based on component state.

`className`

`[ClassNameOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ClassNameOrFunction)<[SearchFieldRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/SearchField.tsx:SearchFieldRenderProps)>`

—

The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.

`style`

`[StyleOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:StyleOrFunction)<[SearchFieldRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/SearchField.tsx:SearchFieldRenderProps)>`

—

The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.

Events

Name

Type

Description

`onSubmit`

`( (value: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) )) => void`

Handler that is called when the SearchField is submitted.

`onClear`

`() => void`

Handler that is called when the clear button is pressed.

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

A `<Button>` accepts its contents as `children`. Other props such as `onPress` and `isDisabled` will be set by the `SearchField`.

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
.react-aria-SearchField {
  /* ... */
}
```

```
.react-aria-SearchField {
  /* ... */
}
```

```
.react-aria-SearchField {
  /* ... */
}
```

A custom `className` can also be specified on any component. This overrides the default `className` provided by React Aria with your own.

```
<SearchField className="my-searchfield">
  {/* ... */}
</SearchField>
```

```
<SearchField className="my-searchfield">
  {/* ... */}
</SearchField>
```

```
<SearchField className="my-searchfield">
  {/* ... */}
</SearchField>
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

Render props may also be used as children to alter what elements are rendered based on the current state. For example, you could render the clear button only when the input is non-empty.

```
<SearchField>
  {({state}) => (
    <>
      <Label>Search</Label>
      <Input />
      {state.value !== '' && <Button><X size={14} /></Button>}
    </>
  )}
</SearchField>
```

```
<SearchField>
  {({ state }) => (
    <>
      <Label>Search</Label>
      <Input />
      {state.value !== '' && (
        <Button>
          <X size={14} />
        </Button>
      )}
    </>
  )}
</SearchField>
```

```
<SearchField>
  {({ state }) => (
    <>
      <Label>
        Search
      </Label>
      <Input />
      {state.value !==
          '' && (
        <Button>
          <X
            size={14}
          />
        </Button>
      )}
    </>
  )}
</SearchField>
```

The states, selectors, and render props for each component used in a `SearchField` are documented below.

A `SearchField` can be targeted with the `.react-aria-SearchField` CSS selector, or by overriding with a custom `className`. It supports the following states:

Name

CSS Selector

Description

`isEmpty`

`[data-empty]`

Whether the search field is empty.

`isDisabled`

`[data-disabled]`

Whether the search field is disabled.

`isInvalid`

`[data-invalid]`

Whether the search field is invalid.

`state`

`—`

State of the search field.

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

A [Button](https://react-spectrum.adobe.com/react-aria/Button.html) can be targeted with the `.react-aria-Button` CSS selector, or by overriding with a custom `className`. It supports the following states:

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

The help text elements within a `SearchField` can be targeted with the `[slot=description]` and `[slot=errorMessage]` CSS selectors, or by adding a custom `className`.

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

If you need to customize one of the components within a `SearchField`, such as `Label` or `Input`, in many cases you can create a wrapper component. This lets you customize the props passed to the component.

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

`SearchField`

`SearchFieldContext`

`[SearchFieldProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/SearchField.tsx:SearchFieldProps)`

`[HTMLDivElement](https://developer.mozilla.org/docs/Web/API/HTMLDivElement)`

This example shows a `FieldGroup` component that renders a group of search fields with a title. The entire group can be marked as disabled via the `isDisabled` prop, which is passed to all child search fields via the `SearchFieldContext` provider.

```
import {SearchFieldContext} from 'react-aria-components';

interface FieldGroupProps {
  title?: string,
  children?: React.ReactNode,
  isDisabled?: boolean
}

function FieldGroup({title, children, isDisabled}: FieldGroupProps) {
  return (
    <fieldset>
      <legend>{title}</legend>
      <SearchFieldContext.Provider value={{isDisabled}}>        {children}
      </SearchFieldContext.Provider>
    </fieldset>
  );
}

<FieldGroup title="Filters" isDisabled>
  <MySearchField label="Name" defaultValue="Devon" />
  <MySearchField label="Email" defaultValue="devon@example.com" />
</FieldGroup>
```

```
import {SearchFieldContext} from 'react-aria-components';

interface FieldGroupProps {
  title?: string;
  children?: React.ReactNode;
  isDisabled?: boolean;
}

function FieldGroup(
  { title, children, isDisabled }: FieldGroupProps
) {
  return (
    <fieldset>
      <legend>{title}</legend>
      <SearchFieldContext.Provider value={{ isDisabled }}>        {children}
      </SearchFieldContext.Provider>
    </fieldset>
  );
}

<FieldGroup title="Filters" isDisabled>
  <MySearchField label="Name" defaultValue="Devon" />
  <MySearchField
    label="Email"
    defaultValue="devon@example.com"
  />
</FieldGroup>
```

```
import {SearchFieldContext} from 'react-aria-components';

interface FieldGroupProps {
  title?: string;
  children?:
    React.ReactNode;
  isDisabled?: boolean;
}

function FieldGroup(
  {
    title,
    children,
    isDisabled
  }: FieldGroupProps
) {
  return (
    <fieldset>
      <legend>
        {title}
      </legend>
      <SearchFieldContext.Provider
        value={{
          isDisabled
        }}
      >        {children}
      </SearchFieldContext.Provider>
    </fieldset>
  );
}

<FieldGroup
  title="Filters"
  isDisabled
>
  <MySearchField
    label="Name"
    defaultValue="Devon"
  />
  <MySearchField
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

SearchField passes props to its child components, such as the label and input, via their associated contexts. These contexts are exported so you can also consume them in your own custom components. This enables you to reuse existing components from your app or component library together with React Aria Components.

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

`Button`

`ButtonContext`

`[ButtonProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Button.tsx:ButtonProps)`

`[HTMLButtonElement](https://developer.mozilla.org/docs/Web/API/HTMLButtonElement)`

`Text`

`TextContext`

`[TextProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Text.tsx:TextProps)`

`[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)`

This example consumes from `LabelContext` in an existing styled label component to make it compatible with React Aria Components. The `[useContextProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:useContextProps)` hook merges the local props and ref with the ones provided via context by SearchField.

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

Now you can use `MyCustomLabel` within a `SearchField`, in place of the builtin React Aria Components `Label`.

```
<SearchField>
  <MyCustomLabel>Name</MyCustomLabel>  <Input />
</SearchField>
```

```
<SearchField>
  <MyCustomLabel>Name</MyCustomLabel>  <Input />
</SearchField>
```

```
<SearchField>
  <MyCustomLabel>
    Name
  </MyCustomLabel>  <Input />
</SearchField>
```

If you need to customize things even further, such as accessing internal state or customizing DOM structure, you can drop down to the lower level Hook-based API. See [useSearchField](https://react-spectrum.adobe.com/react-aria/useSearchField.html) for more details.