# useMenu

**Source**: [https://react-spectrum.adobe.com/react-aria/useMenu.html](https://react-spectrum.adobe.com/react-aria/useMenu.html)

> Documentation for useMenu in the React Aria package.

---

Provides the behavior and accessibility implementation for a menu component. A menu displays a list of actions or options that a user can choose.

* * *

`useMenuTrigger<T>( props: [AriaMenuTriggerProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/menu/src/useMenuTrigger.ts:AriaMenuTriggerProps), state: [MenuTriggerState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/menu/src/useMenuTriggerState.ts:MenuTriggerState), ref: [RefObject](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/refs.d.ts:RefObject)<[Element](https://developer.mozilla.org/docs/Web/API/Element) |  | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)> ): [MenuTriggerAria](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/menu/src/useMenuTrigger.ts:MenuTriggerAria)<T>` `useMenu<T>( props: [AriaMenuOptions](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/menu/src/useMenu.ts:AriaMenuOptions)<T>, state: [TreeState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/tree/src/useTreeState.ts:TreeState)<T>, ref: [RefObject](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/refs.d.ts:RefObject)<[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element) |  | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)> ): [MenuAria](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/menu/src/useMenu.ts:MenuAria)` `useMenuItem<T>( props: [AriaMenuItemProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/menu/src/useMenuItem.ts:AriaMenuItemProps), state: [TreeState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/tree/src/useTreeState.ts:TreeState)<T>, ref: [RefObject](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/refs.d.ts:RefObject)<[FocusableElement](https://developer.mozilla.org/en-US/docs/Web/API/Element) |  | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)> ): [MenuItemAria](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/menu/src/useMenuItem.ts:MenuItemAria)` `useMenuSection( (props: [AriaMenuSectionProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/menu/src/useMenuSection.ts:AriaMenuSectionProps) )): [MenuSectionAria](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/menu/src/useMenuSection.ts:MenuSectionAria)`

* * *

There is no native element to implement a menu in HTML that is widely supported. `useMenuTrigger` and `useMenu` help achieve accessible menu components that can be styled as needed.

-   Exposed to assistive technology as a button with a `menu` using ARIA
-   Support for single, multiple, or no selection
-   Support for disabled items
-   Support for sections
-   Complex item labeling support for accessibility
-   Keyboard navigation support including arrow keys, home/end, page up/down
-   Automatic scrolling support during keyboard navigation
-   Keyboard support for opening the menu using the arrow keys, including automatically focusing the first or last item accordingly
-   Typeahead to allow focusing items by typing text
-   Support for use with virtualized lists

* * *

Shows a menu component with labels pointing to its parts, including the trigger, menu, group, section heading, menu item, menu item label, menu item description, and menu item keyboard shortcut elements.Option 1Option 2Menu itemMenu item keyboard shortcutMenu item labelDescriptionDescriptionOption 3DescriptionMenu item descriptionMenuSECTION TITLESection headingGroup⌘KMenu item descriptionMore ActionsMenu Trigger

A menu trigger consists of a button or other trigger element combined with a popup menu, with a list of menu items or groups inside. `useMenuTrigger`, `useMenu`, `useMenuItem`, and `useMenuSection` handle exposing this to assistive technology using ARIA, along with handling keyboard, mouse, and interactions to support selection and focus behavior.

`useMenuTrigger` returns props that you should spread onto the appropriate element:

Name

Type

Description

`menuTriggerProps`

`[AriaButtonProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/button/src/index.d.ts:AriaButtonProps)`

Props for the menu trigger element.

`menuProps`

`[AriaMenuOptions](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/menu/src/useMenu.ts:AriaMenuOptions)<T>`

Props for the menu.

`useMenu` returns props that you should spread onto the menu container element:

Name

Type

Description

`menuProps`

`[DOMAttributes](https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes)`

Props for the menu element.

`useMenuItem` returns props for an individual item and its children:

Name

Type

Description

`menuItemProps`

`[DOMAttributes](https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes)`

Props for the menu item element.

`labelProps`

`[DOMAttributes](https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes)`

Props for the main text element inside the menu item.

`descriptionProps`

`[DOMAttributes](https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes)`

Props for the description text element inside the menu item, if any.

`keyboardShortcutProps`

`[DOMAttributes](https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes)`

Props for the keyboard shortcut text element inside the item, if any.

`isFocused`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether the item is currently focused.

`isFocusVisible`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether the item is keyboard focused.

`isSelected`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether the item is currently selected.

`isPressed`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether the item is currently in a pressed state.

`isDisabled`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether the item is disabled.

`useMenuSection` returns props for a section:

Name

Type

Description

`itemProps`

`[DOMAttributes](https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes)`

Props for the wrapper list item.

`headingProps`

`[DOMAttributes](https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes)`

Props for the heading element, if any.

`groupProps`

`[DOMAttributes](https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes)`

Props for the group element.

State for the trigger is managed by the `[useMenuTriggerState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/menu/src/useMenuTriggerState.ts:useMenuTriggerState)` hook from `@react-stately/menu`. State for the menu itself is managed by the `[useTreeState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/tree/src/useTreeState.ts:useTreeState)` hook from `@react-stately/tree`. These state objects should be passed to the appropriate React Aria hooks.

If a menu, menu item, or group does not have a visible label, an `aria-label` or `aria-labelledby` prop must be passed instead to identify the element to assistive technology.

* * *

A menu consists of several components: a menu button to toggle the menu popup, and the menu itself, which contains items or sections of items. We'll go through each component one by one.

We'll start with the `MenuButton` component, which is what will trigger our menu to appear. This uses the `[useMenuTrigger](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/menu/src/useMenuTrigger.ts:useMenuTrigger)` and `[useMenuTriggerState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/menu/src/useMenuTriggerState.ts:useMenuTriggerState)` hooks. The `Popover` and `Button` components used in this example are independent, and can be shared by many other components. The code is available below, and documentation is available on the corresponding pages.

```
import type {MenuTriggerProps} from 'react-stately';
import {useMenuTrigger} from 'react-aria';
import {Item, useMenuTriggerState} from 'react-stately';

// Reuse the Popover, and Button from your component library. See below for details.
import {Button, Popover} from 'your-component-library';

interface MenuButtonProps<T> extends AriaMenuProps<T>, MenuTriggerProps {
  label?: string;
}

function MenuButton<T extends object>(props: MenuButtonProps<T>) {
  // Create state based on the incoming props
  let state = useMenuTriggerState(props);

  // Get props for the button and menu elements
  let ref = React.useRef(null);
  let { menuTriggerProps, menuProps } = useMenuTrigger<T>({}, state, ref);

  return (
    <>
      <Button
        {...menuTriggerProps}
        buttonRef={ref}
        style={{ height: 30, fontSize: 14 }}
      >
        {props.label}
        <span aria-hidden="true" style={{ paddingLeft: 5 }}>▼</span>
      </Button>
      {state.isOpen &&
        (
          <Popover state={state} triggerRef={ref} placement="bottom start">
            <Menu
              {...props}
              {...menuProps}
            />
          </Popover>
        )}
    </>
  );
}
```

```
import type {MenuTriggerProps} from 'react-stately';
import {useMenuTrigger} from 'react-aria';
import {Item, useMenuTriggerState} from 'react-stately';

// Reuse the Popover, and Button from your component library. See below for details.
import {Button, Popover} from 'your-component-library';

interface MenuButtonProps<T>
  extends AriaMenuProps<T>, MenuTriggerProps {
  label?: string;
}

function MenuButton<T extends object>(
  props: MenuButtonProps<T>
) {
  // Create state based on the incoming props
  let state = useMenuTriggerState(props);

  // Get props for the button and menu elements
  let ref = React.useRef(null);
  let { menuTriggerProps, menuProps } = useMenuTrigger<T>(
    {},
    state,
    ref
  );

  return (
    <>
      <Button
        {...menuTriggerProps}
        buttonRef={ref}
        style={{ height: 30, fontSize: 14 }}
      >
        {props.label}
        <span aria-hidden="true" style={{ paddingLeft: 5 }}>
          ▼
        </span>
      </Button>
      {state.isOpen &&
        (
          <Popover
            state={state}
            triggerRef={ref}
            placement="bottom start"
          >
            <Menu
              {...props}
              {...menuProps}
            />
          </Popover>
        )}
    </>
  );
}
```

```
import type {MenuTriggerProps} from 'react-stately';
import {useMenuTrigger} from 'react-aria';
import {
  Item,
  useMenuTriggerState
} from 'react-stately';

// Reuse the Popover, and Button from your component library. See below for details.
import {
  Button,
  Popover
} from 'your-component-library';

interface MenuButtonProps<
  T
> extends
  AriaMenuProps<T>,
  MenuTriggerProps {
  label?: string;
}

function MenuButton<
  T extends object
>(
  props: MenuButtonProps<
    T
  >
) {
  // Create state based on the incoming props
  let state =
    useMenuTriggerState(
      props
    );

  // Get props for the button and menu elements
  let ref = React.useRef(
    null
  );
  let {
    menuTriggerProps,
    menuProps
  } = useMenuTrigger<T>(
    {},
    state,
    ref
  );

  return (
    <>
      <Button
        {...menuTriggerProps}
        buttonRef={ref}
        style={{
          height: 30,
          fontSize: 14
        }}
      >
        {props.label}
        <span
          aria-hidden="true"
          style={{
            paddingLeft:
              5
          }}
        >
          ▼
        </span>
      </Button>
      {state.isOpen &&
        (
          <Popover
            state={state}
            triggerRef={ref}
            placement="bottom start"
          >
            <Menu
              {...props}
              {...menuProps}
            />
          </Popover>
        )}
    </>
  );
}
```

Next, let's implement the `Menu` component. This will appear inside the `Popover` when the user presses the button. It is built using the `[useMenu](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/menu/src/useMenu.ts:useMenu)` and `[useTreeState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/tree/src/useTreeState.ts:useTreeState)` hooks. For each item in the collection in state, we render either a `MenuItem` or `MenuSection` (defined [below](#sections)) according to the item's `type` property.

```
import type {AriaMenuProps} from 'react-aria';
import {useTreeState} from 'react-stately';
import {useMenu} from 'react-aria';

function Menu<T extends object>(props: AriaMenuProps<T>) {
  // Create menu state based on the incoming props
  let state = useTreeState(props);

  // Get props for the menu element
  let ref = React.useRef(null);
  let { menuProps } = useMenu(props, state, ref);

  return (
    <ul {...menuProps} ref={ref}>
      {[...state.collection].map((item) => (
        item.type === 'section'
          ? <MenuSection key={item.key} section={item} state={state} />
          : <MenuItem key={item.key} item={item} state={state} />
      ))}
    </ul>
  );
}
```

```
import type {AriaMenuProps} from 'react-aria';
import {useTreeState} from 'react-stately';
import {useMenu} from 'react-aria';

function Menu<T extends object>(props: AriaMenuProps<T>) {
  // Create menu state based on the incoming props
  let state = useTreeState(props);

  // Get props for the menu element
  let ref = React.useRef(null);
  let { menuProps } = useMenu(props, state, ref);

  return (
    <ul {...menuProps} ref={ref}>
      {[...state.collection].map((item) => (
        item.type === 'section'
          ? (
            <MenuSection
              key={item.key}
              section={item}
              state={state}
            />
          )
          : (
            <MenuItem
              key={item.key}
              item={item}
              state={state}
            />
          )
      ))}
    </ul>
  );
}
```

```
import type {AriaMenuProps} from 'react-aria';
import {useTreeState} from 'react-stately';
import {useMenu} from 'react-aria';

function Menu<
  T extends object
>(
  props: AriaMenuProps<T>
) {
  // Create menu state based on the incoming props
  let state =
    useTreeState(props);

  // Get props for the menu element
  let ref = React.useRef(
    null
  );
  let { menuProps } =
    useMenu(
      props,
      state,
      ref
    );

  return (
    <ul
      {...menuProps}
      ref={ref}
    >
      {[
        ...state
          .collection
      ].map((item) => (
        item.type ===
            'section'
          ? (
            <MenuSection
              key={item
                .key}
              section={item}
              state={state}
            />
          )
          : (
            <MenuItem
              key={item
                .key}
              item={item}
              state={state}
            />
          )
      ))}
    </ul>
  );
}
```

Now let's implement `MenuItem`. This is built using `[useMenuItem](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/menu/src/useMenuItem.ts:useMenuItem)`, and the `state` object passed via props from `Menu`.

```
import {useMenuItem} from 'react-aria';

function MenuItem({ item, state }) {
  // Get props for the menu item element
  let ref = React.useRef(null);
  let { menuItemProps, isSelected } = useMenuItem(
    { key: item.key },
    state,
    ref
  );

  return (
    <li {...menuItemProps} ref={ref}>
      {item.rendered}
      {isSelected && <span aria-hidden="true">✅</span>}
    </li>
  );
}
```

```
import {useMenuItem} from 'react-aria';

function MenuItem({ item, state }) {
  // Get props for the menu item element
  let ref = React.useRef(null);
  let { menuItemProps, isSelected } = useMenuItem(
    { key: item.key },
    state,
    ref
  );

  return (
    <li {...menuItemProps} ref={ref}>
      {item.rendered}
      {isSelected && <span aria-hidden="true">✅</span>}
    </li>
  );
}
```

```
import {useMenuItem} from 'react-aria';

function MenuItem(
  { item, state }
) {
  // Get props for the menu item element
  let ref = React.useRef(
    null
  );
  let {
    menuItemProps,
    isSelected
  } = useMenuItem(
    { key: item.key },
    state,
    ref
  );

  return (
    <li
      {...menuItemProps}
      ref={ref}
    >
      {item.rendered}
      {isSelected && (
        <span aria-hidden="true">
          ✅
        </span>
      )}
    </li>
  );
}
```

Now we can render a simple menu with actionable items:

```
<MenuButton label="Actions" onAction={alert}>
  <Item key="copy">Copy</Item>
  <Item key="cut">Cut</Item>
  <Item key="paste">Paste</Item>
</MenuButton>
```

```
<MenuButton label="Actions" onAction={alert}>
  <Item key="copy">Copy</Item>
  <Item key="cut">Cut</Item>
  <Item key="paste">Paste</Item>
</MenuButton>
```

```
<MenuButton
  label="Actions"
  onAction={alert}
>
  <Item key="copy">
    Copy
  </Item>
  <Item key="cut">
    Cut
  </Item>
  <Item key="paste">
    Paste
  </Item>
</MenuButton>
```

Show CSS

```
[role=menu] {
  margin: 0;
  padding: 0;
  list-style: none;
  width: 200px;
}

[role=menuitem],
[role=menuitemradio],
[role=menuitemcheckbox] {
  padding: 2px 5px;
  outline: none;
  cursor: default;
  display: flex;
  justify-content: space-between;
  color: black;

  &:focus {
    background: gray;
    color: white;
  }

  &[aria-disabled] {
    color: gray;
  }
}
```

```
[role=menu] {
  margin: 0;
  padding: 0;
  list-style: none;
  width: 200px;
}

[role=menuitem],
[role=menuitemradio],
[role=menuitemcheckbox] {
  padding: 2px 5px;
  outline: none;
  cursor: default;
  display: flex;
  justify-content: space-between;
  color: black;

  &:focus {
    background: gray;
    color: white;
  }

  &[aria-disabled] {
    color: gray;
  }
}
```

```
[role=menu] {
  margin: 0;
  padding: 0;
  list-style: none;
  width: 200px;
}

[role=menuitem],
[role=menuitemradio],
[role=menuitemcheckbox] {
  padding: 2px 5px;
  outline: none;
  cursor: default;
  display: flex;
  justify-content: space-between;
  color: black;

  &:focus {
    background: gray;
    color: white;
  }

  &[aria-disabled] {
    color: gray;
  }
}
```

The `Popover` component is used to contain the menu. It can be shared between many other components, including [ComboBox](https://react-spectrum.adobe.com/react-aria/useComboBox.html), [Select](https://react-spectrum.adobe.com/react-aria/useSelect.html), and others. See [usePopover](https://react-spectrum.adobe.com/react-aria/usePopover.html) for more examples of popovers.

Show code

```
import {DismissButton, Overlay, usePopover} from 'react-aria';
import type {AriaPopoverProps} from 'react-aria';
import type {OverlayTriggerState} from 'react-stately';

interface PopoverProps extends Omit<AriaPopoverProps, 'popoverRef'> {
  children: React.ReactNode;
  state: OverlayTriggerState;
}

function Popover({ children, state, ...props }: PopoverProps) {
  let popoverRef = React.useRef(null);
  let { popoverProps, underlayProps } = usePopover({
    ...props,
    popoverRef
  }, state);

  return (
    <Overlay>
      <div {...underlayProps} style={{ position: 'fixed', inset: 0 }} />
      <div
        {...popoverProps}
        ref={popoverRef}
        style={{
          ...popoverProps.style,
          background: 'lightgray',
          border: '1px solid gray'
        }}
      >
        <DismissButton onDismiss={state.close} />
        {children}
        <DismissButton onDismiss={state.close} />
      </div>
    </Overlay>
  );
}
```

```
import {
  DismissButton,
  Overlay,
  usePopover
} from 'react-aria';
import type {AriaPopoverProps} from 'react-aria';
import type {OverlayTriggerState} from 'react-stately';

interface PopoverProps
  extends Omit<AriaPopoverProps, 'popoverRef'> {
  children: React.ReactNode;
  state: OverlayTriggerState;
}

function Popover(
  { children, state, ...props }: PopoverProps
) {
  let popoverRef = React.useRef(null);
  let { popoverProps, underlayProps } = usePopover({
    ...props,
    popoverRef
  }, state);

  return (
    <Overlay>
      <div
        {...underlayProps}
        style={{ position: 'fixed', inset: 0 }}
      />
      <div
        {...popoverProps}
        ref={popoverRef}
        style={{
          ...popoverProps.style,
          background: 'lightgray',
          border: '1px solid gray'
        }}
      >
        <DismissButton onDismiss={state.close} />
        {children}
        <DismissButton onDismiss={state.close} />
      </div>
    </Overlay>
  );
}
```

```
import {
  DismissButton,
  Overlay,
  usePopover
} from 'react-aria';
import type {AriaPopoverProps} from 'react-aria';
import type {OverlayTriggerState} from 'react-stately';

interface PopoverProps
  extends
    Omit<
      AriaPopoverProps,
      'popoverRef'
    > {
  children:
    React.ReactNode;
  state:
    OverlayTriggerState;
}

function Popover(
  {
    children,
    state,
    ...props
  }: PopoverProps
) {
  let popoverRef = React
    .useRef(null);
  let {
    popoverProps,
    underlayProps
  } = usePopover({
    ...props,
    popoverRef
  }, state);

  return (
    <Overlay>
      <div
        {...underlayProps}
        style={{
          position:
            'fixed',
          inset: 0
        }}
      />
      <div
        {...popoverProps}
        ref={popoverRef}
        style={{
          ...popoverProps
            .style,
          background:
            'lightgray',
          border:
            '1px solid gray'
        }}
      >
        <DismissButton
          onDismiss={state
            .close}
        />
        {children}
        <DismissButton
          onDismiss={state
            .close}
        />
      </div>
    </Overlay>
  );
}
```

The `Button` component is used in the above example to toggle the menu. It is built using the [useButton](https://react-spectrum.adobe.com/react-aria/useButton.html) hook, and can be shared with many other components.

Show code

```
import {useButton} from 'react-aria';

function Button(props) {
  let ref = props.buttonRef;
  let { buttonProps } = useButton(props, ref);
  return (
    <button {...buttonProps} ref={ref} style={props.style}>
      {props.children}
    </button>
  );
}
```

```
import {useButton} from 'react-aria';

function Button(props) {
  let ref = props.buttonRef;
  let { buttonProps } = useButton(props, ref);
  return (
    <button {...buttonProps} ref={ref} style={props.style}>
      {props.children}
    </button>
  );
}
```

```
import {useButton} from 'react-aria';

function Button(props) {
  let ref =
    props.buttonRef;
  let { buttonProps } =
    useButton(
      props,
      ref
    );
  return (
    <button
      {...buttonProps}
      ref={ref}
      style={props.style}
    >
      {props.children}
    </button>
  );
}
```

* * *

[![](https://react-spectrum.adobe.com/tailwind.05c39dc7.png)

Tailwind CSS

An example of styling a Menu with Tailwind.

](https://codesandbox.io/s/awesome-boyd-c0gbv5?file=/src/Menu.tsx)

* * *

`Menu` follows the [Collection Components API](https://react-spectrum.adobe.com/react-stately/collections.html), accepting both static and dynamic collections. The examples above show static collections, which can be used when the full list of options is known ahead of time. Dynamic collections, as shown below, can be used when the options come from an external data source such as an API call, or update over time.

As seen below, an iterable list of options is passed to the ComboBox using the `items` prop. Each item accepts a `key` prop, which is passed to the `onSelectionChange` handler to identify the selected item. Alternatively, if the item objects contain an `id` property, as shown in the example below, then this is used automatically and a `key` prop is not required.

```
function Example() {
  let items = [
    {id: 1, name: 'New'},
    {id: 2, name: 'Open'},
    {id: 3, name: 'Close'},
    {id: 4, name: 'Save'},
    {id: 5, name: 'Duplicate'},
    {id: 6, name: 'Rename'},
    {id: 7, name: 'Move'}
  ];

  return (
    <MenuButton label="Actions" items={items} onAction={alert}>
      {(item) => <Item>{item.name}</Item>}
    </MenuButton>
  );
}
```

```
function Example() {
  let items = [
    { id: 1, name: 'New' },
    { id: 2, name: 'Open' },
    { id: 3, name: 'Close' },
    { id: 4, name: 'Save' },
    { id: 5, name: 'Duplicate' },
    { id: 6, name: 'Rename' },
    { id: 7, name: 'Move' }
  ];

  return (
    <MenuButton
      label="Actions"
      items={items}
      onAction={alert}
    >
      {(item) => <Item>{item.name}</Item>}
    </MenuButton>
  );
}
```

```
function Example() {
  let items = [
    {
      id: 1,
      name: 'New'
    },
    {
      id: 2,
      name: 'Open'
    },
    {
      id: 3,
      name: 'Close'
    },
    {
      id: 4,
      name: 'Save'
    },
    {
      id: 5,
      name: 'Duplicate'
    },
    {
      id: 6,
      name: 'Rename'
    },
    {
      id: 7,
      name: 'Move'
    }
  ];

  return (
    <MenuButton
      label="Actions"
      items={items}
      onAction={alert}
    >
      {(item) => (
        <Item>
          {item.name}
        </Item>
      )}
    </MenuButton>
  );
}
```

* * *

Menu supports multiple selection modes. By default, selection is disabled, however this can be changed using the `selectionMode` prop. Use `defaultSelectedKeys` to provide a default set of selected items (uncontrolled) and `selectedKeys` to set the selected items (controlled). The value of the selected keys must match the `key` prop of the items. See the `react-stately` [Selection docs](https://react-spectrum.adobe.com/react-stately/selection.html#selected-key-data-type) for more details.

```
import type {Selection} from 'react-stately';

function Example() {
  let [selected, setSelected] = React.useState<Selection>(
    new Set(['sidebar', 'console'])
  );

  return (
    <>
      <MenuButton
        label="View"
        selectionMode="multiple"
        selectedKeys={selected}
        onSelectionChange={setSelected}
      >
        <Item key="sidebar">Sidebar</Item>
        <Item key="searchbar">Searchbar</Item>
        <Item key="tools">Tools</Item>
        <Item key="console">Console</Item>
      </MenuButton>
      <p>
        Current selection (controlled):{' '}
        {selected === 'all' ? 'all' : [...selected].join(', ')}
      </p>
    </>
  );
}
```

```
import type {Selection} from 'react-stately';

function Example() {
  let [selected, setSelected] = React.useState<Selection>(
    new Set(['sidebar', 'console'])
  );

  return (
    <>
      <MenuButton
        label="View"
        selectionMode="multiple"
        selectedKeys={selected}
        onSelectionChange={setSelected}
      >
        <Item key="sidebar">Sidebar</Item>
        <Item key="searchbar">Searchbar</Item>
        <Item key="tools">Tools</Item>
        <Item key="console">Console</Item>
      </MenuButton>
      <p>
        Current selection (controlled): {selected === 'all'
          ? 'all'
          : [...selected].join(', ')}
      </p>
    </>
  );
}
```

```
import type {Selection} from 'react-stately';

function Example() {
  let [
    selected,
    setSelected
  ] = React.useState<
    Selection
  >(
    new Set([
      'sidebar',
      'console'
    ])
  );

  return (
    <>
      <MenuButton
        label="View"
        selectionMode="multiple"
        selectedKeys={selected}
        onSelectionChange={setSelected}
      >
        <Item key="sidebar">
          Sidebar
        </Item>
        <Item key="searchbar">
          Searchbar
        </Item>
        <Item key="tools">
          Tools
        </Item>
        <Item key="console">
          Console
        </Item>
      </MenuButton>
      <p>
        Current selection
        (controlled):
        {' '}
        {selected ===
            'all'
          ? 'all'
          : [...selected]
            .join(', ')}
      </p>
    </>
  );
}
```

* * *

Menu supports sections with separators and headings in order to group options. Sections can be used by wrapping groups of Items in a `Section` component. Each `Section` takes a `title` and `key` prop. To implement sections, implement the `ListBoxSection` component referenced above using the `[useMenuSection](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/menu/src/useMenuSection.ts:useMenuSection)` hook. It will include four extra elements: an `<li>` between the sections to represent the separator, an `<li>` to contain the heading `<span>` element, and a `<ul>` to contain the child items. This structure is necessary to ensure HTML semantics are correct.

```
import {useMenuSection, useSeparator} from 'react-aria';

function MenuSection({ section, state }) {
  let { itemProps, headingProps, groupProps } = useMenuSection({
    heading: section.rendered,
    'aria-label': section['aria-label']
  });

  let { separatorProps } = useSeparator({
    elementType: 'li'
  });

  // If the section is not the first, add a separator element.
  // The heading is rendered inside an <li> element, which contains
  // a <ul> with the child items.
  return (
    <>
      {section.key !== state.collection.getFirstKey() &&
        (
          <li
            {...separatorProps}
            style={{
              borderTop: '1px solid gray',
              margin: '2px 5px'
            }}
          />
        )}
      <li {...itemProps}>
        {section.rendered &&
          (
            <span
              {...headingProps}
              style={{
                fontWeight: 'bold',
                fontSize: '1.1em',
                padding: '2px 5px'
              }}
            >
              {section.rendered}
            </span>
          )}
        <ul
          {...groupProps}
          style={{
            padding: 0,
            listStyle: 'none'
          }}
        >
          {[...section.childNodes].map((node) => (
            <MenuItem
              key={node.key}
              item={node}
              state={state}
            />
          ))}
        </ul>
      </li>
    </>
  );
}
```

```
import {useMenuSection, useSeparator} from 'react-aria';

function MenuSection({ section, state }) {
  let { itemProps, headingProps, groupProps } =
    useMenuSection({
      heading: section.rendered,
      'aria-label': section['aria-label']
    });

  let { separatorProps } = useSeparator({
    elementType: 'li'
  });

  // If the section is not the first, add a separator element.
  // The heading is rendered inside an <li> element, which contains
  // a <ul> with the child items.
  return (
    <>
      {section.key !== state.collection.getFirstKey() &&
        (
          <li
            {...separatorProps}
            style={{
              borderTop: '1px solid gray',
              margin: '2px 5px'
            }}
          />
        )}
      <li {...itemProps}>
        {section.rendered &&
          (
            <span
              {...headingProps}
              style={{
                fontWeight: 'bold',
                fontSize: '1.1em',
                padding: '2px 5px'
              }}
            >
              {section.rendered}
            </span>
          )}
        <ul
          {...groupProps}
          style={{
            padding: 0,
            listStyle: 'none'
          }}
        >
          {[...section.childNodes].map((node) => (
            <MenuItem
              key={node.key}
              item={node}
              state={state}
            />
          ))}
        </ul>
      </li>
    </>
  );
}
```

```
import {
  useMenuSection,
  useSeparator
} from 'react-aria';

function MenuSection(
  { section, state }
) {
  let {
    itemProps,
    headingProps,
    groupProps
  } = useMenuSection({
    heading:
      section.rendered,
    'aria-label':
      section[
        'aria-label'
      ]
  });

  let {
    separatorProps
  } = useSeparator({
    elementType: 'li'
  });

  // If the section is not the first, add a separator element.
  // The heading is rendered inside an <li> element, which contains
  // a <ul> with the child items.
  return (
    <>
      {section.key !==
          state
            .collection
            .getFirstKey() &&
        (
          <li
            {...separatorProps}
            style={{
              borderTop:
                '1px solid gray',
              margin:
                '2px 5px'
            }}
          />
        )}
      <li {...itemProps}>
        {section
          .rendered &&
          (
            <span
              {...headingProps}
              style={{
                fontWeight:
                  'bold',
                fontSize:
                  '1.1em',
                padding:
                  '2px 5px'
              }}
            >
              {section
                .rendered}
            </span>
          )}
        <ul
          {...groupProps}
          style={{
            padding: 0,
            listStyle:
              'none'
          }}
        >
          {[
            ...section
              .childNodes
          ].map(
            (node) => (
              <MenuItem
                key={node
                  .key}
                item={node}
                state={state}
              />
            )
          )}
        </ul>
      </li>
    </>
  );
}
```

With this in place, we can now render a static menu with multiple sections:

```
import {Section} from 'react-stately';

<MenuButton label="Actions" onAction={alert}>
  <Section title="Styles">
    <Item key="bold">Bold</Item>
    <Item key="underline">Underline</Item>
  </Section>
  <Section title="Align">
    <Item key="left">Left</Item>
    <Item key="middle">Middle</Item>
    <Item key="right">Right</Item>
  </Section>
</MenuButton>
```

```
import {Section} from 'react-stately';

<MenuButton label="Actions" onAction={alert}>
  <Section title="Styles">
    <Item key="bold">Bold</Item>
    <Item key="underline">Underline</Item>
  </Section>
  <Section title="Align">
    <Item key="left">Left</Item>
    <Item key="middle">Middle</Item>
    <Item key="right">Right</Item>
  </Section>
</MenuButton>
```

```
import {Section} from 'react-stately';

<MenuButton
  label="Actions"
  onAction={alert}
>
  <Section title="Styles">
    <Item key="bold">
      Bold
    </Item>
    <Item key="underline">
      Underline
    </Item>
  </Section>
  <Section title="Align">
    <Item key="left">
      Left
    </Item>
    <Item key="middle">
      Middle
    </Item>
    <Item key="right">
      Right
    </Item>
  </Section>
</MenuButton>
```

The above example shows sections with static items. Sections can also be populated from a hierarchical data structure. Similarly to the props on Menu, `<Section>` takes an array of data using the `items` prop.

```
import type {Selection} from 'react-stately';

function Example() {
  let [selected, setSelected] = React.useState<Selection>(new Set([1,3]));
  let openWindows = [
    {
      name: 'Left Panel',
      id: 'left',
      children: [
        {id: 1, name: 'Final Copy (1)'}
      ]
    },
    {
      name: 'Right Panel',
      id: 'right',
      children: [
        {id: 2, name: 'index.ts'},
        {id: 3, name: 'package.json'},
        {id: 4, name: 'license.txt'}
      ]
    }
  ];

  return (
    <MenuButton
      label="Window"
      items={openWindows}
      selectionMode="multiple"
      selectedKeys={selected}
      onSelectionChange={setSelected}>
      {item => (
        <Section items={item.children} title={item.name}>
          {item => <Item>{item.name}</Item>}
        </Section>
      )}
    </MenuButton>
  );
}
```

```
import type {Selection} from 'react-stately';

function Example() {
  let [selected, setSelected] = React.useState<Selection>(
    new Set([1, 3])
  );
  let openWindows = [
    {
      name: 'Left Panel',
      id: 'left',
      children: [
        { id: 1, name: 'Final Copy (1)' }
      ]
    },
    {
      name: 'Right Panel',
      id: 'right',
      children: [
        { id: 2, name: 'index.ts' },
        { id: 3, name: 'package.json' },
        { id: 4, name: 'license.txt' }
      ]
    }
  ];

  return (
    <MenuButton
      label="Window"
      items={openWindows}
      selectionMode="multiple"
      selectedKeys={selected}
      onSelectionChange={setSelected}
    >
      {(item) => (
        <Section items={item.children} title={item.name}>
          {(item) => <Item>{item.name}</Item>}
        </Section>
      )}
    </MenuButton>
  );
}
```

```
import type {Selection} from 'react-stately';

function Example() {
  let [
    selected,
    setSelected
  ] = React.useState<
    Selection
  >(new Set([1, 3]));
  let openWindows = [
    {
      name: 'Left Panel',
      id: 'left',
      children: [
        {
          id: 1,
          name:
            'Final Copy (1)'
        }
      ]
    },
    {
      name:
        'Right Panel',
      id: 'right',
      children: [
        {
          id: 2,
          name:
            'index.ts'
        },
        {
          id: 3,
          name:
            'package.json'
        },
        {
          id: 4,
          name:
            'license.txt'
        }
      ]
    }
  ];

  return (
    <MenuButton
      label="Window"
      items={openWindows}
      selectionMode="multiple"
      selectedKeys={selected}
      onSelectionChange={setSelected}
    >
      {(item) => (
        <Section
          items={item
            .children}
          title={item
            .name}
        >
          {(item) => (
            <Item>
              {item.name}
            </Item>
          )}
        </Section>
      )}
    </MenuButton>
  );
}
```

Sections without a `title` must provide an `aria-label` for accessibility.

* * *

By default, menu items that only contain text will be labeled by the contents of the item. For items that have more complex content (e.g. icons, multiple lines of text, keyboard shortcuts, etc.), use `labelProps`, `descriptionProps`, and `keyboardShortcutProps` from `[useMenuItem](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/menu/src/useMenuItem.ts:useMenuItem)` as needed to apply to the main text element of the menu item, its description, and keyboard shortcut text. This improves screen reader announcement.

**NOTE: menu items cannot contain interactive content (e.g. buttons, checkboxes, etc.).**

To implement this, we'll update the `MenuItem` component to apply the ARIA properties returned by `[useMenuItem](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/menu/src/useMenuItem.ts:useMenuItem)` to the appropriate elements. In this example, we'll pull them out of `props.children` and use `React.cloneElement` to apply the props, but you may want to use a more robust approach (e.g. context).

```
function MenuItem({item, state}) {
  // Get props for the menu item element and child elements
  let ref = React.useRef(null);
  let {
    menuItemProps,
    labelProps,
    descriptionProps,
    keyboardShortcutProps
  } = useMenuItem({key: item.key}, state, ref);

  // Pull out the three expected children. We will clone them
  // and add the necessary props for accessibility.
  let [title, description, shortcut] = item.rendered;

  return (
    <li {...menuItemProps} ref={ref}>
      <div>
        {React.cloneElement(title, labelProps)}
        {React.cloneElement(description, descriptionProps)}
      </div>
      {React.cloneElement(shortcut, keyboardShortcutProps)}
    </li>
  );
}

<MenuButton label="Actions" onAction={alert}>
  <Item textValue="Copy" key="copy">
    <div><strong>Copy</strong></div>
    <div>Copy the selected text</div>
    <kbd>⌘C</kbd>
  </Item>
  <Item textValue="Cut" key="cut">
    <div><strong>Cut</strong></div>
    <div>Cut the selected text</div>
    <kbd>⌘X</kbd>
  </Item>
  <Item textValue="Paste" key="paste">
    <div><strong>Paste</strong></div>
    <div>Paste the copied text</div>
    <kbd>⌘V</kbd>
  </Item>
</MenuButton>
```

```
function MenuItem({ item, state }) {
  // Get props for the menu item element and child elements
  let ref = React.useRef(null);
  let {
    menuItemProps,
    labelProps,
    descriptionProps,
    keyboardShortcutProps
  } = useMenuItem({ key: item.key }, state, ref);

  // Pull out the three expected children. We will clone them
  // and add the necessary props for accessibility.
  let [title, description, shortcut] = item.rendered;

  return (
    <li {...menuItemProps} ref={ref}>
      <div>
        {React.cloneElement(title, labelProps)}
        {React.cloneElement(description, descriptionProps)}
      </div>
      {React.cloneElement(shortcut, keyboardShortcutProps)}
    </li>
  );
}

<MenuButton label="Actions" onAction={alert}>
  <Item textValue="Copy" key="copy">
    <div>
      <strong>Copy</strong>
    </div>
    <div>Copy the selected text</div>
    <kbd>⌘C</kbd>
  </Item>
  <Item textValue="Cut" key="cut">
    <div>
      <strong>Cut</strong>
    </div>
    <div>Cut the selected text</div>
    <kbd>⌘X</kbd>
  </Item>
  <Item textValue="Paste" key="paste">
    <div>
      <strong>Paste</strong>
    </div>
    <div>Paste the copied text</div>
    <kbd>⌘V</kbd>
  </Item>
</MenuButton>
```

```
function MenuItem(
  { item, state }
) {
  // Get props for the menu item element and child elements
  let ref = React.useRef(
    null
  );
  let {
    menuItemProps,
    labelProps,
    descriptionProps,
    keyboardShortcutProps
  } = useMenuItem(
    { key: item.key },
    state,
    ref
  );

  // Pull out the three expected children. We will clone them
  // and add the necessary props for accessibility.
  let [
    title,
    description,
    shortcut
  ] = item.rendered;

  return (
    <li
      {...menuItemProps}
      ref={ref}
    >
      <div>
        {React
          .cloneElement(
            title,
            labelProps
          )}
        {React
          .cloneElement(
            description,
            descriptionProps
          )}
      </div>
      {React
        .cloneElement(
          shortcut,
          keyboardShortcutProps
        )}
    </li>
  );
}

<MenuButton
  label="Actions"
  onAction={alert}
>
  <Item
    textValue="Copy"
    key="copy"
  >
    <div>
      <strong>
        Copy
      </strong>
    </div>
    <div>
      Copy the selected
      text
    </div>
    <kbd>⌘C</kbd>
  </Item>
  <Item
    textValue="Cut"
    key="cut"
  >
    <div>
      <strong>
        Cut
      </strong>
    </div>
    <div>
      Cut the selected
      text
    </div>
    <kbd>⌘X</kbd>
  </Item>
  <Item
    textValue="Paste"
    key="paste"
  >
    <div>
      <strong>
        Paste
      </strong>
    </div>
    <div>
      Paste the copied
      text
    </div>
    <kbd>⌘V</kbd>
  </Item>
</MenuButton>
```

* * *

`useMenu` supports marking items as disabled using the `disabledKeys` prop. Each key in this list corresponds with the `key` prop passed to the `Item` component, or automatically derived from the values passed to the `items` prop. See [Collections](https://react-spectrum.adobe.com/react-stately/collections.html) for more details.

Disabled items are not focusable or keyboard navigable, and do not trigger `onAction` or `onSelectionChange`. The `isDisabled` property returned by `useMenuItem` can be used to style the item appropriately.

```
<MenuButton label="Actions" onAction={alert} disabledKeys={['paste']}>
  <Item key="copy">Copy</Item>
  <Item key="cut">Cut</Item>
  <Item key="paste">Paste</Item>
</MenuButton>
```

```
<MenuButton
  label="Actions"
  onAction={alert}
  disabledKeys={['paste']}
>
  <Item key="copy">Copy</Item>
  <Item key="cut">Cut</Item>
  <Item key="paste">Paste</Item>
</MenuButton>
```

```
<MenuButton
  label="Actions"
  onAction={alert}
  disabledKeys={[
    'paste'
  ]}
>
  <Item key="copy">
    Copy
  </Item>
  <Item key="cut">
    Cut
  </Item>
  <Item key="paste">
    Paste
  </Item>
</MenuButton>
```

* * *

By default, interacting with an item in a Menu triggers `onAction` and optionally `onSelectionChange` depending on the `selectionMode`. Alternatively, items may be links to another page or website. This can be achieved by passing the `href` prop to the `<Item>` component. Link items in a menu are not selectable.

This example shows how to update the `MenuItem` component with support for rendering an `<a>` element if an `href` prop is passed to the item. Note that you'll also need to render the `Menu` as a `<div>` instead of a `<ul>`, since an `<a>` inside a `<ul>` is not valid HTML.

```
function MenuItem({item, state}) {
  // Get props for the menu item element and child elements
  let ref = React.useRef(null);
  let {menuItemProps} = useMenuItem({key: item.key}, state, ref);
  let ElementType: React.ElementType = item.props.href ? 'a' : 'div';
  return (
    <ElementType {...menuItemProps} ref={ref}>
      {item.rendered}
    </ElementType>
  );
}

<MenuButton label="Links">
  <Item href="https://adobe.com/" target="_blank">Adobe</Item>
  <Item href="https://apple.com/" target="_blank">Apple</Item>
  <Item href="https://google.com/" target="_blank">Google</Item>
  <Item href="https://microsoft.com/" target="_blank">Microsoft</Item>
</MenuButton>
```

```
function MenuItem({ item, state }) {
  // Get props for the menu item element and child elements
  let ref = React.useRef(null);
  let { menuItemProps } = useMenuItem(
    { key: item.key },
    state,
    ref
  );
  let ElementType: React.ElementType = item.props.href
    ? 'a'
    : 'div';
  return (
    <ElementType {...menuItemProps} ref={ref}>
      {item.rendered}
    </ElementType>
  );
}

<MenuButton label="Links">
  <Item href="https://adobe.com/" target="_blank">
    Adobe
  </Item>
  <Item href="https://apple.com/" target="_blank">
    Apple
  </Item>
  <Item href="https://google.com/" target="_blank">
    Google
  </Item>
  <Item href="https://microsoft.com/" target="_blank">
    Microsoft
  </Item>
</MenuButton>
```

```
function MenuItem(
  { item, state }
) {
  // Get props for the menu item element and child elements
  let ref = React.useRef(
    null
  );
  let { menuItemProps } =
    useMenuItem(
      { key: item.key },
      state,
      ref
    );
  let ElementType:
    React.ElementType =
      item.props.href
        ? 'a'
        : 'div';
  return (
    <ElementType
      {...menuItemProps}
      ref={ref}
    >
      {item.rendered}
    </ElementType>
  );
}

<MenuButton label="Links">
  <Item
    href="https://adobe.com/"
    target="_blank"
  >
    Adobe
  </Item>
  <Item
    href="https://apple.com/"
    target="_blank"
  >
    Apple
  </Item>
  <Item
    href="https://google.com/"
    target="_blank"
  >
    Google
  </Item>
  <Item
    href="https://microsoft.com/"
    target="_blank"
  >
    Microsoft
  </Item>
</MenuButton>
```

The `<Item>` component works with frameworks and client side routers like [Next.js](https://nextjs.org/) and [React Router](https://reactrouter.com/en/main). As with other React Aria components that support links, this works via the `[RouterProvider](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/utils/src/openLink.tsx:RouterProvider)` component at the root of your app. See the [client side routing guide](https://react-spectrum.adobe.com/react-aria/routing.html) to learn how to set this up.

* * *

The open state of the menu can be controlled via the `defaultOpen` and `isOpen` props

```
function Example() {
  let [open, setOpen] = React.useState(false);

  return (
    <>
      <p>Menu is {open ? 'open' : 'closed'}</p>
      <MenuButton
        label="View"
        isOpen={open}
        onOpenChange={setOpen}>
        <Item key="side">Side bar</Item>
        <Item key="options">Page options</Item>
        <Item key="edit">Edit Panel</Item>
      </MenuButton>
    </>
  );
}
```

```
function Example() {
  let [open, setOpen] = React.useState(false);

  return (
    <>
      <p>Menu is {open ? 'open' : 'closed'}</p>
      <MenuButton
        label="View"
        isOpen={open}
        onOpenChange={setOpen}>
        <Item key="side">Side bar</Item>
        <Item key="options">Page options</Item>
        <Item key="edit">Edit Panel</Item>
      </MenuButton>
    </>
  );
}
```

```
function Example() {
  let [open, setOpen] =
    React.useState(
      false
    );

  return (
    <>
      <p>
        Menu is {open
          ? 'open'
          : 'closed'}
      </p>
      <MenuButton
        label="View"
        isOpen={open}
        onOpenChange={setOpen}
      >
        <Item key="side">
          Side bar
        </Item>
        <Item key="options">
          Page options
        </Item>
        <Item key="edit">
          Edit Panel
        </Item>
      </MenuButton>
    </>
  );
}
```

* * *

`useMenu` handles some aspects of internationalization automatically. For example, type to select is implemented with an [Intl.Collator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Collator) for internationalized string matching. You are responsible for localizing all menu item labels for content that is passed into the menu.

In right-to-left languages, the menu button should be mirrored. The arrow should be on the left, and the label should be on the right. In addition, the content of menu items should flip. Ensure that your CSS accounts for this.