# Checkbox

**Source**: [https://react-spectrum.adobe.com/react-aria/Checkbox.html](https://react-spectrum.adobe.com/react-aria/Checkbox.html)

> Documentation for Checkbox in the React Aria package.

---

A checkbox allows a user to select multiple items from a list of individual items, or to mark one individual item as selected.

* * *

```
import {Checkbox} from 'react-aria-components';

<Checkbox>
  <div className="checkbox">
    <svg viewBox="0 0 18 18" aria-hidden="true">
      <polyline points="1 9 7 14 15 4" />
    </svg>
  </div>
  Unsubscribe
</Checkbox>
```

```
import {Checkbox} from 'react-aria-components';

<Checkbox>
  <div className="checkbox">
    <svg viewBox="0 0 18 18" aria-hidden="true">
      <polyline points="1 9 7 14 15 4" />
    </svg>
  </div>
  Unsubscribe
</Checkbox>
```

```
import {Checkbox} from 'react-aria-components';

<Checkbox>
  <div className="checkbox">
    <svg
      viewBox="0 0 18 18"
      aria-hidden="true"
    >
      <polyline points="1 9 7 14 15 4" />
    </svg>
  </div>
  Unsubscribe
</Checkbox>
```

Show CSS

```
@import "@react-aria/example-theme";

.react-aria-Checkbox {
  --selected-color: var(--highlight-background);
  --selected-color-pressed: var(--highlight-background-pressed);
  --checkmark-color: var(--highlight-foreground);

  display: flex;
  /* This is needed so the HiddenInput is positioned correctly */
  position: relative;
  align-items: center;
  gap: 0.571rem;
  font-size: 1.143rem;
  color: var(--text-color);
  forced-color-adjust: none;

  .checkbox {
    width: 1.143rem;
    height: 1.143rem;
    border: 2px solid var(--border-color);
    border-radius: 4px;
    transition: all 200ms;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  svg {
    width: 1rem;
    height: 1rem;
    fill: none;
    stroke: var(--checkmark-color);
    stroke-width: 3px;
    stroke-dasharray: 22px;
    stroke-dashoffset: 66;
    transition: all 200ms;
  }

  &[data-pressed] .checkbox {
    border-color: var(--border-color-pressed);
  }

  &[data-focus-visible] .checkbox {
    outline: 2px solid var(--focus-ring-color);
    outline-offset: 2px;
  }

  &[data-selected],
  &[data-indeterminate] {
    .checkbox {
      border-color: var(--selected-color);
      background: var(--selected-color);
    }

    &[data-pressed] .checkbox {
      border-color: var(--selected-color-pressed);
      background: var(--selected-color-pressed);
    }

    svg {
      stroke-dashoffset: 44;
    }
  }

  &[data-indeterminate] {
    & svg {
      stroke: none;
      fill: var(--checkmark-color);
    }
  }
}
```

```
@import "@react-aria/example-theme";

.react-aria-Checkbox {
  --selected-color: var(--highlight-background);
  --selected-color-pressed: var(--highlight-background-pressed);
  --checkmark-color: var(--highlight-foreground);

  display: flex;
  /* This is needed so the HiddenInput is positioned correctly */
  position: relative;
  align-items: center;
  gap: 0.571rem;
  font-size: 1.143rem;
  color: var(--text-color);
  forced-color-adjust: none;

  .checkbox {
    width: 1.143rem;
    height: 1.143rem;
    border: 2px solid var(--border-color);
    border-radius: 4px;
    transition: all 200ms;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  svg {
    width: 1rem;
    height: 1rem;
    fill: none;
    stroke: var(--checkmark-color);
    stroke-width: 3px;
    stroke-dasharray: 22px;
    stroke-dashoffset: 66;
    transition: all 200ms;
  }

  &[data-pressed] .checkbox {
    border-color: var(--border-color-pressed);
  }

  &[data-focus-visible] .checkbox {
    outline: 2px solid var(--focus-ring-color);
    outline-offset: 2px;
  }

  &[data-selected],
  &[data-indeterminate] {
    .checkbox {
      border-color: var(--selected-color);
      background: var(--selected-color);
    }

    &[data-pressed] .checkbox {
      border-color: var(--selected-color-pressed);
      background: var(--selected-color-pressed);
    }

    svg {
      stroke-dashoffset: 44;
    }
  }

  &[data-indeterminate] {
    & svg {
      stroke: none;
      fill: var(--checkmark-color);
    }
  }
}
```

```
@import "@react-aria/example-theme";

.react-aria-Checkbox {
  --selected-color: var(--highlight-background);
  --selected-color-pressed: var(--highlight-background-pressed);
  --checkmark-color: var(--highlight-foreground);

  display: flex;
  /* This is needed so the HiddenInput is positioned correctly */
  position: relative;
  align-items: center;
  gap: 0.571rem;
  font-size: 1.143rem;
  color: var(--text-color);
  forced-color-adjust: none;

  .checkbox {
    width: 1.143rem;
    height: 1.143rem;
    border: 2px solid var(--border-color);
    border-radius: 4px;
    transition: all 200ms;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  svg {
    width: 1rem;
    height: 1rem;
    fill: none;
    stroke: var(--checkmark-color);
    stroke-width: 3px;
    stroke-dasharray: 22px;
    stroke-dashoffset: 66;
    transition: all 200ms;
  }

  &[data-pressed] .checkbox {
    border-color: var(--border-color-pressed);
  }

  &[data-focus-visible] .checkbox {
    outline: 2px solid var(--focus-ring-color);
    outline-offset: 2px;
  }

  &[data-selected],
  &[data-indeterminate] {
    .checkbox {
      border-color: var(--selected-color);
      background: var(--selected-color);
    }

    &[data-pressed] .checkbox {
      border-color: var(--selected-color-pressed);
      background: var(--selected-color-pressed);
    }

    svg {
      stroke-dashoffset: 44;
    }
  }

  &[data-indeterminate] {
    & svg {
      stroke: none;
      fill: var(--checkmark-color);
    }
  }
}
```

* * *

Checkboxes can be built with the [<input>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) HTML element, but this can be difficult to style. `Checkbox` helps achieve accessible checkboxes that can be styled as needed.

-   **Styleable** – Hover, press, keyboard focus, selection, and indeterminate states are provided for easy styling. These states only apply when interacting with an appropriate input device, unlike CSS pseudo classes.
-   **Accessible** – Uses a visually hidden `<input>` element under the hood, which also enables HTML form integration and autofill. A label element is built-in to ensure the checkbox is usable with assistive technologies.
-   **Cross-browser** – Mouse, touch, keyboard, and focus interactions are normalized to ensure consistency across browsers and devices.

* * *

Shows a checkbox component with labels pointing to its parts, including the input, and label elements.SubscribeLabelInput

A checkbox consists of a visual selection indicator and a label. Checkboxes support three selection states: checked, unchecked, and indeterminate. Users may click or touch a checkbox to toggle the selection state, or use the Tab key to navigate to it and the Space key to toggle it.

In most cases, checkboxes should have a visual label. If the checkbox does not have a visible label, an `aria-label` or `aria-labelledby` prop must be passed instead to identify the element to assistive technology.

* * *

To help kick-start your project, we offer starter kits that include example implementations of all React Aria components with various styling solutions. All components are fully styled, including support for dark mode, high contrast mode, and all UI states. Each starter comes with a pre-configured [Storybook](https://storybook.js.org/) that you can experiment with, or use as a starting point for your own component library.

* * *

If you will use a Checkbox in multiple places in your app, you can wrap all of the pieces into a reusable component. This way, the DOM structure, styling code, and other logic are defined in a single place and reused everywhere to ensure consistency.

This example wraps `Checkbox` and all of its children together into a single component. It also shows how to use render props to conditionally render a different indicator icon when the checkbox is in an indeterminate state.

```
import type {CheckboxProps} from 'react-aria-components';

export function MyCheckbox(
  { children, ...props }: Omit<CheckboxProps, 'children'> & {
    children?: React.ReactNode;
  }
) {
  return (
    <Checkbox {...props}>
      {({ isIndeterminate }) => (
        <>
          <div className="checkbox">
            <svg viewBox="0 0 18 18" aria-hidden="true">
              {isIndeterminate
                ? <rect x={1} y={7.5} width={15} height={3} />
                : <polyline points="1 9 7 14 15 4" />}
            </svg>
          </div>
          {children}
        </>
      )}
    </Checkbox>
  );
}

<MyCheckbox>Unsubscribe</MyCheckbox>
```

```
import type {CheckboxProps} from 'react-aria-components';

export function MyCheckbox(
  { children, ...props }:
    & Omit<CheckboxProps, 'children'>
    & { children?: React.ReactNode }
) {
  return (
    <Checkbox {...props}>
      {({ isIndeterminate }) => (
        <>
          <div className="checkbox">
            <svg viewBox="0 0 18 18" aria-hidden="true">
              {isIndeterminate
                ? (
                  <rect
                    x={1}
                    y={7.5}
                    width={15}
                    height={3}
                  />
                )
                : <polyline points="1 9 7 14 15 4" />}
            </svg>
          </div>
          {children}
        </>
      )}
    </Checkbox>
  );
}

<MyCheckbox>Unsubscribe</MyCheckbox>
```

```
import type {CheckboxProps} from 'react-aria-components';

export function MyCheckbox(
  {
    children,
    ...props
  }:
    & Omit<
      CheckboxProps,
      'children'
    >
    & {
      children?:
        React.ReactNode;
    }
) {
  return (
    <Checkbox {...props}>
      {(
        {
          isIndeterminate
        }
      ) => (
        <>
          <div className="checkbox">
            <svg
              viewBox="0 0 18 18"
              aria-hidden="true"
            >
              {isIndeterminate
                ? (
                  <rect
                    x={1}
                    y={7.5}
                    width={15}
                    height={3}
                  />
                )
                : (
                  <polyline points="1 9 7 14 15 4" />
                )}
            </svg>
          </div>
          {children}
        </>
      )}
    </Checkbox>
  );
}

<MyCheckbox>
  Unsubscribe
</MyCheckbox>
```

* * *

Checkboxes are not selected by default. The `defaultSelected` prop can be used to set the default state.

```
<MyCheckbox defaultSelected>Subscribe</MyCheckbox>
```

```
<MyCheckbox defaultSelected>Subscribe</MyCheckbox>
```

```
<MyCheckbox
  defaultSelected
>
  Subscribe
</MyCheckbox>
```

The `isSelected` prop can be used to make the selected state controlled. The `onChange` event is fired when the user presses the checkbox, and receives the new value.

```
function Example() {
  let [selected, setSelection] = React.useState(false);

  return (
    <>
      <MyCheckbox isSelected={selected} onChange={setSelection}>
        Subscribe
      </MyCheckbox>
      <p>{`You are ${selected ? 'subscribed' : 'unsubscribed'}`}</p>
    </>
  );
}
```

```
function Example() {
  let [selected, setSelection] = React.useState(false);

  return (
    <>
      <MyCheckbox
        isSelected={selected}
        onChange={setSelection}
      >
        Subscribe
      </MyCheckbox>
      <p>
        {`You are ${
          selected ? 'subscribed' : 'unsubscribed'
        }`}
      </p>
    </>
  );
}
```

```
function Example() {
  let [
    selected,
    setSelection
  ] = React.useState(
    false
  );

  return (
    <>
      <MyCheckbox
        isSelected={selected}
        onChange={setSelection}
      >
        Subscribe
      </MyCheckbox>
      <p>
        {`You are ${
          selected
            ? 'subscribed'
            : 'unsubscribed'
        }`}
      </p>
    </>
  );
}
```

A Checkbox can be in an indeterminate state, controlled using the `isIndeterminate` prop. This overrides the appearance of the Checkbox, whether selection is controlled or uncontrolled. The Checkbox will visually remain indeterminate until the `isIndeterminate` prop is set to false, regardless of user interaction.

```
<MyCheckbox isIndeterminate>Subscribe</MyCheckbox>
```

```
<MyCheckbox isIndeterminate>Subscribe</MyCheckbox>
```

```
<MyCheckbox
  isIndeterminate
>
  Subscribe
</MyCheckbox>
```

Checkbox supports the `name` and `value` props for integration with HTML forms.

```
<MyCheckbox name="newsletter" value="subscribe">Subscribe</MyCheckbox>
```

```
<MyCheckbox name="newsletter" value="subscribe">
  Subscribe
</MyCheckbox>
```

```
<MyCheckbox
  name="newsletter"
  value="subscribe"
>
  Subscribe
</MyCheckbox>
```

* * *

Checkboxes can display a validation state to communicate to the user if the current value is invalid. Implement your own validation logic in your app and set the `isInvalid` prop accordingly.

```
<MyCheckbox isInvalid>I accept the terms and conditions</MyCheckbox>
```

```
<MyCheckbox isInvalid>
  I accept the terms and conditions
</MyCheckbox>
```

```
<MyCheckbox isInvalid>
  I accept the terms
  and conditions
</MyCheckbox>
```

Show CSS

```
.react-aria-Checkbox {
  &[data-invalid] {
    .checkbox {
      --checkmark-color: var(--gray-50);
      border-color: var(--invalid-color);
    }

    &[data-pressed] .checkbox {
      border-color: var(--invalid-color-pressed);
    }

    &[data-selected],
    &[data-indeterminate] {
      .checkbox {
        background: var(--invalid-color);
      }

      &[data-pressed] .checkbox {
        background: var(--invalid-color-pressed);
      }
    }
  }
}
```

```
.react-aria-Checkbox {
  &[data-invalid] {
    .checkbox {
      --checkmark-color: var(--gray-50);
      border-color: var(--invalid-color);
    }

    &[data-pressed] .checkbox {
      border-color: var(--invalid-color-pressed);
    }

    &[data-selected],
    &[data-indeterminate] {
      .checkbox {
        background: var(--invalid-color);
      }

      &[data-pressed] .checkbox {
        background: var(--invalid-color-pressed);
      }
    }
  }
}
```

```
.react-aria-Checkbox {
  &[data-invalid] {
    .checkbox {
      --checkmark-color: var(--gray-50);
      border-color: var(--invalid-color);
    }

    &[data-pressed] .checkbox {
      border-color: var(--invalid-color-pressed);
    }

    &[data-selected],
    &[data-indeterminate] {
      .checkbox {
        background: var(--invalid-color);
      }

      &[data-pressed] .checkbox {
        background: var(--invalid-color-pressed);
      }
    }
  }
}
```

* * *

Checkboxes can be disabled using the `isDisabled` prop.

```
<MyCheckbox isDisabled>Subscribe</MyCheckbox>
```

```
<MyCheckbox isDisabled>Subscribe</MyCheckbox>
```

```
<MyCheckbox isDisabled>
  Subscribe
</MyCheckbox>
```

Show CSS

```
.react-aria-Checkbox {
  &[data-disabled] {
    color: var(--text-color-disabled);

    .checkbox {
      border-color: var(--border-color-disabled);
    }
  }
}
```

```
.react-aria-Checkbox {
  &[data-disabled] {
    color: var(--text-color-disabled);

    .checkbox {
      border-color: var(--border-color-disabled);
    }
  }
}
```

```
.react-aria-Checkbox {
  &[data-disabled] {
    color: var(--text-color-disabled);

    .checkbox {
      border-color: var(--border-color-disabled);
    }
  }
}
```

The `isReadOnly` prop makes the selection immutable. Unlike `isDisabled`, the Checkbox remains focusable. See the [MDN docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly) for more information.

```
<MyCheckbox isSelected isReadOnly>Agree</MyCheckbox>
```

```
<MyCheckbox isSelected isReadOnly>Agree</MyCheckbox>
```

```
<MyCheckbox
  isSelected
  isReadOnly
>
  Agree
</MyCheckbox>
```

* * *

Name

Type

Default

Description

`inputRef`

`[RefObject](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/refs.d.ts:RefObject)<[HTMLInputElement](https://developer.mozilla.org/docs/Web/API/HTMLInputElement) | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)>`

—

A ref for the HTML input element.

`isIndeterminate`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Indeterminism is presentational only. The indeterminate visual representation remains regardless of user interaction.

`value`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

The value of the input element, used when submitting an HTML form. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefvalue).

`defaultSelected`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the element should be selected (uncontrolled).

`isSelected`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the element should be selected (controlled).

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

`( (value: [boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) )) => [ValidationError](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/inputs.d.ts:ValidationError) | true | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null) | [undefined](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined)`

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

`[ChildrenOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ChildrenOrFunction)<[CheckboxRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Checkbox.tsx:CheckboxRenderProps)>`

—

The children of the component. A function may be provided to alter the children based on component state.

`className`

`[ClassNameOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ClassNameOrFunction)<[CheckboxRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Checkbox.tsx:CheckboxRenderProps)>`

—

The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.

`style`

`[StyleOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:StyleOrFunction)<[CheckboxRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Checkbox.tsx:CheckboxRenderProps)>`

—

The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.

Events

Name

Type

Description

`onChange`

`( (isSelected: [boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) )) => void`

Handler that is called when the element's selection state changes.

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

`aria-errormessage`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

Identifies the element that provides an error message for the object.

* * *

React Aria components can be styled in many ways, including using CSS classes, inline styles, utility classes (e.g. Tailwind), CSS-in-JS (e.g. Styled Components), etc. By default, all components include a builtin `className` attribute which can be targeted using CSS selectors. These follow the `react-aria-ComponentName` naming convention.

```
.react-aria-Checkbox {
  /* ... */
}
```

```
.react-aria-Checkbox {
  /* ... */
}
```

```
.react-aria-Checkbox {
  /* ... */
}
```

A custom `className` can also be specified on any component. This overrides the default `className` provided by React Aria with your own.

```
<Checkbox className="my-checkbox">
  {/* ... */}
</Checkbox>
```

```
<Checkbox className="my-checkbox">
  {/* ... */}
</Checkbox>
```

```
<Checkbox className="my-checkbox">
  {/* ... */}
</Checkbox>
```

In addition, some components support multiple UI states (e.g. focused, placeholder, readonly, etc.). React Aria components expose states using data attributes, which you can target in CSS selectors. For example:

```
.react-aria-Checkbox[data-pressed] {
  /* ... */
}
```

```
.react-aria-Checkbox[data-pressed] {
  /* ... */
}
```

```
.react-aria-Checkbox[data-pressed] {
  /* ... */
}
```

The `className` and `style` props also accept functions which receive states for styling. This lets you dynamically determine the classes or styles to apply, which is useful when using utility CSS libraries like [Tailwind](https://tailwindcss.com/).

```
<Checkbox
  className={({ isPressed }) => isPressed ? 'bg-gray-700' : 'bg-gray-600'}
/>
```

```
<Checkbox
  className={({ isPressed }) =>
    isPressed ? 'bg-gray-700' : 'bg-gray-600'}
/>
```

```
<Checkbox
  className={(
    { isPressed }
  ) =>
    isPressed
      ? 'bg-gray-700'
      : 'bg-gray-600'}
/>
```

Render props may also be used as children to alter what elements are rendered based on the current state. For example, you could render an extra element when the checkbox is selected.

```
<Checkbox>
  {({isSelected}) => (
    <>
      {isSelected && <CheckIcon />}
      Subscribe
    </>
  )}
</Checkbox>
```

```
<Checkbox>
  {({isSelected}) => (
    <>
      {isSelected && <CheckIcon />}
      Subscribe
    </>
  )}
</Checkbox>
```

```
<Checkbox>
  {(
    { isSelected }
  ) => (
    <>
      {isSelected && (
        <CheckIcon />
      )}
      Subscribe
    </>
  )}
</Checkbox>
```

The states, selectors, and render props for `Checkbox` are documented below.

Name

CSS Selector

Description

`isSelected`

`[data-selected]`

Whether the checkbox is selected.

`isIndeterminate`

`[data-indeterminate]`

Whether the checkbox is indeterminate.

`isHovered`

`[data-hovered]`

Whether the checkbox is currently hovered with a mouse.

`isPressed`

`[data-pressed]`

Whether the checkbox is currently in a pressed state.

`isFocused`

`[data-focused]`

Whether the checkbox is focused, either via a mouse or keyboard.

`isFocusVisible`

`[data-focus-visible]`

Whether the checkbox is keyboard focused.

`isDisabled`

`[data-disabled]`

Whether the checkbox is disabled.

`isReadOnly`

`[data-readonly]`

Whether the checkbox is read only.

`isInvalid`

`[data-invalid]`

Whether the checkbox invalid.

`isRequired`

`[data-required]`

Whether the checkbox is required.

* * *

All React Aria Components export a corresponding context that can be used to send props to them from a parent element. This enables you to build your own compositional APIs similar to those found in React Aria Components itself. You can send any prop or ref via context that you could pass to the corresponding component. The local props and ref on the component are merged with the ones passed via context, with the local props taking precedence (following the rules documented in [mergeProps](https://react-spectrum.adobe.com/react-aria/mergeProps.html)).

Component

Context

Props

Ref

`Checkbox`

`CheckboxContext`

`[CheckboxProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Checkbox.tsx:CheckboxProps)`

`[HTMLLabelElement](https://developer.mozilla.org/docs/Web/API/HTMLLabelElement)`

This example shows a `CheckboxDescription` component that accepts a checkbox in its children and renders a description element below it. It uses the [useId](https://react-spectrum.adobe.com/react-aria/useId.html) hook to generate a unique id for the description, and associates it with the checkbox via the `aria-describedby` attribute passed to the `CheckboxContext` provider.

```
import {CheckboxContext} from 'react-aria-components';
import {useId} from 'react-aria';

interface CheckboxDescriptionProps {
  children?: React.ReactNode;
  description?: string;
}

function CheckboxDescription(
  { children, description }: CheckboxDescriptionProps
) {
  let descriptionId = useId();
  return (
    <div>
      <CheckboxContext.Provider value={{ 'aria-describedby': descriptionId }}>        {children}
      </CheckboxContext.Provider>
      <small id={descriptionId}>{description}</small>
    </div>
  );
}

<CheckboxDescription description="You will receive our newsletter once per week. Unsubscribe at any time.">
  <MyCheckbox defaultSelected>Subscribe</MyCheckbox>
</CheckboxDescription>
```

```
import {CheckboxContext} from 'react-aria-components';
import {useId} from 'react-aria';

interface CheckboxDescriptionProps {
  children?: React.ReactNode;
  description?: string;
}

function CheckboxDescription(
  { children, description }: CheckboxDescriptionProps
) {
  let descriptionId = useId();
  return (
    <div>
      <CheckboxContext.Provider
        value={{ 'aria-describedby': descriptionId }}
      >        {children}
      </CheckboxContext.Provider>
      <small id={descriptionId}>{description}</small>
    </div>
  );
}

<CheckboxDescription description="You will receive our newsletter once per week. Unsubscribe at any time.">
  <MyCheckbox defaultSelected>Subscribe</MyCheckbox>
</CheckboxDescription>
```

```
import {CheckboxContext} from 'react-aria-components';
import {useId} from 'react-aria';

interface CheckboxDescriptionProps {
  children?:
    React.ReactNode;
  description?: string;
}

function CheckboxDescription(
  {
    children,
    description
  }: CheckboxDescriptionProps
) {
  let descriptionId =
    useId();
  return (
    <div>
      <CheckboxContext.Provider
        value={{
          'aria-describedby':
            descriptionId
        }}
      >        {children}
      </CheckboxContext.Provider>
      <small
        id={descriptionId}
      >
        {description}
      </small>
    </div>
  );
}

<CheckboxDescription description="You will receive our newsletter once per week. Unsubscribe at any time.">
  <MyCheckbox
    defaultSelected
  >
    Subscribe
  </MyCheckbox>
</CheckboxDescription>
```

If you need to customize things further, such as intercepting events or customizing DOM structure, you can drop down to the lower level Hook-based API. Consume from `CheckboxContext` in your component with `[useContextProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:useContextProps)` to make it compatible with other React Aria Components. See [useCheckbox](https://react-spectrum.adobe.com/react-aria/useCheckbox.html) for more details.

```
import type {CheckboxProps} from 'react-aria-components';
import {CheckboxContext, useContextProps} from 'react-aria-components';
import {useToggleState} from 'react-stately';
import {useCheckbox} from 'react-aria';

const MyCheckbox = React.forwardRef(
  (props: CheckboxProps, ref: React.ForwardedRef<HTMLInputElement>) => {
    // Merge the local props and ref with the ones provided via context.
    [props, ref] = useContextProps(props, ref, CheckboxContext);
    let state = useToggleState(props);
    let { inputProps } = useCheckbox(props, state, ref);
    return <input {...inputProps} ref={ref} />;
  }
);
```

```
import type {CheckboxProps} from 'react-aria-components';
import {
  CheckboxContext,
  useContextProps
} from 'react-aria-components';
import {useToggleState} from 'react-stately';
import {useCheckbox} from 'react-aria';

const MyCheckbox = React.forwardRef(
  (
    props: CheckboxProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    // Merge the local props and ref with the ones provided via context.
    [props, ref] = useContextProps(
      props,
      ref,
      CheckboxContext
    );
    let state = useToggleState(props);
    let { inputProps } = useCheckbox(props, state, ref);
    return <input {...inputProps} ref={ref} />;
  }
);
```

```
import type {CheckboxProps} from 'react-aria-components';
import {
  CheckboxContext,
  useContextProps
} from 'react-aria-components';
import {useToggleState} from 'react-stately';
import {useCheckbox} from 'react-aria';

const MyCheckbox = React
  .forwardRef(
    (
      props:
        CheckboxProps,
      ref:
        React.ForwardedRef<
          HTMLInputElement
        >
    ) => {
      // Merge the local props and ref with the ones provided via context.
      [props, ref] =
        useContextProps(
          props,
          ref,
          CheckboxContext
        );
      let state =
        useToggleState(
          props
        );
      let {
        inputProps
      } = useCheckbox(
        props,
        state,
        ref
      );
      return (
        <input
          {...inputProps}
          ref={ref}
        />
      );
    }
  );
```