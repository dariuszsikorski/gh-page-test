# Menu

**Source**: [https://react-spectrum.adobe.com/react-aria/Menu.html](https://react-spectrum.adobe.com/react-aria/Menu.html)

> Documentation for Menu in the React Aria package.

---

A menu displays a list of actions or options that a user can choose.

* * *

```
import {Button, Menu, MenuItem, MenuTrigger, Popover} from 'react-aria-components';
import {Menu as MenuIcon} from 'lucide-react';

<MenuTrigger>
  <Button aria-label="Menu">
    <MenuIcon size={18} />
  </Button>
  <Popover>
    <Menu>
      <MenuItem onAction={() => alert('open')}>Open</MenuItem>
      <MenuItem onAction={() => alert('rename')}>Rename…</MenuItem>
      <MenuItem onAction={() => alert('duplicate')}>Duplicate</MenuItem>
      <MenuItem onAction={() => alert('share')}>Share…</MenuItem>
      <MenuItem onAction={() => alert('delete')}>Delete…</MenuItem>
    </Menu>
  </Popover>
</MenuTrigger>
```

```
import {
  Button,
  Menu,
  MenuItem,
  MenuTrigger,
  Popover
} from 'react-aria-components';
import {Menu as MenuIcon} from 'lucide-react';

<MenuTrigger>
  <Button aria-label="Menu">
    <MenuIcon size={18} />
  </Button>
  <Popover>
    <Menu>
      <MenuItem onAction={() => alert('open')}>
        Open
      </MenuItem>
      <MenuItem onAction={() => alert('rename')}>
        Rename…
      </MenuItem>
      <MenuItem onAction={() => alert('duplicate')}>
        Duplicate
      </MenuItem>
      <MenuItem onAction={() => alert('share')}>
        Share…
      </MenuItem>
      <MenuItem onAction={() => alert('delete')}>
        Delete…
      </MenuItem>
    </Menu>
  </Popover>
</MenuTrigger>
```

```
import {
  Button,
  Menu,
  MenuItem,
  MenuTrigger,
  Popover
} from 'react-aria-components';
import {Menu as MenuIcon} from 'lucide-react';

<MenuTrigger>
  <Button aria-label="Menu">
    <MenuIcon
      size={18}
    />
  </Button>
  <Popover>
    <Menu>
      <MenuItem
        onAction={() =>
          alert(
            'open'
          )}
      >
        Open
      </MenuItem>
      <MenuItem
        onAction={() =>
          alert(
            'rename'
          )}
      >
        Rename…
      </MenuItem>
      <MenuItem
        onAction={() =>
          alert(
            'duplicate'
          )}
      >
        Duplicate
      </MenuItem>
      <MenuItem
        onAction={() =>
          alert(
            'share'
          )}
      >
        Share…
      </MenuItem>
      <MenuItem
        onAction={() =>
          alert(
            'delete'
          )}
      >
        Delete…
      </MenuItem>
    </Menu>
  </Popover>
</MenuTrigger>
```

Show CSS

```
@import "@react-aria/example-theme";

.react-aria-Menu {
  max-height: inherit;
  box-sizing: border-box;
  overflow: auto;
  padding: 2px;
  min-width: 150px;
  box-sizing: border-box;
  outline: none;
}

.react-aria-MenuItem {
  margin: 2px;
  padding: 0.286rem 0.571rem;
  border-radius: 6px;
  outline: none;
  cursor: default;
  color: var(--text-color);
  font-size: 1.072rem;
  position: relative;
  display: grid;
  grid-template-areas: "label kbd"
                      "desc  kbd";
  align-items: center;
  column-gap: 20px;
  forced-color-adjust: none;

  &[data-focused] {
    background: var(--highlight-background);
    color: var(--highlight-foreground);
  }
}
```

```
@import "@react-aria/example-theme";

.react-aria-Menu {
  max-height: inherit;
  box-sizing: border-box;
  overflow: auto;
  padding: 2px;
  min-width: 150px;
  box-sizing: border-box;
  outline: none;
}

.react-aria-MenuItem {
  margin: 2px;
  padding: 0.286rem 0.571rem;
  border-radius: 6px;
  outline: none;
  cursor: default;
  color: var(--text-color);
  font-size: 1.072rem;
  position: relative;
  display: grid;
  grid-template-areas: "label kbd"
                      "desc  kbd";
  align-items: center;
  column-gap: 20px;
  forced-color-adjust: none;

  &[data-focused] {
    background: var(--highlight-background);
    color: var(--highlight-foreground);
  }
}
```

```
@import "@react-aria/example-theme";

.react-aria-Menu {
  max-height: inherit;
  box-sizing: border-box;
  overflow: auto;
  padding: 2px;
  min-width: 150px;
  box-sizing: border-box;
  outline: none;
}

.react-aria-MenuItem {
  margin: 2px;
  padding: 0.286rem 0.571rem;
  border-radius: 6px;
  outline: none;
  cursor: default;
  color: var(--text-color);
  font-size: 1.072rem;
  position: relative;
  display: grid;
  grid-template-areas: "label kbd"
                      "desc  kbd";
  align-items: center;
  column-gap: 20px;
  forced-color-adjust: none;

  &[data-focused] {
    background: var(--highlight-background);
    color: var(--highlight-foreground);
  }
}
```

* * *

There is no native element to implement a menu in HTML that is widely supported. `MenuTrigger` and `Menu` help achieve accessible menu components that can be styled as needed.

-   **Keyboard navigation** – Menu items can be navigated using the arrow keys, along with page up/down, home/end, etc. Typeahead, auto scrolling, and disabled items are supported as well.
-   **Item selection** – Single or multiple selection can be optionally enabled.
-   **Trigger interactions** – Menus can be triggered by pressing with a mouse or touch, or optionally, with a long press interaction. The arrow keys also open the menu with a keyboard, automatically focusing the first or last item accordingly.
-   **Accessible** – Follows the [ARIA menu pattern](https://www.w3.org/WAI/ARIA/apg/patterns/menu/), with support for items and sections, and slots for label, description, and keyboard shortcut elements within each item for improved screen reader announcement.

* * *

Shows a menu component with labels pointing to its parts, including the trigger, menu, group, section heading, menu item, menu item label, menu item description, and menu item keyboard shortcut elements.Option 1Option 2Menu itemMenu item keyboard shortcutMenu item labelDescriptionDescriptionOption 3DescriptionMenu item descriptionMenuSECTION TITLESection headerSection⌘KMenu item descriptionPopoverMore ActionsMenu Trigger

A menu trigger consists of a button or other trigger element combined with a menu displayed in a popover, with a list of menu items or sections inside. Users can click, touch, or use the keyboard on the button to open the menu.

```
import {Button, Header, Keyboard, Menu, MenuItem, MenuSection, MenuTrigger, Popover, SelectionIndicator, Separator, Text} from 'react-aria-components';

<MenuTrigger>
  <Button />
  <Popover>
    <Menu>
      <MenuItem>
        <Text slot="label" />
        <Text slot="description" />
        <Keyboard />
        <SelectionIndicator />
      </MenuItem>
      <Separator />
      <MenuSection>
        <Header />
        <MenuItem />
      </MenuSection>
    </Menu>
  </Popover>
</MenuTrigger>
```

```
import {
  Button,
  Header,
  Keyboard,
  Menu,
  MenuItem,
  MenuSection,
  MenuTrigger,
  Popover,
  SelectionIndicator,
  Separator,
  Text
} from 'react-aria-components';

<MenuTrigger>
  <Button />
  <Popover>
    <Menu>
      <MenuItem>
        <Text slot="label" />
        <Text slot="description" />
        <Keyboard />
        <SelectionIndicator />
      </MenuItem>
      <Separator />
      <MenuSection>
        <Header />
        <MenuItem />
      </MenuSection>
    </Menu>
  </Popover>
</MenuTrigger>
```

```
import {
  Button,
  Header,
  Keyboard,
  Menu,
  MenuItem,
  MenuSection,
  MenuTrigger,
  Popover,
  SelectionIndicator,
  Separator,
  Text
} from 'react-aria-components';

<MenuTrigger>
  <Button />
  <Popover>
    <Menu>
      <MenuItem>
        <Text slot="label" />
        <Text slot="description" />
        <Keyboard />
        <SelectionIndicator />
      </MenuItem>
      <Separator />
      <MenuSection>
        <Header />
        <MenuItem />
      </MenuSection>
    </Menu>
  </Popover>
</MenuTrigger>
```

`Menu` makes use of the following concepts:

[

Collections

Defining collections of items, async loading, and updating items over time.

](https://react-spectrum.adobe.com/react-aria/collections.html)[

Selection

Interactions and data structures to represent selection.

](https://react-spectrum.adobe.com/react-aria/selection.html)

A `Menu` uses the following components, which may also be used standalone or reused in other components.

[

Button

A button allows a user to perform an action.

](https://react-spectrum.adobe.com/react-aria/Button.html)[

Popover

A popover displays content in context with a trigger element.

](https://react-spectrum.adobe.com/react-aria/Popover.html)

* * *

[![](https://react-spectrum.adobe.com/account-menu.1d025b67.png)

Account Menu

A Menu with an interactive header, built with a Popover.

](https://react-spectrum.adobe.com/react-aria/examples/account-menu.html)[![](https://react-spectrum.adobe.com/action-menu.a8864d27.png)

Action Menu

An animated menu of actions, styled with Tailwind CSS.

](https://react-spectrum.adobe.com/react-aria/examples/action-menu.html)[![](https://react-spectrum.adobe.com/command-palette.72c107a1.png)

Command Palette

A command palette with actions, styled with Tailwind CSS.

](https://react-spectrum.adobe.com/react-aria/examples/command-palette.html)

* * *

To help kick-start your project, we offer starter kits that include example implementations of all React Aria components with various styling solutions. All components are fully styled, including support for dark mode, high contrast mode, and all UI states. Each starter comes with a pre-configured [Storybook](https://storybook.js.org/) that you can experiment with, or use as a starting point for your own component library.

* * *

If you will use a Menu in multiple places in your app, you can wrap all of the pieces into a reusable component. This way, the DOM structure, styling code, and other logic are defined in a single place and reused everywhere to ensure consistency.

This example wraps `MenuTrigger` and all of its children together into a single component which accepts a `label` prop and `children`, which are passed through to the right places. The `MenuItem` component is also wrapped to apply class names based on the current state, as described in the [styling](#styling) section.

```
import type {MenuItemProps, MenuProps, MenuTriggerProps} from 'react-aria-components';
import {ChevronRight} from 'lucide-react';

interface MyMenuButtonProps<T>
  extends MenuProps<T>, Omit<MenuTriggerProps, 'children'> {
  label?: string;
}

function MyMenuButton<T extends object>(
  { label, children, ...props }: MyMenuButtonProps<T>
) {
  return (
    <MenuTrigger {...props}>
      <Button>{label}</Button>
      <Popover>
        <Menu {...props}>
          {children}
        </Menu>
      </Popover>
    </MenuTrigger>
  );
}

export function MyItem(
  props: Omit<MenuItemProps, 'children'> & { children?: React.ReactNode }
) {
  let textValue = props.textValue ||
    (typeof props.children === 'string' ? props.children : undefined);
  return (
    <MenuItem
      {...props}
      textValue={textValue}
      className={({ isFocused, isSelected, isOpen }) =>
        `my-item ${isFocused ? 'focused' : ''} ${isOpen ? 'open' : ''}`}
    >
      {({ hasSubmenu }) => (
        <>
          {props.children}
          {hasSubmenu && <ChevronRight size={18} className="chevron" />}
        </>
      )}
    </MenuItem>
  );
}

<MyMenuButton label="Edit">
  <MyItem>Cut</MyItem>
  <MyItem>Copy</MyItem>
  <MyItem>Paste</MyItem>
</MyMenuButton>
```

```
import type {
  MenuItemProps,
  MenuProps,
  MenuTriggerProps
} from 'react-aria-components';
import {ChevronRight} from 'lucide-react';

interface MyMenuButtonProps<T>
  extends MenuProps<T>, Omit<MenuTriggerProps, 'children'> {
  label?: string;
}

function MyMenuButton<T extends object>(
  { label, children, ...props }: MyMenuButtonProps<T>
) {
  return (
    <MenuTrigger {...props}>
      <Button>{label}</Button>
      <Popover>
        <Menu {...props}>
          {children}
        </Menu>
      </Popover>
    </MenuTrigger>
  );
}

export function MyItem(
  props: Omit<MenuItemProps, 'children'> & {
    children?: React.ReactNode;
  }
) {
  let textValue = props.textValue ||
    (typeof props.children === 'string'
      ? props.children
      : undefined);
  return (
    <MenuItem
      {...props}
      textValue={textValue}
      className={({ isFocused, isSelected, isOpen }) =>
        `my-item ${isFocused ? 'focused' : ''} ${
          isOpen ? 'open' : ''
        }`}
    >
      {({ hasSubmenu }) => (
        <>
          {props.children}
          {hasSubmenu && (
            <ChevronRight size={18} className="chevron" />
          )}
        </>
      )}
    </MenuItem>
  );
}

<MyMenuButton label="Edit">
  <MyItem>Cut</MyItem>
  <MyItem>Copy</MyItem>
  <MyItem>Paste</MyItem>
</MyMenuButton>
```

```
import type {
  MenuItemProps,
  MenuProps,
  MenuTriggerProps
} from 'react-aria-components';
import {ChevronRight} from 'lucide-react';

interface MyMenuButtonProps<
  T
> extends
  MenuProps<T>,
  Omit<
    MenuTriggerProps,
    'children'
  > {
  label?: string;
}

function MyMenuButton<
  T extends object
>(
  {
    label,
    children,
    ...props
  }: MyMenuButtonProps<T>
) {
  return (
    <MenuTrigger
      {...props}
    >
      <Button>
        {label}
      </Button>
      <Popover>
        <Menu {...props}>
          {children}
        </Menu>
      </Popover>
    </MenuTrigger>
  );
}

export function MyItem(
  props:
    & Omit<
      MenuItemProps,
      'children'
    >
    & {
      children?:
        React.ReactNode;
    }
) {
  let textValue =
    props.textValue ||
    (typeof props
        .children ===
        'string'
      ? props.children
      : undefined);
  return (
    <MenuItem
      {...props}
      textValue={textValue}
      className={(
        {
          isFocused,
          isSelected,
          isOpen
        }
      ) =>
        `my-item ${
          isFocused
            ? 'focused'
            : ''
        } ${
          isOpen
            ? 'open'
            : ''
        }`}
    >
      {(
        { hasSubmenu }
      ) => (
        <>
          {props
            .children}
          {hasSubmenu &&
            (
              <ChevronRight
                size={18}
                className="chevron"
              />
            )}
        </>
      )}
    </MenuItem>
  );
}

<MyMenuButton label="Edit">
  <MyItem>Cut</MyItem>
  <MyItem>Copy</MyItem>
  <MyItem>
    Paste
  </MyItem>
</MyMenuButton>
```

Show CSS

```
.my-item {
  margin: 2px;
  padding: 0.286rem 0.571rem;
  border-radius: 6px;
  outline: none;
  cursor: default;
  color: var(--text-color);
  font-size: 1.072rem;
  position: relative;

  &.focused {
    background: #e70073;
    color: white;
  }
  &.open:not(.focused) {
    background: rgba(192, 192, 192, 0.3);
    color: var(--text-color);
  }
  .chevron {
    fill: none;
    stroke: currentColor;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 2;
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
  }
}

@media (forced-colors: active) {
  .my-item.focused {
    forced-color-adjust: none;
    background: Highlight;
    color: HighlightText;
  }
}
```

```
.my-item {
  margin: 2px;
  padding: 0.286rem 0.571rem;
  border-radius: 6px;
  outline: none;
  cursor: default;
  color: var(--text-color);
  font-size: 1.072rem;
  position: relative;

  &.focused {
    background: #e70073;
    color: white;
  }
  &.open:not(.focused) {
    background: rgba(192, 192, 192, 0.3);
    color: var(--text-color);
  }
  .chevron {
    fill: none;
    stroke: currentColor;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 2;
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
  }
}

@media (forced-colors: active) {
  .my-item.focused {
    forced-color-adjust: none;
    background: Highlight;
    color: HighlightText;
  }
}
```

```
.my-item {
  margin: 2px;
  padding: 0.286rem 0.571rem;
  border-radius: 6px;
  outline: none;
  cursor: default;
  color: var(--text-color);
  font-size: 1.072rem;
  position: relative;

  &.focused {
    background: #e70073;
    color: white;
  }
  &.open:not(.focused) {
    background: rgba(192, 192, 192, 0.3);
    color: var(--text-color);
  }
  .chevron {
    fill: none;
    stroke: currentColor;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 2;
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
  }
}

@media (forced-colors: active) {
  .my-item.focused {
    forced-color-adjust: none;
    background: Highlight;
    color: HighlightText;
  }
}
```

## Content[#](#content)

* * *

`Menu` follows the [Collection Components API](https://react-spectrum.adobe.com/react-aria/collections.html), accepting both static and dynamic collections. The examples above show static collections, which can be used when the full list of options is known ahead of time. Dynamic collections, as shown below, can be used when the options come from an external data source such as an API call, or update over time.

As seen below, an iterable list of options is passed to the Menu using the `items` prop. Each item accepts an `id` prop, which is passed to the `onAction` prop on the `Menu` to identify the selected item. Alternatively, if the item objects contain an `id` property, as shown in the example below, then this is used automatically and an `id` prop is not required.

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
    <MyMenuButton label="Actions" items={items} onAction={id => alert(id)}>
      {(item) => <MenuItem>{item.name}</MenuItem>}
    </MyMenuButton>
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
    <MyMenuButton
      label="Actions"
      items={items}
      onAction={(id) => alert(id)}
    >
      {(item) => <MenuItem>{item.name}</MenuItem>}
    </MyMenuButton>
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
    <MyMenuButton
      label="Actions"
      items={items}
      onAction={(id) =>
        alert(id)}
    >
      {(item) => (
        <MenuItem>
          {item.name}
        </MenuItem>
      )}
    </MyMenuButton>
  );
}
```

* * *

Menu supports multiple selection modes. By default, selection is disabled, however this can be changed using the `selectionMode` prop. Use `defaultSelectedKeys` to provide a default set of selected items (uncontrolled) and `selectedKeys` to set the selected items (controlled). The value of the selected keys must match the `id` prop of the items.

```
import type {Selection} from 'react-aria-components';

function Example() {
  let [selected, setSelected] = React.useState<Selection>(new Set(['center']));

  return (
    <>
      <MyMenuButton
        label="Align"
        selectionMode="single"
        selectedKeys={selected}
        onSelectionChange={setSelected}
      >
        <MenuItem id="left">Left</MenuItem>
        <MenuItem id="center">Center</MenuItem>
        <MenuItem id="right">Right</MenuItem>
      </MyMenuButton>
      <p>Current selection (controlled): {[...selected].join(', ')}</p>
    </>
  );
}
```

```
import type {Selection} from 'react-aria-components';

function Example() {
  let [selected, setSelected] = React.useState<Selection>(
    new Set(['center'])
  );

  return (
    <>
      <MyMenuButton
        label="Align"
        selectionMode="single"
        selectedKeys={selected}
        onSelectionChange={setSelected}
      >
        <MenuItem id="left">Left</MenuItem>
        <MenuItem id="center">Center</MenuItem>
        <MenuItem id="right">Right</MenuItem>
      </MyMenuButton>
      <p>
        Current selection (controlled):{' '}
        {[...selected].join(', ')}
      </p>
    </>
  );
}
```

```
import type {Selection} from 'react-aria-components';

function Example() {
  let [
    selected,
    setSelected
  ] = React.useState<
    Selection
  >(new Set(['center']));

  return (
    <>
      <MyMenuButton
        label="Align"
        selectionMode="single"
        selectedKeys={selected}
        onSelectionChange={setSelected}
      >
        <MenuItem id="left">
          Left
        </MenuItem>
        <MenuItem id="center">
          Center
        </MenuItem>
        <MenuItem id="right">
          Right
        </MenuItem>
      </MyMenuButton>
      <p>
        Current selection
        (controlled):
        {' '}
        {[...selected]
          .join(', ')}
      </p>
    </>
  );
}
```

Show CSS

```
.react-aria-MenuItem {
  &[data-selection-mode] {
    padding-left: 24px;

    &::before {
      position: absolute;
      left: 4px;
      font-weight: 600;
    }

    &[data-selection-mode=multiple][data-selected]::before {
      content: '✓';
      content: '✓' / '';
      alt: ' ';
      position: absolute;
      left: 4px;
      font-weight: 600;
    }

    &[data-selection-mode=single][data-selected]::before {
      content: '●';
      content: '●' / '';
      transform: scale(0.7)
    }
  }
}
```

```
.react-aria-MenuItem {
  &[data-selection-mode] {
    padding-left: 24px;

    &::before {
      position: absolute;
      left: 4px;
      font-weight: 600;
    }

    &[data-selection-mode=multiple][data-selected]::before {
      content: '✓';
      content: '✓' / '';
      alt: ' ';
      position: absolute;
      left: 4px;
      font-weight: 600;
    }

    &[data-selection-mode=single][data-selected]::before {
      content: '●';
      content: '●' / '';
      transform: scale(0.7)
    }
  }
}
```

```
.react-aria-MenuItem {
  &[data-selection-mode] {
    padding-left: 24px;

    &::before {
      position: absolute;
      left: 4px;
      font-weight: 600;
    }

    &[data-selection-mode=multiple][data-selected]::before {
      content: '✓';
      content: '✓' / '';
      alt: ' ';
      position: absolute;
      left: 4px;
      font-weight: 600;
    }

    &[data-selection-mode=single][data-selected]::before {
      content: '●';
      content: '●' / '';
      transform: scale(0.7)
    }
  }
}
```

```
import type {Selection} from 'react-aria-components';

function Example() {
  let [selected, setSelected] = React.useState<Selection>(
    new Set(['sidebar', 'console'])
  );

  return (
    <>
      <MyMenuButton
        label="View"
        selectionMode="multiple"
        selectedKeys={selected}
        onSelectionChange={setSelected}
      >
        <MenuItem id="sidebar">Sidebar</MenuItem>
        <MenuItem id="searchbar">Searchbar</MenuItem>
        <MenuItem id="tools">Tools</MenuItem>
        <MenuItem id="console">Console</MenuItem>
      </MyMenuButton>
      <p>
        Current selection (controlled):{' '}
        {selected === 'all' ? 'all' : [...selected].join(', ')}
      </p>
    </>
  );
}
```

```
import type {Selection} from 'react-aria-components';

function Example() {
  let [selected, setSelected] = React.useState<Selection>(
    new Set(['sidebar', 'console'])
  );

  return (
    <>
      <MyMenuButton
        label="View"
        selectionMode="multiple"
        selectedKeys={selected}
        onSelectionChange={setSelected}
      >
        <MenuItem id="sidebar">Sidebar</MenuItem>
        <MenuItem id="searchbar">Searchbar</MenuItem>
        <MenuItem id="tools">Tools</MenuItem>
        <MenuItem id="console">Console</MenuItem>
      </MyMenuButton>
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
import type {Selection} from 'react-aria-components';

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
      <MyMenuButton
        label="View"
        selectionMode="multiple"
        selectedKeys={selected}
        onSelectionChange={setSelected}
      >
        <MenuItem id="sidebar">
          Sidebar
        </MenuItem>
        <MenuItem id="searchbar">
          Searchbar
        </MenuItem>
        <MenuItem id="tools">
          Tools
        </MenuItem>
        <MenuItem id="console">
          Console
        </MenuItem>
      </MyMenuButton>
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

By default, interacting with an item in a Menu triggers `onAction` and optionally `onSelectionChange` depending on the `selectionMode`. Alternatively, items may be links to another page or website. This can be achieved by passing the `href` prop to the `<MenuItem>` component. Link items in a menu are not selectable.

```
<MyMenuButton label="Links">
  <MenuItem href="https://adobe.com/" target="_blank">Adobe</MenuItem>
  <MenuItem href="https://apple.com/" target="_blank">Apple</MenuItem>
  <MenuItem href="https://google.com/" target="_blank">Google</MenuItem>
  <MenuItem href="https://microsoft.com/" target="_blank">Microsoft</MenuItem>
</MyMenuButton>
```

```
<MyMenuButton label="Links">
  <MenuItem href="https://adobe.com/" target="_blank">
    Adobe
  </MenuItem>
  <MenuItem href="https://apple.com/" target="_blank">
    Apple
  </MenuItem>
  <MenuItem href="https://google.com/" target="_blank">
    Google
  </MenuItem>
  <MenuItem href="https://microsoft.com/" target="_blank">
    Microsoft
  </MenuItem>
</MyMenuButton>
```

```
<MyMenuButton label="Links">
  <MenuItem
    href="https://adobe.com/"
    target="_blank"
  >
    Adobe
  </MenuItem>
  <MenuItem
    href="https://apple.com/"
    target="_blank"
  >
    Apple
  </MenuItem>
  <MenuItem
    href="https://google.com/"
    target="_blank"
  >
    Google
  </MenuItem>
  <MenuItem
    href="https://microsoft.com/"
    target="_blank"
  >
    Microsoft
  </MenuItem>
</MyMenuButton>
```

The `<MenuItem>` component works with frameworks and client side routers like [Next.js](https://nextjs.org/) and [React Router](https://reactrouter.com/en/main). As with other React Aria components that support links, this works via the `[RouterProvider](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/utils/src/openLink.tsx:RouterProvider)` component at the root of your app. See the [client side routing guide](https://react-spectrum.adobe.com/react-aria/routing.html) to learn how to set this up.

* * *

Menu supports sections with headings in order to group items. Sections can be used by wrapping groups of MenuItems in a `MenuSection` component. A `<Header>` element may also be included to label the section.

```
import {MenuSection, Header} from 'react-aria-components';

<MyMenuButton label="Actions">
  <MenuSection>
    <Header>Styles</Header>
    <MenuItem>Bold</MenuItem>
    <MenuItem>Underline</MenuItem>
  </MenuSection>
  <MenuSection>
    <Header>Align</Header>
    <MenuItem>Left</MenuItem>
    <MenuItem>Middle</MenuItem>
    <MenuItem>Right</MenuItem>
  </MenuSection>
</MyMenuButton>
```

```
import {MenuSection, Header} from 'react-aria-components';

<MyMenuButton label="Actions">
  <MenuSection>
    <Header>Styles</Header>
    <MenuItem>Bold</MenuItem>
    <MenuItem>Underline</MenuItem>
  </MenuSection>
  <MenuSection>
    <Header>Align</Header>
    <MenuItem>Left</MenuItem>
    <MenuItem>Middle</MenuItem>
    <MenuItem>Right</MenuItem>
  </MenuSection>
</MyMenuButton>
```

```
import {
  Header,
  MenuSection
} from 'react-aria-components';

<MyMenuButton label="Actions">
  <MenuSection>
    <Header>
      Styles
    </Header>
    <MenuItem>
      Bold
    </MenuItem>
    <MenuItem>
      Underline
    </MenuItem>
  </MenuSection>
  <MenuSection>
    <Header>
      Align
    </Header>
    <MenuItem>
      Left
    </MenuItem>
    <MenuItem>
      Middle
    </MenuItem>
    <MenuItem>
      Right
    </MenuItem>
  </MenuSection>
</MyMenuButton>
```

Show CSS

```
.react-aria-Menu {
  .react-aria-MenuSection:not(:first-child) {
    margin-top: 12px;
  }

  .react-aria-Header {
    font-size: 1.143rem;
    font-weight: bold;
    padding: 0 0.714rem;
  }
}
```

```
.react-aria-Menu {
  .react-aria-MenuSection:not(:first-child) {
    margin-top: 12px;
  }

  .react-aria-Header {
    font-size: 1.143rem;
    font-weight: bold;
    padding: 0 0.714rem;
  }
}
```

```
.react-aria-Menu {
  .react-aria-MenuSection:not(:first-child) {
    margin-top: 12px;
  }

  .react-aria-Header {
    font-size: 1.143rem;
    font-weight: bold;
    padding: 0 0.714rem;
  }
}
```

The above example shows sections with static items. Sections can also be populated from a hierarchical data structure. Similarly to the props on Menu, `<MenuSection>` takes an array of data using the `items` prop. If the section also has a header, the `[Collection](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/collections/src/CollectionBuilder.tsx:Collection)` component can be used to render the child items.

```
import type {Selection} from 'react-aria-components';
import {Collection} from 'react-aria-components';

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
    <MyMenuButton
      label="Window"
      items={openWindows}
      selectionMode="multiple"
      selectedKeys={selected}
      onSelectionChange={setSelected}>
      {section => (
        <MenuSection>
          <Header>{section.name}</Header>
          <Collection items={section.children}>
            {item => <MenuItem>{item.name}</MenuItem>}
          </Collection>
        </MenuSection>
      )}
    </MyMenuButton>
  );
}
```

```
import type {Selection} from 'react-aria-components';
import {Collection} from 'react-aria-components';

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
    <MyMenuButton
      label="Window"
      items={openWindows}
      selectionMode="multiple"
      selectedKeys={selected}
      onSelectionChange={setSelected}
    >
      {(section) => (
        <MenuSection>
          <Header>{section.name}</Header>
          <Collection items={section.children}>
            {(item) => <MenuItem>{item.name}</MenuItem>}
          </Collection>
        </MenuSection>
      )}
    </MyMenuButton>
  );
}
```

```
import type {Selection} from 'react-aria-components';
import {Collection} from 'react-aria-components';

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
    <MyMenuButton
      label="Window"
      items={openWindows}
      selectionMode="multiple"
      selectedKeys={selected}
      onSelectionChange={setSelected}
    >
      {(section) => (
        <MenuSection>
          <Header>
            {section
              .name}
          </Header>
          <Collection
            items={section
              .children}
          >
            {(item) => (
              <MenuItem>
                {item
                  .name}
              </MenuItem>
            )}
          </Collection>
        </MenuSection>
      )}
    </MyMenuButton>
  );
}
```

Separators may be added between menu items or sections in order to create non-labeled groupings.

```
import {Separator} from 'react-aria-components';

<MyMenuButton label="Actions">
  <MenuItem>New…</MenuItem>
  <MenuItem>Open…</MenuItem>
  <Separator />
  <MenuItem>Save</MenuItem>
  <MenuItem>Save as…</MenuItem>
  <MenuItem>Rename…</MenuItem>
  <Separator />
  <MenuItem>Page setup…</MenuItem>
  <MenuItem>Print…</MenuItem>
</MyMenuButton>
```

```
import {Separator} from 'react-aria-components';

<MyMenuButton label="Actions">
  <MenuItem>New…</MenuItem>
  <MenuItem>Open…</MenuItem>
  <Separator />
  <MenuItem>Save</MenuItem>
  <MenuItem>Save as…</MenuItem>
  <MenuItem>Rename…</MenuItem>
  <Separator />
  <MenuItem>Page setup…</MenuItem>
  <MenuItem>Print…</MenuItem>
</MyMenuButton>
```

```
import {Separator} from 'react-aria-components';

<MyMenuButton label="Actions">
  <MenuItem>
    New…
  </MenuItem>
  <MenuItem>
    Open…
  </MenuItem>
  <Separator />
  <MenuItem>
    Save
  </MenuItem>
  <MenuItem>
    Save as…
  </MenuItem>
  <MenuItem>
    Rename…
  </MenuItem>
  <Separator />
  <MenuItem>
    Page setup…
  </MenuItem>
  <MenuItem>
    Print…
  </MenuItem>
</MyMenuButton>
```

Show CSS

```
.react-aria-Menu {
  .react-aria-Separator {
    height: 1px;
    background: var(--border-color);
    margin: 2px 4px;
  }
}
```

```
.react-aria-Menu {
  .react-aria-Separator {
    height: 1px;
    background: var(--border-color);
    margin: 2px 4px;
  }
}
```

```
.react-aria-Menu {
  .react-aria-Separator {
    height: 1px;
    background: var(--border-color);
    margin: 2px 4px;
  }
}
```

Each section in a menu may have independent selection states. This works the same way as [described above](#selection) for the entire menu, but operates at the section level instead.

```
function Example() {
  let [style, setStyle] = React.useState<Selection>(new Set(['bold']));
  let [align, setAlign] = React.useState<Selection>(new Set(['left']));
  return (
    <MyMenuButton label="Edit">
      <MenuSection>
        <Header>Actions</Header>
        <MenuItem>Cut</MenuItem>
        <MenuItem>Copy</MenuItem>
        <MenuItem>Paste</MenuItem>
      </MenuSection>
      <MenuSection
        selectionMode="multiple"
        selectedKeys={style}
        onSelectionChange={setStyle}
      >
        <Header>Text style</Header>
        <MenuItem id="bold">Bold</MenuItem>
        <MenuItem id="italic">Italic</MenuItem>
        <MenuItem id="underline">Underline</MenuItem>
      </MenuSection>
      <MenuSection
        selectionMode="single"
        selectedKeys={align}
        onSelectionChange={setAlign}
      >
        <Header>Text alignment</Header>
        <MenuItem id="left">Left</MenuItem>
        <MenuItem id="center">Center</MenuItem>
        <MenuItem id="right">Right</MenuItem>
      </MenuSection>
    </MyMenuButton>
  );
}
```

```
function Example() {
  let [style, setStyle] = React.useState<Selection>(
    new Set(['bold'])
  );
  let [align, setAlign] = React.useState<Selection>(
    new Set(['left'])
  );
  return (
    <MyMenuButton label="Edit">
      <MenuSection>
        <Header>Actions</Header>
        <MenuItem>Cut</MenuItem>
        <MenuItem>Copy</MenuItem>
        <MenuItem>Paste</MenuItem>
      </MenuSection>
      <MenuSection
        selectionMode="multiple"
        selectedKeys={style}
        onSelectionChange={setStyle}
      >
        <Header>Text style</Header>
        <MenuItem id="bold">Bold</MenuItem>
        <MenuItem id="italic">Italic</MenuItem>
        <MenuItem id="underline">Underline</MenuItem>
      </MenuSection>
      <MenuSection
        selectionMode="single"
        selectedKeys={align}
        onSelectionChange={setAlign}
      >
        <Header>Text alignment</Header>
        <MenuItem id="left">Left</MenuItem>
        <MenuItem id="center">Center</MenuItem>
        <MenuItem id="right">Right</MenuItem>
      </MenuSection>
    </MyMenuButton>
  );
}
```

```
function Example() {
  let [style, setStyle] =
    React.useState<
      Selection
    >(new Set(['bold']));
  let [align, setAlign] =
    React.useState<
      Selection
    >(new Set(['left']));
  return (
    <MyMenuButton label="Edit">
      <MenuSection>
        <Header>
          Actions
        </Header>
        <MenuItem>
          Cut
        </MenuItem>
        <MenuItem>
          Copy
        </MenuItem>
        <MenuItem>
          Paste
        </MenuItem>
      </MenuSection>
      <MenuSection
        selectionMode="multiple"
        selectedKeys={style}
        onSelectionChange={setStyle}
      >
        <Header>
          Text style
        </Header>
        <MenuItem id="bold">
          Bold
        </MenuItem>
        <MenuItem id="italic">
          Italic
        </MenuItem>
        <MenuItem id="underline">
          Underline
        </MenuItem>
      </MenuSection>
      <MenuSection
        selectionMode="single"
        selectedKeys={align}
        onSelectionChange={setAlign}
      >
        <Header>
          Text alignment
        </Header>
        <MenuItem id="left">
          Left
        </MenuItem>
        <MenuItem id="center">
          Center
        </MenuItem>
        <MenuItem id="right">
          Right
        </MenuItem>
      </MenuSection>
    </MyMenuButton>
  );
}
```

Sections without a `<Header>` must provide an `aria-label` for accessibility.

* * *

By default, items in a `ListBox` are labeled by their text contents for accessibility. MenuItems also support the "label" and "description" slots to separate primary and secondary content, which improves screen reader announcements and can also be used for styling purposes. The `<Keyboard>` component can also be used to display a keyboard shortcut.

```
import {Text, Keyboard} from 'react-aria-components';

<MyMenuButton label="Actions">
  <MenuItem textValue="Copy">
    <Text slot="label">Copy</Text>
    <Text slot="description">Copy the selected text</Text>
    <Keyboard>⌘C</Keyboard>
  </MenuItem>
  <MenuItem textValue="Cut">
    <Text slot="label">Cut</Text>
    <Text slot="description">Cut the selected text</Text>
    <Keyboard>⌘X</Keyboard>
  </MenuItem>
  <MenuItem textValue="Paste">
    <Text slot="label">Paste</Text>
    <Text slot="description">Paste the copied text</Text>
    <Keyboard>⌘V</Keyboard>
  </MenuItem>
</MyMenuButton>
```

```
import {Text, Keyboard} from 'react-aria-components';

<MyMenuButton label="Actions">
  <MenuItem textValue="Copy">
    <Text slot="label">Copy</Text>
    <Text slot="description">Copy the selected text</Text>
    <Keyboard>⌘C</Keyboard>
  </MenuItem>
  <MenuItem textValue="Cut">
    <Text slot="label">Cut</Text>
    <Text slot="description">Cut the selected text</Text>
    <Keyboard>⌘X</Keyboard>
  </MenuItem>
  <MenuItem textValue="Paste">
    <Text slot="label">Paste</Text>
    <Text slot="description">Paste the copied text</Text>
    <Keyboard>⌘V</Keyboard>
  </MenuItem>
</MyMenuButton>
```

```
import {
  Keyboard,
  Text
} from 'react-aria-components';

<MyMenuButton label="Actions">
  <MenuItem textValue="Copy">
    <Text slot="label">
      Copy
    </Text>
    <Text slot="description">
      Copy the selected
      text
    </Text>
    <Keyboard>
      ⌘C
    </Keyboard>
  </MenuItem>
  <MenuItem textValue="Cut">
    <Text slot="label">
      Cut
    </Text>
    <Text slot="description">
      Cut the selected
      text
    </Text>
    <Keyboard>
      ⌘X
    </Keyboard>
  </MenuItem>
  <MenuItem textValue="Paste">
    <Text slot="label">
      Paste
    </Text>
    <Text slot="description">
      Paste the copied
      text
    </Text>
    <Keyboard>
      ⌘V
    </Keyboard>
  </MenuItem>
</MyMenuButton>
```

Show CSS

```
.react-aria-MenuItem {
  [slot=label] {
    font-weight: bold;
    grid-area: label;
  }

  [slot=description] {
    font-size: small;
    grid-area: desc;
  }

  kbd {
    grid-area: kbd;
    font-family: monospace;
    text-align: end;
  }
}
```

```
.react-aria-MenuItem {
  [slot=label] {
    font-weight: bold;
    grid-area: label;
  }

  [slot=description] {
    font-size: small;
    grid-area: desc;
  }

  kbd {
    grid-area: kbd;
    font-family: monospace;
    text-align: end;
  }
}
```

```
.react-aria-MenuItem {
  [slot=label] {
    font-weight: bold;
    grid-area: label;
  }

  [slot=description] {
    font-size: small;
    grid-area: desc;
  }

  kbd {
    grid-area: kbd;
    font-family: monospace;
    text-align: end;
  }
}
```

* * *

By default, MenuTrigger opens by pressing the trigger element or activating it via the Space or Enter keys. However, there may be cases in which your trigger element should perform a separate default action on press, and should only display the Menu when long pressed. This behavior can be changed by providing `"longPress"` to the `trigger` prop. With this prop, the Menu will only be opened upon pressing and holding the trigger element or by using the Option (Alt on Windows) + Down Arrow/Up Arrow keys while focusing the trigger element.

```
<MenuTrigger trigger="longPress">
  <Button onPress={() => alert('crop')}>Crop</Button>
  <Popover>
    <Menu>
      <MenuItem>Rotate</MenuItem>
      <MenuItem>Slice</MenuItem>
      <MenuItem>Clone stamp</MenuItem>
    </Menu>
  </Popover>
</MenuTrigger>
```

```
<MenuTrigger trigger="longPress">
  <Button onPress={() => alert('crop')}>Crop</Button>
  <Popover>
    <Menu>
      <MenuItem>Rotate</MenuItem>
      <MenuItem>Slice</MenuItem>
      <MenuItem>Clone stamp</MenuItem>
    </Menu>
  </Popover>
</MenuTrigger>
```

```
<MenuTrigger trigger="longPress">
  <Button
    onPress={() =>
      alert('crop')}
  >
    Crop
  </Button>
  <Popover>
    <Menu>
      <MenuItem>
        Rotate
      </MenuItem>
      <MenuItem>
        Slice
      </MenuItem>
      <MenuItem>
        Clone stamp
      </MenuItem>
    </Menu>
  </Popover>
</MenuTrigger>
```

* * *

A `MenuItem` can be disabled with the `isDisabled` prop. Disabled items are not focusable or keyboard navigable, and do not trigger `onAction` or `onSelectionChange`.

```
<MyMenuButton label="Actions">
  <MenuItem>Copy</MenuItem>
  <MenuItem>Cut</MenuItem>
  <MenuItem isDisabled>Paste</MenuItem></MyMenuButton>
```

```
<MyMenuButton label="Actions">
  <MenuItem>Copy</MenuItem>
  <MenuItem>Cut</MenuItem>
  <MenuItem isDisabled>Paste</MenuItem></MyMenuButton>
```

```
<MyMenuButton label="Actions">
  <MenuItem>
    Copy
  </MenuItem>
  <MenuItem>
    Cut
  </MenuItem>
  <MenuItem isDisabled>
    Paste
  </MenuItem></MyMenuButton>
```

Show CSS

```
.react-aria-MenuItem {
  &[data-disabled] {
    color: var(--text-color-disabled);
  }
}
```

```
.react-aria-MenuItem {
  &[data-disabled] {
    color: var(--text-color-disabled);
  }
}
```

```
.react-aria-MenuItem {
  &[data-disabled] {
    color: var(--text-color-disabled);
  }
}
```

In dynamic collections, it may be more convenient to use the `disabledKeys` prop at the `Menu` level instead of `isDisabled` on individual items. Each key in this list corresponds with the `id` prop passed to the `MenuItem` component, or automatically derived from the values passed to the `items` prop (see the [Collections](https://react-spectrum.adobe.com/react-aria/collections.html) for more details). An item is considered disabled if its id exists in `disabledKeys` or if it has `isDisabled`.

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
    <MyMenuButton
      label="Actions"
      items={items}
      disabledKeys={[4, 6]}    >
      {(item) => <MenuItem>{item.name}</MenuItem>}
    </MyMenuButton>
  );
}
```

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
    <MyMenuButton
      label="Actions"
      items={items}
      disabledKeys={[4, 6]}    >
      {(item) => <MenuItem>{item.name}</MenuItem>}
    </MyMenuButton>
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
    <MyMenuButton
      label="Actions"
      items={items}
      disabledKeys={[
        4,
        6
      ]}    >
      {(item) => (
        <MenuItem>
          {item.name}
        </MenuItem>
      )}
    </MyMenuButton>
  );
}
```

* * *

The open state of the menu can be controlled via the `defaultOpen` and `isOpen` props.

```
function Example() {
  let [open, setOpen] = React.useState(false);

  return (
    <>
      <p>Menu is {open ? 'open' : 'closed'}</p>
      <MyMenuButton
        label="View"
        isOpen={open}
        onOpenChange={setOpen}>
        <MenuItem id="side">Side bar</MenuItem>
        <MenuItem id="options">Page options</MenuItem>
        <MenuItem id="edit">Edit Panel</MenuItem>
      </MyMenuButton>
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
      <MyMenuButton
        label="View"
        isOpen={open}
        onOpenChange={setOpen}>
        <MenuItem id="side">Side bar</MenuItem>
        <MenuItem id="options">Page options</MenuItem>
        <MenuItem id="edit">Edit Panel</MenuItem>
      </MyMenuButton>
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
      <MyMenuButton
        label="View"
        isOpen={open}
        onOpenChange={setOpen}
      >
        <MenuItem id="side">
          Side bar
        </MenuItem>
        <MenuItem id="options">
          Page options
        </MenuItem>
        <MenuItem id="edit">
          Edit Panel
        </MenuItem>
      </MyMenuButton>
    </>
  );
}
```

* * *

Submenus can be created by wrapping an item and a submenu in a `SubmenuTrigger`. The `SubmenuTrigger` accepts exactly two children: the first child should be the `MenuItem` which triggers opening of the submenu, and second child should be the `Popover` containing the submenu.

```
import {Menu, Popover, SubmenuTrigger} from 'react-aria-components';

<MyMenuButton label="Actions">
  <MyItem>Cut</MyItem>
  <MyItem>Copy</MyItem>
  <MyItem>Delete</MyItem>
  <SubmenuTrigger>
    <MyItem>Share</MyItem>
    <Popover>
      <Menu>
        <MyItem>SMS</MyItem>
        <MyItem>X</MyItem>
        <SubmenuTrigger>
          <MyItem>Email</MyItem>
          <Popover>
            <Menu>
              <MyItem>Work</MyItem>
              <MyItem>Personal</MyItem>
            </Menu>
          </Popover>
        </SubmenuTrigger>
      </Menu>
    </Popover>
  </SubmenuTrigger>
</MyMenuButton>
```

```
import {
  Menu,
  Popover,
  SubmenuTrigger
} from 'react-aria-components';

<MyMenuButton label="Actions">
  <MyItem>Cut</MyItem>
  <MyItem>Copy</MyItem>
  <MyItem>Delete</MyItem>
  <SubmenuTrigger>
    <MyItem>Share</MyItem>
    <Popover>
      <Menu>
        <MyItem>SMS</MyItem>
        <MyItem>X</MyItem>
        <SubmenuTrigger>
          <MyItem>Email</MyItem>
          <Popover>
            <Menu>
              <MyItem>Work</MyItem>
              <MyItem>Personal</MyItem>
            </Menu>
          </Popover>
        </SubmenuTrigger>
      </Menu>
    </Popover>
  </SubmenuTrigger>
</MyMenuButton>
```

```
import {
  Menu,
  Popover,
  SubmenuTrigger
} from 'react-aria-components';

<MyMenuButton label="Actions">
  <MyItem>Cut</MyItem>
  <MyItem>Copy</MyItem>
  <MyItem>
    Delete
  </MyItem>
  <SubmenuTrigger>
    <MyItem>
      Share
    </MyItem>
    <Popover>
      <Menu>
        <MyItem>
          SMS
        </MyItem>
        <MyItem>
          X
        </MyItem>
        <SubmenuTrigger>
          <MyItem>
            Email
          </MyItem>
          <Popover>
            <Menu>
              <MyItem>
                Work
              </MyItem>
              <MyItem>
                Personal
              </MyItem>
            </Menu>
          </Popover>
        </SubmenuTrigger>
      </Menu>
    </Popover>
  </SubmenuTrigger>
</MyMenuButton>
```

You can define a recursive function to render the nested menu items dynamically.

```
import {Menu, Popover, SubmenuTrigger} from 'react-aria-components';

let items = [
  {id: 'cut', name: 'Cut'},
  {id: 'copy', name: 'Copy'},
  {id: 'delete', name: 'Delete'},
  {id: 'share', name: 'Share', children: [
    {id: 'sms', name: 'SMS'},
    {id: 'x', name: 'X'},
    {id: 'email', name: 'Email', children: [
      {id: 'work', name: 'Work'},
      {id: 'personal', name: 'Personal'},
    ]}
  ]}
];

<MyMenuButton label="Actions" items={items}>
  {function renderSubmenu(item) {
    if (item.children) {
      return (
        <SubmenuTrigger>
          <MyItem key={item.name}>{item.name}</MyItem>
          <Popover>
            <Menu items={item.children}>
              {(item) => renderSubmenu(item)}
            </Menu>
          </Popover>
        </SubmenuTrigger>
      );
    } else {
      return <MyItem key={item.name}>{item.name}</MyItem>;
    }
  }}
</MyMenuButton>
```

```
import {
  Menu,
  Popover,
  SubmenuTrigger
} from 'react-aria-components';

let items = [
  { id: 'cut', name: 'Cut' },
  { id: 'copy', name: 'Copy' },
  { id: 'delete', name: 'Delete' },
  {
    id: 'share',
    name: 'Share',
    children: [
      { id: 'sms', name: 'SMS' },
      { id: 'x', name: 'X' },
      {
        id: 'email',
        name: 'Email',
        children: [
          { id: 'work', name: 'Work' },
          { id: 'personal', name: 'Personal' }
        ]
      }
    ]
  }
];

<MyMenuButton label="Actions" items={items}>
  {function renderSubmenu(item) {
    if (item.children) {
      return (
        <SubmenuTrigger>
          <MyItem key={item.name}>{item.name}</MyItem>
          <Popover>
            <Menu items={item.children}>
              {(item) => renderSubmenu(item)}
            </Menu>
          </Popover>
        </SubmenuTrigger>
      );
    } else {
      return <MyItem key={item.name}>{item.name}</MyItem>;
    }
  }}
</MyMenuButton>
```

```
import {
  Menu,
  Popover,
  SubmenuTrigger
} from 'react-aria-components';

let items = [
  {
    id: 'cut',
    name: 'Cut'
  },
  {
    id: 'copy',
    name: 'Copy'
  },
  {
    id: 'delete',
    name: 'Delete'
  },
  {
    id: 'share',
    name: 'Share',
    children: [
      {
        id: 'sms',
        name: 'SMS'
      },
      {
        id: 'x',
        name: 'X'
      },
      {
        id: 'email',
        name: 'Email',
        children: [
          {
            id: 'work',
            name: 'Work'
          },
          {
            id:
              'personal',
            name:
              'Personal'
          }
        ]
      }
    ]
  }
];

<MyMenuButton
  label="Actions"
  items={items}
>
  {function renderSubmenu(
    item
  ) {
    if (
      item.children
    ) {
      return (
        <SubmenuTrigger>
          <MyItem
            key={item
              .name}
          >
            {item.name}
          </MyItem>
          <Popover>
            <Menu
              items={item
                .children}
            >
              {(
                item
              ) =>
                renderSubmenu(
                  item
                )}
            </Menu>
          </Popover>
        </SubmenuTrigger>
      );
    } else {
      return (
        <MyItem
          key={item
            .name}
        >
          {item.name}
        </MyItem>
      );
    }
  }}
</MyMenuButton>
```

Show CSS

```
.react-aria-Popover[data-trigger=SubmenuTrigger][data-placement="right"] {
  margin-left: -5px;
}

.react-aria-Popover[data-trigger=SubmenuTrigger][data-placement="left"] {
  margin-right: -5px;
}
```

```
.react-aria-Popover[data-trigger=SubmenuTrigger][data-placement="right"] {
  margin-left: -5px;
}

.react-aria-Popover[data-trigger=SubmenuTrigger][data-placement="left"] {
  margin-right: -5px;
}
```

```
.react-aria-Popover[data-trigger=SubmenuTrigger][data-placement="right"] {
  margin-left: -5px;
}

.react-aria-Popover[data-trigger=SubmenuTrigger][data-placement="left"] {
  margin-right: -5px;
}
```

### Complex content[#](#complex-content)

Submenu popovers can also include components other than menus. This example uses an [Autocomplete](https://react-spectrum.adobe.com/react-aria/Autocomplete.html) to make the submenu searchable.

```
import {Autocomplete, Menu, Popover, SubmenuTrigger, useFilter} from 'react-aria-components';
import {MySearchField} from './SearchField';

function Example() {
  let { contains } = useFilter({ sensitivity: 'base' });

  return (
    <MyMenuButton label="Actions">
      <MyItem>Cut</MyItem>
      <MyItem>Copy</MyItem>
      <MyItem>Delete</MyItem>
      <SubmenuTrigger>
        <MyItem>Add tag...</MyItem>
        <Popover>
          <Autocomplete filter={contains}>
            <MySearchField label="Search tags" autoFocus />
            <Menu>
              <MyItem>News</MyItem>
              <MyItem>Travel</MyItem>
              <MyItem>Shopping</MyItem>
              <MyItem>Business</MyItem>
              <MyItem>Entertainment</MyItem>
              <MyItem>Food</MyItem>
              <MyItem>Technology</MyItem>
              <MyItem>Health</MyItem>
              <MyItem>Science</MyItem>
            </Menu>
          </Autocomplete>
        </Popover>
      </SubmenuTrigger>
    </MyMenuButton>
  );
}
```

```
import {
  Autocomplete,
  Menu,
  Popover,
  SubmenuTrigger,
  useFilter
} from 'react-aria-components';
import {MySearchField} from './SearchField';

function Example() {
  let { contains } = useFilter({ sensitivity: 'base' });

  return (
    <MyMenuButton label="Actions">
      <MyItem>Cut</MyItem>
      <MyItem>Copy</MyItem>
      <MyItem>Delete</MyItem>
      <SubmenuTrigger>
        <MyItem>Add tag...</MyItem>
        <Popover>
          <Autocomplete filter={contains}>
            <MySearchField label="Search tags" autoFocus />
            <Menu>
              <MyItem>News</MyItem>
              <MyItem>Travel</MyItem>
              <MyItem>Shopping</MyItem>
              <MyItem>Business</MyItem>
              <MyItem>Entertainment</MyItem>
              <MyItem>Food</MyItem>
              <MyItem>Technology</MyItem>
              <MyItem>Health</MyItem>
              <MyItem>Science</MyItem>
            </Menu>
          </Autocomplete>
        </Popover>
      </SubmenuTrigger>
    </MyMenuButton>
  );
}
```

```
import {
  Autocomplete,
  Menu,
  Popover,
  SubmenuTrigger,
  useFilter
} from 'react-aria-components';
import {MySearchField} from './SearchField';

function Example() {
  let { contains } =
    useFilter({
      sensitivity: 'base'
    });

  return (
    <MyMenuButton label="Actions">
      <MyItem>
        Cut
      </MyItem>
      <MyItem>
        Copy
      </MyItem>
      <MyItem>
        Delete
      </MyItem>
      <SubmenuTrigger>
        <MyItem>
          Add tag...
        </MyItem>
        <Popover>
          <Autocomplete
            filter={contains}
          >
            <MySearchField
              label="Search tags"
              autoFocus
            />
            <Menu>
              <MyItem>
                News
              </MyItem>
              <MyItem>
                Travel
              </MyItem>
              <MyItem>
                Shopping
              </MyItem>
              <MyItem>
                Business
              </MyItem>
              <MyItem>
                Entertainment
              </MyItem>
              <MyItem>
                Food
              </MyItem>
              <MyItem>
                Technology
              </MyItem>
              <MyItem>
                Health
              </MyItem>
              <MyItem>
                Science
              </MyItem>
            </Menu>
          </Autocomplete>
        </Popover>
      </SubmenuTrigger>
    </MyMenuButton>
  );
}
```

* * *

`MenuTrigger` works out of the box with any pressable React Aria component (e.g. [Button](https://react-spectrum.adobe.com/react-aria/Button.html), [Link](https://react-spectrum.adobe.com/react-aria/Link.html), etc.). Custom trigger elements such as third party components and other DOM elements are also supported by wrapping them with the `<Pressable>` component, or using the [usePress](https://react-spectrum.adobe.com/react-aria/usePress.html) hook.

```
import {Pressable} from 'react-aria-components';

<MenuTrigger>
  <Pressable>
    <span role="button">Custom trigger</span>
  </Pressable>  <Popover>
    <Menu>
      <MenuItem>Open</MenuItem>
      <MenuItem>Rename…</MenuItem>
      <MenuItem>Duplicate</MenuItem>
      <MenuItem>Delete…</MenuItem>
    </Menu>
  </Popover>
</MenuTrigger>
```

```
import {Pressable} from 'react-aria-components';

<MenuTrigger>
  <Pressable>
    <span role="button">Custom trigger</span>
  </Pressable>  <Popover>
    <Menu>
      <MenuItem>Open</MenuItem>
      <MenuItem>Rename…</MenuItem>
      <MenuItem>Duplicate</MenuItem>
      <MenuItem>Delete…</MenuItem>
    </Menu>
  </Popover>
</MenuTrigger>
```

```
import {Pressable} from 'react-aria-components';

<MenuTrigger>
  <Pressable>
    <span role="button">
      Custom trigger
    </span>
  </Pressable>  <Popover>
    <Menu>
      <MenuItem>
        Open
      </MenuItem>
      <MenuItem>
        Rename…
      </MenuItem>
      <MenuItem>
        Duplicate
      </MenuItem>
      <MenuItem>
        Delete…
      </MenuItem>
    </Menu>
  </Popover>
</MenuTrigger>
```

Note that any `<Pressable>` child must have an [interactive ARIA role](https://www.w3.org/TR/wai-aria-1.2/#widget_roles) or use an appropriate semantic HTML element so that screen readers can announce the trigger. Trigger components must forward their `ref` and spread all props to a DOM element.

```
const CustomTrigger = React.forwardRef((props, ref) => (
  <button {...props} ref={ref} />
));
```

```
const CustomTrigger = React.forwardRef((props, ref) => (
  <button {...props} ref={ref} />
));
```

```
const CustomTrigger =
  React.forwardRef((
    props,
    ref
  ) => (
    <button
      {...props}
      ref={ref}
    />
  ));
```

* * *

Name

Type

Default

Description

`children`

`[ReactNode](https://reactjs.org/docs/rendering-elements.html)`

—

`trigger`

`[MenuTriggerType](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/menu/src/index.d.ts:MenuTriggerType)`

`'press'`

How the menu is triggered.

`isOpen`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the overlay is open by default (controlled).

`defaultOpen`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the overlay is open by default (uncontrolled).

Events

Name

Type

Description

`onOpenChange`

`( (isOpen: [boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) )) => void`

Handler that is called when the overlay's open state changes.

Name

Type

Default

Description

`children`

`[ReactElement](https://reactjs.org/docs/rendering-elements.html)[]`

—

The contents of the SubmenuTrigger. The first child should be an Item (the trigger) and the second child should be the Popover (for the submenu).

`delay`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)`

`200`

The delay time in milliseconds for the submenu to appear after hovering over the trigger.

A `<Button>` accepts its contents as `children`. Other props such as `onPress` and `isDisabled` will be set by the `MenuTrigger`.

Show props

Name

Type

Default

Description

`isPending`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the button is in a pending state. This disables press and hover events while retaining focusability, and announces the pending state to screen readers.

`isDisabled`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the button is disabled.

`autoFocus`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the element should receive focus on render.

`type`

`'button' | 'submit' | 'reset'`

`'button'`

The behavior of the button when used in an HTML form.

`form`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

The `<form>` element to associate the button with. The value of this attribute must be the id of a `<form>` in the same document. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button#form).

`formAction`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

The URL that processes the information submitted by the button. Overrides the action attribute of the button's form owner.

`formEncType`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

Indicates how to encode the form data that is submitted.

`formMethod`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

Indicates the HTTP method used to submit the form.

`formNoValidate`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Indicates that the form is not to be validated when it is submitted.

`formTarget`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

Overrides the target attribute of the button's form owner.

`name`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

Submitted as a pair with the button's value as part of the form data.

`value`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

The value associated with the button's name when it's submitted with the form data.

`children`

`[ChildrenOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ChildrenOrFunction)<[ButtonRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Button.tsx:ButtonRenderProps)>`

—

The children of the component. A function may be provided to alter the children based on component state.

`className`

`[ClassNameOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ClassNameOrFunction)<[ButtonRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Button.tsx:ButtonRenderProps)>`

—

The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.

`style`

`[StyleOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:StyleOrFunction)<[ButtonRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Button.tsx:ButtonRenderProps)>`

—

The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.

Events

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

`onFocus`

`( (e: [FocusEvent](https://developer.mozilla.org/docs/Web/API/FocusEvent)<Target> )) => void`

Handler that is called when the element receives focus.

`onBlur`

`( (e: [FocusEvent](https://developer.mozilla.org/docs/Web/API/FocusEvent)<Target> )) => void`

Handler that is called when the element loses focus.

`onFocusChange`

`( (isFocused: [boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) )) => void`

Handler that is called when the element's focus status changes.

`onKeyDown`

`( (e: [KeyboardEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/events.d.ts:KeyboardEvent) )) => void`

Handler that is called when a key is pressed.

`onKeyUp`

`( (e: [KeyboardEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/events.d.ts:KeyboardEvent) )) => void`

Handler that is called when a key is released.

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

`id`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

The element's unique identifier. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id).

`excludeFromTabOrder`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether to exclude the element from the sequential tab order. If true, the element will not be focusable via the keyboard by tabbing. This should be avoided except in rare scenarios where an alternative means of accessing the element or its functionality via the keyboard is available.

`preventFocusOnPress`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether to prevent focus from moving to the button when pressing it.

Caution, this can make the button inaccessible and should only be used when alternative keyboard interaction is provided, such as ComboBox's MenuTrigger or a NumberField's increment/decrement control.

`aria-disabled`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | 'true' | 'false'`

Indicates whether the element is disabled to users of assistive technology.

`aria-expanded`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | 'true' | 'false'`

Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.

`aria-haspopup`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog' | 'true' | 'false'`

Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.

`aria-controls`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

Identifies the element (or elements) whose contents or presence are controlled by the current element.

`aria-pressed`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | 'true' | 'false' | 'mixed'`

Indicates the current "pressed" state of toggle buttons.

`aria-current`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | 'true' | 'false' | 'page' | 'step' | 'location' | 'date' | 'time'`

Indicates whether this element represents the current item within a container or set of related elements.

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

A `<Popover>` is a container to hold the `<Menu>`. By default, it has a `placement` of `bottom start` within a `<MenuTrigger>`, but this and other positioning properties may be customized.

Show props

Name

Type

Default

Description

`trigger`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

The name of the component that triggered the popover. This is reflected on the element as the `data-trigger` attribute, and can be used to provide specific styles for the popover depending on which element triggered it.

`triggerRef`

`[RefObject](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/refs.d.ts:RefObject)<[Element](https://developer.mozilla.org/docs/Web/API/Element) | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)>`

—

The ref for the element which the popover positions itself with respect to.

When used within a trigger component such as DialogTrigger, MenuTrigger, Select, etc., this is set automatically. It is only required when used standalone.

`isEntering`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the popover is currently performing an entry animation.

`isExiting`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the popover is currently performing an exit animation.

`offset`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)`

`8`

The additional offset applied along the main axis between the element and its anchor element.

`placement`

`[Placement](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/overlays/src/index.d.ts:Placement)`

`'bottom'`

The placement of the element with respect to its anchor element.

`containerPadding`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)`

`12`

The placement padding that should be applied between the element and its surrounding container.

`crossOffset`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)`

`0`

The additional offset applied along the cross axis between the element and its anchor element.

`shouldFlip`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

`true`

Whether the element should flip its orientation (e.g. top to bottom or left to right) when there is insufficient room for it to render completely.

`arrowRef`

`[RefObject](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/refs.d.ts:RefObject)<[Element](https://developer.mozilla.org/docs/Web/API/Element) | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)>`

—

A ref for the popover arrow element.

`isNonModal`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the popover is non-modal, i.e. elements outside the popover may be interacted with by assistive technologies.

Most popovers should not use this option as it may negatively impact the screen reader experience. Only use with components such as combobox, which are designed to handle this situation carefully.

`isKeyboardDismissDisabled`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

`false`

Whether pressing the escape key to close the popover should be disabled.

Most popovers should not use this option. When set to true, an alternative way to close the popover with a keyboard must be provided.

`shouldCloseOnInteractOutside`

`( (element: [Element](https://developer.mozilla.org/docs/Web/API/Element) )) => [boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

When user interacts with the argument element outside of the popover ref, return true if onClose should be called. This gives you a chance to filter out interaction with elements that should not dismiss the popover. By default, onClose will always be called on interaction outside the popover ref.

`boundaryElement`

`[Element](https://developer.mozilla.org/docs/Web/API/Element)`

`document.body`

Element that that serves as the positioning boundary.

`scrollRef`

`[RefObject](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/refs.d.ts:RefObject)<[Element](https://developer.mozilla.org/docs/Web/API/Element) | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)>`

`overlayRef`

A ref for the scrollable region within the overlay.

`shouldUpdatePosition`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

`true`

Whether the overlay should update its position automatically.

`arrowBoundaryOffset`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)`

`0`

The minimum distance the arrow's edge should be from the edge of the overlay element.

`isOpen`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the overlay is open by default (controlled).

`defaultOpen`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the overlay is open by default (uncontrolled).

`children`

`[ChildrenOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ChildrenOrFunction)<[PopoverRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Popover.tsx:PopoverRenderProps)>`

—

The children of the component. A function may be provided to alter the children based on component state.

`className`

`[ClassNameOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ClassNameOrFunction)<[PopoverRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Popover.tsx:PopoverRenderProps)>`

—

The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.

`style`

`[StyleOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:StyleOrFunction)<[PopoverRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Popover.tsx:PopoverRenderProps)>`

—

The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.

Events

Name

Type

Description

`onOpenChange`

`( (isOpen: [boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) )) => void`

Handler that is called when the overlay's open state changes.

Layout

Name

Type

Description

`slot`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)`

A slot name for the component. Slots allow the component to receive props from a parent component. An explicit `null` value indicates that the local props completely override all props received from a parent.

Sizing

Name

Type

Description

`maxHeight`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)`

The maxHeight specified for the overlay element. By default, it will take all space up to the current viewport height.

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

Name

Type

Default

Description

`renderEmptyState`

`() => [ReactNode](https://reactjs.org/docs/rendering-elements.html)`

—

Provides content to display when there are no items in the list.

`escapeKeyBehavior`

`'clearSelection' | 'none'`

`'clearSelection'`

Whether pressing the escape key should clear selection in the menu or not.

Most experiences should not modify this option as it eliminates a keyboard user's ability to easily clear selection. Only use if the escape key is being handled externally or should not trigger selection clearing contextually.

`autoFocus`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | [FocusStrategy](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/selection.d.ts:FocusStrategy)`

—

Where the focus should be set.

`shouldFocusWrap`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether keyboard navigation is circular.

`items`

`[Iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)<T>`

—

Item objects in the collection.

`disabledKeys`

`[Iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)<[Key](https://reactjs.org/docs/lists-and-keys.html)>`

—

The item keys that are disabled. These items cannot be selected, focused, or otherwise interacted with.

`selectionMode`

`[SelectionMode](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/selection.d.ts:SelectionMode)`

—

The type of selection that is allowed in the collection.

`disallowEmptySelection`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the collection allows empty selection.

`selectedKeys`

`'all' | [Iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)<[Key](https://reactjs.org/docs/lists-and-keys.html)>`

—

The currently selected keys in the collection (controlled).

`defaultSelectedKeys`

`'all' | [Iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)<[Key](https://reactjs.org/docs/lists-and-keys.html)>`

—

The initial selected keys in the collection (uncontrolled).

`children`

`[ReactNode](https://reactjs.org/docs/rendering-elements.html) | ( (item: [object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object) )) => [ReactNode](https://reactjs.org/docs/rendering-elements.html)`

—

The contents of the collection.

`dependencies`

`ReadonlyArray<any>`

—

Values that should invalidate the item cache when using dynamic collections.

`className`

`[ClassNameOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ClassNameOrFunction)<[MenuRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Menu.tsx:MenuRenderProps)>`

—

The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.

`style`

`[StyleOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:StyleOrFunction)<[MenuRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Menu.tsx:MenuRenderProps)>`

—

The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.

Events

Name

Type

Description

`onAction`

`( (key: [Key](https://reactjs.org/docs/lists-and-keys.html) )) => void`

Handler that is called when an item is selected.

`onClose`

`() => void`

Handler that is called when the menu should close after selecting an item.

`onSelectionChange`

`( (keys: [Selection](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/selection.d.ts:Selection) )) => void`

Handler that is called when the selection changes.

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

`id`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

The element's unique identifier. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id).

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

A `<MenuSection>` defines the child items for a section within a `<Menu>`. It may also contain an optional `<Header>` element. If there is no header, then an `aria-label` must be provided to identify the section to assistive technologies.

Show props

Name

Type

Description

`id`

`[Key](https://reactjs.org/docs/lists-and-keys.html)`

The unique id of the section.

`value`

`[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)`

The object value that this section represents. When using dynamic collections, this is set automatically.

`children`

`[ReactNode](https://reactjs.org/docs/rendering-elements.html) | ( (item: [object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object) )) => [ReactElement](https://reactjs.org/docs/rendering-elements.html)`

Static child items or a function to render children.

`dependencies`

`ReadonlyArray<any>`

Values that should invalidate the item cache when using dynamic collections.

`items`

`[Iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)<[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)>`

Item objects in the section.

`className`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element.

`style`

`[CSSProperties](https://reactjs.org/docs/dom-elements.html#style)`

The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element.

`selectionMode`

`[SelectionMode](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/selection.d.ts:SelectionMode)`

The type of selection that is allowed in the collection.

`disallowEmptySelection`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether the collection allows empty selection.

`selectedKeys`

`'all' | [Iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)<[Key](https://reactjs.org/docs/lists-and-keys.html)>`

The currently selected keys in the collection (controlled).

`defaultSelectedKeys`

`'all' | [Iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)<[Key](https://reactjs.org/docs/lists-and-keys.html)>`

The initial selected keys in the collection (uncontrolled).

`disabledKeys`

`[Iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)<[Key](https://reactjs.org/docs/lists-and-keys.html)>`

The currently disabled keys in the collection (controlled).

Events

Name

Type

Description

`onSelectionChange`

`( (keys: [Selection](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/selection.d.ts:Selection) )) => void`

Handler that is called when the selection changes.

PositioningAccessibility

Name

Type

Description

`aria-label`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

An accessibility label for the section.

A `<Header>` defines the title for a `<MenuSection>`. It accepts all DOM attributes.

A `<MenuItem>` defines a single item within a `<Menu>`. If the `children` are not plain text, then the `textValue` prop must also be set to a plain text representation, which will be used for autocomplete in the Menu.

Show props

Name

Type

Description

`id`

`[Key](https://reactjs.org/docs/lists-and-keys.html)`

The unique id of the item.

`value`

`[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)`

The object value that this item represents. When using dynamic collections, this is set automatically.

`textValue`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

A string representation of the item's contents, used for features like typeahead.

`isDisabled`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether the item is disabled.

`children`

`[ChildrenOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ChildrenOrFunction)<[MenuItemRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Menu.tsx:MenuItemRenderProps)>`

The children of the component. A function may be provided to alter the children based on component state.

`className`

`[ClassNameOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ClassNameOrFunction)<[MenuItemRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Menu.tsx:MenuItemRenderProps)>`

The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.

`style`

`[StyleOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:StyleOrFunction)<[MenuItemRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Menu.tsx:MenuItemRenderProps)>`

The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.

`href`

`[Href](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dom.d.ts:Href)`

A URL to link to. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#href).

`hrefLang`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

Hints at the human language of the linked URL. See[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#hreflang).

`target`

`HTMLAttributeAnchorTarget`

The target window for the link. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#target).

`rel`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

The relationship between the linked resource and the current page. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel).

`download`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

Causes the browser to download the linked URL. A string may be provided to suggest a file name. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#download).

`ping`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

A space-separated list of URLs to ping when the link is followed. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#ping).

`referrerPolicy`

`HTMLAttributeReferrerPolicy`

How much of the referrer to send when following the link. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#referrerpolicy).

`routerOptions`

`[RouterOptions](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dom.d.ts:RouterOptions)`

Options for the configured client side router.

Events

Name

Type

Description

`onAction`

`() => void`

Handler that is called when the item is selected.

`onHoverStart`

`( (e: [HoverEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/events.d.ts:HoverEvent) )) => void`

Handler that is called when a hover interaction starts.

`onHoverEnd`

`( (e: [HoverEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/events.d.ts:HoverEvent) )) => void`

Handler that is called when a hover interaction ends.

`onHoverChange`

`( (isHovering: [boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) )) => void`

Handler that is called when the hover state changes.

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

PositioningAccessibility

Name

Type

Description

`aria-label`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

An accessibility label for this item.

A `<Separator>` can be placed between menu items.

Show props

Name

Type

Default

Description

`orientation`

`[Orientation](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/orientation.d.ts:Orientation)`

`'horizontal'`

The orientation of the separator.

`elementType`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

The HTML element type that will be used to render the separator.

`className`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element.

`style`

`[CSSProperties](https://reactjs.org/docs/dom-elements.html#style)`

—

The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element.

EventsLayout

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

`id`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

The element's unique identifier. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id).

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
.react-aria-Menu {
  /* ... */
}
```

```
.react-aria-Menu {
  /* ... */
}
```

```
.react-aria-Menu {
  /* ... */
}
```

A custom `className` can also be specified on any component. This overrides the default `className` provided by React Aria with your own.

```
<Menu className="my-menu">
  {/* ... */}
</Menu>
```

```
<Menu className="my-menu">
  {/* ... */}
</Menu>
```

```
<Menu className="my-menu">
  {/* ... */}
</Menu>
```

In addition, some components support multiple UI states (e.g. pressed, hovered, etc.). React Aria components expose states using data attributes, which you can target in CSS selectors. For example:

```
.react-aria-MenuItem[data-selected] {
  /* ... */
}

.react-aria-MenuItem[data-focused] {
  /* ... */
}
```

```
.react-aria-MenuItem[data-selected] {
  /* ... */
}

.react-aria-MenuItem[data-focused] {
  /* ... */
}
```

```
.react-aria-MenuItem[data-selected] {
  /* ... */
}

.react-aria-MenuItem[data-focused] {
  /* ... */
}
```

The `className` and `style` props also accept functions which receive states for styling. This lets you dynamically determine the classes or styles to apply, which is useful when using utility CSS libraries like [Tailwind](https://tailwindcss.com/).

```
<MenuItem
  className={({ isSelected }) => isSelected ? 'bg-blue-400' : 'bg-gray-100'}
>
  Item
</MenuItem>
```

```
<MenuItem
  className={({ isSelected }) =>
    isSelected ? 'bg-blue-400' : 'bg-gray-100'}
>
  Item
</MenuItem>
```

```
<MenuItem
  className={(
    { isSelected }
  ) =>
    isSelected
      ? 'bg-blue-400'
      : 'bg-gray-100'}
>
  Item
</MenuItem>
```

Render props may also be used as children to alter what elements are rendered based on the current state. For example, you could render a checkmark icon when an item is selected.

```
<MenuItem>
  {({isSelected}) => (
    <>
      {isSelected && <CheckmarkIcon />}
      Item
    </>
  )}
</MenuItem>
```

```
<MenuItem>
  {({isSelected}) => (
    <>
      {isSelected && <CheckmarkIcon />}
      Item
    </>
  )}
</MenuItem>
```

```
<MenuItem>
  {(
    { isSelected }
  ) => (
    <>
      {isSelected && (
        <CheckmarkIcon />
      )}
      Item
    </>
  )}
</MenuItem>
```

The states and selectors for each component used in a `Menu` are documented below.

The `MenuTrigger` component does not render any DOM elements (it only passes through its children) so it does not support styling. If you need a wrapper element, add one yourself inside the `<MenuTrigger>`.

```
<MenuTrigger>
  <div className="my-menu-trigger">
    {/* ... */}
  </div>
</MenuTrigger>
```

```
<MenuTrigger>
  <div className="my-menu-trigger">
    {/* ... */}
  </div>
</MenuTrigger>
```

```
<MenuTrigger>
  <div className="my-menu-trigger">
    {/* ... */}
  </div>
</MenuTrigger>
```

A [Button](https://react-spectrum.adobe.com/react-aria/Button.html) can be targeted with the `.react-aria-Button` CSS selector, or by overriding with a custom `className`. It supports the following states:

Name

CSS Selector

Description

`isHovered`

`[data-hovered]`

Whether the button is currently hovered with a mouse.

`isPressed`

`[data-pressed]`

Whether the button is currently in a pressed state.

`isFocused`

`[data-focused]`

Whether the button is focused, either via a mouse or keyboard.

`isFocusVisible`

`[data-focus-visible]`

Whether the button is keyboard focused.

`isDisabled`

`[data-disabled]`

Whether the button is disabled.

`isPending`

`[data-pending]`

Whether the button is currently in a pending state.

The [Popover](https://react-spectrum.adobe.com/react-aria/Popover.html) component can be targeted with the `.react-aria-Popover` CSS selector, or by overriding with a custom `className`. Note that it renders in a [React Portal](https://reactjs.org/docs/portals.html), so it will not appear as a descendant of the MenuTrigger in the DOM. It supports the following states and render props:

Name

CSS Selector

Description

`trigger`

`[data-trigger="..."]`

The name of the component that triggered the popover, e.g. "DialogTrigger" or "ComboBox".

`placement`

`[data-placement="left | right | top | bottom"]`

The placement of the popover relative to the trigger.

`isEntering`

`[data-entering]`

Whether the popover is currently entering. Use this to apply animations.

`isExiting`

`[data-exiting]`

Whether the popover is currently exiting. Use this to apply animations.

Within a MenuTrigger, the popover will have the `data-trigger="MenuTrigger"` attribute, which can be used to define menu-specific styles. In addition, the `--trigger-width` CSS custom property will be set on the popover, which you can use to make the popover match the width of the menu button.

```
.react-aria-Popover[data-trigger=MenuTrigger] {
  width: var(--trigger-width);
}
```

```
.react-aria-Popover[data-trigger=MenuTrigger] {
  width: var(--trigger-width);
}
```

```
.react-aria-Popover[data-trigger=MenuTrigger] {
  width: var(--trigger-width);
}
```

Within a SubmenuTrigger, the popover will have the `data-trigger="SubmenuTrigger"` attribute, which can be used to define submenu-specific styles.

```
.react-aria-Popover[data-trigger=SubmenuTrigger][data-placement="right"] {
  transform: translateX(-5px);
}

.react-aria-Popover[data-trigger=SubmenuTrigger][data-placement="left"] {
  transform: translateX(5px);
}
```

```
.react-aria-Popover[data-trigger=SubmenuTrigger][data-placement="right"] {
  transform: translateX(-5px);
}

.react-aria-Popover[data-trigger=SubmenuTrigger][data-placement="left"] {
  transform: translateX(5px);
}
```

```
.react-aria-Popover[data-trigger=SubmenuTrigger][data-placement="right"] {
  transform: translateX(-5px);
}

.react-aria-Popover[data-trigger=SubmenuTrigger][data-placement="left"] {
  transform: translateX(5px);
}
```

A `Menu` can be targeted with the `.react-aria-Menu` CSS selector, or by overriding with a custom `className`.

A `MenuSection` can be targeted with the `.react-aria-MenuSection` CSS selector, or by overriding with a custom `className`. See [sections](#sections) for examples.

A `Header` within a `MenuSection` can be targeted with the `.react-aria-Header` CSS selector, or by overriding with a custom `className`. See [sections](#sections) for examples.

A `MenuItem` can be targeted with the `.react-aria-MenuItem` CSS selector, or by overriding with a custom `className`. It supports the following states and render props:

Name

CSS Selector

Description

`hasSubmenu`

`[data-has-submenu]`

Whether the item has a submenu.

`isOpen`

`[data-open]`

Whether the item's submenu is open.

`isHovered`

`[data-hovered]`

Whether the item is currently hovered with a mouse.

`isPressed`

`[data-pressed]`

Whether the item is currently in a pressed state.

`isSelected`

`[data-selected]`

Whether the item is currently selected.

`isFocused`

`[data-focused]`

Whether the item is currently focused.

`isFocusVisible`

`[data-focus-visible]`

Whether the item is currently keyboard focused.

`isDisabled`

`[data-disabled]`

Whether the item is non-interactive, i.e. both selection and actions are disabled and the item may not be focused. Dependent on `disabledKeys` and `disabledBehavior`.

`selectionMode`

`[data-selection-mode="single | multiple"]`

The type of selection that is allowed in the collection.

`selectionBehavior`

`—`

The selection behavior for the collection.

MenuItems also support two slots: a label, and a description. When provided using the `<Text>` element, the item will have `aria-labelledby` and `aria-describedby` attributes pointing to these slots, improving screen reader announcement. See [text slots](#text-slots) for an example.

Note that items may not contain interactive children such as buttons, as screen readers will not be able to access them.

A `Separator` can be targeted with the `.react-aria-Separator` CSS selector, or by overriding with a custom `className`.

* * *

If you need to customize one of the components within a `MenuTrigger`, such as `Button` or `Menu`, in many cases you can create a wrapper component. This lets you customize the props passed to the component.

```
function MyMenu(props) {
  return <Menu {...props} className="my-menu" />
}
```

```
function MyMenu(props) {
  return <Menu {...props} className="my-menu" />
}
```

```
function MyMenu(props) {
  return (
    <Menu
      {...props}
      className="my-menu"
    />
  );
}
```

MenuTrigger passes props to its child components, such as the button and popover, via their associated contexts. These contexts are exported so you can also consume them in your own custom components. This enables you to reuse existing components from your app or component library together with React Aria Components.

Component

Context

Props

Ref

`Button`

`ButtonContext`

`[ButtonProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Button.tsx:ButtonProps)`

`[HTMLButtonElement](https://developer.mozilla.org/docs/Web/API/HTMLButtonElement)`

`Popover`

`PopoverContext`

`[PopoverProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Popover.tsx:PopoverProps)`

`[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)`

`Menu`

`MenuContext`

`[MenuProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Menu.tsx:MenuProps)`

`[HTMLDivElement](https://developer.mozilla.org/docs/Web/API/HTMLDivElement)`

`Separator`

`SeparatorContext`

`[SeparatorProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Separator.tsx:SeparatorProps)`

`[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)`

`Text`

`TextContext`

`[TextProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Text.tsx:TextProps)`

`[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)`

`Keyboard`

`KeyboardContext`

`[HTMLAttributes](#undefined)`

`[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)`

This example consumes from `KeyboardContext` in an existing styled keyboard shortcut component to make it compatible with React Aria Components. The `[useContextProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:useContextProps)` hook merges the local props and ref with the ones provided via context by Menu.

```
import {KeyboardContext, useContextProps} from 'react-aria-components';

const MyKeyboard = React.forwardRef(
  (
    props: React.HTMLAttributes<HTMLElement>,
    ref: React.ForwardedRef<HTMLElement>
  ) => {
    // Merge the local props and ref with the ones provided via context.
    [props, ref] = useContextProps(props, ref, KeyboardContext);
    // ... your existing Keyboard component
    return <kbd {...props} ref={ref} />;
  }
);
```

```
import {
  KeyboardContext,
  useContextProps
} from 'react-aria-components';

const MyKeyboard = React.forwardRef(
  (
    props: React.HTMLAttributes<HTMLElement>,
    ref: React.ForwardedRef<HTMLElement>
  ) => {
    // Merge the local props and ref with the ones provided via context.
    [props, ref] = useContextProps(
      props,
      ref,
      KeyboardContext
    );
    // ... your existing Keyboard component
    return <kbd {...props} ref={ref} />;
  }
);
```

```
import {
  KeyboardContext,
  useContextProps
} from 'react-aria-components';

const MyKeyboard = React
  .forwardRef(
    (
      props:
        React.HTMLAttributes<
          HTMLElement
        >,
      ref:
        React.ForwardedRef<
          HTMLElement
        >
    ) => {
      // Merge the local props and ref with the ones provided via context.
      [props, ref] =
        useContextProps(
          props,
          ref,
          KeyboardContext
        );
      // ... your existing Keyboard component
      return (
        <kbd
          {...props}
          ref={ref}
        />
      );
    }
  );
```

Now you can use `MyKeyboard` within a `Menu`, in place of the builtin React Aria Components `Keyboard`.

```
<Menu>
  <MenuItem textValue="Paste">
    <Text slot="label">Paste</Text>
    <MyKeyboard>⌘V</MyKeyboard>  </MenuItem>
  {/* ... */}
</Menu>
```

```
<Menu>
  <MenuItem textValue="Paste">
    <Text slot="label">Paste</Text>
    <MyKeyboard>⌘V</MyKeyboard>  </MenuItem>
  {/* ... */}
</Menu>
```

```
<Menu>
  <MenuItem textValue="Paste">
    <Text slot="label">
      Paste
    </Text>
    <MyKeyboard>
      ⌘V
    </MyKeyboard>  </MenuItem>
  {/* ... */}
</Menu>
```

If you need to customize things further, such as intercepting events or customizing DOM structure, you can drop down to the lower level Hook-based API. React Aria Hooks and Components can be mixed and matched by providing or consuming from the corresponding contexts that are exported for each component. See [useMenu](https://react-spectrum.adobe.com/react-aria/useMenu.html) for details.

This example implements a custom `OptionMenuTrigger` component that intercepts the keyboard and press events returned by `useMenuTrigger` so that the menu only opens if the user holds the Alt key. This allows a button to have a default action, with additional options for power users.

```
import {ButtonContext, MenuContext, OverlayTriggerStateContext, PopoverContext, Provider} from 'react-aria-components';
import {useMenuTriggerState} from 'react-stately';
import {useMenuTrigger} from 'react-aria';

function OptionMenuTrigger(props: MenuTriggerProps) {
  let state = useMenuTriggerState(props);
  let ref = React.useRef(null);
  let { menuTriggerProps, menuProps } = useMenuTrigger(props, state, ref);

  return (
    // Provider is a utility that renders multiple context providers without nesting.
    <Provider
      values={[
        [ButtonContext, {
          ...menuTriggerProps,
          // Intercept events and only forward to useMenuTrigger if alt key is held.
          onPressStart: (e) => e.altKey && menuTriggerProps.onPressStart(e),
          onPress: (e) =>
            (e.pointerType !== 'mouse' || e.altKey) &&
            menuTriggerProps.onPress(e),
          onKeyDown: (e) => e.altKey && menuTriggerProps.onKeyDown(e),
          ref,
          isPressed: state.isOpen
        }],
        [OverlayTriggerStateContext, state],
        [PopoverContext, { triggerRef: ref, placement: 'bottom start' }],
        [MenuContext, menuProps]
      ]}
    >
      {props.children}
    </Provider>
  );
}
```

```
import {
  ButtonContext,
  MenuContext,
  OverlayTriggerStateContext,
  PopoverContext,
  Provider
} from 'react-aria-components';
import {useMenuTriggerState} from 'react-stately';
import {useMenuTrigger} from 'react-aria';

function OptionMenuTrigger(props: MenuTriggerProps) {
  let state = useMenuTriggerState(props);
  let ref = React.useRef(null);
  let { menuTriggerProps, menuProps } = useMenuTrigger(
    props,
    state,
    ref
  );

  return (
    // Provider is a utility that renders multiple context providers without nesting.
    <Provider
      values={[
        [ButtonContext, {
          ...menuTriggerProps,
          // Intercept events and only forward to useMenuTrigger if alt key is held.
          onPressStart: (e) =>
            e.altKey && menuTriggerProps.onPressStart(e),
          onPress: (e) =>
            (e.pointerType !== 'mouse' || e.altKey) &&
            menuTriggerProps.onPress(e),
          onKeyDown: (e) =>
            e.altKey && menuTriggerProps.onKeyDown(e),
          ref,
          isPressed: state.isOpen
        }],
        [OverlayTriggerStateContext, state],
        [PopoverContext, {
          triggerRef: ref,
          placement: 'bottom start'
        }],
        [MenuContext, menuProps]
      ]}
    >
      {props.children}
    </Provider>
  );
}
```

```
import {
  ButtonContext,
  MenuContext,
  OverlayTriggerStateContext,
  PopoverContext,
  Provider
} from 'react-aria-components';
import {useMenuTriggerState} from 'react-stately';
import {useMenuTrigger} from 'react-aria';

function OptionMenuTrigger(
  props: MenuTriggerProps
) {
  let state =
    useMenuTriggerState(
      props
    );
  let ref = React.useRef(
    null
  );
  let {
    menuTriggerProps,
    menuProps
  } = useMenuTrigger(
    props,
    state,
    ref
  );

  return (
    // Provider is a utility that renders multiple context providers without nesting.
    <Provider
      values={[
        [ButtonContext, {
          ...menuTriggerProps,
          // Intercept events and only forward to useMenuTrigger if alt key is held.
          onPressStart:
            (e) =>
              e.altKey &&
              menuTriggerProps
                .onPressStart(
                  e
                ),
          onPress: (e) =>
            (e.pointerType !==
                'mouse' ||
              e.altKey) &&
            menuTriggerProps
              .onPress(
                e
              ),
          onKeyDown:
            (e) =>
              e.altKey &&
              menuTriggerProps
                .onKeyDown(
                  e
                ),
          ref,
          isPressed:
            state.isOpen
        }],
        [
          OverlayTriggerStateContext,
          state
        ],
        [
          PopoverContext,
          {
            triggerRef:
              ref,
            placement:
              'bottom start'
          }
        ],
        [
          MenuContext,
          menuProps
        ]
      ]}
    >
      {props.children}
    </Provider>
  );
}
```

By providing the above contexts, the existing `Button`, `Popover`, and `Menu` components from React Aria Components can be used with this custom trigger built with the hooks.

```
<OptionMenuTrigger>
  <Button>Save</Button>
  <Popover>
    <Menu>
      <MenuItem>Save</MenuItem>
      <MenuItem>Save as…</MenuItem>
      <MenuItem>Rename…</MenuItem>
      <MenuItem>Delete…</MenuItem>
    </Menu>
  </Popover>
</OptionMenuTrigger>
```

```
<OptionMenuTrigger>
  <Button>Save</Button>
  <Popover>
    <Menu>
      <MenuItem>Save</MenuItem>
      <MenuItem>Save as…</MenuItem>
      <MenuItem>Rename…</MenuItem>
      <MenuItem>Delete…</MenuItem>
    </Menu>
  </Popover>
</OptionMenuTrigger>
```

```
<OptionMenuTrigger>
  <Button>Save</Button>
  <Popover>
    <Menu>
      <MenuItem>
        Save
      </MenuItem>
      <MenuItem>
        Save as…
      </MenuItem>
      <MenuItem>
        Rename…
      </MenuItem>
      <MenuItem>
        Delete…
      </MenuItem>
    </Menu>
  </Popover>
</OptionMenuTrigger>
```

* * *

`@react-aria/test-utils` offers common menu interaction utilities which you may find helpful when writing tests. See [here](https://react-spectrum.adobe.com/react-aria/testing.html#react-aria-test-utils) for more information on how to setup these utilities in your tests. Below is the full definition of the menu tester and a sample of how you could use it in your test suite.

```
// Menu.test.ts
import {render} from '@testing-library/react';
import {User} from '@react-aria/test-utils';

let testUtilUser = new User({ interactionType: 'mouse' });
// ...

it('Menu can open its submenu via keyboard', async function () {
  // Render your test component/app and initialize the menu tester
  let { getByTestId } = render(
    <MenuTrigger>
      <Button data-testid="test-menutrigger">Menu trigger</Button>
      ...
    </MenuTrigger>
  );
  let menuTester = testUtilUser.createTester('Menu', {
    root: getByTestId('test-menutrigger'),
    interactionType: 'keyboard'
  });

  await menuTester.open();
  expect(menuTester.menu).toBeInTheDocument();
  let submenuTriggers = menuTester.submenuTriggers;
  expect(submenuTriggers).toHaveLength(1);

  let submenuTester = await menuTester.openSubmenu({
    submenuTrigger: 'Share…'
  });
  expect(submenuTester.menu).toBeInTheDocument();

  await submenuTester.selectOption({ option: submenuTester.options()[0] });
  expect(submenuTester.menu).not.toBeInTheDocument();
  expect(menuTester.menu).not.toBeInTheDocument();
});
```

```
// Menu.test.ts
import {render} from '@testing-library/react';
import {User} from '@react-aria/test-utils';

let testUtilUser = new User({ interactionType: 'mouse' });
// ...

it('Menu can open its submenu via keyboard', async function () {
  // Render your test component/app and initialize the menu tester
  let { getByTestId } = render(
    <MenuTrigger>
      <Button data-testid="test-menutrigger">
        Menu trigger
      </Button>
      ...
    </MenuTrigger>
  );
  let menuTester = testUtilUser.createTester('Menu', {
    root: getByTestId('test-menutrigger'),
    interactionType: 'keyboard'
  });

  await menuTester.open();
  expect(menuTester.menu).toBeInTheDocument();
  let submenuTriggers = menuTester.submenuTriggers;
  expect(submenuTriggers).toHaveLength(1);

  let submenuTester = await menuTester.openSubmenu({
    submenuTrigger: 'Share…'
  });
  expect(submenuTester.menu).toBeInTheDocument();

  await submenuTester.selectOption({
    option: submenuTester.options()[0]
  });
  expect(submenuTester.menu).not.toBeInTheDocument();
  expect(menuTester.menu).not.toBeInTheDocument();
});
```

```
// Menu.test.ts
import {render} from '@testing-library/react';
import {User} from '@react-aria/test-utils';

let testUtilUser =
  new User({
    interactionType:
      'mouse'
  });
// ...

it('Menu can open its submenu via keyboard', async function () {
  // Render your test component/app and initialize the menu tester
  let { getByTestId } =
    render(
      <MenuTrigger>
        <Button data-testid="test-menutrigger">
          Menu trigger
        </Button>
        ...
      </MenuTrigger>
    );
  let menuTester =
    testUtilUser
      .createTester(
        'Menu',
        {
          root:
            getByTestId(
              'test-menutrigger'
            ),
          interactionType:
            'keyboard'
        }
      );

  await menuTester
    .open();
  expect(menuTester.menu)
    .toBeInTheDocument();
  let submenuTriggers =
    menuTester
      .submenuTriggers;
  expect(submenuTriggers)
    .toHaveLength(1);

  let submenuTester =
    await menuTester
      .openSubmenu({
        submenuTrigger:
          'Share…'
      });
  expect(
    submenuTester.menu
  ).toBeInTheDocument();

  await submenuTester
    .selectOption({
      option:
        submenuTester
          .options()[0]
    });
  expect(
    submenuTester.menu
  ).not
    .toBeInTheDocument();
  expect(menuTester.menu)
    .not
    .toBeInTheDocument();
});
```

### Properties

Name

Type

Description

`trigger`

`[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)`

Returns the menu's trigger.

`menu`

`[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element) | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)`

Returns the menu if present.

`sections`

`[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)[]`

Returns the menu's sections if any.

`submenuTriggers`

`[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)[]`

Returns the menu's submenu triggers if any.

### Methods

Method

Description

`constructor( (opts: [MenuTesterOpts](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/test-utils/src/types.ts:MenuTesterOpts) )): void`

`setInteractionType( (type: [UserOpts](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/test-utils/src/types.ts:UserOpts)['interactionType'] )): void`

Set the interaction type used by the menu tester.

`open( (opts: [MenuOpenOpts](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/test-utils/src/menu.ts:MenuOpenOpts) )): [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<void>`

Opens the menu. Defaults to using the interaction type set on the menu tester.

`findOption( (opts: {  optionIndexOrText: [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) |  | [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)  } )): [HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)`

Returns a option matching the specified index or text content.

`selectOption( (opts: [MenuSelectOpts](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/test-utils/src/menu.ts:MenuSelectOpts) )): [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<void>`

Selects the desired menu option. Defaults to using the interaction type set on the menu tester. If necessary, will open the menu dropdown beforehand. The desired option can be targeted via the option's node, the option's text, or the option's index.

`openSubmenu( (opts: [MenuOpenSubmenuOpts](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/test-utils/src/menu.ts:MenuOpenSubmenuOpts) )): [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<[MenuTester](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/test-utils/src/menu.ts:MenuTester) | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)>`

Opens the submenu. Defaults to using the interaction type set on the menu tester. The submenu trigger can be targeted via the trigger's node or the trigger's text.

`close(): [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<void>`

Closes the menu.

`options( (opts: {  element?: [HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)  } )): [HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)[]`

Returns the menu's options if present. Can be filtered to a subsection of the menu if provided via `element`.