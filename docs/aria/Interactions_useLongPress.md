# useLongPress

**Source**: [https://react-spectrum.adobe.com/react-aria/useLongPress.html](https://react-spectrum.adobe.com/react-aria/useLongPress.html)

> Documentation for useLongPress in the React Aria package.

---

Handles long press interactions across mouse and touch devices. Supports a customizable time threshold, accessibility description, and normalizes behavior across browsers and devices.

* * *

`useLongPress( (props: [LongPressProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/interactions/src/useLongPress.ts:LongPressProps) )): [LongPressResult](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/interactions/src/useLongPress.ts:LongPressResult)`

* * *

`useLongPress` handles long press interactions across both mouse and touch devices. A long press is triggered when a user presses and holds their pointer over a target for a minimum period of time. If the user moves their pointer off of the target before the time threshold, the interaction is canceled. Once a long press event is triggered, other pointer interactions that may be active such as `usePress` and `useMove` will be canceled so that only the long press is activated.

-   Handles mouse and touch events
-   Uses pointer events where available, with fallbacks to mouse and touch events
-   Ignores emulated mouse events in mobile browsers
-   Prevents text selection on touch devices while long pressing
-   Prevents browser and OS context menus from appearing while long pressing
-   Customizable time threshold for long press
-   Supports an accessibility description to indicate to assistive technology users that a long press action is available

* * *

`useLongPress` returns props that you should spread onto the target element:

Name

Type

Description

`longPressProps`

`[DOMAttributes](https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes)`

Props to spread on the target element.

`useLongPress` supports the following event handlers and options:

Name

Type

Default

Description

`isDisabled`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether long press events should be disabled.

`onLongPressStart`

`( (e: [LongPressEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/events.d.ts:LongPressEvent) )) => void`

—

Handler that is called when a long press interaction starts.

`onLongPressEnd`

`( (e: [LongPressEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/events.d.ts:LongPressEvent) )) => void`

—

Handler that is called when a long press interaction ends, either over the target or when the pointer leaves the target.

`onLongPress`

`( (e: [LongPressEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/events.d.ts:LongPressEvent) )) => void`

—

Handler that is called when the threshold time is met while the press is over the target.

`threshold`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)`

`500ms`

The amount of time in milliseconds to wait before triggering a long press.

`accessibilityDescription`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

A description for assistive techology users indicating that a long press action is available, e.g. "Long press to open menu".

Each of these handlers is fired with a `LongPressEvent`, which exposes information about the target and the type of event that triggered the interaction.

Name

Type

Description

`type`

`'longpressstart' | 'longpressend' | 'longpress'`

The type of long press event being fired.

`pointerType`

`[PointerType](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/events.d.ts:PointerType)`

The pointer type that triggered the press event.

`target`

`[Element](https://developer.mozilla.org/docs/Web/API/Element)`

The target element of the press event.

`shiftKey`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether the shift keyboard modifier was held during the press event.

`ctrlKey`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether the ctrl keyboard modifier was held during the press event.

`metaKey`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether the meta keyboard modifier was held during the press event.

`altKey`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether the alt keyboard modifier was held during the press event.

`x`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)`

X position relative to the target.

`y`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)`

Y position relative to the target.

* * *

This example shows a button that has both a normal press action using [usePress](https://react-spectrum.adobe.com/react-aria/usePress.html), as well as a long press action using `useLongPress`. Pressing the button will set the mode to "Normal speed", and long pressing it will set the mode to "Hyper speed". All of the emitted events are also logged below. Note that when long pressing the button, only a long press is emitted, and no normal press is emitted on pointer up.

**Note**: this example does not have a keyboard accessible way to trigger the long press action. Because the method of triggering this action will differ depending on the component, it is outside the scope of `useLongPress`. Make sure to implement a keyboard friendly alternative to all long press interactions if you are using this hook directly.

```
import {mergeProps, useLongPress, usePress} from 'react-aria';

function Example() {
  let [events, setEvents] = React.useState([]);
  let [mode, setMode] = React.useState('Activate');
  let { longPressProps } = useLongPress({
    accessibilityDescription: 'Long press to activate hyper speed',
    onLongPressStart: (e) =>
      setEvents(
        (events) => [`long press start with ${e.pointerType}`, ...events]
      ),
    onLongPressEnd: (e) =>
      setEvents(
        (events) => [`long press end with ${e.pointerType}`, ...events]
      ),
    onLongPress: (e) => {
      setMode('Hyper speed');
      setEvents(
        (events) => [`long press with ${e.pointerType}`, ...events]
      );
    }
  });

  let { pressProps } = usePress({
    onPress: (e) => {
      setMode('Normal speed');
      setEvents(
        (events) => [`press with ${e.pointerType}`, ...events]
      );
    }
  });

  return (
    <>
      <button {...mergeProps(pressProps, longPressProps)}>{mode}</button>
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
import {
  mergeProps,
  useLongPress,
  usePress
} from 'react-aria';

function Example() {
  let [events, setEvents] = React.useState([]);
  let [mode, setMode] = React.useState('Activate');
  let { longPressProps } = useLongPress({
    accessibilityDescription:
      'Long press to activate hyper speed',
    onLongPressStart: (e) =>
      setEvents(
        (events) => [
          `long press start with ${e.pointerType}`,
          ...events
        ]
      ),
    onLongPressEnd: (e) =>
      setEvents(
        (events) => [
          `long press end with ${e.pointerType}`,
          ...events
        ]
      ),
    onLongPress: (e) => {
      setMode('Hyper speed');
      setEvents(
        (events) => [
          `long press with ${e.pointerType}`,
          ...events
        ]
      );
    }
  });

  let { pressProps } = usePress({
    onPress: (e) => {
      setMode('Normal speed');
      setEvents(
        (events) => [
          `press with ${e.pointerType}`,
          ...events
        ]
      );
    }
  });

  return (
    <>
      <button {...mergeProps(pressProps, longPressProps)}>
        {mode}
      </button>
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
import {
  mergeProps,
  useLongPress,
  usePress
} from 'react-aria';

function Example() {
  let [
    events,
    setEvents
  ] = React.useState([]);
  let [mode, setMode] =
    React.useState(
      'Activate'
    );
  let {
    longPressProps
  } = useLongPress({
    accessibilityDescription:
      'Long press to activate hyper speed',
    onLongPressStart:
      (e) =>
        setEvents(
          (events) => [
            `long press start with ${e.pointerType}`,
            ...events
          ]
        ),
    onLongPressEnd:
      (e) =>
        setEvents(
          (events) => [
            `long press end with ${e.pointerType}`,
            ...events
          ]
        ),
    onLongPress: (e) => {
      setMode(
        'Hyper speed'
      );
      setEvents(
        (events) => [
          `long press with ${e.pointerType}`,
          ...events
        ]
      );
    }
  });

  let { pressProps } =
    usePress({
      onPress: (e) => {
        setMode(
          'Normal speed'
        );
        setEvents(
          (events) => [
            `press with ${e.pointerType}`,
            ...events
          ]
        );
      }
    });

  return (
    <>
      <button
        {...mergeProps(
          pressProps,
          longPressProps
        )}
      >
        {mode}
      </button>
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