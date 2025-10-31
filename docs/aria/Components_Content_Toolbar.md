# Toolbar

**Source**: [https://react-spectrum.adobe.com/react-aria/Toolbar.html](https://react-spectrum.adobe.com/react-aria/Toolbar.html)

> Documentation for Toolbar in the React Aria package.

---

A toolbar is a container for a set of interactive controls, such as buttons, dropdown menus, or checkboxes, with arrow key navigation.

* * *

```
import {Button, Checkbox, Group, Separator, ToggleButton, Toolbar} from 'react-aria-components';

<Toolbar aria-label="Text formatting">
  <Group aria-label="Style">
    <ToggleButton aria-label="Bold">
      <b>B</b>
    </ToggleButton>
    <ToggleButton aria-label="Italic">
      <i>I</i>
    </ToggleButton>
    <ToggleButton aria-label="Underline">
      <u>U</u>
    </ToggleButton>
  </Group>
  <Separator orientation="vertical" />
  <Group aria-label="Clipboard">
    <Button>Copy</Button>
    <Button>Paste</Button>
    <Button>Cut</Button>
  </Group>
  <Separator orientation="vertical" />
  <Checkbox>
    <div className="checkbox">
      <svg viewBox="0 0 18 18" aria-hidden="true">
        <polyline points="1 9 7 14 15 4" />
      </svg>
    </div>
    Night Mode
  </Checkbox>
</Toolbar>
```

```
import {
  Button,
  Checkbox,
  Group,
  Separator,
  ToggleButton,
  Toolbar
} from 'react-aria-components';

<Toolbar aria-label="Text formatting">
  <Group aria-label="Style">
    <ToggleButton aria-label="Bold">
      <b>B</b>
    </ToggleButton>
    <ToggleButton aria-label="Italic">
      <i>I</i>
    </ToggleButton>
    <ToggleButton aria-label="Underline">
      <u>U</u>
    </ToggleButton>
  </Group>
  <Separator orientation="vertical" />
  <Group aria-label="Clipboard">
    <Button>Copy</Button>
    <Button>Paste</Button>
    <Button>Cut</Button>
  </Group>
  <Separator orientation="vertical" />
  <Checkbox>
    <div className="checkbox">
      <svg viewBox="0 0 18 18" aria-hidden="true">
        <polyline points="1 9 7 14 15 4" />
      </svg>
    </div>
    Night Mode
  </Checkbox>
</Toolbar>
```

```
import {
  Button,
  Checkbox,
  Group,
  Separator,
  ToggleButton,
  Toolbar
} from 'react-aria-components';

<Toolbar aria-label="Text formatting">
  <Group aria-label="Style">
    <ToggleButton aria-label="Bold">
      <b>B</b>
    </ToggleButton>
    <ToggleButton aria-label="Italic">
      <i>I</i>
    </ToggleButton>
    <ToggleButton aria-label="Underline">
      <u>U</u>
    </ToggleButton>
  </Group>
  <Separator orientation="vertical" />
  <Group aria-label="Clipboard">
    <Button>
      Copy
    </Button>
    <Button>
      Paste
    </Button>
    <Button>
      Cut
    </Button>
  </Group>
  <Separator orientation="vertical" />
  <Checkbox>
    <div className="checkbox">
      <svg
        viewBox="0 0 18 18"
        aria-hidden="true"
      >
        <polyline points="1 9 7 14 15 4" />
      </svg>
    </div>
    Night Mode
  </Checkbox>
</Toolbar>
```

Show CSS

```
@import "@react-aria/example-theme";

.react-aria-Toolbar {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;

  &[data-orientation=horizontal] {
    flex-direction: row;
  }

  .react-aria-Group {
    display: contents;
  }

  .react-aria-ToggleButton {
    width: 32px;
  }
}

.react-aria-Separator {
  align-self: stretch;
  background-color: var(--border-color);

  &[aria-orientation=vertical] {
    width: 1px;
    margin: 0px 10px;
  }
}
```

```
@import "@react-aria/example-theme";

.react-aria-Toolbar {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;

  &[data-orientation=horizontal] {
    flex-direction: row;
  }

  .react-aria-Group {
    display: contents;
  }

  .react-aria-ToggleButton {
    width: 32px;
  }
}

.react-aria-Separator {
  align-self: stretch;
  background-color: var(--border-color);

  &[aria-orientation=vertical] {
    width: 1px;
    margin: 0px 10px;
  }
}
```

```
@import "@react-aria/example-theme";

.react-aria-Toolbar {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;

  &[data-orientation=horizontal] {
    flex-direction: row;
  }

  .react-aria-Group {
    display: contents;
  }

  .react-aria-ToggleButton {
    width: 32px;
  }
}

.react-aria-Separator {
  align-self: stretch;
  background-color: var(--border-color);

  &[aria-orientation=vertical] {
    width: 1px;
    margin: 0px 10px;
  }
}
```

* * *

There is no built-in HTML toolbar element. `Toolbar` helps achieve accessible toolbars with arrow key navigation that can be styled as needed.

-   **Flexible** – Support for interactive children such as buttons, checkboxes, dropdown menus, etc. in a horizontal or vertical orientation.
-   **Accessible** – Follows the [ARIA toolbar pattern](https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/) with support for arrow key navigation as a single tab stop.

* * *

ToolbarGroupCutCutCutCutCutPasteCopyButtonCutCutCutCutGroupSeparator

A toolbar consists of a container element for a set of interactive controls. It provides arrow key navigation between its children, in either horizontal or vertical orientation.

```
import {Toolbar} from 'react-aria-components';

<Toolbar>
  {/* ... */}
</Toolbar>
```

```
import {Toolbar} from 'react-aria-components';

<Toolbar>
  {/* ... */}
</Toolbar>
```

```
import {Toolbar} from 'react-aria-components';

<Toolbar>
  {/* ... */}
</Toolbar>
```

* * *

To help kick-start your project, we offer starter kits that include example implementations of all React Aria components with various styling solutions. All components are fully styled, including support for dark mode, high contrast mode, and all UI states. Each starter comes with a pre-configured [Storybook](https://storybook.js.org/) that you can experiment with, or use as a starting point for your own component library.

* * *

By default, toolbars are horizontally oriented. The `orientation` prop can be set to `"vertical"` to change the arrow key navigation behavior.

```
import Move from '@spectrum-icons/workflow/Move';
import Select from '@spectrum-icons/workflow/Select';
import Polygon from '@spectrum-icons/workflow/PolygonSelect';
import Brush from '@spectrum-icons/workflow/Brush';
import Pencil from '@spectrum-icons/workflow/Edit';

<Toolbar aria-label="Tools" orientation="vertical">
  <Group aria-label="Select">
    <Button aria-label="Move"><Move size="S" /></Button>
    <Button aria-label="Rectangle"><Select size="S" /></Button>
    <Button aria-label="Polygon"><Polygon size="S" /></Button>
  </Group>
  <Separator orientation="horizontal" />
  <Group aria-label="Draw">
    <Button aria-label="Brush"><Brush size="S" /></Button>
    <Button aria-label="Pencil"><Pencil size="S" /></Button>
  </Group>
</Toolbar>
```

```
import Move from '@spectrum-icons/workflow/Move';
import Select from '@spectrum-icons/workflow/Select';
import Polygon from '@spectrum-icons/workflow/PolygonSelect';
import Brush from '@spectrum-icons/workflow/Brush';
import Pencil from '@spectrum-icons/workflow/Edit';

<Toolbar aria-label="Tools" orientation="vertical">
  <Group aria-label="Select">
    <Button aria-label="Move">
      <Move size="S" />
    </Button>
    <Button aria-label="Rectangle">
      <Select size="S" />
    </Button>
    <Button aria-label="Polygon">
      <Polygon size="S" />
    </Button>
  </Group>
  <Separator orientation="horizontal" />
  <Group aria-label="Draw">
    <Button aria-label="Brush">
      <Brush size="S" />
    </Button>
    <Button aria-label="Pencil">
      <Pencil size="S" />
    </Button>
  </Group>
</Toolbar>
```

```
import Move from '@spectrum-icons/workflow/Move';
import Select from '@spectrum-icons/workflow/Select';
import Polygon from '@spectrum-icons/workflow/PolygonSelect';
import Brush from '@spectrum-icons/workflow/Brush';
import Pencil from '@spectrum-icons/workflow/Edit';

<Toolbar
  aria-label="Tools"
  orientation="vertical"
>
  <Group aria-label="Select">
    <Button aria-label="Move">
      <Move size="S" />
    </Button>
    <Button aria-label="Rectangle">
      <Select size="S" />
    </Button>
    <Button aria-label="Polygon">
      <Polygon size="S" />
    </Button>
  </Group>
  <Separator orientation="horizontal" />
  <Group aria-label="Draw">
    <Button aria-label="Brush">
      <Brush size="S" />
    </Button>
    <Button aria-label="Pencil">
      <Pencil size="S" />
    </Button>
  </Group>
</Toolbar>
```

Show CSS

```
.react-aria-Toolbar {
  width: fit-content;

  &[data-orientation=vertical] {
    flex-direction: column;
    align-items: start;
  }
}

.react-aria-Separator {
  &:not([aria-orientation=vertical]) {
    border: none;
    height: 1px;
    width: 100%;
    margin: 10px 0;
  }
}
```

```
.react-aria-Toolbar {
  width: fit-content;

  &[data-orientation=vertical] {
    flex-direction: column;
    align-items: start;
  }
}

.react-aria-Separator {
  &:not([aria-orientation=vertical]) {
    border: none;
    height: 1px;
    width: 100%;
    margin: 10px 0;
  }
}
```

```
.react-aria-Toolbar {
  width: fit-content;

  &[data-orientation=vertical] {
    flex-direction: column;
    align-items: start;
  }
}

.react-aria-Separator {
  &:not([aria-orientation=vertical]) {
    border: none;
    height: 1px;
    width: 100%;
    margin: 10px 0;
  }
}
```

* * *

Name

Type

Default

Description

`orientation`

`[Orientation](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/orientation.d.ts:Orientation)`

`'horizontal'`

The orientation of the entire toolbar.

`children`

`[ChildrenOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ChildrenOrFunction)<[ToolbarRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Toolbar.tsx:ToolbarRenderProps)>`

—

The children of the component. A function may be provided to alter the children based on component state.

`className`

`[ClassNameOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ClassNameOrFunction)<[ToolbarRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Toolbar.tsx:ToolbarRenderProps)>`

—

The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.

`style`

`[StyleOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:StyleOrFunction)<[ToolbarRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Toolbar.tsx:ToolbarRenderProps)>`

—

The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.

EventsLayout

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

A `<Separator>` can be placed between elements and groups in a toolbar.

Show props

Name

Type

Default

Description

`orientation`

`[Orientation](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/orientation.d.ts:Orientation)`

`'horizontal'`

The orientation of the separator.

`elementType`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

The HTML element type that will be used to render the separator.

`className`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element.

`style`

`[CSSProperties](https://reactjs.org/docs/dom-elements.html#style)`

—

The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element.

EventsLayout

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

* * *

React Aria components can be styled in many ways, including using CSS classes, inline styles, utility classes (e.g. Tailwind), CSS-in-JS (e.g. Styled Components), etc. By default, all components include a builtin `className` attribute which can be targeted using CSS selectors. These follow the `react-aria-ComponentName` naming convention.

```
.react-aria-Toolbar {
  /* ... */
}
```

```
.react-aria-Toolbar {
  /* ... */
}
```

```
.react-aria-Toolbar {
  /* ... */
}
```

A custom `className` can also be specified on any component. This overrides the default `className` provided by React Aria with your own.

```
<Toolbar className="my-toolbar">
  {/* ... */}
</Toolbar>
```

```
<Toolbar className="my-toolbar">
  {/* ... */}
</Toolbar>
```

```
<Toolbar className="my-toolbar">
  {/* ... */}
</Toolbar>
```

The `className` and `style` props also accept functions which receive states for styling. This lets you dynamically determine the classes or styles to apply, which is useful when using utility CSS libraries like [Tailwind](https://tailwindcss.com/).

```
<Toolbar
  className={({ orientation }) =>
    orientation === 'vertical' ? 'flex-col' : 'flex-row'}
>
  {/* ... */}
</Toolbar>
```

```
<Toolbar
  className={({ orientation }) =>
    orientation === 'vertical' ? 'flex-col' : 'flex-row'}
>
  {/* ... */}
</Toolbar>
```

```
<Toolbar
  className={(
    { orientation }
  ) =>
    orientation ===
        'vertical'
      ? 'flex-col'
      : 'flex-row'}
>
  {/* ... */}
</Toolbar>
```

The selectors and render props for each component used in a `Toolbar` are documented below.

A `Toolbar` can be targeted with the `.react-aria-Toolbar` CSS selector, or by overriding with a custom `className`. It supports the following states and render props:

Name

CSS Selector

Description

`orientation`

`[data-orientation]`

The current orientation of the toolbar.

A `Separator` can be targeted with the `.react-aria-Separator` CSS selector, or by overriding with a custom `className`.

* * *

All React Aria Components export a corresponding context that can be used to send props to them from a parent element. This enables you to build your own compositional APIs similar to those found in React Aria Components itself. You can send any prop or ref via context that you could pass to the corresponding component. The local props and ref on the component are merged with the ones passed via context, with the local props taking precedence (following the rules documented in [mergeProps](https://react-spectrum.adobe.com/react-aria/mergeProps.html)).

Component

Context

Props

Ref

`Toolbar`

`ToolbarContext`

`[ToolbarProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Toolbar.tsx:ToolbarProps)`

`[HTMLDivElement](https://developer.mozilla.org/docs/Web/API/HTMLDivElement)`

If you need to customize things further, such as customizing the DOM structure, you can drop down to the lower level Hook-based API. See [useToolbar](https://react-spectrum.adobe.com/react-aria/useToolbar.html) for more details.