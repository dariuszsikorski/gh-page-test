# useLink

**Source**: [https://react-spectrum.adobe.com/react-aria/useLink.html](https://react-spectrum.adobe.com/react-aria/useLink.html)

> Documentation for useLink in the React Aria package.

---

Provides the behavior and accessibility implementation for a link component. A link allows a user to navigate to another page or resource within a web page or application.

* * *

`useLink( (props: [AriaLinkOptions](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/link/src/useLink.ts:AriaLinkOptions), , ref: [RefObject](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/refs.d.ts:RefObject)<[FocusableElement](https://developer.mozilla.org/en-US/docs/Web/API/Element) |  | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)> )): [LinkAria](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/link/src/useLink.ts:LinkAria)`

* * *

Links can be created in HTML with the [<a>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a) element with an `href` attribute. However, if the link does not have an href, and is handled client side with JavaScript instead, it will not be exposed to assistive technology properly. `useLink` helps achieve accessible links with either native HTML elements or custom element types.

-   Support for mouse, touch, and keyboard interactions
-   Support for navigation links via `<a>` elements or custom element types via ARIA
-   Support for disabled links

* * *

A link consists of a pressable area usually containing a textual label or an icon that users can click or tap to navigate to another page or resource. In addition, keyboard users may activate links using the Enter key.

`useLink` returns props to be spread onto the link element:

Name

Type

Description

`linkProps`

`[DOMAttributes](https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes)`

Props for the link element.

`isPressed`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether the link is currently pressed.

If a visual label is not provided (e.g. an icon or image only link), then an `aria-label` or `aria-labelledby` prop must be passed to identify the link to assistive technology.

* * *

This example shows a basic link using a native `<a>` element.

```
import {useLink} from 'react-aria';

function Link(props) {
  let ref = React.useRef(null);
  let { linkProps } = useLink(props, ref);

  return (
    <a
      {...linkProps}
      ref={ref}
      style={{ color: 'var(--blue)' }}
    >
      {props.children}
    </a>
  );
}

<Link href="https://adobe.com" target="_blank">Adobe</Link>
```

```
import {useLink} from 'react-aria';

function Link(props) {
  let ref = React.useRef(null);
  let { linkProps } = useLink(props, ref);

  return (
    <a
      {...linkProps}
      ref={ref}
      style={{ color: 'var(--blue)' }}
    >
      {props.children}
    </a>
  );
}

<Link href="https://adobe.com" target="_blank">
  Adobe
</Link>
```

```
import {useLink} from 'react-aria';

function Link(props) {
  let ref = React.useRef(
    null
  );
  let { linkProps } =
    useLink(props, ref);

  return (
    <a
      {...linkProps}
      ref={ref}
      style={{
        color:
          'var(--blue)'
      }}
    >
      {props.children}
    </a>
  );
}

<Link
  href="https://adobe.com"
  target="_blank"
>
  Adobe
</Link>
```

## Client handled links[#](#client-handled-links)

* * *

This example shows a client handled link using press events. It sets `elementType` to `span` so that `useLink` returns the proper ARIA attributes to expose the element as a link to assistive technology.

In addition, this example shows usage of the `isPressed` value returned by `useLink` to properly style the links's active state. You could use the CSS `:active` pseudo class for this, but `isPressed` properly handles when the user drags their pointer off of the link, along with keyboard support and better touch screen support.

```
function Link(props) {
  let ref = React.useRef(null);
  let { linkProps, isPressed } = useLink(
    { ...props, elementType: 'span' },
    ref
  );

  return (
    <span
      {...linkProps}
      ref={ref}
      style={{
        color: isPressed
          ? 'var(--blue)'
          : 'var(--spectrum-global-color-blue-700)',
        textDecoration: 'underline',
        cursor: 'pointer'
      }}
    >
      {props.children}
    </span>
  );
}

<Link onPress={() => alert('Pressed link')}>Adobe</Link>
```

```
function Link(props) {
  let ref = React.useRef(null);
  let { linkProps, isPressed } = useLink(
    { ...props, elementType: 'span' },
    ref
  );

  return (
    <span
      {...linkProps}
      ref={ref}
      style={{
        color: isPressed
          ? 'var(--blue)'
          : 'var(--spectrum-global-color-blue-700)',
        textDecoration: 'underline',
        cursor: 'pointer'
      }}
    >
      {props.children}
    </span>
  );
}

<Link onPress={() => alert('Pressed link')}>Adobe</Link>
```

```
function Link(props) {
  let ref = React.useRef(
    null
  );
  let {
    linkProps,
    isPressed
  } = useLink({
    ...props,
    elementType: 'span'
  }, ref);

  return (
    <span
      {...linkProps}
      ref={ref}
      style={{
        color: isPressed
          ? 'var(--blue)'
          : 'var(--spectrum-global-color-blue-700)',
        textDecoration:
          'underline',
        cursor: 'pointer'
      }}
    >
      {props.children}
    </span>
  );
}

<Link
  onPress={() =>
    alert(
      'Pressed link'
    )}
>
  Adobe
</Link>
```

* * *

A link can be disabled by passing the `isDisabled` property. This will work with both native link elements as well as client handled links. Native navigation will be disabled, and the `onPress` event will not be fired. The link will be exposed as disabled to assistive technology with ARIA.

```
function Link(props) {
  let ref = React.useRef(null);
  let { linkProps } = useLink(props, ref);

  return (
    <a
      {...linkProps}
      ref={ref}
      style={{
        color: props.isDisabled ? 'var(--gray)' : 'var(--blue)',
        cursor: props.isDisabled ? 'default' : 'pointer'
      }}
    >
      {props.children}
    </a>
  );
}

<Link href="https://adobe.com" target="_blank" isDisabled>Disabled link</Link>
```

```
function Link(props) {
  let ref = React.useRef(null);
  let { linkProps } = useLink(props, ref);

  return (
    <a
      {...linkProps}
      ref={ref}
      style={{
        color: props.isDisabled
          ? 'var(--gray)'
          : 'var(--blue)',
        cursor: props.isDisabled ? 'default' : 'pointer'
      }}
    >
      {props.children}
    </a>
  );
}

<Link href="https://adobe.com" target="_blank" isDisabled>
  Disabled link
</Link>
```

```
function Link(props) {
  let ref = React.useRef(
    null
  );
  let { linkProps } =
    useLink(props, ref);

  return (
    <a
      {...linkProps}
      ref={ref}
      style={{
        color:
          props
              .isDisabled
            ? 'var(--gray)'
            : 'var(--blue)',
        cursor:
          props
              .isDisabled
            ? 'default'
            : 'pointer'
      }}
    >
      {props.children}
    </a>
  );
}

<Link
  href="https://adobe.com"
  target="_blank"
  isDisabled
>
  Disabled link
</Link>
```