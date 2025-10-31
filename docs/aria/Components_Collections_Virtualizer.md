# Virtualizer

**Source**: [https://react-spectrum.adobe.com/react-aria/Virtualizer.html](https://react-spectrum.adobe.com/react-aria/Virtualizer.html)

> Documentation for Virtualizer in the React Aria package.

---

A Virtualizer renders a scrollable collection of data using customizable layouts. It supports very large collections by only rendering visible items to the DOM, reusing them as the user scrolls.

* * *

```
import {ListBox, ListBoxItem, ListLayout, Virtualizer} from 'react-aria-components';

let items = [];
for (let i = 0; i < 5000; i++) {
  items.push({ id: i, name: `Item ${i}` });
}

function Example() {
  return (
    <Virtualizer
      layout={ListLayout}
      layoutOptions={{
        rowHeight: 32,
        padding: 4,
        gap: 4
      }}
    >
      <ListBox
        aria-label="Virtualized ListBox"
        selectionMode="multiple"
        items={items}
      >
        {(item) => <ListBoxItem>{item.name}</ListBoxItem>}
      </ListBox>
    </Virtualizer>
  );
}
```

```
import {
  ListBox,
  ListBoxItem,
  ListLayout,
  Virtualizer
} from 'react-aria-components';

let items = [];
for (let i = 0; i < 5000; i++) {
  items.push({ id: i, name: `Item ${i}` });
}

function Example() {
  return (
    <Virtualizer
      layout={ListLayout}
      layoutOptions={{
        rowHeight: 32,
        padding: 4,
        gap: 4
      }}
    >
      <ListBox
        aria-label="Virtualized ListBox"
        selectionMode="multiple"
        items={items}
      >
        {(item) => <ListBoxItem>{item.name}</ListBoxItem>}
      </ListBox>
    </Virtualizer>
  );
}
```

```
import {
  ListBox,
  ListBoxItem,
  ListLayout,
  Virtualizer
} from 'react-aria-components';

let items = [];
for (
  let i = 0;
  i < 5000;
  i++
) {
  items.push({
    id: i,
    name: `Item ${i}`
  });
}

function Example() {
  return (
    <Virtualizer
      layout={ListLayout}
      layoutOptions={{
        rowHeight: 32,
        padding: 4,
        gap: 4
      }}
    >
      <ListBox
        aria-label="Virtualized ListBox"
        selectionMode="multiple"
        items={items}
      >
        {(item) => (
          <ListBoxItem>
            {item.name}
          </ListBoxItem>
        )}
      </ListBox>
    </Virtualizer>
  );
}
```

* * *

Virtualized scrolling is a performance optimization for large lists. Instead of rendering all items to the DOM at once, it only renders the visible items, reusing them as the user scrolls. This results in a small number of DOM elements being rendered, reducing memory usage and improving browser layout and rendering performance.

-   **Integrated** – Works with React Aria [ListBox](https://react-spectrum.adobe.com/react-aria/ListBox.html), [GridList](https://react-spectrum.adobe.com/react-aria/GridList.html), [Tree](https://react-spectrum.adobe.com/react-aria/Tree.html), [Menu](https://react-spectrum.adobe.com/react-aria/Menu.html), and [Table](https://react-spectrum.adobe.com/react-aria/Table.html) components. Integrated with React Aria's [drag and drop](https://react-spectrum.adobe.com/react-aria/dnd.html), [selection](https://react-spectrum.adobe.com/react-aria/selection.html), and [table column resizing](https://react-spectrum.adobe.com/react-aria/Table.html#column-resizing) implementations.
-   **Custom layouts** – Support for list, grid, waterfall, and table layouts out of the box, with fixed or variable size items. Create a `[Layout](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/virtualizer/src/Layout.ts:Layout)` subclass to build your own custom layout.
-   **Accessible** – Persists the focused element in the DOM even when out of view, ensuring keyboard navigation always works. Adds ARIA attributes like `aria-rowindex` to give screen reader users context.

* * *

Collection components such as [ListBox](https://react-spectrum.adobe.com/react-aria/ListBox.html), [GridList](https://react-spectrum.adobe.com/react-aria/GridList.html), [Tree](https://react-spectrum.adobe.com/react-aria/Tree.html), [Menu](https://react-spectrum.adobe.com/react-aria/Menu.html), and [Table](https://react-spectrum.adobe.com/react-aria/Table.html) can be virtualized by wrapping them in a <`[Virtualizer](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Virtualizer.tsx:Virtualizer)`\>, and providing a `[Layout](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/virtualizer/src/Layout.ts:Layout)` object such as `[ListLayout](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/layout/src/ListLayout.ts:ListLayout)` or `[GridLayout](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/layout/src/GridLayout.ts:GridLayout)`. See below for examples of each layout.

```
import {Virtualizer, ListLayout} from 'react-aria-components';

<Virtualizer layout={ListLayout}>
  <ListBox>
    {/* ... */}
  </ListBox>
</Virtualizer>
```

```
import {
  ListLayout,
  Virtualizer
} from 'react-aria-components';

<Virtualizer layout={ListLayout}>
  <ListBox>
    {/* ... */}
  </ListBox>
</Virtualizer>
```

```
import {
  ListLayout,
  Virtualizer
} from 'react-aria-components';

<Virtualizer
  layout={ListLayout}
>
  <ListBox>
    {/* ... */}
  </ListBox>
</Virtualizer>
```

* * *

Virtualizer uses `[Layout](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/virtualizer/src/Layout.ts:Layout)` objects to determine the position and size of each item, and provide the list of currently visible items. When using a Virtualizer, all items are positioned by the `Layout`, and CSS layout properties such as flexbox and grid do not apply.

`ListLayout` supports layout of items in a vertical stack. Rows can be fixed or variable height. When using variable heights, set the `estimatedRowHeight` to a reasonable guess for how tall the rows will be on average. This allows the size of the scrollbar to be calculated. `ListLayout` supports the following options:

Name

Type

Default

Description

`rowHeight`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)`

`48`

The fixed height of a row in px.

`estimatedRowHeight`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)`

—

The estimated height of a row, when row heights are variable.

`headingHeight`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)`

`48`

The fixed height of a section header in px.

`estimatedHeadingHeight`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)`

—

The estimated height of a section header, when the height is variable.

`loaderHeight`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)`

`48`

The fixed height of a loader element in px. This loader is specifically for "load more" elements rendered when loading more rows at the root level or inside nested row/sections.

`dropIndicatorThickness`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)`

`2`

The thickness of the drop indicator.

`gap`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)`

`0`

The gap between items.

`padding`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)`

`0`

The padding around the list.

This example shows a [GridList](https://react-spectrum.adobe.com/react-aria/GridList.html) with variable height rows due to text wrapping.

```
import {ListLayout, Virtualizer} from 'react-aria-components';
import {MyGridList, MyItem} from './GridList';

function Example() {
  return (
    <Virtualizer
      layout={ListLayout}
      layoutOptions={{
        estimatedRowHeight: 75,
        gap: 4,
        padding: 4
      }}    >
      <MyGridList
        aria-label="Virtualized GridList"
        selectionMode="multiple"
        items={items}
      >
        {(item) => <MyItem>{item.name}</MyItem>}
      </MyGridList>
    </Virtualizer>
  );
}
```

```
import {
  ListLayout,
  Virtualizer
} from 'react-aria-components';
import {MyGridList, MyItem} from './GridList';

function Example() {
  return (
    <Virtualizer
      layout={ListLayout}
      layoutOptions={{
        estimatedRowHeight: 75,
        gap: 4,
        padding: 4
      }}    >
      <MyGridList
        aria-label="Virtualized GridList"
        selectionMode="multiple"
        items={items}
      >
        {(item) => <MyItem>{item.name}</MyItem>}
      </MyGridList>
    </Virtualizer>
  );
}
```

```
import {
  ListLayout,
  Virtualizer
} from 'react-aria-components';
import {
  MyGridList,
  MyItem
} from './GridList';

function Example() {
  return (
    <Virtualizer
      layout={ListLayout}
      layoutOptions={{
        estimatedRowHeight:
          75,
        gap: 4,
        padding: 4
      }}    >
      <MyGridList
        aria-label="Virtualized GridList"
        selectionMode="multiple"
        items={items}
      >
        {(item) => (
          <MyItem>
            {item.name}
          </MyItem>
        )}
      </MyGridList>
    </Virtualizer>
  );
}
```

`GridLayout` supports layout of items in an equal size grid. The items are sized between a minimum and maximum size depending on the width of the container. It supports the following options:

Name

Type

Default

Description

`minItemSize`

`[Size](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/virtualizer/src/Size.ts:Size)`

`200 x 200`

The minimum item size.

`maxItemSize`

`[Size](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/virtualizer/src/Size.ts:Size)`

`Infinity`

The maximum item size.

`preserveAspectRatio`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

`false`

Whether to preserve the aspect ratio of the `minItemSize`. By default, grid rows may have variable heights. When `preserveAspectRatio` is true, all rows will have equal heights.

`minSpace`

`[Size](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/virtualizer/src/Size.ts:Size)`

`18 x 18`

The minimum space required between items.

`maxHorizontalSpace`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)`

`Infinity`

The maximum allowed horizontal space between items.

`maxColumns`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)`

`Infinity`

The maximum number of columns.

`dropIndicatorThickness`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)`

`2`

The thickness of the drop indicator.

Make sure to set `layout="grid"` on the `ListBox` or `GridList` component as well so that keyboard navigation behavior is correct.

```
import {GridLayout, Size, Text} from 'react-aria-components';

function Example() {
  return (
    <div className="resizable">
      <Virtualizer
        layout={GridLayout}
        layoutOptions={{
          minItemSize: new Size(100, 140),
          minSpace: new Size(8, 8)
        }}      >
        <ListBox
          layout="grid"          aria-label="Virtualized grid layout"
          selectionMode="multiple"
          items={albums}>
          {item => (
            <ListBoxItem textValue={item.title}>
              <img src={item.image} alt="" />
              <Text slot="label">{item.title}</Text>
              <Text slot="description">{item.artist}</Text>
            </ListBoxItem>
          )}
        </ListBox>
      </Virtualizer>
    </div>
  );
}
```

```
import {
  GridLayout,
  Size,
  Text
} from 'react-aria-components';

function Example() {
  return (
    <div className="resizable">
      <Virtualizer
        layout={GridLayout}
        layoutOptions={{
          minItemSize: new Size(100, 140),
          minSpace: new Size(8, 8)
        }}      >
        <ListBox
          layout="grid"          aria-label="Virtualized grid layout"
          selectionMode="multiple"
          items={albums}
        >
          {(item) => (
            <ListBoxItem textValue={item.title}>
              <img src={item.image} alt="" />
              <Text slot="label">{item.title}</Text>
              <Text slot="description">{item.artist}</Text>
            </ListBoxItem>
          )}
        </ListBox>
      </Virtualizer>
    </div>
  );
}
```

```
import {
  GridLayout,
  Size,
  Text
} from 'react-aria-components';

function Example() {
  return (
    <div className="resizable">
      <Virtualizer
        layout={GridLayout}
        layoutOptions={{
          minItemSize:
            new Size(
              100,
              140
            ),
          minSpace:
            new Size(
              8,
              8
            )
        }}      >
        <ListBox
          layout="grid"          aria-label="Virtualized grid layout"
          selectionMode="multiple"
          items={albums}
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
                {item
                  .title}
              </Text>
              <Text slot="description">
                {item
                  .artist}
              </Text>
            </ListBoxItem>
          )}
        </ListBox>
      </Virtualizer>
    </div>
  );
}
```

`WaterfallLayout` arranges variable height items in a column layout. The columns are sized between a minimum and maximum size depending on the width of the container. It supports the following options:

Name

Type

Default

Description

`minItemSize`

`[Size](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/virtualizer/src/Size.ts:Size)`

`200 x 200`

The minimum item size.

`maxItemSize`

`[Size](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/virtualizer/src/Size.ts:Size)`

`Infinity`

The maximum item size.

`minSpace`

`[Size](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/virtualizer/src/Size.ts:Size)`

`18 x 18`

The minimum space required between items.

`maxHorizontalSpace`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)`

`Infinity`

The maximum allowed horizontal space between items.

`maxColumns`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)`

`Infinity`

The maximum number of columns.

`dropIndicatorThickness`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)`

`2`

The thickness of the drop indicator.

```
import {Size, Text, WaterfallLayout} from 'react-aria-components';

function Example() {
  return (
    <Virtualizer
      layout={WaterfallLayout}
      layoutOptions={{
        minItemSize: new Size(150, 150),
        minSpace: new Size(8, 8)
      }}    >
      <ListBox
        layout="grid"
        aria-label="Virtualized waterfall layout"
        selectionMode="multiple"
        items={images}
      >
        {(item) => (
          <ListBoxItem textValue={item.title}>
            <img
              src={item.image}
              alt=""
              style={{ aspectRatio: item.aspectRatio }}
            />
            <Text slot="label">{item.title}</Text>
            <Text slot="description">{item.user}</Text>
          </ListBoxItem>
        )}
      </ListBox>
    </Virtualizer>
  );
}
```

```
import {
  Size,
  Text,
  WaterfallLayout
} from 'react-aria-components';

function Example() {
  return (
    <Virtualizer
      layout={WaterfallLayout}
      layoutOptions={{
        minItemSize: new Size(150, 150),
        minSpace: new Size(8, 8)
      }}    >
      <ListBox
        layout="grid"
        aria-label="Virtualized waterfall layout"
        selectionMode="multiple"
        items={images}
      >
        {(item) => (
          <ListBoxItem textValue={item.title}>
            <img
              src={item.image}
              alt=""
              style={{ aspectRatio: item.aspectRatio }}
            />
            <Text slot="label">{item.title}</Text>
            <Text slot="description">{item.user}</Text>
          </ListBoxItem>
        )}
      </ListBox>
    </Virtualizer>
  );
}
```

```
import {
  Size,
  Text,
  WaterfallLayout
} from 'react-aria-components';

function Example() {
  return (
    <Virtualizer
      layout={WaterfallLayout}
      layoutOptions={{
        minItemSize:
          new Size(
            150,
            150
          ),
        minSpace:
          new Size(8, 8)
      }}    >
      <ListBox
        layout="grid"
        aria-label="Virtualized waterfall layout"
        selectionMode="multiple"
        items={images}
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
              style={{
                aspectRatio:
                  item
                    .aspectRatio
              }}
            />
            <Text slot="label">
              {item
                .title}
            </Text>
            <Text slot="description">
              {item.user}
            </Text>
          </ListBoxItem>
        )}
      </ListBox>
    </Virtualizer>
  );
}
```

`TableLayout` provides layout of items in rows and columns, supporting virtualization of both horizontal and vertical scrolling. It should be used with the [Table](https://react-spectrum.adobe.com/react-aria/Table.html) component. Rows can be fixed or variable height. When using variable heights, set the `estimatedRowHeight` to a reasonable guess for how tall the rows will be on average. This allows the size of the scrollbar to be calculated. `TableLayout` supports the following options:

Name

Type

Default

Description

`rowHeight`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)`

`48`

The fixed height of a row in px.

`estimatedRowHeight`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)`

—

The estimated height of a row, when row heights are variable.

`headingHeight`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)`

`48`

The fixed height of a section header in px.

`estimatedHeadingHeight`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)`

—

The estimated height of a section header, when the height is variable.

`loaderHeight`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)`

`48`

The fixed height of a loader element in px. This loader is specifically for "load more" elements rendered when loading more rows at the root level or inside nested row/sections.

`dropIndicatorThickness`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)`

`2`

The thickness of the drop indicator.

`gap`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)`

`0`

The gap between items.

`padding`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)`

`0`

The padding around the list.

```
import {Cell, Column, Row, Table, TableBody, TableHeader, TableLayout} from 'react-aria-components';
import {MyCheckbox} from './Checkbox';

let rows = [];
for (let i = 0; i < 1000; i++) {
  rows.push({ id: i, foo: `Foo ${i}`, bar: `Bar ${i}`, baz: `Baz ${i}` });
}

function Example() {
  return (
    <Virtualizer
      layout={TableLayout}
      layoutOptions={{
        rowHeight: 32,
        headingHeight: 32,
        padding: 4,
        gap: 4
      }}    >
      <Table aria-label="Virtualized Table" selectionMode="multiple">
        <TableHeader>
          <Column width={40} minWidth={0}>
            <MyCheckbox slot="selection" />
          </Column>
          <Column isRowHeader>Foo</Column>
          <Column>Bar</Column>
          <Column>Baz</Column>
        </TableHeader>
        <TableBody items={rows}>
          {(item) => (
            <Row style={{ width: 'inherit', height: 'inherit' }}>
              <Cell>
                <MyCheckbox slot="selection" />
              </Cell>
              <Cell>{item.foo}</Cell>
              <Cell>{item.bar}</Cell>
              <Cell>{item.baz}</Cell>
            </Row>
          )}
        </TableBody>
      </Table>
    </Virtualizer>
  );
}
```

```
import {
  Cell,
  Column,
  Row,
  Table,
  TableBody,
  TableHeader,
  TableLayout
} from 'react-aria-components';
import {MyCheckbox} from './Checkbox';

let rows = [];
for (let i = 0; i < 1000; i++) {
  rows.push({
    id: i,
    foo: `Foo ${i}`,
    bar: `Bar ${i}`,
    baz: `Baz ${i}`
  });
}

function Example() {
  return (
    <Virtualizer
      layout={TableLayout}
      layoutOptions={{
        rowHeight: 32,
        headingHeight: 32,
        padding: 4,
        gap: 4
      }}    >
      <Table
        aria-label="Virtualized Table"
        selectionMode="multiple"
      >
        <TableHeader>
          <Column width={40} minWidth={0}>
            <MyCheckbox slot="selection" />
          </Column>
          <Column isRowHeader>Foo</Column>
          <Column>Bar</Column>
          <Column>Baz</Column>
        </TableHeader>
        <TableBody items={rows}>
          {(item) => (
            <Row
              style={{
                width: 'inherit',
                height: 'inherit'
              }}
            >
              <Cell>
                <MyCheckbox slot="selection" />
              </Cell>
              <Cell>{item.foo}</Cell>
              <Cell>{item.bar}</Cell>
              <Cell>{item.baz}</Cell>
            </Row>
          )}
        </TableBody>
      </Table>
    </Virtualizer>
  );
}
```

```
import {
  Cell,
  Column,
  Row,
  Table,
  TableBody,
  TableHeader,
  TableLayout
} from 'react-aria-components';
import {MyCheckbox} from './Checkbox';

let rows = [];
for (
  let i = 0;
  i < 1000;
  i++
) {
  rows.push({
    id: i,
    foo: `Foo ${i}`,
    bar: `Bar ${i}`,
    baz: `Baz ${i}`
  });
}

function Example() {
  return (
    <Virtualizer
      layout={TableLayout}
      layoutOptions={{
        rowHeight: 32,
        headingHeight:
          32,
        padding: 4,
        gap: 4
      }}    >
      <Table
        aria-label="Virtualized Table"
        selectionMode="multiple"
      >
        <TableHeader>
          <Column
            width={40}
            minWidth={0}
          >
            <MyCheckbox slot="selection" />
          </Column>
          <Column
            isRowHeader
          >
            Foo
          </Column>
          <Column>
            Bar
          </Column>
          <Column>
            Baz
          </Column>
        </TableHeader>
        <TableBody
          items={rows}
        >
          {(item) => (
            <Row
              style={{
                width:
                  'inherit',
                height:
                  'inherit'
              }}
            >
              <Cell>
                <MyCheckbox slot="selection" />
              </Cell>
              <Cell>
                {item
                  .foo}
              </Cell>
              <Cell>
                {item
                  .bar}
              </Cell>
              <Cell>
                {item
                  .baz}
              </Cell>
            </Row>
          )}
        </TableBody>
      </Table>
    </Virtualizer>
  );
}
```

* * *

Custom Virtualizer layouts can be created by extending the `Layout` abstract base class. At a minimum, the `getVisibleLayoutInfos`, `getLayoutInfo`, and `getContentSize` methods must be implemented. You can override the other methods to customize their default behavior.

Method

Description

`abstract getVisibleLayoutInfos( (rect: [Rect](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/virtualizer/src/Rect.ts:Rect) )): [LayoutInfo](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/virtualizer/src/LayoutInfo.ts:LayoutInfo)[]`

Returns an array of `LayoutInfo` objects which are inside the given rectangle. Should be implemented by subclasses.

`abstract getLayoutInfo( (key: [Key](https://reactjs.org/docs/lists-and-keys.html) )): [LayoutInfo](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/virtualizer/src/LayoutInfo.ts:LayoutInfo) | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)`

Returns a `LayoutInfo` for the given key. Should be implemented by subclasses.

`abstract getContentSize(): [Size](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/virtualizer/src/Size.ts:Size)`

Returns size of the content. By default, it returns virtualizer's size.

`shouldInvalidate( (newRect: [Rect](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/virtualizer/src/Rect.ts:Rect), , oldRect: [Rect](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/virtualizer/src/Rect.ts:Rect) )): [boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Returns whether the layout should invalidate in response to visible rectangle changes. By default, it only invalidates when the virtualizer's size changes. Return true always to make the layout invalidate while scrolling (e.g. sticky headers).

`shouldInvalidateLayoutOptions( (newOptions: O, , oldOptions: O )): [boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Returns whether the layout should invalidate when the layout options change. By default it invalidates when the object identity changes. Override this method to optimize layout updates based on specific option changes.

`update( (invalidationContext: InvalidationContext<O> )): void`

This method allows the layout to perform any pre-computation it needs to in order to prepare LayoutInfos for retrieval. Called by the virtualizer before `getVisibleLayoutInfos` or `getLayoutInfo` are called.

`updateItemSize( (key: [Key](https://reactjs.org/docs/lists-and-keys.html), , size: [Size](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/virtualizer/src/Size.ts:Size) )): [boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Updates the size of the given item.

`getDropTargetLayoutInfo( (target: [ItemDropTarget](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dnd.d.ts:ItemDropTarget) )): [LayoutInfo](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/virtualizer/src/LayoutInfo.ts:LayoutInfo)`

Returns a `LayoutInfo` for the given drop target.

Layouts produce `LayoutInfo` objects describing the position, size, and other properties of each item in a collection. Virtualizer requests this information when needed, and uses it to create DOM nodes to display.

Name

Type

Default

Description

`type`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

The type of element represented by this LayoutInfo. Should match the `type` of the corresponding collection node.

`key`

`[Key](https://reactjs.org/docs/lists-and-keys.html)`

—

A unique key for this LayoutInfo. Should match the `key` of the corresponding collection node.

`parentKey`

`[Key](https://reactjs.org/docs/lists-and-keys.html) | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)`

—

The key for a parent LayoutInfo, if any.

`content`

`any | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)`

—

Content for this item if it was generated by the layout rather than coming from the Collection.

`rect`

`[Rect](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/virtualizer/src/Rect.ts:Rect)`

—

The rectangle describing the size and position of this element.

`estimatedSize`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

`false`

Whether the size is estimated. `false` by default. Items with estimated sizes will be measured the first time they are added to the DOM. The estimated size is used to calculate the size and position of the scrollbar.

`isSticky`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

`false`

Whether the layout info sticks to the viewport when scrolling.

`opacity`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)`

`1`

The element's opacity.

`transform`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)`

—

A CSS transform string to apply to the element. `null` by default.

`zIndex`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)`

—

The z-index of the element. 0 by default.

`allowOverflow`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

`false`

Whether the element allows its contents to overflow its container.

This example implements a horizontally scrolling layout with fixed size items.

```
import {Key, Layout, LayoutInfo, Rect, Size} from 'react-aria-components';

class HorizontalLayout extends Layout {
  // Determine which items are visible within the given rectangle.
  getVisibleLayoutInfos(rect: Rect): LayoutInfo[] {
    let virtualizer = this.virtualizer!;
    let keys = Array.from(virtualizer.collection.getKeys());
    let startIndex = Math.max(0, Math.floor(rect.x / 100));
    let endIndex = Math.min(keys.length - 1, Math.ceil(rect.maxX / 100));
    let layoutInfos = [];
    for (let i = startIndex; i <= endIndex; i++) {
      layoutInfos.push(this.getLayoutInfo(keys[i]));
    }

    // Always add persisted keys (e.g. the focused item), even when out of view.
    for (let key of virtualizer.persistedKeys) {
      let item = virtualizer.collection.getItem(key);
      if (item?.index < startIndex) {
        layoutInfos.unshift(this.getLayoutInfo(key));
      } else if (item?.index > endIndex) {
        layoutInfos.push(this.getLayoutInfo(key));
      }
    }

    return layoutInfos;
  }

  // Provide a LayoutInfo for a specific item.
  getLayoutInfo(key: Key): LayoutInfo | null {
    let node = this.virtualizer!.collection.getItem(key);
    if (!node) {
      return null;
    }

    let rect = new Rect(node.index * 100, 0, 100, 100);
    return new LayoutInfo(node.type, node.key, rect);
  }

  // Provide the total size of all items.
  getContentSize(): Size {
    let numItems = this.virtualizer!.collection.size;
    return new Size(numItems * 100, 100);
  }
}

function Example() {
  let items = [];
  for (let i = 0; i < 200; i++) {
    items.push({ id: i, name: `Item ${i}` });
  }

  return (
    <Virtualizer layout={HorizontalLayout}>
      <ListBox
        aria-label="Favorite animal"
        items={items}
        orientation="horizontal"
        style={{ height: 'fit-content' }}
      >
        {(item) => <ListBoxItem className="item">{item.name}</ListBoxItem>}
      </ListBox>
    </Virtualizer>
  );
}
```

```
import {
  Key,
  Layout,
  LayoutInfo,
  Rect,
  Size
} from 'react-aria-components';

class HorizontalLayout extends Layout {
  // Determine which items are visible within the given rectangle.
  getVisibleLayoutInfos(rect: Rect): LayoutInfo[] {
    let virtualizer = this.virtualizer!;
    let keys = Array.from(virtualizer.collection.getKeys());
    let startIndex = Math.max(0, Math.floor(rect.x / 100));
    let endIndex = Math.min(
      keys.length - 1,
      Math.ceil(rect.maxX / 100)
    );
    let layoutInfos = [];
    for (let i = startIndex; i <= endIndex; i++) {
      layoutInfos.push(this.getLayoutInfo(keys[i]));
    }

    // Always add persisted keys (e.g. the focused item), even when out of view.
    for (let key of virtualizer.persistedKeys) {
      let item = virtualizer.collection.getItem(key);
      if (item?.index < startIndex) {
        layoutInfos.unshift(this.getLayoutInfo(key));
      } else if (item?.index > endIndex) {
        layoutInfos.push(this.getLayoutInfo(key));
      }
    }

    return layoutInfos;
  }

  // Provide a LayoutInfo for a specific item.
  getLayoutInfo(key: Key): LayoutInfo | null {
    let node = this.virtualizer!.collection.getItem(key);
    if (!node) {
      return null;
    }

    let rect = new Rect(node.index * 100, 0, 100, 100);
    return new LayoutInfo(node.type, node.key, rect);
  }

  // Provide the total size of all items.
  getContentSize(): Size {
    let numItems = this.virtualizer!.collection.size;
    return new Size(numItems * 100, 100);
  }
}

function Example() {
  let items = [];
  for (let i = 0; i < 200; i++) {
    items.push({ id: i, name: `Item ${i}` });
  }

  return (
    <Virtualizer layout={HorizontalLayout}>
      <ListBox
        aria-label="Favorite animal"
        items={items}
        orientation="horizontal"
        style={{ height: 'fit-content' }}
      >
        {(item) => (
          <ListBoxItem className="item">
            {item.name}
          </ListBoxItem>
        )}
      </ListBox>
    </Virtualizer>
  );
}
```

```
import {
  Key,
  Layout,
  LayoutInfo,
  Rect,
  Size
} from 'react-aria-components';

class HorizontalLayout
  extends Layout {
  // Determine which items are visible within the given rectangle.
  getVisibleLayoutInfos(
    rect: Rect
  ): LayoutInfo[] {
    let virtualizer =
      this.virtualizer!;
    let keys = Array
      .from(
        virtualizer
          .collection
          .getKeys()
      );
    let startIndex = Math
      .max(
        0,
        Math.floor(
          rect.x / 100
        )
      );
    let endIndex = Math
      .min(
        keys.length - 1,
        Math.ceil(
          rect.maxX / 100
        )
      );
    let layoutInfos = [];
    for (
      let i = startIndex;
      i <= endIndex;
      i++
    ) {
      layoutInfos.push(
        this
          .getLayoutInfo(
            keys[i]
          )
      );
    }

    // Always add persisted keys (e.g. the focused item), even when out of view.
    for (
      let key
        of virtualizer
          .persistedKeys
    ) {
      let item =
        virtualizer
          .collection
          .getItem(key);
      if (
        item?.index <
          startIndex
      ) {
        layoutInfos
          .unshift(
            this
              .getLayoutInfo(
                key
              )
          );
      } else if (
        item?.index >
          endIndex
      ) {
        layoutInfos.push(
          this
            .getLayoutInfo(
              key
            )
        );
      }
    }

    return layoutInfos;
  }

  // Provide a LayoutInfo for a specific item.
  getLayoutInfo(
    key: Key
  ): LayoutInfo | null {
    let node = this
      .virtualizer!
      .collection
      .getItem(key);
    if (!node) {
      return null;
    }

    let rect = new Rect(
      node.index * 100,
      0,
      100,
      100
    );
    return new LayoutInfo(
      node.type,
      node.key,
      rect
    );
  }

  // Provide the total size of all items.
  getContentSize(): Size {
    let numItems =
      this.virtualizer!
        .collection.size;
    return new Size(
      numItems * 100,
      100
    );
  }
}

function Example() {
  let items = [];
  for (
    let i = 0;
    i < 200;
    i++
  ) {
    items.push({
      id: i,
      name: `Item ${i}`
    });
  }

  return (
    <Virtualizer
      layout={HorizontalLayout}
    >
      <ListBox
        aria-label="Favorite animal"
        items={items}
        orientation="horizontal"
        style={{
          height:
            'fit-content'
        }}
      >
        {(item) => (
          <ListBoxItem className="item">
            {item.name}
          </ListBoxItem>
        )}
      </ListBox>
    </Virtualizer>
  );
}
```