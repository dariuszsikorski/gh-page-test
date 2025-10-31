# DropZone

**Source**: [https://react-spectrum.adobe.com/react-aria/DropZone.html](https://react-spectrum.adobe.com/react-aria/DropZone.html)

> Documentation for DropZone in the React Aria package.

---

A drop zone is an area into which one or multiple objects can be dragged and dropped.

* * *

```
import {DropZone, Text} from 'react-aria-components';

function Example() {
  let [dropped, setDropped] = React.useState(false);

  return (
    <DropZone
      onDrop={() => {
        setDropped(true);
      }}>
      <Text slot="label">
        {dropped ? "You dropped something" : "Drop object here"}
      </Text>
    </DropZone>
  );
}
```

```
import {DropZone, Text} from 'react-aria-components';

function Example() {
  let [dropped, setDropped] = React.useState(false);

  return (
    <DropZone
      onDrop={() => {
        setDropped(true);
      }}
    >
      <Text slot="label">
        {dropped
          ? 'You dropped something'
          : 'Drop object here'}
      </Text>
    </DropZone>
  );
}
```

```
import {
  DropZone,
  Text
} from 'react-aria-components';

function Example() {
  let [
    dropped,
    setDropped
  ] = React.useState(
    false
  );

  return (
    <DropZone
      onDrop={() => {
        setDropped(true);
      }}
    >
      <Text slot="label">
        {dropped
          ? 'You dropped something'
          : 'Drop object here'}
      </Text>
    </DropZone>
  );
}
```

Show CSS

```
@import "@react-aria/example-theme";

.react-aria-DropZone {
  color: var(--text-color);
  background: var(--overlay-background);
  border: 1px solid var(--border-color);
  forced-color-adjust: none;
  border-radius: 4px;
  appearance: none;
  vertical-align: middle;
  font-size: 1.2rem;
  text-align: center;
  margin: 0;
  outline: none;
  padding: 24px 12px;
  width: 25%;
  display: inline-block;

  &[data-focus-visible],
  &[data-drop-target] {
    outline: 2px solid var(--focus-ring-color);
    outline-offset: -1px;
  }

  &[data-drop-target] {
    background: var(--highlight-overlay);
  }
}
```

```
@import "@react-aria/example-theme";

.react-aria-DropZone {
  color: var(--text-color);
  background: var(--overlay-background);
  border: 1px solid var(--border-color);
  forced-color-adjust: none;
  border-radius: 4px;
  appearance: none;
  vertical-align: middle;
  font-size: 1.2rem;
  text-align: center;
  margin: 0;
  outline: none;
  padding: 24px 12px;
  width: 25%;
  display: inline-block;

  &[data-focus-visible],
  &[data-drop-target] {
    outline: 2px solid var(--focus-ring-color);
    outline-offset: -1px;
  }

  &[data-drop-target] {
    background: var(--highlight-overlay);
  }
}
```

```
@import "@react-aria/example-theme";

.react-aria-DropZone {
  color: var(--text-color);
  background: var(--overlay-background);
  border: 1px solid var(--border-color);
  forced-color-adjust: none;
  border-radius: 4px;
  appearance: none;
  vertical-align: middle;
  font-size: 1.2rem;
  text-align: center;
  margin: 0;
  outline: none;
  padding: 24px 12px;
  width: 25%;
  display: inline-block;

  &[data-focus-visible],
  &[data-drop-target] {
    outline: 2px solid var(--focus-ring-color);
    outline-offset: -1px;
  }

  &[data-drop-target] {
    background: var(--highlight-overlay);
  }
}
```

* * *

There is no native element to implement a drop zone in HTML. `DropZone` helps achieve accessible dropzone components that can be styled as needed.

-   **Styleable** – Hover, keyboard focus, and the drop target states are provided for easy styling. These styles only apply when interacting with an appropriate input device, unlike CSS pseudo classes.
-   **Accessible** – Support for native drag and drop via mouse and touch, as well as keyboard and screen reader interactions. Copy and paste is also supported as a keyboard accessible alternative.
-   **Flexible** – Files, directories, and custom data types can be dropped, and the contents of the drop zone can be fully customized.

* * *

A drop zone consists of a target element for the dropped objects. Users may drop objects via mouse, keyboard, or touch. `DropZone` accepts any content as its children, which may change when the user drops content. A [FileTrigger](https://react-spectrum.adobe.com/react-aria/FileTrigger.html) is commonly paired with a DropZone to allow a user to choose files from their device.

A visual label should be provided to `DropZone` using a `Text` element with a `label` slot. If it is not provided, then an `aria-label` or `aria-labelledby` prop must be passed to identify the visually hidden button to assistive technology.

```
import {DropZone, Text} from 'react-aria-components';

<DropZone>
  <Text slot="label" />
</DropZone>
```

```
import {DropZone, Text} from 'react-aria-components';

<DropZone>
  <Text slot="label" />
</DropZone>
```

```
import {
  DropZone,
  Text
} from 'react-aria-components';

<DropZone>
  <Text slot="label" />
</DropZone>
```

A drop zone can include a `FileTrigger` as a child, which may also be used standalone or reused in other components.

[

FileTrigger

A file trigger allows a user to access the file system with any pressable component such as a Button.

](https://react-spectrum.adobe.com/react-aria/FileTrigger.html)

* * *

`DropZone` supports user interactions via mouse, keyboard, and touch. You can handle all of these via the `onDrop` prop. In addition, the `onDropEnter`, `onDropMove`, and `onDropExit` events are fired as the user interacts with the dropzone.

```
import type {TextDropItem} from 'react-aria';

function Example() {
  let [dropped, setDropped] = React.useState(null);

  return (
    <>
      <Draggable />
      <DropZone
        onDrop={async (e) => {
          let items = await Promise.all(
            e.items
              .filter((item) =>
                item.kind === 'text' && item.types.has('text/plain')
              )
              .map((item: TextDropItem) => item.getText('text/plain'))
          );
          setDropped(items.join('\n'));
        }}
      >
        <Text slot="label">
          {dropped || 'Drop here'}
        </Text>
      </DropZone>
    </>
  );
}

<Example />
```

```
import type {TextDropItem} from 'react-aria';

function Example() {
  let [dropped, setDropped] = React.useState(null);

  return (
    <>
      <Draggable />
      <DropZone
        onDrop={async (e) => {
          let items = await Promise.all(
            e.items
              .filter((item) =>
                item.kind === 'text' &&
                item.types.has('text/plain')
              )
              .map((item: TextDropItem) =>
                item.getText('text/plain')
              )
          );
          setDropped(items.join('\n'));
        }}
      >
        <Text slot="label">
          {dropped || 'Drop here'}
        </Text>
      </DropZone>
    </>
  );
}

<Example />
```

```
import type {TextDropItem} from 'react-aria';

function Example() {
  let [
    dropped,
    setDropped
  ] = React.useState(
    null
  );

  return (
    <>
      <Draggable />
      <DropZone
        onDrop={async (
          e
        ) => {
          let items =
            await Promise
              .all(
                e.items
                  .filter(
                    (item) =>
                      item
                          .kind ===
                        'text' &&
                      item
                        .types
                        .has(
                          'text/plain'
                        )
                  )
                  .map((
                    item:
                      TextDropItem
                  ) =>
                    item
                      .getText(
                        'text/plain'
                      )
                  )
              );
          setDropped(
            items.join(
              '\n'
            )
          );
        }}
      >
        <Text slot="label">
          {dropped ||
            'Drop here'}
        </Text>
      </DropZone>
    </>
  );
}

<Example />
```

The `Draggable` component used above is defined below. See [useDrag](https://react-spectrum.adobe.com/react-aria/useDrag.html) for more details and documentation.

Show code

```
import {useDrag} from 'react-aria-components';

function Draggable() {
  let { dragProps, isDragging } = useDrag({
    getItems() {
      return [{
        'text/plain': 'hello world',
        'my-app-custom-type': JSON.stringify({ message: 'hello world' })
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
```

```
import {useDrag} from 'react-aria-components';

function Draggable() {
  let { dragProps, isDragging } = useDrag({
    getItems() {
      return [{
        'text/plain': 'hello world',
        'my-app-custom-type': JSON.stringify({
          message: 'hello world'
        })
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
```

```
import {useDrag} from 'react-aria-components';

function Draggable() {
  let {
    dragProps,
    isDragging
  } = useDrag({
    getItems() {
      return [{
        'text/plain':
          'hello world',
        'my-app-custom-type':
          JSON.stringify(
            {
              message:
                'hello world'
            }
          )
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
```

Show CSS

```
.draggable {
  display: inline-block;
  vertical-align: top;
  border: 1px solid gray;
  padding: 10px;
  margin-right: 20px;
  border-radius: 4px;
}

.draggable.dragging {
  opacity: 0.5;
}
```

```
.draggable {
  display: inline-block;
  vertical-align: top;
  border: 1px solid gray;
  padding: 10px;
  margin-right: 20px;
  border-radius: 4px;
}

.draggable.dragging {
  opacity: 0.5;
}
```

```
.draggable {
  display: inline-block;
  vertical-align: top;
  border: 1px solid gray;
  padding: 10px;
  margin-right: 20px;
  border-radius: 4px;
}

.draggable.dragging {
  opacity: 0.5;
}
```

* * *

The `label` slot enables the user to reference the text content to define the dropzone's accessible name.

```
import {Text} from 'react-aria-components';

function Example() {
  let [dropped, setDropped] = React.useState(false);

  return (
    <DropZone
      onDrop={() => setDropped(true)}>
      <Text slot="label">
        {dropped ? 'Successful drop!' : 'Drop files here'}
      </Text>
    </DropZone>
  );
}
```

```
import {Text} from 'react-aria-components';

function Example() {
  let [dropped, setDropped] = React.useState(false);

  return (
    <DropZone
      onDrop={() => setDropped(true)}>
      <Text slot="label">
        {dropped ? 'Successful drop!' : 'Drop files here'}
      </Text>
    </DropZone>
  );
}
```

```
import {Text} from 'react-aria-components';

function Example() {
  let [
    dropped,
    setDropped
  ] = React.useState(
    false
  );

  return (
    <DropZone
      onDrop={() =>
        setDropped(true)}
    >
      <Text slot="label">
        {dropped
          ? 'Successful drop!'
          : 'Drop files here'}
      </Text>
    </DropZone>
  );
}
```

* * *

To allow the selection of files from the user's device, pass `FileTrigger` as a child of `DropZone`.

```
import {Button, FileTrigger} from 'react-aria-components';
import type {FileDropItem} from 'react-aria';

function Example() {
  let [files, setFiles] = React.useState(null);

  return (
    <DropZone
      onDrop={(e) => {
        let files = e.items.filter((file) =>
          file.kind === 'file'
        ) as FileDropItem[];
        let filenames = files.map((file) => file.name);
        setFiles(filenames.join(', '));
      }}
    >
      <FileTrigger
        allowsMultiple
        onSelect={(e) => {
          let files = Array.from(e);
          let filenames = files.map((file) => file.name);
          setFiles(filenames.join(', '));
        }}
      >
        <Button>Select files</Button>
      </FileTrigger>
      <Text slot="label" style={{ display: 'block' }}>
        {files || 'Drop files here'}
      </Text>
    </DropZone>
  );
}
```

```
import {Button, FileTrigger} from 'react-aria-components';
import type {FileDropItem} from 'react-aria';

function Example() {
  let [files, setFiles] = React.useState(null);

  return (
    <DropZone
      onDrop={(e) => {
        let files = e.items.filter((file) =>
          file.kind === 'file'
        ) as FileDropItem[];
        let filenames = files.map((file) => file.name);
        setFiles(filenames.join(', '));
      }}
    >
      <FileTrigger
        allowsMultiple
        onSelect={(e) => {
          let files = Array.from(e);
          let filenames = files.map((file) => file.name);
          setFiles(filenames.join(', '));
        }}
      >
        <Button>Select files</Button>
      </FileTrigger>
      <Text slot="label" style={{ display: 'block' }}>
        {files || 'Drop files here'}
      </Text>
    </DropZone>
  );
}
```

```
import {
  Button,
  FileTrigger
} from 'react-aria-components';
import type {FileDropItem} from 'react-aria';

function Example() {
  let [files, setFiles] =
    React.useState(null);

  return (
    <DropZone
      onDrop={(e) => {
        let files = e
          .items.filter((
            file
          ) =>
            file.kind ===
              'file'
          ) as FileDropItem[];
        let filenames =
          files.map((
            file
          ) =>
            file.name
          );
        setFiles(
          filenames.join(
            ', '
          )
        );
      }}
    >
      <FileTrigger
        allowsMultiple
        onSelect={(
          e
        ) => {
          let files =
            Array.from(
              e
            );
          let filenames =
            files.map((
              file
            ) =>
              file.name
            );
          setFiles(
            filenames
              .join(', ')
          );
        }}
      >
        <Button>
          Select files
        </Button>
      </FileTrigger>
      <Text
        slot="label"
        style={{
          display:
            'block'
        }}
      >
        {files ||
          'Drop files here'}
      </Text>
    </DropZone>
  );
}
```

* * *

A dropzone displays visual feedback to the user when a drag hovers over the drop target by passing the `getDropOperation` function. If a drop target only supports data of specific types (e.g. images, videos, text, etc.), then it should implement the `getDropOperation` prop and return `cancel` for types that aren't supported. This will prevent visual feedback indicating that the drop target accepts the dragged data when this is not true. [Read more about getDropOperation.](https://react-spectrum.adobe.com/react-aria/useDrop.html#getdropoperation)

```
function Example() {
  let [dropped, setDropped] = React.useState(false);

  return (
    <DropZone
      getDropOperation={(types) => types.has('image/png') ? 'copy' : 'cancel'}
      onDrop={() => setDropped(true)}>
      {dropped ? 'Successful drop!' : 'Drop files here'}
    </DropZone>
  );
}
```

```
function Example() {
  let [dropped, setDropped] = React.useState(false);

  return (
    <DropZone
      getDropOperation={(types) =>
        types.has('image/png') ? 'copy' : 'cancel'}
      onDrop={() => setDropped(true)}
    >
      {dropped ? 'Successful drop!' : 'Drop files here'}
    </DropZone>
  );
}
```

```
function Example() {
  let [
    dropped,
    setDropped
  ] = React.useState(
    false
  );

  return (
    <DropZone
      getDropOperation={(
        types
      ) =>
        types.has(
            'image/png'
          )
          ? 'copy'
          : 'cancel'}
      onDrop={() =>
        setDropped(true)}
    >
      {dropped
        ? 'Successful drop!'
        : 'Drop files here'}
    </DropZone>
  );
}
```

* * *

Name

Type

Description

`getDropOperation`

`( (types: [DragTypes](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dnd.d.ts:DragTypes), , allowedOperations: [DropOperation](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dnd.d.ts:DropOperation)[] )) => [DropOperation](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dnd.d.ts:DropOperation)`

A function returning the drop operation to be performed when items matching the given types are dropped on the drop target.

`isDisabled`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether the drop target is disabled. If true, the drop target will not accept any drops.

`children`

`[ChildrenOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ChildrenOrFunction)<[DropZoneRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/DropZone.tsx:DropZoneRenderProps)>`

The children of the component. A function may be provided to alter the children based on component state.

`className`

`[ClassNameOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ClassNameOrFunction)<[DropZoneRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/DropZone.tsx:DropZoneRenderProps)>`

The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.

`style`

`[StyleOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:StyleOrFunction)<[DropZoneRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/DropZone.tsx:DropZoneRenderProps)>`

The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.

Events

Name

Type

Description

`onDropEnter`

`( (e: [DropEnterEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dnd.d.ts:DropEnterEvent) )) => void`

Handler that is called when a valid drag enters the drop target.

`onDropMove`

`( (e: [DropMoveEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dnd.d.ts:DropMoveEvent) )) => void`

Handler that is called when a valid drag is moved within the drop target.

`onDropActivate`

`( (e: [DropActivateEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dnd.d.ts:DropActivateEvent) )) => void`

Handler that is called after a valid drag is held over the drop target for a period of time. This typically opens the item so that the user can drop within it.

`onDropExit`

`( (e: [DropExitEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dnd.d.ts:DropExitEvent) )) => void`

Handler that is called when a valid drag exits the drop target.

`onDrop`

`( (e: [DropEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dnd.d.ts:DropEvent) )) => void`

Handler that is called when a valid drag is dropped on the drop target.

`onHoverStart`

`( (e: [HoverEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/events.d.ts:HoverEvent) )) => void`

Handler that is called when a hover interaction starts.

`onHoverEnd`

`( (e: [HoverEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/events.d.ts:HoverEvent) )) => void`

Handler that is called when a hover interaction ends.

`onHoverChange`

`( (isHovering: [boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) )) => void`

Handler that is called when the hover state changes.

Layout

Name

Type

Description

`slot`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)`

A slot name for the component. Slots allow the component to receive props from a parent component. An explicit `null` value indicates that the local props completely override all props received from a parent.

PositioningAccessibility

Name

Type

Description

`aria-label`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

Defines a string value that labels the current element.

`aria-labelledby`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

Identifies the element (or elements) that labels the current element.

`aria-describedby`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

Identifies the element (or elements) that describes the object.

`aria-details`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

Identifies the element (or elements) that provide a detailed, extended description for the object.

* * *

React Aria components can be styled in many ways, including using CSS classes, inline styles, utility classes (e.g. Tailwind), CSS-in-JS (e.g. Styled Components), etc. By default, all components include a builtin `className` attribute which can be targeted using CSS selectors. These follow the `react-aria-ComponentName` naming convention.

```
.react-aria-DropZone {
  /* ... */
}
```

```
.react-aria-DropZone {
  /* ... */
}
```

```
.react-aria-DropZone {
  /* ... */
}
```

A custom `className` can also be specified on any component. This overrides the default `className` provided by React Aria with your own.

```
<DropZone className="my-dropzone">
  {/* ... */}
</DropZone>
```

```
<DropZone className="my-dropzone">
  {/* ... */}
</DropZone>
```

```
<DropZone className="my-dropzone">
  {/* ... */}
</DropZone>
```

In addition, some components support multiple UI states (e.g. focused, placeholder, readonly, etc.). React Aria components expose states using data attributes, which you can target in CSS selectors. For example:

```
.react-aria-DropZone[data-drop-target] {
  /* ... */
}
```

```
.react-aria-DropZone[data-drop-target] {
  /* ... */
}
```

```
.react-aria-DropZone[data-drop-target] {
  /* ... */
}
```

The `className` and `style` props also accept functions which receive states for styling. This lets you dynamically determine the classes or styles to apply, which is useful when using utility CSS libraries like [Tailwind](https://tailwindcss.com/).

```
<DropZone
  className={({ isDropTarget }) =>
    isDropTarget ? 'bg-gray-700' : 'bg-gray-600'}
/>
```

```
<DropZone
  className={({ isDropTarget }) =>
    isDropTarget ? 'bg-gray-700' : 'bg-gray-600'}
/>
```

```
<DropZone
  className={(
    { isDropTarget }
  ) =>
    isDropTarget
      ? 'bg-gray-700'
      : 'bg-gray-600'}
/>
```

Render props may also be used as children to alter what elements are rendered based on the current state. For example, you could render an extra element when the drop target is in an active state.

```
<DropZone>
  {({isDropTarget}) => (
    <>
      {isDropTarget && <DropHighlight/>}
      Drop item here
    </>
  )}
</DropZone>
```

```
<DropZone>
  {({isDropTarget}) => (
    <>
      {isDropTarget && <DropHighlight/>}
      Drop item here
    </>
  )}
</DropZone>
```

```
<DropZone>
  {(
    { isDropTarget }
  ) => (
    <>
      {isDropTarget &&
        (
          <DropHighlight />
        )}
      Drop item here
    </>
  )}
</DropZone>
```

The states, selectors, and render props for `DropZone` are documented below.

Name

CSS Selector

Description

`isHovered`

`[data-hovered]`

Whether the dropzone is currently hovered with a mouse.

`isFocused`

`[data-focused]`

Whether the dropzone is focused, either via a mouse or keyboard.

`isFocusVisible`

`[data-focus-visible]`

Whether the dropzone is keyboard focused.

`isDropTarget`

`[data-drop-target]`

Whether the dropzone is the drop target.

`isDisabled`

`[data-disabled]`

Whether the dropzone is disabled.

* * *

If you need to customize things further, such as accessing internal state or customizing DOM structure, you can drop down to the lower level Hook-based API. See [useDrop](https://react-spectrum.adobe.com/react-aria/useDrop.html) for more details.