# useToggleButtonGroup

**Source**: [https://react-spectrum.adobe.com/react-aria/useToggleButtonGroup.html](https://react-spectrum.adobe.com/react-aria/useToggleButtonGroup.html)

> Documentation for useToggleButtonGroup in the React Aria package.

---

* * *

`useToggleButtonGroup( props: [AriaToggleButtonGroupProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/button/src/useToggleButtonGroup.ts:AriaToggleButtonGroupProps), state: [ToggleGroupState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/toggle/src/useToggleGroupState.ts:ToggleGroupState), ref: [RefObject](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/refs.d.ts:RefObject)<[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element) |  | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)> ): [ToggleButtonGroupAria](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/button/src/useToggleButtonGroup.ts:ToggleButtonGroupAria)` `useToggleButtonGroupItem( props: [AriaToggleButtonGroupItemOptions](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/button/src/useToggleButtonGroup.ts:AriaToggleButtonGroupItemOptions)<ElementType>, state: [ToggleGroupState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/toggle/src/useToggleGroupState.ts:ToggleGroupState), ref: [RefObject](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/refs.d.ts:RefObject)<any> ): [ToggleButtonAria](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/button/src/useToggleButton.ts:ToggleButtonAria)<[HTMLAttributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)<any>>`

* * *

There is no built in element for toggle button groups in HTML. `useToggleButtonGroup` helps achieve accessible toggle button groups that can be styled as needed.

-   **Accessible** – Represented as an ARIA [radiogroup](https://www.w3.org/WAI/ARIA/apg/patterns/radio/) when using single selection, or a [toolbar](https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/) when using multiple selection.
-   **Keyboard navigation** – Users can navigate between buttons with the arrow keys. Selection can be toggled using the Enter or Space keys.
-   **Styleable** – Hover, press, keyboard focus, and selection states are provided for easy styling.

* * *

ListGridGroupToggle button

A toggle button group consists of a set of toggle buttons, and coordinates the selection state between them. Users can navigate between buttons with the arrow keys in either horizontal or vertical orientations.

`useToggleButtonGroup` returns props for the toggle button group:

Name

Type

Description

`groupProps`

`[DOMAttributes](https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes)`

Props for the toggle button group container.

`useToggleButtonGroupItem` returns props for an individual toggle button:

Name

Type

Description

`isSelected`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether the button is selected.

`isDisabled`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether the button is disabled.

`buttonProps`

`T`

Props for the button element.

`isPressed`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether the button is currently pressed.

Selection state is managed by the `[useToggleGroupState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/toggle/src/useToggleGroupState.ts:useToggleGroupState)` hook in `@react-stately/toggle`. The state object should be passed as an option to `useToggleButtonGroup` and `useToggleButtonGroupItem`.

**Note:** `useToggleButtonGroupItem` should only be used when it is contained within a toggle button group. For a standalone toggle button, use the [useToggleButton](https://react-spectrum.adobe.com/react-aria/useToggleButton.html) hook instead.

* * *

```
import type {ToggleGroupState} from 'react-stately';
import type {AriaToggleButtonGroupItemProps, AriaToggleButtonGroupProps} from 'react-aria';
import {useToggleGroupState} from 'react-stately';
import {useToggleButtonGroup, useToggleButtonGroupItem} from 'react-aria';

interface ToggleButtonGroupProps extends AriaToggleButtonGroupProps {
  children: React.ReactNode;
}

let ToggleButtonGroupContext = React.createContext<ToggleGroupState | null>(
  null
);

function ToggleButtonGroup(props: ToggleButtonGroupProps) {
  let state = useToggleGroupState(props);
  let ref = React.useRef<HTMLDivElement | null>(null);
  let { groupProps } = useToggleButtonGroup(props, state, ref);

  return (
    <div {...groupProps} className="toggle-group" ref={ref}>
      <ToggleButtonGroupContext.Provider value={state}>
        {props.children}
      </ToggleButtonGroupContext.Provider>
    </div>
  );
}

function ToggleButton(props: AriaToggleButtonGroupItemProps) {
  let ref = React.useRef<HTMLButtonElement | null>(null);
  let state = React.useContext(ToggleButtonGroupContext)!;
  let { buttonProps, isPressed, isSelected } = useToggleButtonGroupItem(
    props,
    state,
    ref
  );

  return (
    <button
      {...buttonProps}
      className="toggle-button"
      data-pressed={isPressed}
      data-selected={isSelected}
      ref={ref}
    >
      {props.children}
    </button>
  );
}

<ToggleButtonGroup>
  <ToggleButton id="left">Left</ToggleButton>
  <ToggleButton id="center">Center</ToggleButton>
  <ToggleButton id="right">Right</ToggleButton>
</ToggleButtonGroup>
```

```
import type {ToggleGroupState} from 'react-stately';
import type {
  AriaToggleButtonGroupItemProps,
  AriaToggleButtonGroupProps
} from 'react-aria';
import {useToggleGroupState} from 'react-stately';
import {
  useToggleButtonGroup,
  useToggleButtonGroupItem
} from 'react-aria';

interface ToggleButtonGroupProps
  extends AriaToggleButtonGroupProps {
  children: React.ReactNode;
}

let ToggleButtonGroupContext = React.createContext<
  ToggleGroupState | null
>(null);

function ToggleButtonGroup(props: ToggleButtonGroupProps) {
  let state = useToggleGroupState(props);
  let ref = React.useRef<HTMLDivElement | null>(null);
  let { groupProps } = useToggleButtonGroup(
    props,
    state,
    ref
  );

  return (
    <div {...groupProps} className="toggle-group" ref={ref}>
      <ToggleButtonGroupContext.Provider value={state}>
        {props.children}
      </ToggleButtonGroupContext.Provider>
    </div>
  );
}

function ToggleButton(
  props: AriaToggleButtonGroupItemProps
) {
  let ref = React.useRef<HTMLButtonElement | null>(null);
  let state = React.useContext(ToggleButtonGroupContext)!;
  let { buttonProps, isPressed, isSelected } =
    useToggleButtonGroupItem(props, state, ref);

  return (
    <button
      {...buttonProps}
      className="toggle-button"
      data-pressed={isPressed}
      data-selected={isSelected}
      ref={ref}
    >
      {props.children}
    </button>
  );
}

<ToggleButtonGroup>
  <ToggleButton id="left">Left</ToggleButton>
  <ToggleButton id="center">Center</ToggleButton>
  <ToggleButton id="right">Right</ToggleButton>
</ToggleButtonGroup>
```

```
import type {ToggleGroupState} from 'react-stately';
import type {
  AriaToggleButtonGroupItemProps,
  AriaToggleButtonGroupProps
} from 'react-aria';
import {useToggleGroupState} from 'react-stately';
import {
  useToggleButtonGroup,
  useToggleButtonGroupItem
} from 'react-aria';

interface ToggleButtonGroupProps
  extends
    AriaToggleButtonGroupProps {
  children:
    React.ReactNode;
}

let ToggleButtonGroupContext =
  React.createContext<
    | ToggleGroupState
    | null
  >(null);

function ToggleButtonGroup(
  props:
    ToggleButtonGroupProps
) {
  let state =
    useToggleGroupState(
      props
    );
  let ref = React.useRef<
    HTMLDivElement | null
  >(null);
  let { groupProps } =
    useToggleButtonGroup(
      props,
      state,
      ref
    );

  return (
    <div
      {...groupProps}
      className="toggle-group"
      ref={ref}
    >
      <ToggleButtonGroupContext.Provider
        value={state}
      >
        {props.children}
      </ToggleButtonGroupContext.Provider>
    </div>
  );
}

function ToggleButton(
  props:
    AriaToggleButtonGroupItemProps
) {
  let ref = React.useRef<
    | HTMLButtonElement
    | null
  >(null);
  let state = React
    .useContext(
      ToggleButtonGroupContext
    )!;
  let {
    buttonProps,
    isPressed,
    isSelected
  } =
    useToggleButtonGroupItem(
      props,
      state,
      ref
    );

  return (
    <button
      {...buttonProps}
      className="toggle-button"
      data-pressed={isPressed}
      data-selected={isSelected}
      ref={ref}
    >
      {props.children}
    </button>
  );
}

<ToggleButtonGroup>
  <ToggleButton id="left">
    Left
  </ToggleButton>
  <ToggleButton id="center">
    Center
  </ToggleButton>
  <ToggleButton id="right">
    Right
  </ToggleButton>
</ToggleButtonGroup>
```

Show CSS

```
.toggle-group {
  display: flex;
  gap: 4px;

  &[aria-orientation=vertical] {
    flex-direction: column;
    width: fit-content;
  }
}

.toggle-button {
  background: lightgray;
  color: black;
  padding: 10px;
  font-size: 16px;
  user-select: none;
  border: none;

  &[data-pressed=true] {
    background: gray;
  }

  &[data-selected=true] {
    background: green;
    color: white;

    &[data-pressed=true] {
      background: darkgreen;
    }
  }

  &:disabled {
    opacity: 0.5;
  }
}
```

```
.toggle-group {
  display: flex;
  gap: 4px;

  &[aria-orientation=vertical] {
    flex-direction: column;
    width: fit-content;
  }
}

.toggle-button {
  background: lightgray;
  color: black;
  padding: 10px;
  font-size: 16px;
  user-select: none;
  border: none;

  &[data-pressed=true] {
    background: gray;
  }

  &[data-selected=true] {
    background: green;
    color: white;

    &[data-pressed=true] {
      background: darkgreen;
    }
  }

  &:disabled {
    opacity: 0.5;
  }
}
```

```
.toggle-group {
  display: flex;
  gap: 4px;

  &[aria-orientation=vertical] {
    flex-direction: column;
    width: fit-content;
  }
}

.toggle-button {
  background: lightgray;
  color: black;
  padding: 10px;
  font-size: 16px;
  user-select: none;
  border: none;

  &[data-pressed=true] {
    background: gray;
  }

  &[data-selected=true] {
    background: green;
    color: white;

    &[data-pressed=true] {
      background: darkgreen;
    }
  }

  &:disabled {
    opacity: 0.5;
  }
}
```

* * *

ToggleButtonGroup supports both single and multiple selection modes. Use `defaultSelectedKeys` to provide a default set of selected items (uncontrolled) and `selectedKeys` to set the selected items (controlled). The value of the selected keys must match the `id` prop of the items.

By default, the `selectionMode` of a `ToggleButtonGroup` is `"single"`.

```
<ToggleButtonGroup defaultSelectedKeys={['list']}>
  <ToggleButton id="grid">Grid view</ToggleButton>
  <ToggleButton id="list">List view</ToggleButton>
  <ToggleButton id="gallery">Gallery view</ToggleButton>
</ToggleButtonGroup>
```

```
<ToggleButtonGroup defaultSelectedKeys={['list']}>
  <ToggleButton id="grid">Grid view</ToggleButton>
  <ToggleButton id="list">List view</ToggleButton>
  <ToggleButton id="gallery">Gallery view</ToggleButton>
</ToggleButtonGroup>
```

```
<ToggleButtonGroup
  defaultSelectedKeys={[
    'list'
  ]}
>
  <ToggleButton id="grid">
    Grid view
  </ToggleButton>
  <ToggleButton id="list">
    List view
  </ToggleButton>
  <ToggleButton id="gallery">
    Gallery view
  </ToggleButton>
</ToggleButtonGroup>
```

Set `selectionMode` prop to `multiple` to allow more than one selection.

```
<ToggleButtonGroup selectionMode="multiple">
  <ToggleButton id="bold">Bold</ToggleButton>
  <ToggleButton id="italic">Italic</ToggleButton>
  <ToggleButton id="underline">Underline</ToggleButton>
</ToggleButtonGroup>
```

```
<ToggleButtonGroup selectionMode="multiple">
  <ToggleButton id="bold">Bold</ToggleButton>
  <ToggleButton id="italic">Italic</ToggleButton>
  <ToggleButton id="underline">Underline</ToggleButton>
</ToggleButtonGroup>
```

```
<ToggleButtonGroup selectionMode="multiple">
  <ToggleButton id="bold">
    Bold
  </ToggleButton>
  <ToggleButton id="italic">
    Italic
  </ToggleButton>
  <ToggleButton id="underline">
    Underline
  </ToggleButton>
</ToggleButtonGroup>
```

The `selectedKeys` prop can be used to make the selected state controlled.

```
import type {Key} from 'react-stately';

function Example() {
  let [selected, setSelected] = React.useState(new Set<Key>(['bold']));

  return (
    <>
      <ToggleButtonGroup
        selectionMode="multiple"
        selectedKeys={selected}
        onSelectionChange={setSelected}
      >
        <ToggleButton id="bold">Bold</ToggleButton>
        <ToggleButton id="italic">Italic</ToggleButton>
        <ToggleButton id="underline">Underline</ToggleButton>
      </ToggleButtonGroup>
      <p>Current selections (controlled): {[...selected].join(', ')}</p>
    </>
  );
}
```

```
import type {Key} from 'react-stately';

function Example() {
  let [selected, setSelected] = React.useState(
    new Set<Key>(['bold'])
  );

  return (
    <>
      <ToggleButtonGroup
        selectionMode="multiple"
        selectedKeys={selected}
        onSelectionChange={setSelected}
      >
        <ToggleButton id="bold">Bold</ToggleButton>
        <ToggleButton id="italic">Italic</ToggleButton>
        <ToggleButton id="underline">
          Underline
        </ToggleButton>
      </ToggleButtonGroup>
      <p>
        Current selections (controlled):{' '}
        {[...selected].join(', ')}
      </p>
    </>
  );
}
```

```
import type {Key} from 'react-stately';

function Example() {
  let [
    selected,
    setSelected
  ] = React.useState(
    new Set<Key>([
      'bold'
    ])
  );

  return (
    <>
      <ToggleButtonGroup
        selectionMode="multiple"
        selectedKeys={selected}
        onSelectionChange={setSelected}
      >
        <ToggleButton id="bold">
          Bold
        </ToggleButton>
        <ToggleButton id="italic">
          Italic
        </ToggleButton>
        <ToggleButton id="underline">
          Underline
        </ToggleButton>
      </ToggleButtonGroup>
      <p>
        Current
        selections
        (controlled):
        {' '}
        {[...selected]
          .join(', ')}
      </p>
    </>
  );
}
```

* * *

All buttons within a `ToggleButtonGroup` can be disabled using the `isDisabled` prop.

```
<ToggleButtonGroup isDisabled>
  <ToggleButton id="grid">Grid view</ToggleButton>
  <ToggleButton id="list">List view</ToggleButton>
  <ToggleButton id="gallery">Gallery view</ToggleButton>
</ToggleButtonGroup>
```

```
<ToggleButtonGroup isDisabled>
  <ToggleButton id="grid">Grid view</ToggleButton>
  <ToggleButton id="list">List view</ToggleButton>
  <ToggleButton id="gallery">Gallery view</ToggleButton>
</ToggleButtonGroup>
```

```
<ToggleButtonGroup
  isDisabled
>
  <ToggleButton id="grid">
    Grid view
  </ToggleButton>
  <ToggleButton id="list">
    List view
  </ToggleButton>
  <ToggleButton id="gallery">
    Gallery view
  </ToggleButton>
</ToggleButtonGroup>
```

Individual items can be disabled using the `isDisabled` prop on each `ToggleButton`.

```
<ToggleButtonGroup>
  <ToggleButton id="grid">Grid view</ToggleButton>
  <ToggleButton id="list" isDisabled>List view</ToggleButton>
  <ToggleButton id="gallery">Gallery view</ToggleButton>
</ToggleButtonGroup>
```

```
<ToggleButtonGroup>
  <ToggleButton id="grid">Grid view</ToggleButton>
  <ToggleButton id="list" isDisabled>
    List view
  </ToggleButton>
  <ToggleButton id="gallery">Gallery view</ToggleButton>
</ToggleButtonGroup>
```

```
<ToggleButtonGroup>
  <ToggleButton id="grid">
    Grid view
  </ToggleButton>
  <ToggleButton
    id="list"
    isDisabled
  >
    List view
  </ToggleButton>
  <ToggleButton id="gallery">
    Gallery view
  </ToggleButton>
</ToggleButtonGroup>
```

* * *

By default, toggle button groups are horizontally oriented. The orientation prop can be set to "vertical" to change the arrow key navigation behavior.

```
<ToggleButtonGroup orientation="vertical">
  <ToggleButton id="grid">Grid</ToggleButton>
  <ToggleButton id="list">List</ToggleButton>
  <ToggleButton id="gallery">Gallery</ToggleButton>
</ToggleButtonGroup>
```

```
<ToggleButtonGroup orientation="vertical">
  <ToggleButton id="grid">Grid</ToggleButton>
  <ToggleButton id="list">List</ToggleButton>
  <ToggleButton id="gallery">Gallery</ToggleButton>
</ToggleButtonGroup>
```

```
<ToggleButtonGroup orientation="vertical">
  <ToggleButton id="grid">
    Grid
  </ToggleButton>
  <ToggleButton id="list">
    List
  </ToggleButton>
  <ToggleButton id="gallery">
    Gallery
  </ToggleButton>
</ToggleButtonGroup>
```

* * *

A `ToggleButtonGroup` can be labeled using the `aria-label` or `aria-labelledby` props.

```
<ToggleButtonGroup aria-label="Text style">
  <ToggleButton id="bold">Bold</ToggleButton>
  <ToggleButton id="italic">Italic</ToggleButton>
  <ToggleButton id="underline">Underline</ToggleButton>
</ToggleButtonGroup>
```

```
<ToggleButtonGroup aria-label="Text style">
  <ToggleButton id="bold">Bold</ToggleButton>
  <ToggleButton id="italic">Italic</ToggleButton>
  <ToggleButton id="underline">Underline</ToggleButton>
</ToggleButtonGroup>
```

```
<ToggleButtonGroup aria-label="Text style">
  <ToggleButton id="bold">
    Bold
  </ToggleButton>
  <ToggleButton id="italic">
    Italic
  </ToggleButton>
  <ToggleButton id="underline">
    Underline
  </ToggleButton>
</ToggleButtonGroup>
```