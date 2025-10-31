# RadioGroup

**Source**: [https://react-spectrum.adobe.com/react-aria/RadioGroup.html](https://react-spectrum.adobe.com/react-aria/RadioGroup.html)

> Documentation for RadioGroup in the React Aria package.

---

A radio group allows a user to select a single item from a list of mutually exclusive options.

* * *

```
import {RadioGroup, Radio, Label} from 'react-aria-components';

<RadioGroup>
  <Label>Favorite pet</Label>
  <Radio value="dogs">Dog</Radio>
  <Radio value="cats">Cat</Radio>
  <Radio value="dragon">Dragon</Radio>
</RadioGroup>
```

```
import {
  Label,
  Radio,
  RadioGroup
} from 'react-aria-components';

<RadioGroup>
  <Label>Favorite pet</Label>
  <Radio value="dogs">Dog</Radio>
  <Radio value="cats">Cat</Radio>
  <Radio value="dragon">Dragon</Radio>
</RadioGroup>
```

```
import {
  Label,
  Radio,
  RadioGroup
} from 'react-aria-components';

<RadioGroup>
  <Label>
    Favorite pet
  </Label>
  <Radio value="dogs">
    Dog
  </Radio>
  <Radio value="cats">
    Cat
  </Radio>
  <Radio value="dragon">
    Dragon
  </Radio>
</RadioGroup>
```

Show CSS

```
@import "@react-aria/example-theme";

.react-aria-RadioGroup {
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: var(--text-color);
}

.react-aria-Radio {
  display: flex;
  /* This is needed so the HiddenInput is positioned correctly */
  position: relative;
  align-items: center;
  gap: 0.571rem;
  font-size: 1.143rem;
  color: var(--text-color);
  forced-color-adjust: none;

  &:before {
    content: '';
    display: block;
    width: 1.286rem;
    height: 1.286rem;
    box-sizing: border-box;
    border: 0.143rem solid var(--border-color);
    background: var(--field-background);
    border-radius: 1.286rem;
    transition: all 200ms;
  }

  &[data-pressed]:before {
    border-color: var(--border-color-pressed);
  }

  &[data-selected] {
    &:before {
      border-color: var(--highlight-background);
      border-width: 0.429rem;
    }

    &[data-pressed]:before {
      border-color: var(--highlight-background-pressed);
    }
  }

  &[data-focus-visible]:before {
    outline: 2px solid var(--focus-ring-color);
    outline-offset: 2px;
  }
}
```

```
@import "@react-aria/example-theme";

.react-aria-RadioGroup {
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: var(--text-color);
}

.react-aria-Radio {
  display: flex;
  /* This is needed so the HiddenInput is positioned correctly */
  position: relative;
  align-items: center;
  gap: 0.571rem;
  font-size: 1.143rem;
  color: var(--text-color);
  forced-color-adjust: none;

  &:before {
    content: '';
    display: block;
    width: 1.286rem;
    height: 1.286rem;
    box-sizing: border-box;
    border: 0.143rem solid var(--border-color);
    background: var(--field-background);
    border-radius: 1.286rem;
    transition: all 200ms;
  }

  &[data-pressed]:before {
    border-color: var(--border-color-pressed);
  }

  &[data-selected] {
    &:before {
      border-color: var(--highlight-background);
      border-width: 0.429rem;
    }

    &[data-pressed]:before {
      border-color: var(--highlight-background-pressed);
    }
  }

  &[data-focus-visible]:before {
    outline: 2px solid var(--focus-ring-color);
    outline-offset: 2px;
  }
}
```

```
@import "@react-aria/example-theme";

.react-aria-RadioGroup {
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: var(--text-color);
}

.react-aria-Radio {
  display: flex;
  /* This is needed so the HiddenInput is positioned correctly */
  position: relative;
  align-items: center;
  gap: 0.571rem;
  font-size: 1.143rem;
  color: var(--text-color);
  forced-color-adjust: none;

  &:before {
    content: '';
    display: block;
    width: 1.286rem;
    height: 1.286rem;
    box-sizing: border-box;
    border: 0.143rem solid var(--border-color);
    background: var(--field-background);
    border-radius: 1.286rem;
    transition: all 200ms;
  }

  &[data-pressed]:before {
    border-color: var(--border-color-pressed);
  }

  &[data-selected] {
    &:before {
      border-color: var(--highlight-background);
      border-width: 0.429rem;
    }

    &[data-pressed]:before {
      border-color: var(--highlight-background-pressed);
    }
  }

  &[data-focus-visible]:before {
    outline: 2px solid var(--focus-ring-color);
    outline-offset: 2px;
  }
}
```

* * *

Radio groups can be built in HTML with the [<fieldset>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset) and [<input>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) elements, however these can be difficult to style. `RadioGroup` and `Radio` help achieve accessible radio groups that can be styled as needed.

-   **Accessible** – Radio groups are exposed to assistive technology via ARIA, and automatically associate a nested `<Label>`. Description and error message help text slots are supported as well.
-   **HTML form integration** – Each individual radio uses a visually hidden `<input>` element under the hood, which enables HTML form integration and autofill.
-   **Validation** – Support for native HTML constraint validation with customizable UI, custom validation functions, and server-side validation errors.
-   **Cross-browser** – Mouse, touch, keyboard, and focus interactions are normalized to ensure consistency across browsers and devices.

* * *

Shows a radio group component with labels pointing to its parts, including the radio group label, and radio group element containing three radios with input and label elements.CatDogDragonFavorite PetInputRadio group labelRadio groupRadio label

A radio group consists of a set of radio buttons, and a label. Each radio includes a label and a visual selection indicator. A single radio button within the group can be selected at a time. Users may click or touch a radio button to select it, or use the Tab key to navigate to the group, the arrow keys to navigate within the group, and the Space key to select an option.

`RadioGroup` also supports optional description and error message elements, which can be used to provide more context about the field, and any validation messages. These are linked with the inputs via the `aria-describedby` attribute.

```
import {FieldError, Label, Radio, RadioGroup, SelectionIndicator, Text} from 'react-aria-components';

<RadioGroup>
  <Label />
  <Radio>
    <SelectionIndicator />
  </Radio>
  <Text slot="description" />
  <FieldError />
</RadioGroup>
```

```
import {
  FieldError,
  Label,
  Radio,
  RadioGroup,
  SelectionIndicator,
  Text
} from 'react-aria-components';

<RadioGroup>
  <Label />
  <Radio>
    <SelectionIndicator />
  </Radio>
  <Text slot="description" />
  <FieldError />
</RadioGroup>
```

```
import {
  FieldError,
  Label,
  Radio,
  RadioGroup,
  SelectionIndicator,
  Text
} from 'react-aria-components';

<RadioGroup>
  <Label />
  <Radio>
    <SelectionIndicator />
  </Radio>
  <Text slot="description" />
  <FieldError />
</RadioGroup>
```

Individual radio buttons must have a visual label. If the radio group does not have a visible label, an `aria-label` or `aria-labelledby` prop must be passed instead to identify the element to assistive technology.

`RadioGroup` makes use of the following concepts:

[

Forms

Validating and submitting form data, and integrating with form libraries.

](https://react-spectrum.adobe.com/react-aria/forms.html)

A `RadioGroup` uses the following components, which may also be used standalone or reused in other components.

[

Label

A label provides context for an input element.

](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label)

* * *

[![](https://react-spectrum.adobe.com/shipping-radio.cc613cc8.png)

Shipping Radio Group

A shipping options RadioGroup styled with Tailwind CSS.

](https://react-spectrum.adobe.com/react-aria/examples/shipping-radio.html)

* * *

To help kick-start your project, we offer starter kits that include example implementations of all React Aria components with various styling solutions. All components are fully styled, including support for dark mode, high contrast mode, and all UI states. Each starter comes with a pre-configured [Storybook](https://storybook.js.org/) that you can experiment with, or use as a starting point for your own component library.

* * *

If you will use a RadioGroup in multiple places in your app, you can wrap all of the pieces into a reusable component. This way, the DOM structure, styling code, and other logic are defined in a single place and reused everywhere to ensure consistency.

This example wraps `RadioGroup` and all of its children together into a single component which accepts a `label` prop, which is passed to the right place. It also shows how to use the `description` slot to render [help text](#description), and `FieldError` component to render [validation errors](#validation).

```
import type {RadioGroupProps, ValidationResult} from 'react-aria-components';
import {Text, FieldError} from 'react-aria-components';

interface MyRadioGroupProps extends Omit<RadioGroupProps, 'children'> {
  children?: React.ReactNode,
  label?: string,
  description?: string,
  errorMessage?: string | ((validation: ValidationResult) => string)
}

function MyRadioGroup({
  label,
  description,
  errorMessage,
  children,
  ...props
}: MyRadioGroupProps) {
  return (
    <RadioGroup {...props}>
      <Label>{label}</Label>
      {children}
      {description && <Text slot="description">{description}</Text>}
      <FieldError>{errorMessage}</FieldError>
    </RadioGroup>
  );
}

<MyRadioGroup label="Favorite sport">
  <Radio value="soccer">Soccer</Radio>
  <Radio value="baseball">Baseball</Radio>
  <Radio value="basketball">Basketball</Radio>
</MyRadioGroup>
```

```
import type {
  RadioGroupProps,
  ValidationResult
} from 'react-aria-components';
import {FieldError, Text} from 'react-aria-components';

interface MyRadioGroupProps
  extends Omit<RadioGroupProps, 'children'> {
  children?: React.ReactNode;
  label?: string;
  description?: string;
  errorMessage?:
    | string
    | ((validation: ValidationResult) => string);
}

function MyRadioGroup({
  label,
  description,
  errorMessage,
  children,
  ...props
}: MyRadioGroupProps) {
  return (
    <RadioGroup {...props}>
      <Label>{label}</Label>
      {children}
      {description && (
        <Text slot="description">{description}</Text>
      )}
      <FieldError>{errorMessage}</FieldError>
    </RadioGroup>
  );
}

<MyRadioGroup label="Favorite sport">
  <Radio value="soccer">Soccer</Radio>
  <Radio value="baseball">Baseball</Radio>
  <Radio value="basketball">Basketball</Radio>
</MyRadioGroup>
```

```
import type {
  RadioGroupProps,
  ValidationResult
} from 'react-aria-components';
import {
  FieldError,
  Text
} from 'react-aria-components';

interface MyRadioGroupProps
  extends
    Omit<
      RadioGroupProps,
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

function MyRadioGroup({
  label,
  description,
  errorMessage,
  children,
  ...props
}: MyRadioGroupProps) {
  return (
    <RadioGroup
      {...props}
    >
      <Label>
        {label}
      </Label>
      {children}
      {description && (
        <Text slot="description">
          {description}
        </Text>
      )}
      <FieldError>
        {errorMessage}
      </FieldError>
    </RadioGroup>
  );
}

<MyRadioGroup label="Favorite sport">
  <Radio value="soccer">
    Soccer
  </Radio>
  <Radio value="baseball">
    Baseball
  </Radio>
  <Radio value="basketball">
    Basketball
  </Radio>
</MyRadioGroup>
```

* * *

An initial, uncontrolled value can be provided to the RadioGroup using the `defaultValue` prop, which accepts a value corresponding with the `value` prop of each Radio.

```
<MyRadioGroup label="Are you a wizard?" defaultValue="yes">
  <Radio value="yes">Yes</Radio>
  <Radio value="no">No</Radio>
</MyRadioGroup>
```

```
<MyRadioGroup label="Are you a wizard?" defaultValue="yes">
  <Radio value="yes">Yes</Radio>
  <Radio value="no">No</Radio>
</MyRadioGroup>
```

```
<MyRadioGroup
  label="Are you a wizard?"
  defaultValue="yes"
>
  <Radio value="yes">
    Yes
  </Radio>
  <Radio value="no">
    No
  </Radio>
</MyRadioGroup>
```

A controlled value can be provided using the `value` prop, which accepts a value corresponding with the `value` prop of each Radio. The `onChange` event is fired when the user selects a radio.

```
function Example() {
  let [selected, setSelected] = React.useState(null);

  return (
    <>
      <MyRadioGroup
        label="Favorite avatar"
        value={selected}
        onChange={setSelected}
      >
        <Radio value="wizard">Wizard</Radio>
        <Radio value="dragon">Dragon</Radio>
      </MyRadioGroup>
      <p>You have selected: {selected ?? ''}</p>
    </>
  );
}
```

```
function Example() {
  let [selected, setSelected] = React.useState(null);

  return (
    <>
      <MyRadioGroup
        label="Favorite avatar"
        value={selected}
        onChange={setSelected}
      >
        <Radio value="wizard">Wizard</Radio>
        <Radio value="dragon">Dragon</Radio>
      </MyRadioGroup>
      <p>You have selected: {selected ?? ''}</p>
    </>
  );
}
```

```
function Example() {
  let [
    selected,
    setSelected
  ] = React.useState(
    null
  );

  return (
    <>
      <MyRadioGroup
        label="Favorite avatar"
        value={selected}
        onChange={setSelected}
      >
        <Radio value="wizard">
          Wizard
        </Radio>
        <Radio value="dragon">
          Dragon
        </Radio>
      </MyRadioGroup>
      <p>
        You have
        selected:{' '}
        {selected ?? ''}
      </p>
    </>
  );
}
```

RadioGroup supports the `name` prop, paired with the Radio `value` prop, for integration with HTML forms.

```
<MyRadioGroup label="Favorite pet" name="pet">
  <Radio value="dogs">Dogs</Radio>
  <Radio value="cats">Cats</Radio>
</MyRadioGroup>
```

```
<MyRadioGroup label="Favorite pet" name="pet">
  <Radio value="dogs">Dogs</Radio>
  <Radio value="cats">Cats</Radio>
</MyRadioGroup>
```

```
<MyRadioGroup
  label="Favorite pet"
  name="pet"
>
  <Radio value="dogs">
    Dogs
  </Radio>
  <Radio value="cats">
    Cats
  </Radio>
</MyRadioGroup>
```

* * *

RadioGroup supports the `isRequired` prop to ensure the user selects an option, as well as custom client and server-side validation. It can also be integrated with other form libraries. See the [Forms](https://react-spectrum.adobe.com/react-aria/forms.html) guide to learn more.

To display validation errors, add a `<FieldError>` element as a child of the RadioGroup. This allows you to render error messages from all of the above sources with consistent custom styles.

```
import {Form, FieldError, Button} from 'react-aria-components';

<Form>
  <RadioGroup name="pet" isRequired>    <Label>Favorite pet</Label>
    <Radio value="dogs">Dog</Radio>
    <Radio value="cats">Cat</Radio>
    <Radio value="dragon">Dragon</Radio>
    <FieldError />  </RadioGroup>
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
  <RadioGroup name="pet" isRequired>    <Label>Favorite pet</Label>
    <Radio value="dogs">Dog</Radio>
    <Radio value="cats">Cat</Radio>
    <Radio value="dragon">Dragon</Radio>
    <FieldError />  </RadioGroup>
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
  <RadioGroup
    name="pet"
    isRequired
  >    <Label>
      Favorite pet
    </Label>
    <Radio value="dogs">
      Dog
    </Radio>
    <Radio value="cats">
      Cat
    </Radio>
    <Radio value="dragon">
      Dragon
    </Radio>
    <FieldError />  </RadioGroup>
  <Button type="submit">
    Submit
  </Button>
</Form>
```

Show CSS

```
.react-aria-Radio {
  &[data-invalid] {
    &:before {
      border-color: var(--invalid-color);
    }

    &[data-pressed]:before {
      border-color: var(--invalid-color-pressed);
    }
  }
}

.react-aria-RadioGroup {
  .react-aria-FieldError {
    font-size: 12px;
    color: var(--invalid-color);
  }
}
```

```
.react-aria-Radio {
  &[data-invalid] {
    &:before {
      border-color: var(--invalid-color);
    }

    &[data-pressed]:before {
      border-color: var(--invalid-color-pressed);
    }
  }
}

.react-aria-RadioGroup {
  .react-aria-FieldError {
    font-size: 12px;
    color: var(--invalid-color);
  }
}
```

```
.react-aria-Radio {
  &[data-invalid] {
    &:before {
      border-color: var(--invalid-color);
    }

    &[data-pressed]:before {
      border-color: var(--invalid-color-pressed);
    }
  }
}

.react-aria-RadioGroup {
  .react-aria-FieldError {
    font-size: 12px;
    color: var(--invalid-color);
  }
}
```

By default, `FieldError` displays default validation messages provided by the browser. See [Customizing error messages](https://react-spectrum.adobe.com/react-aria/forms.html#customizing-error-messages) in the Forms guide to learn how to provide your own custom errors.

The `description` slot can be used to associate additional help text with a radio group.

```
<RadioGroup>
  <Label>Favorite avatar</Label>
  <Radio value="wizard">Wizard</Radio>
  <Radio value="dragon">Dragon</Radio>
  <Text slot="description">Please select an avatar.</Text>
</RadioGroup>
```

```
<RadioGroup>
  <Label>Favorite avatar</Label>
  <Radio value="wizard">Wizard</Radio>
  <Radio value="dragon">Dragon</Radio>
  <Text slot="description">Please select an avatar.</Text>
</RadioGroup>
```

```
<RadioGroup>
  <Label>
    Favorite avatar
  </Label>
  <Radio value="wizard">
    Wizard
  </Radio>
  <Radio value="dragon">
    Dragon
  </Radio>
  <Text slot="description">
    Please select an
    avatar.
  </Text>
</RadioGroup>
```

Show CSS

```
.react-aria-RadioGroup {
  [slot=description] {
    font-size: 12px;
  }
}
```

```
.react-aria-RadioGroup {
  [slot=description] {
    font-size: 12px;
  }
}
```

```
.react-aria-RadioGroup {
  [slot=description] {
    font-size: 12px;
  }
}
```

* * *

RadioGroups are vertically oriented by default. The `orientation` prop can be used to change the orientation to horizontal.

```
<MyRadioGroup label="Favorite avatar" orientation="horizontal">
  <Radio value="wizard">Wizard</Radio>
  <Radio value="dragon">Dragon</Radio>
</MyRadioGroup>
```

```
<MyRadioGroup
  label="Favorite avatar"
  orientation="horizontal"
>
  <Radio value="wizard">Wizard</Radio>
  <Radio value="dragon">Dragon</Radio>
</MyRadioGroup>
```

```
<MyRadioGroup
  label="Favorite avatar"
  orientation="horizontal"
>
  <Radio value="wizard">
    Wizard
  </Radio>
  <Radio value="dragon">
    Dragon
  </Radio>
</MyRadioGroup>
```

Show CSS

```
.react-aria-RadioGroup {
  &[data-orientation=horizontal] {
    flex-direction: row;
    align-items: center;
  }
}
```

```
.react-aria-RadioGroup {
  &[data-orientation=horizontal] {
    flex-direction: row;
    align-items: center;
  }
}
```

```
.react-aria-RadioGroup {
  &[data-orientation=horizontal] {
    flex-direction: row;
    align-items: center;
  }
}
```

* * *

The entire RadioGroup can be disabled with the `isDisabled` prop.

```
<MyRadioGroup label="Favorite sport" isDisabled>
  <Radio value="soccer">Soccer</Radio>
  <Radio value="baseball">Baseball</Radio>
  <Radio value="basketball">Basketball</Radio>
</MyRadioGroup>
```

```
<MyRadioGroup label="Favorite sport" isDisabled>
  <Radio value="soccer">Soccer</Radio>
  <Radio value="baseball">Baseball</Radio>
  <Radio value="basketball">Basketball</Radio>
</MyRadioGroup>
```

```
<MyRadioGroup
  label="Favorite sport"
  isDisabled
>
  <Radio value="soccer">
    Soccer
  </Radio>
  <Radio value="baseball">
    Baseball
  </Radio>
  <Radio value="basketball">
    Basketball
  </Radio>
</MyRadioGroup>
```

Show CSS

```
.react-aria-Radio {
  &[data-disabled] {
    color: var(--text-color-disabled);

    &:before {
      border-color: var(--border-color-disabled);
    }
  }
}
```

```
.react-aria-Radio {
  &[data-disabled] {
    color: var(--text-color-disabled);

    &:before {
      border-color: var(--border-color-disabled);
    }
  }
}
```

```
.react-aria-Radio {
  &[data-disabled] {
    color: var(--text-color-disabled);

    &:before {
      border-color: var(--border-color-disabled);
    }
  }
}
```

To disable an individual radio, pass `isDisabled` to the `Radio` instead.

```
<MyRadioGroup label="Favorite sport">
  <Radio value="soccer">Soccer</Radio>
  <Radio value="baseball" isDisabled>Baseball</Radio>
  <Radio value="basketball">Basketball</Radio>
</MyRadioGroup>
```

```
<MyRadioGroup label="Favorite sport">
  <Radio value="soccer">Soccer</Radio>
  <Radio value="baseball" isDisabled>Baseball</Radio>
  <Radio value="basketball">Basketball</Radio>
</MyRadioGroup>
```

```
<MyRadioGroup label="Favorite sport">
  <Radio value="soccer">
    Soccer
  </Radio>
  <Radio
    value="baseball"
    isDisabled
  >
    Baseball
  </Radio>
  <Radio value="basketball">
    Basketball
  </Radio>
</MyRadioGroup>
```

The `isReadOnly` prop makes the selection immutable. Unlike `isDisabled`, the RadioGroup remains focusable. See the [MDN docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly) for more information.

```
<MyRadioGroup label="Favorite avatar" defaultValue="wizard" isReadOnly>
  <Radio value="wizard">Wizard</Radio>
  <Radio value="dragon">Dragon</Radio>
</MyRadioGroup>
```

```
<MyRadioGroup
  label="Favorite avatar"
  defaultValue="wizard"
  isReadOnly
>
  <Radio value="wizard">Wizard</Radio>
  <Radio value="dragon">Dragon</Radio>
</MyRadioGroup>
```

```
<MyRadioGroup
  label="Favorite avatar"
  defaultValue="wizard"
  isReadOnly
>
  <Radio value="wizard">
    Wizard
  </Radio>
  <Radio value="dragon">
    Dragon
  </Radio>
</MyRadioGroup>
```

* * *

Name

Type

Default

Description

`orientation`

`[Orientation](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/orientation.d.ts:Orientation)`

`'vertical'`

The axis the Radio Button(s) should align with.

`value`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)`

—

The current value (controlled).

`defaultValue`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)`

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

`name`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

The name of the input element, used when submitting an HTML form. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname).

`isRequired`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether user input is required on the input before form submission.

`isInvalid`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the input value is invalid.

`validate`

`( (value: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) |  | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null) )) => [ValidationError](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/inputs.d.ts:ValidationError) | true | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null) | [undefined](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined)`

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

`[ChildrenOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ChildrenOrFunction)<[RadioGroupRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/RadioGroup.tsx:RadioGroupRenderProps)>`

—

The children of the component. A function may be provided to alter the children based on component state.

`className`

`[ClassNameOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ClassNameOrFunction)<[RadioGroupRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/RadioGroup.tsx:RadioGroupRenderProps)>`

—

The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.

`style`

`[StyleOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:StyleOrFunction)<[RadioGroupRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/RadioGroup.tsx:RadioGroupRenderProps)>`

—

The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.

Events

Name

Type

Description

`onChange`

`( (value: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) )) => void`

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

Name

Type

Description

`value`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

The value of the radio button, used when submitting an HTML form. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio#Value).

`inputRef`

`[RefObject](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/refs.d.ts:RefObject)<[HTMLInputElement](https://developer.mozilla.org/docs/Web/API/HTMLInputElement) | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)>`

A ref for the HTML input element.

`isDisabled`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether the radio button is disabled or not. Shows that a selection exists, but is not available in that circumstance.

`autoFocus`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether the element should receive focus on render.

`children`

`[ChildrenOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ChildrenOrFunction)<[RadioRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/RadioGroup.tsx:RadioRenderProps)>`

The children of the component. A function may be provided to alter the children based on component state.

`className`

`[ClassNameOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ClassNameOrFunction)<[RadioRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/RadioGroup.tsx:RadioRenderProps)>`

The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.

`style`

`[StyleOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:StyleOrFunction)<[RadioRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/RadioGroup.tsx:RadioRenderProps)>`

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
.react-aria-Radio {
  /* ... */
}
```

```
.react-aria-Radio {
  /* ... */
}
```

```
.react-aria-Radio {
  /* ... */
}
```

A custom `className` can also be specified on any component. This overrides the default `className` provided by React Aria with your own.

```
<Radio className="my-radio">
  {/* ... */}
</Radio>
```

```
<Radio className="my-radio">
  {/* ... */}
</Radio>
```

```
<Radio className="my-radio">
  {/* ... */}
</Radio>
```

In addition, some components support multiple UI states (e.g. focused, placeholder, readonly, etc.). React Aria components expose states using data attributes, which you can target in CSS selectors. For example:

```
.react-aria-Radio[data-selected] {
  /* ... */
}
```

```
.react-aria-Radio[data-selected] {
  /* ... */
}
```

```
.react-aria-Radio[data-selected] {
  /* ... */
}
```

The `className` and `style` props also accept functions which receive states for styling. This lets you dynamically determine the classes or styles to apply, which is useful when using utility CSS libraries like [Tailwind](https://tailwindcss.com/).

```
<Radio
  className={({ isPressed }) => isPressed ? 'bg-gray-700' : 'bg-gray-600'}
/>
```

```
<Radio
  className={({ isPressed }) =>
    isPressed ? 'bg-gray-700' : 'bg-gray-600'}
/>
```

```
<Radio
  className={(
    { isPressed }
  ) =>
    isPressed
      ? 'bg-gray-700'
      : 'bg-gray-600'}
/>
```

Render props may also be used as children to alter what elements are rendered based on the current state. For example, you could render an extra element when the radio is selected.

```
<Radio>
  {({isSelected}) => (
    <>
      {isSelected && <SelectedIcon />}
      Option
    </>
  )}
</Radio>
```

```
<Radio>
  {({isSelected}) => (
    <>
      {isSelected && <SelectedIcon />}
      Option
    </>
  )}
</Radio>
```

```
<Radio>
  {(
    { isSelected }
  ) => (
    <>
      {isSelected && (
        <SelectedIcon />
      )}
      Option
    </>
  )}
</Radio>
```

The states and selectors for each component used in a `RadioGroup` are documented below.

A `RadioGroup` can be targeted with the `.react-aria-RadioGroup` CSS selector, or by overriding with a custom `className`. It supports the following states and render props:

Name

CSS Selector

Description

`orientation`

`[data-orientation="horizontal | vertical"]`

The orientation of the radio group.

`isDisabled`

`[data-disabled]`

Whether the radio group is disabled.

`isReadOnly`

`[data-readonly]`

Whether the radio group is read only.

`isRequired`

`[data-required]`

Whether the radio group is required.

`isInvalid`

`[data-invalid]`

Whether the radio group is invalid.

`state`

`—`

State of the radio group.

A `Radio` can be targeted with the `.react-aria-Radio` CSS selector, or by overriding with a custom `className`. It supports the following states:

Name

CSS Selector

Description

`isSelected`

`[data-selected]`

Whether the radio is selected.

`isHovered`

`[data-hovered]`

Whether the radio is currently hovered with a mouse.

`isPressed`

`[data-pressed]`

Whether the radio is currently in a pressed state.

`isFocused`

`[data-focused]`

Whether the radio is focused, either via a mouse or keyboard.

`isFocusVisible`

`[data-focus-visible]`

Whether the radio is keyboard focused.

`isDisabled`

`[data-disabled]`

Whether the radio is disabled.

`isReadOnly`

`[data-readonly]`

Whether the radio is read only.

`isInvalid`

`[data-invalid]`

Whether the radio is invalid.

`isRequired`

`[data-required]`

Whether the checkbox is required.

The help text elements within a `RadioGroup` can be targeted with the `[slot=description]` and `[slot=errorMessage]` CSS selectors, or by adding a custom `className`.

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

Component

Context

Props

Ref

`RadioGroup`

`RadioGroupContext`

`[RadioGroupProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/RadioGroup.tsx:RadioGroupProps)`

`[HTMLDivElement](https://developer.mozilla.org/docs/Web/API/HTMLDivElement)`

`Radio`

`RadioContext`

`[RadioProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/RadioGroup.tsx:RadioProps)`

`[HTMLLabelElement](https://developer.mozilla.org/docs/Web/API/HTMLLabelElement)`

This example shows a `RadioDescription` component that accepts a radio in its children and renders a description element below it. It uses the [useId](https://react-spectrum.adobe.com/react-aria/useId.html) hook to generate a unique id for the description, and associates it with the radio via the `aria-describedby` attribute passed to the `RadioContext` provider.

```
import {RadioContext} from 'react-aria-components';
import {useId} from 'react-aria';

interface RadioDescriptionProps {
  children?: React.ReactNode;
  description?: string;
}

function RadioDescription({ children, description }: RadioDescriptionProps) {
  let descriptionId = useId();
  return (
    <div>
      <RadioContext.Provider value={{ 'aria-describedby': descriptionId }}>        {children}
      </RadioContext.Provider>
      <small id={descriptionId}>{description}</small>
    </div>
  );
}

<MyRadioGroup label="Show scrollbars" defaultValue="automatic">
  <RadioDescription description="Scrollbars will always be visible when using a mouse, and only while scrolling when using a trackpad.">
    <Radio value="automatic">Automatic</Radio>
  </RadioDescription>
  <RadioDescription description="Scrollbars will appear only while you are scrolling.">
    <Radio value="scrolling">While scrolling</Radio>
  </RadioDescription>
  <RadioDescription description="Scrollbars will always be visible.">
    <Radio value="always">Always</Radio>
  </RadioDescription>
</MyRadioGroup>
```

```
import {RadioContext} from 'react-aria-components';
import {useId} from 'react-aria';

interface RadioDescriptionProps {
  children?: React.ReactNode;
  description?: string;
}

function RadioDescription(
  { children, description }: RadioDescriptionProps
) {
  let descriptionId = useId();
  return (
    <div>
      <RadioContext.Provider
        value={{ 'aria-describedby': descriptionId }}
      >        {children}
      </RadioContext.Provider>
      <small id={descriptionId}>{description}</small>
    </div>
  );
}

<MyRadioGroup
  label="Show scrollbars"
  defaultValue="automatic"
>
  <RadioDescription description="Scrollbars will always be visible when using a mouse, and only while scrolling when using a trackpad.">
    <Radio value="automatic">Automatic</Radio>
  </RadioDescription>
  <RadioDescription description="Scrollbars will appear only while you are scrolling.">
    <Radio value="scrolling">While scrolling</Radio>
  </RadioDescription>
  <RadioDescription description="Scrollbars will always be visible.">
    <Radio value="always">Always</Radio>
  </RadioDescription>
</MyRadioGroup>
```

```
import {RadioContext} from 'react-aria-components';
import {useId} from 'react-aria';

interface RadioDescriptionProps {
  children?:
    React.ReactNode;
  description?: string;
}

function RadioDescription(
  {
    children,
    description
  }: RadioDescriptionProps
) {
  let descriptionId =
    useId();
  return (
    <div>
      <RadioContext.Provider
        value={{
          'aria-describedby':
            descriptionId
        }}
      >        {children}
      </RadioContext.Provider>
      <small
        id={descriptionId}
      >
        {description}
      </small>
    </div>
  );
}

<MyRadioGroup
  label="Show scrollbars"
  defaultValue="automatic"
>
  <RadioDescription description="Scrollbars will always be visible when using a mouse, and only while scrolling when using a trackpad.">
    <Radio value="automatic">
      Automatic
    </Radio>
  </RadioDescription>
  <RadioDescription description="Scrollbars will appear only while you are scrolling.">
    <Radio value="scrolling">
      While scrolling
    </Radio>
  </RadioDescription>
  <RadioDescription description="Scrollbars will always be visible.">
    <Radio value="always">
      Always
    </Radio>
  </RadioDescription>
</MyRadioGroup>
```

RadioGroup passes props to its child components, such as the label, via their associated contexts. These contexts are exported so you can also consume them in your own custom components. This enables you to reuse existing components from your app or component library together with React Aria Components.

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

This example consumes from `LabelContext` in an existing styled label component to make it compatible with React Aria Components. The `[useContextProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:useContextProps)` hook merges the local props and ref with the ones provided via context by RadioGroup.

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

Now you can use `MyCustomLabel` within a `RadioGroup`, in place of the builtin React Aria Components `Label`.

```
<RadioGroup>
  <MyCustomLabel>Favorite pet</MyCustomLabel>  <Radio value="dogs">Dog</Radio>
  <Radio value="cats">Cat</Radio>
  <Radio value="dragon">Dragon</Radio>
</RadioGroup>
```

```
<RadioGroup>
  <MyCustomLabel>Favorite pet</MyCustomLabel>  <Radio value="dogs">Dog</Radio>
  <Radio value="cats">Cat</Radio>
  <Radio value="dragon">Dragon</Radio>
</RadioGroup>
```

```
<RadioGroup>
  <MyCustomLabel>
    Favorite pet
  </MyCustomLabel>  <Radio value="dogs">
    Dog
  </Radio>
  <Radio value="cats">
    Cat
  </Radio>
  <Radio value="dragon">
    Dragon
  </Radio>
</RadioGroup>
```

RadioGroup provides a `[RadioGroupState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/radio/src/useRadioGroupState.ts:RadioGroupState)` object to its children via `RadioGroupStateContext`. This can be used to access and manipulate the radio group's state.

If you need to customize things further, such as accessing internal state or customizing DOM structure, you can drop down to the lower level Hook-based API. See [useRadioGroup](https://react-spectrum.adobe.com/react-aria/useRadioGroup.html) for more details.