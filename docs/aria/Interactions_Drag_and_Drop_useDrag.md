# useDrag

**Source**: [https://react-spectrum.adobe.com/react-aria/useDrag.html](https://react-spectrum.adobe.com/react-aria/useDrag.html)

> Documentation for useDrag in the React Aria package.

---

Handles drag interactions for an element, with support for traditional mouse and touch based drag and drop, in addition to full parity for keyboard and screen reader users.

* * *

`useDrag( (options: [DragOptions](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/dnd/src/useDrag.ts:DragOptions) )): [DragResult](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/dnd/src/useDrag.ts:DragResult)`

* * *

Drag and drop is a common UI interaction that allows users to transfer data between two locations by directly moving a visual representation on screen. It is a flexible, efficient, and intuitive way for users to perform a variety of tasks, and is widely supported across both desktop and mobile operating systems.

React Aria supports traditional mouse and touch based drag and drop, but also implements keyboard and screen reader friendly interactions. Users can press Enter on a draggable element to enter drag and drop mode. Then, they can press Tab to navigate between drop targets, and Enter to drop or Escape to cancel. Touch screen reader users can also drag by double tapping to activate drag and drop mode, swiping between drop targets, and double tapping again to drop.

See the [drag and drop introduction](https://react-spectrum.adobe.com/react-aria/dnd.html) to learn more.

* * *

This example shows how to make a simple draggable element that provides data as plain text. In order to support keyboard and screen reader drag interactions, the element must be focusable and have an ARIA role (in this case, `button`). While it is being dragged, it is displayed with a dimmed appearance by applying an additional CSS class.

```
import {useDrag} from 'react-aria';

function Draggable() {
  let { dragProps, isDragging } = useDrag({
    getItems() {
      return [{
        'text/plain': 'hello world'
      }];
    }
  });

  return (
    <div
      {...dragProps}
      role="button"
      tabIndex={0}
      className={`draggable ${isDragging ? 'dragging' : ''}`}
    >
      Drag me
    </div>
  );
}

<Draggable />
<DropTarget />
```

```
import {useDrag} from 'react-aria';

function Draggable() {
  let { dragProps, isDragging } = useDrag({
    getItems() {
      return [{
        'text/plain': 'hello world'
      }];
    }
  });

  return (
    <div
      {...dragProps}
      role="button"
      tabIndex={0}
      className={`draggable ${
        isDragging ? 'dragging' : ''
      }`}
    >
      Drag me
    </div>
  );
}

<Draggable />
<DropTarget />
```

```
import {useDrag} from 'react-aria';

function Draggable() {
  let {
    dragProps,
    isDragging
  } = useDrag({
    getItems() {
      return [{
        'text/plain':
          'hello world'
      }];
    }
  });

  return (
    <div
      {...dragProps}
      role="button"
      tabIndex={0}
      className={`draggable ${
        isDragging
          ? 'dragging'
          : ''
      }`}
    >
      Drag me
    </div>
  );
}

<Draggable />
<DropTarget />
```

Show CSS

```
.draggable {
  display: inline-block;
  vertical-align: top;
  border: 1px solid gray;
  padding: 10px;
}

.draggable.dragging {
  opacity: 0.5;
}

.droppable {
  width: 100px;
  height: 80px;
  border-radius: 6px;
  display: inline-block;
  padding: 20px;
  margin-left: 20px;
  border: 2px dotted gray;
  white-space: pre-wrap;
}

.droppable.target {
  border: 2px solid var(--blue);
}
```

```
.draggable {
  display: inline-block;
  vertical-align: top;
  border: 1px solid gray;
  padding: 10px;
}

.draggable.dragging {
  opacity: 0.5;
}

.droppable {
  width: 100px;
  height: 80px;
  border-radius: 6px;
  display: inline-block;
  padding: 20px;
  margin-left: 20px;
  border: 2px dotted gray;
  white-space: pre-wrap;
}

.droppable.target {
  border: 2px solid var(--blue);
}
```

```
.draggable {
  display: inline-block;
  vertical-align: top;
  border: 1px solid gray;
  padding: 10px;
}

.draggable.dragging {
  opacity: 0.5;
}

.droppable {
  width: 100px;
  height: 80px;
  border-radius: 6px;
  display: inline-block;
  padding: 20px;
  margin-left: 20px;
  border: 2px dotted gray;
  white-space: pre-wrap;
}

.droppable.target {
  border: 2px solid var(--blue);
}
```

The `DropTarget` component used above is defined below. See [useDrop](https://react-spectrum.adobe.com/react-aria/useDrop.html) for more details and documentation.

Show code

```
import type {TextDropItem} from 'react-aria';
import {useDrop} from 'react-aria';

function DropTarget() {
  let [dropped, setDropped] = React.useState(null);
  let ref = React.useRef(null);
  let { dropProps, isDropTarget } = useDrop({
    ref,
    async onDrop(e) {
      let items = await Promise.all(
        e.items
          .filter((item) =>
            item.kind === 'text' &&
            (item.types.has('text/plain') ||
              item.types.has('my-app-custom-type'))
          )
          .map(async (item: TextDropItem) => {
            if (item.types.has('my-app-custom-type')) {
              return JSON.parse(await item.getText('my-app-custom-type'));
            } else {
              return { message: await item.getText('text/plain') };
            }
          })
      );
      setDropped(items);
    }
  });

  let message = ['Drop here'];
  if (dropped) {
    message = dropped.map((d) => {
      let message = d.message;
      if (d.style === 'bold') {
        message = <strong>{message}</strong>;
      } else if (d.style === 'italic') {
        message = <em>{message}</em>;
      }
      return <div>{message}</div>;
    });
  }

  return (
    <div
      {...dropProps}
      role="button"
      tabIndex={0}
      ref={ref}
      className={`droppable ${isDropTarget ? 'target' : ''}`}
    >
      {message}
    </div>
  );
}
```

```
import type {TextDropItem} from 'react-aria';
import {useDrop} from 'react-aria';

function DropTarget() {
  let [dropped, setDropped] = React.useState(null);
  let ref = React.useRef(null);
  let { dropProps, isDropTarget } = useDrop({
    ref,
    async onDrop(e) {
      let items = await Promise.all(
        e.items
          .filter((item) =>
            item.kind === 'text' &&
            (item.types.has('text/plain') ||
              item.types.has('my-app-custom-type'))
          )
          .map(async (item: TextDropItem) => {
            if (item.types.has('my-app-custom-type')) {
              return JSON.parse(
                await item.getText('my-app-custom-type')
              );
            } else {
              return {
                message: await item.getText('text/plain')
              };
            }
          })
      );
      setDropped(items);
    }
  });

  let message = ['Drop here'];
  if (dropped) {
    message = dropped.map((d) => {
      let message = d.message;
      if (d.style === 'bold') {
        message = <strong>{message}</strong>;
      } else if (d.style === 'italic') {
        message = <em>{message}</em>;
      }
      return <div>{message}</div>;
    });
  }

  return (
    <div
      {...dropProps}
      role="button"
      tabIndex={0}
      ref={ref}
      className={`droppable ${
        isDropTarget ? 'target' : ''
      }`}
    >
      {message}
    </div>
  );
}
```

```
import type {TextDropItem} from 'react-aria';
import {useDrop} from 'react-aria';

function DropTarget() {
  let [
    dropped,
    setDropped
  ] = React.useState(
    null
  );
  let ref = React.useRef(
    null
  );
  let {
    dropProps,
    isDropTarget
  } = useDrop({
    ref,
    async onDrop(e) {
      let items =
        await Promise
          .all(
            e.items
              .filter(
                (item) =>
                  item
                      .kind ===
                    'text' &&
                  (item
                    .types
                    .has(
                      'text/plain'
                    ) ||
                    item
                      .types
                      .has(
                        'my-app-custom-type'
                      ))
              )
              .map(
                async (
                  item:
                    TextDropItem
                ) => {
                  if (
                    item
                      .types
                      .has(
                        'my-app-custom-type'
                      )
                  ) {
                    return JSON
                      .parse(
                        await item
                          .getText(
                            'my-app-custom-type'
                          )
                      );
                  } else {
                    return {
                      message:
                        await item
                          .getText(
                            'text/plain'
                          )
                    };
                  }
                }
              )
          );
      setDropped(items);
    }
  });

  let message = [
    'Drop here'
  ];
  if (dropped) {
    message = dropped
      .map((d) => {
        let message =
          d.message;
        if (
          d.style ===
            'bold'
        ) {
          message = (
            <strong>
              {message}
            </strong>
          );
        } else if (
          d.style ===
            'italic'
        ) {
          message = (
            <em>
              {message}
            </em>
          );
        }
        return (
          <div>
            {message}
          </div>
        );
      });
  }

  return (
    <div
      {...dropProps}
      role="button"
      tabIndex={0}
      ref={ref}
      className={`droppable ${
        isDropTarget
          ? 'target'
          : ''
      }`}
    >
      {message}
    </div>
  );
}
```

* * *

Data for a draggable element can be provided in multiple formats at once. This allows drop targets to choose data in a format that they understand. For example, you could serialize a complex object as JSON in a custom format for use within your own application, and also provide plain text and/or rich HTML fallbacks that can be used when a user drops data in an external application (e.g. an email message).

This can be done by returning multiple keys for an item from the `getItems` function. Types can either be a standard [mime type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types) for interoperability with external applications, or a custom string for use within your own app.

In addition to providing items in multiple formats, you can also return multiple drag items from `getItems` to transfer multiple objects in a single drag operation.

This example drags two items, each of which contains representations as plain text, HTML, and a custom app-specific data format. Dropping on the drop targets in this page will use the custom data format to render formatted items. If you drop in an external application supporting rich text, the HTML representation will be used. Dropping in a text editor will use the plain text format.

```
function Draggable() {
  let {dragProps, isDragging} = useDrag({
    getItems() {
      return [{
        'text/plain': 'hello world',
        'text/html': '<strong>hello world</strong>',
        'my-app-custom-type': JSON.stringify({
          message: 'hello world',
          style: 'bold'
        })
      }, {
        'text/plain': 'foo bar',
        'text/html': '<em>foo bar</em>',
        'my-app-custom-type': JSON.stringify({
          message: 'foo bar',
          style: 'italic'
        })
      }];
    }
  });

  // ...
  
}
```

```
function Draggable() {
  let {dragProps, isDragging} = useDrag({
    getItems() {
      return [{
        'text/plain': 'hello world',
        'text/html': '<strong>hello world</strong>',
        'my-app-custom-type': JSON.stringify({
          message: 'hello world',
          style: 'bold'
        })
      }, {
        'text/plain': 'foo bar',
        'text/html': '<em>foo bar</em>',
        'my-app-custom-type': JSON.stringify({
          message: 'foo bar',
          style: 'italic'
        })
      }];
    }
  });

  // ...
  
}
```

```
function Draggable() {
  let {
    dragProps,
    isDragging
  } = useDrag({
    getItems() {
      return [{
        'text/plain':
          'hello world',
        'text/html':
          '<strong>hello world</strong>',
        'my-app-custom-type':
          JSON.stringify(
            {
              message:
                'hello world',
              style:
                'bold'
            }
          )
      }, {
        'text/plain':
          'foo bar',
        'text/html':
          '<em>foo bar</em>',
        'my-app-custom-type':
          JSON.stringify(
            {
              message:
                'foo bar',
              style:
                'italic'
            }
          )
      }];
    }
  });

  // ...
}
```

* * *

By default, the drag preview shown under the user's pointer or finger is a copy of the original element that started the drag. A custom preview can be rendered using the `<DragPreview>` component. This accepts a function as a child which receives the dragged data that was returned by `getItems`, and returns a rendered preview for those items. The `DragPreview` is linked with `useDrag` via a ref, passed to the `preview` property. The `DragPreview` should be placed in the component hierarchy appropriately, so that it receives any React context or inherited styles that it needs to render correctly.

This example renders a custom drag preview which shows the text of the first drag item.

```
import {DragPreview} from 'react-aria';

function Draggable() {
  let preview = React.useRef(null);  let { dragProps, isDragging } = useDrag({
    preview,    getItems() {
      return [{
        'text/plain': 'hello world'
      }];
    }
  });

  return (
    <>
      <div
        {...dragProps}
        role="button"
        tabIndex={0}
        className={`draggable ${isDragging ? 'dragging' : ''}`}
      >
        Drag me
      </div>
      <DragPreview ref={preview}>
        {(items) => (
          <div style={{ background: 'green', color: 'white' }}>
            {items[0]['text/plain']}
          </div>
        )}
      </DragPreview>    </>
  );
}

<Draggable />
<DropTarget />
```

```
import {DragPreview} from 'react-aria';

function Draggable() {
  let preview = React.useRef(null);  let { dragProps, isDragging } = useDrag({
    preview,    getItems() {
      return [{
        'text/plain': 'hello world'
      }];
    }
  });

  return (
    <>
      <div
        {...dragProps}
        role="button"
        tabIndex={0}
        className={`draggable ${
          isDragging ? 'dragging' : ''
        }`}
      >
        Drag me
      </div>
      <DragPreview ref={preview}>
        {(items) => (
          <div
            style={{ background: 'green', color: 'white' }}
          >
            {items[0]['text/plain']}
          </div>
        )}
      </DragPreview>    </>
  );
}

<Draggable />
<DropTarget />
```

```
import {DragPreview} from 'react-aria';

function Draggable() {
  let preview = React
    .useRef(null);  let {
    dragProps,
    isDragging
  } = useDrag({
    preview,    getItems() {
      return [{
        'text/plain':
          'hello world'
      }];
    }
  });

  return (
    <>
      <div
        {...dragProps}
        role="button"
        tabIndex={0}
        className={`draggable ${
          isDragging
            ? 'dragging'
            : ''
        }`}
      >
        Drag me
      </div>
      <DragPreview
        ref={preview}
      >
        {(items) => (
          <div
            style={{
              background:
                'green',
              color:
                'white'
            }}
          >
            {items[0][
              'text/plain'
            ]}
          </div>
        )}
      </DragPreview>    </>
  );
}

<Draggable />
<DropTarget />
```

* * *

A `[DropOperation](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dnd.d.ts:DropOperation)` is an indication of what will happen when dragged data is dropped on a particular drop target. These are:

-   `move` – indicates that the dragged data will be moved from its source location to the target location.
-   `copy` – indicates that the dragged data will be copied to the target destination.
-   `link` – indicates that there will be a relationship established between the source and target locations.
-   `cancel` – indicates that the drag and drop operation will be canceled, resulting in no changes made to the source or target.

Many operating systems display these in the form of a cursor change, e.g. a plus sign to indicate a copy operation. The user may also be able to use a modifier key to choose which drop operation to perform, such as Option or Alt to switch from move to copy.

The `onDragEnd` event allows the drag source to respond when a drag that it initiated ends, either because it was dropped or because it was canceled by the user. The `dropOperation` property of the event object indicates the operation that was performed. For example, when data is moved, the UI could be updated to reflect this change by removing the original dragged element.

This example removes the draggable element from the UI when a move operation is completed. Try holding the Option or Alt keys to change the operation to copy, and see how the behavior changes.

```
function Draggable() {
  let [moved, setMoved] = React.useState(false);
  let {dragProps, isDragging} = useDrag({
    getItems() {
      return [{
        'text/plain': 'hello world'
      }];
    },
    onDragEnd(e) {
      if (e.dropOperation === 'move') {
        setMoved(true);
      }
    }  });

  if (moved) {
    return null;
  }

  // ...
  
}
```

```
function Draggable() {
  let [moved, setMoved] = React.useState(false);
  let {dragProps, isDragging} = useDrag({
    getItems() {
      return [{
        'text/plain': 'hello world'
      }];
    },
    onDragEnd(e) {
      if (e.dropOperation === 'move') {
        setMoved(true);
      }
    }  });

  if (moved) {
    return null;
  }

  // ...
  
}
```

```
function Draggable() {
  let [moved, setMoved] =
    React.useState(
      false
    );
  let {
    dragProps,
    isDragging
  } = useDrag({
    getItems() {
      return [{
        'text/plain':
          'hello world'
      }];
    },
    onDragEnd(e) {
      if (
        e.dropOperation ===
          'move'
      ) {
        setMoved(true);
      }
    }  });

  if (moved) {
    return null;
  }

  // ...
}
```

The drag source can also control which drop operations are allowed for the data. For example, if moving data is not allowed, and only copying is supported, the `getAllowedDropOperations` function could be implemented to indicate this. When you drag the element below, the cursor now shows the copy affordance by default, and pressing a modifier to switch drop operations results in the drop being canceled.

```
function Draggable() {
  let {dragProps, isDragging} = useDrag({
    getItems() {
      return [{
        'text/plain': 'hello world'
      }];
    },
    getAllowedDropOperations() {
      return ['copy'];
    }  });

  // ...
  
}
```

```
function Draggable() {
  let {dragProps, isDragging} = useDrag({
    getItems() {
      return [{
        'text/plain': 'hello world'
      }];
    },
    getAllowedDropOperations() {
      return ['copy'];
    }  });

  // ...
  
}
```

```
function Draggable() {
  let {
    dragProps,
    isDragging
  } = useDrag({
    getItems() {
      return [{
        'text/plain':
          'hello world'
      }];
    },
    getAllowedDropOperations() {
      return ['copy'];
    }  });

  // ...
}
```

* * *

In cases where a draggable element has other interactions that conflict with accessible drag and drop (e.g. Enter key), or if the element is not focusable, an explicit drag affordance can be added. This acts as a button that keyboard and screen reader users can use to activate drag and drop.

When the `hasDragButton` option is enabled, the keyboard interactions are moved from the returned `dragProps` to the `dragButtonProps` so that they can be applied to a separate element, while the mouse and touch dragging interactions remain in `dragProps`.

```
import {useButton} from 'react-aria';

function Draggable() {
  let { dragProps, dragButtonProps, isDragging } = useDrag({
    hasDragButton: true,    getItems() {
      return [{
        'text/plain': 'hello world'
      }];
    }
  });

  let ref = React.useRef(null);
  let { buttonProps } = useButton(
    { ...dragButtonProps, elementType: 'div' },
    ref
  );
  return (
    <div
      {...dragProps}
      className={`draggable ${isDragging ? 'dragging' : ''}`}
      style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}
    >
      <span
        {...buttonProps}
        aria-label="Drag"
        ref={ref}
        style={{ fontSize: 18 }}
      >
        ≡
      </span>      <span>Some text</span>
      <button onClick={() => alert('action')}>Action</button>
    </div>
  );
}

<Draggable />
<DropTarget />
```

```
import {useButton} from 'react-aria';

function Draggable() {
  let { dragProps, dragButtonProps, isDragging } = useDrag({
    hasDragButton: true,    getItems() {
      return [{
        'text/plain': 'hello world'
      }];
    }
  });

  let ref = React.useRef(null);
  let { buttonProps } = useButton({
    ...dragButtonProps,
    elementType: 'div'
  }, ref);
  return (
    <div
      {...dragProps}
      className={`draggable ${
        isDragging ? 'dragging' : ''
      }`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5
      }}
    >
      <span
        {...buttonProps}
        aria-label="Drag"
        ref={ref}
        style={{ fontSize: 18 }}
      >
        ≡
      </span>      <span>Some text</span>
      <button onClick={() => alert('action')}>
        Action
      </button>
    </div>
  );
}

<Draggable />
<DropTarget />
```

```
import {useButton} from 'react-aria';

function Draggable() {
  let {
    dragProps,
    dragButtonProps,
    isDragging
  } = useDrag({
    hasDragButton: true,    getItems() {
      return [{
        'text/plain':
          'hello world'
      }];
    }
  });

  let ref = React.useRef(
    null
  );
  let { buttonProps } =
    useButton({
      ...dragButtonProps,
      elementType: 'div'
    }, ref);
  return (
    <div
      {...dragProps}
      className={`draggable ${
        isDragging
          ? 'dragging'
          : ''
      }`}
      style={{
        display:
          'inline-flex',
        alignItems:
          'center',
        gap: 5
      }}
    >
      <span
        {...buttonProps}
        aria-label="Drag"
        ref={ref}
        style={{
          fontSize: 18
        }}
      >
        ≡
      </span>      <span>
        Some text
      </span>
      <button
        onClick={() =>
          alert(
            'action'
          )}
      >
        Action
      </button>
    </div>
  );
}

<Draggable />
<DropTarget />
```

* * *

If you need to temporarily disable dragging, you can pass the `isDisabled` option to `useDrag`. This will prevent dragging an element until it is re-enabled.

```
import {useDrag} from 'react-aria';

function Draggable() {
  let { dragProps, isDragging } = useDrag({
    getItems() {
      return [{
        'text/plain': 'hello world'
      }];
    },
    isDisabled: true  });

  return (
    <div
      {...dragProps}
      role="button"
      tabIndex={0}
      className={`draggable ${isDragging ? 'dragging' : ''}`}
    >
      Drag me
    </div>
  );
}

<Draggable />
```

```
import {useDrag} from 'react-aria';

function Draggable() {
  let { dragProps, isDragging } = useDrag({
    getItems() {
      return [{
        'text/plain': 'hello world'
      }];
    },
    isDisabled: true  });

  return (
    <div
      {...dragProps}
      role="button"
      tabIndex={0}
      className={`draggable ${
        isDragging ? 'dragging' : ''
      }`}
    >
      Drag me
    </div>
  );
}

<Draggable />
```

```
import {useDrag} from 'react-aria';

function Draggable() {
  let {
    dragProps,
    isDragging
  } = useDrag({
    getItems() {
      return [{
        'text/plain':
          'hello world'
      }];
    },
    isDisabled: true  });

  return (
    <div
      {...dragProps}
      role="button"
      tabIndex={0}
      className={`draggable ${
        isDragging
          ? 'dragging'
          : ''
      }`}
    >
      Drag me
    </div>
  );
}

<Draggable />
```