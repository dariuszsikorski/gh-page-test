# useRadioGroup

**Source**: [https://react-spectrum.adobe.com/react-aria/useRadioGroup.html](https://react-spectrum.adobe.com/react-aria/useRadioGroup.html)

> Documentation for useRadioGroup in the React Aria package.

---

Provides the behavior and accessibility implementation for a radio group component. Radio groups allow users to select a single item from a list of mutually exclusive options.

* * *

`useRadioGroup( (props: [AriaRadioGroupProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/radio/src/index.d.ts:AriaRadioGroupProps), , state: [RadioGroupState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/radio/src/useRadioGroupState.ts:RadioGroupState) )): [RadioGroupAria](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/radio/src/useRadioGroup.ts:RadioGroupAria)` `useRadio( props: [AriaRadioProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/radio/src/index.d.ts:AriaRadioProps), state: [RadioGroupState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/radio/src/useRadioGroupState.ts:RadioGroupState), ref: [RefObject](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/refs.d.ts:RefObject)<[HTMLInputElement](https://developer.mozilla.org/docs/Web/API/HTMLInputElement) |  | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)> ): [RadioAria](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/radio/src/useRadio.ts:RadioAria)`

* * *

Radio groups can be built in HTML with the [<fieldset>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset) and [<input>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) elements, however these can be difficult to style. `useRadioGroup` and `useRadio` help achieve accessible radio groups that can be styled as needed.

-   Radio groups are exposed to assistive technology via ARIA
-   Each radio is built with a native HTML `<input>` element, which can be optionally visually hidden to allow custom styling
-   Full support for browser features like form autofill and validation
-   Keyboard focus management and cross browser normalization
-   Group and radio labeling support for assistive technology

* * *

Shows a radio group component with labels pointing to its parts, including the radio group label, and radio group element containing three radios with input and label elements.CatDogDragonFavorite PetInputRadio group labelRadio groupRadio label

A radio group consists of a set of radio buttons, and a label. Each radio includes a label and a visual selection indicator. A single radio button within the group can be selected at a time. Users may click or touch a radio button to select it, or use the Tab key to navigate to the group, the arrow keys to navigate within the group, and the Space key to select an option.

`useRadioGroup` returns props for the group and its label, which you should spread onto the appropriate element:

Name

Type

Description

`radioGroupProps`

`[DOMAttributes](https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes)`

Props for the radio group wrapper element.

`labelProps`

`[DOMAttributes](https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes)`

Props for the radio group's visible label (if any).

`descriptionProps`

`[DOMAttributes](https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes)`

Props for the radio group description element, if any.

`errorMessageProps`

`[DOMAttributes](https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes)`

Props for the radio group error message element, if any.

`isInvalid`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether the input value is invalid.

`validationErrors`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)[]`

The current error messages for the input if it is invalid, otherwise an empty array.

`validationDetails`

`ValidityState`

The native validation details for the input.

`useRadio` returns props for an individual radio, along with states that can be used for styling:

Name

Type

Description

`labelProps`

`[LabelHTMLAttributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label#attributes)<[HTMLLabelElement](https://developer.mozilla.org/docs/Web/API/HTMLLabelElement)>`

Props for the label wrapper element.

`inputProps`

`[InputHTMLAttributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes)<[HTMLInputElement](https://developer.mozilla.org/docs/Web/API/HTMLInputElement)>`

Props for the input element.

`isDisabled`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether the radio is disabled.

`isSelected`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether the radio is currently selected.

`isPressed`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether the radio is in a pressed state.

Selection state is managed by the `[useRadioGroupState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/radio/src/useRadioGroupState.ts:useRadioGroupState)` hook in `@react-stately/radio`. The state object should be passed as an option to `useRadio`.

Individual radio buttons must have a visual label. If the radio group does not have a visible label, an `aria-label` or `aria-labelledby` prop must be passed instead to identify the element to assistive technology.

* * *

This example uses native input elements for the radios, and React context to share state from the group to each radio. An HTML `<label>` element wraps the native input and the text to provide an implicit label for the radio.

```
import {useRadioGroupState} from 'react-stately';
import {useRadio, useRadioGroup} from 'react-aria';

let RadioContext = React.createContext(null);

function RadioGroup(props) {
  let { children, label, description, errorMessage } = props;
  let state = useRadioGroupState(props);
  let { radioGroupProps, labelProps, descriptionProps, errorMessageProps } =
    useRadioGroup(props, state);

  return (
    <div {...radioGroupProps}>
      <span {...labelProps}>{label}</span>
      <RadioContext.Provider value={state}>
        {children}
      </RadioContext.Provider>
      {description && (
        <div {...descriptionProps} style={{ fontSize: 12 }}>{description}</div>
      )}
      {errorMessage && state.isInvalid &&
        (
          <div {...errorMessageProps} style={{ color: 'red', fontSize: 12 }}>
            {errorMessage}
          </div>
        )}
    </div>
  );
}

function Radio(props) {
  let { children } = props;
  let state = React.useContext(RadioContext);
  let ref = React.useRef(null);
  let { inputProps } = useRadio(props, state, ref);

  return (
    <label style={{ display: 'block' }}>
      <input {...inputProps} ref={ref} />
      {children}
    </label>
  );
}

<RadioGroup label="Favorite pet">
  <Radio value="dogs">Dogs</Radio>
  <Radio value="cats">Cats</Radio>
</RadioGroup>
```

```
import {useRadioGroupState} from 'react-stately';
import {useRadio, useRadioGroup} from 'react-aria';

let RadioContext = React.createContext(null);

function RadioGroup(props) {
  let { children, label, description, errorMessage } =
    props;
  let state = useRadioGroupState(props);
  let {
    radioGroupProps,
    labelProps,
    descriptionProps,
    errorMessageProps
  } = useRadioGroup(props, state);

  return (
    <div {...radioGroupProps}>
      <span {...labelProps}>{label}</span>
      <RadioContext.Provider value={state}>
        {children}
      </RadioContext.Provider>
      {description && (
        <div {...descriptionProps} style={{ fontSize: 12 }}>
          {description}
        </div>
      )}
      {errorMessage && state.isInvalid &&
        (
          <div
            {...errorMessageProps}
            style={{ color: 'red', fontSize: 12 }}
          >
            {errorMessage}
          </div>
        )}
    </div>
  );
}

function Radio(props) {
  let { children } = props;
  let state = React.useContext(RadioContext);
  let ref = React.useRef(null);
  let { inputProps } = useRadio(props, state, ref);

  return (
    <label style={{ display: 'block' }}>
      <input {...inputProps} ref={ref} />
      {children}
    </label>
  );
}

<RadioGroup label="Favorite pet">
  <Radio value="dogs">Dogs</Radio>
  <Radio value="cats">Cats</Radio>
</RadioGroup>
```

```
import {useRadioGroupState} from 'react-stately';
import {
  useRadio,
  useRadioGroup
} from 'react-aria';

let RadioContext = React
  .createContext(null);

function RadioGroup(
  props
) {
  let {
    children,
    label,
    description,
    errorMessage
  } = props;
  let state =
    useRadioGroupState(
      props
    );
  let {
    radioGroupProps,
    labelProps,
    descriptionProps,
    errorMessageProps
  } = useRadioGroup(
    props,
    state
  );

  return (
    <div
      {...radioGroupProps}
    >
      <span
        {...labelProps}
      >
        {label}
      </span>
      <RadioContext.Provider
        value={state}
      >
        {children}
      </RadioContext.Provider>
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
      {errorMessage &&
        state
          .isInvalid &&
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
            {errorMessage}
          </div>
        )}
    </div>
  );
}

function Radio(props) {
  let { children } =
    props;
  let state = React
    .useContext(
      RadioContext
    );
  let ref = React.useRef(
    null
  );
  let { inputProps } =
    useRadio(
      props,
      state,
      ref
    );

  return (
    <label
      style={{
        display: 'block'
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

<RadioGroup label="Favorite pet">
  <Radio value="dogs">
    Dogs
  </Radio>
  <Radio value="cats">
    Cats
  </Radio>
</RadioGroup>
```

* * *

To build a custom styled radio button, you can make the native input element visually hidden. This is possible using the <`[VisuallyHidden](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/visually-hidden/src/VisuallyHidden.tsx:VisuallyHidden)`\> utility component from `@react-aria/visually-hidden`. It is still in the DOM and accessible to assistive technology, but invisible. This example uses SVG to build the visual radio button, which is hidden from screen readers with `aria-hidden`.

For keyboard accessibility, a focus ring is important to indicate which element has keyboard focus. This is implemented with the `[useFocusRing](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/focus/src/useFocusRing.ts:useFocusRing)` hook from `@react-aria/focus`. When `isFocusVisible` is true, an extra SVG element is rendered to indicate focus. The focus ring is only visible when the user is interacting with a keyboard, not with a mouse or touch.

```
import {useFocusRing, VisuallyHidden} from 'react-aria';

// RadioGroup is the same as in the previous example
let RadioContext = React.createContext(null);

function RadioGroup(props) {
  let { children, label, description } = props;
  let state = useRadioGroupState(props);
  let {
    radioGroupProps,
    labelProps,
    descriptionProps,
    errorMessageProps,
    isInvalid,
    validationErrors
  } = useRadioGroup(props, state);

  return (
    <div {...radioGroupProps}>
      <span {...labelProps}>{label}</span>
      <RadioContext.Provider value={state}>
        {children}
      </RadioContext.Provider>
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

function Radio(props) {
  let { children } = props;
  let state = React.useContext(RadioContext);
  let ref = React.useRef(null);
  let { inputProps, isSelected, isDisabled } = useRadio(props, state, ref);
  let { isFocusVisible, focusProps } = useFocusRing();
  let strokeWidth = isSelected ? 6 : 2;

  return (
    <label
      style={{
        display: 'flex',
        alignItems: 'center',
        opacity: isDisabled ? 0.4 : 1
      }}
    >
      <VisuallyHidden>
        <input {...inputProps} {...focusProps} ref={ref} />
      </VisuallyHidden>
      <svg
        width={24}
        height={24}
        aria-hidden="true"
        style={{ marginRight: 4 }}
      >
        <circle
          cx={12}
          cy={12}
          r={8 - strokeWidth / 2}
          fill="none"
          stroke={isSelected ? 'orange' : 'gray'}
          strokeWidth={strokeWidth}
        />
        {isFocusVisible &&
          (
            <circle
              cx={12}
              cy={12}
              r={11}
              fill="none"
              stroke="orange"
              strokeWidth={2}
            />
          )}
      </svg>
      {children}
    </label>
  );
}

<RadioGroup label="Favorite pet">
  <Radio value="dogs">Dogs</Radio>
  <Radio value="cats">Cats</Radio>
</RadioGroup>
```

```
import {useFocusRing, VisuallyHidden} from 'react-aria';

// RadioGroup is the same as in the previous example
let RadioContext = React.createContext(null);

function RadioGroup(props) {
  let { children, label, description } = props;
  let state = useRadioGroupState(props);
  let {
    radioGroupProps,
    labelProps,
    descriptionProps,
    errorMessageProps,
    isInvalid,
    validationErrors
  } = useRadioGroup(props, state);

  return (
    <div {...radioGroupProps}>
      <span {...labelProps}>{label}</span>
      <RadioContext.Provider value={state}>
        {children}
      </RadioContext.Provider>
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

function Radio(props) {
  let { children } = props;
  let state = React.useContext(RadioContext);
  let ref = React.useRef(null);
  let { inputProps, isSelected, isDisabled } = useRadio(
    props,
    state,
    ref
  );
  let { isFocusVisible, focusProps } = useFocusRing();
  let strokeWidth = isSelected ? 6 : 2;

  return (
    <label
      style={{
        display: 'flex',
        alignItems: 'center',
        opacity: isDisabled ? 0.4 : 1
      }}
    >
      <VisuallyHidden>
        <input {...inputProps} {...focusProps} ref={ref} />
      </VisuallyHidden>
      <svg
        width={24}
        height={24}
        aria-hidden="true"
        style={{ marginRight: 4 }}
      >
        <circle
          cx={12}
          cy={12}
          r={8 - strokeWidth / 2}
          fill="none"
          stroke={isSelected ? 'orange' : 'gray'}
          strokeWidth={strokeWidth}
        />
        {isFocusVisible &&
          (
            <circle
              cx={12}
              cy={12}
              r={11}
              fill="none"
              stroke="orange"
              strokeWidth={2}
            />
          )}
      </svg>
      {children}
    </label>
  );
}

<RadioGroup label="Favorite pet">
  <Radio value="dogs">Dogs</Radio>
  <Radio value="cats">Cats</Radio>
</RadioGroup>
```

```
import {
  useFocusRing,
  VisuallyHidden
} from 'react-aria';

// RadioGroup is the same as in the previous example
let RadioContext = React
  .createContext(null);

function RadioGroup(
  props
) {
  let {
    children,
    label,
    description
  } = props;
  let state =
    useRadioGroupState(
      props
    );
  let {
    radioGroupProps,
    labelProps,
    descriptionProps,
    errorMessageProps,
    isInvalid,
    validationErrors
  } = useRadioGroup(
    props,
    state
  );

  return (
    <div
      {...radioGroupProps}
    >
      <span
        {...labelProps}
      >
        {label}
      </span>
      <RadioContext.Provider
        value={state}
      >
        {children}
      </RadioContext.Provider>
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

function Radio(props) {
  let { children } =
    props;
  let state = React
    .useContext(
      RadioContext
    );
  let ref = React.useRef(
    null
  );
  let {
    inputProps,
    isSelected,
    isDisabled
  } = useRadio(
    props,
    state,
    ref
  );
  let {
    isFocusVisible,
    focusProps
  } = useFocusRing();
  let strokeWidth =
    isSelected ? 6 : 2;

  return (
    <label
      style={{
        display: 'flex',
        alignItems:
          'center',
        opacity:
          isDisabled
            ? 0.4
            : 1
      }}
    >
      <VisuallyHidden>
        <input
          {...inputProps}
          {...focusProps}
          ref={ref}
        />
      </VisuallyHidden>
      <svg
        width={24}
        height={24}
        aria-hidden="true"
        style={{
          marginRight: 4
        }}
      >
        <circle
          cx={12}
          cy={12}
          r={8 -
            strokeWidth /
              2}
          fill="none"
          stroke={isSelected
            ? 'orange'
            : 'gray'}
          strokeWidth={strokeWidth}
        />
        {isFocusVisible &&
          (
            <circle
              cx={12}
              cy={12}
              r={11}
              fill="none"
              stroke="orange"
              strokeWidth={2}
            />
          )}
      </svg>
      {children}
    </label>
  );
}

<RadioGroup label="Favorite pet">
  <Radio value="dogs">
    Dogs
  </Radio>
  <Radio value="cats">
    Cats
  </Radio>
</RadioGroup>
```

* * *

[![](https://react-spectrum.adobe.com/swatch-example.41f639bc.png)

Swatch Group

A color swatch picker built with Tailwind CSS.

](https://codesandbox.io/s/bold-wood-pxm478?file=/src/SwatchGroup.tsx)[![](https://react-spectrum.adobe.com/card-example.0dbe729a.png)

Selectable Cards

A selectable card group built with Styled Components.

](https://codesandbox.io/s/recursing-night-pu6w2g?file=/src/CardGroup.tsx)[![](https://react-spectrum.adobe.com/buttongroup-example.165f9e91.png)

Button Group

A single-selectable segmented button group.

](https://codesandbox.io/s/epic-faraday-qoiy0l?file=/src/ButtonGroup.js)

* * *

The following examples show how to use the `RadioGroup` component created in the above example.

An initial, uncontrolled value can be provided to the RadioGroup using the `defaultValue` prop, which accepts a value corresponding with the `value` prop of each Radio.

```
<RadioGroup label="Are you a wizard?" defaultValue="yes">
  <Radio value="yes">Yes</Radio>
  <Radio value="no">No</Radio>
</RadioGroup>
```

```
<RadioGroup label="Are you a wizard?" defaultValue="yes">
  <Radio value="yes">Yes</Radio>
  <Radio value="no">No</Radio>
</RadioGroup>
```

```
<RadioGroup
  label="Are you a wizard?"
  defaultValue="yes"
>
  <Radio value="yes">
    Yes
  </Radio>
  <Radio value="no">
    No
  </Radio>
</RadioGroup>
```

A controlled value can be provided using the `value` prop, which accepts a value corresponding with the `value` prop of each Radio. The `onChange` event is fired when the user selects a radio.

```
function Example() {
  let [selected, setSelected] = React.useState(null);

  return (
    <>
      <RadioGroup
        label="Favorite avatar"
        value={selected}
        onChange={setSelected}
      >
        <Radio value="wizard">Wizard</Radio>
        <Radio value="dragon">Dragon</Radio>
      </RadioGroup>
      <p>You have selected: {selected}</p>
    </>
  );
}
```

```
function Example() {
  let [selected, setSelected] = React.useState(null);

  return (
    <>
      <RadioGroup
        label="Favorite avatar"
        value={selected}
        onChange={setSelected}
      >
        <Radio value="wizard">Wizard</Radio>
        <Radio value="dragon">Dragon</Radio>
      </RadioGroup>
      <p>You have selected: {selected}</p>
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
      <RadioGroup
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
      </RadioGroup>
      <p>
        You have
        selected:{' '}
        {selected}
      </p>
    </>
  );
}
```

The `description` prop can be used to associate additional help text with a radio group.

```
<RadioGroup label="Favorite pet" description="Select your favorite pet.">
  <Radio value="dogs">Dogs</Radio>
  <Radio value="cats">Cats</Radio>
</RadioGroup>
```

```
<RadioGroup
  label="Favorite pet"
  description="Select your favorite pet."
>
  <Radio value="dogs">Dogs</Radio>
  <Radio value="cats">Cats</Radio>
</RadioGroup>
```

```
<RadioGroup
  label="Favorite pet"
  description="Select your favorite pet."
>
  <Radio value="dogs">
    Dogs
  </Radio>
  <Radio value="cats">
    Cats
  </Radio>
</RadioGroup>
```

RadioGroup supports the `isRequired` prop to ensure the user selects an option, as well as custom client and server-side validation. It can also be integrated with other form libraries. See the [Forms](https://react-spectrum.adobe.com/react-aria/forms.html) guide to learn more.

When a RadioGroup has the `validationBehavior="native"` prop, validation errors block form submission. To display validation errors, use the `validationErrors` and `errorMessageProps` returned by `useRadioGroup`. This allows you to render error messages from all of the above sources with consistent custom styles.

```
<form>
  <RadioGroup
    label="Favorite pet"
    name="pet"
    isRequired
    validationBehavior="native"
  >    <Radio value="dogs">Dog</Radio>
    <Radio value="cats">Cat</Radio>
    <Radio value="dragon">Dragon</Radio>
  </RadioGroup>
  <input type="submit" style={{ marginTop: 8 }} />
</form>
```

```
<form>
  <RadioGroup
    label="Favorite pet"
    name="pet"
    isRequired
    validationBehavior="native"
  >    <Radio value="dogs">Dog</Radio>
    <Radio value="cats">Cat</Radio>
    <Radio value="dragon">Dragon</Radio>
  </RadioGroup>
  <input type="submit" style={{ marginTop: 8 }} />
</form>
```

```
<form>
  <RadioGroup
    label="Favorite pet"
    name="pet"
    isRequired
    validationBehavior="native"
  >    <Radio value="dogs">
      Dog
    </Radio>
    <Radio value="cats">
      Cat
    </Radio>
    <Radio value="dragon">
      Dragon
    </Radio>
  </RadioGroup>
  <input
    type="submit"
    style={{
      marginTop: 8
    }}
  />
</form>
```

The entire RadioGroup can be disabled with the `isDisabled` prop.

```
<RadioGroup label="Favorite sport" isDisabled>
  <Radio value="soccer">Soccer</Radio>
  <Radio value="baseball">Baseball</Radio>
  <Radio value="basketball">Basketball</Radio>
</RadioGroup>
```

```
<RadioGroup label="Favorite sport" isDisabled>
  <Radio value="soccer">Soccer</Radio>
  <Radio value="baseball">Baseball</Radio>
  <Radio value="basketball">Basketball</Radio>
</RadioGroup>
```

```
<RadioGroup
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
</RadioGroup>
```

To disable an individual radio, pass `isDisabled` to the `Radio` instead.

```
<RadioGroup label="Favorite sport">
  <Radio value="soccer">Soccer</Radio>
  <Radio value="baseball" isDisabled>Baseball</Radio>
  <Radio value="basketball">Basketball</Radio>
</RadioGroup>
```

```
<RadioGroup label="Favorite sport">
  <Radio value="soccer">Soccer</Radio>
  <Radio value="baseball" isDisabled>Baseball</Radio>
  <Radio value="basketball">Basketball</Radio>
</RadioGroup>
```

```
<RadioGroup label="Favorite sport">
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
</RadioGroup>
```

The `isReadOnly` prop makes the selection immutable. Unlike `isDisabled`, the RadioGroup remains focusable. See the [MDN docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly) for more information.

```
<RadioGroup label="Favorite avatar" defaultValue="wizard" isReadOnly>
  <Radio value="wizard">Wizard</Radio>
  <Radio value="dragon">Dragon</Radio>
</RadioGroup>
```

```
<RadioGroup
  label="Favorite avatar"
  defaultValue="wizard"
  isReadOnly
>
  <Radio value="wizard">Wizard</Radio>
  <Radio value="dragon">Dragon</Radio>
</RadioGroup>
```

```
<RadioGroup
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
</RadioGroup>
```

RadioGroup supports the `name` prop, paired with the Radio `value` prop, for integration with HTML forms.

```
<RadioGroup label="Favorite pet" name="pet">
  <Radio value="dogs">Dogs</Radio>
  <Radio value="cats">Cats</Radio>
</RadioGroup>
```

```
<RadioGroup label="Favorite pet" name="pet">
  <Radio value="dogs">Dogs</Radio>
  <Radio value="cats">Cats</Radio>
</RadioGroup>
```

```
<RadioGroup
  label="Favorite pet"
  name="pet"
>
  <Radio value="dogs">
    Dogs
  </Radio>
  <Radio value="cats">
    Cats
  </Radio>
</RadioGroup>
```

* * *

In right-to-left languages, the radio group and radio buttons should be mirrored. The group should be right-aligned, and the radio should be placed on the right side of the label. Ensure that your CSS accounts for this.