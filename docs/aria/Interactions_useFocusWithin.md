# useFocusWithin

**Source**: [https://react-spectrum.adobe.com/react-aria/useFocusWithin.html](https://react-spectrum.adobe.com/react-aria/useFocusWithin.html)

> Documentation for useFocusWithin in the React Aria package.

---

Handles focus events for the target and its descendants.

* * *

`useFocusWithin( (props: [FocusWithinProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/interactions/src/useFocusWithin.ts:FocusWithinProps) )): [FocusWithinResult](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/interactions/src/useFocusWithin.ts:FocusWithinResult)`

* * *

`useFocusWithin` handles focus interactions for an element and its descendants. Focus is "within" an element when either the element itself or a descendant element has focus. This is similar to the [:focus-within](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-within) pseudo class in CSS.

To handle focus events on only the target element, and not descendants, see [useFocus](https://react-spectrum.adobe.com/react-aria/useFocus.html).

* * *

`useFocusWithin` returns props that you should spread onto the target element:

Name

Type

Description

`focusWithinProps`

`[DOMAttributes](https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes)`

Props to spread onto the target element.

`useFocusWithin` supports the following event handlers:

Name

Type

Description

`onFocusWithin`

`( (e: [FocusEvent](https://developer.mozilla.org/docs/Web/API/FocusEvent) )) => void`

Handler that is called when the target element or a descendant receives focus.

`onBlurWithin`

`( (e: [FocusEvent](https://developer.mozilla.org/docs/Web/API/FocusEvent) )) => void`

Handler that is called when the target element and all descendants lose focus.

`onFocusWithinChange`

`( (isFocusWithin: [boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) )) => void`

Handler that is called when the the focus within state changes.

* * *

This example shows two text fields inside a div, which handles focus within events. It stores focus within state in local component state, which is updated by an `onFocusWithinChange` handler. This is used to update the background color and text color of the group while one of the text fields has focus.

Focus within and blur within events are also logged to the list below. Notice that the events are only fired when the wrapper gains and loses focus, not when focus moves within the group.

**NOTE: for more advanced text field functionality, see [useTextField](https://react-spectrum.adobe.com/react-aria/useTextField.html).**

```
import {useFocusWithin} from 'react-aria';

function Example() {
  let [events, setEvents] = React.useState([]);
  let [isFocusWithin, setFocusWithin] = React.useState(false);
  let { focusWithinProps } = useFocusWithin({
    onFocusWithin: (e) =>
      setEvents(
        (events) => [...events, 'focus within']
      ),
    onBlurWithin: (e) =>
      setEvents(
        (events) => [...events, 'blur within']
      ),
    onFocusWithinChange: (isFocusWithin) => setFocusWithin(isFocusWithin)
  });

  return (
    <>
      <div
        {...focusWithinProps}
        style={{
          display: 'inline-block',
          border: '1px solid gray',
          padding: 10,
          background: isFocusWithin ? 'goldenrod' : '',
          color: isFocusWithin ? 'black' : ''
        }}
      >
        <label style={{ display: 'block' }}>
          First Name: <input />
        </label>
        <label style={{ display: 'block' }}>
          Last Name: <input />
        </label>
      </div>
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
import {useFocusWithin} from 'react-aria';

function Example() {
  let [events, setEvents] = React.useState([]);
  let [isFocusWithin, setFocusWithin] = React.useState(
    false
  );
  let { focusWithinProps } = useFocusWithin({
    onFocusWithin: (e) =>
      setEvents(
        (events) => [...events, 'focus within']
      ),
    onBlurWithin: (e) =>
      setEvents(
        (events) => [...events, 'blur within']
      ),
    onFocusWithinChange: (isFocusWithin) =>
      setFocusWithin(isFocusWithin)
  });

  return (
    <>
      <div
        {...focusWithinProps}
        style={{
          display: 'inline-block',
          border: '1px solid gray',
          padding: 10,
          background: isFocusWithin ? 'goldenrod' : '',
          color: isFocusWithin ? 'black' : ''
        }}
      >
        <label style={{ display: 'block' }}>
          First Name: <input />
        </label>
        <label style={{ display: 'block' }}>
          Last Name: <input />
        </label>
      </div>
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
import {useFocusWithin} from 'react-aria';

function Example() {
  let [
    events,
    setEvents
  ] = React.useState([]);
  let [
    isFocusWithin,
    setFocusWithin
  ] = React.useState(
    false
  );
  let {
    focusWithinProps
  } = useFocusWithin({
    onFocusWithin: (e) =>
      setEvents(
        (events) => [
          ...events,
          'focus within'
        ]
      ),
    onBlurWithin: (e) =>
      setEvents(
        (events) => [
          ...events,
          'blur within'
        ]
      ),
    onFocusWithinChange:
      (isFocusWithin) =>
        setFocusWithin(
          isFocusWithin
        )
  });

  return (
    <>
      <div
        {...focusWithinProps}
        style={{
          display:
            'inline-block',
          border:
            '1px solid gray',
          padding: 10,
          background:
            isFocusWithin
              ? 'goldenrod'
              : '',
          color:
            isFocusWithin
              ? 'black'
              : ''
        }}
      >
        <label
          style={{
            display:
              'block'
          }}
        >
          First Name:
          {' '}
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
      </div>
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