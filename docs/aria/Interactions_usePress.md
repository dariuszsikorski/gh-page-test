# usePress

**Source**: [https://react-spectrum.adobe.com/react-aria/usePress.html](https://react-spectrum.adobe.com/react-aria/usePress.html)

> Documentation for usePress in the React Aria package.

---

Handles press interactions across mouse, touch, keyboard, and screen readers. It normalizes behavior across browsers and platforms, and handles many nuances of dealing with pointer and keyboard events.

* * *

`usePress( (props: [PressHookProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/interactions/src/usePress.ts:PressHookProps) )): [PressResult](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/interactions/src/usePress.ts:PressResult)`

* * *

`usePress` handles press interactions across mouse, touch, keyboard, and screen readers. A press interaction starts when a user presses down with a mouse or their finger on the target, and ends when they move the pointer off the target. It may start again if the pointer re-enters the target. `usePress` returns the current press state, which can be used to adjust the visual appearance of the target. If the pointer is released over the target, then an `onPress` event is fired.

-   Handles mouse and touch events
-   Handles Enter or Space key presses
-   Handles screen reader virtual clicks
-   Uses pointer events where available, with fallbacks to mouse and touch events
-   Normalizes focus behavior on mouse and touch interactions across browsers
-   Handles disabling text selection on mobile while the press interaction is active
-   Handles canceling press interactions on scroll
-   Normalizes many cross browser inconsistencies

Read our [blog post](https://react-spectrum.adobe.com/blog/building-a-button-part-1.html) about the complexities of press event handling to learn more.

* * *

`usePress` returns props that you should spread onto the target element, along with the current press state:

Name

Type

Description

`isPressed`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether the target is currently pressed.

`pressProps`

`[DOMAttributes](https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes)`

Props to spread on the target element.

`usePress` supports the following event handlers:

Name

Type

Description

`onPress`

`( (e: [PressEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/events.d.ts:PressEvent) )) => void`

Handler that is called when the press is released over the target.

`onPressStart`

`( (e: [PressEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/events.d.ts:PressEvent) )) => void`

Handler that is called when a press interaction starts.

`onPressEnd`

`( (e: [PressEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/events.d.ts:PressEvent) )) => void`

Handler that is called when a press interaction ends, either over the target or when the pointer leaves the target.

`onPressChange`

`( (isPressed: [boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) )) => void`

Handler that is called when the press state changes.

`onPressUp`

`( (e: [PressEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/events.d.ts:PressEvent) )) => void`

Handler that is called when a press is released over the target, regardless of whether it started on the target or not.

`onClick`

`( (e: [MouseEvent](https://developer.mozilla.org/docs/Web/API/MouseEvent)<[FocusableElement](https://developer.mozilla.org/en-US/docs/Web/API/Element)> )) => void`

**Not recommended – use `onPress` instead.** `onClick` is an alias for `onPress` provided for compatibility with other libraries. `onPress` provides additional event details for non-mouse interactions.

Each of these handlers is fired with a `PressEvent`, which exposes information about the target and the type of event that triggered the interaction.

### Properties

Name

Type

Description

`type`

`'pressstart' | 'pressend' | 'pressup' | 'press'`

The type of press event being fired.

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

### Methods

Method

Description

`continuePropagation(): void`

By default, press events stop propagation to parent elements. In cases where a handler decides not to handle a specific event, it can call `continuePropagation()` to allow a parent to handle it.

* * *

This example shows a simple target that handles press events with `usePress` and logs them to a list below. It also uses the `isPressed` state to adjust the background color when the target is pressed. Press down on the target and drag your pointer off and over to see when the events are fired, and try focusing the target with a keyboard and pressing the Enter or Space keys to trigger events as well.

**NOTE: for more advanced button functionality, see [useButton](https://react-spectrum.adobe.com/react-aria/useButton.html).**

```
import {usePress} from 'react-aria';

function Example() {
  let [events, setEvents] = React.useState([]);
  let { pressProps, isPressed } = usePress({
    onPressStart: (e) =>
      setEvents(
        (events) => [...events, `press start with ${e.pointerType}`]
      ),
    onPressEnd: (e) =>
      setEvents(
        (events) => [...events, `press end with ${e.pointerType}`]
      ),
    onPress: (e) =>
      setEvents(
        (events) => [...events, `press with ${e.pointerType}`]
      )
  });

  return (
    <>
      <div
        {...pressProps}
        style={{
          background: isPressed ? 'darkgreen' : 'green',
          color: 'white',
          display: 'inline-block',
          padding: 4,
          cursor: 'pointer'
        }}
        role="button"
        tabIndex={0}
      >
        Press me!
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
import {usePress} from 'react-aria';

function Example() {
  let [events, setEvents] = React.useState([]);
  let { pressProps, isPressed } = usePress({
    onPressStart: (e) =>
      setEvents(
        (events) => [
          ...events,
          `press start with ${e.pointerType}`
        ]
      ),
    onPressEnd: (e) =>
      setEvents(
        (events) => [
          ...events,
          `press end with ${e.pointerType}`
        ]
      ),
    onPress: (e) =>
      setEvents(
        (events) => [
          ...events,
          `press with ${e.pointerType}`
        ]
      )
  });

  return (
    <>
      <div
        {...pressProps}
        style={{
          background: isPressed ? 'darkgreen' : 'green',
          color: 'white',
          display: 'inline-block',
          padding: 4,
          cursor: 'pointer'
        }}
        role="button"
        tabIndex={0}
      >
        Press me!
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
import {usePress} from 'react-aria';

function Example() {
  let [
    events,
    setEvents
  ] = React.useState([]);
  let {
    pressProps,
    isPressed
  } = usePress({
    onPressStart: (e) =>
      setEvents(
        (events) => [
          ...events,
          `press start with ${e.pointerType}`
        ]
      ),
    onPressEnd: (e) =>
      setEvents(
        (events) => [
          ...events,
          `press end with ${e.pointerType}`
        ]
      ),
    onPress: (e) =>
      setEvents(
        (events) => [
          ...events,
          `press with ${e.pointerType}`
        ]
      )
  });

  return (
    <>
      <div
        {...pressProps}
        style={{
          background:
            isPressed
              ? 'darkgreen'
              : 'green',
          color: 'white',
          display:
            'inline-block',
          padding: 4,
          cursor:
            'pointer'
        }}
        role="button"
        tabIndex={0}
      >
        Press me!
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