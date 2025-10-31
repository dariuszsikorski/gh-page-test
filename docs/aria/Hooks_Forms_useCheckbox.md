# useCheckbox

**Source**: [https://react-spectrum.adobe.com/react-aria/useCheckbox.html](https://react-spectrum.adobe.com/react-aria/useCheckbox.html)

> Documentation for useCheckbox in the React Aria package.

---

Provides the behavior and accessibility implementation for a checkbox component. Checkboxes allow users to select multiple items from a list of individual items, or to mark one individual item as selected.

* * *

`useCheckbox( props: [AriaCheckboxProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/checkbox/src/index.d.ts:AriaCheckboxProps), state: [ToggleState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/toggle/src/useToggleState.ts:ToggleState), inputRef: [RefObject](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/refs.d.ts:RefObject)<[HTMLInputElement](https://developer.mozilla.org/docs/Web/API/HTMLInputElement) |  | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)> ): [CheckboxAria](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/checkbox/src/useCheckbox.ts:CheckboxAria)`

* * *

Checkboxes can be built with the [<input>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) HTML element, but this can be difficult to style. `useCheckbox` helps achieve accessible checkboxes that can be styled as needed.

-   Built with a native HTML `<input>` element, which can be optionally visually hidden to allow custom styling
-   Full support for browser features like form autofill
-   Keyboard focus management and cross browser normalization
-   Labeling support for assistive technology
-   Indeterminate state support

* * *

Shows a checkbox component with labels pointing to its parts, including the input, and label elements.SubscribeLabelInput

A checkbox consists of a visual selection indicator and a label. Checkboxes support three selection states: checked, unchecked, and indeterminate. Users may click or touch a checkbox to toggle the selection state, or use the Tab key to navigate to it and the Space key to toggle it.

`useCheckbox` returns props to be spread onto its input element:

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

Selection state is managed by the `[useToggleState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/toggle/src/useToggleState.ts:useToggleState)` hook in `@react-stately/toggle`. The state object should be passed as an option to `useCheckbox`.

In most cases, checkboxes should have a visual label. If the checkbox does not have a visible label, an `aria-label` or `aria-labelledby` prop must be passed instead to identify the element to assistive technology.

* * *

```
import {useToggleState} from 'react-stately';
import {useCheckbox} from 'react-aria';

function Checkbox(props) {
  let { children } = props;
  let state = useToggleState(props);
  let ref = React.useRef(null);
  let { inputProps, labelProps } = useCheckbox(props, state, ref);

  return (
    <label {...labelProps} style={{ display: 'block' }}>
      <input {...inputProps} ref={ref} />
      {children}
    </label>
  );
}

<Checkbox>Unsubscribe</Checkbox>
```

```
import {useToggleState} from 'react-stately';
import {useCheckbox} from 'react-aria';

function Checkbox(props) {
  let { children } = props;
  let state = useToggleState(props);
  let ref = React.useRef(null);
  let { inputProps, labelProps } = useCheckbox(
    props,
    state,
    ref
  );

  return (
    <label {...labelProps} style={{ display: 'block' }}>
      <input {...inputProps} ref={ref} />
      {children}
    </label>
  );
}

<Checkbox>Unsubscribe</Checkbox>
```

```
import {useToggleState} from 'react-stately';
import {useCheckbox} from 'react-aria';

function Checkbox(
  props
) {
  let { children } =
    props;
  let state =
    useToggleState(
      props
    );
  let ref = React.useRef(
    null
  );
  let {
    inputProps,
    labelProps
  } = useCheckbox(
    props,
    state,
    ref
  );

  return (
    <label
      {...labelProps}
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

<Checkbox>
  Unsubscribe
</Checkbox>
```

* * *

To build a custom styled checkbox, you can make the native input element visually hidden. This is possible using the <`[VisuallyHidden](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/visually-hidden/src/VisuallyHidden.tsx:VisuallyHidden)`\> utility component from `@react-aria/visually-hidden`. It is still in the DOM and accessible to assistive technology, but invisible. This example uses SVG to build the visual checkbox, which is hidden from screen readers with `aria-hidden`.

For keyboard accessibility, a focus ring is important to indicate which element has keyboard focus. This is implemented with the `[useFocusRing](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/focus/src/useFocusRing.ts:useFocusRing)` hook from `@react-aria/focus`. When `isFocusVisible` is true, an extra SVG element is rendered to indicate focus. The focus ring is only visible when the user is interacting with a keyboard, not with a mouse or touch.

```
import {mergeProps, useFocusRing, VisuallyHidden} from 'react-aria';

function Checkbox(props) {
  let state = useToggleState(props);
  let ref = React.useRef(null);
  let { inputProps, labelProps } = useCheckbox(props, state, ref);
  let { isFocusVisible, focusProps } = useFocusRing();
  let isSelected = state.isSelected && !props.isIndeterminate;

  return (
    <label
      {...labelProps}
      style={{
        display: 'flex',
        alignItems: 'center',
        opacity: props.isDisabled ? 0.4 : 1
      }}
    >
      <VisuallyHidden>
        <input {...mergeProps(inputProps, focusProps)} ref={ref} />
      </VisuallyHidden>
      <svg
        width={24}
        height={24}
        aria-hidden="true"
        style={{ marginRight: 4 }}
      >
        <rect
          x={isSelected ? 4 : 5}
          y={isSelected ? 4 : 5}
          width={isSelected ? 16 : 14}
          height={isSelected ? 16 : 14}
          fill={isSelected ? 'orange' : 'none'}
          stroke={isSelected ? 'none' : 'gray'}
          strokeWidth={2}
        />
        {isSelected &&
          (
            <path
              transform="translate(7 7)"
              d={`M3.788 9A.999.999 0 0 1 3 8.615l-2.288-3a1 1 0 1 1
            1.576-1.23l1.5 1.991 3.924-4.991a1 1 0 1 1 1.576 1.23l-4.712
            6A.999.999 0 0 1 3.788 9z`}
            />
          )}
        {props.isIndeterminate &&
          <rect x={7} y={11} width={10} height={2} fill="gray" />}
        {isFocusVisible &&
          (
            <rect
              x={1}
              y={1}
              width={22}
              height={22}
              fill="none"
              stroke="orange"
              strokeWidth={2}
            />
          )}
      </svg>
      {props.children}
    </label>
  );
}

<Checkbox>Unsubscribe</Checkbox>
```

```
import {
  mergeProps,
  useFocusRing,
  VisuallyHidden
} from 'react-aria';

function Checkbox(props) {
  let state = useToggleState(props);
  let ref = React.useRef(null);
  let { inputProps, labelProps } = useCheckbox(
    props,
    state,
    ref
  );
  let { isFocusVisible, focusProps } = useFocusRing();
  let isSelected = state.isSelected &&
    !props.isIndeterminate;

  return (
    <label
      {...labelProps}
      style={{
        display: 'flex',
        alignItems: 'center',
        opacity: props.isDisabled ? 0.4 : 1
      }}
    >
      <VisuallyHidden>
        <input
          {...mergeProps(inputProps, focusProps)}
          ref={ref}
        />
      </VisuallyHidden>
      <svg
        width={24}
        height={24}
        aria-hidden="true"
        style={{ marginRight: 4 }}
      >
        <rect
          x={isSelected ? 4 : 5}
          y={isSelected ? 4 : 5}
          width={isSelected ? 16 : 14}
          height={isSelected ? 16 : 14}
          fill={isSelected ? 'orange' : 'none'}
          stroke={isSelected ? 'none' : 'gray'}
          strokeWidth={2}
        />
        {isSelected &&
          (
            <path
              transform="translate(7 7)"
              d={`M3.788 9A.999.999 0 0 1 3 8.615l-2.288-3a1 1 0 1 1
            1.576-1.23l1.5 1.991 3.924-4.991a1 1 0 1 1 1.576 1.23l-4.712
            6A.999.999 0 0 1 3.788 9z`}
            />
          )}
        {props.isIndeterminate &&
          (
            <rect
              x={7}
              y={11}
              width={10}
              height={2}
              fill="gray"
            />
          )}
        {isFocusVisible &&
          (
            <rect
              x={1}
              y={1}
              width={22}
              height={22}
              fill="none"
              stroke="orange"
              strokeWidth={2}
            />
          )}
      </svg>
      {props.children}
    </label>
  );
}

<Checkbox>Unsubscribe</Checkbox>
```

```
import {
  mergeProps,
  useFocusRing,
  VisuallyHidden
} from 'react-aria';

function Checkbox(
  props
) {
  let state =
    useToggleState(
      props
    );
  let ref = React.useRef(
    null
  );
  let {
    inputProps,
    labelProps
  } = useCheckbox(
    props,
    state,
    ref
  );
  let {
    isFocusVisible,
    focusProps
  } = useFocusRing();
  let isSelected =
    state.isSelected &&
    !props
      .isIndeterminate;

  return (
    <label
      {...labelProps}
      style={{
        display: 'flex',
        alignItems:
          'center',
        opacity:
          props
              .isDisabled
            ? 0.4
            : 1
      }}
    >
      <VisuallyHidden>
        <input
          {...mergeProps(
            inputProps,
            focusProps
          )}
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
        <rect
          x={isSelected
            ? 4
            : 5}
          y={isSelected
            ? 4
            : 5}
          width={isSelected
            ? 16
            : 14}
          height={isSelected
            ? 16
            : 14}
          fill={isSelected
            ? 'orange'
            : 'none'}
          stroke={isSelected
            ? 'none'
            : 'gray'}
          strokeWidth={2}
        />
        {isSelected &&
          (
            <path
              transform="translate(7 7)"
              d={`M3.788 9A.999.999 0 0 1 3 8.615l-2.288-3a1 1 0 1 1
            1.576-1.23l1.5 1.991 3.924-4.991a1 1 0 1 1 1.576 1.23l-4.712
            6A.999.999 0 0 1 3.788 9z`}
            />
          )}
        {props
          .isIndeterminate &&
          (
            <rect
              x={7}
              y={11}
              width={10}
              height={2}
              fill="gray"
            />
          )}
        {isFocusVisible &&
          (
            <rect
              x={1}
              y={1}
              width={22}
              height={22}
              fill="none"
              stroke="orange"
              strokeWidth={2}
            />
          )}
      </svg>
      {props.children}
    </label>
  );
}

<Checkbox>
  Unsubscribe
</Checkbox>
```

* * *

[![](https://react-spectrum.adobe.com/tailwind-example.3ad575ae.png)

Tailwind CSS

An animated Checkbox built with Tailwind and React Aria.

](https://codesandbox.io/s/bold-river-0v44z6?file=/src/Checkbox.tsx)

* * *

The following examples show how to use the `Checkbox` component created in the above example.

Checkboxes are not selected by default. The `defaultSelected` prop can be used to set the default state.

```
<Checkbox defaultSelected>Subscribe</Checkbox>
```

```
<Checkbox defaultSelected>Subscribe</Checkbox>
```

```
<Checkbox
  defaultSelected
>
  Subscribe
</Checkbox>
```

The `isSelected` prop can be used to make the selected state controlled. The `onChange` event is fired when the user presses the checkbox, and receives the new value.

```
function Example() {
  let [selected, setSelection] = React.useState(false);

  return (
    <>
      <Checkbox isSelected={selected} onChange={setSelection}>
        Subscribe
      </Checkbox>
      <p>{`You are ${selected ? 'subscribed' : 'unsubscribed'}`}</p>
    </>
  );
 }
```

```
function Example() {
  let [selected, setSelection] = React.useState(false);

  return (
    <>
      <Checkbox
        isSelected={selected}
        onChange={setSelection}
      >
        Subscribe
      </Checkbox>
      <p>
        {`You are ${
          selected ? 'subscribed' : 'unsubscribed'
        }`}
      </p>
    </>
  );
}
```

```
function Example() {
  let [
    selected,
    setSelection
  ] = React.useState(
    false
  );

  return (
    <>
      <Checkbox
        isSelected={selected}
        onChange={setSelection}
      >
        Subscribe
      </Checkbox>
      <p>
        {`You are ${
          selected
            ? 'subscribed'
            : 'unsubscribed'
        }`}
      </p>
    </>
  );
}
```

A Checkbox can be in an indeterminate state, controlled using the `isIndeterminate` prop. This overrides the appearance of the Checkbox, whether selection is controlled or uncontrolled. The Checkbox will visually remain indeterminate until the `isIndeterminate` prop is set to false, regardless of user interaction.

```
<Checkbox isIndeterminate>Subscribe</Checkbox>
```

```
<Checkbox isIndeterminate>Subscribe</Checkbox>
```

```
<Checkbox
  isIndeterminate
>
  Subscribe
</Checkbox>
```

Checkboxes can be disabled using the `isDisabled` prop.

```
<Checkbox isDisabled>Subscribe</Checkbox>
```

```
<Checkbox isDisabled>Subscribe</Checkbox>
```

```
<Checkbox isDisabled>
  Subscribe
</Checkbox>
```

The `isReadOnly` prop makes the selection immutable. Unlike `isDisabled`, the Checkbox remains focusable. See the [MDN docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly) for more information.

```
<Checkbox isSelected isReadOnly>Agree</Checkbox>
```

```
<Checkbox isSelected isReadOnly>Agree</Checkbox>
```

```
<Checkbox
  isSelected
  isReadOnly
>
  Agree
</Checkbox>
```

Checkbox supports the `name` and `value` props for integration with HTML forms.

```
<Checkbox name="newsletter" value="subscribe">Subscribe</Checkbox>
```

```
<Checkbox name="newsletter" value="subscribe">
  Subscribe
</Checkbox>
```

```
<Checkbox
  name="newsletter"
  value="subscribe"
>
  Subscribe
</Checkbox>
```

* * *

In right-to-left languages, the checkbox should be mirrored. The checkbox should be placed on the right side of the label. Ensure that your CSS accounts for this.