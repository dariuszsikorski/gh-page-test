# Button

**Source**: [https://react-spectrum.adobe.com/react-aria/Button.html](https://react-spectrum.adobe.com/react-aria/Button.html)

> Documentation for Button in the React Aria package.

---

A button allows a user to perform an action, with mouse, touch, and keyboard interactions.

* * *

```
import {Button} from 'react-aria-components';

<Button onPress={() => alert('Hello world!')}>Press me</Button>
```

```
import {Button} from 'react-aria-components';

<Button onPress={() => alert('Hello world!')}>
  Press me
</Button>
```

```
import {Button} from 'react-aria-components';

<Button
  onPress={() =>
    alert(
      'Hello world!'
    )}
>
  Press me
</Button>
```

Show CSS

```
@import "@react-aria/example-theme";

.react-aria-Button {
  color: var(--text-color);
  background: var(--button-background);
  border: 1px solid var(--border-color);
  border-radius: 4px;
  appearance: none;
  vertical-align: middle;
  font-size: 1rem;
  text-align: center;
  margin: 0;
  outline: none;
  padding: 6px 10px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  &[data-pressed] {
    box-shadow: inset 0 1px 2px rgb(0 0 0 / 0.1);
    background: var(--button-background-pressed);
    border-color: var(--border-color-pressed);
  }

  &[data-focus-visible] {
    outline: 2px solid var(--focus-ring-color);
    outline-offset: -1px;
  }
}
```

```
@import "@react-aria/example-theme";

.react-aria-Button {
  color: var(--text-color);
  background: var(--button-background);
  border: 1px solid var(--border-color);
  border-radius: 4px;
  appearance: none;
  vertical-align: middle;
  font-size: 1rem;
  text-align: center;
  margin: 0;
  outline: none;
  padding: 6px 10px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  &[data-pressed] {
    box-shadow: inset 0 1px 2px rgb(0 0 0 / 0.1);
    background: var(--button-background-pressed);
    border-color: var(--border-color-pressed);
  }

  &[data-focus-visible] {
    outline: 2px solid var(--focus-ring-color);
    outline-offset: -1px;
  }
}
```

```
@import "@react-aria/example-theme";

.react-aria-Button {
  color: var(--text-color);
  background: var(--button-background);
  border: 1px solid var(--border-color);
  border-radius: 4px;
  appearance: none;
  vertical-align: middle;
  font-size: 1rem;
  text-align: center;
  margin: 0;
  outline: none;
  padding: 6px 10px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  &[data-pressed] {
    box-shadow: inset 0 1px 2px rgb(0 0 0 / 0.1);
    background: var(--button-background-pressed);
    border-color: var(--border-color-pressed);
  }

  &[data-focus-visible] {
    outline: 2px solid var(--focus-ring-color);
    outline-offset: -1px;
  }
}
```

* * *

On the surface, building a custom styled button seems simple. However, there are many cross browser inconsistencies in interactions and accessibility features to consider. `Button` handles all of these interactions for you, so you can focus on the styling.

-   **Styleable** – Hover, press, and keyboard focus states are provided for easy styling. These states only apply when interacting with an appropriate input device, unlike CSS pseudo classes.
-   **Accessible** – Uses a native `<button>` element under the hood, with support for the Space and Enter keys.
-   **Cross-browser** – Mouse, touch, keyboard, and focus interactions are normalized to ensure consistency across browsers and devices.

Read our [blog post](https://react-spectrum.adobe.com/blog/building-a-button-part-1.html) about the complexities of building buttons that work well across devices and interaction methods to learn more.

* * *

Buttons consist of a clickable area usually containing a textual label or an icon that users can click to perform an action. In addition, keyboard users may activate buttons using the Space or Enter keys.

If a visual label is not provided (e.g. an icon only button), then an `aria-label` or `aria-labelledby` prop must be passed to identify the button to assistive technology.

* * *

[![](https://react-spectrum.adobe.com/ripple-button.74b256b2.png)

Ripple Button

A button with an animated ripple effect styled with Tailwind CSS.

](https://react-spectrum.adobe.com/react-aria/examples/ripple-button.html)

* * *

To help kick-start your project, we offer starter kits that include example implementations of all React Aria components with various styling solutions. All components are fully styled, including support for dark mode, high contrast mode, and all UI states. Each starter comes with a pre-configured [Storybook](https://storybook.js.org/) that you can experiment with, or use as a starting point for your own component library.

* * *

`Button` supports user interactions via mouse, keyboard, and touch. You can handle all of these via the `onPress` prop. This is similar to the standard `onClick` event, but normalized to support all interaction methods equally. In addition, the `onPressStart`, `onPressEnd`, and `onPressChange` events are fired as the user interacts with the button.

Each of these handlers receives a `[PressEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/events.d.ts:PressEvent)`, which exposes information about the target and the type of event that triggered the interaction. See [usePress](https://react-spectrum.adobe.com/react-aria/usePress.html) for more details.

```
function Example() {
  let [pointerType, setPointerType] = React.useState('');

  return (
    <>
      <Button
        onPressStart={(e) => setPointerType(e.pointerType)}
        onPressEnd={() => setPointerType('')}
      >
        Press me
      </Button>
      <p>
        {pointerType
          ? `You are pressing the button with a ${pointerType}!`
          : 'Ready to be pressed.'}
      </p>
    </>
  );
}
```

```
function Example() {
  let [pointerType, setPointerType] = React.useState('');

  return (
    <>
      <Button
        onPressStart={(e) => setPointerType(e.pointerType)}
        onPressEnd={() => setPointerType('')}
      >
        Press me
      </Button>
      <p>
        {pointerType
          ? `You are pressing the button with a ${pointerType}!`
          : 'Ready to be pressed.'}
      </p>
    </>
  );
}
```

```
function Example() {
  let [
    pointerType,
    setPointerType
  ] = React.useState('');

  return (
    <>
      <Button
        onPressStart={(e) =>
          setPointerType(
            e.pointerType
          )}
        onPressEnd={() =>
          setPointerType(
            ''
          )}
      >
        Press me
      </Button>
      <p>
        {pointerType
          ? `You are pressing the button with a ${pointerType}!`
          : 'Ready to be pressed.'}
      </p>
    </>
  );
}
```

* * *

A `Button` can be disabled using the `isDisabled` prop.

```
<Button isDisabled>Pin</Button>
```

```
<Button isDisabled>Pin</Button>
```

```
<Button isDisabled>
  Pin
</Button>
```

Show CSS

```
.react-aria-Button {
  &[data-disabled]{
    border-color: var(--border-color-disabled);
    color: var(--text-color-disabled);
  }
}
```

```
.react-aria-Button {
  &[data-disabled]{
    border-color: var(--border-color-disabled);
    color: var(--text-color-disabled);
  }
}
```

```
.react-aria-Button {
  &[data-disabled]{
    border-color: var(--border-color-disabled);
    color: var(--text-color-disabled);
  }
}
```

* * *

A `Button` can be put into a pending state using the `isPending` prop. This is useful when an action takes a long time to complete, and you want to provide feedback to the user that the action is in progress. The pending state announces the state change to assistive technologies and disables interactions with the exception of focus.

A [ProgressBar](https://react-spectrum.adobe.com/react-aria/ProgressBar.html) component is required to show the pending state correctly. Make sure to internationalize the `aria-label` you pass to the [ProgressBar](https://react-spectrum.adobe.com/react-aria/ProgressBar.html) component.

```
import {useState} from 'react';

function PendingButton(props) {
  let [isPending, setPending] = useState(false);

  let handlePress = (e) => {
    setPending(true);
    setTimeout(() => {
      setPending(false);
    }, 5000);
  };

  return (
    <Button
      {...props}
      isPending={isPending}
      onPress={handlePress}>
        {({isPending}) => (
          <>
            {!isPending && <span>Save</span>}
            {isPending && (
              // See below
              <MyProgressCircle aria-label="Saving..." isIndeterminate />
            )}
          </>
        )}
    </Button>
  );
}
```

```
import {useState} from 'react';

function PendingButton(props) {
  let [isPending, setPending] = useState(false);

  let handlePress = (e) => {
    setPending(true);
    setTimeout(() => {
      setPending(false);
    }, 5000);
  };

  return (
    <Button
      {...props}
      isPending={isPending}
      onPress={handlePress}
    >
      {({ isPending }) => (
        <>
          {!isPending && <span>Save</span>}
          {isPending && (
            // See below
            <MyProgressCircle
              aria-label="Saving..."
              isIndeterminate
            />
          )}
        </>
      )}
    </Button>
  );
}
```

```
import {useState} from 'react';

function PendingButton(
  props
) {
  let [
    isPending,
    setPending
  ] = useState(false);

  let handlePress = (
    e
  ) => {
    setPending(true);
    setTimeout(() => {
      setPending(false);
    }, 5000);
  };

  return (
    <Button
      {...props}
      isPending={isPending}
      onPress={handlePress}
    >
      {(
        { isPending }
      ) => (
        <>
          {!isPending &&
            (
              <span>
                Save
              </span>
            )}
          {isPending && (
            // See below
            <MyProgressCircle
              aria-label="Saving..."
              isIndeterminate
            />
          )}
        </>
      )}
    </Button>
  );
}
```

MyProgressCircle

```
import {ProgressBar} from 'react-aria-components';
import type {ProgressBarProps} from 'react-aria-components';

function MyProgressCircle(props: ProgressBarProps) {
  return (
    <ProgressBar {...props}>
      <svg
        width="16"
        height="16"
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

function MyProgressCircle(props: ProgressBarProps) {
  return (
    <ProgressBar {...props}>
      <svg
        width="16"
        height="16"
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

function MyProgressCircle(
  props: ProgressBarProps
) {
  return (
    <ProgressBar
      {...props}
    >
      <svg
        width="16"
        height="16"
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

**Note:** The `ProgressBar` must be in the accessibility tree as soon as the button becomes pending, even if it is not visible. For example, if you'd like to delay showing a spinner until a minimum amount of time passes, you could use `opacity: 0` to hide it so it is still available to screen readers. Do not use `visibility: hidden` or `display: none` since these remove the element from the accessibility tree.

Additionally, you may choose to keep the button's contents in the DOM while the button is pending, e.g. to preserve the button's layout. If you hide the contents with `visibility: hidden`, the accessibility label for the button will only include the ProgressBar, so it should have a descriptive `aria-label` (e.g. "Saving"). You can also choose to keep the button's contents in the accessibility tree by using `opacity: 0`, in which case the `ProgressBar`'s label will be combined with the contents (e.g. "Save, pending").

Try the above example and the one below with a screen reader to see the difference in behavior.

Show example

```
function PendingDelayed(props) {
  let [isPending, setPending] = useState(false);

  let handlePress = (e) => {
    setPending(true);
    setTimeout(() => {
      setPending(false);
    }, 5000);
  };

  return (
    <Button
      {...props}
      isPending={isPending}
      onPress={handlePress}
      style={{ position: 'relative' }}
    >
      {({ isPending }) => (
        <>
          <span className={isPending ? 'pending' : undefined}>Save</span>
          {isPending && (
            <MyProgressCircle
              aria-label="in progress"
              isIndeterminate
              className="spinner"
            />
          )}
        </>
      )}
    </Button>
  );
}
```

```
function PendingDelayed(props) {
  let [isPending, setPending] = useState(false);

  let handlePress = (e) => {
    setPending(true);
    setTimeout(() => {
      setPending(false);
    }, 5000);
  };

  return (
    <Button
      {...props}
      isPending={isPending}
      onPress={handlePress}
      style={{ position: 'relative' }}
    >
      {({ isPending }) => (
        <>
          <span
            className={isPending ? 'pending' : undefined}
          >
            Save
          </span>
          {isPending && (
            <MyProgressCircle
              aria-label="in progress"
              isIndeterminate
              className="spinner"
            />
          )}
        </>
      )}
    </Button>
  );
}
```

```
function PendingDelayed(
  props
) {
  let [
    isPending,
    setPending
  ] = useState(false);

  let handlePress = (
    e
  ) => {
    setPending(true);
    setTimeout(() => {
      setPending(false);
    }, 5000);
  };

  return (
    <Button
      {...props}
      isPending={isPending}
      onPress={handlePress}
      style={{
        position:
          'relative'
      }}
    >
      {(
        { isPending }
      ) => (
        <>
          <span
            className={isPending
              ? 'pending'
              : undefined}
          >
            Save
          </span>
          {isPending && (
            <MyProgressCircle
              aria-label="in progress"
              isIndeterminate
              className="spinner"
            />
          )}
        </>
      )}
    </Button>
  );
}
```

```
@keyframes toggle {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: toggle 1s steps(1);
  opacity: 1;
}

.pending {
  animation: toggle 1s reverse steps(1, jump-start);
  opacity: 0;
}
```

```
@keyframes toggle {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: toggle 1s steps(1);
  opacity: 1;
}

.pending {
  animation: toggle 1s reverse steps(1, jump-start);
  opacity: 0;
}
```

```
@keyframes toggle {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: toggle 1s steps(1);
  opacity: 1;
}

.pending {
  animation: toggle 1s reverse steps(1, jump-start);
  opacity: 0;
}
```

* * *

The `Button` component always represents a button semantically. To create a link that visually looks like a button, use the [Link](https://react-spectrum.adobe.com/react-aria/Link.html) component instead. You can reuse the same styles you apply to the `Button` component on the `Link`.

```
import {Link} from 'react-aria-components';

<Link className="react-aria-Button" href="https://adobe.com/" target="_blank">
  Adobe
</Link>
```

```
import {Link} from 'react-aria-components';

<Link
  className="react-aria-Button"
  href="https://adobe.com/"
  target="_blank"
>
  Adobe
</Link>
```

```
import {Link} from 'react-aria-components';

<Link
  className="react-aria-Button"
  href="https://adobe.com/"
  target="_blank"
>
  Adobe
</Link>
```

* * *

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

* * *

React Aria components can be styled in many ways, including using CSS classes, inline styles, utility classes (e.g. Tailwind), CSS-in-JS (e.g. Styled Components), etc. By default, all components include a builtin `className` attribute which can be targeted using CSS selectors. These follow the `react-aria-ComponentName` naming convention.

```
.react-aria-Button {
  /* ... */
}
```

```
.react-aria-Button {
  /* ... */
}
```

```
.react-aria-Button {
  /* ... */
}
```

A custom `className` can also be specified on any component. This overrides the default `className` provided by React Aria with your own.

```
<Button className="my-button">
  {/* ... */}
</Button>
```

```
<Button className="my-button">
  {/* ... */}
</Button>
```

```
<Button className="my-button">
  {/* ... */}
</Button>
```

In addition, some components support multiple UI states (e.g. focused, placeholder, readonly, etc.). React Aria components expose states using data attributes, which you can target in CSS selectors. For example:

```
.react-aria-Button[data-pressed] {
  /* ... */
}
```

```
.react-aria-Button[data-pressed] {
  /* ... */
}
```

```
.react-aria-Button[data-pressed] {
  /* ... */
}
```

The `className` and `style` props also accept functions which receive states for styling. This lets you dynamically determine the classes or styles to apply, which is useful when using utility CSS libraries like [Tailwind](https://tailwindcss.com/).

```
<Button
  className={({ isPressed }) => isPressed ? 'bg-gray-700' : 'bg-gray-600'}
/>
```

```
<Button
  className={({ isPressed }) =>
    isPressed ? 'bg-gray-700' : 'bg-gray-600'}
/>
```

```
<Button
  className={(
    { isPressed }
  ) =>
    isPressed
      ? 'bg-gray-700'
      : 'bg-gray-600'}
/>
```

Render props may also be used as children to alter what elements are rendered based on the current state. For example, you could render an extra element when the button is in a pressed state.

```
<Button>
  {({isPressed}) => (
    <>
      {isPressed && <PressHighlight />}
      Press me
    </>
  )}
</Button>
```

```
<Button>
  {({isPressed}) => (
    <>
      {isPressed && <PressHighlight />}
      Press me
    </>
  )}
</Button>
```

```
<Button>
  {({ isPressed }) => (
    <>
      {isPressed && (
        <PressHighlight />
      )}
      Press me
    </>
  )}
</Button>
```

The states, selectors, and render props for `Button` are documented below.

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

* * *

All React Aria Components export a corresponding context that can be used to send props to them from a parent element. This enables you to build your own compositional APIs similar to those found in React Aria Components itself. You can send any prop or ref via context that you could pass to the corresponding component. The local props and ref on the component are merged with the ones passed via context, with the local props taking precedence (following the rules documented in [mergeProps](https://react-spectrum.adobe.com/react-aria/mergeProps.html)).

Component

Context

Props

Ref

`Button`

`ButtonContext`

`[ButtonProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Button.tsx:ButtonProps)`

`[HTMLButtonElement](https://developer.mozilla.org/docs/Web/API/HTMLButtonElement)`

This example shows a `ButtonGroup` component that renders a group of buttons. The entire group can be marked as disabled via the `isDisabled` prop, which is passed to all child buttons via the `ButtonContext` provider.

```
import {ButtonContext} from 'react-aria-components';

interface ButtonGroupProps {
  children?: React.ReactNode,
  isDisabled?: boolean
}

function ButtonGroup({children, isDisabled}: ButtonGroupProps) {
  return (
    <div style={{display: 'flex', gap: 8}}>
      <ButtonContext.Provider value={{isDisabled}}>        {children}
      </ButtonContext.Provider>
    </div>
  );
}

<ButtonGroup isDisabled>
  <Button>Save</Button>
  <Button>Publish</Button>
</ButtonGroup>
```

```
import {ButtonContext} from 'react-aria-components';

interface ButtonGroupProps {
  children?: React.ReactNode;
  isDisabled?: boolean;
}

function ButtonGroup(
  { children, isDisabled }: ButtonGroupProps
) {
  return (
    <div style={{ display: 'flex', gap: 8 }}>
      <ButtonContext.Provider value={{ isDisabled }}>        {children}
      </ButtonContext.Provider>
    </div>
  );
}

<ButtonGroup isDisabled>
  <Button>Save</Button>
  <Button>Publish</Button>
</ButtonGroup>
```

```
import {ButtonContext} from 'react-aria-components';

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
      <ButtonContext.Provider
        value={{
          isDisabled
        }}
      >        {children}
      </ButtonContext.Provider>
    </div>
  );
}

<ButtonGroup
  isDisabled
>
  <Button>Save</Button>
  <Button>
    Publish
  </Button>
</ButtonGroup>
```

If you need to customize things further, such as intercepting events or customizing DOM elements, you can drop down to the lower level Hook-based API. Consume from `ButtonContext` in your component with `[useContextProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:useContextProps)` to make it compatible with other React Aria Components. See [useButton](https://react-spectrum.adobe.com/react-aria/useButton.html) for more details.

This example uses [Framer Motion](https://www.framer.com/motion/) to create an `AnimatedButton` component that animates based on the `isPressed` state provided by `useButton`. It can be used standalone or as a part of any React Aria component.

```
import type {ButtonProps} from 'react-aria-components';
import {ButtonContext, useContextProps} from 'react-aria-components';
import {useButton} from 'react-aria';
import {motion} from 'motion/react';

const AnimatedButton = React.forwardRef(
  (props: ButtonProps, ref: React.ForwardedRef<HTMLButtonElement>) => {
    // Merge the local props and ref with the ones provided via context.
    [props, ref] = useContextProps(props, ref, ButtonContext);
    let { buttonProps, isPressed } = useButton(props, ref);
    return (
      <motion.button
        {...buttonProps}
        ref={ref}
        animate={{
          scale: isPressed ? 0.9 : 1
        }}
      >
        {props.children}
      </motion.button>
    );
  }
);
```

```
import type {ButtonProps} from 'react-aria-components';
import {
  ButtonContext,
  useContextProps
} from 'react-aria-components';
import {useButton} from 'react-aria';
import {motion} from 'motion/react';

const AnimatedButton = React.forwardRef(
  (
    props: ButtonProps,
    ref: React.ForwardedRef<HTMLButtonElement>
  ) => {
    // Merge the local props and ref with the ones provided via context.
    [props, ref] = useContextProps(
      props,
      ref,
      ButtonContext
    );
    let { buttonProps, isPressed } = useButton(props, ref);
    return (
      <motion.button
        {...buttonProps}
        ref={ref}
        animate={{
          scale: isPressed ? 0.9 : 1
        }}
      >
        {props.children}
      </motion.button>
    );
  }
);
```

```
import type {ButtonProps} from 'react-aria-components';
import {
  ButtonContext,
  useContextProps
} from 'react-aria-components';
import {useButton} from 'react-aria';
import {motion} from 'motion/react';

const AnimatedButton =
  React.forwardRef(
    (
      props: ButtonProps,
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
      let {
        buttonProps,
        isPressed
      } = useButton(
        props,
        ref
      );
      return (
        <motion.button
          {...buttonProps}
          ref={ref}
          animate={{
            scale:
              isPressed
                ? 0.9
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