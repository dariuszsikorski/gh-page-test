# useListBox

**Source**: [https://react-spectrum.adobe.com/react-aria/useListBox.html](https://react-spectrum.adobe.com/react-aria/useListBox.html)

> Documentation for useListBox in the React Aria package.

---

Provides the behavior and accessibility implementation for a listbox component. A listbox displays a list of options and allows a user to select one or more of them.

* * *

`useListBox<T>( props: [AriaListBoxOptions](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/listbox/src/useListBox.ts:AriaListBoxOptions)<T>, state: [ListState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/list/src/useListState.ts:ListState)<T>, ref: [RefObject](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/refs.d.ts:RefObject)<[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element) |  | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)> ): [ListBoxAria](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/listbox/src/useListBox.ts:ListBoxAria)` `useOption<T>( props: [AriaOptionProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/listbox/src/useOption.ts:AriaOptionProps), state: [ListState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/list/src/useListState.ts:ListState)<T>, ref: [RefObject](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/refs.d.ts:RefObject)<[FocusableElement](https://developer.mozilla.org/en-US/docs/Web/API/Element) |  | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)> ): [OptionAria](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/listbox/src/useOption.ts:OptionAria)` `useListBoxSection( (props: [AriaListBoxSectionProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/listbox/src/useListBoxSection.ts:AriaListBoxSectionProps) )): [ListBoxSectionAria](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/listbox/src/useListBoxSection.ts:ListBoxSectionAria)`

* * *

A listbox can be built using the [<select>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select) and [<option>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option) HTML elements, but this is not possible to style consistently cross browser. `useListBox` helps achieve accessible listbox components that can be styled as needed.

Note: `useListBox` only handles the list itself. For a dropdown similar to a `<select>`, see [useSelect](https://react-spectrum.adobe.com/react-aria/useSelect.html).

-   Exposed to assistive technology as a `listbox` using ARIA
-   Support for single, multiple, or no selection
-   Support for disabled items
-   Support for sections
-   Labeling support for accessibility
-   Support for mouse, touch, and keyboard interactions
-   Tab stop focus management
-   Keyboard navigation support including arrow keys, home/end, page up/down, select all, and clear
-   Automatic scrolling support during keyboard navigation
-   Typeahead to allow focusing options by typing text
-   Support for use with virtualized lists

* * *

Shows a listbox with labels pointing to its parts, including the label, listbox, group, section heading, option, option label, and option description elements.LabelOption 1Option 2OptionLabelOption labelDescriptionDescriptionOption 3DescriptionOption descriptionListboxSECTION TITLESection headingGroup

A listbox consists of a container element, with a list of options or groups inside. `useListBox`, `useOption`, and `useListBoxSection` handle exposing this to assistive technology using ARIA, along with handling keyboard, mouse, and interactions to support selection and focus behavior.

`useListBox` returns props that you should spread onto the list container element, along with props for an optional visual label:

Name

Type

Description

`listBoxProps`

`[DOMAttributes](https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes)`

Props for the listbox element.

`labelProps`

`[DOMAttributes](https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes)`

Props for the listbox's visual label element (if any).

`useOption` returns props for an individual option and its children, along with states you can use for styling:

Name

Type

Description

`optionProps`

`[DOMAttributes](https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes)`

Props for the option element.

`labelProps`

`[DOMAttributes](https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes)`

Props for the main text element inside the option.

`descriptionProps`

`[DOMAttributes](https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes)`

Props for the description text element inside the option, if any.

`isFocused`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether the option is currently focused.

`isFocusVisible`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether the option is keyboard focused.

`isPressed`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether the item is currently in a pressed state.

`isSelected`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether the item is currently selected.

`isDisabled`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether the item is non-interactive, i.e. both selection and actions are disabled and the item may not be focused. Dependent on `disabledKeys` and `disabledBehavior`.

`allowsSelection`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether the item may be selected, dependent on `selectionMode`, `disabledKeys`, and `disabledBehavior`.

`hasAction`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether the item has an action, dependent on `onAction`, `disabledKeys`, and `disabledBehavior`. It may also change depending on the current selection state of the list (e.g. when selection is primary). This can be used to enable or disable hover styles or other visual indications of interactivity.

`useListBoxSection` returns props for a section:

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

State is managed by the `[useListState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/list/src/useListState.ts:useListState)` hook from `@react-stately/list`. The state object should be passed as an option to each of the above hooks.

If a listbox, options, or group does not have a visible label, an `aria-label` or `aria-labelledby` prop must be passed instead to identify the element to assistive technology.

* * *

`useListBox` requires knowledge of the options in the listbox in order to handle keyboard navigation and other interactions. It does this using the `[Collection](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/collections.d.ts:Collection)` interface, which is a generic interface to access sequential unique keyed data. You can implement this interface yourself, e.g. by using a prop to pass a list of item objects, but `[useListState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/list/src/useListState.ts:useListState)` from `@react-stately/list` implements a JSX based interface for building collections instead. See [Collection Components](https://react-spectrum.adobe.com/react-stately/collections.html) for more information, and [Collection Interface](https://react-spectrum.adobe.com/react-stately/Collection.html) for internal details.

In addition, `[useListState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/list/src/useListState.ts:useListState)` manages the state necessary for multiple selection and exposes a `[SelectionManager](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/selection/src/SelectionManager.ts:SelectionManager)`, which makes use of the collection to provide an interface to update the selection state. For more information, see [Selection](https://react-spectrum.adobe.com/react-stately/selection.html).

* * *

This example uses HTML `<ul>` and `<li>` elements to represent the list, and applies props from `[useListBox](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/listbox/src/useListBox.ts:useListBox)` and `[useOption](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/listbox/src/useOption.ts:useOption)`. For each item in the collection in state, either an `Option` or `ListBoxSection` (defined [below](#sections)) is rendered according to the item's `type` property.

```
import type {AriaListBoxProps} from 'react-aria';
import {Item, useListState} from 'react-stately';
import {mergeProps, useFocusRing, useListBox, useOption} from 'react-aria';

function ListBox<T extends object>(props: AriaListBoxProps<T>) {
  // Create state based on the incoming props
  let state = useListState(props);

  // Get props for the listbox element
  let ref = React.useRef(null);
  let { listBoxProps, labelProps } = useListBox(props, state, ref);

  return (
    <>
      <div {...labelProps}>{props.label}</div>
      <ul {...listBoxProps} ref={ref}>
        {[...state.collection].map((item) => (
          item.type === 'section'
            ? <ListBoxSection key={item.key} section={item} state={state} />
            : <Option key={item.key} item={item} state={state} />
        ))}
      </ul>
    </>
  );
}

function Option({ item, state }) {
  // Get props for the option element
  let ref = React.useRef(null);
  let { optionProps } = useOption({ key: item.key }, state, ref);

  // Determine whether we should show a keyboard
  // focus ring for accessibility
  let { isFocusVisible, focusProps } = useFocusRing();

  return (
    <li
      {...mergeProps(optionProps, focusProps)}
      ref={ref}
      data-focus-visible={isFocusVisible}
    >
      {item.rendered}
    </li>
  );
}

<ListBox label="Alignment" selectionMode="single">
  <Item>Left</Item>
  <Item>Middle</Item>
  <Item>Right</Item>
</ListBox>
```

```
import type {AriaListBoxProps} from 'react-aria';
import {Item, useListState} from 'react-stately';
import {
  mergeProps,
  useFocusRing,
  useListBox,
  useOption
} from 'react-aria';

function ListBox<T extends object>(
  props: AriaListBoxProps<T>
) {
  // Create state based on the incoming props
  let state = useListState(props);

  // Get props for the listbox element
  let ref = React.useRef(null);
  let { listBoxProps, labelProps } = useListBox(
    props,
    state,
    ref
  );

  return (
    <>
      <div {...labelProps}>{props.label}</div>
      <ul {...listBoxProps} ref={ref}>
        {[...state.collection].map((item) => (
          item.type === 'section'
            ? (
              <ListBoxSection
                key={item.key}
                section={item}
                state={state}
              />
            )
            : (
              <Option
                key={item.key}
                item={item}
                state={state}
              />
            )
        ))}
      </ul>
    </>
  );
}

function Option({ item, state }) {
  // Get props for the option element
  let ref = React.useRef(null);
  let { optionProps } = useOption(
    { key: item.key },
    state,
    ref
  );

  // Determine whether we should show a keyboard
  // focus ring for accessibility
  let { isFocusVisible, focusProps } = useFocusRing();

  return (
    <li
      {...mergeProps(optionProps, focusProps)}
      ref={ref}
      data-focus-visible={isFocusVisible}
    >
      {item.rendered}
    </li>
  );
}

<ListBox label="Alignment" selectionMode="single">
  <Item>Left</Item>
  <Item>Middle</Item>
  <Item>Right</Item>
</ListBox>
```

```
import type {AriaListBoxProps} from 'react-aria';
import {
  Item,
  useListState
} from 'react-stately';
import {
  mergeProps,
  useFocusRing,
  useListBox,
  useOption
} from 'react-aria';

function ListBox<
  T extends object
>(
  props:
    AriaListBoxProps<T>
) {
  // Create state based on the incoming props
  let state =
    useListState(props);

  // Get props for the listbox element
  let ref = React.useRef(
    null
  );
  let {
    listBoxProps,
    labelProps
  } = useListBox(
    props,
    state,
    ref
  );

  return (
    <>
      <div
        {...labelProps}
      >
        {props.label}
      </div>
      <ul
        {...listBoxProps}
        ref={ref}
      >
        {[
          ...state
            .collection
        ].map((item) => (
          item.type ===
              'section'
            ? (
              <ListBoxSection
                key={item
                  .key}
                section={item}
                state={state}
              />
            )
            : (
              <Option
                key={item
                  .key}
                item={item}
                state={state}
              />
            )
        ))}
      </ul>
    </>
  );
}

function Option(
  { item, state }
) {
  // Get props for the option element
  let ref = React.useRef(
    null
  );
  let { optionProps } =
    useOption(
      { key: item.key },
      state,
      ref
    );

  // Determine whether we should show a keyboard
  // focus ring for accessibility
  let {
    isFocusVisible,
    focusProps
  } = useFocusRing();

  return (
    <li
      {...mergeProps(
        optionProps,
        focusProps
      )}
      ref={ref}
      data-focus-visible={isFocusVisible}
    >
      {item.rendered}
    </li>
  );
}

<ListBox
  label="Alignment"
  selectionMode="single"
>
  <Item>Left</Item>
  <Item>Middle</Item>
  <Item>Right</Item>
</ListBox>
```

Show CSS

```
[role=listbox] {
  padding: 0;
  margin: 5px 0;
  list-style: none;
  border: 1px solid gray;
  max-width: 250px;
  max-height: 300px;
  overflow: auto;
}

[role=option] {
  display: block;
  padding: 2px 5px;
  outline: none;
  cursor: default;
  color: inherit;

  &[data-focus-visible=true] {
    outline: 2px solid orange;
  }

  &[aria-selected=true] {
    background: blueviolet;
    color: white;
  }

  &[aria-disabled] {
    color: #aaa;
  }
}
```

```
[role=listbox] {
  padding: 0;
  margin: 5px 0;
  list-style: none;
  border: 1px solid gray;
  max-width: 250px;
  max-height: 300px;
  overflow: auto;
}

[role=option] {
  display: block;
  padding: 2px 5px;
  outline: none;
  cursor: default;
  color: inherit;

  &[data-focus-visible=true] {
    outline: 2px solid orange;
  }

  &[aria-selected=true] {
    background: blueviolet;
    color: white;
  }

  &[aria-disabled] {
    color: #aaa;
  }
}
```

```
[role=listbox] {
  padding: 0;
  margin: 5px 0;
  list-style: none;
  border: 1px solid gray;
  max-width: 250px;
  max-height: 300px;
  overflow: auto;
}

[role=option] {
  display: block;
  padding: 2px 5px;
  outline: none;
  cursor: default;
  color: inherit;

  &[data-focus-visible=true] {
    outline: 2px solid orange;
  }

  &[aria-selected=true] {
    background: blueviolet;
    color: white;
  }

  &[aria-disabled] {
    color: #aaa;
  }
}
```

* * *

`ListBox` follows the [Collection Components API](https://react-spectrum.adobe.com/react-stately/collections.html), accepting both static and dynamic collections. The example above shows static collections, which can be used when the full list of options is known ahead of time. Dynamic collections, as shown below, can be used when the options come from an external data source such as an API call, or update over time.

As seen below, an iterable list of options is passed to the ListBox using the `items` prop. Each item accepts a `key` prop, which is passed to the `onSelectionChange` handler to identify the selected item. Alternatively, if the item objects contain an `id` property, as shown in the example below, then this is used automatically and a `key` prop is not required.

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
    <ListBox label="Animals" items={options} selectionMode="single">
      {(item) => <Item>{item.name}</Item>}
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
      label="Animals"
      items={options}
      selectionMode="single"
    >
      {(item) => <Item>{item.name}</Item>}
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
      label="Animals"
      items={options}
      selectionMode="single"
    >
      {(item) => (
        <Item>
          {item.name}
        </Item>
      )}
    </ListBox>
  );
}
```

* * *

ListBox supports multiple selection modes. By default, selection is disabled, however this can be changed using the `selectionMode` prop. Use `defaultSelectedKeys` to provide a default set of selected items (uncontrolled) and `selectedKeys` to set the selected items (controlled). The value of the selected keys must match the `key` prop of the items. See the `react-stately` [Selection docs](https://react-spectrum.adobe.com/react-stately/selection.html) for more details.

```
import type {Selection} from 'react-stately';

function Example() {
  let [selected, setSelected] = React.useState<Selection>(new Set(['cheese']));

  return (
    <>
      <ListBox
        label="Choose sandwich contents"
        selectionMode="multiple"
        selectedKeys={selected}
        onSelectionChange={setSelected}
      >
        <Item key="lettuce">Lettuce</Item>
        <Item key="tomato">Tomato</Item>
        <Item key="cheese">Cheese</Item>
        <Item key="tuna">Tuna Salad</Item>
        <Item key="egg">Egg Salad</Item>
        <Item key="ham">Ham</Item>
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
import type {Selection} from 'react-stately';

function Example() {
  let [selected, setSelected] = React.useState<Selection>(
    new Set(['cheese'])
  );

  return (
    <>
      <ListBox
        label="Choose sandwich contents"
        selectionMode="multiple"
        selectedKeys={selected}
        onSelectionChange={setSelected}
      >
        <Item key="lettuce">Lettuce</Item>
        <Item key="tomato">Tomato</Item>
        <Item key="cheese">Cheese</Item>
        <Item key="tuna">Tuna Salad</Item>
        <Item key="egg">Egg Salad</Item>
        <Item key="ham">Ham</Item>
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
import type {Selection} from 'react-stately';

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
        label="Choose sandwich contents"
        selectionMode="multiple"
        selectedKeys={selected}
        onSelectionChange={setSelected}
      >
        <Item key="lettuce">
          Lettuce
        </Item>
        <Item key="tomato">
          Tomato
        </Item>
        <Item key="cheese">
          Cheese
        </Item>
        <Item key="tuna">
          Tuna Salad
        </Item>
        <Item key="egg">
          Egg Salad
        </Item>
        <Item key="ham">
          Ham
        </Item>
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

By default, `useListBox` uses the `"toggle"` selection behavior, which behaves like a checkbox group: clicking, tapping, or pressing the Space or Enter keys toggles selection for the focused row. Using the arrow keys moves focus but does not change selection.

When `selectionBehavior` is set to `"replace"`, clicking a row with the mouse replaces the selection with only that row. Using the arrow keys moves both focus and selection. To select multiple rows, modifier keys such as Ctrl, Cmd, and Shift can be used. On touch screen devices, selection always behaves as toggle since modifier keys may not be available.

These selection behaviors are defined in [Aria Practices](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/#keyboardinteraction).

```
<ListBox
  label="Choose sandwich contents"
  selectionMode="multiple"
  selectionBehavior="replace"
>
  <Item key="lettuce">Lettuce</Item>
  <Item key="tomato">Tomato</Item>
  <Item key="cheese">Cheese</Item>
  <Item key="tuna">Tuna Salad</Item>
  <Item key="egg">Egg Salad</Item>
  <Item key="ham">Ham</Item>
</ListBox>
```

```
<ListBox
  label="Choose sandwich contents"
  selectionMode="multiple"
  selectionBehavior="replace"
>
  <Item key="lettuce">Lettuce</Item>
  <Item key="tomato">Tomato</Item>
  <Item key="cheese">Cheese</Item>
  <Item key="tuna">Tuna Salad</Item>
  <Item key="egg">Egg Salad</Item>
  <Item key="ham">Ham</Item>
</ListBox>
```

```
<ListBox
  label="Choose sandwich contents"
  selectionMode="multiple"
  selectionBehavior="replace"
>
  <Item key="lettuce">
    Lettuce
  </Item>
  <Item key="tomato">
    Tomato
  </Item>
  <Item key="cheese">
    Cheese
  </Item>
  <Item key="tuna">
    Tuna Salad
  </Item>
  <Item key="egg">
    Egg Salad
  </Item>
  <Item key="ham">
    Ham
  </Item>
</ListBox>
```

* * *

ListBox supports sections with separators and headings in order to group options. Sections can be used by wrapping groups of Items in a `Section` component. Each `Section` takes a `title` and `key` prop. To implement sections, implement the `ListBoxSection` component referenced above using the `[useListBoxSection](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/listbox/src/useListBoxSection.ts:useListBoxSection)` hook. It will include four extra elements: an `<li>` between the sections to represent the separator, an `<li>` to contain the heading `<span>` element, and a `<ul>` to contain the child items. This structure is necessary to ensure HTML semantics are correct.

```
import {useListBoxSection} from 'react-aria';

function ListBoxSection({ section, state }) {
  let { itemProps, headingProps, groupProps } = useListBoxSection({
    heading: section.rendered,
    'aria-label': section['aria-label']
  });

  // If the section is not the first, add a separator element to provide visual separation.
  // The heading is rendered inside an <li> element, which contains
  // a <ul> with the child items.
  return (
    <>
      {section.key !== state.collection.getFirstKey() &&
        (
          <li
            role="presentation"
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
            <Option
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
import {useListBoxSection} from 'react-aria';

function ListBoxSection({ section, state }) {
  let { itemProps, headingProps, groupProps } =
    useListBoxSection({
      heading: section.rendered,
      'aria-label': section['aria-label']
    });

  // If the section is not the first, add a separator element to provide visual separation.
  // The heading is rendered inside an <li> element, which contains
  // a <ul> with the child items.
  return (
    <>
      {section.key !== state.collection.getFirstKey() &&
        (
          <li
            role="presentation"
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
            <Option
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
import {useListBoxSection} from 'react-aria';

function ListBoxSection(
  { section, state }
) {
  let {
    itemProps,
    headingProps,
    groupProps
  } = useListBoxSection({
    heading:
      section.rendered,
    'aria-label':
      section[
        'aria-label'
      ]
  });

  // If the section is not the first, add a separator element to provide visual separation.
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
            role="presentation"
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
              <Option
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

With this in place, we can now render a static ListBox with multiple sections:

```
import {Section} from 'react-stately';

<ListBox label="Choose sandwich contents" selectionMode="multiple">
  <Section title="Veggies">
    <Item key="lettuce">Lettuce</Item>
    <Item key="tomato">Tomato</Item>
    <Item key="onion">Onion</Item>
  </Section>
  <Section title="Protein">
    <Item key="ham">Ham</Item>
    <Item key="tuna">Tuna</Item>
    <Item key="tofu">Tofu</Item>
  </Section>
  <Section title="Condiments">
    <Item key="mayo">Mayonaise</Item>
    <Item key="mustard">Mustard</Item>
    <Item key="ranch">Ranch</Item>
  </Section>
</ListBox>
```

```
import {Section} from 'react-stately';

<ListBox
  label="Choose sandwich contents"
  selectionMode="multiple"
>
  <Section title="Veggies">
    <Item key="lettuce">Lettuce</Item>
    <Item key="tomato">Tomato</Item>
    <Item key="onion">Onion</Item>
  </Section>
  <Section title="Protein">
    <Item key="ham">Ham</Item>
    <Item key="tuna">Tuna</Item>
    <Item key="tofu">Tofu</Item>
  </Section>
  <Section title="Condiments">
    <Item key="mayo">Mayonaise</Item>
    <Item key="mustard">Mustard</Item>
    <Item key="ranch">Ranch</Item>
  </Section>
</ListBox>
```

```
import {Section} from 'react-stately';

<ListBox
  label="Choose sandwich contents"
  selectionMode="multiple"
>
  <Section title="Veggies">
    <Item key="lettuce">
      Lettuce
    </Item>
    <Item key="tomato">
      Tomato
    </Item>
    <Item key="onion">
      Onion
    </Item>
  </Section>
  <Section title="Protein">
    <Item key="ham">
      Ham
    </Item>
    <Item key="tuna">
      Tuna
    </Item>
    <Item key="tofu">
      Tofu
    </Item>
  </Section>
  <Section title="Condiments">
    <Item key="mayo">
      Mayonaise
    </Item>
    <Item key="mustard">
      Mustard
    </Item>
    <Item key="ranch">
      Ranch
    </Item>
  </Section>
</ListBox>
```

The above example shows sections with static items. Sections can also be populated from a hierarchical data structure. Similarly to the props on ListBox, `<Section>` takes an array of data using the `items` prop.

```
import type {Selection} from 'react-stately';

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
      label="Pick an animal"
      items={options}
      selectedKeys={selected}
      selectionMode="single"
      onSelectionChange={setSelected}>
      {item => (
        <Section key={item.name} items={item.children} title={item.name}>
          {item => <Item>{item.name}</Item>}
        </Section>
      )}
    </ListBox>
  );
}
```

```
import type {Selection} from 'react-stately';

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
      label="Pick an animal"
      items={options}
      selectedKeys={selected}
      selectionMode="single"
      onSelectionChange={setSelected}
    >
      {(item) => (
        <Section
          key={item.name}
          items={item.children}
          title={item.name}
        >
          {(item) => <Item>{item.name}</Item>}
        </Section>
      )}
    </ListBox>
  );
}
```

```
import type {Selection} from 'react-stately';

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
      label="Pick an animal"
      items={options}
      selectedKeys={selected}
      selectionMode="single"
      onSelectionChange={setSelected}
    >
      {(item) => (
        <Section
          key={item.name}
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
    </ListBox>
  );
}
```

Sections without a `title` must provide an `aria-label` for accessibility.

* * *

By default, options that only contain text will be labeled by the contents of the option. For options that have more complex content (e.g. icons, multiple lines of text, etc.), use `labelProps` and `descriptionProps` from `[useOption](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/listbox/src/useOption.ts:useOption)` as needed to apply to the main text element of the option and its description. This improves screen reader announcement.

**NOTE: listbox options cannot contain interactive content (e.g. buttons, checkboxes, etc.). For these cases, see [useGridList](https://react-spectrum.adobe.com/react-aria/useGridList.html) instead.**

To implement this, we'll update the `Option` component to apply the ARIA properties returned by `[useOption](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/listbox/src/useOption.ts:useOption)` to the appropriate elements. In this example, we'll pull them out of `props.children` and use `React.cloneElement` to apply the props, but you may want to use a more robust approach (e.g. context).

```
function Option({ item, state }) {
  let ref = React.useRef(null);
  let { optionProps, labelProps, descriptionProps } = useOption(
    { key: item.key },
    state,
    ref
  );
  let { isFocusVisible, focusProps } = useFocusRing();

  // Pull out the two expected children. We will clone them
  // and add the necessary props for accessibility.
  let [title, description] = item.rendered;

  return (
    <li
      {...mergeProps(optionProps, focusProps)}
      ref={ref}
      data-focus-visible={isFocusVisible}
    >
      {React.cloneElement(title, labelProps)}
      {React.cloneElement(description, descriptionProps)}
    </li>
  );
}

<ListBox label="Text alignment" selectionMode="single">
  <Item textValue="Align Left">
    <div>
      <strong>Align Left</strong>
    </div>
    <div>Align the selected text to the left</div>
  </Item>
  <Item textValue="Align Center">
    <div>
      <strong>Align Center</strong>
    </div>
    <div>Align the selected text center</div>
  </Item>
  <Item textValue="Align Right">
    <div>
      <strong>Align Right</strong>
    </div>
    <div>Align the selected text to the right</div>
  </Item>
</ListBox>
```

```
function Option({ item, state }) {
  let ref = React.useRef(null);
  let { optionProps, labelProps, descriptionProps } =
    useOption({ key: item.key }, state, ref);
  let { isFocusVisible, focusProps } = useFocusRing();

  // Pull out the two expected children. We will clone them
  // and add the necessary props for accessibility.
  let [title, description] = item.rendered;

  return (
    <li
      {...mergeProps(optionProps, focusProps)}
      ref={ref}
      data-focus-visible={isFocusVisible}
    >
      {React.cloneElement(title, labelProps)}
      {React.cloneElement(description, descriptionProps)}
    </li>
  );
}

<ListBox label="Text alignment" selectionMode="single">
  <Item textValue="Align Left">
    <div>
      <strong>Align Left</strong>
    </div>
    <div>Align the selected text to the left</div>
  </Item>
  <Item textValue="Align Center">
    <div>
      <strong>Align Center</strong>
    </div>
    <div>Align the selected text center</div>
  </Item>
  <Item textValue="Align Right">
    <div>
      <strong>Align Right</strong>
    </div>
    <div>Align the selected text to the right</div>
  </Item>
</ListBox>
```

```
function Option(
  { item, state }
) {
  let ref = React.useRef(
    null
  );
  let {
    optionProps,
    labelProps,
    descriptionProps
  } = useOption(
    { key: item.key },
    state,
    ref
  );
  let {
    isFocusVisible,
    focusProps
  } = useFocusRing();

  // Pull out the two expected children. We will clone them
  // and add the necessary props for accessibility.
  let [
    title,
    description
  ] = item.rendered;

  return (
    <li
      {...mergeProps(
        optionProps,
        focusProps
      )}
      ref={ref}
      data-focus-visible={isFocusVisible}
    >
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
    </li>
  );
}

<ListBox
  label="Text alignment"
  selectionMode="single"
>
  <Item textValue="Align Left">
    <div>
      <strong>
        Align Left
      </strong>
    </div>
    <div>
      Align the
      selected text to
      the left
    </div>
  </Item>
  <Item textValue="Align Center">
    <div>
      <strong>
        Align Center
      </strong>
    </div>
    <div>
      Align the
      selected text
      center
    </div>
  </Item>
  <Item textValue="Align Right">
    <div>
      <strong>
        Align Right
      </strong>
    </div>
    <div>
      Align the
      selected text to
      the right
    </div>
  </Item>
</ListBox>
```

* * *

This example uses the [useAsyncList](https://react-spectrum.adobe.com/react-stately/useAsyncList.html) hook to handle asynchronous loading of data from a server. You may additionally want to display a spinner to indicate the loading state to the user, or support features like infinite scroll to load more data.

```
import {useAsyncList} from 'react-stately';

interface Pokemon {
  name: string;
}

function AsyncLoadingExample() {
  let list = useAsyncList<Pokemon>({
    async load({ signal }) {
      let res = await fetch(
        `https://pokeapi.co/api/v2/pokemon`,
        { signal }
      );
      let json = await res.json();

      return {
        items: json.results
      };
    }
  });

  return (
    <ListBox label="Pick a Pokemon" items={list.items} selectionMode="single">
      {(item) => <Item key={item.name}>{item.name}</Item>}
    </ListBox>
  );
}
```

```
import {useAsyncList} from 'react-stately';

interface Pokemon {
  name: string;
}

function AsyncLoadingExample() {
  let list = useAsyncList<Pokemon>({
    async load({ signal }) {
      let res = await fetch(
        `https://pokeapi.co/api/v2/pokemon`,
        { signal }
      );
      let json = await res.json();

      return {
        items: json.results
      };
    }
  });

  return (
    <ListBox
      label="Pick a Pokemon"
      items={list.items}
      selectionMode="single"
    >
      {(item) => <Item key={item.name}>{item.name}</Item>}
    </ListBox>
  );
}
```

```
import {useAsyncList} from 'react-stately';

interface Pokemon {
  name: string;
}

function AsyncLoadingExample() {
  let list =
    useAsyncList<
      Pokemon
    >({
      async load(
        { signal }
      ) {
        let res =
          await fetch(
            `https://pokeapi.co/api/v2/pokemon`,
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
    <ListBox
      label="Pick a Pokemon"
      items={list.items}
      selectionMode="single"
    >
      {(item) => (
        <Item
          key={item.name}
        >
          {item.name}
        </Item>
      )}
    </ListBox>
  );
}
```

* * *

By default, interacting with an item in a ListBox triggers `onSelectionChange`. Alternatively, items may be links to another page or website. This can be achieved by passing the `href` prop to the `<Item>` component.

This example shows how to update the `Option` component with support for rendering an `<a>` element if an `href` prop is passed to the item. Note that you'll also need to render the `ListBox` as a `<div>` instead of a `<ul>`, since an `<a>` inside a `<ul>` is not valid HTML.

```
function Option({item, state}) {
  let ref = React.useRef(null);
  let {optionProps} = useOption({key: item.key}, state, ref);
  let {isFocusVisible, focusProps} = useFocusRing();
  let ElementType: React.ElementType = item.props.href ? 'a' : 'div';
  return (
    <ElementType
      {...mergeProps(optionProps, focusProps)}
      ref={ref}
      data-focus-visible={isFocusVisible}>
      {item.rendered}
    </ElementType>
  );
}

<ListBox aria-label="Links">
  <Item href="https://adobe.com/" target="_blank">Adobe</Item>
  <Item href="https://apple.com/" target="_blank">Apple</Item>
  <Item href="https://google.com/" target="_blank">Google</Item>
  <Item href="https://microsoft.com/" target="_blank">Microsoft</Item>
</ListBox>
```

```
function Option({ item, state }) {
  let ref = React.useRef(null);
  let { optionProps } = useOption(
    { key: item.key },
    state,
    ref
  );
  let { isFocusVisible, focusProps } = useFocusRing();
  let ElementType: React.ElementType = item.props.href
    ? 'a'
    : 'div';
  return (
    <ElementType
      {...mergeProps(optionProps, focusProps)}
      ref={ref}
      data-focus-visible={isFocusVisible}
    >
      {item.rendered}
    </ElementType>
  );
}

<ListBox aria-label="Links">
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
</ListBox>
```

```
function Option(
  { item, state }
) {
  let ref = React.useRef(
    null
  );
  let { optionProps } =
    useOption(
      { key: item.key },
      state,
      ref
    );
  let {
    isFocusVisible,
    focusProps
  } = useFocusRing();
  let ElementType:
    React.ElementType =
      item.props.href
        ? 'a'
        : 'div';
  return (
    <ElementType
      {...mergeProps(
        optionProps,
        focusProps
      )}
      ref={ref}
      data-focus-visible={isFocusVisible}
    >
      {item.rendered}
    </ElementType>
  );
}

<ListBox aria-label="Links">
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
</ListBox>
```

By default, link items in a ListBox are not selectable, and only perform navigation when the user interacts with them. However, with the "replace" [selection behavior](#selection-behavior), items will be selected when single clicking or pressing the Space key, and navigate to the link when double clicking or pressing the Enter key.

```
<ListBox
  aria-label="Links"
  selectionMode="multiple"
  selectionBehavior="replace"
>
  <Item href="https://adobe.com/" target="_blank">Adobe</Item>
  <Item href="https://apple.com/" target="_blank">Apple</Item>
  <Item href="https://google.com/" target="_blank">Google</Item>
  <Item href="https://microsoft.com/" target="_blank">Microsoft</Item>
</ListBox>
```

```
<ListBox
  aria-label="Links"
  selectionMode="multiple"
  selectionBehavior="replace"
>
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
</ListBox>
```

```
<ListBox
  aria-label="Links"
  selectionMode="multiple"
  selectionBehavior="replace"
>
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
</ListBox>
```

The `<Item>` component works with frameworks and client side routers like [Next.js](https://nextjs.org/) and [React Router](https://reactrouter.com/en/main). As with other React Aria components that support links, this works via the `[RouterProvider](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/utils/src/openLink.tsx:RouterProvider)` component at the root of your app. See the [client side routing guide](https://react-spectrum.adobe.com/react-aria/routing.html) to learn how to set this up.

* * *

`useListBox` supports marking items as disabled using the `disabledKeys` prop. Each key in this list corresponds with the `key` prop passed to the `Item` component, or automatically derived from the values passed to the `items` prop. See [Collections](https://react-spectrum.adobe.com/react-stately/collections.html) for more details.

Disabled items are not focusable, selectable, or keyboard navigable. The `isDisabled` property returned by `useOption` can be used to style the item appropriately.

```
<ListBox
  label="Choose sandwich contents"
  selectionMode="multiple"
  disabledKeys={['tuna']}
>
  <Item key="lettuce">Lettuce</Item>
  <Item key="tomato">Tomato</Item>
  <Item key="cheese">Cheese</Item>
  <Item key="tuna">Tuna Salad</Item>
  <Item key="egg">Egg Salad</Item>
  <Item key="ham">Ham</Item>
</ListBox>
```

```
<ListBox
  label="Choose sandwich contents"
  selectionMode="multiple"
  disabledKeys={['tuna']}
>
  <Item key="lettuce">Lettuce</Item>
  <Item key="tomato">Tomato</Item>
  <Item key="cheese">Cheese</Item>
  <Item key="tuna">Tuna Salad</Item>
  <Item key="egg">Egg Salad</Item>
  <Item key="ham">Ham</Item>
</ListBox>
```

```
<ListBox
  label="Choose sandwich contents"
  selectionMode="multiple"
  disabledKeys={[
    'tuna'
  ]}
>
  <Item key="lettuce">
    Lettuce
  </Item>
  <Item key="tomato">
    Tomato
  </Item>
  <Item key="cheese">
    Cheese
  </Item>
  <Item key="tuna">
    Tuna Salad
  </Item>
  <Item key="egg">
    Egg Salad
  </Item>
  <Item key="ham">
    Ham
  </Item>
</ListBox>
```

* * *

`useListBox` handles some aspects of internationalization automatically. For example, type to select is implemented with an [Intl.Collator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Collator) for internationalized string matching. You are responsible for localizing all labels and option content that is passed into the listbox.

In right-to-left languages, the listbox options should be mirrored. The text content should be aligned to the right. Ensure that your CSS accounts for this.