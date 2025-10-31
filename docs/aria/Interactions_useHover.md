# useHover

**Source**: [https://react-spectrum.adobe.com/react-aria/useHover.html](https://react-spectrum.adobe.com/react-aria/useHover.html)

> Documentation for useHover in the React Aria package.

---

Handles pointer hover interactions for an element. Normalizes behavior across browsers and platforms, and ignores emulated mouse events on touch devices.

* * *

`useHover( (props: [HoverProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/interactions/src/useHover.ts:HoverProps) )): [HoverResult](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/interactions/src/useHover.ts:HoverResult)`

* * *

`useHover` handles hover interactions for an element. A hover interaction begins when a user moves their pointer over an element, and ends when they move their pointer off of the element.

-   Uses pointer events where available, with fallbacks to mouse and touch events
-   Ignores emulated mouse events in mobile browsers

`useHover` is similar to the [:hover](https://developer.mozilla.org/en-US/docs/Web/CSS/:hover) pseudo class in CSS, but `:hover` is problematic on touch devices due to mouse emulation in mobile browsers. Depending on the browser and device, `:hover` may never apply, or may apply continuously until the user touches another element. `useHover` only applies when the pointer is truly capable of hovering, and emulated mouse events are ignored.

Read our [blog post](https://react-spectrum.adobe.com/blog/building-a-button-part-2.html) about the complexities of hover event handling to learn more.

* * *

`useHover` returns props that you should spread onto the target element:

Name

Type

Description

`hoverProps`

`[DOMAttributes](https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes)`

Props to spread on the target element.

`isHovered`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

`useHover` supports the following event handlers:

Name

Type

Description

`onHoverStart`

`( (e: [HoverEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/events.d.ts:HoverEvent) )) => void`

Handler that is called when a hover interaction starts.

`onHoverEnd`

`( (e: [HoverEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/events.d.ts:HoverEvent) )) => void`

Handler that is called when a hover interaction ends.

`onHoverChange`

`( (isHovering: [boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) )) => void`

Handler that is called when the hover state changes.

Each of these handlers is fired with a `HoverEvent`, which exposes information about the target and the type of event that triggered the interaction.

Name

Type

Description

`type`

`'hoverstart' | 'hoverend'`

The type of hover event being fired.

`pointerType`

`'mouse' | 'pen'`

The pointer type that triggered the hover event.

`target`

`[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)`

The target element of the hover event.

* * *

Hover interactions should never be the only way to interact with an element because they are not supported across all devices. Alternative interactions should be provided on touch devices, for example a long press or an explicit button to tap.

In addition, even on devices with hover support, users may be using a keyboard or screen reader to navigate your app, which also do not trigger hover events. Hover interactions should be paired with focus events in order to expose the content to keyboard users.

* * *

This example shows a simple target that handles hover events with `useHover` and logs them to a list below. It also uses the `isHovered` state to adjust the background color when the target is hovered.

```
import {useHover} from 'react-aria';

function Example() {
  let [events, setEvents] = React.useState([]);
  let { hoverProps, isHovered } = useHover({
    onHoverStart: (e) =>
      setEvents(
        (events) => [...events, `hover start with ${e.pointerType}`]
      ),
    onHoverEnd: (e) =>
      setEvents(
        (events) => [...events, `hover end with ${e.pointerType}`]
      )
  });

  return (
    <>
      <div
        {...hoverProps}
        style={{
          background: isHovered ? 'darkgreen' : 'green',
          color: 'white',
          display: 'inline-block',
          padding: 4,
          cursor: 'pointer'
        }}
        role="button"
        tabIndex={0}
      >
        Hover me!
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
import {useHover} from 'react-aria';

function Example() {
  let [events, setEvents] = React.useState([]);
  let { hoverProps, isHovered } = useHover({
    onHoverStart: (e) =>
      setEvents(
        (events) => [
          ...events,
          `hover start with ${e.pointerType}`
        ]
      ),
    onHoverEnd: (e) =>
      setEvents(
        (events) => [
          ...events,
          `hover end with ${e.pointerType}`
        ]
      )
  });

  return (
    <>
      <div
        {...hoverProps}
        style={{
          background: isHovered ? 'darkgreen' : 'green',
          color: 'white',
          display: 'inline-block',
          padding: 4,
          cursor: 'pointer'
        }}
        role="button"
        tabIndex={0}
      >
        Hover me!
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
import {useHover} from 'react-aria';

function Example() {
  let [
    events,
    setEvents
  ] = React.useState([]);
  let {
    hoverProps,
    isHovered
  } = useHover({
    onHoverStart: (e) =>
      setEvents(
        (events) => [
          ...events,
          `hover start with ${e.pointerType}`
        ]
      ),
    onHoverEnd: (e) =>
      setEvents(
        (events) => [
          ...events,
          `hover end with ${e.pointerType}`
        ]
      )
  });

  return (
    <>
      <div
        {...hoverProps}
        style={{
          background:
            isHovered
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
        Hover me!
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