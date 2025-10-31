# Form

**Source**: [https://react-spectrum.adobe.com/react-aria/Form.html](https://react-spectrum.adobe.com/react-aria/Form.html)

> Documentation for Form in the React Aria package.

---

A form is a group of inputs that allows users to submit data to a server, with support for providing field validation errors.

* * *

```
import {Button, FieldError, Form, Input, Label, TextField} from 'react-aria-components';

<Form>
  <TextField name="email" type="email" isRequired>
    <Label>Email</Label>
    <Input />
    <FieldError />
  </TextField>
  <Button type="submit">Submit</Button>
</Form>
```

```
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField
} from 'react-aria-components';

<Form>
  <TextField name="email" type="email" isRequired>
    <Label>Email</Label>
    <Input />
    <FieldError />
  </TextField>
  <Button type="submit">Submit</Button>
</Form>
```

```
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField
} from 'react-aria-components';

<Form>
  <TextField
    name="email"
    type="email"
    isRequired
  >
    <Label>
      Email
    </Label>
    <Input />
    <FieldError />
  </TextField>
  <Button type="submit">
    Submit
  </Button>
</Form>
```

Show CSS

```
.react-aria-Form {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 8px;
}
```

```
.react-aria-Form {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 8px;
}
```

```
.react-aria-Form {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 8px;
}
```

* * *

The HTML [<form>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form) element can be used to build forms. React Aria's `Form` component extends HTML forms with support for providing server-side validation errors to the fields within it.

-   **Accessible** – Uses a native `<form>` element, with support for ARIA labelling to create a [form landmark](https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/examples/form.html).
-   **Validation** – Support for native HTML constraint validation with customizable UI, custom validation functions, realtime validation, and server-side validation errors.

See the [Forms](https://react-spectrum.adobe.com/react-aria/forms.html) guide to learn more about React Aria's form components, including submitting data, and form validation techniques.

* * *

A form consists of a container element that includes a group of input elements, typically with a button the user can press to submit data to a server. Forms may also include validation error messages, and a button to reset the form data to its initial state.

If a form has an `aria-label` or `aria-labelledby` attribute, it is exposed to assistive technology as a [form landmark](https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/examples/form.html), allowing users to quickly navigate to it.

```
import {Form, Button} from 'react-aria-components';

<Form>
  {/* ... */}
  <Button type="submit" />
  <Button type="reset" />
</Form>
```

```
import {Form, Button} from 'react-aria-components';

<Form>
  {/* ... */}
  <Button type="submit" />
  <Button type="reset" />
</Form>
```

```
import {
  Button,
  Form
} from 'react-aria-components';

<Form>
  {/* ... */}
  <Button type="submit" />
  <Button type="reset" />
</Form>
```

* * *

To help kick-start your project, we offer starter kits that include example implementations of all React Aria components with various styling solutions. All components are fully styled, including support for dark mode, high contrast mode, and all UI states. Each starter comes with a pre-configured [Storybook](https://storybook.js.org/) that you can experiment with, or use as a starting point for your own component library.

* * *

The `onSubmit` event will be triggered when a user submits the form with the Enter key or by pressing a submit button. The `onReset` event will be triggered when a user presses a reset button.

```
function Example() {
  let [action, setAction] = React.useState(null);
  return (
    <Form
      onSubmit={e => {
        e.preventDefault();
        let data = Object.fromEntries(new FormData(e.currentTarget));
        setAction(`submit ${JSON.stringify(data)}`);
      }}
      onReset={() => setAction('reset')}    >
      <TextField name="username" isRequired>
        <Label>Username</Label>
        <Input />
        <FieldError />
      </TextField>
      <TextField name="password" type="password" isRequired>
        <Label>Password</Label>
        <Input />
        <FieldError />
      </TextField>
      <div style={{display: 'flex', gap: 8}}>
        <Button type="submit">Submit</Button>
        <Button type="reset">Reset</Button>      </div>
      {action && <div>Action: <code>{action}</code></div>}
    </Form>
  );
}
```

```
function Example() {
  let [action, setAction] = React.useState(null);
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        let data = Object.fromEntries(
          new FormData(e.currentTarget)
        );
        setAction(`submit ${JSON.stringify(data)}`);
      }}
      onReset={() => setAction('reset')}    >
      <TextField name="username" isRequired>
        <Label>Username</Label>
        <Input />
        <FieldError />
      </TextField>
      <TextField name="password" type="password" isRequired>
        <Label>Password</Label>
        <Input />
        <FieldError />
      </TextField>
      <div style={{ display: 'flex', gap: 8 }}>
        <Button type="submit">Submit</Button>
        <Button type="reset">Reset</Button>      </div>
      {action && (
        <div>
          Action: <code>{action}</code>
        </div>
      )}
    </Form>
  );
}
```

```
function Example() {
  let [
    action,
    setAction
  ] = React.useState(
    null
  );
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        let data = Object
          .fromEntries(
            new FormData(
              e.currentTarget
            )
          );
        setAction(
          `submit ${
            JSON
              .stringify(
                data
              )
          }`
        );
      }}
      onReset={() =>
        setAction(
          'reset'
        )}    >
      <TextField
        name="username"
        isRequired
      >
        <Label>
          Username
        </Label>
        <Input />
        <FieldError />
      </TextField>
      <TextField
        name="password"
        type="password"
        isRequired
      >
        <Label>
          Password
        </Label>
        <Input />
        <FieldError />
      </TextField>
      <div
        style={{
          display:
            'flex',
          gap: 8
        }}
      >
        <Button type="submit">
          Submit
        </Button>
        <Button type="reset">
          Reset
        </Button>      </div>
      {action && (
        <div>
          Action:{' '}
          <code>
            {action}
          </code>
        </div>
      )}
    </Form>
  );
}
```

* * *

React Aria supports native HTML constraint validation with customizable UI, custom validation functions, realtime validation, and integration with server-side validation errors. The `Form` component facilitates server-side validation by providing error messages to the fields within it.

To provide validation errors, the `validationErrors` prop should be set to an object that maps each field's `name` prop to a string or array of strings representing one or more errors. These are displayed to the user as soon as the `validationErrors` prop is set, and cleared after the user modifies each field's value.

```
<Form validationErrors={{username: 'Sorry, this username is taken.'}}>
  <TextField name="username">
    <Label>Username</Label>
    <Input />
    <FieldError />
  </TextField>
</Form>
```

```
<Form
  validationErrors={{
    username: 'Sorry, this username is taken.'
  }}
>
  <TextField name="username">
    <Label>Username</Label>
    <Input />
    <FieldError />
  </TextField>
</Form>
```

```
<Form
  validationErrors={{
    username:
      'Sorry, this username is taken.'
  }}
>
  <TextField name="username">
    <Label>
      Username
    </Label>
    <Input />
    <FieldError />
  </TextField>
</Form>
```

See the [Forms](https://react-spectrum.adobe.com/react-aria/forms.html) guide to learn more about form validation in React Aria, including client-side validation, and integration with other frameworks and libraries.

By default, native HTML form validation is used to display errors and block form submission. To instead use ARIA attributes for form validation, set the `validationBehavior` prop to "aria". This will not block form submission, and will display validation errors to the user in realtime as the value is edited.

The `validationBehavior` can be set at the form level to apply to all fields, or at the field level to override the form's behavior for a specific field.

```
<Form validationBehavior="aria">
  <TextField
    name="username"
    defaultValue="admin"
    isRequired
    validate={value => value === 'admin' ? 'Nice try.' : null}>
    <Label>Username</Label>
    <Input />
    <FieldError />
  </TextField>
  <Button type="submit">Submit</Button>
</Form>
```

```
<Form validationBehavior="aria">
  <TextField
    name="username"
    defaultValue="admin"
    isRequired
    validate={(value) =>
      value === 'admin' ? 'Nice try.' : null}
  >
    <Label>Username</Label>
    <Input />
    <FieldError />
  </TextField>
  <Button type="submit">Submit</Button>
</Form>
```

```
<Form validationBehavior="aria">
  <TextField
    name="username"
    defaultValue="admin"
    isRequired
    validate={(value) =>
      value === 'admin'
        ? 'Nice try.'
        : null}
  >
    <Label>
      Username
    </Label>
    <Input />
    <FieldError />
  </TextField>
  <Button type="submit">
    Submit
  </Button>
</Form>
```

By default, after a user submits a form with validation errors, the first invalid field will be focused. You can prevent this by calling `preventDefault` during the `onInvalid` event, and move focus yourself. This example shows how to move focus to an [alert](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/alert_role) element at the top of a form.

```
function Example() {
  let [isInvalid, setInvalid] = React.useState(false);

  return (
    <Form
      onInvalid={e => {
        e.preventDefault();
        setInvalid(true);
      }}      onSubmit={e => {
        e.preventDefault();
        setInvalid(false);
      }}
      onReset={() => setInvalid(false)}>
      {isInvalid &&
        <div role="alert" tabIndex={-1} ref={e => e?.focus()}>          <h3>Unable to submit</h3>
          <p>Please fix the validation errors below, and re-submit the form.</p>
        </div>
      }
      <TextField name="firstName" isRequired>
        <Label>First Name</Label>
        <Input />
        <FieldError />
      </TextField>
      <TextField name="lastName" isRequired>
        <Label>Last Name</Label>
        <Input />
        <FieldError />
      </TextField>
      <div style={{display: 'flex', gap: 8}}>
        <Button type="submit">Submit</Button>
        <Button type="reset">Reset</Button>
      </div>
    </Form>
  );
}
```

```
function Example() {
  let [isInvalid, setInvalid] = React.useState(false);

  return (
    <Form
      onInvalid={(e) => {
        e.preventDefault();
        setInvalid(true);
      }}      onSubmit={(e) => {
        e.preventDefault();
        setInvalid(false);
      }}
      onReset={() => setInvalid(false)}
    >
      {isInvalid &&
        <div
          role="alert"
          tabIndex={-1}
          ref={(e) => e?.focus()}
        >          <h3>Unable to submit</h3>
          <p>
            Please fix the validation errors below, and
            re-submit the form.
          </p>
        </div>}
      <TextField name="firstName" isRequired>
        <Label>First Name</Label>
        <Input />
        <FieldError />
      </TextField>
      <TextField name="lastName" isRequired>
        <Label>Last Name</Label>
        <Input />
        <FieldError />
      </TextField>
      <div style={{ display: 'flex', gap: 8 }}>
        <Button type="submit">Submit</Button>
        <Button type="reset">Reset</Button>
      </div>
    </Form>
  );
}
```

```
function Example() {
  let [
    isInvalid,
    setInvalid
  ] = React.useState(
    false
  );

  return (
    <Form
      onInvalid={(e) => {
        e.preventDefault();
        setInvalid(true);
      }}      onSubmit={(e) => {
        e.preventDefault();
        setInvalid(
          false
        );
      }}
      onReset={() =>
        setInvalid(
          false
        )}
    >
      {isInvalid &&
        <div
          role="alert"
          tabIndex={-1}
          ref={(e) =>
            e?.focus()}
        >          <h3>
            Unable to
            submit
          </h3>
          <p>
            Please fix
            the
            validation
            errors below,
            and re-submit
            the form.
          </p>
        </div>}
      <TextField
        name="firstName"
        isRequired
      >
        <Label>
          First Name
        </Label>
        <Input />
        <FieldError />
      </TextField>
      <TextField
        name="lastName"
        isRequired
      >
        <Label>
          Last Name
        </Label>
        <Input />
        <FieldError />
      </TextField>
      <div
        style={{
          display:
            'flex',
          gap: 8
        }}
      >
        <Button type="submit">
          Submit
        </Button>
        <Button type="reset">
          Reset
        </Button>
      </div>
    </Form>
  );
}
```

Show CSS

```
.react-aria-Form [role=alert] {
  border: 2px solid var(--invalid-color);
  background: var(--overlay-background);
  border-radius: 6px;
  padding: 12px;
  max-width: 250px;
  outline: none;

  &:focus-visible {
    outline: 2px solid var(--focus-ring-color);
    outline-offset: 2px;
  }

  h3 {
    margin-top: 0;
  }

  p {
    margin-bottom: 0;
  }
}
```

```
.react-aria-Form [role=alert] {
  border: 2px solid var(--invalid-color);
  background: var(--overlay-background);
  border-radius: 6px;
  padding: 12px;
  max-width: 250px;
  outline: none;

  &:focus-visible {
    outline: 2px solid var(--focus-ring-color);
    outline-offset: 2px;
  }

  h3 {
    margin-top: 0;
  }

  p {
    margin-bottom: 0;
  }
}
```

```
.react-aria-Form [role=alert] {
  border: 2px solid var(--invalid-color);
  background: var(--overlay-background);
  border-radius: 6px;
  padding: 12px;
  max-width: 250px;
  outline: none;

  &:focus-visible {
    outline: 2px solid var(--focus-ring-color);
    outline-offset: 2px;
  }

  h3 {
    margin-top: 0;
  }

  p {
    margin-bottom: 0;
  }
}
```

* * *

Name

Type

Default

Description

`validationBehavior`

`'aria' | 'native'`

`'native'`

Whether to use native HTML form validation to prevent form submission when a field value is missing or invalid, or mark fields as required or invalid via ARIA.

`validationErrors`

`[ValidationErrors](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/inputs.d.ts:ValidationErrors)`

—

Validation errors for the form, typically returned by a server. This should be set to an object mapping from input names to errors.

`action`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) | FormHTMLAttributes<[HTMLFormElement](https://developer.mozilla.org/docs/Web/API/HTMLFormElement)>['action']`

—

Where to send the form-data when the form is submitted. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#action).

`encType`

`'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain'`

—

The enctype attribute specifies how the form-data should be encoded when submitting it to the server. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#enctype).

`method`

`'get' | 'post' | 'dialog'`

—

The HTTP method to submit the form with. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#method).

`target`

`'_blank' | '_self' | '_parent' | '_top'`

—

The target attribute specifies a name or a keyword that indicates where to display the response that is received after submitting the form. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#target).

`autoComplete`

`'off' | 'on'`

—

Indicates whether input elements can by default have their values automatically completed by the browser. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#autocomplete).

`autoCapitalize`

`'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters'`

—

Controls whether inputted text is automatically capitalized and, if so, in what manner. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autocapitalize).

`children`

`[ReactNode](https://reactjs.org/docs/rendering-elements.html)`

—

The children of the component.

`className`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element.

`style`

`[CSSProperties](https://reactjs.org/docs/dom-elements.html#style)`

—

The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element.

Events

Name

Type

Description

`onSubmit`

`( (event: FormEvent<[HTMLFormElement](https://developer.mozilla.org/docs/Web/API/HTMLFormElement)> )) => void`

Triggered when a user submits the form.

`onReset`

`( (event: FormEvent<[HTMLFormElement](https://developer.mozilla.org/docs/Web/API/HTMLFormElement)> )) => void`

Triggered when a user resets the form.

`onInvalid`

`( (event: FormEvent<[HTMLFormElement](https://developer.mozilla.org/docs/Web/API/HTMLFormElement)> )) => void`

Triggered for each invalid field when a user submits the form.

PositioningAccessibility

Name

Type

Description

`role`

`'search' | 'presentation'`

An ARIA role override to apply to the form element.

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
.react-aria-Form {
  /* ... */
}
```

```
.react-aria-Form {
  /* ... */
}
```

```
.react-aria-Form {
  /* ... */
}
```

A custom `className` can also be specified on any component. This overrides the default `className` provided by React Aria with your own.

```
<Form className="my-form">
  {/* ... */}
</Form>
```

```
<Form className="my-form">
  {/* ... */}
</Form>
```

```
<Form className="my-form">
  {/* ... */}
</Form>
```

* * *

All React Aria Components export a corresponding context that can be used to send props to them from a parent element. This enables you to build your own compositional APIs similar to those found in React Aria Components itself. You can send any prop or ref via context that you could pass to the corresponding component. The local props and ref on the component are merged with the ones passed via context, with the local props taking precedence (following the rules documented in [mergeProps](https://react-spectrum.adobe.com/react-aria/mergeProps.html)).

Component

Context

Props

Ref

`Form`

`FormContext`

`[FormProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Form.tsx:FormProps)`

`[HTMLFormElement](https://developer.mozilla.org/docs/Web/API/HTMLFormElement)`

This example adds a global form submission handler for all forms rendered inside it, which could be used to centralize logic to submit data to an API.

```
let onSubmit = e => {
  e.preventDefault();
  // Submit form data to an API...
};

<FormContext.Provider value={{onSubmit}}>
  <Form>
    {/* ... */}
  </Form>
</FormContext.Provider>
```

```
let onSubmit = e => {
  e.preventDefault();
  // Submit form data to an API...
};

<FormContext.Provider value={{onSubmit}}>
  <Form>
    {/* ... */}
  </Form>
</FormContext.Provider>
```

```
let onSubmit = (e) => {
  e.preventDefault();
  // Submit form data to an API...
};

<FormContext.Provider
  value={{ onSubmit }}
>
  <Form>
    {/* ... */}
  </Form>
</FormContext.Provider>
```

`FormContext` can also be used within any component inside a form to access props from the nearest ancestor form. For example, to access the current `validationBehavior`, use the [useSlottedContext](https://react-spectrum.adobe.com/react-aria/advanced.html#useslottedcontext) hook.

```
import {FormContext, useSlottedContext} from 'react-aria-components';

function MyFormField() {
  let {validationBehavior} = useSlottedContext(FormContext);
  // ...
}

<Form validationBehavior="aria">
  <MyFormField />
</Form>
```

```
import {
  FormContext,
  useSlottedContext
} from 'react-aria-components';

function MyFormField() {
  let { validationBehavior } = useSlottedContext(
    FormContext
  );
  // ...
}

<Form validationBehavior="aria">
  <MyFormField />
</Form>
```

```
import {
  FormContext,
  useSlottedContext
} from 'react-aria-components';

function MyFormField() {
  let {
    validationBehavior
  } = useSlottedContext(
    FormContext
  );
  // ...
}

<Form validationBehavior="aria">
  <MyFormField />
</Form>
```

The `Form` component provides a value for `FormValidationContext`, which allows child elements to receive validation errors from the form. You can provide a value for this context directly in case you need to customize the form element, or reuse an existing form component.

```
import {FormValidationContext} from 'react-aria-components';

<form>
  <FormValidationContext.Provider
    value={{ username: 'Sorry, this username is taken.' }}
  >
    <TextField name="username">
      <Label>Username</Label>
      <Input />
      <FieldError />
    </TextField>
  </FormValidationContext.Provider>
</form>
```

```
import {FormValidationContext} from 'react-aria-components';

<form>
  <FormValidationContext.Provider
    value={{ username: 'Sorry, this username is taken.' }}
  >
    <TextField name="username">
      <Label>Username</Label>
      <Input />
      <FieldError />
    </TextField>
  </FormValidationContext.Provider>
</form>
```

```
import {FormValidationContext} from 'react-aria-components';

<form>
  <FormValidationContext.Provider
    value={{
      username:
        'Sorry, this username is taken.'
    }}
  >
    <TextField name="username">
      <Label>
        Username
      </Label>
      <Input />
      <FieldError />
    </TextField>
  </FormValidationContext.Provider>
</form>
```

You can also consume `FormValidationContext` in your own custom form input components to receive validation errors. This example shows a native `<select>` that displays validation errors provided by `Form`.

```
import type {SelectHTMLAttributes} from 'react';
import {useContext} from 'react';
import {useId} from 'react-aria';

function NativeSelect(
  props: SelectHTMLAttributes<HTMLSelectElement> & { label: string }
) {
  let errors = useContext(FormValidationContext);
  let error = errors?.[props.name];
  let id = useId();
  let descriptionId = useId();

  return (
    <div className="flex">
      <label htmlFor={id}>{props.label}</label>
      <select {...props} id={id} aria-describedby={descriptionId} />
      <small className="invalid" id={descriptionId}>{error}</small>
    </div>
  );
}

<Form validationErrors={{ frequency: 'Please select a frequency.' }}>
  <NativeSelect label="Frequency" name="frequency">
    <option value="">Select an option...</option>
    <option>Always</option>
    <option>Sometimes</option>
    <option>Never</option>
  </NativeSelect>
</Form>
```

```
import type {SelectHTMLAttributes} from 'react';
import {useContext} from 'react';
import {useId} from 'react-aria';

function NativeSelect(
  props: SelectHTMLAttributes<HTMLSelectElement> & {
    label: string;
  }
) {
  let errors = useContext(FormValidationContext);
  let error = errors?.[props.name];
  let id = useId();
  let descriptionId = useId();

  return (
    <div className="flex">
      <label htmlFor={id}>{props.label}</label>
      <select
        {...props}
        id={id}
        aria-describedby={descriptionId}
      />
      <small className="invalid" id={descriptionId}>
        {error}
      </small>
    </div>
  );
}

<Form
  validationErrors={{
    frequency: 'Please select a frequency.'
  }}
>
  <NativeSelect label="Frequency" name="frequency">
    <option value="">Select an option...</option>
    <option>Always</option>
    <option>Sometimes</option>
    <option>Never</option>
  </NativeSelect>
</Form>
```

```
import type {SelectHTMLAttributes} from 'react';
import {useContext} from 'react';
import {useId} from 'react-aria';

function NativeSelect(
  props:
    & SelectHTMLAttributes<
      HTMLSelectElement
    >
    & { label: string }
) {
  let errors =
    useContext(
      FormValidationContext
    );
  let error = errors
    ?.[props.name];
  let id = useId();
  let descriptionId =
    useId();

  return (
    <div className="flex">
      <label
        htmlFor={id}
      >
        {props.label}
      </label>
      <select
        {...props}
        id={id}
        aria-describedby={descriptionId}
      />
      <small
        className="invalid"
        id={descriptionId}
      >
        {error}
      </small>
    </div>
  );
}

<Form
  validationErrors={{
    frequency:
      'Please select a frequency.'
  }}
>
  <NativeSelect
    label="Frequency"
    name="frequency"
  >
    <option value="">
      Select an
      option...
    </option>
    <option>
      Always
    </option>
    <option>
      Sometimes
    </option>
    <option>
      Never
    </option>
  </NativeSelect>
</Form>
```