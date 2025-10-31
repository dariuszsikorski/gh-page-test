# useFocusVisible

**Source**: [https://react-spectrum.adobe.com/react-aria/useFocusVisible.html](https://react-spectrum.adobe.com/react-aria/useFocusVisible.html)

> Documentation for useFocusVisible in the React Aria package.

---

Manages focus visible state for the page, and subscribes individual components for updates.

* * *

`useFocusVisible( (props: [FocusVisibleProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/interactions/src/useFocusVisible.ts:FocusVisibleProps) )): [FocusVisibleResult](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/interactions/src/useFocusVisible.ts:FocusVisibleResult)`

* * *

`useFocusVisible` handles focus interactions for the page and determines whether keyboard focus should be visible (e.g. with a focus ring). Focus visibility is computed based on the current interaction mode of the user. When the user interacts via a mouse or touch, then focus is not visible. When the user interacts via a keyboard or screen reader, then focus is visible. This is similar to the [:focus-visible](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible) pseudo class in CSS.

To determine whether a focus ring should be visible for an individual component rather than globally, see [useFocusRing](https://react-spectrum.adobe.com/react-aria/useFocusRing.html).

* * *

This example shows focus visible state and updates as you interact with the page. By default, when the page loads, it is true. If you press anywhere on the page with a mouse or touch, then focus visible state is set to false. If you keyboard navigate around the page then it is set to true again.

Note that this example uses the `isTextInput` option so that only certain navigation keys cause focus visible state to appear. This prevents focus visible state from appearing when typing text in a text field.

```
import {useFocusVisible} from 'react-aria';

function Example() {
  let { isFocusVisible } = useFocusVisible({ isTextInput: true });

  return (
    <>
      <div>Focus visible: {String(isFocusVisible)}</div>
      <label style={{ display: 'block' }}>
        First Name: <input />
      </label>
      <label style={{ display: 'block' }}>
        Last Name: <input />
      </label>
    </>
  );
}
```

```
import {useFocusVisible} from 'react-aria';

function Example() {
  let { isFocusVisible } = useFocusVisible({
    isTextInput: true
  });

  return (
    <>
      <div>Focus visible: {String(isFocusVisible)}</div>
      <label style={{ display: 'block' }}>
        First Name: <input />
      </label>
      <label style={{ display: 'block' }}>
        Last Name: <input />
      </label>
    </>
  );
}
```

```
import {useFocusVisible} from 'react-aria';

function Example() {
  let {
    isFocusVisible
  } = useFocusVisible({
    isTextInput: true
  });

  return (
    <>
      <div>
        Focus visible:
        {' '}
        {String(
          isFocusVisible
        )}
      </div>
      <label
        style={{
          display:
            'block'
        }}
      >
        First Name:{' '}
        <input />
      </label>
      <label
        style={{
          display:
            'block'
        }}
      >
        Last Name:{' '}
        <input />
      </label>
    </>
  );
}
```