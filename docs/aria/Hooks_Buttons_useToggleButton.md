# useToggleButton

**Source**: [https://react-spectrum.adobe.com/react-aria/useToggleButton.html](https://react-spectrum.adobe.com/react-aria/useToggleButton.html)

> Documentation for useToggleButton in the React Aria package.

---

Provides the behavior and accessibility implementation for a toggle button component. ToggleButtons allow users to toggle a selection on or off, for example switching between two states or modes.

* * *

`useToggleButton( props: [AriaToggleButtonOptions](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/button/src/useToggleButton.ts:AriaToggleButtonOptions)<ElementType>, state: [ToggleState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/toggle/src/useToggleState.ts:ToggleState), ref: RefObject<any> ): [ToggleButtonAria](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/button/src/useToggleButton.ts:ToggleButtonAria)<[HTMLAttributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)<any>>`

* * *

Toggle buttons are similar to action buttons, but support an additional selection state that is toggled when a user presses the button. There is no built-in HTML element that represents a toggle button, so React Aria implements it using ARIA attributes.

-   Native HTML `<button>`, `<a>`, and custom element type support
-   Exposed as a toggle button via ARIA
-   Mouse and touch event handling, and press state management
-   Keyboard focus management and cross browser normalization
-   Keyboard event support for Space and Enter keys

* * *

Toggle buttons consist of a clickable area usually containing a textual label or an icon that users can click to toggle a selection state. In addition, keyboard users may toggle the state using the Space or Enter keys.

`useToggleButton` returns props to be spread onto the button element, along with a boolean indicating whether the user is currently pressing the button:

Name

Type

Description

`isSelected`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether the button is selected.

`isDisabled`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether the button is disabled.

`buttonProps`

`T`

Props for the button element.

`isPressed`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether the button is currently pressed.

Selection state is managed by the `[useToggleState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/toggle/src/useToggleState.ts:useToggleState)` hook in `@react-stately/toggle`. The state object should be passed as an option to `useToggleButton`.

If a visual label is not provided (e.g. an icon only button), then an `aria-label` or `aria-labelledby` prop must be passed to identify the button to assistive technology.

* * *

By default, `useToggleButton` assumes that you are using it with a native `<button>` element. You can use a custom element type by passing the `elementType` prop to `useToggleButton`. See the [useButton](https://react-spectrum.adobe.com/react-aria/useButton.html#custom-element-type) docs for an example of this.

The following example shows how to use the `useToggleButton` and `useToggleState` hooks to build a toggle button. The toggle state is used to switch between a green and blue background when unselected and selected respectively. In addition, the `isPressed` state is used to adjust the background to be darker when the user presses down on the button.

```
import {useToggleState} from 'react-stately';
import {useToggleButton} from 'react-aria';
import {useRef} from 'react';

function ToggleButton(props) {
  let ref = useRef<HTMLButtonElement | null>(null);
  let state = useToggleState(props);
  let { buttonProps, isPressed } = useToggleButton(props, state, ref);

  return (
    <button
      {...buttonProps}
      style={{
        background: isPressed
          ? state.isSelected ? 'darkgreen' : 'gray'
          : state.isSelected
          ? 'green'
          : 'lightgray',
        color: state.isSelected ? 'white' : 'black',
        padding: 10,
        fontSize: 16,
        userSelect: 'none',
        WebkitUserSelect: 'none',
        border: 'none'
      }}
      ref={ref}
    >
      {props.children}
    </button>
  );
}

<ToggleButton>Pin</ToggleButton>
```

```
import {useToggleState} from 'react-stately';
import {useToggleButton} from 'react-aria';
import {useRef} from 'react';

function ToggleButton(props) {
  let ref = useRef<HTMLButtonElement | null>(null);
  let state = useToggleState(props);
  let { buttonProps, isPressed } = useToggleButton(
    props,
    state,
    ref
  );

  return (
    <button
      {...buttonProps}
      style={{
        background: isPressed
          ? state.isSelected ? 'darkgreen' : 'gray'
          : state.isSelected
          ? 'green'
          : 'lightgray',
        color: state.isSelected ? 'white' : 'black',
        padding: 10,
        fontSize: 16,
        userSelect: 'none',
        WebkitUserSelect: 'none',
        border: 'none'
      }}
      ref={ref}
    >
      {props.children}
    </button>
  );
}

<ToggleButton>Pin</ToggleButton>
```

```
import {useToggleState} from 'react-stately';
import {useToggleButton} from 'react-aria';
import {useRef} from 'react';

function ToggleButton(
  props
) {
  let ref = useRef<
    | HTMLButtonElement
    | null
  >(null);
  let state =
    useToggleState(
      props
    );
  let {
    buttonProps,
    isPressed
  } = useToggleButton(
    props,
    state,
    ref
  );

  return (
    <button
      {...buttonProps}
      style={{
        background:
          isPressed
            ? state
                .isSelected
              ? 'darkgreen'
              : 'gray'
            : state
                .isSelected
            ? 'green'
            : 'lightgray',
        color:
          state
              .isSelected
            ? 'white'
            : 'black',
        padding: 10,
        fontSize: 16,
        userSelect:
          'none',
        WebkitUserSelect:
          'none',
        border: 'none'
      }}
      ref={ref}
    >
      {props.children}
    </button>
  );
}

<ToggleButton>
  Pin
</ToggleButton>
```

* * *

The following examples show how to use the `ToggleButton` component created in the above example.

A default selection state for a toggle button can be set using the `defaultSelected` prop, or controlled with the `isSelected` prop. The `onChange` event is fired when the user presses the button, toggling the boolean. See React's documentation on [uncontrolled components](https://reactjs.org/docs/uncontrolled-components.html) for more info.

```
function Example() {
  let [isSelected, setSelected] = React.useState(false);

  return (
    <ToggleButton
      isSelected={isSelected}
      onChange={setSelected}
      aria-label="Star">
      ★
    </ToggleButton>
  );
}
```

```
function Example() {
  let [isSelected, setSelected] = React.useState(false);

  return (
    <ToggleButton
      isSelected={isSelected}
      onChange={setSelected}
      aria-label="Star">
      ★
    </ToggleButton>
  );
}
```

```
function Example() {
  let [
    isSelected,
    setSelected
  ] = React.useState(
    false
  );

  return (
    <ToggleButton
      isSelected={isSelected}
      onChange={setSelected}
      aria-label="Star"
    >
      ★
    </ToggleButton>
  );
}
```

A `ToggleButton` can be disabled using the `isDisabled` prop.

```
<ToggleButton isDisabled>Pin</ToggleButton>
```

```
<ToggleButton isDisabled>Pin</ToggleButton>
```

```
<ToggleButton
  isDisabled
>
  Pin
</ToggleButton>
```