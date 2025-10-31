# TagGroup

**Source**: [https://react-spectrum.adobe.com/react-aria/TagGroup.html](https://react-spectrum.adobe.com/react-aria/TagGroup.html)

> Documentation for TagGroup in the React Aria package.

---

A tag group is a focusable list of labels, categories, keywords, filters, or other items, with support for keyboard navigation, selection, and removal.

* * *

```
import {TagGroup, TagList, Tag, Label} from 'react-aria-components';

<TagGroup selectionMode="multiple">
  <Label>Categories</Label>
  <TagList>
    <Tag>News</Tag>
    <Tag>Travel</Tag>
    <Tag>Gaming</Tag>
    <Tag>Shopping</Tag>
  </TagList>
</TagGroup>
```

```
import {
  Label,
  Tag,
  TagGroup,
  TagList
} from 'react-aria-components';

<TagGroup selectionMode="multiple">
  <Label>Categories</Label>
  <TagList>
    <Tag>News</Tag>
    <Tag>Travel</Tag>
    <Tag>Gaming</Tag>
    <Tag>Shopping</Tag>
  </TagList>
</TagGroup>
```

```
import {
  Label,
  Tag,
  TagGroup,
  TagList
} from 'react-aria-components';

<TagGroup selectionMode="multiple">
  <Label>
    Categories
  </Label>
  <TagList>
    <Tag>News</Tag>
    <Tag>Travel</Tag>
    <Tag>Gaming</Tag>
    <Tag>Shopping</Tag>
  </TagList>
</TagGroup>
```

Show CSS

```
@import "@react-aria/example-theme";

.react-aria-TagGroup {
  display: flex;
  flex-direction: column;
  gap: 2px;
  font-size: small;
  color: var(--text-color);
}

.react-aria-TagList {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}

.react-aria-Tag {
  color: var(--text-color);
  border: 1px solid var(--border-color);
  forced-color-adjust: none;
  border-radius: 4px;
  padding: 2px 8px;
  font-size: 0.929rem;
  outline: none;
  cursor: default;
  display: flex;
  align-items: center;
  transition: border-color 200ms;

  &[data-hovered] {
    border-color: var(--border-color-hover);
  }

  &[data-focus-visible] {
    outline: 2px solid var(--focus-ring-color);
    outline-offset: 2px;
  }

  &[data-selected] {
    border-color: var(--highlight-background);
    background: var(--highlight-background);
    color: var(--highlight-foreground);
  }
}
```

```
@import "@react-aria/example-theme";

.react-aria-TagGroup {
  display: flex;
  flex-direction: column;
  gap: 2px;
  font-size: small;
  color: var(--text-color);
}

.react-aria-TagList {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}

.react-aria-Tag {
  color: var(--text-color);
  border: 1px solid var(--border-color);
  forced-color-adjust: none;
  border-radius: 4px;
  padding: 2px 8px;
  font-size: 0.929rem;
  outline: none;
  cursor: default;
  display: flex;
  align-items: center;
  transition: border-color 200ms;

  &[data-hovered] {
    border-color: var(--border-color-hover);
  }

  &[data-focus-visible] {
    outline: 2px solid var(--focus-ring-color);
    outline-offset: 2px;
  }

  &[data-selected] {
    border-color: var(--highlight-background);
    background: var(--highlight-background);
    color: var(--highlight-foreground);
  }
}
```

```
@import "@react-aria/example-theme";

.react-aria-TagGroup {
  display: flex;
  flex-direction: column;
  gap: 2px;
  font-size: small;
  color: var(--text-color);
}

.react-aria-TagList {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}

.react-aria-Tag {
  color: var(--text-color);
  border: 1px solid var(--border-color);
  forced-color-adjust: none;
  border-radius: 4px;
  padding: 2px 8px;
  font-size: 0.929rem;
  outline: none;
  cursor: default;
  display: flex;
  align-items: center;
  transition: border-color 200ms;

  &[data-hovered] {
    border-color: var(--border-color-hover);
  }

  &[data-focus-visible] {
    outline: 2px solid var(--focus-ring-color);
    outline-offset: 2px;
  }

  &[data-selected] {
    border-color: var(--highlight-background);
    background: var(--highlight-background);
    color: var(--highlight-foreground);
  }
}
```

* * *

A static tag list can be built using [<ul>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul) or [<ol>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol) HTML elements, but does not support any user interactions. HTML lists are meant for static content, rather than lists with rich interactions such as keyboard navigation, item selection, removal, etc. `TagGroup` helps achieve accessible and interactive tag list components that can be styled as needed.

-   **Keyboard navigation** – Tags can be navigated using the arrow keys, along with page up/down, home/end, etc.
-   **Removable** – Tags can be removed from the tag group by clicking a remove button or pressing the backspace key.
-   **Item selection** – Single or multiple selection, with support for disabled items and both `toggle` and `replace` selection behaviors.
-   **Accessible** – Follows the [ARIA grid pattern](https://www.w3.org/WAI/ARIA/apg/patterns/grid/), with additional selection announcements via an ARIA live region. Extensively tested across many devices and [assistive technologies](https://react-spectrum.adobe.com/react-aria/accessibility.html#testing) to ensure announcements and behaviors are consistent.
-   **Styleable** – Items include builtin states for styling, such as hover, press, focus, selected, and disabled.

* * *

TravelingGrid rowGrid cellTag labelHikingRemove buttonTag groupCategoriesGroup label

A tag group consists of label and a list of tags. Each tag should include a visual label, and may optionally include a remove button. If a visual label is not included in a tag group, then an `aria-label` or `aria-labelledby` prop must be passed to identify it to assistive technology.

`TagGroup` also supports optional description and error message slots, which can be used to provide more context about the tag group, and any validation messages. These are linked with the tag group via the `aria-describedby` attribute.

```
import {Button, Label, SelectionIndicator, Tag, TagGroup, TagList, Text} from 'react-aria-components';

<TagGroup>
  <Label />
  <TagList>
    <Tag>
      <SelectionIndicator />
      <Button slot="remove" />
    </Tag>
  </TagList>
  <Text slot="description" />
  <Text slot="errorMessage" />
</TagGroup>
```

```
import {
  Button,
  Label,
  SelectionIndicator,
  Tag,
  TagGroup,
  TagList,
  Text
} from 'react-aria-components';

<TagGroup>
  <Label />
  <TagList>
    <Tag>
      <SelectionIndicator />
      <Button slot="remove" />
    </Tag>
  </TagList>
  <Text slot="description" />
  <Text slot="errorMessage" />
</TagGroup>
```

```
import {
  Button,
  Label,
  SelectionIndicator,
  Tag,
  TagGroup,
  TagList,
  Text
} from 'react-aria-components';

<TagGroup>
  <Label />
  <TagList>
    <Tag>
      <SelectionIndicator />
      <Button slot="remove" />
    </Tag>
  </TagList>
  <Text slot="description" />
  <Text slot="errorMessage" />
</TagGroup>
```

`TagGroup` makes use of the following concepts:

[

Collections

Defining collections of items, async loading, and updating items over time.

](https://react-spectrum.adobe.com/react-aria/collections.html)[

Selection

Interactions and data structures to represent selection.

](https://react-spectrum.adobe.com/react-aria/selection.html)

A `TagGroup` uses the following components, which may also be used standalone or reused in other components.

[

Label

A label provides context for an element.

](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label)[

Button

A button allows a user to perform an action.

](https://react-spectrum.adobe.com/react-aria/Button.html)

* * *

To help kick-start your project, we offer starter kits that include example implementations of all React Aria components with various styling solutions. All components are fully styled, including support for dark mode, high contrast mode, and all UI states. Each starter comes with a pre-configured [Storybook](https://storybook.js.org/) that you can experiment with, or use as a starting point for your own component library.

* * *

If you will use a TagGroup in multiple places in your app, you can wrap all of the pieces into a reusable component. This way, the DOM structure, styling code, and other logic are defined in a single place and reused everywhere to ensure consistency.

This example wraps `TagGroup` and all of its children together into a single component which accepts a `label` prop and `children`, which are passed through to the right places. It also shows how to use the `description` and `errorMessage` slots to render help text ([see below for details](#description)). The `Tag` component is also wrapped to automatically render a remove button when the `onRemove` prop is provided to the TagGroup.

```
import type {TagGroupProps, TagListProps, TagProps} from 'react-aria-components';
import {Button, Text} from 'react-aria-components';
import {X} from 'lucide-react';

interface MyTagGroupProps<T>
  extends
    Omit<TagGroupProps, 'children'>,
    Pick<TagListProps<T>, 'items' | 'children' | 'renderEmptyState'> {
  label?: string;
  description?: string;
  errorMessage?: string;
}

function MyTagGroup<T extends object>(
  {
    label,
    description,
    errorMessage,
    items,
    children,
    renderEmptyState,
    ...props
  }: MyTagGroupProps<T>
) {
  return (
    <TagGroup {...props}>
      <Label>{label}</Label>
      <TagList items={items} renderEmptyState={renderEmptyState}>
        {children}
      </TagList>
      {description && <Text slot="description">{description}</Text>}
      {errorMessage && <Text slot="errorMessage">{errorMessage}</Text>}
    </TagGroup>
  );
}

function MyTag(
  { children, ...props }: Omit<TagProps, 'children'> & {
    children?: React.ReactNode;
  }
) {
  let textValue = typeof children === 'string' ? children : undefined;
  return (
    <Tag textValue={textValue} {...props}>
      {({ allowsRemoving }) => (
        <>
          {children}
          {allowsRemoving && (
            <Button slot="remove">
              <X size={12} />
            </Button>
          )}
        </>
      )}
    </Tag>
  );
}

<MyTagGroup label="Ice cream flavor" selectionMode="single">
  <MyTag>Chocolate</MyTag>
  <MyTag>Mint</MyTag>
  <MyTag>Strawberry</MyTag>
  <MyTag>Vanilla</MyTag>
</MyTagGroup>
```

```
import type {
  TagGroupProps,
  TagListProps,
  TagProps
} from 'react-aria-components';
import {Button, Text} from 'react-aria-components';
import {X} from 'lucide-react';

interface MyTagGroupProps<T>
  extends
    Omit<TagGroupProps, 'children'>,
    Pick<
      TagListProps<T>,
      'items' | 'children' | 'renderEmptyState'
    > {
  label?: string;
  description?: string;
  errorMessage?: string;
}

function MyTagGroup<T extends object>(
  {
    label,
    description,
    errorMessage,
    items,
    children,
    renderEmptyState,
    ...props
  }: MyTagGroupProps<T>
) {
  return (
    <TagGroup {...props}>
      <Label>{label}</Label>
      <TagList
        items={items}
        renderEmptyState={renderEmptyState}
      >
        {children}
      </TagList>
      {description && (
        <Text slot="description">{description}</Text>
      )}
      {errorMessage && (
        <Text slot="errorMessage">{errorMessage}</Text>
      )}
    </TagGroup>
  );
}

function MyTag(
  { children, ...props }: Omit<TagProps, 'children'> & {
    children?: React.ReactNode;
  }
) {
  let textValue = typeof children === 'string'
    ? children
    : undefined;
  return (
    <Tag textValue={textValue} {...props}>
      {({ allowsRemoving }) => (
        <>
          {children}
          {allowsRemoving && (
            <Button slot="remove">
              <X size={12} />
            </Button>
          )}
        </>
      )}
    </Tag>
  );
}

<MyTagGroup
  label="Ice cream flavor"
  selectionMode="single"
>
  <MyTag>Chocolate</MyTag>
  <MyTag>Mint</MyTag>
  <MyTag>Strawberry</MyTag>
  <MyTag>Vanilla</MyTag>
</MyTagGroup>
```

```
import type {
  TagGroupProps,
  TagListProps,
  TagProps
} from 'react-aria-components';
import {
  Button,
  Text
} from 'react-aria-components';
import {X} from 'lucide-react';

interface MyTagGroupProps<
  T
> extends
  Omit<
    TagGroupProps,
    'children'
  >,
  Pick<
    TagListProps<T>,
    | 'items'
    | 'children'
    | 'renderEmptyState'
  > {
  label?: string;
  description?: string;
  errorMessage?: string;
}

function MyTagGroup<
  T extends object
>({
  label,
  description,
  errorMessage,
  items,
  children,
  renderEmptyState,
  ...props
}: MyTagGroupProps<T>) {
  return (
    <TagGroup {...props}>
      <Label>
        {label}
      </Label>
      <TagList
        items={items}
        renderEmptyState={renderEmptyState}
      >
        {children}
      </TagList>
      {description && (
        <Text slot="description">
          {description}
        </Text>
      )}
      {errorMessage && (
        <Text slot="errorMessage">
          {errorMessage}
        </Text>
      )}
    </TagGroup>
  );
}

function MyTag({
  children,
  ...props
}:
  & Omit<
    TagProps,
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
    <Tag
      textValue={textValue}
      {...props}
    >
      {(
        {
          allowsRemoving
        }
      ) => (
        <>
          {children}
          {allowsRemoving &&
            (
              <Button slot="remove">
                <X
                  size={12}
                />
              </Button>
            )}
        </>
      )}
    </Tag>
  );
}

<MyTagGroup
  label="Ice cream flavor"
  selectionMode="single"
>
  <MyTag>
    Chocolate
  </MyTag>
  <MyTag>Mint</MyTag>
  <MyTag>
    Strawberry
  </MyTag>
  <MyTag>
    Vanilla
  </MyTag>
</MyTagGroup>
```

* * *

The `onRemove` prop can be used to allow the user to remove tags. In the above example, an additional `<Button slot="remove>` element is rendered when a tag group allows removing. The user can also press the backspace key while a tag is focused to remove the tag from the group. Additionally, when [selection](#selection) is enabled, all selected items will be deleted when pressing the backspace key on a selected tag.

```
import {useListData} from 'react-stately';

function Example() {
  let list = useListData({
    initialItems: [
      { id: 1, name: 'News' },
      { id: 2, name: 'Travel' },
      { id: 3, name: 'Gaming' },
      { id: 4, name: 'Shopping' }
    ]
  });

  return (
    <MyTagGroup
      label="Categories"
      items={list.items}
      onRemove={(keys) => list.remove(...keys)}    >
      {(item) => <MyTag>{item.name}</MyTag>}
    </MyTagGroup>
  );
}
```

```
import {useListData} from 'react-stately';

function Example() {
  let list = useListData({
    initialItems: [
      { id: 1, name: 'News' },
      { id: 2, name: 'Travel' },
      { id: 3, name: 'Gaming' },
      { id: 4, name: 'Shopping' }
    ]
  });

  return (
    <MyTagGroup
      label="Categories"
      items={list.items}
      onRemove={(keys) => list.remove(...keys)}    >
      {(item) => <MyTag>{item.name}</MyTag>}
    </MyTagGroup>
  );
}
```

```
import {useListData} from 'react-stately';

function Example() {
  let list = useListData(
    {
      initialItems: [
        {
          id: 1,
          name: 'News'
        },
        {
          id: 2,
          name: 'Travel'
        },
        {
          id: 3,
          name: 'Gaming'
        },
        {
          id: 4,
          name:
            'Shopping'
        }
      ]
    }
  );

  return (
    <MyTagGroup
      label="Categories"
      items={list.items}
      onRemove={(keys) =>
        list.remove(
          ...keys
        )}    >
      {(item) => (
        <MyTag>
          {item.name}
        </MyTag>
      )}
    </MyTagGroup>
  );
}
```

Show CSS

```
.react-aria-Tag {
  [slot=remove] {
    background: none;
    border: 1px solid var(--border-color);
    padding: 0;
    margin-left: 4px;
    color: var(--text-color-base);
    transition: color 200ms;
    outline: none;
    font-size: 0.95em;
    border-radius: 100%;
    aspect-ratio: 1/1;
    height: calc(100% - 4px);
    display: flex;
    align-items: center;
    justify-content: center;

    &[data-hovered] {
      color: var(--text-color-hover);
    }

    &[data-focus-visible] {
      outline: 2px solid var(--focus-ring-color);
      outline-offset: -1px;
    }
  }

  &[data-selected] {
    [slot=remove] {
      color: inherit;
    }
  }
}
```

```
.react-aria-Tag {
  [slot=remove] {
    background: none;
    border: 1px solid var(--border-color);
    padding: 0;
    margin-left: 4px;
    color: var(--text-color-base);
    transition: color 200ms;
    outline: none;
    font-size: 0.95em;
    border-radius: 100%;
    aspect-ratio: 1/1;
    height: calc(100% - 4px);
    display: flex;
    align-items: center;
    justify-content: center;

    &[data-hovered] {
      color: var(--text-color-hover);
    }

    &[data-focus-visible] {
      outline: 2px solid var(--focus-ring-color);
      outline-offset: -1px;
    }
  }

  &[data-selected] {
    [slot=remove] {
      color: inherit;
    }
  }
}
```

```
.react-aria-Tag {
  [slot=remove] {
    background: none;
    border: 1px solid var(--border-color);
    padding: 0;
    margin-left: 4px;
    color: var(--text-color-base);
    transition: color 200ms;
    outline: none;
    font-size: 0.95em;
    border-radius: 100%;
    aspect-ratio: 1/1;
    height: calc(100% - 4px);
    display: flex;
    align-items: center;
    justify-content: center;

    &[data-hovered] {
      color: var(--text-color-hover);
    }

    &[data-focus-visible] {
      outline: 2px solid var(--focus-ring-color);
      outline-offset: -1px;
    }
  }

  &[data-selected] {
    [slot=remove] {
      color: inherit;
    }
  }
}
```

* * *

TagGroup supports multiple selection modes. By default, selection is disabled, however this can be changed using the `selectionMode` prop. Use `defaultSelectedKeys` to provide a default set of selected items (uncontrolled) and `selectedKeys` to set the selected items (controlled). The value of the selected keys must match the `id` prop of the items. See the [Selection](https://react-spectrum.adobe.com/react-aria/selection.html) guide for more details.

```
import type {Selection} from 'react-aria-components';

function Example() {
  let [selected, setSelected] = React.useState<Selection>(new Set(['parking']));

  return (
    <>
      <MyTagGroup
        label="Amenities"
        selectionMode="multiple"
        selectedKeys={selected}
        onSelectionChange={setSelected}      >
        <MyTag id="laundry">Laundry</MyTag>
        <MyTag id="fitness">Fitness center</MyTag>
        <MyTag id="parking">Parking</MyTag>
        <MyTag id="pool">Swimming pool</MyTag>
        <MyTag id="breakfast">Breakfast</MyTag>
      </MyTagGroup>
      <p>
        Current selection (controlled):{' '}
        {selected === 'all' ? 'all' : [...selected].join(', ')}
      </p>
    </>
  );
}
```

```
import type {Selection} from 'react-aria-components';

function Example() {
  let [selected, setSelected] = React.useState<Selection>(
    new Set(['parking'])
  );

  return (
    <>
      <MyTagGroup
        label="Amenities"
        selectionMode="multiple"
        selectedKeys={selected}
        onSelectionChange={setSelected}      >
        <MyTag id="laundry">Laundry</MyTag>
        <MyTag id="fitness">Fitness center</MyTag>
        <MyTag id="parking">Parking</MyTag>
        <MyTag id="pool">Swimming pool</MyTag>
        <MyTag id="breakfast">Breakfast</MyTag>
      </MyTagGroup>
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
import type {Selection} from 'react-aria-components';

function Example() {
  let [
    selected,
    setSelected
  ] = React.useState<
    Selection
  >(
    new Set(['parking'])
  );

  return (
    <>
      <MyTagGroup
        label="Amenities"
        selectionMode="multiple"
        selectedKeys={selected}
        onSelectionChange={setSelected}      >
        <MyTag id="laundry">
          Laundry
        </MyTag>
        <MyTag id="fitness">
          Fitness center
        </MyTag>
        <MyTag id="parking">
          Parking
        </MyTag>
        <MyTag id="pool">
          Swimming pool
        </MyTag>
        <MyTag id="breakfast">
          Breakfast
        </MyTag>
      </MyTagGroup>
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

* * *

Tags may be links to another page or website. This can be achieved by passing the `href` prop to the `<Tag>` component. Tags with an `href` are not selectable.

```
<MyTagGroup label="Links">
  <MyTag href="https://adobe.com/" target="_blank">Adobe</MyTag>
  <MyTag href="https://apple.com/" target="_blank">Apple</MyTag>
  <MyTag href="https://google.com/" target="_blank">Google</MyTag>
  <MyTag href="https://microsoft.com/" target="_blank">Microsoft</MyTag>
</MyTagGroup>
```

```
<MyTagGroup label="Links">
  <MyTag href="https://adobe.com/" target="_blank">
    Adobe
  </MyTag>
  <MyTag href="https://apple.com/" target="_blank">
    Apple
  </MyTag>
  <MyTag href="https://google.com/" target="_blank">
    Google
  </MyTag>
  <MyTag href="https://microsoft.com/" target="_blank">
    Microsoft
  </MyTag>
</MyTagGroup>
```

```
<MyTagGroup label="Links">
  <MyTag
    href="https://adobe.com/"
    target="_blank"
  >
    Adobe
  </MyTag>
  <MyTag
    href="https://apple.com/"
    target="_blank"
  >
    Apple
  </MyTag>
  <MyTag
    href="https://google.com/"
    target="_blank"
  >
    Google
  </MyTag>
  <MyTag
    href="https://microsoft.com/"
    target="_blank"
  >
    Microsoft
  </MyTag>
</MyTagGroup>
```

The `<Tag>` component works with frameworks and client side routers like [Next.js](https://nextjs.org/) and [React Router](https://reactrouter.com/en/main). As with other React Aria components that support links, this works via the `[RouterProvider](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/utils/src/openLink.tsx:RouterProvider)` component at the root of your app. See the [client side routing guide](https://react-spectrum.adobe.com/react-aria/routing.html) to learn how to set this up.

* * *

A `Tag` can be disabled with the `isDisabled` prop. Disabled tags are not focusable, selectable, or keyboard navigable.

```
<MyTagGroup
 label="Sandwich contents"
 selectionMode="multiple"
>
  <MyTag>Lettuce</MyTag>
  <MyTag>Tomato</MyTag>
  <MyTag>Cheese</MyTag>
  <MyTag isDisabled>Tuna Salad</MyTag>  <MyTag>Egg Salad</MyTag>
  <MyTag>Ham</MyTag>
</MyTagGroup>
```

```
<MyTagGroup
 label="Sandwich contents"
 selectionMode="multiple"
>
  <MyTag>Lettuce</MyTag>
  <MyTag>Tomato</MyTag>
  <MyTag>Cheese</MyTag>
  <MyTag isDisabled>Tuna Salad</MyTag>  <MyTag>Egg Salad</MyTag>
  <MyTag>Ham</MyTag>
</MyTagGroup>
```

```
<MyTagGroup
  label="Sandwich contents"
  selectionMode="multiple"
>
  <MyTag>
    Lettuce
  </MyTag>
  <MyTag>Tomato</MyTag>
  <MyTag>Cheese</MyTag>
  <MyTag isDisabled>
    Tuna Salad
  </MyTag>  <MyTag>
    Egg Salad
  </MyTag>
  <MyTag>Ham</MyTag>
</MyTagGroup>
```

Show CSS

```
.react-aria-TagList {
  .react-aria-Tag {
    &[data-disabled] {
      border-color: var(--border-color-disabled);
      color: var(--text-color-disabled);
    }
  }
}
```

```
.react-aria-TagList {
  .react-aria-Tag {
    &[data-disabled] {
      border-color: var(--border-color-disabled);
      color: var(--text-color-disabled);
    }
  }
}
```

```
.react-aria-TagList {
  .react-aria-Tag {
    &[data-disabled] {
      border-color: var(--border-color-disabled);
      color: var(--text-color-disabled);
    }
  }
}
```

In dynamic collections, it may be more convenient to use the `disabledKeys` prop at the `TagGroup` level instead of `isDisabled` on individual tags. Each key in this list corresponds with the `id` prop passed to the `Tag` component, or automatically derived from the values passed to the `items` prop (see the [Collections](https://react-spectrum.adobe.com/react-aria/collections.html) for more details). A tag is considered disabled if its id exists in `disabledKeys` or if it has `isDisabled`.

```
function Example() {
  let options = [
    { id: 1, name: "News" },
    { id: 2, name: "Travel" },
    { id: 3, name: "Gaming" },
    { id: 4, name: "Shopping" }
  ];

  return (
    <MyTagGroup
      label="Categories"
      items={options}
      selectionMode="multiple"
      disabledKeys={[2, 4]}    >
      {(item) => <MyTag>{item.name}</MyTag>}
    </MyTagGroup>
  );
}
```

```
function Example() {
  let options = [
    { id: 1, name: "News" },
    { id: 2, name: "Travel" },
    { id: 3, name: "Gaming" },
    { id: 4, name: "Shopping" }
  ];

  return (
    <MyTagGroup
      label="Categories"
      items={options}
      selectionMode="multiple"
      disabledKeys={[2, 4]}    >
      {(item) => <MyTag>{item.name}</MyTag>}
    </MyTagGroup>
  );
}
```

```
function Example() {
  let options = [
    {
      id: 1,
      name: 'News'
    },
    {
      id: 2,
      name: 'Travel'
    },
    {
      id: 3,
      name: 'Gaming'
    },
    {
      id: 4,
      name: 'Shopping'
    }
  ];

  return (
    <MyTagGroup
      label="Categories"
      items={options}
      selectionMode="multiple"
      disabledKeys={[
        2,
        4
      ]}    >
      {(item) => (
        <MyTag>
          {item.name}
        </MyTag>
      )}
    </MyTagGroup>
  );
}
```

* * *

Use the `renderEmptyState` prop to customize what a `TagList` will display if there are no items.

```
<TagGroup>
  <Label>Categories</Label>
  <TagList renderEmptyState={() => 'No categories.'}>    {[]}
  </TagList>
</TagGroup>
```

```
<TagGroup>
  <Label>Categories</Label>
  <TagList renderEmptyState={() => 'No categories.'}>    {[]}
  </TagList>
</TagGroup>
```

```
<TagGroup>
  <Label>
    Categories
  </Label>
  <TagList
    renderEmptyState={() =>
      'No categories.'}
  >    {[]}
  </TagList>
</TagGroup>
```

* * *

The `description` slot can be used to associate additional help text with a `TagGroup`.

```
<TagGroup>
  <Label>Categories</Label>
  <TagList>
    <Tag>News</Tag>
    <Tag>Travel</Tag>
    <Tag>Gaming</Tag>
    <Tag>Shopping</Tag>
  </TagList>
  <Text slot="description">Your selected categories.</Text></TagGroup>
```

```
<TagGroup>
  <Label>Categories</Label>
  <TagList>
    <Tag>News</Tag>
    <Tag>Travel</Tag>
    <Tag>Gaming</Tag>
    <Tag>Shopping</Tag>
  </TagList>
  <Text slot="description">Your selected categories.</Text></TagGroup>
```

```
<TagGroup>
  <Label>
    Categories
  </Label>
  <TagList>
    <Tag>News</Tag>
    <Tag>Travel</Tag>
    <Tag>Gaming</Tag>
    <Tag>Shopping</Tag>
  </TagList>
  <Text slot="description">
    Your selected
    categories.
  </Text></TagGroup>
```

Show CSS

```
.react-aria-TagGroup {
  [slot=description] {
    font-size: 12px;
  }

  [slot=errorMessage] {
    font-size: 12px;
    color: var(--invalid-color);
  }
}
```

```
.react-aria-TagGroup {
  [slot=description] {
    font-size: 12px;
  }

  [slot=errorMessage] {
    font-size: 12px;
    color: var(--invalid-color);
  }
}
```

```
.react-aria-TagGroup {
  [slot=description] {
    font-size: 12px;
  }

  [slot=errorMessage] {
    font-size: 12px;
    color: var(--invalid-color);
  }
}
```

The `errorMessage` slot can be used to help the user fix a validation error.

```
<TagGroup>
  <Label>Categories</Label>
  <TagList>
    <Tag>News</Tag>
    <Tag>Travel</Tag>
    <Tag>Gaming</Tag>
    <Tag>Shopping</Tag>
  </TagList>
  <Text slot="errorMessage">Invalid set of categories.</Text></TagGroup>
```

```
<TagGroup>
  <Label>Categories</Label>
  <TagList>
    <Tag>News</Tag>
    <Tag>Travel</Tag>
    <Tag>Gaming</Tag>
    <Tag>Shopping</Tag>
  </TagList>
  <Text slot="errorMessage">
    Invalid set of categories.
  </Text></TagGroup>
```

```
<TagGroup>
  <Label>
    Categories
  </Label>
  <TagList>
    <Tag>News</Tag>
    <Tag>Travel</Tag>
    <Tag>Gaming</Tag>
    <Tag>Shopping</Tag>
  </TagList>
  <Text slot="errorMessage">
    Invalid set of
    categories.
  </Text></TagGroup>
```

* * *

Name

Type

Default

Description

`selectionBehavior`

`[SelectionBehavior](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/selection.d.ts:SelectionBehavior)`

—

How multiple selection should behave in the collection.

`shouldSelectOnPressUp`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether selection should occur on press up instead of press down.

`escapeKeyBehavior`

`'clearSelection' | 'none'`

`'clearSelection'`

Whether pressing the escape key should clear selection in the TagGroup or not.

Most experiences should not modify this option as it eliminates a keyboard user's ability to easily clear selection. Only use if the escape key is being handled externally or should not trigger selection clearing contextually.

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

`[ReactNode](https://reactjs.org/docs/rendering-elements.html)`

—

The children of the component.

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

`onRemove`

`( (keys: [Set](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Set)<[Key](https://reactjs.org/docs/lists-and-keys.html)> )) => void`

Handler that is called when a user deletes a tag.

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

A `<TagList>` is a list of tags within a `<TagGroup>`.

Name

Type

Description

`renderEmptyState`

`( (props: [TagListRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/TagGroup.tsx:TagListRenderProps) )) => [ReactNode](https://reactjs.org/docs/rendering-elements.html)`

Provides content to display when there are no items in the tag list.

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

`[ClassNameOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ClassNameOrFunction)<[TagListRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/TagGroup.tsx:TagListRenderProps)>`

The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.

`style`

`[StyleOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:StyleOrFunction)<[TagListRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/TagGroup.tsx:TagListRenderProps)>`

The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.

EventsPositioning

A `<Tag>` defines a single item within a `<TagList>`. If the children are not plain text, then the `textValue` prop must also be set to a plain text representation for accessibility.

Name

Type

Description

`id`

`[Key](https://reactjs.org/docs/lists-and-keys.html)`

A unique id for the tag.

`textValue`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

A string representation of the tags's contents, used for accessibility. Required if children is not a plain text string.

`isDisabled`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether the tag is disabled.

`children`

`[ChildrenOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ChildrenOrFunction)<[TagRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/TagGroup.tsx:TagRenderProps)>`

The children of the component. A function may be provided to alter the children based on component state.

`className`

`[ClassNameOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ClassNameOrFunction)<[TagRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/TagGroup.tsx:TagRenderProps)>`

The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.

`style`

`[StyleOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:StyleOrFunction)<[TagRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/TagGroup.tsx:TagRenderProps)>`

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

A `<Label>` accepts all HTML attributes.

`<Text>` accepts all HTML attributes.

* * *

React Aria components can be styled in many ways, including using CSS classes, inline styles, utility classes (e.g. Tailwind), CSS-in-JS (e.g. Styled Components), etc. By default, all components include a builtin `className` attribute which can be targeted using CSS selectors. These follow the `react-aria-ComponentName` naming convention.

```
.react-aria-TagGroup {
  /* ... */
}
```

```
.react-aria-TagGroup {
  /* ... */
}
```

```
.react-aria-TagGroup {
  /* ... */
}
```

A custom `className` can also be specified on any component. This overrides the default `className` provided by React Aria with your own.

```
<TagGroup className="my-tag-group">
  {/* ... */}
</TagGroup>
```

```
<TagGroup className="my-tag-group">
  {/* ... */}
</TagGroup>
```

```
<TagGroup className="my-tag-group">
  {/* ... */}
</TagGroup>
```

In addition, some components support multiple UI states (e.g. pressed, hovered, etc.). React Aria components expose states using data attributes, which you can target in CSS selectors. For example:

```
.react-aria-Tag[data-selected] {
  /* ... */
}

.react-aria-Tag[data-focused] {
  /* ... */
}
```

```
.react-aria-Tag[data-selected] {
  /* ... */
}

.react-aria-Tag[data-focused] {
  /* ... */
}
```

```
.react-aria-Tag[data-selected] {
  /* ... */
}

.react-aria-Tag[data-focused] {
  /* ... */
}
```

The `className` and `style` props also accept functions which receive states for styling. This lets you dynamically determine the classes or styles to apply, which is useful when using utility CSS libraries like [Tailwind](https://tailwindcss.com/).

```
<Tag
  className={({ isSelected }) => isSelected ? 'bg-blue-400' : 'bg-gray-100'}
>
  Item
</Tag>
```

```
<Tag
  className={({ isSelected }) =>
    isSelected ? 'bg-blue-400' : 'bg-gray-100'}
>
  Item
</Tag>
```

```
<Tag
  className={(
    { isSelected }
  ) =>
    isSelected
      ? 'bg-blue-400'
      : 'bg-gray-100'}
>
  Item
</Tag>
```

Render props may also be used as children to alter what elements are rendered based on the current state. For example, you could render a remove button only when removal is allowed.

```
<Tag>
  {({allowsRemoving}) => (
    <>
      Item
      {allowsRemoving && <RemoveButton />}
    </>
  )}
</Tag>
```

```
<Tag>
  {({allowsRemoving}) => (
    <>
      Item
      {allowsRemoving && <RemoveButton />}
    </>
  )}
</Tag>
```

```
<Tag>
  {(
    { allowsRemoving }
  ) => (
    <>
      Item
      {allowsRemoving &&
        (
          <RemoveButton />
        )}
    </>
  )}
</Tag>
```

The states and selectors for each component used in a `TagGroup` are documented below.

A `TagGroup` can be targeted with the `.react-aria-TagGroup` CSS selector, or by overriding with a custom `className`.

A `TagList` can be targeted with the `.react-aria-TagList` CSS selector, or by overriding with a custom `className`. It supports the following states and render props:

Name

CSS Selector

Description

`isEmpty`

`[data-empty]`

Whether the tag list has no items and should display its empty state.

`isFocused`

`[data-focused]`

Whether the tag list is currently focused.

`isFocusVisible`

`[data-focus-visible]`

Whether the tag list is currently keyboard focused.

`state`

`—`

State of the TagGroup.

A `Tag` can be targeted with the `.react-aria-Tag` CSS selector, or by overriding with a custom `className`. It supports the following states and render props:

Name

CSS Selector

Description

`allowsRemoving`

`[data-allows-removing]`

Whether the tag group allows items to be removed.

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

Tags also accept a `<Button slot="remove">` element as a child, which allows them to be removed. This can be conditionally rendered using the `allowsRemoving` render prop, as shown below.

A `Label` can be targeted with the `.react-aria-Label` CSS selector, or by overriding with a custom `className`.

The help text elements within a `TagGroup` can be targeted with the `[slot=description]` and `[slot=errorMessage]` CSS selectors, or by adding a custom `className`.

* * *

If you need to customize one of the components within a `TagGroup`, such as `TagList` or `Tag`, in many cases you can create a wrapper component. This lets you customize the props passed to the component.

```
function MyTag(props) {
  return <Tag {...props} className="my-tag" />
}
```

```
function MyTag(props) {
  return <Tag {...props} className="my-tag" />
}
```

```
function MyTag(props) {
  return (
    <Tag
      {...props}
      className="my-tag"
    />
  );
}
```

All React Aria Components export a corresponding context that can be used to send props to them from a parent element. This enables you to build your own compositional APIs similar to those found in React Aria Components itself. You can send any prop or ref via context that you could pass to the corresponding component. The local props and ref on the component are merged with the ones passed via context, with the local props taking precedence (following the rules documented in [mergeProps](https://react-spectrum.adobe.com/react-aria/mergeProps.html)).

Component

Context

Props

Ref

`TagGroup`

`TagGroupContext`

`[TagGroupProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/TagGroup.tsx:TagGroupProps)`

`[HTMLDivElement](https://developer.mozilla.org/docs/Web/API/HTMLDivElement)`

This example shows a component that accepts a `TagGroup` and a [ToggleButton](https://react-spectrum.adobe.com/react-aria/ToggleButton.html) as children, and allows the user to turn edit mode for the tag group on and off by pressing the button.

```
import {ToggleButtonContext, TagGroupContext} from 'react-aria-components';

function Removable({children, onRemove}) {
  let [isSelected, onChange] = React.useState(false);
  return (
    <ToggleButtonContext.Provider value={{isSelected, onChange}}>
      <TagGroupContext.Provider value={{onRemove: isSelected && onRemove}}>        {children}
      </TagGroupContext.Provider>
    </ToggleButtonContext.Provider>
  );
}
```

```
import {
  TagGroupContext,
  ToggleButtonContext
} from 'react-aria-components';

function Removable({ children, onRemove }) {
  let [isSelected, onChange] = React.useState(false);
  return (
    <ToggleButtonContext.Provider
      value={{ isSelected, onChange }}
    >
      <TagGroupContext.Provider
        value={{ onRemove: isSelected && onRemove }}
      >        {children}
      </TagGroupContext.Provider>
    </ToggleButtonContext.Provider>
  );
}
```

```
import {
  TagGroupContext,
  ToggleButtonContext
} from 'react-aria-components';

function Removable(
  { children, onRemove }
) {
  let [
    isSelected,
    onChange
  ] = React.useState(
    false
  );
  return (
    <ToggleButtonContext.Provider
      value={{
        isSelected,
        onChange
      }}
    >
      <TagGroupContext.Provider
        value={{
          onRemove:
            isSelected &&
            onRemove
        }}
      >        {children}
      </TagGroupContext.Provider>
    </ToggleButtonContext.Provider>
  );
}
```

The `Removable` component can be reused to make the edit mode of any nested `TagGroup` controlled by a `ToggleButton`.

```
import {ToggleButton} from 'react-aria-components';

<Removable onRemove={ids => alert(`Remove ${[...ids]}`)}>
  <MyTagGroup label="Ice cream flavor">
    <MyTag id="chocolate">Chocolate</MyTag>
    <MyTag id="mint">Mint</MyTag>
    <MyTag id="strawberry">Strawberry</MyTag>
    <MyTag id="vanilla">Vanilla</MyTag>
  </MyTagGroup>
  <ToggleButton style={{marginTop: '8px'}}>Edit</ToggleButton>
</Removable>
```

```
import {ToggleButton} from 'react-aria-components';

<Removable
  onRemove={(ids) => alert(`Remove ${[...ids]}`)}
>
  <MyTagGroup label="Ice cream flavor">
    <MyTag id="chocolate">Chocolate</MyTag>
    <MyTag id="mint">Mint</MyTag>
    <MyTag id="strawberry">Strawberry</MyTag>
    <MyTag id="vanilla">Vanilla</MyTag>
  </MyTagGroup>
  <ToggleButton style={{ marginTop: '8px' }}>
    Edit
  </ToggleButton>
</Removable>
```

```
import {ToggleButton} from 'react-aria-components';

<Removable
  onRemove={(ids) =>
    alert(
      `Remove ${[
        ...ids
      ]}`
    )}
>
  <MyTagGroup label="Ice cream flavor">
    <MyTag id="chocolate">
      Chocolate
    </MyTag>
    <MyTag id="mint">
      Mint
    </MyTag>
    <MyTag id="strawberry">
      Strawberry
    </MyTag>
    <MyTag id="vanilla">
      Vanilla
    </MyTag>
  </MyTagGroup>
  <ToggleButton
    style={{
      marginTop: '8px'
    }}
  >
    Edit
  </ToggleButton>
</Removable>
```

TagGroup passes props to its child components, such as the label, via their associated contexts. These contexts are exported so you can also consume them in your own custom components. This enables you to reuse existing components from your app or component library together with React Aria Components.

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

`Text`

`TextContext`

`[TextProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Text.tsx:TextProps)`

`[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)`

This example consumes from `LabelContext` in an existing styled label component to make it compatible with React Aria Components. The `[useContextProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:useContextProps)` hook merges the local props and ref with the ones provided via context by TagGroup.

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

Now you can use `MyCustomLabel` within a `TagGroup`, in place of the builtin React Aria Components `Label`.

```
<TagGroup>
  <MyCustomLabel>Name</MyCustomLabel>  {/* ... */}
</TagGroup>
```

```
<TagGroup>
  <MyCustomLabel>Name</MyCustomLabel>  {/* ... */}
</TagGroup>
```

```
<TagGroup>
  <MyCustomLabel>
    Name
  </MyCustomLabel>  {/* ... */}
</TagGroup>
```

TagGroup provides a `[ListState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/list/src/useListState.ts:ListState)` object to its children via `ListStateContext`. This can be used to access and manipulate the TagGroup's state.

This example shows a `SelectionCount` component that can be placed within a `TagGroup` to display the number of selected tags.

```
import {ListStateContext} from 'react-aria-components';

function SelectionCount() {
  let state = React.useContext(ListStateContext);  let selected = state?.selectionManager.selectedKeys.size ?? 0;
  return <small>{selected} tags selected.</small>;
}

<TagGroup selectionMode="multiple">
  <Label>Tags</Label>
  <TagList>
    <Tag>News</Tag>
    <Tag>Travel</Tag>
    <Tag>Gaming</Tag>
    <Tag>Shopping</Tag>
  </TagList>
  <SelectionCount />
</TagGroup>
```

```
import {ListStateContext} from 'react-aria-components';

function SelectionCount() {
  let state = React.useContext(ListStateContext);  let selected =
    state?.selectionManager.selectedKeys.size ?? 0;
  return <small>{selected} tags selected.</small>;
}

<TagGroup selectionMode="multiple">
  <Label>Tags</Label>
  <TagList>
    <Tag>News</Tag>
    <Tag>Travel</Tag>
    <Tag>Gaming</Tag>
    <Tag>Shopping</Tag>
  </TagList>
  <SelectionCount />
</TagGroup>
```

```
import {ListStateContext} from 'react-aria-components';

function SelectionCount() {
  let state = React
    .useContext(
      ListStateContext
    );  let selected =
    state
      ?.selectionManager
      .selectedKeys
      .size ?? 0;
  return (
    <small>
      {selected}{' '}
      tags selected.
    </small>
  );
}

<TagGroup selectionMode="multiple">
  <Label>Tags</Label>
  <TagList>
    <Tag>News</Tag>
    <Tag>Travel</Tag>
    <Tag>Gaming</Tag>
    <Tag>Shopping</Tag>
  </TagList>
  <SelectionCount />
</TagGroup>
```

If you need to customize things even further, such as accessing internal state, intercepting events, or customizing DOM structure, you can drop down to the lower level Hook-based API. See [useTagGroup](https://react-spectrum.adobe.com/react-aria/useTagGroup.html) for more details.