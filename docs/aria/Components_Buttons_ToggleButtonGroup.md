# ToggleButtonGroup

**Source**: [https://react-spectrum.adobe.com/react-aria/ToggleButtonGroup.html](https://react-spectrum.adobe.com/react-aria/ToggleButtonGroup.html)

> Documentation for ToggleButtonGroup in the React Aria package.

---

A toggle button group allows a user to toggle multiple options, with single or multiple selection.

* * *

```
import {ToggleButtonGroup, ToggleButton} from 'react-aria-components';

<ToggleButtonGroup>
  <ToggleButton id="left">Left</ToggleButton>
  <ToggleButton id="center">Center</ToggleButton>
  <ToggleButton id="right">Right</ToggleButton>
</ToggleButtonGroup>
```

```
import {
  ToggleButton,
  ToggleButtonGroup
} from 'react-aria-components';

<ToggleButtonGroup>
  <ToggleButton id="left">Left</ToggleButton>
  <ToggleButton id="center">Center</ToggleButton>
  <ToggleButton id="right">Right</ToggleButton>
</ToggleButtonGroup>
```

```
import {
  ToggleButton,
  ToggleButtonGroup
} from 'react-aria-components';

<ToggleButtonGroup>
  <ToggleButton id="left">
    Left
  </ToggleButton>
  <ToggleButton id="center">
    Center
  </ToggleButton>
  <ToggleButton id="right">
    Right
  </ToggleButton>
</ToggleButtonGroup>
```

Show CSS

```
.react-aria-ToggleButtonGroup {
  display: flex;

  > button {
    border-radius: 0;
    z-index: 1;

    &[data-disabled] {
      z-index: 0;
    }

    &[data-selected],
    &[data-focus-visible] {
      z-index: 2;
    }
  }
}

.react-aria-ToggleButtonGroup[data-orientation=horizontal] {
  flex-direction: row;

  > button {
    margin-inline-start: -1px;
    
    &:first-child {
      border-radius: 4px 0 0 4px;
      margin-inline-start: 0;
    }

    &:last-child {
      border-radius: 0 4px 4px 0;
    }
  }
}
```

```
.react-aria-ToggleButtonGroup {
  display: flex;

  > button {
    border-radius: 0;
    z-index: 1;

    &[data-disabled] {
      z-index: 0;
    }

    &[data-selected],
    &[data-focus-visible] {
      z-index: 2;
    }
  }
}

.react-aria-ToggleButtonGroup[data-orientation=horizontal] {
  flex-direction: row;

  > button {
    margin-inline-start: -1px;
    
    &:first-child {
      border-radius: 4px 0 0 4px;
      margin-inline-start: 0;
    }

    &:last-child {
      border-radius: 0 4px 4px 0;
    }
  }
}
```

```
.react-aria-ToggleButtonGroup {
  display: flex;

  > button {
    border-radius: 0;
    z-index: 1;

    &[data-disabled] {
      z-index: 0;
    }

    &[data-selected],
    &[data-focus-visible] {
      z-index: 2;
    }
  }
}

.react-aria-ToggleButtonGroup[data-orientation=horizontal] {
  flex-direction: row;

  > button {
    margin-inline-start: -1px;
    
    &:first-child {
      border-radius: 4px 0 0 4px;
      margin-inline-start: 0;
    }

    &:last-child {
      border-radius: 0 4px 4px 0;
    }
  }
}
```

* * *

There is no built in element for toggle button groups in HTML. `ToggleButtonGroup` helps achieve accessible toggle button groups that can be styled as needed.

-   **Accessible** – Represented as an ARIA [radiogroup](https://www.w3.org/WAI/ARIA/apg/patterns/radio/) when using single selection, or a [toolbar](https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/) when using multiple selection.
-   **Keyboard navigation** – Users can navigate between buttons with the arrow keys. Selection can be toggled using the Enter or Space keys.
-   **Styleable** – Hover, press, keyboard focus, and selection states are provided for easy styling.

* * *

ListGridGroupToggle button

A toggle button group consists of a set of toggle buttons, and coordinates the selection state between them. Users can navigate between buttons with the arrow keys in either horizontal or vertical orientations.

```
import {SelectionIndicator, ToggleButton, ToggleButtonGroup} from 'react-aria-components';

<ToggleButtonGroup>
  <ToggleButton>
    <SelectionIndicator />
  </ToggleButton>
</ToggleButtonGroup>
```

```
import {
  SelectionIndicator,
  ToggleButton,
  ToggleButtonGroup
} from 'react-aria-components';

<ToggleButtonGroup>
  <ToggleButton>
    <SelectionIndicator />
  </ToggleButton>
</ToggleButtonGroup>
```

```
import {
  SelectionIndicator,
  ToggleButton,
  ToggleButtonGroup
} from 'react-aria-components';

<ToggleButtonGroup>
  <ToggleButton>
    <SelectionIndicator />
  </ToggleButton>
</ToggleButtonGroup>
```

[

ToggleButton

A toggle button allows a user to toggle between two states.

](https://react-spectrum.adobe.com/react-aria/ToggleButton.html)

* * *

ToggleButtonGroup supports both single and multiple selection modes. Use `defaultSelectedKeys` to provide a default set of selected items (uncontrolled) and `selectedKeys` to set the selected items (controlled). The value of the selected keys must match the `id` prop of the items.

By default, the `selectionMode` of a `ToggleButtonGroup` is `"single"`.

```
<ToggleButtonGroup defaultSelectedKeys={['list']}>
  <ToggleButton id="grid">Grid view</ToggleButton>
  <ToggleButton id="list">List view</ToggleButton>
  <ToggleButton id="gallery">Gallery view</ToggleButton>
</ToggleButtonGroup>
```

```
<ToggleButtonGroup defaultSelectedKeys={['list']}>
  <ToggleButton id="grid">Grid view</ToggleButton>
  <ToggleButton id="list">List view</ToggleButton>
  <ToggleButton id="gallery">Gallery view</ToggleButton>
</ToggleButtonGroup>
```

```
<ToggleButtonGroup
  defaultSelectedKeys={[
    'list'
  ]}
>
  <ToggleButton id="grid">
    Grid view
  </ToggleButton>
  <ToggleButton id="list">
    List view
  </ToggleButton>
  <ToggleButton id="gallery">
    Gallery view
  </ToggleButton>
</ToggleButtonGroup>
```

Set `selectionMode` prop to `multiple` to allow more than one selection.

```
<ToggleButtonGroup selectionMode="multiple">
  <ToggleButton id="bold">Bold</ToggleButton>
  <ToggleButton id="italic">Italic</ToggleButton>
  <ToggleButton id="underline">Underline</ToggleButton>
</ToggleButtonGroup>
```

```
<ToggleButtonGroup selectionMode="multiple">
  <ToggleButton id="bold">Bold</ToggleButton>
  <ToggleButton id="italic">Italic</ToggleButton>
  <ToggleButton id="underline">Underline</ToggleButton>
</ToggleButtonGroup>
```

```
<ToggleButtonGroup selectionMode="multiple">
  <ToggleButton id="bold">
    Bold
  </ToggleButton>
  <ToggleButton id="italic">
    Italic
  </ToggleButton>
  <ToggleButton id="underline">
    Underline
  </ToggleButton>
</ToggleButtonGroup>
```

The `selectedKeys` prop can be used to make the selected state controlled.

```
import type {Key} from 'react-aria-components';

function Example() {
  let [selected, setSelected] = React.useState(new Set<Key>(['bold']));

  return (
    <>
      <ToggleButtonGroup
        selectionMode="multiple"
        selectedKeys={selected}
        onSelectionChange={setSelected}
      >
        <ToggleButton id="bold">Bold</ToggleButton>
        <ToggleButton id="italic">Italic</ToggleButton>
        <ToggleButton id="underline">Underline</ToggleButton>
      </ToggleButtonGroup>
      <p>Current selections (controlled): {[...selected].join(', ')}</p>
    </>
  );
}
```

```
import type {Key} from 'react-aria-components';

function Example() {
  let [selected, setSelected] = React.useState(
    new Set<Key>(['bold'])
  );

  return (
    <>
      <ToggleButtonGroup
        selectionMode="multiple"
        selectedKeys={selected}
        onSelectionChange={setSelected}
      >
        <ToggleButton id="bold">Bold</ToggleButton>
        <ToggleButton id="italic">Italic</ToggleButton>
        <ToggleButton id="underline">
          Underline
        </ToggleButton>
      </ToggleButtonGroup>
      <p>
        Current selections (controlled):{' '}
        {[...selected].join(', ')}
      </p>
    </>
  );
}
```

```
import type {Key} from 'react-aria-components';

function Example() {
  let [
    selected,
    setSelected
  ] = React.useState(
    new Set<Key>([
      'bold'
    ])
  );

  return (
    <>
      <ToggleButtonGroup
        selectionMode="multiple"
        selectedKeys={selected}
        onSelectionChange={setSelected}
      >
        <ToggleButton id="bold">
          Bold
        </ToggleButton>
        <ToggleButton id="italic">
          Italic
        </ToggleButton>
        <ToggleButton id="underline">
          Underline
        </ToggleButton>
      </ToggleButtonGroup>
      <p>
        Current
        selections
        (controlled):
        {' '}
        {[...selected]
          .join(', ')}
      </p>
    </>
  );
}
```

Use the `SelectionIndicator` component to animate selection changes.

```
import {SelectionIndicator, ToggleButton, ToggleButtonGroup} from 'react-aria-components';

<ToggleButtonGroup
  className="segmented-control"
  defaultSelectedKeys={['day']}
  disallowEmptySelection
>
  <ToggleButton id="day">
    <SelectionIndicator />
    <span>Day</span>
  </ToggleButton>
  <ToggleButton id="week">
    <SelectionIndicator />
    <span>Week</span>
  </ToggleButton>
  <ToggleButton id="month">
    <SelectionIndicator />
    <span>Month</span>
  </ToggleButton>
  <ToggleButton id="year">
    <SelectionIndicator />
    <span>Year</span>
  </ToggleButton>
</ToggleButtonGroup>
```

```
import {
  SelectionIndicator,
  ToggleButton,
  ToggleButtonGroup
} from 'react-aria-components';

<ToggleButtonGroup
  className="segmented-control"
  defaultSelectedKeys={['day']}
  disallowEmptySelection
>
  <ToggleButton id="day">
    <SelectionIndicator />
    <span>Day</span>
  </ToggleButton>
  <ToggleButton id="week">
    <SelectionIndicator />
    <span>Week</span>
  </ToggleButton>
  <ToggleButton id="month">
    <SelectionIndicator />
    <span>Month</span>
  </ToggleButton>
  <ToggleButton id="year">
    <SelectionIndicator />
    <span>Year</span>
  </ToggleButton>
</ToggleButtonGroup>
```

```
import {
  SelectionIndicator,
  ToggleButton,
  ToggleButtonGroup
} from 'react-aria-components';

<ToggleButtonGroup
  className="segmented-control"
  defaultSelectedKeys={[
    'day'
  ]}
  disallowEmptySelection
>
  <ToggleButton id="day">
    <SelectionIndicator />
    <span>Day</span>
  </ToggleButton>
  <ToggleButton id="week">
    <SelectionIndicator />
    <span>Week</span>
  </ToggleButton>
  <ToggleButton id="month">
    <SelectionIndicator />
    <span>Month</span>
  </ToggleButton>
  <ToggleButton id="year">
    <SelectionIndicator />
    <span>Year</span>
  </ToggleButton>
</ToggleButtonGroup>
```

Show CSS

```
.segmented-control {
  display: flex;
  background: var(--gray-100);
  width: fit-content;
  padding: 2px;
  border-radius: 8px;

  .react-aria-SelectionIndicator {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    transition-property: translate, width;
    transition-duration: 200ms;
    border-radius: 8px;
    background: var(--gray-50);
    outline: 2px solid var(--gray-600);

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  }

  .react-aria-ToggleButton {
    all: unset;
    color: var(--text-color);
    font-size: 1rem;
    outline: none;
    padding: 4px 16px;
    position: relative;
    z-index: 1;
    border-radius: 8px;

    span {
      display: inline-block;
      transition: scale 200ms;
    }

     &[data-pressed] span {
      scale: 0.95;
    }

    &[data-selected] {
      z-index: 0;
    }

    &[data-focus-visible] {
      outline: 2px solid var(--focus-ring-color);
      outline-offset: 4px;
    }
  }
}
```

```
.segmented-control {
  display: flex;
  background: var(--gray-100);
  width: fit-content;
  padding: 2px;
  border-radius: 8px;

  .react-aria-SelectionIndicator {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    transition-property: translate, width;
    transition-duration: 200ms;
    border-radius: 8px;
    background: var(--gray-50);
    outline: 2px solid var(--gray-600);

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  }

  .react-aria-ToggleButton {
    all: unset;
    color: var(--text-color);
    font-size: 1rem;
    outline: none;
    padding: 4px 16px;
    position: relative;
    z-index: 1;
    border-radius: 8px;

    span {
      display: inline-block;
      transition: scale 200ms;
    }

     &[data-pressed] span {
      scale: 0.95;
    }

    &[data-selected] {
      z-index: 0;
    }

    &[data-focus-visible] {
      outline: 2px solid var(--focus-ring-color);
      outline-offset: 4px;
    }
  }
}
```

```
.segmented-control {
  display: flex;
  background: var(--gray-100);
  width: fit-content;
  padding: 2px;
  border-radius: 8px;

  .react-aria-SelectionIndicator {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    transition-property: translate, width;
    transition-duration: 200ms;
    border-radius: 8px;
    background: var(--gray-50);
    outline: 2px solid var(--gray-600);

    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  }

  .react-aria-ToggleButton {
    all: unset;
    color: var(--text-color);
    font-size: 1rem;
    outline: none;
    padding: 4px 16px;
    position: relative;
    z-index: 1;
    border-radius: 8px;

    span {
      display: inline-block;
      transition: scale 200ms;
    }

     &[data-pressed] span {
      scale: 0.95;
    }

    &[data-selected] {
      z-index: 0;
    }

    &[data-focus-visible] {
      outline: 2px solid var(--focus-ring-color);
      outline-offset: 4px;
    }
  }
}
```

* * *

All buttons within a `ToggleButtonGroup` can be disabled using the `isDisabled` prop.

```
<ToggleButtonGroup isDisabled>
  <ToggleButton id="grid">Grid view</ToggleButton>
  <ToggleButton id="list">List view</ToggleButton>
  <ToggleButton id="gallery">Gallery view</ToggleButton>
</ToggleButtonGroup>
```

```
<ToggleButtonGroup isDisabled>
  <ToggleButton id="grid">Grid view</ToggleButton>
  <ToggleButton id="list">List view</ToggleButton>
  <ToggleButton id="gallery">Gallery view</ToggleButton>
</ToggleButtonGroup>
```

```
<ToggleButtonGroup
  isDisabled
>
  <ToggleButton id="grid">
    Grid view
  </ToggleButton>
  <ToggleButton id="list">
    List view
  </ToggleButton>
  <ToggleButton id="gallery">
    Gallery view
  </ToggleButton>
</ToggleButtonGroup>
```

Individual items can be disabled using the `isDisabled` prop on each `ToggleButton`.

```
<ToggleButtonGroup>
  <ToggleButton id="grid">Grid view</ToggleButton>
  <ToggleButton id="list" isDisabled>List view</ToggleButton>
  <ToggleButton id="gallery">Gallery view</ToggleButton>
</ToggleButtonGroup>
```

```
<ToggleButtonGroup>
  <ToggleButton id="grid">Grid view</ToggleButton>
  <ToggleButton id="list" isDisabled>
    List view
  </ToggleButton>
  <ToggleButton id="gallery">Gallery view</ToggleButton>
</ToggleButtonGroup>
```

```
<ToggleButtonGroup>
  <ToggleButton id="grid">
    Grid view
  </ToggleButton>
  <ToggleButton
    id="list"
    isDisabled
  >
    List view
  </ToggleButton>
  <ToggleButton id="gallery">
    Gallery view
  </ToggleButton>
</ToggleButtonGroup>
```

* * *

By default, toggle button groups are horizontally oriented. The orientation prop can be set to "vertical" to change the arrow key navigation behavior.

```
<ToggleButtonGroup orientation="vertical">
  <ToggleButton id="grid">Grid</ToggleButton>
  <ToggleButton id="list">List</ToggleButton>
  <ToggleButton id="gallery">Gallery</ToggleButton>
</ToggleButtonGroup>
```

```
<ToggleButtonGroup orientation="vertical">
  <ToggleButton id="grid">Grid</ToggleButton>
  <ToggleButton id="list">List</ToggleButton>
  <ToggleButton id="gallery">Gallery</ToggleButton>
</ToggleButtonGroup>
```

```
<ToggleButtonGroup orientation="vertical">
  <ToggleButton id="grid">
    Grid
  </ToggleButton>
  <ToggleButton id="list">
    List
  </ToggleButton>
  <ToggleButton id="gallery">
    Gallery
  </ToggleButton>
</ToggleButtonGroup>
```

Show CSS

```
.react-aria-ToggleButtonGroup[data-orientation=vertical] {
  flex-direction: column;
  width: fit-content;

  > button {
    margin-block-start: -1px;
    
    &:first-child {
      border-radius: 4px 4px 0 0;
      margin-block-start: 0;
    }

    &:last-child {
      border-radius: 0 0 4px 4px;
    }
  }
}
```

```
.react-aria-ToggleButtonGroup[data-orientation=vertical] {
  flex-direction: column;
  width: fit-content;

  > button {
    margin-block-start: -1px;
    
    &:first-child {
      border-radius: 4px 4px 0 0;
      margin-block-start: 0;
    }

    &:last-child {
      border-radius: 0 0 4px 4px;
    }
  }
}
```

```
.react-aria-ToggleButtonGroup[data-orientation=vertical] {
  flex-direction: column;
  width: fit-content;

  > button {
    margin-block-start: -1px;
    
    &:first-child {
      border-radius: 4px 4px 0 0;
      margin-block-start: 0;
    }

    &:last-child {
      border-radius: 0 0 4px 4px;
    }
  }
}
```

* * *

A `ToggleButtonGroup` can be labeled using the `aria-label` or `aria-labelledby` props.

```
<ToggleButtonGroup aria-label="Text style">
  <ToggleButton id="bold">Bold</ToggleButton>
  <ToggleButton id="italic">Italic</ToggleButton>
  <ToggleButton id="underline">Underline</ToggleButton>
</ToggleButtonGroup>
```

```
<ToggleButtonGroup aria-label="Text style">
  <ToggleButton id="bold">Bold</ToggleButton>
  <ToggleButton id="italic">Italic</ToggleButton>
  <ToggleButton id="underline">Underline</ToggleButton>
</ToggleButtonGroup>
```

```
<ToggleButtonGroup aria-label="Text style">
  <ToggleButton id="bold">
    Bold
  </ToggleButton>
  <ToggleButton id="italic">
    Italic
  </ToggleButton>
  <ToggleButton id="underline">
    Underline
  </ToggleButton>
</ToggleButtonGroup>
```

* * *

Name

Type

Default

Description

`orientation`

`[Orientation](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/orientation.d.ts:Orientation)`

`'horizontal'`

The orientation of the the toggle button group.

`selectionMode`

`'single' | 'multiple'`

`'single'`

Whether single or multiple selection is enabled.

`disallowEmptySelection`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the collection allows empty selection.

`selectedKeys`

`[Iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)<[Key](https://reactjs.org/docs/lists-and-keys.html)>`

—

The currently selected keys in the collection (controlled).

`defaultSelectedKeys`

`[Iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)<[Key](https://reactjs.org/docs/lists-and-keys.html)>`

—

The initial selected keys in the collection (uncontrolled).

`isDisabled`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether all items are disabled.

`children`

`[ChildrenOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ChildrenOrFunction)<[ToggleButtonGroupRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/ToggleButtonGroup.tsx:ToggleButtonGroupRenderProps)>`

—

The children of the component. A function may be provided to alter the children based on component state.

`className`

`[ClassNameOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ClassNameOrFunction)<[ToggleButtonGroupRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/ToggleButtonGroup.tsx:ToggleButtonGroupRenderProps)>`

—

The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.

`style`

`[StyleOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:StyleOrFunction)<[ToggleButtonGroupRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/ToggleButtonGroup.tsx:ToggleButtonGroupRenderProps)>`

—

The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.

Events

Name

Type

Description

`onSelectionChange`

`( (keys: [Set](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Set)<[Key](https://reactjs.org/docs/lists-and-keys.html)> )) => void`

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

Name

Type

Description

`id`

`[Key](https://reactjs.org/docs/lists-and-keys.html)`

When used in a ToggleButtonGroup, an identifier for the item in `selectedKeys`. When used standalone, a DOM id.

`isSelected`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether the element should be selected (controlled).

`defaultSelected`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether the element should be selected (uncontrolled).

`isDisabled`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether the button is disabled.

`autoFocus`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether the element should receive focus on render.

`children`

`[ChildrenOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ChildrenOrFunction)<[ToggleButtonRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/ToggleButton.tsx:ToggleButtonRenderProps)>`

The children of the component. A function may be provided to alter the children based on component state.

`className`

`[ClassNameOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ClassNameOrFunction)<[ToggleButtonRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/ToggleButton.tsx:ToggleButtonRenderProps)>`

The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.

`style`

`[StyleOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:StyleOrFunction)<[ToggleButtonRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/ToggleButton.tsx:ToggleButtonRenderProps)>`

The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.

Events

Name

Type

Description

`onChange`

`( (isSelected: [boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) )) => void`

Handler that is called when the element's selection state changes.

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

* * *

React Aria components can be styled in many ways, including using CSS classes, inline styles, utility classes (e.g. Tailwind), CSS-in-JS (e.g. Styled Components), etc. By default, all components include a builtin `className` attribute which can be targeted using CSS selectors. These follow the `react-aria-ComponentName` naming convention.

```
.react-aria-ToggleButtonGroup {
  /* ... */
}
```

```
.react-aria-ToggleButtonGroup {
  /* ... */
}
```

```
.react-aria-ToggleButtonGroup {
  /* ... */
}
```

A custom `className` can also be specified on any component. This overrides the default `className` provided by React Aria with your own.

```
<ToggleButtonGroup className="my-toggle-group">
  {/* ... */}
</ToggleButtonGroup>
```

```
<ToggleButtonGroup className="my-toggle-group">
  {/* ... */}
</ToggleButtonGroup>
```

```
<ToggleButtonGroup className="my-toggle-group">
  {/* ... */}
</ToggleButtonGroup>
```

In addition, some components support multiple UI states (e.g. focused, placeholder, readonly, etc.). React Aria components expose states using data attributes, which you can target in CSS selectors. For example:

```
.react-aria-ToggleButton[data-selected] {
  /* ... */
}
```

```
.react-aria-ToggleButton[data-selected] {
  /* ... */
}
```

```
.react-aria-ToggleButton[data-selected] {
  /* ... */
}
```

The `className` and `style` props also accept functions which receive states for styling. This lets you dynamically determine the classes or styles to apply, which is useful when using utility CSS libraries like [Tailwind](https://tailwindcss.com/).

```
<ToggleButtonGroup
  className={({ isDisabled }) => isDisabled ? 'bg-gray-100' : 'bg-gray-600'}
/>
```

```
<ToggleButtonGroup
  className={({ isDisabled }) =>
    isDisabled ? 'bg-gray-100' : 'bg-gray-600'}
/>
```

```
<ToggleButtonGroup
  className={(
    { isDisabled }
  ) =>
    isDisabled
      ? 'bg-gray-100'
      : 'bg-gray-600'}
/>
```

Render props may also be used as children to alter what elements are rendered based on the current state. For example, you could swap an icon depending on the selection state.

```
<ToggleButton>
  {({isSelected}) => (
    <>
      {isSelected ? <PinnedIcon /> : <UnpinnedIcon />}
      Pin
    </>
  )}
</ToggleButton>
```

```
<ToggleButton>
  {({isSelected}) => (
    <>
      {isSelected ? <PinnedIcon /> : <UnpinnedIcon />}
      Pin
    </>
  )}
</ToggleButton>
```

```
<ToggleButton>
  {(
    { isSelected }
  ) => (
    <>
      {isSelected
        ? (
          <PinnedIcon />
        )
        : (
          <UnpinnedIcon />
        )}
      Pin
    </>
  )}
</ToggleButton>
```

The states, selectors, and render props for each component used in a `ToggleButtonGroup` are documented below.

A `ToggleButtonGroup` can be targeted with the `.react-aria-ToggleButtonGroup` CSS selector, or by overriding with a custom `className`. It supports the following states and render props:

Name

CSS Selector

Description

`isDisabled`

`[data-disabled]`

Whether the toggle button group is disabled.

`state`

`—`

State of the toggle button group.

A `ToggleButton` can be targeted with the `.react-aria-ToggleButton` CSS selector, or by overriding with a custom `className`.

Name

CSS Selector

Description

`isSelected`

`[data-selected]`

Whether the button is currently selected.

`state`

`—`

State of the toggle button.

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

* * *

All React Aria Components export a corresponding context that can be used to send props to them from a parent element. This enables you to build your own compositional APIs similar to those found in React Aria Components itself. You can send any prop or ref via context that you could pass to the corresponding component. The local props and ref on the component are merged with the ones passed via context, with the local props taking precedence (following the rules documented in [mergeProps](https://react-spectrum.adobe.com/react-aria/mergeProps.html)).

Component

Context

Props

Ref

`ToggleButtonGroup`

`ToggleButtonGroupContext`

`[ToggleButtonGroupProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/ToggleButtonGroup.tsx:ToggleButtonGroupProps)`

`[HTMLDivElement](https://developer.mozilla.org/docs/Web/API/HTMLDivElement)`

`ToggleButton`

`ToggleButtonContext`

`[ToggleButtonProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/ToggleButton.tsx:ToggleButtonProps)`

`[HTMLButtonElement](https://developer.mozilla.org/docs/Web/API/HTMLButtonElement)`

ToggleButtonGroup provides an `[ToggleGroupState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/toggle/src/useToggleGroupState.ts:ToggleGroupState)` object to its children via `ToggleGroupStateContext`. This can be used to access and manipulate the toggle button group's state.

This example shows a `ClearButton` component that can be placed within a `ToggleButtonGroup` to allow the user to clear the selected item.

```
import {Button, ToggleGroupStateContext} from 'react-aria-components';

function ClearButton() {
  let state = React.useContext(ToggleGroupStateContext);  return (
    <Button onPress={() => state?.setSelectedKeys(new Set())}>
      Clear
    </Button>
  );
}

<ToggleButtonGroup
  selectionMode="multiple"
  defaultSelectedKeys={['bold', 'italic']}
>
  <ToggleButton id="bold">Bold</ToggleButton>
  <ToggleButton id="italic">Italic</ToggleButton>
  <ToggleButton id="underline">Underline</ToggleButton>
  <ClearButton /></ToggleButtonGroup>
```

```
import {
  Button,
  ToggleGroupStateContext
} from 'react-aria-components';

function ClearButton() {
  let state = React.useContext(ToggleGroupStateContext);  return (
    <Button
      onPress={() => state?.setSelectedKeys(new Set())}
    >
      Clear
    </Button>
  );
}

<ToggleButtonGroup
  selectionMode="multiple"
  defaultSelectedKeys={['bold', 'italic']}
>
  <ToggleButton id="bold">Bold</ToggleButton>
  <ToggleButton id="italic">Italic</ToggleButton>
  <ToggleButton id="underline">Underline</ToggleButton>
  <ClearButton /></ToggleButtonGroup>
```

```
import {
  Button,
  ToggleGroupStateContext
} from 'react-aria-components';

function ClearButton() {
  let state = React
    .useContext(
      ToggleGroupStateContext
    );  return (
    <Button
      onPress={() =>
        state
          ?.setSelectedKeys(
            new Set()
          )}
    >
      Clear
    </Button>
  );
}

<ToggleButtonGroup
  selectionMode="multiple"
  defaultSelectedKeys={[
    'bold',
    'italic'
  ]}
>
  <ToggleButton id="bold">
    Bold
  </ToggleButton>
  <ToggleButton id="italic">
    Italic
  </ToggleButton>
  <ToggleButton id="underline">
    Underline
  </ToggleButton>
  <ClearButton /></ToggleButtonGroup>
```

If you need to customize things even further, such as accessing internal state, intercepting events, or customizing the DOM structure, you can drop down to the lower level Hook-based API. See [useToggleButtonGroup](https://react-spectrum.adobe.com/react-aria/useToggleButtonGroup.html) for more details.