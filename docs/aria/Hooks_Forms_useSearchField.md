# useSearchField

**Source**: [https://react-spectrum.adobe.com/react-aria/useSearchField.html](https://react-spectrum.adobe.com/react-aria/useSearchField.html)

> Documentation for useSearchField in the React Aria package.

---

Provides the behavior and accessibility implementation for a search field.

* * *

`useSearchField( props: [AriaSearchFieldProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/searchfield/src/index.d.ts:AriaSearchFieldProps), state: [SearchFieldState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/searchfield/src/useSearchFieldState.ts:SearchFieldState), inputRef: [RefObject](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/refs.d.ts:RefObject)<[HTMLInputElement](https://developer.mozilla.org/docs/Web/API/HTMLInputElement) |  | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)> ): [SearchFieldAria](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/searchfield/src/useSearchField.ts:SearchFieldAria)`

* * *

Search fields can be built with `<input type="search">`, but these can be hard to style consistently cross browser. `useSearchField` helps achieve accessible search fields that can be styled as needed.

-   Built with a native `<input type="search">` element
-   Visual and ARIA labeling support
-   Keyboard submit handling via the Enter key
-   Keyboard support for clearing the search field with the Escape key
-   Custom clear button support with internationalized label for accessibility
-   Support for native HTML constraint validation with customizable UI, custom validation functions, realtime validation, and server-side validation errors

* * *

Shows a search field component with labels pointing to its parts, including the label, input, and clear button elements.ValueLabelInputLabelClear button

Search fields consist of an input element, a label, and an optional clear button. `useSearchField` automatically manages the labeling and relationships between the elements, and handles keyboard events. Users can press the Escape key to clear the search field, or the Enter key to trigger the `onSubmit` event.

`useSearchField` also supports optional description and error message elements, which can be used to provide more context about the field, and any validation messages. These are linked with the input via the `aria-describedby` attribute.

`useSearchField` returns props that you should spread onto the appropriate elements:

Name

Type

Description

`labelProps`

`[LabelHTMLAttributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label#attributes)<[HTMLLabelElement](https://developer.mozilla.org/docs/Web/API/HTMLLabelElement)>`

Props for the text field's visible label element (if any).

`inputProps`

`[InputHTMLAttributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes)<[HTMLInputElement](https://developer.mozilla.org/docs/Web/API/HTMLInputElement)>`

Props for the input element.

`clearButtonProps`

`[AriaButtonProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/button/src/index.d.ts:AriaButtonProps)`

Props for the clear button.

`descriptionProps`

`[DOMAttributes](https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes)`

Props for the searchfield's description element, if any.

`errorMessageProps`

`[DOMAttributes](https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes)`

Props for the searchfield's error message element, if any.

`isInvalid`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether the input value is invalid.

`validationErrors`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)[]`

The current error messages for the input if it is invalid, otherwise an empty array.

`validationDetails`

`ValidityState`

The native validation details for the input.

State is managed by the `[useSearchFieldState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/searchfield/src/useSearchFieldState.ts:useSearchFieldState)` hook in `@react-stately/searchfield`. The state object should be passed as an option to `useSearchField`.

If there is no visual label, an `aria-label` or `aria-labelledby` prop must be passed instead to identify the element to screen readers.

* * *

**Note**: This example does not show the optional description or error message elements. See [useTextField](https://react-spectrum.adobe.com/react-aria/useTextField.html) for an example of that.

```
import {useSearchFieldState} from 'react-stately';
import {useSearchField} from 'react-aria';

function SearchField(props) {
  let { label } = props;
  let state = useSearchFieldState(props);
  let ref = React.useRef(null);
  let { labelProps, inputProps } = useSearchField(props, state, ref);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: 200 }}>
      <label {...labelProps}>{label}</label>
      <input {...inputProps} ref={ref} />
    </div>
  );
}

<SearchField
  label="Search"
  onSubmit={(text) => alert(text)}
/>
```

```
import {useSearchFieldState} from 'react-stately';
import {useSearchField} from 'react-aria';

function SearchField(props) {
  let { label } = props;
  let state = useSearchFieldState(props);
  let ref = React.useRef(null);
  let { labelProps, inputProps } = useSearchField(
    props,
    state,
    ref
  );

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: 200
      }}
    >
      <label {...labelProps}>{label}</label>
      <input {...inputProps} ref={ref} />
    </div>
  );
}

<SearchField
  label="Search"
  onSubmit={(text) => alert(text)}
/>
```

```
import {useSearchFieldState} from 'react-stately';
import {useSearchField} from 'react-aria';

function SearchField(
  props
) {
  let { label } = props;
  let state =
    useSearchFieldState(
      props
    );
  let ref = React.useRef(
    null
  );
  let {
    labelProps,
    inputProps
  } = useSearchField(
    props,
    state,
    ref
  );

  return (
    <div
      style={{
        display: 'flex',
        flexDirection:
          'column',
        width: 200
      }}
    >
      <label
        {...labelProps}
      >
        {label}
      </label>
      <input
        {...inputProps}
        ref={ref}
      />
    </div>
  );
}

<SearchField
  label="Search"
  onSubmit={(text) =>
    alert(text)}
/>
```

* * *

This example uses CSS to reset the default browser styling for a search field and implement custom styles. It also includes a custom clear button, built with [useButton](https://react-spectrum.adobe.com/react-aria/useButton.html). The `Button` component is independent, and can be shared with many other components.

```
// Reuse the Button from your component library. See below for details.
import {Button} from 'your-component-library';

function SearchField(props) {
  let { label } = props;
  let state = useSearchFieldState(props);
  let ref = React.useRef(null);
  let { labelProps, inputProps, clearButtonProps } = useSearchField(
    props,
    state,
    ref
  );

  return (
    <div className="search-field">
      <label {...labelProps}>{label}</label>
      <div>
        <input {...inputProps} ref={ref} />
        {state.value !== '' &&
          <Button {...clearButtonProps}>❎</Button>}
      </div>
    </div>
  );
}

<SearchField
  label="Search"
  onSubmit={(text) => alert(text)}
/>
```

```
// Reuse the Button from your component library. See below for details.
import {Button} from 'your-component-library';

function SearchField(props) {
  let { label } = props;
  let state = useSearchFieldState(props);
  let ref = React.useRef(null);
  let { labelProps, inputProps, clearButtonProps } =
    useSearchField(props, state, ref);

  return (
    <div className="search-field">
      <label {...labelProps}>{label}</label>
      <div>
        <input {...inputProps} ref={ref} />
        {state.value !== '' &&
          <Button {...clearButtonProps}>❎</Button>}
      </div>
    </div>
  );
}

<SearchField
  label="Search"
  onSubmit={(text) => alert(text)}
/>
```

```
// Reuse the Button from your component library. See below for details.
import {Button} from 'your-component-library';

function SearchField(
  props
) {
  let { label } = props;
  let state =
    useSearchFieldState(
      props
    );
  let ref = React.useRef(
    null
  );
  let {
    labelProps,
    inputProps,
    clearButtonProps
  } = useSearchField(
    props,
    state,
    ref
  );

  return (
    <div className="search-field">
      <label
        {...labelProps}
      >
        {label}
      </label>
      <div>
        <input
          {...inputProps}
          ref={ref}
        />
        {state.value !==
            '' &&
          (
            <Button
              {...clearButtonProps}
            >
              ❎
            </Button>
          )}
      </div>
    </div>
  );
}

<SearchField
  label="Search"
  onSubmit={(text) =>
    alert(text)}
/>
```

Show CSS

```
/* css */
.search-field {
  display: flex;
  flex-direction: column;
}

.search-field div {
  background: slategray;
  padding: 4px 0 4px 4px;
  border-radius: 4px;
  width: 250px;
  display: flex;
}

.search-field input {
  flex: 1;
  color: white;
  font-size: 15px;
  padding: 2px 0;
}

.search-field input, .search-field button {
  -webkit-appearance: none;
  border: none;
  outline: none;
  background: none;
}

.search-field input::-webkit-search-cancel-button,
.search-field input::-webkit-search-decoration {
  -webkit-appearance: none;
}
```

```
/* css */
.search-field {
  display: flex;
  flex-direction: column;
}

.search-field div {
  background: slategray;
  padding: 4px 0 4px 4px;
  border-radius: 4px;
  width: 250px;
  display: flex;
}

.search-field input {
  flex: 1;
  color: white;
  font-size: 15px;
  padding: 2px 0;
}

.search-field input, .search-field button {
  -webkit-appearance: none;
  border: none;
  outline: none;
  background: none;
}

.search-field input::-webkit-search-cancel-button,
.search-field input::-webkit-search-decoration {
  -webkit-appearance: none;
}
```

```
/* css */
.search-field {
  display: flex;
  flex-direction: column;
}

.search-field div {
  background: slategray;
  padding: 4px 0 4px 4px;
  border-radius: 4px;
  width: 250px;
  display: flex;
}

.search-field input {
  flex: 1;
  color: white;
  font-size: 15px;
  padding: 2px 0;
}

.search-field input, .search-field button {
  -webkit-appearance: none;
  border: none;
  outline: none;
  background: none;
}

.search-field input::-webkit-search-cancel-button,
.search-field input::-webkit-search-decoration {
  -webkit-appearance: none;
}
```

The `Button` component is used in the above example to clear the search field. It is built using the [useButton](https://react-spectrum.adobe.com/react-aria/useButton.html) hook, and can be shared with many other components.

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

The following examples show how to use the `SearchField` component created in the above example.

A SearchField's `value` is empty by default, but an initial, uncontrolled, value can be provided using the `defaultValue` prop.

```
<SearchField
  label="Search"
  defaultValue="Puppies" />
```

```
<SearchField
  label="Search"
  defaultValue="Puppies" />
```

```
<SearchField
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
      <SearchField label="Search" onChange={setText} />
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
      <SearchField label="Search" onChange={setText} />
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
      <SearchField
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
      <SearchField
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
      <SearchField
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
      <SearchField
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

A SearchField can be disabled using the `isDisabled` prop.

```
<SearchField label="Email" isDisabled />
```

```
<SearchField label="Email" isDisabled />
```

```
<SearchField
  label="Email"
  isDisabled
/>
```

The `isReadOnly` boolean prop makes the SearchField's text content immutable. Unlike `isDisabled`, the SearchField remains focusable and the contents can still be copied. See [the MDN docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly) for more information.

```
<SearchField label="Email" defaultValue="abc@adobe.com" isReadOnly />
```

```
<SearchField
  label="Email"
  defaultValue="abc@adobe.com"
  isReadOnly
/>
```

```
<SearchField
  label="Email"
  defaultValue="abc@adobe.com"
  isReadOnly
/>
```

SearchField supports the `name` prop for integration with HTML forms. In addition, attributes such as `type`, `pattern`, `inputMode`, and others are passed through to the underlying `<input>` element.

```
<SearchField label="Email" name="email" type="email" />
```

```
<SearchField label="Email" name="email" type="email" />
```

```
<SearchField
  label="Email"
  name="email"
  type="email"
/>
```

* * *

In right-to-left languages, search fields should be mirrored. The label should be right aligned, along with the text in the input. Ensure that your CSS accounts for this.