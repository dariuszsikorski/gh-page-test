# CheckboxGroup

**Source**: [https://react-spectrum.adobe.com/react-aria/CheckboxGroup.html](https://react-spectrum.adobe.com/react-aria/CheckboxGroup.html)

> Documentation for CheckboxGroup in the React Aria package.

---

A checkbox group allows a user to select multiple items from a list of options.

* * *

```
import {CheckboxGroup, Checkbox, Label} from 'react-aria-components';

<CheckboxGroup>
  <Label>Favorite sports</Label>
  <Checkbox value="soccer">
    <div className="checkbox" aria-hidden="true">
      <svg viewBox="0 0 18 18"><polyline points="1 9 7 14 15 4" /></svg>
    </div>
    Soccer
  </Checkbox>
  <Checkbox value="baseball">
    <div className="checkbox" aria-hidden="true">
      <svg viewBox="0 0 18 18"><polyline points="1 9 7 14 15 4" /></svg>
    </div>
    Baseball
  </Checkbox>
  <Checkbox value="basketball">
    <div className="checkbox" aria-hidden="true">
      <svg viewBox="0 0 18 18"><polyline points="1 9 7 14 15 4" /></svg>
    </div>
    Basketball
  </Checkbox>
</CheckboxGroup>
```

```
import {
  Checkbox,
  CheckboxGroup,
  Label
} from 'react-aria-components';

<CheckboxGroup>
  <Label>Favorite sports</Label>
  <Checkbox value="soccer">
    <div className="checkbox" aria-hidden="true">
      <svg viewBox="0 0 18 18">
        <polyline points="1 9 7 14 15 4" />
      </svg>
    </div>
    Soccer
  </Checkbox>
  <Checkbox value="baseball">
    <div className="checkbox" aria-hidden="true">
      <svg viewBox="0 0 18 18">
        <polyline points="1 9 7 14 15 4" />
      </svg>
    </div>
    Baseball
  </Checkbox>
  <Checkbox value="basketball">
    <div className="checkbox" aria-hidden="true">
      <svg viewBox="0 0 18 18">
        <polyline points="1 9 7 14 15 4" />
      </svg>
    </div>
    Basketball
  </Checkbox>
</CheckboxGroup>
```

```
import {
  Checkbox,
  CheckboxGroup,
  Label
} from 'react-aria-components';

<CheckboxGroup>
  <Label>
    Favorite sports
  </Label>
  <Checkbox value="soccer">
    <div
      className="checkbox"
      aria-hidden="true"
    >
      <svg viewBox="0 0 18 18">
        <polyline points="1 9 7 14 15 4" />
      </svg>
    </div>
    Soccer
  </Checkbox>
  <Checkbox value="baseball">
    <div
      className="checkbox"
      aria-hidden="true"
    >
      <svg viewBox="0 0 18 18">
        <polyline points="1 9 7 14 15 4" />
      </svg>
    </div>
    Baseball
  </Checkbox>
  <Checkbox value="basketball">
    <div
      className="checkbox"
      aria-hidden="true"
    >
      <svg viewBox="0 0 18 18">
        <polyline points="1 9 7 14 15 4" />
      </svg>
    </div>
    Basketball
  </Checkbox>
</CheckboxGroup>
```

Show CSS

```
@import "@react-aria/example-theme";

.react-aria-CheckboxGroup {
  display: flex;
  flex-direction: column;
  gap: 0.571rem;
  color: var(--text-color);
}
```

```
@import "@react-aria/example-theme";

.react-aria-CheckboxGroup {
  display: flex;
  flex-direction: column;
  gap: 0.571rem;
  color: var(--text-color);
}
```

```
@import "@react-aria/example-theme";

.react-aria-CheckboxGroup {
  display: flex;
  flex-direction: column;
  gap: 0.571rem;
  color: var(--text-color);
}
```

* * *

Checkbox groups can be built in HTML with the [<fieldset>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset) and [<input>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) elements, however these can be difficult to style. `CheckboxGroup` helps achieve accessible checkbox groups that can be styled as needed.

-   **Accessible** – Checkbox groups are exposed to assistive technology via ARIA, and automatically associate a nested `<Label>`. Description and error message help text slots are supported as well.
-   **HTML form integration** – Each individual checkbox uses a visually hidden `<input>` element under the hood, which enables HTML form integration and autofill.
-   **Validation** – Support for native HTML constraint validation with customizable UI, custom validation functions, and server-side validation errors.

* * *

Shows a checkbox group component with labels pointing to its parts, including the checkbox group label, and group element containing three checkboxes with input and label elements.ShoppingMusicTravelInterestsInputCheckbox group labelGroupCheckbox label

A checkbox group consists of a set of checkboxes, and a label. Each checkbox includes a label and a visual selection indicator. Zero or more checkboxes within the group can be selected at a time. Users may click or touch a checkbox to select it, or use the Tab key to navigate to it and the Space key to toggle it.

`CheckboxGroup` also supports optional description and error message elements, which can be used to provide more context about the field, and any validation messages. These are linked with the inputs via the `aria-describedby` attribute.

```
import {Checkbox, CheckboxGroup, FieldError, Label, Text} from 'react-aria-components';

<CheckboxGroup>
  <Label />
  <Checkbox />
  <Text slot="description" />
  <FieldError />
</CheckboxGroup>
```

```
import {
  Checkbox,
  CheckboxGroup,
  FieldError,
  Label,
  Text
} from 'react-aria-components';

<CheckboxGroup>
  <Label />
  <Checkbox />
  <Text slot="description" />
  <FieldError />
</CheckboxGroup>
```

```
import {
  Checkbox,
  CheckboxGroup,
  FieldError,
  Label,
  Text
} from 'react-aria-components';

<CheckboxGroup>
  <Label />
  <Checkbox />
  <Text slot="description" />
  <FieldError />
</CheckboxGroup>
```

Individual checkboxes must have a visual label. If the checkbox group does not have a visible label, an `aria-label` or `aria-labelledby` prop must be passed instead to identify the element to assistive technology.

`CheckboxGroup` makes use of the following concepts:

[

Forms

Validating and submitting form data, and integrating with form libraries.

](https://react-spectrum.adobe.com/react-aria/forms.html)

A `CheckboxGroup` uses the following components, which may also be used standalone or reused in other components.

[

Label

A label provides context for an element.

](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label)

* * *

To help kick-start your project, we offer starter kits that include example implementations of all React Aria components with various styling solutions. All components are fully styled, including support for dark mode, high contrast mode, and all UI states. Each starter comes with a pre-configured [Storybook](https://storybook.js.org/) that you can experiment with, or use as a starting point for your own component library.

* * *

If you will use a CheckboxGroup in multiple places in your app, you can wrap all of the pieces into a reusable component. This way, the DOM structure, styling code, and other logic are defined in a single place and reused everywhere to ensure consistency.

This example wraps `CheckboxGroup` and all of its children together into a single component which accepts a `label` prop, which is passed to the right place. It also shows how to use the `description` slot to render [help text](#description), and `FieldError` component to render [validation errors](#validation).

```
import type {CheckboxGroupProps, CheckboxProps, ValidationResult} from 'react-aria-components';
import {FieldError, Text} from 'react-aria-components';

interface MyCheckboxGroupProps extends Omit<CheckboxGroupProps, 'children'> {
  children?: React.ReactNode;
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
}

export function MyCheckboxGroup({
  label,
  description,
  errorMessage,
  children,
  ...props
}: MyCheckboxGroupProps) {
  return (
    <CheckboxGroup {...props}>
      {label && <Label>{label}</Label>}
      {children}
      {description && <Text slot="description">{description}</Text>}
      <FieldError>{errorMessage}</FieldError>
    </CheckboxGroup>
  );
}

interface MyCheckboxProps extends Omit<CheckboxProps, 'children'> {
  children?: React.ReactNode;
}

function MyCheckbox({ children, ...props }: MyCheckboxProps) {
  return (
    <Checkbox {...props}>
      <div className="checkbox" aria-hidden="true">
        <svg viewBox="0 0 18 18">
          <polyline points="1 9 7 14 15 4" />
        </svg>
      </div>
      {children}
    </Checkbox>
  );
}

<MyCheckboxGroup label="Favorite sports">
  <MyCheckbox value="soccer">Soccer</MyCheckbox>
  <MyCheckbox value="baseball">Baseball</MyCheckbox>
  <MyCheckbox value="basketball">Basketball</MyCheckbox>
</MyCheckboxGroup>
```

```
import type {
  CheckboxGroupProps,
  CheckboxProps,
  ValidationResult
} from 'react-aria-components';
import {FieldError, Text} from 'react-aria-components';

interface MyCheckboxGroupProps
  extends Omit<CheckboxGroupProps, 'children'> {
  children?: React.ReactNode;
  label?: string;
  description?: string;
  errorMessage?:
    | string
    | ((validation: ValidationResult) => string);
}

export function MyCheckboxGroup({
  label,
  description,
  errorMessage,
  children,
  ...props
}: MyCheckboxGroupProps) {
  return (
    <CheckboxGroup {...props}>
      {label && <Label>{label}</Label>}
      {children}
      {description && (
        <Text slot="description">{description}</Text>
      )}
      <FieldError>{errorMessage}</FieldError>
    </CheckboxGroup>
  );
}

interface MyCheckboxProps
  extends Omit<CheckboxProps, 'children'> {
  children?: React.ReactNode;
}

function MyCheckbox(
  { children, ...props }: MyCheckboxProps
) {
  return (
    <Checkbox {...props}>
      <div className="checkbox" aria-hidden="true">
        <svg viewBox="0 0 18 18">
          <polyline points="1 9 7 14 15 4" />
        </svg>
      </div>
      {children}
    </Checkbox>
  );
}

<MyCheckboxGroup label="Favorite sports">
  <MyCheckbox value="soccer">Soccer</MyCheckbox>
  <MyCheckbox value="baseball">Baseball</MyCheckbox>
  <MyCheckbox value="basketball">Basketball</MyCheckbox>
</MyCheckboxGroup>
```

```
import type {
  CheckboxGroupProps,
  CheckboxProps,
  ValidationResult
} from 'react-aria-components';
import {
  FieldError,
  Text
} from 'react-aria-components';

interface MyCheckboxGroupProps
  extends
    Omit<
      CheckboxGroupProps,
      'children'
    > {
  children?:
    React.ReactNode;
  label?: string;
  description?: string;
  errorMessage?:
    | string
    | ((
      validation:
        ValidationResult
    ) => string);
}

export function MyCheckboxGroup(
  {
    label,
    description,
    errorMessage,
    children,
    ...props
  }: MyCheckboxGroupProps
) {
  return (
    <CheckboxGroup
      {...props}
    >
      {label && (
        <Label>
          {label}
        </Label>
      )}
      {children}
      {description && (
        <Text slot="description">
          {description}
        </Text>
      )}
      <FieldError>
        {errorMessage}
      </FieldError>
    </CheckboxGroup>
  );
}

interface MyCheckboxProps
  extends
    Omit<
      CheckboxProps,
      'children'
    > {
  children?:
    React.ReactNode;
}

function MyCheckbox(
  { children, ...props }:
    MyCheckboxProps
) {
  return (
    <Checkbox {...props}>
      <div
        className="checkbox"
        aria-hidden="true"
      >
        <svg viewBox="0 0 18 18">
          <polyline points="1 9 7 14 15 4" />
        </svg>
      </div>
      {children}
    </Checkbox>
  );
}

<MyCheckboxGroup label="Favorite sports">
  <MyCheckbox value="soccer">
    Soccer
  </MyCheckbox>
  <MyCheckbox value="baseball">
    Baseball
  </MyCheckbox>
  <MyCheckbox value="basketball">
    Basketball
  </MyCheckbox>
</MyCheckboxGroup>
```

* * *

An initial, uncontrolled value can be provided to the CheckboxGroup using the `defaultValue` prop, which accepts an array of selected items that map to the `value` prop on each Checkbox.

```
<MyCheckboxGroup
  label="Favorite sports (uncontrolled)"
  defaultValue={['soccer', 'baseball']}
>
  <MyCheckbox value="soccer">Soccer</MyCheckbox>
  <MyCheckbox value="baseball">Baseball</MyCheckbox>
  <MyCheckbox value="basketball">Basketball</MyCheckbox>
</MyCheckboxGroup>
```

```
<MyCheckboxGroup
  label="Favorite sports (uncontrolled)"
  defaultValue={['soccer', 'baseball']}
>
  <MyCheckbox value="soccer">Soccer</MyCheckbox>
  <MyCheckbox value="baseball">Baseball</MyCheckbox>
  <MyCheckbox value="basketball">Basketball</MyCheckbox>
</MyCheckboxGroup>
```

```
<MyCheckboxGroup
  label="Favorite sports (uncontrolled)"
  defaultValue={[
    'soccer',
    'baseball'
  ]}
>
  <MyCheckbox value="soccer">
    Soccer
  </MyCheckbox>
  <MyCheckbox value="baseball">
    Baseball
  </MyCheckbox>
  <MyCheckbox value="basketball">
    Basketball
  </MyCheckbox>
</MyCheckboxGroup>
```

A controlled value can be provided using the `value` prop, which accepts an array of selected items, which map to the `value` prop on each Checkbox. The `onChange` event is fired when the user checks or unchecks an option. It receives a new array containing the updated selected values.

```
function Example() {
  let [selected, setSelected] = React.useState(['soccer', 'baseball']);

  return (
    <MyCheckboxGroup
      label="Favorite sports (controlled)"
      value={selected}
      onChange={setSelected}
    >
      <MyCheckbox value="soccer">Soccer</MyCheckbox>
      <MyCheckbox value="baseball">Baseball</MyCheckbox>
      <MyCheckbox value="basketball">Basketball</MyCheckbox>
    </MyCheckboxGroup>
  );
}
```

```
function Example() {
  let [selected, setSelected] = React.useState([
    'soccer',
    'baseball'
  ]);

  return (
    <MyCheckboxGroup
      label="Favorite sports (controlled)"
      value={selected}
      onChange={setSelected}
    >
      <MyCheckbox value="soccer">Soccer</MyCheckbox>
      <MyCheckbox value="baseball">Baseball</MyCheckbox>
      <MyCheckbox value="basketball">Basketball</MyCheckbox>
    </MyCheckboxGroup>
  );
}
```

```
function Example() {
  let [
    selected,
    setSelected
  ] = React.useState([
    'soccer',
    'baseball'
  ]);

  return (
    <MyCheckboxGroup
      label="Favorite sports (controlled)"
      value={selected}
      onChange={setSelected}
    >
      <MyCheckbox value="soccer">
        Soccer
      </MyCheckbox>
      <MyCheckbox value="baseball">
        Baseball
      </MyCheckbox>
      <MyCheckbox value="basketball">
        Basketball
      </MyCheckbox>
    </MyCheckboxGroup>
  );
}
```

CheckboxGroup supports the `name` prop, paired with the Checkbox `value` prop, for integration with HTML forms.

```
<MyCheckboxGroup label="Favorite sports" name="sports">
  <MyCheckbox value="soccer">Soccer</MyCheckbox>
  <MyCheckbox value="baseball">Baseball</MyCheckbox>
  <MyCheckbox value="basketball">Basketball</MyCheckbox>
</MyCheckboxGroup>
```

```
<MyCheckboxGroup label="Favorite sports" name="sports">
  <MyCheckbox value="soccer">Soccer</MyCheckbox>
  <MyCheckbox value="baseball">Baseball</MyCheckbox>
  <MyCheckbox value="basketball">Basketball</MyCheckbox>
</MyCheckboxGroup>
```

```
<MyCheckboxGroup
  label="Favorite sports"
  name="sports"
>
  <MyCheckbox value="soccer">
    Soccer
  </MyCheckbox>
  <MyCheckbox value="baseball">
    Baseball
  </MyCheckbox>
  <MyCheckbox value="basketball">
    Basketball
  </MyCheckbox>
</MyCheckboxGroup>
```

* * *

CheckboxGroup supports the `isRequired` prop to ensure the user selects at least one item, as well as custom client and server-side validation. Individual checkboxes also support validation, and errors from all checkboxes are aggregated at the group level. CheckboxGroup can also be integrated with other form libraries. See the [Forms](https://react-spectrum.adobe.com/react-aria/forms.html) guide to learn more.

The `isRequired` prop at the `CheckboxGroup` level requires that at least one item is selected. To display validation errors, add a `<FieldError>` element as a child of the CheckboxGroup. This allows you to render error messages from all of the above sources with consistent custom styles.

```
import {Form, FieldError, Button} from 'react-aria-components';

<Form>
  <CheckboxGroup name="condiments" isRequired>    <Label>Sandwich condiments</Label>
    <MyCheckbox value="lettuce">Lettuce</MyCheckbox>
    <MyCheckbox value="tomato">Tomato</MyCheckbox>
    <MyCheckbox value="onion">Onion</MyCheckbox>
    <MyCheckbox value="sprouts">Sprouts</MyCheckbox>
    <FieldError />  </CheckboxGroup>
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
  <CheckboxGroup name="condiments" isRequired>    <Label>Sandwich condiments</Label>
    <MyCheckbox value="lettuce">Lettuce</MyCheckbox>
    <MyCheckbox value="tomato">Tomato</MyCheckbox>
    <MyCheckbox value="onion">Onion</MyCheckbox>
    <MyCheckbox value="sprouts">Sprouts</MyCheckbox>
    <FieldError />  </CheckboxGroup>
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
  <CheckboxGroup
    name="condiments"
    isRequired
  >    <Label>
      Sandwich
      condiments
    </Label>
    <MyCheckbox value="lettuce">
      Lettuce
    </MyCheckbox>
    <MyCheckbox value="tomato">
      Tomato
    </MyCheckbox>
    <MyCheckbox value="onion">
      Onion
    </MyCheckbox>
    <MyCheckbox value="sprouts">
      Sprouts
    </MyCheckbox>
    <FieldError />  </CheckboxGroup>
  <Button type="submit">
    Submit
  </Button>
</Form>
```

Show CSS

```
.react-aria-CheckboxGroup {
  .react-aria-FieldError {
    font-size: 12px;
    color: var(--invalid-color);
  }
}
```

```
.react-aria-CheckboxGroup {
  .react-aria-FieldError {
    font-size: 12px;
    color: var(--invalid-color);
  }
}
```

```
.react-aria-CheckboxGroup {
  .react-aria-FieldError {
    font-size: 12px;
    color: var(--invalid-color);
  }
}
```

By default, `FieldError` displays default validation messages provided by the browser. See [Customizing error messages](https://react-spectrum.adobe.com/react-aria/forms.html#customizing-error-messages) in the Forms guide to learn how to provide your own custom errors.

To require that specific checkboxes are checked, set the `isRequired` prop at the `Checkbox` level instead of the `CheckboxGroup`. The following example shows how to require that all items are selected.

```
<Form>
  <CheckboxGroup>
    <Label>Agree to the following</Label>
    <MyCheckbox value="terms" isRequired>Terms and conditions</MyCheckbox>
    <MyCheckbox value="privacy" isRequired>Privacy policy</MyCheckbox>
    <MyCheckbox value="cookies" isRequired>Cookie policy</MyCheckbox>    <FieldError />
  </CheckboxGroup>
  <Button type="submit">Submit</Button>
</Form>
```

```
<Form>
  <CheckboxGroup>
    <Label>Agree to the following</Label>
    <MyCheckbox value="terms" isRequired>
      Terms and conditions
    </MyCheckbox>
    <MyCheckbox value="privacy" isRequired>
      Privacy policy
    </MyCheckbox>
    <MyCheckbox value="cookies" isRequired>
      Cookie policy
    </MyCheckbox>    <FieldError />
  </CheckboxGroup>
  <Button type="submit">Submit</Button>
</Form>
```

```
<Form>
  <CheckboxGroup>
    <Label>
      Agree to the
      following
    </Label>
    <MyCheckbox
      value="terms"
      isRequired
    >
      Terms and
      conditions
    </MyCheckbox>
    <MyCheckbox
      value="privacy"
      isRequired
    >
      Privacy policy
    </MyCheckbox>
    <MyCheckbox
      value="cookies"
      isRequired
    >
      Cookie policy
    </MyCheckbox>    <FieldError />
  </CheckboxGroup>
  <Button type="submit">
    Submit
  </Button>
</Form>
```

The `description` slot can be used to associate additional help text with a checkbox group.

```
<CheckboxGroup>
  <Label>Pets</Label>
  <MyCheckbox value="dogs">Dogs</MyCheckbox>
  <MyCheckbox value="cats">Cats</MyCheckbox>
  <MyCheckbox value="dragons">Dragons</MyCheckbox>
  <Text slot="description">Select your pets.</Text>
</CheckboxGroup>
```

```
<CheckboxGroup>
  <Label>Pets</Label>
  <MyCheckbox value="dogs">Dogs</MyCheckbox>
  <MyCheckbox value="cats">Cats</MyCheckbox>
  <MyCheckbox value="dragons">Dragons</MyCheckbox>
  <Text slot="description">Select your pets.</Text>
</CheckboxGroup>
```

```
<CheckboxGroup>
  <Label>Pets</Label>
  <MyCheckbox value="dogs">
    Dogs
  </MyCheckbox>
  <MyCheckbox value="cats">
    Cats
  </MyCheckbox>
  <MyCheckbox value="dragons">
    Dragons
  </MyCheckbox>
  <Text slot="description">
    Select your pets.
  </Text>
</CheckboxGroup>
```

Show CSS

```
.react-aria-CheckboxGroup {
  [slot=description] {
    font-size: 12px;
  }
}
```

```
.react-aria-CheckboxGroup {
  [slot=description] {
    font-size: 12px;
  }
}
```

```
.react-aria-CheckboxGroup {
  [slot=description] {
    font-size: 12px;
  }
}
```

* * *

The entire CheckboxGroup can be disabled with the `isDisabled` prop.

```
<MyCheckboxGroup label="Favorite sports" isDisabled>
  <MyCheckbox value="soccer">Soccer</MyCheckbox>
  <MyCheckbox value="baseball">Baseball</MyCheckbox>
  <MyCheckbox value="basketball">Basketball</MyCheckbox>
</MyCheckboxGroup>
```

```
<MyCheckboxGroup label="Favorite sports" isDisabled>
  <MyCheckbox value="soccer">Soccer</MyCheckbox>
  <MyCheckbox value="baseball">Baseball</MyCheckbox>
  <MyCheckbox value="basketball">Basketball</MyCheckbox>
</MyCheckboxGroup>
```

```
<MyCheckboxGroup
  label="Favorite sports"
  isDisabled
>
  <MyCheckbox value="soccer">
    Soccer
  </MyCheckbox>
  <MyCheckbox value="baseball">
    Baseball
  </MyCheckbox>
  <MyCheckbox value="basketball">
    Basketball
  </MyCheckbox>
</MyCheckboxGroup>
```

To disable an individual checkbox, pass `isDisabled` to the `Checkbox` instead.

```
<MyCheckboxGroup label="Favorite sports">
  <MyCheckbox value="soccer">Soccer</MyCheckbox>
  <MyCheckbox value="baseball" isDisabled>Baseball</MyCheckbox>
  <MyCheckbox value="basketball">Basketball</MyCheckbox>
</MyCheckboxGroup>
```

```
<MyCheckboxGroup label="Favorite sports">
  <MyCheckbox value="soccer">Soccer</MyCheckbox>
  <MyCheckbox value="baseball" isDisabled>
    Baseball
  </MyCheckbox>
  <MyCheckbox value="basketball">Basketball</MyCheckbox>
</MyCheckboxGroup>
```

```
<MyCheckboxGroup label="Favorite sports">
  <MyCheckbox value="soccer">
    Soccer
  </MyCheckbox>
  <MyCheckbox
    value="baseball"
    isDisabled
  >
    Baseball
  </MyCheckbox>
  <MyCheckbox value="basketball">
    Basketball
  </MyCheckbox>
</MyCheckboxGroup>
```

The `isReadOnly` prop makes the selection immutable. Unlike `isDisabled`, the CheckboxGroup remains focusable. See the [MDN docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly) for more information.

```
<MyCheckboxGroup
  label="Favorite sports"
  defaultValue={['baseball']}
  isReadOnly
>
  <MyCheckbox value="soccer">Soccer</MyCheckbox>
  <MyCheckbox value="baseball">Baseball</MyCheckbox>
  <MyCheckbox value="basketball">Basketball</MyCheckbox>
</MyCheckboxGroup>
```

```
<MyCheckboxGroup
  label="Favorite sports"
  defaultValue={['baseball']}
  isReadOnly
>
  <MyCheckbox value="soccer">Soccer</MyCheckbox>
  <MyCheckbox value="baseball">Baseball</MyCheckbox>
  <MyCheckbox value="basketball">Basketball</MyCheckbox>
</MyCheckboxGroup>
```

```
<MyCheckboxGroup
  label="Favorite sports"
  defaultValue={[
    'baseball'
  ]}
  isReadOnly
>
  <MyCheckbox value="soccer">
    Soccer
  </MyCheckbox>
  <MyCheckbox value="baseball">
    Baseball
  </MyCheckbox>
  <MyCheckbox value="basketball">
    Basketball
  </MyCheckbox>
</MyCheckboxGroup>
```

* * *

Name

Type

Default

Description

`value`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)[]`

—

The current value (controlled).

`defaultValue`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)[]`

—

The default value (uncontrolled).

`name`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

The name of the input element, used when submitting an HTML form. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname).

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

`( (value: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)[] )) => [ValidationError](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/inputs.d.ts:ValidationError) | true | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null) | [undefined](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined)`

—

A function that returns an error message if a given value is invalid. Validation errors are displayed to the user when the form is submitted if `validationBehavior="native"`. For realtime validation, use the `isInvalid` prop instead.

`form`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

The `<form>` element to associate the input with. The value of this attribute must be the id of a `<form>` in the same document. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#form).

`validationBehavior`

`'native' | 'aria'`

`'native'`

Whether to use native HTML form validation to prevent form submission when the value is missing or invalid, or mark the field as required or invalid via ARIA.

`children`

`[ChildrenOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ChildrenOrFunction)<[CheckboxGroupRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Checkbox.tsx:CheckboxGroupRenderProps)>`

—

The children of the component. A function may be provided to alter the children based on component state.

`className`

`[ClassNameOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ClassNameOrFunction)<[CheckboxGroupRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Checkbox.tsx:CheckboxGroupRenderProps)>`

—

The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.

`style`

`[StyleOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:StyleOrFunction)<[CheckboxGroupRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Checkbox.tsx:CheckboxGroupRenderProps)>`

—

The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.

Events

Name

Type

Description

`onChange`

`( (value: T )) => void`

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

`aria-errormessage`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

Identifies the element that provides an error message for the object.

Within a `<CheckboxGroup>`, most `<Checkbox>` props are set automatically. The `value` prop is required to identify the checkbox within the group.

Show props

Name

Type

Default

Description

`inputRef`

`[RefObject](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/refs.d.ts:RefObject)<[HTMLInputElement](https://developer.mozilla.org/docs/Web/API/HTMLInputElement) | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)>`

—

A ref for the HTML input element.

`isIndeterminate`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Indeterminism is presentational only. The indeterminate visual representation remains regardless of user interaction.

`value`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

The value of the input element, used when submitting an HTML form. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefvalue).

`defaultSelected`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the element should be selected (uncontrolled).

`isSelected`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the element should be selected (controlled).

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

`( (value: [boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) )) => [ValidationError](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/inputs.d.ts:ValidationError) | true | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null) | [undefined](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined)`

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

`[ChildrenOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ChildrenOrFunction)<[CheckboxRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Checkbox.tsx:CheckboxRenderProps)>`

—

The children of the component. A function may be provided to alter the children based on component state.

`className`

`[ClassNameOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ClassNameOrFunction)<[CheckboxRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Checkbox.tsx:CheckboxRenderProps)>`

—

The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.

`style`

`[StyleOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:StyleOrFunction)<[CheckboxRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Checkbox.tsx:CheckboxRenderProps)>`

—

The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.

Events

Name

Type

Description

`onChange`

`( (isSelected: [boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) )) => void`

Handler that is called when the element's selection state changes.

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
.react-aria-CheckboxGroup {
  /* ... */
}
```

```
.react-aria-CheckboxGroup {
  /* ... */
}
```

```
.react-aria-CheckboxGroup {
  /* ... */
}
```

A custom `className` can also be specified on any component. This overrides the default `className` provided by React Aria with your own.

```
<Checkbox className="my-checkbox">
  {/* ... */}
</Checkbox>
```

```
<Checkbox className="my-checkbox">
  {/* ... */}
</Checkbox>
```

```
<Checkbox className="my-checkbox">
  {/* ... */}
</Checkbox>
```

In addition, some components support multiple UI states (e.g. focused, placeholder, readonly, etc.). React Aria components expose states using data attributes, which you can target in CSS selectors. For example:

```
.react-aria-Checkbox[data-selected] {
  /* ... */
}
```

```
.react-aria-Checkbox[data-selected] {
  /* ... */
}
```

```
.react-aria-Checkbox[data-selected] {
  /* ... */
}
```

The `className` and `style` props also accept functions which receive states for styling. This lets you dynamically determine the classes or styles to apply, which is useful when using utility CSS libraries like [Tailwind](https://tailwindcss.com/).

```
<Checkbox
  className={({ isPressed }) => isPressed ? 'bg-gray-700' : 'bg-gray-600'}
/>
```

```
<Checkbox
  className={({ isPressed }) =>
    isPressed ? 'bg-gray-700' : 'bg-gray-600'}
/>
```

```
<Checkbox
  className={(
    { isPressed }
  ) =>
    isPressed
      ? 'bg-gray-700'
      : 'bg-gray-600'}
/>
```

Render props may also be used as children to alter what elements are rendered based on the current state. For example, you could render an extra element when the checkbox is selected.

```
<Checkbox>
  {({isSelected}) => (
    <>
      {isSelected && <CheckIcon />}
      Subscribe
    </>
  )}
</Checkbox>
```

```
<Checkbox>
  {({isSelected}) => (
    <>
      {isSelected && <CheckIcon />}
      Subscribe
    </>
  )}
</Checkbox>
```

```
<Checkbox>
  {(
    { isSelected }
  ) => (
    <>
      {isSelected && (
        <CheckIcon />
      )}
      Subscribe
    </>
  )}
</Checkbox>
```

The states and selectors for each component used in a `CheckboxGroup` are documented below.

A `CheckboxGroup` can be targeted with the `.react-aria-CheckboxGroup` CSS selector, or by overriding with a custom `className`. It supports the following states and render props:

Name

CSS Selector

Description

`isDisabled`

`[data-disabled]`

Whether the checkbox group is disabled.

`isReadOnly`

`[data-readonly]`

Whether the checkbox group is read only.

`isRequired`

`[data-required]`

Whether the checkbox group is required.

`isInvalid`

`[data-invalid]`

Whether the checkbox group is invalid.

`state`

`—`

State of the checkbox group.

A `Checkbox` can be targeted with the `.react-aria-Checkbox` CSS selector, or by overriding with a custom `className`. It supports the following states:

Name

CSS Selector

Description

`isSelected`

`[data-selected]`

Whether the checkbox is selected.

`isIndeterminate`

`[data-indeterminate]`

Whether the checkbox is indeterminate.

`isHovered`

`[data-hovered]`

Whether the checkbox is currently hovered with a mouse.

`isPressed`

`[data-pressed]`

Whether the checkbox is currently in a pressed state.

`isFocused`

`[data-focused]`

Whether the checkbox is focused, either via a mouse or keyboard.

`isFocusVisible`

`[data-focus-visible]`

Whether the checkbox is keyboard focused.

`isDisabled`

`[data-disabled]`

Whether the checkbox is disabled.

`isReadOnly`

`[data-readonly]`

Whether the checkbox is read only.

`isInvalid`

`[data-invalid]`

Whether the checkbox invalid.

`isRequired`

`[data-required]`

Whether the checkbox is required.

The help text elements within a `CheckboxGroup` can be targeted with the `[slot=description]` and `[slot=errorMessage]` CSS selectors, or by adding a custom `className`.

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

All React Aria Components export a corresponding context that can be used to send props to them from a parent element. This enables you to build your own compositional APIs similar to those found in React Aria Components itself. You can send any prop or ref via context that you could pass to the corresponding component. The local props and ref on the component are merged with the ones passed via context, with the local props taking precedence (following the rules documented in [mergeProps](https://react-spectrum.adobe.com/react-aria/mergeProps.html)).

The components in a CheckboxGroup support the following contexts:

Component

Context

Props

Ref

`CheckboxGroup`

`CheckboxGroupContext`

`[CheckboxGroupProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Checkbox.tsx:CheckboxGroupProps)`

`[HTMLDivElement](https://developer.mozilla.org/docs/Web/API/HTMLDivElement)`

`Checkbox`

`CheckboxContext`

`[CheckboxProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Checkbox.tsx:CheckboxProps)`

`[HTMLLabelElement](https://developer.mozilla.org/docs/Web/API/HTMLLabelElement)`

This example shows a `CheckboxDescription` component that accepts a checkbox in its children and renders a description element below it. It uses the [useId](https://react-spectrum.adobe.com/react-aria/useId.html) hook to generate a unique id for the description, and associates it with the checkbox via the `aria-describedby` attribute passed to the `CheckboxContext` provider.

```
import {CheckboxContext} from 'react-aria-components';
import {useId} from 'react-aria';

interface CheckboxDescriptionProps {
  children?: React.ReactNode;
  description?: string;
}

function CheckboxDescription(
  { children, description }: CheckboxDescriptionProps
) {
  let descriptionId = useId();
  return (
    <div>
      <CheckboxContext.Provider value={{ 'aria-describedby': descriptionId }}>        {children}
      </CheckboxContext.Provider>
      <small id={descriptionId}>{description}</small>
    </div>
  );
}

<MyCheckboxGroup
  label="Email settings"
  defaultValue={['newsletter', 'deals', 'notifications']}
>
  <CheckboxDescription description="Receive our newsletter once per week.">
    <MyCheckbox value="newsletter">Newsletter</MyCheckbox>
  </CheckboxDescription>
  <CheckboxDescription description="The best deals and sales for members.">
    <MyCheckbox value="deals">Deals</MyCheckbox>
  </CheckboxDescription>
  <CheckboxDescription description="Notifications about your orders.">
    <MyCheckbox value="notifications">Notifications</MyCheckbox>
  </CheckboxDescription>
</MyCheckboxGroup>
```

```
import {CheckboxContext} from 'react-aria-components';
import {useId} from 'react-aria';

interface CheckboxDescriptionProps {
  children?: React.ReactNode;
  description?: string;
}

function CheckboxDescription(
  { children, description }: CheckboxDescriptionProps
) {
  let descriptionId = useId();
  return (
    <div>
      <CheckboxContext.Provider
        value={{ 'aria-describedby': descriptionId }}
      >        {children}
      </CheckboxContext.Provider>
      <small id={descriptionId}>{description}</small>
    </div>
  );
}

<MyCheckboxGroup
  label="Email settings"
  defaultValue={['newsletter', 'deals', 'notifications']}
>
  <CheckboxDescription description="Receive our newsletter once per week.">
    <MyCheckbox value="newsletter">Newsletter</MyCheckbox>
  </CheckboxDescription>
  <CheckboxDescription description="The best deals and sales for members.">
    <MyCheckbox value="deals">Deals</MyCheckbox>
  </CheckboxDescription>
  <CheckboxDescription description="Notifications about your orders.">
    <MyCheckbox value="notifications">
      Notifications
    </MyCheckbox>
  </CheckboxDescription>
</MyCheckboxGroup>
```

```
import {CheckboxContext} from 'react-aria-components';
import {useId} from 'react-aria';

interface CheckboxDescriptionProps {
  children?:
    React.ReactNode;
  description?: string;
}

function CheckboxDescription(
  {
    children,
    description
  }: CheckboxDescriptionProps
) {
  let descriptionId =
    useId();
  return (
    <div>
      <CheckboxContext.Provider
        value={{
          'aria-describedby':
            descriptionId
        }}
      >        {children}
      </CheckboxContext.Provider>
      <small
        id={descriptionId}
      >
        {description}
      </small>
    </div>
  );
}

<MyCheckboxGroup
  label="Email settings"
  defaultValue={[
    'newsletter',
    'deals',
    'notifications'
  ]}
>
  <CheckboxDescription description="Receive our newsletter once per week.">
    <MyCheckbox value="newsletter">
      Newsletter
    </MyCheckbox>
  </CheckboxDescription>
  <CheckboxDescription description="The best deals and sales for members.">
    <MyCheckbox value="deals">
      Deals
    </MyCheckbox>
  </CheckboxDescription>
  <CheckboxDescription description="Notifications about your orders.">
    <MyCheckbox value="notifications">
      Notifications
    </MyCheckbox>
  </CheckboxDescription>
</MyCheckboxGroup>
```

CheckboxGroup passes props to its child components, such as the label, via their associated contexts. These contexts are exported so you can also consume them in your own custom components. This enables you to reuse existing components from your app or component library together with React Aria Components.

Component

Context

Props

Ref

`Label`

`LabelContext`

`[LabelProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Label.tsx:LabelProps)`

`[HTMLLabelElement](https://developer.mozilla.org/docs/Web/API/HTMLLabelElement)`

`Text`

`TextContext`

`[TextProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Text.tsx:TextProps)`

`[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)`

This example consumes from `LabelContext` in an existing styled label component to make it compatible with React Aria Components. The `[useContextProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:useContextProps)` hook merges the local props and ref with the ones provided via context by CheckboxGroup.

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

Now you can use `MyCustomLabel` within a `CheckboxGroup`, in place of the builtin React Aria Components `Label`.

```
<CheckboxGroup>
  <MyCustomLabel>Favorite sports</MyCustomLabel>  <MyCheckbox value="soccer">Soccer</MyCheckbox>
  <MyCheckbox value="baseball">Baseball</MyCheckbox>
  <MyCheckbox value="basketball">Basketball</MyCheckbox>
</CheckboxGroup>
```

```
<CheckboxGroup>
  <MyCustomLabel>Favorite sports</MyCustomLabel>  <MyCheckbox value="soccer">Soccer</MyCheckbox>
  <MyCheckbox value="baseball">Baseball</MyCheckbox>
  <MyCheckbox value="basketball">Basketball</MyCheckbox>
</CheckboxGroup>
```

```
<CheckboxGroup>
  <MyCustomLabel>
    Favorite sports
  </MyCustomLabel>  <MyCheckbox value="soccer">
    Soccer
  </MyCheckbox>
  <MyCheckbox value="baseball">
    Baseball
  </MyCheckbox>
  <MyCheckbox value="basketball">
    Basketball
  </MyCheckbox>
</CheckboxGroup>
```

CheckboxGroup provides a `[CheckboxGroupState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/checkbox/src/useCheckboxGroupState.ts:CheckboxGroupState)` object to its children via `CheckboxGroupStateContext`. This can be used to access and manipulate the checkbox group's state.

This example shows a `SelectionCount` component that can be placed within a `CheckboxGroup` to display the number of selected items.

```
import {CheckboxGroupStateContext} from 'react-aria-components';

function SelectionCount() {
  let state = React.useContext(CheckboxGroupStateContext)!;  return <small>{state.value.length} items selected.</small>;
}

<MyCheckboxGroup label="Sandwich condiments">
  <MyCheckbox value="lettuce">Lettuce</MyCheckbox>
  <MyCheckbox value="tomato">Tomato</MyCheckbox>
  <MyCheckbox value="onion">Onion</MyCheckbox>
  <MyCheckbox value="sprouts">Sprouts</MyCheckbox>
  <SelectionCount />
</MyCheckboxGroup>
```

```
import {CheckboxGroupStateContext} from 'react-aria-components';

function SelectionCount() {
  let state = React.useContext(CheckboxGroupStateContext)!;  return <small>{state.value.length} items selected.
  </small>;
}

<MyCheckboxGroup label="Sandwich condiments">
  <MyCheckbox value="lettuce">Lettuce</MyCheckbox>
  <MyCheckbox value="tomato">Tomato</MyCheckbox>
  <MyCheckbox value="onion">Onion</MyCheckbox>
  <MyCheckbox value="sprouts">Sprouts</MyCheckbox>
  <SelectionCount />
</MyCheckboxGroup>
```

```
import {CheckboxGroupStateContext} from 'react-aria-components';

function SelectionCount() {
  let state = React
    .useContext(
      CheckboxGroupStateContext
    )!;  return (
    <small>
      {state.value
        .length}{' '}
      items selected.
    </small>
  );
}

<MyCheckboxGroup label="Sandwich condiments">
  <MyCheckbox value="lettuce">
    Lettuce
  </MyCheckbox>
  <MyCheckbox value="tomato">
    Tomato
  </MyCheckbox>
  <MyCheckbox value="onion">
    Onion
  </MyCheckbox>
  <MyCheckbox value="sprouts">
    Sprouts
  </MyCheckbox>
  <SelectionCount />
</MyCheckboxGroup>
```

If you need to customize things further, such as accessing internal state or customizing DOM structure, you can drop down to the lower level Hook-based API. See [useCheckboxGroup](https://react-spectrum.adobe.com/react-aria/useCheckboxGroup.html) for more details.