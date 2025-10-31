# useSelect

**Source**: [https://react-spectrum.adobe.com/react-aria/useSelect.html](https://react-spectrum.adobe.com/react-aria/useSelect.html)

> Documentation for useSelect in the React Aria package.

---

Provides the behavior and accessibility implementation for a select component. A select displays a collapsible list of options and allows a user to select one of them.

* * *

`useSelect<T, M extends [SelectionMode](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/select/src/index.d.ts:SelectionMode) = 'single'>( props: [AriaSelectOptions](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/select/src/useSelect.ts:AriaSelectOptions)<T, M>, state: [SelectState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/select/src/useSelectState.ts:SelectState)<T, M>, ref: [RefObject](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/refs.d.ts:RefObject)<[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element) |  | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)> ): [SelectAria](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/select/src/useSelect.ts:SelectAria)<T, M>`

* * *

A select can be built using the [<select>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select) and [<option>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option) HTML elements, but this is not possible to style consistently cross browser, especially the options. `useSelect` helps achieve accessible select components that can be styled as needed without compromising on high quality interactions.

-   Exposed to assistive technology as a button with a `listbox` popup using ARIA (combined with [useListBox](https://react-spectrum.adobe.com/react-aria/useListBox.html))
-   Support for selecting a single option
-   Support for disabled options
-   Support for sections
-   Labeling support for accessibility
-   Support for native HTML constraint validation with customizable UI, custom validation functions, realtime validation, and server-side validation errors
-   Support for mouse, touch, and keyboard interactions
-   Tab stop focus management
-   Keyboard support for opening the listbox using the arrow keys, including automatically focusing the first or last item accordingly
-   Typeahead to allow selecting options by typing text, even without opening the listbox
-   Browser autofill integration via a hidden native `<select>` element
-   Mobile screen reader listbox dismissal support

* * *

Shows two select elements, one open and one closed, with labels pointing to their parts including the label, trigger, value, and menu.Option 1Option 1LabelLabelOption 1Option 2Option 3ValueTriggerLabelLabelMenu

A select consists of a label, a button which displays a selected value, and a listbox, displayed in a popup. Users can click, touch, or use the keyboard on the button to open the listbox popup. `useSelect` handles exposing the correct ARIA attributes for accessibility and handles the interactions for the select in its collapsed state. It should be combined with [useListBox](https://react-spectrum.adobe.com/react-aria/useListBox.html), which handles the implementation of the popup listbox.

`useSelect` also supports optional description and error message elements, which can be used to provide more context about the field, and any validation messages. These are linked with the input via the `aria-describedby` attribute.

`useSelect` returns props that you should spread onto the appropriate element:

Name

Type

Description

`labelProps`

`[DOMAttributes](https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes)`

Props for the label element.

`triggerProps`

`[AriaButtonProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/button/src/index.d.ts:AriaButtonProps)`

Props for the popup trigger element.

`valueProps`

`[DOMAttributes](https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes)`

Props for the element representing the selected value.

`menuProps`

`[AriaListBoxOptions](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/listbox/src/useListBox.ts:AriaListBoxOptions)<T>`

Props for the popup.

`descriptionProps`

`[DOMAttributes](https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes)`

Props for the select's description element, if any.

`errorMessageProps`

`[DOMAttributes](https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes)`

Props for the select's error message element, if any.

`hiddenSelectProps`

`[HiddenSelectProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/select/src/HiddenSelect.tsx:HiddenSelectProps)<T, [SelectionMode](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/select/src/index.d.ts:SelectionMode)>`

Props for the hidden select element.

`isInvalid`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether the input value is invalid.

`validationErrors`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)[]`

The current error messages for the input if it is invalid, otherwise an empty array.

`validationDetails`

`ValidityState`

The native validation details for the input.

State is managed by the `[useSelectState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/select/src/useSelectState.ts:useSelectState)` hook from `@react-stately/select`. The state object should be passed as an option to `useSelect`

If a select does not have a visible label, an `aria-label` or `aria-labelledby` prop must be passed instead to identify it to assistive technology.

* * *

`useSelect` requires knowledge of the options in the select in order to handle keyboard navigation and other interactions. It does this using the `[Collection](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/collections.d.ts:Collection)` interface, which is a generic interface to access sequential unique keyed data. You can implement this interface yourself, e.g. by using a prop to pass a list of item objects, but `[useSelectState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/select/src/useSelectState.ts:useSelectState)` from `@react-stately/select` implements a JSX based interface for building collections instead. See [Collection Components](https://react-spectrum.adobe.com/react-stately/collections.html) for more information, and [Collection Interface](https://react-spectrum.adobe.com/react-stately/Collection.html) for internal details.

In addition, `[useSelectState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/select/src/useSelectState.ts:useSelectState)` manages the state necessary for multiple selection and exposes a `[SelectionManager](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/selection/src/SelectionManager.ts:SelectionManager)`, which makes use of the collection to provide an interface to update the selection state. It also holds state to track if the popup is open. For more information about selection, see [Selection](https://react-spectrum.adobe.com/react-stately/selection.html).

* * *

This example uses a `<button>` element for the trigger, with a `<span>` inside to hold the value, and another for the dropdown arrow icon (hidden from screen readers with `aria-hidden`). A <`[HiddenSelect](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/select/src/HiddenSelect.tsx:HiddenSelect)`\> is used to render a hidden native `<select>`, which enables browser form autofill support.

The same `Popover`, `ListBox`, and `Button` components created with [usePopover](https://react-spectrum.adobe.com/react-aria/usePopover.html), [useListBox](https://react-spectrum.adobe.com/react-aria/useListBox.html), and [useButton](https://react-spectrum.adobe.com/react-aria/useButton.html) that you may already have in your component library or application should be reused. These can be shared with other components such as a `ComboBox` created with [useComboBox](https://react-spectrum.adobe.com/react-aria/useComboBox.html) or a `Dialog` popover created with [useDialog](https://react-spectrum.adobe.com/react-aria/useDialog.html). The code for these components is also included below in the collapsed sections.

In addition, see [useListBox](https://react-spectrum.adobe.com/react-aria/useListBox.html) for examples of sections (option groups), and more complex options. For an example of the description and error message elements, see [useTextField](https://react-spectrum.adobe.com/react-aria/useTextField.html).

```
import {Item, useSelectState} from 'react-stately';
import {HiddenSelect, useSelect} from 'react-aria';

// Reuse the ListBox, Popover, and Button from your component library. See below for details.
import {Button, ListBox, Popover} from 'your-component-library';

function Select(props) {
  // Create state based on the incoming props
  let state = useSelectState(props);

  // Get props for child elements from useSelect
  let ref = React.useRef(null);
  let {
    labelProps,
    triggerProps,
    valueProps,
    menuProps,
    hiddenSelectProps
  } = useSelect(props, state, ref);

  return (
    <div style={{ display: 'inline-block' }}>
      <div {...labelProps}>{props.label}</div>
      <HiddenSelect {...hiddenSelectProps} />
      <Button
        {...triggerProps}
        buttonRef={ref}
        style={{ height: 30, fontSize: 14 }}
      >
        <span {...valueProps}>
          {state.selectedItem
            ? state.selectedItem.rendered
            : 'Select an option'}
        </span>
        <span
          aria-hidden="true"
          style={{ paddingLeft: 5 }}
        >
          ▼
        </span>
      </Button>
      {state.isOpen &&
        (
          <Popover state={state} triggerRef={ref} placement="bottom start">
            <ListBox
              {...menuProps}
              state={state}
            />
          </Popover>
        )}
    </div>
  );
}

<Select label="Favorite Color">
  <Item>Red</Item>
  <Item>Orange</Item>
  <Item>Yellow</Item>
  <Item>Green</Item>
  <Item>Blue</Item>
  <Item>Purple</Item>
  <Item>Black</Item>
  <Item>White</Item>
  <Item>Lime</Item>
  <Item>Fushsia</Item>
</Select>
```

```
import {Item, useSelectState} from 'react-stately';
import {HiddenSelect, useSelect} from 'react-aria';

// Reuse the ListBox, Popover, and Button from your component library. See below for details.
import {
  Button,
  ListBox,
  Popover
} from 'your-component-library';

function Select(props) {
  // Create state based on the incoming props
  let state = useSelectState(props);

  // Get props for child elements from useSelect
  let ref = React.useRef(null);
  let {
    labelProps,
    triggerProps,
    valueProps,
    menuProps,
    hiddenSelectProps
  } = useSelect(props, state, ref);

  return (
    <div style={{ display: 'inline-block' }}>
      <div {...labelProps}>{props.label}</div>
      <HiddenSelect {...hiddenSelectProps} />
      <Button
        {...triggerProps}
        buttonRef={ref}
        style={{ height: 30, fontSize: 14 }}
      >
        <span {...valueProps}>
          {state.selectedItem
            ? state.selectedItem.rendered
            : 'Select an option'}
        </span>
        <span
          aria-hidden="true"
          style={{ paddingLeft: 5 }}
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
            <ListBox
              {...menuProps}
              state={state}
            />
          </Popover>
        )}
    </div>
  );
}

<Select label="Favorite Color">
  <Item>Red</Item>
  <Item>Orange</Item>
  <Item>Yellow</Item>
  <Item>Green</Item>
  <Item>Blue</Item>
  <Item>Purple</Item>
  <Item>Black</Item>
  <Item>White</Item>
  <Item>Lime</Item>
  <Item>Fushsia</Item>
</Select>
```

```
import {
  Item,
  useSelectState
} from 'react-stately';
import {
  HiddenSelect,
  useSelect
} from 'react-aria';

// Reuse the ListBox, Popover, and Button from your component library. See below for details.
import {
  Button,
  ListBox,
  Popover
} from 'your-component-library';

function Select(props) {
  // Create state based on the incoming props
  let state =
    useSelectState(
      props
    );

  // Get props for child elements from useSelect
  let ref = React.useRef(
    null
  );
  let {
    labelProps,
    triggerProps,
    valueProps,
    menuProps,
    hiddenSelectProps
  } = useSelect(
    props,
    state,
    ref
  );

  return (
    <div
      style={{
        display:
          'inline-block'
      }}
    >
      <div
        {...labelProps}
      >
        {props.label}
      </div>
      <HiddenSelect
        {...hiddenSelectProps}
      />
      <Button
        {...triggerProps}
        buttonRef={ref}
        style={{
          height: 30,
          fontSize: 14
        }}
      >
        <span
          {...valueProps}
        >
          {state
              .selectedItem
            ? state
              .selectedItem
              .rendered
            : 'Select an option'}
        </span>
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
            <ListBox
              {...menuProps}
              state={state}
            />
          </Popover>
        )}
    </div>
  );
}

<Select label="Favorite Color">
  <Item>Red</Item>
  <Item>Orange</Item>
  <Item>Yellow</Item>
  <Item>Green</Item>
  <Item>Blue</Item>
  <Item>Purple</Item>
  <Item>Black</Item>
  <Item>White</Item>
  <Item>Lime</Item>
  <Item>Fushsia</Item>
</Select>
```

The `Popover` component is used to contain the popup listbox for the Select. It can be shared between many other components, including [ComboBox](https://react-spectrum.adobe.com/react-aria/useComboBox.html), [Menu](https://react-spectrum.adobe.com/react-aria/useMenu.html), and others. See [usePopover](https://react-spectrum.adobe.com/react-aria/usePopover.html) for more examples of popovers.

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
          background: 'var(--page-background)',
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
          background: 'var(--page-background)',
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
            'var(--page-background)',
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

The `ListBox` and `Option` components are used to show the list of options. They can also be shared with other components like a [ComboBox](https://react-spectrum.adobe.com/react-aria/useComboBox.html). See [useListBox](https://react-spectrum.adobe.com/react-aria/useListBox.html) for more examples, including sections and more complex items.

Show code

```
import {useListBox, useOption} from 'react-aria';

function ListBox(props) {
  let ref = React.useRef(null);
  let { listBoxRef = ref, state } = props;
  let { listBoxProps } = useListBox(props, state, listBoxRef);

  return (
    <ul
      {...listBoxProps}
      ref={listBoxRef}
      style={{
        margin: 0,
        padding: 0,
        listStyle: 'none',
        maxHeight: 150,
        overflow: 'auto',
        minWidth: 100,
        background: 'lightgray'
      }}
    >
      {[...state.collection].map((item) => (
        <Option
          key={item.key}
          item={item}
          state={state}
        />
      ))}
    </ul>
  );
}

function Option({ item, state }) {
  let ref = React.useRef(null);
  let { optionProps, isSelected, isFocused, isDisabled } = useOption(
    { key: item.key },
    state,
    ref
  );

  return (
    <li
      {...optionProps}
      ref={ref}
      style={{
        background: isFocused ? 'gray' : 'transparent',
        color: isDisabled ? 'gray' : isFocused ? 'white' : 'black',
        padding: '2px 5px',
        outline: 'none',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'space-between',
        gap: '10px'
      }}
    >
      {item.rendered}
      {isSelected ? <span>✓</span> : null}
    </li>
  );
}
```

```
import {useListBox, useOption} from 'react-aria';

function ListBox(props) {
  let ref = React.useRef(null);
  let { listBoxRef = ref, state } = props;
  let { listBoxProps } = useListBox(
    props,
    state,
    listBoxRef
  );

  return (
    <ul
      {...listBoxProps}
      ref={listBoxRef}
      style={{
        margin: 0,
        padding: 0,
        listStyle: 'none',
        maxHeight: 150,
        overflow: 'auto',
        minWidth: 100,
        background: 'lightgray'
      }}
    >
      {[...state.collection].map((item) => (
        <Option
          key={item.key}
          item={item}
          state={state}
        />
      ))}
    </ul>
  );
}

function Option({ item, state }) {
  let ref = React.useRef(null);
  let { optionProps, isSelected, isFocused, isDisabled } =
    useOption({ key: item.key }, state, ref);

  return (
    <li
      {...optionProps}
      ref={ref}
      style={{
        background: isFocused ? 'gray' : 'transparent',
        color: isDisabled
          ? 'gray'
          : isFocused
          ? 'white'
          : 'black',
        padding: '2px 5px',
        outline: 'none',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'space-between',
        gap: '10px'
      }}
    >
      {item.rendered}
      {isSelected ? <span>✓</span> : null}
    </li>
  );
}
```

```
import {
  useListBox,
  useOption
} from 'react-aria';

function ListBox(props) {
  let ref = React.useRef(
    null
  );
  let {
    listBoxRef = ref,
    state
  } = props;
  let { listBoxProps } =
    useListBox(
      props,
      state,
      listBoxRef
    );

  return (
    <ul
      {...listBoxProps}
      ref={listBoxRef}
      style={{
        margin: 0,
        padding: 0,
        listStyle:
          'none',
        maxHeight: 150,
        overflow: 'auto',
        minWidth: 100,
        background:
          'lightgray'
      }}
    >
      {[
        ...state
          .collection
      ].map((item) => (
        <Option
          key={item.key}
          item={item}
          state={state}
        />
      ))}
    </ul>
  );
}

function Option(
  { item, state }
) {
  let ref = React.useRef(
    null
  );
  let {
    optionProps,
    isSelected,
    isFocused,
    isDisabled
  } = useOption(
    { key: item.key },
    state,
    ref
  );

  return (
    <li
      {...optionProps}
      ref={ref}
      style={{
        background:
          isFocused
            ? 'gray'
            : 'transparent',
        color: isDisabled
          ? 'gray'
          : isFocused
          ? 'white'
          : 'black',
        padding:
          '2px 5px',
        outline: 'none',
        cursor:
          'pointer',
        display: 'flex',
        justifyContent:
          'space-between',
        gap: '10px'
      }}
    >
      {item.rendered}
      {isSelected
        ? <span>✓</span>
        : null}
    </li>
  );
}
```

The `Button` component is used in the above example to toggle the listbox popup. It is built using the [useButton](https://react-spectrum.adobe.com/react-aria/useButton.html) hook, and can be shared with many other components.

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

[![](https://react-spectrum.adobe.com/example.ec784921.png)

Tailwind CSS

An example of styling a Select with Tailwind.

](https://codesandbox.io/s/hardcore-moon-xzc4r?file=/src/ComboBox.tsx)[![](https://react-spectrum.adobe.com/styled-components.0d9c5316.png)

Styled Components

A Select with complex item content built with Styled Components.

](https://codesandbox.io/s/sharp-sun-e3fgd?file=/src/Select.tsx)[![](https://react-spectrum.adobe.com/popup-example.0076b2f2.png)

Popup positioning

A Select with custom macOS-style popup positioning.

](https://codesandbox.io/s/heuristic-margulis-uz3d4d?file=/src/Select.tsx)

* * *

The following examples show how to use the Select component created in the above example.

`Select` follows the [Collection Components API](https://react-spectrum.adobe.com/react-stately/collections.html), accepting both static and dynamic collections. The examples above show static collections, which can be used when the full list of options is known ahead of time. Dynamic collections, as shown below, can be used when the options come from an external data source such as an API call, or update over time.

As seen below, an iterable list of options is passed to the Select using the `items` prop. Each item accepts a `key` prop, which is passed to the `onSelectionChange` handler to identify the selected item. Alternatively, if the item objects contain an `id` property, as shown in the example below, then this is used automatically and a `key` prop is not required.

```
function Example() {
  let options = [
    {id: 1, name: 'Aerospace'},
    {id: 2, name: 'Mechanical'},
    {id: 3, name: 'Civil'},
    {id: 4, name: 'Biomedical'},
    {id: 5, name: 'Nuclear'},
    {id: 6, name: 'Industrial'},
    {id: 7, name: 'Chemical'},
    {id: 8, name: 'Agricultural'},
    {id: 9, name: 'Electrical'}
  ];

  return (
    <>
      <Select label="Pick an engineering major" items={options}>
        {(item) => <Item>{item.name}</Item>}
      </Select>
    </>
  );
}
```

```
function Example() {
  let options = [
    { id: 1, name: 'Aerospace' },
    { id: 2, name: 'Mechanical' },
    { id: 3, name: 'Civil' },
    { id: 4, name: 'Biomedical' },
    { id: 5, name: 'Nuclear' },
    { id: 6, name: 'Industrial' },
    { id: 7, name: 'Chemical' },
    { id: 8, name: 'Agricultural' },
    { id: 9, name: 'Electrical' }
  ];

  return (
    <>
      <Select
        label="Pick an engineering major"
        items={options}
      >
        {(item) => <Item>{item.name}</Item>}
      </Select>
    </>
  );
}
```

```
function Example() {
  let options = [
    {
      id: 1,
      name: 'Aerospace'
    },
    {
      id: 2,
      name: 'Mechanical'
    },
    {
      id: 3,
      name: 'Civil'
    },
    {
      id: 4,
      name: 'Biomedical'
    },
    {
      id: 5,
      name: 'Nuclear'
    },
    {
      id: 6,
      name: 'Industrial'
    },
    {
      id: 7,
      name: 'Chemical'
    },
    {
      id: 8,
      name:
        'Agricultural'
    },
    {
      id: 9,
      name: 'Electrical'
    }
  ];

  return (
    <>
      <Select
        label="Pick an engineering major"
        items={options}
      >
        {(item) => (
          <Item>
            {item.name}
          </Item>
        )}
      </Select>
    </>
  );
}
```

Setting a selected option can be done by using the `defaultSelectedKey` or `selectedKey` prop. The selected key corresponds to the `key` of an item. When `Select` is used with a dynamic collection as described above, the key of each item is derived from the data. See the `react-stately` [Selection docs](https://react-spectrum.adobe.com/react-stately/selection.html) for more details.

```
function Example() {
  let options = [
    {name: 'Koala'},
    {name: 'Kangaroo'},
    {name: 'Platypus'},
    {name: 'Bald Eagle'},
    {name: 'Bison'},
    {name: 'Skunk'}
  ];
  let [animal, setAnimal] = React.useState("Bison");

  return (
    <Select
      label="Pick an animal (controlled)"
      items={options}
      selectedKey={animal}
      onSelectionChange={selected => setAnimal(selected)}>
      {item => <Item key={item.name}>{item.name}</Item>}
    </Select>
  );
}
```

```
function Example() {
  let options = [
    {name: 'Koala'},
    {name: 'Kangaroo'},
    {name: 'Platypus'},
    {name: 'Bald Eagle'},
    {name: 'Bison'},
    {name: 'Skunk'}
  ];
  let [animal, setAnimal] = React.useState("Bison");

  return (
    <Select
      label="Pick an animal (controlled)"
      items={options}
      selectedKey={animal}
      onSelectionChange={selected => setAnimal(selected)}>
      {item => <Item key={item.name}>{item.name}</Item>}
    </Select>
  );
}
```

```
function Example() {
  let options = [
    { name: 'Koala' },
    { name: 'Kangaroo' },
    { name: 'Platypus' },
    {
      name: 'Bald Eagle'
    },
    { name: 'Bison' },
    { name: 'Skunk' }
  ];
  let [
    animal,
    setAnimal
  ] = React.useState(
    'Bison'
  );

  return (
    <Select
      label="Pick an animal (controlled)"
      items={options}
      selectedKey={animal}
      onSelectionChange={(selected) =>
        setAnimal(
          selected
        )}
    >
      {(item) => (
        <Item
          key={item.name}
        >
          {item.name}
        </Item>
      )}
    </Select>
  );
}
```

This example uses the [useAsyncList](https://react-spectrum.adobe.com/react-stately/useAsyncList.html) hook to handle asynchronous loading of data from a server. You may additionally want to display a spinner to indicate the loading state to the user, or support features like infinite scroll to load more data.

```
import {useAsyncList} from 'react-stately';

function AsyncLoadingExample() {
  let list = useAsyncList({
    async load({ signal, filterText }) {
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
    <Select label="Pick a Pokemon" items={list.items} selectionMode="single">
      {(item) => <Item key={item.name}>{item.name}</Item>}
    </Select>
  );
}
```

```
import {useAsyncList} from 'react-stately';

function AsyncLoadingExample() {
  let list = useAsyncList({
    async load({ signal, filterText }) {
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
    <Select
      label="Pick a Pokemon"
      items={list.items}
      selectionMode="single"
    >
      {(item) => <Item key={item.name}>{item.name}</Item>}
    </Select>
  );
}
```

```
import {useAsyncList} from 'react-stately';

function AsyncLoadingExample() {
  let list =
    useAsyncList({
      async load(
        {
          signal,
          filterText
        }
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
    <Select
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
    </Select>
  );
}
```

A Select can be fully disabled using the `isDisabled` prop.

```
<Select label="Choose frequency" isDisabled>
  <Item key="rarely">Rarely</Item>
  <Item key="sometimes">Sometimes</Item>
  <Item key="always">Always</Item>
</Select>
```

```
<Select label="Choose frequency" isDisabled>
  <Item key="rarely">Rarely</Item>
  <Item key="sometimes">Sometimes</Item>
  <Item key="always">Always</Item>
</Select>
```

```
<Select
  label="Choose frequency"
  isDisabled
>
  <Item key="rarely">
    Rarely
  </Item>
  <Item key="sometimes">
    Sometimes
  </Item>
  <Item key="always">
    Always
  </Item>
</Select>
```

`useSelect` supports marking items as disabled using the `disabledKeys` prop. Each key in this list corresponds with the `key` prop passed to the `Item` component, or automatically derived from the values passed to the `items` prop. See [Collections](https://react-spectrum.adobe.com/react-stately/collections.html) for more details.

Disabled items are not focusable, selectable, or keyboard navigable. The `isDisabled` property returned by `useOption` can be used to style the item appropriately.

```
<Select label="Favorite Animal" disabledKeys={['cat', 'kangaroo']}>
  <Item key="red panda">Red Panda</Item>
  <Item key="cat">Cat</Item>
  <Item key="dog">Dog</Item>
  <Item key="aardvark">Aardvark</Item>
  <Item key="kangaroo">Kangaroo</Item>
  <Item key="snake">Snake</Item>
</Select>
```

```
<Select
  label="Favorite Animal"
  disabledKeys={['cat', 'kangaroo']}
>
  <Item key="red panda">Red Panda</Item>
  <Item key="cat">Cat</Item>
  <Item key="dog">Dog</Item>
  <Item key="aardvark">Aardvark</Item>
  <Item key="kangaroo">Kangaroo</Item>
  <Item key="snake">Snake</Item>
</Select>
```

```
<Select
  label="Favorite Animal"
  disabledKeys={[
    'cat',
    'kangaroo'
  ]}
>
  <Item key="red panda">
    Red Panda
  </Item>
  <Item key="cat">
    Cat
  </Item>
  <Item key="dog">
    Dog
  </Item>
  <Item key="aardvark">
    Aardvark
  </Item>
  <Item key="kangaroo">
    Kangaroo
  </Item>
  <Item key="snake">
    Snake
  </Item>
</Select>
```

The open state of the select can be controlled via the `defaultOpen` and `isOpen` props

```
function Example() {
  let [open, setOpen] = React.useState(false);

  return (
    <>
      <p>Select is {open ? 'open' : 'closed'}</p>
      <Select label="Choose frequency" isOpen={open} onOpenChange={setOpen}>
        <Item key="rarely">Rarely</Item>
        <Item key="sometimes">Sometimes</Item>
        <Item key="always">Always</Item>
      </Select>
    </>
  );
}
```

```
function Example() {
  let [open, setOpen] = React.useState(false);

  return (
    <>
      <p>Select is {open ? 'open' : 'closed'}</p>
      <Select
        label="Choose frequency"
        isOpen={open}
        onOpenChange={setOpen}
      >
        <Item key="rarely">Rarely</Item>
        <Item key="sometimes">Sometimes</Item>
        <Item key="always">Always</Item>
      </Select>
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
        Select is {open
          ? 'open'
          : 'closed'}
      </p>
      <Select
        label="Choose frequency"
        isOpen={open}
        onOpenChange={setOpen}
      >
        <Item key="rarely">
          Rarely
        </Item>
        <Item key="sometimes">
          Sometimes
        </Item>
        <Item key="always">
          Always
        </Item>
      </Select>
    </>
  );
}
```

By default, interacting with an item in a Select triggers `onSelectionChange`. Alternatively, items may be links to another page or website. This can be achieved by passing the `href` prop to the `<Item>` component. Link items in a `Select` are not selectable. See the [links](https://react-spectrum.adobe.com/react-aria/useListBox.html#links) section in the `useListBox` docs for details on how to support this.

* * *

`useSelect` and `useListBox` handle some aspects of internationalization automatically. For example, type to select is implemented with an [Intl.Collator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Collator) for internationalized string matching. You are responsible for localizing all labels and option content that is passed into the select.

In right-to-left languages, the select should be mirrored. The arrow should be on the left, and the selected value should be on the right. In addition, the content of list options should flip. Ensure that your CSS accounts for this.

* * *

The HiddenSelect may trigger a [known accessibility false positive](https://github.com/adobe/react-spectrum/wiki/Known-accessibility-false-positives#picker) from automated accessibility testing tools. This is because the HiddenSelect is included to specifically aid with browser form autocomplete and is hidden from screen readers via `aria-hidden` since users don't need to interact with it. We manage focus internally so that focusing this hidden select element will always shift focus to the Select's trigger button instead. Automated accessibility testing tools have no way of knowing that we manage the focus in this way and thus throw this false positive.

To facilitate the suppression of this false positive, the `data-a11y-ignore="aria-hidden-focus"` data attribute is automatically applied to the problematic element and references the relevant `AXE` rule. Please use this data attribute to target the problematic element and exclude it from your automated accessibility tests as shown [here](https://react-spectrum.adobe.com/react-aria/accessibility.html#false-positives).