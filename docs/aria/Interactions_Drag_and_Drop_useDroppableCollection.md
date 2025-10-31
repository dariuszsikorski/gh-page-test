# useDroppableCollection

**Source**: [https://react-spectrum.adobe.com/react-aria/useDroppableCollection.html](https://react-spectrum.adobe.com/react-aria/useDroppableCollection.html)

> Documentation for useDroppableCollection in the React Aria package.

---

Handles drop interactions for a collection component, with support for traditional mouse and touch based drag and drop, in addition to full parity for keyboard and screen reader users.

* * *

`useDroppableCollectionState( (props: [DroppableCollectionStateOptions](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/dnd/src/useDroppableCollectionState.ts:DroppableCollectionStateOptions) )): [DroppableCollectionState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/dnd/src/useDroppableCollectionState.ts:DroppableCollectionState)` `useDroppableCollection( props: [DroppableCollectionOptions](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/dnd/src/useDroppableCollection.ts:DroppableCollectionOptions), state: [DroppableCollectionState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/dnd/src/useDroppableCollectionState.ts:DroppableCollectionState), ref: [RefObject](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/refs.d.ts:RefObject)<[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element) |  | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)> ): [DroppableCollectionResult](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/dnd/src/useDroppableCollection.ts:DroppableCollectionResult)` `useDroppableItem( options: [DroppableItemOptions](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/dnd/src/useDroppableItem.ts:DroppableItemOptions), state: [DroppableCollectionState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/dnd/src/useDroppableCollectionState.ts:DroppableCollectionState), ref: [RefObject](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/refs.d.ts:RefObject)<[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element) |  | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)> ): [DroppableItemResult](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/dnd/src/useDroppableItem.ts:DroppableItemResult)` `useDropIndicator( props: [DropIndicatorProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/dnd/src/useDropIndicator.ts:DropIndicatorProps), state: [DroppableCollectionState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/dnd/src/useDroppableCollectionState.ts:DroppableCollectionState), ref: [RefObject](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/refs.d.ts:RefObject)<[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element) |  | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)> ): [DropIndicatorAria](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/dnd/src/useDropIndicator.ts:DropIndicatorAria)`

* * *

Collection components built with hooks such as [useListBox](https://react-spectrum.adobe.com/react-aria/useListBox.html), [useTable](https://react-spectrum.adobe.com/react-aria/useTable.html), and [useGridList](https://react-spectrum.adobe.com/react-aria/useGridList.html) can support drag and drop interactions. Users can drop data on the collection as a whole, on individual items, insert new items between existing ones, or reorder items.

React Aria supports traditional mouse and touch based drag and drop, but also implements keyboard and screen reader friendly interactions. Users can press Enter on a draggable element to enter drag and drop mode. Then, they can press Tab to navigate between drop targets. A droppable collection is treated as a single drop target, so that users can easily tab past it to get to the next drop target. Within a droppable collection, keys such as ArrowDown and ArrowUp can be used to select a _drop position_, such as on an item, or between items. These are represented using `[DropTarget](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dnd.d.ts:DropTarget)` objects.

The keyboard interactions used within a collection may differ depending on the type or layout. For example, in a grid the ArrowLeft and ArrowRight may also be used, whereas they may not within a list. In general, the keyboard interactions used during drag and drop match those used when navigating the collection normally.

See the [drag and drop introduction](https://react-spectrum.adobe.com/react-aria/dnd.html) to learn more.

The `[useDroppableCollection](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/dnd/src/useDroppableCollection.ts:useDroppableCollection)` hook implements drop interactions within any [collection component](https://react-spectrum.adobe.com/react-stately/collections.html), using state managed by `[useDroppableCollectionState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/dnd/src/useDroppableCollectionState.ts:useDroppableCollectionState)`. The props it returns should be combined with those from the collection component you're using, such as `useListBox`. The `[useDroppableItem](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/dnd/src/useDroppableItem.ts:useDroppableItem)` hook should be added to each individual item within the collection, combining props from the relevant hook (e.g. `useOption`).

To support dropping between items, the `[useDropIndicator](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/dnd/src/useDropIndicator.ts:useDropIndicator)` hook can be used to add additional elements between each item, for example, rendering a line when a user drags between two items. These elements must be implemented according to the relevant ARIA pattern. For example, within a listbox, drop indicators must be implemented using `role="option"`, and within a grid, they must use `role="row"` and `role="gridcell"` to ensure the accessibility tree is valid.

Interactions like keyboard navigation, and drop target positioning may differ depending on the component and layout of items. These are implemented using the `[KeyboardDelegate](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/collections.d.ts:KeyboardDelegate)` and `[DropTargetDelegate](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dnd.d.ts:DropTargetDelegate)` interfaces, provided to `useDroppableCollection`. In most cases, you can use a default implementation provided by React Aria such as `[ListKeyboardDelegate](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/selection/src/ListKeyboardDelegate.ts:ListKeyboardDelegate)` and `[ListDropTargetDelegate](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/dnd/src/ListDropTargetDelegate.ts:ListDropTargetDelegate)`, but you may also provide your own if you need to customize the behavior.

* * *

This example renders a ListBox using the [useListBox](https://react-spectrum.adobe.com/react-aria/useListBox.html) hook, and adds support for dropping data onto items. The highlighted code sections below show the main additions for drag and drop compared with a normal listbox.

```
import {Item, useDroppableCollectionState, useListState} from 'react-stately';

import {ListDropTargetDelegate, ListKeyboardDelegate, mergeProps, useDroppableCollection, useDroppableItem, useFocusRing, useListBox, useOption} from 'react-aria';

function ListBox(props) {
  // Setup listbox as normal. See the useListBox docs for more details.
  let state = useListState(props);
  let ref = React.useRef(null);
  let { listBoxProps } = useListBox(props, state, ref);

  // Setup react-stately and react-aria hooks for drag and drop.
  let dropState = useDroppableCollectionState({
    ...props,
    // Collection and selection manager come from list state.
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
  // Merge listbox props and dnd props, and render the items as normal.
  return (
    <ul {...mergeProps(listBoxProps, collectionProps)} ref={ref}>      {[...state.collection].map((item) => (
        <Option
          key={item.key}
          item={item}
          state={state}
          dropState={dropState}
        />
      ))}
    </ul>
  );
}

function Option({ item, state, dropState }) {
  // Setup listbox option as normal. See useListBox docs for details.
  let ref = React.useRef(null);
  let { optionProps } = useOption({ key: item.key }, state, ref);
  let { isFocusVisible, focusProps } = useFocusRing();

  // Register the item as a drop target.
  let { dropProps, isDropTarget } = useDroppableItem(
    {
      target: { type: 'item', key: item.key, dropPosition: 'on' }
    },
    dropState,
    ref
  );
  // Merge option props and dnd props, and render the item.
  return (
    <li
      {...mergeProps(optionProps, dropProps, focusProps)}      ref={ref}
      // Apply a class when the item is the active drop target.
      className={`option ${isFocusVisible ? 'focus-visible' : ''} ${
        isDropTarget ? 'drop-target' : ''
      }`}    >
      {item.rendered}
    </li>
  );
}

<Draggable>Octopus</Draggable>
<ListBox
  aria-label="Categories"
  selectionMode="single"
  onItemDrop={(e) => alert(`Dropped on ${e.target.key}`)}
>
  <Item key="animals">Animals</Item>
  <Item key="people">People</Item>
  <Item key="plants">Plants</Item>
</ListBox>
```

```
import {
  Item,
  useDroppableCollectionState,
  useListState
} from 'react-stately';

import {
  ListDropTargetDelegate,
  ListKeyboardDelegate,
  mergeProps,
  useDroppableCollection,
  useDroppableItem,
  useFocusRing,
  useListBox,
  useOption
} from 'react-aria';

function ListBox(props) {
  // Setup listbox as normal. See the useListBox docs for more details.
  let state = useListState(props);
  let ref = React.useRef(null);
  let { listBoxProps } = useListBox(props, state, ref);

  // Setup react-stately and react-aria hooks for drag and drop.
  let dropState = useDroppableCollectionState({
    ...props,
    // Collection and selection manager come from list state.
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
  // Merge listbox props and dnd props, and render the items as normal.
  return (
    <ul
      {...mergeProps(listBoxProps, collectionProps)}
      ref={ref}
    >      {[...state.collection].map((item) => (
        <Option
          key={item.key}
          item={item}
          state={state}
          dropState={dropState}
        />
      ))}
    </ul>
  );
}

function Option({ item, state, dropState }) {
  // Setup listbox option as normal. See useListBox docs for details.
  let ref = React.useRef(null);
  let { optionProps } = useOption(
    { key: item.key },
    state,
    ref
  );
  let { isFocusVisible, focusProps } = useFocusRing();

  // Register the item as a drop target.
  let { dropProps, isDropTarget } = useDroppableItem(
    {
      target: {
        type: 'item',
        key: item.key,
        dropPosition: 'on'
      }
    },
    dropState,
    ref
  );
  // Merge option props and dnd props, and render the item.
  return (
    <li
      {...mergeProps(optionProps, dropProps, focusProps)}      ref={ref}
      // Apply a class when the item is the active drop target.
      className={`option ${
        isFocusVisible ? 'focus-visible' : ''
      } ${isDropTarget ? 'drop-target' : ''}`}    >
      {item.rendered}
    </li>
  );
}

<Draggable>Octopus</Draggable>
<ListBox
  aria-label="Categories"
  selectionMode="single"
  onItemDrop={(e) => alert(`Dropped on ${e.target.key}`)}
>
  <Item key="animals">Animals</Item>
  <Item key="people">People</Item>
  <Item key="plants">Plants</Item>
</ListBox>
```

```
import {
  Item,
  useDroppableCollectionState,
  useListState
} from 'react-stately';

import {
  ListDropTargetDelegate,
  ListKeyboardDelegate,
  mergeProps,
  useDroppableCollection,
  useDroppableItem,
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
      props,
      state,
      ref
    );

  // Setup react-stately and react-aria hooks for drag and drop.
  let dropState =
    useDroppableCollectionState(
      {
        ...props,
        // Collection and selection manager come from list state.
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
  // Merge listbox props and dnd props, and render the items as normal.
  return (
    <ul
      {...mergeProps(
        listBoxProps,
        collectionProps
      )}
      ref={ref}
    >      {[
        ...state
          .collection
      ].map((item) => (
        <Option
          key={item.key}
          item={item}
          state={state}
          dropState={dropState}
        />
      ))}
    </ul>
  );
}

function Option(
  {
    item,
    state,
    dropState
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

  // Register the item as a drop target.
  let {
    dropProps,
    isDropTarget
  } = useDroppableItem(
    {
      target: {
        type: 'item',
        key: item.key,
        dropPosition:
          'on'
      }
    },
    dropState,
    ref
  );
  // Merge option props and dnd props, and render the item.
  return (
    <li
      {...mergeProps(
        optionProps,
        dropProps,
        focusProps
      )}      ref={ref}
      // Apply a class when the item is the active drop target.
      className={`option ${
        isFocusVisible
          ? 'focus-visible'
          : ''
      } ${
        isDropTarget
          ? 'drop-target'
          : ''
      }`}    >
      {item.rendered}
    </li>
  );
}

<Draggable>
  Octopus
</Draggable>
<ListBox
  aria-label="Categories"
  selectionMode="single"
  onItemDrop={(e) =>
    alert(
      `Dropped on ${e.target.key}`
    )}
>
  <Item key="animals">
    Animals
  </Item>
  <Item key="people">
    People
  </Item>
  <Item key="plants">
    Plants
  </Item>
</ListBox>
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

[role=listbox]:empty {
  box-sizing: border-box;
  border: 1px dashed gray;
  box-shadow: none;
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

[role=listbox]:empty {
  box-sizing: border-box;
  border: 1px dashed gray;
  box-shadow: none;
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

[role=listbox]:empty {
  box-sizing: border-box;
  border: 1px dashed gray;
  box-shadow: none;
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

The `Draggable` component used above is defined below. See [useDrag](https://react-spectrum.adobe.com/react-aria/useDrag.html) for more details and documentation.

Show code

```
import {mergeProps, useButton, useDrag} from 'react-aria';

function Draggable({ children }) {
  let { dragProps, dragButtonProps, isDragging } = useDrag({
    getAllowedDropOperations: () => ['copy'],
    getItems() {
      return [{
        'text/plain': children,
        'my-app-custom-type': JSON.stringify({ message: children })
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
      {...mergeProps(dragProps, buttonProps)}
      ref={ref}
      className={`draggable ${isDragging ? 'dragging' : ''}`}
    >
      <span aria-hidden="true">≡</span> {children}
    </div>
  );
}
```

```
import {mergeProps, useButton, useDrag} from 'react-aria';

function Draggable({ children }) {
  let { dragProps, dragButtonProps, isDragging } = useDrag({
    getAllowedDropOperations: () => ['copy'],
    getItems() {
      return [{
        'text/plain': children,
        'my-app-custom-type': JSON.stringify({
          message: children
        })
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
      {...mergeProps(dragProps, buttonProps)}
      ref={ref}
      className={`draggable ${
        isDragging ? 'dragging' : ''
      }`}
    >
      <span aria-hidden="true">≡</span> {children}
    </div>
  );
}
```

```
import {
  mergeProps,
  useButton,
  useDrag
} from 'react-aria';

function Draggable(
  { children }
) {
  let {
    dragProps,
    dragButtonProps,
    isDragging
  } = useDrag({
    getAllowedDropOperations:
      () => ['copy'],
    getItems() {
      return [{
        'text/plain':
          children,
        'my-app-custom-type':
          JSON.stringify(
            {
              message:
                children
            }
          )
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
      {...mergeProps(
        dragProps,
        buttonProps
      )}
      ref={ref}
      className={`draggable ${
        isDragging
          ? 'dragging'
          : ''
      }`}
    >
      <span aria-hidden="true">
        ≡
      </span>{' '}
      {children}
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
  padding: 5px 10px;
  margin-right: 20px;
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
  padding: 5px 10px;
  margin-right: 20px;
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
  padding: 5px 10px;
  margin-right: 20px;
}

.draggable.dragging {
  opacity: 0.5;
}
```

* * *

To add support for dropping between items, first implement the `DropIndicator` component using the `[useDropIndicator](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/dnd/src/useDropIndicator.ts:useDropIndicator)` hook. This will render a line between items indicating the insertion position. Within a listbox, these must have `role=option`, and since our listbox is rendered as a `<ul>`, they must also be `<li>` elements to ensure the accessibility and HTML semantics are correct.

`useDropIndicator` returns `isHidden` when the drop indicator is not needed (e.g. if there is no drag session in progress), in which case we can return null to prevent any extra elements from being rendered to the DOM. When `isDropTarget` is true, the drop indicator is active and should be visible. Note that for accessibility, an element must always be rendered while a drag session is in progress, even when the drop indicator is not currently active, so that screen readers can navigate to it.

```
import {useDropIndicator} from 'react-aria';

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
import {useDropIndicator} from 'react-aria';

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
import {useDropIndicator} from 'react-aria';

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

Now that the `DropIndicator` component is implemented, we can render an instance between each item in the list. This uses the `before` drop position by default, except for after the last item in the list.

```
function Option({ item, state, dropState }) {
  // ...

  return (
    <>
      <DropIndicator
        target={{ type: 'item', key: item.key, dropPosition: 'before' }}
        dropState={dropState}
      />      <li
        {...mergeProps(optionProps, dropProps, focusProps)}
        ref={ref}
        className={`option ${isFocusVisible ? 'focus-visible' : ''} ${
          isDropTarget ? 'drop-target' : ''
        }`}
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
```

```
function Option({ item, state, dropState }) {
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
        {...mergeProps(optionProps, dropProps, focusProps)}
        ref={ref}
        className={`option ${
          isFocusVisible ? 'focus-visible' : ''
        } ${isDropTarget ? 'drop-target' : ''}`}
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
```

```
function Option(
  {
    item,
    state,
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
          dropProps,
          focusProps
        )}
        ref={ref}
        className={`option ${
          isFocusVisible
            ? 'focus-visible'
            : ''
        } ${
          isDropTarget
            ? 'drop-target'
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
```

Now, we can render an example ListBox, which inserts a new item on drop. This uses the [useListData](https://react-spectrum.adobe.com/react-stately/useListData.html) hook to manage the list of items, which is updated in the `onInsert` event. Note that `useListData` is a convenience hook, not a requirement. You can manage your state however you wish.

```
import {useListData} from 'react-stately';

function Example() {
  let list = useListData({
    initialItems: [
      { id: 1, name: 'Cat' },
      { id: 2, name: 'Dog' },
      { id: 3, name: 'Kangaroo' }
    ]
  });

  let onInsert = async (e) => {
    let name = await e.items[0].getText('text/plain');
    let item = { id: list.items.length + 1, name };
    if (e.target.dropPosition === 'before') {
      list.insertBefore(e.target.key, item);
    } else if (e.target.dropPosition === 'after') {
      list.insertAfter(e.target.key, item);
    }
  };

  return (
    <>
      <Draggable>Octopus</Draggable>
      <ListBox
        aria-label="Favorite animals"
        selectionMode="single"
        items={list.items}
        acceptedDragTypes={['text/plain']}
        onInsert={onInsert}      >
        {(item) => <Item>{item.name}</Item>}
      </ListBox>
    </>
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
      { id: 3, name: 'Kangaroo' }
    ]
  });

  let onInsert = async (e) => {
    let name = await e.items[0].getText('text/plain');
    let item = { id: list.items.length + 1, name };
    if (e.target.dropPosition === 'before') {
      list.insertBefore(e.target.key, item);
    } else if (e.target.dropPosition === 'after') {
      list.insertAfter(e.target.key, item);
    }
  };

  return (
    <>
      <Draggable>Octopus</Draggable>
      <ListBox
        aria-label="Favorite animals"
        selectionMode="single"
        items={list.items}
        acceptedDragTypes={['text/plain']}
        onInsert={onInsert}      >
        {(item) => <Item>{item.name}</Item>}
      </ListBox>
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
        }
      ]
    }
  );

  let onInsert =
    async (e) => {
      let name = await e
        .items[0]
        .getText(
          'text/plain'
        );
      let item = {
        id:
          list.items
            .length + 1,
        name
      };
      if (
        e.target
          .dropPosition ===
          'before'
      ) {
        list
          .insertBefore(
            e.target.key,
            item
          );
      } else if (
        e.target
          .dropPosition ===
          'after'
      ) {
        list.insertAfter(
          e.target.key,
          item
        );
      }
    };

  return (
    <>
      <Draggable>
        Octopus
      </Draggable>
      <ListBox
        aria-label="Favorite animals"
        selectionMode="single"
        items={list
          .items}
        acceptedDragTypes={[
          'text/plain'
        ]}
        onInsert={onInsert}      >
        {(item) => (
          <Item>
            {item.name}
          </Item>
        )}
      </ListBox>
    </>
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

To add support for dropping on the collection as a whole, an additional `DropIndicator` can be rendered at the start of the list, representing the `root` target. The `isDropTarget` method of the state object can be used to apply a class to the list when the root target is active.

The `onRootDrop` event is triggered when the user drops on the collection. This example also accepts drops on the "Documents" item, by implementing `onItemDrop` as well as `shouldAcceptItemDrop` to limit which items allow drops.

```
function ListBox(props) {
  // ...

  let isDropTarget = dropState.isDropTarget({type: 'root'});
  return (
    <ul
      {...mergeProps(listBoxProps, collectionProps)}
      ref={ref}
      className={isDropTarget ? 'drop-target' : ''}    >
      <DropIndicator target={{type: 'root'}} dropState={dropState} />      {[...state.collection].map((item) => (
        <Option
          key={item.key}
          item={item}
          state={state}
          dropState={dropState}
        />
      ))}
    </ul>
  );
}

<Draggable>budget.xls</Draggable>
<ListBox
  aria-label="Files"
  selectionMode="single"
  onRootDrop={() => alert('Dropped on root')}
  onItemDrop={e => alert(`Dropped on ${e.target.key}`)}
  shouldAcceptItemDrop={target => target.key === 'documents'}>
  <Item key="documents">Documents</Item>
  <Item>proposal.doc</Item>
  <Item>presentation.ppt</Item>
</ListBox>
```

```
function ListBox(props) {
  // ...

  let isDropTarget = dropState.isDropTarget({
    type: 'root'
  });
  return (
    <ul
      {...mergeProps(listBoxProps, collectionProps)}
      ref={ref}
      className={isDropTarget ? 'drop-target' : ''}    >
      <DropIndicator
        target={{ type: 'root' }}
        dropState={dropState}
      />      {[...state.collection].map((item) => (
        <Option
          key={item.key}
          item={item}
          state={state}
          dropState={dropState}
        />
      ))}
    </ul>
  );
}

<Draggable>budget.xls</Draggable>
<ListBox
  aria-label="Files"
  selectionMode="single"
  onRootDrop={() => alert('Dropped on root')}
  onItemDrop={(e) => alert(`Dropped on ${e.target.key}`)}
  shouldAcceptItemDrop={(target) =>
    target.key === 'documents'}>
  <Item key="documents">Documents</Item>
  <Item>proposal.doc</Item>
  <Item>presentation.ppt</Item>
</ListBox>
```

```
function ListBox(props) {
  // ...

  let isDropTarget =
    dropState
      .isDropTarget({
        type: 'root'
      });
  return (
    <ul
      {...mergeProps(
        listBoxProps,
        collectionProps
      )}
      ref={ref}
      className={isDropTarget
        ? 'drop-target'
        : ''}    >
      <DropIndicator
        target={{
          type: 'root'
        }}
        dropState={dropState}
      />      {[
        ...state
          .collection
      ].map((item) => (
        <Option
          key={item.key}
          item={item}
          state={state}
          dropState={dropState}
        />
      ))}
    </ul>
  );
}

<Draggable>
  budget.xls
</Draggable>
<ListBox
  aria-label="Files"
  selectionMode="single"
  onRootDrop={() =>
    alert(
      'Dropped on root'
    )}
  onItemDrop={(e) =>
    alert(
      `Dropped on ${e.target.key}`
    )}
  shouldAcceptItemDrop={(target) =>
    target.key ===
      'documents'}>
  <Item key="documents">
    Documents
  </Item>
  <Item>
    proposal.doc
  </Item>
  <Item>
    presentation.ppt
  </Item>
</ListBox>
```

Show CSS

```
[role=listbox].drop-target {
  box-shadow: inset 0 0 0 2px var(--blue);
}
```

```
[role=listbox].drop-target {
  box-shadow: inset 0 0 0 2px var(--blue);
}
```

```
[role=listbox].drop-target {
  box-shadow: inset 0 0 0 2px var(--blue);
}
```

* * *

Drag and drop can be combined in the same collection component to allow reordering items. This example builds on the [dropping between items](#dropping-between-items) example above to add support for dragging items as well. This is done using the `useDraggableCollection` and `useDraggableItem` hooks. See the [docs](https://react-spectrum.adobe.com/react-aria/useDraggableCollection.html) for more details on these hooks.

```
import {useDraggableCollection, useDraggableItem} from 'react-aria';
import {useDraggableCollectionState} from 'react-stately';

function ReorderableListBox(props) {
  // See useListBox docs for more details.
  let state = useListState(props);
  let ref = React.useRef(null);
  let { listBoxProps } = useListBox(
    {
      ...props,
      shouldSelectOnPressUp: true    },
    state,
    ref
  );

  let dropState = useDroppableCollectionState({
    ...props,
    collection: state.collection,
    selectionManager: state.selectionManager
  });

  let { collectionProps } = useDroppableCollection(
    {
      ...props,
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

  // Setup drag state for the collection.
  let dragState = useDraggableCollectionState({
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
    <ul
      {...mergeProps(listBoxProps, collectionProps)}
      ref={ref}
    >
      {[...state.collection].map((item) => (
        <ReorderableOption
          key={item.key}
          item={item}
          state={state}
          dragState={dragState}
          dropState={dropState}
        />
      ))}
    </ul>
  );
}

function ReorderableOption({ item, state, dragState, dropState }) {
  // ...

  // Register the item as a drag source.
  let { dragProps } = useDraggableItem({
    key: item.key
  }, dragState);
  return (
    <>
      <DropIndicator
        target={{ type: 'item', key: item.key, dropPosition: 'before' }}
        dropState={dropState}
      />
      <li
        ...mergeProps(optionProps, dragProps, dropProps, focusProps)}        ref={ref}
        className={`option ${isFocusVisible ? 'focus-visible' : ''} ${
          isDropTarget ? 'drop-target' : ''
        }`}
      >
        {item.rendered}
      </li>
      {state.collection.getKeyAfter(item.key) == null &&
        (
          <DropIndicator
            target={{ type: 'item', key: item.key, dropPosition: 'after' }}
            dropState={dropState}
          />
        )}
    </>
  );
}
```

```
import {
  useDraggableCollection,
  useDraggableItem
} from 'react-aria';
import {useDraggableCollectionState} from 'react-stately';

function ReorderableListBox(props) {
  // See useListBox docs for more details.
  let state = useListState(props);
  let ref = React.useRef(null);
  let { listBoxProps } = useListBox(
    {
      ...props,
      shouldSelectOnPressUp: true    },
    state,
    ref
  );

  let dropState = useDroppableCollectionState({
    ...props,
    collection: state.collection,
    selectionManager: state.selectionManager
  });

  let { collectionProps } = useDroppableCollection(
    {
      ...props,
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

  // Setup drag state for the collection.
  let dragState = useDraggableCollectionState({
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
    <ul
      {...mergeProps(listBoxProps, collectionProps)}
      ref={ref}
    >
      {[...state.collection].map((item) => (
        <ReorderableOption
          key={item.key}
          item={item}
          state={state}
          dragState={dragState}
          dropState={dropState}
        />
      ))}
    </ul>
  );
}

function ReorderableOption(
  { item, state, dragState, dropState }
) {
  // ...

  // Register the item as a drag source.
  let { dragProps } = useDraggableItem({
    key: item.key
  }, dragState);
  return (
    <>
      <DropIndicator
        target={{
          type: 'item',
          key: item.key,
          dropPosition: 'before'
        }}
        dropState={dropState}
      />
      <li
        ...mergeProps(
          optionProps,
          dragProps,
          dropProps,
          focusProps
        )}        ref={ref}
        className={`option ${
          isFocusVisible ? 'focus-visible' : ''
        } ${isDropTarget ? 'drop-target' : ''}`}
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
        )}
    </>
  );
}
```

```
import {
  useDraggableCollection,
  useDraggableItem
} from 'react-aria';
import {useDraggableCollectionState} from 'react-stately';

function ReorderableListBox(
  props
) {
  // See useListBox docs for more details.
  let state =
    useListState(props);
  let ref = React.useRef(
    null
  );
  let { listBoxProps } =
    useListBox(
      {
        ...props,
        shouldSelectOnPressUp:
          true      },
      state,
      ref
    );

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

  // Setup drag state for the collection.
  let dragState =
    useDraggableCollectionState(
      {
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
      {...mergeProps(
        listBoxProps,
        collectionProps
      )}
      ref={ref}
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
          dropState={dropState}
        />
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

  // Register the item as a drag source.
  let { dragProps } =
    useDraggableItem({
      key: item.key
    }, dragState);
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
      />
      <li
        ...mergeProps(
          optionProps,
          dragProps,
          dropProps,
          focusProps
        )}        ref={ref}
        className={`option ${
          isFocusVisible
            ? 'focus-visible'
            : ''
        } ${
          isDropTarget
            ? 'drop-target'
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
        )}
    </>
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

* * *

`useDroppableCollection` allows users to drop one or more **drag items**, each of which contains data to be transferred from the drag source to drop target. There are three kinds of drag items:

-   `text` – represents data inline as a string in one or more formats
-   `file` – references a file on the user's device
-   `directory` – references the contents of a directory

A `[TextDropItem](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dnd.d.ts:TextDropItem)` represents textual data in one or more different formats. These may be either standard [mime types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types) or custom app-specific formats. Representing data in multiple formats allows drop targets both within and outside an application to choose data in a format that they understand. For example, a complex object may be serialized in a custom format for use within an application, with fallbacks in plain text and/or rich HTML that can be used when a user drops data from an external application.

The example below uses the `acceptedDragTypes` prop to accept items that include a custom app-specific type, which is retrieved using the item's `getText` method. The same draggable component as used in the above example is used here, but rather than displaying the plain text representation, the custom format is used instead. When `acceptedDragTypes` is specified, the dropped items are filtered to include only items that include the accepted types.

```
function Example() {
  let list = useListData({
    initialItems: [
      {id: 1, name: 'Cat'},
      {id: 2, name: 'Dog'},
      {id: 3, name: 'Kangaroo'}
    ]
  });

  let onInsert = async e => {
    let value = JSON.parse(await e.items[0].getText('my-app-custom-type'));
    let item = {id: list.items.length + 1, name: value.message};
    if (e.target.dropPosition === 'before') {
      list.insertBefore(e.target.key, item);
    } else if (e.target.dropPosition === 'after') {
      list.insertAfter(e.target.key, item);
    }
  };

  return (
    <>
      <Draggable>Octopus</Draggable>
      <ListBox
        aria-label="Favorite animals"
        selectionMode="single"
        items={list.items}
        acceptedDragTypes={['my-app-custom-type']}        onInsert={onInsert}>
        {item => <Item>{item.name}</Item>}
      </ListBox>
    </>
  );
}
```

```
function Example() {
  let list = useListData({
    initialItems: [
      { id: 1, name: 'Cat' },
      { id: 2, name: 'Dog' },
      { id: 3, name: 'Kangaroo' }
    ]
  });

  let onInsert = async (e) => {
    let value = JSON.parse(
      await e.items[0].getText('my-app-custom-type')
    );
    let item = {
      id: list.items.length + 1,
      name: value.message
    };
    if (e.target.dropPosition === 'before') {
      list.insertBefore(e.target.key, item);
    } else if (e.target.dropPosition === 'after') {
      list.insertAfter(e.target.key, item);
    }
  };

  return (
    <>
      <Draggable>Octopus</Draggable>
      <ListBox
        aria-label="Favorite animals"
        selectionMode="single"
        items={list.items}
        acceptedDragTypes={['my-app-custom-type']}        onInsert={onInsert}
      >
        {(item) => <Item>{item.name}</Item>}
      </ListBox>
    </>
  );
}
```

```
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
        }
      ]
    }
  );

  let onInsert =
    async (e) => {
      let value = JSON
        .parse(
          await e
            .items[0]
            .getText(
              'my-app-custom-type'
            )
        );
      let item = {
        id:
          list.items
            .length + 1,
        name:
          value.message
      };
      if (
        e.target
          .dropPosition ===
          'before'
      ) {
        list
          .insertBefore(
            e.target.key,
            item
          );
      } else if (
        e.target
          .dropPosition ===
          'after'
      ) {
        list.insertAfter(
          e.target.key,
          item
        );
      }
    };

  return (
    <>
      <Draggable>
        Octopus
      </Draggable>
      <ListBox
        aria-label="Favorite animals"
        selectionMode="single"
        items={list
          .items}
        acceptedDragTypes={[
          'my-app-custom-type'
        ]}        onInsert={onInsert}
      >
        {(item) => (
          <Item>
            {item.name}
          </Item>
        )}
      </ListBox>
    </>
  );
}
```

A `[FileDropItem](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dnd.d.ts:FileDropItem)` references a file on the user's device. It includes the name and mime type of the file, and methods to read the contents as plain text, or retrieve a native [File](https://developer.mozilla.org/en-US/docs/Web/API/File) object which can be attached to form data for uploading.

This example accepts JPEG and PNG image files, and renders them by creating a local [object URL](https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL). When the list is empty, you can drop on the whole collection, and otherwise items can be inserted.

```
function Example() {
  let list = useListData({});
  let getItems = e => {
    return Promise.all(
      e.items.map(async item => ({
        id: Math.random(),
        url: URL.createObjectURL(await item.getFile()),
        name: item.name
      }))
    );  };

  let onRootDrop = async e => {
    list.prepend(...await getItems(e));
  };

  let onInsert = async e => {
    if (e.target.dropPosition === 'before') {
      list.insertBefore(e.target.key, ...await getItems(e));
    } else if (e.target.dropPosition === 'after') {
      list.insertAfter(e.target.key, ...await getItems(e));
    }
  };

  return (
    <ListBox
      aria-label="Images"
      items={list.items}
      acceptedDragTypes={['image/jpeg', 'image/png']}      onRootDrop={onRootDrop}
      onInsert={onInsert}>
      {item => (
        <Item textValue={item.name}>
          <div className="image-item">
            <img src={item.url} />
            <span>{item.name}</span>
          </div>
        </Item>
      )}
    </ListBox>
  );
}
```

```
function Example() {
  let list = useListData({});
  let getItems = e => {
    return Promise.all(
      e.items.map(async item => ({
        id: Math.random(),
        url: URL.createObjectURL(await item.getFile()),
        name: item.name
      }))
    );  };

  let onRootDrop = async e => {
    list.prepend(...await getItems(e));
  };

  let onInsert = async e => {
    if (e.target.dropPosition === 'before') {
      list.insertBefore(e.target.key, ...await getItems(e));
    } else if (e.target.dropPosition === 'after') {
      list.insertAfter(e.target.key, ...await getItems(e));
    }
  };

  return (
    <ListBox
      aria-label="Images"
      items={list.items}
      acceptedDragTypes={['image/jpeg', 'image/png']}      onRootDrop={onRootDrop}
      onInsert={onInsert}>
      {item => (
        <Item textValue={item.name}>
          <div className="image-item">
            <img src={item.url} />
            <span>{item.name}</span>
          </div>
        </Item>
      )}
    </ListBox>
  );
}
```

```
function Example() {
  let list = useListData(
    {}
  );
  let getItems = (e) => {
    return Promise.all(
      e.items.map(
        async (item) => ({
          id: Math
            .random(),
          url: URL
            .createObjectURL(
              await item
                .getFile()
            ),
          name: item.name
        })
      )
    );  };

  let onRootDrop =
    async (e) => {
      list.prepend(
        ...await getItems(
          e
        )
      );
    };

  let onInsert =
    async (e) => {
      if (
        e.target
          .dropPosition ===
          'before'
      ) {
        list
          .insertBefore(
            e.target.key,
            ...await getItems(
              e
            )
          );
      } else if (
        e.target
          .dropPosition ===
          'after'
      ) {
        list.insertAfter(
          e.target.key,
          ...await getItems(
            e
          )
        );
      }
    };

  return (
    <ListBox
      aria-label="Images"
      items={list.items}
      acceptedDragTypes={[
        'image/jpeg',
        'image/png'
      ]}      onRootDrop={onRootDrop}
      onInsert={onInsert}
    >
      {(item) => (
        <Item
          textValue={item
            .name}
        >
          <div className="image-item">
            <img
              src={item
                .url}
            />
            <span>
              {item.name}
            </span>
          </div>
        </Item>
      )}
    </ListBox>
  );
}
```

Show CSS

```
.image-item {
  display: flex;
  height: 50px;
  gap: 10px;
}

.image-item img {
  height: 100%;
  object-fit: contain;
}

.image-item span {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

```
.image-item {
  display: flex;
  height: 50px;
  gap: 10px;
}

.image-item img {
  height: 100%;
  object-fit: contain;
}

.image-item span {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

```
.image-item {
  display: flex;
  height: 50px;
  gap: 10px;
}

.image-item img {
  height: 100%;
  object-fit: contain;
}

.image-item span {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

A `[DirectoryDropItem](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dnd.d.ts:DirectoryDropItem)` references the contents of a directory on the user's device. It includes the name of the directory, as well as a method to iterate through the files and folders within the directory. The contents of any folders within the directory can be accessed recursively.

The `getEntries` method returns an [async iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of) object, which can be used in a `for await...of` loop. This provides each item in the directory as either a `[FileDropItem](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dnd.d.ts:FileDropItem)` or `[DirectoryDropItem](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dnd.d.ts:DirectoryDropItem)`, and you can access the contents of each file as discussed above.

This example accepts directory drops over the whole collection, and renders the contents as items in the list. `DIRECTORY_DRAG_TYPE` is imported from `@react-aria/dnd` and included in the `acceptedDragTypes` prop to limit the accepted items to only directories.

```
import {DIRECTORY_DRAG_TYPE} from 'react-aria';
import File from '@spectrum-icons/workflow/FileTxt';
import Folder from '@spectrum-icons/workflow/Folder';

function Example() {
  let [files, setFiles] = React.useState([]);
  let onRootDrop = async (e) => {
    // Read entries in directory and update state with relevant info.
    let files = [];
    for await (let entry of e.items[0].getEntries()) {
      files.push({
        name: entry.name,
        kind: entry.kind
      });
    }
    setFiles(files);  };

  return (
    <ListBox
      aria-label="Directory contents"
      items={files}
      acceptedDragTypes={[DIRECTORY_DRAG_TYPE]}      onRootDrop={onRootDrop}
    >
      {(item) => (
        <Item key={item.name} textValue={item.name}>
          <div className="dir-item">
            {item.kind === 'directory' ? <Folder /> : <File />}
            <span>{item.name}</span>
          </div>
        </Item>
      )}
    </ListBox>
  );
}
```

```
import {DIRECTORY_DRAG_TYPE} from 'react-aria';
import File from '@spectrum-icons/workflow/FileTxt';
import Folder from '@spectrum-icons/workflow/Folder';

function Example() {
  let [files, setFiles] = React.useState([]);
  let onRootDrop = async (e) => {
    // Read entries in directory and update state with relevant info.
    let files = [];
    for await (let entry of e.items[0].getEntries()) {
      files.push({
        name: entry.name,
        kind: entry.kind
      });
    }
    setFiles(files);  };

  return (
    <ListBox
      aria-label="Directory contents"
      items={files}
      acceptedDragTypes={[DIRECTORY_DRAG_TYPE]}      onRootDrop={onRootDrop}
    >
      {(item) => (
        <Item key={item.name} textValue={item.name}>
          <div className="dir-item">
            {item.kind === 'directory'
              ? <Folder />
              : <File />}
            <span>{item.name}</span>
          </div>
        </Item>
      )}
    </ListBox>
  );
}
```

```
import {DIRECTORY_DRAG_TYPE} from 'react-aria';
import File from '@spectrum-icons/workflow/FileTxt';
import Folder from '@spectrum-icons/workflow/Folder';

function Example() {
  let [files, setFiles] =
    React.useState([]);
  let onRootDrop =
    async (e) => {
      // Read entries in directory and update state with relevant info.
      let files = [];
      for await (
        let entry of e
          .items[0]
          .getEntries()
      ) {
        files.push({
          name:
            entry.name,
          kind:
            entry.kind
        });
      }
      setFiles(files);    };

  return (
    <ListBox
      aria-label="Directory contents"
      items={files}
      acceptedDragTypes={[
        DIRECTORY_DRAG_TYPE
      ]}      onRootDrop={onRootDrop}
    >
      {(item) => (
        <Item
          key={item.name}
          textValue={item
            .name}
        >
          <div className="dir-item">
            {item
                .kind ===
                'directory'
              ? (
                <Folder />
              )
              : <File />}
            <span>
              {item.name}
            </span>
          </div>
        </Item>
      )}
    </ListBox>
  );
}
```

Show CSS

```
.dir-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.dir-item {
  flex: 0 0 auto;
}

.dir-item {
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

```
.dir-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.dir-item {
  flex: 0 0 auto;
}

.dir-item {
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

```
.dir-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.dir-item {
  flex: 0 0 auto;
}

.dir-item {
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

* * *

A `[DropOperation](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dnd.d.ts:DropOperation)` is an indication of what will happen when dragged data is dropped on a particular drop target. These are:

-   `move` – indicates that the dragged data will be moved from its source location to the target location.
-   `copy` – indicates that the dragged data will be copied to the target destination.
-   `link` – indicates that there will be a relationship established between the source and target locations.
-   `cancel` – indicates that the drag and drop operation will be canceled, resulting in no changes made to the source or target.

Many operating systems display these in the form of a cursor change, e.g. a plus sign to indicate a copy operation. The user may also be able to use a modifier key to choose which drop operation to perform, such as Option or Alt to switch from move to copy.

The drag source can specify which drop operations are allowed for the dragged data (see the [useDrag docs](https://react-spectrum.adobe.com/react-aria/useDrag.html) for how to customize this). By default, the first allowed operation is allowed by drop targets, meaning that the drop target accepts data of any type and operation.

The `getDropOperation` function passed to `useDroppableCollection` can be used to provide appropriate feedback to the user when a drag hovers over the drop target. This function receives the drop target, set of types contained in the drag, and a list of allowed drop operations as specified by the drag source. It should return one of the drop operations in `allowedOperations`, or a specific drop operation if only that drop operation is supported. It may also return `'cancel'` to reject the drop. If the returned operation is not in `allowedOperations`, then the drop target will act as if `'cancel'` was returned.

In the below example, the drop target only supports dropping PNG images. If a PNG is dragged over the target, it will be highlighted and the operating system displays a copy cursor. If another type is dragged over the target, then there is no visual feedback, indicating that a drop is not accepted there. If the user holds a modifier key such as Control while dragging over the drop target in order to change the drop operation, then the drop target does not accept the drop.

```
function Example() {
  // ...

  return (
    <ListBox
      aria-label="Images"
      items={list.items}
      getDropOperation={() => 'copy'}      acceptedDragTypes={['image/png']}
      onRootDrop={onRootDrop}>
      {item => (
        <Item textValue={item.name}>
          <div className="image-item">
            <img src={item.url} />
            <span>{item.name}</span>
          </div>
        </Item>
      )}
    </ListBox>
  );
}
```

```
function Example() {
  // ...

  return (
    <ListBox
      aria-label="Images"
      items={list.items}
      getDropOperation={() => 'copy'}      acceptedDragTypes={['image/png']}
      onRootDrop={onRootDrop}>
      {item => (
        <Item textValue={item.name}>
          <div className="image-item">
            <img src={item.url} />
            <span>{item.name}</span>
          </div>
        </Item>
      )}
    </ListBox>
  );
}
```

```
function Example() {
  // ...

  return (
    <ListBox
      aria-label="Images"
      items={list.items}
      getDropOperation={() =>
        'copy'}      acceptedDragTypes={[
        'image/png'
      ]}
      onRootDrop={onRootDrop}
    >
      {(item) => (
        <Item
          textValue={item
            .name}
        >
          <div className="image-item">
            <img
              src={item
                .url}
            />
            <span>
              {item.name}
            </span>
          </div>
        </Item>
      )}
    </ListBox>
  );
}
```

Drop events such as `onInsert`, `onItemDrop`, etc. also include the `dropOperation`. This can be used to perform different actions accordingly, for example, when communicating with a backend API.

```
let onItemDrop = async (e) => {
  let data = JSON.parse(await e.items[0].getText('my-app-file'));
  switch (e.dropOperation) {
    case 'move':
      MyAppFileService.move(data.filePath, props.filePath);
      break;
    case 'copy':
      MyAppFileService.copy(data.filePath, props.filePath);
      break;
    case 'link':
      MyAppFileService.link(data.filePath, props.filePath);
      break;
  }};
```

```
let onItemDrop = async (e) => {
  let data = JSON.parse(
    await e.items[0].getText('my-app-file')
  );
  switch (e.dropOperation) {
    case 'move':
      MyAppFileService.move(data.filePath, props.filePath);
      break;
    case 'copy':
      MyAppFileService.copy(data.filePath, props.filePath);
      break;
    case 'link':
      MyAppFileService.link(data.filePath, props.filePath);
      break;
  }};
```

```
let onItemDrop = async (
  e
) => {
  let data = JSON.parse(
    await e.items[0]
      .getText(
        'my-app-file'
      )
  );
  switch (
    e.dropOperation
  ) {
    case 'move':
      MyAppFileService
        .move(
          data.filePath,
          props.filePath
        );
      break;
    case 'copy':
      MyAppFileService
        .copy(
          data.filePath,
          props.filePath
        );
      break;
    case 'link':
      MyAppFileService
        .link(
          data.filePath,
          props.filePath
        );
      break;
  }};
```

* * *

The above examples have used high level events such as `onInsert`, `onItemDrop`, and `onReorder`, along with props such as `acceptedDragTypes`. Based on these props, `useDroppableCollection` automatically determines whether drag data is accepted and where (e.g. on items, between items, etc.). It also automatically filters the dropped items based on their types. For more complex scenarios, the lower level `getDropOperation` and `onDrop` functions can be used instead.

To programmatically determine whether a drop is accepted based on the dragged types, target key, and drop position, implement the `getDropOperation` function. `acceptedDragTypes` and `shouldAcceptItemDrop` (when `onItemDrop` is provided) may also be used in combination with `getDropOperation` as a pre-filter. See the section on [drop operations](#drop-operations) above for more details.

To handle all accepted drops in a single function, implement the `onDrop` event rather than `onInsert`, `onItemDrop`, etc. When defined, this overrides any other drop handlers. The provided `[DroppableCollectionDropEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dnd.d.ts:DroppableCollectionDropEvent)` includes details on the drop target, dropped items, drop operation, etc.

This example allows directories to be dropped between items, and only files of certain types to be dropped on the pre-existing directories.

```
import {DIRECTORY_DRAG_TYPE} from 'react-aria';

function Example() {
  let list = useListData({
    initialItems: [
      {
        id: 1,
        name: 'Images',
        contains: 0,
        accept: ['image/png', 'image/jpeg']
      },
      { id: 2, name: 'Videos', contains: 0, accept: ['video/mp4'] },
      {
        id: 3,
        name: 'Documents',
        contains: 0,
        accept: ['text/plain', 'application/pdf']
      }
    ]
  });

  let getDropOperation = (target, types, allowedOperations) => {
    // When dropping on an item, check whether the item accepts the drag types and cancel if not.
    if (target.dropPosition === 'on') {
      let item = list.getItem(target.key);
      return item.accept && item.accept.some((type) => types.has(type))
        ? allowedOperations[0]
        : 'cancel';
    }

    // If dropping between items, support a copy operation.
    return types.has(DIRECTORY_DRAG_TYPE) ? 'copy' : 'cancel';
  };

  let onDrop = async (e) => {
    let items = await Promise.all(
      e.items
        .filter((item) => {
          // Check if dropped item is accepted.
          if (e.target.dropPosition === 'on') {
            let folder = list.getItem(e.target.key);
            return folder.accept.includes(item.type);
          }

          return item.kind === 'directory';
        })
        .map(async (item) => {
          // Collect child count from dropped directories.
          let contains = 0;
          if (item.kind === 'directory') {
            for await (let _ of item.getEntries()) {
              contains++;
            }
          }

          return {
            id: Math.random(),
            name: item.name,
            contains
          };
        })
    );

    // Update item count if dropping on an item, otherwise insert the new items in the list.
    if (e.target.dropPosition === 'on') {
      let item = list.getItem(e.target.key);
      list.update(e.target.key, {
        ...item,
        contains: item.contains + items.length
      });
    } else if (e.target.dropPosition === 'before') {
      list.insertBefore(e.target.key, ...items);
    } else if (e.target.dropPosition === 'after') {
      list.insertAfter(e.target.key, ...items);
    }
  };

  return (
    <ListBox
      aria-label="Folders"
      items={list.items}
      getDropOperation={getDropOperation}
      onDrop={onDrop}
    >
      {(item) => (
        <Item textValue={item.name}>
          <div className="dir-item">
            <Folder />
            <span>{item.name} ({item.contains} items)</span>
          </div>
        </Item>
      )}
    </ListBox>
  );
}
```

```
import {DIRECTORY_DRAG_TYPE} from 'react-aria';

function Example() {
  let list = useListData({
    initialItems: [
      {
        id: 1,
        name: 'Images',
        contains: 0,
        accept: ['image/png', 'image/jpeg']
      },
      {
        id: 2,
        name: 'Videos',
        contains: 0,
        accept: ['video/mp4']
      },
      {
        id: 3,
        name: 'Documents',
        contains: 0,
        accept: ['text/plain', 'application/pdf']
      }
    ]
  });

  let getDropOperation = (
    target,
    types,
    allowedOperations
  ) => {
    // When dropping on an item, check whether the item accepts the drag types and cancel if not.
    if (target.dropPosition === 'on') {
      let item = list.getItem(target.key);
      return item.accept &&
          item.accept.some((type) => types.has(type))
        ? allowedOperations[0]
        : 'cancel';
    }

    // If dropping between items, support a copy operation.
    return types.has(DIRECTORY_DRAG_TYPE)
      ? 'copy'
      : 'cancel';
  };

  let onDrop = async (e) => {
    let items = await Promise.all(
      e.items
        .filter((item) => {
          // Check if dropped item is accepted.
          if (e.target.dropPosition === 'on') {
            let folder = list.getItem(e.target.key);
            return folder.accept.includes(item.type);
          }

          return item.kind === 'directory';
        })
        .map(async (item) => {
          // Collect child count from dropped directories.
          let contains = 0;
          if (item.kind === 'directory') {
            for await (let _ of item.getEntries()) {
              contains++;
            }
          }

          return {
            id: Math.random(),
            name: item.name,
            contains
          };
        })
    );

    // Update item count if dropping on an item, otherwise insert the new items in the list.
    if (e.target.dropPosition === 'on') {
      let item = list.getItem(e.target.key);
      list.update(e.target.key, {
        ...item,
        contains: item.contains + items.length
      });
    } else if (e.target.dropPosition === 'before') {
      list.insertBefore(e.target.key, ...items);
    } else if (e.target.dropPosition === 'after') {
      list.insertAfter(e.target.key, ...items);
    }
  };

  return (
    <ListBox
      aria-label="Folders"
      items={list.items}
      getDropOperation={getDropOperation}
      onDrop={onDrop}
    >
      {(item) => (
        <Item textValue={item.name}>
          <div className="dir-item">
            <Folder />
            <span>{item.name} ({item.contains} items)</span>
          </div>
        </Item>
      )}
    </ListBox>
  );
}
```

```
import {DIRECTORY_DRAG_TYPE} from 'react-aria';

function Example() {
  let list = useListData(
    {
      initialItems: [
        {
          id: 1,
          name: 'Images',
          contains: 0,
          accept: [
            'image/png',
            'image/jpeg'
          ]
        },
        {
          id: 2,
          name: 'Videos',
          contains: 0,
          accept: [
            'video/mp4'
          ]
        },
        {
          id: 3,
          name:
            'Documents',
          contains: 0,
          accept: [
            'text/plain',
            'application/pdf'
          ]
        }
      ]
    }
  );

  let getDropOperation =
    (
      target,
      types,
      allowedOperations
    ) => {
      // When dropping on an item, check whether the item accepts the drag types and cancel if not.
      if (
        target
          .dropPosition ===
          'on'
      ) {
        let item = list
          .getItem(
            target.key
          );
        return item
            .accept &&
            item.accept
              .some(
                (type) =>
                  types
                    .has(
                      type
                    )
              )
          ? allowedOperations[
            0
          ]
          : 'cancel';
      }

      // If dropping between items, support a copy operation.
      return types.has(
          DIRECTORY_DRAG_TYPE
        )
        ? 'copy'
        : 'cancel';
    };

  let onDrop =
    async (e) => {
      let items =
        await Promise
          .all(
            e.items
              .filter(
                (item) => {
                  // Check if dropped item is accepted.
                  if (
                    e.target
                      .dropPosition ===
                      'on'
                  ) {
                    let folder =
                      list
                        .getItem(
                          e.target
                            .key
                        );
                    return folder
                      .accept
                      .includes(
                        item
                          .type
                      );
                  }

                  return item
                    .kind ===
                    'directory';
                }
              )
              .map(
                async (item) => {
                  // Collect child count from dropped directories.
                  let contains =
                    0;
                  if (
                    item
                      .kind ===
                      'directory'
                  ) {
                    for await (
                      let _
                        of item
                          .getEntries()
                    ) {
                      contains++;
                    }
                  }

                  return {
                    id:
                      Math
                        .random(),
                    name:
                      item
                        .name,
                    contains
                  };
                }
              )
          );

      // Update item count if dropping on an item, otherwise insert the new items in the list.
      if (
        e.target
          .dropPosition ===
          'on'
      ) {
        let item = list
          .getItem(
            e.target.key
          );
        list.update(
          e.target.key,
          {
            ...item,
            contains:
              item
                .contains +
              items
                .length
          }
        );
      } else if (
        e.target
          .dropPosition ===
          'before'
      ) {
        list
          .insertBefore(
            e.target.key,
            ...items
          );
      } else if (
        e.target
          .dropPosition ===
          'after'
      ) {
        list.insertAfter(
          e.target.key,
          ...items
        );
      }
    };

  return (
    <ListBox
      aria-label="Folders"
      items={list.items}
      getDropOperation={getDropOperation}
      onDrop={onDrop}
    >
      {(item) => (
        <Item
          textValue={item
            .name}
        >
          <div className="dir-item">
            <Folder />
            <span>
              {item.name}
              {' '}
              ({item
                .contains}
              {' '}
              items)
            </span>
          </div>
        </Item>
      )}
    </ListBox>
  );
}
```

* * *

The full list of props supported by droppable collections is available below.

Name

Type

Default

Description

`acceptedDragTypes`

`'all' | [Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array)<[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) | symbol>`

`'all'`

The drag types that the droppable collection accepts. If the collection accepts directories, include `DIRECTORY_DRAG_TYPE` in your array of allowed types.

`onInsert`

`( (e: [DroppableCollectionInsertDropEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dnd.d.ts:DroppableCollectionInsertDropEvent) )) => void`

—

Handler that is called when external items are dropped "between" items.

`onRootDrop`

`( (e: [DroppableCollectionRootDropEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dnd.d.ts:DroppableCollectionRootDropEvent) )) => void`

—

Handler that is called when external items are dropped on the droppable collection's root.

`onItemDrop`

`( (e: [DroppableCollectionOnItemDropEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dnd.d.ts:DroppableCollectionOnItemDropEvent) )) => void`

—

Handler that is called when items are dropped "on" an item.

`onReorder`

`( (e: [DroppableCollectionReorderEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dnd.d.ts:DroppableCollectionReorderEvent) )) => void`

—

Handler that is called when items are reordered within the collection. This handler only allows dropping between items, not on items. It does not allow moving items to a different parent item within a tree.

`onMove`

`( (e: [DroppableCollectionReorderEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dnd.d.ts:DroppableCollectionReorderEvent) )) => void`

—

Handler that is called when items are moved within the source collection. This handler allows dropping both on or between items, and items may be moved to a different parent item within a tree.

`shouldAcceptItemDrop`

`( (target: [ItemDropTarget](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dnd.d.ts:ItemDropTarget), , types: [DragTypes](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dnd.d.ts:DragTypes) )) => [boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

A function returning whether a given target in the droppable collection is a valid "on" drop target for the current drag types.

`onDropEnter`

`( (e: [DroppableCollectionEnterEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dnd.d.ts:DroppableCollectionEnterEvent) )) => void`

—

Handler that is called when a valid drag enters a drop target.

`onDropActivate`

`( (e: [DroppableCollectionActivateEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dnd.d.ts:DroppableCollectionActivateEvent) )) => void`

—

Handler that is called after a valid drag is held over a drop target for a period of time.

`onDropExit`

`( (e: [DroppableCollectionExitEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dnd.d.ts:DroppableCollectionExitEvent) )) => void`

—

Handler that is called when a valid drag exits a drop target.

`onDrop`

`( (e: [DroppableCollectionDropEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dnd.d.ts:DroppableCollectionDropEvent) )) => void`

—

Handler that is called when a valid drag is dropped on a drop target. When defined, this overrides other drop handlers such as `onInsert`, and `onItemDrop`.

`getDropOperation`

`( target: [DropTarget](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dnd.d.ts:DropTarget), types: [DragTypes](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dnd.d.ts:DragTypes), allowedOperations: [DropOperation](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dnd.d.ts:DropOperation)[] ) => [DropOperation](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dnd.d.ts:DropOperation)`

—

A function returning the drop operation to be performed when items matching the given types are dropped on the drop target.