# Table

**Source**: [https://react-spectrum.adobe.com/react-aria/Table.html](https://react-spectrum.adobe.com/react-aria/Table.html)

> Documentation for Table in the React Aria package.

---

A table displays data in rows and columns and enables a user to navigate its contents via directional navigation keys, and optionally supports row selection and sorting.

* * *

```
import {Cell, Column, Row, Table, TableBody, TableHeader} from 'react-aria-components';
import {MyCheckbox} from './Checkbox';

<Table aria-label="Files" selectionMode="multiple">
  <TableHeader>
    <Column>
      <MyCheckbox slot="selection" />
    </Column>
    <Column isRowHeader>Name</Column>
    <Column>Type</Column>
    <Column>Date Modified</Column>
  </TableHeader>
  <TableBody>
    <Row>
      <Cell>
        <MyCheckbox slot="selection" />
      </Cell>
      <Cell>Games</Cell>
      <Cell>File folder</Cell>
      <Cell>6/7/2020</Cell>
    </Row>
    <Row>
      <Cell>
        <MyCheckbox slot="selection" />
      </Cell>
      <Cell>Program Files</Cell>
      <Cell>File folder</Cell>
      <Cell>4/7/2021</Cell>
    </Row>
    <Row>
      <Cell>
        <MyCheckbox slot="selection" />
      </Cell>
      <Cell>bootmgr</Cell>
      <Cell>System file</Cell>
      <Cell>11/20/2010</Cell>
    </Row>
    <Row>
      <Cell>
        <MyCheckbox slot="selection" />
      </Cell>
      <Cell>log.txt</Cell>
      <Cell>Text Document</Cell>
      <Cell>1/18/2016</Cell>
    </Row>
  </TableBody>
</Table>
```

```
import {
  Cell,
  Column,
  Row,
  Table,
  TableBody,
  TableHeader
} from 'react-aria-components';
import {MyCheckbox} from './Checkbox';

<Table aria-label="Files" selectionMode="multiple">
  <TableHeader>
    <Column>
      <MyCheckbox slot="selection" />
    </Column>
    <Column isRowHeader>Name</Column>
    <Column>Type</Column>
    <Column>Date Modified</Column>
  </TableHeader>
  <TableBody>
    <Row>
      <Cell>
        <MyCheckbox slot="selection" />
      </Cell>
      <Cell>Games</Cell>
      <Cell>File folder</Cell>
      <Cell>6/7/2020</Cell>
    </Row>
    <Row>
      <Cell>
        <MyCheckbox slot="selection" />
      </Cell>
      <Cell>Program Files</Cell>
      <Cell>File folder</Cell>
      <Cell>4/7/2021</Cell>
    </Row>
    <Row>
      <Cell>
        <MyCheckbox slot="selection" />
      </Cell>
      <Cell>bootmgr</Cell>
      <Cell>System file</Cell>
      <Cell>11/20/2010</Cell>
    </Row>
    <Row>
      <Cell>
        <MyCheckbox slot="selection" />
      </Cell>
      <Cell>log.txt</Cell>
      <Cell>Text Document</Cell>
      <Cell>1/18/2016</Cell>
    </Row>
  </TableBody>
</Table>
```

```
import {
  Cell,
  Column,
  Row,
  Table,
  TableBody,
  TableHeader
} from 'react-aria-components';
import {MyCheckbox} from './Checkbox';

<Table
  aria-label="Files"
  selectionMode="multiple"
>
  <TableHeader>
    <Column>
      <MyCheckbox slot="selection" />
    </Column>
    <Column
      isRowHeader
    >
      Name
    </Column>
    <Column>
      Type
    </Column>
    <Column>
      Date Modified
    </Column>
  </TableHeader>
  <TableBody>
    <Row>
      <Cell>
        <MyCheckbox slot="selection" />
      </Cell>
      <Cell>
        Games
      </Cell>
      <Cell>
        File folder
      </Cell>
      <Cell>
        6/7/2020
      </Cell>
    </Row>
    <Row>
      <Cell>
        <MyCheckbox slot="selection" />
      </Cell>
      <Cell>
        Program Files
      </Cell>
      <Cell>
        File folder
      </Cell>
      <Cell>
        4/7/2021
      </Cell>
    </Row>
    <Row>
      <Cell>
        <MyCheckbox slot="selection" />
      </Cell>
      <Cell>
        bootmgr
      </Cell>
      <Cell>
        System file
      </Cell>
      <Cell>
        11/20/2010
      </Cell>
    </Row>
    <Row>
      <Cell>
        <MyCheckbox slot="selection" />
      </Cell>
      <Cell>
        log.txt
      </Cell>
      <Cell>
        Text Document
      </Cell>
      <Cell>
        1/18/2016
      </Cell>
    </Row>
  </TableBody>
</Table>
```

Show CSS

```
@import "@react-aria/example-theme";

.react-aria-Table {
  padding: 0.286rem;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  background: var(--overlay-background);
  outline: none;
  border-spacing: 0;
  min-height: 100px;
  align-self: start;
  max-width: 100%;
  word-break: break-word;
  forced-color-adjust: none;

  &[data-focus-visible] {
    outline: 2px solid var(--focus-ring-color);
    outline-offset: -1px;
  }

  .react-aria-TableHeader {
    color: var(--text-color);

    &:after {
      content: '';
      display: table-row;
      height: 2px;
    }

    & tr:last-child .react-aria-Column {
      border-bottom: 1px solid var(--border-color);
      cursor: default;
    }
  }

  .react-aria-Row {
    --radius-top: 6px;
    --radius-bottom: 6px;
    --radius: var(--radius-top) var(--radius-top) var(--radius-bottom) var(--radius-bottom);
    border-radius: var(--radius);
    clip-path: inset(0 round var(--radius)); /* firefox */
    outline: none;
    cursor: default;
    color: var(--text-color);
    font-size: 1.072rem;
    position: relative;
    transform: scale(1);

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

      &[data-focus-visible],
      .react-aria-Cell[data-focus-visible] {
        outline-offset: -4px;
      }
    }

    &[data-disabled] {
      color: var(--text-color-disabled);
    }
  }

  .react-aria-Cell,
  .react-aria-Column {
    padding: 4px 8px;
    text-align: left;
    outline: none;

    &[data-focus-visible] {
      outline: 2px solid var(--focus-ring-color);
      outline-offset: -2px;
    }
  }

  .react-aria-Cell {
    transform: translateZ(0);

    &:first-child {
      border-radius: var(--radius-top) 0 0 var(--radius-bottom);
    }

    &:last-child {
      border-radius: 0 var(--radius-top) var(--radius-bottom) 0;
    }
  }

  /* join selected items if :has selector is supported */
  @supports selector(:has(.foo)) {
    .react-aria-Row[data-selected]:has(+ [data-selected]),
    .react-aria-Row[data-selected]:has(+ .react-aria-DropIndicator + [data-selected]) {
      --radius-bottom: 0px;
    }

    .react-aria-Row[data-selected] + [data-selected],
    .react-aria-Row[data-selected] + .react-aria-DropIndicator + [data-selected]{
      --radius-top: 0px;
    }
  }
}

:where(.react-aria-Row) .react-aria-Checkbox {
  --selected-color: var(--highlight-foreground);
  --selected-color-pressed: var(--highlight-foreground-pressed);
  --checkmark-color: var(--highlight-background);
  --background-color: var(--highlight-background);
}
```

```
@import "@react-aria/example-theme";

.react-aria-Table {
  padding: 0.286rem;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  background: var(--overlay-background);
  outline: none;
  border-spacing: 0;
  min-height: 100px;
  align-self: start;
  max-width: 100%;
  word-break: break-word;
  forced-color-adjust: none;

  &[data-focus-visible] {
    outline: 2px solid var(--focus-ring-color);
    outline-offset: -1px;
  }

  .react-aria-TableHeader {
    color: var(--text-color);

    &:after {
      content: '';
      display: table-row;
      height: 2px;
    }

    & tr:last-child .react-aria-Column {
      border-bottom: 1px solid var(--border-color);
      cursor: default;
    }
  }

  .react-aria-Row {
    --radius-top: 6px;
    --radius-bottom: 6px;
    --radius: var(--radius-top) var(--radius-top) var(--radius-bottom) var(--radius-bottom);
    border-radius: var(--radius);
    clip-path: inset(0 round var(--radius)); /* firefox */
    outline: none;
    cursor: default;
    color: var(--text-color);
    font-size: 1.072rem;
    position: relative;
    transform: scale(1);

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

      &[data-focus-visible],
      .react-aria-Cell[data-focus-visible] {
        outline-offset: -4px;
      }
    }

    &[data-disabled] {
      color: var(--text-color-disabled);
    }
  }

  .react-aria-Cell,
  .react-aria-Column {
    padding: 4px 8px;
    text-align: left;
    outline: none;

    &[data-focus-visible] {
      outline: 2px solid var(--focus-ring-color);
      outline-offset: -2px;
    }
  }

  .react-aria-Cell {
    transform: translateZ(0);

    &:first-child {
      border-radius: var(--radius-top) 0 0 var(--radius-bottom);
    }

    &:last-child {
      border-radius: 0 var(--radius-top) var(--radius-bottom) 0;
    }
  }

  /* join selected items if :has selector is supported */
  @supports selector(:has(.foo)) {
    .react-aria-Row[data-selected]:has(+ [data-selected]),
    .react-aria-Row[data-selected]:has(+ .react-aria-DropIndicator + [data-selected]) {
      --radius-bottom: 0px;
    }

    .react-aria-Row[data-selected] + [data-selected],
    .react-aria-Row[data-selected] + .react-aria-DropIndicator + [data-selected]{
      --radius-top: 0px;
    }
  }
}

:where(.react-aria-Row) .react-aria-Checkbox {
  --selected-color: var(--highlight-foreground);
  --selected-color-pressed: var(--highlight-foreground-pressed);
  --checkmark-color: var(--highlight-background);
  --background-color: var(--highlight-background);
}
```

```
@import "@react-aria/example-theme";

.react-aria-Table {
  padding: 0.286rem;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  background: var(--overlay-background);
  outline: none;
  border-spacing: 0;
  min-height: 100px;
  align-self: start;
  max-width: 100%;
  word-break: break-word;
  forced-color-adjust: none;

  &[data-focus-visible] {
    outline: 2px solid var(--focus-ring-color);
    outline-offset: -1px;
  }

  .react-aria-TableHeader {
    color: var(--text-color);

    &:after {
      content: '';
      display: table-row;
      height: 2px;
    }

    & tr:last-child .react-aria-Column {
      border-bottom: 1px solid var(--border-color);
      cursor: default;
    }
  }

  .react-aria-Row {
    --radius-top: 6px;
    --radius-bottom: 6px;
    --radius: var(--radius-top) var(--radius-top) var(--radius-bottom) var(--radius-bottom);
    border-radius: var(--radius);
    clip-path: inset(0 round var(--radius)); /* firefox */
    outline: none;
    cursor: default;
    color: var(--text-color);
    font-size: 1.072rem;
    position: relative;
    transform: scale(1);

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

      &[data-focus-visible],
      .react-aria-Cell[data-focus-visible] {
        outline-offset: -4px;
      }
    }

    &[data-disabled] {
      color: var(--text-color-disabled);
    }
  }

  .react-aria-Cell,
  .react-aria-Column {
    padding: 4px 8px;
    text-align: left;
    outline: none;

    &[data-focus-visible] {
      outline: 2px solid var(--focus-ring-color);
      outline-offset: -2px;
    }
  }

  .react-aria-Cell {
    transform: translateZ(0);

    &:first-child {
      border-radius: var(--radius-top) 0 0 var(--radius-bottom);
    }

    &:last-child {
      border-radius: 0 var(--radius-top) var(--radius-bottom) 0;
    }
  }

  /* join selected items if :has selector is supported */
  @supports selector(:has(.foo)) {
    .react-aria-Row[data-selected]:has(+ [data-selected]),
    .react-aria-Row[data-selected]:has(+ .react-aria-DropIndicator + [data-selected]) {
      --radius-bottom: 0px;
    }

    .react-aria-Row[data-selected] + [data-selected],
    .react-aria-Row[data-selected] + .react-aria-DropIndicator + [data-selected]{
      --radius-top: 0px;
    }
  }
}

:where(.react-aria-Row) .react-aria-Checkbox {
  --selected-color: var(--highlight-foreground);
  --selected-color-pressed: var(--highlight-foreground-pressed);
  --checkmark-color: var(--highlight-background);
  --background-color: var(--highlight-background);
}
```

* * *

A table can be built using the [<table>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table), [<tr>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tr), [<td>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td), and other table specific HTML elements, but is very limited in functionality especially when it comes to user interactions. HTML tables are meant for static content, rather than tables with rich interactions like focusable elements within cells, keyboard navigation, row selection, sorting, etc. `Table` helps achieve accessible and interactive table components that can be styled as needed.

-   **Row selection** – Single or multiple selection, with optional checkboxes, disabled rows, and both `toggle` and `replace` selection behaviors.
-   **Columns** – Support for column sorting and [row header](https://www.w3.org/TR/wai-aria-1.1/#rowheader) columns. Columns may optionally allow user resizing via mouse, touch, and keyboard interactions.
-   **Interactive children** – Table cells may include interactive elements such as buttons, menus, etc.
-   **Actions** – Rows and cells support optional actions such as navigation via click, tap, double click, or Enter key.
-   **Async loading** – Support for loading and sorting items asynchronously.
-   **Keyboard navigation** – Table rows, cells, and focusable children can be navigated using the arrow keys, along with page up/down, home/end, etc. Typeahead, auto scrolling, and selection modifier keys are supported as well.
-   **Drag and drop** – Tables support drag and drop to reorder, insert, or update rows via mouse, touch, keyboard, and screen reader interactions.
-   **Virtualized scrolling** – Use [Virtualizer](https://react-spectrum.adobe.com/react-aria/Virtualizer.html) to improve performance of large tables by rendering only the visible rows.
-   **Touch friendly** – Selection and actions adapt their behavior depending on the device. For example, selection is activated via long press on touch when row actions are present.
-   **Accessible** – Follows the [ARIA grid pattern](https://www.w3.org/WAI/ARIA/apg/patterns/grid/), with additional selection announcements via an ARIA live region. Extensively tested across many devices and [assistive technologies](https://react-spectrum.adobe.com/react-aria/accessibility.html#testing) to ensure announcements and behaviors are consistent.

* * *

ColumnSize214 KB120 KB88 KB24 KBProposalBudgetWelcomeOnboardingFile nameCellSelect allcheckboxTable bodyTable headerRowSelectioncheckboxDragbuttonColumnresizer

A table consists of a container element, with columns and rows of cells containing data inside. The cells within a table may contain focusable elements or plain text content.

If the table supports row selection, each row can optionally include a selection checkbox. Additionally, a "select all" checkbox may be displayed in a column header if the table supports multiple row selection. A drag button may also be included within a cell if the row is draggable.

If a table supports column resizing, then it should also be wrapped in a `<ResizableTableContainer>`, and a `<ColumnResizer>` should be included in each resizable column.

```
import {Button, Cell, Checkbox, Column, ColumnResizer, ResizableTableContainer, Row, SelectionIndicator, Table, TableBody, TableHeader} from 'react-aria-components';

<ResizableTableContainer>
  <Table>
    <TableHeader>
      <Column />
      <Column>
        <Checkbox slot="selection" />
      </Column>
      <Column>
        <ColumnResizer />
      </Column>
      <Column>
        <Column />
        <Column />
      </Column>
    </TableHeader>
    <TableBody>
      <Row>
        <Cell>
          <Button slot="drag" />
        </Cell>
        <Cell>
          <Checkbox slot="selection" /> or <SelectionIndicator />
        </Cell>
        <Cell />
        <Cell />
        <Cell />
      </Row>
    </TableBody>
  </Table>
</ResizableTableContainer>
```

```
import {
  Button,
  Cell,
  Checkbox,
  Column,
  ColumnResizer,
  ResizableTableContainer,
  Row,
  SelectionIndicator,
  Table,
  TableBody,
  TableHeader
} from 'react-aria-components';

<ResizableTableContainer>
  <Table>
    <TableHeader>
      <Column />
      <Column>
        <Checkbox slot="selection" />
      </Column>
      <Column>
        <ColumnResizer />
      </Column>
      <Column>
        <Column />
        <Column />
      </Column>
    </TableHeader>
    <TableBody>
      <Row>
        <Cell>
          <Button slot="drag" />
        </Cell>
        <Cell>
          <Checkbox slot="selection" /> or{' '}
          <SelectionIndicator />
        </Cell>
        <Cell />
        <Cell />
        <Cell />
      </Row>
    </TableBody>
  </Table>
</ResizableTableContainer>
```

```
import {
  Button,
  Cell,
  Checkbox,
  Column,
  ColumnResizer,
  ResizableTableContainer,
  Row,
  SelectionIndicator,
  Table,
  TableBody,
  TableHeader
} from 'react-aria-components';

<ResizableTableContainer>
  <Table>
    <TableHeader>
      <Column />
      <Column>
        <Checkbox slot="selection" />
      </Column>
      <Column>
        <ColumnResizer />
      </Column>
      <Column>
        <Column />
        <Column />
      </Column>
    </TableHeader>
    <TableBody>
      <Row>
        <Cell>
          <Button slot="drag" />
        </Cell>
        <Cell>
          <Checkbox slot="selection" />
          {' '}
          or{' '}
          <SelectionIndicator />
        </Cell>
        <Cell />
        <Cell />
        <Cell />
      </Row>
    </TableBody>
  </Table>
</ResizableTableContainer>
```

`Table` makes use of the following concepts:

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

A `Table` uses the following components, which may also be used standalone or reused in other components.

[

Checkbox

A checkbox allows a user to select an individual option.

](https://react-spectrum.adobe.com/react-aria/Checkbox.html)[

Button

A button allows a user to perform an action.

](https://react-spectrum.adobe.com/react-aria/Button.html)

* * *

[![](https://react-spectrum.adobe.com/stock-table.24fa0ab7.png)

Stock Table

A table with sticky headers, sorting, multiple selection, and column resizing.

](https://react-spectrum.adobe.com/react-aria/examples/stock-table.html)

* * *

To help kick-start your project, we offer starter kits that include example implementations of all React Aria components with various styling solutions. All components are fully styled, including support for dark mode, high contrast mode, and all UI states. Each starter comes with a pre-configured [Storybook](https://storybook.js.org/) that you can experiment with, or use as a starting point for your own component library.

* * *

If you will use a Table in multiple places in your app, you can wrap all of the pieces into a reusable component. This way, the DOM structure, styling code, and other logic are defined in a single place and reused everywhere to ensure consistency.

The following example includes a custom Column component with a sort indicator. It displays an upwards facing arrow when the column is sorted in the ascending direction, and a downward facing arrow otherwise.

```
import type {ColumnProps} from 'react-aria-components';
import {ArrowDown, ArrowUp} from 'lucide-react';

export function MyColumn(
  props: Omit<ColumnProps, 'children'> & { children?: React.ReactNode }
) {
  return (
    <Column {...props}>
      {({ allowsSorting, sortDirection }) => (
        <div className="column-header">
          {props.children}
          {allowsSorting && (
            <span aria-hidden="true" className="sort-indicator">
              {sortDirection === 'ascending'
                ? <ArrowUp size={14} />
                : <ArrowDown size={14} />}
            </span>
          )}
        </div>
      )}
    </Column>
  );
}
```

```
import type {ColumnProps} from 'react-aria-components';
import {ArrowDown, ArrowUp} from 'lucide-react';

export function MyColumn(
  props: Omit<ColumnProps, 'children'> & {
    children?: React.ReactNode;
  }
) {
  return (
    <Column {...props}>
      {({ allowsSorting, sortDirection }) => (
        <div className="column-header">
          {props.children}
          {allowsSorting && (
            <span
              aria-hidden="true"
              className="sort-indicator"
            >
              {sortDirection === 'ascending'
                ? <ArrowUp size={14} />
                : <ArrowDown size={14} />}
            </span>
          )}
        </div>
      )}
    </Column>
  );
}
```

```
import type {ColumnProps} from 'react-aria-components';
import {
  ArrowDown,
  ArrowUp
} from 'lucide-react';

export function MyColumn(
  props:
    & Omit<
      ColumnProps,
      'children'
    >
    & {
      children?:
        React.ReactNode;
    }
) {
  return (
    <Column {...props}>
      {(
        {
          allowsSorting,
          sortDirection
        }
      ) => (
        <div className="column-header">
          {props
            .children}
          {allowsSorting &&
            (
              <span
                aria-hidden="true"
                className="sort-indicator"
              >
                {sortDirection ===
                    'ascending'
                  ? (
                    <ArrowUp
                      size={14}
                    />
                  )
                  : (
                    <ArrowDown
                      size={14}
                    />
                  )}
              </span>
            )}
        </div>
      )}
    </Column>
  );
}
```

The TableHeader and Row components can also be wrapped to automatically include [checkboxes](https://react-spectrum.adobe.com/react-aria/Checkbox.html) for selection, and a drag handle when [drag and drop](#drag-and-drop) is enabled, allowing consumers to avoid repeating them in each row. In this example, the select all checkbox is displayed when [multiple selection](#multiple-selection) is enabled and the [selection behavior](#selection-behavior) is "toggle". These options can be retrieved from the table using the `[useTableOptions](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Table.tsx:useTableOptions)` hook. We also use the `[Collection](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/collections/src/CollectionBuilder.tsx:Collection)` component to generate children from either static or [dynamic collections](#dynamic-collections) the same way as the default TableHeader and Row components.

```
import type {RowProps, TableHeaderProps} from 'react-aria-components';
import {Collection, useTableOptions} from 'react-aria-components';

export function MyTableHeader<T extends object>(
  { columns, children }: TableHeaderProps<T>
) {
  let { selectionBehavior, selectionMode, allowsDragging } = useTableOptions();

  return (
    <TableHeader>
      {/* Add extra columns for drag and drop and selection. */}
      {allowsDragging && <Column />}
      {selectionBehavior === 'toggle' && (
        <Column>
          {selectionMode === 'multiple' && <MyCheckbox slot="selection" />}
        </Column>
      )}
      <Collection items={columns}>
        {children}
      </Collection>
    </TableHeader>
  );
}

export function MyRow<T extends object>(
  { id, columns, children, ...otherProps }: RowProps<T>
) {
  let { selectionBehavior, allowsDragging } = useTableOptions();

  return (
    <Row id={id} {...otherProps}>
      {allowsDragging && (
        <Cell>
          <Button slot="drag">
            <GripVertical size={18} />
          </Button>
        </Cell>
      )}
      {selectionBehavior === 'toggle' && (
        <Cell>
          <MyCheckbox slot="selection" />
        </Cell>
      )}
      <Collection items={columns}>
        {children}
      </Collection>
    </Row>
  );
}
```

```
import type {
  RowProps,
  TableHeaderProps
} from 'react-aria-components';
import {
  Collection,
  useTableOptions
} from 'react-aria-components';

export function MyTableHeader<T extends object>(
  { columns, children }: TableHeaderProps<T>
) {
  let { selectionBehavior, selectionMode, allowsDragging } =
    useTableOptions();

  return (
    <TableHeader>
      {/* Add extra columns for drag and drop and selection. */}
      {allowsDragging && <Column />}
      {selectionBehavior === 'toggle' && (
        <Column>
          {selectionMode === 'multiple' && (
            <MyCheckbox slot="selection" />
          )}
        </Column>
      )}
      <Collection items={columns}>
        {children}
      </Collection>
    </TableHeader>
  );
}

export function MyRow<T extends object>(
  { id, columns, children, ...otherProps }: RowProps<T>
) {
  let { selectionBehavior, allowsDragging } =
    useTableOptions();

  return (
    <Row id={id} {...otherProps}>
      {allowsDragging && (
        <Cell>
          <Button slot="drag">
            <GripVertical size={18} />
          </Button>
        </Cell>
      )}
      {selectionBehavior === 'toggle' && (
        <Cell>
          <MyCheckbox slot="selection" />
        </Cell>
      )}
      <Collection items={columns}>
        {children}
      </Collection>
    </Row>
  );
}
```

```
import type {
  RowProps,
  TableHeaderProps
} from 'react-aria-components';
import {
  Collection,
  useTableOptions
} from 'react-aria-components';

export function MyTableHeader<
  T extends object
>(
  { columns, children }:
    TableHeaderProps<T>
) {
  let {
    selectionBehavior,
    selectionMode,
    allowsDragging
  } = useTableOptions();

  return (
    <TableHeader>
      {/* Add extra columns for drag and drop and selection. */}
      {allowsDragging &&
        <Column />}
      {selectionBehavior ===
          'toggle' && (
        <Column>
          {selectionMode ===
              'multiple' &&
            (
              <MyCheckbox slot="selection" />
            )}
        </Column>
      )}
      <Collection
        items={columns}
      >
        {children}
      </Collection>
    </TableHeader>
  );
}

export function MyRow<
  T extends object
>(
  {
    id,
    columns,
    children,
    ...otherProps
  }: RowProps<T>
) {
  let {
    selectionBehavior,
    allowsDragging
  } = useTableOptions();

  return (
    <Row
      id={id}
      {...otherProps}
    >
      {allowsDragging &&
        (
          <Cell>
            <Button slot="drag">
              <GripVertical
                size={18}
              />
            </Button>
          </Cell>
        )}
      {selectionBehavior ===
          'toggle' && (
        <Cell>
          <MyCheckbox slot="selection" />
        </Cell>
      )}
      <Collection
        items={columns}
      >
        {children}
      </Collection>
    </Row>
  );
}
```

Now we can render a table with a default selection column built in.

```
<Table aria-label="Files" selectionMode="multiple">
  <MyTableHeader>
    <MyColumn isRowHeader>Name</MyColumn>
    <MyColumn>Type</MyColumn>
    <MyColumn>Date Modified</MyColumn>
  </MyTableHeader>
  <TableBody>
    <MyRow>
      <Cell>Games</Cell>
      <Cell>File folder</Cell>
      <Cell>6/7/2020</Cell>
    </MyRow>
    <MyRow>
      <Cell>Program Files</Cell>
      <Cell>File folder</Cell>
      <Cell>4/7/2021</Cell>
    </MyRow>
    <MyRow>
      <Cell>bootmgr</Cell>
      <Cell>System file</Cell>
      <Cell>11/20/2010</Cell>
    </MyRow>
  </TableBody>
</Table>
```

```
<Table aria-label="Files" selectionMode="multiple">
  <MyTableHeader>
    <MyColumn isRowHeader>Name</MyColumn>
    <MyColumn>Type</MyColumn>
    <MyColumn>Date Modified</MyColumn>
  </MyTableHeader>
  <TableBody>
    <MyRow>
      <Cell>Games</Cell>
      <Cell>File folder</Cell>
      <Cell>6/7/2020</Cell>
    </MyRow>
    <MyRow>
      <Cell>Program Files</Cell>
      <Cell>File folder</Cell>
      <Cell>4/7/2021</Cell>
    </MyRow>
    <MyRow>
      <Cell>bootmgr</Cell>
      <Cell>System file</Cell>
      <Cell>11/20/2010</Cell>
    </MyRow>
  </TableBody>
</Table>
```

```
<Table
  aria-label="Files"
  selectionMode="multiple"
>
  <MyTableHeader>
    <MyColumn
      isRowHeader
    >
      Name
    </MyColumn>
    <MyColumn>
      Type
    </MyColumn>
    <MyColumn>
      Date Modified
    </MyColumn>
  </MyTableHeader>
  <TableBody>
    <MyRow>
      <Cell>
        Games
      </Cell>
      <Cell>
        File folder
      </Cell>
      <Cell>
        6/7/2020
      </Cell>
    </MyRow>
    <MyRow>
      <Cell>
        Program Files
      </Cell>
      <Cell>
        File folder
      </Cell>
      <Cell>
        4/7/2021
      </Cell>
    </MyRow>
    <MyRow>
      <Cell>
        bootmgr
      </Cell>
      <Cell>
        System file
      </Cell>
      <Cell>
        11/20/2010
      </Cell>
    </MyRow>
  </TableBody>
</Table>
```

## Content[#](#content)

* * *

So far, our examples have shown static collections, where the data is hard coded. Dynamic collections, as shown below, can be used when the table data comes from an external data source such as an API, or updates over time. In the example below, both the columns and the rows are provided to the table via a render function, enabling the user to hide and show columns and add additional rows. You can also make the columns static and only the rows dynamic.

**Note**: Dynamic collections are automatically memoized to improve performance. Use the `dependencies` prop to invalidate cached elements that depend on external state (e.g. `columns` in this example). See the [collections](https://react-spectrum.adobe.com/react-aria/collections.html#dependencies) guide for more details.

```
import type {TableProps} from 'react-aria-components';
import {MyCheckboxGroup} from './CheckboxGroup';
import {MyCheckbox} from './Checkbox';

function FileTable(props: TableProps) {
  let [showColumns, setShowColumns] = React.useState(['name', 'type', 'date']);
  let columns = [
    { name: 'Name', id: 'name', isRowHeader: true },
    { name: 'Type', id: 'type' },
    { name: 'Date Modified', id: 'date' }
  ].filter((column) => showColumns.includes(column.id));

  let [rows, setRows] = React.useState([
    { id: 1, name: 'Games', date: '6/7/2020', type: 'File folder' },
    { id: 2, name: 'Program Files', date: '4/7/2021', type: 'File folder' },
    { id: 3, name: 'bootmgr', date: '11/20/2010', type: 'System file' },
    { id: 4, name: 'log.txt', date: '1/18/2016', type: 'Text Document' }
  ]);

  let addRow = () => {
    let date = new Date().toLocaleDateString();
    setRows((rows) => [
      ...rows,
      { id: rows.length + 1, name: 'file.txt', date, type: 'Text Document' }
    ]);
  };

  return (
    <div className="flex-col">
      <MyCheckboxGroup
        aria-label="Show columns"
        value={showColumns}
        onChange={setShowColumns}
        style={{ flexDirection: 'row' }}
      >
        <MyCheckbox value="type">Type</MyCheckbox>
        <MyCheckbox value="date">Date Modified</MyCheckbox>
      </MyCheckboxGroup>
      <Table aria-label="Files" {...props}>
        <MyTableHeader columns={columns}>
          {(column) => (
            <Column isRowHeader={column.isRowHeader}>
              {column.name}
            </Column>
          )}
        </MyTableHeader>
        <TableBody items={rows} dependencies={[columns]}>
          {(item) => (
            <MyRow columns={columns}>
              {(column) => <Cell>{item[column.id]}</Cell>}
            </MyRow>
          )}
        </TableBody>
      </Table>
      <Button onPress={addRow}>Add row</Button>
    </div>
  );
}
```

```
import type {TableProps} from 'react-aria-components';
import {MyCheckboxGroup} from './CheckboxGroup';
import {MyCheckbox} from './Checkbox';

function FileTable(props: TableProps) {
  let [showColumns, setShowColumns] = React.useState([
    'name',
    'type',
    'date'
  ]);
  let columns = [
    { name: 'Name', id: 'name', isRowHeader: true },
    { name: 'Type', id: 'type' },
    { name: 'Date Modified', id: 'date' }
  ].filter((column) => showColumns.includes(column.id));

  let [rows, setRows] = React.useState([
    {
      id: 1,
      name: 'Games',
      date: '6/7/2020',
      type: 'File folder'
    },
    {
      id: 2,
      name: 'Program Files',
      date: '4/7/2021',
      type: 'File folder'
    },
    {
      id: 3,
      name: 'bootmgr',
      date: '11/20/2010',
      type: 'System file'
    },
    {
      id: 4,
      name: 'log.txt',
      date: '1/18/2016',
      type: 'Text Document'
    }
  ]);

  let addRow = () => {
    let date = new Date().toLocaleDateString();
    setRows((rows) => [
      ...rows,
      {
        id: rows.length + 1,
        name: 'file.txt',
        date,
        type: 'Text Document'
      }
    ]);
  };

  return (
    <div className="flex-col">
      <MyCheckboxGroup
        aria-label="Show columns"
        value={showColumns}
        onChange={setShowColumns}
        style={{ flexDirection: 'row' }}
      >
        <MyCheckbox value="type">Type</MyCheckbox>
        <MyCheckbox value="date">Date Modified</MyCheckbox>
      </MyCheckboxGroup>
      <Table aria-label="Files" {...props}>
        <MyTableHeader columns={columns}>
          {(column) => (
            <Column isRowHeader={column.isRowHeader}>
              {column.name}
            </Column>
          )}
        </MyTableHeader>
        <TableBody items={rows} dependencies={[columns]}>
          {(item) => (
            <MyRow columns={columns}>
              {(column) => <Cell>{item[column.id]}</Cell>}
            </MyRow>
          )}
        </TableBody>
      </Table>
      <Button onPress={addRow}>Add row</Button>
    </div>
  );
}
```

```
import type {TableProps} from 'react-aria-components';
import {MyCheckboxGroup} from './CheckboxGroup';
import {MyCheckbox} from './Checkbox';

function FileTable(
  props: TableProps
) {
  let [
    showColumns,
    setShowColumns
  ] = React.useState([
    'name',
    'type',
    'date'
  ]);
  let columns = [
    {
      name: 'Name',
      id: 'name',
      isRowHeader: true
    },
    {
      name: 'Type',
      id: 'type'
    },
    {
      name:
        'Date Modified',
      id: 'date'
    }
  ].filter((column) =>
    showColumns.includes(
      column.id
    )
  );

  let [rows, setRows] =
    React.useState([
      {
        id: 1,
        name: 'Games',
        date: '6/7/2020',
        type:
          'File folder'
      },
      {
        id: 2,
        name:
          'Program Files',
        date: '4/7/2021',
        type:
          'File folder'
      },
      {
        id: 3,
        name: 'bootmgr',
        date:
          '11/20/2010',
        type:
          'System file'
      },
      {
        id: 4,
        name: 'log.txt',
        date:
          '1/18/2016',
        type:
          'Text Document'
      }
    ]);

  let addRow = () => {
    let date = new Date()
      .toLocaleDateString();
    setRows((rows) => [
      ...rows,
      {
        id: rows.length +
          1,
        name: 'file.txt',
        date,
        type:
          'Text Document'
      }
    ]);
  };

  return (
    <div className="flex-col">
      <MyCheckboxGroup
        aria-label="Show columns"
        value={showColumns}
        onChange={setShowColumns}
        style={{
          flexDirection:
            'row'
        }}
      >
        <MyCheckbox value="type">
          Type
        </MyCheckbox>
        <MyCheckbox value="date">
          Date Modified
        </MyCheckbox>
      </MyCheckboxGroup>
      <Table
        aria-label="Files"
        {...props}
      >
        <MyTableHeader
          columns={columns}
        >
          {(column) => (
            <Column
              isRowHeader={column
                .isRowHeader}
            >
              {column
                .name}
            </Column>
          )}
        </MyTableHeader>
        <TableBody
          items={rows}
          dependencies={[
            columns
          ]}
        >
          {(item) => (
            <MyRow
              columns={columns}
            >
              {(column) => (
                <Cell>
                  {item[
                    column
                      .id
                  ]}
                </Cell>
              )}
            </MyRow>
          )}
        </TableBody>
      </Table>
      <Button
        onPress={addRow}
      >
        Add row
      </Button>
    </div>
  );
}
```

* * *

By default, `Table` doesn't allow row selection but this can be enabled using the `selectionMode` prop. Use `defaultSelectedKeys` to provide a default set of selected rows. Note that the value of the selected keys must match the `id` prop of the row.

The example below enables single selection mode, and uses `defaultSelectedKeys` to select the row with id equal to `2`. A user can click on a different row to change the selection, or click on the same row again to deselect it entirely.

```
// Using the example above
<FileTable selectionMode="single" defaultSelectedKeys={[2]} />
```

```
// Using the example above
<FileTable
  selectionMode="single"
  defaultSelectedKeys={[2]}
/>
```

```
// Using the example above
<FileTable
  selectionMode="single"
  defaultSelectedKeys={[
    2
  ]}
/>
```

Multiple selection can be enabled by setting `selectionMode` to `multiple`.

```
// Using the example above
<FileTable selectionMode="multiple" defaultSelectedKeys={[2, 4]} />
```

```
// Using the example above
<FileTable
  selectionMode="multiple"
  defaultSelectedKeys={[2, 4]}
/>
```

```
// Using the example above
<FileTable
  selectionMode="multiple"
  defaultSelectedKeys={[
    2,
    4
  ]}
/>
```

Table also supports a `disallowEmptySelection` prop which forces the user to have at least one row in the Table selected at all times. In this mode, if a single row is selected and the user presses it, it will not be deselected.

```
// Using the example above
<FileTable
  selectionMode="single"
  defaultSelectedKeys={[2]}
  disallowEmptySelection
/>
```

```
// Using the example above
<FileTable
  selectionMode="single"
  defaultSelectedKeys={[2]}
  disallowEmptySelection
/>
```

```
// Using the example above
<FileTable
  selectionMode="single"
  defaultSelectedKeys={[
    2
  ]}
  disallowEmptySelection
/>
```

To programmatically control row selection, use the `selectedKeys` prop paired with the `onSelectionChange` callback. The `id` prop from the selected rows will be passed into the callback when the row is pressed, allowing you to update state accordingly.

```
import type {Selection} from 'react-aria-components';

interface Pokemon {
  id: number,
  name: string,
  type: string,
  level: string
}

interface PokemonTableProps extends TableProps {
  items?: Pokemon[],
  renderEmptyState?: () => string
}

function PokemonTable(props: PokemonTableProps) {
  let items = props.items || [
    {id: 1, name: 'Charizard', type: 'Fire, Flying', level: '67'},
    {id: 2, name: 'Blastoise', type: 'Water', level: '56'},
    {id: 3, name: 'Venusaur', type: 'Grass, Poison', level: '83'},
    {id: 4, name: 'Pikachu', type: 'Electric', level: '100'}
  ];

  let [selectedKeys, setSelectedKeys] = React.useState<Selection>(new Set());
  return (
    <Table
      aria-label="Pokemon table"
      {...props}
      selectedKeys={selectedKeys}
      onSelectionChange={setSelectedKeys}    >
      <MyTableHeader>
        <Column isRowHeader>Name</Column>
        <Column>Type</Column>
        <Column>Level</Column>
      </MyTableHeader>
      <TableBody items={items} renderEmptyState={props.renderEmptyState}>
        {item => (
          <MyRow>
            <Cell>{item.name}</Cell>
            <Cell>{item.type}</Cell>
            <Cell>{item.level}</Cell>
          </MyRow>
        )}
      </TableBody>
    </Table>
  );
}

<PokemonTable selectionMode="multiple" />
```

```
import type {Selection} from 'react-aria-components';

interface Pokemon {
  id: number;
  name: string;
  type: string;
  level: string;
}

interface PokemonTableProps extends TableProps {
  items?: Pokemon[];
  renderEmptyState?: () => string;
}

function PokemonTable(props: PokemonTableProps) {
  let items = props.items || [
    {
      id: 1,
      name: 'Charizard',
      type: 'Fire, Flying',
      level: '67'
    },
    {
      id: 2,
      name: 'Blastoise',
      type: 'Water',
      level: '56'
    },
    {
      id: 3,
      name: 'Venusaur',
      type: 'Grass, Poison',
      level: '83'
    },
    {
      id: 4,
      name: 'Pikachu',
      type: 'Electric',
      level: '100'
    }
  ];

  let [selectedKeys, setSelectedKeys] = React.useState<
    Selection
  >(new Set());
  return (
    <Table
      aria-label="Pokemon table"
      {...props}
      selectedKeys={selectedKeys}
      onSelectionChange={setSelectedKeys}    >
      <MyTableHeader>
        <Column isRowHeader>Name</Column>
        <Column>Type</Column>
        <Column>Level</Column>
      </MyTableHeader>
      <TableBody
        items={items}
        renderEmptyState={props.renderEmptyState}
      >
        {(item) => (
          <MyRow>
            <Cell>{item.name}</Cell>
            <Cell>{item.type}</Cell>
            <Cell>{item.level}</Cell>
          </MyRow>
        )}
      </TableBody>
    </Table>
  );
}

<PokemonTable selectionMode="multiple" />
```

```
import type {Selection} from 'react-aria-components';

interface Pokemon {
  id: number;
  name: string;
  type: string;
  level: string;
}

interface PokemonTableProps
  extends TableProps {
  items?: Pokemon[];
  renderEmptyState?:
    () => string;
}

function PokemonTable(
  props:
    PokemonTableProps
) {
  let items =
    props.items || [
      {
        id: 1,
        name:
          'Charizard',
        type:
          'Fire, Flying',
        level: '67'
      },
      {
        id: 2,
        name:
          'Blastoise',
        type: 'Water',
        level: '56'
      },
      {
        id: 3,
        name: 'Venusaur',
        type:
          'Grass, Poison',
        level: '83'
      },
      {
        id: 4,
        name: 'Pikachu',
        type: 'Electric',
        level: '100'
      }
    ];

  let [
    selectedKeys,
    setSelectedKeys
  ] = React.useState<
    Selection
  >(new Set());
  return (
    <Table
      aria-label="Pokemon table"
      {...props}
      selectedKeys={selectedKeys}
      onSelectionChange={setSelectedKeys}    >
      <MyTableHeader>
        <Column
          isRowHeader
        >
          Name
        </Column>
        <Column>
          Type
        </Column>
        <Column>
          Level
        </Column>
      </MyTableHeader>
      <TableBody
        items={items}
        renderEmptyState={props
          .renderEmptyState}
      >
        {(item) => (
          <MyRow>
            <Cell>
              {item.name}
            </Cell>
            <Cell>
              {item.type}
            </Cell>
            <Cell>
              {item
                .level}
            </Cell>
          </MyRow>
        )}
      </TableBody>
    </Table>
  );
}

<PokemonTable selectionMode="multiple" />
```

By default, `Table` uses the `"toggle"` selection behavior, which behaves like a checkbox group: clicking, tapping, or pressing the Space or Enter keys toggles selection for the focused row. Using the arrow keys moves focus but does not change selection. The `"toggle"` selection mode is often paired with a column of checkboxes in each row as an explicit affordance for selection.

When the `selectionBehavior` prop is set to `"replace"`, clicking a row with the mouse _replaces_ the selection with only that row. Using the arrow keys moves both focus and selection. To select multiple rows, modifier keys such as Ctrl, Cmd, and Shift can be used. To move focus without moving selection, the Ctrl key on Windows or the Option key on macOS can be held while pressing the arrow keys. Holding this modifier while pressing the Space key toggles selection for the focused row, which allows multiple selection of non-contiguous items. On touch screen devices, selection always behaves as toggle since modifier keys may not be available. This behavior emulates native platforms such as macOS and Windows, and is often used when checkboxes in each row are not desired.

```
<PokemonTable selectionMode="multiple" selectionBehavior="replace" />
```

```
<PokemonTable
  selectionMode="multiple"
  selectionBehavior="replace"
/>
```

```
<PokemonTable
  selectionMode="multiple"
  selectionBehavior="replace"
/>
```

* * *

`Table` supports row actions via the `onRowAction` prop, which is useful for functionality such as navigation. In the default `"toggle"` selection behavior, when nothing is selected, clicking or tapping the row triggers the row action. When at least one item is selected, the table is in selection mode, and clicking or tapping a row toggles the selection. Actions may also be triggered via the Enter key, and selection using the Space key.

This behavior is slightly different in the `"replace"` selection behavior, where single clicking selects the row and actions are performed via double click. On touch devices, the action becomes the primary tap interaction, and a long press enters into selection mode, which temporarily swaps the selection behavior to `"toggle"` to perform selection (you may wish to display checkboxes when this happens). Deselecting all items exits selection mode and reverts the selection behavior back to `"replace"`. Keyboard behaviors are unaffected.

```
<div style={{display: 'flex', flexWrap: 'wrap', gap: '24px'}}>
  <PokemonTable
    aria-label="Pokemon table with row actions and toggle selection behavior"
    onRowAction={key => alert(`Opening item ${key}...`)}    selectionMode="multiple" />
  <PokemonTable
    aria-label="Pokemon table with row actions and replace selection behavior"
    onRowAction={key => alert(`Opening item ${key}...`)}
    selectionBehavior="replace"    selectionMode="multiple" />
</div>
```

```
<div
  style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: '24px'
  }}
>
  <PokemonTable
    aria-label="Pokemon table with row actions and toggle selection behavior"
    onRowAction={(key) => alert(`Opening item ${key}...`)}    selectionMode="multiple"
  />
  <PokemonTable
    aria-label="Pokemon table with row actions and replace selection behavior"
    onRowAction={(key) => alert(`Opening item ${key}...`)}
    selectionBehavior="replace"    selectionMode="multiple"
  />
</div>
```

```
<div
  style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: '24px'
  }}
>
  <PokemonTable
    aria-label="Pokemon table with row actions and toggle selection behavior"
    onRowAction={(key) =>
      alert(
        `Opening item ${key}...`
      )}    selectionMode="multiple"
  />
  <PokemonTable
    aria-label="Pokemon table with row actions and replace selection behavior"
    onRowAction={(key) =>
      alert(
        `Opening item ${key}...`
      )}
    selectionBehavior="replace"    selectionMode="multiple"
  />
</div>
```

Rows may also have a row action specified by directly applying `onAction` on the `Row` itself. This may be especially convenient in static collections. If `onAction` is also provided to the `Table`, both the table's and the row's `onAction` are called.

```
<Table
  aria-label="Table with onAction applied on the rows directly"
  selectionMode="multiple"
>
  <MyTableHeader>
    <Column isRowHeader>Name</Column>
    <Column>Type</Column>
    <Column>Level</Column>
  </MyTableHeader>
  <TableBody>
    <MyRow onAction={() => alert(`Opening Charizard`)}>      <Cell>Charizard</Cell>
      <Cell>Fire, Flying</Cell>
      <Cell>67</Cell>
    </MyRow>
    <MyRow onAction={() => alert(`Opening Blastoise`)}>      <Cell>Blastoise</Cell>
      <Cell>Water</Cell>
      <Cell>56</Cell>
    </MyRow>
    <MyRow onAction={() => alert(`Opening Venusaur`)}>      <Cell>Venusaur</Cell>
      <Cell>Grass, Poison</Cell>
      <Cell>83</Cell>
    </MyRow>
    <MyRow onAction={() => alert(`Opening Pikachu`)}>      <Cell>Pikachu</Cell>
      <Cell>Electric</Cell>
      <Cell>100</Cell>
    </MyRow>
  </TableBody>
</Table>
```

```
<Table
  aria-label="Table with onAction applied on the rows directly"
  selectionMode="multiple"
>
  <MyTableHeader>
    <Column isRowHeader>Name</Column>
    <Column>Type</Column>
    <Column>Level</Column>
  </MyTableHeader>
  <TableBody>
    <MyRow onAction={() => alert(`Opening Charizard`)}>      <Cell>Charizard</Cell>
      <Cell>Fire, Flying</Cell>
      <Cell>67</Cell>
    </MyRow>
    <MyRow onAction={() => alert(`Opening Blastoise`)}>      <Cell>Blastoise</Cell>
      <Cell>Water</Cell>
      <Cell>56</Cell>
    </MyRow>
    <MyRow onAction={() => alert(`Opening Venusaur`)}>      <Cell>Venusaur</Cell>
      <Cell>Grass, Poison</Cell>
      <Cell>83</Cell>
    </MyRow>
    <MyRow onAction={() => alert(`Opening Pikachu`)}>      <Cell>Pikachu</Cell>
      <Cell>Electric</Cell>
      <Cell>100</Cell>
    </MyRow>
  </TableBody>
</Table>
```

```
<Table
  aria-label="Table with onAction applied on the rows directly"
  selectionMode="multiple"
>
  <MyTableHeader>
    <Column
      isRowHeader
    >
      Name
    </Column>
    <Column>
      Type
    </Column>
    <Column>
      Level
    </Column>
  </MyTableHeader>
  <TableBody>
    <MyRow
      onAction={() =>
        alert(
          `Opening Charizard`
        )}
    >      <Cell>
        Charizard
      </Cell>
      <Cell>
        Fire, Flying
      </Cell>
      <Cell>67</Cell>
    </MyRow>
    <MyRow
      onAction={() =>
        alert(
          `Opening Blastoise`
        )}
    >      <Cell>
        Blastoise
      </Cell>
      <Cell>
        Water
      </Cell>
      <Cell>56</Cell>
    </MyRow>
    <MyRow
      onAction={() =>
        alert(
          `Opening Venusaur`
        )}
    >      <Cell>
        Venusaur
      </Cell>
      <Cell>
        Grass, Poison
      </Cell>
      <Cell>83</Cell>
    </MyRow>
    <MyRow
      onAction={() =>
        alert(
          `Opening Pikachu`
        )}
    >      <Cell>
        Pikachu
      </Cell>
      <Cell>
        Electric
      </Cell>
      <Cell>100</Cell>
    </MyRow>
  </TableBody>
</Table>
```

Table rows may also be links to another page or website. This can be achieved by passing the `href` prop to the `<Row>` component. Links behave the same way as described above for row actions depending on the `selectionMode` and `selectionBehavior`.

```
<Table aria-label="Bookmarks" selectionMode="multiple">
  <MyTableHeader>
    <Column isRowHeader>Name</Column>
    <Column>URL</Column>
    <Column>Date added</Column>
  </MyTableHeader>
  <TableBody>
    <MyRow href="https://adobe.com/" target="_blank">
      <Cell>Adobe</Cell>
      <Cell>https://adobe.com/</Cell>
      <Cell>January 28, 2023</Cell>
    </MyRow>
    <MyRow href="https://google.com/" target="_blank">
      <Cell>Google</Cell>
      <Cell>https://google.com/</Cell>
      <Cell>April 5, 2023</Cell>
    </MyRow>
    <MyRow href="https://nytimes.com/" target="_blank">
      <Cell>New York Times</Cell>
      <Cell>https://nytimes.com/</Cell>
      <Cell>July 12, 2023</Cell>
    </MyRow>
  </TableBody>
</Table>
```

```
<Table aria-label="Bookmarks" selectionMode="multiple">
  <MyTableHeader>
    <Column isRowHeader>Name</Column>
    <Column>URL</Column>
    <Column>Date added</Column>
  </MyTableHeader>
  <TableBody>
    <MyRow href="https://adobe.com/" target="_blank">
      <Cell>Adobe</Cell>
      <Cell>https://adobe.com/</Cell>
      <Cell>January 28, 2023</Cell>
    </MyRow>
    <MyRow href="https://google.com/" target="_blank">
      <Cell>Google</Cell>
      <Cell>https://google.com/</Cell>
      <Cell>April 5, 2023</Cell>
    </MyRow>
    <MyRow href="https://nytimes.com/" target="_blank">
      <Cell>New York Times</Cell>
      <Cell>https://nytimes.com/</Cell>
      <Cell>July 12, 2023</Cell>
    </MyRow>
  </TableBody>
</Table>
```

```
<Table
  aria-label="Bookmarks"
  selectionMode="multiple"
>
  <MyTableHeader>
    <Column
      isRowHeader
    >
      Name
    </Column>
    <Column>
      URL
    </Column>
    <Column>
      Date added
    </Column>
  </MyTableHeader>
  <TableBody>
    <MyRow
      href="https://adobe.com/"
      target="_blank"
    >
      <Cell>
        Adobe
      </Cell>
      <Cell>
        https://adobe.com/
      </Cell>
      <Cell>
        January 28,
        2023
      </Cell>
    </MyRow>
    <MyRow
      href="https://google.com/"
      target="_blank"
    >
      <Cell>
        Google
      </Cell>
      <Cell>
        https://google.com/
      </Cell>
      <Cell>
        April 5, 2023
      </Cell>
    </MyRow>
    <MyRow
      href="https://nytimes.com/"
      target="_blank"
    >
      <Cell>
        New York Times
      </Cell>
      <Cell>
        https://nytimes.com/
      </Cell>
      <Cell>
        July 12, 2023
      </Cell>
    </MyRow>
  </TableBody>
</Table>
```

The `<Row>` component works with frameworks and client side routers like [Next.js](https://nextjs.org/) and [React Router](https://reactrouter.com/en/main). As with other React Aria components that support links, this works via the `[RouterProvider](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/utils/src/openLink.tsx:RouterProvider)` component at the root of your app. See the [client side routing guide](https://react-spectrum.adobe.com/react-aria/routing.html) to learn how to set this up.

* * *

A `Row` can be disabled with the `isDisabled` prop. This will disable all interactions on the row, unless the `disabledBehavior` prop on `Table` is used to change this behavior. Note that you are responsible for the styling of disabled rows, however, the selection checkbox will be automatically disabled.

```
<Table aria-label="Table with disabled rows" selectionMode="multiple">
  <MyTableHeader>
    <Column isRowHeader>Name</Column>
    <Column>Type</Column>
    <Column>Level</Column>
  </MyTableHeader>
  <TableBody>
    <MyRow>
      <Cell>Charizard</Cell>
      <Cell>Fire, Flying</Cell>
      <Cell>67</Cell>
    </MyRow>
    <MyRow isDisabled>      <Cell>Venusaur</Cell>
      <Cell>Grass, Poison</Cell>
      <Cell>83</Cell>
    </MyRow>
    <MyRow>
      <Cell>Pikachu</Cell>
      <Cell>Electric</Cell>
      <Cell>100</Cell>
    </MyRow>
  </TableBody>
</Table>
```

```
<Table
  aria-label="Table with disabled rows"
  selectionMode="multiple"
>
  <MyTableHeader>
    <Column isRowHeader>Name</Column>
    <Column>Type</Column>
    <Column>Level</Column>
  </MyTableHeader>
  <TableBody>
    <MyRow>
      <Cell>Charizard</Cell>
      <Cell>Fire, Flying</Cell>
      <Cell>67</Cell>
    </MyRow>
    <MyRow isDisabled>      <Cell>Venusaur</Cell>
      <Cell>Grass, Poison</Cell>
      <Cell>83</Cell>
    </MyRow>
    <MyRow>
      <Cell>Pikachu</Cell>
      <Cell>Electric</Cell>
      <Cell>100</Cell>
    </MyRow>
  </TableBody>
</Table>
```

```
<Table
  aria-label="Table with disabled rows"
  selectionMode="multiple"
>
  <MyTableHeader>
    <Column
      isRowHeader
    >
      Name
    </Column>
    <Column>
      Type
    </Column>
    <Column>
      Level
    </Column>
  </MyTableHeader>
  <TableBody>
    <MyRow>
      <Cell>
        Charizard
      </Cell>
      <Cell>
        Fire, Flying
      </Cell>
      <Cell>67</Cell>
    </MyRow>
    <MyRow isDisabled>      <Cell>
        Venusaur
      </Cell>
      <Cell>
        Grass, Poison
      </Cell>
      <Cell>83</Cell>
    </MyRow>
    <MyRow>
      <Cell>
        Pikachu
      </Cell>
      <Cell>
        Electric
      </Cell>
      <Cell>100</Cell>
    </MyRow>
  </TableBody>
</Table>
```

By default, only row selection is disabled. When `disabledBehavior` is set to `all`, all interactions such as focus, dragging, and actions are also disabled.

```
<Table
  aria-label="Table with disabled rows"
  selectionMode="multiple"
  disabledBehavior="all">
  <MyTableHeader>
    <Column isRowHeader>Name</Column>
    <Column>Type</Column>
    <Column>Level</Column>
  </MyTableHeader>
  <TableBody>
    <MyRow>
      <Cell>Charizard</Cell>
      <Cell>Fire, Flying</Cell>
      <Cell>67</Cell>
    </MyRow>
    <MyRow isDisabled>
      <Cell>Venusaur</Cell>
      <Cell>Grass, Poison</Cell>
      <Cell>83</Cell>
    </MyRow>
    <MyRow>
      <Cell>Pikachu</Cell>
      <Cell>Electric</Cell>
      <Cell>100</Cell>
    </MyRow>
  </TableBody>
</Table>
```

```
<Table
  aria-label="Table with disabled rows"
  selectionMode="multiple"
  disabledBehavior="all">
  <MyTableHeader>
    <Column isRowHeader>Name</Column>
    <Column>Type</Column>
    <Column>Level</Column>
  </MyTableHeader>
  <TableBody>
    <MyRow>
      <Cell>Charizard</Cell>
      <Cell>Fire, Flying</Cell>
      <Cell>67</Cell>
    </MyRow>
    <MyRow isDisabled>
      <Cell>Venusaur</Cell>
      <Cell>Grass, Poison</Cell>
      <Cell>83</Cell>
    </MyRow>
    <MyRow>
      <Cell>Pikachu</Cell>
      <Cell>Electric</Cell>
      <Cell>100</Cell>
    </MyRow>
  </TableBody>
</Table>
```

```
<Table
  aria-label="Table with disabled rows"
  selectionMode="multiple"
  disabledBehavior="all">
  <MyTableHeader>
    <Column
      isRowHeader
    >
      Name
    </Column>
    <Column>
      Type
    </Column>
    <Column>
      Level
    </Column>
  </MyTableHeader>
  <TableBody>
    <MyRow>
      <Cell>
        Charizard
      </Cell>
      <Cell>
        Fire, Flying
      </Cell>
      <Cell>67</Cell>
    </MyRow>
    <MyRow isDisabled>
      <Cell>
        Venusaur
      </Cell>
      <Cell>
        Grass, Poison
      </Cell>
      <Cell>83</Cell>
    </MyRow>
    <MyRow>
      <Cell>
        Pikachu
      </Cell>
      <Cell>
        Electric
      </Cell>
      <Cell>100</Cell>
    </MyRow>
  </TableBody>
</Table>
```

In dynamic collections, it may be more convenient to use the `disabledKeys` prop at the `Table` level instead of `isDisabled` on individual rows. This accepts a list of row ids that are disabled. A row is considered disabled if its key exists in `disabledKeys` or if it has `isDisabled`.

```
// Using the same table as above
<PokemonTable selectionMode="multiple" disabledKeys={[3]} />
```

```
// Using the same table as above
<PokemonTable selectionMode="multiple" disabledKeys={[3]} />
```

```
// Using the same table as above
<PokemonTable
  selectionMode="multiple"
  disabledKeys={[3]}
/>
```

* * *

This example uses the [useAsyncList](https://react-spectrum.adobe.com/react-stately/useAsyncList.html) hook to handle asynchronous loading of data from a server. Use the [renderEmptyState](#empty-state) prop to display a spinner during initial load. To enable infinite scrolling, render a `<TableLoadMoreItem>` element at the end of the table.

```
import {useAsyncList} from 'react-stately';
import {Collection, TableLoadMoreItem} from 'react-aria-components';

interface Character {
  name: string;
  height: number;
  mass: number;
  birth_year: number;
}

function AsyncSortTable() {
  let list = useAsyncList<Character>({
    async load({ signal, cursor }) {
      if (cursor) {
        cursor = cursor.replace(/^http:\/\//i, 'https://');
      }

      let res = await fetch(
        cursor || 'https://swapi.py4e.com/api/people/?search=',
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
    <ResizableTableContainer className="my-async-table">
      <Table aria-label="Example table with async loading">
        <TableHeader>
          <MyColumn id="name" isRowHeader width={100}>Name</MyColumn>
          <MyColumn id="height" width={100}>Height</MyColumn>
          <MyColumn id="mass" width={100}>Mass</MyColumn>
          <MyColumn id="birth_year" width={100}>Birth Year</MyColumn>
        </TableHeader>
        <TableBody>
          <Collection items={list.items}>
            {(item) => (
              <Row id={item.name}>
                <Cell>{item.name}</Cell>
                <Cell>{item.height}</Cell>
                <Cell>{item.mass}</Cell>
                <Cell>{item.birth_year}</Cell>
              </Row>
            )}
          </Collection>
          <TableLoadMoreItem
            onLoadMore={list.loadMore}
            isLoading={list.loadingState === 'loadingMore'}
          >
            <MyProgressCircle isIndeterminate aria-label="Loading more..." />
          </TableLoadMoreItem>        </TableBody>
      </Table>
    </ResizableTableContainer>
  );
}
```

```
import {useAsyncList} from 'react-stately';
import {
  Collection,
  TableLoadMoreItem
} from 'react-aria-components';

interface Character {
  name: string;
  height: number;
  mass: number;
  birth_year: number;
}

function AsyncSortTable() {
  let list = useAsyncList<Character>({
    async load({ signal, cursor }) {
      if (cursor) {
        cursor = cursor.replace(/^http:\/\//i, 'https://');
      }

      let res = await fetch(
        cursor ||
          'https://swapi.py4e.com/api/people/?search=',
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
    <ResizableTableContainer className="my-async-table">
      <Table aria-label="Example table with async loading">
        <TableHeader>
          <MyColumn id="name" isRowHeader width={100}>
            Name
          </MyColumn>
          <MyColumn id="height" width={100}>
            Height
          </MyColumn>
          <MyColumn id="mass" width={100}>Mass</MyColumn>
          <MyColumn id="birth_year" width={100}>
            Birth Year
          </MyColumn>
        </TableHeader>
        <TableBody>
          <Collection items={list.items}>
            {(item) => (
              <Row id={item.name}>
                <Cell>{item.name}</Cell>
                <Cell>{item.height}</Cell>
                <Cell>{item.mass}</Cell>
                <Cell>{item.birth_year}</Cell>
              </Row>
            )}
          </Collection>
          <TableLoadMoreItem
            onLoadMore={list.loadMore}
            isLoading={list.loadingState === 'loadingMore'}
          >
            <MyProgressCircle
              isIndeterminate
              aria-label="Loading more..."
            />
          </TableLoadMoreItem>        </TableBody>
      </Table>
    </ResizableTableContainer>
  );
}
```

```
import {useAsyncList} from 'react-stately';
import {
  Collection,
  TableLoadMoreItem
} from 'react-aria-components';

interface Character {
  name: string;
  height: number;
  mass: number;
  birth_year: number;
}

function AsyncSortTable() {
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
              'https://swapi.py4e.com/api/people/?search=',
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
    <ResizableTableContainer className="my-async-table">
      <Table aria-label="Example table with async loading">
        <TableHeader>
          <MyColumn
            id="name"
            isRowHeader
            width={100}
          >
            Name
          </MyColumn>
          <MyColumn
            id="height"
            width={100}
          >
            Height
          </MyColumn>
          <MyColumn
            id="mass"
            width={100}
          >
            Mass
          </MyColumn>
          <MyColumn
            id="birth_year"
            width={100}
          >
            Birth Year
          </MyColumn>
        </TableHeader>
        <TableBody>
          <Collection
            items={list
              .items}
          >
            {(item) => (
              <Row
                id={item
                  .name}
              >
                <Cell>
                  {item
                    .name}
                </Cell>
                <Cell>
                  {item
                    .height}
                </Cell>
                <Cell>
                  {item
                    .mass}
                </Cell>
                <Cell>
                  {item
                    .birth_year}
                </Cell>
              </Row>
            )}
          </Collection>
          <TableLoadMoreItem
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
          </TableLoadMoreItem>        </TableBody>
      </Table>
    </ResizableTableContainer>
  );
}
```

Show CSS

```
.my-async-table {
  height: 150px;
  width: fit-content;
  overflow: auto;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  background: var(--background-color);

  .react-aria-Table {
    border: none;
  }

  .react-aria-TableHeader {
    position: sticky;
    top: 0;
    background: var(--overlay-background);
    z-index: 1;
  }

  .react-aria-TableLoadingIndicator {
    height: 24px;
    position: relative;
  }
}
```

```
.my-async-table {
  height: 150px;
  width: fit-content;
  overflow: auto;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  background: var(--background-color);

  .react-aria-Table {
    border: none;
  }

  .react-aria-TableHeader {
    position: sticky;
    top: 0;
    background: var(--overlay-background);
    z-index: 1;
  }

  .react-aria-TableLoadingIndicator {
    height: 24px;
    position: relative;
  }
}
```

```
.my-async-table {
  height: 150px;
  width: fit-content;
  overflow: auto;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  background: var(--background-color);

  .react-aria-Table {
    border: none;
  }

  .react-aria-TableHeader {
    position: sticky;
    top: 0;
    background: var(--overlay-background);
    z-index: 1;
  }

  .react-aria-TableLoadingIndicator {
    height: 24px;
    position: relative;
  }
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
        width="100%"
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
        width="100%"
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
        width="100%"
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

Table supports sorting its data when a column header is pressed. To designate that a Column should support sorting, provide it with the `allowsSorting` prop. The Table accepts a `sortDescriptor` prop that defines the current column key to sort by and the sort direction (ascending/descending). When the user presses a sortable column header, the column's key and sort direction is passed into the `onSortChange` callback, allowing you to update the `sortDescriptor` appropriately.

This example performs client side sorting by passing a `sort` function to the [useAsyncList](https://react-spectrum.adobe.com/react-stately/useAsyncList.html) hook. See the docs for more information on how to perform server side sorting.

```
import {useAsyncList} from 'react-stately';

interface Character {
  name: string;
  height: number;
  mass: number;
  birth_year: number;
}

function AsyncSortTable() {
  let list = useAsyncList<Character>({
    async load({ signal }) {
      let res = await fetch(`https://swapi.py4e.com/api/people/?search`, {
        signal
      });
      let json = await res.json();
      return {
        items: json.results
      };
    },
    async sort({ items, sortDescriptor }) {
      return {
        items: items.sort((a, b) => {
          let first = a[sortDescriptor.column];
          let second = b[sortDescriptor.column];
          let cmp = (parseInt(first) || first) < (parseInt(second) || second)
            ? -1
            : 1;
          if (sortDescriptor.direction === 'descending') {
            cmp *= -1;
          }
          return cmp;
        })
      };
    }
  });

  return (
    <Table
      aria-label="Example table with client side sorting"
      sortDescriptor={list.sortDescriptor}
      onSortChange={list.sort}    >
      <TableHeader>
        <MyColumn id="name" isRowHeader allowsSorting>Name</MyColumn>
        <MyColumn id="height" allowsSorting>Height</MyColumn>
        <MyColumn id="mass" allowsSorting>Mass</MyColumn>
        <MyColumn id="birth_year" allowsSorting>Birth Year</MyColumn>
      </TableHeader>
      <TableBody items={list.items}>
        {(item) => (
          <Row id={item.name}>
            <Cell>{item.name}</Cell>
            <Cell>{item.height}</Cell>
            <Cell>{item.mass}</Cell>
            <Cell>{item.birth_year}</Cell>
          </Row>
        )}
      </TableBody>
    </Table>
  );
}
```

```
import {useAsyncList} from 'react-stately';

interface Character {
  name: string;
  height: number;
  mass: number;
  birth_year: number;
}

function AsyncSortTable() {
  let list = useAsyncList<Character>({
    async load({ signal }) {
      let res = await fetch(
        `https://swapi.py4e.com/api/people/?search`,
        { signal }
      );
      let json = await res.json();
      return {
        items: json.results
      };
    },
    async sort({ items, sortDescriptor }) {
      return {
        items: items.sort((a, b) => {
          let first = a[sortDescriptor.column];
          let second = b[sortDescriptor.column];
          let cmp =
            (parseInt(first) || first) <
                (parseInt(second) || second)
              ? -1
              : 1;
          if (sortDescriptor.direction === 'descending') {
            cmp *= -1;
          }
          return cmp;
        })
      };
    }
  });

  return (
    <Table
      aria-label="Example table with client side sorting"
      sortDescriptor={list.sortDescriptor}
      onSortChange={list.sort}    >
      <TableHeader>
        <MyColumn id="name" isRowHeader allowsSorting>
          Name
        </MyColumn>
        <MyColumn id="height" allowsSorting>
          Height
        </MyColumn>
        <MyColumn id="mass" allowsSorting>Mass</MyColumn>
        <MyColumn id="birth_year" allowsSorting>
          Birth Year
        </MyColumn>
      </TableHeader>
      <TableBody items={list.items}>
        {(item) => (
          <Row id={item.name}>
            <Cell>{item.name}</Cell>
            <Cell>{item.height}</Cell>
            <Cell>{item.mass}</Cell>
            <Cell>{item.birth_year}</Cell>
          </Row>
        )}
      </TableBody>
    </Table>
  );
}
```

```
import {useAsyncList} from 'react-stately';

interface Character {
  name: string;
  height: number;
  mass: number;
  birth_year: number;
}

function AsyncSortTable() {
  let list =
    useAsyncList<
      Character
    >({
      async load(
        { signal }
      ) {
        let res =
          await fetch(
            `https://swapi.py4e.com/api/people/?search`,
            { signal }
          );
        let json =
          await res
            .json();
        return {
          items:
            json.results
        };
      },
      async sort(
        {
          items,
          sortDescriptor
        }
      ) {
        return {
          items: items
            .sort(
              (a, b) => {
                let first =
                  a[
                    sortDescriptor
                      .column
                  ];
                let second =
                  b[
                    sortDescriptor
                      .column
                  ];
                let cmp =
                  (parseInt(
                      first
                    ) ||
                      first) <
                      (parseInt(
                        second
                      ) ||
                        second)
                    ? -1
                    : 1;
                if (
                  sortDescriptor
                    .direction ===
                    'descending'
                ) {
                  cmp *=
                    -1;
                }
                return cmp;
              }
            )
        };
      }
    });

  return (
    <Table
      aria-label="Example table with client side sorting"
      sortDescriptor={list
        .sortDescriptor}
      onSortChange={list
        .sort}    >
      <TableHeader>
        <MyColumn
          id="name"
          isRowHeader
          allowsSorting
        >
          Name
        </MyColumn>
        <MyColumn
          id="height"
          allowsSorting
        >
          Height
        </MyColumn>
        <MyColumn
          id="mass"
          allowsSorting
        >
          Mass
        </MyColumn>
        <MyColumn
          id="birth_year"
          allowsSorting
        >
          Birth Year
        </MyColumn>
      </TableHeader>
      <TableBody
        items={list
          .items}
      >
        {(item) => (
          <Row
            id={item
              .name}
          >
            <Cell>
              {item.name}
            </Cell>
            <Cell>
              {item
                .height}
            </Cell>
            <Cell>
              {item.mass}
            </Cell>
            <Cell>
              {item
                .birth_year}
            </Cell>
          </Row>
        )}
      </TableBody>
    </Table>
  );
}
```

Show CSS

```
.react-aria-Column {
  .column-header {
    display: flex;
    align-items: center;
  }

  .sort-indicator {
    padding: 0 2px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  &:not([data-sort-direction]) .sort-indicator {
    visibility: hidden;
  }
}
```

```
.react-aria-Column {
  .column-header {
    display: flex;
    align-items: center;
  }

  .sort-indicator {
    padding: 0 2px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  &:not([data-sort-direction]) .sort-indicator {
    visibility: hidden;
  }
}
```

```
.react-aria-Column {
  .column-header {
    display: flex;
    align-items: center;
  }

  .sort-indicator {
    padding: 0 2px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  &:not([data-sort-direction]) .sort-indicator {
    visibility: hidden;
  }
}
```

* * *

Use the `renderEmptyState` prop to customize what the `TableBody` will display if there are no items.

```
<Table aria-label="Search results">
  <TableHeader>
    <Column isRowHeader>Name</Column>
    <Column>Type</Column>
    <Column>Date Modified</Column>
  </TableHeader>
  <TableBody renderEmptyState={() => 'No results found.'}>    {[]}
  </TableBody>
</Table>
```

```
<Table aria-label="Search results">
  <TableHeader>
    <Column isRowHeader>Name</Column>
    <Column>Type</Column>
    <Column>Date Modified</Column>
  </TableHeader>
  <TableBody renderEmptyState={() => 'No results found.'}>    {[]}
  </TableBody>
</Table>
```

```
<Table aria-label="Search results">
  <TableHeader>
    <Column
      isRowHeader
    >
      Name
    </Column>
    <Column>
      Type
    </Column>
    <Column>
      Date Modified
    </Column>
  </TableHeader>
  <TableBody
    renderEmptyState={() =>
      'No results found.'}
  >    {[]}
  </TableBody>
</Table>
```

Show CSS

```
.react-aria-TableBody {
  &[data-empty] {
    text-align: center;
    font-style: italic;
  }
}
```

```
.react-aria-TableBody {
  &[data-empty] {
    text-align: center;
    font-style: italic;
  }
}
```

```
.react-aria-TableBody {
  &[data-empty] {
    text-align: center;
    font-style: italic;
  }
}
```

## Column Resizing[#](#column-resizing)

* * *

Table supports resizable columns, allowing users to dynamically adjust the width of a column. This is enabled by wrapping the `<Table>` with a `<ResizableTableContainer>` element, which serves as a scrollable container for the Table. Then, to make a column resizable, render a `<ColumnResizer>` element inside a `<Column>`. This allows a user to drag a resize handle to change the width of a column. Keyboard users can also resize a column by pressing Enter to enter resizing mode and then using the arrow keys to resize. Screen reader users can resize columns by operating the resizer like a slider.

By default, a Table relies on the browser's default table layout algorithm to determine column widths. However, when a Table is wrapped in a `<ResizableTableContainer>`, column widths are calculated in JavaScript by React Aria. When no additional props are provided, Table divides the available space evenly among the columns. The `Column` component also supports four different width props that allow you to control column sizing behavior: `defaultWidth`, `width`, `minWidth`, and `maxWidth`.

An initial, uncontrolled width can be provided to a Column using the `defaultWidth` prop. This allows the column width to freely shrink and grow in relation to other column widths. Alternatively, a controlled value can be provided by the `width` prop. These props accept fixed pixel values, percentages of the total table width, or [fractional](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout#the_fr_unit) values (the `fr` unit), which represent a fraction of the available space. Columns without a defined width are equivalent to `1fr`.

The `minWidth` and `maxWidth` props define constraints on the size of a column, which may be defined either as fixed pixel values or as percentages of the total table width. These are respected when calculating the size of a column, and also provide limits for column resizing.

The example below illustrates how each of the column width props affects their respective column's resize behavior. Note that the column names are wrapped in a `<span tabIndex={-1}>` so that they can be focused with the keyboard in addition to the `<ColumnResizer>`.

```
import {ResizableTableContainer, ColumnResizer} from 'react-aria-components';

<ResizableTableContainer>
  <Table aria-label="Table with resizable columns">
    <TableHeader>
      <Column id="file" isRowHeader maxWidth={500}>
        <div className="flex-wrapper">
          <span tabIndex={-1} className="column-name">File Name</span>
          <ColumnResizer />
        </div>
      </Column>
      <Column id="size" width={80}>Size</Column>
      <Column id="date" minWidth={100}>
        <div className="flex-wrapper">
          <span tabIndex={-1} className="column-name">Date Modified</span>
          <ColumnResizer />
        </div>
      </Column>    </TableHeader>
    <TableBody>
      <Row>
        <Cell>2022-Roadmap-Proposal-Revision-012822-Copy(2)</Cell>
        <Cell>214 KB</Cell>
        <Cell>November 27, 2022 at 4:56PM</Cell>
      </Row>
      <Row>
        <Cell>62259692_p0_master1200</Cell>
        <Cell>120 KB</Cell>
        <Cell>January 27, 2021 at 1:56AM</Cell>
      </Row>
    </TableBody>
  </Table>
</ResizableTableContainer>
```

```
import {
  ColumnResizer,
  ResizableTableContainer
} from 'react-aria-components';

<ResizableTableContainer>
  <Table aria-label="Table with resizable columns">
    <TableHeader>
      <Column id="file" isRowHeader maxWidth={500}>
        <div className="flex-wrapper">
          <span tabIndex={-1} className="column-name">
            File Name
          </span>
          <ColumnResizer />
        </div>
      </Column>
      <Column id="size" width={80}>Size</Column>
      <Column id="date" minWidth={100}>
        <div className="flex-wrapper">
          <span tabIndex={-1} className="column-name">
            Date Modified
          </span>
          <ColumnResizer />
        </div>
      </Column>    </TableHeader>
    <TableBody>
      <Row>
        <Cell>
          2022-Roadmap-Proposal-Revision-012822-Copy(2)
        </Cell>
        <Cell>214 KB</Cell>
        <Cell>November 27, 2022 at 4:56PM</Cell>
      </Row>
      <Row>
        <Cell>62259692_p0_master1200</Cell>
        <Cell>120 KB</Cell>
        <Cell>January 27, 2021 at 1:56AM</Cell>
      </Row>
    </TableBody>
  </Table>
</ResizableTableContainer>
```

```
import {
  ColumnResizer,
  ResizableTableContainer
} from 'react-aria-components';

<ResizableTableContainer>
  <Table aria-label="Table with resizable columns">
    <TableHeader>
      <Column
        id="file"
        isRowHeader
        maxWidth={500}
      >
        <div className="flex-wrapper">
          <span
            tabIndex={-1}
            className="column-name"
          >
            File Name
          </span>
          <ColumnResizer />
        </div>
      </Column>
      <Column
        id="size"
        width={80}
      >
        Size
      </Column>
      <Column
        id="date"
        minWidth={100}
      >
        <div className="flex-wrapper">
          <span
            tabIndex={-1}
            className="column-name"
          >
            Date
            Modified
          </span>
          <ColumnResizer />
        </div>
      </Column>    </TableHeader>
    <TableBody>
      <Row>
        <Cell>
          2022-Roadmap-Proposal-Revision-012822-Copy(2)
        </Cell>
        <Cell>
          214 KB
        </Cell>
        <Cell>
          November 27,
          2022 at
          4:56PM
        </Cell>
      </Row>
      <Row>
        <Cell>
          62259692_p0_master1200
        </Cell>
        <Cell>
          120 KB
        </Cell>
        <Cell>
          January 27,
          2021 at
          1:56AM
        </Cell>
      </Row>
    </TableBody>
  </Table>
</ResizableTableContainer>
```

Show CSS

```
.react-aria-ResizableTableContainer {
  max-width: 400px;
  overflow: auto;
  position: relative;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  background: var(--background-color);

  .react-aria-Table {
    border: none;
  }

  .flex-wrapper {
    display: flex;
    align-items: center;
  }

  .column-name,
  .react-aria-Button {
    --background-color: var(--overlay-background);
    flex: 1;
    font: inherit;
    text-align: start;
    color: inherit;
    overflow: hidden;
    text-overflow: ellipsis;
    border-color: transparent;
    transition: background 200ms;
    &[data-hovered] {
      background: var(--highlight-hover);
    }

    &[data-pressed] {
      background: var(--highlight-pressed);
      box-shadow: none;
    }

    &:focus-visible {
      outline: 2px solid var(--focus-ring-color);
    }
  }

  .react-aria-ColumnResizer {
    width: 15px;
    background-color: grey;
    height: 25px;
    flex: 0 0 auto;
    touch-action: none;
    box-sizing: border-box;
    border: 5px;
    border-style: none solid;
    border-color: transparent;
    background-clip: content-box;

    &[data-resizable-direction=both] {
      cursor: ew-resize;
    }

    &[data-resizable-direction=left] {
      cursor: e-resize;
    }

    &[data-resizable-direction=right] {
      cursor: w-resize;
    }

    &[data-focus-visible] {
      background-color: var(--focus-ring-color);
    }

    &[data-resizing] {
      border-color: var(--focus-ring-color);
      background-color: transparent;
    }
  }

  .react-aria-Column,
  .react-aria-Cell {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
```

```
.react-aria-ResizableTableContainer {
  max-width: 400px;
  overflow: auto;
  position: relative;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  background: var(--background-color);

  .react-aria-Table {
    border: none;
  }

  .flex-wrapper {
    display: flex;
    align-items: center;
  }

  .column-name,
  .react-aria-Button {
    --background-color: var(--overlay-background);
    flex: 1;
    font: inherit;
    text-align: start;
    color: inherit;
    overflow: hidden;
    text-overflow: ellipsis;
    border-color: transparent;
    transition: background 200ms;
    &[data-hovered] {
      background: var(--highlight-hover);
    }

    &[data-pressed] {
      background: var(--highlight-pressed);
      box-shadow: none;
    }

    &:focus-visible {
      outline: 2px solid var(--focus-ring-color);
    }
  }

  .react-aria-ColumnResizer {
    width: 15px;
    background-color: grey;
    height: 25px;
    flex: 0 0 auto;
    touch-action: none;
    box-sizing: border-box;
    border: 5px;
    border-style: none solid;
    border-color: transparent;
    background-clip: content-box;

    &[data-resizable-direction=both] {
      cursor: ew-resize;
    }

    &[data-resizable-direction=left] {
      cursor: e-resize;
    }

    &[data-resizable-direction=right] {
      cursor: w-resize;
    }

    &[data-focus-visible] {
      background-color: var(--focus-ring-color);
    }

    &[data-resizing] {
      border-color: var(--focus-ring-color);
      background-color: transparent;
    }
  }

  .react-aria-Column,
  .react-aria-Cell {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
```

```
.react-aria-ResizableTableContainer {
  max-width: 400px;
  overflow: auto;
  position: relative;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  background: var(--background-color);

  .react-aria-Table {
    border: none;
  }

  .flex-wrapper {
    display: flex;
    align-items: center;
  }

  .column-name,
  .react-aria-Button {
    --background-color: var(--overlay-background);
    flex: 1;
    font: inherit;
    text-align: start;
    color: inherit;
    overflow: hidden;
    text-overflow: ellipsis;
    border-color: transparent;
    transition: background 200ms;
    &[data-hovered] {
      background: var(--highlight-hover);
    }

    &[data-pressed] {
      background: var(--highlight-pressed);
      box-shadow: none;
    }

    &:focus-visible {
      outline: 2px solid var(--focus-ring-color);
    }
  }

  .react-aria-ColumnResizer {
    width: 15px;
    background-color: grey;
    height: 25px;
    flex: 0 0 auto;
    touch-action: none;
    box-sizing: border-box;
    border: 5px;
    border-style: none solid;
    border-color: transparent;
    background-clip: content-box;

    &[data-resizable-direction=both] {
      cursor: ew-resize;
    }

    &[data-resizable-direction=left] {
      cursor: e-resize;
    }

    &[data-resizable-direction=right] {
      cursor: w-resize;
    }

    &[data-focus-visible] {
      background-color: var(--focus-ring-color);
    }

    &[data-resizing] {
      border-color: var(--focus-ring-color);
      background-color: transparent;
    }
  }

  .react-aria-Column,
  .react-aria-Cell {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
```

Table accepts an `onResize` prop which is triggered whenever a column resizer is moved by the user. This can be used in combination with the `width` prop to update a Column's width in a controlled fashion. Table also accepts an `onResizeEnd` prop, which is triggered when the user finishes a column resize operation. Both events receive a Map object containing the widths of every column in the Table.

The example below uses `onResize` to update each of the Table's controlled column widths. It also saves the finalized column widths to `localStorage` in `onResizeEnd`, allowing the Table's state to be preserved between page loads and refreshes.

```
let initialColumns = [
  { name: 'File Name', id: 'file', width: '1fr' },
  { name: 'Size', id: 'size', width: 80 },
  { name: 'Date', id: 'date', width: 100 }
];

function ResizableTable() {
  let [columns, setColumns] = React.useState(() => {
    let localStorageWidths = localStorage.getItem('table-widths');
    if (localStorageWidths) {
      let widths = JSON.parse(localStorageWidths);
      return initialColumns.map((col) => ({ ...col, width: widths[col.id] }));
    } else {
      return initialColumns;
    }
  });

  let onResize = (widths) => {
    setColumns((columns) =>
      columns.map((col) => ({ ...col, width: widths.get(col.id) }))
    );
  };

  let onResizeEnd = (widths) => {
    localStorage.setItem(
      'table-widths',
      JSON.stringify(Object.fromEntries(widths))
    );
  };
  return (
    <ResizableTableContainer
      onResize={onResize}
      onResizeEnd={onResizeEnd}    >
      <Table aria-label="Table with controlled, resizable columns saved in local storage">
        <TableHeader columns={columns}>
          {(column) => (
            <Column isRowHeader={column.id === 'file'} width={column.width}>
              <div className="flex-wrapper">
                <span tabIndex={-1} className="column-name">{column.name}</span>
                <ColumnResizer />
              </div>
            </Column>
          )}
        </TableHeader>
        <TableBody>
          <Row>
            <Cell>2022-Roadmap-Proposal-Revision-012822-Copy(2)</Cell>
            <Cell>214 KB</Cell>
            <Cell>November 27, 2022 at 4:56PM</Cell>
          </Row>
          <Row>
            <Cell>62259692_p0_master1200</Cell>
            <Cell>120 KB</Cell>
            <Cell>January 27, 2021 at 1:56AM</Cell>
          </Row>
        </TableBody>
      </Table>
    </ResizableTableContainer>
  );
}

<ResizableTable />
```

```
let initialColumns = [
  { name: 'File Name', id: 'file', width: '1fr' },
  { name: 'Size', id: 'size', width: 80 },
  { name: 'Date', id: 'date', width: 100 }
];

function ResizableTable() {
  let [columns, setColumns] = React.useState(() => {
    let localStorageWidths = localStorage.getItem(
      'table-widths'
    );
    if (localStorageWidths) {
      let widths = JSON.parse(localStorageWidths);
      return initialColumns.map((col) => ({
        ...col,
        width: widths[col.id]
      }));
    } else {
      return initialColumns;
    }
  });

  let onResize = (widths) => {
    setColumns((columns) =>
      columns.map((col) => ({
        ...col,
        width: widths.get(col.id)
      }))
    );
  };

  let onResizeEnd = (widths) => {
    localStorage.setItem(
      'table-widths',
      JSON.stringify(Object.fromEntries(widths))
    );
  };
  return (
    <ResizableTableContainer
      onResize={onResize}
      onResizeEnd={onResizeEnd}    >
      <Table aria-label="Table with controlled, resizable columns saved in local storage">
        <TableHeader columns={columns}>
          {(column) => (
            <Column
              isRowHeader={column.id === 'file'}
              width={column.width}
            >
              <div className="flex-wrapper">
                <span tabIndex={-1} className="column-name">
                  {column.name}
                </span>
                <ColumnResizer />
              </div>
            </Column>
          )}
        </TableHeader>
        <TableBody>
          <Row>
            <Cell>
              2022-Roadmap-Proposal-Revision-012822-Copy(2)
            </Cell>
            <Cell>214 KB</Cell>
            <Cell>November 27, 2022 at 4:56PM</Cell>
          </Row>
          <Row>
            <Cell>62259692_p0_master1200</Cell>
            <Cell>120 KB</Cell>
            <Cell>January 27, 2021 at 1:56AM</Cell>
          </Row>
        </TableBody>
      </Table>
    </ResizableTableContainer>
  );
}

<ResizableTable />
```

```
let initialColumns = [
  {
    name: 'File Name',
    id: 'file',
    width: '1fr'
  },
  {
    name: 'Size',
    id: 'size',
    width: 80
  },
  {
    name: 'Date',
    id: 'date',
    width: 100
  }
];

function ResizableTable() {
  let [
    columns,
    setColumns
  ] = React.useState(
    () => {
      let localStorageWidths =
        localStorage
          .getItem(
            'table-widths'
          );
      if (
        localStorageWidths
      ) {
        let widths = JSON
          .parse(
            localStorageWidths
          );
        return initialColumns
          .map(
            (col) => ({
              ...col,
              width:
                widths[
                  col.id
                ]
            })
          );
      } else {
        return initialColumns;
      }
    }
  );

  let onResize = (
    widths
  ) => {
    setColumns(
      (columns) =>
        columns.map(
          (col) => ({
            ...col,
            width: widths
              .get(
                col.id
              )
          })
        )
    );
  };

  let onResizeEnd = (
    widths
  ) => {
    localStorage.setItem(
      'table-widths',
      JSON.stringify(
        Object
          .fromEntries(
            widths
          )
      )
    );
  };
  return (
    <ResizableTableContainer
      onResize={onResize}
      onResizeEnd={onResizeEnd}    >
      <Table aria-label="Table with controlled, resizable columns saved in local storage">
        <TableHeader
          columns={columns}
        >
          {(column) => (
            <Column
              isRowHeader={column
                .id ===
                'file'}
              width={column
                .width}
            >
              <div className="flex-wrapper">
                <span
                  tabIndex={-1}
                  className="column-name"
                >
                  {column
                    .name}
                </span>
                <ColumnResizer />
              </div>
            </Column>
          )}
        </TableHeader>
        <TableBody>
          <Row>
            <Cell>
              2022-Roadmap-Proposal-Revision-012822-Copy(2)
            </Cell>
            <Cell>
              214 KB
            </Cell>
            <Cell>
              November
              27, 2022 at
              4:56PM
            </Cell>
          </Row>
          <Row>
            <Cell>
              62259692_p0_master1200
            </Cell>
            <Cell>
              120 KB
            </Cell>
            <Cell>
              January 27,
              2021 at
              1:56AM
            </Cell>
          </Row>
        </TableBody>
      </Table>
    </ResizableTableContainer>
  );
}

<ResizableTable />
```

### Column header menu[#](#column-header-menu)

The `Column` component exposes a `startResize` function as part of its render props which allows initiating column resizing programmatically. In addition, sorting can also be performed using the `sort` function. This enables you to create a dropdown menu that the user can use to sort or resize a column, along with any other custom actions you may have. Using a menu to initiate column resizing provides a larger hit area for touch screen users.

This example shows how to create a reusable component that wraps `<Column>` to include a menu with sorting and resizing functionality.

```
import {Button, Menu, MenuItem, MenuTrigger, Popover} from 'react-aria-components';

interface ResizableTableColumnProps<T> extends Omit<ColumnProps, 'children'> {
  children: React.ReactNode;
}

function ResizableTableColumn<T extends object>(
  props: ResizableTableColumnProps<T>
) {
  return (
    <Column {...props}>
      {({ startResize, sort, allowsSorting, sortDirection }) => (
        <div className="flex-wrapper">
          <MenuTrigger>
            <Button>{props.children}</Button>
            <Popover>
              <Menu
                onAction={(action) => {
                  if (action === 'sortAscending') {
                    sort('ascending');
                  } else if (action === 'sortDescending') {
                    sort('descending');
                  } else if (action === 'resize') {
                    startResize();
                  }
                }}
              >
                <MenuItem id="sortAscending">Sort Ascending</MenuItem>
                <MenuItem id="sortDescending">Sort Descending</MenuItem>
                <MenuItem id="resize">Resize</MenuItem>
              </Menu>
            </Popover>
          </MenuTrigger>
          {allowsSorting && (
            <span aria-hidden="true" className="sort-indicator">
              {sortDirection === 'ascending'
                ? <ArrowUp size={14} />
                : <ArrowDown size={14} />}
            </span>
          )}
          <ColumnResizer />
        </div>
      )}
    </Column>
  );
}
```

```
import {
  Button,
  Menu,
  MenuItem,
  MenuTrigger,
  Popover
} from 'react-aria-components';

interface ResizableTableColumnProps<T>
  extends Omit<ColumnProps, 'children'> {
  children: React.ReactNode;
}

function ResizableTableColumn<T extends object>(
  props: ResizableTableColumnProps<T>
) {
  return (
    <Column {...props}>
      {(
        { startResize, sort, allowsSorting, sortDirection }
      ) => (
        <div className="flex-wrapper">
          <MenuTrigger>
            <Button>{props.children}</Button>
            <Popover>
              <Menu
                onAction={(action) => {
                  if (action === 'sortAscending') {
                    sort('ascending');
                  } else if (action === 'sortDescending') {
                    sort('descending');
                  } else if (action === 'resize') {
                    startResize();
                  }
                }}
              >
                <MenuItem id="sortAscending">
                  Sort Ascending
                </MenuItem>
                <MenuItem id="sortDescending">
                  Sort Descending
                </MenuItem>
                <MenuItem id="resize">Resize</MenuItem>
              </Menu>
            </Popover>
          </MenuTrigger>
          {allowsSorting && (
            <span
              aria-hidden="true"
              className="sort-indicator"
            >
              {sortDirection === 'ascending'
                ? <ArrowUp size={14} />
                : <ArrowDown size={14} />}
            </span>
          )}
          <ColumnResizer />
        </div>
      )}
    </Column>
  );
}
```

```
import {
  Button,
  Menu,
  MenuItem,
  MenuTrigger,
  Popover
} from 'react-aria-components';

interface ResizableTableColumnProps<
  T
> extends
  Omit<
    ColumnProps,
    'children'
  > {
  children:
    React.ReactNode;
}

function ResizableTableColumn<
  T extends object
>(
  props:
    ResizableTableColumnProps<
      T
    >
) {
  return (
    <Column {...props}>
      {(
        {
          startResize,
          sort,
          allowsSorting,
          sortDirection
        }
      ) => (
        <div className="flex-wrapper">
          <MenuTrigger>
            <Button>
              {props
                .children}
            </Button>
            <Popover>
              <Menu
                onAction={(
                  action
                ) => {
                  if (
                    action ===
                      'sortAscending'
                  ) {
                    sort(
                      'ascending'
                    );
                  } else if (
                    action ===
                      'sortDescending'
                  ) {
                    sort(
                      'descending'
                    );
                  } else if (
                    action ===
                      'resize'
                  ) {
                    startResize();
                  }
                }}
              >
                <MenuItem id="sortAscending">
                  Sort
                  Ascending
                </MenuItem>
                <MenuItem id="sortDescending">
                  Sort
                  Descending
                </MenuItem>
                <MenuItem id="resize">
                  Resize
                </MenuItem>
              </Menu>
            </Popover>
          </MenuTrigger>
          {allowsSorting &&
            (
              <span
                aria-hidden="true"
                className="sort-indicator"
              >
                {sortDirection ===
                    'ascending'
                  ? (
                    <ArrowUp
                      size={14}
                    />
                  )
                  : (
                    <ArrowDown
                      size={14}
                    />
                  )}
              </span>
            )}
          <ColumnResizer />
        </div>
      )}
    </Column>
  );
}
```

We can now use this component in place of `<Column>` to render a table with support for both resizing and sorting columns using a dropdown menu.

```
import type {SortDescriptor} from 'react-aria-components';

function Example() {
  let [sortDescriptor, setSortDescriptor] = React.useState<SortDescriptor>({
    column: 'file',
    direction: 'ascending'
  });

  let items = [
    // ...
  ].sort((a, b) => {
    let d = a[sortDescriptor.column].localeCompare(b[sortDescriptor.column]);
    return sortDescriptor.direction === 'descending' ? -d : d;
  });

  return (
    <ResizableTableContainer>
      <Table
        aria-label="Table with resizable columns"
        sortDescriptor={sortDescriptor}
        onSortChange={setSortDescriptor}
      >
        <TableHeader>
          <ResizableTableColumn id="file" isRowHeader allowsSorting>
            File Name
          </ResizableTableColumn>
          <ResizableTableColumn id="size" allowsSorting>
            Size
          </ResizableTableColumn>
          <ResizableTableColumn id="date" allowsSorting>
            Date Modified
          </ResizableTableColumn>
        </TableHeader>
        <TableBody items={items}>
          {(item) => (
            <Row>
              <Cell>{item.file}</Cell>
              <Cell>{item.size}</Cell>
              <Cell>{item.date}</Cell>
            </Row>
          )}
        </TableBody>
      </Table>
    </ResizableTableContainer>
  );
}
```

```
import type {SortDescriptor} from 'react-aria-components';

function Example() {
  let [sortDescriptor, setSortDescriptor] = React.useState<
    SortDescriptor
  >({
    column: 'file',
    direction: 'ascending'
  });

  let items = [
    // ...
  ].sort((a, b) => {
    let d = a[sortDescriptor.column].localeCompare(
      b[sortDescriptor.column]
    );
    return sortDescriptor.direction === 'descending'
      ? -d
      : d;
  });

  return (
    <ResizableTableContainer>
      <Table
        aria-label="Table with resizable columns"
        sortDescriptor={sortDescriptor}
        onSortChange={setSortDescriptor}
      >
        <TableHeader>
          <ResizableTableColumn
            id="file"
            isRowHeader
            allowsSorting
          >
            File Name
          </ResizableTableColumn>
          <ResizableTableColumn id="size" allowsSorting>
            Size
          </ResizableTableColumn>
          <ResizableTableColumn id="date" allowsSorting>
            Date Modified
          </ResizableTableColumn>
        </TableHeader>
        <TableBody items={items}>
          {(item) => (
            <Row>
              <Cell>{item.file}</Cell>
              <Cell>{item.size}</Cell>
              <Cell>{item.date}</Cell>
            </Row>
          )}
        </TableBody>
      </Table>
    </ResizableTableContainer>
  );
}
```

```
import type {SortDescriptor} from 'react-aria-components';

function Example() {
  let [
    sortDescriptor,
    setSortDescriptor
  ] = React.useState<
    SortDescriptor
  >({
    column: 'file',
    direction:
      'ascending'
  });

  let items = [
    // ...
  ].sort((a, b) => {
    let d =
      a[
        sortDescriptor
          .column
      ].localeCompare(
        b[
          sortDescriptor
            .column
        ]
      );
    return sortDescriptor
        .direction ===
        'descending'
      ? -d
      : d;
  });

  return (
    <ResizableTableContainer>
      <Table
        aria-label="Table with resizable columns"
        sortDescriptor={sortDescriptor}
        onSortChange={setSortDescriptor}
      >
        <TableHeader>
          <ResizableTableColumn
            id="file"
            isRowHeader
            allowsSorting
          >
            File Name
          </ResizableTableColumn>
          <ResizableTableColumn
            id="size"
            allowsSorting
          >
            Size
          </ResizableTableColumn>
          <ResizableTableColumn
            id="date"
            allowsSorting
          >
            Date Modified
          </ResizableTableColumn>
        </TableHeader>
        <TableBody
          items={items}
        >
          {(item) => (
            <Row>
              <Cell>
                {item
                  .file}
              </Cell>
              <Cell>
                {item
                  .size}
              </Cell>
              <Cell>
                {item
                  .date}
              </Cell>
            </Row>
          )}
        </TableBody>
      </Table>
    </ResizableTableContainer>
  );
}
```

## Drag and drop[#](#drag-and-drop)

* * *

Table supports drag and drop interactions when the `dragAndDropHooks` prop is provided using the `[useDragAndDrop](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/useDragAndDrop.tsx:useDragAndDrop)` hook. Users can drop data on the table as a whole, on individual rows, insert new items between existing rows, or reorder rows.

React Aria supports traditional mouse and touch based drag and drop, but also implements keyboard and screen reader friendly interactions. Users can press Enter on a draggable element to enter drag and drop mode. Then, they can press Tab to navigate between drop targets. A table is treated as a single drop target, so that users can easily tab past it to get to the next drop target. Within a table, keys such as ArrowDown and ArrowUp can be used to select a _drop position_, such as on an row, or between rows.

Draggable rows must include a focusable drag handle using a `<Button slot="drag">`. This enables keyboard and screen reader users to initiate drag and drop. The `MyRow` component defined in the [reusable wrappers](#reusable-wrappers) section above includes this as an extra column automatically when the table allows dragging.

See the [drag and drop introduction](https://react-spectrum.adobe.com/react-aria/dnd.html) to learn more.

This example shows a basic table that allows users to reorder rows via drag and drop. This is enabled using the `onReorder` event handler, provided to the `useDragAndDrop` hook. The `getItems` function must also be implemented for items to become draggable. [See below](#drag-data) for more details.

This uses [useListData](https://react-spectrum.adobe.com/react-stately/useListData.html) from React Stately to manage the item list. Note that `useListData` is a convenience hook, not a requirement. You can manage your state however you wish.

```
import {useListData} from 'react-stately';
import {useDragAndDrop, Button} from 'react-aria-components';
import {GripVertical} from 'lucide-react';

interface FileItem {
  id: number,
  name: string,
  date: string,
  type: string
}

function Example() {
  let list = useListData({
    initialItems: [
      {id: 1, name: 'Games', date: '6/7/2020', type: 'File folder'},
      {id: 2, name: 'Program Files', date: '4/7/2021', type: 'File folder'},
      {id: 3, name: 'bootmgr', date: '11/20/2010', type: 'System file'},
      {id: 4, name: 'log.txt', date: '1/18/2016', type: 'Text Document'}
    ]
  });

  let {dragAndDropHooks} = useDragAndDrop<FileItem>({
    getItems: (keys, items) => items.map(item => ({
      'text/plain': item.name
    })),
    onReorder(e) {
      if (e.target.dropPosition === 'before') {
        list.moveBefore(e.target.key, e.keys);
      } else if (e.target.dropPosition === 'after') {
        list.moveAfter(e.target.key, e.keys);
      }
    }
  });
  return (
    <Table
      aria-label="Files"
      selectionMode="multiple"
      dragAndDropHooks={dragAndDropHooks}    >
      <TableHeader>
        <Column></Column>
        <Column><MyCheckbox slot="selection" /></Column>
        <Column isRowHeader>Name</Column>
        <Column>Type</Column>
        <Column>Date Modified</Column>
      </TableHeader>
      <TableBody items={list.items}>
        {item => (
          <Row>
            <Cell><Button slot="drag"><GripVertical size={18} /></Button></Cell>            <Cell><MyCheckbox slot="selection" /></Cell>
            <Cell>{item.name}</Cell>
            <Cell>{item.type}</Cell>
            <Cell>{item.date}</Cell>
          </Row>
        )}
      </TableBody>
    </Table>
  );
}
```

```
import {useListData} from 'react-stately';
import {
  Button,
  useDragAndDrop
} from 'react-aria-components';
import {GripVertical} from 'lucide-react';

interface FileItem {
  id: number;
  name: string;
  date: string;
  type: string;
}

function Example() {
  let list = useListData({
    initialItems: [
      {
        id: 1,
        name: 'Games',
        date: '6/7/2020',
        type: 'File folder'
      },
      {
        id: 2,
        name: 'Program Files',
        date: '4/7/2021',
        type: 'File folder'
      },
      {
        id: 3,
        name: 'bootmgr',
        date: '11/20/2010',
        type: 'System file'
      },
      {
        id: 4,
        name: 'log.txt',
        date: '1/18/2016',
        type: 'Text Document'
      }
    ]
  });

  let { dragAndDropHooks } = useDragAndDrop<FileItem>({
    getItems: (keys, items) =>
      items.map((item) => ({
        'text/plain': item.name
      })),
    onReorder(e) {
      if (e.target.dropPosition === 'before') {
        list.moveBefore(e.target.key, e.keys);
      } else if (e.target.dropPosition === 'after') {
        list.moveAfter(e.target.key, e.keys);
      }
    }
  });
  return (
    <Table
      aria-label="Files"
      selectionMode="multiple"
      dragAndDropHooks={dragAndDropHooks}    >
      <TableHeader>
        <Column></Column>
        <Column>
          <MyCheckbox slot="selection" />
        </Column>
        <Column isRowHeader>Name</Column>
        <Column>Type</Column>
        <Column>Date Modified</Column>
      </TableHeader>
      <TableBody items={list.items}>
        {(item) => (
          <Row>
            <Cell>
              <Button slot="drag">
                <GripVertical size={18} />
              </Button>
            </Cell>            <Cell>
              <MyCheckbox slot="selection" />
            </Cell>
            <Cell>{item.name}</Cell>
            <Cell>{item.type}</Cell>
            <Cell>{item.date}</Cell>
          </Row>
        )}
      </TableBody>
    </Table>
  );
}
```

```
import {useListData} from 'react-stately';
import {
  Button,
  useDragAndDrop
} from 'react-aria-components';
import {GripVertical} from 'lucide-react';

interface FileItem {
  id: number;
  name: string;
  date: string;
  type: string;
}

function Example() {
  let list = useListData(
    {
      initialItems: [
        {
          id: 1,
          name: 'Games',
          date:
            '6/7/2020',
          type:
            'File folder'
        },
        {
          id: 2,
          name:
            'Program Files',
          date:
            '4/7/2021',
          type:
            'File folder'
        },
        {
          id: 3,
          name:
            'bootmgr',
          date:
            '11/20/2010',
          type:
            'System file'
        },
        {
          id: 4,
          name:
            'log.txt',
          date:
            '1/18/2016',
          type:
            'Text Document'
        }
      ]
    }
  );

  let {
    dragAndDropHooks
  } = useDragAndDrop<
    FileItem
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
    <Table
      aria-label="Files"
      selectionMode="multiple"
      dragAndDropHooks={dragAndDropHooks}    >
      <TableHeader>
        <Column></Column>
        <Column>
          <MyCheckbox slot="selection" />
        </Column>
        <Column
          isRowHeader
        >
          Name
        </Column>
        <Column>
          Type
        </Column>
        <Column>
          Date Modified
        </Column>
      </TableHeader>
      <TableBody
        items={list
          .items}
      >
        {(item) => (
          <Row>
            <Cell>
              <Button slot="drag">
                <GripVertical
                  size={18}
                />
              </Button>
            </Cell>            <Cell>
              <MyCheckbox slot="selection" />
            </Cell>
            <Cell>
              {item.name}
            </Cell>
            <Cell>
              {item.type}
            </Cell>
            <Cell>
              {item.date}
            </Cell>
          </Row>
        )}
      </TableBody>
    </Table>
  );
}
```

Show CSS

```
.react-aria-Row {
  &[data-dragging] {
    opacity: 0.6;
    transform: translateZ(0);
  }

  [slot=drag] {
    all: unset;
    width: 15px;
    height: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

    &[data-focus-visible] {
      border-radius: 4px;
      outline: 2px solid var(--focus-ring-color);
    }
  }
}

.react-aria-DropIndicator[data-drop-target] {
  outline: 1px solid var(--highlight-background);
  transform: translateZ(0);
}
```

```
.react-aria-Row {
  &[data-dragging] {
    opacity: 0.6;
    transform: translateZ(0);
  }

  [slot=drag] {
    all: unset;
    width: 15px;
    height: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

    &[data-focus-visible] {
      border-radius: 4px;
      outline: 2px solid var(--focus-ring-color);
    }
  }
}

.react-aria-DropIndicator[data-drop-target] {
  outline: 1px solid var(--highlight-background);
  transform: translateZ(0);
}
```

```
.react-aria-Row {
  &[data-dragging] {
    opacity: 0.6;
    transform: translateZ(0);
  }

  [slot=drag] {
    all: unset;
    width: 15px;
    height: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

    &[data-focus-visible] {
      border-radius: 4px;
      outline: 2px solid var(--focus-ring-color);
    }
  }
}

.react-aria-DropIndicator[data-drop-target] {
  outline: 1px solid var(--highlight-background);
  transform: translateZ(0);
}
```

By default, the drag preview shown under the user's pointer or finger is a copy of the original element that started the drag. A custom preview can be rendered by implementing the `renderDragPreview` function, passed to `useDragAndDrop`. This receives the dragged data that was returned by `getItems`, and returns a rendered preview for those items.

This example renders a custom drag preview which shows the number of items being dragged.

```
import {useListData} from 'react-stately';
import {useDragAndDrop} from 'react-aria-components';

function Example() {
  let {dragAndDropHooks} = useDragAndDrop<FileItem>({
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
  let {dragAndDropHooks} = useDragAndDrop<FileItem>({
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
    FileItem
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
  color: white;
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
  color: white;
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
  color: white;
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
function DraggableTable() {
  let items = [
    {id: 1, name: 'Charizard', type: 'Fire, Flying', level: '67'},
    {id: 2, name: 'Blastoise', type: 'Water', level: '56'},
    {id: 3, name: 'Venusaur', type: 'Grass, Poison', level: '83'},
    {id: 4, name: 'Pikachu', type: 'Electric', level: '100'}
  ];

  let { dragAndDropHooks } = useDragAndDrop<Pokemon>({
    getItems(keys, items) {
      return items.map(item => {
        return {
          'text/plain': `${item.name} – ${item.type}`,
          'text/html': `<strong>${item.name}</strong> – <em>${item.type}</em>`,
          'pokemon': JSON.stringify(item)
        };
      });
    },  });

  return (
    <PokemonTable
      items={items}
      selectionMode="multiple"
      dragAndDropHooks={dragAndDropHooks} />
  );
}

<div style={{display: 'flex', gap: 12, flexWrap: 'wrap'}}>
  <DraggableTable />
  {/* see below */}
  <DroppableTable />
</div>
```

```
function DraggableTable() {
  let items = [
    {
      id: 1,
      name: 'Charizard',
      type: 'Fire, Flying',
      level: '67'
    },
    {
      id: 2,
      name: 'Blastoise',
      type: 'Water',
      level: '56'
    },
    {
      id: 3,
      name: 'Venusaur',
      type: 'Grass, Poison',
      level: '83'
    },
    {
      id: 4,
      name: 'Pikachu',
      type: 'Electric',
      level: '100'
    }
  ];

  let { dragAndDropHooks } = useDragAndDrop<Pokemon>({
    getItems(keys, items) {
      return items.map((item) => {
        return {
          'text/plain': `${item.name} – ${item.type}`,
          'text/html':
            `<strong>${item.name}</strong> – <em>${item.type}</em>`,
          'pokemon': JSON.stringify(item)
        };
      });
    }  });

  return (
    <PokemonTable
      items={items}
      selectionMode="multiple"
      dragAndDropHooks={dragAndDropHooks}
    />
  );
}

<div
  style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}
>
  <DraggableTable />
  {/* see below */}
  <DroppableTable />
</div>
```

```
function DraggableTable() {
  let items = [
    {
      id: 1,
      name: 'Charizard',
      type:
        'Fire, Flying',
      level: '67'
    },
    {
      id: 2,
      name: 'Blastoise',
      type: 'Water',
      level: '56'
    },
    {
      id: 3,
      name: 'Venusaur',
      type:
        'Grass, Poison',
      level: '83'
    },
    {
      id: 4,
      name: 'Pikachu',
      type: 'Electric',
      level: '100'
    }
  ];

  let {
    dragAndDropHooks
  } = useDragAndDrop<
    Pokemon
  >({
    getItems(
      keys,
      items
    ) {
      return items.map(
        (item) => {
          return {
            'text/plain':
              `${item.name} – ${item.type}`,
            'text/html':
              `<strong>${item.name}</strong> – <em>${item.type}</em>`,
            'pokemon':
              JSON
                .stringify(
                  item
                )
          };
        }
      );
    }  });

  return (
    <PokemonTable
      items={items}
      selectionMode="multiple"
      dragAndDropHooks={dragAndDropHooks}
    />
  );
}

<div
  style={{
    display: 'flex',
    gap: 12,
    flexWrap: 'wrap'
  }}
>
  <DraggableTable />
  {/* see below */}
  <DroppableTable />
</div>
```

Dropping on the Table as a whole can be enabled using the `onRootDrop` event. When a valid drag hovers over the Table, it receives the `isDropTarget` state and can be styled using the `[data-drop-target]` CSS selector.

```
import {isTextDropItem} from 'react-aria-components';

function Example() {
  let [items, setItems] = React.useState<Pokemon[]>([]);

  let { dragAndDropHooks } = useDragAndDrop({
    async onRootDrop(e) {
      let items = await Promise.all(
        e.items
          .filter(isTextDropItem)
          .map(async item => (
        JSON.parse(await item.getText('pokemon'))
      )));
      setItems(items);
    }  });

  return (
    <div style={{display: 'flex', gap: 12, flexWrap: 'wrap'}}>
      <DraggableTable />
      <PokemonTable
        items={items}
        dragAndDropHooks={dragAndDropHooks}
        renderEmptyState={() => 'Drop items here'} />
    </div>
  );
}
```

```
import {isTextDropItem} from 'react-aria-components';

function Example() {
  let [items, setItems] = React.useState<Pokemon[]>([]);

  let { dragAndDropHooks } = useDragAndDrop({
    async onRootDrop(e) {
      let items = await Promise.all(
        e.items
          .filter(isTextDropItem)
          .map(async (item) => (
            JSON.parse(await item.getText('pokemon'))
          ))
      );
      setItems(items);
    }  });

  return (
    <div
      style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}
    >
      <DraggableTable />
      <PokemonTable
        items={items}
        dragAndDropHooks={dragAndDropHooks}
        renderEmptyState={() => 'Drop items here'}
      />
    </div>
  );
}
```

```
import {isTextDropItem} from 'react-aria-components';

function Example() {
  let [items, setItems] =
    React.useState<
      Pokemon[]
    >([]);

  let {
    dragAndDropHooks
  } = useDragAndDrop({
    async onRootDrop(e) {
      let items =
        await Promise
          .all(
            e.items
              .filter(
                isTextDropItem
              )
              .map(
                async (item) => (
                  JSON
                    .parse(
                      await item
                        .getText(
                          'pokemon'
                        )
                    )
                )
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
      <DraggableTable />
      <PokemonTable
        items={items}
        dragAndDropHooks={dragAndDropHooks}
        renderEmptyState={() =>
          'Drop items here'}
      />
    </div>
  );
}
```

Show CSS

```
.react-aria-Table[data-drop-target] {
  outline: 2px solid var(--highlight-background);
  outline-offset: -1px;
  background: var(--highlight-overlay)
}
```

```
.react-aria-Table[data-drop-target] {
  outline: 2px solid var(--highlight-background);
  outline-offset: -1px;
  background: var(--highlight-overlay)
}
```

```
.react-aria-Table[data-drop-target] {
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
      <DraggableTable />
      <FileTable dragAndDropHooks={dragAndDropHooks} />
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
      <DraggableTable />
      <FileTable dragAndDropHooks={dragAndDropHooks} />
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
      <DraggableTable />
      <FileTable
        dragAndDropHooks={dragAndDropHooks}
      />
    </div>
  );
}
```

Show CSS

```
.react-aria-Row[data-drop-target] {
  outline: 2px solid var(--highlight-background);
  background: var(--highlight-overlay)
}
```

```
.react-aria-Row[data-drop-target] {
  outline: 2px solid var(--highlight-background);
  background: var(--highlight-overlay)
}
```

```
.react-aria-Row[data-drop-target] {
  outline: 2px solid var(--highlight-background);
  background: var(--highlight-overlay)
}
```

Dropping between items can be enabled using the `onInsert` event. Table renders a `[DropIndicator](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/DragAndDrop.tsx:DropIndicator)` between items to indicate the insertion position, which can be styled using the `.react-aria-DropIndicator` selector. When it is active, it receives the `[data-drop-target]` state.

```
import {isTextDropItem} from 'react-aria-components';

function Example() {
  let list = useListData({
    initialItems: [
      { id: 1, name: 'Bulbasaur', type: 'Grass, Poison', level: '65' },
      { id: 2, name: 'Charmander', type: 'Fire', level: '89' },
      { id: 3, name: 'Squirtle', type: 'Water', level: '77' },
      { id: 4, name: 'Caterpie', type: 'Bug', level: '46' }
    ]
  });

  let { dragAndDropHooks } = useDragAndDrop({
    async onInsert(e) {
      let items = await Promise.all(
        e.items.filter(isTextDropItem).map(async (item) => {
          let { name, type, level } = JSON.parse(await item.getText('pokemon'));
          return { id: Math.random(), name, type, level };
        })
      );

      if (e.target.dropPosition === 'before') {
        list.insertBefore(e.target.key, ...items);
      } else if (e.target.dropPosition === 'after') {
        list.insertAfter(e.target.key, ...items);
      }
    }  });

  return (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
      <DraggableTable />
      <PokemonTable items={list.items} dragAndDropHooks={dragAndDropHooks} />
    </div>
  );
}
```

```
import {isTextDropItem} from 'react-aria-components';

function Example() {
  let list = useListData({
    initialItems: [
      {
        id: 1,
        name: 'Bulbasaur',
        type: 'Grass, Poison',
        level: '65'
      },
      {
        id: 2,
        name: 'Charmander',
        type: 'Fire',
        level: '89'
      },
      {
        id: 3,
        name: 'Squirtle',
        type: 'Water',
        level: '77'
      },
      { id: 4, name: 'Caterpie', type: 'Bug', level: '46' }
    ]
  });

  let { dragAndDropHooks } = useDragAndDrop({
    async onInsert(e) {
      let items = await Promise.all(
        e.items.filter(isTextDropItem).map(async (item) => {
          let { name, type, level } = JSON.parse(
            await item.getText('pokemon')
          );
          return { id: Math.random(), name, type, level };
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
      <DraggableTable />
      <PokemonTable
        items={list.items}
        dragAndDropHooks={dragAndDropHooks}
      />
    </div>
  );
}
```

```
import {isTextDropItem} from 'react-aria-components';

function Example() {
  let list = useListData(
    {
      initialItems: [
        {
          id: 1,
          name:
            'Bulbasaur',
          type:
            'Grass, Poison',
          level: '65'
        },
        {
          id: 2,
          name:
            'Charmander',
          type: 'Fire',
          level: '89'
        },
        {
          id: 3,
          name:
            'Squirtle',
          type: 'Water',
          level: '77'
        },
        {
          id: 4,
          name:
            'Caterpie',
          type: 'Bug',
          level: '46'
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
            e.items
              .filter(
                isTextDropItem
              ).map(
                async (item) => {
                  let {
                    name,
                    type,
                    level
                  } =
                    JSON
                      .parse(
                        await item
                          .getText(
                            'pokemon'
                          )
                      );
                  return {
                    id:
                      Math
                        .random(),
                    name,
                    type,
                    level
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
      <DraggableTable />
      <PokemonTable
        items={list
          .items}
        dragAndDropHooks={dragAndDropHooks}
      />
    </div>
  );
}
```

Show CSS

```
.react-aria-DropIndicator[data-drop-target] {
  outline: 1px solid var(--highlight-background);
  transform: translateZ(0);
}
```

```
.react-aria-DropIndicator[data-drop-target] {
  outline: 1px solid var(--highlight-background);
  transform: translateZ(0);
}
```

```
.react-aria-DropIndicator[data-drop-target] {
  outline: 1px solid var(--highlight-background);
  transform: translateZ(0);
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
  transform: translateZ(0);
}
```

```
.my-drop-indicator.active {
  outline: 1px solid #e70073;
  transform: translateZ(0);
}
```

```
.my-drop-indicator.active {
  outline: 1px solid #e70073;
  transform: translateZ(0);
}
```

`Table` allows users to drop one or more **drag items**, each of which contains data to be transferred from the drag source to drop target. There are three kinds of drag items:

-   `text` – represents data inline as a string in one or more formats
-   `file` – references a file on the user's device
-   `directory` – references the contents of a directory

A `[TextDropItem](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dnd.d.ts:TextDropItem)` represents textual data in one or more different formats. These may be either standard [mime types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types) or custom app-specific formats. Representing data in multiple formats allows drop targets both within and outside an application to choose data in a format that they understand. For example, a complex object may be serialized in a custom format for use within an application, with fallbacks in plain text and/or rich HTML that can be used when a user drops data from an external application.

The example below uses the `acceptedDragTypes` prop to accept items that include a custom app-specific type, which is retrieved using the item's `getText` method. The same draggable component as used in the above example is used here, but rather than displaying the plain text representation, the custom format is used instead. When `acceptedDragTypes` is specified, the dropped items are filtered to include only items that include the accepted types.

```
import {isTextDropItem} from 'react-aria-components';

function DroppableTable() {
  let [items, setItems] = React.useState<Pokemon[]>([]);

  let { dragAndDropHooks } = useDragAndDrop({
    acceptedDragTypes: ['pokemon'],
    async onRootDrop(e) {
      let items = await Promise.all(
        e.items
          .filter(isTextDropItem)
          .map(async item => JSON.parse(await item.getText('pokemon')))
      );
      setItems(items);
    }  });

  return (
    <PokemonTable
      items={items}
      dragAndDropHooks={dragAndDropHooks}
      renderEmptyState={() => 'Drop items here'} />
  );
}

<div style={{display: 'flex', gap: 12, flexWrap: 'wrap'}}>
  {/* see above */}
  <DraggableTable />
  <DroppableTable />
</div>
```

```
import {isTextDropItem} from 'react-aria-components';

function DroppableTable() {
  let [items, setItems] = React.useState<Pokemon[]>([]);

  let { dragAndDropHooks } = useDragAndDrop({
    acceptedDragTypes: ['pokemon'],
    async onRootDrop(e) {
      let items = await Promise.all(
        e.items
          .filter(isTextDropItem)
          .map(async (item) =>
            JSON.parse(await item.getText('pokemon'))
          )
      );
      setItems(items);
    }  });

  return (
    <PokemonTable
      items={items}
      dragAndDropHooks={dragAndDropHooks}
      renderEmptyState={() => 'Drop items here'}
    />
  );
}

<div
  style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}
>
  {/* see above */}
  <DraggableTable />
  <DroppableTable />
</div>
```

```
import {isTextDropItem} from 'react-aria-components';

function DroppableTable() {
  let [items, setItems] =
    React.useState<
      Pokemon[]
    >([]);

  let {
    dragAndDropHooks
  } = useDragAndDrop({
    acceptedDragTypes: [
      'pokemon'
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
                          'pokemon'
                        )
                    )
              )
          );
      setItems(items);
    }  });

  return (
    <PokemonTable
      items={items}
      dragAndDropHooks={dragAndDropHooks}
      renderEmptyState={() =>
        'Drop items here'}
    />
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
  <DraggableTable />
  <DroppableTable />
</div>
```

A `[FileDropItem](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dnd.d.ts:FileDropItem)` references a file on the user's device. It includes the name and mime type of the file, and methods to read the contents as plain text, or retrieve a native [File](https://developer.mozilla.org/en-US/docs/Web/API/File) object which can be attached to form data for uploading.

This example accepts JPEG and PNG image files, and renders them by creating a local [object URL](https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL). When the list is empty, you can drop on the whole collection, and otherwise items can be inserted.

```
import {isFileDropItem} from 'react-aria-components';

interface ImageItem {
  id: number,
  url: string,
  name: string,
  type: string,
  lastModified: number
}

function Example() {
  let [items, setItems] = React.useState<ImageItem[]>([]);

  let { dragAndDropHooks } = useDragAndDrop({
    acceptedDragTypes: ['image/jpeg', 'image/png'],
    async onRootDrop(e) {
      let items = await Promise.all(
        e.items.filter(isFileDropItem).map(async item => {
          let file = await item.getFile();
          return {
            id: Math.random(),
            url: URL.createObjectURL(file),
            name: item.name,
            type: file.type,
            lastModified: file.lastModified
          };
        })
      );
      setItems(items);
    }  });

  return (
    <Table
      aria-label="Droppable table"
      dragAndDropHooks={dragAndDropHooks}>
      <TableHeader>
        <Column>Image</Column>
        <Column isRowHeader>Name</Column>
        <Column>Type</Column>
        <Column>Last Modified</Column>
      </TableHeader>
      <TableBody items={items} renderEmptyState={() => 'Drop images here'}>
        {item => (
          <Row>
            <Cell><img src={item.url} /></Cell>
            <Cell>{item.name}</Cell>
            <Cell>{item.type}</Cell>
            <Cell>{new Date(item.lastModified).toLocaleString()}</Cell>
          </Row>
        )}
      </TableBody>
    </Table>
  );
}
```

```
import {isFileDropItem} from 'react-aria-components';

interface ImageItem {
  id: number;
  url: string;
  name: string;
  type: string;
  lastModified: number;
}

function Example() {
  let [items, setItems] = React.useState<ImageItem[]>([]);

  let { dragAndDropHooks } = useDragAndDrop({
    acceptedDragTypes: ['image/jpeg', 'image/png'],
    async onRootDrop(e) {
      let items = await Promise.all(
        e.items.filter(isFileDropItem).map(async (item) => {
          let file = await item.getFile();
          return {
            id: Math.random(),
            url: URL.createObjectURL(file),
            name: item.name,
            type: file.type,
            lastModified: file.lastModified
          };
        })
      );
      setItems(items);
    }  });

  return (
    <Table
      aria-label="Droppable table"
      dragAndDropHooks={dragAndDropHooks}
    >
      <TableHeader>
        <Column>Image</Column>
        <Column isRowHeader>Name</Column>
        <Column>Type</Column>
        <Column>Last Modified</Column>
      </TableHeader>
      <TableBody
        items={items}
        renderEmptyState={() => 'Drop images here'}
      >
        {(item) => (
          <Row>
            <Cell>
              <img src={item.url} />
            </Cell>
            <Cell>{item.name}</Cell>
            <Cell>{item.type}</Cell>
            <Cell>
              {new Date(item.lastModified).toLocaleString()}
            </Cell>
          </Row>
        )}
      </TableBody>
    </Table>
  );
}
```

```
import {isFileDropItem} from 'react-aria-components';

interface ImageItem {
  id: number;
  url: string;
  name: string;
  type: string;
  lastModified: number;
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
                async (item) => {
                  let file =
                    await item
                      .getFile();
                  return {
                    id:
                      Math
                        .random(),
                    url:
                      URL
                        .createObjectURL(
                          file
                        ),
                    name:
                      item
                        .name,
                    type:
                      file
                        .type,
                    lastModified:
                      file
                        .lastModified
                  };
                }
              )
          );
      setItems(items);
    }  });

  return (
    <Table
      aria-label="Droppable table"
      dragAndDropHooks={dragAndDropHooks}
    >
      <TableHeader>
        <Column>
          Image
        </Column>
        <Column
          isRowHeader
        >
          Name
        </Column>
        <Column>
          Type
        </Column>
        <Column>
          Last Modified
        </Column>
      </TableHeader>
      <TableBody
        items={items}
        renderEmptyState={() =>
          'Drop images here'}
      >
        {(item) => (
          <Row>
            <Cell>
              <img
                src={item
                  .url}
              />
            </Cell>
            <Cell>
              {item.name}
            </Cell>
            <Cell>
              {item.type}
            </Cell>
            <Cell>
              {new Date(
                item
                  .lastModified
              ).toLocaleString()}
            </Cell>
          </Row>
        )}
      </TableBody>
    </Table>
  );
}
```

Show CSS

```
.react-aria-Cell img {
  height: 30px;
  width: 30px;
  object-fit: cover;
  display: block;
}
```

```
.react-aria-Cell img {
  height: 30px;
  width: 30px;
  object-fit: cover;
  display: block;
}
```

```
.react-aria-Cell img {
  height: 30px;
  width: 30px;
  object-fit: cover;
  display: block;
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
  name: string,
  kind: string,
  type: string
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
          kind: entry.kind,
          type: entry.kind === 'directory' ? 'Directory' : entry.type
        });
      }
      setFiles(files);
    }  });

  return (
    <Table
      aria-label="Droppable table"
      dragAndDropHooks={dragAndDropHooks}>
      <TableHeader>
        <Column>Kind</Column>
        <Column isRowHeader>Name</Column>
        <Column>Type</Column>
      </TableHeader>
      <TableBody items={files} renderEmptyState={() => 'Drop directory here'}>
        {item => (
          <Row id={item.name}>
            <Cell>{item.kind === 'directory' ? <Folder /> : <File />}</Cell>
            <Cell>{item.name}</Cell>
            <Cell>{item.type}</Cell>
          </Row>
        )}
      </TableBody>
    </Table>
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
  type: string;
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
          kind: entry.kind,
          type: entry.kind === 'directory'
            ? 'Directory'
            : entry.type
        });
      }
      setFiles(files);
    }  });

  return (
    <Table
      aria-label="Droppable table"
      dragAndDropHooks={dragAndDropHooks}
    >
      <TableHeader>
        <Column>Kind</Column>
        <Column isRowHeader>Name</Column>
        <Column>Type</Column>
      </TableHeader>
      <TableBody
        items={files}
        renderEmptyState={() => 'Drop directory here'}
      >
        {(item) => (
          <Row id={item.name}>
            <Cell>
              {item.kind === 'directory'
                ? <Folder />
                : <File />}
            </Cell>
            <Cell>{item.name}</Cell>
            <Cell>{item.type}</Cell>
          </Row>
        )}
      </TableBody>
    </Table>
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
  type: string;
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
            entry.kind,
          type:
            entry
                .kind ===
                'directory'
              ? 'Directory'
              : entry
                .type
        });
      }
      setFiles(files);
    }  });

  return (
    <Table
      aria-label="Droppable table"
      dragAndDropHooks={dragAndDropHooks}
    >
      <TableHeader>
        <Column>
          Kind
        </Column>
        <Column
          isRowHeader
        >
          Name
        </Column>
        <Column>
          Type
        </Column>
      </TableHeader>
      <TableBody
        items={files}
        renderEmptyState={() =>
          'Drop directory here'}
      >
        {(item) => (
          <Row
            id={item
              .name}
          >
            <Cell>
              {item
                  .kind ===
                  'directory'
                ? (
                  <Folder />
                )
                : (
                  <File />
                )}
            </Cell>
            <Cell>
              {item.name}
            </Cell>
            <Cell>
              {item.type}
            </Cell>
          </Row>
        )}
      </TableBody>
    </Table>
  );
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
      {id: 1, name: 'Charizard', type: 'Fire, Flying', level: '67'},
      {id: 2, name: 'Blastoise', type: 'Water', level: '56'},
      {id: 3, name: 'Venusaur', type: 'Grass, Poison', level: '83'},
      {id: 4, name: 'Pikachu', type: 'Electric', level: '100'}
    ]
  });

  let { dragAndDropHooks } = useDragAndDrop<Pokemon>({
    // ...
    onDragEnd(e) {
      if (e.dropOperation === 'move') {
        list.remove(...e.keys);
      }
    }  });

  return (
    <div style={{display: 'flex', gap: 12, flexWrap: 'wrap'}}>
      <PokemonTable
        items={list.items}
        selectionMode="multiple"
        dragAndDropHooks={dragAndDropHooks} />
      <DroppableTable />
    </div>
  );
}
```

```
function Example() {
  let list = useListData({
    initialItems: [
      {
        id: 1,
        name: 'Charizard',
        type: 'Fire, Flying',
        level: '67'
      },
      {
        id: 2,
        name: 'Blastoise',
        type: 'Water',
        level: '56'
      },
      {
        id: 3,
        name: 'Venusaur',
        type: 'Grass, Poison',
        level: '83'
      },
      {
        id: 4,
        name: 'Pikachu',
        type: 'Electric',
        level: '100'
      }
    ]
  });

  let { dragAndDropHooks } = useDragAndDrop<Pokemon>({
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
      <PokemonTable
        items={list.items}
        selectionMode="multiple"
        dragAndDropHooks={dragAndDropHooks}
      />
      <DroppableTable />
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
            'Charizard',
          type:
            'Fire, Flying',
          level: '67'
        },
        {
          id: 2,
          name:
            'Blastoise',
          type: 'Water',
          level: '56'
        },
        {
          id: 3,
          name:
            'Venusaur',
          type:
            'Grass, Poison',
          level: '83'
        },
        {
          id: 4,
          name:
            'Pikachu',
          type:
            'Electric',
          level: '100'
        }
      ]
    }
  );

  let {
    dragAndDropHooks
  } = useDragAndDrop<
    Pokemon
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
      <PokemonTable
        items={list
          .items}
        selectionMode="multiple"
        dragAndDropHooks={dragAndDropHooks}
      />
      <DroppableTable />
    </div>
  );
}
```

The drag source can also control which drop operations are allowed for the data. For example, if moving data is not allowed, and only copying is supported, the `getAllowedDropOperations` function could be implemented to indicate this. When you drag the element below, the cursor now shows the copy affordance by default, and pressing a modifier to switch drop operations results in the drop being canceled.

```
function Example() {
  // ...
  
  let { dragAndDropHooks } = useDragAndDrop<Pokemon>({
    // ...
    getAllowedDropOperations: () => ['copy']  });

  return (
    <div style={{display: 'flex', gap: 12, flexWrap: 'wrap'}}>
      <PokemonTable
        items={list.items}
        selectionMode="multiple"
        dragAndDropHooks={dragAndDropHooks} />
      <DroppableTable />
    </div>
  );
}
```

```
function Example() {
  // ...

  let { dragAndDropHooks } = useDragAndDrop<Pokemon>({
    // ...
    getAllowedDropOperations: () => ['copy']  });

  return (
    <div
      style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}
    >
      <PokemonTable
        items={list.items}
        selectionMode="multiple"
        dragAndDropHooks={dragAndDropHooks}
      />
      <DroppableTable />
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
    Pokemon
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
      <PokemonTable
        items={list
          .items}
        selectionMode="multiple"
        dragAndDropHooks={dragAndDropHooks}
      />
      <DroppableTable />
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

This example puts together many of the concepts described above, allowing users to drag items between tables bidirectionally. It also supports reordering items within the same table. When a table is empty, it accepts drops on the whole collection. `getDropOperation` ensures that items are always moved rather than copied, which avoids duplicate items.

```
import {isTextDropItem} from 'react-aria-components';

interface FileItem {
  id: string,
  name: string,
  type: string
}

interface DndTableProps {
  initialItems: FileItem[],
  'aria-label': string
}

function DndTable(props: DndTableProps) {
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
    <Table
      aria-label={props['aria-label']}
      selectionMode="multiple"
      selectedKeys={list.selectedKeys}
      onSelectionChange={list.setSelectedKeys}
      dragAndDropHooks={dragAndDropHooks}>
      <TableHeader>
        <Column />
        <Column><MyCheckbox slot="selection" /></Column>
        <Column>ID</Column>
        <Column isRowHeader>Name</Column>
        <Column>Type</Column>
      </TableHeader>
      <TableBody items={list.items} renderEmptyState={() => 'Drop items here'}>
        {item => (
          <Row>
            <Cell><Button slot="drag"><GripVertical size={18} /></Button></Cell>
            <Cell><MyCheckbox slot="selection" /></Cell>
            <Cell>{item.id}</Cell>
            <Cell>{item.name}</Cell>
            <Cell>{item.type}</Cell>
          </Row>
        )}
      </TableBody>
    </Table>
  );
}

<div style={{display: 'flex', gap: 12, flexWrap: 'wrap'}}>
  <DndTable
    initialItems={[
      { id: '1', type: 'file', name: 'Adobe Photoshop' },
      { id: '2', type: 'file', name: 'Adobe XD' },
      { id: '3', type: 'folder', name: 'Documents' },
      { id: '4', type: 'file', name: 'Adobe InDesign' },
      { id: '5', type: 'folder', name: 'Utilities' },
      { id: '6', type: 'file', name: 'Adobe AfterEffects' }
    ]}
    aria-label="First Table"
  />
  <DndTable
    initialItems={[
      { id: '7', type: 'folder', name: 'Pictures' },
      { id: '8', type: 'file', name: 'Adobe Fresco' },
      { id: '9', type: 'folder', name: 'Apps' },
      { id: '10', type: 'file', name: 'Adobe Illustrator' },
      { id: '11', type: 'file', name: 'Adobe Lightroom' },
      { id: '12', type: 'file', name: 'Adobe Dreamweaver' }
    ]}
    aria-label="Second Table"
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

interface DndTableProps {
  initialItems: FileItem[];
  'aria-label': string;
}

function DndTable(props: DndTableProps) {
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
    <Table
      aria-label={props['aria-label']}
      selectionMode="multiple"
      selectedKeys={list.selectedKeys}
      onSelectionChange={list.setSelectedKeys}
      dragAndDropHooks={dragAndDropHooks}
    >
      <TableHeader>
        <Column />
        <Column>
          <MyCheckbox slot="selection" />
        </Column>
        <Column>ID</Column>
        <Column isRowHeader>Name</Column>
        <Column>Type</Column>
      </TableHeader>
      <TableBody
        items={list.items}
        renderEmptyState={() => 'Drop items here'}
      >
        {(item) => (
          <Row>
            <Cell>
              <Button slot="drag">
                <GripVertical size={18} />
              </Button>
            </Cell>
            <Cell>
              <MyCheckbox slot="selection" />
            </Cell>
            <Cell>{item.id}</Cell>
            <Cell>{item.name}</Cell>
            <Cell>{item.type}</Cell>
          </Row>
        )}
      </TableBody>
    </Table>
  );
}

<div
  style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}
>
  <DndTable
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
    aria-label="First Table"
  />
  <DndTable
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
    aria-label="Second Table"
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

interface DndTableProps {
  initialItems:
    FileItem[];
  'aria-label': string;
}

function DndTable(
  props: DndTableProps
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
    <Table
      aria-label={props[
        'aria-label'
      ]}
      selectionMode="multiple"
      selectedKeys={list
        .selectedKeys}
      onSelectionChange={list
        .setSelectedKeys}
      dragAndDropHooks={dragAndDropHooks}
    >
      <TableHeader>
        <Column />
        <Column>
          <MyCheckbox slot="selection" />
        </Column>
        <Column>
          ID
        </Column>
        <Column
          isRowHeader
        >
          Name
        </Column>
        <Column>
          Type
        </Column>
      </TableHeader>
      <TableBody
        items={list
          .items}
        renderEmptyState={() =>
          'Drop items here'}
      >
        {(item) => (
          <Row>
            <Cell>
              <Button slot="drag">
                <GripVertical
                  size={18}
                />
              </Button>
            </Cell>
            <Cell>
              <MyCheckbox slot="selection" />
            </Cell>
            <Cell>
              {item.id}
            </Cell>
            <Cell>
              {item.name}
            </Cell>
            <Cell>
              {item.type}
            </Cell>
          </Row>
        )}
      </TableBody>
    </Table>
  );
}

<div
  style={{
    display: 'flex',
    gap: 12,
    flexWrap: 'wrap'
  }}
>
  <DndTable
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
    aria-label="First Table"
  />
  <DndTable
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
    aria-label="Second Table"
  />
</div>
```

* * *

Name

Type

Default

Description

`children`

`[ReactNode](https://reactjs.org/docs/rendering-elements.html)`

—

The elements that make up the table. Includes the TableHeader, TableBody, Columns, and Rows.

`selectionBehavior`

`[SelectionBehavior](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/selection.d.ts:SelectionBehavior)`

`"toggle"`

How multiple selection should behave in the collection.

`disabledBehavior`

`[DisabledBehavior](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/selection.d.ts:DisabledBehavior)`

`"selection"`

Whether `disabledKeys` applies to all interactions, or only selection.

`dragAndDropHooks`

`[DragAndDropHooks](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/useDragAndDrop.tsx:DragAndDropHooks)`

—

The drag and drop hooks returned by `useDragAndDrop` used to enable drag and drop behavior for the Table.

`disabledKeys`

`[Iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)<[Key](https://reactjs.org/docs/lists-and-keys.html)>`

—

A list of row keys to disable.

`escapeKeyBehavior`

`'clearSelection' | 'none'`

`'clearSelection'`

Whether pressing the escape key should clear selection in the table or not.

Most experiences should not modify this option as it eliminates a keyboard user's ability to easily clear selection. Only use if the escape key is being handled externally or should not trigger selection clearing contextually.

`shouldSelectOnPressUp`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether selection should occur on press up instead of press down.

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

`sortDescriptor`

`[SortDescriptor](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/collections.d.ts:SortDescriptor)`

—

The current sorted column and direction.

`className`

`[ClassNameOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ClassNameOrFunction)<[TableRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Table.tsx:TableRenderProps)>`

—

The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.

`style`

`[StyleOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:StyleOrFunction)<[TableRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Table.tsx:TableRenderProps)>`

—

The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.

Events

Name

Type

Description

`onRowAction`

`( (key: [Key](https://reactjs.org/docs/lists-and-keys.html) )) => void`

Handler that is called when a user performs an action on the row.

`onSelectionChange`

`( (keys: [Selection](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/selection.d.ts:Selection) )) => void`

Handler that is called when the selection changes.

`onSortChange`

`( (descriptor: [SortDescriptor](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/collections.d.ts:SortDescriptor) )) => any`

Handler that is called when the sorted column or direction changes.

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

Name

Type

Description

`columns`

`[Iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)<[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)>`

A list of table columns.

`children`

`[ReactNode](https://reactjs.org/docs/rendering-elements.html) | ( (item: [object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object) )) => [ReactElement](https://reactjs.org/docs/rendering-elements.html)`

A list of `Column(s)` or a function. If the latter, a list of columns must be provided using the `columns` prop.

`dependencies`

`ReadonlyArray<any>`

Values that should invalidate the column cache when using dynamic collections.

`className`

`[ClassNameOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ClassNameOrFunction)<[TableHeaderRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Table.tsx:TableHeaderRenderProps)>`

The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.

`style`

`[StyleOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:StyleOrFunction)<[TableHeaderRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Table.tsx:TableHeaderRenderProps)>`

The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.

Events

Name

Type

Description

`onHoverStart`

`( (e: [HoverEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/events.d.ts:HoverEvent) )) => void`

Handler that is called when a hover interaction starts.

`onHoverEnd`

`( (e: [HoverEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/events.d.ts:HoverEvent) )) => void`

Handler that is called when a hover interaction ends.

`onHoverChange`

`( (isHovering: [boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) )) => void`

Handler that is called when the hover state changes.

Positioning

### Column[#](#column)

Name

Type

Description

`id`

`[Key](https://reactjs.org/docs/lists-and-keys.html)`

The unique id of the column.

`allowsSorting`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether the column allows sorting.

`isRowHeader`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether a column is a [row header](https://www.w3.org/TR/wai-aria-1.1/#rowheader) and should be announced by assistive technology during row navigation.

`textValue`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

A string representation of the column's contents, used for accessibility announcements.

`children`

`[ChildrenOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ChildrenOrFunction)<[ColumnRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Table.tsx:ColumnRenderProps)>`

The children of the component. A function may be provided to alter the children based on component state.

`className`

`[ClassNameOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ClassNameOrFunction)<[ColumnRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Table.tsx:ColumnRenderProps)>`

The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.

`style`

`[StyleOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:StyleOrFunction)<[ColumnRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Table.tsx:ColumnRenderProps)>`

The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.

EventsSizing

Name

Type

Description

`width`

`[ColumnSize](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/table/src/index.d.ts:ColumnSize) | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)`

The width of the column. This prop only applies when the `<Table>` is wrapped in a `<ResizableTableContainer>`.

`minWidth`

`[ColumnStaticSize](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/table/src/index.d.ts:ColumnStaticSize) | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)`

The minimum width of the column. This prop only applies when the `<Table>` is wrapped in a `<ResizableTableContainer>`.

`maxWidth`

`[ColumnStaticSize](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/table/src/index.d.ts:ColumnStaticSize) | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)`

The maximum width of the column. This prop only applies when the `<Table>` is wrapped in a `<ResizableTableContainer>`.

`defaultWidth`

`[ColumnSize](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/table/src/index.d.ts:ColumnSize) | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)`

The default width of the column. This prop only applies when the `<Table>` is wrapped in a `<ResizableTableContainer>`.

Positioning

### TableBody[#](#tablebody)

Name

Type

Description

`renderEmptyState`

`( (props: [TableBodyRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Table.tsx:TableBodyRenderProps) )) => [ReactNode](https://reactjs.org/docs/rendering-elements.html)`

Provides content to display when there are no rows in the table.

`children`

`[ReactNode](https://reactjs.org/docs/rendering-elements.html) | ( (item: T )) => [ReactNode](https://reactjs.org/docs/rendering-elements.html)`

The contents of the collection.

`dependencies`

`ReadonlyArray<any>`

Values that should invalidate the item cache when using dynamic collections.

`items`

`[Iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)<T>`

Item objects in the collection.

`className`

`[ClassNameOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ClassNameOrFunction)<[TableBodyRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Table.tsx:TableBodyRenderProps)>`

The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.

`style`

`[StyleOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:StyleOrFunction)<[TableBodyRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Table.tsx:TableBodyRenderProps)>`

The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.

EventsPositioning

Name

Type

Description

`columns`

`[Iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)<[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)>`

A list of columns used when dynamically rendering cells.

`children`

`[ReactNode](https://reactjs.org/docs/rendering-elements.html) | ( (item: [object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object) )) => [ReactElement](https://reactjs.org/docs/rendering-elements.html)`

The cells within the row. Supports static items or a function for dynamic rendering.

`value`

`[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)`

The object value that this row represents. When using dynamic collections, this is set automatically.

`dependencies`

`ReadonlyArray<any>`

Values that should invalidate the cell cache when using dynamic collections.

`textValue`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

A string representation of the row's contents, used for features like typeahead.

`isDisabled`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether the row is disabled.

`id`

`[Key](https://reactjs.org/docs/lists-and-keys.html)`

The unique id of the row.

`className`

`[ClassNameOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ClassNameOrFunction)<[RowRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Table.tsx:RowRenderProps)>`

The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.

`style`

`[StyleOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:StyleOrFunction)<[RowRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Table.tsx:RowRenderProps)>`

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

Handler that is called when a user performs an action on the row. The exact user event depends on the collection's `selectionBehavior` prop and the interaction modality.

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

Name

Type

Description

`id`

`[Key](https://reactjs.org/docs/lists-and-keys.html)`

The unique id of the cell.

`textValue`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

A string representation of the cell's contents, used for features like typeahead.

`colSpan`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)`

Indicates how many columns the data cell spans.

`children`

`[ChildrenOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ChildrenOrFunction)<[CellRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Table.tsx:CellRenderProps)>`

The children of the component. A function may be provided to alter the children based on component state.

`className`

`[ClassNameOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ClassNameOrFunction)<[CellRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Table.tsx:CellRenderProps)>`

The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.

`style`

`[StyleOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:StyleOrFunction)<[CellRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Table.tsx:CellRenderProps)>`

The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.

EventsPositioning

Name

Type

Description

`children`

`[ReactNode](https://reactjs.org/docs/rendering-elements.html)`

The children of the component.

`className`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element.

`style`

`[CSSProperties](https://reactjs.org/docs/dom-elements.html#style)`

The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element.

Events

Name

Type

Description

`onResizeStart`

`( (widths: [Map](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)<[Key](https://reactjs.org/docs/lists-and-keys.html), [ColumnSize](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/table/src/index.d.ts:ColumnSize)> )) => void`

Handler that is called when a user starts a column resize.

`onResize`

`( (widths: [Map](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)<[Key](https://reactjs.org/docs/lists-and-keys.html), [ColumnSize](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/table/src/index.d.ts:ColumnSize)> )) => void`

Handler that is called when a user performs a column resize. Can be used with the width property on columns to put the column widths into a controlled state.

`onResizeEnd`

`( (widths: [Map](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Map)<[Key](https://reactjs.org/docs/lists-and-keys.html), [ColumnSize](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/table/src/index.d.ts:ColumnSize)> )) => void`

Handler that is called after a user performs a column resize. Can be used to store the widths of columns for another future session.

PositioningAccessibility

Name

Type

Description

`id`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

The element's unique identifier. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id).

### ColumnResizer[#](#columnresizer)

Name

Type

Description

`children`

`[ChildrenOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ChildrenOrFunction)<[ColumnResizerRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Table.tsx:ColumnResizerRenderProps)>`

The children of the component. A function may be provided to alter the children based on component state.

`className`

`[ClassNameOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ClassNameOrFunction)<[ColumnResizerRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Table.tsx:ColumnResizerRenderProps)>`

The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.

`style`

`[StyleOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:StyleOrFunction)<[ColumnResizerRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Table.tsx:ColumnResizerRenderProps)>`

The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.

Events

Name

Type

Description

`onHoverStart`

`( (e: [HoverEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/events.d.ts:HoverEvent) )) => void`

Handler that is called when a hover interaction starts.

`onHoverEnd`

`( (e: [HoverEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/events.d.ts:HoverEvent) )) => void`

Handler that is called when a hover interaction ends.

`onHoverChange`

`( (isHovering: [boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) )) => void`

Handler that is called when the hover state changes.

PositioningAccessibility

Name

Type

Description

`aria-label`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

A custom accessibility label for the resizer.

A `<TableLoadMoreItem>` defines the load more spinner within a `<Table>`. It renders its children when `isLoading` is true, and allows you to customize the scroll distance from the bottom of the table that should trigger another load operation.

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
.react-aria-Table {
  /* ... */
}
```

```
.react-aria-Table {
  /* ... */
}
```

```
.react-aria-Table {
  /* ... */
}
```

A custom `className` can also be specified on any component. This overrides the default `className` provided by React Aria with your own.

```
<Table className="my-table">
  {/* ... */}
</Table>
```

```
<Table className="my-table">
  {/* ... */}
</Table>
```

```
<Table className="my-table">
  {/* ... */}
</Table>
```

In addition, some components support multiple UI states (e.g. pressed, hovered, etc.). React Aria components expose states using data attributes, which you can target in CSS selectors. For example:

```
.react-aria-Row[data-selected] {
  /* ... */
}

.react-aria-Row[data-focused] {
  /* ... */
}
```

```
.react-aria-Row[data-selected] {
  /* ... */
}

.react-aria-Row[data-focused] {
  /* ... */
}
```

```
.react-aria-Row[data-selected] {
  /* ... */
}

.react-aria-Row[data-focused] {
  /* ... */
}
```

The `className` and `style` props also accept functions which receive states for styling. This lets you dynamically determine the classes or styles to apply, which is useful when using utility CSS libraries like [Tailwind](https://tailwindcss.com/).

```
<Row
  className={({ isSelected }) => isSelected ? 'bg-blue-400' : 'bg-gray-100'}
>
  {/* ... */}
</Row>
```

```
<Row
  className={({ isSelected }) =>
    isSelected ? 'bg-blue-400' : 'bg-gray-100'}
>
  {/* ... */}
</Row>
```

```
<Row
  className={(
    { isSelected }
  ) =>
    isSelected
      ? 'bg-blue-400'
      : 'bg-gray-100'}
>
  {/* ... */}
</Row>
```

Render props may also be used as children to alter what elements are rendered based on the current state. For example, you could render a sort indicator in sortable columns.

```
<Column>
  {({allowsSorting, sortDirection}) => (
    <>
      Column Title
      {allowsSorting && <MySortIndicator direction={sortDirection} />}
    </>
  )}
</Column>
```

```
<Column>
  {({ allowsSorting, sortDirection }) => (
    <>
      Column Title
      {allowsSorting && (
        <MySortIndicator direction={sortDirection} />
      )}
    </>
  )}
</Column>
```

```
<Column>
  {(
    {
      allowsSorting,
      sortDirection
    }
  ) => (
    <>
      Column Title
      {allowsSorting &&
        (
          <MySortIndicator
            direction={sortDirection}
          />
        )}
    </>
  )}
</Column>
```

The states and selectors for each component used in a `Table` are documented below.

A `Table` can be targeted with the `.react-aria-Table` CSS selector, or by overriding with a custom `className`. It supports the following states and render props:

Name

CSS Selector

Description

`isFocused`

`[data-focused]`

Whether the table is currently focused.

`isFocusVisible`

`[data-focus-visible]`

Whether the table is currently keyboard focused.

`isDropTarget`

`[data-drop-target]`

Whether the table is currently the active drop target.

`state`

`—`

State of the table.

A `TableHeader` can be targeted with the `.react-aria-TableHeader` CSS selector, or by overriding with a custom `className`.

### Column[#](#column-1)

A `Column` can be targeted with the `.react-aria-Column` CSS selector, or by overriding with a custom `className`. It supports the following states and render props:

Name

CSS Selector

Description

`isHovered`

`[data-hovered]`

Whether the item is currently hovered with a mouse.

`isFocused`

`[data-focused]`

Whether the item is currently focused.

`isFocusVisible`

`[data-focus-visible]`

Whether the item is currently keyboard focused.

`allowsSorting`

`[data-allows-sorting]`

Whether the column allows sorting.

`sortDirection`

`[data-sort-direction="ascending | descending"]`

The current sort direction.

`isResizing`

`[data-resizing]`

Whether the column is currently being resized.

`sort`

`—`

Triggers sorting for this column in the given direction.

`startResize`

`—`

Starts column resizing if the table is contained in a `<ResizableTableContainer>` element.

### TableBody[#](#tablebody-1)

A `TableBody` can be targeted with the `.react-aria-TableBody` CSS selector, or by overriding with a custom `className`. It supports the following states and render props:

Name

CSS Selector

Description

`isEmpty`

`[data-empty]`

Whether the table body has no rows and should display its empty state.

`isDropTarget`

`[data-drop-target]`

Whether the Table is currently the active drop target.

A `Row` can be targeted with the `.react-aria-Row` CSS selector, or by overriding with a custom `className`. It supports the following states and render props:

Name

CSS Selector

Description

`isFocusVisibleWithin`

`—`

Whether the row's children have keyboard focus.

`id`

`—`

The unique id of the row.

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

A `Cell` can be targeted with the `.react-aria-Cell` CSS selector, or by overriding with a custom `className`. It supports the following states and render props:

Name

CSS Selector

Description

`isPressed`

`[data-pressed]`

Whether the cell is currently in a pressed state.

`isFocused`

`[data-focused]`

Whether the cell is currently focused.

`isFocusVisible`

`[data-focus-visible]`

Whether the cell is currently keyboard focused.

`isHovered`

`[data-hovered]`

Whether the cell is currently hovered with a mouse.

A `ResizableTableContainer` can be targeted with the `.react-aria-ResizableTableContainer` CSS selector, or by overriding with a custom `className`.

### ColumnResizer[#](#columnresizer-1)

A `ColumnResizer` can be targeted with the `.react-aria-ColumnResizer` CSS selector, or by overriding with a custom `className`. It supports the following states and render props:

Name

CSS Selector

Description

`isHovered`

`[data-hovered]`

Whether the resizer is currently hovered with a mouse.

`isFocused`

`[data-focused]`

Whether the resizer is currently focused.

`isFocusVisible`

`[data-focus-visible]`

Whether the resizer is currently keyboard focused.

`isResizing`

`[data-resizing]`

Whether the resizer is currently being resized.

`resizableDirection`

`[data-resizable-direction="right | left | both"]`

The direction that the column is currently resizable.

* * *

All React Aria Components export a corresponding context that can be used to send props to them from a parent element. This enables you to build your own compositional APIs similar to those found in React Aria Components itself. You can send any prop or ref via context that you could pass to the corresponding component. The local props and ref on the component are merged with the ones passed via context, with the local props taking precedence (following the rules documented in [mergeProps](https://react-spectrum.adobe.com/react-aria/mergeProps.html)).

Component

Context

Props

Ref

`Table`

`TableContext`

`[TableProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Table.tsx:TableProps)`

`[HTMLTableElement](https://developer.mozilla.org/docs/Web/API/HTMLTableElement) | [HTMLDivElement](https://developer.mozilla.org/docs/Web/API/HTMLDivElement)`

This example shows a component that accepts a `Table` and a [ToggleButton](https://react-spectrum.adobe.com/react-aria/ToggleButton.html) as children, and allows the user to turn selection mode for the table on and off by pressing the button.

```
import type {SelectionMode} from 'react-aria-components';
import {ToggleButtonContext, TableContext} from 'react-aria-components';

function Selectable({children}) {
  let [isSelected, onChange] = React.useState(false);
  let selectionMode: SelectionMode = isSelected ? 'multiple' : 'none';
  return (
    <ToggleButtonContext.Provider value={{isSelected, onChange}}>
      <TableContext.Provider value={{selectionMode}}>        {children}
      </TableContext.Provider>
    </ToggleButtonContext.Provider>
  );
}
```

```
import type {SelectionMode} from 'react-aria-components';
import {
  TableContext,
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
      <TableContext.Provider value={{ selectionMode }}>        {children}
      </TableContext.Provider>
    </ToggleButtonContext.Provider>
  );
}
```

```
import type {SelectionMode} from 'react-aria-components';
import {
  TableContext,
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
      <TableContext.Provider
        value={{
          selectionMode
        }}
      >        {children}
      </TableContext.Provider>
    </ToggleButtonContext.Provider>
  );
}
```

The `Selectable` component can be reused to make the selection mode of any nested `Table` controlled by a `ToggleButton`.

```
import {ToggleButton} from 'react-aria-components';

<Selectable>
  <ToggleButton>Select</ToggleButton>
  <PokemonTable />
</Selectable>
```

```
import {ToggleButton} from 'react-aria-components';

<Selectable>
  <ToggleButton>Select</ToggleButton>
  <PokemonTable />
</Selectable>
```

```
import {ToggleButton} from 'react-aria-components';

<Selectable>
  <ToggleButton>
    Select
  </ToggleButton>
  <PokemonTable />
</Selectable>
```

Show CSS

```
.react-aria-ToggleButton {
  margin-bottom: 8px;
}
```

```
.react-aria-ToggleButton {
  margin-bottom: 8px;
}
```

```
.react-aria-ToggleButton {
  margin-bottom: 8px;
}
```

Table passes props to its child components, such as the selection checkboxes, via their associated contexts. These contexts are exported so you can also consume them in your own custom components. This enables you to reuse existing components from your app or component library together with React Aria Components.

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

This example consumes from `CheckboxContext` in an existing styled checkbox component to make it compatible with React Aria Components. The `[useContextProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:useContextProps)` hook merges the local props and ref with the ones provided via context by Table. See [useCheckbox](https://react-spectrum.adobe.com/react-aria/useCheckbox.html) for more details about the hooks used in this example.

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

Now you can use `MyCustomCheckbox` within a `Table`, in place of the builtin React Aria Components `Checkbox`.

```
<Table>
  <TableHeader>
    {/* ... */}
  </TableHeader>
  <TableBody>
    <Row>
      <Cell><MyCustomCheckbox slot="selection" /></Cell>      {/* ... */}
    </Row>
  </TableBody>
</Table>
```

```
<Table>
  <TableHeader>
    {/* ... */}
  </TableHeader>
  <TableBody>
    <Row>
      <Cell><MyCustomCheckbox slot="selection" /></Cell>      {/* ... */}
    </Row>
  </TableBody>
</Table>
```

```
<Table>
  <TableHeader>
    {/* ... */}
  </TableHeader>
  <TableBody>
    <Row>
      <Cell>
        <MyCustomCheckbox slot="selection" />
      </Cell>      {/* ... */}
    </Row>
  </TableBody>
</Table>
```

If you need to customize things even further, such as accessing internal state or customizing DOM structure, you can drop down to the lower level Hook-based API. See [useTable](https://react-spectrum.adobe.com/react-aria/useTable.html) for more details.

* * *

`@react-aria/test-utils` offers common table interaction utilities which you may find helpful when writing tests. See [here](https://react-spectrum.adobe.com/react-aria/testing.html#react-aria-test-utils) for more information on how to setup these utilities in your tests. Below is the full definition of the table tester and a sample of how you could use it in your test suite.

```
// Table.test.ts
import {render, within} from '@testing-library/react';
import {User} from '@react-aria/test-utils';

let testUtilUser = new User({
  interactionType: 'mouse',
  advanceTimer: jest.advanceTimersByTime
});
// ...

it('Table can toggle row selection', async function () {
  // Render your test component/app and initialize the table tester
  let { getByTestId } = render(
    <Table data-testid="test-table" selectionMode="multiple">
      ...
    </Table>
  );
  let tableTester = testUtilUser.createTester('Table', {
    root: getByTestId('test-table')
  });
  expect(tableTester.selectedRows).toHaveLength(0);

  await tableTester.toggleSelectAll();
  expect(tableTester.selectedRows).toHaveLength(10);

  await tableTester.toggleRowSelection({ row: 2 });
  expect(tableTester.selectedRows).toHaveLength(9);
  let checkbox = within(tableTester.rows[2]).getByRole('checkbox');
  expect(checkbox).not.toBeChecked();

  await tableTester.toggleSelectAll();
  expect(tableTester.selectedRows).toHaveLength(10);
  expect(checkbox).toBeChecked();

  await tableTester.toggleSelectAll();
  expect(tableTester.selectedRows).toHaveLength(0);
});
```

```
// Table.test.ts
import {render, within} from '@testing-library/react';
import {User} from '@react-aria/test-utils';

let testUtilUser = new User({
  interactionType: 'mouse',
  advanceTimer: jest.advanceTimersByTime
});
// ...

it('Table can toggle row selection', async function () {
  // Render your test component/app and initialize the table tester
  let { getByTestId } = render(
    <Table
      data-testid="test-table"
      selectionMode="multiple"
    >
      ...
    </Table>
  );
  let tableTester = testUtilUser.createTester('Table', {
    root: getByTestId('test-table')
  });
  expect(tableTester.selectedRows).toHaveLength(0);

  await tableTester.toggleSelectAll();
  expect(tableTester.selectedRows).toHaveLength(10);

  await tableTester.toggleRowSelection({ row: 2 });
  expect(tableTester.selectedRows).toHaveLength(9);
  let checkbox = within(tableTester.rows[2]).getByRole(
    'checkbox'
  );
  expect(checkbox).not.toBeChecked();

  await tableTester.toggleSelectAll();
  expect(tableTester.selectedRows).toHaveLength(10);
  expect(checkbox).toBeChecked();

  await tableTester.toggleSelectAll();
  expect(tableTester.selectedRows).toHaveLength(0);
});
```

```
// Table.test.ts
import {
  render,
  within
} from '@testing-library/react';
import {User} from '@react-aria/test-utils';

let testUtilUser =
  new User({
    interactionType:
      'mouse',
    advanceTimer:
      jest
        .advanceTimersByTime
  });
// ...

it('Table can toggle row selection', async function () {
  // Render your test component/app and initialize the table tester
  let { getByTestId } =
    render(
      <Table
        data-testid="test-table"
        selectionMode="multiple"
      >
        ...
      </Table>
    );
  let tableTester =
    testUtilUser
      .createTester(
        'Table',
        {
          root:
            getByTestId(
              'test-table'
            )
        }
      );
  expect(
    tableTester
      .selectedRows
  ).toHaveLength(0);

  await tableTester
    .toggleSelectAll();
  expect(
    tableTester
      .selectedRows
  ).toHaveLength(10);

  await tableTester
    .toggleRowSelection({
      row: 2
    });
  expect(
    tableTester
      .selectedRows
  ).toHaveLength(9);
  let checkbox = within(
    tableTester.rows[2]
  ).getByRole(
    'checkbox'
  );
  expect(checkbox).not
    .toBeChecked();

  await tableTester
    .toggleSelectAll();
  expect(
    tableTester
      .selectedRows
  ).toHaveLength(10);
  expect(checkbox)
    .toBeChecked();

  await tableTester
    .toggleSelectAll();
  expect(
    tableTester
      .selectedRows
  ).toHaveLength(0);
});
```

### Properties

Name

Type

Description

`table`

`[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)`

Returns the table.

`rowGroups`

`[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)[]`

Returns the row groups within the table.

`columns`

`[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)[]`

Returns the columns within the table.

`rows`

`[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)[]`

Returns the rows within the table if any.

`selectedRows`

`[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)[]`

Returns the currently selected rows within the table if any.

`rowHeaders`

`[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)[]`

Returns the row headers within the table if any.

### Methods

Method

Description

`constructor( (opts: [TableTesterOpts](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/test-utils/src/types.ts:TableTesterOpts) )): void`

`setInteractionType( (type: [UserOpts](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/test-utils/src/types.ts:UserOpts)['interactionType'] )): void`

Set the interaction type used by the table tester.

`toggleRowSelection( (opts: [TableToggleRowOpts](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/test-utils/src/table.ts:TableToggleRowOpts) )): [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<void>`

Toggles the selection for the specified table row. Defaults to using the interaction type set on the table tester.

`toggleSort( (opts: [TableToggleSortOpts](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/test-utils/src/table.ts:TableToggleSortOpts) )): [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<void>`

Toggles the sort order for the specified table column. Defaults to using the interaction type set on the table tester.

`triggerColumnHeaderAction( (opts: [TableColumnHeaderActionOpts](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/test-utils/src/table.ts:TableColumnHeaderActionOpts) )): [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<void>`

Triggers an action for the specified table column menu. Defaults to using the interaction type set on the table tester.

`triggerRowAction( (opts: [TableRowActionOpts](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/test-utils/src/table.ts:TableRowActionOpts) )): [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<void>`

Triggers the action for the specified table row. Defaults to using the interaction type set on the table tester.

`toggleSelectAll( (opts: {  interactionType?: [UserOpts](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/test-utils/src/types.ts:UserOpts)['interactionType']  } )): [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<void>`

Toggle selection for all rows in the table. Defaults to using the interaction type set on the table tester.

`findRow( (opts: {  rowIndexOrText: [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) |  | [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)  } )): [HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)`

Returns a row matching the specified index or text content.

`findCell( (opts: {  text: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)  } )): [HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)`

Returns a cell matching the specified text content.

`cells( (opts: {  element?: [HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)  } )): [HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)[]`

Returns the cells within the table if any. Can be filtered against a specific row if provided via `element`.