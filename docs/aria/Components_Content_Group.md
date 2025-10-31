# Group

**Source**: [https://react-spectrum.adobe.com/react-aria/Group.html](https://react-spectrum.adobe.com/react-aria/Group.html)

> Documentation for Group in the React Aria package.

---

A group represents a set of related UI controls, and supports interactive states for styling.

* * *

```
import {TextField, Label, Group, Input, Button} from 'react-aria-components';
import {Plus} from 'lucide-react';

<TextField>
  <Label>Email</Label>
  <Group>
    <Input />
    <Button aria-label="Add email"><Plus size={16} /></Button>
  </Group>
</TextField>
```

```
import {
  Button,
  Group,
  Input,
  Label,
  TextField
} from 'react-aria-components';
import {Plus} from 'lucide-react';

<TextField>
  <Label>Email</Label>
  <Group>
    <Input />
    <Button aria-label="Add email">
      <Plus size={16} />
    </Button>
  </Group>
</TextField>
```

```
import {
  Button,
  Group,
  Input,
  Label,
  TextField
} from 'react-aria-components';
import {Plus} from 'lucide-react';

<TextField>
  <Label>Email</Label>
  <Group>
    <Input />
    <Button aria-label="Add email">
      <Plus
        size={16}
      />
    </Button>
  </Group>
</TextField>
```

Show CSS

```
@import "@react-aria/example-theme";

.react-aria-Group {
  display: flex;
  align-items: center;
  width: fit-content;
  border-radius: 6px;
  border: 1px solid var(--border-color);
  background: var(--field-background);
  overflow: hidden;
  transition: all 200ms;

  &[data-hovered] {
    border-color: var(--border-color-hover);
  }

  &[data-focus-within] {
    outline: 2px solid var(--focus-ring-color);
    outline-offset: -1px;
  }

  .react-aria-Input {
    padding: 0.286rem;
    margin: 0;
    font-size: 1rem;
    color: var(--text-color);
    outline: none;
    border: none;
    background: transparent;

    &::placeholder {
      color: var(--text-color-placeholder);
      opacity: 1;
    }
  }

  .react-aria-Button {
    padding: 0 6px;
    border-width: 0 0 0 1px;
    border-radius: 0 6px 6px 0;
    align-self: stretch;
    font-size: 1.5rem;
    &[data-focus-visible] {
      border-color: var(--focus-ring-color);
      outline-width: 1px;
      outline-offset: 0;
    }
  }
}
```

```
@import "@react-aria/example-theme";

.react-aria-Group {
  display: flex;
  align-items: center;
  width: fit-content;
  border-radius: 6px;
  border: 1px solid var(--border-color);
  background: var(--field-background);
  overflow: hidden;
  transition: all 200ms;

  &[data-hovered] {
    border-color: var(--border-color-hover);
  }

  &[data-focus-within] {
    outline: 2px solid var(--focus-ring-color);
    outline-offset: -1px;
  }

  .react-aria-Input {
    padding: 0.286rem;
    margin: 0;
    font-size: 1rem;
    color: var(--text-color);
    outline: none;
    border: none;
    background: transparent;

    &::placeholder {
      color: var(--text-color-placeholder);
      opacity: 1;
    }
  }

  .react-aria-Button {
    padding: 0 6px;
    border-width: 0 0 0 1px;
    border-radius: 0 6px 6px 0;
    align-self: stretch;
    font-size: 1.5rem;
    &[data-focus-visible] {
      border-color: var(--focus-ring-color);
      outline-width: 1px;
      outline-offset: 0;
    }
  }
}
```

```
@import "@react-aria/example-theme";

.react-aria-Group {
  display: flex;
  align-items: center;
  width: fit-content;
  border-radius: 6px;
  border: 1px solid var(--border-color);
  background: var(--field-background);
  overflow: hidden;
  transition: all 200ms;

  &[data-hovered] {
    border-color: var(--border-color-hover);
  }

  &[data-focus-within] {
    outline: 2px solid var(--focus-ring-color);
    outline-offset: -1px;
  }

  .react-aria-Input {
    padding: 0.286rem;
    margin: 0;
    font-size: 1rem;
    color: var(--text-color);
    outline: none;
    border: none;
    background: transparent;

    &::placeholder {
      color: var(--text-color-placeholder);
      opacity: 1;
    }
  }

  .react-aria-Button {
    padding: 0 6px;
    border-width: 0 0 0 1px;
    border-radius: 0 6px 6px 0;
    align-self: stretch;
    font-size: 1.5rem;
    &[data-focus-visible] {
      border-color: var(--focus-ring-color);
      outline-width: 1px;
      outline-offset: 0;
    }
  }
}
```

* * *

A group can be created with a `<div role="group">` or via the HTML [<fieldset>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset) element. The `Group` component supports additional UI states, and can be used standalone or as part of a larger pattern such as [NumberField](https://react-spectrum.adobe.com/react-aria/NumberField.html) or [DatePicker](https://react-spectrum.adobe.com/react-aria/DatePicker.html).

-   **Styleable** – Hover, keyboard focus, disabled, and invalid states are provided for easy styling. These states only apply when interacting with an appropriate input device, unlike CSS pseudo classes.
-   **Accessible** – Implemented using the ARIA "group" role by default, with optional support for the "region" landmark role.

* * *

A group consists of a container element for a set of semantically related UI controls. It supports states such as hover, focus within, and disabled, which are useful to style visually adjoined children.

```
import {Group} from 'react-aria-components';

<Group>
  {/* ... */}
</Group>
```

```
import {Group} from 'react-aria-components';

<Group>
  {/* ... */}
</Group>
```

```
import {Group} from 'react-aria-components';

<Group>
  {/* ... */}
</Group>
```

* * *

Group accepts the `aria-label` and `aria-labelledby` attributes to provide an accessible label to the group as a whole. This is read by assistive technology when navigating into the group from outside. When the labels of each child element of the group do not provide sufficient context on their own, the group should receive an additional label.

```
<span id="label-id">Serial number</span>
<Group aria-labelledby="label-id">
  <Input size={3} aria-label="First 3 digits" placeholder="000" />
  –
  <Input size={2} aria-label="Middle 2 digits" placeholder="00" />
  –
  <Input size={4} aria-label="Last 4 digits" placeholder="0000" />
</Group>
```

```
<span id="label-id">Serial number</span>
<Group aria-labelledby="label-id">
  <Input
    size={3}
    aria-label="First 3 digits"
    placeholder="000"
  />
  –
  <Input
    size={2}
    aria-label="Middle 2 digits"
    placeholder="00"
  />
  –
  <Input
    size={4}
    aria-label="Last 4 digits"
    placeholder="0000"
  />
</Group>
```

```
<span id="label-id">
  Serial number
</span>
<Group aria-labelledby="label-id">
  <Input
    size={3}
    aria-label="First 3 digits"
    placeholder="000"
  />
  –
  <Input
    size={2}
    aria-label="Middle 2 digits"
    placeholder="00"
  />
  –
  <Input
    size={4}
    aria-label="Last 4 digits"
    placeholder="0000"
  />
</Group>
```

By default, `Group` uses the [group](https://w3c.github.io/aria/#group) ARIA role. If the contents of the group is important enough to be included in the page table of contents, use `role="region"` instead, and ensure that an `aria-label` or `aria-labelledby` prop is assigned.

```
<Group role="region" aria-label="Object details">
  {/* ... */}
</Group>
```

```
<Group role="region" aria-label="Object details">
  {/* ... */}
</Group>
```

```
<Group
  role="region"
  aria-label="Object details"
>
  {/* ... */}
</Group>
```

If the `Group` component is used for styling purposes only, and does not include a set of related UI controls, then use `role="presentation"` instead.

* * *

Name

Type

Description

`isDisabled`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether the group is disabled.

`isInvalid`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether the group is invalid.

`isReadOnly`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether the group is read only.

`children`

`[ChildrenOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ChildrenOrFunction)<[GroupRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Group.tsx:GroupRenderProps)>`

The children of the component. A function may be provided to alter the children based on component state.

`className`

`[ClassNameOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ClassNameOrFunction)<[GroupRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Group.tsx:GroupRenderProps)>`

The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.

`style`

`[StyleOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:StyleOrFunction)<[GroupRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Group.tsx:GroupRenderProps)>`

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

Layout

Name

Type

Description

`slot`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)`

A slot name for the component. Slots allow the component to receive props from a parent component. An explicit `null` value indicates that the local props completely override all props received from a parent.

Accessibility

Name

Type

Default

Description

`role`

`'group' | 'region' | 'presentation'`

`'group'`

An accessibility role for the group. By default, this is set to `'group'`. Use `'region'` when the contents of the group is important enough to be included in the page table of contents. Use `'presentation'` if the group is visual only and does not represent a semantic grouping of controls.

`id`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

The element's unique identifier. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id).

`aria-label`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

Defines a string value that labels the current element.

`aria-labelledby`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

Identifies the element (or elements) that labels the current element.

`aria-describedby`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

Identifies the element (or elements) that describes the object.

`aria-details`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

Identifies the element (or elements) that provide a detailed, extended description for the object.

* * *

React Aria components can be styled in many ways, including using CSS classes, inline styles, utility classes (e.g. Tailwind), CSS-in-JS (e.g. Styled Components), etc. By default, all components include a builtin `className` attribute which can be targeted using CSS selectors. These follow the `react-aria-ComponentName` naming convention.

```
.react-aria-Group {
  /* ... */
}
```

```
.react-aria-Group {
  /* ... */
}
```

```
.react-aria-Group {
  /* ... */
}
```

A custom `className` can also be specified on any component. This overrides the default `className` provided by React Aria with your own.

```
<Group className="my-group">
  {/* ... */}
</Group>
```

```
<Group className="my-group">
  {/* ... */}
</Group>
```

```
<Group className="my-group">
  {/* ... */}
</Group>
```

In addition, some components support multiple UI states (e.g. focused, placeholder, readonly, etc.). React Aria components expose states using data attributes, which you can target in CSS selectors. For example:

```
.react-aria-Group[data-hovered] {
  /* ... */
}

.react-aria-Group[data-focus-visible] {
  /* ... */
}
```

```
.react-aria-Group[data-hovered] {
  /* ... */
}

.react-aria-Group[data-focus-visible] {
  /* ... */
}
```

```
.react-aria-Group[data-hovered] {
  /* ... */
}

.react-aria-Group[data-focus-visible] {
  /* ... */
}
```

The states, selectors, and render props for `Group` are documented below.

Name

CSS Selector

Description

`isHovered`

`[data-hovered]`

Whether the group is currently hovered with a mouse.

`isFocusWithin`

`[data-focus-within]`

Whether an element within the group is focused, either via a mouse or keyboard.

`isFocusVisible`

`[data-focus-visible]`

Whether an element within the group is keyboard focused.

`isDisabled`

`[data-disabled]`

Whether the group is disabled.

`isInvalid`

`[data-invalid]`

Whether the group is invalid.

* * *

All React Aria Components export a corresponding context that can be used to send props to them from a parent element. This enables you to build your own compositional APIs similar to those found in React Aria Components itself. You can send any prop or ref via context that you could pass to the corresponding component. The local props and ref on the component are merged with the ones passed via context, with the local props taking precedence (following the rules documented in [mergeProps](https://react-spectrum.adobe.com/react-aria/mergeProps.html)).

Component

Context

Props

Ref

`Group`

`GroupContext`

`[GroupProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Group.tsx:GroupProps)`

`[HTMLDivElement](https://developer.mozilla.org/docs/Web/API/HTMLDivElement)`

This example shows a `LabeledGroup` component that accepts a label and a group as children. It uses the [useId](https://react-spectrum.adobe.com/react-aria/useId.html) hook to generate a unique id for the label, and provides this to the group via the `aria-labelledby` prop.

```
import {LabelContext, GroupContext} from 'react-aria-components';
import {useId} from 'react-aria';

function LabeledGroup({children}) {
  let labelId = useId();

  return (
    <LabelContext.Provider value={{id: labelId, elementType: 'span'}}>
      <GroupContext.Provider value={{'aria-labelledby': labelId}}>
        {children}
      </GroupContext.Provider>
    </LabelContext.Provider>
  );
}

<LabeledGroup>
  <Label>Expiration date</Label>
  <Group>
    <Input size={3} aria-label="Month" placeholder="mm" />
    /
    <Input size={4} aria-label="Year" placeholder="yyyy" />
  </Group>
</LabeledGroup>
```

```
import {
  GroupContext,
  LabelContext
} from 'react-aria-components';
import {useId} from 'react-aria';

function LabeledGroup({ children }) {
  let labelId = useId();

  return (
    <LabelContext.Provider
      value={{ id: labelId, elementType: 'span' }}
    >
      <GroupContext.Provider
        value={{ 'aria-labelledby': labelId }}
      >
        {children}
      </GroupContext.Provider>
    </LabelContext.Provider>
  );
}

<LabeledGroup>
  <Label>Expiration date</Label>
  <Group>
    <Input size={3} aria-label="Month" placeholder="mm" />
    /
    <Input
      size={4}
      aria-label="Year"
      placeholder="yyyy"
    />
  </Group>
</LabeledGroup>
```

```
import {
  GroupContext,
  LabelContext
} from 'react-aria-components';
import {useId} from 'react-aria';

function LabeledGroup(
  { children }
) {
  let labelId = useId();

  return (
    <LabelContext.Provider
      value={{
        id: labelId,
        elementType:
          'span'
      }}
    >
      <GroupContext.Provider
        value={{
          'aria-labelledby':
            labelId
        }}
      >
        {children}
      </GroupContext.Provider>
    </LabelContext.Provider>
  );
}

<LabeledGroup>
  <Label>
    Expiration date
  </Label>
  <Group>
    <Input
      size={3}
      aria-label="Month"
      placeholder="mm"
    />
    /
    <Input
      size={4}
      aria-label="Year"
      placeholder="yyyy"
    />
  </Group>
</LabeledGroup>
```