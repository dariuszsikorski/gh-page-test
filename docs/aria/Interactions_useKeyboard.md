# useKeyboard

**Source**: [https://react-spectrum.adobe.com/react-aria/useKeyboard.html](https://react-spectrum.adobe.com/react-aria/useKeyboard.html)

> Documentation for useKeyboard in the React Aria package.

---

Handles keyboard interactions for a focusable element.

* * *

`useKeyboard( (props: [KeyboardProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/interactions/src/useKeyboard.ts:KeyboardProps) )): [KeyboardResult](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/interactions/src/useKeyboard.ts:KeyboardResult)`

* * *

`useKeyboard` handles keyboard interactions. The only difference from DOM events is that propagation is stopped by default if there is an event handler, unless `event.continuePropagation()` is called. This provides better modularity by default, so that a parent component doesn't respond to an event that a child already handled. If the child doesn't handle the event (e.g. it was for an unknown key), it can call `event.continuePropagation()` to allow parents to handle the event.

* * *

`useKeyboard` returns props that you should spread onto the target element:

Name

Type

Description

`keyboardProps`

`[DOMAttributes](https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes)`

Props to spread onto the target element.

`useKeyboard` supports the following event handlers:

Name

Type

Description

`onKeyDown`

`( (e: [KeyboardEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/events.d.ts:KeyboardEvent) )) => void`

Handler that is called when a key is pressed.

`onKeyUp`

`( (e: [KeyboardEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/events.d.ts:KeyboardEvent) )) => void`

Handler that is called when a key is released.

* * *

This example shows a simple input element that handles keyboard events with `useKeyboard` and logs them to a list below.

**NOTE: for more advanced text field functionality, see [useTextField](https://react-spectrum.adobe.com/react-aria/useTextField.html).**

```
import {useKeyboard} from 'react-aria';

function Example() {
  let [events, setEvents] = React.useState([]);
  let { keyboardProps } = useKeyboard({
    onKeyDown: (e) =>
      setEvents(
        (events) => [`key down: ${e.key}`, ...events]
      ),
    onKeyUp: (e) =>
      setEvents(
        (events) => [`key up: ${e.key}`, ...events]
      )
  });

  return (
    <>
      <label htmlFor="example">Example</label>
      <input
        {...keyboardProps}
        id="example"
      />
      <ul
        style={{
          height: 100,
          overflow: 'auto',
          border: '1px solid gray',
          width: 200
        }}
      >
        {events.map((e, i) => <li key={i}>{e}</li>)}
      </ul>
    </>
  );
}
```

```
import {useKeyboard} from 'react-aria';

function Example() {
  let [events, setEvents] = React.useState([]);
  let { keyboardProps } = useKeyboard({
    onKeyDown: (e) =>
      setEvents(
        (events) => [`key down: ${e.key}`, ...events]
      ),
    onKeyUp: (e) =>
      setEvents(
        (events) => [`key up: ${e.key}`, ...events]
      )
  });

  return (
    <>
      <label htmlFor="example">Example</label>
      <input
        {...keyboardProps}
        id="example"
      />
      <ul
        style={{
          height: 100,
          overflow: 'auto',
          border: '1px solid gray',
          width: 200
        }}
      >
        {events.map((e, i) => <li key={i}>{e}</li>)}
      </ul>
    </>
  );
}
```

```
import {useKeyboard} from 'react-aria';

function Example() {
  let [
    events,
    setEvents
  ] = React.useState([]);
  let { keyboardProps } =
    useKeyboard({
      onKeyDown: (e) =>
        setEvents(
          (events) => [
            `key down: ${e.key}`,
            ...events
          ]
        ),
      onKeyUp: (e) =>
        setEvents(
          (events) => [
            `key up: ${e.key}`,
            ...events
          ]
        )
    });

  return (
    <>
      <label htmlFor="example">
        Example
      </label>
      <input
        {...keyboardProps}
        id="example"
      />
      <ul
        style={{
          height: 100,
          overflow:
            'auto',
          border:
            '1px solid gray',
          width: 200
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