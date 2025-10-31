# ListBox

**Source**: [https://react-spectrum.adobe.com/react-aria/ListBox.html](https://react-spectrum.adobe.com/react-aria/ListBox.html)

> Documentation for ListBox in the React Aria package.

---

A listbox displays a list of options and allows a user to select one or more of them.

* * *

```
import {ListBox, ListBoxItem} from 'react-aria-components';

<ListBox aria-label="Favorite animal" selectionMode="single">
  <ListBoxItem>Aardvark</ListBoxItem>
  <ListBoxItem>Cat</ListBoxItem>
  <ListBoxItem>Dog</ListBoxItem>
  <ListBoxItem>Kangaroo</ListBoxItem>
  <ListBoxItem>Panda</ListBoxItem>
  <ListBoxItem>Snake</ListBoxItem>
</ListBox>
```

```
import {ListBox, ListBoxItem} from 'react-aria-components';

<ListBox
  aria-label="Favorite animal"
  selectionMode="single"
>
  <ListBoxItem>Aardvark</ListBoxItem>
  <ListBoxItem>Cat</ListBoxItem>
  <ListBoxItem>Dog</ListBoxItem>
  <ListBoxItem>Kangaroo</ListBoxItem>
  <ListBoxItem>Panda</ListBoxItem>
  <ListBoxItem>Snake</ListBoxItem>
</ListBox>
```

```
import {
  ListBox,
  ListBoxItem
} from 'react-aria-components';

<ListBox
  aria-label="Favorite animal"
  selectionMode="single"
>
  <ListBoxItem>
    Aardvark
  </ListBoxItem>
  <ListBoxItem>
    Cat
  </ListBoxItem>
  <ListBoxItem>
    Dog
  </ListBoxItem>
  <ListBoxItem>
    Kangaroo
  </ListBoxItem>
  <ListBoxItem>
    Panda
  </ListBoxItem>
  <ListBoxItem>
    Snake
  </ListBoxItem>
</ListBox>
```

Show CSS

```
@import "@react-aria/example-theme";

.react-aria-ListBox {
  display: flex;
  flex-direction: column;
  gap: 4px;
  max-height: inherit;
  overflow: auto;
  padding: 4px;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  background: var(--overlay-background);
  forced-color-adjust: none;
  outline: none;
  width: 250px;
  max-height: 300px;
  min-height: 100px;
  box-sizing: border-box;

  &[data-focus-visible] {
    outline: 2px solid var(--focus-ring-color);
    outline-offset: -1px;
  }
}

.react-aria-ListBoxItem {
  padding: 0 0.571rem;
  border-radius: 6px;
  outline: none;
  cursor: default;
  color: var(--text-color);
  font-size: 1.072rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 32px;

  &[data-focus-visible] {
    outline: 2px solid var(--focus-ring-color);
    outline-offset: -2px;
  }

  &[data-selected] {
    background: var(--highlight-background);
    color: var(--highlight-foreground);

    &[data-focus-visible] {
      outline-color: var(--highlight-foreground);
      outline-offset: -4px;
    }
  }
}
```

```
@import "@react-aria/example-theme";

.react-aria-ListBox {
  display: flex;
  flex-direction: column;
  gap: 4px;
  max-height: inherit;
  overflow: auto;
  padding: 4px;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  background: var(--overlay-background);
  forced-color-adjust: none;
  outline: none;
  width: 250px;
  max-height: 300px;
  min-height: 100px;
  box-sizing: border-box;

  &[data-focus-visible] {
    outline: 2px solid var(--focus-ring-color);
    outline-offset: -1px;
  }
}

.react-aria-ListBoxItem {
  padding: 0 0.571rem;
  border-radius: 6px;
  outline: none;
  cursor: default;
  color: var(--text-color);
  font-size: 1.072rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 32px;

  &[data-focus-visible] {
    outline: 2px solid var(--focus-ring-color);
    outline-offset: -2px;
  }

  &[data-selected] {
    background: var(--highlight-background);
    color: var(--highlight-foreground);

    &[data-focus-visible] {
      outline-color: var(--highlight-foreground);
      outline-offset: -4px;
    }
  }
}
```

```
@import "@react-aria/example-theme";

.react-aria-ListBox {
  display: flex;
  flex-direction: column;
  gap: 4px;
  max-height: inherit;
  overflow: auto;
  padding: 4px;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  background: var(--overlay-background);
  forced-color-adjust: none;
  outline: none;
  width: 250px;
  max-height: 300px;
  min-height: 100px;
  box-sizing: border-box;

  &[data-focus-visible] {
    outline: 2px solid var(--focus-ring-color);
    outline-offset: -1px;
  }
}

.react-aria-ListBoxItem {
  padding: 0 0.571rem;
  border-radius: 6px;
  outline: none;
  cursor: default;
  color: var(--text-color);
  font-size: 1.072rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 32px;

  &[data-focus-visible] {
    outline: 2px solid var(--focus-ring-color);
    outline-offset: -2px;
  }

  &[data-selected] {
    background: var(--highlight-background);
    color: var(--highlight-foreground);

    &[data-focus-visible] {
      outline-color: var(--highlight-foreground);
      outline-offset: -4px;
    }
  }
}
```

* * *

A listbox can be built using the [<select>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select) and [<option>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option) HTML elements, but this is not possible to style consistently cross browser. `ListBox` helps you build accessible listbox components that can be styled as needed.

-   **Item selection** – Single or multiple selection, disabled rows, and both `toggle` and `replace` selection behaviors.
-   **Keyboard navigation** – List items can be navigated using the arrow keys, along with page up/down, home/end, etc. Typeahead, auto scrolling, and selection modifier keys are supported as well.
-   **Layout options** – Items can be arranged in a vertical or horizontal stack, or as a two-dimensional grid.
-   **Drag and drop** – ListBox supports drag and drop to reorder, insert, or update items via mouse, touch, keyboard, and screen reader interactions.
-   **Virtualized scrolling** – Use [Virtualizer](https://react-spectrum.adobe.com/react-aria/Virtualizer.html) to improve performance of large lists by rendering only the visible items.
-   **Touch friendly** – Selection behavior adapts depending on the device. For example, selection occurs on mouse down but on touch up, which is consistent with native conventions.
-   **Accessible** – Follows the [ARIA listbox pattern](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/), with support for items and sections, and slots for label and description elements within each item for improved screen reader announcement.
-   **Styleable** – Items include builtin states for styling, such as hover, press, focus, selected, and disabled.

Note: `ListBox` only handles the list itself. For a dropdown, see [Select](https://react-spectrum.adobe.com/react-aria/Select.html).

* * *

Option 1Option 2ItemItem labelDescriptionDescriptionOption 3DescriptionItem descriptionSECTION TITLESection headerSection

A listbox consists of a container element, with a list of items or sections inside. Users can select one or more items by clicking, tapping, or navigating with the keyboard.

```
import {Header, ListBox, ListBoxItem, ListBoxSection, SelectionIndicator, Text} from 'react-aria-components';

<ListBox>
  <ListBoxItem>
    <Text slot="label" />
    <Text slot="description" />
    <SelectionIndicator />
  </ListBoxItem>
  <ListBoxSection>
    <Header />
    <ListBoxItem />
  </ListBoxSection>
</ListBox>
```

```
import {
  Header,
  ListBox,
  ListBoxItem,
  ListBoxSection,
  SelectionIndicator,
  Text
} from 'react-aria-components';

<ListBox>
  <ListBoxItem>
    <Text slot="label" />
    <Text slot="description" />
    <SelectionIndicator />
  </ListBoxItem>
  <ListBoxSection>
    <Header />
    <ListBoxItem />
  </ListBoxSection>
</ListBox>
```

```
import {
  Header,
  ListBox,
  ListBoxItem,
  ListBoxSection,
  SelectionIndicator,
  Text
} from 'react-aria-components';

<ListBox>
  <ListBoxItem>
    <Text slot="label" />
    <Text slot="description" />
    <SelectionIndicator />
  </ListBoxItem>
  <ListBoxSection>
    <Header />
    <ListBoxItem />
  </ListBoxSection>
</ListBox>
```

`ListBox` makes use of the following concepts:

[

Collections

Defining collections of items, async loading, and updating items over time.

](https://react-spectrum.adobe.com/react-aria/collections.html)[

Selection

Interactions and data structures to represent selection.

](https://react-spectrum.adobe.com/react-aria/selection.html)[

Drag and drop

Concepts and interactions for an accessible drag and drop experience.

](https://react-spectrum.adobe.com/react-aria/dnd.html)

* * *

[![](https://react-spectrum.adobe.com/contact-list.16734ba2.png)

Contact List

A ListBox featuring sticky section headers and multiple selection.

](https://react-spectrum.adobe.com/react-aria/examples/contact-list.html)[![](https://react-spectrum.adobe.com/image-grid.9dce86e3.png)

Image Grid

An async image gallery with selectable items, styled with Tailwind CSS.

](https://react-spectrum.adobe.com/react-aria/examples/image-grid.html)[![](https://react-spectrum.adobe.com/searchable-select.5f3b4739.png)

Searchable Select

A Select component with Autocomplete filtering.

](https://react-spectrum.adobe.com/react-aria/examples/searchable-select.html)

* * *

To help kick-start your project, we offer starter kits that include example implementations of all React Aria components with various styling solutions. All components are fully styled, including support for dark mode, high contrast mode, and all UI states. Each starter comes with a pre-configured [Storybook](https://storybook.js.org/) that you can experiment with, or use as a starting point for your own component library.

* * *

If you will use a ListBox in multiple places in your app, you can wrap all of the pieces into a reusable component. This way, the DOM structure, styling code, and other logic are defined in a single place and reused everywhere to ensure consistency.

This example wraps `ListBox` and all of its children together into a single component which accepts a `label` prop and `children`, which are passed through to the right places. The `ListBoxItem` component is also wrapped to apply class names based on the current state, as described in the [styling](#styling) section.

```
import type {ListBoxItemProps, ListBoxProps} from 'react-aria-components';

function MyListBox<T extends object>({ children, ...props }: ListBoxProps<T>) {
  return (
    <ListBox {...props} className="my-listbox">
      {children}
    </ListBox>
  );
}

function MyItem(props: ListBoxItemProps) {
  return (
    <ListBoxItem
      {...props}
      className={({ isFocusVisible, isSelected }) =>
        `my-item ${isFocusVisible ? 'focused' : ''} ${
          isSelected ? 'selected' : ''
        }`}
    />
  );
}

<MyListBox aria-label="Ice cream flavor" selectionMode="single">
  <MyItem>Chocolate</MyItem>
  <MyItem>Mint</MyItem>
  <MyItem>Strawberry</MyItem>
  <MyItem>Vanilla</MyItem>
</MyListBox>
```

```
import type {
  ListBoxItemProps,
  ListBoxProps
} from 'react-aria-components';

function MyListBox<T extends object>(
  { children, ...props }: ListBoxProps<T>
) {
  return (
    <ListBox {...props} className="my-listbox">
      {children}
    </ListBox>
  );
}

function MyItem(props: ListBoxItemProps) {
  return (
    <ListBoxItem
      {...props}
      className={({ isFocusVisible, isSelected }) =>
        `my-item ${isFocusVisible ? 'focused' : ''} ${
          isSelected ? 'selected' : ''
        }`}
    />
  );
}

<MyListBox
  aria-label="Ice cream flavor"
  selectionMode="single"
>
  <MyItem>Chocolate</MyItem>
  <MyItem>Mint</MyItem>
  <MyItem>Strawberry</MyItem>
  <MyItem>Vanilla</MyItem>
</MyListBox>
```

```
import type {
  ListBoxItemProps,
  ListBoxProps
} from 'react-aria-components';

function MyListBox<
  T extends object
>(
  { children, ...props }:
    ListBoxProps<T>
) {
  return (
    <ListBox
      {...props}
      className="my-listbox"
    >
      {children}
    </ListBox>
  );
}

function MyItem(
  props: ListBoxItemProps
) {
  return (
    <ListBoxItem
      {...props}
      className={(
        {
          isFocusVisible,
          isSelected
        }
      ) =>
        `my-item ${
          isFocusVisible
            ? 'focused'
            : ''
        } ${
          isSelected
            ? 'selected'
            : ''
        }`}
    />
  );
}

<MyListBox
  aria-label="Ice cream flavor"
  selectionMode="single"
>
  <MyItem>
    Chocolate
  </MyItem>
  <MyItem>Mint</MyItem>
  <MyItem>
    Strawberry
  </MyItem>
  <MyItem>
    Vanilla
  </MyItem>
</MyListBox>
```

Show CSS

```
.my-listbox {
  max-height: inherit;
  overflow: auto;
  padding: 4px;
  gap: 4px;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  background: var(--overlay-background);
  outline: none;
  max-width: 250px;
  max-height: 300px;
  box-sizing: border-box;
}

.my-item {
  --highlight: #e70073;

  padding: 0.286rem 0.571rem;
  border-radius: 6px;
  outline: none;
  cursor: default;
  color: var(--text-color);
  font-size: 1.072rem;

  &.selected {
    background: var(--highlight);
    color: var(--highlight-foreground);
  }

  &.focused {
    outline: 2px solid var(--highlight);
    outline-offset: 2px;
  }
}

@media (forced-colors: active) {
  .my-item {
    forced-color-adjust: none;
    --highlight: Highlight;
  }
}
```

```
.my-listbox {
  max-height: inherit;
  overflow: auto;
  padding: 4px;
  gap: 4px;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  background: var(--overlay-background);
  outline: none;
  max-width: 250px;
  max-height: 300px;
  box-sizing: border-box;
}

.my-item {
  --highlight: #e70073;

  padding: 0.286rem 0.571rem;
  border-radius: 6px;
  outline: none;
  cursor: default;
  color: var(--text-color);
  font-size: 1.072rem;

  &.selected {
    background: var(--highlight);
    color: var(--highlight-foreground);
  }

  &.focused {
    outline: 2px solid var(--highlight);
    outline-offset: 2px;
  }
}

@media (forced-colors: active) {
  .my-item {
    forced-color-adjust: none;
    --highlight: Highlight;
  }
}
```

```
.my-listbox {
  max-height: inherit;
  overflow: auto;
  padding: 4px;
  gap: 4px;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  background: var(--overlay-background);
  outline: none;
  max-width: 250px;
  max-height: 300px;
  box-sizing: border-box;
}

.my-item {
  --highlight: #e70073;

  padding: 0.286rem 0.571rem;
  border-radius: 6px;
  outline: none;
  cursor: default;
  color: var(--text-color);
  font-size: 1.072rem;

  &.selected {
    background: var(--highlight);
    color: var(--highlight-foreground);
  }

  &.focused {
    outline: 2px solid var(--highlight);
    outline-offset: 2px;
  }
}

@media (forced-colors: active) {
  .my-item {
    forced-color-adjust: none;
    --highlight: Highlight;
  }
}
```

## Content[#](#content)

* * *

`ListBox` follows the [Collection Components API](https://react-spectrum.adobe.com/react-aria/collections.html), accepting both static and dynamic collections. The examples above show static collections, which can be used when the full list of options is known ahead of time. Dynamic collections, as shown below, can be used when the options come from an external data source such as an API call, or update over time.

As seen below, an iterable list of options is passed to the ListBox using the `items` prop. Each item accepts an `id` prop, which is passed to the `onSelectionChange` handler to identify the selected item. Alternatively, if the item objects contain an `id` property, as shown in the example below, then this is used automatically and an `id` prop is not required.

```
function Example() {
  let options = [
    { id: 1, name: 'Aardvark' },
    { id: 2, name: 'Cat' },
    { id: 3, name: 'Dog' },
    { id: 4, name: 'Kangaroo' },
    { id: 5, name: 'Koala' },
    { id: 6, name: 'Penguin' },
    { id: 7, name: 'Snake' },
    { id: 8, name: 'Turtle' },
    { id: 9, name: 'Wombat' }
  ];

  return (
    <ListBox aria-label="Animals" items={options} selectionMode="single">
      {(item) => <ListBoxItem>{item.name}</ListBoxItem>}
    </ListBox>
  );
}
```

```
function Example() {
  let options = [
    { id: 1, name: 'Aardvark' },
    { id: 2, name: 'Cat' },
    { id: 3, name: 'Dog' },
    { id: 4, name: 'Kangaroo' },
    { id: 5, name: 'Koala' },
    { id: 6, name: 'Penguin' },
    { id: 7, name: 'Snake' },
    { id: 8, name: 'Turtle' },
    { id: 9, name: 'Wombat' }
  ];

  return (
    <ListBox
      aria-label="Animals"
      items={options}
      selectionMode="single"
    >
      {(item) => <ListBoxItem>{item.name}</ListBoxItem>}
    </ListBox>
  );
}
```

```
function Example() {
  let options = [
    {
      id: 1,
      name: 'Aardvark'
    },
    {
      id: 2,
      name: 'Cat'
    },
    {
      id: 3,
      name: 'Dog'
    },
    {
      id: 4,
      name: 'Kangaroo'
    },
    {
      id: 5,
      name: 'Koala'
    },
    {
      id: 6,
      name: 'Penguin'
    },
    {
      id: 7,
      name: 'Snake'
    },
    {
      id: 8,
      name: 'Turtle'
    },
    {
      id: 9,
      name: 'Wombat'
    }
  ];

  return (
    <ListBox
      aria-label="Animals"
      items={options}
      selectionMode="single"
    >
      {(item) => (
        <ListBoxItem>
          {item.name}
        </ListBoxItem>
      )}
    </ListBox>
  );
}
```

* * *

ListBox supports multiple selection modes. By default, selection is disabled, however this can be changed using the `selectionMode` prop. Use `defaultSelectedKeys` to provide a default set of selected items (uncontrolled) and `selectedKeys` to set the selected items (controlled). The value of the selected keys must match the `id` prop of the items. See the [Selection](https://react-spectrum.adobe.com/react-aria/selection.html) guide for more details.

```
import type {Selection} from 'react-aria-components';

function Example() {
  let [selected, setSelected] = React.useState<Selection>(new Set(['cheese']));

  return (
    <>
      <ListBox
        aria-label="Sandwich contents"
        selectionMode="multiple"
        selectedKeys={selected}
        onSelectionChange={setSelected}      >
        <ListBoxItem id="lettuce">Lettuce</ListBoxItem>
        <ListBoxItem id="tomato">Tomato</ListBoxItem>
        <ListBoxItem id="cheese">Cheese</ListBoxItem>
        <ListBoxItem id="tuna">Tuna Salad</ListBoxItem>
        <ListBoxItem id="egg">Egg Salad</ListBoxItem>
        <ListBoxItem id="ham">Ham</ListBoxItem>
      </ListBox>
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
    new Set(['cheese'])
  );

  return (
    <>
      <ListBox
        aria-label="Sandwich contents"
        selectionMode="multiple"
        selectedKeys={selected}
        onSelectionChange={setSelected}      >
        <ListBoxItem id="lettuce">Lettuce</ListBoxItem>
        <ListBoxItem id="tomato">Tomato</ListBoxItem>
        <ListBoxItem id="cheese">Cheese</ListBoxItem>
        <ListBoxItem id="tuna">Tuna Salad</ListBoxItem>
        <ListBoxItem id="egg">Egg Salad</ListBoxItem>
        <ListBoxItem id="ham">Ham</ListBoxItem>
      </ListBox>
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
  >(new Set(['cheese']));

  return (
    <>
      <ListBox
        aria-label="Sandwich contents"
        selectionMode="multiple"
        selectedKeys={selected}
        onSelectionChange={setSelected}      >
        <ListBoxItem id="lettuce">
          Lettuce
        </ListBoxItem>
        <ListBoxItem id="tomato">
          Tomato
        </ListBoxItem>
        <ListBoxItem id="cheese">
          Cheese
        </ListBoxItem>
        <ListBoxItem id="tuna">
          Tuna Salad
        </ListBoxItem>
        <ListBoxItem id="egg">
          Egg Salad
        </ListBoxItem>
        <ListBoxItem id="ham">
          Ham
        </ListBoxItem>
      </ListBox>
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

By default, `ListBox` uses the `"toggle"` selection behavior, which behaves like a checkbox group: clicking, tapping, or pressing the Space or Enter keys toggles selection for the focused row. Using the arrow keys moves focus but does not change selection.

When `selectionBehavior` is set to `"replace"`, clicking a row with the mouse replaces the selection with only that row. Using the arrow keys moves both focus and selection. To select multiple rows, modifier keys such as Ctrl, Cmd, and Shift can be used. On touch screen devices, selection always behaves as toggle since modifier keys may not be available.

These selection behaviors are defined in [Aria Practices](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/#keyboardinteraction).

```
<ListBox
  aria-label="Sandwich contents"
  selectionMode="multiple"
  selectionBehavior="replace">
  <ListBoxItem id="lettuce">Lettuce</ListBoxItem>
  <ListBoxItem id="tomato">Tomato</ListBoxItem>
  <ListBoxItem id="cheese">Cheese</ListBoxItem>
  <ListBoxItem id="tuna">Tuna Salad</ListBoxItem>
  <ListBoxItem id="egg">Egg Salad</ListBoxItem>
  <ListBoxItem id="ham">Ham</ListBoxItem>
</ListBox>
```

```
<ListBox
  aria-label="Sandwich contents"
  selectionMode="multiple"
  selectionBehavior="replace">
  <ListBoxItem id="lettuce">Lettuce</ListBoxItem>
  <ListBoxItem id="tomato">Tomato</ListBoxItem>
  <ListBoxItem id="cheese">Cheese</ListBoxItem>
  <ListBoxItem id="tuna">Tuna Salad</ListBoxItem>
  <ListBoxItem id="egg">Egg Salad</ListBoxItem>
  <ListBoxItem id="ham">Ham</ListBoxItem>
</ListBox>
```

```
<ListBox
  aria-label="Sandwich contents"
  selectionMode="multiple"
  selectionBehavior="replace">
  <ListBoxItem id="lettuce">
    Lettuce
  </ListBoxItem>
  <ListBoxItem id="tomato">
    Tomato
  </ListBoxItem>
  <ListBoxItem id="cheese">
    Cheese
  </ListBoxItem>
  <ListBoxItem id="tuna">
    Tuna Salad
  </ListBoxItem>
  <ListBoxItem id="egg">
    Egg Salad
  </ListBoxItem>
  <ListBoxItem id="ham">
    Ham
  </ListBoxItem>
</ListBox>
```

* * *

By default, interacting with an item in a ListBox triggers `onSelectionChange`. Alternatively, items may be links to another page or website. This can be achieved by passing the `href` prop to the `<ListBoxItem>` component.

```
<ListBox aria-label="Links">
  <ListBoxItem href="https://adobe.com/" target="_blank">Adobe</ListBoxItem>
  <ListBoxItem href="https://apple.com/" target="_blank">Apple</ListBoxItem>
  <ListBoxItem href="https://google.com/" target="_blank">Google</ListBoxItem>
  <ListBoxItem href="https://microsoft.com/" target="_blank">
    Microsoft
  </ListBoxItem>
</ListBox>
```

```
<ListBox aria-label="Links">
  <ListBoxItem href="https://adobe.com/" target="_blank">
    Adobe
  </ListBoxItem>
  <ListBoxItem href="https://apple.com/" target="_blank">
    Apple
  </ListBoxItem>
  <ListBoxItem href="https://google.com/" target="_blank">
    Google
  </ListBoxItem>
  <ListBoxItem
    href="https://microsoft.com/"
    target="_blank"
  >
    Microsoft
  </ListBoxItem>
</ListBox>
```

```
<ListBox aria-label="Links">
  <ListBoxItem
    href="https://adobe.com/"
    target="_blank"
  >
    Adobe
  </ListBoxItem>
  <ListBoxItem
    href="https://apple.com/"
    target="_blank"
  >
    Apple
  </ListBoxItem>
  <ListBoxItem
    href="https://google.com/"
    target="_blank"
  >
    Google
  </ListBoxItem>
  <ListBoxItem
    href="https://microsoft.com/"
    target="_blank"
  >
    Microsoft
  </ListBoxItem>
</ListBox>
```

By default, link items in a ListBox are not selectable, and only perform navigation when the user interacts with them. However, with the "replace" [selection behavior](#selection-behavior), items will be selected when single clicking or pressing the Space key, and navigate to the link when double clicking or pressing the Enter key.

```
<ListBox
  aria-label="Links"
  selectionMode="multiple"
  selectionBehavior="replace"
>
  <ListBoxItem href="https://adobe.com/" target="_blank">Adobe</ListBoxItem>
  <ListBoxItem href="https://apple.com/" target="_blank">Apple</ListBoxItem>
  <ListBoxItem href="https://google.com/" target="_blank">Google</ListBoxItem>
  <ListBoxItem href="https://microsoft.com/" target="_blank">
    Microsoft
  </ListBoxItem>
</ListBox>
```

```
<ListBox
  aria-label="Links"
  selectionMode="multiple"
  selectionBehavior="replace"
>
  <ListBoxItem href="https://adobe.com/" target="_blank">
    Adobe
  </ListBoxItem>
  <ListBoxItem href="https://apple.com/" target="_blank">
    Apple
  </ListBoxItem>
  <ListBoxItem href="https://google.com/" target="_blank">
    Google
  </ListBoxItem>
  <ListBoxItem
    href="https://microsoft.com/"
    target="_blank"
  >
    Microsoft
  </ListBoxItem>
</ListBox>
```

```
<ListBox
  aria-label="Links"
  selectionMode="multiple"
  selectionBehavior="replace"
>
  <ListBoxItem
    href="https://adobe.com/"
    target="_blank"
  >
    Adobe
  </ListBoxItem>
  <ListBoxItem
    href="https://apple.com/"
    target="_blank"
  >
    Apple
  </ListBoxItem>
  <ListBoxItem
    href="https://google.com/"
    target="_blank"
  >
    Google
  </ListBoxItem>
  <ListBoxItem
    href="https://microsoft.com/"
    target="_blank"
  >
    Microsoft
  </ListBoxItem>
</ListBox>
```

The `<ListBoxItem>` component works with frameworks and client side routers like [Next.js](https://nextjs.org/) and [React Router](https://reactrouter.com/en/main). As with other React Aria components that support links, this works via the `[RouterProvider](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/utils/src/openLink.tsx:RouterProvider)` component at the root of your app. See the [client side routing guide](https://react-spectrum.adobe.com/react-aria/routing.html) to learn how to set this up.

* * *

ListBox supports sections in order to group options. Sections can be used by wrapping groups of items in a `ListBoxSection` element. A `<Header>` element may also be included to label the section.

```
import {ListBoxSection, Header} from 'react-aria-components';

<ListBox aria-label="Sandwich contents" selectionMode="multiple">
  <ListBoxSection>
    <Header>Veggies</Header>
    <ListBoxItem id="lettuce">Lettuce</ListBoxItem>
    <ListBoxItem id="tomato">Tomato</ListBoxItem>
    <ListBoxItem id="onion">Onion</ListBoxItem>
  </ListBoxSection>
  <ListBoxSection>
    <Header>Protein</Header>
    <ListBoxItem id="ham">Ham</ListBoxItem>
    <ListBoxItem id="tuna">Tuna</ListBoxItem>
    <ListBoxItem id="tofu">Tofu</ListBoxItem>
  </ListBoxSection>
  <ListBoxSection>
    <Header>Condiments</Header>
    <ListBoxItem id="mayo">Mayonaise</ListBoxItem>
    <ListBoxItem id="mustard">Mustard</ListBoxItem>
    <ListBoxItem id="ranch">Ranch</ListBoxItem>
  </ListBoxSection>
</ListBox>
```

```
import {
  Header,
  ListBoxSection
} from 'react-aria-components';

<ListBox
  aria-label="Sandwich contents"
  selectionMode="multiple"
>
  <ListBoxSection>
    <Header>Veggies</Header>
    <ListBoxItem id="lettuce">Lettuce</ListBoxItem>
    <ListBoxItem id="tomato">Tomato</ListBoxItem>
    <ListBoxItem id="onion">Onion</ListBoxItem>
  </ListBoxSection>
  <ListBoxSection>
    <Header>Protein</Header>
    <ListBoxItem id="ham">Ham</ListBoxItem>
    <ListBoxItem id="tuna">Tuna</ListBoxItem>
    <ListBoxItem id="tofu">Tofu</ListBoxItem>
  </ListBoxSection>
  <ListBoxSection>
    <Header>Condiments</Header>
    <ListBoxItem id="mayo">Mayonaise</ListBoxItem>
    <ListBoxItem id="mustard">Mustard</ListBoxItem>
    <ListBoxItem id="ranch">Ranch</ListBoxItem>
  </ListBoxSection>
</ListBox>
```

```
import {
  Header,
  ListBoxSection
} from 'react-aria-components';

<ListBox
  aria-label="Sandwich contents"
  selectionMode="multiple"
>
  <ListBoxSection>
    <Header>
      Veggies
    </Header>
    <ListBoxItem id="lettuce">
      Lettuce
    </ListBoxItem>
    <ListBoxItem id="tomato">
      Tomato
    </ListBoxItem>
    <ListBoxItem id="onion">
      Onion
    </ListBoxItem>
  </ListBoxSection>
  <ListBoxSection>
    <Header>
      Protein
    </Header>
    <ListBoxItem id="ham">
      Ham
    </ListBoxItem>
    <ListBoxItem id="tuna">
      Tuna
    </ListBoxItem>
    <ListBoxItem id="tofu">
      Tofu
    </ListBoxItem>
  </ListBoxSection>
  <ListBoxSection>
    <Header>
      Condiments
    </Header>
    <ListBoxItem id="mayo">
      Mayonaise
    </ListBoxItem>
    <ListBoxItem id="mustard">
      Mustard
    </ListBoxItem>
    <ListBoxItem id="ranch">
      Ranch
    </ListBoxItem>
  </ListBoxSection>
</ListBox>
```

Show CSS

```
.react-aria-ListBox {
  .react-aria-ListBoxSection:not(:first-child) {
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
.react-aria-ListBox {
  .react-aria-ListBoxSection:not(:first-child) {
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
.react-aria-ListBox {
  .react-aria-ListBoxSection:not(:first-child) {
    margin-top: 12px;
  }

  .react-aria-Header {
    font-size: 1.143rem;
    font-weight: bold;
    padding: 0 0.714rem;
  }
}
```

The above example shows sections with static items. Sections can also be populated from a hierarchical data structure. Similarly to the props on ListBox, `<ListBoxSection>` takes an array of data using the `items` prop. If the section also has a header, the `[Collection](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/collections/src/CollectionBuilder.tsx:Collection)` component can be used to render the child items.

```
import type {Selection} from 'react-aria-components';
import {Collection} from 'react-aria-components';

function Example() {
  let options = [
    {name: 'Australian', children: [
      {id: 2, name: 'Koala'},
      {id: 3, name: 'Kangaroo'},
      {id: 4, name: 'Platypus'}
    ]},
    {name: 'American', children: [
      {id: 6, name: 'Bald Eagle'},
      {id: 7, name: 'Bison'},
      {id: 8, name: 'Skunk'}
    ]}
  ];
  let [selected, setSelected] = React.useState<Selection>(new Set());

  return (
    <ListBox
      aria-label="Pick an animal"
      items={options}
      selectedKeys={selected}
      selectionMode="single"
      onSelectionChange={setSelected}>
      {section => (
        <ListBoxSection id={section.name}>
          <Header>{section.name}</Header>
          <Collection items={section.children}>
            {item => <ListBoxItem>{item.name}</ListBoxItem>}
          </Collection>
        </ListBoxSection>
      )}
    </ListBox>
  );
}
```

```
import type {Selection} from 'react-aria-components';
import {Collection} from 'react-aria-components';

function Example() {
  let options = [
    {
      name: 'Australian',
      children: [
        { id: 2, name: 'Koala' },
        { id: 3, name: 'Kangaroo' },
        { id: 4, name: 'Platypus' }
      ]
    },
    {
      name: 'American',
      children: [
        { id: 6, name: 'Bald Eagle' },
        { id: 7, name: 'Bison' },
        { id: 8, name: 'Skunk' }
      ]
    }
  ];
  let [selected, setSelected] = React.useState<Selection>(
    new Set()
  );

  return (
    <ListBox
      aria-label="Pick an animal"
      items={options}
      selectedKeys={selected}
      selectionMode="single"
      onSelectionChange={setSelected}
    >
      {(section) => (
        <ListBoxSection id={section.name}>
          <Header>{section.name}</Header>
          <Collection items={section.children}>
            {(item) => (
              <ListBoxItem>{item.name}</ListBoxItem>
            )}
          </Collection>
        </ListBoxSection>
      )}
    </ListBox>
  );
}
```

```
import type {Selection} from 'react-aria-components';
import {Collection} from 'react-aria-components';

function Example() {
  let options = [
    {
      name: 'Australian',
      children: [
        {
          id: 2,
          name: 'Koala'
        },
        {
          id: 3,
          name:
            'Kangaroo'
        },
        {
          id: 4,
          name:
            'Platypus'
        }
      ]
    },
    {
      name: 'American',
      children: [
        {
          id: 6,
          name:
            'Bald Eagle'
        },
        {
          id: 7,
          name: 'Bison'
        },
        {
          id: 8,
          name: 'Skunk'
        }
      ]
    }
  ];
  let [
    selected,
    setSelected
  ] = React.useState<
    Selection
  >(new Set());

  return (
    <ListBox
      aria-label="Pick an animal"
      items={options}
      selectedKeys={selected}
      selectionMode="single"
      onSelectionChange={setSelected}
    >
      {(section) => (
        <ListBoxSection
          id={section
            .name}
        >
          <Header>
            {section
              .name}
          </Header>
          <Collection
            items={section
              .children}
          >
            {(item) => (
              <ListBoxItem>
                {item
                  .name}
              </ListBoxItem>
            )}
          </Collection>
        </ListBoxSection>
      )}
    </ListBox>
  );
}
```

Sections without a `<Header>` must provide an `aria-label` for accessibility.

* * *

By default, items in a `ListBox` are labeled by their text contents for accessibility. Items also support the "label" and "description" slots to separate primary and secondary content, which improves screen reader announcements and can also be used for styling purposes.

**Note**: The ARIA spec prohibits listbox items from including interactive content such as buttons, checkboxes, etc. For these cases, see [GridList](https://react-spectrum.adobe.com/react-aria/GridList.html) instead.

```
import {Text} from 'react-aria-components';

<ListBox aria-label="Permissions" selectionMode="single">
  <ListBoxItem textValue="Read">
    <Text slot="label">Read</Text>
    <Text slot="description">Read only</Text>
  </ListBoxItem>
  <ListBoxItem textValue="Write">
    <Text slot="label">Write</Text>
    <Text slot="description">Read and write only</Text>
  </ListBoxItem>
  <ListBoxItem textValue="Admin">
    <Text slot="label">Admin</Text>
    <Text slot="description">Full access</Text>
  </ListBoxItem>
</ListBox>
```

```
import {Text} from 'react-aria-components';

<ListBox aria-label="Permissions" selectionMode="single">
  <ListBoxItem textValue="Read">
    <Text slot="label">Read</Text>
    <Text slot="description">Read only</Text>
  </ListBoxItem>
  <ListBoxItem textValue="Write">
    <Text slot="label">Write</Text>
    <Text slot="description">Read and write only</Text>
  </ListBoxItem>
  <ListBoxItem textValue="Admin">
    <Text slot="label">Admin</Text>
    <Text slot="description">Full access</Text>
  </ListBoxItem>
</ListBox>
```

```
import {Text} from 'react-aria-components';

<ListBox
  aria-label="Permissions"
  selectionMode="single"
>
  <ListBoxItem textValue="Read">
    <Text slot="label">
      Read
    </Text>
    <Text slot="description">
      Read only
    </Text>
  </ListBoxItem>
  <ListBoxItem textValue="Write">
    <Text slot="label">
      Write
    </Text>
    <Text slot="description">
      Read and write
      only
    </Text>
  </ListBoxItem>
  <ListBoxItem textValue="Admin">
    <Text slot="label">
      Admin
    </Text>
    <Text slot="description">
      Full access
    </Text>
  </ListBoxItem>
</ListBox>
```

Show CSS

```
.react-aria-ListBoxItem {
  [slot=label] {
    font-weight: bold;
  }

  [slot=description] {
    font-size: small;
  }
}
```

```
.react-aria-ListBoxItem {
  [slot=label] {
    font-weight: bold;
  }

  [slot=description] {
    font-size: small;
  }
}
```

```
.react-aria-ListBoxItem {
  [slot=label] {
    font-weight: bold;
  }

  [slot=description] {
    font-size: small;
  }
}
```

* * *

By default, ListBox expects items to be arranged in a vertical stack, and implements keyboard navigation and drag and drop accordingly. The `layout` and `orientation` props can be used to change this behavior, allowing you to build horizontal and vertical stacks and grids.

This example displays a horizontal list of cards. The left and right arrow keys can be used to navigate between the items.

```
<ListBox
  aria-label="Albums"
  orientation="horizontal"  items={albums}
  selectionMode="multiple">
  {item => (
    <ListBoxItem textValue={item.title}>
      <img src={item.image} alt="" />
      <Text slot="label">{item.title}</Text>
      <Text slot="description">{item.artist}</Text>
    </ListBoxItem>
  )}
</ListBox>
```

```
<ListBox
  aria-label="Albums"
  orientation="horizontal"  items={albums}
  selectionMode="multiple">
  {item => (
    <ListBoxItem textValue={item.title}>
      <img src={item.image} alt="" />
      <Text slot="label">{item.title}</Text>
      <Text slot="description">{item.artist}</Text>
    </ListBoxItem>
  )}
</ListBox>
```

```
<ListBox
  aria-label="Albums"
  orientation="horizontal"  items={albums}
  selectionMode="multiple"
>
  {(item) => (
    <ListBoxItem
      textValue={item
        .title}
    >
      <img
        src={item
          .image}
        alt=""
      />
      <Text slot="label">
        {item.title}
      </Text>
      <Text slot="description">
        {item.artist}
      </Text>
    </ListBoxItem>
  )}
</ListBox>
```

Show CSS

```
.react-aria-ListBox[data-orientation=horizontal],
.react-aria-ListBox[data-layout=grid] {
  flex-direction: row;
  width: fit-content;
  max-width: 100%;
  padding: 4px;

  .react-aria-ListBoxItem {
    position: relative;
    margin: 0;
    padding: 4px;

    & img {
      object-fit: cover;
      aspect-ratio: 1/1;
      max-width: 150px;
      margin-bottom: 4px;
      border-radius: 4px;
    }

    &[data-selected] {
      background: none;
      color: inherit;

      &:after {
        content: '✓';
        content: '✓' / '';
        alt: ' ';
        position: absolute;
        top: 8px;
        right: 8px;
        background: var(--highlight-background);
        border: 2px solid var(--highlight-foreground);
        color: var(--highlight-foreground);
        width: 22px;
        height: 22px;
        border-radius: 22px;
        box-sizing: border-box;
        font-size: 14px;
        line-height: 1em;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 0 8px rgb(0 0 0 / .5);
      }
    }

    &[data-focus-visible] {
      outline: 2px solid var(--focus-ring-color);
      outline-offset: -2px;
    }
  }
}
```

```
.react-aria-ListBox[data-orientation=horizontal],
.react-aria-ListBox[data-layout=grid] {
  flex-direction: row;
  width: fit-content;
  max-width: 100%;
  padding: 4px;

  .react-aria-ListBoxItem {
    position: relative;
    margin: 0;
    padding: 4px;

    & img {
      object-fit: cover;
      aspect-ratio: 1/1;
      max-width: 150px;
      margin-bottom: 4px;
      border-radius: 4px;
    }

    &[data-selected] {
      background: none;
      color: inherit;

      &:after {
        content: '✓';
        content: '✓' / '';
        alt: ' ';
        position: absolute;
        top: 8px;
        right: 8px;
        background: var(--highlight-background);
        border: 2px solid var(--highlight-foreground);
        color: var(--highlight-foreground);
        width: 22px;
        height: 22px;
        border-radius: 22px;
        box-sizing: border-box;
        font-size: 14px;
        line-height: 1em;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 0 8px rgb(0 0 0 / .5);
      }
    }

    &[data-focus-visible] {
      outline: 2px solid var(--focus-ring-color);
      outline-offset: -2px;
    }
  }
}
```

```
.react-aria-ListBox[data-orientation=horizontal],
.react-aria-ListBox[data-layout=grid] {
  flex-direction: row;
  width: fit-content;
  max-width: 100%;
  padding: 4px;

  .react-aria-ListBoxItem {
    position: relative;
    margin: 0;
    padding: 4px;

    & img {
      object-fit: cover;
      aspect-ratio: 1/1;
      max-width: 150px;
      margin-bottom: 4px;
      border-radius: 4px;
    }

    &[data-selected] {
      background: none;
      color: inherit;

      &:after {
        content: '✓';
        content: '✓' / '';
        alt: ' ';
        position: absolute;
        top: 8px;
        right: 8px;
        background: var(--highlight-background);
        border: 2px solid var(--highlight-foreground);
        color: var(--highlight-foreground);
        width: 22px;
        height: 22px;
        border-radius: 22px;
        box-sizing: border-box;
        font-size: 14px;
        line-height: 1em;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 0 8px rgb(0 0 0 / .5);
      }
    }

    &[data-focus-visible] {
      outline: 2px solid var(--focus-ring-color);
      outline-offset: -2px;
    }
  }
}
```

The `layout` prop can be set to `"grid"` to enable two-dimensional keyboard navigation. By default, the grid scrolls vertically. The left, right, up, and down arrow keys can be used to navigate between the cards in this example.

```
<ListBox
  aria-label="Albums"
  layout="grid"  items={albums}
  selectionMode="multiple">
  {item => (
    <ListBoxItem textValue={item.title}>
      <img src={item.image} alt="" />
      <Text slot="label">{item.title}</Text>
      <Text slot="description">{item.artist}</Text>
    </ListBoxItem>
  )}
</ListBox>
```

```
<ListBox
  aria-label="Albums"
  layout="grid"  items={albums}
  selectionMode="multiple">
  {item => (
    <ListBoxItem textValue={item.title}>
      <img src={item.image} alt="" />
      <Text slot="label">{item.title}</Text>
      <Text slot="description">{item.artist}</Text>
    </ListBoxItem>
  )}
</ListBox>
```

```
<ListBox
  aria-label="Albums"
  layout="grid"  items={albums}
  selectionMode="multiple"
>
  {(item) => (
    <ListBoxItem
      textValue={item
        .title}
    >
      <img
        src={item
          .image}
        alt=""
      />
      <Text slot="label">
        {item.title}
      </Text>
      <Text slot="description">
        {item.artist}
      </Text>
    </ListBoxItem>
  )}
</ListBox>
```

Show CSS

```
.react-aria-ListBox[data-layout=grid] {
  display: grid;
  grid-template-columns: 1fr 1fr;
  scrollbar-gutter: stable;
}
```

```
.react-aria-ListBox[data-layout=grid] {
  display: grid;
  grid-template-columns: 1fr 1fr;
  scrollbar-gutter: stable;
}
```

```
.react-aria-ListBox[data-layout=grid] {
  display: grid;
  grid-template-columns: 1fr 1fr;
  scrollbar-gutter: stable;
}
```

The `layout="grid"` and `orientation="horizontal"` props can be combined to build a two dimensional grid where the items are grouped into columns, and the grid scrolls horizontally.

```
<ListBox
  aria-label="Albums"
  layout="grid"
  orientation="horizontal"  items={albums}
  selectionMode="multiple">
  {item => (
    <ListBoxItem textValue={item.title}>
      <img src={item.image} alt="" />
      <Text slot="label">{item.title}</Text>
      <Text slot="description">{item.artist}</Text>
    </ListBoxItem>
  )}
</ListBox>
```

```
<ListBox
  aria-label="Albums"
  layout="grid"
  orientation="horizontal"  items={albums}
  selectionMode="multiple">
  {item => (
    <ListBoxItem textValue={item.title}>
      <img src={item.image} alt="" />
      <Text slot="label">{item.title}</Text>
      <Text slot="description">{item.artist}</Text>
    </ListBoxItem>
  )}
</ListBox>
```

```
<ListBox
  aria-label="Albums"
  layout="grid"
  orientation="horizontal"  items={albums}
  selectionMode="multiple"
>
  {(item) => (
    <ListBoxItem
      textValue={item
        .title}
    >
      <img
        src={item
          .image}
        alt=""
      />
      <Text slot="label">
        {item.title}
      </Text>
      <Text slot="description">
        {item.artist}
      </Text>
    </ListBoxItem>
  )}
</ListBox>
```

Show CSS

```
.react-aria-ListBox[data-layout=grid][data-orientation=horizontal] {
  width: 100%;
  max-width: none;
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: 58px 58px;
  grid-template-columns: none;
  grid-auto-columns: 250px;
  max-height: 200px;
  gap: 8px;

  .react-aria-ListBoxItem {
    display: grid;
    grid-template-areas: "image ."
                         "image title"
                         "image description"
                         "image .";
    grid-template-columns: auto 1fr;
    grid-template-rows: 1fr auto auto 1fr;
    column-gap: 8px;

    & img {
      width: 50px;
      height: 50px;
      grid-area: image;
      margin-bottom: 0;
    }

    [slot=label] {
      grid-area: title;
    }

    [slot=description] {
      grid-area: description;
    }
  }
}
```

```
.react-aria-ListBox[data-layout=grid][data-orientation=horizontal] {
  width: 100%;
  max-width: none;
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: 58px 58px;
  grid-template-columns: none;
  grid-auto-columns: 250px;
  max-height: 200px;
  gap: 8px;

  .react-aria-ListBoxItem {
    display: grid;
    grid-template-areas: "image ."
                         "image title"
                         "image description"
                         "image .";
    grid-template-columns: auto 1fr;
    grid-template-rows: 1fr auto auto 1fr;
    column-gap: 8px;

    & img {
      width: 50px;
      height: 50px;
      grid-area: image;
      margin-bottom: 0;
    }

    [slot=label] {
      grid-area: title;
    }

    [slot=description] {
      grid-area: description;
    }
  }
}
```

```
.react-aria-ListBox[data-layout=grid][data-orientation=horizontal] {
  width: 100%;
  max-width: none;
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: 58px 58px;
  grid-template-columns: none;
  grid-auto-columns: 250px;
  max-height: 200px;
  gap: 8px;

  .react-aria-ListBoxItem {
    display: grid;
    grid-template-areas: "image ."
                         "image title"
                         "image description"
                         "image .";
    grid-template-columns: auto 1fr;
    grid-template-rows: 1fr auto auto 1fr;
    column-gap: 8px;

    & img {
      width: 50px;
      height: 50px;
      grid-area: image;
      margin-bottom: 0;
    }

    [slot=label] {
      grid-area: title;
    }

    [slot=description] {
      grid-area: description;
    }
  }
}
```

* * *

This example uses the [useAsyncList](https://react-spectrum.adobe.com/react-stately/useAsyncList.html) hook to handle asynchronous loading of data from a server. Use the [renderEmptyState](#empty-state) prop to display a spinner during initial load. To enable infinite scrolling, render a `<ListBoxLoadMoreItem>` element at the end of the list.

```
import {useAsyncList} from 'react-stately';
import {Collection, ListBoxLoadMoreItem} from 'react-aria-components';

interface Character {
  name: string;
}

function AsyncLoadingExample() {
  let list = useAsyncList<Character>({
    async load({ signal, cursor, filterText }) {
      let res = await fetch(
        cursor || `https://pokeapi.co/api/v2/pokemon`,
        { signal }
      );
      let json = await res.json();

      return {
        items: json.results,
        cursor: json.next
      };
    }
  });

  return (
    <ListBox
      aria-label="Pick a Pokemon"
      items={list.items}
      selectionMode="single"
    >
      <Collection items={list.items}>
        {(item) => <ListBoxItem id={item.name}>{item.name}</ListBoxItem>}
      </Collection>
      <ListBoxLoadMoreItem
        onLoadMore={list.loadMore}
        isLoading={list.loadingState === 'loadingMore'}
      >
        <MyProgressCircle isIndeterminate aria-label="Loading more..." />
      </ListBoxLoadMoreItem>    </ListBox>
  );
}
```

```
import {useAsyncList} from 'react-stately';
import {
  Collection,
  ListBoxLoadMoreItem
} from 'react-aria-components';

interface Character {
  name: string;
}

function AsyncLoadingExample() {
  let list = useAsyncList<Character>({
    async load({ signal, cursor, filterText }) {
      let res = await fetch(
        cursor || `https://pokeapi.co/api/v2/pokemon`,
        { signal }
      );
      let json = await res.json();

      return {
        items: json.results,
        cursor: json.next
      };
    }
  });

  return (
    <ListBox
      aria-label="Pick a Pokemon"
      items={list.items}
      selectionMode="single"
    >
      <Collection items={list.items}>
        {(item) => (
          <ListBoxItem id={item.name}>
            {item.name}
          </ListBoxItem>
        )}
      </Collection>
      <ListBoxLoadMoreItem
        onLoadMore={list.loadMore}
        isLoading={list.loadingState === 'loadingMore'}
      >
        <MyProgressCircle
          isIndeterminate
          aria-label="Loading more..."
        />
      </ListBoxLoadMoreItem>    </ListBox>
  );
}
```

```
import {useAsyncList} from 'react-stately';
import {
  Collection,
  ListBoxLoadMoreItem
} from 'react-aria-components';

interface Character {
  name: string;
}

function AsyncLoadingExample() {
  let list =
    useAsyncList<
      Character
    >({
      async load(
        {
          signal,
          cursor,
          filterText
        }
      ) {
        let res =
          await fetch(
            cursor ||
              `https://pokeapi.co/api/v2/pokemon`,
            { signal }
          );
        let json =
          await res
            .json();

        return {
          items:
            json.results,
          cursor:
            json.next
        };
      }
    });

  return (
    <ListBox
      aria-label="Pick a Pokemon"
      items={list.items}
      selectionMode="single"
    >
      <Collection
        items={list
          .items}
      >
        {(item) => (
          <ListBoxItem
            id={item
              .name}
          >
            {item.name}
          </ListBoxItem>
        )}
      </Collection>
      <ListBoxLoadMoreItem
        onLoadMore={list
          .loadMore}
        isLoading={list
          .loadingState ===
          'loadingMore'}
      >
        <MyProgressCircle
          isIndeterminate
          aria-label="Loading more..."
        />
      </ListBoxLoadMoreItem>    </ListBox>
  );
}
```

Show CSS

```
.react-aria-ListBoxLoadingIndicator {
  align-items: center;
  justify-content: center;
  height: 24px;
  width: 100%;
  display: flex;
}
```

```
.react-aria-ListBoxLoadingIndicator {
  align-items: center;
  justify-content: center;
  height: 24px;
  width: 100%;
  display: flex;
}
```

```
.react-aria-ListBoxLoadingIndicator {
  align-items: center;
  justify-content: center;
  height: 24px;
  width: 100%;
  display: flex;
}
```

MyProgressCircle

```
import {ProgressBar} from 'react-aria-components';
import type {ProgressBarProps} from 'react-aria-components';

export function MyProgressCircle(props: ProgressBarProps) {
  return (
    <ProgressBar {...props}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        style={{ display: 'block' }}
      >
        <path
          fill="currentColor"
          d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
          opacity=".25"
        />
        <path
          fill="currentColor"
          d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            dur="0.75s"
            values="0 12 12;360 12 12"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </ProgressBar>
  );
}
```

```
import {ProgressBar} from 'react-aria-components';
import type {ProgressBarProps} from 'react-aria-components';

export function MyProgressCircle(props: ProgressBarProps) {
  return (
    <ProgressBar {...props}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        style={{ display: 'block' }}
      >
        <path
          fill="currentColor"
          d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
          opacity=".25"
        />
        <path
          fill="currentColor"
          d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            dur="0.75s"
            values="0 12 12;360 12 12"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </ProgressBar>
  );
}
```

```
import {ProgressBar} from 'react-aria-components';
import type {ProgressBarProps} from 'react-aria-components';

export function MyProgressCircle(
  props: ProgressBarProps
) {
  return (
    <ProgressBar
      {...props}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        style={{
          display:
            'block'
        }}
      >
        <path
          fill="currentColor"
          d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
          opacity=".25"
        />
        <path
          fill="currentColor"
          d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            dur="0.75s"
            values="0 12 12;360 12 12"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </ProgressBar>
  );
}
```

* * *

A `ListBoxItem` can be disabled with the `isDisabled` prop. Disabled items are not focusable, selectable, or keyboard navigable.

```
<ListBox
  aria-label="Choose sandwich contents with disabled items"
  selectionMode="multiple">
  <ListBoxItem>Lettuce</ListBoxItem>
  <ListBoxItem>Tomato</ListBoxItem>
  <ListBoxItem>Cheese</ListBoxItem>
  <ListBoxItem isDisabled>Tuna Salad</ListBoxItem>  <ListBoxItem>Egg Salad</ListBoxItem>
  <ListBoxItem>Ham</ListBoxItem>
</ListBox>
```

```
<ListBox
  aria-label="Choose sandwich contents with disabled items"
  selectionMode="multiple">
  <ListBoxItem>Lettuce</ListBoxItem>
  <ListBoxItem>Tomato</ListBoxItem>
  <ListBoxItem>Cheese</ListBoxItem>
  <ListBoxItem isDisabled>Tuna Salad</ListBoxItem>  <ListBoxItem>Egg Salad</ListBoxItem>
  <ListBoxItem>Ham</ListBoxItem>
</ListBox>
```

```
<ListBox
  aria-label="Choose sandwich contents with disabled items"
  selectionMode="multiple"
>
  <ListBoxItem>
    Lettuce
  </ListBoxItem>
  <ListBoxItem>
    Tomato
  </ListBoxItem>
  <ListBoxItem>
    Cheese
  </ListBoxItem>
  <ListBoxItem
    isDisabled
  >
    Tuna Salad
  </ListBoxItem>  <ListBoxItem>
    Egg Salad
  </ListBoxItem>
  <ListBoxItem>
    Ham
  </ListBoxItem>
</ListBox>
```

Show CSS

```
.react-aria-ListBoxItem {
  &[data-disabled] {
    color: var(--text-color-disabled);
  }
}
```

```
.react-aria-ListBoxItem {
  &[data-disabled] {
    color: var(--text-color-disabled);
  }
}
```

```
.react-aria-ListBoxItem {
  &[data-disabled] {
    color: var(--text-color-disabled);
  }
}
```

In dynamic collections, it may be more convenient to use the `disabledKeys` prop at the `ListBox` level instead of `isDisabled` on individual items. Each key in this list corresponds with the `id` prop passed to the `ListBoxItem` component, or automatically derived from the values passed to the `items` prop (see the [Collections](https://react-spectrum.adobe.com/react-aria/collections.html) for more details). An item is considered disabled if its id exists in `disabledKeys` or if it has `isDisabled`.

```
function Example() {
  let options = [
    { id: 1, name: 'Aardvark' },
    { id: 2, name: 'Cat' },
    { id: 3, name: 'Dog' },
    { id: 4, name: 'Kangaroo' },
    { id: 5, name: 'Koala' },
    { id: 6, name: 'Penguin' },
    { id: 7, name: 'Snake' },
    { id: 8, name: 'Turtle' },
    { id: 9, name: 'Wombat' }
  ];

  return (
    <ListBox
      aria-label="Animals with disabledKeys"
      items={options}
      selectionMode="single"
      disabledKeys={[4, 6]}    >
      {(item) => <ListBoxItem>{item.name}</ListBoxItem>}
    </ListBox>
  );
}
```

```
function Example() {
  let options = [
    { id: 1, name: 'Aardvark' },
    { id: 2, name: 'Cat' },
    { id: 3, name: 'Dog' },
    { id: 4, name: 'Kangaroo' },
    { id: 5, name: 'Koala' },
    { id: 6, name: 'Penguin' },
    { id: 7, name: 'Snake' },
    { id: 8, name: 'Turtle' },
    { id: 9, name: 'Wombat' }
  ];

  return (
    <ListBox
      aria-label="Animals with disabledKeys"
      items={options}
      selectionMode="single"
      disabledKeys={[4, 6]}    >
      {(item) => <ListBoxItem>{item.name}</ListBoxItem>}
    </ListBox>
  );
}
```

```
function Example() {
  let options = [
    {
      id: 1,
      name: 'Aardvark'
    },
    {
      id: 2,
      name: 'Cat'
    },
    {
      id: 3,
      name: 'Dog'
    },
    {
      id: 4,
      name: 'Kangaroo'
    },
    {
      id: 5,
      name: 'Koala'
    },
    {
      id: 6,
      name: 'Penguin'
    },
    {
      id: 7,
      name: 'Snake'
    },
    {
      id: 8,
      name: 'Turtle'
    },
    {
      id: 9,
      name: 'Wombat'
    }
  ];

  return (
    <ListBox
      aria-label="Animals with disabledKeys"
      items={options}
      selectionMode="single"
      disabledKeys={[
        4,
        6
      ]}    >
      {(item) => (
        <ListBoxItem>
          {item.name}
        </ListBoxItem>
      )}
    </ListBox>
  );
}
```

* * *

Use the `renderEmptyState` prop to customize what the `ListBox` will display if there are no items.

```
<ListBox
  aria-label="Search results"
  renderEmptyState={() => 'No results found.'}>
  {[]}
</ListBox>
```

```
<ListBox
  aria-label="Search results"
  renderEmptyState={() => 'No results found.'}>
  {[]}
</ListBox>
```

```
<ListBox
  aria-label="Search results"
  renderEmptyState={() =>
    'No results found.'}>
  {[]}
</ListBox>
```

Show CSS

```
.react-aria-ListBox {
  &[data-empty] {
    align-items: center;
    justify-content: center;
    font-style: italic;
  }
}
```

```
.react-aria-ListBox {
  &[data-empty] {
    align-items: center;
    justify-content: center;
    font-style: italic;
  }
}
```

```
.react-aria-ListBox {
  &[data-empty] {
    align-items: center;
    justify-content: center;
    font-style: italic;
  }
}
```

## Drag and drop[#](#drag-and-drop)

* * *

ListBox supports drag and drop interactions when the `dragAndDropHooks` prop is provided using the `[useDragAndDrop](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/useDragAndDrop.tsx:useDragAndDrop)` hook. Users can drop data on the list as a whole, on individual items, insert new items between existing ones, or reorder items.

React Aria supports traditional mouse and touch based drag and drop, but also implements keyboard and screen reader friendly interactions. Users can press Enter on a draggable element to enter drag and drop mode. Then, they can press Tab to navigate between drop targets. A droppable collection is treated as a single drop target, so that users can easily tab past it to get to the next drop target. Within a droppable collection, keys such as ArrowDown and ArrowUp can be used to select a _drop position_, such as on an item, or between items.

See the [drag and drop introduction](https://react-spectrum.adobe.com/react-aria/dnd.html) to learn more.

This example shows a basic list that allows users to reorder items via drag and drop. This is enabled using the `onReorder` event handler, provided to the `useDragAndDrop` hook. The `getItems` function must also be implemented for items to become draggable. [See below](#drag-data) for more details.

This uses [useListData](https://react-spectrum.adobe.com/react-stately/useListData.html) from React Stately to manage the item list. Note that `useListData` is a convenience hook, not a requirement. You can manage your state however you wish.

```
import {useListData} from 'react-stately';
import {useDragAndDrop} from 'react-aria-components';

interface Item {
  id: number,
  name: string
}

function Example() {
  let list = useListData({
    initialItems: [
      {id: 1, name: 'Adobe Photoshop'},
      {id: 2, name: 'Adobe XD'},
      {id: 3, name: 'Adobe Dreamweaver'},
      {id: 4, name: 'Adobe InDesign'},
      {id: 5, name: 'Adobe Connect'}
    ]
  });

  let {dragAndDropHooks} = useDragAndDrop<Item>({
    getItems: (keys, items) => items.map(item => ({'text/plain': item.name})),
    onReorder(e) {
      if (e.target.dropPosition === 'before') {
        list.moveBefore(e.target.key, e.keys);
      } else if (e.target.dropPosition === 'after') {
        list.moveAfter(e.target.key, e.keys);
      }
    }
  });
  return (
    <ListBox
      aria-label="Reorderable list"
      selectionMode="multiple"
      items={list.items}
      dragAndDropHooks={dragAndDropHooks}    >
      {item => <ListBoxItem>{item.name}</ListBoxItem>}
    </ListBox>
  );
}
```

```
import {useListData} from 'react-stately';
import {useDragAndDrop} from 'react-aria-components';

interface Item {
  id: number;
  name: string;
}

function Example() {
  let list = useListData({
    initialItems: [
      { id: 1, name: 'Adobe Photoshop' },
      { id: 2, name: 'Adobe XD' },
      { id: 3, name: 'Adobe Dreamweaver' },
      { id: 4, name: 'Adobe InDesign' },
      { id: 5, name: 'Adobe Connect' }
    ]
  });

  let { dragAndDropHooks } = useDragAndDrop<Item>({
    getItems: (keys, items) =>
      items.map((item) => ({ 'text/plain': item.name })),
    onReorder(e) {
      if (e.target.dropPosition === 'before') {
        list.moveBefore(e.target.key, e.keys);
      } else if (e.target.dropPosition === 'after') {
        list.moveAfter(e.target.key, e.keys);
      }
    }
  });
  return (
    <ListBox
      aria-label="Reorderable list"
      selectionMode="multiple"
      items={list.items}
      dragAndDropHooks={dragAndDropHooks}    >
      {(item) => <ListBoxItem>{item.name}</ListBoxItem>}
    </ListBox>
  );
}
```

```
import {useListData} from 'react-stately';
import {useDragAndDrop} from 'react-aria-components';

interface Item {
  id: number;
  name: string;
}

function Example() {
  let list = useListData(
    {
      initialItems: [
        {
          id: 1,
          name:
            'Adobe Photoshop'
        },
        {
          id: 2,
          name:
            'Adobe XD'
        },
        {
          id: 3,
          name:
            'Adobe Dreamweaver'
        },
        {
          id: 4,
          name:
            'Adobe InDesign'
        },
        {
          id: 5,
          name:
            'Adobe Connect'
        }
      ]
    }
  );

  let {
    dragAndDropHooks
  } = useDragAndDrop<
    Item
  >({
    getItems: (
      keys,
      items
    ) =>
      items.map(
        (item) => ({
          'text/plain':
            item.name
        })
      ),
    onReorder(e) {
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
    }
  });
  return (
    <ListBox
      aria-label="Reorderable list"
      selectionMode="multiple"
      items={list.items}
      dragAndDropHooks={dragAndDropHooks}    >
      {(item) => (
        <ListBoxItem>
          {item.name}
        </ListBoxItem>
      )}
    </ListBox>
  );
}
```

Show CSS

```
.react-aria-ListBoxItem {
  &[data-dragging] {
    opacity: 0.6;
  }
}

.react-aria-DropIndicator[data-drop-target] {
  outline: 1px solid var(--highlight-background);
}
```

```
.react-aria-ListBoxItem {
  &[data-dragging] {
    opacity: 0.6;
  }
}

.react-aria-DropIndicator[data-drop-target] {
  outline: 1px solid var(--highlight-background);
}
```

```
.react-aria-ListBoxItem {
  &[data-dragging] {
    opacity: 0.6;
  }
}

.react-aria-DropIndicator[data-drop-target] {
  outline: 1px solid var(--highlight-background);
}
```

By default, the drag preview shown under the user's pointer or finger is a copy of the original element that started the drag. A custom preview can be rendered by implementing the `renderDragPreview` function, passed to `useDragAndDrop`. This receives the dragged data that was returned by `getItems`, and returns a rendered preview for those items.

This example renders a custom drag preview which shows the number of items being dragged.

```
import {useListData} from 'react-stately';
import {useDragAndDrop} from 'react-aria-components';

function Example() {
  let {dragAndDropHooks} = useDragAndDrop<Item>({
    // ...
    renderDragPreview(items) {
      return (
        <div className="drag-preview">
          {items[0]['text/plain']}
          <span className="badge">{items.length}</span>
        </div>
      );
    }  });

  // ...
}
```

```
import {useListData} from 'react-stately';
import {useDragAndDrop} from 'react-aria-components';

function Example() {
  let {dragAndDropHooks} = useDragAndDrop<Item>({
    // ...
    renderDragPreview(items) {
      return (
        <div className="drag-preview">
          {items[0]['text/plain']}
          <span className="badge">{items.length}</span>
        </div>
      );
    }  });

  // ...
}
```

```
import {useListData} from 'react-stately';
import {useDragAndDrop} from 'react-aria-components';

function Example() {
  let {
    dragAndDropHooks
  } = useDragAndDrop<
    Item
  >({
    // ...
    renderDragPreview(
      items
    ) {
      return (
        <div className="drag-preview">
          {items[0][
            'text/plain'
          ]}
          <span className="badge">
            {items
              .length}
          </span>
        </div>
      );
    }  });

  // ...
}
```

Show CSS

```
.drag-preview {
  width: 150px;
  padding: 4px 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  background: var(--highlight-background);
  color: var(--highlight-foreground);
  border-radius: 4px;

  .badge {
    background: var(--highlight-foreground);
    color: var(--highlight-background);
    padding: 0 8px;
    border-radius: 4px;
  }
}
```

```
.drag-preview {
  width: 150px;
  padding: 4px 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  background: var(--highlight-background);
  color: var(--highlight-foreground);
  border-radius: 4px;

  .badge {
    background: var(--highlight-foreground);
    color: var(--highlight-background);
    padding: 0 8px;
    border-radius: 4px;
  }
}
```

```
.drag-preview {
  width: 150px;
  padding: 4px 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;
  background: var(--highlight-background);
  color: var(--highlight-foreground);
  border-radius: 4px;

  .badge {
    background: var(--highlight-foreground);
    color: var(--highlight-background);
    padding: 0 8px;
    border-radius: 4px;
  }
}
```

Data for draggable items can be provided in multiple formats at once. This allows drop targets to choose data in a format that they understand. For example, you could serialize a complex object as JSON in a custom format for use within your own application, and also provide plain text and/or rich HTML fallbacks that can be used when a user drops data in an external application (e.g. an email message).

This can be done by returning multiple keys for an item from the `getItems` function. Types can either be a standard [mime type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types) for interoperability with external applications, or a custom string for use within your own app.

This example provides representations of each item as plain text, HTML, and a custom app-specific data format. Dropping on the drop targets in this page will use the custom data format to render formatted items. If you drop in an external application supporting rich text, the HTML representation will be used. Dropping in a text editor will use the plain text format.

```
interface RichTextItem {
  id: string;
  name: string;
  style: string;
}

function DraggableListBox() {
  let items: RichTextItem[] = [
    { id: 'ps', name: 'Photoshop', style: 'strong' },
    { id: 'xd', name: 'XD', style: 'strong' },
    { id: 'id', name: 'InDesign', style: 'strong' },
    { id: 'dw', name: 'Dreamweaver', style: 'em' },
    { id: 'co', name: 'Connect', style: 'em' }
  ];

  let { dragAndDropHooks } = useDragAndDrop<RichTextItem>({
    getItems(keys, items) {
      return items.map((item) => {
        return {
          'text/plain': item.name,
          'text/html': `<${item.style}>${item.name}</${item.style}>`,
          'custom-app-type': JSON.stringify(item)
        };
      });
    }  });

  return (
    <ListBox
      aria-label="Draggable list"
      selectionMode="multiple"
      items={items}
      dragAndDropHooks={dragAndDropHooks}
    >
      {(item) => (
        <ListBoxItem textValue={item.name}>
          {React.createElement(item.style || 'span', null, item.name)}
        </ListBoxItem>
      )}
    </ListBox>
  );
}

<div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
  <DraggableListBox />
  {/* see below */}
  <DroppableListBox />
</div>
```

```
interface RichTextItem {
  id: string;
  name: string;
  style: string;
}

function DraggableListBox() {
  let items: RichTextItem[] = [
    { id: 'ps', name: 'Photoshop', style: 'strong' },
    { id: 'xd', name: 'XD', style: 'strong' },
    { id: 'id', name: 'InDesign', style: 'strong' },
    { id: 'dw', name: 'Dreamweaver', style: 'em' },
    { id: 'co', name: 'Connect', style: 'em' }
  ];

  let { dragAndDropHooks } = useDragAndDrop<RichTextItem>({
    getItems(keys, items) {
      return items.map((item) => {
        return {
          'text/plain': item.name,
          'text/html':
            `<${item.style}>${item.name}</${item.style}>`,
          'custom-app-type': JSON.stringify(item)
        };
      });
    }  });

  return (
    <ListBox
      aria-label="Draggable list"
      selectionMode="multiple"
      items={items}
      dragAndDropHooks={dragAndDropHooks}
    >
      {(item) => (
        <ListBoxItem textValue={item.name}>
          {React.createElement(
            item.style || 'span',
            null,
            item.name
          )}
        </ListBoxItem>
      )}
    </ListBox>
  );
}

<div
  style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}
>
  <DraggableListBox />
  {/* see below */}
  <DroppableListBox />
</div>
```

```
interface RichTextItem {
  id: string;
  name: string;
  style: string;
}

function DraggableListBox() {
  let items:
    RichTextItem[] = [
      {
        id: 'ps',
        name:
          'Photoshop',
        style: 'strong'
      },
      {
        id: 'xd',
        name: 'XD',
        style: 'strong'
      },
      {
        id: 'id',
        name: 'InDesign',
        style: 'strong'
      },
      {
        id: 'dw',
        name:
          'Dreamweaver',
        style: 'em'
      },
      {
        id: 'co',
        name: 'Connect',
        style: 'em'
      }
    ];

  let {
    dragAndDropHooks
  } = useDragAndDrop<
    RichTextItem
  >({
    getItems(
      keys,
      items
    ) {
      return items.map(
        (item) => {
          return {
            'text/plain':
              item.name,
            'text/html':
              `<${item.style}>${item.name}</${item.style}>`,
            'custom-app-type':
              JSON
                .stringify(
                  item
                )
          };
        }
      );
    }  });

  return (
    <ListBox
      aria-label="Draggable list"
      selectionMode="multiple"
      items={items}
      dragAndDropHooks={dragAndDropHooks}
    >
      {(item) => (
        <ListBoxItem
          textValue={item
            .name}
        >
          {React
            .createElement(
              item
                .style ||
                'span',
              null,
              item.name
            )}
        </ListBoxItem>
      )}
    </ListBox>
  );
}

<div
  style={{
    display: 'flex',
    gap: 12,
    flexWrap: 'wrap'
  }}
>
  <DraggableListBox />
  {/* see below */}
  <DroppableListBox />
</div>
```

Dropping on the ListBox as a whole can be enabled using the `onRootDrop` event. When a valid drag hovers over the ListBox, it receives the `isDropTarget` state and can be styled using the `[data-drop-target]` CSS selector.

```
function Example() {
  let [items, setItems] = React.useState<Item[]>([]);

  let { dragAndDropHooks } = useDragAndDrop({
    async onRootDrop(e) {
      let items = await Promise.all(e.items.map(async (item, i) => {
        let name = item.kind === 'text'
          ? await item.getText('text/plain')
          : item.name;
        return { id: i, name };
      }));
      setItems(items);
    }  });

  return (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
      <DraggableListBox />
      <ListBox
        aria-label="Droppable list"
        items={items}
        dragAndDropHooks={dragAndDropHooks}
        renderEmptyState={() => 'Drop items here'}
      >
        {(item) => <ListBoxItem>{item.name}</ListBoxItem>}
      </ListBox>
    </div>
  );
}
```

```
function Example() {
  let [items, setItems] = React.useState<Item[]>([]);

  let { dragAndDropHooks } = useDragAndDrop({
    async onRootDrop(e) {
      let items = await Promise.all(
        e.items.map(async (item, i) => {
          let name = item.kind === 'text'
            ? await item.getText('text/plain')
            : item.name;
          return { id: i, name };
        })
      );
      setItems(items);
    }  });

  return (
    <div
      style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}
    >
      <DraggableListBox />
      <ListBox
        aria-label="Droppable list"
        items={items}
        dragAndDropHooks={dragAndDropHooks}
        renderEmptyState={() => 'Drop items here'}
      >
        {(item) => <ListBoxItem>{item.name}</ListBoxItem>}
      </ListBox>
    </div>
  );
}
```

```
function Example() {
  let [items, setItems] =
    React.useState<
      Item[]
    >([]);

  let {
    dragAndDropHooks
  } = useDragAndDrop({
    async onRootDrop(e) {
      let items =
        await Promise
          .all(
            e.items.map(
              async (
                item,
                i
              ) => {
                let name =
                  item
                      .kind ===
                      'text'
                    ? await item
                      .getText(
                        'text/plain'
                      )
                    : item
                      .name;
                return {
                  id: i,
                  name
                };
              }
            )
          );
      setItems(items);
    }  });

  return (
    <div
      style={{
        display: 'flex',
        gap: 12,
        flexWrap: 'wrap'
      }}
    >
      <DraggableListBox />
      <ListBox
        aria-label="Droppable list"
        items={items}
        dragAndDropHooks={dragAndDropHooks}
        renderEmptyState={() =>
          'Drop items here'}
      >
        {(item) => (
          <ListBoxItem>
            {item.name}
          </ListBoxItem>
        )}
      </ListBox>
    </div>
  );
}
```

Show CSS

```
.react-aria-ListBox[data-drop-target] {
  outline: 2px solid var(--highlight-background);
  outline-offset: -1px;
  background: var(--highlight-overlay)
}
```

```
.react-aria-ListBox[data-drop-target] {
  outline: 2px solid var(--highlight-background);
  outline-offset: -1px;
  background: var(--highlight-overlay)
}
```

```
.react-aria-ListBox[data-drop-target] {
  outline: 2px solid var(--highlight-background);
  outline-offset: -1px;
  background: var(--highlight-overlay)
}
```

Dropping on items can be enabled using the `onItemDrop` event. When a valid drag hovers over an item, it receives the `isDropTarget` state and can be styled using the `[data-drop-target]` CSS selector.

```
function Example() {
  let { dragAndDropHooks } = useDragAndDrop({
    onItemDrop(e) {
      alert(`Dropped on ${e.target.key}`);
    }  });

  return (
    <div style={{display: 'flex', gap: 12, flexWrap: 'wrap'}}>
      {/* see above */}
      <DraggableListBox />
      <ListBox aria-label="Droppable list" dragAndDropHooks={dragAndDropHooks}>
        <ListBoxItem id="applications">Applications</ListBoxItem>
        <ListBoxItem id="documents">Documents</ListBoxItem>
        <ListBoxItem id="pictures">Pictures</ListBoxItem>
      </ListBox>
    </div>
  );
}
```

```
function Example() {
  let { dragAndDropHooks } = useDragAndDrop({
    onItemDrop(e) {
      alert(`Dropped on ${e.target.key}`);
    }  });

  return (
    <div
      style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}
    >
      {/* see above */}
      <DraggableListBox />
      <ListBox
        aria-label="Droppable list"
        dragAndDropHooks={dragAndDropHooks}
      >
        <ListBoxItem id="applications">
          Applications
        </ListBoxItem>
        <ListBoxItem id="documents">Documents</ListBoxItem>
        <ListBoxItem id="pictures">Pictures</ListBoxItem>
      </ListBox>
    </div>
  );
}
```

```
function Example() {
  let {
    dragAndDropHooks
  } = useDragAndDrop({
    onItemDrop(e) {
      alert(
        `Dropped on ${e.target.key}`
      );
    }  });

  return (
    <div
      style={{
        display: 'flex',
        gap: 12,
        flexWrap: 'wrap'
      }}
    >
      {/* see above */}
      <DraggableListBox />
      <ListBox
        aria-label="Droppable list"
        dragAndDropHooks={dragAndDropHooks}
      >
        <ListBoxItem id="applications">
          Applications
        </ListBoxItem>
        <ListBoxItem id="documents">
          Documents
        </ListBoxItem>
        <ListBoxItem id="pictures">
          Pictures
        </ListBoxItem>
      </ListBox>
    </div>
  );
}
```

Show CSS

```
.react-aria-ListBoxItem[data-drop-target] {
  outline: 2px solid var(--highlight-background);
  background: var(--highlight-overlay)
}
```

```
.react-aria-ListBoxItem[data-drop-target] {
  outline: 2px solid var(--highlight-background);
  background: var(--highlight-overlay)
}
```

```
.react-aria-ListBoxItem[data-drop-target] {
  outline: 2px solid var(--highlight-background);
  background: var(--highlight-overlay)
}
```

Dropping between items can be enabled using the `onInsert` event. ListBox renders a `[DropIndicator](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/DragAndDrop.tsx:DropIndicator)` between items to indicate the insertion position, which can be styled using the `.react-aria-DropIndicator` selector. When it is active, it receives the `[data-drop-target]` state.

```
function Example() {
  let list = useListData({
    initialItems: [
      { id: 1, name: 'Illustrator' },
      { id: 2, name: 'Premiere' },
      { id: 3, name: 'Acrobat' }
    ]
  });

  let { dragAndDropHooks } = useDragAndDrop({
    async onInsert(e) {
      let items = await Promise.all(e.items.map(async (item) => {
        let name = item.kind === 'text'
          ? await item.getText('text/plain')
          : item.name;
        return { id: Math.random(), name };
      }));

      if (e.target.dropPosition === 'before') {
        list.insertBefore(e.target.key, ...items);
      } else if (e.target.dropPosition === 'after') {
        list.insertAfter(e.target.key, ...items);
      }
    }  });

  return (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
      <DraggableListBox />
      <ListBox
        aria-label="Droppable list"
        items={list.items}
        dragAndDropHooks={dragAndDropHooks}
      >
        {(item) => <ListBoxItem>{item.name}</ListBoxItem>}
      </ListBox>
    </div>
  );
}
```

```
function Example() {
  let list = useListData({
    initialItems: [
      { id: 1, name: 'Illustrator' },
      { id: 2, name: 'Premiere' },
      { id: 3, name: 'Acrobat' }
    ]
  });

  let { dragAndDropHooks } = useDragAndDrop({
    async onInsert(e) {
      let items = await Promise.all(
        e.items.map(async (item) => {
          let name = item.kind === 'text'
            ? await item.getText('text/plain')
            : item.name;
          return { id: Math.random(), name };
        })
      );

      if (e.target.dropPosition === 'before') {
        list.insertBefore(e.target.key, ...items);
      } else if (e.target.dropPosition === 'after') {
        list.insertAfter(e.target.key, ...items);
      }
    }  });

  return (
    <div
      style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}
    >
      <DraggableListBox />
      <ListBox
        aria-label="Droppable list"
        items={list.items}
        dragAndDropHooks={dragAndDropHooks}
      >
        {(item) => <ListBoxItem>{item.name}</ListBoxItem>}
      </ListBox>
    </div>
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
          name:
            'Illustrator'
        },
        {
          id: 2,
          name:
            'Premiere'
        },
        {
          id: 3,
          name: 'Acrobat'
        }
      ]
    }
  );

  let {
    dragAndDropHooks
  } = useDragAndDrop({
    async onInsert(e) {
      let items =
        await Promise
          .all(
            e.items.map(
              async (item) => {
                let name =
                  item
                      .kind ===
                      'text'
                    ? await item
                      .getText(
                        'text/plain'
                      )
                    : item
                      .name;
                return {
                  id:
                    Math
                      .random(),
                  name
                };
              }
            )
          );

      if (
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
    }  });

  return (
    <div
      style={{
        display: 'flex',
        gap: 12,
        flexWrap: 'wrap'
      }}
    >
      <DraggableListBox />
      <ListBox
        aria-label="Droppable list"
        items={list
          .items}
        dragAndDropHooks={dragAndDropHooks}
      >
        {(item) => (
          <ListBoxItem>
            {item.name}
          </ListBoxItem>
        )}
      </ListBox>
    </div>
  );
}
```

Show CSS

```
.react-aria-DropIndicator[data-drop-target] {
  outline: 1px solid var(--highlight-background);
}
```

```
.react-aria-DropIndicator[data-drop-target] {
  outline: 1px solid var(--highlight-background);
}
```

```
.react-aria-DropIndicator[data-drop-target] {
  outline: 1px solid var(--highlight-background);
}
```

A custom drop indicator can also be rendered with the `renderDropIndicator` function. This lets you customize the DOM structure and CSS classes applied to the drop indicator.

```
import {DropIndicator} from 'react-aria-components';
function Example() {
  let { dragAndDropHooks } = useDragAndDrop({
    // ...
    renderDropIndicator(target) {
      return (
        <DropIndicator
          target={target}
          className={({ isDropTarget }) =>
            `my-drop-indicator ${isDropTarget ? 'active' : ''}`}
        />
      );
    }  });

  // ...
}
```

```
import {DropIndicator} from 'react-aria-components';
function Example() {
  let { dragAndDropHooks } = useDragAndDrop({
    // ...
    renderDropIndicator(target) {
      return (
        <DropIndicator
          target={target}
          className={({ isDropTarget }) =>
            `my-drop-indicator ${
              isDropTarget ? 'active' : ''
            }`}
        />
      );
    }  });

  // ...
}
```

```
import {DropIndicator} from 'react-aria-components';
function Example() {
  let {
    dragAndDropHooks
  } = useDragAndDrop({
    // ...
    renderDropIndicator(
      target
    ) {
      return (
        <DropIndicator
          target={target}
          className={(
            {
              isDropTarget
            }
          ) =>
            `my-drop-indicator ${
              isDropTarget
                ? 'active'
                : ''
            }`}
        />
      );
    }  });

  // ...
}
```

Show CSS

```
.my-drop-indicator.active {
  outline: 1px solid #e70073;
}
```

```
.my-drop-indicator.active {
  outline: 1px solid #e70073;
}
```

```
.my-drop-indicator.active {
  outline: 1px solid #e70073;
}
```

`ListBox` allows users to drop one or more **drag items**, each of which contains data to be transferred from the drag source to drop target. There are three kinds of drag items:

-   `text` – represents data inline as a string in one or more formats
-   `file` – references a file on the user's device
-   `directory` – references the contents of a directory

A `[TextDropItem](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dnd.d.ts:TextDropItem)` represents textual data in one or more different formats. These may be either standard [mime types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types) or custom app-specific formats. Representing data in multiple formats allows drop targets both within and outside an application to choose data in a format that they understand. For example, a complex object may be serialized in a custom format for use within an application, with fallbacks in plain text and/or rich HTML that can be used when a user drops data from an external application.

The example below uses the `acceptedDragTypes` prop to accept items that include a custom app-specific type, which is retrieved using the item's `getText` method. The same draggable component as used in the above example is used here, but rather than displaying the plain text representation, the custom format is used instead. When `acceptedDragTypes` is specified, the dropped items are filtered to include only items that include the accepted types.

```
import {isTextDropItem} from 'react-aria-components';

interface TextItem {
  id: string;
  name: string;
  style: string;
}

function DroppableListBox() {
  let [items, setItems] = React.useState<TextItem[]>([]);

  let { dragAndDropHooks } = useDragAndDrop({
    acceptedDragTypes: ['custom-app-type'],
    async onRootDrop(e) {
      let items = await Promise.all(
        e.items
          .filter(isTextDropItem)
          .map(async (item) =>
            JSON.parse(await item.getText('custom-app-type'))
          )
      );
      setItems(items);
    }  });

  return (
    <ListBox
      aria-label="Droppable list"
      items={items}
      dragAndDropHooks={dragAndDropHooks}
      renderEmptyState={() => 'Drop items here'}
    >
      {(item) => (
        <ListBoxItem textValue={item.name}>
          {React.createElement(item.style || 'span', null, item.name)}
        </ListBoxItem>
      )}
    </ListBox>
  );
}

<div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
  {/* see above */}
  <DraggableListBox />
  <DroppableListBox />
</div>
```

```
import {isTextDropItem} from 'react-aria-components';

interface TextItem {
  id: string;
  name: string;
  style: string;
}

function DroppableListBox() {
  let [items, setItems] = React.useState<TextItem[]>([]);

  let { dragAndDropHooks } = useDragAndDrop({
    acceptedDragTypes: ['custom-app-type'],
    async onRootDrop(e) {
      let items = await Promise.all(
        e.items
          .filter(isTextDropItem)
          .map(async (item) =>
            JSON.parse(
              await item.getText('custom-app-type')
            )
          )
      );
      setItems(items);
    }  });

  return (
    <ListBox
      aria-label="Droppable list"
      items={items}
      dragAndDropHooks={dragAndDropHooks}
      renderEmptyState={() => 'Drop items here'}
    >
      {(item) => (
        <ListBoxItem textValue={item.name}>
          {React.createElement(
            item.style || 'span',
            null,
            item.name
          )}
        </ListBoxItem>
      )}
    </ListBox>
  );
}

<div
  style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}
>
  {/* see above */}
  <DraggableListBox />
  <DroppableListBox />
</div>
```

```
import {isTextDropItem} from 'react-aria-components';

interface TextItem {
  id: string;
  name: string;
  style: string;
}

function DroppableListBox() {
  let [items, setItems] =
    React.useState<
      TextItem[]
    >([]);

  let {
    dragAndDropHooks
  } = useDragAndDrop({
    acceptedDragTypes: [
      'custom-app-type'
    ],
    async onRootDrop(e) {
      let items =
        await Promise
          .all(
            e.items
              .filter(
                isTextDropItem
              )
              .map(
                async (item) =>
                  JSON
                    .parse(
                      await item
                        .getText(
                          'custom-app-type'
                        )
                    )
              )
          );
      setItems(items);
    }  });

  return (
    <ListBox
      aria-label="Droppable list"
      items={items}
      dragAndDropHooks={dragAndDropHooks}
      renderEmptyState={() =>
        'Drop items here'}
    >
      {(item) => (
        <ListBoxItem
          textValue={item
            .name}
        >
          {React
            .createElement(
              item
                .style ||
                'span',
              null,
              item.name
            )}
        </ListBoxItem>
      )}
    </ListBox>
  );
}

<div
  style={{
    display: 'flex',
    gap: 12,
    flexWrap: 'wrap'
  }}
>
  {/* see above */}
  <DraggableListBox />
  <DroppableListBox />
</div>
```

A `[FileDropItem](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dnd.d.ts:FileDropItem)` references a file on the user's device. It includes the name and mime type of the file, and methods to read the contents as plain text, or retrieve a native [File](https://developer.mozilla.org/en-US/docs/Web/API/File) object which can be attached to form data for uploading.

This example accepts JPEG and PNG image files, and renders them by creating a local [object URL](https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL). When the list is empty, you can drop on the whole collection, and otherwise items can be inserted.

```
import {isFileDropItem} from 'react-aria-components';

interface ImageItem {
  id: number;
  url: string;
  name: string;
}

function Example() {
  let [items, setItems] = React.useState<ImageItem[]>([]);

  let { dragAndDropHooks } = useDragAndDrop({
    acceptedDragTypes: ['image/jpeg', 'image/png'],
    async onRootDrop(e) {
      let items = await Promise.all(
        e.items.filter(isFileDropItem).map(async (item) => ({
          id: Math.random(),
          url: URL.createObjectURL(await item.getFile()),
          name: item.name
        }))
      );
      setItems(items);
    }  });

  return (
    <ListBox
      aria-label="Droppable list"
      items={items}
      dragAndDropHooks={dragAndDropHooks}
      renderEmptyState={() => 'Drop items here'}
    >
      {(item) => (
        <ListBoxItem textValue={item.name}>
          <div className="image-item">
            <img src={item.url} />
            <span>{item.name}</span>
          </div>
        </ListBoxItem>
      )}
    </ListBox>
  );
}
```

```
import {isFileDropItem} from 'react-aria-components';

interface ImageItem {
  id: number;
  url: string;
  name: string;
}

function Example() {
  let [items, setItems] = React.useState<ImageItem[]>([]);

  let { dragAndDropHooks } = useDragAndDrop({
    acceptedDragTypes: ['image/jpeg', 'image/png'],
    async onRootDrop(e) {
      let items = await Promise.all(
        e.items.filter(isFileDropItem).map(
          async (item) => ({
            id: Math.random(),
            url: URL.createObjectURL(await item.getFile()),
            name: item.name
          })
        )
      );
      setItems(items);
    }  });

  return (
    <ListBox
      aria-label="Droppable list"
      items={items}
      dragAndDropHooks={dragAndDropHooks}
      renderEmptyState={() => 'Drop items here'}
    >
      {(item) => (
        <ListBoxItem textValue={item.name}>
          <div className="image-item">
            <img src={item.url} />
            <span>{item.name}</span>
          </div>
        </ListBoxItem>
      )}
    </ListBox>
  );
}
```

```
import {isFileDropItem} from 'react-aria-components';

interface ImageItem {
  id: number;
  url: string;
  name: string;
}

function Example() {
  let [items, setItems] =
    React.useState<
      ImageItem[]
    >([]);

  let {
    dragAndDropHooks
  } = useDragAndDrop({
    acceptedDragTypes: [
      'image/jpeg',
      'image/png'
    ],
    async onRootDrop(e) {
      let items =
        await Promise
          .all(
            e.items
              .filter(
                isFileDropItem
              ).map(
                async (item) => ({
                  id:
                    Math
                      .random(),
                  url:
                    URL
                      .createObjectURL(
                        await item
                          .getFile()
                      ),
                  name:
                    item
                      .name
                })
              )
          );
      setItems(items);
    }  });

  return (
    <ListBox
      aria-label="Droppable list"
      items={items}
      dragAndDropHooks={dragAndDropHooks}
      renderEmptyState={() =>
        'Drop items here'}
    >
      {(item) => (
        <ListBoxItem
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
        </ListBoxItem>
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
  align-items: center;
}

.image-item img {
  height: 100%;
  aspect-ratio: 1/1;
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
  align-items: center;
}

.image-item img {
  height: 100%;
  aspect-ratio: 1/1;
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
  align-items: center;
}

.image-item img {
  height: 100%;
  aspect-ratio: 1/1;
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

This example accepts directory drops over the whole collection, and renders the contents as items in the list. `DIRECTORY_DRAG_TYPE` is imported from `react-aria-components` and included in the `acceptedDragTypes` prop to limit the accepted items to only directories.

```
import File from '@spectrum-icons/workflow/FileTxt';
import Folder from '@spectrum-icons/workflow/Folder';
import {DIRECTORY_DRAG_TYPE, isDirectoryDropItem} from 'react-aria-components';
interface DirItem {
  name: string;
  kind: string;
}

function Example() {
  let [files, setFiles] = React.useState<DirItem[]>([]);

  let { dragAndDropHooks } = useDragAndDrop({
    acceptedDragTypes: [DIRECTORY_DRAG_TYPE],
    async onRootDrop(e) {
      // Read entries in directory and update state with relevant info.
      let dir = e.items.find(isDirectoryDropItem)!;
      let files = [];
      for await (let entry of dir.getEntries()) {
        files.push({
          name: entry.name,
          kind: entry.kind
        });
      }
      setFiles(files);
    }  });

  return (
    <ListBox
      aria-label="Droppable list"
      items={files}
      dragAndDropHooks={dragAndDropHooks}
      renderEmptyState={() => 'Drop items here'}
    >
      {(item) => (
        <ListBoxItem id={item.name} textValue={item.name}>
          <div className="dir-item">
            {item.kind === 'directory' ? <Folder /> : <File />}
            <span>{item.name}</span>
          </div>
        </ListBoxItem>
      )}
    </ListBox>
  );
}
```

```
import File from '@spectrum-icons/workflow/FileTxt';
import Folder from '@spectrum-icons/workflow/Folder';
import {
  DIRECTORY_DRAG_TYPE,
  isDirectoryDropItem
} from 'react-aria-components';
interface DirItem {
  name: string;
  kind: string;
}

function Example() {
  let [files, setFiles] = React.useState<DirItem[]>([]);

  let { dragAndDropHooks } = useDragAndDrop({
    acceptedDragTypes: [DIRECTORY_DRAG_TYPE],
    async onRootDrop(e) {
      // Read entries in directory and update state with relevant info.
      let dir = e.items.find(isDirectoryDropItem)!;
      let files = [];
      for await (let entry of dir.getEntries()) {
        files.push({
          name: entry.name,
          kind: entry.kind
        });
      }
      setFiles(files);
    }  });

  return (
    <ListBox
      aria-label="Droppable list"
      items={files}
      dragAndDropHooks={dragAndDropHooks}
      renderEmptyState={() => 'Drop items here'}
    >
      {(item) => (
        <ListBoxItem id={item.name} textValue={item.name}>
          <div className="dir-item">
            {item.kind === 'directory'
              ? <Folder />
              : <File />}
            <span>{item.name}</span>
          </div>
        </ListBoxItem>
      )}
    </ListBox>
  );
}
```

```
import File from '@spectrum-icons/workflow/FileTxt';
import Folder from '@spectrum-icons/workflow/Folder';
import {
  DIRECTORY_DRAG_TYPE,
  isDirectoryDropItem
} from 'react-aria-components';
interface DirItem {
  name: string;
  kind: string;
}

function Example() {
  let [files, setFiles] =
    React.useState<
      DirItem[]
    >([]);

  let {
    dragAndDropHooks
  } = useDragAndDrop({
    acceptedDragTypes: [
      DIRECTORY_DRAG_TYPE
    ],
    async onRootDrop(e) {
      // Read entries in directory and update state with relevant info.
      let dir = e.items
        .find(
          isDirectoryDropItem
        )!;
      let files = [];
      for await (
        let entry of dir
          .getEntries()
      ) {
        files.push({
          name:
            entry.name,
          kind:
            entry.kind
        });
      }
      setFiles(files);
    }  });

  return (
    <ListBox
      aria-label="Droppable list"
      items={files}
      dragAndDropHooks={dragAndDropHooks}
      renderEmptyState={() =>
        'Drop items here'}
    >
      {(item) => (
        <ListBoxItem
          id={item.name}
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
        </ListBoxItem>
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

A `[DropOperation](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dnd.d.ts:DropOperation)` is an indication of what will happen when dragged data is dropped on a particular drop target. These are:

-   `move` – indicates that the dragged data will be moved from its source location to the target location.
-   `copy` – indicates that the dragged data will be copied to the target destination.
-   `link` – indicates that there will be a relationship established between the source and target locations.
-   `cancel` – indicates that the drag and drop operation will be canceled, resulting in no changes made to the source or target.

Many operating systems display these in the form of a cursor change, e.g. a plus sign to indicate a copy operation. The user may also be able to use a modifier key to choose which drop operation to perform, such as Option or Alt to switch from move to copy.

The `onDragEnd` event allows the drag source to respond when a drag that it initiated ends, either because it was dropped or because it was canceled by the user. The `dropOperation` property of the event object indicates the operation that was performed. For example, when data is moved, the UI could be updated to reflect this change by removing the original dragged items.

This example removes the dragged items from the UI when a move operation is completed. Try holding the Option or Alt keys to change the operation to copy, and see how the behavior changes.

```
function Example() {
  let list = useListData({
    initialItems: [
      { id: 1, name: 'Adobe Photoshop' },
      { id: 2, name: 'Adobe XD' },
      { id: 3, name: 'Adobe Dreamweaver' },
      { id: 4, name: 'Adobe InDesign' },
      { id: 5, name: 'Adobe Connect' }
    ]
  });

  let { dragAndDropHooks } = useDragAndDrop<Item>({
    // ...
    onDragEnd(e) {
      if (e.dropOperation === 'move') {
        list.remove(...e.keys);
      }
    }  });

  return (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
      <ListBox
        aria-label="Draggable list"
        selectionMode="multiple"
        items={list.items}
        dragAndDropHooks={dragAndDropHooks}
      >
        {(item) => <ListBoxItem>{item.name}</ListBoxItem>}
      </ListBox>
      <DroppableListBox />
    </div>
  );
}
```

```
function Example() {
  let list = useListData({
    initialItems: [
      { id: 1, name: 'Adobe Photoshop' },
      { id: 2, name: 'Adobe XD' },
      { id: 3, name: 'Adobe Dreamweaver' },
      { id: 4, name: 'Adobe InDesign' },
      { id: 5, name: 'Adobe Connect' }
    ]
  });

  let { dragAndDropHooks } = useDragAndDrop<Item>({
    // ...
    onDragEnd(e) {
      if (e.dropOperation === 'move') {
        list.remove(...e.keys);
      }
    }  });

  return (
    <div
      style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}
    >
      <ListBox
        aria-label="Draggable list"
        selectionMode="multiple"
        items={list.items}
        dragAndDropHooks={dragAndDropHooks}
      >
        {(item) => <ListBoxItem>{item.name}</ListBoxItem>}
      </ListBox>
      <DroppableListBox />
    </div>
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
          name:
            'Adobe Photoshop'
        },
        {
          id: 2,
          name:
            'Adobe XD'
        },
        {
          id: 3,
          name:
            'Adobe Dreamweaver'
        },
        {
          id: 4,
          name:
            'Adobe InDesign'
        },
        {
          id: 5,
          name:
            'Adobe Connect'
        }
      ]
    }
  );

  let {
    dragAndDropHooks
  } = useDragAndDrop<
    Item
  >({
    // ...
    onDragEnd(e) {
      if (
        e.dropOperation ===
          'move'
      ) {
        list.remove(
          ...e.keys
        );
      }
    }  });

  return (
    <div
      style={{
        display: 'flex',
        gap: 12,
        flexWrap: 'wrap'
      }}
    >
      <ListBox
        aria-label="Draggable list"
        selectionMode="multiple"
        items={list
          .items}
        dragAndDropHooks={dragAndDropHooks}
      >
        {(item) => (
          <ListBoxItem>
            {item.name}
          </ListBoxItem>
        )}
      </ListBox>
      <DroppableListBox />
    </div>
  );
}
```

The drag source can also control which drop operations are allowed for the data. For example, if moving data is not allowed, and only copying is supported, the `getAllowedDropOperations` function could be implemented to indicate this. When you drag the element below, the cursor now shows the copy affordance by default, and pressing a modifier to switch drop operations results in the drop being canceled.

```
function Example() {
  // ...

  let { dragAndDropHooks } = useDragAndDrop<Item>({
    // ...
    getAllowedDropOperations: () => ['copy']  });

  return (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
      <ListBox
        aria-label="Draggable list"
        selectionMode="multiple"
        items={list.items}
        dragAndDropHooks={dragAndDropHooks}
      >
        {(item) => <ListBoxItem>{item.name}</ListBoxItem>}
      </ListBox>
      <DroppableListBox />
    </div>
  );
}
```

```
function Example() {
  // ...

  let { dragAndDropHooks } = useDragAndDrop<Item>({
    // ...
    getAllowedDropOperations: () => ['copy']  });

  return (
    <div
      style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}
    >
      <ListBox
        aria-label="Draggable list"
        selectionMode="multiple"
        items={list.items}
        dragAndDropHooks={dragAndDropHooks}
      >
        {(item) => <ListBoxItem>{item.name}</ListBoxItem>}
      </ListBox>
      <DroppableListBox />
    </div>
  );
}
```

```
function Example() {
  // ...

  let {
    dragAndDropHooks
  } = useDragAndDrop<
    Item
  >({
    // ...
    getAllowedDropOperations:
      () => ['copy']  });

  return (
    <div
      style={{
        display: 'flex',
        gap: 12,
        flexWrap: 'wrap'
      }}
    >
      <ListBox
        aria-label="Draggable list"
        selectionMode="multiple"
        items={list
          .items}
        dragAndDropHooks={dragAndDropHooks}
      >
        {(item) => (
          <ListBoxItem>
            {item.name}
          </ListBoxItem>
        )}
      </ListBox>
      <DroppableListBox />
    </div>
  );
}
```

The `getDropOperation` function passed to `useDragAndDrop` can be used to provide appropriate feedback to the user when a drag hovers over the drop target. This function receives the drop target, set of types contained in the drag, and a list of allowed drop operations as specified by the drag source. It should return one of the drop operations in `allowedOperations`, or a specific drop operation if only that drop operation is supported. It may also return `'cancel'` to reject the drop. If the returned operation is not in `allowedOperations`, then the drop target will act as if `'cancel'` was returned.

In the below example, the drop target only supports dropping PNG images. If a PNG is dragged over the target, it will be highlighted and the operating system displays a copy cursor. If another type is dragged over the target, then there is no visual feedback, indicating that a drop is not accepted there. If the user holds a modifier key such as Control while dragging over the drop target in order to change the drop operation, then the drop target does not accept the drop.

```
function Example() {
  let [items, setItems] = React.useState<ImageItem[]>([]);

  let { dragAndDropHooks } = useDragAndDrop({
    getDropOperation: () => 'copy',    acceptedDragTypes: ['image/png'],
    async onRootDrop(e) {
      // ...
    }
  });

  // See "Files" example above...
}
```

```
function Example() {
  let [items, setItems] = React.useState<ImageItem[]>([]);

  let { dragAndDropHooks } = useDragAndDrop({
    getDropOperation: () => 'copy',    acceptedDragTypes: ['image/png'],
    async onRootDrop(e) {
      // ...
    }
  });

  // See "Files" example above...
}
```

```
function Example() {
  let [items, setItems] =
    React.useState<
      ImageItem[]
    >([]);

  let {
    dragAndDropHooks
  } = useDragAndDrop({
    getDropOperation:
      () => 'copy',    acceptedDragTypes: [
      'image/png'
    ],
    async onRootDrop(e) {
      // ...
    }
  });

  // See "Files" example above...
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

This example puts together many of the concepts described above, allowing users to drag items between lists bidirectionally. It also supports reordering items within the same list. When a list is empty, it accepts drops on the whole collection. `getDropOperation` ensures that items are always moved rather than copied, which avoids duplicate items.

```
import {isTextDropItem} from 'react-aria-components';

interface FileItem {
  id: string,
  name: string,
  type: string
}

interface DndListBoxProps {
  initialItems: FileItem[],
  'aria-label': string
}

function DndListBox(props: DndListBoxProps) {
  let list = useListData({
    initialItems: props.initialItems
  });

  let { dragAndDropHooks } = useDragAndDrop<FileItem>({
    // Provide drag data in a custom format as well as plain text.
    getItems(keys, items) {
      return items.map(item => {
        return {
          'custom-app-type': JSON.stringify(item),
          'text/plain': item.name
        };
      });
    },

    // Accept drops with the custom format.
    acceptedDragTypes: ['custom-app-type'],

    // Ensure items are always moved rather than copied.
    getDropOperation: () => 'move',

    // Handle drops between items from other lists.
    async onInsert(e) {
      let processedItems = await Promise.all(
        e.items
          .filter(isTextDropItem)
          .map(async item => JSON.parse(await item.getText('custom-app-type')))
      );
      if (e.target.dropPosition === 'before') {
        list.insertBefore(e.target.key, ...processedItems);
      } else if (e.target.dropPosition === 'after') {
        list.insertAfter(e.target.key, ...processedItems);
      }
    },

    // Handle drops on the collection when empty.
    async onRootDrop(e) {
      let processedItems = await Promise.all(
        e.items
          .filter(isTextDropItem)
          .map(async item => JSON.parse(await item.getText('custom-app-type')))
      );
      list.append(...processedItems);
    },

    // Handle reordering items within the same list.
    onReorder(e) {
      if (e.target.dropPosition === 'before') {
        list.moveBefore(e.target.key, e.keys);
      } else if (e.target.dropPosition === 'after') {
        list.moveAfter(e.target.key, e.keys);
      }
    },

    // Remove the items from the source list on drop
    // if they were moved to a different list.
    onDragEnd(e) {
      if (e.dropOperation === 'move' && !e.isInternal) {
        list.remove(...e.keys);
      }
    }
  });

  return (
    <ListBox
      aria-label={props['aria-label']}
      selectionMode="multiple"
      selectedKeys={list.selectedKeys}
      onSelectionChange={list.setSelectedKeys}
      items={list.items}
      dragAndDropHooks={dragAndDropHooks}
      renderEmptyState={() => 'Drop items here'}>
      {item => <ListBoxItem>{item.name}</ListBoxItem>}
    </ListBox>
  );
}

<div style={{display: 'flex', gap: 12, flexWrap: 'wrap'}}>
  <DndListBox
    initialItems={[
      { id: '1', type: 'file', name: 'Adobe Photoshop' },
      { id: '2', type: 'file', name: 'Adobe XD' },
      { id: '3', type: 'folder', name: 'Documents' },
      { id: '4', type: 'file', name: 'Adobe InDesign' },
      { id: '5', type: 'folder', name: 'Utilities' },
      { id: '6', type: 'file', name: 'Adobe AfterEffects' }
    ]}
    aria-label="First ListBox"
  />
  <DndListBox
    initialItems={[
      { id: '7', type: 'folder', name: 'Pictures' },
      { id: '8', type: 'file', name: 'Adobe Fresco' },
      { id: '9', type: 'folder', name: 'Apps' },
      { id: '10', type: 'file', name: 'Adobe Illustrator' },
      { id: '11', type: 'file', name: 'Adobe Lightroom' },
      { id: '12', type: 'file', name: 'Adobe Dreamweaver' }
    ]}
    aria-label="Second ListBox"
  />
</div>
```

```
import {isTextDropItem} from 'react-aria-components';

interface FileItem {
  id: string;
  name: string;
  type: string;
}

interface DndListBoxProps {
  initialItems: FileItem[];
  'aria-label': string;
}

function DndListBox(props: DndListBoxProps) {
  let list = useListData({
    initialItems: props.initialItems
  });

  let { dragAndDropHooks } = useDragAndDrop<FileItem>({
    // Provide drag data in a custom format as well as plain text.
    getItems(keys, items) {
      return items.map((item) => {
        return {
          'custom-app-type': JSON.stringify(item),
          'text/plain': item.name
        };
      });
    },

    // Accept drops with the custom format.
    acceptedDragTypes: ['custom-app-type'],

    // Ensure items are always moved rather than copied.
    getDropOperation: () => 'move',

    // Handle drops between items from other lists.
    async onInsert(e) {
      let processedItems = await Promise.all(
        e.items
          .filter(isTextDropItem)
          .map(async (item) =>
            JSON.parse(
              await item.getText('custom-app-type')
            )
          )
      );
      if (e.target.dropPosition === 'before') {
        list.insertBefore(e.target.key, ...processedItems);
      } else if (e.target.dropPosition === 'after') {
        list.insertAfter(e.target.key, ...processedItems);
      }
    },

    // Handle drops on the collection when empty.
    async onRootDrop(e) {
      let processedItems = await Promise.all(
        e.items
          .filter(isTextDropItem)
          .map(async (item) =>
            JSON.parse(
              await item.getText('custom-app-type')
            )
          )
      );
      list.append(...processedItems);
    },

    // Handle reordering items within the same list.
    onReorder(e) {
      if (e.target.dropPosition === 'before') {
        list.moveBefore(e.target.key, e.keys);
      } else if (e.target.dropPosition === 'after') {
        list.moveAfter(e.target.key, e.keys);
      }
    },

    // Remove the items from the source list on drop
    // if they were moved to a different list.
    onDragEnd(e) {
      if (e.dropOperation === 'move' && !e.isInternal) {
        list.remove(...e.keys);
      }
    }
  });

  return (
    <ListBox
      aria-label={props['aria-label']}
      selectionMode="multiple"
      selectedKeys={list.selectedKeys}
      onSelectionChange={list.setSelectedKeys}
      items={list.items}
      dragAndDropHooks={dragAndDropHooks}
      renderEmptyState={() => 'Drop items here'}
    >
      {(item) => <ListBoxItem>{item.name}</ListBoxItem>}
    </ListBox>
  );
}

<div
  style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}
>
  <DndListBox
    initialItems={[
      { id: '1', type: 'file', name: 'Adobe Photoshop' },
      { id: '2', type: 'file', name: 'Adobe XD' },
      { id: '3', type: 'folder', name: 'Documents' },
      { id: '4', type: 'file', name: 'Adobe InDesign' },
      { id: '5', type: 'folder', name: 'Utilities' },
      {
        id: '6',
        type: 'file',
        name: 'Adobe AfterEffects'
      }
    ]}
    aria-label="First ListBox"
  />
  <DndListBox
    initialItems={[
      { id: '7', type: 'folder', name: 'Pictures' },
      { id: '8', type: 'file', name: 'Adobe Fresco' },
      { id: '9', type: 'folder', name: 'Apps' },
      {
        id: '10',
        type: 'file',
        name: 'Adobe Illustrator'
      },
      { id: '11', type: 'file', name: 'Adobe Lightroom' },
      {
        id: '12',
        type: 'file',
        name: 'Adobe Dreamweaver'
      }
    ]}
    aria-label="Second ListBox"
  />
</div>
```

```
import {isTextDropItem} from 'react-aria-components';

interface FileItem {
  id: string;
  name: string;
  type: string;
}

interface DndListBoxProps {
  initialItems:
    FileItem[];
  'aria-label': string;
}

function DndListBox(
  props: DndListBoxProps
) {
  let list = useListData(
    {
      initialItems:
        props
          .initialItems
    }
  );

  let {
    dragAndDropHooks
  } = useDragAndDrop<
    FileItem
  >({
    // Provide drag data in a custom format as well as plain text.
    getItems(
      keys,
      items
    ) {
      return items.map(
        (item) => {
          return {
            'custom-app-type':
              JSON
                .stringify(
                  item
                ),
            'text/plain':
              item.name
          };
        }
      );
    },

    // Accept drops with the custom format.
    acceptedDragTypes: [
      'custom-app-type'
    ],

    // Ensure items are always moved rather than copied.
    getDropOperation:
      () => 'move',

    // Handle drops between items from other lists.
    async onInsert(e) {
      let processedItems =
        await Promise
          .all(
            e.items
              .filter(
                isTextDropItem
              )
              .map(
                async (item) =>
                  JSON
                    .parse(
                      await item
                        .getText(
                          'custom-app-type'
                        )
                    )
              )
          );
      if (
        e.target
          .dropPosition ===
          'before'
      ) {
        list
          .insertBefore(
            e.target.key,
            ...processedItems
          );
      } else if (
        e.target
          .dropPosition ===
          'after'
      ) {
        list.insertAfter(
          e.target.key,
          ...processedItems
        );
      }
    },

    // Handle drops on the collection when empty.
    async onRootDrop(e) {
      let processedItems =
        await Promise
          .all(
            e.items
              .filter(
                isTextDropItem
              )
              .map(
                async (item) =>
                  JSON
                    .parse(
                      await item
                        .getText(
                          'custom-app-type'
                        )
                    )
              )
          );
      list.append(
        ...processedItems
      );
    },

    // Handle reordering items within the same list.
    onReorder(e) {
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
    },

    // Remove the items from the source list on drop
    // if they were moved to a different list.
    onDragEnd(e) {
      if (
        e.dropOperation ===
          'move' &&
        !e.isInternal
      ) {
        list.remove(
          ...e.keys
        );
      }
    }
  });

  return (
    <ListBox
      aria-label={props[
        'aria-label'
      ]}
      selectionMode="multiple"
      selectedKeys={list
        .selectedKeys}
      onSelectionChange={list
        .setSelectedKeys}
      items={list.items}
      dragAndDropHooks={dragAndDropHooks}
      renderEmptyState={() =>
        'Drop items here'}
    >
      {(item) => (
        <ListBoxItem>
          {item.name}
        </ListBoxItem>
      )}
    </ListBox>
  );
}

<div
  style={{
    display: 'flex',
    gap: 12,
    flexWrap: 'wrap'
  }}
>
  <DndListBox
    initialItems={[
      {
        id: '1',
        type: 'file',
        name:
          'Adobe Photoshop'
      },
      {
        id: '2',
        type: 'file',
        name:
          'Adobe XD'
      },
      {
        id: '3',
        type: 'folder',
        name:
          'Documents'
      },
      {
        id: '4',
        type: 'file',
        name:
          'Adobe InDesign'
      },
      {
        id: '5',
        type: 'folder',
        name:
          'Utilities'
      },
      {
        id: '6',
        type: 'file',
        name:
          'Adobe AfterEffects'
      }
    ]}
    aria-label="First ListBox"
  />
  <DndListBox
    initialItems={[
      {
        id: '7',
        type: 'folder',
        name:
          'Pictures'
      },
      {
        id: '8',
        type: 'file',
        name:
          'Adobe Fresco'
      },
      {
        id: '9',
        type: 'folder',
        name: 'Apps'
      },
      {
        id: '10',
        type: 'file',
        name:
          'Adobe Illustrator'
      },
      {
        id: '11',
        type: 'file',
        name:
          'Adobe Lightroom'
      },
      {
        id: '12',
        type: 'file',
        name:
          'Adobe Dreamweaver'
      }
    ]}
    aria-label="Second ListBox"
  />
</div>
```

* * *

Name

Type

Default

Description

`selectionBehavior`

`[SelectionBehavior](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/selection.d.ts:SelectionBehavior)`

`"toggle"`

How multiple selection should behave in the collection.

`dragAndDropHooks`

`[DragAndDropHooks](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/useDragAndDrop.tsx:DragAndDropHooks)<NoInfer<[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)>>`

—

The drag and drop hooks returned by `useDragAndDrop` used to enable drag and drop behavior for the ListBox.

`renderEmptyState`

`( (props: [ListBoxRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/ListBox.tsx:ListBoxRenderProps) )) => [ReactNode](https://reactjs.org/docs/rendering-elements.html)`

—

Provides content to display when there are no items in the list.

`layout`

`'stack' | 'grid'`

`'stack'`

Whether the items are arranged in a stack or grid.

`orientation`

`[Orientation](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/orientation.d.ts:Orientation)`

`'vertical'`

The primary orientation of the items. Usually this is the direction that the collection scrolls.

`shouldSelectOnPressUp`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether selection should occur on press up instead of press down.

`shouldFocusOnHover`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether options should be focused when the user hovers over them.

`escapeKeyBehavior`

`'clearSelection' | 'none'`

`'clearSelection'`

Whether pressing the escape key should clear selection in the listbox or not.

Most experiences should not modify this option as it eliminates a keyboard user's ability to easily clear selection. Only use if the escape key is being handled externally or should not trigger selection clearing contextually.

`autoFocus`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | [FocusStrategy](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/selection.d.ts:FocusStrategy)`

—

Whether to auto focus the listbox or an option.

`shouldFocusWrap`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether focus should wrap around when the end/start is reached.

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

`[ClassNameOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ClassNameOrFunction)<[ListBoxRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/ListBox.tsx:ListBoxRenderProps)>`

—

The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.

`style`

`[StyleOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:StyleOrFunction)<[ListBoxRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/ListBox.tsx:ListBoxRenderProps)>`

—

The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.

Events

Name

Type

Description

`onAction`

`( (key: [Key](https://reactjs.org/docs/lists-and-keys.html) )) => void`

Handler that is called when a user performs an action on an item. The exact user event depends on the collection's `selectionBehavior` prop and the interaction modality.

`onSelectionChange`

`( (keys: [Selection](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/selection.d.ts:Selection) )) => void`

Handler that is called when the selection changes.

`onFocus`

`( (e: [FocusEvent](https://developer.mozilla.org/docs/Web/API/FocusEvent)<Target> )) => void`

Handler that is called when the element receives focus.

`onBlur`

`( (e: [FocusEvent](https://developer.mozilla.org/docs/Web/API/FocusEvent)<Target> )) => void`

Handler that is called when the element loses focus.

`onFocusChange`

`( (isFocused: [boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) )) => void`

Handler that is called when the element's focus status changes.

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

A `<ListBoxSection>` defines the child items for a section within a `<ListBox>`. It may also contain an optional `<Header>` element. If there is no header, then an `aria-label` must be provided to identify the section to assistive technologies.

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

EventsPositioningAccessibility

Name

Type

Description

`aria-label`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

An accessibility label for the section.

A `<Header>` defines the title for a `<ListBoxSection>`. It accepts all DOM attributes.

A `<ListBoxItem>` defines a single option within a `<ListBox>`. If the `children` are not plain text, then the `textValue` prop must also be set to a plain text representation, which will be used for typeahead in the ListBox.

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

`[ChildrenOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ChildrenOrFunction)<[ListBoxItemRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/ListBox.tsx:ListBoxItemRenderProps)>`

The children of the component. A function may be provided to alter the children based on component state.

`className`

`[ClassNameOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ClassNameOrFunction)<[ListBoxItemRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/ListBox.tsx:ListBoxItemRenderProps)>`

The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.

`style`

`[StyleOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:StyleOrFunction)<[ListBoxItemRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/ListBox.tsx:ListBoxItemRenderProps)>`

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

Handler that is called when a user performs an action on the item. The exact user event depends on the collection's `selectionBehavior` prop and the interaction modality.

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

A `<ListBoxLoadMoreItem>` defines the load more spinner within a `<ListBox>`. It renders its children when `isLoading` is true, and allows you to customize the scroll distance from the bottom of the list that should trigger another load operation.

Show props

Name

Type

Default

Description

`children`

`[ReactNode](https://reactjs.org/docs/rendering-elements.html)`

—

The load more spinner to render when loading additional items.

`isLoading`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether or not the loading spinner should be rendered or not.

`scrollOffset`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)`

`1`

The amount of offset from the bottom of your scrollable region that should trigger load more. Uses a percentage value relative to the scroll body's client height. Load more is then triggered when your current scroll position's distance from the bottom of the currently loaded list of items is less than or equal to the provided value. (e.g. 1 = 100% of the scroll region's height).

`className`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element.

`style`

`[CSSProperties](https://reactjs.org/docs/dom-elements.html#style)`

—

The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element.

Events

Name

Type

Description

`onLoadMore`

`() => any`

Handler that is called when more items should be loaded, e.g. while scrolling near the bottom.

Positioning

* * *

React Aria components can be styled in many ways, including using CSS classes, inline styles, utility classes (e.g. Tailwind), CSS-in-JS (e.g. Styled Components), etc. By default, all components include a builtin `className` attribute which can be targeted using CSS selectors. These follow the `react-aria-ComponentName` naming convention.

```
.react-aria-ListBox {
  /* ... */
}
```

```
.react-aria-ListBox {
  /* ... */
}
```

```
.react-aria-ListBox {
  /* ... */
}
```

A custom `className` can also be specified on any component. This overrides the default `className` provided by React Aria with your own.

```
<ListBox className="my-listbox">
  {/* ... */}
</ListBox>
```

```
<ListBox className="my-listbox">
  {/* ... */}
</ListBox>
```

```
<ListBox className="my-listbox">
  {/* ... */}
</ListBox>
```

In addition, some components support multiple UI states (e.g. pressed, hovered, etc.). React Aria components expose states using data attributes, which you can target in CSS selectors. For example:

```
.react-aria-ListBoxItem[data-selected] {
  /* ... */
}

.react-aria-ListBoxItem[data-focused] {
  /* ... */
}
```

```
.react-aria-ListBoxItem[data-selected] {
  /* ... */
}

.react-aria-ListBoxItem[data-focused] {
  /* ... */
}
```

```
.react-aria-ListBoxItem[data-selected] {
  /* ... */
}

.react-aria-ListBoxItem[data-focused] {
  /* ... */
}
```

The `className` and `style` props also accept functions which receive states for styling. This lets you dynamically determine the classes or styles to apply, which is useful when using utility CSS libraries like [Tailwind](https://tailwindcss.com/).

```
<ListBoxItem
  className={({ isSelected }) => isSelected ? 'bg-blue-400' : 'bg-gray-100'}
>
  Item
</ListBoxItem>
```

```
<ListBoxItem
  className={({ isSelected }) =>
    isSelected ? 'bg-blue-400' : 'bg-gray-100'}
>
  Item
</ListBoxItem>
```

```
<ListBoxItem
  className={(
    { isSelected }
  ) =>
    isSelected
      ? 'bg-blue-400'
      : 'bg-gray-100'}
>
  Item
</ListBoxItem>
```

Render props may also be used as children to alter what elements are rendered based on the current state. For example, you could render a checkmark icon when an item is selected.

```
<ListBoxItem>
  {({isSelected}) => (
    <>
      {isSelected && <CheckmarkIcon />}
      Item
    </>
  )}
</ListBoxItem>
```

```
<ListBoxItem>
  {({isSelected}) => (
    <>
      {isSelected && <CheckmarkIcon />}
      Item
    </>
  )}
</ListBoxItem>
```

```
<ListBoxItem>
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
</ListBoxItem>
```

The states and selectors for each component used in a `ListBox` are documented below.

A `ListBox` can be targeted with the `.react-aria-ListBox` CSS selector, or by overriding with a custom `className`. It supports the following states and render props:

Name

CSS Selector

Description

`isEmpty`

`[data-empty]`

Whether the listbox has no items and should display its empty state.

`isFocused`

`[data-focused]`

Whether the listbox is currently focused.

`isFocusVisible`

`[data-focus-visible]`

Whether the listbox is currently keyboard focused.

`isDropTarget`

`[data-drop-target]`

Whether the listbox is currently the active drop target.

`layout`

`[data-layout="stack | grid"]`

Whether the items are arranged in a stack or grid.

`state`

`—`

State of the listbox.

A `ListBoxSection` can be targeted with the `.react-aria-ListBoxSection` CSS selector, or by overriding with a custom `className`. See [sections](#sections) for examples.

A `Header` within a `ListBoxSection` can be targeted with the `.react-aria-Header` CSS selector, or by overriding with a custom `className`. See [sections](#sections) for examples.

A `ListBoxItem` can be targeted with the `.react-aria-ListBoxItem` CSS selector, or by overriding with a custom `className`. It supports the following states and render props:

Name

CSS Selector

Description

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

`allowsDragging`

`[data-allows-dragging]`

Whether the item allows dragging.

`isDragging`

`[data-dragging]`

Whether the item is currently being dragged.

`isDropTarget`

`[data-drop-target]`

Whether the item is currently an active drop target.

Items also support two slots: a label, and a description. When provided using the `<Text>` element, the item will have `aria-labelledby` and `aria-describedby` attributes pointing to these slots, improving screen reader announcement. See [Text slots](#text-slots) for an example.

Note that items may not contain interactive children such as buttons, as screen readers will not be able to access them.

* * *

If you need to customize one of the components within a `ListBox`, such as `ListBoxItem` or `ListBoxSection`, in many cases you can create a wrapper component. This lets you customize the props passed to the component.

```
function MyItem(props) {
  return <ListBoxItem {...props} className="my-item" />
}
```

```
function MyItem(props) {
  return <ListBoxItem {...props} className="my-item" />
}
```

```
function MyItem(props) {
  return (
    <ListBoxItem
      {...props}
      className="my-item"
    />
  );
}
```

All React Aria Components export a corresponding context that can be used to send props to them from a parent element. This enables you to build your own compositional APIs similar to those found in React Aria Components itself. You can send any prop or ref via context that you could pass to the corresponding component. The local props and ref on the component are merged with the ones passed via context, with the local props taking precedence (following the rules documented in [mergeProps](https://react-spectrum.adobe.com/react-aria/mergeProps.html)).

Component

Context

Props

Ref

`ListBox`

`ListBoxContext`

`[ListBoxProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/ListBox.tsx:ListBoxProps)`

`[HTMLDivElement](https://developer.mozilla.org/docs/Web/API/HTMLDivElement)`

This example shows a component that accepts a `ListBox` and a [Checkbox](https://react-spectrum.adobe.com/react-aria/Checkbox.html) as children, and allows the user to select or deselect all items by toggling the checkbox.

```
import {CheckboxContext, ListBoxContext} from 'react-aria-components';

function SelectAllListBox({children}) {
  let [selectedKeys, onSelectionChange] = React.useState<Selection>(new Set());
  let isSelected = selectedKeys === 'all';
  let onChange = (isSelected: boolean) => {
    onSelectionChange(isSelected ? 'all' : new Set());
  };

  return (
    <CheckboxContext.Provider value={{isSelected, onChange}}>
      <ListBoxContext.Provider value={{selectedKeys, onSelectionChange}}>
        {children}
      </ListBoxContext.Provider>
    </CheckboxContext.Provider>
  );
}
```

```
import {
  CheckboxContext,
  ListBoxContext
} from 'react-aria-components';

function SelectAllListBox({ children }) {
  let [selectedKeys, onSelectionChange] = React.useState<
    Selection
  >(new Set());
  let isSelected = selectedKeys === 'all';
  let onChange = (isSelected: boolean) => {
    onSelectionChange(isSelected ? 'all' : new Set());
  };

  return (
    <CheckboxContext.Provider
      value={{ isSelected, onChange }}
    >
      <ListBoxContext.Provider
        value={{ selectedKeys, onSelectionChange }}
      >
        {children}
      </ListBoxContext.Provider>
    </CheckboxContext.Provider>
  );
}
```

```
import {
  CheckboxContext,
  ListBoxContext
} from 'react-aria-components';

function SelectAllListBox(
  { children }
) {
  let [
    selectedKeys,
    onSelectionChange
  ] = React.useState<
    Selection
  >(new Set());
  let isSelected =
    selectedKeys ===
      'all';
  let onChange = (
    isSelected: boolean
  ) => {
    onSelectionChange(
      isSelected
        ? 'all'
        : new Set()
    );
  };

  return (
    <CheckboxContext.Provider
      value={{
        isSelected,
        onChange
      }}
    >
      <ListBoxContext.Provider
        value={{
          selectedKeys,
          onSelectionChange
        }}
      >
        {children}
      </ListBoxContext.Provider>
    </CheckboxContext.Provider>
  );
}
```

The `SelectAllListBox` component can be reused to allow the user to toggle select all for any nested `ListBox`.

```
import {Checkbox} from 'react-aria-components';

<SelectAllListBox>
  <Checkbox style={{marginBottom: '8px'}}>
    <div className="checkbox">
      <svg viewBox="0 0 18 18" aria-hidden="true">
        <polyline points="1 9 7 14 15 4" />
      </svg>
    </div>
    Unsubscribe
  </Checkbox>
  <ListBox selectionMode="multiple" aria-label="Ice cream flavors">
    <ListBoxItem>Chocolate</ListBoxItem>
    <ListBoxItem>Mint</ListBoxItem>
    <ListBoxItem>Strawberry</ListBoxItem>
    <ListBoxItem>Vanilla</ListBoxItem>
  </ListBox>
</SelectAllListBox>
```

```
import {Checkbox} from 'react-aria-components';

<SelectAllListBox>
  <Checkbox style={{ marginBottom: '8px' }}>
    <div className="checkbox">
      <svg viewBox="0 0 18 18" aria-hidden="true">
        <polyline points="1 9 7 14 15 4" />
      </svg>
    </div>
    Unsubscribe
  </Checkbox>
  <ListBox
    selectionMode="multiple"
    aria-label="Ice cream flavors"
  >
    <ListBoxItem>Chocolate</ListBoxItem>
    <ListBoxItem>Mint</ListBoxItem>
    <ListBoxItem>Strawberry</ListBoxItem>
    <ListBoxItem>Vanilla</ListBoxItem>
  </ListBox>
</SelectAllListBox>
```

```
import {Checkbox} from 'react-aria-components';

<SelectAllListBox>
  <Checkbox
    style={{
      marginBottom:
        '8px'
    }}
  >
    <div className="checkbox">
      <svg
        viewBox="0 0 18 18"
        aria-hidden="true"
      >
        <polyline points="1 9 7 14 15 4" />
      </svg>
    </div>
    Unsubscribe
  </Checkbox>
  <ListBox
    selectionMode="multiple"
    aria-label="Ice cream flavors"
  >
    <ListBoxItem>
      Chocolate
    </ListBoxItem>
    <ListBoxItem>
      Mint
    </ListBoxItem>
    <ListBoxItem>
      Strawberry
    </ListBoxItem>
    <ListBoxItem>
      Vanilla
    </ListBoxItem>
  </ListBox>
</SelectAllListBox>
```

ListBox passes props to its child components, such as the section headers and separators, via their associated contexts. These contexts are exported so you can also consume them in your own custom components. This enables you to reuse existing components from your app or component library together with React Aria Components.

Component

Context

Props

Ref

`Separator`

`SeparatorContext`

`[SeparatorProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Separator.tsx:SeparatorProps)`

`[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)`

`Header`

`HeaderContext`

`[HTMLAttributes](#undefined)`

`[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)`

`Text`

`TextContext`

`[TextProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Text.tsx:TextProps)`

`[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)`

This example consumes from `TextContext` in an existing styled typography component to make it compatible with React Aria Components. The `[useContextProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:useContextProps)` hook merges the local props and ref with the ones provided via context by ListBox.

```
import type {TextProps} from 'react-aria-components';
import {TextContext, useContextProps} from 'react-aria-components';

const MyText = React.forwardRef(
  (props: TextProps, ref: React.ForwardedRef<HTMLElement>) => {
    // Merge the local props and ref with the ones provided via context.
    [props, ref] = useContextProps(props, ref, TextContext);
    // ... your existing Text component
    return <span {...props} ref={ref} />;
  }
);
```

```
import type {TextProps} from 'react-aria-components';
import {
  TextContext,
  useContextProps
} from 'react-aria-components';

const MyText = React.forwardRef(
  (
    props: TextProps,
    ref: React.ForwardedRef<HTMLElement>
  ) => {
    // Merge the local props and ref with the ones provided via context.
    [props, ref] = useContextProps(props, ref, TextContext);
    // ... your existing Text component
    return <span {...props} ref={ref} />;
  }
);
```

```
import type {TextProps} from 'react-aria-components';
import {
  TextContext,
  useContextProps
} from 'react-aria-components';

const MyText = React
  .forwardRef(
    (
      props: TextProps,
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
          TextContext
        );
      // ... your existing Text component
      return (
        <span
          {...props}
          ref={ref}
        />
      );
    }
  );
```

Now you can use `MyText` within a `Menu`, in place of the builtin React Aria Components `Text`.

```
<ListBox>
  <ListBoxItem>
    <MyText slot="label">Option</MyText>  </ListBoxItem>
  {/* ... */}
</ListBox>
```

```
<ListBox>
  <ListBoxItem>
    <MyText slot="label">Option</MyText>  </ListBoxItem>
  {/* ... */}
</ListBox>
```

```
<ListBox>
  <ListBoxItem>
    <MyText slot="label">
      Option
    </MyText>  </ListBoxItem>
  {/* ... */}
</ListBox>
```

If you need to customize things even further, such as accessing internal state or customizing DOM structure, you can drop down to the lower level Hook-based API. See [useListBox](https://react-spectrum.adobe.com/react-aria/useListBox.html) for more details.

* * *

`@react-aria/test-utils` offers common listbox interaction utilities which you may find helpful when writing tests. See [here](https://react-spectrum.adobe.com/react-aria/testing.html#react-aria-test-utils) for more information on how to setup these utilities in your tests. Below is the full definition of the listbox tester and a sample of how you could use it in your test suite.

```
// ListBox.test.ts
import {render} from '@testing-library/react';
import {User} from '@react-aria/test-utils';

let testUtilUser = new User({ interactionType: 'mouse' });
// ...

it('ListBox can select an option via keyboard', async function () {
  // Render your test component/app and initialize the listbox tester
  let { getByTestId } = render(
    <ListBox selectionMode="single" data-testid="test-listbox">
      ...
    </ListBox>
  );
  let listboxTester = testUtilUser.createTester('ListBox', {
    root: getByTestId('test-listbox'),
    interactionType: 'keyboard'
  });

  await listboxTester.toggleOptionSelection({ option: 4 });
  expect(listboxTester.options()[4]).toHaveAttribute('aria-selected', 'true');
});
```

```
// ListBox.test.ts
import {render} from '@testing-library/react';
import {User} from '@react-aria/test-utils';

let testUtilUser = new User({ interactionType: 'mouse' });
// ...

it('ListBox can select an option via keyboard', async function () {
  // Render your test component/app and initialize the listbox tester
  let { getByTestId } = render(
    <ListBox
      selectionMode="single"
      data-testid="test-listbox"
    >
      ...
    </ListBox>
  );
  let listboxTester = testUtilUser.createTester('ListBox', {
    root: getByTestId('test-listbox'),
    interactionType: 'keyboard'
  });

  await listboxTester.toggleOptionSelection({ option: 4 });
  expect(listboxTester.options()[4]).toHaveAttribute(
    'aria-selected',
    'true'
  );
});
```

```
// ListBox.test.ts
import {render} from '@testing-library/react';
import {User} from '@react-aria/test-utils';

let testUtilUser =
  new User({
    interactionType:
      'mouse'
  });
// ...

it('ListBox can select an option via keyboard', async function () {
  // Render your test component/app and initialize the listbox tester
  let { getByTestId } =
    render(
      <ListBox
        selectionMode="single"
        data-testid="test-listbox"
      >
        ...
      </ListBox>
    );
  let listboxTester =
    testUtilUser
      .createTester(
        'ListBox',
        {
          root:
            getByTestId(
              'test-listbox'
            ),
          interactionType:
            'keyboard'
        }
      );

  await listboxTester
    .toggleOptionSelection(
      { option: 4 }
    );
  expect(
    listboxTester
      .options()[4]
  ).toHaveAttribute(
    'aria-selected',
    'true'
  );
});
```

### Properties

Name

Type

Description

`listbox`

`[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)`

Returns the listbox.

`selectedOptions`

`[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)[]`

Returns the listbox's selected options if any.

`sections`

`[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)[]`

Returns the listbox's sections if any.

### Methods

Method

Description

`constructor( (opts: [ListBoxTesterOpts](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/test-utils/src/types.ts:ListBoxTesterOpts) )): void`

`setInteractionType( (type: [UserOpts](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/test-utils/src/types.ts:UserOpts)['interactionType'] )): void`

Set the interaction type used by the listbox tester.

`findOption( (opts: {  optionIndexOrText: [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) |  | [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)  } )): [HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)`

Returns a option matching the specified index or text content.

`toggleOptionSelection( (opts: [ListBoxToggleOptionOpts](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/test-utils/src/listbox.ts:ListBoxToggleOptionOpts) )): [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<void>`

Toggles the selection for the specified listbox option. Defaults to using the interaction type set on the listbox tester.

`triggerOptionAction( (opts: [ListBoxOptionActionOpts](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/test-utils/src/listbox.ts:ListBoxOptionActionOpts) )): [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<void>`

Triggers the action for the specified listbox option. Defaults to using the interaction type set on the listbox tester.

`options( (opts: {  element?: [HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)  } )): [HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)[]`

Returns the listbox options. Can be filtered to a subsection of the listbox if provided via `element`.