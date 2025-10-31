# useButton

**Source**: [https://react-spectrum.adobe.com/react-aria/useButton.html](https://react-spectrum.adobe.com/react-aria/useButton.html)

> Documentation for useButton in the React Aria package.

---

Provides the behavior and accessibility implementation for a button component. Handles mouse, keyboard, and touch interactions, focus behavior, and ARIA props for both native button elements and custom element types.

* * *

`useButton( (props: [AriaButtonOptions](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/button/src/useButton.ts:AriaButtonOptions)<ElementType>, , ref: RefObject<any> )): [ButtonAria](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/button/src/useButton.ts:ButtonAria)<[HTMLAttributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)<any>>`

* * *

On the surface, building a custom styled button seems simple. However, there are many cross browser inconsistencies in interactions and accessibility features to consider. `useButton` handles all of these interactions for you, so you can focus on the styling.

-   Native HTML `<button>` support
-   `<a>` and custom element type support via ARIA
-   Mouse and touch event handling, and press state management
-   Keyboard focus management and cross browser normalization
-   Keyboard event support for Space and Enter keys

Read our [blog post](https://react-spectrum.adobe.com/blog/building-a-button-part-1.html) about the complexities of building buttons that work well across devices and interaction methods.

* * *

Buttons consist of a clickable area usually containing a textual label or an icon that users can click to perform an action. In addition, keyboard users may activate buttons using the Space or Enter keys.

If a visual label is not provided (e.g. an icon only button), then an `aria-label` or `aria-labelledby` prop must be passed to identify the button to assistive technology.

* * *

By default, `useButton` assumes that you are using it with a native `<button>` element.

```
import {useButton} from 'react-aria';
import {useRef} from 'react';

function Button(props) {
  let ref = useRef<HTMLButtonElement | null>(null);
  let { buttonProps } = useButton(props, ref);
  let { children } = props;

  return (
    <button {...buttonProps} ref={ref}>
      {children}
    </button>
  );
}

<Button onPress={() => alert('Button pressed!')}>Test</Button>
```

```
import {useButton} from 'react-aria';
import {useRef} from 'react';

function Button(props) {
  let ref = useRef<HTMLButtonElement | null>(null);
  let { buttonProps } = useButton(props, ref);
  let { children } = props;

  return (
    <button {...buttonProps} ref={ref}>
      {children}
    </button>
  );
}

<Button onPress={() => alert('Button pressed!')}>
  Test
</Button>
```

```
import {useButton} from 'react-aria';
import {useRef} from 'react';

function Button(props) {
  let ref = useRef<
    | HTMLButtonElement
    | null
  >(null);
  let { buttonProps } =
    useButton(
      props,
      ref
    );
  let { children } =
    props;

  return (
    <button
      {...buttonProps}
      ref={ref}
    >
      {children}
    </button>
  );
}

<Button
  onPress={() =>
    alert(
      'Button pressed!'
    )}
>
  Test
</Button>
```

* * *

Sometimes you might need to use an element other than a native `<button>`. `useButton` supports this via the `elementType` prop. When used with an element other than a native button, `useButton` automatically applies the necessary ARIA roles and attributes to ensure that the element is exposed to assistive technology as a button.

In addition, this example shows usage of the `isPressed` value returned by `useButton` to properly style the button's active state. You could use the CSS `:active` pseudo class for this, but `isPressed` properly handles when the user drags their pointer off of the button, along with keyboard support and better touch screen support.

```
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
        background: isPressed ? 'darkgreen' : 'green',
        color: 'white',
        padding: 10,
        cursor: 'pointer',
        userSelect: 'none',
        WebkitUserSelect: 'none'
      }}
      ref={ref}
    >
      {children}
    </span>
  );
}

<Button onPress={() => alert('Button pressed!')}>Test</Button>
```

```
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
        background: isPressed ? 'darkgreen' : 'green',
        color: 'white',
        padding: 10,
        cursor: 'pointer',
        userSelect: 'none',
        WebkitUserSelect: 'none'
      }}
      ref={ref}
    >
      {children}
    </span>
  );
}

<Button onPress={() => alert('Button pressed!')}>
  Test
</Button>
```

```
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
            ? 'darkgreen'
            : 'green',
        color: 'white',
        padding: 10,
        cursor:
          'pointer',
        userSelect:
          'none',
        WebkitUserSelect:
          'none'
      }}
      ref={ref}
    >
      {children}
    </span>
  );
}

<Button
  onPress={() =>
    alert(
      'Button pressed!'
    )}
>
  Test
</Button>
```

* * *

The following examples show how to use the `Button` component created in the above example.

`useButton` supports user interactions via mouse, keyboard, and touch. You can handle all of these via the `onPress` prop. This is similar to the standard `onClick` event, but normalized to support all interaction methods equally. In addition, the `onPressStart`, `onPressEnd`, and `onPressChange` events are fired as the user interacts with the button.

Each of these handlers receives a `[PressEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/events.d.ts:PressEvent)`, which exposes information about the target and the type of event that triggered the interaction. See [usePress](https://react-spectrum.adobe.com/react-aria/usePress.html) for more details.

```
function Example() {
  let [pointerType, setPointerType] = React.useState(null);

  return (
    <>
      <Button
        onPressStart={(e) => setPointerType(e.pointerType)}
        onPressEnd={(e) => setPointerType(null)}
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
  let [pointerType, setPointerType] = React.useState(null);

  return (
    <>
      <Button
        onPressStart={(e) => setPointerType(e.pointerType)}
        onPressEnd={(e) => setPointerType(null)}
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
  ] = React.useState(
    null
  );

  return (
    <>
      <Button
        onPressStart={(e) =>
          setPointerType(
            e.pointerType
          )}
        onPressEnd={(e) =>
          setPointerType(
            null
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