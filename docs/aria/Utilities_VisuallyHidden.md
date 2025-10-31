# VisuallyHidden

**Source**: [https://react-spectrum.adobe.com/react-aria/VisuallyHidden.html](https://react-spectrum.adobe.com/react-aria/VisuallyHidden.html)

> Documentation for VisuallyHidden in the React Aria package.

---

VisuallyHidden hides its children visually, while keeping content visible to screen readers.

* * *

`VisuallyHidden` is a utility component that can be used to hide its children visually, while keeping them visible to screen readers and other assistive technology. This would typically be used when you want to take advantage of the behavior and semantics of a native element like a checkbox or radio button, but replace it with a custom styled element visually.

* * *

Name

Type

Default

Description

`children`

`[ReactNode](https://reactjs.org/docs/rendering-elements.html)`

—

The content to visually hide.

`elementType`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) | JSXElementConstructor<any>`

`'div'`

The element type for the container.

`isFocusable`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the element should become visible on focus, for example skip links.

`id`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) | [undefined](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined)`

—

`style`

`[CSSProperties](https://reactjs.org/docs/dom-elements.html#style) | [undefined](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined)`

—

`className`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) | [undefined](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined)`

—

Accessibility

Name

Type

Description

`role`

`AriaRole | [undefined](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined)`

`tabIndex`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) | [undefined](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined)`

* * *

See [useRadioGroup](https://react-spectrum.adobe.com/react-aria/useRadioGroup.html#styling) and [useCheckbox](https://react-spectrum.adobe.com/react-aria/useCheckbox.html#styling) for examples of using `VisuallyHidden` to hide native form elements visually.

* * *

In order to allow additional rendering flexibility, the `useVisuallyHidden` hook can be used in custom components instead of the `VisuallyHidden` component. It supports the same options as the component, and returns props to spread onto the element that should be hidden.

`useVisuallyHidden( (props: [VisuallyHiddenProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/visually-hidden/src/VisuallyHidden.tsx:VisuallyHiddenProps) )): [VisuallyHiddenAria](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/visually-hidden/src/VisuallyHidden.tsx:VisuallyHiddenAria)`

```
import {useVisuallyHidden} from 'react-aria';

let { visuallyHiddenProps } = useVisuallyHidden();

<div {...visuallyHiddenProps}>I am hidden</div>
```

```
import {useVisuallyHidden} from 'react-aria';

let { visuallyHiddenProps } = useVisuallyHidden();

<div {...visuallyHiddenProps}>I am hidden</div>
```

```
import {useVisuallyHidden} from 'react-aria';

let {
  visuallyHiddenProps
} = useVisuallyHidden();

<div
  {...visuallyHiddenProps}
>
  I am hidden
</div>
```

* * *

VisuallyHidden is positioned absolutely, so it needs a positioned ancestor. Otherwise, it will be positioned relative to the nearest positioned ancestor, which may be the body, causing undesired scroll bars to appear.

```
<label style={{position: 'relative'}}>
  <VisuallyHidden>
    <input type="checkbox" />
  </VisuallyHidden>
  <span>Subscribe to our newsletter</span>
</label>
```

```
<label style={{position: 'relative'}}>
  <VisuallyHidden>
    <input type="checkbox" />
  </VisuallyHidden>
  <span>Subscribe to our newsletter</span>
</label>
```

```
<label
  style={{
    position:
      'relative'
  }}
>
  <VisuallyHidden>
    <input type="checkbox" />
  </VisuallyHidden>
  <span>
    Subscribe to our
    newsletter
  </span>
</label>
```