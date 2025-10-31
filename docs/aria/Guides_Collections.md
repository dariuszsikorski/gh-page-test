# Collections

**Source**: [https://react-spectrum.adobe.com/react-aria/collections.html](https://react-spectrum.adobe.com/react-aria/collections.html)

> Documentation for Collections in the React Aria package.

---

Many components display a collection of items, and provide functionality such as keyboard navigation, selection, and more. React Aria has a consistent, compositional API to define the items displayed in these components.

* * *

Many React Aria components display a collection of items of some kind. For example, lists, menus, selects, tables, trees, and grids. These collections can usually be navigated with the keyboard using arrow keys, and many have some form of selection. Many support loading data asynchronously, updating that data over time, virtualized scrolling for performance with large collections, and more.

React Aria implements a JSX-based API for defining collections. This is an intuitive way to provide items with rich contents and various options as props. Building hierarchical collections, e.g. sections, or a tree of items is also very natural in JSX. React Aria provides a consistent API across many types of collection components that is easy to learn, performant with large collections, and extensible for advanced features.

* * *

A **static collection** is a collection that does not change over time (e.g. hard coded). This is common for components like action menus where the items are built into the application rather than representing user data.

```
<Menu>
  <MenuItem>Open</MenuItem>
  <MenuItem>Edit</MenuItem>
  <MenuItem>Delete</MenuItem>
</Menu>
```

```
<Menu>
  <MenuItem>Open</MenuItem>
  <MenuItem>Edit</MenuItem>
  <MenuItem>Delete</MenuItem>
</Menu>
```

```
<Menu>
  <MenuItem>
    Open
  </MenuItem>
  <MenuItem>
    Edit
  </MenuItem>
  <MenuItem>
    Delete
  </MenuItem>
</Menu>
```

Sections or groups of items can be constructed by wrapping the items in a section element. A `<Header>` can also be rendered within a section to provide a section title.

```
<Menu>
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
</Menu>
```

```
<Menu>
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
</Menu>
```

```
<Menu>
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
</Menu>
```

* * *

Static collections are great when the items never change, but how about dynamic data? A **dynamic collection** is a collection that is based on data, for example from an API. In addition, it may change over time as items are added, updated, or removed from the collection by a user.

React Aria implements a JSX-based interface for dynamic collections, which maps over your data and applies a function for each item to render it. The following example shows how a collection can be rendered based on dynamic data, stored in React state.

```
let [animals, setAnimals] = useState([
  {id: 1, name: 'Aardvark'},
  {id: 2, name: 'Kangaroo'},
  {id: 3, name: 'Snake'}
]);

<ListBox items={animals}>
  {item => <ListBoxItem>{item.name}</ListBoxItem>}
</ListBox>
```

```
let [animals, setAnimals] = useState([
  {id: 1, name: 'Aardvark'},
  {id: 2, name: 'Kangaroo'},
  {id: 3, name: 'Snake'}
]);

<ListBox items={animals}>
  {item => <ListBoxItem>{item.name}</ListBoxItem>}
</ListBox>
```

```
let [
  animals,
  setAnimals
] = useState([
  {
    id: 1,
    name: 'Aardvark'
  },
  {
    id: 2,
    name: 'Kangaroo'
  },
  {
    id: 3,
    name: 'Snake'
  }
]);

<ListBox
  items={animals}
>
  {(item) => (
    <ListBoxItem>
      {item.name}
    </ListBoxItem>
  )}
</ListBox>
```

As you can see, the items are passed to the `items` prop of the top-level component, which iterates over each item and calls the function passed as children to the component. The item object is passed to the function, which returns a `<ListBoxItem>`.

All items in a collection must have a unique id, which is used to determine what items in the collection changed when updates occur. By default, React Aria looks for an `id` property on each item object, which is often returned from a database. You can also specify a custom id on each item element using the `id` prop. For example, if all animals in the example had a unique `name` property, then each item's `id` could be set to `item.name` to use it as the unique id.

```
let [animals, setAnimals] = useState([
  {name: 'Aardvark'},
  {name: 'Kangaroo'},
  {name: 'Snake'}
]);

<ListBox items={animals}>
  {item => <ListBoxItem id={item.name}>{item.name}</ListBoxItem>}
</ListBox>
```

```
let [animals, setAnimals] = useState([
  { name: 'Aardvark' },
  { name: 'Kangaroo' },
  { name: 'Snake' }
]);

<ListBox items={animals}>
  {(item) => (
    <ListBoxItem id={item.name}>{item.name}</ListBoxItem>
  )}
</ListBox>
```

```
let [
  animals,
  setAnimals
] = useState([
  { name: 'Aardvark' },
  { name: 'Kangaroo' },
  { name: 'Snake' }
]);

<ListBox
  items={animals}
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

You may be wondering why we didn't use `animals.map` in this example. In fact, this works just fine, but it's less performant, and you must remember to provide both a React `key` and an `id` prop.

```
let [animals, setAnimals] = useState([
  {name: 'Aardvark'},
  {name: 'Kangaroo'},
  {name: 'Snake'}
]);

<ListBox>
  {animals.map(item =>
    <ListBoxItem key={item.name} id={item.name}>{item.name}</ListBoxItem>
  )}
</ListBox>
```

```
let [animals, setAnimals] = useState([
  { name: 'Aardvark' },
  { name: 'Kangaroo' },
  { name: 'Snake' }
]);

<ListBox>
  {animals.map((item) => (
    <ListBoxItem key={item.name} id={item.name}>
      {item.name}
    </ListBoxItem>
  ))}
</ListBox>
```

```
let [
  animals,
  setAnimals
] = useState([
  { name: 'Aardvark' },
  { name: 'Kangaroo' },
  { name: 'Snake' }
]);

<ListBox>
  {animals.map(
    (item) => (
      <ListBoxItem
        key={item.name}
        id={item.name}
      >
        {item.name}
      </ListBoxItem>
    )
  )}
</ListBox>
```

Using the `items` prop and providing a render function allows React Aria to automatically cache the results of rendering each item and avoid re-rendering all items in the collection when only one of them changes. This has big performance benefits for large collections.

When you need to update the data to add, remove, or change an item, you can do so using a standard React state update.

**Important**: all items passed to a collection component must be immutable. Changing a property on an item, or calling `array.push()` or other mutating methods will not work as expected.

The `[useListData](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/data/src/useListData.ts:useListData)` hook can be used to manage the data and state for a list of items, and update it over time. It will also handle removing items from the selection state when they are removed from the list. See the [useListData](https://react-spectrum.adobe.com/react-stately/useListData.html) docs for more details.

The following example shows how you might append a new item to the list.

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

function addAnimal(name) {
  list.append({ name });
}

<ListBox items={list.items}>
  {(item) => <ListBoxItem id={item.name}>{item.name}</ListBoxItem>}
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

function addAnimal(name) {
  list.append({ name });
}

<ListBox items={list.items}>
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

function addAnimal(
  name
) {
  list.append({ name });
}

<ListBox
  items={list.items}
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

Note that `useListData` is a convenience hook, not a requirement. You can use any state management library to manage collection items.

As described above, dynamic collections are automatically memoized to improve performance. Rendered item elements are cached based on the object identity of the list item. If rendering an item depends on additional external state, the `dependencies` prop must be provided. This invalidates rendered elements similar to dependencies in React's `useMemo` hook.

```
function Example(props) {
  return (
    <ListBox items={items} dependencies={[props.layout]}>
      {item => <MyItem layout={props.layout}>{item.name}</MyItem>}
    </ListBox>
  );
}
```

```
function Example(props) {
  return (
    <ListBox items={items} dependencies={[props.layout]}>
      {(item) => (
        <MyItem layout={props.layout}>{item.name}</MyItem>
      )}
    </ListBox>
  );
}
```

```
function Example(props) {
  return (
    <ListBox
      items={items}
      dependencies={[
        props.layout
      ]}
    >
      {(item) => (
        <MyItem
          layout={props
            .layout}
        >
          {item.name}
        </MyItem>
      )}
    </ListBox>
  );
}
```

Note that adding dependencies will result in the _entire_ list being invalidated when a dependency changes. To avoid this and invalidate only an individual item, update the item object itself to include the information rather than accessing it from external state.

Sections can be built by returning a section instead of an item from the top-level item renderer. Sections also support an `items` prop and a render function for their children. If the section also has a header, the `[Collection](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/collections/src/CollectionBuilder.tsx:Collection)` component can be used to render the child items.

```
let [sections, setSections] = useState([
  {
    name: 'People',
    items: [
      {name: 'David'},
      {name: 'Same'},
      {name: 'Jane'}
    ]
  },
  {
    name: 'Animals',
    items: [
      {name: 'Aardvark'},
      {name: 'Kangaroo'},
      {name: 'Snake'}
    ]
  }
]);

<ListBox items={sections}>
  {section =>
    <ListBoxSection id={section.name}>
      <Header>{section.name}</Header>
      <Collection items={section.children}>
        {item => <ListBoxItem id={item.name}>{item.name}</ListBoxItem>}
      </Collection>
    </ListBoxSection>
  }
</ListBox>
```

```
let [sections, setSections] = useState([
  {
    name: 'People',
    items: [
      { name: 'David' },
      { name: 'Same' },
      { name: 'Jane' }
    ]
  },
  {
    name: 'Animals',
    items: [
      { name: 'Aardvark' },
      { name: 'Kangaroo' },
      { name: 'Snake' }
    ]
  }
]);

<ListBox items={sections}>
  {(section) => (
    <ListBoxSection id={section.name}>
      <Header>{section.name}</Header>
      <Collection items={section.children}>
        {(item) => (
          <ListBoxItem id={item.name}>
            {item.name}
          </ListBoxItem>
        )}
      </Collection>
    </ListBoxSection>
  )}
</ListBox>
```

```
let [
  sections,
  setSections
] = useState([
  {
    name: 'People',
    items: [
      { name: 'David' },
      { name: 'Same' },
      { name: 'Jane' }
    ]
  },
  {
    name: 'Animals',
    items: [
      {
        name: 'Aardvark'
      },
      {
        name: 'Kangaroo'
      },
      { name: 'Snake' }
    ]
  }
]);

<ListBox
  items={sections}
>
  {(section) => (
    <ListBoxSection
      id={section.name}
    >
      <Header>
        {section.name}
      </Header>
      <Collection
        items={section
          .children}
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
    </ListBoxSection>
  )}
</ListBox>
```

When updating nested data, be sure that all parent items change accordingly. Items are immutable, so don't use mutating methods like push, or replace a property on a parent item. Instead, copy the items that changed as needed.

The `[useTreeData](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/data/src/useTreeData.ts:useTreeData)` hook can be used to manage data and state for a tree of items. This is similar to `useListData`, but with support for hierarchical data. Like `useListData`, `useTreeData` will also handle automatically removing items from the selection when they are removed from the list. See the [useTreeData](https://react-spectrum.adobe.com/react-stately/useTreeData.html) docs for more details.

```
import {useTreeData} from 'react-stately';

let tree = useTreeData({
  initialItems: [
    {
      name: 'People',
      items: [
        { name: 'David' },
        { name: 'Sam' },
        { name: 'Jane' }
      ]
    },
    {
      name: 'Animals',
      items: [
        { name: 'Aardvark' },
        { name: 'Kangaroo' },
        { name: 'Snake' }
      ]
    }
  ],
  getKey: (item) => item.name,
  getChildren: (item) => item.items
});

function addPerson(name) {
  tree.append('People', { name });
}

<ListBox items={tree.items}>
  {(node) => (
    <ListBoxSection id={section.name} items={node.children}>
      <Header>{section.name}</Header>
      <Collection items={section.children}>
        {(item) => <ListBoxItem id={item.name}>{item.name}</ListBoxItem>}
      </Collection>
    </ListBoxSection>
  )}
</ListBox>
```

```
import {useTreeData} from 'react-stately';

let tree = useTreeData({
  initialItems: [
    {
      name: 'People',
      items: [
        { name: 'David' },
        { name: 'Sam' },
        { name: 'Jane' }
      ]
    },
    {
      name: 'Animals',
      items: [
        { name: 'Aardvark' },
        { name: 'Kangaroo' },
        { name: 'Snake' }
      ]
    }
  ],
  getKey: (item) => item.name,
  getChildren: (item) => item.items
});

function addPerson(name) {
  tree.append('People', { name });
}

<ListBox items={tree.items}>
  {(node) => (
    <ListBoxSection
      id={section.name}
      items={node.children}
    >
      <Header>{section.name}</Header>
      <Collection items={section.children}>
        {(item) => (
          <ListBoxItem id={item.name}>
            {item.name}
          </ListBoxItem>
        )}
      </Collection>
    </ListBoxSection>
  )}
</ListBox>
```

```
import {useTreeData} from 'react-stately';

let tree = useTreeData({
  initialItems: [
    {
      name: 'People',
      items: [
        {
          name: 'David'
        },
        { name: 'Sam' },
        { name: 'Jane' }
      ]
    },
    {
      name: 'Animals',
      items: [
        {
          name:
            'Aardvark'
        },
        {
          name:
            'Kangaroo'
        },
        { name: 'Snake' }
      ]
    }
  ],
  getKey: (item) =>
    item.name,
  getChildren: (item) =>
    item.items
});

function addPerson(
  name
) {
  tree.append('People', {
    name
  });
}

<ListBox
  items={tree.items}
>
  {(node) => (
    <ListBoxSection
      id={section.name}
      items={node
        .children}
    >
      <Header>
        {section.name}
      </Header>
      <Collection
        items={section
          .children}
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
    </ListBoxSection>
  )}
</ListBox>
```

Note that `useTreeData` is a utility hook, not a requirement. You can use any state management library to manage collection items.

* * *

The `[useAsyncList](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/data/src/useAsyncList.ts:useAsyncList)` hook can be used to manage async data loading from an API. Pass a `load` function to `useAsyncList`, which returns the items to render. You can use whatever data fetching library you want, or the built-in [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) API. See the [useAsyncList](https://react-spectrum.adobe.com/react-stately/useAsyncList.html) docs for more details.

This example fetches a list of Pokemon from an API and displays them in a Select.

```
import {useAsyncList} from 'react-stately';

let list = useAsyncList({
  async load({ signal }) {
    let res = await fetch('https://pokeapi.co/api/v2/pokemon', { signal });
    let json = await res.json();
    return { items: json.results };
  }
});

<Select>
  <Label>Pick a Pokemon</Label>
  <Button>
    <SelectValue />
  </Button>
  <Popover>
    <ListBox items={list.items}>
      {(item) => <ListBoxItem id={item.name}>{item.name}</ListBoxItem>}
    </ListBox>
  </Popover>
</Select>
```

```
import {useAsyncList} from 'react-stately';

let list = useAsyncList({
  async load({ signal }) {
    let res = await fetch(
      'https://pokeapi.co/api/v2/pokemon',
      { signal }
    );
    let json = await res.json();
    return { items: json.results };
  }
});

<Select>
  <Label>Pick a Pokemon</Label>
  <Button>
    <SelectValue />
  </Button>
  <Popover>
    <ListBox items={list.items}>
      {(item) => (
        <ListBoxItem id={item.name}>
          {item.name}
        </ListBoxItem>
      )}
    </ListBox>
  </Popover>
</Select>
```

```
import {useAsyncList} from 'react-stately';

let list = useAsyncList({
  async load(
    { signal }
  ) {
    let res =
      await fetch(
        'https://pokeapi.co/api/v2/pokemon',
        { signal }
      );
    let json = await res
      .json();
    return {
      items: json.results
    };
  }
});

<Select>
  <Label>
    Pick a Pokemon
  </Label>
  <Button>
    <SelectValue />
  </Button>
  <Popover>
    <ListBox
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
    </ListBox>
  </Popover>
</Select>
```

Note that `useAsyncList` is a convenience hook, not a requirement. You can use any state management or data loading library to manage collection items.

* * *

Collection components like [ListBox](https://react-spectrum.adobe.com/react-aria/ListBox.html), [GridList](https://react-spectrum.adobe.com/react-aria/GridList.html), and [Table](https://react-spectrum.adobe.com/react-aria/Table.html) support virtualized scrolling, which is a performance optimization for large lists. Instead of rendering all items to the DOM at once, it only renders the visible items, reusing them as the user scrolls. This results in a small number of DOM elements being rendered, reducing memory usage and improving browser layout and rendering performance.

Collections can be virtualized by wrapping them in a <`[Virtualizer](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Virtualizer.tsx:Virtualizer)`\>, and providing a `[Layout](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/virtualizer/src/Layout.ts:Layout)` object such as `[ListLayout](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/layout/src/ListLayout.ts:ListLayout)` or `[GridLayout](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/layout/src/GridLayout.ts:GridLayout)`. Layouts are responsible for determining the position of each item in the collection, and providing the list of visible items. When using a Virtualizer, all items are positioned by the `Layout` object, and CSS layout properties such as flexbox and grid do not apply.

```
import {Virtualizer, ListLayout} from 'react-aria-components';

let layout = useMemo(() => new ListLayout({
  rowHeight: 50
}), []);

<Virtualizer layout={layout}>
  <ListBox items={items}>
    {item => <ListBoxItem>{item}</ListBoxItem>}
  </ListBox>
</Virtualizer>
```

```
import {
  ListLayout,
  Virtualizer
} from 'react-aria-components';

let layout = useMemo(() =>
  new ListLayout({
    rowHeight: 50
  }), []);

<Virtualizer layout={layout}>
  <ListBox items={items}>
    {(item) => <ListBoxItem>{item}</ListBoxItem>}
  </ListBox>
</Virtualizer>
```

```
import {
  ListLayout,
  Virtualizer
} from 'react-aria-components';

let layout = useMemo(
  () =>
    new ListLayout({
      rowHeight: 50
    }),
  []
);

<Virtualizer
  layout={layout}
>
  <ListBox
    items={items}
  >
    {(item) => (
      <ListBoxItem>
        {item}
      </ListBoxItem>
    )}
  </ListBox>
</Virtualizer>
```

See the [Virtualizer](https://react-spectrum.adobe.com/react-aria/Virtualizer.html) docs for more details.

* * *

Internally, `Virtualizer` is powered by a `CollectionRenderer`. Collection components delegate to a `CollectionRenderer` to render their items and sections, and to handle keyboard navigation and drag and drop interactions. Collection renderers are provided via `CollectionRendererContext`. The default `CollectionRenderer` simply renders all items to the DOM, but this can be overridden to implement custom behavior. The API includes the following properties:

Name

Type

Description

`CollectionRoot`

`React.ComponentType<[CollectionRootProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Collection.tsx:CollectionRootProps)>`

A component that renders the root collection items.

`CollectionBranch`

`React.ComponentType<[CollectionBranchProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Collection.tsx:CollectionBranchProps)>`

A component that renders the child collection items.

`isVirtualized`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether this is a virtualized collection.

`layoutDelegate`

`[LayoutDelegate](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/collections.d.ts:LayoutDelegate)`

A delegate object that provides layout information for items in the collection.

`dropTargetDelegate`

`[DropTargetDelegate](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dnd.d.ts:DropTargetDelegate)`

A delegate object that provides drop targets for pointer coordinates within the collection.

The two required properties are `CollectionRoot` and `CollectionBranch`. These are React components that render the items at the root of a collection, and the children of a specific item respectively. See the [Collection interface docs](https://react-spectrum.adobe.com/react-stately/Collection.html) for details on the collection and item APIs.

```
import type {CollectionRenderer} from 'react-aria-components';
import {CollectionRendererContext} from 'react-aria-components';

const renderer: CollectionRenderer = {
  CollectionRoot({collection}) {
    let items = [];
    for (let item of collection) {
      items.push(item.render(item));
    }
    return items;
  },
  CollectionBranch({collection, parent}) {
    let items = [];
    for (let item of collection.getChildren(parent.key)) {
      items.push(item.render(item));
    }
    return items;
  }
};

<CollectionRendererContext.Provider value={renderer}>
  <ListBox>
    {/* ... */}
  </ListBox>
</CollectionRendererContext.Provider>
```

```
import type {CollectionRenderer} from 'react-aria-components';
import {CollectionRendererContext} from 'react-aria-components';

const renderer: CollectionRenderer = {
  CollectionRoot({ collection }) {
    let items = [];
    for (let item of collection) {
      items.push(item.render(item));
    }
    return items;
  },
  CollectionBranch({ collection, parent }) {
    let items = [];
    for (let item of collection.getChildren(parent.key)) {
      items.push(item.render(item));
    }
    return items;
  }
};

<CollectionRendererContext.Provider value={renderer}>
  <ListBox>
    {/* ... */}
  </ListBox>
</CollectionRendererContext.Provider>
```

```
import type {CollectionRenderer} from 'react-aria-components';
import {CollectionRendererContext} from 'react-aria-components';

const renderer:
  CollectionRenderer = {
    CollectionRoot(
      { collection }
    ) {
      let items = [];
      for (
        let item
          of collection
      ) {
        items.push(
          item.render(
            item
          )
        );
      }
      return items;
    },
    CollectionBranch(
      {
        collection,
        parent
      }
    ) {
      let items = [];
      for (
        let item
          of collection
            .getChildren(
              parent.key
            )
      ) {
        items.push(
          item.render(
            item
          )
        );
      }
      return items;
    }
  };

<CollectionRendererContext.Provider
  value={renderer}
>
  <ListBox>
    {/* ... */}
  </ListBox>
</CollectionRendererContext.Provider>
```

* * *

If you're using React Aria and React Stately hooks rather than components, the collection API is slightly different. See the [React Stately collections](https://react-spectrum.adobe.com/react-stately/collections.html) documentation for more details.