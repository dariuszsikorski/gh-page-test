# GridList

**Source**: [https://react-spectrum.adobe.com/react-aria/GridList.html](https://react-spectrum.adobe.com/react-aria/GridList.html)

> Documentation for GridList in the React Aria package.

---

A grid list displays a list of interactive items, with support for keyboard navigation, single or multiple selection, and row actions.

* * *

```
import {GridList, GridListItem, Button} from 'react-aria-components';
import {MyCheckbox} from './Checkbox';
import {Info} from 'lucide-react';

<GridList aria-label="Favorite pokemon" selectionMode="multiple">
  <GridListItem textValue="Charizard">
    <MyCheckbox slot="selection" />
    Charizard
    <Button aria-label="Info"><Info size={20} /></Button>
  </GridListItem>
  <GridListItem textValue="Blastoise">
    <MyCheckbox slot="selection" />
    Blastoise
    <Button aria-label="Info"><Info size={20} /></Button>
  </GridListItem>
  <GridListItem textValue="Venusaur">
    <MyCheckbox slot="selection" />
    Venusaur
    <Button aria-label="Info"><Info size={20} /></Button>
  </GridListItem>
  <GridListItem textValue="Pikachu">
    <MyCheckbox slot="selection" />
    Pikachu
    <Button aria-label="Info"><Info size={20} /></Button>
  </GridListItem>
</GridList>
```

```
import {
  Button,
  GridList,
  GridListItem
} from 'react-aria-components';
import {MyCheckbox} from './Checkbox';
import {Info} from 'lucide-react';

<GridList
  aria-label="Favorite pokemon"
  selectionMode="multiple"
>
  <GridListItem textValue="Charizard">
    <MyCheckbox slot="selection" />
    Charizard
    <Button aria-label="Info">
      <Info size={20} />
    </Button>
  </GridListItem>
  <GridListItem textValue="Blastoise">
    <MyCheckbox slot="selection" />
    Blastoise
    <Button aria-label="Info">
      <Info size={20} />
    </Button>
  </GridListItem>
  <GridListItem textValue="Venusaur">
    <MyCheckbox slot="selection" />
    Venusaur
    <Button aria-label="Info">
      <Info size={20} />
    </Button>
  </GridListItem>
  <GridListItem textValue="Pikachu">
    <MyCheckbox slot="selection" />
    Pikachu
    <Button aria-label="Info">
      <Info size={20} />
    </Button>
  </GridListItem>
</GridList>
```

```
import {
  Button,
  GridList,
  GridListItem
} from 'react-aria-components';
import {MyCheckbox} from './Checkbox';
import {Info} from 'lucide-react';

<GridList
  aria-label="Favorite pokemon"
  selectionMode="multiple"
>
  <GridListItem textValue="Charizard">
    <MyCheckbox slot="selection" />
    Charizard
    <Button aria-label="Info">
      <Info
        size={20}
      />
    </Button>
  </GridListItem>
  <GridListItem textValue="Blastoise">
    <MyCheckbox slot="selection" />
    Blastoise
    <Button aria-label="Info">
      <Info
        size={20}
      />
    </Button>
  </GridListItem>
  <GridListItem textValue="Venusaur">
    <MyCheckbox slot="selection" />
    Venusaur
    <Button aria-label="Info">
      <Info
        size={20}
      />
    </Button>
  </GridListItem>
  <GridListItem textValue="Pikachu">
    <MyCheckbox slot="selection" />
    Pikachu
    <Button aria-label="Info">
      <Info
        size={20}
      />
    </Button>
  </GridListItem>
</GridList>
```

Show CSS

```
@import "@react-aria/example-theme";

.react-aria-GridList {
  display: flex;
  flex-direction: column;
  gap: 2px;
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

  .react-aria-GridListItem {
    display: flex;
    align-items: center;
    gap: 0.571rem;
    min-height: 28px;
    padding: 0.286rem 0.286rem 0.286rem 0.571rem;
    border-radius: 6px;
    outline: none;
    cursor: default;
    color: var(--text-color);
    font-size: 1.072rem;
    position: relative;
    transform: translateZ(0);

    &[data-focus-visible] {
      outline: 2px solid var(--focus-ring-color);
      outline-offset: -2px;
    }

    &[data-pressed] {
      background: var(--gray-100);
    }

    &[data-selected] {
      background: var(--highlight-background);
      color: var(--highlight-foreground);
      --focus-ring-color: var(--highlight-foreground);

      &[data-focus-visible] {
        outline-color: var(--highlight-foreground);
        outline-offset: -4px;
      }

      .react-aria-Button {
        color: var(--highlight-foreground);
        --highlight-hover: rgb(255 255 255 / 0.1);
        --highlight-pressed: rgb(255 255 255 / 0.2);
      }
    }

    &[data-disabled] {
      color: var(--text-color-disabled);
    }

    .react-aria-Button:not([slot]) {
      margin-left: auto;
    }

    .react-aria-Button {
      background: transparent;
      border: none;
      font-size: 1.2rem;
      line-height: 1.2em;
      padding: 0.286rem 0.429rem;
      transition: background 200ms;

      &[data-hovered] {
        background: var(--highlight-hover);
      }

      &[data-pressed] {
        background: var(--highlight-pressed);
        box-shadow: none;
      }
    }
  }

  /* join selected items if :has selector is supported */
  @supports selector(:has(.foo)) {
    gap: 0;

    .react-aria-GridListItem[data-selected]:has(+ [data-selected]),
    .react-aria-GridListItem[data-selected]:has(+ .react-aria-DropIndicator + [data-selected]) {
      border-end-start-radius: 0;
      border-end-end-radius: 0;
    }

    .react-aria-GridListItem[data-selected] + [data-selected],
    .react-aria-GridListItem[data-selected] + .react-aria-DropIndicator + [data-selected] {
      border-start-start-radius: 0;
      border-start-end-radius: 0;
    }
  }

  :where(.react-aria-GridListItem) .react-aria-Checkbox {
    --selected-color: var(--highlight-foreground);
    --selected-color-pressed: var(--highlight-foreground-pressed);
    --checkmark-color: var(--highlight-background);
    --background-color: var(--highlight-background);
  }
}
```

```
@import "@react-aria/example-theme";

.react-aria-GridList {
  display: flex;
  flex-direction: column;
  gap: 2px;
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

  .react-aria-GridListItem {
    display: flex;
    align-items: center;
    gap: 0.571rem;
    min-height: 28px;
    padding: 0.286rem 0.286rem 0.286rem 0.571rem;
    border-radius: 6px;
    outline: none;
    cursor: default;
    color: var(--text-color);
    font-size: 1.072rem;
    position: relative;
    transform: translateZ(0);

    &[data-focus-visible] {
      outline: 2px solid var(--focus-ring-color);
      outline-offset: -2px;
    }

    &[data-pressed] {
      background: var(--gray-100);
    }

    &[data-selected] {
      background: var(--highlight-background);
      color: var(--highlight-foreground);
      --focus-ring-color: var(--highlight-foreground);

      &[data-focus-visible] {
        outline-color: var(--highlight-foreground);
        outline-offset: -4px;
      }

      .react-aria-Button {
        color: var(--highlight-foreground);
        --highlight-hover: rgb(255 255 255 / 0.1);
        --highlight-pressed: rgb(255 255 255 / 0.2);
      }
    }

    &[data-disabled] {
      color: var(--text-color-disabled);
    }

    .react-aria-Button:not([slot]) {
      margin-left: auto;
    }

    .react-aria-Button {
      background: transparent;
      border: none;
      font-size: 1.2rem;
      line-height: 1.2em;
      padding: 0.286rem 0.429rem;
      transition: background 200ms;

      &[data-hovered] {
        background: var(--highlight-hover);
      }

      &[data-pressed] {
        background: var(--highlight-pressed);
        box-shadow: none;
      }
    }
  }

  /* join selected items if :has selector is supported */
  @supports selector(:has(.foo)) {
    gap: 0;

    .react-aria-GridListItem[data-selected]:has(+ [data-selected]),
    .react-aria-GridListItem[data-selected]:has(+ .react-aria-DropIndicator + [data-selected]) {
      border-end-start-radius: 0;
      border-end-end-radius: 0;
    }

    .react-aria-GridListItem[data-selected] + [data-selected],
    .react-aria-GridListItem[data-selected] + .react-aria-DropIndicator + [data-selected] {
      border-start-start-radius: 0;
      border-start-end-radius: 0;
    }
  }

  :where(.react-aria-GridListItem) .react-aria-Checkbox {
    --selected-color: var(--highlight-foreground);
    --selected-color-pressed: var(--highlight-foreground-pressed);
    --checkmark-color: var(--highlight-background);
    --background-color: var(--highlight-background);
  }
}
```

```
@import "@react-aria/example-theme";

.react-aria-GridList {
  display: flex;
  flex-direction: column;
  gap: 2px;
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

  .react-aria-GridListItem {
    display: flex;
    align-items: center;
    gap: 0.571rem;
    min-height: 28px;
    padding: 0.286rem 0.286rem 0.286rem 0.571rem;
    border-radius: 6px;
    outline: none;
    cursor: default;
    color: var(--text-color);
    font-size: 1.072rem;
    position: relative;
    transform: translateZ(0);

    &[data-focus-visible] {
      outline: 2px solid var(--focus-ring-color);
      outline-offset: -2px;
    }

    &[data-pressed] {
      background: var(--gray-100);
    }

    &[data-selected] {
      background: var(--highlight-background);
      color: var(--highlight-foreground);
      --focus-ring-color: var(--highlight-foreground);

      &[data-focus-visible] {
        outline-color: var(--highlight-foreground);
        outline-offset: -4px;
      }

      .react-aria-Button {
        color: var(--highlight-foreground);
        --highlight-hover: rgb(255 255 255 / 0.1);
        --highlight-pressed: rgb(255 255 255 / 0.2);
      }
    }

    &[data-disabled] {
      color: var(--text-color-disabled);
    }

    .react-aria-Button:not([slot]) {
      margin-left: auto;
    }

    .react-aria-Button {
      background: transparent;
      border: none;
      font-size: 1.2rem;
      line-height: 1.2em;
      padding: 0.286rem 0.429rem;
      transition: background 200ms;

      &[data-hovered] {
        background: var(--highlight-hover);
      }

      &[data-pressed] {
        background: var(--highlight-pressed);
        box-shadow: none;
      }
    }
  }

  /* join selected items if :has selector is supported */
  @supports selector(:has(.foo)) {
    gap: 0;

    .react-aria-GridListItem[data-selected]:has(+ [data-selected]),
    .react-aria-GridListItem[data-selected]:has(+ .react-aria-DropIndicator + [data-selected]) {
      border-end-start-radius: 0;
      border-end-end-radius: 0;
    }

    .react-aria-GridListItem[data-selected] + [data-selected],
    .react-aria-GridListItem[data-selected] + .react-aria-DropIndicator + [data-selected] {
      border-start-start-radius: 0;
      border-start-end-radius: 0;
    }
  }

  :where(.react-aria-GridListItem) .react-aria-Checkbox {
    --selected-color: var(--highlight-foreground);
    --selected-color-pressed: var(--highlight-foreground-pressed);
    --checkmark-color: var(--highlight-background);
    --background-color: var(--highlight-background);
  }
}
```

* * *

A list can be built using [<ul>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul) or [<ol>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol) HTML elements, but does not support any user interactions. HTML lists are meant for static content, rather than lists with rich interactions like focusable elements within rows, keyboard navigation, row selection, etc. `GridList` helps achieve accessible and interactive list components that can be styled as needed.

-   **Item selection** – Single or multiple selection, with optional checkboxes, disabled rows, and both `toggle` and `replace` selection behaviors.
-   **Interactive children** – List items may include interactive elements such as buttons, checkboxes, menus, etc.
-   **Actions** – Items support optional row actions such as navigation via click, tap, double click, or Enter key.
-   **Async loading** – Support for loading items asynchronously.
-   **Keyboard navigation** – List items and focusable children can be navigated using the arrow keys, along with page up/down, home/end, etc. Typeahead, auto scrolling, and selection modifier keys are supported as well.
-   **Drag and drop** – GridList supports drag and drop to reorder, insert, or update items via mouse, touch, keyboard, and screen reader interactions.
-   **Virtualized scrolling** – Use [Virtualizer](https://react-spectrum.adobe.com/react-aria/Virtualizer.html) to improve performance of large lists by rendering only the visible items.
-   **Touch friendly** – Selection and actions adapt their behavior depending on the device. For example, selection is activated via long press on touch when item actions are present.
-   **Accessible** – Follows the [ARIA grid pattern](https://www.w3.org/WAI/ARIA/apg/patterns/grid/), with additional selection announcements via an ARIA live region. Extensively tested across many devices and [assistive technologies](https://react-spectrum.adobe.com/react-aria/accessibility.html#testing) to ensure announcements and behaviors are consistent.

**Note**: Use `GridList` when your list items may contain interactive elements such as buttons, checkboxes, menus, etc. within them. If your list items contain only static content such as text and images, then consider using [ListBox](https://react-spectrum.adobe.com/react-aria/ListBox.html) instead for a slightly better screen reader experience (especially on mobile).

* * *

DocumentsItemSelectioncheckboxDragbutton12 itemsOnboardingPDFBudgetXLSSales PitchPPTDragbutton

A grid list consists of a container element, with rows of data inside. The rows within a list may contain focusable elements or plain text content. If the list supports row selection, each row can optionally include a selection checkbox.

```
import {Button, Checkbox, GridList, GridListItem, SelectionIndicator} from 'react-aria-components';

<GridList>
  <GridListItem>
    <Button slot="drag" />
    <Checkbox slot="selection" /> or <SelectionIndicator />
  </GridListItem>
</GridList>
```

```
import {
  Button,
  Checkbox,
  GridList,
  GridListItem,
  SelectionIndicator
} from 'react-aria-components';

<GridList>
  <GridListItem>
    <Button slot="drag" />
    <Checkbox slot="selection" /> or{' '}
    <SelectionIndicator />
  </GridListItem>
</GridList>
```

```
import {
  Button,
  Checkbox,
  GridList,
  GridListItem,
  SelectionIndicator
} from 'react-aria-components';

<GridList>
  <GridListItem>
    <Button slot="drag" />
    <Checkbox slot="selection" />
    {' '}
    or{' '}
    <SelectionIndicator />
  </GridListItem>
</GridList>
```

`GridList` makes use of the following concepts:

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

A `GridList` uses the following components, which may also be used standalone or reused in other components.

[

Checkbox

A checkbox allows a user to select an individual option.

](https://react-spectrum.adobe.com/react-aria/Checkbox.html)[

Button

A button allows a user to perform an action.

](https://react-spectrum.adobe.com/react-aria/Button.html)

* * *

[![](https://react-spectrum.adobe.com/ios-list.8552e83f.png)

iOS List View

A GridList with swipe gestures, layout animations, and multi selection.

](https://react-spectrum.adobe.com/react-aria/examples/ios-list.html)

* * *

To help kick-start your project, we offer starter kits that include example implementations of all React Aria components with various styling solutions. All components are fully styled, including support for dark mode, high contrast mode, and all UI states. Each starter comes with a pre-configured [Storybook](https://storybook.js.org/) that you can experiment with, or use as a starting point for your own component library.

* * *

If you will use a GridList in multiple places in your app, you can wrap all of the pieces into a reusable component. This way, the DOM structure, styling code, and other logic are defined in a single place and reused everywhere to ensure consistency.

This example wraps `GridList` and all of its children together into a single component which accepts a `label` prop and `children`, which are passed through to the right places. The `GridListItem` component is also wrapped to include a custom [checkbox](https://react-spectrum.adobe.com/react-aria/Checkbox.html) component automatically when the item is multi-selectable, and a drag handle when [drag and drop](#drag-and-drop) is enabled.

```
import type {GridListItemProps, GridListProps} from 'react-aria-components';
import {GripVertical} from 'lucide-react';

export function MyGridList<T extends object>(
  { children, ...props }: GridListProps<T>
) {
  return (
    <GridList {...props}>
      {children}
    </GridList>
  );
}

export function MyItem(
  { children, ...props }: Omit<GridListItemProps, 'children'> & {
    children?: React.ReactNode;
  }
) {
  let textValue = typeof children === 'string' ? children : undefined;
  return (
    <GridListItem textValue={textValue} {...props}>
      {({ selectionMode, selectionBehavior, allowsDragging }) => (
        <>
          {/* Add elements for drag and drop and selection. */}
          {allowsDragging && (
            <Button slot="drag">
              <GripVertical size={18} />
            </Button>
          )}
          {selectionMode === 'multiple' && selectionBehavior === 'toggle' && (
            <MyCheckbox slot="selection" />
          )}
          {children}
        </>
      )}
    </GridListItem>
  );
}

<MyGridList aria-label="Ice cream flavors" selectionMode="multiple">
  <MyItem>Chocolate</MyItem>
  <MyItem>Mint</MyItem>
  <MyItem>Strawberry</MyItem>
  <MyItem>Vanilla</MyItem>
</MyGridList>
```

```
import type {
  GridListItemProps,
  GridListProps
} from 'react-aria-components';
import {GripVertical} from 'lucide-react';

export function MyGridList<T extends object>(
  { children, ...props }: GridListProps<T>
) {
  return (
    <GridList {...props}>
      {children}
    </GridList>
  );
}

export function MyItem(
  { children, ...props }:
    & Omit<GridListItemProps, 'children'>
    & { children?: React.ReactNode }
) {
  let textValue = typeof children === 'string'
    ? children
    : undefined;
  return (
    <GridListItem textValue={textValue} {...props}>
      {(
        { selectionMode, selectionBehavior, allowsDragging }
      ) => (
        <>
          {/* Add elements for drag and drop and selection. */}
          {allowsDragging && (
            <Button slot="drag">
              <GripVertical size={18} />
            </Button>
          )}
          {selectionMode === 'multiple' &&
            selectionBehavior === 'toggle' && (
            <MyCheckbox slot="selection" />
          )}
          {children}
        </>
      )}
    </GridListItem>
  );
}

<MyGridList
  aria-label="Ice cream flavors"
  selectionMode="multiple"
>
  <MyItem>Chocolate</MyItem>
  <MyItem>Mint</MyItem>
  <MyItem>Strawberry</MyItem>
  <MyItem>Vanilla</MyItem>
</MyGridList>
```

```
import type {
  GridListItemProps,
  GridListProps
} from 'react-aria-components';
import {GripVertical} from 'lucide-react';

export function MyGridList<
  T extends object
>(
  { children, ...props }:
    GridListProps<T>
) {
  return (
    <GridList {...props}>
      {children}
    </GridList>
  );
}

export function MyItem({
  children,
  ...props
}:
  & Omit<
    GridListItemProps,
    'children'
  >
  & {
    children?:
      React.ReactNode;
  }) {
  let textValue =
    typeof children ===
        'string'
      ? children
      : undefined;
  return (
    <GridListItem
      textValue={textValue}
      {...props}
    >
      {(
        {
          selectionMode,
          selectionBehavior,
          allowsDragging
        }
      ) => (
        <>
          {/* Add elements for drag and drop and selection. */}
          {allowsDragging &&
            (
              <Button slot="drag">
                <GripVertical
                  size={18}
                />
              </Button>
            )}
          {selectionMode ===
              'multiple' &&
            selectionBehavior ===
              'toggle' &&
            (
              <MyCheckbox slot="selection" />
            )}
          {children}
        </>
      )}
    </GridListItem>
  );
}

<MyGridList
  aria-label="Ice cream flavors"
  selectionMode="multiple"
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
</MyGridList>
```

Show CSS

## Content[#](#content)

* * *

So far, our examples have shown static collections, where the data is hard coded. Dynamic collections, as shown below, can be used when the data comes from an external data source such as an API, or updates over time. In the example below, the rows are provided to the GridList via a render function.

```
interface ItemValue {
  id: number;
  name: string;
}

function ExampleList(props: GridListProps<ItemValue>) {
  let rows = [
    { id: 1, name: 'Games' },
    { id: 2, name: 'Program Files' },
    { id: 3, name: 'bootmgr' },
    { id: 4, name: 'log.txt' }
  ];

  return (
    <MyGridList
      aria-label="Example dynamic collection List"
      selectionMode="multiple"
      items={rows}      ...props}
    >
      {(item) => (
        <MyItem textValue={item.name}>
          {item.name}
          <Button
            aria-label="Info"
            onPress={() => alert(`Info for ${item.name}...`)}
          >
            <Info size={20} />
          </Button>
        </MyItem>
      )}
    </MyGridList>
  );
}
```

```
interface ItemValue {
  id: number;
  name: string;
}

function ExampleList(props: GridListProps<ItemValue>) {
  let rows = [
    { id: 1, name: 'Games' },
    { id: 2, name: 'Program Files' },
    { id: 3, name: 'bootmgr' },
    { id: 4, name: 'log.txt' }
  ];

  return (
    <MyGridList
      aria-label="Example dynamic collection List"
      selectionMode="multiple"
      items={rows}      ...props}
    >
      {(item) => (
        <MyItem textValue={item.name}>
          {item.name}
          <Button
            aria-label="Info"
            onPress={() =>
              alert(`Info for ${item.name}...`)}
          >
            <Info size={20} />
          </Button>
        </MyItem>
      )}
    </MyGridList>
  );
}
```

```
interface ItemValue {
  id: number;
  name: string;
}

function ExampleList(
  props: GridListProps<
    ItemValue
  >
) {
  let rows = [
    {
      id: 1,
      name: 'Games'
    },
    {
      id: 2,
      name:
        'Program Files'
    },
    {
      id: 3,
      name: 'bootmgr'
    },
    {
      id: 4,
      name: 'log.txt'
    }
  ];

  return (
    <MyGridList
      aria-label="Example dynamic collection List"
      selectionMode="multiple"
      items={rows}      ...props}
    >
      {(item) => (
        <MyItem
          textValue={item
            .name}
        >
          {item.name}
          <Button
            aria-label="Info"
            onPress={() =>
              alert(
                `Info for ${item.name}...`
              )}
          >
            <Info
              size={20}
            />
          </Button>
        </MyItem>
      )}
    </MyGridList>
  );
}
```

* * *

By default, `GridList` doesn't allow row selection but this can be enabled using the `selectionMode` prop. Use `defaultSelectedKeys` to provide a default set of selected rows. Note that the value of the selected keys must match the `id` prop of the row.

The example below enables single selection mode, and uses `defaultSelectedKeys` to select the id with key equal to `2`. A user can click on a different row to change the selection, or click on the same row again to deselect it entirely.

```
// Using the example above
<ExampleList
  aria-label="List with single selection"
  selectionMode="single"
  defaultSelectedKeys={[2]}/>
```

```
// Using the example above
<ExampleList
  aria-label="List with single selection"
  selectionMode="single"
  defaultSelectedKeys={[2]}/>
```

```
// Using the example above
<ExampleList
  aria-label="List with single selection"
  selectionMode="single"
  defaultSelectedKeys={[
    2
  ]}/>
```

Multiple selection can be enabled by setting `selectionMode` to `multiple`. Our example displays checkboxes when the list allows multiple selection.

```
<ExampleList
  aria-label="List with multiple selection"
  selectionMode="multiple"  defaultSelectedKeys={[2, 4]} />
```

```
<ExampleList
  aria-label="List with multiple selection"
  selectionMode="multiple"  defaultSelectedKeys={[2, 4]} />
```

```
<ExampleList
  aria-label="List with multiple selection"
  selectionMode="multiple"  defaultSelectedKeys={[
    2,
    4
  ]}
/>
```

`GridList` also supports a `disallowEmptySelection` prop which forces the user to have at least one row in the List selected at all times. In this mode, if a single row is selected and the user presses it, it will not be deselected.

```
<ExampleList
  aria-label="List with disallowed empty selection"
  selectionMode="multiple"
  defaultSelectedKeys={[2]}
  disallowEmptySelection/>
```

```
<ExampleList
  aria-label="List with disallowed empty selection"
  selectionMode="multiple"
  defaultSelectedKeys={[2]}
  disallowEmptySelection/>
```

```
<ExampleList
  aria-label="List with disallowed empty selection"
  selectionMode="multiple"
  defaultSelectedKeys={[
    2
  ]}
  disallowEmptySelection/>
```

To programmatically control row selection, use the `selectedKeys` prop paired with the `onSelectionChange` callback. The `id` prop from the selected rows will be passed into the callback when the row is pressed, allowing you to update state accordingly.

```
import type {Selection} from 'react-aria-components';

function PokemonList(props: GridListProps<ItemValue>) {
  let rows = [
    {id: 1, name: 'Charizard'},
    {id: 2, name: 'Blastoise'},
    {id: 3, name: 'Venusaur'},
    {id: 4, name: 'Pikachu'}
  ];

  let [selectedKeys, setSelectedKeys] = React.useState<Selection>(new Set([2]));

  return (
    <MyGridList
      aria-label="List with controlled selection"
      items={rows}
      selectionMode="multiple"
      selectedKeys={selectedKeys}
      onSelectionChange={setSelectedKeys}      {...props}>
      {item => <MyItem>{item.name}</MyItem>}
    </MyGridList>
  );
}
```

```
import type {Selection} from 'react-aria-components';

function PokemonList(props: GridListProps<ItemValue>) {
  let rows = [
    { id: 1, name: 'Charizard' },
    { id: 2, name: 'Blastoise' },
    { id: 3, name: 'Venusaur' },
    { id: 4, name: 'Pikachu' }
  ];

  let [selectedKeys, setSelectedKeys] = React.useState<
    Selection
  >(new Set([2]));

  return (
    <MyGridList
      aria-label="List with controlled selection"
      items={rows}
      selectionMode="multiple"
      selectedKeys={selectedKeys}
      onSelectionChange={setSelectedKeys}      ...props}
    >
      {(item) => <MyItem>{item.name}</MyItem>}
    </MyGridList>
  );
}
```

```
import type {Selection} from 'react-aria-components';

function PokemonList(
  props: GridListProps<
    ItemValue
  >
) {
  let rows = [
    {
      id: 1,
      name: 'Charizard'
    },
    {
      id: 2,
      name: 'Blastoise'
    },
    {
      id: 3,
      name: 'Venusaur'
    },
    {
      id: 4,
      name: 'Pikachu'
    }
  ];

  let [
    selectedKeys,
    setSelectedKeys
  ] = React.useState<
    Selection
  >(new Set([2]));

  return (
    <MyGridList
      aria-label="List with controlled selection"
      items={rows}
      selectionMode="multiple"
      selectedKeys={selectedKeys}
      onSelectionChange={setSelectedKeys}      ...props}
    >
      {(item) => (
        <MyItem>
          {item.name}
        </MyItem>
      )}
    </MyGridList>
  );
}
```

By default, `GridList` uses the `"toggle"` selection behavior, which behaves like a checkbox group: clicking, tapping, or pressing the Space or Enter keys toggles selection for the focused row. Using the arrow keys moves focus but does not change selection. The `"toggle"` selection mode is often paired with a checkbox in each row as an explicit affordance for selection.

When `selectionBehavior` is set to `"replace"`, clicking a row with the mouse replaces the selection with only that row. Using the arrow keys moves both focus and selection. To select multiple rows, modifier keys such as Ctrl, Cmd, and Shift can be used. On touch screen devices, selection always behaves as toggle since modifier keys may not be available.

These selection styles implement the behaviors defined in [Aria Practices](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/#keyboardinteraction).

```
<PokemonList
  aria-label="List with replace selection behavior"
  selectionMode="multiple"
  selectionBehavior="replace"/>
```

```
<PokemonList
  aria-label="List with replace selection behavior"
  selectionMode="multiple"
  selectionBehavior="replace"/>
```

```
<PokemonList
  aria-label="List with replace selection behavior"
  selectionMode="multiple"
  selectionBehavior="replace"/>
```

* * *

`GridList` supports row actions via the `onAction` prop, which is useful for functionality such as navigation. When nothing is selected, the list performs actions by default when clicking or tapping a row. Items may be selected using the checkbox, or by long pressing on touch devices. When at least one item is selected, the list is in selection mode, and clicking or tapping a row toggles the selection. Actions may also be triggered via the Enter key, and selection using the Space key.

This behavior is slightly different when `selectionBehavior="replace"`, where single clicking selects the row and actions are performed via double click. Touch and keyboard behaviors are unaffected.

```
<div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
  <ExampleList
    aria-label="Checkbox selection list with row actions"
    selectionMode="multiple"
    selectionBehavior="toggle"
    onAction={key => alert(`Opening item ${key}...`)}  />
  <ExampleList
    aria-label="Highlight selection list with row actions"
    selectionMode="multiple"
    selectionBehavior="replace"
    onAction={key => alert(`Opening item ${key}...`)}  />
</div>
```

```
<div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
  <ExampleList
    aria-label="Checkbox selection list with row actions"
    selectionMode="multiple"
    selectionBehavior="toggle"
    onAction={key => alert(`Opening item ${key}...`)}  />
  <ExampleList
    aria-label="Highlight selection list with row actions"
    selectionMode="multiple"
    selectionBehavior="replace"
    onAction={key => alert(`Opening item ${key}...`)}  />
</div>
```

```
<div
  style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: 24
  }}
>
  <ExampleList
    aria-label="Checkbox selection list with row actions"
    selectionMode="multiple"
    selectionBehavior="toggle"
    onAction={(key) =>
      alert(
        `Opening item ${key}...`
      )}  />
  <ExampleList
    aria-label="Highlight selection list with row actions"
    selectionMode="multiple"
    selectionBehavior="replace"
    onAction={(key) =>
      alert(
        `Opening item ${key}...`
      )}  />
</div>
```

Rows may also have a row action specified by directly applying `onAction` on the `GridListItem` itself. This may be especially convenient in static collections. If `onAction` is also provided to the `GridList`, both the grid list's and the row's `onAction` are called.

```
<MyGridList
  aria-label="List with onAction applied on the rows directly"
  selectionMode="multiple"
>
  <MyItem onAction={() => alert(`Opening Games`)}>    Games
  </MyItem>
  <MyItem onAction={() => alert(`Opening Program Files`)}>    Program Files
  </MyItem>
  <MyItem onAction={() => alert(`Opening bootmgr`)}>    bootmgr
  </MyItem>
  <MyItem onAction={() => alert(`Opening log.txt`)}>    log.txt
  </MyItem>
</MyGridList>
```

```
<MyGridList
  aria-label="List with onAction applied on the rows directly"
  selectionMode="multiple"
>
  <MyItem onAction={() => alert(`Opening Games`)}>    Games
  </MyItem>
  <MyItem onAction={() => alert(`Opening Program Files`)}>    Program Files
  </MyItem>
  <MyItem onAction={() => alert(`Opening bootmgr`)}>    bootmgr
  </MyItem>
  <MyItem onAction={() => alert(`Opening log.txt`)}>    log.txt
  </MyItem>
</MyGridList>
```

```
<MyGridList
  aria-label="List with onAction applied on the rows directly"
  selectionMode="multiple"
>
  <MyItem
    onAction={() =>
      alert(
        `Opening Games`
      )}
  >    Games
  </MyItem>
  <MyItem
    onAction={() =>
      alert(
        `Opening Program Files`
      )}
  >    Program Files
  </MyItem>
  <MyItem
    onAction={() =>
      alert(
        `Opening bootmgr`
      )}
  >    bootmgr
  </MyItem>
  <MyItem
    onAction={() =>
      alert(
        `Opening log.txt`
      )}
  >    log.txt
  </MyItem>
</MyGridList>
```

Items in a GridList may also be links to another page or website. This can be achieved by passing the `href` prop to the `<GridListItem>` component. Links behave the same way as described above for row actions depending on the `selectionMode` and `selectionBehavior`.

```
<MyGridList aria-label="Links" selectionMode="multiple">
  <MyItem href="https://adobe.com/" target="_blank">Adobe</MyItem>
  <MyItem href="https://apple.com/" target="_blank">Apple</MyItem>
  <MyItem href="https://google.com/" target="_blank">Google</MyItem>
  <MyItem href="https://microsoft.com/" target="_blank">Microsoft</MyItem>
</MyGridList>
```

```
<MyGridList aria-label="Links" selectionMode="multiple">
  <MyItem href="https://adobe.com/" target="_blank">
    Adobe
  </MyItem>
  <MyItem href="https://apple.com/" target="_blank">
    Apple
  </MyItem>
  <MyItem href="https://google.com/" target="_blank">
    Google
  </MyItem>
  <MyItem href="https://microsoft.com/" target="_blank">
    Microsoft
  </MyItem>
</MyGridList>
```

```
<MyGridList
  aria-label="Links"
  selectionMode="multiple"
>
  <MyItem
    href="https://adobe.com/"
    target="_blank"
  >
    Adobe
  </MyItem>
  <MyItem
    href="https://apple.com/"
    target="_blank"
  >
    Apple
  </MyItem>
  <MyItem
    href="https://google.com/"
    target="_blank"
  >
    Google
  </MyItem>
  <MyItem
    href="https://microsoft.com/"
    target="_blank"
  >
    Microsoft
  </MyItem>
</MyGridList>
```

The `<GridListItem>` component works with frameworks and client side routers like [Next.js](https://nextjs.org/) and [React Router](https://reactrouter.com/en/main). As with other React Aria components that support links, this works via the `[RouterProvider](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/utils/src/openLink.tsx:RouterProvider)` component at the root of your app. See the [client side routing guide](https://react-spectrum.adobe.com/react-aria/routing.html) to learn how to set this up.

* * *

GridList supports sections in order to group options. Sections can be used by wrapping groups of items in a `GridListSection` element. A `<GridListHeader>` element may also be included to label the section.

```
import {GridListSection, GridListHeader} from 'react-aria-components';

<GridList aria-label="Sandwich contents" selectionMode="multiple">
  <GridListSection>
    <GridListHeader>Veggies</GridListHeader>
    <MyItem id="lettuce">Lettuce</MyItem>
    <MyItem id="tomato">Tomato</MyItem>
    <MyItem id="onion">Onion</MyItem>
  </GridListSection>
  <GridListSection>
    <GridListHeader>Protein</GridListHeader>
    <MyItem id="ham">Ham</MyItem>
    <MyItem id="tuna">Tuna</MyItem>
    <MyItem id="tofu">Tofu</MyItem>
  </GridListSection>
  <GridListSection>
    <GridListHeader>Condiments</GridListHeader>
    <MyItem id="mayo">Mayonaise</MyItem>
    <MyItem id="mustard">Mustard</MyItem>
    <MyItem id="ranch">Ranch</MyItem>
  </GridListSection>
</GridList>
```

```
import {
  GridListHeader,
  GridListSection
} from 'react-aria-components';

<GridList
  aria-label="Sandwich contents"
  selectionMode="multiple"
>
  <GridListSection>
    <GridListHeader>Veggies</GridListHeader>
    <MyItem id="lettuce">Lettuce</MyItem>
    <MyItem id="tomato">Tomato</MyItem>
    <MyItem id="onion">Onion</MyItem>
  </GridListSection>
  <GridListSection>
    <GridListHeader>Protein</GridListHeader>
    <MyItem id="ham">Ham</MyItem>
    <MyItem id="tuna">Tuna</MyItem>
    <MyItem id="tofu">Tofu</MyItem>
  </GridListSection>
  <GridListSection>
    <GridListHeader>Condiments</GridListHeader>
    <MyItem id="mayo">Mayonaise</MyItem>
    <MyItem id="mustard">Mustard</MyItem>
    <MyItem id="ranch">Ranch</MyItem>
  </GridListSection>
</GridList>
```

```
import {
  GridListHeader,
  GridListSection
} from 'react-aria-components';

<GridList
  aria-label="Sandwich contents"
  selectionMode="multiple"
>
  <GridListSection>
    <GridListHeader>
      Veggies
    </GridListHeader>
    <MyItem id="lettuce">
      Lettuce
    </MyItem>
    <MyItem id="tomato">
      Tomato
    </MyItem>
    <MyItem id="onion">
      Onion
    </MyItem>
  </GridListSection>
  <GridListSection>
    <GridListHeader>
      Protein
    </GridListHeader>
    <MyItem id="ham">
      Ham
    </MyItem>
    <MyItem id="tuna">
      Tuna
    </MyItem>
    <MyItem id="tofu">
      Tofu
    </MyItem>
  </GridListSection>
  <GridListSection>
    <GridListHeader>
      Condiments
    </GridListHeader>
    <MyItem id="mayo">
      Mayonaise
    </MyItem>
    <MyItem id="mustard">
      Mustard
    </MyItem>
    <MyItem id="ranch">
      Ranch
    </MyItem>
  </GridListSection>
</GridList>
```

Show CSS

```
.react-aria-GridList {
  .react-aria-GridListSection:not(:first-child) {
    margin-top: 12px;
  }

  .react-aria-GridListHeader {
    font-size: 1.143rem;
    font-weight: bold;
    padding: 0 0.714rem;
  }
}
```

```
.react-aria-GridList {
  .react-aria-GridListSection:not(:first-child) {
    margin-top: 12px;
  }

  .react-aria-GridListHeader {
    font-size: 1.143rem;
    font-weight: bold;
    padding: 0 0.714rem;
  }
}
```

```
.react-aria-GridList {
  .react-aria-GridListSection:not(:first-child) {
    margin-top: 12px;
  }

  .react-aria-GridListHeader {
    font-size: 1.143rem;
    font-weight: bold;
    padding: 0 0.714rem;
  }
}
```

The above example shows sections with static items. Sections can also be populated from a hierarchical data structure. Similarly to the props on GridList, `<GridListSection>` takes an array of data using the `items` prop. If the section also has a header, the `[Collection](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/collections/src/CollectionBuilder.tsx:Collection)` component can be used to render the child items.

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
    <GridList
      aria-label="Pick an animal"
      items={options}
      selectedKeys={selected}
      selectionMode="single"
      onSelectionChange={setSelected}>
      {section => (
        <GridListSection id={section.name}>
          <GridListHeader>{section.name}</GridListHeader>
          <Collection items={section.children}>
            {item => <MyItem >{item.name}</MyItem>}
          </Collection>
        </GridListSection>
      )}
    </GridList>
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
    <GridList
      aria-label="Pick an animal"
      items={options}
      selectedKeys={selected}
      selectionMode="single"
      onSelectionChange={setSelected}
    >
      {(section) => (
        <GridListSection id={section.name}>
          <GridListHeader>{section.name}</GridListHeader>
          <Collection items={section.children}>
            {(item) => <MyItem>{item.name}</MyItem>}
          </Collection>
        </GridListSection>
      )}
    </GridList>
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
    <GridList
      aria-label="Pick an animal"
      items={options}
      selectedKeys={selected}
      selectionMode="single"
      onSelectionChange={setSelected}
    >
      {(section) => (
        <GridListSection
          id={section
            .name}
        >
          <GridListHeader>
            {section
              .name}
          </GridListHeader>
          <Collection
            items={section
              .children}
          >
            {(item) => (
              <MyItem>
                {item
                  .name}
              </MyItem>
            )}
          </Collection>
        </GridListSection>
      )}
    </GridList>
  );
}
```

* * *

A `GridListItem` can be disabled with the `isDisabled` prop. This will disable all interactions on the row, unless the `disabledBehavior` prop on `GridList` is used to change this behavior. Note that you are responsible for the styling of disabled rows, however, the selection checkbox will be automatically disabled.

```
<MyGridList aria-label="List with disabled rows" selectionMode="multiple">
  <MyItem>Charizard</MyItem>
  <MyItem>Blastoise</MyItem>
  <MyItem isDisabled>Venusaur</MyItem>  <MyItem>Pikachu</MyItem>
</MyGridList>
```

```
<MyGridList
  aria-label="List with disabled rows"
  selectionMode="multiple"
>
  <MyItem>Charizard</MyItem>
  <MyItem>Blastoise</MyItem>
  <MyItem isDisabled>Venusaur</MyItem>  <MyItem>Pikachu</MyItem>
</MyGridList>
```

```
<MyGridList
  aria-label="List with disabled rows"
  selectionMode="multiple"
>
  <MyItem>
    Charizard
  </MyItem>
  <MyItem>
    Blastoise
  </MyItem>
  <MyItem isDisabled>
    Venusaur
  </MyItem>  <MyItem>
    Pikachu
  </MyItem>
</MyGridList>
```

When `disabledBehavior` is set to `selection`, interactions such as focus, dragging, or actions can still be performed on disabled rows.

```
<MyGridList
  aria-label="List with disabled rows" selectionMode="multiple"
  disabledBehavior="selection">
  <MyItem>Charizard</MyItem>
  <MyItem>Blastoise</MyItem>
  <MyItem isDisabled>Venusaur</MyItem>  <MyItem>Pikachu</MyItem>
</MyGridList>
```

```
<MyGridList
  aria-label="List with disabled rows"
  selectionMode="multiple"
  disabledBehavior="selection">
  <MyItem>Charizard</MyItem>
  <MyItem>Blastoise</MyItem>
  <MyItem isDisabled>Venusaur</MyItem>  <MyItem>Pikachu</MyItem>
</MyGridList>
```

```
<MyGridList
  aria-label="List with disabled rows"
  selectionMode="multiple"
  disabledBehavior="selection">
  <MyItem>
    Charizard
  </MyItem>
  <MyItem>
    Blastoise
  </MyItem>
  <MyItem isDisabled>
    Venusaur
  </MyItem>  <MyItem>
    Pikachu
  </MyItem>
</MyGridList>
```

In dynamic collections, it may be more convenient to use the `disabledKeys` prop at the `GridList` level instead of `isDisabled` on individual items. This accepts a list of item ids that are disabled. An item is considered disabled if its key exists in `disabledKeys` or if it has `isDisabled`.

```
// Using the example above
<PokemonList
  aria-label="List with disabled rows"
  selectionMode="multiple"
  disabledKeys={[3]}/>
```

```
// Using the example above
<PokemonList
  aria-label="List with disabled rows"
  selectionMode="multiple"
  disabledKeys={[3]}/>
```

```
// Using the example above
<PokemonList
  aria-label="List with disabled rows"
  selectionMode="multiple"
  disabledKeys={[3]}/>
```

* * *

This example uses the [useAsyncList](https://react-spectrum.adobe.com/react-stately/useAsyncList.html) hook to handle asynchronous loading of data from a server. Use the [renderEmptyState](https://react-spectrum.adobe.com/react-aria/empty-state) prop to display a spinner during initial load. To enable infinite scrolling, render a `<GridListLoadMoreItem>` element at the end of the list.

```
import {useAsyncList} from 'react-stately';
import {Collection, GridListLoadMoreItem} from 'react-aria-components';

interface Character {
  name: string;
}

function AsyncList() {
  let list = useAsyncList<Character>({
    async load({ signal, cursor }) {
      if (cursor) {
        cursor = cursor.replace(/^http:\/\//i, 'https://');
      }

      let res = await fetch(
        cursor || `https://swapi.py4e.com/api/people/?search=`,
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
    <MyGridList
      selectionMode="multiple"
      aria-label="Async loading ListView example"
    >
      <Collection items={list.items}>
        {(item) => <MyItem id={item.name}>{item.name}</MyItem>}
      </Collection>
      <GridListLoadMoreItem
        onLoadMore={list.loadMore}
        isLoading={list.loadingState === 'loadingMore'}
      >
        <MyProgressCircle isIndeterminate aria-label="Loading more..." />
      </GridListLoadMoreItem>    </MyGridList>
  );
}
```

```
import {useAsyncList} from 'react-stately';
import {
  Collection,
  GridListLoadMoreItem
} from 'react-aria-components';

interface Character {
  name: string;
}

function AsyncList() {
  let list = useAsyncList<Character>({
    async load({ signal, cursor }) {
      if (cursor) {
        cursor = cursor.replace(/^http:\/\//i, 'https://');
      }

      let res = await fetch(
        cursor ||
          `https://swapi.py4e.com/api/people/?search=`,
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
    <MyGridList
      selectionMode="multiple"
      aria-label="Async loading ListView example"
    >
      <Collection items={list.items}>
        {(item) => (
          <MyItem id={item.name}>{item.name}</MyItem>
        )}
      </Collection>
      <GridListLoadMoreItem
        onLoadMore={list.loadMore}
        isLoading={list.loadingState === 'loadingMore'}
      >
        <MyProgressCircle
          isIndeterminate
          aria-label="Loading more..."
        />
      </GridListLoadMoreItem>    </MyGridList>
  );
}
```

```
import {useAsyncList} from 'react-stately';
import {
  Collection,
  GridListLoadMoreItem
} from 'react-aria-components';

interface Character {
  name: string;
}

function AsyncList() {
  let list =
    useAsyncList<
      Character
    >({
      async load(
        {
          signal,
          cursor
        }
      ) {
        if (cursor) {
          cursor = cursor
            .replace(
              /^http:\/\//i,
              'https://'
            );
        }

        let res =
          await fetch(
            cursor ||
              `https://swapi.py4e.com/api/people/?search=`,
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
    <MyGridList
      selectionMode="multiple"
      aria-label="Async loading ListView example"
    >
      <Collection
        items={list
          .items}
      >
        {(item) => (
          <MyItem
            id={item
              .name}
          >
            {item.name}
          </MyItem>
        )}
      </Collection>
      <GridListLoadMoreItem
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
      </GridListLoadMoreItem>    </MyGridList>
  );
}
```

Show CSS

```
.react-aria-GridListLoadingIndicator {
  align-items: center;
  justify-content: center;
  height: 24px;
  width: 100%;
  display: flex;
}
```

```
.react-aria-GridListLoadingIndicator {
  align-items: center;
  justify-content: center;
  height: 24px;
  width: 100%;
  display: flex;
}
```

```
.react-aria-GridListLoadingIndicator {
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

Use the `renderEmptyState` prop to customize what the `GridList` will display if there are no items.

```
<GridList
  aria-label="Search results"
  renderEmptyState={() => 'No results found.'}>
  {[]}
</GridList>
```

```
<GridList
  aria-label="Search results"
  renderEmptyState={() => 'No results found.'}>
  {[]}
</GridList>
```

```
<GridList
  aria-label="Search results"
  renderEmptyState={() =>
    'No results found.'}>
  {[]}
</GridList>
```

Show CSS

```
.react-aria-GridList {
  &[data-empty] {
    align-items: center;
    justify-content: center;
    font-style: italic;
  }
}
```

```
.react-aria-GridList {
  &[data-empty] {
    align-items: center;
    justify-content: center;
    font-style: italic;
  }
}
```

```
.react-aria-GridList {
  &[data-empty] {
    align-items: center;
    justify-content: center;
    font-style: italic;
  }
}
```

## Drag and drop[#](#drag-and-drop)

* * *

GridList supports drag and drop interactions when the `dragAndDropHooks` prop is provided using the `[useDragAndDrop](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/useDragAndDrop.tsx:useDragAndDrop)` hook. Users can drop data on the list as a whole, on individual items, insert new items between existing ones, or reorder items.

React Aria supports traditional mouse and touch based drag and drop, but also implements keyboard and screen reader friendly interactions. Users can press Enter on a draggable element to enter drag and drop mode. Then, they can press Tab to navigate between drop targets. A droppable collection is treated as a single drop target, so that users can easily tab past it to get to the next drop target. Within a droppable collection, keys such as ArrowDown and ArrowUp can be used to select a _drop position_, such as on an item, or between items.

Draggable items must include a focusable drag handle using a `<Button slot="drag">`. This enables keyboard and screen reader users to initiate drag and drop. The `MyItem` component defined in the [reusable wrappers](#reusable-wrappers) section above includes this automatically when the list allows dragging.

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
    <MyGridList
      aria-label="Reorderable list"
      selectionMode="multiple"
      items={list.items}
      dragAndDropHooks={dragAndDropHooks}    >
      {item => <MyItem>{item.name}</MyItem>}
    </MyGridList>
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
    <MyGridList
      aria-label="Reorderable list"
      selectionMode="multiple"
      items={list.items}
      dragAndDropHooks={dragAndDropHooks}    >
      {(item) => <MyItem>{item.name}</MyItem>}
    </MyGridList>
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
    <MyGridList
      aria-label="Reorderable list"
      selectionMode="multiple"
      items={list.items}
      dragAndDropHooks={dragAndDropHooks}    >
      {(item) => (
        <MyItem>
          {item.name}
        </MyItem>
      )}
    </MyGridList>
  );
}
```

Show CSS

```
.react-aria-GridListItem {
  &[data-allows-dragging] {
    padding-left: 4px;
  }

  &[data-dragging] {
    opacity: 0.6;
  }

  [slot=drag] {
    all: unset;
    width: 15px;
    text-align: center;

    &[data-focus-visible] {
      border-radius: 4px;
      outline: 2px solid var(--focus-ring-color);
    }
  }
}

.react-aria-DropIndicator {
  &[data-drop-target] {
    outline: 1px solid var(--highlight-background);
  }

  @supports not selector(:has(.foo)) {
    /* Undo gap in browsers that don't support :has */
    margin-bottom: -2px;
  }
}
```

```
.react-aria-GridListItem {
  &[data-allows-dragging] {
    padding-left: 4px;
  }

  &[data-dragging] {
    opacity: 0.6;
  }

  [slot=drag] {
    all: unset;
    width: 15px;
    text-align: center;

    &[data-focus-visible] {
      border-radius: 4px;
      outline: 2px solid var(--focus-ring-color);
    }
  }
}

.react-aria-DropIndicator {
  &[data-drop-target] {
    outline: 1px solid var(--highlight-background);
  }

  @supports not selector(:has(.foo)) {
    /* Undo gap in browsers that don't support :has */
    margin-bottom: -2px;
  }
}
```

```
.react-aria-GridListItem {
  &[data-allows-dragging] {
    padding-left: 4px;
  }

  &[data-dragging] {
    opacity: 0.6;
  }

  [slot=drag] {
    all: unset;
    width: 15px;
    text-align: center;

    &[data-focus-visible] {
      border-radius: 4px;
      outline: 2px solid var(--focus-ring-color);
    }
  }
}

.react-aria-DropIndicator {
  &[data-drop-target] {
    outline: 1px solid var(--highlight-background);
  }

  @supports not selector(:has(.foo)) {
    /* Undo gap in browsers that don't support :has */
    margin-bottom: -2px;
  }
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

function DraggableGridList() {
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
    <MyGridList
      aria-label="Draggable list"
      selectionMode="multiple"
      items={items}
      dragAndDropHooks={dragAndDropHooks}
    >
      {(item) => (
        <MyItem textValue={item.name}>
          {React.createElement(item.style || 'span', null, item.name)}
        </MyItem>
      )}
    </MyGridList>
  );
}

<div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
  <DraggableGridList />
  {/* see below */}
  <DroppableGridList />
</div>
```

```
interface RichTextItem {
  id: string;
  name: string;
  style: string;
}

function DraggableGridList() {
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
    <MyGridList
      aria-label="Draggable list"
      selectionMode="multiple"
      items={items}
      dragAndDropHooks={dragAndDropHooks}
    >
      {(item) => (
        <MyItem textValue={item.name}>
          {React.createElement(
            item.style || 'span',
            null,
            item.name
          )}
        </MyItem>
      )}
    </MyGridList>
  );
}

<div
  style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}
>
  <DraggableGridList />
  {/* see below */}
  <DroppableGridList />
</div>
```

```
interface RichTextItem {
  id: string;
  name: string;
  style: string;
}

function DraggableGridList() {
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
    <MyGridList
      aria-label="Draggable list"
      selectionMode="multiple"
      items={items}
      dragAndDropHooks={dragAndDropHooks}
    >
      {(item) => (
        <MyItem
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
        </MyItem>
      )}
    </MyGridList>
  );
}

<div
  style={{
    display: 'flex',
    gap: 12,
    flexWrap: 'wrap'
  }}
>
  <DraggableGridList />
  {/* see below */}
  <DroppableGridList />
</div>
```

Dropping on the GridList as a whole can be enabled using the `onRootDrop` event. When a valid drag hovers over the GridList, it receives the `isDropTarget` state and can be styled using the `[data-drop-target]` CSS selector.

```
function Example() {
  let [items, setItems] = React.useState<Item[]>([]);

  let { dragAndDropHooks } = useDragAndDrop<Item>({
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
      <DraggableGridList />
      <MyGridList
        aria-label="Droppable list"
        items={items}
        dragAndDropHooks={dragAndDropHooks}
        renderEmptyState={() => 'Drop items here'}
      >
        {(item) => <GridListItem>{item.name}</GridListItem>}
      </MyGridList>
    </div>
  );
}
```

```
function Example() {
  let [items, setItems] = React.useState<Item[]>([]);

  let { dragAndDropHooks } = useDragAndDrop<Item>({
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
      <DraggableGridList />
      <MyGridList
        aria-label="Droppable list"
        items={items}
        dragAndDropHooks={dragAndDropHooks}
        renderEmptyState={() => 'Drop items here'}
      >
        {(item) => <GridListItem>{item.name}</GridListItem>}
      </MyGridList>
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
  } = useDragAndDrop<
    Item
  >({
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
      <DraggableGridList />
      <MyGridList
        aria-label="Droppable list"
        items={items}
        dragAndDropHooks={dragAndDropHooks}
        renderEmptyState={() =>
          'Drop items here'}
      >
        {(item) => (
          <GridListItem>
            {item.name}
          </GridListItem>
        )}
      </MyGridList>
    </div>
  );
}
```

Show CSS

```
.react-aria-GridList[data-drop-target] {
  outline: 2px solid var(--highlight-background);
  outline-offset: -1px;
  background: var(--highlight-overlay);
}
```

```
.react-aria-GridList[data-drop-target] {
  outline: 2px solid var(--highlight-background);
  outline-offset: -1px;
  background: var(--highlight-overlay);
}
```

```
.react-aria-GridList[data-drop-target] {
  outline: 2px solid var(--highlight-background);
  outline-offset: -1px;
  background: var(--highlight-overlay);
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
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
      {/* see above */}
      <DraggableGridList />
      <MyGridList
        aria-label="Droppable list"
        dragAndDropHooks={dragAndDropHooks}
      >
        <MyItem id="applications">Applications</MyItem>
        <MyItem id="documents">Documents</MyItem>
        <MyItem id="pictures">Pictures</MyItem>
      </MyGridList>
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
      <DraggableGridList />
      <MyGridList
        aria-label="Droppable list"
        dragAndDropHooks={dragAndDropHooks}
      >
        <MyItem id="applications">Applications</MyItem>
        <MyItem id="documents">Documents</MyItem>
        <MyItem id="pictures">Pictures</MyItem>
      </MyGridList>
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
      <DraggableGridList />
      <MyGridList
        aria-label="Droppable list"
        dragAndDropHooks={dragAndDropHooks}
      >
        <MyItem id="applications">
          Applications
        </MyItem>
        <MyItem id="documents">
          Documents
        </MyItem>
        <MyItem id="pictures">
          Pictures
        </MyItem>
      </MyGridList>
    </div>
  );
}
```

Show CSS

```
.react-aria-GridListItem[data-drop-target] {
  outline: 2px solid var(--highlight-background);
  background:var(--highlight-overlay);
}
```

```
.react-aria-GridListItem[data-drop-target] {
  outline: 2px solid var(--highlight-background);
  background:var(--highlight-overlay);
}
```

```
.react-aria-GridListItem[data-drop-target] {
  outline: 2px solid var(--highlight-background);
  background:var(--highlight-overlay);
}
```

Dropping between items can be enabled using the `onInsert` event. GridList renders a `[DropIndicator](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/DragAndDrop.tsx:DropIndicator)` between items to indicate the insertion position, which can be styled using the `.react-aria-DropIndicator` selector. When it is active, it receives the `[data-drop-target]` state.

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
      <DraggableGridList />
      <MyGridList
        aria-label="Droppable list"
        items={list.items}
        dragAndDropHooks={dragAndDropHooks}
      >
        {(item) => <GridListItem>{item.name}</GridListItem>}
      </MyGridList>
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
      <DraggableGridList />
      <MyGridList
        aria-label="Droppable list"
        items={list.items}
        dragAndDropHooks={dragAndDropHooks}
      >
        {(item) => <GridListItem>{item.name}</GridListItem>}
      </MyGridList>
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
      <DraggableGridList />
      <MyGridList
        aria-label="Droppable list"
        items={list
          .items}
        dragAndDropHooks={dragAndDropHooks}
      >
        {(item) => (
          <GridListItem>
            {item.name}
          </GridListItem>
        )}
      </MyGridList>
    </div>
  );
}
```

Show CSS

```
.react-aria-DropIndicator {
  &[data-drop-target] {
    outline: 1px solid var(--highlight-background);
  }

  @supports not selector(:has(.foo)) {
    /* Undo gap in browsers that don't support :has */
    margin-bottom: -2px;
  }
}
```

```
.react-aria-DropIndicator {
  &[data-drop-target] {
    outline: 1px solid var(--highlight-background);
  }

  @supports not selector(:has(.foo)) {
    /* Undo gap in browsers that don't support :has */
    margin-bottom: -2px;
  }
}
```

```
.react-aria-DropIndicator {
  &[data-drop-target] {
    outline: 1px solid var(--highlight-background);
  }

  @supports not selector(:has(.foo)) {
    /* Undo gap in browsers that don't support :has */
    margin-bottom: -2px;
  }
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
.my-drop-indicator {
  &.active {
    outline: 1px solid #e70073;
  }

  @supports not selector(:has(.foo)) {
    /* Undo gap in browsers that don't support :has */
    margin-bottom: -2px;
  }
}
```

```
.my-drop-indicator {
  &.active {
    outline: 1px solid #e70073;
  }

  @supports not selector(:has(.foo)) {
    /* Undo gap in browsers that don't support :has */
    margin-bottom: -2px;
  }
}
```

```
.my-drop-indicator {
  &.active {
    outline: 1px solid #e70073;
  }

  @supports not selector(:has(.foo)) {
    /* Undo gap in browsers that don't support :has */
    margin-bottom: -2px;
  }
}
```

`GridList` allows users to drop one or more **drag items**, each of which contains data to be transferred from the drag source to drop target. There are three kinds of drag items:

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

function DroppableGridList() {
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
    <MyGridList
      aria-label="Droppable list"
      items={items}
      dragAndDropHooks={dragAndDropHooks}
      renderEmptyState={() => 'Drop items here'}
    >
      {(item) => (
        <MyItem textValue={item.name}>
          {React.createElement(item.style || 'span', null, item.name)}
        </MyItem>
      )}
    </MyGridList>
  );
}

<div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
  {/* see above */}
  <DraggableGridList />
  <DroppableGridList />
</div>
```

```
import {isTextDropItem} from 'react-aria-components';

interface TextItem {
  id: string;
  name: string;
  style: string;
}

function DroppableGridList() {
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
    <MyGridList
      aria-label="Droppable list"
      items={items}
      dragAndDropHooks={dragAndDropHooks}
      renderEmptyState={() => 'Drop items here'}
    >
      {(item) => (
        <MyItem textValue={item.name}>
          {React.createElement(
            item.style || 'span',
            null,
            item.name
          )}
        </MyItem>
      )}
    </MyGridList>
  );
}

<div
  style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}
>
  {/* see above */}
  <DraggableGridList />
  <DroppableGridList />
</div>
```

```
import {isTextDropItem} from 'react-aria-components';

interface TextItem {
  id: string;
  name: string;
  style: string;
}

function DroppableGridList() {
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
    <MyGridList
      aria-label="Droppable list"
      items={items}
      dragAndDropHooks={dragAndDropHooks}
      renderEmptyState={() =>
        'Drop items here'}
    >
      {(item) => (
        <MyItem
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
        </MyItem>
      )}
    </MyGridList>
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
  <DraggableGridList />
  <DroppableGridList />
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
    <MyGridList
      aria-label="Droppable list"
      items={items}
      dragAndDropHooks={dragAndDropHooks}
      renderEmptyState={() => 'Drop images here'}
    >
      {(item) => (
        <MyItem textValue={item.name}>
          <div className="image-item">
            <img src={item.url} />
            <span>{item.name}</span>
          </div>
        </MyItem>
      )}
    </MyGridList>
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
    <MyGridList
      aria-label="Droppable list"
      items={items}
      dragAndDropHooks={dragAndDropHooks}
      renderEmptyState={() => 'Drop images here'}
    >
      {(item) => (
        <MyItem textValue={item.name}>
          <div className="image-item">
            <img src={item.url} />
            <span>{item.name}</span>
          </div>
        </MyItem>
      )}
    </MyGridList>
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
    <MyGridList
      aria-label="Droppable list"
      items={items}
      dragAndDropHooks={dragAndDropHooks}
      renderEmptyState={() =>
        'Drop images here'}
    >
      {(item) => (
        <MyItem
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
        </MyItem>
      )}
    </MyGridList>
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
    <MyGridList
      aria-label="Droppable list"
      items={files}
      dragAndDropHooks={dragAndDropHooks}
      renderEmptyState={() => 'Drop directory here'}
    >
      {(item) => (
        <MyItem id={item.name} textValue={item.name}>
          <div className="dir-item">
            {item.kind === 'directory' ? <Folder /> : <File />}
            <span>{item.name}</span>
          </div>
        </MyItem>
      )}
    </MyGridList>
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
    <MyGridList
      aria-label="Droppable list"
      items={files}
      dragAndDropHooks={dragAndDropHooks}
      renderEmptyState={() => 'Drop directory here'}
    >
      {(item) => (
        <MyItem id={item.name} textValue={item.name}>
          <div className="dir-item">
            {item.kind === 'directory'
              ? <Folder />
              : <File />}
            <span>{item.name}</span>
          </div>
        </MyItem>
      )}
    </MyGridList>
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
    <MyGridList
      aria-label="Droppable list"
      items={files}
      dragAndDropHooks={dragAndDropHooks}
      renderEmptyState={() =>
        'Drop directory here'}
    >
      {(item) => (
        <MyItem
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
        </MyItem>
      )}
    </MyGridList>
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
      <MyGridList
        aria-label="Draggable list"
        selectionMode="multiple"
        items={list.items}
        dragAndDropHooks={dragAndDropHooks}
      >
        {(item) => <MyItem>{item.name}</MyItem>}
      </MyGridList>
      <DroppableGridList />
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
      <MyGridList
        aria-label="Draggable list"
        selectionMode="multiple"
        items={list.items}
        dragAndDropHooks={dragAndDropHooks}
      >
        {(item) => <MyItem>{item.name}</MyItem>}
      </MyGridList>
      <DroppableGridList />
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
      <MyGridList
        aria-label="Draggable list"
        selectionMode="multiple"
        items={list
          .items}
        dragAndDropHooks={dragAndDropHooks}
      >
        {(item) => (
          <MyItem>
            {item.name}
          </MyItem>
        )}
      </MyGridList>
      <DroppableGridList />
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
      <MyGridList
        aria-label="Draggable list"
        selectionMode="multiple"
        items={list.items}
        dragAndDropHooks={dragAndDropHooks}
      >
        {(item) => <MyItem>{item.name}</MyItem>}
      </MyGridList>
      <DroppableGridList />
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
      <MyGridList
        aria-label="Draggable list"
        selectionMode="multiple"
        items={list.items}
        dragAndDropHooks={dragAndDropHooks}
      >
        {(item) => <MyItem>{item.name}</MyItem>}
      </MyGridList>
      <DroppableGridList />
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
      <MyGridList
        aria-label="Draggable list"
        selectionMode="multiple"
        items={list
          .items}
        dragAndDropHooks={dragAndDropHooks}
      >
        {(item) => (
          <MyItem>
            {item.name}
          </MyItem>
        )}
      </MyGridList>
      <DroppableGridList />
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

interface DndGridListProps {
  initialItems: FileItem[],
  'aria-label': string
}

function DndGridList(props: DndGridListProps) {
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
    <MyGridList
      aria-label={props['aria-label']}
      selectionMode="multiple"
      selectedKeys={list.selectedKeys}
      onSelectionChange={list.setSelectedKeys}
      items={list.items}
      dragAndDropHooks={dragAndDropHooks}
      renderEmptyState={() => 'Drop items here'}>
      {item => <MyItem>{item.name}</MyItem>}
    </MyGridList>
  );
}

<div style={{display: 'flex', gap: 12, flexWrap: 'wrap'}}>
  <DndGridList
    initialItems={[
      { id: '1', type: 'file', name: 'Adobe Photoshop' },
      { id: '2', type: 'file', name: 'Adobe XD' },
      { id: '3', type: 'folder', name: 'Documents' },
      { id: '4', type: 'file', name: 'Adobe InDesign' },
      { id: '5', type: 'folder', name: 'Utilities' },
      { id: '6', type: 'file', name: 'Adobe AfterEffects' }
    ]}
    aria-label="First GridList"
  />
  <DndGridList
    initialItems={[
      { id: '7', type: 'folder', name: 'Pictures' },
      { id: '8', type: 'file', name: 'Adobe Fresco' },
      { id: '9', type: 'folder', name: 'Apps' },
      { id: '10', type: 'file', name: 'Adobe Illustrator' },
      { id: '11', type: 'file', name: 'Adobe Lightroom' },
      { id: '12', type: 'file', name: 'Adobe Dreamweaver' }
    ]}
    aria-label="Second GridList"
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

interface DndGridListProps {
  initialItems: FileItem[];
  'aria-label': string;
}

function DndGridList(props: DndGridListProps) {
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
    <MyGridList
      aria-label={props['aria-label']}
      selectionMode="multiple"
      selectedKeys={list.selectedKeys}
      onSelectionChange={list.setSelectedKeys}
      items={list.items}
      dragAndDropHooks={dragAndDropHooks}
      renderEmptyState={() => 'Drop items here'}
    >
      {(item) => <MyItem>{item.name}</MyItem>}
    </MyGridList>
  );
}

<div
  style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}
>
  <DndGridList
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
    aria-label="First GridList"
  />
  <DndGridList
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
    aria-label="Second GridList"
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

interface DndGridListProps {
  initialItems:
    FileItem[];
  'aria-label': string;
}

function DndGridList(
  props: DndGridListProps
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
    <MyGridList
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
        <MyItem>
          {item.name}
        </MyItem>
      )}
    </MyGridList>
  );
}

<div
  style={{
    display: 'flex',
    gap: 12,
    flexWrap: 'wrap'
  }}
>
  <DndGridList
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
    aria-label="First GridList"
  />
  <DndGridList
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
    aria-label="Second GridList"
  />
</div>
```

* * *

Name

Type

Default

Description

`disallowTypeAhead`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

`false`

Whether typeahead navigation is disabled.

`selectionBehavior`

`[SelectionBehavior](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/selection.d.ts:SelectionBehavior)`

`"toggle"`

How multiple selection should behave in the collection.

`dragAndDropHooks`

`[DragAndDropHooks](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/useDragAndDrop.tsx:DragAndDropHooks)<NoInfer<[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)>>`

—

The drag and drop hooks returned by `useDragAndDrop` used to enable drag and drop behavior for the GridList.

`renderEmptyState`

`( (props: [GridListRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/GridList.tsx:GridListRenderProps) )) => [ReactNode](https://reactjs.org/docs/rendering-elements.html)`

—

Provides content to display when there are no items in the list.

`layout`

`'stack' | 'grid'`

`'stack'`

Whether the items are arranged in a stack or grid.

`keyboardNavigationBehavior`

`'arrow' | 'tab'`

`'arrow'`

Whether keyboard navigation to focusable elements within grid list items is via the left/right arrow keys or the tab key.

`escapeKeyBehavior`

`'clearSelection' | 'none'`

`'clearSelection'`

Whether pressing the escape key should clear selection in the grid list or not.

Most experiences should not modify this option as it eliminates a keyboard user's ability to easily clear selection. Only use if the escape key is being handled externally or should not trigger selection clearing contextually.

`autoFocus`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | [FocusStrategy](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/selection.d.ts:FocusStrategy)`

—

Whether to auto focus the gridlist or an option.

`disabledBehavior`

`[DisabledBehavior](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/selection.d.ts:DisabledBehavior)`

`"all"`

Whether `disabledKeys` applies to all interactions, or only selection.

`shouldSelectOnPressUp`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether selection should occur on press up instead of press down.

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

`[ClassNameOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ClassNameOrFunction)<[GridListRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/GridList.tsx:GridListRenderProps)>`

—

The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.

`style`

`[StyleOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:StyleOrFunction)<[GridListRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/GridList.tsx:GridListRenderProps)>`

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

A `<GridListSection>` defines the child items for a section within a `<GridList>`. It may also contain an optional `<GridListHeader>` element. If there is no header, then an `aria-label` must be provided to identify the section to assistive technologies.

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

A `<GridListHeader>` defines the title for a `<GridListSection>`. It accepts all DOM attributes.

A `<GridListItem>` defines a single option within a `<GridList>`. If the `children` are not plain text, then the `textValue` prop must also be set to a plain text representation, which will be used for typeahead in the GridList.

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

`[ChildrenOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ChildrenOrFunction)<[GridListItemRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/GridList.tsx:GridListItemRenderProps)>`

The children of the component. A function may be provided to alter the children based on component state.

`className`

`[ClassNameOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ClassNameOrFunction)<[GridListItemRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/GridList.tsx:GridListItemRenderProps)>`

The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.

`style`

`[StyleOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:StyleOrFunction)<[GridListItemRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/GridList.tsx:GridListItemRenderProps)>`

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

Positioning

A `<GridListLoadMoreItem>` defines the load more spinner within a `<GridList>`. It renders its children when `isLoading` is true, and allows you to customize the scroll distance from the bottom of the list that should trigger another load operation.

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
.react-aria-GridList {
  /* ... */
}
```

```
.react-aria-GridList {
  /* ... */
}
```

```
.react-aria-GridList {
  /* ... */
}
```

A custom `className` can also be specified on any component. This overrides the default `className` provided by React Aria with your own.

```
<GridList className="my-gridlist">
  {/* ... */}
</GridList>
```

```
<GridList className="my-gridlist">
  {/* ... */}
</GridList>
```

```
<GridList className="my-gridlist">
  {/* ... */}
</GridList>
```

In addition, some components support multiple UI states (e.g. pressed, hovered, etc.). React Aria components expose states using data attributes, which you can target in CSS selectors. For example:

```
.react-aria-GridListItem[data-selected] {
  /* ... */
}

.react-aria-GridListItem[data-focused] {
  /* ... */
}
```

```
.react-aria-GridListItem[data-selected] {
  /* ... */
}

.react-aria-GridListItem[data-focused] {
  /* ... */
}
```

```
.react-aria-GridListItem[data-selected] {
  /* ... */
}

.react-aria-GridListItem[data-focused] {
  /* ... */
}
```

The `className` and `style` props also accept functions which receive states for styling. This lets you dynamically determine the classes or styles to apply, which is useful when using utility CSS libraries like [Tailwind](https://tailwindcss.com/).

```
<GridListItem
  className={({ isSelected }) => isSelected ? 'bg-blue-400' : 'bg-gray-100'}
>
  Item
</GridListItem>
```

```
<GridListItem
  className={({ isSelected }) =>
    isSelected ? 'bg-blue-400' : 'bg-gray-100'}
>
  Item
</GridListItem>
```

```
<GridListItem
  className={(
    { isSelected }
  ) =>
    isSelected
      ? 'bg-blue-400'
      : 'bg-gray-100'}
>
  Item
</GridListItem>
```

Render props may also be used as children to alter what elements are rendered based on the current state. For example, you could render a checkbox only when selection is enabled.

```
<GridListItem>
  {({selectionMode}) => (
    <>
      {selectionMode !== 'none' && <Checkbox />}
      Item
    </>
  )}
</GridListItem>
```

```
<GridListItem>
  {({selectionMode}) => (
    <>
      {selectionMode !== 'none' && <Checkbox />}
      Item
    </>
  )}
</GridListItem>
```

```
<GridListItem>
  {(
    { selectionMode }
  ) => (
    <>
      {selectionMode !==
          'none' && (
        <Checkbox />
      )}
      Item
    </>
  )}
</GridListItem>
```

The states and selectors for each component used in a `GridList` are documented below.

A `GridList` can be targeted with the `.react-aria-GridList` CSS selector, or by overriding with a custom `className`. It supports the following states and render props:

Name

CSS Selector

Description

`isEmpty`

`[data-empty]`

Whether the list has no items and should display its empty state.

`isFocused`

`[data-focused]`

Whether the grid list is currently focused.

`isFocusVisible`

`[data-focus-visible]`

Whether the grid list is currently keyboard focused.

`isDropTarget`

`[data-drop-target]`

Whether the grid list is currently the active drop target.

`layout`

`[data-layout="stack | grid"]`

Whether the items are arranged in a stack or grid.

`state`

`—`

State of the grid list.

A `GridListItem` can be targeted with the `.react-aria-GridListItem` CSS selector, or by overriding with a custom `className`. It supports the following states and render props:

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

* * *

If you need to customize one of the components within a `GridList`, such as `GridListItem`, in many cases you can create a wrapper component. This lets you customize the props passed to the component.

```
function MyItem(props) {
  return <GridListItem {...props} className="my-item" />
}
```

```
function MyItem(props) {
  return <GridListItem {...props} className="my-item" />
}
```

```
function MyItem(props) {
  return (
    <GridListItem
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

`GridList`

`GridListContext`

`[GridListProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/GridList.tsx:GridListProps)`

`[HTMLDivElement](https://developer.mozilla.org/docs/Web/API/HTMLDivElement)`

This example shows a component that accepts a `GridList` and a [ToggleButton](https://react-spectrum.adobe.com/react-aria/ToggleButton.html) as children, and allows the user to turn selection mode for the list on and off by pressing the button.

```
import type {SelectionMode} from 'react-aria-components';
import {ToggleButtonContext, GridListContext} from 'react-aria-components';

function Selectable({children}) {
  let [isSelected, onChange] = React.useState(false);
  let selectionMode: SelectionMode = isSelected ? 'multiple' : 'none';
  return (
    <ToggleButtonContext.Provider value={{isSelected, onChange}}>
      <GridListContext.Provider value={{selectionMode}}>        {children}
      </GridListContext.Provider>
    </ToggleButtonContext.Provider>
  );
}
```

```
import type {SelectionMode} from 'react-aria-components';
import {
  GridListContext,
  ToggleButtonContext
} from 'react-aria-components';

function Selectable({ children }) {
  let [isSelected, onChange] = React.useState(false);
  let selectionMode: SelectionMode = isSelected
    ? 'multiple'
    : 'none';
  return (
    <ToggleButtonContext.Provider
      value={{ isSelected, onChange }}
    >
      <GridListContext.Provider value={{ selectionMode }}>        {children}
      </GridListContext.Provider>
    </ToggleButtonContext.Provider>
  );
}
```

```
import type {SelectionMode} from 'react-aria-components';
import {
  GridListContext,
  ToggleButtonContext
} from 'react-aria-components';

function Selectable(
  { children }
) {
  let [
    isSelected,
    onChange
  ] = React.useState(
    false
  );
  let selectionMode:
    SelectionMode =
      isSelected
        ? 'multiple'
        : 'none';
  return (
    <ToggleButtonContext.Provider
      value={{
        isSelected,
        onChange
      }}
    >
      <GridListContext.Provider
        value={{
          selectionMode
        }}
      >        {children}
      </GridListContext.Provider>
    </ToggleButtonContext.Provider>
  );
}
```

The `Selectable` component can be reused to make the selection mode of any nested `GridList` controlled by a `ToggleButton`.

```
import {ToggleButton} from 'react-aria-components';

<Selectable>
  <ToggleButton style={{marginBottom: '8px'}}>Select</ToggleButton>
  <GridList aria-label="Ice cream flavors">
    <MyItem>Chocolate</MyItem>
    <MyItem>Mint</MyItem>
    <MyItem>Strawberry</MyItem>
    <MyItem>Vanilla</MyItem>
  </GridList>
</Selectable>
```

```
import {ToggleButton} from 'react-aria-components';

<Selectable>
  <ToggleButton style={{ marginBottom: '8px' }}>
    Select
  </ToggleButton>
  <GridList aria-label="Ice cream flavors">
    <MyItem>Chocolate</MyItem>
    <MyItem>Mint</MyItem>
    <MyItem>Strawberry</MyItem>
    <MyItem>Vanilla</MyItem>
  </GridList>
</Selectable>
```

```
import {ToggleButton} from 'react-aria-components';

<Selectable>
  <ToggleButton
    style={{
      marginBottom:
        '8px'
    }}
  >
    Select
  </ToggleButton>
  <GridList aria-label="Ice cream flavors">
    <MyItem>
      Chocolate
    </MyItem>
    <MyItem>
      Mint
    </MyItem>
    <MyItem>
      Strawberry
    </MyItem>
    <MyItem>
      Vanilla
    </MyItem>
  </GridList>
</Selectable>
```

GridList passes props to its child components, such as the selection checkboxes, via their associated contexts. These contexts are exported so you can also consume them in your own custom components. This enables you to reuse existing components from your app or component library together with React Aria Components.

Component

Context

Props

Ref

`Checkbox`

`CheckboxContext`

`[CheckboxProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Checkbox.tsx:CheckboxProps)`

`[HTMLLabelElement](https://developer.mozilla.org/docs/Web/API/HTMLLabelElement)`

`Button`

`ButtonContext`

`[ButtonProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Button.tsx:ButtonProps)`

`[HTMLButtonElement](https://developer.mozilla.org/docs/Web/API/HTMLButtonElement)`

`Text`

`TextContext`

`[TextProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Text.tsx:TextProps)`

`[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)`

This example consumes from `CheckboxContext` in an existing styled checkbox component to make it compatible with React Aria Components. The `[useContextProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:useContextProps)` hook merges the local props and ref with the ones provided via context by GridList. See [useCheckbox](https://react-spectrum.adobe.com/react-aria/useCheckbox.html) for more details about the hooks used in this example.

```
import type {CheckboxProps} from 'react-aria-components';
import {CheckboxContext, useContextProps} from 'react-aria-components';
import {useToggleState} from 'react-stately';
import {useCheckbox} from 'react-aria';

const MyCustomCheckbox = React.forwardRef(
  (props: CheckboxProps, ref: React.ForwardedRef<HTMLInputElement>) => {
    // Merge the local props and ref with the ones provided via context.
    [props, ref] = useContextProps(props, ref, CheckboxContext);
    let state = useToggleState(props);
    let { inputProps } = useCheckbox(props, state, ref);
    return <input {...inputProps} ref={ref} />;
  }
);
```

```
import type {CheckboxProps} from 'react-aria-components';
import {
  CheckboxContext,
  useContextProps
} from 'react-aria-components';
import {useToggleState} from 'react-stately';
import {useCheckbox} from 'react-aria';

const MyCustomCheckbox = React.forwardRef(
  (
    props: CheckboxProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    // Merge the local props and ref with the ones provided via context.
    [props, ref] = useContextProps(
      props,
      ref,
      CheckboxContext
    );
    let state = useToggleState(props);
    let { inputProps } = useCheckbox(props, state, ref);
    return <input {...inputProps} ref={ref} />;
  }
);
```

```
import type {CheckboxProps} from 'react-aria-components';
import {
  CheckboxContext,
  useContextProps
} from 'react-aria-components';
import {useToggleState} from 'react-stately';
import {useCheckbox} from 'react-aria';

const MyCustomCheckbox =
  React.forwardRef(
    (
      props:
        CheckboxProps,
      ref:
        React.ForwardedRef<
          HTMLInputElement
        >
    ) => {
      // Merge the local props and ref with the ones provided via context.
      [props, ref] =
        useContextProps(
          props,
          ref,
          CheckboxContext
        );
      let state =
        useToggleState(
          props
        );
      let {
        inputProps
      } = useCheckbox(
        props,
        state,
        ref
      );
      return (
        <input
          {...inputProps}
          ref={ref}
        />
      );
    }
  );
```

Now you can use `MyCustomCheckbox` within a `GridList`, in place of the builtin React Aria Components `Checkbox`.

```
<GridList>
  <GridListItem>
    <MyCustomCheckbox slot="selection" />    {/* ... */}
  </GridListItem>
</GridList>
```

```
<GridList>
  <GridListItem>
    <MyCustomCheckbox slot="selection" />    {/* ... */}
  </GridListItem>
</GridList>
```

```
<GridList>
  <GridListItem>
    <MyCustomCheckbox slot="selection" />    {/* ... */}
  </GridListItem>
</GridList>
```

If you need to customize things even further, such as accessing internal state, intercepting events, or customizing DOM structure, you can drop down to the lower level Hook-based API. See [useGridList](https://react-spectrum.adobe.com/react-aria/useGridList.html) for more details.

* * *

`@react-aria/test-utils` offers common gridlist interaction utilities which you may find helpful when writing tests. See [here](https://react-spectrum.adobe.com/react-aria/testing.html#react-aria-test-utils) for more information on how to setup these utilities in your tests. Below is the full definition of the gridlist tester and a sample of how you could use it in your test suite.

```
// GridList.test.ts
import {render, within} from '@testing-library/react';
import {User} from '@react-aria/test-utils';

let testUtilUser = new User({ interactionType: 'mouse' });
// ...

it('GridList can select a row via keyboard', async function () {
  // Render your test component/app and initialize the gridlist tester
  let { getByTestId } = render(
    <GridList data-testid="test-gridlist" selectionMode="single">
      ...
    </GridList>
  );
  let gridListTester = testUtilUser.createTester('GridList', {
    root: getByTestId('test-gridlist'),
    interactionType: 'keyboard'
  });

  let row = gridListTester.rows[0];
  expect(within(row).getByRole('checkbox')).not.toBeChecked();
  expect(gridListTester.selectedRows).toHaveLength(0);

  await gridListTester.toggleRowSelection({ row: 0 });
  expect(within(row).getByRole('checkbox')).toBeChecked();
  expect(gridListTester.selectedRows).toHaveLength(1);

  await gridListTester.toggleRowSelection({ row: 0 });
  expect(within(row).getByRole('checkbox')).not.toBeChecked();
  expect(gridListTester.selectedRows).toHaveLength(0);
});
```

```
// GridList.test.ts
import {render, within} from '@testing-library/react';
import {User} from '@react-aria/test-utils';

let testUtilUser = new User({ interactionType: 'mouse' });
// ...

it('GridList can select a row via keyboard', async function () {
  // Render your test component/app and initialize the gridlist tester
  let { getByTestId } = render(
    <GridList
      data-testid="test-gridlist"
      selectionMode="single"
    >
      ...
    </GridList>
  );
  let gridListTester = testUtilUser.createTester(
    'GridList',
    {
      root: getByTestId('test-gridlist'),
      interactionType: 'keyboard'
    }
  );

  let row = gridListTester.rows[0];
  expect(within(row).getByRole('checkbox')).not
    .toBeChecked();
  expect(gridListTester.selectedRows).toHaveLength(0);

  await gridListTester.toggleRowSelection({ row: 0 });
  expect(within(row).getByRole('checkbox')).toBeChecked();
  expect(gridListTester.selectedRows).toHaveLength(1);

  await gridListTester.toggleRowSelection({ row: 0 });
  expect(within(row).getByRole('checkbox')).not
    .toBeChecked();
  expect(gridListTester.selectedRows).toHaveLength(0);
});
```

```
// GridList.test.ts
import {
  render,
  within
} from '@testing-library/react';
import {User} from '@react-aria/test-utils';

let testUtilUser =
  new User({
    interactionType:
      'mouse'
  });
// ...

it('GridList can select a row via keyboard', async function () {
  // Render your test component/app and initialize the gridlist tester
  let { getByTestId } =
    render(
      <GridList
        data-testid="test-gridlist"
        selectionMode="single"
      >
        ...
      </GridList>
    );
  let gridListTester =
    testUtilUser
      .createTester(
        'GridList',
        {
          root:
            getByTestId(
              'test-gridlist'
            ),
          interactionType:
            'keyboard'
        }
      );

  let row =
    gridListTester
      .rows[0];
  expect(
    within(row)
      .getByRole(
        'checkbox'
      )
  ).not.toBeChecked();
  expect(
    gridListTester
      .selectedRows
  ).toHaveLength(0);

  await gridListTester
    .toggleRowSelection({
      row: 0
    });
  expect(
    within(row)
      .getByRole(
        'checkbox'
      )
  ).toBeChecked();
  expect(
    gridListTester
      .selectedRows
  ).toHaveLength(1);

  await gridListTester
    .toggleRowSelection({
      row: 0
    });
  expect(
    within(row)
      .getByRole(
        'checkbox'
      )
  ).not.toBeChecked();
  expect(
    gridListTester
      .selectedRows
  ).toHaveLength(0);
});
```

### Properties

Name

Type

Description

`gridlist`

`[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)`

Returns the gridlist.

`rows`

`[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)[]`

Returns the gridlist's rows if any.

`selectedRows`

`[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)[]`

Returns the gridlist's selected rows if any.

### Methods

Method

Description

`constructor( (opts: [GridListTesterOpts](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/test-utils/src/types.ts:GridListTesterOpts) )): void`

`setInteractionType( (type: [UserOpts](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/test-utils/src/types.ts:UserOpts)['interactionType'] )): void`

Set the interaction type used by the gridlist tester.

`findRow( (opts: {  rowIndexOrText: [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) |  | [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)  } )): [HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)`

Returns a row matching the specified index or text content.

`toggleRowSelection( (opts: [GridListToggleRowOpts](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/test-utils/src/gridlist.ts:GridListToggleRowOpts) )): [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<void>`

Toggles the selection for the specified gridlist row. Defaults to using the interaction type set on the gridlist tester. Note that this will endevor to always add/remove JUST the provided row to the set of selected rows.

`triggerRowAction( (opts: [GridListRowActionOpts](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/test-utils/src/gridlist.ts:GridListRowActionOpts) )): [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<void>`

Triggers the action for the specified gridlist row. Defaults to using the interaction type set on the gridlist tester.

`cells( (opts: {  element?: [HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)  } )): [HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)[]`

Returns the gridlist's cells if any. Can be filtered against a specific row if provided via `element`.