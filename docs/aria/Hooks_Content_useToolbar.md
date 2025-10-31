# useToolbar

**Source**: [https://react-spectrum.adobe.com/react-aria/useToolbar.html](https://react-spectrum.adobe.com/react-aria/useToolbar.html)

> Documentation for useToolbar in the React Aria package.

---

Provides the behavior and accessibility implementation for a toolbar. A toolbar is a container for a set of interactive controls with arrow key navigation.

* * *

`useToolbar( (props: [AriaToolbarProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/toolbar/src/useToolbar.ts:AriaToolbarProps), , ref: [RefObject](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/refs.d.ts:RefObject)<[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element) |  | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)> )): [ToolbarAria](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/toolbar/src/useToolbar.ts:ToolbarAria)`

* * *

There is no native element to implement a toolbar in HTML. `useToolbar` helps achieve accessible toolbar components that can be styled as needed.

-   Exposed to assistive technology as a `toolbar` element via ARIA
-   Support for arrow key navigation
-   Support for both horizontal and vertical orientations
-   Support for interactive children including button, toggle button, menu, checkbox, and link
-   Automatic scrolling support during keyboard navigation

* * *

ToolbarGroupCutCutCutCutCutPasteCopyButtonCutCutCutCutGroupSeparator

A toolbar consists of a container element for a set of interactive controls. `useToolbar` handles exposing this to assistive technology using ARIA, along with handling arrow key navigation between children.

`useToolbar` returns props that you should spread onto the appropriate element:

Name

Type

Description

`toolbarProps`

`[HTMLAttributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)<[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)>`

Props for the toolbar container.

An `aria-label` or `aria-labelledby` prop must be provided to identify the toolbar to assistive technology.

* * *

This example uses the `[useToolbar](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/toolbar/src/useToolbar.ts:useToolbar)` hook, spread on a container to handle navigation of components inside it.

```
import {useToolbar} from 'react-aria';
import {useRef} from 'react';

// Reuse the Button from your component library. See below for details.
import {Button} from 'your-component-library';

function Toolbar(props) {
  let ref = useRef<HTMLDivElement | null>(null);
  // Get props for the toolbar element
  let { toolbarProps } = useToolbar(props, ref);

  return (
    <div {...toolbarProps} ref={ref}>
      {props.children}
    </div>
  );
}

<Toolbar aria-label="Actions">
  <Button>Copy</Button>
  <Button>Cut</Button>
  <Button>Paste</Button>
</Toolbar>
```

```
import {useToolbar} from 'react-aria';
import {useRef} from 'react';

// Reuse the Button from your component library. See below for details.
import {Button} from 'your-component-library';

function Toolbar(props) {
  let ref = useRef<HTMLDivElement | null>(null);
  // Get props for the toolbar element
  let { toolbarProps } = useToolbar(props, ref);

  return (
    <div {...toolbarProps} ref={ref}>
      {props.children}
    </div>
  );
}

<Toolbar aria-label="Actions">
  <Button>Copy</Button>
  <Button>Cut</Button>
  <Button>Paste</Button>
</Toolbar>
```

```
import {useToolbar} from 'react-aria';
import {useRef} from 'react';

// Reuse the Button from your component library. See below for details.
import {Button} from 'your-component-library';

function Toolbar(props) {
  let ref = useRef<
    HTMLDivElement | null
  >(null);
  // Get props for the toolbar element
  let { toolbarProps } =
    useToolbar(
      props,
      ref
    );

  return (
    <div
      {...toolbarProps}
      ref={ref}
    >
      {props.children}
    </div>
  );
}

<Toolbar aria-label="Actions">
  <Button>Copy</Button>
  <Button>Cut</Button>
  <Button>
    Paste
  </Button>
</Toolbar>
```

Show CSS

```
[role=toolbar] {
  --separator-color: var(--spectrum-global-color-gray-500);
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}
```

```
[role=toolbar] {
  --separator-color: var(--spectrum-global-color-gray-500);
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}
```

```
[role=toolbar] {
  --separator-color: var(--spectrum-global-color-gray-500);
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}
```

The `Button` component is used in the above example as an interactive child. It is built using the [useButton](https://react-spectrum.adobe.com/react-aria/useButton.html) hook, and can be shared with many other components.

Show code

```
import {useButton} from 'react-aria';

function Button(props) {
  let { children } = props;
  let ref = useRef<HTMLButtonElement | null>(null);
  let { buttonProps, isPressed } = useButton({
    ...props,
    elementType: 'span'
  }, ref);

  return (
    <span
      {...buttonProps}
      style={{
        background: isPressed ? '#bbb' : '#aaa',
        color: 'black',
        cursor: 'default',
        padding: '5px 10px'
      }}
      ref={ref}
    >
      {children}
    </span>
  );
}
```

```
import {useButton} from 'react-aria';

function Button(props) {
  let { children } = props;
  let ref = useRef<HTMLButtonElement | null>(null);
  let { buttonProps, isPressed } = useButton({
    ...props,
    elementType: 'span'
  }, ref);

  return (
    <span
      {...buttonProps}
      style={{
        background: isPressed ? '#bbb' : '#aaa',
        color: 'black',
        cursor: 'default',
        padding: '5px 10px'
      }}
      ref={ref}
    >
      {children}
    </span>
  );
}
```

```
import {useButton} from 'react-aria';

function Button(props) {
  let { children } =
    props;
  let ref = useRef<
    | HTMLButtonElement
    | null
  >(null);
  let {
    buttonProps,
    isPressed
  } = useButton({
    ...props,
    elementType: 'span'
  }, ref);

  return (
    <span
      {...buttonProps}
      style={{
        background:
          isPressed
            ? '#bbb'
            : '#aaa',
        color: 'black',
        cursor:
          'default',
        padding:
          '5px 10px'
      }}
      ref={ref}
    >
      {children}
    </span>
  );
}
```

* * *

You are responsible for localizing all labels, both for the toolbar itself as well as all the content that is passed into the toolbar.

In right-to-left languages, the toolbar should be mirrored both at the toolbar level as well as inside groups as appropriate. Ensure that your CSS accounts for this.