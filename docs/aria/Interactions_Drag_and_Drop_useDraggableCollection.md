# useDraggableCollection

**Source**: [https://react-spectrum.adobe.com/react-aria/useDraggableCollection.html](https://react-spectrum.adobe.com/react-aria/useDraggableCollection.html)

> Documentation for useDraggableCollection in the React Aria package.

---

Handles drag interactions for a collection component, with support for traditional mouse and touch based drag and drop, in addition to full parity for keyboard and screen reader users.

* * *

`useDraggableCollectionState<T = [object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)>( (props: [DraggableCollectionStateOptions](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/dnd/src/useDraggableCollectionState.ts:DraggableCollectionStateOptions)<T> )): [DraggableCollectionState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/dnd/src/useDraggableCollectionState.ts:DraggableCollectionState)` `useDraggableCollection( props: [DraggableCollectionOptions](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/dnd/src/useDraggableCollection.ts:DraggableCollectionOptions), state: [DraggableCollectionState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/dnd/src/useDraggableCollectionState.ts:DraggableCollectionState), ref: [RefObject](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/refs.d.ts:RefObject)<[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element) |  | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)> ): void` `useDraggableItem( (props: [DraggableItemProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/dnd/src/useDraggableItem.ts:DraggableItemProps), , state: [DraggableCollectionState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/dnd/src/useDraggableCollectionState.ts:DraggableCollectionState) )): [DraggableItemResult](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/dnd/src/useDraggableItem.ts:DraggableItemResult)`

* * *

Collection components built with hooks such as [useListBox](https://react-spectrum.adobe.com/react-aria/useListBox.html), [useTable](https://react-spectrum.adobe.com/react-aria/useTable.html), and [useGridList](https://react-spectrum.adobe.com/react-aria/useGridList.html) can support drag and drop interactions. Users can drag multiple selected items at once, or drag individual non-selected items.

React Aria supports traditional mouse and touch based drag and drop, but also implements keyboard and screen reader friendly interactions. Users can press Enter on a draggable element to enter drag and drop mode. Then, they can press Tab to navigate between drop targets, and Enter to drop or Escape to cancel. Touch screen reader users can also drag by double tapping to activate drag and drop mode, swiping between drop targets, and double tapping again to drop.

See the [drag and drop introduction](https://react-spectrum.adobe.com/react-aria/dnd.html) to learn more.

The `[useDraggableCollection](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/dnd/src/useDraggableCollection.ts:useDraggableCollection)` hook implements drag interactions within any [collection component](https://react-spectrum.adobe.com/react-stately/collections.html), using state managed by `[useDraggableCollectionState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/dnd/src/useDraggableCollectionState.ts:useDraggableCollectionState)`. The `[useDraggableItem](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/dnd/src/useDraggableItem.ts:useDraggableItem)` hook should be added to each individual item within the collection to make it draggable, combining props from the relevant hook (e.g. `useOption`). These hooks integrate with React Aria's [selection](https://react-spectrum.adobe.com/react-stately/selection.html) system to enable dragging multiple selected items at once.

* * *

This example renders a ListBox using the [useListBox](https://react-spectrum.adobe.com/react-aria/useListBox.html) hook, and adds support for dragging items. The highlighted code sections below show the main additions for drag and drop compared with a normal listbox.

```
import {Item, useDraggableCollectionState, useListState} from 'react-stately';

import {mergeProps, useDraggableCollection, useDraggableItem, useFocusRing, useListBox, useOption} from 'react-aria';

function ListBox(props) {
  // Setup listbox as normal. See the useListBox docs for more details.
  let state = useListState(props);
  let ref = React.useRef(null);
  let { listBoxProps } = useListBox(
    {
      ...props,
      // Prevent dragging from changing selection.
      shouldSelectOnPressUp: true    },
    state,
    ref
  );

  // Setup drag state for the collection.
  let dragState = useDraggableCollectionState({
    // Pass through events from props.
    ...props,

    // Collection and selection manager come from list state.
    collection: state.collection,
    selectionManager: state.selectionManager,

    // Provide data for each dragged item. This function could
    // also be provided by the user of the component.
    getItems: props.getItems || ((keys) => {
      return [...keys].map((key) => {
        let item = state.collection.getItem(key);

        return {
          'text/plain': item.textValue
        };
      });
    })
  });

  useDraggableCollection(props, dragState, ref);
  return (
    <ul {...listBoxProps} ref={ref}>
      {[...state.collection].map((item) => (
        <Option
          key={item.key}
          item={item}
          state={state}
          dragState={dragState}
        />
      ))}
    </ul>
  );
}

function Option({ item, state, dragState }) {
  // Setup listbox option as normal. See useListBox docs for details.
  let ref = React.useRef(null);
  let { optionProps } = useOption({ key: item.key }, state, ref);
  let { isFocusVisible, focusProps } = useFocusRing();

  // Register the item as a drag source.
  let { dragProps } = useDraggableItem({
    key: item.key
  }, dragState);
  // Merge option props and dnd props, and render the item.
  return (
    <li
      {...mergeProps(optionProps, dragProps, focusProps)}      ref={ref}
      className={`option ${isFocusVisible ? 'focus-visible' : ''}`}
    >
      {item.rendered}
    </li>
  );
}

<ListBox aria-label="Categories" selectionMode="multiple">
  <Item>Animals</Item>
  <Item>People</Item>
  <Item>Plants</Item>
</ListBox>
<DropTarget />
```

```
import {
  Item,
  useDraggableCollectionState,
  useListState
} from 'react-stately';

import {
  mergeProps,
  useDraggableCollection,
  useDraggableItem,
  useFocusRing,
  useListBox,
  useOption
} from 'react-aria';

function ListBox(props) {
  // Setup listbox as normal. See the useListBox docs for more details.
  let state = useListState(props);
  let ref = React.useRef(null);
  let { listBoxProps } = useListBox(
    {
      ...props,
      // Prevent dragging from changing selection.
      shouldSelectOnPressUp: true    },
    state,
    ref
  );

  // Setup drag state for the collection.
  let dragState = useDraggableCollectionState({
    // Pass through events from props.
    ...props,

    // Collection and selection manager come from list state.
    collection: state.collection,
    selectionManager: state.selectionManager,

    // Provide data for each dragged item. This function could
    // also be provided by the user of the component.
    getItems: props.getItems || ((keys) => {
      return [...keys].map((key) => {
        let item = state.collection.getItem(key);

        return {
          'text/plain': item.textValue
        };
      });
    })
  });

  useDraggableCollection(props, dragState, ref);
  return (
    <ul {...listBoxProps} ref={ref}>
      {[...state.collection].map((item) => (
        <Option
          key={item.key}
          item={item}
          state={state}
          dragState={dragState}
        />
      ))}
    </ul>
  );
}

function Option({ item, state, dragState }) {
  // Setup listbox option as normal. See useListBox docs for details.
  let ref = React.useRef(null);
  let { optionProps } = useOption(
    { key: item.key },
    state,
    ref
  );
  let { isFocusVisible, focusProps } = useFocusRing();

  // Register the item as a drag source.
  let { dragProps } = useDraggableItem({
    key: item.key
  }, dragState);
  // Merge option props and dnd props, and render the item.
  return (
    <li
      {...mergeProps(optionProps, dragProps, focusProps)}      ref={ref}
      className={`option ${
        isFocusVisible ? 'focus-visible' : ''
      }`}
    >
      {item.rendered}
    </li>
  );
}

<ListBox aria-label="Categories" selectionMode="multiple">
  <Item>Animals</Item>
  <Item>People</Item>
  <Item>Plants</Item>
</ListBox>
<DropTarget />
```

```
import {
  Item,
  useDraggableCollectionState,
  useListState
} from 'react-stately';

import {
  mergeProps,
  useDraggableCollection,
  useDraggableItem,
  useFocusRing,
  useListBox,
  useOption
} from 'react-aria';

function ListBox(props) {
  // Setup listbox as normal. See the useListBox docs for more details.
  let state =
    useListState(props);
  let ref = React.useRef(
    null
  );
  let { listBoxProps } =
    useListBox(
      {
        ...props,
        // Prevent dragging from changing selection.
        shouldSelectOnPressUp:
          true      },
      state,
      ref
    );

  // Setup drag state for the collection.
  let dragState =
    useDraggableCollectionState(
      {
        // Pass through events from props.
        ...props,

        // Collection and selection manager come from list state.
        collection:
          state
            .collection,
        selectionManager:
          state
            .selectionManager,

        // Provide data for each dragged item. This function could
        // also be provided by the user of the component.
        getItems:
          props
            .getItems ||
          ((keys) => {
            return [
              ...keys
            ].map(
              (key) => {
                let item =
                  state
                    .collection
                    .getItem(
                      key
                    );

                return {
                  'text/plain':
                    item
                      .textValue
                };
              }
            );
          })
      }
    );

  useDraggableCollection(
    props,
    dragState,
    ref
  );
  return (
    <ul
      {...listBoxProps}
      ref={ref}
    >
      {[
        ...state
          .collection
      ].map((item) => (
        <Option
          key={item.key}
          item={item}
          state={state}
          dragState={dragState}
        />
      ))}
    </ul>
  );
}

function Option(
  {
    item,
    state,
    dragState
  }
) {
  // Setup listbox option as normal. See useListBox docs for details.
  let ref = React.useRef(
    null
  );
  let { optionProps } =
    useOption(
      { key: item.key },
      state,
      ref
    );
  let {
    isFocusVisible,
    focusProps
  } = useFocusRing();

  // Register the item as a drag source.
  let { dragProps } =
    useDraggableItem({
      key: item.key
    }, dragState);
  // Merge option props and dnd props, and render the item.
  return (
    <li
      {...mergeProps(
        optionProps,
        dragProps,
        focusProps
      )}      ref={ref}
      className={`option ${
        isFocusVisible
          ? 'focus-visible'
          : ''
      }`}
    >
      {item.rendered}
    </li>
  );
}

<ListBox
  aria-label="Categories"
  selectionMode="multiple"
>
  <Item>Animals</Item>
  <Item>People</Item>
  <Item>Plants</Item>
</ListBox>
<DropTarget />
```

Show CSS

```
[role=listbox] {
  padding: 0;
  margin: 5px 0;
  list-style: none;
  box-shadow: inset 0 0 0 1px gray;
  max-width: 250px;
  outline: none;
  min-height: 50px;
  overflow: auto;
}

.option {
  padding: 3px 6px;
  outline: none;
}

.option[aria-selected=true] {
  background: blueviolet;
  color: white;
}

.option.focus-visible {
  box-shadow: inset 0 0 0 2px orange;
}

.option.drop-target {
  border-color: transparent;
  box-shadow: inset 0 0 0 2px var(--blue);
}
```

```
[role=listbox] {
  padding: 0;
  margin: 5px 0;
  list-style: none;
  box-shadow: inset 0 0 0 1px gray;
  max-width: 250px;
  outline: none;
  min-height: 50px;
  overflow: auto;
}

.option {
  padding: 3px 6px;
  outline: none;
}

.option[aria-selected=true] {
  background: blueviolet;
  color: white;
}

.option.focus-visible {
  box-shadow: inset 0 0 0 2px orange;
}

.option.drop-target {
  border-color: transparent;
  box-shadow: inset 0 0 0 2px var(--blue);
}
```

```
[role=listbox] {
  padding: 0;
  margin: 5px 0;
  list-style: none;
  box-shadow: inset 0 0 0 1px gray;
  max-width: 250px;
  outline: none;
  min-height: 50px;
  overflow: auto;
}

.option {
  padding: 3px 6px;
  outline: none;
}

.option[aria-selected=true] {
  background: blueviolet;
  color: white;
}

.option.focus-visible {
  box-shadow: inset 0 0 0 2px orange;
}

.option.drop-target {
  border-color: transparent;
  box-shadow: inset 0 0 0 2px var(--blue);
}
```

The `DropTarget` component used above is defined below. See [useDrop](https://react-spectrum.adobe.com/react-aria/useDrop.html) for more details and documentation.

Show code

```
import type {TextDropItem} from 'react-aria';
import {useButton, useDrop} from 'react-aria';

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
              return { name: await item.getText('text/plain'), style: 'span' };
            }
          })
      );
      setDropped(items);
    }
  });

  let { buttonProps } = useButton({ elementType: 'div' }, ref);

  let message = ['Drop here'];
  if (dropped) {
    message = dropped.map((item, i) => (
      <div key={i}>
        <item.style>{item.name}</item.style>
      </div>
    ));
  }

  return (
    <div
      {...mergeProps(dropProps, buttonProps)}
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
import {useButton, useDrop} from 'react-aria';

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
                name: await item.getText('text/plain'),
                style: 'span'
              };
            }
          })
      );
      setDropped(items);
    }
  });

  let { buttonProps } = useButton(
    { elementType: 'div' },
    ref
  );

  let message = ['Drop here'];
  if (dropped) {
    message = dropped.map((item, i) => (
      <div key={i}>
        <item.style>{item.name}</item.style>
      </div>
    ));
  }

  return (
    <div
      {...mergeProps(dropProps, buttonProps)}
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
import {
  useButton,
  useDrop
} from 'react-aria';

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
                      name:
                        await item
                          .getText(
                            'text/plain'
                          ),
                      style:
                        'span'
                    };
                  }
                }
              )
          );
      setDropped(items);
    }
  });

  let { buttonProps } =
    useButton({
      elementType: 'div'
    }, ref);

  let message = [
    'Drop here'
  ];
  if (dropped) {
    message = dropped
      .map((item, i) => (
        <div key={i}>
          <item.style>
            {item.name}
          </item.style>
        </div>
      ));
  }

  return (
    <div
      {...mergeProps(
        dropProps,
        buttonProps
      )}
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

Show CSS

```
.droppable {
  width: 100px;
  height: 50px;
  border-radius: 6px;
  display: inline-block;
  padding: 20px;
  border: 2px dotted gray;
  white-space: pre-wrap;
}

.droppable.target {
  border: 2px solid var(--blue);
}
```

```
.droppable {
  width: 100px;
  height: 50px;
  border-radius: 6px;
  display: inline-block;
  padding: 20px;
  border: 2px dotted gray;
  white-space: pre-wrap;
}

.droppable.target {
  border: 2px solid var(--blue);
}
```

```
.droppable {
  width: 100px;
  height: 50px;
  border-radius: 6px;
  display: inline-block;
  padding: 20px;
  border: 2px dotted gray;
  white-space: pre-wrap;
}

.droppable.target {
  border: 2px solid var(--blue);
}
```

* * *

Data for a draggable element can be provided in multiple formats at once. This allows drop targets to choose data in a format that they understand. For example, you could serialize a complex object as JSON in a custom format for use within your own application, and also provide plain text and/or rich HTML fallbacks that can be used when a user drops data in an external application (e.g. an email message).

This can be done by returning multiple keys for an item from the `getItems` function. Types can either be a standard [mime type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types) for interoperability with external applications, or a custom string for use within your own app.

This example provides representations of each item as plain text, HTML, and a custom app-specific data format. Dropping on the drop targets in this page will use the custom data format to render formatted items. If you drop in an external application supporting rich text, the HTML representation will be used. Dropping in a text editor will use the plain text format.

```
let items = new Map([
  ['ps', { name: 'Photoshop', style: 'strong' }],
  ['xd', { name: 'XD', style: 'strong' }],
  ['id', { name: 'InDesign', style: 'strong' }],
  ['dw', { name: 'Dreamweaver', style: 'em' }],
  ['co', { name: 'Connect', style: 'em' }]
]);

let getItems = (keys) => (
  [...keys].map((key) => {
    let item = items.get(key);
    return {
      'text/plain': item.name,
      'text/html': `<${item.style}>${item.name}</${item.style}>`,
      'my-app-custom-type': JSON.stringify(item)
    };
  })
);
<ListBox
  aria-label="Adobe Apps"
  items={items}
  getItems={getItems}
  selectionMode="multiple"
>
  {([id, item]) => (
    <Item key={id} textValue={item.name}>
      <item.style>{item.name}</item.style>
    </Item>
  )}
</ListBox>
<DropTarget />
```

```
let items = new Map([
  ['ps', { name: 'Photoshop', style: 'strong' }],
  ['xd', { name: 'XD', style: 'strong' }],
  ['id', { name: 'InDesign', style: 'strong' }],
  ['dw', { name: 'Dreamweaver', style: 'em' }],
  ['co', { name: 'Connect', style: 'em' }]
]);

let getItems = (keys) => (
  [...keys].map((key) => {
    let item = items.get(key);
    return {
      'text/plain': item.name,
      'text/html':
        `<${item.style}>${item.name}</${item.style}>`,
      'my-app-custom-type': JSON.stringify(item)
    };
  })
);
<ListBox
  aria-label="Adobe Apps"
  items={items}
  getItems={getItems}
  selectionMode="multiple"
>
  {([id, item]) => (
    <Item key={id} textValue={item.name}>
      <item.style>{item.name}</item.style>
    </Item>
  )}
</ListBox>
<DropTarget />
```

```
let items = new Map([
  ['ps', {
    name: 'Photoshop',
    style: 'strong'
  }],
  ['xd', {
    name: 'XD',
    style: 'strong'
  }],
  ['id', {
    name: 'InDesign',
    style: 'strong'
  }],
  ['dw', {
    name: 'Dreamweaver',
    style: 'em'
  }],
  ['co', {
    name: 'Connect',
    style: 'em'
  }]
]);

let getItems = (
  keys
) => (
  [...keys].map(
    (key) => {
      let item = items
        .get(key);
      return {
        'text/plain':
          item.name,
        'text/html':
          `<${item.style}>${item.name}</${item.style}>`,
        'my-app-custom-type':
          JSON.stringify(
            item
          )
      };
    }
  )
);
<ListBox
  aria-label="Adobe Apps"
  items={items}
  getItems={getItems}
  selectionMode="multiple"
>
  {([id, item]) => (
    <Item
      key={id}
      textValue={item
        .name}
    >
      <item.style>
        {item.name}
      </item.style>
    </Item>
  )}
</ListBox>
<DropTarget />
```

* * *

By default, the drag preview shown under the user's pointer or finger is a copy of the original element that started the drag. A custom preview can be rendered using the `<DragPreview>` component. This accepts a function as a child which receives the dragged data that was returned by `getItems`, and returns a rendered preview for those items. The `DragPreview` is linked with `useDraggableCollectionState` via a ref, passed to the `preview` property. The `DragPreview` should be placed in the component hierarchy appropriately, so that it receives any React context or inherited styles that it needs to render correctly.

This example renders a custom drag preview which shows the number of items being dragged, or the contents if there is only one.

```
import {DragPreview} from 'react-aria';

function ListBox(props) {
  // ...

  let preview = React.useRef(null);  let dragState = useDraggableCollectionState({
    collection: state.collection,
    selectionManager: state.selectionManager,
    preview,    getItems(keys) {
      return [...keys].map((key) => {
        let item = state.collection.getItem(key);
        return {
          'text/plain': item.textValue
        };
      });
    }
  });

  useDraggableCollection(props, dragState, ref);

  return (
    <ul {...listBoxProps} ref={ref}>
      {[...state.collection].map((item) => (
        <Option
          key={item.key}
          item={item}
          state={state}
          dragState={dragState}
        />
      ))}
      <DragPreview ref={preview}>
        {(items) => (
          <div style={{ background: 'green', color: 'white' }}>
            {items.length > 1
              ? `${items.length} items`
              : items[0]['text/plain']}
          </div>
        )}
      </DragPreview>    </ul>
  );
}

<ListBox aria-label="Categories" selectionMode="multiple">
  <Item>Animals</Item>
  <Item>People</Item>
  <Item>Plants</Item>
</ListBox>
<DropTarget />
```

```
import {DragPreview} from 'react-aria';

function ListBox(props) {
  // ...

  let preview = React.useRef(null);  let dragState = useDraggableCollectionState({
    collection: state.collection,
    selectionManager: state.selectionManager,
    preview,    getItems(keys) {
      return [...keys].map((key) => {
        let item = state.collection.getItem(key);
        return {
          'text/plain': item.textValue
        };
      });
    }
  });

  useDraggableCollection(props, dragState, ref);

  return (
    <ul {...listBoxProps} ref={ref}>
      {[...state.collection].map((item) => (
        <Option
          key={item.key}
          item={item}
          state={state}
          dragState={dragState}
        />
      ))}
      <DragPreview ref={preview}>
        {(items) => (
          <div
            style={{ background: 'green', color: 'white' }}
          >
            {items.length > 1
              ? `${items.length} items`
              : items[0]['text/plain']}
          </div>
        )}
      </DragPreview>    </ul>
  );
}

<ListBox aria-label="Categories" selectionMode="multiple">
  <Item>Animals</Item>
  <Item>People</Item>
  <Item>Plants</Item>
</ListBox>
<DropTarget />
```

```
import {DragPreview} from 'react-aria';

function ListBox(props) {
  // ...

  let preview = React
    .useRef(null);  let dragState =
    useDraggableCollectionState(
      {
        collection:
          state
            .collection,
        selectionManager:
          state
            .selectionManager,
        preview,        getItems(keys) {
          return [
            ...keys
          ].map(
            (key) => {
              let item =
                state
                  .collection
                  .getItem(
                    key
                  );
              return {
                'text/plain':
                  item
                    .textValue
              };
            }
          );
        }
      }
    );

  useDraggableCollection(
    props,
    dragState,
    ref
  );

  return (
    <ul
      {...listBoxProps}
      ref={ref}
    >
      {[
        ...state
          .collection
      ].map((item) => (
        <Option
          key={item.key}
          item={item}
          state={state}
          dragState={dragState}
        />
      ))}
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
            {items
                .length >
                1
              ? `${items.length} items`
              : items[0][
                'text/plain'
              ]}
          </div>
        )}
      </DragPreview>    </ul>
  );
}

<ListBox
  aria-label="Categories"
  selectionMode="multiple"
>
  <Item>Animals</Item>
  <Item>People</Item>
  <Item>Plants</Item>
</ListBox>
<DropTarget />
```

* * *

A `[DropOperation](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dnd.d.ts:DropOperation)` is an indication of what will happen when dragged data is dropped on a particular drop target. These are:

-   `move` – indicates that the dragged data will be moved from its source location to the target location.
-   `copy` – indicates that the dragged data will be copied to the target destination.
-   `link` – indicates that there will be a relationship established between the source and target locations.
-   `cancel` – indicates that the drag and drop operation will be canceled, resulting in no changes made to the source or target.

Many operating systems display these in the form of a cursor change, e.g. a plus sign to indicate a copy operation. The user may also be able to use a modifier key to choose which drop operation to perform, such as Option or Alt to switch from move to copy.

The `onDragEnd` event allows the drag source to respond when a drag that it initiated ends, either because it was dropped or because it was canceled by the user. The `dropOperation` property of the event object indicates the operation that was performed. For example, when data is moved, the UI could be updated to reflect this change by removing the original dragged items.

This example removes the dragged items from the UI when a move operation is completed. It uses the [useListData](https://react-spectrum.adobe.com/react-stately/useListData.html) hook to help manage and update the list of items. Try holding the Option or Alt keys to change the operation to copy, and see how the behavior changes.

```
import {useListData} from 'react-stately';

function Example() {
  let list = useListData({
    initialItems: [
      { id: 'a', textValue: 'Photoshop' },
      { id: 'b', textValue: 'XD' },
      { id: 'c', textValue: 'Dreamweaver' },
      { id: 'd', textValue: 'InDesign' },
      { id: 'e', textValue: 'Connect' }
    ]
  });

  let onDragEnd = (e) => {
    if (e.dropOperation === 'move') {
      list.remove(...e.keys);
    }
  };
  return (
    <>
      <ListBox
        aria-label="Adobe apps"
        items={list.items}
        onDragEnd={onDragEnd}
        selectionMode="multiple"
      >
        {(item) => <Item>{item.textValue}</Item>}
      </ListBox>
      <DropTarget />
    </>
  );
}
```

```
import {useListData} from 'react-stately';

function Example() {
  let list = useListData({
    initialItems: [
      { id: 'a', textValue: 'Photoshop' },
      { id: 'b', textValue: 'XD' },
      { id: 'c', textValue: 'Dreamweaver' },
      { id: 'd', textValue: 'InDesign' },
      { id: 'e', textValue: 'Connect' }
    ]
  });

  let onDragEnd = (e) => {
    if (e.dropOperation === 'move') {
      list.remove(...e.keys);
    }
  };
  return (
    <>
      <ListBox
        aria-label="Adobe apps"
        items={list.items}
        onDragEnd={onDragEnd}
        selectionMode="multiple"
      >
        {(item) => <Item>{item.textValue}</Item>}
      </ListBox>
      <DropTarget />
    </>
  );
}
```

```
import {useListData} from 'react-stately';

function Example() {
  let list = useListData(
    {
      initialItems: [
        {
          id: 'a',
          textValue:
            'Photoshop'
        },
        {
          id: 'b',
          textValue: 'XD'
        },
        {
          id: 'c',
          textValue:
            'Dreamweaver'
        },
        {
          id: 'd',
          textValue:
            'InDesign'
        },
        {
          id: 'e',
          textValue:
            'Connect'
        }
      ]
    }
  );

  let onDragEnd =
    (e) => {
      if (
        e.dropOperation ===
          'move'
      ) {
        list.remove(
          ...e.keys
        );
      }
    };
  return (
    <>
      <ListBox
        aria-label="Adobe apps"
        items={list
          .items}
        onDragEnd={onDragEnd}
        selectionMode="multiple"
      >
        {(item) => (
          <Item>
            {item
              .textValue}
          </Item>
        )}
      </ListBox>
      <DropTarget />
    </>
  );
}
```

The drag source can also control which drop operations are allowed for the data. For example, if moving data is not allowed, and only copying is supported, the `getAllowedDropOperations` function could be implemented to indicate this. When you drag the element below, the cursor now shows the copy affordance by default, and pressing a modifier to switch drop operations results in the drop being canceled.

```
<ListBox
  aria-label="Categories"
  getAllowedDropOperations={() => ['copy']}  selectionMode="multiple"
 >
  <Item>Animals</Item>
  <Item>People</Item>
  <Item>Plants</Item>
</ListBox>
<DropTarget />
```

```
<ListBox
  aria-label="Categories"
  getAllowedDropOperations={() => ['copy']}  selectionMode="multiple"
 >
  <Item>Animals</Item>
  <Item>People</Item>
  <Item>Plants</Item>
</ListBox>
<DropTarget />
```

```
<ListBox
  aria-label="Categories"
  getAllowedDropOperations={() => [
    'copy'
  ]}  selectionMode="multiple"
>
  <Item>Animals</Item>
  <Item>People</Item>
  <Item>Plants</Item>
</ListBox>
<DropTarget />
```

* * *

Drag and drop can be combined in the same collection component to allow reordering items. See [useDroppableCollection](https://react-spectrum.adobe.com/react-aria/useDroppableCollection.html) for more details.

```
import {ListDropTargetDelegate, ListKeyboardDelegate, useDropIndicator, useDroppableCollection} from 'react-aria';

import {useDroppableCollectionState} from 'react-stately';

function ReorderableListBox(props) {
  // ...

  // Setup react-stately and react-aria hooks for dropping.
  let dropState = useDroppableCollectionState({
    ...props,
    collection: state.collection,
    selectionManager: state.selectionManager
  });

  let { collectionProps } = useDroppableCollection(
    {
      ...props,
      // Provide drop targets for keyboard and pointer-based drag and drop.
      keyboardDelegate: new ListKeyboardDelegate(
        state.collection,
        state.disabledKeys,
        ref
      ),
      dropTargetDelegate: new ListDropTargetDelegate(state.collection, ref)
    },
    dropState,
    ref
  );
  return (
    <ul
      {...mergeProps(listBoxProps, collectionProps)}      ref={ref}
    >
      {[...state.collection].map((item) => (
        <ReorderableOption
          key={item.key}
          item={item}
          state={state}
          dragState={dragState}
          dropState={dropState}        />
      ))}
    </ul>
  );
}

function ReorderableOption({ item, state, dragState, dropState }) {
  // ...

  return (
    <>
      <DropIndicator
        target={{ type: 'item', key: item.key, dropPosition: 'before' }}
        dropState={dropState}
      />      <li
        {...mergeProps(optionProps, dragProps, focusProps)}
        ref={ref}
        className={`option ${isFocusVisible ? 'focus-visible' : ''}`}
      >
        {item.rendered}
      </li>
      {state.collection.getKeyAfter(item.key) == null &&
        (
          <DropIndicator
            target={{ type: 'item', key: item.key, dropPosition: 'after' }}
            dropState={dropState}
          />
        )}    </>
  );
}

function DropIndicator(props) {
  let ref = React.useRef(null);
  let { dropIndicatorProps, isHidden, isDropTarget } = useDropIndicator(
    props,
    props.dropState,
    ref
  );
  if (isHidden) {
    return null;
  }

  return (
    <li
      {...dropIndicatorProps}
      role="option"
      ref={ref}
      className={`drop-indicator ${isDropTarget ? 'drop-target' : ''}`}
    />
  );
}
```

```
import {
  ListDropTargetDelegate,
  ListKeyboardDelegate,
  useDropIndicator,
  useDroppableCollection
} from 'react-aria';

import {useDroppableCollectionState} from 'react-stately';

function ReorderableListBox(props) {
  // ...

  // Setup react-stately and react-aria hooks for dropping.
  let dropState = useDroppableCollectionState({
    ...props,
    collection: state.collection,
    selectionManager: state.selectionManager
  });

  let { collectionProps } = useDroppableCollection(
    {
      ...props,
      // Provide drop targets for keyboard and pointer-based drag and drop.
      keyboardDelegate: new ListKeyboardDelegate(
        state.collection,
        state.disabledKeys,
        ref
      ),
      dropTargetDelegate: new ListDropTargetDelegate(
        state.collection,
        ref
      )
    },
    dropState,
    ref
  );
  return (
    <ul
      {...mergeProps(listBoxProps, collectionProps)}      ref={ref}
    >
      {[...state.collection].map((item) => (
        <ReorderableOption
          key={item.key}
          item={item}
          state={state}
          dragState={dragState}
          dropState={dropState}        />
      ))}
    </ul>
  );
}

function ReorderableOption(
  { item, state, dragState, dropState }
) {
  // ...

  return (
    <>
      <DropIndicator
        target={{
          type: 'item',
          key: item.key,
          dropPosition: 'before'
        }}
        dropState={dropState}
      />      <li
        {...mergeProps(optionProps, dragProps, focusProps)}
        ref={ref}
        className={`option ${
          isFocusVisible ? 'focus-visible' : ''
        }`}
      >
        {item.rendered}
      </li>
      {state.collection.getKeyAfter(item.key) == null &&
        (
          <DropIndicator
            target={{
              type: 'item',
              key: item.key,
              dropPosition: 'after'
            }}
            dropState={dropState}
          />
        )}    </>
  );
}

function DropIndicator(props) {
  let ref = React.useRef(null);
  let { dropIndicatorProps, isHidden, isDropTarget } =
    useDropIndicator(props, props.dropState, ref);
  if (isHidden) {
    return null;
  }

  return (
    <li
      {...dropIndicatorProps}
      role="option"
      ref={ref}
      className={`drop-indicator ${
        isDropTarget ? 'drop-target' : ''
      }`}
    />
  );
}
```

```
import {
  ListDropTargetDelegate,
  ListKeyboardDelegate,
  useDropIndicator,
  useDroppableCollection
} from 'react-aria';

import {useDroppableCollectionState} from 'react-stately';

function ReorderableListBox(
  props
) {
  // ...

  // Setup react-stately and react-aria hooks for dropping.
  let dropState =
    useDroppableCollectionState(
      {
        ...props,
        collection:
          state
            .collection,
        selectionManager:
          state
            .selectionManager
      }
    );

  let {
    collectionProps
  } =
    useDroppableCollection(
      {
        ...props,
        // Provide drop targets for keyboard and pointer-based drag and drop.
        keyboardDelegate:
          new ListKeyboardDelegate(
            state
              .collection,
            state
              .disabledKeys,
            ref
          ),
        dropTargetDelegate:
          new ListDropTargetDelegate(
            state
              .collection,
            ref
          )
      },
      dropState,
      ref
    );
  return (
    <ul
      {...mergeProps(
        listBoxProps,
        collectionProps
      )}      ref={ref}
    >
      {[
        ...state
          .collection
      ].map((item) => (
        <ReorderableOption
          key={item.key}
          item={item}
          state={state}
          dragState={dragState}
          dropState={dropState}        />
      ))}
    </ul>
  );
}

function ReorderableOption(
  {
    item,
    state,
    dragState,
    dropState
  }
) {
  // ...

  return (
    <>
      <DropIndicator
        target={{
          type: 'item',
          key: item.key,
          dropPosition:
            'before'
        }}
        dropState={dropState}
      />      <li
        {...mergeProps(
          optionProps,
          dragProps,
          focusProps
        )}
        ref={ref}
        className={`option ${
          isFocusVisible
            ? 'focus-visible'
            : ''
        }`}
      >
        {item.rendered}
      </li>
      {state.collection
            .getKeyAfter(
              item.key
            ) == null &&
        (
          <DropIndicator
            target={{
              type:
                'item',
              key:
                item.key,
              dropPosition:
                'after'
            }}
            dropState={dropState}
          />
        )}    </>
  );
}

function DropIndicator(
  props
) {
  let ref = React.useRef(
    null
  );
  let {
    dropIndicatorProps,
    isHidden,
    isDropTarget
  } = useDropIndicator(
    props,
    props.dropState,
    ref
  );
  if (isHidden) {
    return null;
  }

  return (
    <li
      {...dropIndicatorProps}
      role="option"
      ref={ref}
      className={`drop-indicator ${
        isDropTarget
          ? 'drop-target'
          : ''
      }`}
    />
  );
}
```

Now, we can render an example ListBox, which allows the user to reorder items. The `onReorder` event is triggered when the user drops dragged items which originated within the same collection. As above, [useListData](https://react-spectrum.adobe.com/react-stately/useListData.html) is used to manage the list items in this example, but it is not a requirement.

```
import {useListData} from 'react-stately';

function Example() {
  let list = useListData({
    initialItems: [
      { id: 1, name: 'Cat' },
      { id: 2, name: 'Dog' },
      { id: 3, name: 'Kangaroo' },
      { id: 4, name: 'Panda' },
      { id: 5, name: 'Snake' }
    ]
  });

  let onReorder = (e) => {
    if (e.target.dropPosition === 'before') {
      list.moveBefore(e.target.key, e.keys);
    } else if (e.target.dropPosition === 'after') {
      list.moveAfter(e.target.key, e.keys);
    }
  };

  return (
    <ReorderableListBox
      aria-label="Favorite animals"
      selectionMode="multiple"
      selectionBehavior="replace"
      items={list.items}
      onReorder={onReorder}    >
      {(item) => <Item>{item.name}</Item>}
    </ReorderableListBox>
  );
}
```

```
import {useListData} from 'react-stately';

function Example() {
  let list = useListData({
    initialItems: [
      { id: 1, name: 'Cat' },
      { id: 2, name: 'Dog' },
      { id: 3, name: 'Kangaroo' },
      { id: 4, name: 'Panda' },
      { id: 5, name: 'Snake' }
    ]
  });

  let onReorder = (e) => {
    if (e.target.dropPosition === 'before') {
      list.moveBefore(e.target.key, e.keys);
    } else if (e.target.dropPosition === 'after') {
      list.moveAfter(e.target.key, e.keys);
    }
  };

  return (
    <ReorderableListBox
      aria-label="Favorite animals"
      selectionMode="multiple"
      selectionBehavior="replace"
      items={list.items}
      onReorder={onReorder}    >
      {(item) => <Item>{item.name}</Item>}
    </ReorderableListBox>
  );
}
```

```
import {useListData} from 'react-stately';

function Example() {
  let list = useListData(
    {
      initialItems: [
        {
          id: 1,
          name: 'Cat'
        },
        {
          id: 2,
          name: 'Dog'
        },
        {
          id: 3,
          name:
            'Kangaroo'
        },
        {
          id: 4,
          name: 'Panda'
        },
        {
          id: 5,
          name: 'Snake'
        }
      ]
    }
  );

  let onReorder =
    (e) => {
      if (
        e.target
          .dropPosition ===
          'before'
      ) {
        list.moveBefore(
          e.target.key,
          e.keys
        );
      } else if (
        e.target
          .dropPosition ===
          'after'
      ) {
        list.moveAfter(
          e.target.key,
          e.keys
        );
      }
    };

  return (
    <ReorderableListBox
      aria-label="Favorite animals"
      selectionMode="multiple"
      selectionBehavior="replace"
      items={list.items}
      onReorder={onReorder}    >
      {(item) => (
        <Item>
          {item.name}
        </Item>
      )}
    </ReorderableListBox>
  );
}
```

Show CSS

```
.drop-indicator {
  width: 100%;
  margin-left: 0;
  height: 2px;
  margin-bottom: -2px;
  outline: none;
  background: transparent;
}

.drop-indicator:last-child {
  margin-bottom: 0;
  margin-top: -2px;
}

.drop-indicator.drop-target {
  background: var(--blue);
}
```

```
.drop-indicator {
  width: 100%;
  margin-left: 0;
  height: 2px;
  margin-bottom: -2px;
  outline: none;
  background: transparent;
}

.drop-indicator:last-child {
  margin-bottom: 0;
  margin-top: -2px;
}

.drop-indicator.drop-target {
  background: var(--blue);
}
```

```
.drop-indicator {
  width: 100%;
  margin-left: 0;
  height: 2px;
  margin-bottom: -2px;
  outline: none;
  background: transparent;
}

.drop-indicator:last-child {
  margin-bottom: 0;
  margin-top: -2px;
}

.drop-indicator.drop-target {
  background: var(--blue);
}
```

* * *

The full list of props supported by draggable collections is available below.

Name

Type

Description

`getItems`

`( (keys: [Set](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Set)<[Key](https://reactjs.org/docs/lists-and-keys.html)>, , items: T[] )) => [DragItem](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dnd.d.ts:DragItem)[]`

A function that returns the items being dragged.

`onDragStart`

`( (e: [DraggableCollectionStartEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dnd.d.ts:DraggableCollectionStartEvent) )) => void`

Handler that is called when a drag operation is started.

`onDragMove`

`( (e: [DraggableCollectionMoveEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dnd.d.ts:DraggableCollectionMoveEvent) )) => void`

Handler that is called when the drag is moved.

`onDragEnd`

`( (e: [DraggableCollectionEndEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dnd.d.ts:DraggableCollectionEndEvent) )) => void`

Handler that is called when the drag operation is ended, either as a result of a drop or a cancellation.

`preview`

`RefObject<[DragPreviewRenderer](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dnd.d.ts:DragPreviewRenderer) | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)>`

The ref of the element that will be rendered as the drag preview while dragging.

`getAllowedDropOperations`

`() => [DropOperation](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dnd.d.ts:DropOperation)[]`

Function that returns the drop operations that are allowed for the dragged items. If not provided, all drop operations are allowed.