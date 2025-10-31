# Switch

**Source**: [https://react-spectrum.adobe.com/react-aria/Switch.html](https://react-spectrum.adobe.com/react-aria/Switch.html)

> Documentation for Switch in the React Aria package.

---

A switch allows a user to turn a setting on or off.

* * *

```
import {Switch} from 'react-aria-components';

<Switch>
  <div className="indicator" />
  Low power mode
</Switch>
```

```
import {Switch} from 'react-aria-components';

<Switch>
  <div className="indicator" />
  Low power mode
</Switch>
```

```
import {Switch} from 'react-aria-components';

<Switch>
  <div className="indicator" />
  Low power mode
</Switch>
```

Show CSS

```
@import "@react-aria/example-theme";

.react-aria-Switch {
  display: flex;
  /* This is needed so the HiddenInput is positioned correctly */
  position: relative;
  align-items: center;
  gap: 0.571rem;
  font-size: 1.143rem;
  color: var(--text-color);
  forced-color-adjust: none;

  .indicator {
    width: 2rem;
    height: 1.143rem;
    border: 2px solid var(--border-color);
    background: var(--background-color);
    border-radius: 1.143rem;
    transition: all 200ms;

    &:before {
      content: '';
      display: block;
      margin: 0.143rem;
      width: 0.857rem;
      height: 0.857rem;
      background: var(--highlight-background);
      border-radius: 16px;
      transition: all 200ms;
    }
  }

  &[data-pressed] .indicator {
    border-color: var(--border-color-pressed);

    &:before {
      background: var(--highlight-background-pressed);
    }
  }

  &[data-selected] {
    .indicator {
      border-color: var(--highlight-background);
      background: var(--highlight-background);

      &:before {
        background: var(--field-background);
        transform: translateX(100%);
      }
    }

    &[data-pressed] {
      .indicator {
        border-color: var(--highlight-background-pressed);
        background: var(--highlight-background-pressed);
      }
    }
  }

  &[data-focus-visible] .indicator {
    outline: 2px solid var(--focus-ring-color);
    outline-offset: 2px;
  }
}
```

```
@import "@react-aria/example-theme";

.react-aria-Switch {
  display: flex;
  /* This is needed so the HiddenInput is positioned correctly */
  position: relative;
  align-items: center;
  gap: 0.571rem;
  font-size: 1.143rem;
  color: var(--text-color);
  forced-color-adjust: none;

  .indicator {
    width: 2rem;
    height: 1.143rem;
    border: 2px solid var(--border-color);
    background: var(--background-color);
    border-radius: 1.143rem;
    transition: all 200ms;

    &:before {
      content: '';
      display: block;
      margin: 0.143rem;
      width: 0.857rem;
      height: 0.857rem;
      background: var(--highlight-background);
      border-radius: 16px;
      transition: all 200ms;
    }
  }

  &[data-pressed] .indicator {
    border-color: var(--border-color-pressed);

    &:before {
      background: var(--highlight-background-pressed);
    }
  }

  &[data-selected] {
    .indicator {
      border-color: var(--highlight-background);
      background: var(--highlight-background);

      &:before {
        background: var(--field-background);
        transform: translateX(100%);
      }
    }

    &[data-pressed] {
      .indicator {
        border-color: var(--highlight-background-pressed);
        background: var(--highlight-background-pressed);
      }
    }
  }

  &[data-focus-visible] .indicator {
    outline: 2px solid var(--focus-ring-color);
    outline-offset: 2px;
  }
}
```

```
@import "@react-aria/example-theme";

.react-aria-Switch {
  display: flex;
  /* This is needed so the HiddenInput is positioned correctly */
  position: relative;
  align-items: center;
  gap: 0.571rem;
  font-size: 1.143rem;
  color: var(--text-color);
  forced-color-adjust: none;

  .indicator {
    width: 2rem;
    height: 1.143rem;
    border: 2px solid var(--border-color);
    background: var(--background-color);
    border-radius: 1.143rem;
    transition: all 200ms;

    &:before {
      content: '';
      display: block;
      margin: 0.143rem;
      width: 0.857rem;
      height: 0.857rem;
      background: var(--highlight-background);
      border-radius: 16px;
      transition: all 200ms;
    }
  }

  &[data-pressed] .indicator {
    border-color: var(--border-color-pressed);

    &:before {
      background: var(--highlight-background-pressed);
    }
  }

  &[data-selected] {
    .indicator {
      border-color: var(--highlight-background);
      background: var(--highlight-background);

      &:before {
        background: var(--field-background);
        transform: translateX(100%);
      }
    }

    &[data-pressed] {
      .indicator {
        border-color: var(--highlight-background-pressed);
        background: var(--highlight-background-pressed);
      }
    }
  }

  &[data-focus-visible] .indicator {
    outline: 2px solid var(--focus-ring-color);
    outline-offset: 2px;
  }
}
```

* * *

There is no native HTML element with switch styling. `<input type="checkbox">` is the closest semantically, but isn't styled or exposed to assistive technology as a switch. `Switch` helps achieve accessible switches that can be styled as needed.

-   **Styleable** – Hover, press, keyboard focus, and selection states are provided for easy styling. These states only apply when interacting with an appropriate input device, unlike CSS pseudo classes.
-   **Accessible** – Uses a visually hidden `<input>` element with `role="switch"` under the hood, which also enables HTML form integration and autofill. A label element is built-in to ensure the switch is usable with assistive technologies.
-   **Cross-browser** – Mouse, touch, keyboard, and focus interactions are normalized to ensure consistency across browsers and devices.

* * *

Shows a switch component with labels pointing to its parts, including the input, and label elements.Low power modeInputLabel

A switch consists of a visual selection indicator and a label. Users may click or touch a switch to toggle the selection state, or use the Tab key to navigate to it and the Space key to toggle it.

In most cases, switches should have a visual label. If the switch does not have a visible label, an `aria-label` or `aria-labelledby` prop must be passed instead to identify the element to assistive technology.

* * *

[![](https://react-spectrum.adobe.com/wifi-switch.85fc298e.png)

Wi-Fi Switch

An animated Wi-Fi Switch styled with Tailwind CSS.

](https://react-spectrum.adobe.com/react-aria/examples/wifi-switch.html)

* * *

To help kick-start your project, we offer starter kits that include example implementations of all React Aria components with various styling solutions. All components are fully styled, including support for dark mode, high contrast mode, and all UI states. Each starter comes with a pre-configured [Storybook](https://storybook.js.org/) that you can experiment with, or use as a starting point for your own component library.

* * *

If you will use a Switch in multiple places in your app, you can wrap all of the pieces into a reusable component. This way, the DOM structure, styling code, and other logic are defined in a single place and reused everywhere to ensure consistency.

This example wraps `Switch` and all of its children together into a single component.

```
import type {SwitchProps} from 'react-aria-components';

interface MySwitchProps extends Omit<SwitchProps, 'children'> {
  children: React.ReactNode
}

function MySwitch({children, ...props}: MySwitchProps) {
  return (
    <Switch {...props}>
      <div className="indicator" />
      {children}
    </Switch>
  );
}

<MySwitch>Wi-Fi</MySwitch>
```

```
import type {SwitchProps} from 'react-aria-components';

interface MySwitchProps
  extends Omit<SwitchProps, 'children'> {
  children: React.ReactNode;
}

function MySwitch({ children, ...props }: MySwitchProps) {
  return (
    <Switch {...props}>
      <div className="indicator" />
      {children}
    </Switch>
  );
}

<MySwitch>Wi-Fi</MySwitch>
```

```
import type {SwitchProps} from 'react-aria-components';

interface MySwitchProps
  extends
    Omit<
      SwitchProps,
      'children'
    > {
  children:
    React.ReactNode;
}

function MySwitch(
  { children, ...props }:
    MySwitchProps
) {
  return (
    <Switch {...props}>
      <div className="indicator" />
      {children}
    </Switch>
  );
}

<MySwitch>
  Wi-Fi
</MySwitch>
```

* * *

Switches are not selected by default. The `defaultSelected` prop can be used to set the default state.

```
<MySwitch defaultSelected>Wi-Fi</MySwitch>
```

```
<MySwitch defaultSelected>Wi-Fi</MySwitch>
```

```
<MySwitch
  defaultSelected
>
  Wi-Fi
</MySwitch>
```

The `isSelected` prop can be used to make the selected state controlled. The `onChange` event is fired when the user presses the switch, and receives the new value.

```
function Example() {
  let [selected, setSelected] = React.useState(false);

  return (
    <>
      <MySwitch isSelected={selected} onChange={setSelected}>
        Low power mode
      </MySwitch>
      <p>{selected ? 'Low' : 'High'} power mode active.</p>
    </>
  );
}
```

```
function Example() {
  let [selected, setSelected] = React.useState(false);

  return (
    <>
      <MySwitch
        isSelected={selected}
        onChange={setSelected}
      >
        Low power mode
      </MySwitch>
      <p>{selected ? 'Low' : 'High'} power mode active.</p>
    </>
  );
}
```

```
function Example() {
  let [
    selected,
    setSelected
  ] = React.useState(
    false
  );

  return (
    <>
      <MySwitch
        isSelected={selected}
        onChange={setSelected}
      >
        Low power mode
      </MySwitch>
      <p>
        {selected
          ? 'Low'
          : 'High'}{' '}
        power mode
        active.
      </p>
    </>
  );
}
```

Switch supports the `name` and `value` props for integration with HTML forms.

```
<MySwitch name="power" value="low">Low power mode</MySwitch>
```

```
<MySwitch name="power" value="low">Low power mode</MySwitch>
```

```
<MySwitch
  name="power"
  value="low"
>
  Low power mode
</MySwitch>
```

* * *

Switches can be disabled using the `isDisabled` prop.

```
<MySwitch isDisabled>Airplane Mode</MySwitch>
```

```
<MySwitch isDisabled>Airplane Mode</MySwitch>
```

```
<MySwitch isDisabled>
  Airplane Mode
</MySwitch>
```

Show CSS

```
.react-aria-Switch {
  &[data-disabled] {
    color: var(--text-color-disabled);

    .indicator {
      border-color: var(--border-color-disabled);

      &:before {
        background: var(--border-color-disabled);
      }
    }
  }
}
```

```
.react-aria-Switch {
  &[data-disabled] {
    color: var(--text-color-disabled);

    .indicator {
      border-color: var(--border-color-disabled);

      &:before {
        background: var(--border-color-disabled);
      }
    }
  }
}
```

```
.react-aria-Switch {
  &[data-disabled] {
    color: var(--text-color-disabled);

    .indicator {
      border-color: var(--border-color-disabled);

      &:before {
        background: var(--border-color-disabled);
      }
    }
  }
}
```

The `isReadOnly` prop makes the selection immutable. Unlike `isDisabled`, the Switch remains focusable. See the [MDN docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly) for more information.

```
<MySwitch isSelected isReadOnly>Bluetooth</MySwitch>
```

```
<MySwitch isSelected isReadOnly>Bluetooth</MySwitch>
```

```
<MySwitch
  isSelected
  isReadOnly
>
  Bluetooth
</MySwitch>
```

* * *

Name

Type

Description

`inputRef`

`[RefObject](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/refs.d.ts:RefObject)<[HTMLInputElement](https://developer.mozilla.org/docs/Web/API/HTMLInputElement) | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)>`

A ref for the HTML input element.

`defaultSelected`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether the Switch should be selected (uncontrolled).

`isSelected`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether the Switch should be selected (controlled).

`value`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

The value of the input element, used when submitting an HTML form. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefvalue).

`isDisabled`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether the input is disabled.

`isReadOnly`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether the input can be selected but not changed by the user.

`autoFocus`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether the element should receive focus on render.

`name`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

The name of the input element, used when submitting an HTML form. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname).

`form`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

The `<form>` element to associate the input with. The value of this attribute must be the id of a `<form>` in the same document. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#form).

`children`

`[ChildrenOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ChildrenOrFunction)<[SwitchRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Switch.tsx:SwitchRenderProps)>`

The children of the component. A function may be provided to alter the children based on component state.

`className`

`[ClassNameOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ClassNameOrFunction)<[SwitchRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Switch.tsx:SwitchRenderProps)>`

The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.

`style`

`[StyleOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:StyleOrFunction)<[SwitchRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Switch.tsx:SwitchRenderProps)>`

The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.

Events

Name

Type

Description

`onChange`

`( (isSelected: [boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) )) => void`

Handler that is called when the Switch's selection state changes.

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

`aria-controls`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

Identifies the element (or elements) whose contents or presence are controlled by the current element.

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
.react-aria-Switch {
  /* ... */
}
```

```
.react-aria-Switch {
  /* ... */
}
```

```
.react-aria-Switch {
  /* ... */
}
```

A custom `className` can also be specified on any component. This overrides the default `className` provided by React Aria with your own.

```
<Switch className="my-switch">
  {/* ... */}
</Switch>
```

```
<Switch className="my-switch">
  {/* ... */}
</Switch>
```

```
<Switch className="my-switch">
  {/* ... */}
</Switch>
```

In addition, some components support multiple UI states (e.g. focused, placeholder, readonly, etc.). React Aria components expose states using data attributes, which you can target in CSS selectors. For example:

```
.react-aria-Switch[data-pressed] {
  /* ... */
}
```

```
.react-aria-Switch[data-pressed] {
  /* ... */
}
```

```
.react-aria-Switch[data-pressed] {
  /* ... */
}
```

The `className` and `style` props also accept functions which receive states for styling. This lets you dynamically determine the classes or styles to apply, which is useful when using utility CSS libraries like [Tailwind](https://tailwindcss.com/).

```
<Switch
  className={({ isPressed }) => isPressed ? 'bg-gray-700' : 'bg-gray-600'}
/>
```

```
<Switch
  className={({ isPressed }) =>
    isPressed ? 'bg-gray-700' : 'bg-gray-600'}
/>
```

```
<Switch
  className={(
    { isPressed }
  ) =>
    isPressed
      ? 'bg-gray-700'
      : 'bg-gray-600'}
/>
```

Render props may also be used as children to alter what elements are rendered based on the current state. For example, you could render an extra element when the switch is selected.

```
<Switch>
  {({isSelected}) => (
    <>
      {isSelected && <OnIcon />}
      Wi-Fi
    </>
  )}
</Switch>
```

```
<Switch>
  {({isSelected}) => (
    <>
      {isSelected && <OnIcon />}
      Wi-Fi
    </>
  )}
</Switch>
```

```
<Switch>
  {(
    { isSelected }
  ) => (
    <>
      {isSelected && (
        <OnIcon />
      )}
      Wi-Fi
    </>
  )}
</Switch>
```

The states, selectors, and render props for `Switch` are documented below.

Name

CSS Selector

Description

`isSelected`

`[data-selected]`

Whether the switch is selected.

`isHovered`

`[data-hovered]`

Whether the switch is currently hovered with a mouse.

`isPressed`

`[data-pressed]`

Whether the switch is currently in a pressed state.

`isFocused`

`[data-focused]`

Whether the switch is focused, either via a mouse or keyboard.

`isFocusVisible`

`[data-focus-visible]`

Whether the switch is keyboard focused.

`isDisabled`

`[data-disabled]`

Whether the switch is disabled.

`isReadOnly`

`[data-readonly]`

Whether the switch is read only.

`state`

`—`

State of the switch.

* * *

All React Aria Components export a corresponding context that can be used to send props to them from a parent element. This enables you to build your own compositional APIs similar to those found in React Aria Components itself. You can send any prop or ref via context that you could pass to the corresponding component. The local props and ref on the component are merged with the ones passed via context, with the local props taking precedence (following the rules documented in [mergeProps](https://react-spectrum.adobe.com/react-aria/mergeProps.html)).

Component

Context

Props

Ref

`Switch`

`SwitchContext`

`[SwitchProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Switch.tsx:SwitchProps)`

`[HTMLLabelElement](https://developer.mozilla.org/docs/Web/API/HTMLLabelElement)`

This example shows a `SwitchDescription` component that accepts a switch in its children and renders a description element below it. It uses the [useId](https://react-spectrum.adobe.com/react-aria/useId.html) hook to generate a unique id for the description, and associates it with the switch via the `aria-describedby` attribute passed to the `SwitchContext` provider.

```
import {SwitchContext} from 'react-aria-components';
import {useId} from 'react-aria';

interface SwitchDescriptionProps {
  children?: React.ReactNode,
  description?: string
}

function SwitchDescription({children, description}: SwitchDescriptionProps) {
  let descriptionId = useId();
  return (
    <div>
      <SwitchContext.Provider value={{'aria-describedby': descriptionId}}>        {children}
      </SwitchContext.Provider>
      <small id={descriptionId}>{description}</small>
    </div>
  );
}

<SwitchDescription description="Connected to 'Starbucks Wifi'.">
  <MySwitch defaultSelected>Wi-Fi</MySwitch>
</SwitchDescription>
```

```
import {SwitchContext} from 'react-aria-components';
import {useId} from 'react-aria';

interface SwitchDescriptionProps {
  children?: React.ReactNode;
  description?: string;
}

function SwitchDescription(
  { children, description }: SwitchDescriptionProps
) {
  let descriptionId = useId();
  return (
    <div>
      <SwitchContext.Provider
        value={{ 'aria-describedby': descriptionId }}
      >        {children}
      </SwitchContext.Provider>
      <small id={descriptionId}>{description}</small>
    </div>
  );
}

<SwitchDescription description="Connected to 'Starbucks Wifi'.">
  <MySwitch defaultSelected>Wi-Fi</MySwitch>
</SwitchDescription>
```

```
import {SwitchContext} from 'react-aria-components';
import {useId} from 'react-aria';

interface SwitchDescriptionProps {
  children?:
    React.ReactNode;
  description?: string;
}

function SwitchDescription(
  {
    children,
    description
  }: SwitchDescriptionProps
) {
  let descriptionId =
    useId();
  return (
    <div>
      <SwitchContext.Provider
        value={{
          'aria-describedby':
            descriptionId
        }}
      >        {children}
      </SwitchContext.Provider>
      <small
        id={descriptionId}
      >
        {description}
      </small>
    </div>
  );
}

<SwitchDescription description="Connected to 'Starbucks Wifi'.">
  <MySwitch
    defaultSelected
  >
    Wi-Fi
  </MySwitch>
</SwitchDescription>
```

If you need to customize things further, such as accessing internal state or customizing DOM structure, you can drop down to the lower level Hook-based API. See [useSwitch](https://react-spectrum.adobe.com/react-aria/useSwitch.html) for more details.