# Selection

**Source**: [https://react-spectrum.adobe.com/react-aria/selection.html](https://react-spectrum.adobe.com/react-aria/selection.html)

> Documentation for Selection in the React Aria package.

---

Many [collection components](https://react-spectrum.adobe.com/react-aria/collections.html) support selecting items by clicking or tapping them, or by using the keyboard. This page discusses how to handle selection events, how to control selection programmatically, and the data structures used to represent a selection.

* * *

Selection is handled by the `onSelectionChange` event, which is supported on most collection components. Controlled behavior is supported by the `selectedKeys` prop, and uncontrolled behavior is supported by the `defaultSelectedKeys` prop. These props are passed to the top-level collection component, and accept a set of unique item ids. This allows marking items as selected by their id even before they are loaded, which can be useful when you know what items should be selected on initial render, before data loading has completed.

Selection is represented by a [Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) object. You can also pass any iterable collection (e.g. an array) to the `selectedKeys` and `defaultSelectedKeys` props, but the `onSelectionChange` event will always pass back a Set.

Selection is supported on both [static](https://react-spectrum.adobe.com/react-aria/collections.html#static-collections) and [dynamic](https://react-spectrum.adobe.com/react-aria/collections.html#dynamic-collections) collections. The following example shows how to implement controlled selection behavior on a static collection, but could be applied to a dynamic collection the same way.

```
let [selectedKeys, setSelectedKeys] = useState(new Set());

<ListBox selectedKeys={selectedKeys} onSelectionChange={setSelectedKeys}>
  <ListBoxItem id="one">One</ListBoxItem>
  <ListBoxItem id="two">Two</ListBoxItem>
  <ListBoxItem id="three">Three</ListBoxItem>
</ListBox>
```

```
let [selectedKeys, setSelectedKeys] = useState(new Set());

<ListBox
  selectedKeys={selectedKeys}
  onSelectionChange={setSelectedKeys}
>
  <ListBoxItem id="one">One</ListBoxItem>
  <ListBoxItem id="two">Two</ListBoxItem>
  <ListBoxItem id="three">Three</ListBoxItem>
</ListBox>
```

```
let [
  selectedKeys,
  setSelectedKeys
] = useState(new Set());

<ListBox
  selectedKeys={selectedKeys}
  onSelectionChange={setSelectedKeys}
>
  <ListBoxItem id="one">
    One
  </ListBoxItem>
  <ListBoxItem id="two">
    Two
  </ListBoxItem>
  <ListBoxItem id="three">
    Three
  </ListBoxItem>
</ListBox>
```

When the user selects an item, its `id` is added to the `selectedKeys` set via the `onSelectionChange` event.

* * *

So far, we've discussed multiple selection. However, you may wish to limit selection to a single item instead. In some components, like a select or combo box, only single selection is supported. In this case, the singular `selectedKey` and `defaultSelectedKey` props are available instead of their plural variants. These accept a single id instead of a `Set` as their value, and `onSelectionChange` is also called with a single id.

```
let [selectedKey, setSelectedKey] = useState(null);

<MyComboBox
  selectedKey={selectedKey}  onSelectionChange={setSelectedKey}>
  <ListBoxItem id="one">One</ListBoxItem>
  <ListBoxItem id="two">Two</ListBoxItem>
  <ListBoxItem id="three">Three</ListBoxItem>
</MyComboBox>
```

```
let [selectedKey, setSelectedKey] = useState(null);

<MyComboBox
  selectedKey={selectedKey}  onSelectionChange={setSelectedKey}>
  <ListBoxItem id="one">One</ListBoxItem>
  <ListBoxItem id="two">Two</ListBoxItem>
  <ListBoxItem id="three">Three</ListBoxItem>
</MyComboBox>
```

```
let [
  selectedKey,
  setSelectedKey
] = useState(null);

<MyComboBox
  selectedKey={selectedKey}  onSelectionChange={setSelectedKey}
>
  <ListBoxItem id="one">
    One
  </ListBoxItem>
  <ListBoxItem id="two">
    Two
  </ListBoxItem>
  <ListBoxItem id="three">
    Three
  </ListBoxItem>
</MyComboBox>
```

In components which support multiple selection, you can limit the selection to a single item using the `selectionMode` prop. This continues to accept `selectedKeys` and `defaultSelectedKeys` as a `Set`, but it will only contain a single id at a time.

```
let [selectedKeys, setSelectedKeys] = useState(new Set());

<ListBox
  selectionMode="single"  selectedKeys={selectedKeys}
  onSelectionChange={setSelectedKeys}>
  <ListBoxItem id="one">One</ListBoxItem>
  <ListBoxItem id="two">Two</ListBoxItem>
  <ListBoxItem id="three">Three</ListBoxItem>
</ListBox>
```

```
let [selectedKeys, setSelectedKeys] = useState(new Set());

<ListBox
  selectionMode="single"  selectedKeys={selectedKeys}
  onSelectionChange={setSelectedKeys}>
  <ListBoxItem id="one">One</ListBoxItem>
  <ListBoxItem id="two">Two</ListBoxItem>
  <ListBoxItem id="three">Three</ListBoxItem>
</ListBox>
```

```
let [
  selectedKeys,
  setSelectedKeys
] = useState(new Set());

<ListBox
  selectionMode="single"  selectedKeys={selectedKeys}
  onSelectionChange={setSelectedKeys}
>
  <ListBoxItem id="one">
    One
  </ListBoxItem>
  <ListBoxItem id="two">
    Two
  </ListBoxItem>
  <ListBoxItem id="three">
    Three
  </ListBoxItem>
</ListBox>
```

* * *

When data in a collection changes, the selection state may need to be updated accordingly. For example, if a selected item is deleted, it should be removed from the set of selected keys. You can do this yourself, or use the `[useListData](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/data/src/useListData.ts:useListData)` and `[useTreeData](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/data/src/useTreeData.ts:useTreeData)` hooks to handle this automatically.

```
import {useListData} from 'react-stately';

let list = useListData({
  initialItems: [
    {name: 'Aardvark'},
    {name: 'Kangaroo'},
    {name: 'Snake'}
  ],
  initialSelectedKeys: ['Kangaroo'],
  getKey: item => item.name
});

function removeItem() {
  // Removing the list item will also remove it from the selection state.
  list.remove('Kangaroo');}

<ListBox
  items={list.items}
  selectedKeys={list.selectedKeys}
  onSelectionChange={list.setSelectedKeys}>
  {item => <ListBoxItem id={item.name}>{item.name}</ListBoxItem>}
</ListBox>
```

```
import {useListData} from 'react-stately';

let list = useListData({
  initialItems: [
    { name: 'Aardvark' },
    { name: 'Kangaroo' },
    { name: 'Snake' }
  ],
  initialSelectedKeys: ['Kangaroo'],
  getKey: (item) => item.name
});

function removeItem() {
  // Removing the list item will also remove it from the selection state.
  list.remove('Kangaroo');}

<ListBox
  items={list.items}
  selectedKeys={list.selectedKeys}
  onSelectionChange={list.setSelectedKeys}
>
  {(item) => (
    <ListBoxItem id={item.name}>{item.name}</ListBoxItem>
  )}
</ListBox>
```

```
import {useListData} from 'react-stately';

let list = useListData({
  initialItems: [
    { name: 'Aardvark' },
    { name: 'Kangaroo' },
    { name: 'Snake' }
  ],
  initialSelectedKeys: [
    'Kangaroo'
  ],
  getKey: (item) =>
    item.name
});

function removeItem() {
  // Removing the list item will also remove it from the selection state.
  list.remove(
    'Kangaroo'
  );}

<ListBox
  items={list.items}
  selectedKeys={list
    .selectedKeys}
  onSelectionChange={list
    .setSelectedKeys}
>
  {(item) => (
    <ListBoxItem
      id={item.name}
    >
      {item.name}
    </ListBoxItem>
  )}
</ListBox>
```

For more information, see [useListData](https://react-spectrum.adobe.com/react-stately/useListData.html) and [useTreeData](https://react-spectrum.adobe.com/react-stately/useTreeData.html).

* * *

Some components support a checkbox to select all items in the collection, or a keyboard shortcut like ⌘ Cmd + A. This represents a selection of all items in the collection, regardless of whether or not all items have been loaded from the network. For example, when using a component with infinite scrolling support, the user will be unaware that all items are not yet loaded because it loads more transparently to them as they scroll down. For this reason, it makes sense for select all to represent all items, not just the loaded ones.

When a select all event occurs, `onSelectionChange` is called with the string `"all"` rather than a set of selected keys. `selectedKeys` and `defaultSelectedKeys` can also be set to `"all"` to programmatically select all items. This represents all items in the collection, whether currently loaded or not. The application must adjust its handling of bulk actions in this case to apply to the entire collection rather than only the keys available to it locally.

```
let [selectedKeys, setSelectedKeys] = useState(new Set());

function performBulkAction() {
  if (selectedKeys === 'all') {    // perform action on all items
  } else {
    // perform action on selected items in selectedKeys
  }
}

<ListBox
  items={items}
  selectedKeys={selectedKeys}
  onSelectionChange={setSelectedKeys}>
  {item => <ListBoxItem>{item.name}</ListBoxItem>}
</ListBox>
```

```
let [selectedKeys, setSelectedKeys] = useState(new Set());

function performBulkAction() {
  if (selectedKeys === 'all') {    // perform action on all items
  } else {
    // perform action on selected items in selectedKeys
  }
}

<ListBox
  items={items}
  selectedKeys={selectedKeys}
  onSelectionChange={setSelectedKeys}>
  {item => <ListBoxItem>{item.name}</ListBoxItem>}
</ListBox>
```

```
let [
  selectedKeys,
  setSelectedKeys
] = useState(new Set());

function performBulkAction() {
  if (
    selectedKeys ===
      'all'
  ) {    // perform action on all items
  } else {
    // perform action on selected items in selectedKeys
  }
}

<ListBox
  items={items}
  selectedKeys={selectedKeys}
  onSelectionChange={setSelectedKeys}
>
  {(item) => (
    <ListBoxItem>
      {item.name}
    </ListBoxItem>
  )}
</ListBox>
```

* * *

If you're using React Aria and React Stately hooks rather than components, the collection and selection APIs are slightly different. See the [React Stately selection](https://react-spectrum.adobe.com/react-stately/selection.html) documentation for more details.