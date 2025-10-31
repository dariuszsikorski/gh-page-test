# FocusRing

**Source**: [https://react-spectrum.adobe.com/react-aria/FocusRing.html](https://react-spectrum.adobe.com/react-aria/FocusRing.html)

> Documentation for FocusRing in the React Aria package.

---

A utility component that applies a CSS class when an element has keyboard focus. Focus rings are visible only when the user is interacting with a keyboard, not with a mouse, touch, or other input methods.

* * *

`FocusRing` is a utility component that can be used to apply a CSS class when an element has keyboard focus. This helps keyboard users determine which element on a page or in an application has keyboard focus as they navigate around. Focus rings are only visible when interacting with a keyboard so as not to distract mouse and touch screen users. When we are unable to detect if the user is using a mouse or touch screen, such as switching in from a different tab, we show the focus ring.

If CSS classes are not being used for styling, see [useFocusRing](https://react-spectrum.adobe.com/react-aria/useFocusRing.html) for a hooks version.

* * *

Name

Type

Default

Description

`children`

`[ReactElement](https://reactjs.org/docs/rendering-elements.html)`

—

Child element to apply CSS classes to.

`focusClass`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

CSS class to apply when the element is focused.

`focusRingClass`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

CSS class to apply when the element has keyboard focus.

`within`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

`false`

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

This example shows how to use `<FocusRing>` to apply a CSS class when keyboard focus is on a button.

```
.button {
  -webkit-appearance: none;
  appearance: none;
  background: green;
  border: none;
  color: white;
  font-size: 14px;
  padding: 4px 8px;
}

.button.focus-ring {
  outline: 2px solid dodgerblue;
  outline-offset: 2px;
}
```

```
.button {
  -webkit-appearance: none;
  appearance: none;
  background: green;
  border: none;
  color: white;
  font-size: 14px;
  padding: 4px 8px;
}

.button.focus-ring {
  outline: 2px solid dodgerblue;
  outline-offset: 2px;
}
```

```
.button {
  -webkit-appearance: none;
  appearance: none;
  background: green;
  border: none;
  color: white;
  font-size: 14px;
  padding: 4px 8px;
}

.button.focus-ring {
  outline: 2px solid dodgerblue;
  outline-offset: 2px;
}
```

```
import {FocusRing} from 'react-aria';

<FocusRing focusRingClass="focus-ring">
  <button className="button">Test</button>
</FocusRing>
```

```
import {FocusRing} from 'react-aria';

<FocusRing focusRingClass="focus-ring">
  <button className="button">Test</button>
</FocusRing>
```

```
import {FocusRing} from 'react-aria';

<FocusRing focusRingClass="focus-ring">
  <button className="button">
    Test
  </button>
</FocusRing>
```