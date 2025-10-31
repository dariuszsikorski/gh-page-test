# useComboBox

**Source**: [https://react-spectrum.adobe.com/react-aria/useComboBox.html](https://react-spectrum.adobe.com/react-aria/useComboBox.html)

> Documentation for useComboBox in the React Aria package.

---

Provides the behavior and accessibility implementation for a combo box component. A combo box combines a text input with a listbox, allowing users to filter a list of options to items matching a query.

* * *

`useComboBox<T>( (props: [AriaComboBoxOptions](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/combobox/src/useComboBox.ts:AriaComboBoxOptions)<T>, , state: [ComboBoxState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/combobox/src/useComboBoxState.ts:ComboBoxState)<T> )): [ComboBoxAria](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/combobox/src/useComboBox.ts:ComboBoxAria)<T>`

* * *

A combo box can be built using the [<datalist>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist) HTML element, but this is very limited in functionality and difficult to style. `useComboBox` helps achieve accessible combo box and autocomplete components that can be styled as needed.

-   Support for filtering a list of options by typing
-   Support for selecting a single option
-   Support for disabled options
-   Support for groups of items in sections
-   Support for custom user input values
-   Support for controlled and uncontrolled options, selection, input value, and open state
-   Support for custom filter functions
-   Async loading and infinite scrolling support
-   Support for use with virtualized lists
-   Exposed to assistive technology as a `combobox` with ARIA
-   Labeling support for accessibility
-   Required and invalid states exposed to assistive technology via ARIA
-   Support for mouse, touch, and keyboard interactions
-   Keyboard support for opening the combo box list box using the arrow keys, including automatically focusing the first or last item accordingly
-   Support for opening the list box when typing, on focus, or manually
-   Handles virtual clicks on the input from touch screen readers to toggle the list box
-   Virtual focus management for combo box list box option navigation
-   Hides elements outside the input and list box from assistive technology while the list box is open in a portal
-   Custom localized announcements for option focusing, filtering, and selection using an ARIA live region to work around VoiceOver bugs
-   Support for native HTML constraint validation with customizable UI, custom validation functions, realtime validation, and server-side validation errors

Read our [blog post](https://react-spectrum.adobe.com/blog/building-a-combobox.html) for more details about the interactions and accessibility features implemented by `useComboBox`.

* * *

LabelLabelInputButtonLabelOption oneOption twoOption threeOpList boxOp

A combo box consists of a label, an input which displays the current value, a list box popup, and an optional button used to toggle the list box popup open state. Users can type within the input to filter the available options within the list box. The list box popup may be opened by a variety of input field interactions specified by the `menuTrigger` prop provided to `useComboBox`, or by clicking or touching the button. `useComboBox` handles exposing the correct ARIA attributes for accessibility for each of the elements comprising the combo box. It should be combined with [useListBox](https://react-spectrum.adobe.com/react-aria/useListBox.html), which handles the implementation of the popup list box, and [useButton](https://react-spectrum.adobe.com/react-aria/useButton.html) which handles the button press interactions.

`useComboBox` also supports optional description and error message elements, which can be used to provide more context about the field, and any validation messages. These are linked with the input via the `aria-describedby` attribute.

`useComboBox` returns props that you should spread onto the appropriate elements:

Name

Type

Description

`labelProps`

`[DOMAttributes](https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes)`

Props for the label element.

`inputProps`

`[InputHTMLAttributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes)<[HTMLInputElement](https://developer.mozilla.org/docs/Web/API/HTMLInputElement)>`

Props for the combo box input element.

`listBoxProps`

`[AriaListBoxOptions](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/listbox/src/useListBox.ts:AriaListBoxOptions)<T>`

Props for the list box, to be passed to [useListBox](https://react-spectrum.adobe.com/react-aria/useListBox.html).

`buttonProps`

`[AriaButtonProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/button/src/index.d.ts:AriaButtonProps)`

Props for the optional trigger button, to be passed to [useButton](https://react-spectrum.adobe.com/react-aria/useButton.html).

`descriptionProps`

`[DOMAttributes](https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes)`

Props for the combo box description element, if any.

`errorMessageProps`

`[DOMAttributes](https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes)`

Props for the combo box error message element, if any.

`isInvalid`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether the input value is invalid.

`validationErrors`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)[]`

The current error messages for the input if it is invalid, otherwise an empty array.

`validationDetails`

`ValidityState`

The native validation details for the input.

State is managed by the `[useComboBoxState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/combobox/src/useComboBoxState.ts:useComboBoxState)` hook from `@react-stately/combobox`. The state object should be passed as an option to `useComboBox`.

If the combo box does not have a visible label, an `aria-label` or `aria-labelledby` prop must be passed instead to identify it to assistive technology.

* * *

`useComboBox` requires knowledge of the options in the combo box in order to handle keyboard navigation and other interactions. It does this using the `[Collection](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/collections.d.ts:Collection)` interface, which is a generic interface to access sequential unique keyed data. You can implement this interface yourself, e.g. by using a prop to pass a list of item objects, but `[useComboBoxState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/combobox/src/useComboBoxState.ts:useComboBoxState)` from `@react-stately/combobox` implements a JSX based interface for building collections instead. See [Collection Components](https://react-spectrum.adobe.com/react-stately/collections.html) for more information, and [Collection Interface](https://react-spectrum.adobe.com/react-stately/Collection.html) for internal details.

In addition, `[useComboBoxState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/combobox/src/useComboBoxState.ts:useComboBoxState)` manages the state necessary for single selection and exposes a `[SelectionManager](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/selection/src/SelectionManager.ts:SelectionManager)`, which makes use of the collection to provide an interface to update the selection state. It also holds state to track if the popup is open, if the combo box is focused, and the current input value. For more information about selection, see [Selection](https://react-spectrum.adobe.com/react-stately/selection.html).

* * *

This example uses an `<input>` element for the combo box text input and a `<button>` element for the list box popup trigger. A `<span>` is included within the `<button>` to display the dropdown arrow icon (hidden from screen readers with `aria-hidden`). A "contains" filter function is obtained from `[useFilter](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/i18n/src/useFilter.ts:useFilter)` and is passed to `[useComboBoxState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/combobox/src/useComboBoxState.ts:useComboBoxState)` so that the list box can be filtered based on the option text and the current input text.

The same `Popover`, `ListBox`, and `Button` components created with [usePopover](https://react-spectrum.adobe.com/react-aria/usePopover.html), [useListBox](https://react-spectrum.adobe.com/react-aria/useListBox.html), and [useButton](https://react-spectrum.adobe.com/react-aria/useButton.html) that you may already have in your component library or application should be reused. These can be shared with other components such as a `Select` created with [useSelect](https://react-spectrum.adobe.com/react-aria/useSelect.html) or a `Dialog` popover created with [useDialog](https://react-spectrum.adobe.com/react-aria/useDialog.html). The code for these components is also included below in the collapsed sections.

In addition, see [useListBox](https://react-spectrum.adobe.com/react-aria/useListBox.html) for examples of sections (option groups), and more complex options. For an example of the description and error message elements, see [useTextField](https://react-spectrum.adobe.com/react-aria/useTextField.html).

```
import {useButton, useComboBox, useFilter} from 'react-aria';
import {Item, useComboBoxState} from 'react-stately';

// Reuse the ListBox, Popover, and Button from your component library. See below for details.
import {Button, ListBox, Popover} from 'your-component-library';

function ComboBox(props) {
  // Setup filter function and state.
  let { contains } = useFilter({ sensitivity: 'base' });
  let state = useComboBoxState({ ...props, defaultFilter: contains });

  // Setup refs and get props for child elements.
  let buttonRef = React.useRef(null);
  let inputRef = React.useRef(null);
  let listBoxRef = React.useRef(null);
  let popoverRef = React.useRef(null);

  let { buttonProps, inputProps, listBoxProps, labelProps } = useComboBox(
    {
      ...props,
      inputRef,
      buttonRef,
      listBoxRef,
      popoverRef
    },
    state
  );

  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column' }}>
      <label {...labelProps}>{props.label}</label>
      <div>
        <input
          {...inputProps}
          ref={inputRef}
          style={{
            height: 24,
            boxSizing: 'border-box',
            marginRight: 0,
            fontSize: 16
          }}
        />
        <Button
          {...buttonProps}
          buttonRef={buttonRef}
          style={{
            height: 24,
            marginLeft: 0
          }}
        >
          <span
            aria-hidden="true"
            style={{ padding: '0 2px' }}
          >
            ▼
          </span>
        </Button>
        {state.isOpen &&
          (
            <Popover
              state={state}
              triggerRef={inputRef}
              popoverRef={popoverRef}
              isNonModal
              placement="bottom start"
            >
              <ListBox
                {...listBoxProps}
                listBoxRef={listBoxRef}
                state={state}
              />
            </Popover>
          )}
      </div>
    </div>
  );
}

<ComboBox label="Favorite Animal">
  <Item key="red panda">Red Panda</Item>
  <Item key="cat">Cat</Item>
  <Item key="dog">Dog</Item>
  <Item key="aardvark">Aardvark</Item>
  <Item key="kangaroo">Kangaroo</Item>
  <Item key="snake">Snake</Item>
</ComboBox>
```

```
import {
  useButton,
  useComboBox,
  useFilter
} from 'react-aria';
import {Item, useComboBoxState} from 'react-stately';

// Reuse the ListBox, Popover, and Button from your component library. See below for details.
import {
  Button,
  ListBox,
  Popover
} from 'your-component-library';

function ComboBox(props) {
  // Setup filter function and state.
  let { contains } = useFilter({ sensitivity: 'base' });
  let state = useComboBoxState({
    ...props,
    defaultFilter: contains
  });

  // Setup refs and get props for child elements.
  let buttonRef = React.useRef(null);
  let inputRef = React.useRef(null);
  let listBoxRef = React.useRef(null);
  let popoverRef = React.useRef(null);

  let {
    buttonProps,
    inputProps,
    listBoxProps,
    labelProps
  } = useComboBox(
    {
      ...props,
      inputRef,
      buttonRef,
      listBoxRef,
      popoverRef
    },
    state
  );

  return (
    <div
      style={{
        display: 'inline-flex',
        flexDirection: 'column'
      }}
    >
      <label {...labelProps}>{props.label}</label>
      <div>
        <input
          {...inputProps}
          ref={inputRef}
          style={{
            height: 24,
            boxSizing: 'border-box',
            marginRight: 0,
            fontSize: 16
          }}
        />
        <Button
          {...buttonProps}
          buttonRef={buttonRef}
          style={{
            height: 24,
            marginLeft: 0
          }}
        >
          <span
            aria-hidden="true"
            style={{ padding: '0 2px' }}
          >
            ▼
          </span>
        </Button>
        {state.isOpen &&
          (
            <Popover
              state={state}
              triggerRef={inputRef}
              popoverRef={popoverRef}
              isNonModal
              placement="bottom start"
            >
              <ListBox
                {...listBoxProps}
                listBoxRef={listBoxRef}
                state={state}
              />
            </Popover>
          )}
      </div>
    </div>
  );
}

<ComboBox label="Favorite Animal">
  <Item key="red panda">Red Panda</Item>
  <Item key="cat">Cat</Item>
  <Item key="dog">Dog</Item>
  <Item key="aardvark">Aardvark</Item>
  <Item key="kangaroo">Kangaroo</Item>
  <Item key="snake">Snake</Item>
</ComboBox>
```

```
import {
  useButton,
  useComboBox,
  useFilter
} from 'react-aria';
import {
  Item,
  useComboBoxState
} from 'react-stately';

// Reuse the ListBox, Popover, and Button from your component library. See below for details.
import {
  Button,
  ListBox,
  Popover
} from 'your-component-library';

function ComboBox(
  props
) {
  // Setup filter function and state.
  let { contains } =
    useFilter({
      sensitivity: 'base'
    });
  let state =
    useComboBoxState({
      ...props,
      defaultFilter:
        contains
    });

  // Setup refs and get props for child elements.
  let buttonRef = React
    .useRef(null);
  let inputRef = React
    .useRef(null);
  let listBoxRef = React
    .useRef(null);
  let popoverRef = React
    .useRef(null);

  let {
    buttonProps,
    inputProps,
    listBoxProps,
    labelProps
  } = useComboBox(
    {
      ...props,
      inputRef,
      buttonRef,
      listBoxRef,
      popoverRef
    },
    state
  );

  return (
    <div
      style={{
        display:
          'inline-flex',
        flexDirection:
          'column'
      }}
    >
      <label
        {...labelProps}
      >
        {props.label}
      </label>
      <div>
        <input
          {...inputProps}
          ref={inputRef}
          style={{
            height: 24,
            boxSizing:
              'border-box',
            marginRight:
              0,
            fontSize: 16
          }}
        />
        <Button
          {...buttonProps}
          buttonRef={buttonRef}
          style={{
            height: 24,
            marginLeft: 0
          }}
        >
          <span
            aria-hidden="true"
            style={{
              padding:
                '0 2px'
            }}
          >
            ▼
          </span>
        </Button>
        {state.isOpen &&
          (
            <Popover
              state={state}
              triggerRef={inputRef}
              popoverRef={popoverRef}
              isNonModal
              placement="bottom start"
            >
              <ListBox
                {...listBoxProps}
                listBoxRef={listBoxRef}
                state={state}
              />
            </Popover>
          )}
      </div>
    </div>
  );
}

<ComboBox label="Favorite Animal">
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
</ComboBox>
```

The `Popover` component is used to contain the popup listbox for the ComboBox. It can be shared between many other components, including [Select](https://react-spectrum.adobe.com/react-aria/useSelect.html), [Menu](https://react-spectrum.adobe.com/react-aria/useMenu.html), and others. See [usePopover](https://react-spectrum.adobe.com/react-aria/usePopover.html) for more examples of popovers.

Show code

```
import {DismissButton, Overlay, usePopover} from 'react-aria';
import type {AriaPopoverProps} from 'react-aria';
import type {OverlayTriggerState} from 'react-stately';

interface PopoverProps extends AriaPopoverProps {
  children: React.ReactNode;
  state: OverlayTriggerState;
}

function Popover({ children, state, ...props }: PopoverProps) {
  let { popoverProps } = usePopover(props, state);

  return (
    <Overlay>
      <div
        {...popoverProps}
        ref={props.popoverRef as React.RefObject<HTMLDivElement>}
        style={{
          ...popoverProps.style,
          background: 'lightgray',
          border: '1px solid gray'
        }}
      >
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

interface PopoverProps extends AriaPopoverProps {
  children: React.ReactNode;
  state: OverlayTriggerState;
}

function Popover(
  { children, state, ...props }: PopoverProps
) {
  let { popoverProps } = usePopover(props, state);

  return (
    <Overlay>
      <div
        {...popoverProps}
        ref={props.popoverRef as React.RefObject<
          HTMLDivElement
        >}
        style={{
          ...popoverProps.style,
          background: 'lightgray',
          border: '1px solid gray'
        }}
      >
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
    AriaPopoverProps {
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
  let { popoverProps } =
    usePopover(
      props,
      state
    );

  return (
    <Overlay>
      <div
        {...popoverProps}
        ref={props
          .popoverRef as React.RefObject<
            HTMLDivElement
          >}
        style={{
          ...popoverProps
            .style,
          background:
            'lightgray',
          border:
            '1px solid gray'
        }}
      >
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

The `ListBox` and `Option` components are used to show the filtered list of options as the user types in the ComboBox. They can also be shared with other components like a [Select](https://react-spectrum.adobe.com/react-aria/useSelect.html). See [useListBox](https://react-spectrum.adobe.com/react-aria/useListBox.html) for more examples, including sections and more complex items.

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
        minWidth: 200
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

  let backgroundColor;
  let color = 'black';

  if (isSelected) {
    backgroundColor = 'blueviolet';
    color = 'white';
  } else if (isFocused) {
    backgroundColor = 'gray';
  } else if (isDisabled) {
    backgroundColor = 'transparent';
    color = 'gray';
  }

  return (
    <li
      {...optionProps}
      ref={ref}
      style={{
        background: backgroundColor,
        color: color,
        padding: '2px 5px',
        outline: 'none',
        cursor: 'pointer'
      }}
    >
      {item.rendered}
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
        minWidth: 200
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

  let backgroundColor;
  let color = 'black';

  if (isSelected) {
    backgroundColor = 'blueviolet';
    color = 'white';
  } else if (isFocused) {
    backgroundColor = 'gray';
  } else if (isDisabled) {
    backgroundColor = 'transparent';
    color = 'gray';
  }

  return (
    <li
      {...optionProps}
      ref={ref}
      style={{
        background: backgroundColor,
        color: color,
        padding: '2px 5px',
        outline: 'none',
        cursor: 'pointer'
      }}
    >
      {item.rendered}
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
        minWidth: 200
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

  let backgroundColor;
  let color = 'black';

  if (isSelected) {
    backgroundColor =
      'blueviolet';
    color = 'white';
  } else if (isFocused) {
    backgroundColor =
      'gray';
  } else if (
    isDisabled
  ) {
    backgroundColor =
      'transparent';
    color = 'gray';
  }

  return (
    <li
      {...optionProps}
      ref={ref}
      style={{
        background:
          backgroundColor,
        color: color,
        padding:
          '2px 5px',
        outline: 'none',
        cursor: 'pointer'
      }}
    >
      {item.rendered}
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

[![](https://react-spectrum.adobe.com/example.efd4cd78.png)

Tailwind CSS

An example of styling a ComboBox with Tailwind.

](https://codesandbox.io/s/hardcore-moon-xzc4r?file=/src/ComboBox.tsx)[![](https://react-spectrum.adobe.com/search.70c2985b.png)

Search autocomplete

A search autocomplete with multiple sections, styled with Tailwind.

](https://codesandbox.io/s/hardcore-moon-xzc4r?file=/src/SearchAutocomplete.tsx)[![](https://react-spectrum.adobe.com/styled-components.3c9aeeb2.png)

Styled Components

A ComboBox with complex item content built with Styled Components.

](https://codesandbox.io/s/sharp-sun-e3fgd?file=/src/ComboBox.tsx)[![](https://react-spectrum.adobe.com/material.6182513f.png)

Material UI

An example ComboBox built with Material UI and React Aria.

](https://codesandbox.io/s/falling-http-u37en?file=/src/ComboBox.js)[![](https://react-spectrum.adobe.com/chakra.991b27a7.png)

Chakra UI

An async loading and infinite scrolling autocomplete built with Chakra UI.

](https://codesandbox.io/s/dreamy-burnell-3i2jy?file=/src/App.tsx)

* * *

The following examples show how to use the ComboBox component created in the above example.

The following example shows how you would create an uncontrolled ComboBox. The input value, selected option, and open state is completely uncontrolled, with the default input text set by the `defaultInputValue` prop.

```
<ComboBox label="Favorite Animal" defaultInputValue="red">
  <Item key="red panda">Red Panda</Item>
  <Item key="cat">Cat</Item>
  <Item key="dog">Dog</Item>
  <Item key="aardvark">Aardvark</Item>
  <Item key="kangaroo">Kangaroo</Item>
  <Item key="snake">Snake</Item>
</ComboBox>
```

```
<ComboBox label="Favorite Animal" defaultInputValue="red">
  <Item key="red panda">Red Panda</Item>
  <Item key="cat">Cat</Item>
  <Item key="dog">Dog</Item>
  <Item key="aardvark">Aardvark</Item>
  <Item key="kangaroo">Kangaroo</Item>
  <Item key="snake">Snake</Item>
</ComboBox>
```

```
<ComboBox
  label="Favorite Animal"
  defaultInputValue="red"
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
</ComboBox>
```

ComboBox follows the [Collection Components API](https://react-spectrum.adobe.com/react-stately/collections.html), accepting both static and dynamic collections. The examples above show static collections, which can be used when the full list of options is known ahead of time. Dynamic collections, as shown below, can be used when the options come from an external data source such as an API call, or update over time.

As seen below, an iterable list of options is passed to the ComboBox using the `defaultItems` prop. Each item accepts a `key` prop, which is passed to the `onSelectionChange` handler to identify the selected item. Alternatively, if the item objects contain an `id` property, as shown in the example below, then this is used automatically and a `key` prop is not required.

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
  let [majorId, setMajorId] = React.useState(null);

  return (
    <>
      <ComboBox
        label="Pick a engineering major"
        defaultItems={options}
        onSelectionChange={setMajorId}>
        {(item) => <Item>{item.name}</Item>}
      </ComboBox>
      <p>Selected topic id: {majorId}</p>
    </>
  );
}
```

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
  let [majorId, setMajorId] = React.useState(null);

  return (
    <>
      <ComboBox
        label="Pick a engineering major"
        defaultItems={options}
        onSelectionChange={setMajorId}>
        {(item) => <Item>{item.name}</Item>}
      </ComboBox>
      <p>Selected topic id: {majorId}</p>
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
  let [
    majorId,
    setMajorId
  ] = React.useState(
    null
  );

  return (
    <>
      <ComboBox
        label="Pick a engineering major"
        defaultItems={options}
        onSelectionChange={setMajorId}
      >
        {(item) => (
          <Item>
            {item.name}
          </Item>
        )}
      </ComboBox>
      <p>
        Selected topic
        id: {majorId}
      </p>
    </>
  );
}
```

By default, `useComboBoxState` doesn't allow users to specify a value that doesn't exist in the list of options and will revert the input value to the current selected value on blur. By specifying `allowsCustomValue`, this behavior is suppressed and the user is free to enter any value within the field.

```
<ComboBox label="Favorite Animal" allowsCustomValue>
  <Item key="red panda">Red Panda</Item>
  <Item key="cat">Cat</Item>
  <Item key="dog">Dog</Item>
  <Item key="aardvark">Aardvark</Item>
  <Item key="kangaroo">Kangaroo</Item>
  <Item key="snake">Snake</Item>
</ComboBox>
```

```
<ComboBox label="Favorite Animal" allowsCustomValue>
  <Item key="red panda">Red Panda</Item>
  <Item key="cat">Cat</Item>
  <Item key="dog">Dog</Item>
  <Item key="aardvark">Aardvark</Item>
  <Item key="kangaroo">Kangaroo</Item>
  <Item key="snake">Snake</Item>
</ComboBox>
```

```
<ComboBox
  label="Favorite Animal"
  allowsCustomValue
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
</ComboBox>
```

By default, `useComboBoxState` uses the filter function passed to the `defaultFilter` prop (in the above example, a "contains" function from `useFilter`). The filter function can be overridden by users of the `ComboBox` component by using the `items` prop to control the filtered list. When `items` is provided rather than `defaultItems`, `useComboBoxState` does no filtering of its own.

The following example makes the `inputValue` controlled, and updates the filtered list that is passed to the `items` prop when the input changes value.

```
function Example() {
  let options = [
    {id: 1, email: 'fake@email.com'},
    {id: 2, email: 'anotherfake@email.com'},
    {id: 3, email: 'bob@email.com'},
    {id: 4, email: 'joe@email.com'},
    {id: 5, email: 'yourEmail@email.com'},
    {id: 6, email: 'valid@email.com'},
    {id: 7, email: 'spam@email.com'},
    {id: 8, email: 'newsletter@email.com'},
    {id: 9, email: 'subscribe@email.com'}
  ];

  let {startsWith} = useFilter({sensitivity: 'base'});
  let [filterValue, setFilterValue] = React.useState('');
  let filteredItems = React.useMemo(
    () => options.filter((item) => startsWith(item.email, filterValue)),
    [options, filterValue]
  );

  return (
    <ComboBox
      label="To:"
      items={filteredItems}
      inputValue={filterValue}
      onInputChange={setFilterValue}
      allowsCustomValue>
      {(item) => <Item>{item.email}</Item>}
    </ComboBox>
  );
}
```

```
function Example() {
  let options = [
    { id: 1, email: 'fake@email.com' },
    { id: 2, email: 'anotherfake@email.com' },
    { id: 3, email: 'bob@email.com' },
    { id: 4, email: 'joe@email.com' },
    { id: 5, email: 'yourEmail@email.com' },
    { id: 6, email: 'valid@email.com' },
    { id: 7, email: 'spam@email.com' },
    { id: 8, email: 'newsletter@email.com' },
    { id: 9, email: 'subscribe@email.com' }
  ];

  let { startsWith } = useFilter({ sensitivity: 'base' });
  let [filterValue, setFilterValue] = React.useState('');
  let filteredItems = React.useMemo(
    () =>
      options.filter((item) =>
        startsWith(item.email, filterValue)
      ),
    [options, filterValue]
  );

  return (
    <ComboBox
      label="To:"
      items={filteredItems}
      inputValue={filterValue}
      onInputChange={setFilterValue}
      allowsCustomValue
    >
      {(item) => <Item>{item.email}</Item>}
    </ComboBox>
  );
}
```

```
function Example() {
  let options = [
    {
      id: 1,
      email:
        'fake@email.com'
    },
    {
      id: 2,
      email:
        'anotherfake@email.com'
    },
    {
      id: 3,
      email:
        'bob@email.com'
    },
    {
      id: 4,
      email:
        'joe@email.com'
    },
    {
      id: 5,
      email:
        'yourEmail@email.com'
    },
    {
      id: 6,
      email:
        'valid@email.com'
    },
    {
      id: 7,
      email:
        'spam@email.com'
    },
    {
      id: 8,
      email:
        'newsletter@email.com'
    },
    {
      id: 9,
      email:
        'subscribe@email.com'
    }
  ];

  let { startsWith } =
    useFilter({
      sensitivity: 'base'
    });
  let [
    filterValue,
    setFilterValue
  ] = React.useState('');
  let filteredItems =
    React.useMemo(
      () =>
        options.filter((
          item
        ) =>
          startsWith(
            item.email,
            filterValue
          )
        ),
      [
        options,
        filterValue
      ]
    );

  return (
    <ComboBox
      label="To:"
      items={filteredItems}
      inputValue={filterValue}
      onInputChange={setFilterValue}
      allowsCustomValue
    >
      {(item) => (
        <Item>
          {item.email}
        </Item>
      )}
    </ComboBox>
  );
}
```

The following example shows how you would create a controlled ComboBox, controlling everything from the selected value (`selectedKey`) to the combobox options (`items`). By passing in `inputValue`, `selectedKey`, and `items` to the `ComboBox` you can control exactly what your ComboBox should display. For example, note that the item filtering for the controlled ComboBox below now follows a "starts with" filter strategy, accomplished by controlling the exact set of items available to the ComboBox whenever the input value updates.

It is important to note that you don't have to control every single aspect of a ComboBox. If you decide to only control a single property of the ComboBox, be sure to provide the change handler for that prop as well e.g. controlling `selectedKey` would require `onSelectionChange` to be passed to `useComboBox` as well.

```
function ControlledComboBox() {
  let optionList = [
    { name: 'Red Panda', id: '1' },
    { name: 'Cat', id: '2' },
    { name: 'Dog', id: '3' },
    { name: 'Aardvark', id: '4' },
    { name: 'Kangaroo', id: '5' },
    { name: 'Snake', id: '6' }
  ];

  // Store ComboBox input value, selected option, open state, and items
  // in a state tracker
  let [fieldState, setFieldState] = React.useState({
    selectedKey: '',
    inputValue: '',
    items: optionList
  });

  // Implement custom filtering logic and control what items are
  // available to the ComboBox.
  let { startsWith } = useFilter({ sensitivity: 'base' });

  // Specify how each of the ComboBox values should change when an
  // option is selected from the list box
  let onSelectionChange = (key) => {
    setFieldState((prevState) => {
      let selectedItem = prevState.items.find((option) => option.id === key);
      return ({
        inputValue: selectedItem?.name ?? '',
        selectedKey: key,
        items: optionList.filter((item) =>
          startsWith(item.name, selectedItem?.name ?? '')
        )
      });
    });
  };

  // Specify how each of the ComboBox values should change when the input
  // field is altered by the user
  let onInputChange = (value) => {
    setFieldState((prevState) => ({
      inputValue: value,
      selectedKey: value === '' ? null : prevState.selectedKey,
      items: optionList.filter((item) => startsWith(item.name, value))
    }));
  };

  // Show entire list if user opens the menu manually
  let onOpenChange = (isOpen, menuTrigger) => {
    if (menuTrigger === 'manual' && isOpen) {
      setFieldState((prevState) => ({
        inputValue: prevState.inputValue,
        selectedKey: prevState.selectedKey,
        items: optionList
      }));
    }
  };

  // Pass each controlled prop to useComboBox along with their
  // change handlers
  return (
    <ComboBox
      label="Favorite Animal"
      items={fieldState.items}
      selectedKey={fieldState.selectedKey}
      inputValue={fieldState.inputValue}
      onOpenChange={onOpenChange}
      onSelectionChange={onSelectionChange}
      onInputChange={onInputChange}
    >
      {(item) => <Item>{item.name}</Item>}
    </ComboBox>
  );
}

<ControlledComboBox />
```

```
function ControlledComboBox() {
  let optionList = [
    { name: 'Red Panda', id: '1' },
    { name: 'Cat', id: '2' },
    { name: 'Dog', id: '3' },
    { name: 'Aardvark', id: '4' },
    { name: 'Kangaroo', id: '5' },
    { name: 'Snake', id: '6' }
  ];

  // Store ComboBox input value, selected option, open state, and items
  // in a state tracker
  let [fieldState, setFieldState] = React.useState({
    selectedKey: '',
    inputValue: '',
    items: optionList
  });

  // Implement custom filtering logic and control what items are
  // available to the ComboBox.
  let { startsWith } = useFilter({ sensitivity: 'base' });

  // Specify how each of the ComboBox values should change when an
  // option is selected from the list box
  let onSelectionChange = (key) => {
    setFieldState((prevState) => {
      let selectedItem = prevState.items.find((option) =>
        option.id === key
      );
      return ({
        inputValue: selectedItem?.name ?? '',
        selectedKey: key,
        items: optionList.filter((item) =>
          startsWith(item.name, selectedItem?.name ?? '')
        )
      });
    });
  };

  // Specify how each of the ComboBox values should change when the input
  // field is altered by the user
  let onInputChange = (value) => {
    setFieldState((prevState) => ({
      inputValue: value,
      selectedKey: value === ''
        ? null
        : prevState.selectedKey,
      items: optionList.filter((item) =>
        startsWith(item.name, value)
      )
    }));
  };

  // Show entire list if user opens the menu manually
  let onOpenChange = (isOpen, menuTrigger) => {
    if (menuTrigger === 'manual' && isOpen) {
      setFieldState((prevState) => ({
        inputValue: prevState.inputValue,
        selectedKey: prevState.selectedKey,
        items: optionList
      }));
    }
  };

  // Pass each controlled prop to useComboBox along with their
  // change handlers
  return (
    <ComboBox
      label="Favorite Animal"
      items={fieldState.items}
      selectedKey={fieldState.selectedKey}
      inputValue={fieldState.inputValue}
      onOpenChange={onOpenChange}
      onSelectionChange={onSelectionChange}
      onInputChange={onInputChange}
    >
      {(item) => <Item>{item.name}</Item>}
    </ComboBox>
  );
}

<ControlledComboBox />
```

```
function ControlledComboBox() {
  let optionList = [
    {
      name: 'Red Panda',
      id: '1'
    },
    {
      name: 'Cat',
      id: '2'
    },
    {
      name: 'Dog',
      id: '3'
    },
    {
      name: 'Aardvark',
      id: '4'
    },
    {
      name: 'Kangaroo',
      id: '5'
    },
    {
      name: 'Snake',
      id: '6'
    }
  ];

  // Store ComboBox input value, selected option, open state, and items
  // in a state tracker
  let [
    fieldState,
    setFieldState
  ] = React.useState({
    selectedKey: '',
    inputValue: '',
    items: optionList
  });

  // Implement custom filtering logic and control what items are
  // available to the ComboBox.
  let { startsWith } =
    useFilter({
      sensitivity: 'base'
    });

  // Specify how each of the ComboBox values should change when an
  // option is selected from the list box
  let onSelectionChange =
    (key) => {
      setFieldState(
        (prevState) => {
          let selectedItem =
            prevState
              .items
              .find(
                (option) =>
                  option
                    .id ===
                    key
              );
          return ({
            inputValue:
              selectedItem
                ?.name ??
                '',
            selectedKey:
              key,
            items:
              optionList
                .filter(
                  (item) =>
                    startsWith(
                      item
                        .name,
                      selectedItem
                        ?.name ??
                        ''
                    )
                )
          });
        }
      );
    };

  // Specify how each of the ComboBox values should change when the input
  // field is altered by the user
  let onInputChange = (
    value
  ) => {
    setFieldState(
      (prevState) => ({
        inputValue:
          value,
        selectedKey:
          value === ''
            ? null
            : prevState
              .selectedKey,
        items: optionList
          .filter(
            (item) =>
              startsWith(
                item
                  .name,
                value
              )
          )
      })
    );
  };

  // Show entire list if user opens the menu manually
  let onOpenChange = (
    isOpen,
    menuTrigger
  ) => {
    if (
      menuTrigger ===
        'manual' &&
      isOpen
    ) {
      setFieldState(
        (prevState) => ({
          inputValue:
            prevState
              .inputValue,
          selectedKey:
            prevState
              .selectedKey,
          items:
            optionList
        })
      );
    }
  };

  // Pass each controlled prop to useComboBox along with their
  // change handlers
  return (
    <ComboBox
      label="Favorite Animal"
      items={fieldState
        .items}
      selectedKey={fieldState
        .selectedKey}
      inputValue={fieldState
        .inputValue}
      onOpenChange={onOpenChange}
      onSelectionChange={onSelectionChange}
      onInputChange={onInputChange}
    >
      {(item) => (
        <Item>
          {item.name}
        </Item>
      )}
    </ComboBox>
  );
}

<ControlledComboBox />
```

`useComboBoxState` supports three different `menuTrigger` prop values:

-   `input` (default): ComboBox menu opens when the user edits the input text.
-   `focus`: ComboBox menu opens when the user focuses the ComboBox input.
-   `manual`: ComboBox menu only opens when the user presses the trigger button or uses the arrow keys.

The example below has `menuTrigger` set to `focus`.

```
<ComboBox label="Favorite Animal" menuTrigger="focus">
  <Item key="red panda">Red Panda</Item>
  <Item key="cat">Cat</Item>
  <Item key="dog">Dog</Item>
  <Item key="aardvark">Aardvark</Item>
  <Item key="kangaroo">Kangaroo</Item>
  <Item key="snake">Snake</Item>
</ComboBox>
```

```
<ComboBox label="Favorite Animal" menuTrigger="focus">
  <Item key="red panda">Red Panda</Item>
  <Item key="cat">Cat</Item>
  <Item key="dog">Dog</Item>
  <Item key="aardvark">Aardvark</Item>
  <Item key="kangaroo">Kangaroo</Item>
  <Item key="snake">Snake</Item>
</ComboBox>
```

```
<ComboBox
  label="Favorite Animal"
  menuTrigger="focus"
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
</ComboBox>
```

You can disable specific options by providing an array of keys to `useComboBoxState` via the `disabledKeys` prop. This will prevent options with matching keys from being pressable and receiving keyboard focus as shown in the example below. Note that you are responsible for the styling of disabled options.

```
<ComboBox label="Favorite Animal" disabledKeys={['cat', 'kangaroo']}>
  <Item key="red panda">Red Panda</Item>
  <Item key="cat">Cat</Item>
  <Item key="dog">Dog</Item>
  <Item key="aardvark">Aardvark</Item>
  <Item key="kangaroo">Kangaroo</Item>
  <Item key="snake">Snake</Item>
</ComboBox>
```

```
<ComboBox
  label="Favorite Animal"
  disabledKeys={['cat', 'kangaroo']}
>
  <Item key="red panda">Red Panda</Item>
  <Item key="cat">Cat</Item>
  <Item key="dog">Dog</Item>
  <Item key="aardvark">Aardvark</Item>
  <Item key="kangaroo">Kangaroo</Item>
  <Item key="snake">Snake</Item>
</ComboBox>
```

```
<ComboBox
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
</ComboBox>
```

This example uses the [useAsyncList](https://react-spectrum.adobe.com/react-stately/useAsyncList.html) hook to handle asynchronous loading and filtering of data from a server. You may additionally want to display a spinner to indicate the loading state to the user, or support features like infinite scroll to load more data. See [this CodeSandbox](https://codesandbox.io/s/dreamy-burnell-3i2jy?file=/src/Autocomplete.tsx) for an example of a ComboBox supporting those features.

```
import {useAsyncList} from 'react-stately';

function AsyncLoadingExample() {
  let list = useAsyncList({
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
    <ComboBox
      label="Star Wars Character Lookup"
      items={list.items}
      inputValue={list.filterText}
      onInputChange={list.setFilterText}
    >
      {(item) => <Item key={item.name}>{item.name}</Item>}
    </ComboBox>
  );
}
```

```
import {useAsyncList} from 'react-stately';

function AsyncLoadingExample() {
  let list = useAsyncList({
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
    <ComboBox
      label="Star Wars Character Lookup"
      items={list.items}
      inputValue={list.filterText}
      onInputChange={list.setFilterText}
    >
      {(item) => <Item key={item.name}>{item.name}</Item>}
    </ComboBox>
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
    <ComboBox
      label="Star Wars Character Lookup"
      items={list.items}
      inputValue={list
        .filterText}
      onInputChange={list
        .setFilterText}
    >
      {(item) => (
        <Item
          key={item.name}
        >
          {item.name}
        </Item>
      )}
    </ComboBox>
  );
}
```

By default, interacting with an item in a ComboBox selects it and updates the input value. Alternatively, items may be links to another page or website. This can be achieved by passing the `href` prop to the `<Item>` component. Interacting with link items navigates to the provided URL and does not update the selection or input value. See the [links](https://react-spectrum.adobe.com/react-aria/useListBox.html#links) section in the `useListBox` docs for details on how to support this.

* * *

`useComboBox` handles some aspects of internationalization automatically. For example, the item focus, count, and selection VoiceOver announcements are localized. You are responsible for localizing all labels and option content that is passed into the combo box.

In right-to-left languages, the ComboBox should be mirrored. The trigger button should be on the left, and the input element should be on the right. In addition, the content of ComboBox options should flip. Ensure that your CSS accounts for this.