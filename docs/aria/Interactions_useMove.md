# useMove

**Source**: [https://react-spectrum.adobe.com/react-aria/useMove.html](https://react-spectrum.adobe.com/react-aria/useMove.html)

> Documentation for useMove in the React Aria package.

---

Handles move interactions across mouse, touch, and keyboard, including dragging with the mouse or touch, and using the arrow keys. Normalizes behavior across browsers and platforms, and ignores emulated mouse events on touch devices.

* * *

`useMove( (props: [MoveEvents](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/events.d.ts:MoveEvents) )): [MoveResult](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/interactions/src/useMove.ts:MoveResult)`

* * *

`useMove` handles move interactions across mouse, touch, and keyboard. A move interaction starts when a user moves after pressing down with a mouse or their finger on the target, and ends when they lift their pointer. Move events are fired as the pointer moves around, and specify the distance that the pointer traveled since the last event. In addition, after a user focuses the target element, move events are fired when the user presses the arrow keys.

-   Handles mouse and touch events
-   Handles arrow key presses
-   Uses pointer events where available, with fallbacks to mouse and touch events
-   Ignores emulated mouse events in mobile browsers
-   Handles disabling text selection on mobile while the press interaction is active
-   Normalizes many cross browser inconsistencies

* * *

`useMove` returns props that you should spread onto the target element:

Name

Type

Description

`moveProps`

`[DOMAttributes](https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes)`

Props to spread on the target element.

`useMove` supports the following event handlers:

Name

Type

Description

`onMoveStart`

`( (e: [MoveStartEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/events.d.ts:MoveStartEvent) )) => void`

Handler that is called when a move interaction starts.

`onMove`

`( (e: [MoveMoveEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/events.d.ts:MoveMoveEvent) )) => void`

Handler that is called when the element is moved.

`onMoveEnd`

`( (e: [MoveEndEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/events.d.ts:MoveEndEvent) )) => void`

Handler that is called when a move interaction ends.

Each of these handlers is fired with a `MoveEvent`, which exposes information about the target and the type of event that triggered the interaction.

Name

Type

Description

`type`

`'move'`

The type of move event being fired.

`deltaX`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)`

The amount moved in the X direction since the last event.

`deltaY`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)`

The amount moved in the Y direction since the last event.

`pointerType`

`[PointerType](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/events.d.ts:PointerType)`

The pointer type that triggered the move event.

`shiftKey`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether the shift keyboard modifier was held during the move event.

`ctrlKey`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether the ctrl keyboard modifier was held during the move event.

`metaKey`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether the meta keyboard modifier was held during the move event.

`altKey`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether the alt keyboard modifier was held during the move event.

* * *

This example shows a ball that can be moved by dragging with a mouse or touch, or by tabbing to it and using the arrow keys on your keyboard. The movement is clamped so that the ball cannot be dragged outside a box. In addition, all of the move events are logged below so that you can inspect what is going on.

```
import {useMove} from 'react-aria';

function Example() {
  const CONTAINER_SIZE = 200;
  const BALL_SIZE = 30;

  let [events, setEvents] = React.useState([]);
  let [color, setColor] = React.useState('black');
  let [position, setPosition] = React.useState({
    x: 0,
    y: 0
  });

  let clamp = (pos) => Math.min(Math.max(pos, 0), CONTAINER_SIZE - BALL_SIZE);
  let { moveProps } = useMove({
    onMoveStart(e) {
      setColor('red');
      setEvents(
        (events) => [
          `move start with pointerType = ${e.pointerType}`,
          ...events
        ]
      );
    },
    onMove(e) {
      setPosition(({ x, y }) => {
        // Normally, we want to allow the user to continue
        // dragging outside the box such that they need to
        // drag back over the ball again before it moves.
        // This is handled below by clamping during render.
        // If using the keyboard, however, we need to clamp
        // here so that dragging outside the container and
        // then using the arrow keys works as expected.
        if (e.pointerType === 'keyboard') {
          x = clamp(x);
          y = clamp(y);
        }

        x += e.deltaX;
        y += e.deltaY;
        return { x, y };
      });

      setEvents(
        (events) => [
          `move with pointerType = ${e.pointerType}, deltaX = ${e.deltaX}, deltaY = ${e.deltaY}`,
          ...events
        ]
      );
    },
    onMoveEnd(e) {
      setPosition(({ x, y }) => {
        // Clamp position on mouse up
        x = clamp(x);
        y = clamp(y);
        return { x, y };
      });
      setColor('black');
      setEvents(
        (events) => [`move end with pointerType = ${e.pointerType}`, ...events]
      );
    }
  });

  return (
    <>
      <div
        style={{
          width: CONTAINER_SIZE,
          height: CONTAINER_SIZE,
          background: 'white',
          border: '1px solid black',
          position: 'relative',
          touchAction: 'none'
        }}
      >
        <div
          {...moveProps}
          tabIndex={0}
          style={{
            width: BALL_SIZE,
            height: BALL_SIZE,
            borderRadius: '100%',
            position: 'absolute',
            left: clamp(position.x),
            top: clamp(position.y),
            background: color
          }}
        />
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
import {useMove} from 'react-aria';

function Example() {
  const CONTAINER_SIZE = 200;
  const BALL_SIZE = 30;

  let [events, setEvents] = React.useState([]);
  let [color, setColor] = React.useState('black');
  let [position, setPosition] = React.useState({
    x: 0,
    y: 0
  });

  let clamp = (pos) =>
    Math.min(Math.max(pos, 0), CONTAINER_SIZE - BALL_SIZE);
  let { moveProps } = useMove({
    onMoveStart(e) {
      setColor('red');
      setEvents(
        (events) => [
          `move start with pointerType = ${e.pointerType}`,
          ...events
        ]
      );
    },
    onMove(e) {
      setPosition(({ x, y }) => {
        // Normally, we want to allow the user to continue
        // dragging outside the box such that they need to
        // drag back over the ball again before it moves.
        // This is handled below by clamping during render.
        // If using the keyboard, however, we need to clamp
        // here so that dragging outside the container and
        // then using the arrow keys works as expected.
        if (e.pointerType === 'keyboard') {
          x = clamp(x);
          y = clamp(y);
        }

        x += e.deltaX;
        y += e.deltaY;
        return { x, y };
      });

      setEvents(
        (events) => [
          `move with pointerType = ${e.pointerType}, deltaX = ${e.deltaX}, deltaY = ${e.deltaY}`,
          ...events
        ]
      );
    },
    onMoveEnd(e) {
      setPosition(({ x, y }) => {
        // Clamp position on mouse up
        x = clamp(x);
        y = clamp(y);
        return { x, y };
      });
      setColor('black');
      setEvents(
        (events) => [
          `move end with pointerType = ${e.pointerType}`,
          ...events
        ]
      );
    }
  });

  return (
    <>
      <div
        style={{
          width: CONTAINER_SIZE,
          height: CONTAINER_SIZE,
          background: 'white',
          border: '1px solid black',
          position: 'relative',
          touchAction: 'none'
        }}
      >
        <div
          {...moveProps}
          tabIndex={0}
          style={{
            width: BALL_SIZE,
            height: BALL_SIZE,
            borderRadius: '100%',
            position: 'absolute',
            left: clamp(position.x),
            top: clamp(position.y),
            background: color
          }}
        />
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
import {useMove} from 'react-aria';

function Example() {
  const CONTAINER_SIZE =
    200;
  const BALL_SIZE = 30;

  let [
    events,
    setEvents
  ] = React.useState([]);
  let [color, setColor] =
    React.useState(
      'black'
    );
  let [
    position,
    setPosition
  ] = React.useState({
    x: 0,
    y: 0
  });

  let clamp = (pos) =>
    Math.min(
      Math.max(pos, 0),
      CONTAINER_SIZE -
        BALL_SIZE
    );
  let { moveProps } =
    useMove({
      onMoveStart(e) {
        setColor('red');
        setEvents(
          (events) => [
            `move start with pointerType = ${e.pointerType}`,
            ...events
          ]
        );
      },
      onMove(e) {
        setPosition(
          ({ x, y }) => {
            // Normally, we want to allow the user to continue
            // dragging outside the box such that they need to
            // drag back over the ball again before it moves.
            // This is handled below by clamping during render.
            // If using the keyboard, however, we need to clamp
            // here so that dragging outside the container and
            // then using the arrow keys works as expected.
            if (
              e.pointerType ===
                'keyboard'
            ) {
              x = clamp(
                x
              );
              y = clamp(
                y
              );
            }

            x +=
              e.deltaX;
            y +=
              e.deltaY;
            return {
              x,
              y
            };
          }
        );

        setEvents(
          (events) => [
            `move with pointerType = ${e.pointerType}, deltaX = ${e.deltaX}, deltaY = ${e.deltaY}`,
            ...events
          ]
        );
      },
      onMoveEnd(e) {
        setPosition(
          ({ x, y }) => {
            // Clamp position on mouse up
            x = clamp(x);
            y = clamp(y);
            return {
              x,
              y
            };
          }
        );
        setColor(
          'black'
        );
        setEvents(
          (events) => [
            `move end with pointerType = ${e.pointerType}`,
            ...events
          ]
        );
      }
    });

  return (
    <>
      <div
        style={{
          width:
            CONTAINER_SIZE,
          height:
            CONTAINER_SIZE,
          background:
            'white',
          border:
            '1px solid black',
          position:
            'relative',
          touchAction:
            'none'
        }}
      >
        <div
          {...moveProps}
          tabIndex={0}
          style={{
            width:
              BALL_SIZE,
            height:
              BALL_SIZE,
            borderRadius:
              '100%',
            position:
              'absolute',
            left: clamp(
              position.x
            ),
            top: clamp(
              position.y
            ),
            background:
              color
          }}
        />
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