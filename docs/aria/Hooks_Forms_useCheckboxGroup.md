# useCheckboxGroup

**Source**: [https://react-spectrum.adobe.com/react-aria/useCheckboxGroup.html](https://react-spectrum.adobe.com/react-aria/useCheckboxGroup.html)

> Documentation for useCheckboxGroup in the React Aria package.

---

Provides the behavior and accessibility implementation for a checkbox group component. Checkbox groups allow users to select multiple items from a list of options.

* * *

`useCheckboxGroup( (props: [AriaCheckboxGroupProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/checkbox/src/index.d.ts:AriaCheckboxGroupProps), , state: [CheckboxGroupState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/checkbox/src/useCheckboxGroupState.ts:CheckboxGroupState) )): [CheckboxGroupAria](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/checkbox/src/useCheckboxGroup.ts:CheckboxGroupAria)` `useCheckboxGroupItem( props: [AriaCheckboxGroupItemProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/checkbox/src/index.d.ts:AriaCheckboxGroupItemProps), state: [CheckboxGroupState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/checkbox/src/useCheckboxGroupState.ts:CheckboxGroupState), inputRef: [RefObject](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/refs.d.ts:RefObject)<[HTMLInputElement](https://developer.mozilla.org/docs/Web/API/HTMLInputElement) |  | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)> ): [CheckboxAria](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/checkbox/src/useCheckbox.ts:CheckboxAria)`

* * *

Checkbox groups can be built in HTML with the [<fieldset>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset) and [<input>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) elements, however these can be difficult to style. `useCheckboxGroup` and `useCheckboxGroupItem` help achieve accessible checkbox groups that can be styled as needed.

-   Checkbox groups are exposed to assistive technology via ARIA
-   Each checkbox is built with a native HTML `<input>` element, which can be optionally visually hidden to allow custom styling
-   Full support for browser features like form autofill and validation
-   Keyboard focus management and cross browser normalization
-   Group and checkbox labeling support for assistive technology

* * *

Shows a checkbox group component with labels pointing to its parts, including the checkbox group label, and group element containing three checkboxes with input and label elements.ShoppingMusicTravelInterestsInputCheckbox group labelGroupCheckbox label

A checkbox group consists of a set of checkboxes, and a label. Each checkbox includes a label and a visual selection indicator. Zero or more checkboxes within the group can be selected at a time. Users may click or touch a checkbox to select it, or use the Tab key to navigate to it and the Space key to toggle it.

`useCheckboxGroup` returns props for the group and its label, which you should spread onto the appropriate element:

Name

Type

Description

`groupProps`

`[DOMAttributes](https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes)`

Props for the checkbox group wrapper element.

`labelProps`

`[DOMAttributes](https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes)`

Props for the checkbox group's visible label (if any).

`descriptionProps`

`[DOMAttributes](https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes)`

Props for the checkbox group description element, if any.

`errorMessageProps`

`[DOMAttributes](https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes)`

Props for the checkbox group error message element, if any.

`isInvalid`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether the input value is invalid.

`validationErrors`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)[]`

The current error messages for the input if it is invalid, otherwise an empty array.

`validationDetails`

`ValidityState`

The native validation details for the input.

`useCheckboxGroupItem` returns props for an individual checkbox:

Name

Type

Description

`labelProps`

`[LabelHTMLAttributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label#attributes)<[HTMLLabelElement](https://developer.mozilla.org/docs/Web/API/HTMLLabelElement)>`

Props for the label wrapper element.

`inputProps`

`[InputHTMLAttributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes)<[HTMLInputElement](https://developer.mozilla.org/docs/Web/API/HTMLInputElement)>`

Props for the input element.

`isSelected`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether the checkbox is selected.

`isPressed`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether the checkbox is in a pressed state.

`isDisabled`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether the checkbox is disabled.

`isReadOnly`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether the checkbox is read only.

`isInvalid`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether the input value is invalid.

`validationErrors`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)[]`

The current error messages for the input if it is invalid, otherwise an empty array.

`validationDetails`

`ValidityState`

The native validation details for the input.

Selection state is managed by the `[useCheckboxGroupState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/checkbox/src/useCheckboxGroupState.ts:useCheckboxGroupState)` hook in `@react-stately/checkbox`. The state object should be passed as an option to `useCheckboxGroup` and `useCheckboxGroupItem`.

Individual checkboxes must have a visual label. If the checkbox group does not have a visible label, an `aria-label` or `aria-labelledby` prop must be passed instead to identify the element to assistive technology.

**Note:** `useCheckboxGroupItem` should only be used when it is contained within a checkbox group. For a standalone checkbox, use the [useCheckbox](https://react-spectrum.adobe.com/react-aria/useCheckbox.html) hook instead.

* * *

This example uses native input elements for the checkboxes, and React context to share state from the group to each checkbox. An HTML `<label>` element wraps the native input and the text to provide an implicit label for the checkbox.

```
import {useCheckboxGroupState} from 'react-stately';
import {useCheckboxGroup, useCheckboxGroupItem} from 'react-aria';

let CheckboxGroupContext = React.createContext(null);

function CheckboxGroup(props) {
  let { children, label, description } = props;
  let state = useCheckboxGroupState(props);
  let {
    groupProps,
    labelProps,
    descriptionProps,
    errorMessageProps,
    isInvalid,
    validationErrors
  } = useCheckboxGroup(props, state);

  return (
    <div {...groupProps}>
      <span {...labelProps}>{label}</span>
      <CheckboxGroupContext.Provider value={state}>
        {children}
      </CheckboxGroupContext.Provider>
      {description && (
        <div {...descriptionProps} style={{ fontSize: 12 }}>{description}</div>
      )}
      {isInvalid &&
        (
          <div {...errorMessageProps} style={{ color: 'red', fontSize: 12 }}>
            {validationErrors.join(' ')}
          </div>
        )}
    </div>
  );
}

function Checkbox(props) {
  let { children } = props;
  let state = React.useContext(CheckboxGroupContext);
  let ref = React.useRef(null);
  let { inputProps, labelProps } = useCheckboxGroupItem(props, state, ref);

  let isDisabled = state.isDisabled || props.isDisabled;
  let isSelected = state.isSelected(props.value);

  return (
    <label
      {...labelProps}
      style={{
        display: 'block',
        color: (isDisabled && 'var(--gray)') || (isSelected && 'var(--blue)')
      }}
    >
      <input {...inputProps} ref={ref} />
      {children}
    </label>
  );
}

<CheckboxGroup label="Favorite sports">
  <Checkbox value="soccer" isDisabled>Soccer</Checkbox>
  <Checkbox value="baseball">Baseball</Checkbox>
  <Checkbox value="basketball">Basketball</Checkbox>
</CheckboxGroup>
```

```
import {useCheckboxGroupState} from 'react-stately';
import {
  useCheckboxGroup,
  useCheckboxGroupItem
} from 'react-aria';

let CheckboxGroupContext = React.createContext(null);

function CheckboxGroup(props) {
  let { children, label, description } = props;
  let state = useCheckboxGroupState(props);
  let {
    groupProps,
    labelProps,
    descriptionProps,
    errorMessageProps,
    isInvalid,
    validationErrors
  } = useCheckboxGroup(props, state);

  return (
    <div {...groupProps}>
      <span {...labelProps}>{label}</span>
      <CheckboxGroupContext.Provider value={state}>
        {children}
      </CheckboxGroupContext.Provider>
      {description && (
        <div {...descriptionProps} style={{ fontSize: 12 }}>
          {description}
        </div>
      )}
      {isInvalid &&
        (
          <div
            {...errorMessageProps}
            style={{ color: 'red', fontSize: 12 }}
          >
            {validationErrors.join(' ')}
          </div>
        )}
    </div>
  );
}

function Checkbox(props) {
  let { children } = props;
  let state = React.useContext(CheckboxGroupContext);
  let ref = React.useRef(null);
  let { inputProps, labelProps } = useCheckboxGroupItem(
    props,
    state,
    ref
  );

  let isDisabled = state.isDisabled || props.isDisabled;
  let isSelected = state.isSelected(props.value);

  return (
    <label
      {...labelProps}
      style={{
        display: 'block',
        color: (isDisabled && 'var(--gray)') ||
          (isSelected && 'var(--blue)')
      }}
    >
      <input {...inputProps} ref={ref} />
      {children}
    </label>
  );
}

<CheckboxGroup label="Favorite sports">
  <Checkbox value="soccer" isDisabled>Soccer</Checkbox>
  <Checkbox value="baseball">Baseball</Checkbox>
  <Checkbox value="basketball">Basketball</Checkbox>
</CheckboxGroup>
```

```
import {useCheckboxGroupState} from 'react-stately';
import {
  useCheckboxGroup,
  useCheckboxGroupItem
} from 'react-aria';

let CheckboxGroupContext =
  React.createContext(
    null
  );

function CheckboxGroup(
  props
) {
  let {
    children,
    label,
    description
  } = props;
  let state =
    useCheckboxGroupState(
      props
    );
  let {
    groupProps,
    labelProps,
    descriptionProps,
    errorMessageProps,
    isInvalid,
    validationErrors
  } = useCheckboxGroup(
    props,
    state
  );

  return (
    <div {...groupProps}>
      <span
        {...labelProps}
      >
        {label}
      </span>
      <CheckboxGroupContext.Provider
        value={state}
      >
        {children}
      </CheckboxGroupContext.Provider>
      {description && (
        <div
          {...descriptionProps}
          style={{
            fontSize: 12
          }}
        >
          {description}
        </div>
      )}
      {isInvalid &&
        (
          <div
            {...errorMessageProps}
            style={{
              color:
                'red',
              fontSize:
                12
            }}
          >
            {validationErrors
              .join(' ')}
          </div>
        )}
    </div>
  );
}

function Checkbox(
  props
) {
  let { children } =
    props;
  let state = React
    .useContext(
      CheckboxGroupContext
    );
  let ref = React.useRef(
    null
  );
  let {
    inputProps,
    labelProps
  } =
    useCheckboxGroupItem(
      props,
      state,
      ref
    );

  let isDisabled =
    state.isDisabled ||
    props.isDisabled;
  let isSelected = state
    .isSelected(
      props.value
    );

  return (
    <label
      {...labelProps}
      style={{
        display: 'block',
        color:
          (isDisabled &&
            'var(--gray)') ||
          (isSelected &&
            'var(--blue)')
      }}
    >
      <input
        {...inputProps}
        ref={ref}
      />
      {children}
    </label>
  );
}

<CheckboxGroup label="Favorite sports">
  <Checkbox
    value="soccer"
    isDisabled
  >
    Soccer
  </Checkbox>
  <Checkbox value="baseball">
    Baseball
  </Checkbox>
  <Checkbox value="basketball">
    Basketball
  </Checkbox>
</CheckboxGroup>
```

* * *

See the [useCheckbox](https://react-spectrum.adobe.com/react-aria/useCheckbox.html#styling) docs for details on how to customize the styling of checkbox elements.

* * *

[![](https://react-spectrum.adobe.com/buttongroup-example.2ca88afe.png)

Button Group

A multi-selectable segmented ButtonGroup component.

](https://codesandbox.io/s/magical-bose-l7z36b?file=/src/ButtonGroup.js)

* * *

The following examples show how to use the `CheckboxGroup` component created in the above example.

An initial, uncontrolled value can be provided to the CheckboxGroup using the `defaultValue` prop, which accepts an array of selected items that map to the `value` prop on each Checkbox.

```
<CheckboxGroup
  label="Favorite sports (uncontrolled)"
  defaultValue={['soccer', 'baseball']}
>
  <Checkbox value="soccer">Soccer</Checkbox>
  <Checkbox value="baseball">Baseball</Checkbox>
  <Checkbox value="basketball">Basketball</Checkbox>
</CheckboxGroup>
```

```
<CheckboxGroup
  label="Favorite sports (uncontrolled)"
  defaultValue={['soccer', 'baseball']}
>
  <Checkbox value="soccer">Soccer</Checkbox>
  <Checkbox value="baseball">Baseball</Checkbox>
  <Checkbox value="basketball">Basketball</Checkbox>
</CheckboxGroup>
```

```
<CheckboxGroup
  label="Favorite sports (uncontrolled)"
  defaultValue={[
    'soccer',
    'baseball'
  ]}
>
  <Checkbox value="soccer">
    Soccer
  </Checkbox>
  <Checkbox value="baseball">
    Baseball
  </Checkbox>
  <Checkbox value="basketball">
    Basketball
  </Checkbox>
</CheckboxGroup>
```

A controlled value can be provided using the `value` prop, which accepts an array of selected items, which map to the `value` prop on each Checkbox. The `onChange` event is fired when the user checks or unchecks an option. It receives a new array containing the updated selected values.

```
function Example() {
  let [selected, setSelected] = React.useState(['soccer', 'baseball']);

  return (
    <CheckboxGroup
      label="Favorite sports (controlled)"
      value={selected}
      onChange={setSelected}
    >
      <Checkbox value="soccer">Soccer</Checkbox>
      <Checkbox value="baseball">Baseball</Checkbox>
      <Checkbox value="basketball">Basketball</Checkbox>
    </CheckboxGroup>
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
    <CheckboxGroup
      label="Favorite sports (controlled)"
      value={selected}
      onChange={setSelected}
    >
      <Checkbox value="soccer">Soccer</Checkbox>
      <Checkbox value="baseball">Baseball</Checkbox>
      <Checkbox value="basketball">Basketball</Checkbox>
    </CheckboxGroup>
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
    <CheckboxGroup
      label="Favorite sports (controlled)"
      value={selected}
      onChange={setSelected}
    >
      <Checkbox value="soccer">
        Soccer
      </Checkbox>
      <Checkbox value="baseball">
        Baseball
      </Checkbox>
      <Checkbox value="basketball">
        Basketball
      </Checkbox>
    </CheckboxGroup>
  );
}
```

The `description` prop can be used to associate additional help text with a checkbox group.

```
<CheckboxGroup
  label="Favorite sports"
  description="Select your favorite sports."
>
  <Checkbox value="soccer">Soccer</Checkbox>
  <Checkbox value="baseball">Baseball</Checkbox>
  <Checkbox value="basketball">Basketball</Checkbox>
</CheckboxGroup>
```

```
<CheckboxGroup
  label="Favorite sports"
  description="Select your favorite sports."
>
  <Checkbox value="soccer">Soccer</Checkbox>
  <Checkbox value="baseball">Baseball</Checkbox>
  <Checkbox value="basketball">Basketball</Checkbox>
</CheckboxGroup>
```

```
<CheckboxGroup
  label="Favorite sports"
  description="Select your favorite sports."
>
  <Checkbox value="soccer">
    Soccer
  </Checkbox>
  <Checkbox value="baseball">
    Baseball
  </Checkbox>
  <Checkbox value="basketball">
    Basketball
  </Checkbox>
</CheckboxGroup>
```

CheckboxGroup supports the `isRequired` prop to ensure the user selects at least one item, as well as custom client and server-side validation. Individual checkboxes also support validation, and errors from all checkboxes are aggregated at the group level. CheckboxGroup can also be integrated with other form libraries. See the [Forms](https://react-spectrum.adobe.com/react-aria/forms.html) guide to learn more.

When a CheckboxGroup has the `validationBehavior="native"` prop, validation errors block form submission. The `isRequired` prop at the `CheckboxGroup` level requires that at least one item is selected. To display validation errors, use the `validationErrors` and `errorMessageProps` returned by `useCheckboxGroup`. This allows you to render error messages from all of the above sources with consistent custom styles.

```
<form>
  <CheckboxGroup
    label="Sandwich condiments"
    name="condiments"
    isRequired
    validationBehavior="native"  >
    <Checkbox value="lettuce">Lettuce</Checkbox>
    <Checkbox value="tomato">Tomato</Checkbox>
    <Checkbox value="onion">Onion</Checkbox>
    <Checkbox value="sprouts">Sprouts</Checkbox>
  </CheckboxGroup>
  <input type="submit" style={{marginTop: 8}} />
</form>
```

```
<form>
  <CheckboxGroup
    label="Sandwich condiments"
    name="condiments"
    isRequired
    validationBehavior="native"  >
    <Checkbox value="lettuce">Lettuce</Checkbox>
    <Checkbox value="tomato">Tomato</Checkbox>
    <Checkbox value="onion">Onion</Checkbox>
    <Checkbox value="sprouts">Sprouts</Checkbox>
  </CheckboxGroup>
  <input type="submit" style={{marginTop: 8}} />
</form>
```

```
<form>
  <CheckboxGroup
    label="Sandwich condiments"
    name="condiments"
    isRequired
    validationBehavior="native"  >
    <Checkbox value="lettuce">
      Lettuce
    </Checkbox>
    <Checkbox value="tomato">
      Tomato
    </Checkbox>
    <Checkbox value="onion">
      Onion
    </Checkbox>
    <Checkbox value="sprouts">
      Sprouts
    </Checkbox>
  </CheckboxGroup>
  <input
    type="submit"
    style={{
      marginTop: 8
    }}
  />
</form>
```

To require that specific checkboxes are checked, set the `isRequired` prop at the `Checkbox` level instead of the `CheckboxGroup`. The following example shows how to require that all items are selected.

```
<form>
  <CheckboxGroup label="Agree to the following" validationBehavior="native">
    <Checkbox value="terms" isRequired>Terms and conditions</Checkbox>
    <Checkbox value="privacy" isRequired>Privacy policy</Checkbox>
    <Checkbox value="cookies" isRequired>Cookie policy</Checkbox>  </CheckboxGroup>
  <input type="submit" style={{marginTop: 8}} />
</form>
```

```
<form>
  <CheckboxGroup
    label="Agree to the following"
    validationBehavior="native"
  >
    <Checkbox value="terms" isRequired>
      Terms and conditions
    </Checkbox>
    <Checkbox value="privacy" isRequired>
      Privacy policy
    </Checkbox>
    <Checkbox value="cookies" isRequired>
      Cookie policy
    </Checkbox>  </CheckboxGroup>
  <input type="submit" style={{ marginTop: 8 }} />
</form>
```

```
<form>
  <CheckboxGroup
    label="Agree to the following"
    validationBehavior="native"
  >
    <Checkbox
      value="terms"
      isRequired
    >
      Terms and
      conditions
    </Checkbox>
    <Checkbox
      value="privacy"
      isRequired
    >
      Privacy policy
    </Checkbox>
    <Checkbox
      value="cookies"
      isRequired
    >
      Cookie policy
    </Checkbox>  </CheckboxGroup>
  <input
    type="submit"
    style={{
      marginTop: 8
    }}
  />
</form>
```

The entire CheckboxGroup can be disabled with the `isDisabled` prop.

```
<CheckboxGroup label="Favorite sports" isDisabled>
  <Checkbox value="soccer">Soccer</Checkbox>
  <Checkbox value="baseball">Baseball</Checkbox>
  <Checkbox value="basketball">Basketball</Checkbox>
</CheckboxGroup>
```

```
<CheckboxGroup label="Favorite sports" isDisabled>
  <Checkbox value="soccer">Soccer</Checkbox>
  <Checkbox value="baseball">Baseball</Checkbox>
  <Checkbox value="basketball">Basketball</Checkbox>
</CheckboxGroup>
```

```
<CheckboxGroup
  label="Favorite sports"
  isDisabled
>
  <Checkbox value="soccer">
    Soccer
  </Checkbox>
  <Checkbox value="baseball">
    Baseball
  </Checkbox>
  <Checkbox value="basketball">
    Basketball
  </Checkbox>
</CheckboxGroup>
```

To disable an individual checkbox, pass `isDisabled` to the `Checkbox` instead.

```
<CheckboxGroup label="Favorite sports">
  <Checkbox value="soccer">Soccer</Checkbox>
  <Checkbox value="baseball" isDisabled>Baseball</Checkbox>
  <Checkbox value="basketball">Basketball</Checkbox>
</CheckboxGroup>
```

```
<CheckboxGroup label="Favorite sports">
  <Checkbox value="soccer">Soccer</Checkbox>
  <Checkbox value="baseball" isDisabled>Baseball</Checkbox>
  <Checkbox value="basketball">Basketball</Checkbox>
</CheckboxGroup>
```

```
<CheckboxGroup label="Favorite sports">
  <Checkbox value="soccer">
    Soccer
  </Checkbox>
  <Checkbox
    value="baseball"
    isDisabled
  >
    Baseball
  </Checkbox>
  <Checkbox value="basketball">
    Basketball
  </Checkbox>
</CheckboxGroup>
```

The `isReadOnly` prop makes the selection immutable. Unlike `isDisabled`, the CheckboxGroup remains focusable. See the [MDN docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly) for more information.

```
<CheckboxGroup label="Favorite sports" defaultValue={['baseball']} isReadOnly>
  <Checkbox value="soccer">Soccer</Checkbox>
  <Checkbox value="baseball">Baseball</Checkbox>
  <Checkbox value="basketball">Basketball</Checkbox>
</CheckboxGroup>
```

```
<CheckboxGroup
  label="Favorite sports"
  defaultValue={['baseball']}
  isReadOnly
>
  <Checkbox value="soccer">Soccer</Checkbox>
  <Checkbox value="baseball">Baseball</Checkbox>
  <Checkbox value="basketball">Basketball</Checkbox>
</CheckboxGroup>
```

```
<CheckboxGroup
  label="Favorite sports"
  defaultValue={[
    'baseball'
  ]}
  isReadOnly
>
  <Checkbox value="soccer">
    Soccer
  </Checkbox>
  <Checkbox value="baseball">
    Baseball
  </Checkbox>
  <Checkbox value="basketball">
    Basketball
  </Checkbox>
</CheckboxGroup>
```

CheckboxGroup supports the `name` prop, paired with the Checkbox `value` prop, for integration with HTML forms.

```
<CheckboxGroup label="Favorite sports" name="sports">
  <Checkbox value="soccer">Soccer</Checkbox>
  <Checkbox value="baseball">Baseball</Checkbox>
  <Checkbox value="basketball">Basketball</Checkbox>
</CheckboxGroup>
```

```
<CheckboxGroup label="Favorite sports" name="sports">
  <Checkbox value="soccer">Soccer</Checkbox>
  <Checkbox value="baseball">Baseball</Checkbox>
  <Checkbox value="basketball">Basketball</Checkbox>
</CheckboxGroup>
```

```
<CheckboxGroup
  label="Favorite sports"
  name="sports"
>
  <Checkbox value="soccer">
    Soccer
  </Checkbox>
  <Checkbox value="baseball">
    Baseball
  </Checkbox>
  <Checkbox value="basketball">
    Basketball
  </Checkbox>
</CheckboxGroup>
```