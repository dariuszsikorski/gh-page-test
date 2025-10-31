# ComboBox

**Source**: [https://react-spectrum.adobe.com/react-aria/ComboBox.html](https://react-spectrum.adobe.com/react-aria/ComboBox.html)

> Documentation for ComboBox in the React Aria package.

---

A combo box combines a text input with a listbox, allowing users to filter a list of options to items matching a query.

* * *

```
import {Button, ComboBox, Input, Label, ListBox, ListBoxItem, Popover} from 'react-aria-components';
import {ChevronDown} from 'lucide-react';

<ComboBox>
  <Label>Favorite Animal</Label>
  <div>
    <Input />
    <Button>
      <ChevronDown size={16} />
    </Button>
  </div>
  <Popover>
    <ListBox>
      <ListBoxItem>Aardvark</ListBoxItem>
      <ListBoxItem>Cat</ListBoxItem>
      <ListBoxItem>Dog</ListBoxItem>
      <ListBoxItem>Kangaroo</ListBoxItem>
      <ListBoxItem>Panda</ListBoxItem>
      <ListBoxItem>Snake</ListBoxItem>
    </ListBox>
  </Popover>
</ComboBox>
```

```
import {
  Button,
  ComboBox,
  Input,
  Label,
  ListBox,
  ListBoxItem,
  Popover
} from 'react-aria-components';
import {ChevronDown} from 'lucide-react';

<ComboBox>
  <Label>Favorite Animal</Label>
  <div>
    <Input />
    <Button>
      <ChevronDown size={16} />
    </Button>
  </div>
  <Popover>
    <ListBox>
      <ListBoxItem>Aardvark</ListBoxItem>
      <ListBoxItem>Cat</ListBoxItem>
      <ListBoxItem>Dog</ListBoxItem>
      <ListBoxItem>Kangaroo</ListBoxItem>
      <ListBoxItem>Panda</ListBoxItem>
      <ListBoxItem>Snake</ListBoxItem>
    </ListBox>
  </Popover>
</ComboBox>
```

```
import {
  Button,
  ComboBox,
  Input,
  Label,
  ListBox,
  ListBoxItem,
  Popover
} from 'react-aria-components';
import {ChevronDown} from 'lucide-react';

<ComboBox>
  <Label>
    Favorite Animal
  </Label>
  <div>
    <Input />
    <Button>
      <ChevronDown
        size={16}
      />
    </Button>
  </div>
  <Popover>
    <ListBox>
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
  </Popover>
</ComboBox>
```

Show CSS

```
@import "@react-aria/example-theme";

.react-aria-ComboBox {
  color: var(--text-color);

  > div:has(.react-aria-Input) {
    display: flex;
    align-items: center;
  }

  .react-aria-Input {
    margin: 0;
    font-size: 1.072rem;
    background: var(--field-background);
    color: var(--field-text-color);
    border: 1px solid var(--border-color);
    border-radius: 6px;
    padding: 0.286rem 2rem 0.286rem 0.571rem;
    vertical-align: middle;
    outline: none;
    min-width: 0;

    &[data-focused] {
      outline: 2px solid var(--focus-ring-color);
      outline-offset: -1px;
    }
  }

  .react-aria-Button {
    background: var(--highlight-background);
    color: var(--highlight-foreground);
    forced-color-adjust: none;
    border-radius: 4px;
    border: none;
    margin-left: -1.714rem;
    width: 1.429rem;
    height: 1.429rem;
    padding: 0;
    font-size: 0.857rem;
    cursor: default;
    flex-shrink: 0;

    &[data-pressed] {
      box-shadow: none;
      background: var(--highlight-background);
    }
  }
}

.react-aria-Popover[data-trigger=ComboBox] {
  width: var(--trigger-width);
  --starting-scale: scale(1);

  .react-aria-ListBox {
    display: block;
    width: unset;
    max-height: inherit;
    min-height: unset;
    border: none;

    .react-aria-Header {
      padding-left: 1.571rem;
    }
  }

  .react-aria-ListBoxItem {
    padding: 0 0.571rem 0 1.571rem;

    &[data-focus-visible] {
      outline: none;
    }

    &[data-selected] {
      font-weight: 600;
      background: unset;
      color: var(--text-color);

      &::before {
        content: '✓';
        content: '✓' / '';
        alt: ' ';
        position: absolute;
        top: 4px;
        left: 4px;
      }
    }

    &[data-focused],
    &[data-pressed] {
      background: var(--highlight-background);
      color: var(--highlight-foreground);
    }
  }
}
```

```
@import "@react-aria/example-theme";

.react-aria-ComboBox {
  color: var(--text-color);

  > div:has(.react-aria-Input) {
    display: flex;
    align-items: center;
  }

  .react-aria-Input {
    margin: 0;
    font-size: 1.072rem;
    background: var(--field-background);
    color: var(--field-text-color);
    border: 1px solid var(--border-color);
    border-radius: 6px;
    padding: 0.286rem 2rem 0.286rem 0.571rem;
    vertical-align: middle;
    outline: none;
    min-width: 0;

    &[data-focused] {
      outline: 2px solid var(--focus-ring-color);
      outline-offset: -1px;
    }
  }

  .react-aria-Button {
    background: var(--highlight-background);
    color: var(--highlight-foreground);
    forced-color-adjust: none;
    border-radius: 4px;
    border: none;
    margin-left: -1.714rem;
    width: 1.429rem;
    height: 1.429rem;
    padding: 0;
    font-size: 0.857rem;
    cursor: default;
    flex-shrink: 0;

    &[data-pressed] {
      box-shadow: none;
      background: var(--highlight-background);
    }
  }
}

.react-aria-Popover[data-trigger=ComboBox] {
  width: var(--trigger-width);
  --starting-scale: scale(1);

  .react-aria-ListBox {
    display: block;
    width: unset;
    max-height: inherit;
    min-height: unset;
    border: none;

    .react-aria-Header {
      padding-left: 1.571rem;
    }
  }

  .react-aria-ListBoxItem {
    padding: 0 0.571rem 0 1.571rem;

    &[data-focus-visible] {
      outline: none;
    }

    &[data-selected] {
      font-weight: 600;
      background: unset;
      color: var(--text-color);

      &::before {
        content: '✓';
        content: '✓' / '';
        alt: ' ';
        position: absolute;
        top: 4px;
        left: 4px;
      }
    }

    &[data-focused],
    &[data-pressed] {
      background: var(--highlight-background);
      color: var(--highlight-foreground);
    }
  }
}
```

```
@import "@react-aria/example-theme";

.react-aria-ComboBox {
  color: var(--text-color);

  > div:has(.react-aria-Input) {
    display: flex;
    align-items: center;
  }

  .react-aria-Input {
    margin: 0;
    font-size: 1.072rem;
    background: var(--field-background);
    color: var(--field-text-color);
    border: 1px solid var(--border-color);
    border-radius: 6px;
    padding: 0.286rem 2rem 0.286rem 0.571rem;
    vertical-align: middle;
    outline: none;
    min-width: 0;

    &[data-focused] {
      outline: 2px solid var(--focus-ring-color);
      outline-offset: -1px;
    }
  }

  .react-aria-Button {
    background: var(--highlight-background);
    color: var(--highlight-foreground);
    forced-color-adjust: none;
    border-radius: 4px;
    border: none;
    margin-left: -1.714rem;
    width: 1.429rem;
    height: 1.429rem;
    padding: 0;
    font-size: 0.857rem;
    cursor: default;
    flex-shrink: 0;

    &[data-pressed] {
      box-shadow: none;
      background: var(--highlight-background);
    }
  }
}

.react-aria-Popover[data-trigger=ComboBox] {
  width: var(--trigger-width);
  --starting-scale: scale(1);

  .react-aria-ListBox {
    display: block;
    width: unset;
    max-height: inherit;
    min-height: unset;
    border: none;

    .react-aria-Header {
      padding-left: 1.571rem;
    }
  }

  .react-aria-ListBoxItem {
    padding: 0 0.571rem 0 1.571rem;

    &[data-focus-visible] {
      outline: none;
    }

    &[data-selected] {
      font-weight: 600;
      background: unset;
      color: var(--text-color);

      &::before {
        content: '✓';
        content: '✓' / '';
        alt: ' ';
        position: absolute;
        top: 4px;
        left: 4px;
      }
    }

    &[data-focused],
    &[data-pressed] {
      background: var(--highlight-background);
      color: var(--highlight-foreground);
    }
  }
}
```

* * *

A combo box can be built using the [<datalist>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist) HTML element, but this is very limited in functionality and difficult to style. `ComboBox` helps achieve accessible combo box and autocomplete components that can be styled as needed.

-   **Flexible** – Support for selecting pre-defined values, custom values, controlled and uncontrolled state, custom filter functions, async loading, disabled items, validation, and multiple menu trigger options.
-   **Keyboard navigation** – ComboBox can be opened and navigated using the arrow keys, along with page up/down, home/end, etc. The list of options is filtered while typing into the input, and items can be selected with the enter key.
-   **Accessible** – Follows the [ARIA combobox pattern](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/), with support for items and sections, and slots for label and description elements within each item. Custom localized announcements are included for option focusing, filtering, and selection using an ARIA live region to ensure announcements are clear and consistent.
-   **Validation** – Support for native HTML constraint validation with customizable UI, custom validation functions, realtime validation, and server-side validation errors.
-   **Styleable** – Items include builtin states for styling, such as hover, press, focus, selected, and disabled.

Read our [blog post](https://react-spectrum.adobe.com/blog/building-a-combobox.html) for more details about the interactions and accessibility features implemented by `ComboBox`.

For more flexibility when building patterns such as command palettes, searchable menus, or filterable selects, see the [Autocomplete](https://react-spectrum.adobe.com/react-aria/Autocomplete.html) component.

* * *

LabelHelp textLabelInputLabelOp​​Help text (description or error message)OpButtonOption 1Option 2ItemItem labelDescriptionDescriptionOption 3DescriptionItem descriptionSECTION TITLESection headerSectionPopoverListBox

A combo box consists of a label, an input which displays the current value, a listbox displayed in a popover, and an optional button used to toggle the popover open state. Users can type within the input to filter the available options within the list box. The list box popover may be opened by a variety of input field interactions specified by the `menuTrigger` prop provided to `ComboBox`, or by clicking or touching the button.

`ComboBox` also supports optional description and error message elements, which can be used to provide more context about the field, and any validation messages. These are linked with the input via the `aria-describedby` attribute.

```
import {Button, ComboBox, FieldError, Header, Input, Label, ListBox, ListBoxItem, ListBoxSection, Popover, Text} from 'react-aria-components';

<ComboBox>
  <Label />
  <Input />
  <Button />
  <Text slot="description" />
  <FieldError />
  <Popover>
    <ListBox>
      <ListBoxItem>
        <Text slot="label" />
        <Text slot="description" />
      </ListBoxItem>
      <ListBoxSection>
        <Header />
        <ListBoxItem />
      </ListBoxSection>
    </ListBox>
  </Popover>
</ComboBox>
```

```
import {
  Button,
  ComboBox,
  FieldError,
  Header,
  Input,
  Label,
  ListBox,
  ListBoxItem,
  ListBoxSection,
  Popover,
  Text
} from 'react-aria-components';

<ComboBox>
  <Label />
  <Input />
  <Button />
  <Text slot="description" />
  <FieldError />
  <Popover>
    <ListBox>
      <ListBoxItem>
        <Text slot="label" />
        <Text slot="description" />
      </ListBoxItem>
      <ListBoxSection>
        <Header />
        <ListBoxItem />
      </ListBoxSection>
    </ListBox>
  </Popover>
</ComboBox>
```

```
import {
  Button,
  ComboBox,
  FieldError,
  Header,
  Input,
  Label,
  ListBox,
  ListBoxItem,
  ListBoxSection,
  Popover,
  Text
} from 'react-aria-components';

<ComboBox>
  <Label />
  <Input />
  <Button />
  <Text slot="description" />
  <FieldError />
  <Popover>
    <ListBox>
      <ListBoxItem>
        <Text slot="label" />
        <Text slot="description" />
      </ListBoxItem>
      <ListBoxSection>
        <Header />
        <ListBoxItem />
      </ListBoxSection>
    </ListBox>
  </Popover>
</ComboBox>
```

If the combo box does not have a visible label, an `aria-label` or `aria-labelledby` prop must be passed instead to identify it to assistive technology.

`ComboBox` makes use of the following concepts:

[

Collections

Defining collections of items, async loading, and updating items over time.

](https://react-spectrum.adobe.com/react-aria/collections.html)[

Selection

Interactions and data structures to represent selection.

](https://react-spectrum.adobe.com/react-aria/selection.html)[

Forms

Validating and submitting form data, and integrating with form libraries.

](https://react-spectrum.adobe.com/react-aria/forms.html)

A `ComboBox` uses the following components, which may also be used standalone or reused in other components.

[

Label

A label provides context for an input element.

](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label)[

Input

An input allows a user to enter a plain text value with a keyboard.

](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)[

Button

A button allows a user to perform an action.

](https://react-spectrum.adobe.com/react-aria/Button.html)[

Popover

A popover displays content in context with a trigger element.

](https://react-spectrum.adobe.com/react-aria/Popover.html)[

ListBox

A listbox allows a user to select one or more options from a list.

](https://react-spectrum.adobe.com/react-aria/ListBox.html)

* * *

[![](https://react-spectrum.adobe.com/user-combobox.7fb3c267.png)

User Search ComboBox

A user search ComboBox styled with Tailwind CSS.

](https://react-spectrum.adobe.com/react-aria/examples/user-combobox.html)

* * *

To help kick-start your project, we offer starter kits that include example implementations of all React Aria components with various styling solutions. All components are fully styled, including support for dark mode, high contrast mode, and all UI states. Each starter comes with a pre-configured [Storybook](https://storybook.js.org/) that you can experiment with, or use as a starting point for your own component library.

* * *

If you will use a ComboBox in multiple places in your app, you can wrap all of the pieces into a reusable component. This way, the DOM structure, styling code, and other logic are defined in a single place and reused everywhere to ensure consistency.

This example wraps `ComboBox` and all of its children together into a single component which accepts a `label` prop and `children`, which are passed through to the right places. It also shows how to use the `description` slot to render [help text](#description), and `FieldError` component to render [validation errors](#validation). The `Item` component is also wrapped to apply class names based on the current state, as described in the [styling](#styling) section.

```
import type {ComboBoxProps, ListBoxItemProps, ValidationResult} from 'react-aria-components';
import {FieldError, Text} from 'react-aria-components';

interface MyComboBoxProps<T extends object>
  extends Omit<ComboBoxProps<T>, 'children'> {
  label?: string;
  description?: string | null;
  errorMessage?: string | ((validation: ValidationResult) => string);
  children: React.ReactNode | ((item: T) => React.ReactNode);
}

function MyComboBox<T extends object>(
  { label, description, errorMessage, children, ...props }: MyComboBoxProps<T>
) {
  return (
    <ComboBox allowsEmptyCollection {...props}>
      <Label>{label}</Label>
      <div className="my-combobox-container">
        <Input />
        <Button>
          <ChevronDown size={16} />
        </Button>
      </div>
      {description && <Text slot="description">{description}</Text>}
      <FieldError>{errorMessage}</FieldError>
      <Popover>
        <ListBox
          renderEmptyState={() => (
            <div className="my-item">No results found</div>
          )}
        >
          {children}
        </ListBox>
      </Popover>
    </ComboBox>
  );
}

function MyItem(props: ListBoxItemProps) {
  return (
    <ListBoxItem
      {...props}
      className={({ isFocused, isSelected }) =>
        `my-item ${isFocused ? 'focused' : ''} ${isSelected ? 'selected' : ''}`}
    />
  );
}

<MyComboBox label="Ice cream flavor">
  <MyItem>Chocolate</MyItem>
  <MyItem>Mint</MyItem>
  <MyItem>Strawberry</MyItem>
  <MyItem>Vanilla</MyItem>
</MyComboBox>
```

```
import type {
  ComboBoxProps,
  ListBoxItemProps,
  ValidationResult
} from 'react-aria-components';
import {FieldError, Text} from 'react-aria-components';

interface MyComboBoxProps<T extends object>
  extends Omit<ComboBoxProps<T>, 'children'> {
  label?: string;
  description?: string | null;
  errorMessage?:
    | string
    | ((validation: ValidationResult) => string);
  children:
    | React.ReactNode
    | ((item: T) => React.ReactNode);
}

function MyComboBox<T extends object>(
  { label, description, errorMessage, children, ...props }:
    MyComboBoxProps<T>
) {
  return (
    <ComboBox allowsEmptyCollection {...props}>
      <Label>{label}</Label>
      <div className="my-combobox-container">
        <Input />
        <Button>
          <ChevronDown size={16} />
        </Button>
      </div>
      {description && (
        <Text slot="description">{description}</Text>
      )}
      <FieldError>{errorMessage}</FieldError>
      <Popover>
        <ListBox
          renderEmptyState={() => (
            <div className="my-item">No results found</div>
          )}
        >
          {children}
        </ListBox>
      </Popover>
    </ComboBox>
  );
}

function MyItem(props: ListBoxItemProps) {
  return (
    <ListBoxItem
      {...props}
      className={({ isFocused, isSelected }) =>
        `my-item ${isFocused ? 'focused' : ''} ${
          isSelected ? 'selected' : ''
        }`}
    />
  );
}

<MyComboBox label="Ice cream flavor">
  <MyItem>Chocolate</MyItem>
  <MyItem>Mint</MyItem>
  <MyItem>Strawberry</MyItem>
  <MyItem>Vanilla</MyItem>
</MyComboBox>
```

```
import type {
  ComboBoxProps,
  ListBoxItemProps,
  ValidationResult
} from 'react-aria-components';
import {
  FieldError,
  Text
} from 'react-aria-components';

interface MyComboBoxProps<
  T extends object
> extends
  Omit<
    ComboBoxProps<T>,
    'children'
  > {
  label?: string;
  description?:
    | string
    | null;
  errorMessage?:
    | string
    | ((
      validation:
        ValidationResult
    ) => string);
  children:
    | React.ReactNode
    | ((
      item: T
    ) =>
      React.ReactNode);
}

function MyComboBox<
  T extends object
>({
  label,
  description,
  errorMessage,
  children,
  ...props
}: MyComboBoxProps<T>) {
  return (
    <ComboBox
      allowsEmptyCollection
      {...props}
    >
      <Label>
        {label}
      </Label>
      <div className="my-combobox-container">
        <Input />
        <Button>
          <ChevronDown
            size={16}
          />
        </Button>
      </div>
      {description && (
        <Text slot="description">
          {description}
        </Text>
      )}
      <FieldError>
        {errorMessage}
      </FieldError>
      <Popover>
        <ListBox
          renderEmptyState={() => (
            <div className="my-item">
              No results
              found
            </div>
          )}
        >
          {children}
        </ListBox>
      </Popover>
    </ComboBox>
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
          isFocused,
          isSelected
        }
      ) =>
        `my-item ${
          isFocused
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

<MyComboBox label="Ice cream flavor">
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
</MyComboBox>
```

Show CSS

```
.my-item {
  margin: 2px;
  padding: 4px 8px 4px 22px;
  border-radius: 6px;
  outline: none;
  cursor: default;
  color: var(--text-color);
  font-size: 1.072rem;
  position: relative;

  &.selected {
    font-weight: 600;
    background: none;

    &::before {
      content: '✓';
      content: '✓' / '';
      alt: ' ';
      position: absolute;
      top: 4px;
      left: 4px;
    }
  }

  &.focused {
    background: #e70073;
    color: white;
  }
}

@media (forced-colors: active) {
  .my-item.focused {
    background: Highlight;
    color: HighlightText;
  }
}
```

```
.my-item {
  margin: 2px;
  padding: 4px 8px 4px 22px;
  border-radius: 6px;
  outline: none;
  cursor: default;
  color: var(--text-color);
  font-size: 1.072rem;
  position: relative;

  &.selected {
    font-weight: 600;
    background: none;

    &::before {
      content: '✓';
      content: '✓' / '';
      alt: ' ';
      position: absolute;
      top: 4px;
      left: 4px;
    }
  }

  &.focused {
    background: #e70073;
    color: white;
  }
}

@media (forced-colors: active) {
  .my-item.focused {
    background: Highlight;
    color: HighlightText;
  }
}
```

```
.my-item {
  margin: 2px;
  padding: 4px 8px 4px 22px;
  border-radius: 6px;
  outline: none;
  cursor: default;
  color: var(--text-color);
  font-size: 1.072rem;
  position: relative;

  &.selected {
    font-weight: 600;
    background: none;

    &::before {
      content: '✓';
      content: '✓' / '';
      alt: ' ';
      position: absolute;
      top: 4px;
      left: 4px;
    }
  }

  &.focused {
    background: #e70073;
    color: white;
  }
}

@media (forced-colors: active) {
  .my-item.focused {
    background: Highlight;
    color: HighlightText;
  }
}
```

## Content[#](#content)

* * *

ComboBox follows the [Collection Components API](https://react-spectrum.adobe.com/react-aria/collections.html), accepting both static and dynamic collections. The examples above show static collections, which can be used when the full list of options is known ahead of time. Dynamic collections, as shown below, can be used when the options come from an external data source such as an API call, or update over time.

As seen below, an iterable list of options is passed to the ComboBox using the `defaultItems` prop. Each item accepts an `id` prop, which is passed to the `onSelectionChange` handler to identify the selected item. Alternatively, if the item objects contain an `id` property, as shown in the example below, then this is used automatically and an `id` prop is not required.

```
import type {Key} from 'react-aria-components';

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
  let [majorId, setMajorId] = React.useState<Key | null>(null);

  return (
    <>
      <MyComboBox defaultItems={options} onSelectionChange={setMajorId}>
        {(item) => <ListBoxItem>{item.name}</ListBoxItem>}
      </MyComboBox>
      <p>Selected topic id: {majorId}</p>
    </>
  );
}
```

```
import type {Key} from 'react-aria-components';

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
  let [majorId, setMajorId] = React.useState<Key | null>(
    null
  );

  return (
    <>
      <MyComboBox
        defaultItems={options}
        onSelectionChange={setMajorId}
      >
        {(item) => <ListBoxItem>{item.name}</ListBoxItem>}
      </MyComboBox>
      <p>Selected topic id: {majorId}</p>
    </>
  );
}
```

```
import type {Key} from 'react-aria-components';

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
  ] = React.useState<
    Key | null
  >(null);

  return (
    <>
      <MyComboBox
        defaultItems={options}
        onSelectionChange={setMajorId}
      >
        {(item) => (
          <ListBoxItem>
            {item.name}
          </ListBoxItem>
        )}
      </MyComboBox>
      <p>
        Selected topic
        id: {majorId}
      </p>
    </>
  );
}
```

* * *

A ComboBox's `value` is empty by default, but an initial, uncontrolled, value can be provided using the `defaultInputValue` prop. Alternatively, a controlled value can be provided using the `inputValue` prop. Note that the input value of the ComboBox does not affect the ComboBox's selected option.

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
      <MyComboBox
        label="Adobe product (Uncontrolled)"
        defaultItems={options}
        defaultSelectedKey={2}
        defaultInputValue="Adobe XD">        {item => <ListBoxItem>{item.name}</ListBoxItem>}
      </MyComboBox>

      <MyComboBox
        label="Pick an Adobe product (Controlled)"
        defaultItems={options}
        defaultSelectedKey={2}
        inputValue={value}
        onInputChange={setValue}>        {item => <ListBoxItem>{item.name}</ListBoxItem>}
      </MyComboBox>
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
      <MyComboBox
        label="Adobe product (Uncontrolled)"
        defaultItems={options}
        defaultSelectedKey={2}
        defaultInputValue="Adobe XD"
      >        {(item) => <ListBoxItem>{item.name}</ListBoxItem>}
      </MyComboBox>

      <MyComboBox
        label="Pick an Adobe product (Controlled)"
        defaultItems={options}
        defaultSelectedKey={2}
        inputValue={value}
        onInputChange={setValue}
      >        {(item) => <ListBoxItem>{item.name}</ListBoxItem>}
      </MyComboBox>
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
      <MyComboBox
        label="Adobe product (Uncontrolled)"
        defaultItems={options}
        defaultSelectedKey={2}
        defaultInputValue="Adobe XD"
      >        {(item) => (
          <ListBoxItem>
            {item.name}
          </ListBoxItem>
        )}
      </MyComboBox>

      <MyComboBox
        label="Pick an Adobe product (Controlled)"
        defaultItems={options}
        defaultSelectedKey={2}
        inputValue={value}
        onInputChange={setValue}
      >        {(item) => (
          <ListBoxItem>
            {item.name}
          </ListBoxItem>
        )}
      </MyComboBox>
    </div>
  );
}
```

By default, `ComboBox` doesn't allow users to specify a value that doesn't exist in the list of options and will revert the input value to the current selected value on blur. By specifying `allowsCustomValue`, this behavior is suppressed and the user is free to enter any value within the field.

```
<MyComboBox label="Favorite Animal" allowsCustomValue>
  <ListBoxItem id="red panda">Red Panda</ListBoxItem>
  <ListBoxItem id="cat">Cat</ListBoxItem>
  <ListBoxItem id="dog">Dog</ListBoxItem>
  <ListBoxItem id="aardvark">Aardvark</ListBoxItem>
  <ListBoxItem id="kangaroo">Kangaroo</ListBoxItem>
  <ListBoxItem id="snake">Snake</ListBoxItem>
</MyComboBox>
```

```
<MyComboBox label="Favorite Animal" allowsCustomValue>
  <ListBoxItem id="red panda">Red Panda</ListBoxItem>
  <ListBoxItem id="cat">Cat</ListBoxItem>
  <ListBoxItem id="dog">Dog</ListBoxItem>
  <ListBoxItem id="aardvark">Aardvark</ListBoxItem>
  <ListBoxItem id="kangaroo">Kangaroo</ListBoxItem>
  <ListBoxItem id="snake">Snake</ListBoxItem>
</MyComboBox>
```

```
<MyComboBox
  label="Favorite Animal"
  allowsCustomValue
>
  <ListBoxItem id="red panda">
    Red Panda
  </ListBoxItem>
  <ListBoxItem id="cat">
    Cat
  </ListBoxItem>
  <ListBoxItem id="dog">
    Dog
  </ListBoxItem>
  <ListBoxItem id="aardvark">
    Aardvark
  </ListBoxItem>
  <ListBoxItem id="kangaroo">
    Kangaroo
  </ListBoxItem>
  <ListBoxItem id="snake">
    Snake
  </ListBoxItem>
</MyComboBox>
```

ComboBox supports the `name` prop for integration with HTML forms. By default, the `id` of the selected item will be submitted to the server. If the `formValue` prop is set to `"text"` or the `allowsCustomValue` prop is true, the text in the input field will be submitted instead.

```
<div style={{display: 'flex', gap: 16, flexWrap: 'wrap'}}>
  <MyComboBox
    label="Favorite Animal"
    name="favoriteAnimalId"  >
    <ListBoxItem id="panda">Panda</ListBoxItem>
    <ListBoxItem id="cat">Cat</ListBoxItem>
    <ListBoxItem id="dog">Dog</ListBoxItem>
  </MyComboBox>
  <MyComboBox
    label="Ice cream flavor"
    name="iceCream"
    formValue="text"
    allowsCustomValue  >
    <ListBoxItem>Chocolate</ListBoxItem>
    <ListBoxItem>Mint</ListBoxItem>
    <ListBoxItem>Strawberry</ListBoxItem>
    <ListBoxItem>Vanilla</ListBoxItem>
  </MyComboBox>
</div>
```

```
<div style={{display: 'flex', gap: 16, flexWrap: 'wrap'}}>
  <MyComboBox
    label="Favorite Animal"
    name="favoriteAnimalId"  >
    <ListBoxItem id="panda">Panda</ListBoxItem>
    <ListBoxItem id="cat">Cat</ListBoxItem>
    <ListBoxItem id="dog">Dog</ListBoxItem>
  </MyComboBox>
  <MyComboBox
    label="Ice cream flavor"
    name="iceCream"
    formValue="text"
    allowsCustomValue  >
    <ListBoxItem>Chocolate</ListBoxItem>
    <ListBoxItem>Mint</ListBoxItem>
    <ListBoxItem>Strawberry</ListBoxItem>
    <ListBoxItem>Vanilla</ListBoxItem>
  </MyComboBox>
</div>
```

```
<div
  style={{
    display: 'flex',
    gap: 16,
    flexWrap: 'wrap'
  }}
>
  <MyComboBox
    label="Favorite Animal"
    name="favoriteAnimalId"  >
    <ListBoxItem id="panda">
      Panda
    </ListBoxItem>
    <ListBoxItem id="cat">
      Cat
    </ListBoxItem>
    <ListBoxItem id="dog">
      Dog
    </ListBoxItem>
  </MyComboBox>
  <MyComboBox
    label="Ice cream flavor"
    name="iceCream"
    formValue="text"
    allowsCustomValue  >
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
  </MyComboBox>
</div>
```

* * *

Setting a selected option can be done by using the `defaultSelectedKey` or `selectedKey` prop. The selected key corresponds to the `id` of an item. See [Events](#events) for more details on selection events.

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
  let [productId, setProductId] = React.useState<Key>(9);

  return (
    <div style={{display: 'flex', gap: 16, flexWrap: 'wrap'}}>
      <MyComboBox
        label="Pick an Adobe product (uncontrolled)"
        defaultItems={options}
        defaultSelectedKey={9}      >
        {item => <ListBoxItem>{item.name}</ListBoxItem>}
      </MyComboBox>

      <MyComboBox
        label="Pick an Adobe product (controlled)"
        defaultItems={options}
        selectedKey={productId}
        onSelectionChange={selected => setProductId(selected)}      >
        {item => <ListBoxItem>{item.name}</ListBoxItem>}
      </MyComboBox>
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
  let [productId, setProductId] = React.useState<Key>(9);

  return (
    <div
      style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}
    >
      <MyComboBox
        label="Pick an Adobe product (uncontrolled)"
        defaultItems={options}
        defaultSelectedKey={9}      >
        {(item) => <ListBoxItem>{item.name}</ListBoxItem>}
      </MyComboBox>

      <MyComboBox
        label="Pick an Adobe product (controlled)"
        defaultItems={options}
        selectedKey={productId}
        onSelectionChange={(selected) =>
          setProductId(selected)}      >
        {(item) => <ListBoxItem>{item.name}</ListBoxItem>}
      </MyComboBox>
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
  let [
    productId,
    setProductId
  ] = React.useState<
    Key
  >(9);

  return (
    <div
      style={{
        display: 'flex',
        gap: 16,
        flexWrap: 'wrap'
      }}
    >
      <MyComboBox
        label="Pick an Adobe product (uncontrolled)"
        defaultItems={options}
        defaultSelectedKey={9}      >
        {(item) => (
          <ListBoxItem>
            {item.name}
          </ListBoxItem>
        )}
      </MyComboBox>

      <MyComboBox
        label="Pick an Adobe product (controlled)"
        defaultItems={options}
        selectedKey={productId}
        onSelectionChange={(selected) =>
          setProductId(
            selected
          )}      >
        {(item) => (
          <ListBoxItem>
            {item.name}
          </ListBoxItem>
        )}
      </MyComboBox>
    </div>
  );
}
```

* * *

Use the `onAction` prop on a `<ListBoxItem>` to perform a custom action when the item is pressed. This example adds a "Create" action for the current input value.

```
function Example() {
  let [inputValue, setInputValue] = React.useState('');

  return (
    <MyComboBox
      label="Favorite Animal"
      inputValue={inputValue}
      onInputChange={setInputValue}>
      {inputValue.length > 0 && (
        <ListBoxItem onAction={() => alert('Creating ' + inputValue)}>
          {`Create "${inputValue}"`}
        </ListBoxItem>
      )}      <ListBoxItem>Aardvark</ListBoxItem>
      <ListBoxItem>Cat</ListBoxItem>
      <ListBoxItem>Dog</ListBoxItem>
      <ListBoxItem>Kangaroo</ListBoxItem>
      <ListBoxItem>Panda</ListBoxItem>
      <ListBoxItem>Snake</ListBoxItem>
    </MyComboBox>
  );
}
```

```
function Example() {
  let [inputValue, setInputValue] = React.useState('');

  return (
    <MyComboBox
      label="Favorite Animal"
      inputValue={inputValue}
      onInputChange={setInputValue}
    >
      {inputValue.length > 0 && (
        <ListBoxItem
          onAction={() => alert('Creating ' + inputValue)}
        >
          {`Create "${inputValue}"`}
        </ListBoxItem>
      )}      <ListBoxItem>Aardvark</ListBoxItem>
      <ListBoxItem>Cat</ListBoxItem>
      <ListBoxItem>Dog</ListBoxItem>
      <ListBoxItem>Kangaroo</ListBoxItem>
      <ListBoxItem>Panda</ListBoxItem>
      <ListBoxItem>Snake</ListBoxItem>
    </MyComboBox>
  );
}
```

```
function Example() {
  let [
    inputValue,
    setInputValue
  ] = React.useState('');

  return (
    <MyComboBox
      label="Favorite Animal"
      inputValue={inputValue}
      onInputChange={setInputValue}
    >
      {inputValue
            .length >
          0 && (
        <ListBoxItem
          onAction={() =>
            alert(
              'Creating ' +
                inputValue
            )}
        >
          {`Create "${inputValue}"`}
        </ListBoxItem>
      )}      <ListBoxItem>
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
    </MyComboBox>
  );
}
```

* * *

Items may be links to another page or website. This can be achieved by passing the `href` prop to the `<ListBoxItem>` component. Interacting with link items navigates to the provided URL and does not update the selection or input value.

```
<MyComboBox label="Tech company websites">
  <ListBoxItem href="https://adobe.com/" target="_blank">Adobe</ListBoxItem>
  <ListBoxItem href="https://apple.com/" target="_blank">Apple</ListBoxItem>
  <ListBoxItem href="https://google.com/" target="_blank">Google</ListBoxItem>
  <ListBoxItem href="https://microsoft.com/" target="_blank">
    Microsoft
  </ListBoxItem>
</MyComboBox>
```

```
<MyComboBox label="Tech company websites">
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
</MyComboBox>
```

```
<MyComboBox label="Tech company websites">
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
</MyComboBox>
```

The `<ListBoxItem>` component works with frameworks and client side routers like [Next.js](https://nextjs.org/) and [React Router](https://reactrouter.com/en/main). As with other React Aria components that support links, this works via the `[RouterProvider](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/utils/src/openLink.tsx:RouterProvider)` component at the root of your app. See the [client side routing guide](https://react-spectrum.adobe.com/react-aria/routing.html) to learn how to set this up.

* * *

ComboBox supports sections in order to group options. Sections can be used by wrapping groups of items in a `ListBoxSection` element. A `<Header>` element may also be included to label the section.

```
import {ListBoxSection, Header} from 'react-aria-components';

<MyComboBox label="Preferred fruit or vegetable">
  <ListBoxSection>
    <Header>Fruit</Header>
    <ListBoxItem id="Apple">Apple</ListBoxItem>
    <ListBoxItem id="Banana">Banana</ListBoxItem>
    <ListBoxItem id="Orange">Orange</ListBoxItem>
    <ListBoxItem id="Honeydew">Honeydew</ListBoxItem>
    <ListBoxItem id="Grapes">Grapes</ListBoxItem>
    <ListBoxItem id="Watermelon">Watermelon</ListBoxItem>
    <ListBoxItem id="Cantaloupe">Cantaloupe</ListBoxItem>
    <ListBoxItem id="Pear">Pear</ListBoxItem>
  </ListBoxSection>
  <ListBoxSection>
    <Header>Vegetable</Header>
    <ListBoxItem id="Cabbage">Cabbage</ListBoxItem>
    <ListBoxItem id="Broccoli">Broccoli</ListBoxItem>
    <ListBoxItem id="Carrots">Carrots</ListBoxItem>
    <ListBoxItem id="Lettuce">Lettuce</ListBoxItem>
    <ListBoxItem id="Spinach">Spinach</ListBoxItem>
    <ListBoxItem id="Bok Choy">Bok Choy</ListBoxItem>
    <ListBoxItem id="Cauliflower">Cauliflower</ListBoxItem>
    <ListBoxItem id="Potatoes">Potatoes</ListBoxItem>
  </ListBoxSection>
</MyComboBox>
```

```
import {
  Header,
  ListBoxSection
} from 'react-aria-components';

<MyComboBox label="Preferred fruit or vegetable">
  <ListBoxSection>
    <Header>Fruit</Header>
    <ListBoxItem id="Apple">Apple</ListBoxItem>
    <ListBoxItem id="Banana">Banana</ListBoxItem>
    <ListBoxItem id="Orange">Orange</ListBoxItem>
    <ListBoxItem id="Honeydew">Honeydew</ListBoxItem>
    <ListBoxItem id="Grapes">Grapes</ListBoxItem>
    <ListBoxItem id="Watermelon">Watermelon</ListBoxItem>
    <ListBoxItem id="Cantaloupe">Cantaloupe</ListBoxItem>
    <ListBoxItem id="Pear">Pear</ListBoxItem>
  </ListBoxSection>
  <ListBoxSection>
    <Header>Vegetable</Header>
    <ListBoxItem id="Cabbage">Cabbage</ListBoxItem>
    <ListBoxItem id="Broccoli">Broccoli</ListBoxItem>
    <ListBoxItem id="Carrots">Carrots</ListBoxItem>
    <ListBoxItem id="Lettuce">Lettuce</ListBoxItem>
    <ListBoxItem id="Spinach">Spinach</ListBoxItem>
    <ListBoxItem id="Bok Choy">Bok Choy</ListBoxItem>
    <ListBoxItem id="Cauliflower">
      Cauliflower
    </ListBoxItem>
    <ListBoxItem id="Potatoes">Potatoes</ListBoxItem>
  </ListBoxSection>
</MyComboBox>
```

```
import {
  Header,
  ListBoxSection
} from 'react-aria-components';

<MyComboBox label="Preferred fruit or vegetable">
  <ListBoxSection>
    <Header>
      Fruit
    </Header>
    <ListBoxItem id="Apple">
      Apple
    </ListBoxItem>
    <ListBoxItem id="Banana">
      Banana
    </ListBoxItem>
    <ListBoxItem id="Orange">
      Orange
    </ListBoxItem>
    <ListBoxItem id="Honeydew">
      Honeydew
    </ListBoxItem>
    <ListBoxItem id="Grapes">
      Grapes
    </ListBoxItem>
    <ListBoxItem id="Watermelon">
      Watermelon
    </ListBoxItem>
    <ListBoxItem id="Cantaloupe">
      Cantaloupe
    </ListBoxItem>
    <ListBoxItem id="Pear">
      Pear
    </ListBoxItem>
  </ListBoxSection>
  <ListBoxSection>
    <Header>
      Vegetable
    </Header>
    <ListBoxItem id="Cabbage">
      Cabbage
    </ListBoxItem>
    <ListBoxItem id="Broccoli">
      Broccoli
    </ListBoxItem>
    <ListBoxItem id="Carrots">
      Carrots
    </ListBoxItem>
    <ListBoxItem id="Lettuce">
      Lettuce
    </ListBoxItem>
    <ListBoxItem id="Spinach">
      Spinach
    </ListBoxItem>
    <ListBoxItem id="Bok Choy">
      Bok Choy
    </ListBoxItem>
    <ListBoxItem id="Cauliflower">
      Cauliflower
    </ListBoxItem>
    <ListBoxItem id="Potatoes">
      Potatoes
    </ListBoxItem>
  </ListBoxSection>
</MyComboBox>
```

Sections used with dynamic items are populated from a hierarchical data structure. Please note that `ListBoxSection` takes an array of data using the `items` prop only. If the section also has a header, the `[Collection](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/collections/src/CollectionBuilder.tsx:Collection)` component can be used to render the child items.

```
import {Collection} from 'react-aria-components';

function Example() {
  let options = [
    {name: 'Fruit', children: [
      {name: 'Apple'},
      {name: 'Banana'},
      {name: 'Orange'},
      {name: 'Honeydew'},
      {name: 'Grapes'},
      {name: 'Watermelon'},
      {name: 'Cantaloupe'},
      {name: 'Pear'}
    ]},
    {name: 'Vegetable', children: [
      {name: 'Cabbage'},
      {name: 'Broccoli'},
      {name: 'Carrots'},
      {name: 'Lettuce'},
      {name: 'Spinach'},
      {name: 'Bok Choy'},
      {name: 'Cauliflower'},
      {name: 'Potatoes'}
    ]}
  ];

  return (
    <MyComboBox label="Preferred fruit or vegetable" defaultItems={options}>
      {section => (
        <ListBoxSection id={section.name}>
          <Header>{section.name}</Header>
          <Collection items={section.children}>
            {item => <ListBoxItem id={item.name}>{item.name}</ListBoxItem>}
          </Collection>
        </ListBoxSection>
      )}
    </MyComboBox>
  );
}
```

```
import {Collection} from 'react-aria-components';

function Example() {
  let options = [
    {
      name: 'Fruit',
      children: [
        { name: 'Apple' },
        { name: 'Banana' },
        { name: 'Orange' },
        { name: 'Honeydew' },
        { name: 'Grapes' },
        { name: 'Watermelon' },
        { name: 'Cantaloupe' },
        { name: 'Pear' }
      ]
    },
    {
      name: 'Vegetable',
      children: [
        { name: 'Cabbage' },
        { name: 'Broccoli' },
        { name: 'Carrots' },
        { name: 'Lettuce' },
        { name: 'Spinach' },
        { name: 'Bok Choy' },
        { name: 'Cauliflower' },
        { name: 'Potatoes' }
      ]
    }
  ];

  return (
    <MyComboBox
      label="Preferred fruit or vegetable"
      defaultItems={options}
    >
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
    </MyComboBox>
  );
}
```

```
import {Collection} from 'react-aria-components';

function Example() {
  let options = [
    {
      name: 'Fruit',
      children: [
        {
          name: 'Apple'
        },
        {
          name: 'Banana'
        },
        {
          name: 'Orange'
        },
        {
          name:
            'Honeydew'
        },
        {
          name: 'Grapes'
        },
        {
          name:
            'Watermelon'
        },
        {
          name:
            'Cantaloupe'
        },
        { name: 'Pear' }
      ]
    },
    {
      name: 'Vegetable',
      children: [
        {
          name: 'Cabbage'
        },
        {
          name:
            'Broccoli'
        },
        {
          name: 'Carrots'
        },
        {
          name: 'Lettuce'
        },
        {
          name: 'Spinach'
        },
        {
          name:
            'Bok Choy'
        },
        {
          name:
            'Cauliflower'
        },
        {
          name:
            'Potatoes'
        }
      ]
    }
  ];

  return (
    <MyComboBox
      label="Preferred fruit or vegetable"
      defaultItems={options}
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
              <ListBoxItem
                id={item
                  .name}
              >
                {item
                  .name}
              </ListBoxItem>
            )}
          </Collection>
        </ListBoxSection>
      )}
    </MyComboBox>
  );
}
```

* * *

By default, items in a ComboBox are labeled by their text contents for accessibility. ListBoxItems also support the "label" and "description" slots to separate primary and secondary content, which improves screen reader announcements and can also be used for styling purposes.

**Note**: The ARIA spec prohibits listbox items from including interactive content such as buttons, checkboxes, etc.

```
import {Text} from 'react-aria-components';

<MyComboBox label="Select action">
  <ListBoxItem textValue="Add to queue">
    <Text slot="label">Add to queue</Text>
    <Text slot="description">Add to current watch queue.</Text>
  </ListBoxItem>
  <ListBoxItem textValue="Add review">
    <Text slot="label">Add review</Text>
    <Text slot="description">Post a review for the episode.</Text>
  </ListBoxItem>
  <ListBoxItem textValue="Subscribe to series">
    <Text slot="label">Subscribe to series</Text>
    <Text slot="description">
      Add series to your subscription list and be notified when a new episode
      airs.
    </Text>
  </ListBoxItem>
  <ListBoxItem textValue="Report">
    <Text slot="label">Report</Text>
    <Text slot="description">Report an issue/violation.</Text>
  </ListBoxItem>
</MyComboBox>
```

```
import {Text} from 'react-aria-components';

<MyComboBox label="Select action">
  <ListBoxItem textValue="Add to queue">
    <Text slot="label">Add to queue</Text>
    <Text slot="description">
      Add to current watch queue.
    </Text>
  </ListBoxItem>
  <ListBoxItem textValue="Add review">
    <Text slot="label">Add review</Text>
    <Text slot="description">
      Post a review for the episode.
    </Text>
  </ListBoxItem>
  <ListBoxItem textValue="Subscribe to series">
    <Text slot="label">Subscribe to series</Text>
    <Text slot="description">
      Add series to your subscription list and be notified
      when a new episode airs.
    </Text>
  </ListBoxItem>
  <ListBoxItem textValue="Report">
    <Text slot="label">Report</Text>
    <Text slot="description">
      Report an issue/violation.
    </Text>
  </ListBoxItem>
</MyComboBox>
```

```
import {Text} from 'react-aria-components';

<MyComboBox label="Select action">
  <ListBoxItem textValue="Add to queue">
    <Text slot="label">
      Add to queue
    </Text>
    <Text slot="description">
      Add to current
      watch queue.
    </Text>
  </ListBoxItem>
  <ListBoxItem textValue="Add review">
    <Text slot="label">
      Add review
    </Text>
    <Text slot="description">
      Post a review for
      the episode.
    </Text>
  </ListBoxItem>
  <ListBoxItem textValue="Subscribe to series">
    <Text slot="label">
      Subscribe to
      series
    </Text>
    <Text slot="description">
      Add series to
      your subscription
      list and be
      notified when a
      new episode airs.
    </Text>
  </ListBoxItem>
  <ListBoxItem textValue="Report">
    <Text slot="label">
      Report
    </Text>
    <Text slot="description">
      Report an
      issue/violation.
    </Text>
  </ListBoxItem>
</MyComboBox>
```

* * *

ComboBox supports selection via mouse, keyboard, and touch. You can handle all of these via the `onSelectionChange` prop. ComboBox will pass the selected `id` to the `onSelectionChange` handler. Additionally, ComboBox accepts an `onInputChange` prop which is triggered whenever the value is edited by the user, whether through typing or option selection.

The example below uses `onSelectionChange` and `onInputChange` to update the selection and input value stored in React state.

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

  let [value, setValue] = React.useState('');
  let [majorId, setMajorId] = React.useState('');

  let onSelectionChange = (id) => {
    setMajorId(id);
  };

  let onInputChange = (value) => {
    setValue(value)
  };

  return (
    <>
      <p>Current selected major id: {majorId}</p>
      <p>Current input text: {value}</p>
      <MyComboBox
        label="Pick a engineering major"
        defaultItems={options}
        selectedKey={majorId}
        onSelectionChange={onSelectionChange}
        onInputChange={onInputChange}      >
        {item => <ListBoxItem>{item.name}</ListBoxItem>}
      </MyComboBox>
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

  let [value, setValue] = React.useState('');
  let [majorId, setMajorId] = React.useState('');

  let onSelectionChange = (id) => {
    setMajorId(id);
  };

  let onInputChange = (value) => {
    setValue(value)
  };

  return (
    <>
      <p>Current selected major id: {majorId}</p>
      <p>Current input text: {value}</p>
      <MyComboBox
        label="Pick a engineering major"
        defaultItems={options}
        selectedKey={majorId}
        onSelectionChange={onSelectionChange}
        onInputChange={onInputChange}      >
        {item => <ListBoxItem>{item.name}</ListBoxItem>}
      </MyComboBox>
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

  let [value, setValue] =
    React.useState('');
  let [
    majorId,
    setMajorId
  ] = React.useState('');

  let onSelectionChange =
    (id) => {
      setMajorId(id);
    };

  let onInputChange = (
    value
  ) => {
    setValue(value);
  };

  return (
    <>
      <p>
        Current selected
        major id:{' '}
        {majorId}
      </p>
      <p>
        Current input
        text: {value}
      </p>
      <MyComboBox
        label="Pick a engineering major"
        defaultItems={options}
        selectedKey={majorId}
        onSelectionChange={onSelectionChange}
        onInputChange={onInputChange}      >
        {(item) => (
          <ListBoxItem>
            {item.name}
          </ListBoxItem>
        )}
      </MyComboBox>
    </>
  );
}
```

By default, `ComboBox` uses a "contains" function from [useFilter](https://react-spectrum.adobe.com/react-aria/useFilter.html) to filter the list of options. This can be overridden using the `defaultFilter` prop, or by using the `items` prop to control the filtered list. When `items` is provided rather than `defaultItems`, `ComboBox` does no filtering of its own.

The following example makes the `inputValue` controlled, and updates the filtered list that is passed to the `items` prop when the input changes value.

```
import {useFilter} from 'react-aria';

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
    () => options.filter((item) => startsWith(item.email, filterValue)),
    [options, filterValue]
  );

  return (
    <MyComboBox
      label="To:"
      items={filteredItems}
      inputValue={filterValue}
      onInputChange={setFilterValue}      allowsCustomValue
    >
      {(item) => <ListBoxItem>{item.email}</ListBoxItem>}
    </MyComboBox>
  );
}
```

```
import {useFilter} from 'react-aria';

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
    <MyComboBox
      label="To:"
      items={filteredItems}
      inputValue={filterValue}
      onInputChange={setFilterValue}      allowsCustomValue
    >
      {(item) => <ListBoxItem>{item.email}</ListBoxItem>}
    </MyComboBox>
  );
}
```

```
import {useFilter} from 'react-aria';

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
    <MyComboBox
      label="To:"
      items={filteredItems}
      inputValue={filterValue}
      onInputChange={setFilterValue}      allowsCustomValue
    >
      {(item) => (
        <ListBoxItem>
          {item.email}
        </ListBoxItem>
      )}
    </MyComboBox>
  );
}
```

When a ComboBox has multiple controlled properties (e.g.`inputValue`, `selectedKey`, `items`), it is important to note that an update to one of these properties will not automatically update the others. Each interaction done in the ComboBox will only trigger its associated event handler. For example, typing in the field will only trigger `onInputChange` whereas selecting an item from the ComboBox menu will only trigger `onSelectionChange` so it is your responsibility to update the other controlled properties accordingly. Note that you should provide an `onSelectionChange` handler for a ComboBox with controlled input value and open state. This way, you can properly control the menu's open state when the user selects an option or blurs from the field.

The below example demonstrates how you would construct the same example above in a completely controlled fashion.

```
function ControlledComboBox() {
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

  let [fieldState, setFieldState] = React.useState({
    selectedKey: null,
    inputValue: ''
  });

  let onSelectionChange = (id: Key) => {
    setFieldState({
      inputValue: options.find(o => o.id === id)?.name ?? '',
      selectedKey: id
    });
  };

  let onInputChange = (value: string) => {
    setFieldState(prevState => ({
      inputValue: value,
      selectedKey: value === '' ? null : prevState.selectedKey
    }));
  };

  return (
     <>
      <p>Current selected major id: {fieldState.selectedKey}</p>
      <p>Current input text: {fieldState.inputValue}</p>
       <MyComboBox
        label="Pick a engineering major"
        defaultItems={options}
        selectedKey={fieldState.selectedKey}
        inputValue={fieldState.inputValue}
        onSelectionChange={onSelectionChange}
        onInputChange={onInputChange}>
        {item => <ListBoxItem>{item.name}</ListBoxItem>}
      </MyComboBox>
     </>
  );
}
```

```
function ControlledComboBox() {
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

  let [fieldState, setFieldState] = React.useState({
    selectedKey: null,
    inputValue: ''
  });

  let onSelectionChange = (id: Key) => {
    setFieldState({
      inputValue: options.find((o) => o.id === id)?.name ??
        '',
      selectedKey: id
    });
  };

  let onInputChange = (value: string) => {
    setFieldState((prevState) => ({
      inputValue: value,
      selectedKey: value === ''
        ? null
        : prevState.selectedKey
    }));
  };

  return (
    <>
      <p>
        Current selected major id: {fieldState.selectedKey}
      </p>
      <p>Current input text: {fieldState.inputValue}</p>
      <MyComboBox
        label="Pick a engineering major"
        defaultItems={options}
        selectedKey={fieldState.selectedKey}
        inputValue={fieldState.inputValue}
        onSelectionChange={onSelectionChange}
        onInputChange={onInputChange}
      >
        {(item) => <ListBoxItem>{item.name}</ListBoxItem>}
      </MyComboBox>
    </>
  );
}
```

```
function ControlledComboBox() {
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
    fieldState,
    setFieldState
  ] = React.useState({
    selectedKey: null,
    inputValue: ''
  });

  let onSelectionChange =
    (id: Key) => {
      setFieldState({
        inputValue:
          options.find(
            (o) =>
              o.id === id
          )?.name ?? '',
        selectedKey: id
      });
    };

  let onInputChange = (
    value: string
  ) => {
    setFieldState(
      (prevState) => ({
        inputValue:
          value,
        selectedKey:
          value === ''
            ? null
            : prevState
              .selectedKey
      })
    );
  };

  return (
    <>
      <p>
        Current selected
        major id:{' '}
        {fieldState
          .selectedKey}
      </p>
      <p>
        Current input
        text:{' '}
        {fieldState
          .inputValue}
      </p>
      <MyComboBox
        label="Pick a engineering major"
        defaultItems={options}
        selectedKey={fieldState
          .selectedKey}
        inputValue={fieldState
          .inputValue}
        onSelectionChange={onSelectionChange}
        onInputChange={onInputChange}
      >
        {(item) => (
          <ListBoxItem>
            {item.name}
          </ListBoxItem>
        )}
      </MyComboBox>
    </>
  );
}
```

* * *

`ComboBox` supports three different `menuTrigger` prop values:

-   `input` (default): ComboBox menu opens when the user edits the input text.
-   `focus`: ComboBox menu opens when the user focuses the ComboBox input.
-   `manual`: ComboBox menu only opens when the user presses the trigger button or uses the arrow keys.

The example below has `menuTrigger` set to `focus`.

```
<MyComboBox label="Favorite Animal" menuTrigger="focus">
  <ListBoxItem id="red panda">Red Panda</ListBoxItem>
  <ListBoxItem id="cat">Cat</ListBoxItem>
  <ListBoxItem id="dog">Dog</ListBoxItem>
  <ListBoxItem id="aardvark">Aardvark</ListBoxItem>
  <ListBoxItem id="kangaroo">Kangaroo</ListBoxItem>
  <ListBoxItem id="snake">Snake</ListBoxItem>
</MyComboBox>
```

```
<MyComboBox label="Favorite Animal" menuTrigger="focus">
  <ListBoxItem id="red panda">Red Panda</ListBoxItem>
  <ListBoxItem id="cat">Cat</ListBoxItem>
  <ListBoxItem id="dog">Dog</ListBoxItem>
  <ListBoxItem id="aardvark">Aardvark</ListBoxItem>
  <ListBoxItem id="kangaroo">Kangaroo</ListBoxItem>
  <ListBoxItem id="snake">Snake</ListBoxItem>
</MyComboBox>
```

```
<MyComboBox
  label="Favorite Animal"
  menuTrigger="focus"
>
  <ListBoxItem id="red panda">
    Red Panda
  </ListBoxItem>
  <ListBoxItem id="cat">
    Cat
  </ListBoxItem>
  <ListBoxItem id="dog">
    Dog
  </ListBoxItem>
  <ListBoxItem id="aardvark">
    Aardvark
  </ListBoxItem>
  <ListBoxItem id="kangaroo">
    Kangaroo
  </ListBoxItem>
  <ListBoxItem id="snake">
    Snake
  </ListBoxItem>
</MyComboBox>
```

* * *

This example uses the [useAsyncList](https://react-spectrum.adobe.com/react-stately/useAsyncList.html) hook to handle asynchronous loading and filtering of data from a server. Use the [renderEmptyState](https://react-spectrum.adobe.com/react-aria/ListBox.html#empty-state) prop to display a spinner during initial load. To enable infinite scrolling, render a [`<ListBoxLoadMoreItem>`](https://react-spectrum.adobe.com/react-aria/ListBox.html#listboxloadmoreitem) element at the end of the list.

```
import {useAsyncList} from 'react-stately';
import {Collection, ListBoxLoadMoreItem} from 'react-aria-components';

interface Character {
  name: string;
}

function AsyncLoadingExample() {
  let list = useAsyncList<Character>({
    async load({ signal, cursor, filterText }) {
      if (cursor) {
        cursor = cursor.replace(/^http:\/\//i, 'https://');
      }

      let res = await fetch(
        cursor || `https://swapi.py4e.com/api/people/?search=${filterText}`,
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
    <MyComboBox
      label="Star Wars Character Lookup"
      inputValue={list.filterText}
      onInputChange={list.setFilterText}
    >
      <Collection items={list.items}>
        {(item) => <ListBoxItem id={item.name}>{item.name}</ListBoxItem>}
      </Collection>
      <ListBoxLoadMoreItem
        onLoadMore={list.loadMore}
        isLoading={list.loadingState === 'loadingMore'}
      >
        <MyProgressCircle isIndeterminate aria-label="Loading more..." />
      </ListBoxLoadMoreItem>    </MyComboBox>
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
      if (cursor) {
        cursor = cursor.replace(/^http:\/\//i, 'https://');
      }

      let res = await fetch(
        cursor ||
          `https://swapi.py4e.com/api/people/?search=${filterText}`,
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
    <MyComboBox
      label="Star Wars Character Lookup"
      inputValue={list.filterText}
      onInputChange={list.setFilterText}
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
      </ListBoxLoadMoreItem>    </MyComboBox>
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
              `https://swapi.py4e.com/api/people/?search=${filterText}`,
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
    <MyComboBox
      label="Star Wars Character Lookup"
      inputValue={list
        .filterText}
      onInputChange={list
        .setFilterText}
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
      </ListBoxLoadMoreItem>    </MyComboBox>
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

A `ComboBox` can be fully disabled using the isDisabled prop.

```
<MyComboBox label="Favorite Animal" isDisabled>
  <ListBoxItem id="red panda">Panda</ListBoxItem>
  <ListBoxItem id="cat">Cat</ListBoxItem>
  <ListBoxItem id="dog">Dog</ListBoxItem>
</MyComboBox>
```

```
<MyComboBox label="Favorite Animal" isDisabled>
  <ListBoxItem id="red panda">Panda</ListBoxItem>
  <ListBoxItem id="cat">Cat</ListBoxItem>
  <ListBoxItem id="dog">Dog</ListBoxItem>
</MyComboBox>
```

```
<MyComboBox
  label="Favorite Animal"
  isDisabled
>
  <ListBoxItem id="red panda">
    Panda
  </ListBoxItem>
  <ListBoxItem id="cat">
    Cat
  </ListBoxItem>
  <ListBoxItem id="dog">
    Dog
  </ListBoxItem>
</MyComboBox>
```

Show CSS

```
.react-aria-ComboBox {
  .react-aria-Input {
    &[data-disabled] {
      border-color: var(--border-color-disabled);
    }
  }

  .react-aria-Button {
    &[data-disabled] {
      background: var(--border-color-disabled);
    }
  }
}
```

```
.react-aria-ComboBox {
  .react-aria-Input {
    &[data-disabled] {
      border-color: var(--border-color-disabled);
    }
  }

  .react-aria-Button {
    &[data-disabled] {
      background: var(--border-color-disabled);
    }
  }
}
```

```
.react-aria-ComboBox {
  .react-aria-Input {
    &[data-disabled] {
      border-color: var(--border-color-disabled);
    }
  }

  .react-aria-Button {
    &[data-disabled] {
      background: var(--border-color-disabled);
    }
  }
}
```

You can disable specific options by providing an array of keys to `ComboBox` via the `disabledKeys` prop. This will prevent options with matching keys from being pressable and receiving keyboard focus as shown in the example below. Note that you are responsible for the styling of disabled options.

```
<MyComboBox label="Favorite Animal" disabledKeys={['cat', 'kangaroo']}>
  <ListBoxItem id="red panda">Red Panda</ListBoxItem>
  <ListBoxItem id="cat">Cat</ListBoxItem>
  <ListBoxItem id="dog">Dog</ListBoxItem>
  <ListBoxItem id="aardvark">Aardvark</ListBoxItem>
  <ListBoxItem id="kangaroo">Kangaroo</ListBoxItem>
  <ListBoxItem id="snake">Snake</ListBoxItem>
</MyComboBox>
```

```
<MyComboBox
  label="Favorite Animal"
  disabledKeys={['cat', 'kangaroo']}
>
  <ListBoxItem id="red panda">Red Panda</ListBoxItem>
  <ListBoxItem id="cat">Cat</ListBoxItem>
  <ListBoxItem id="dog">Dog</ListBoxItem>
  <ListBoxItem id="aardvark">Aardvark</ListBoxItem>
  <ListBoxItem id="kangaroo">Kangaroo</ListBoxItem>
  <ListBoxItem id="snake">Snake</ListBoxItem>
</MyComboBox>
```

```
<MyComboBox
  label="Favorite Animal"
  disabledKeys={[
    'cat',
    'kangaroo'
  ]}
>
  <ListBoxItem id="red panda">
    Red Panda
  </ListBoxItem>
  <ListBoxItem id="cat">
    Cat
  </ListBoxItem>
  <ListBoxItem id="dog">
    Dog
  </ListBoxItem>
  <ListBoxItem id="aardvark">
    Aardvark
  </ListBoxItem>
  <ListBoxItem id="kangaroo">
    Kangaroo
  </ListBoxItem>
  <ListBoxItem id="snake">
    Snake
  </ListBoxItem>
</MyComboBox>
```

* * *

ComboBox supports the `isRequired` prop to ensure the user enters a value, as well as custom client and server-side validation. It can also be integrated with other form libraries. See the [Forms](https://react-spectrum.adobe.com/react-aria/forms.html) guide to learn more.

To display validation errors, add a `<FieldError>` element as a child of the ComboBox. This allows you to render error messages from all of the above sources with consistent custom styles.

```
import {Form, FieldError} from 'react-aria-components';

<Form>
  <ComboBox name="animal" isRequired>    <Label>Favorite Animal</Label>
    <div>
      <Input />
      <Button>▼</Button>
    </div>
    <FieldError />    <Popover>
      <ListBox>
        <ListBoxItem>Aardvark</ListBoxItem>
        <ListBoxItem>Cat</ListBoxItem>
        <ListBoxItem>Dog</ListBoxItem>
        <ListBoxItem>Kangaroo</ListBoxItem>
        <ListBoxItem>Panda</ListBoxItem>
        <ListBoxItem>Snake</ListBoxItem>
      </ListBox>
    </Popover>
  </ComboBox>
  <Button type="submit">Submit</Button>
</Form>
```

```
import {Form, FieldError} from 'react-aria-components';

<Form>
  <ComboBox name="animal" isRequired>    <Label>Favorite Animal</Label>
    <div>
      <Input />
      <Button>▼</Button>
    </div>
    <FieldError />    <Popover>
      <ListBox>
        <ListBoxItem>Aardvark</ListBoxItem>
        <ListBoxItem>Cat</ListBoxItem>
        <ListBoxItem>Dog</ListBoxItem>
        <ListBoxItem>Kangaroo</ListBoxItem>
        <ListBoxItem>Panda</ListBoxItem>
        <ListBoxItem>Snake</ListBoxItem>
      </ListBox>
    </Popover>
  </ComboBox>
  <Button type="submit">Submit</Button>
</Form>
```

```
import {
  FieldError,
  Form
} from 'react-aria-components';

<Form>
  <ComboBox
    name="animal"
    isRequired
  >    <Label>
      Favorite Animal
    </Label>
    <div>
      <Input />
      <Button>
        ▼
      </Button>
    </div>
    <FieldError />    <Popover>
      <ListBox>
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
    </Popover>
  </ComboBox>
  <Button type="submit">
    Submit
  </Button>
</Form>
```

Show CSS

```
.react-aria-ComboBox {
  .react-aria-Input {
    &[data-invalid]:not([data-focused]) {
      border-color: var(--invalid-color);
    }
  }

  .react-aria-FieldError {
    font-size: 12px;
    color: var(--invalid-color);
  }
}
```

```
.react-aria-ComboBox {
  .react-aria-Input {
    &[data-invalid]:not([data-focused]) {
      border-color: var(--invalid-color);
    }
  }

  .react-aria-FieldError {
    font-size: 12px;
    color: var(--invalid-color);
  }
}
```

```
.react-aria-ComboBox {
  .react-aria-Input {
    &[data-invalid]:not([data-focused]) {
      border-color: var(--invalid-color);
    }
  }

  .react-aria-FieldError {
    font-size: 12px;
    color: var(--invalid-color);
  }
}
```

By default, `FieldError` displays default validation messages provided by the browser. See [Customizing error messages](https://react-spectrum.adobe.com/react-aria/forms.html#customizing-error-messages) in the Forms guide to learn how to provide your own custom errors.

The `description` slot can be used to associate additional help text with a ComboBox.

```
<ComboBox>
  <Label>Favorite Animal</Label>
  <div>
    <Input />
    <Button><ChevronDown size={16} /></Button>
  </div>
  <Text slot="description">Please select an animal.</Text>  <Popover>
    <ListBox>
      <ListBoxItem>Aardvark</ListBoxItem>
      <ListBoxItem>Cat</ListBoxItem>
      <ListBoxItem>Dog</ListBoxItem>
      <ListBoxItem>Kangaroo</ListBoxItem>
      <ListBoxItem>Panda</ListBoxItem>
      <ListBoxItem>Snake</ListBoxItem>
    </ListBox>
  </Popover>
</ComboBox>
```

```
<ComboBox>
  <Label>Favorite Animal</Label>
  <div>
    <Input />
    <Button><ChevronDown size={16} /></Button>
  </div>
  <Text slot="description">Please select an animal.</Text>  <Popover>
    <ListBox>
      <ListBoxItem>Aardvark</ListBoxItem>
      <ListBoxItem>Cat</ListBoxItem>
      <ListBoxItem>Dog</ListBoxItem>
      <ListBoxItem>Kangaroo</ListBoxItem>
      <ListBoxItem>Panda</ListBoxItem>
      <ListBoxItem>Snake</ListBoxItem>
    </ListBox>
  </Popover>
</ComboBox>
```

```
<ComboBox>
  <Label>
    Favorite Animal
  </Label>
  <div>
    <Input />
    <Button>
      <ChevronDown
        size={16}
      />
    </Button>
  </div>
  <Text slot="description">
    Please select an
    animal.
  </Text>  <Popover>
    <ListBox>
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
  </Popover>
</ComboBox>
```

Show CSS

```
.react-aria-ComboBox {
  [slot=description] {
    font-size: 12px;
  }
}
```

```
.react-aria-ComboBox {
  [slot=description] {
    font-size: 12px;
  }
}
```

```
.react-aria-ComboBox {
  [slot=description] {
    font-size: 12px;
  }
}
```

* * *

Name

Type

Default

Description

`defaultFilter`

`( (textValue: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String), , inputValue: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) )) => [boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

The filter function used to determine if a option should be included in the combo box list.

`formValue`

`'text' | 'key'`

`'key'`

Whether the text or key of the selected item is submitted as part of an HTML form. When `allowsCustomValue` is `true`, this option does not apply and the text is always submitted.

`allowsEmptyCollection`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the combo box allows the menu to be open when the collection is empty.

`shouldFocusWrap`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether keyboard navigation is circular.

`defaultItems`

`[Iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)<T>`

—

The list of ComboBox items (uncontrolled).

`items`

`[Iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)<T>`

—

The list of ComboBox items (controlled).

`inputValue`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

The value of the ComboBox input (controlled).

`defaultInputValue`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

The default value of the ComboBox input (uncontrolled).

`allowsCustomValue`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the ComboBox allows a non-item matching input value to be set.

`menuTrigger`

`[MenuTriggerAction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/combobox/src/index.d.ts:MenuTriggerAction)`

`'input'`

The interaction required to display the ComboBox menu.

`disabledKeys`

`[Iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)<[Key](https://reactjs.org/docs/lists-and-keys.html)>`

—

The item keys that are disabled. These items cannot be selected, focused, or otherwise interacted with.

`selectedKey`

`[Key](https://reactjs.org/docs/lists-and-keys.html) | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)`

—

The currently selected key in the collection (controlled).

`defaultSelectedKey`

`[Key](https://reactjs.org/docs/lists-and-keys.html)`

—

The initial selected key in the collection (uncontrolled).

`isDisabled`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the input is disabled.

`isReadOnly`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the input can be selected but not changed by the user.

`isRequired`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether user input is required on the input before form submission.

`isInvalid`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the input value is invalid.

`validate`

`( (value: [ComboBoxValidationValue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/combobox/src/index.d.ts:ComboBoxValidationValue) )) => [ValidationError](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/inputs.d.ts:ValidationError) | true | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null) | [undefined](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined)`

—

A function that returns an error message if a given value is invalid. Validation errors are displayed to the user when the form is submitted if `validationBehavior="native"`. For realtime validation, use the `isInvalid` prop instead.

`autoFocus`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the element should receive focus on render.

`name`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

The name of the input element, used when submitting an HTML form. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname).

`form`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

The `<form>` element to associate the input with. The value of this attribute must be the id of a `<form>` in the same document. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#form).

`validationBehavior`

`'native' | 'aria'`

`'native'`

Whether to use native HTML form validation to prevent form submission when the value is missing or invalid, or mark the field as required or invalid via ARIA.

`children`

`[ChildrenOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ChildrenOrFunction)<[ComboBoxRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/ComboBox.tsx:ComboBoxRenderProps)>`

—

The children of the component. A function may be provided to alter the children based on component state.

`className`

`[ClassNameOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ClassNameOrFunction)<[ComboBoxRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/ComboBox.tsx:ComboBoxRenderProps)>`

—

The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.

`style`

`[StyleOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:StyleOrFunction)<[ComboBoxRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/ComboBox.tsx:ComboBoxRenderProps)>`

—

The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.

Events

Name

Type

Description

`onOpenChange`

`( (isOpen: [boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean), , menuTrigger?: [MenuTriggerAction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/combobox/src/index.d.ts:MenuTriggerAction) )) => void`

Method that is called when the open state of the menu changes. Returns the new open state and the action that caused the opening of the menu.

`onSelectionChange`

`( (key: [Key](https://reactjs.org/docs/lists-and-keys.html) |  | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null) )) => void`

Handler that is called when the selection changes.

`onInputChange`

`( (value: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) )) => void`

Handler that is called when the ComboBox input value changes.

`onFocus`

`( (e: [FocusEvent](https://developer.mozilla.org/docs/Web/API/FocusEvent)<[HTMLInputElement](https://developer.mozilla.org/docs/Web/API/HTMLInputElement)> )) => void`

Handler that is called when the element receives focus.

`onBlur`

`( (e: [FocusEvent](https://developer.mozilla.org/docs/Web/API/FocusEvent)<[HTMLInputElement](https://developer.mozilla.org/docs/Web/API/HTMLInputElement)> )) => void`

Handler that is called when the element loses focus.

`onFocusChange`

`( (isFocused: [boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) )) => void`

Handler that is called when the element's focus status changes.

`onKeyDown`

`( (e: [KeyboardEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/events.d.ts:KeyboardEvent) )) => void`

Handler that is called when a key is pressed.

`onKeyUp`

`( (e: [KeyboardEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/events.d.ts:KeyboardEvent) )) => void`

Handler that is called when a key is released.

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

A `<Label>` accepts all props supported by the `<label>` HTML element.

An `<Input>` accepts all props supported by the `<input>` HTML element.

A `<Button>` accepts its contents as `children`. Other props such as `onPress` and `isDisabled` will be set by the `ComboBox`.

Show props

Name

Type

Default

Description

`isPending`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the button is in a pending state. This disables press and hover events while retaining focusability, and announces the pending state to screen readers.

`isDisabled`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the button is disabled.

`autoFocus`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the element should receive focus on render.

`type`

`'button' | 'submit' | 'reset'`

`'button'`

The behavior of the button when used in an HTML form.

`form`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

The `<form>` element to associate the button with. The value of this attribute must be the id of a `<form>` in the same document. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button#form).

`formAction`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

The URL that processes the information submitted by the button. Overrides the action attribute of the button's form owner.

`formEncType`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

Indicates how to encode the form data that is submitted.

`formMethod`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

Indicates the HTTP method used to submit the form.

`formNoValidate`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Indicates that the form is not to be validated when it is submitted.

`formTarget`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

Overrides the target attribute of the button's form owner.

`name`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

Submitted as a pair with the button's value as part of the form data.

`value`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

The value associated with the button's name when it's submitted with the form data.

`children`

`[ChildrenOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ChildrenOrFunction)<[ButtonRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Button.tsx:ButtonRenderProps)>`

—

The children of the component. A function may be provided to alter the children based on component state.

`className`

`[ClassNameOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ClassNameOrFunction)<[ButtonRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Button.tsx:ButtonRenderProps)>`

—

The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.

`style`

`[StyleOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:StyleOrFunction)<[ButtonRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Button.tsx:ButtonRenderProps)>`

—

The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.

Events

Name

Type

Description

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

`onFocus`

`( (e: [FocusEvent](https://developer.mozilla.org/docs/Web/API/FocusEvent)<Target> )) => void`

Handler that is called when the element receives focus.

`onBlur`

`( (e: [FocusEvent](https://developer.mozilla.org/docs/Web/API/FocusEvent)<Target> )) => void`

Handler that is called when the element loses focus.

`onFocusChange`

`( (isFocused: [boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) )) => void`

Handler that is called when the element's focus status changes.

`onKeyDown`

`( (e: [KeyboardEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/events.d.ts:KeyboardEvent) )) => void`

Handler that is called when a key is pressed.

`onKeyUp`

`( (e: [KeyboardEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/events.d.ts:KeyboardEvent) )) => void`

Handler that is called when a key is released.

`onHoverStart`

`( (e: [HoverEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/events.d.ts:HoverEvent) )) => void`

Handler that is called when a hover interaction starts.

`onHoverEnd`

`( (e: [HoverEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/events.d.ts:HoverEvent) )) => void`

Handler that is called when a hover interaction ends.

`onHoverChange`

`( (isHovering: [boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) )) => void`

Handler that is called when the hover state changes.

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

`excludeFromTabOrder`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether to exclude the element from the sequential tab order. If true, the element will not be focusable via the keyboard by tabbing. This should be avoided except in rare scenarios where an alternative means of accessing the element or its functionality via the keyboard is available.

`preventFocusOnPress`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether to prevent focus from moving to the button when pressing it.

Caution, this can make the button inaccessible and should only be used when alternative keyboard interaction is provided, such as ComboBox's MenuTrigger or a NumberField's increment/decrement control.

`aria-disabled`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | 'true' | 'false'`

Indicates whether the element is disabled to users of assistive technology.

`aria-expanded`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | 'true' | 'false'`

Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.

`aria-haspopup`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog' | 'true' | 'false'`

Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.

`aria-controls`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

Identifies the element (or elements) whose contents or presence are controlled by the current element.

`aria-pressed`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | 'true' | 'false' | 'mixed'`

Indicates the current "pressed" state of toggle buttons.

`aria-current`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | 'true' | 'false' | 'page' | 'step' | 'location' | 'date' | 'time'`

Indicates whether this element represents the current item within a container or set of related elements.

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

A `<Popover>` is a container to hold the `<ListBox>` suggestions for a ComboBox. By default, it has a `placement` of `bottom start` within a `<ComboBox>`, but this and other positioning properties may be customized.

Show props

Name

Type

Default

Description

`trigger`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

The name of the component that triggered the popover. This is reflected on the element as the `data-trigger` attribute, and can be used to provide specific styles for the popover depending on which element triggered it.

`triggerRef`

`[RefObject](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/refs.d.ts:RefObject)<[Element](https://developer.mozilla.org/docs/Web/API/Element) | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)>`

—

The ref for the element which the popover positions itself with respect to.

When used within a trigger component such as DialogTrigger, MenuTrigger, Select, etc., this is set automatically. It is only required when used standalone.

`isEntering`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the popover is currently performing an entry animation.

`isExiting`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the popover is currently performing an exit animation.

`offset`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)`

`8`

The additional offset applied along the main axis between the element and its anchor element.

`placement`

`[Placement](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/overlays/src/index.d.ts:Placement)`

`'bottom'`

The placement of the element with respect to its anchor element.

`containerPadding`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)`

`12`

The placement padding that should be applied between the element and its surrounding container.

`crossOffset`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)`

`0`

The additional offset applied along the cross axis between the element and its anchor element.

`shouldFlip`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

`true`

Whether the element should flip its orientation (e.g. top to bottom or left to right) when there is insufficient room for it to render completely.

`arrowRef`

`[RefObject](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/refs.d.ts:RefObject)<[Element](https://developer.mozilla.org/docs/Web/API/Element) | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)>`

—

A ref for the popover arrow element.

`isNonModal`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the popover is non-modal, i.e. elements outside the popover may be interacted with by assistive technologies.

Most popovers should not use this option as it may negatively impact the screen reader experience. Only use with components such as combobox, which are designed to handle this situation carefully.

`isKeyboardDismissDisabled`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

`false`

Whether pressing the escape key to close the popover should be disabled.

Most popovers should not use this option. When set to true, an alternative way to close the popover with a keyboard must be provided.

`shouldCloseOnInteractOutside`

`( (element: [Element](https://developer.mozilla.org/docs/Web/API/Element) )) => [boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

When user interacts with the argument element outside of the popover ref, return true if onClose should be called. This gives you a chance to filter out interaction with elements that should not dismiss the popover. By default, onClose will always be called on interaction outside the popover ref.

`boundaryElement`

`[Element](https://developer.mozilla.org/docs/Web/API/Element)`

`document.body`

Element that that serves as the positioning boundary.

`scrollRef`

`[RefObject](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/refs.d.ts:RefObject)<[Element](https://developer.mozilla.org/docs/Web/API/Element) | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)>`

`overlayRef`

A ref for the scrollable region within the overlay.

`shouldUpdatePosition`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

`true`

Whether the overlay should update its position automatically.

`arrowBoundaryOffset`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)`

`0`

The minimum distance the arrow's edge should be from the edge of the overlay element.

`isOpen`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the overlay is open by default (controlled).

`defaultOpen`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the overlay is open by default (uncontrolled).

`children`

`[ChildrenOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ChildrenOrFunction)<[PopoverRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Popover.tsx:PopoverRenderProps)>`

—

The children of the component. A function may be provided to alter the children based on component state.

`className`

`[ClassNameOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ClassNameOrFunction)<[PopoverRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Popover.tsx:PopoverRenderProps)>`

—

The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.

`style`

`[StyleOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:StyleOrFunction)<[PopoverRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Popover.tsx:PopoverRenderProps)>`

—

The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.

Events

Name

Type

Description

`onOpenChange`

`( (isOpen: [boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) )) => void`

Handler that is called when the overlay's open state changes.

Layout

Name

Type

Description

`slot`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)`

A slot name for the component. Slots allow the component to receive props from a parent component. An explicit `null` value indicates that the local props completely override all props received from a parent.

Sizing

Name

Type

Description

`maxHeight`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)`

The maxHeight specified for the overlay element. By default, it will take all space up to the current viewport height.

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

Within a `<ComboBox>`, most `<ListBox>` props are set automatically. The `<ListBox>` defines the options to display in a ComboBox.

Show props

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

A `<ListBoxItem>` defines a single option within a `<ListBox>`. If the `children` are not plain text, then the `textValue` prop must also be set to a plain text representation, which will be used for autocomplete in the ComboBox.

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

A `<FieldError>` displays validation errors.

Show props

Name

Type

Description

`children`

`[ChildrenOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ChildrenOrFunction)<[FieldErrorRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/FieldError.tsx:FieldErrorRenderProps)>`

The children of the component. A function may be provided to alter the children based on component state.

`className`

`[ClassNameOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ClassNameOrFunction)<[FieldErrorRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/FieldError.tsx:FieldErrorRenderProps)>`

The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.

`style`

`[StyleOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:StyleOrFunction)<[FieldErrorRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/FieldError.tsx:FieldErrorRenderProps)>`

The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.

EventsPositioningAccessibility

Name

Type

Description

`id`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

The element's unique identifier. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id).

* * *

React Aria components can be styled in many ways, including using CSS classes, inline styles, utility classes (e.g. Tailwind), CSS-in-JS (e.g. Styled Components), etc. By default, all components include a builtin `className` attribute which can be targeted using CSS selectors. These follow the `react-aria-ComponentName` naming convention.

```
.react-aria-ComboBox {
  /* ... */
}
```

```
.react-aria-ComboBox {
  /* ... */
}
```

```
.react-aria-ComboBox {
  /* ... */
}
```

A custom `className` can also be specified on any component. This overrides the default `className` provided by React Aria with your own.

```
<ComboBox className="my-combobox">
  {/* ... */}
</ComboBox>
```

```
<ComboBox className="my-combobox">
  {/* ... */}
</ComboBox>
```

```
<ComboBox className="my-combobox">
  {/* ... */}
</ComboBox>
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

The states and selectors for each component used in a `ComboBox` are documented below.

A `ComboBox` can be targeted with the `.react-aria-ComboBox` CSS selector, or by overriding with a custom `className`. It supports the following states:

Name

CSS Selector

Description

`isOpen`

`[data-open]`

Whether the combobox is currently open.

`isDisabled`

`[data-disabled]`

Whether the combobox is disabled.

`isInvalid`

`[data-invalid]`

Whether the combobox is invalid.

`isRequired`

`[data-required]`

Whether the combobox is required.

A `Label` can be targeted with the `.react-aria-Label` CSS selector, or by overriding with a custom `className`.

An `Input` can be targeted with the `.react-aria-Input` CSS selector, or by overriding with a custom `className`. It supports the following states:

Name

CSS Selector

Description

`isHovered`

`[data-hovered]`

Whether the input is currently hovered with a mouse.

`isFocused`

`[data-focused]`

Whether the input is focused, either via a mouse or keyboard.

`isFocusVisible`

`[data-focus-visible]`

Whether the input is keyboard focused.

`isDisabled`

`[data-disabled]`

Whether the input is disabled.

`isInvalid`

`[data-invalid]`

Whether the input is invalid.

A [Button](https://react-spectrum.adobe.com/react-aria/Button.html) can be targeted with the `.react-aria-Button` CSS selector, or by overriding with a custom `className`. It supports the following states:

Name

CSS Selector

Description

`isHovered`

`[data-hovered]`

Whether the button is currently hovered with a mouse.

`isPressed`

`[data-pressed]`

Whether the button is currently in a pressed state.

`isFocused`

`[data-focused]`

Whether the button is focused, either via a mouse or keyboard.

`isFocusVisible`

`[data-focus-visible]`

Whether the button is keyboard focused.

`isDisabled`

`[data-disabled]`

Whether the button is disabled.

`isPending`

`[data-pending]`

Whether the button is currently in a pending state.

The [Popover](https://react-spectrum.adobe.com/react-aria/Popover.html) component can be targeted with the `.react-aria-Popover` CSS selector, or by overriding with a custom `className`. Note that it renders in a [React Portal](https://reactjs.org/docs/portals.html), so it will not appear as a descendant of the ComboBox in the DOM. It supports the following states and render props:

Name

CSS Selector

Description

`trigger`

`[data-trigger="..."]`

The name of the component that triggered the popover, e.g. "DialogTrigger" or "ComboBox".

`placement`

`[data-placement="left | right | top | bottom"]`

The placement of the popover relative to the trigger.

`isEntering`

`[data-entering]`

Whether the popover is currently entering. Use this to apply animations.

`isExiting`

`[data-exiting]`

Whether the popover is currently exiting. Use this to apply animations.

Within a ComboBox, the popover will have the `data-trigger="ComboBox"` attribute, which can be used to define combobox-specific styles. In addition, the `--trigger-width` CSS custom property will be set on the popover, which you can use to make the popover match the width of the combobox.

```
.react-aria-Popover[data-trigger=ComboBox] {
  width: var(--trigger-width);
}
```

```
.react-aria-Popover[data-trigger=ComboBox] {
  width: var(--trigger-width);
}
```

```
.react-aria-Popover[data-trigger=ComboBox] {
  width: var(--trigger-width);
}
```

A [ListBox](https://react-spectrum.adobe.com/react-aria/ListBox.html) can be targeted with the `.react-aria-ListBox` CSS selector, or by overriding with a custom `className`.

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

Items also support two slots: a label, and a description. When provided using the `<Text>` element, the item will have `aria-labelledby` and `aria-describedby` attributes pointing to these slots, improving screen reader announcement. See [text slots](#text-slots) for an example.

Note that items may not contain interactive children such as buttons, as screen readers will not be able to access them.

The help text elements within a `ComboBox` can be targeted with the `[slot=description]` and `[slot=errorMessage]` CSS selectors, or by adding a custom `className`.

A `FieldError` can be targeted with the `.react-aria-FieldError` CSS selector, or by overriding with a custom `className`. It supports the following render props:

Name

Description

`isInvalid`

Whether the input value is invalid.

`validationErrors`

The current error messages for the input if it is invalid, otherwise an empty array.

`validationDetails`

The native validation details for the input.

* * *

If you need to customize one of the components within a `ComboBox`, such as `Input` or `ListBox`, in many cases you can create a wrapper component. This lets you customize the props passed to the component.

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

`ComboBox`

`ComboBoxContext`

`[ComboBoxProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/ComboBox.tsx:ComboBoxProps)`

`[HTMLDivElement](https://developer.mozilla.org/docs/Web/API/HTMLDivElement)`

This example shows a `FieldGroup` component that renders a group of filters with a title. The entire group can be marked as disabled via the `isDisabled` prop, which is passed to all child selects via the `ComboBoxContext` provider.

```
import {ComboBoxContext} from 'react-aria-components';

interface FieldGroupProps {
  title?: string,
  children?: React.ReactNode,
  isDisabled?: boolean
}

function FieldGroup({title, children, isDisabled}: FieldGroupProps) {
  return (
    <fieldset>
      <legend>{title}</legend>
      <ComboBoxContext.Provider value={{isDisabled}}>        {children}
      </ComboBoxContext.Provider>
    </fieldset>
  );
}

<FieldGroup title="Filters" isDisabled>
  <MyComboBox label="Status" defaultSelectedKey="published">
    <ListBoxItem id="draft">Draft</ListBoxItem>
    <ListBoxItem id="published">Published</ListBoxItem>
    <ListBoxItem id="deleted">Deleted</ListBoxItem>
  </MyComboBox>
  <MyComboBox label="Author" defaultSelectedKey="emma">
    <ListBoxItem id="john">John</ListBoxItem>
    <ListBoxItem id="emma">Emma</ListBoxItem>
    <ListBoxItem id="tim">Tim</ListBoxItem>
  </MyComboBox>
</FieldGroup>
```

```
import {ComboBoxContext} from 'react-aria-components';

interface FieldGroupProps {
  title?: string;
  children?: React.ReactNode;
  isDisabled?: boolean;
}

function FieldGroup(
  { title, children, isDisabled }: FieldGroupProps
) {
  return (
    <fieldset>
      <legend>{title}</legend>
      <ComboBoxContext.Provider value={{ isDisabled }}>        {children}
      </ComboBoxContext.Provider>
    </fieldset>
  );
}

<FieldGroup title="Filters" isDisabled>
  <MyComboBox
    label="Status"
    defaultSelectedKey="published"
  >
    <ListBoxItem id="draft">Draft</ListBoxItem>
    <ListBoxItem id="published">Published</ListBoxItem>
    <ListBoxItem id="deleted">Deleted</ListBoxItem>
  </MyComboBox>
  <MyComboBox label="Author" defaultSelectedKey="emma">
    <ListBoxItem id="john">John</ListBoxItem>
    <ListBoxItem id="emma">Emma</ListBoxItem>
    <ListBoxItem id="tim">Tim</ListBoxItem>
  </MyComboBox>
</FieldGroup>
```

```
import {ComboBoxContext} from 'react-aria-components';

interface FieldGroupProps {
  title?: string;
  children?:
    React.ReactNode;
  isDisabled?: boolean;
}

function FieldGroup(
  {
    title,
    children,
    isDisabled
  }: FieldGroupProps
) {
  return (
    <fieldset>
      <legend>
        {title}
      </legend>
      <ComboBoxContext.Provider
        value={{
          isDisabled
        }}
      >        {children}
      </ComboBoxContext.Provider>
    </fieldset>
  );
}

<FieldGroup
  title="Filters"
  isDisabled
>
  <MyComboBox
    label="Status"
    defaultSelectedKey="published"
  >
    <ListBoxItem id="draft">
      Draft
    </ListBoxItem>
    <ListBoxItem id="published">
      Published
    </ListBoxItem>
    <ListBoxItem id="deleted">
      Deleted
    </ListBoxItem>
  </MyComboBox>
  <MyComboBox
    label="Author"
    defaultSelectedKey="emma"
  >
    <ListBoxItem id="john">
      John
    </ListBoxItem>
    <ListBoxItem id="emma">
      Emma
    </ListBoxItem>
    <ListBoxItem id="tim">
      Tim
    </ListBoxItem>
  </MyComboBox>
</FieldGroup>
```

Show CSS

```
fieldset {
  padding: 1.5em;
  width: fit-content;
}
```

```
fieldset {
  padding: 1.5em;
  width: fit-content;
}
```

```
fieldset {
  padding: 1.5em;
  width: fit-content;
}
```

ComboBox passes props to its child components, such as the label and input, via their associated contexts. These contexts are exported so you can also consume them in your own custom components. This enables you to reuse existing components from your app or component library together with React Aria Components.

Component

Context

Props

Ref

`Label`

`LabelContext`

`[LabelProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Label.tsx:LabelProps)`

`[HTMLLabelElement](https://developer.mozilla.org/docs/Web/API/HTMLLabelElement)`

`Button`

`ButtonContext`

`[ButtonProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Button.tsx:ButtonProps)`

`[HTMLButtonElement](https://developer.mozilla.org/docs/Web/API/HTMLButtonElement)`

`Input`

`InputContext`

`[InputProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Input.tsx:InputProps)`

`[HTMLInputElement](https://developer.mozilla.org/docs/Web/API/HTMLInputElement)`

`Popover`

`PopoverContext`

`[PopoverProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Popover.tsx:PopoverProps)`

`[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)`

`ListBox`

`ListBoxContext`

`[ListBoxProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/ListBox.tsx:ListBoxProps)`

`[HTMLDivElement](https://developer.mozilla.org/docs/Web/API/HTMLDivElement)`

`Text`

`TextContext`

`[TextProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Text.tsx:TextProps)`

`[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)`

This example consumes from `LabelContext` in an existing styled label component to make it compatible with React Aria Components. The `[useContextProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:useContextProps)` hook merges the local props and ref with the ones provided via context by ComboBox.

```
import type {LabelProps} from 'react-aria-components';
import {LabelContext, useContextProps} from 'react-aria-components';

const MyCustomLabel = React.forwardRef(
  (props: LabelProps, ref: React.ForwardedRef<HTMLLabelElement>) => {
    // Merge the local props and ref with the ones provided via context.
    [props, ref] = useContextProps(props, ref, LabelContext);
    // ... your existing Label component
    return <label {...props} ref={ref} />;
  }
);
```

```
import type {LabelProps} from 'react-aria-components';
import {
  LabelContext,
  useContextProps
} from 'react-aria-components';

const MyCustomLabel = React.forwardRef(
  (
    props: LabelProps,
    ref: React.ForwardedRef<HTMLLabelElement>
  ) => {
    // Merge the local props and ref with the ones provided via context.
    [props, ref] = useContextProps(
      props,
      ref,
      LabelContext
    );
    // ... your existing Label component
    return <label {...props} ref={ref} />;
  }
);
```

```
import type {LabelProps} from 'react-aria-components';
import {
  LabelContext,
  useContextProps
} from 'react-aria-components';

const MyCustomLabel =
  React.forwardRef(
    (
      props: LabelProps,
      ref:
        React.ForwardedRef<
          HTMLLabelElement
        >
    ) => {
      // Merge the local props and ref with the ones provided via context.
      [props, ref] =
        useContextProps(
          props,
          ref,
          LabelContext
        );
      // ... your existing Label component
      return (
        <label
          {...props}
          ref={ref}
        />
      );
    }
  );
```

Now you can use `MyCustomLabel` within a `ComboBox`, in place of the builtin React Aria Components `Label`.

```
<ComboBox>
  <MyCustomLabel>Name</MyCustomLabel>  {/* ... */}
</ComboBox>
```

```
<ComboBox>
  <MyCustomLabel>Name</MyCustomLabel>  {/* ... */}
</ComboBox>
```

```
<ComboBox>
  <MyCustomLabel>
    Name
  </MyCustomLabel>  {/* ... */}
</ComboBox>
```

ComboBox provides an `[ComboBoxState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/combobox/src/useComboBoxState.ts:ComboBoxState)` object to its children via `ComboBoxStateContext`. This can be used to access and manipulate the combo box's state.

This example shows a `ComboBoxClearButton` component that can be placed within a `ComboBox` to allow the user to clear the selected value.

```
import {ComboBoxStateContext} from 'react-aria-components';
import {X} from 'lucide-react';

function ComboBoxClearButton() {
  let state = React.useContext(ComboBoxStateContext);  return (
    <Button
      // Don't inherit default Button behavior from ComboBox.
      slot={null}
      className="clear-button"
      aria-label="Clear"
      onPress={() => state?.setSelectedKey(null)}>
      <X size={14} />
    </Button>
  );
}

<ComboBox defaultSelectedKey="cat">
  <Label>Favorite Animal</Label>
  <div>
    <Input />
    <ComboBoxClearButton />    <Button><ChevronDown size={16} /></Button>
  </div>
  <Popover>
    <ListBox>
      <ListBoxItem id="cat">Cat</ListBoxItem>
      <ListBoxItem id="dog">Dog</ListBoxItem>
      <ListBoxItem id="kangaroo">Kangaroo</ListBoxItem>
    </ListBox>
  </Popover>
</ComboBox>
```

```
import {ComboBoxStateContext} from 'react-aria-components';
import {X} from 'lucide-react';

function ComboBoxClearButton() {
  let state = React.useContext(ComboBoxStateContext);  return (
    <Button
      // Don't inherit default Button behavior from ComboBox.
      slot={null}
      className="clear-button"
      aria-label="Clear"
      onPress={() => state?.setSelectedKey(null)}
    >
      <X size={14} />
    </Button>
  );
}

<ComboBox defaultSelectedKey="cat">
  <Label>Favorite Animal</Label>
  <div>
    <Input />
    <ComboBoxClearButton />    <Button>
      <ChevronDown size={16} />
    </Button>
  </div>
  <Popover>
    <ListBox>
      <ListBoxItem id="cat">Cat</ListBoxItem>
      <ListBoxItem id="dog">Dog</ListBoxItem>
      <ListBoxItem id="kangaroo">Kangaroo</ListBoxItem>
    </ListBox>
  </Popover>
</ComboBox>
```

```
import {ComboBoxStateContext} from 'react-aria-components';
import {X} from 'lucide-react';

function ComboBoxClearButton() {
  let state = React
    .useContext(
      ComboBoxStateContext
    );  return (
    <Button
      // Don't inherit default Button behavior from ComboBox.
      slot={null}
      className="clear-button"
      aria-label="Clear"
      onPress={() =>
        state
          ?.setSelectedKey(
            null
          )}
    >
      <X size={14} />
    </Button>
  );
}

<ComboBox defaultSelectedKey="cat">
  <Label>
    Favorite Animal
  </Label>
  <div>
    <Input />
    <ComboBoxClearButton />    <Button>
      <ChevronDown
        size={16}
      />
    </Button>
  </div>
  <Popover>
    <ListBox>
      <ListBoxItem id="cat">
        Cat
      </ListBoxItem>
      <ListBoxItem id="dog">
        Dog
      </ListBoxItem>
      <ListBoxItem id="kangaroo">
        Kangaroo
      </ListBoxItem>
    </ListBox>
  </Popover>
</ComboBox>
```

Show CSS

```
.clear-button {
  width: 1.143rem;
  height: 1.143rem;
  border-radius: 1.143rem;
  margin-left: -3.143rem;
  font-size: 0.857rem;
  line-height: 0.857rem;
  vertical-align: middle;
  text-align: center;
  background: gray;
  color: white;
  border: none;
  padding: 0;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &[data-pressed] {
    background: dimgray;
  }

  &[data-focus-visible] {
    outline: 2px solid var(--focus-ring-color);
    outline-offset: 2px;
  }

  + .react-aria-Button {
    margin-left: 4px;
  }
}
```

```
.clear-button {
  width: 1.143rem;
  height: 1.143rem;
  border-radius: 1.143rem;
  margin-left: -3.143rem;
  font-size: 0.857rem;
  line-height: 0.857rem;
  vertical-align: middle;
  text-align: center;
  background: gray;
  color: white;
  border: none;
  padding: 0;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &[data-pressed] {
    background: dimgray;
  }

  &[data-focus-visible] {
    outline: 2px solid var(--focus-ring-color);
    outline-offset: 2px;
  }

  + .react-aria-Button {
    margin-left: 4px;
  }
}
```

```
.clear-button {
  width: 1.143rem;
  height: 1.143rem;
  border-radius: 1.143rem;
  margin-left: -3.143rem;
  font-size: 0.857rem;
  line-height: 0.857rem;
  vertical-align: middle;
  text-align: center;
  background: gray;
  color: white;
  border: none;
  padding: 0;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;

  &[data-pressed] {
    background: dimgray;
  }

  &[data-focus-visible] {
    outline: 2px solid var(--focus-ring-color);
    outline-offset: 2px;
  }

  + .react-aria-Button {
    margin-left: 4px;
  }
}
```

If you need to customize things even further, such as accessing internal state, intercepting events, or customizing the DOM structure, you can drop down to the lower level Hook-based API. See [useComboBox](https://react-spectrum.adobe.com/react-aria/useComboBox.html) for more details.

* * *

`@react-aria/test-utils` offers common combobox interaction utilities which you may find helpful when writing tests. See [here](https://react-spectrum.adobe.com/react-aria/testing.html#react-aria-test-utils) for more information on how to setup these utilities in your tests. Below is the full definition of the combobox tester and a sample of how you could use it in your test suite.

```
// Combobox.test.ts
import {render} from '@testing-library/react';
import {User} from '@react-aria/test-utils';

let testUtilUser = new User({ interactionType: 'mouse' });
// ...

it('ComboBox can select an option via keyboard', async function () {
  // Render your test component/app and initialize the combobox tester
  let { getByTestId } = render(
    <ComboBox data-testid="test-combobox">
      ...
    </ComboBox>
  );
  let comboboxTester = testUtilUser.createTester('ComboBox', {
    root: getByTestId('test-combobox'),
    interactionType: 'keyboard'
  });

  await comboboxTester.open();
  expect(comboboxTester.listbox).toBeInTheDocument();

  let options = comboboxTester.options();
  await comboboxTester.selectOption({ option: options[0] });
  expect(comboboxTester.combobox.value).toBe('One');
  expect(comboboxTester.listbox).not.toBeInTheDocument();
});
```

```
// Combobox.test.ts
import {render} from '@testing-library/react';
import {User} from '@react-aria/test-utils';

let testUtilUser = new User({ interactionType: 'mouse' });
// ...

it('ComboBox can select an option via keyboard', async function () {
  // Render your test component/app and initialize the combobox tester
  let { getByTestId } = render(
    <ComboBox data-testid="test-combobox">
      ...
    </ComboBox>
  );
  let comboboxTester = testUtilUser.createTester(
    'ComboBox',
    {
      root: getByTestId('test-combobox'),
      interactionType: 'keyboard'
    }
  );

  await comboboxTester.open();
  expect(comboboxTester.listbox).toBeInTheDocument();

  let options = comboboxTester.options();
  await comboboxTester.selectOption({ option: options[0] });
  expect(comboboxTester.combobox.value).toBe('One');
  expect(comboboxTester.listbox).not.toBeInTheDocument();
});
```

```
// Combobox.test.ts
import {render} from '@testing-library/react';
import {User} from '@react-aria/test-utils';

let testUtilUser =
  new User({
    interactionType:
      'mouse'
  });
// ...

it('ComboBox can select an option via keyboard', async function () {
  // Render your test component/app and initialize the combobox tester
  let { getByTestId } =
    render(
      <ComboBox data-testid="test-combobox">
        ...
      </ComboBox>
    );
  let comboboxTester =
    testUtilUser
      .createTester(
        'ComboBox',
        {
          root:
            getByTestId(
              'test-combobox'
            ),
          interactionType:
            'keyboard'
        }
      );

  await comboboxTester
    .open();
  expect(
    comboboxTester
      .listbox
  ).toBeInTheDocument();

  let options =
    comboboxTester
      .options();
  await comboboxTester
    .selectOption({
      option: options[0]
    });
  expect(
    comboboxTester
      .combobox.value
  ).toBe('One');
  expect(
    comboboxTester
      .listbox
  ).not
    .toBeInTheDocument();
});
```

### Properties

Name

Type

Description

`combobox`

`[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)`

Returns the combobox.

`trigger`

`[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)`

Returns the combobox trigger button.

`listbox`

`[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element) | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)`

Returns the combobox's listbox if present.

`sections`

`[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)[]`

Returns the combobox's sections if present.

`focusedOption`

`[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element) | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)`

Returns the currently focused option in the combobox's dropdown if any.

### Methods

Method

Description

`constructor( (opts: [ComboBoxTesterOpts](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/test-utils/src/types.ts:ComboBoxTesterOpts) )): void`

`setInteractionType( (type: [UserOpts](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/test-utils/src/types.ts:UserOpts)['interactionType'] )): void`

Set the interaction type used by the combobox tester.

`open( (opts: [ComboBoxOpenOpts](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/test-utils/src/combobox.ts:ComboBoxOpenOpts) )): [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<void>`

Opens the combobox dropdown. Defaults to using the interaction type set on the combobox tester.

`findOption( (opts: {  optionIndexOrText: [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) |  | [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)  } )): [HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)`

Returns an option matching the specified index or text content.

`selectOption( (opts: [ComboBoxSelectOpts](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/test-utils/src/combobox.ts:ComboBoxSelectOpts) )): [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<void>`

Selects the desired combobox option. Defaults to using the interaction type set on the combobox tester. If necessary, will open the combobox dropdown beforehand. The desired option can be targeted via the option's node, the option's text, or the option's index.

`close(): [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<void>`

Closes the combobox dropdown.

`options( (opts: {  element?: [HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)  } )): [HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)[]`

Returns the combobox's options if present. Can be filtered to a subsection of the listbox if provided via `element`.