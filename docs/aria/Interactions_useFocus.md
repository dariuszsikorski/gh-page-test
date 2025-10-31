# useFocus

**Source**: [https://react-spectrum.adobe.com/react-aria/useFocus.html](https://react-spectrum.adobe.com/react-aria/useFocus.html)

> Documentation for useFocus in the React Aria package.

---

Handles focus events for the immediate target. Focus events on child elements will be ignored.

* * *

`useFocus<Target extends [FocusableElement](https://developer.mozilla.org/en-US/docs/Web/API/Element) = [FocusableElement](https://developer.mozilla.org/en-US/docs/Web/API/Element)>( (props: [FocusProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/interactions/src/useFocus.ts:FocusProps)<Target> )): [FocusResult](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/interactions/src/useFocus.ts:FocusResult)<Target>`

* * *

`useFocus` handles focus interactions for an element. Unlike React's built-in focus events, `useFocus` does not fire focus events for child elements of the target. This matches DOM behavior where focus events do not bubble. This is similar to the [:focus](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus) pseudo class in CSS.

To handle focus events on descendants of an element, see [useFocusWithin](https://react-spectrum.adobe.com/react-aria/useFocusWithin.html).

* * *

`useFocus` returns props that you should spread onto the target element:

Name

Type

Description

`focusProps`

`[DOMAttributes](https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes)<Target>`

Props to spread onto the target element.

`useFocus` supports the following event handlers:

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

* * *

This example shows a simple input element that handles focus events with `useFocus` and logs them to a list below.

**NOTE: for more advanced text field functionality, see [useTextField](https://react-spectrum.adobe.com/react-aria/useTextField.html).**

```
import {useFocus} from 'react-aria';

function Example() {
  let [events, setEvents] = React.useState([]);
  let { focusProps } = useFocus({
    onFocus: (e) =>
      setEvents(
        (events) => [...events, 'focus']
      ),
    onBlur: (e) =>
      setEvents(
        (events) => [...events, 'blur']
      ),
    onFocusChange: (isFocused) =>
      setEvents(
        (events) => [...events, `focus change: ${isFocused}`]
      )
  });

  return (
    <>
      <label htmlFor="example">Example</label>
      <input
        {...focusProps}
        id="example"
      />
      <ul
        style={{
          maxHeight: '200px',
          overflow: 'auto'
        }}
      >
        {events.map((e, i) => <li key={i}>{e}</li>)}
      </ul>
    </>
  );
}
```

```
import {useFocus} from 'react-aria';

function Example() {
  let [events, setEvents] = React.useState([]);
  let { focusProps } = useFocus({
    onFocus: (e) =>
      setEvents(
        (events) => [...events, 'focus']
      ),
    onBlur: (e) =>
      setEvents(
        (events) => [...events, 'blur']
      ),
    onFocusChange: (isFocused) =>
      setEvents(
        (events) => [
          ...events,
          `focus change: ${isFocused}`
        ]
      )
  });

  return (
    <>
      <label htmlFor="example">Example</label>
      <input
        {...focusProps}
        id="example"
      />
      <ul
        style={{
          maxHeight: '200px',
          overflow: 'auto'
        }}
      >
        {events.map((e, i) => <li key={i}>{e}</li>)}
      </ul>
    </>
  );
}
```

```
import {useFocus} from 'react-aria';

function Example() {
  let [
    events,
    setEvents
  ] = React.useState([]);
  let { focusProps } =
    useFocus({
      onFocus: (e) =>
        setEvents(
          (events) => [
            ...events,
            'focus'
          ]
        ),
      onBlur: (e) =>
        setEvents(
          (events) => [
            ...events,
            'blur'
          ]
        ),
      onFocusChange:
        (isFocused) =>
          setEvents(
            (events) => [
              ...events,
              `focus change: ${isFocused}`
            ]
          )
    });

  return (
    <>
      <label htmlFor="example">
        Example
      </label>
      <input
        {...focusProps}
        id="example"
      />
      <ul
        style={{
          maxHeight:
            '200px',
          overflow:
            'auto'
        }}
      >
        {events.map((
          e,
          i
        ) => (
          <li key={i}>
            {e}
          </li>
        ))}
      </ul>
    </>
  );
}
```