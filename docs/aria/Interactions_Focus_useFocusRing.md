# useFocusRing

**Source**: [https://react-spectrum.adobe.com/react-aria/useFocusRing.html](https://react-spectrum.adobe.com/react-aria/useFocusRing.html)

> Documentation for useFocusRing in the React Aria package.

---

Determines whether a focus ring should be shown to indicate keyboard focus. Focus rings are visible only when the user is interacting with a keyboard, not with a mouse, touch, or other input methods.

* * *

`useFocusRing( (props: [AriaFocusRingProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/focus/src/useFocusRing.ts:AriaFocusRingProps) )): [FocusRingAria](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/focus/src/useFocusRing.ts:FocusRingAria)`

* * *

The `useFocusRing` hook returns whether a focus ring should be displayed to indicate keyboard focus for a component. This helps keyboard users determine which element on a page or in an application has keyboard focus as they navigate around. Focus rings are only visible when interacting with a keyboard so as not to distract mouse and touch screen users.

If CSS classes are being used for styling, see the [FocusRing](https://react-spectrum.adobe.com/react-aria/FocusRing.html) component for a shortcut.

* * *

Name

Type

Default

Description

`within`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

`'false'`

Whether to show the focus ring when something inside the container element has focus (true), or only if the container itself has focus (false).

`isTextInput`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the element is a text input.

`autoFocus`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the element will be auto focused.

* * *

Name

Type

Description

`isFocused`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether the element is currently focused.

`isFocusVisible`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether keyboard focus should be visible.

`focusProps`

`[DOMAttributes](https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes)`

Props to apply to the container element with the focus ring.

* * *

This example shows how to use `useFocusRing` to adjust styling when keyboard focus is on a button. Specifically, the `outline` property is used to create the focus ring when `isFocusVisible` is true.

See [useCheckbox](https://react-spectrum.adobe.com/react-aria/useCheckbox.html#styling), [useRadioGroup](https://react-spectrum.adobe.com/react-aria/useRadioGroup.html#styling), and [useSwitch](https://react-spectrum.adobe.com/react-aria/useSwitch.html#example) for more advanced examples of focus rings with other styling techniques.

```
import {useFocusRing} from 'react-aria';

function Example() {
  let { isFocusVisible, focusProps } = useFocusRing();

  return (
    <button
      {...focusProps}
      style={{
        WebkitAppearance: 'none',
        appearance: 'none',
        background: 'green',
        border: 'none',
        color: 'white',
        fontSize: 14,
        padding: '4px 8px',
        outline: isFocusVisible ? '2px solid dodgerblue' : 'none',
        outlineOffset: 2
      }}
    >
      Test
    </button>
  );
}
```

```
import {useFocusRing} from 'react-aria';

function Example() {
  let { isFocusVisible, focusProps } = useFocusRing();

  return (
    <button
      {...focusProps}
      style={{
        WebkitAppearance: 'none',
        appearance: 'none',
        background: 'green',
        border: 'none',
        color: 'white',
        fontSize: 14,
        padding: '4px 8px',
        outline: isFocusVisible
          ? '2px solid dodgerblue'
          : 'none',
        outlineOffset: 2
      }}
    >
      Test
    </button>
  );
}
```

```
import {useFocusRing} from 'react-aria';

function Example() {
  let {
    isFocusVisible,
    focusProps
  } = useFocusRing();

  return (
    <button
      {...focusProps}
      style={{
        WebkitAppearance:
          'none',
        appearance:
          'none',
        background:
          'green',
        border: 'none',
        color: 'white',
        fontSize: 14,
        padding:
          '4px 8px',
        outline:
          isFocusVisible
            ? '2px solid dodgerblue'
            : 'none',
        outlineOffset: 2
      }}
    >
      Test
    </button>
  );
}
```