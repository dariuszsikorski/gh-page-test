# Autocomplete

**Source**: [https://react-spectrum.adobe.com/react-aria/Autocomplete.html](https://react-spectrum.adobe.com/react-aria/Autocomplete.html)

> Documentation for Autocomplete in the React Aria package.

---

rc

An autocomplete combines a TextField or SearchField with a Menu or ListBox, allowing users to search or filter a list of suggestions.

* * *

```
import {Autocomplete, Button, Input, Label, Menu, MenuItem, SearchField, useFilter} from 'react-aria-components';

function Example() {
  let { contains } = useFilter({ sensitivity: 'base' });
  return (
    <div className="autocomplete">
      <Autocomplete filter={contains}>
        <SearchField>
          <Label>Commands</Label>
          <Input placeholder="Search commands...." />
          <Button>✕</Button>
        </SearchField>
        <Menu>
          <MenuItem>Create new file...</MenuItem>
          <MenuItem>Create new folder...</MenuItem>
          <MenuItem>Assign to...</MenuItem>
          <MenuItem>Assign to me</MenuItem>
          <MenuItem>Change status...</MenuItem>
          <MenuItem>Change priority...</MenuItem>
          <MenuItem>Add label...</MenuItem>
          <MenuItem>Remove label...</MenuItem>
        </Menu>
      </Autocomplete>
    </div>
  );
}
```

```
import {
  Autocomplete,
  Button,
  Input,
  Label,
  Menu,
  MenuItem,
  SearchField,
  useFilter
} from 'react-aria-components';

function Example() {
  let { contains } = useFilter({ sensitivity: 'base' });
  return (
    <div className="autocomplete">
      <Autocomplete filter={contains}>
        <SearchField>
          <Label>Commands</Label>
          <Input placeholder="Search commands...." />
          <Button>✕</Button>
        </SearchField>
        <Menu>
          <MenuItem>Create new file...</MenuItem>
          <MenuItem>Create new folder...</MenuItem>
          <MenuItem>Assign to...</MenuItem>
          <MenuItem>Assign to me</MenuItem>
          <MenuItem>Change status...</MenuItem>
          <MenuItem>Change priority...</MenuItem>
          <MenuItem>Add label...</MenuItem>
          <MenuItem>Remove label...</MenuItem>
        </Menu>
      </Autocomplete>
    </div>
  );
}
```

```
import {
  Autocomplete,
  Button,
  Input,
  Label,
  Menu,
  MenuItem,
  SearchField,
  useFilter
} from 'react-aria-components';

function Example() {
  let { contains } =
    useFilter({
      sensitivity: 'base'
    });
  return (
    <div className="autocomplete">
      <Autocomplete
        filter={contains}
      >
        <SearchField>
          <Label>
            Commands
          </Label>
          <Input placeholder="Search commands...." />
          <Button>
            ✕
          </Button>
        </SearchField>
        <Menu>
          <MenuItem>
            Create new
            file...
          </MenuItem>
          <MenuItem>
            Create new
            folder...
          </MenuItem>
          <MenuItem>
            Assign to...
          </MenuItem>
          <MenuItem>
            Assign to me
          </MenuItem>
          <MenuItem>
            Change
            status...
          </MenuItem>
          <MenuItem>
            Change
            priority...
          </MenuItem>
          <MenuItem>
            Add label...
          </MenuItem>
          <MenuItem>
            Remove
            label...
          </MenuItem>
        </Menu>
      </Autocomplete>
    </div>
  );
}
```

Show CSS

```
@import "@react-aria/example-theme";

.autocomplete {
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 300px;
  height: 180px;
  border: 1px solid var(--border-color);
  padding: 16px;
  border-radius: 10px;
  background: var(--overlay-background);

  .react-aria-SearchField {
    width: 100%;
  }

  .react-aria-Menu {
    flex: 1;
    overflow: auto;
  }

  .react-aria-Label {
    margin-bottom: .5em;
  }
}
```

```
@import "@react-aria/example-theme";

.autocomplete {
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 300px;
  height: 180px;
  border: 1px solid var(--border-color);
  padding: 16px;
  border-radius: 10px;
  background: var(--overlay-background);

  .react-aria-SearchField {
    width: 100%;
  }

  .react-aria-Menu {
    flex: 1;
    overflow: auto;
  }

  .react-aria-Label {
    margin-bottom: .5em;
  }
}
```

```
@import "@react-aria/example-theme";

.autocomplete {
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 300px;
  height: 180px;
  border: 1px solid var(--border-color);
  padding: 16px;
  border-radius: 10px;
  background: var(--overlay-background);

  .react-aria-SearchField {
    width: 100%;
  }

  .react-aria-Menu {
    flex: 1;
    overflow: auto;
  }

  .react-aria-Label {
    margin-bottom: .5em;
  }
}
```

* * *

`Autocomplete` can be used to build UI patterns such as command palettes, searchable menus, and filterable selects.

-   **Flexible** – Support for multiple input types and collection types, controlled and uncontrolled state, and custom filter functions.
-   **Keyboard navigation** – Autocomplete can be navigated using the arrow keys, along with page up/down, home/end, etc. The list of options is filtered while typing into the input, and items can be selected with the enter key.
-   **Accessible** – Follows the [ARIA autocomplete pattern](https://w3c.github.io/aria/#aria-autocomplete), with support for items and sections, and slots for label and description elements within each item.
-   **Styleable** – Items include builtin states for styling, such as hover, press, focus, selected, and disabled.

**Note**: Autocomplete supports experiences where the text input and suggestion lists are siblings. For an input combined with a separate popover suggestion list, see the [ComboBox](https://react-spectrum.adobe.com/react-aria/ComboBox.html) component.

* * *

`Autocomplete` is a controller for a child text input, such as a [TextField](https://react-spectrum.adobe.com/react-aria/TextField.html) or [SearchField](https://react-spectrum.adobe.com/react-aria/SearchField.html), and a collection component such as a [Menu](https://react-spectrum.adobe.com/react-aria/Menu.html) or [ListBox](https://react-spectrum.adobe.com/react-aria/ListBox.html). It enables the user to filter a list of items, and navigate via the arrow keys while keeping focus on the input.

```
import {Autocomplete, SearchField, Menu} from 'react-aria-components';

<Autocomplete>
  <SearchField /> or <TextField />
  <Menu /> or <ListBox />
</Autocomplete>
```

```
import {
  Autocomplete,
  Menu,
  SearchField
} from 'react-aria-components';

<Autocomplete>
  <SearchField /> or <TextField />
  <Menu /> or <ListBox />
</Autocomplete>
```

```
import {
  Autocomplete,
  Menu,
  SearchField
} from 'react-aria-components';

<Autocomplete>
  <SearchField /> or
  {' '}
  <TextField />
  <Menu /> or{' '}
  <ListBox />
</Autocomplete>
```

`Autocomplete` makes use of the following concepts:

[

Collections

Defining collections of items, async loading, and updating items over time.

](https://react-spectrum.adobe.com/react-aria/collections.html)[

Selection

Interactions and data structures to represent selection.

](https://react-spectrum.adobe.com/react-aria/selection.html)

An `Autocomplete` can use the following components, which may also be used standalone or reused in other components.

[

TextField

A text field allows a user to enter a plain text value with a keyboard.

](https://react-spectrum.adobe.com/react-aria/TextField.html)[

SearchField

A search field allows a user to enter and clear a search query.

](https://react-spectrum.adobe.com/react-aria/SearchField.html)[

Menu

A menu displays a list of actions or options that a user can choose.

](https://react-spectrum.adobe.com/react-aria/Menu.html)[

ListBox

A listbox allows a user to select one or more options from a list.

](https://react-spectrum.adobe.com/react-aria/ListBox.html)

* * *

[![](https://react-spectrum.adobe.com/command-palette.72c107a1.png)

Command Palette

A command palette with actions, styled with Tailwind CSS.

](https://react-spectrum.adobe.com/react-aria/examples/command-palette.html)[![](https://react-spectrum.adobe.com/searchable-select.5f3b4739.png)

Searchable Select

A Select component with Autocomplete filtering.

](https://react-spectrum.adobe.com/react-aria/examples/searchable-select.html)

* * *

To help kick-start your project, we offer starter kits that include example implementations of all React Aria components with various styling solutions. All components are fully styled, including support for dark mode, high contrast mode, and all UI states. Each starter comes with a pre-configured [Storybook](https://storybook.js.org/) that you can experiment with, or use as a starting point for your own component library.

* * *

If you will use an Autocomplete in multiple places in your app, you can wrap all of the pieces into a reusable component. This way, the DOM structure, styling code, and other logic are defined in a single place and reused everywhere to ensure consistency.

This example wraps `Autocomplete` and all of its children together into a single component which accepts a `label` prop and `children`, which are passed through to the right places. The `Item` component is also wrapped to apply class names based on the current state, as described in the [styling](#styling) section.

```
import type {AutocompleteProps, Key} from 'react-aria-components';
import {Menu, MenuItem} from 'react-aria-components';
import {MySearchField} from './SearchField';

interface MyAutocompleteProps<T extends object>
  extends Omit<AutocompleteProps<T>, 'children'> {
  label?: string;
  placeholder?: string;
  items?: Iterable<T>;
  children: React.ReactNode | ((item: T) => React.ReactNode);
  onAction?: (id: Key) => void;
}

function MyAutocomplete<T extends object>(
  { label, placeholder, items, children, onAction, ...props }:
    MyAutocompleteProps<T>
) {
  let { contains } = useFilter({ sensitivity: 'base' });
  return (
    <div className="my-autocomplete">
      <Autocomplete filter={contains} {...props}>
        <MySearchField label={label} placeholder={placeholder} />
        <Menu items={items} onAction={onAction}>
          {children}
        </Menu>
      </Autocomplete>
    </div>
  );
}

<MyAutocomplete label="Commands" placeholder="Search commands...">
  <MenuItem>Create new file...</MenuItem>
  <MenuItem>Create new folder...</MenuItem>
  <MenuItem>Assign to...</MenuItem>
  <MenuItem>Assign to me</MenuItem>
  <MenuItem>Change status...</MenuItem>
  <MenuItem>Change priority...</MenuItem>
  <MenuItem>Add label...</MenuItem>
  <MenuItem>Remove label...</MenuItem>
</MyAutocomplete>
```

```
import type {
  AutocompleteProps,
  Key
} from 'react-aria-components';
import {Menu, MenuItem} from 'react-aria-components';
import {MySearchField} from './SearchField';

interface MyAutocompleteProps<T extends object>
  extends Omit<AutocompleteProps<T>, 'children'> {
  label?: string;
  placeholder?: string;
  items?: Iterable<T>;
  children:
    | React.ReactNode
    | ((item: T) => React.ReactNode);
  onAction?: (id: Key) => void;
}

function MyAutocomplete<T extends object>(
  {
    label,
    placeholder,
    items,
    children,
    onAction,
    ...props
  }: MyAutocompleteProps<T>
) {
  let { contains } = useFilter({ sensitivity: 'base' });
  return (
    <div className="my-autocomplete">
      <Autocomplete filter={contains} {...props}>
        <MySearchField
          label={label}
          placeholder={placeholder}
        />
        <Menu items={items} onAction={onAction}>
          {children}
        </Menu>
      </Autocomplete>
    </div>
  );
}

<MyAutocomplete
  label="Commands"
  placeholder="Search commands..."
>
  <MenuItem>Create new file...</MenuItem>
  <MenuItem>Create new folder...</MenuItem>
  <MenuItem>Assign to...</MenuItem>
  <MenuItem>Assign to me</MenuItem>
  <MenuItem>Change status...</MenuItem>
  <MenuItem>Change priority...</MenuItem>
  <MenuItem>Add label...</MenuItem>
  <MenuItem>Remove label...</MenuItem>
</MyAutocomplete>
```

```
import type {
  AutocompleteProps,
  Key
} from 'react-aria-components';
import {
  Menu,
  MenuItem
} from 'react-aria-components';
import {MySearchField} from './SearchField';

interface MyAutocompleteProps<
  T extends object
> extends
  Omit<
    AutocompleteProps<T>,
    'children'
  > {
  label?: string;
  placeholder?: string;
  items?: Iterable<T>;
  children:
    | React.ReactNode
    | ((
      item: T
    ) =>
      React.ReactNode);
  onAction?: (
    id: Key
  ) => void;
}

function MyAutocomplete<
  T extends object
>({
  label,
  placeholder,
  items,
  children,
  onAction,
  ...props
}: MyAutocompleteProps<
  T
>) {
  let { contains } =
    useFilter({
      sensitivity: 'base'
    });
  return (
    <div className="my-autocomplete">
      <Autocomplete
        filter={contains}
        {...props}
      >
        <MySearchField
          label={label}
          placeholder={placeholder}
        />
        <Menu
          items={items}
          onAction={onAction}
        >
          {children}
        </Menu>
      </Autocomplete>
    </div>
  );
}

<MyAutocomplete
  label="Commands"
  placeholder="Search commands..."
>
  <MenuItem>
    Create new file...
  </MenuItem>
  <MenuItem>
    Create new
    folder...
  </MenuItem>
  <MenuItem>
    Assign to...
  </MenuItem>
  <MenuItem>
    Assign to me
  </MenuItem>
  <MenuItem>
    Change status...
  </MenuItem>
  <MenuItem>
    Change priority...
  </MenuItem>
  <MenuItem>
    Add label...
  </MenuItem>
  <MenuItem>
    Remove label...
  </MenuItem>
</MyAutocomplete>
```

Show CSS

```
.my-autocomplete {
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 300px;
  height: 180px;
  border: 1px solid var(--border-color);
  padding: 16px;
  border-radius: 10px;
  background: var(--overlay-background);
}

.react-aria-SearchField {
  width: 100%;
}

.react-aria-Label {
  margin-bottom: .5em;
}

.react-aria-Menu {
  &[data-empty] {
    align-items: center;
    justify-content: center;
    font-style: italic;
  }
}
```

```
.my-autocomplete {
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 300px;
  height: 180px;
  border: 1px solid var(--border-color);
  padding: 16px;
  border-radius: 10px;
  background: var(--overlay-background);
}

.react-aria-SearchField {
  width: 100%;
}

.react-aria-Label {
  margin-bottom: .5em;
}

.react-aria-Menu {
  &[data-empty] {
    align-items: center;
    justify-content: center;
    font-style: italic;
  }
}
```

```
.my-autocomplete {
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 300px;
  height: 180px;
  border: 1px solid var(--border-color);
  padding: 16px;
  border-radius: 10px;
  background: var(--overlay-background);
}

.react-aria-SearchField {
  width: 100%;
}

.react-aria-Label {
  margin-bottom: .5em;
}

.react-aria-Menu {
  &[data-empty] {
    align-items: center;
    justify-content: center;
    font-style: italic;
  }
}
```

* * *

An Autocomplete's `value` is empty by default, but an initial, uncontrolled, value can be provided using the `defaultInputValue` prop. Alternatively, a controlled value can be provided using the `inputValue` prop. Note that the input value of the Autocomplete does not affect the ComboBox's selected option.

```
function Example() {
  let options = [
    {id: 1, name: 'Adobe Photoshop'},
    {id: 2, name: 'Adobe XD'},
    {id: 3, name: 'Adobe InDesign'},
    {id: 4, name: 'Adobe AfterEffects'},
    {id: 5, name: 'Adobe Illustrator'},
    {id: 6, name: 'Adobe Lightroom'},
    {id: 7, name: 'Adobe Premiere Pro'},
    {id: 8, name: 'Adobe Fresco'},
    {id: 9, name: 'Adobe Dreamweaver'}
  ];
  let [value, setValue] = React.useState('Adobe XD');

  return (
    <div style={{display: 'flex', gap: 16, flexWrap: 'wrap'}}>
      <MyAutocomplete
        label="Adobe products (Uncontrolled)"
        items={options}
        defaultInputValue="Adobe XD">        {item => <MenuItem>{item.name}</MenuItem>}
      </MyAutocomplete>

      <MyAutocomplete
        label="Adobe products (Controlled)"
        items={options}
        inputValue={value}
        onInputChange={setValue}>        {item => <MenuItem>{item.name}</MenuItem>}
      </MyAutocomplete>
    </div>
  );
}
```

```
function Example() {
  let options = [
    { id: 1, name: 'Adobe Photoshop' },
    { id: 2, name: 'Adobe XD' },
    { id: 3, name: 'Adobe InDesign' },
    { id: 4, name: 'Adobe AfterEffects' },
    { id: 5, name: 'Adobe Illustrator' },
    { id: 6, name: 'Adobe Lightroom' },
    { id: 7, name: 'Adobe Premiere Pro' },
    { id: 8, name: 'Adobe Fresco' },
    { id: 9, name: 'Adobe Dreamweaver' }
  ];
  let [value, setValue] = React.useState('Adobe XD');

  return (
    <div
      style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}
    >
      <MyAutocomplete
        label="Adobe products (Uncontrolled)"
        items={options}
        defaultInputValue="Adobe XD"
      >        {(item) => <MenuItem>{item.name}</MenuItem>}
      </MyAutocomplete>

      <MyAutocomplete
        label="Adobe products (Controlled)"
        items={options}
        inputValue={value}
        onInputChange={setValue}
      >        {(item) => <MenuItem>{item.name}</MenuItem>}
      </MyAutocomplete>
    </div>
  );
}
```

```
function Example() {
  let options = [
    {
      id: 1,
      name:
        'Adobe Photoshop'
    },
    {
      id: 2,
      name: 'Adobe XD'
    },
    {
      id: 3,
      name:
        'Adobe InDesign'
    },
    {
      id: 4,
      name:
        'Adobe AfterEffects'
    },
    {
      id: 5,
      name:
        'Adobe Illustrator'
    },
    {
      id: 6,
      name:
        'Adobe Lightroom'
    },
    {
      id: 7,
      name:
        'Adobe Premiere Pro'
    },
    {
      id: 8,
      name:
        'Adobe Fresco'
    },
    {
      id: 9,
      name:
        'Adobe Dreamweaver'
    }
  ];
  let [value, setValue] =
    React.useState(
      'Adobe XD'
    );

  return (
    <div
      style={{
        display: 'flex',
        gap: 16,
        flexWrap: 'wrap'
      }}
    >
      <MyAutocomplete
        label="Adobe products (Uncontrolled)"
        items={options}
        defaultInputValue="Adobe XD"
      >        {(item) => (
          <MenuItem>
            {item.name}
          </MenuItem>
        )}
      </MyAutocomplete>

      <MyAutocomplete
        label="Adobe products (Controlled)"
        items={options}
        inputValue={value}
        onInputChange={setValue}
      >        {(item) => (
          <MenuItem>
            {item.name}
          </MenuItem>
        )}
      </MyAutocomplete>
    </div>
  );
}
```

* * *

This example uses the [useAsyncList](https://react-spectrum.adobe.com/react-stately/useAsyncList.html) hook to handle asynchronous loading and filtering of data from a server. No `filter` prop is provided to `Autocomplete` since filtering is done on the server.

```
import {useAsyncList} from '@react-stately/data';

function AsyncLoadingExample() {
  let list = useAsyncList<{ name: string }>({
    async load({ signal, filterText }) {
      let res = await fetch(
        `https://swapi.py4e.com/api/people/?search=${filterText}`,
        { signal }
      );
      let json = await res.json();

      return {
        items: json.results
      };
    }
  });

  return (
    <div className="my-autocomplete">
      <Autocomplete
        inputValue={list.filterText}
        onInputChange={list.setFilterText}
      >
        <MySearchField label="Star Wars Character Search" />
        <Menu items={list.items} renderEmptyState={() => 'No results found.'}>
          {(item) => (
            <MenuItem
              id={item.name}
              href={`https://www.starwars.com/databank/${
                item.name.toLowerCase().replace(/\s/g, '-')
              }`}
              target="_blank"
            >
              {item.name}
            </MenuItem>
          )}
        </Menu>
      </Autocomplete>
    </div>
  );
}
```

```
import {useAsyncList} from '@react-stately/data';

function AsyncLoadingExample() {
  let list = useAsyncList<{ name: string }>({
    async load({ signal, filterText }) {
      let res = await fetch(
        `https://swapi.py4e.com/api/people/?search=${filterText}`,
        { signal }
      );
      let json = await res.json();

      return {
        items: json.results
      };
    }
  });

  return (
    <div className="my-autocomplete">
      <Autocomplete
        inputValue={list.filterText}
        onInputChange={list.setFilterText}
      >
        <MySearchField label="Star Wars Character Search" />
        <Menu
          items={list.items}
          renderEmptyState={() => 'No results found.'}
        >
          {(item) => (
            <MenuItem
              id={item.name}
              href={`https://www.starwars.com/databank/${
                item.name.toLowerCase().replace(/\s/g, '-')
              }`}
              target="_blank"
            >
              {item.name}
            </MenuItem>
          )}
        </Menu>
      </Autocomplete>
    </div>
  );
}
```

```
import {useAsyncList} from '@react-stately/data';

function AsyncLoadingExample() {
  let list =
    useAsyncList<
      { name: string }
    >({
      async load(
        {
          signal,
          filterText
        }
      ) {
        let res =
          await fetch(
            `https://swapi.py4e.com/api/people/?search=${filterText}`,
            { signal }
          );
        let json =
          await res
            .json();

        return {
          items:
            json.results
        };
      }
    });

  return (
    <div className="my-autocomplete">
      <Autocomplete
        inputValue={list
          .filterText}
        onInputChange={list
          .setFilterText}
      >
        <MySearchField label="Star Wars Character Search" />
        <Menu
          items={list
            .items}
          renderEmptyState={() =>
            'No results found.'}
        >
          {(item) => (
            <MenuItem
              id={item
                .name}
              href={`https://www.starwars.com/databank/${
                item.name
                  .toLowerCase()
                  .replace(
                    /\s/g,
                    '-'
                  )
              }`}
              target="_blank"
            >
              {item.name}
            </MenuItem>
          )}
        </Menu>
      </Autocomplete>
    </div>
  );
}
```

* * *

Name

Type

Default

Description

`children`

`[ReactNode](https://reactjs.org/docs/rendering-elements.html)`

—

The children wrapped by the autocomplete. Consists of at least an input element and a collection element to filter.

`filter`

`( textValue: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String), inputValue: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String), node: [Node](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/collections.d.ts:Node)<[object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object)> ) => [boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

An optional filter function used to determine if a option should be included in the autocomplete list. Include this if the items you are providing to your wrapped collection aren't filtered by default.

`disableAutoFocusFirst`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

`false`

Whether or not to focus the first item in the collection after a filter is performed. Note this is only applicable if virtual focus behavior is not turned off via `disableVirtualFocus`.

`disableVirtualFocus`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

`false`

Whether the autocomplete should disable virtual focus, instead making the wrapped collection directly tabbable.

`inputValue`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

The value of the autocomplete input (controlled).

`defaultInputValue`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

The default value of the autocomplete input (uncontrolled).

Events

Name

Type

Description

`onInputChange`

`( (value: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) )) => void`

Handler that is called when the autocomplete input value changes.

Layout

Name

Type

Description

`slot`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)`

A slot name for the component. Slots allow the component to receive props from a parent component. An explicit `null` value indicates that the local props completely override all props received from a parent.

* * *

Since Autocomplete doesn't render any DOM elements itself, it doesn't offer any styling options. See the styling sections for [TextField](https://react-spectrum.adobe.com/react-aria/TextField.html#styling), [SearchField](https://react-spectrum.adobe.com/react-aria/SearchField.html#styling), [Menu](https://react-spectrum.adobe.com/react-aria/Menu.html#styling), and [ListBox](https://react-spectrum.adobe.com/react-aria/ListBox.html#styling) for more information on how to style components within the Autocomplete.

* * *

If you need to customize one of the components within an `Autocomplete`, such as `TextField`, `SearchField`, `Menu` or `ListBox`, you can create a wrapper component. This lets you customize the props passed to the component.

```
function MyListBox(props) {
  return <ListBox {...props} className="my-listbox" />
}
```

```
function MyListBox(props) {
  return <ListBox {...props} className="my-listbox" />
}
```

```
function MyListBox(
  props
) {
  return (
    <ListBox
      {...props}
      className="my-listbox"
    />
  );
}
```

All React Aria Components export a corresponding context that can be used to send props to them from a parent element. This enables you to build your own compositional APIs similar to those found in React Aria Components itself. You can send any prop or ref via context that you could pass to the corresponding component. The local props and ref on the component are merged with the ones passed via context, with the local props taking precedence (following the rules documented in [mergeProps](https://react-spectrum.adobe.com/react-aria/mergeProps.html)).

Component

Context

Props

Ref

`Autocomplete`

`AutocompleteContext`

`[AutocompleteProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Autocomplete.tsx:AutocompleteProps)`

–

Autocomplete provides an `[AutocompleteState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/autocomplete/src/useAutocompleteState.ts:AutocompleteState)` object to its children via `AutocompleteStateContext`. This can be used to access and manipulate the autocomplete's state.

If you need to customize things even further, such as accessing internal state, intercepting events, or customizing the DOM structure, you can drop down to the lower level Hook-based API. See [useAutocomplete](https://react-spectrum.adobe.com/react-aria/useAutocomplete.html) for more details.