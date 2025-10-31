# ToggleButton

**Source**: [https://react-spectrum.adobe.com/react-aria/ToggleButton.html](https://react-spectrum.adobe.com/react-aria/ToggleButton.html)

> Documentation for ToggleButton in the React Aria package.

---

A toggle button allows a user to toggle a selection on or off, for example switching between two states or modes.

* * *

```
import {ToggleButton} from 'react-aria-components';

<ToggleButton>Pin</ToggleButton>
```

```
import {ToggleButton} from 'react-aria-components';

<ToggleButton>Pin</ToggleButton>
```

```
import {ToggleButton} from 'react-aria-components';

<ToggleButton>
  Pin
</ToggleButton>
```

Show CSS

```
@import "@react-aria/example-theme";

.react-aria-ToggleButton {
  color: var(--text-color);
  background: var(--button-background);
  border: 1px solid var(--border-color);
  forced-color-adjust: none;
  border-radius: 4px;
  appearance: none;
  vertical-align: middle;
  font-size: 1rem;
  text-align: center;
  margin: 0;
  outline: none;
  padding: 6px 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &[data-pressed] {
    box-shadow: inset 0 1px 2px rgb(0 0 0 / 0.1);
    background: var(--button-background-pressed);
    border-color: var(--border-color-pressed);
  }

  &[data-selected] {
    background: var(--highlight-background);
    border-color: var(--highlight-background);
    color: var(--highlight-foreground);

    &[data-pressed] {
      background: var(--highlight-background-pressed);
      border-color: var(--highlight-background-pressed);
    }
  }

  &[data-focus-visible] {
    outline: 2px solid var(--focus-ring-color);
    outline-offset: 2px;
  }
}
```

```
@import "@react-aria/example-theme";

.react-aria-ToggleButton {
  color: var(--text-color);
  background: var(--button-background);
  border: 1px solid var(--border-color);
  forced-color-adjust: none;
  border-radius: 4px;
  appearance: none;
  vertical-align: middle;
  font-size: 1rem;
  text-align: center;
  margin: 0;
  outline: none;
  padding: 6px 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &[data-pressed] {
    box-shadow: inset 0 1px 2px rgb(0 0 0 / 0.1);
    background: var(--button-background-pressed);
    border-color: var(--border-color-pressed);
  }

  &[data-selected] {
    background: var(--highlight-background);
    border-color: var(--highlight-background);
    color: var(--highlight-foreground);

    &[data-pressed] {
      background: var(--highlight-background-pressed);
      border-color: var(--highlight-background-pressed);
    }
  }

  &[data-focus-visible] {
    outline: 2px solid var(--focus-ring-color);
    outline-offset: 2px;
  }
}
```

```
@import "@react-aria/example-theme";

.react-aria-ToggleButton {
  color: var(--text-color);
  background: var(--button-background);
  border: 1px solid var(--border-color);
  forced-color-adjust: none;
  border-radius: 4px;
  appearance: none;
  vertical-align: middle;
  font-size: 1rem;
  text-align: center;
  margin: 0;
  outline: none;
  padding: 6px 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  &[data-pressed] {
    box-shadow: inset 0 1px 2px rgb(0 0 0 / 0.1);
    background: var(--button-background-pressed);
    border-color: var(--border-color-pressed);
  }

  &[data-selected] {
    background: var(--highlight-background);
    border-color: var(--highlight-background);
    color: var(--highlight-foreground);

    &[data-pressed] {
      background: var(--highlight-background-pressed);
      border-color: var(--highlight-background-pressed);
    }
  }

  &[data-focus-visible] {
    outline: 2px solid var(--focus-ring-color);
    outline-offset: 2px;
  }
}
```

* * *

Toggle buttons are similar to action buttons, but support an additional selection state that is toggled when a user presses the button. There is no built-in HTML element that represents a toggle button, so React Aria implements it using ARIA attributes.

-   **Styleable** – Hover, press, keyboard focus, and selection states are provided for easy styling. These states only apply when interacting with an appropriate input device, unlike CSS pseudo classes.
-   **Accessible** – Uses a native `<button>` element with the `aria-pressed` attribute, and supports the Space and Enter keys to toggle the selection state.
-   **Cross-browser** – Mouse, touch, keyboard, and focus interactions are normalized to ensure consistency across browsers and devices.

Read our [blog post](https://react-spectrum.adobe.com/blog/building-a-button-part-1.html) about the complexities of building buttons that work well across devices and interaction methods to learn more.

* * *

Toggle buttons consist of a clickable area usually containing a textual label or an icon that users can click to toggle a selection state. In addition, keyboard users may toggle the state using the Space or Enter keys.

If a visual label is not provided (e.g. an icon only button), then an `aria-label` or `aria-labelledby` prop must be passed to identify the button to assistive technology.

* * *

To help kick-start your project, we offer starter kits that include example implementations of all React Aria components with various styling solutions. All components are fully styled, including support for dark mode, high contrast mode, and all UI states. Each starter comes with a pre-configured [Storybook](https://storybook.js.org/) that you can experiment with, or use as a starting point for your own component library.

* * *

A default selection state for a toggle button can be set using the `defaultSelected` prop, or controlled with the `isSelected` prop. The `onChange` event is fired when the user presses the button, toggling the boolean. See React's documentation on [uncontrolled components](https://reactjs.org/docs/uncontrolled-components.html) for more info.

```
import {Star} from 'lucide-react';

function Example() {
  let [isSelected, setSelected] = React.useState(false);

  return (
    <ToggleButton
      isSelected={isSelected}
      onChange={setSelected}
      aria-label="Star">
      <Star size={18} />
    </ToggleButton>
  );
}
```

```
import {Star} from 'lucide-react';

function Example() {
  let [isSelected, setSelected] = React.useState(false);

  return (
    <ToggleButton
      isSelected={isSelected}
      onChange={setSelected}
      aria-label="Star">
      <Star size={18} />
    </ToggleButton>
  );
}
```

```
import {Star} from 'lucide-react';

function Example() {
  let [
    isSelected,
    setSelected
  ] = React.useState(
    false
  );

  return (
    <ToggleButton
      isSelected={isSelected}
      onChange={setSelected}
      aria-label="Star"
    >
      <Star size={18} />
    </ToggleButton>
  );
}
```

* * *

A `ToggleButton` can be disabled using the `isDisabled` prop.

```
<ToggleButton isDisabled>Pin</ToggleButton>
```

```
<ToggleButton isDisabled>Pin</ToggleButton>
```

```
<ToggleButton
  isDisabled
>
  Pin
</ToggleButton>
```

Show CSS

```
.react-aria-ToggleButton {
  &[data-disabled] {
    border-color: var(--border-color-disabled);
    background: var(--button-background);
    color: var(--text-color-disabled);
  }
}
```

```
.react-aria-ToggleButton {
  &[data-disabled] {
    border-color: var(--border-color-disabled);
    background: var(--button-background);
    color: var(--text-color-disabled);
  }
}
```

```
.react-aria-ToggleButton {
  &[data-disabled] {
    border-color: var(--border-color-disabled);
    background: var(--button-background);
    color: var(--text-color-disabled);
  }
}
```

* * *

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
.react-aria-ToggleButton {
  /* ... */
}
```

```
.react-aria-ToggleButton {
  /* ... */
}
```

```
.react-aria-ToggleButton {
  /* ... */
}
```

A custom `className` can also be specified on any component. This overrides the default `className` provided by React Aria with your own.

```
<ToggleButton className="my-button">
  {/* ... */}
</ToggleButton>
```

```
<ToggleButton className="my-button">
  {/* ... */}
</ToggleButton>
```

```
<ToggleButton className="my-button">
  {/* ... */}
</ToggleButton>
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
<ToggleButton
  className={({ isSelected }) => isSelected ? 'bg-blue-600' : 'bg-gray-600'}
/>
```

```
<ToggleButton
  className={({ isSelected }) =>
    isSelected ? 'bg-blue-600' : 'bg-gray-600'}
/>
```

```
<ToggleButton
  className={(
    { isSelected }
  ) =>
    isSelected
      ? 'bg-blue-600'
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

The states, selectors, and render props for `ToggleButton` are documented below.

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

`ToggleButton`

`ToggleButtonContext`

`[ToggleButtonProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/ToggleButton.tsx:ToggleButtonProps)`

`[HTMLButtonElement](https://developer.mozilla.org/docs/Web/API/HTMLButtonElement)`

This example shows a `ButtonGroup` component that renders a group of buttons. The entire group can be marked as disabled via the `isDisabled` prop, which is passed to all child buttons via the `ButtonContext` provider.

```
import {ToggleButtonContext} from 'react-aria-components';
import {Flag, Star} from 'lucide-react';

interface ButtonGroupProps {
  children?: React.ReactNode;
  isDisabled?: boolean;
}

function ButtonGroup({ children, isDisabled }: ButtonGroupProps) {
  return (
    <div style={{ display: 'flex', gap: 8 }}>
      <ToggleButtonContext.Provider value={{ isDisabled }}>        {children}
      </ToggleButtonContext.Provider>
    </div>
  );
}

<ButtonGroup isDisabled>
  <ToggleButton isSelected aria-label="Favorite">
    <Star size={18} />
  </ToggleButton>
  <ToggleButton aria-label="Flag">
    <Flag size={18} />
  </ToggleButton>
</ButtonGroup>
```

```
import {ToggleButtonContext} from 'react-aria-components';
import {Flag, Star} from 'lucide-react';

interface ButtonGroupProps {
  children?: React.ReactNode;
  isDisabled?: boolean;
}

function ButtonGroup(
  { children, isDisabled }: ButtonGroupProps
) {
  return (
    <div style={{ display: 'flex', gap: 8 }}>
      <ToggleButtonContext.Provider value={{ isDisabled }}>        {children}
      </ToggleButtonContext.Provider>
    </div>
  );
}

<ButtonGroup isDisabled>
  <ToggleButton isSelected aria-label="Favorite">
    <Star size={18} />
  </ToggleButton>
  <ToggleButton aria-label="Flag">
    <Flag size={18} />
  </ToggleButton>
</ButtonGroup>
```

```
import {ToggleButtonContext} from 'react-aria-components';
import {
  Flag,
  Star
} from 'lucide-react';

interface ButtonGroupProps {
  children?:
    React.ReactNode;
  isDisabled?: boolean;
}

function ButtonGroup(
  {
    children,
    isDisabled
  }: ButtonGroupProps
) {
  return (
    <div
      style={{
        display: 'flex',
        gap: 8
      }}
    >
      <ToggleButtonContext.Provider
        value={{
          isDisabled
        }}
      >        {children}
      </ToggleButtonContext.Provider>
    </div>
  );
}

<ButtonGroup
  isDisabled
>
  <ToggleButton
    isSelected
    aria-label="Favorite"
  >
    <Star size={18} />
  </ToggleButton>
  <ToggleButton aria-label="Flag">
    <Flag size={18} />
  </ToggleButton>
</ButtonGroup>
```

If you need to customize things further, such as intercepting events or customizing DOM elements, you can drop down to the lower level Hook-based API. Consume from `ToggleButtonContext` in your component with `[useContextProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:useContextProps)` to make it compatible with other React Aria Components. See [useToggleButton](https://react-spectrum.adobe.com/react-aria/useToggleButton.html) for more details.

This example uses [Framer Motion](https://www.framer.com/motion/) to create an `AnimatedToggleButton` component that animates based on the `isSelected` state. It can be used standalone or as a part of any React Aria component.

```
import type {ToggleButtonProps} from 'react-aria-components';
import {ToggleButtonContext, useContextProps} from 'react-aria-components';
import {useToggleState} from 'react-stately';
import {useToggleButton} from 'react-aria';
import {motion} from 'motion/react';

const AnimatedToggleButton = React.forwardRef(
  (props: ToggleButtonProps, ref: React.ForwardedRef<HTMLButtonElement>) => {
    // Merge the local props and ref with the ones provided via context.
    [props, ref] = useContextProps(props, ref, ButtonContext);
    let state = useToggleState(props);
    let { buttonProps } = useToggleButton(props, state, ref);
    return (
      <motion.button
        {...buttonProps}
        ref={ref}
        animate={{
          scale: state.isSelected ? 1.2 : 1
        }}
      >
        {props.children}
      </motion.button>
    );
  }
);
```

```
import type {ToggleButtonProps} from 'react-aria-components';
import {
  ToggleButtonContext,
  useContextProps
} from 'react-aria-components';
import {useToggleState} from 'react-stately';
import {useToggleButton} from 'react-aria';
import {motion} from 'motion/react';

const AnimatedToggleButton = React.forwardRef(
  (
    props: ToggleButtonProps,
    ref: React.ForwardedRef<HTMLButtonElement>
  ) => {
    // Merge the local props and ref with the ones provided via context.
    [props, ref] = useContextProps(
      props,
      ref,
      ButtonContext
    );
    let state = useToggleState(props);
    let { buttonProps } = useToggleButton(
      props,
      state,
      ref
    );
    return (
      <motion.button
        {...buttonProps}
        ref={ref}
        animate={{
          scale: state.isSelected ? 1.2 : 1
        }}
      >
        {props.children}
      </motion.button>
    );
  }
);
```

```
import type {ToggleButtonProps} from 'react-aria-components';
import {
  ToggleButtonContext,
  useContextProps
} from 'react-aria-components';
import {useToggleState} from 'react-stately';
import {useToggleButton} from 'react-aria';
import {motion} from 'motion/react';

const AnimatedToggleButton =
  React.forwardRef(
    (
      props:
        ToggleButtonProps,
      ref:
        React.ForwardedRef<
          HTMLButtonElement
        >
    ) => {
      // Merge the local props and ref with the ones provided via context.
      [props, ref] =
        useContextProps(
          props,
          ref,
          ButtonContext
        );
      let state =
        useToggleState(
          props
        );
      let {
        buttonProps
      } =
        useToggleButton(
          props,
          state,
          ref
        );
      return (
        <motion.button
          {...buttonProps}
          ref={ref}
          animate={{
            scale:
              state
                  .isSelected
                ? 1.2
                : 1
          }}
        >
          {props
            .children}
        </motion.button>
      );
    }
  );
```