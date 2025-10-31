# Link

**Source**: [https://react-spectrum.adobe.com/react-aria/Link.html](https://react-spectrum.adobe.com/react-aria/Link.html)

> Documentation for Link in the React Aria package.

---

A link allows a user to navigate to another page or resource within a web page or application.

* * *

```
import {Link} from 'react-aria-components';

<Link href="https://www.imdb.com/title/tt6348138/" target="_blank">
  The missing link
</Link>
```

```
import {Link} from 'react-aria-components';

<Link
  href="https://www.imdb.com/title/tt6348138/"
  target="_blank"
>
  The missing link
</Link>
```

```
import {Link} from 'react-aria-components';

<Link
  href="https://www.imdb.com/title/tt6348138/"
  target="_blank"
>
  The missing link
</Link>
```

Show CSS

```
@import "@react-aria/example-theme";

.react-aria-Link {
  color: var(--link-color);
  font-size: 18px;
  transition: all 200ms;
  text-decoration: underline;
  cursor: pointer;
  outline: none;
  position: relative;

  &[data-hovered] {
    text-decoration-style: wavy;
  }

  &[data-pressed] {
    color: var(--link-color-pressed);
  }

  &[data-focus-visible]:after {
    content: '';
    position: absolute;
    inset: -3px -6px;
    border-radius: 6px;
    border: 2px solid var(--focus-ring-color);
  }
}
```

```
@import "@react-aria/example-theme";

.react-aria-Link {
  color: var(--link-color);
  font-size: 18px;
  transition: all 200ms;
  text-decoration: underline;
  cursor: pointer;
  outline: none;
  position: relative;

  &[data-hovered] {
    text-decoration-style: wavy;
  }

  &[data-pressed] {
    color: var(--link-color-pressed);
  }

  &[data-focus-visible]:after {
    content: '';
    position: absolute;
    inset: -3px -6px;
    border-radius: 6px;
    border: 2px solid var(--focus-ring-color);
  }
}
```

```
@import "@react-aria/example-theme";

.react-aria-Link {
  color: var(--link-color);
  font-size: 18px;
  transition: all 200ms;
  text-decoration: underline;
  cursor: pointer;
  outline: none;
  position: relative;

  &[data-hovered] {
    text-decoration-style: wavy;
  }

  &[data-pressed] {
    color: var(--link-color-pressed);
  }

  &[data-focus-visible]:after {
    content: '';
    position: absolute;
    inset: -3px -6px;
    border-radius: 6px;
    border: 2px solid var(--focus-ring-color);
  }
}
```

* * *

Links can be created in HTML with the [<a>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a) element with an `href` attribute. However, if the link does not have an href, and is handled client side with JavaScript instead, it will not be exposed to assistive technology properly. `Link` helps achieve accessible links with either native HTML elements or custom element types.

-   **Flexible** – Support for HTML navigation links, JavaScript handled links, and client side routing. Disabled links are also supported.
-   **Accessible** – Implemented as a custom ARIA link when handled via JavaScript, and otherwise as a native HTML link.
-   **Styleable** – Hover, press, and keyboard focus states are provided for easy styling. These states only apply when interacting with an appropriate input device, unlike CSS pseudo classes.

* * *

A link consists of a pressable area usually containing a textual label or an icon that users can click or tap to navigate to another page or resource. In addition, keyboard users may activate links using the Enter key.

If a visual label is not provided (e.g. an icon or image only link), then an `aria-label` or `aria-labelledby` prop must be passed to identify the link to assistive technology.

* * *

To help kick-start your project, we offer starter kits that include example implementations of all React Aria components with various styling solutions. All components are fully styled, including support for dark mode, high contrast mode, and all UI states. Each starter comes with a pre-configured [Storybook](https://storybook.js.org/) that you can experiment with, or use as a starting point for your own component library.

## Content[#](#content)

* * *

Links accept content as children. If the link has an href prop, it will be rendered as an `<a>` element.

```
<Link href="https://adobe.com" target="_blank">Adobe.com</Link>
```

```
<Link href="https://adobe.com" target="_blank">
  Adobe.com
</Link>
```

```
<Link
  href="https://adobe.com"
  target="_blank"
>
  Adobe.com
</Link>
```

### JavaScript handled links[#](#javascript-handled-links)

When a `<Link`\> does not have an `href` prop, it is rendered as a `<span role="link">` instead of an `<a>`. Events will need to be handled in JavaScript with the `onPress` prop.

Note: this will not behave like a native link. Browser features like context menus and open in new tab will not apply.

```
<Link onPress={() => alert('Pressed link')}>Adobe</Link>
```

```
<Link onPress={() => alert('Pressed link')}>Adobe</Link>
```

```
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

`Link` supports user interactions via mouse, keyboard, and touch. You can handle all of these via the `onPress` prop. This is similar to the standard `onClick` event, but normalized to support all interaction methods equally. In addition, the `onPressStart`, `onPressEnd`, and `onPressChange` events are fired as the user interacts with the link.

Each of these handlers receives a `[PressEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/events.d.ts:PressEvent)`, which exposes information about the target and the type of event that triggered the interaction. See [usePress](https://react-spectrum.adobe.com/react-aria/usePress.html) for more details.

```
function Example() {
  let [pointerType, setPointerType] = React.useState('');

  return (
    <>
      <Link
        onPressStart={(e) => setPointerType(e.pointerType)}
        onPressEnd={() => setPointerType('')}
      >
        Press me
      </Link>
      <p>
        {pointerType
          ? `You are pressing the link with a ${pointerType}!`
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
      <Link
        onPressStart={(e) => setPointerType(e.pointerType)}
        onPressEnd={() => setPointerType('')}
      >
        Press me
      </Link>
      <p>
        {pointerType
          ? `You are pressing the link with a ${pointerType}!`
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
      <Link
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
      </Link>
      <p>
        {pointerType
          ? `You are pressing the link with a ${pointerType}!`
          : 'Ready to be pressed.'}
      </p>
    </>
  );
}
```

The `<Link>` component works with frameworks and client side routers like [Next.js](https://nextjs.org/) and [React Router](https://reactrouter.com/en/main). As with other React Aria components that support links, this works via the `[RouterProvider](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/utils/src/openLink.tsx:RouterProvider)` component at the root of your app. See the [client side routing guide](https://react-spectrum.adobe.com/react-aria/routing.html) to learn how to set this up.

* * *

A link can be disabled by passing the `isDisabled` property. This will work with both native link elements as well as client handled links. Native navigation will be disabled, and the `onPress` event will not be fired. The link will be exposed as disabled to assistive technology with ARIA.

```
<Link isDisabled href="https://adobe.com" target="_blank">Disabled link</Link>
```

```
<Link isDisabled href="https://adobe.com" target="_blank">
  Disabled link
</Link>
```

```
<Link
  isDisabled
  href="https://adobe.com"
  target="_blank"
>
  Disabled link
</Link>
```

Show CSS

```
.react-aria-Link {
  &[data-disabled] {
    cursor: default;
    color: var(--text-color-disabled);
  }
}
```

```
.react-aria-Link {
  &[data-disabled] {
    cursor: default;
    color: var(--text-color-disabled);
  }
}
```

```
.react-aria-Link {
  &[data-disabled] {
    cursor: default;
    color: var(--text-color-disabled);
  }
}
```

* * *

Name

Type

Description

`isDisabled`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether the link is disabled.

`autoFocus`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether the element should receive focus on render.

`href`

`[Href](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dom.d.ts:Href)`

A URL to link to. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#href).

`hrefLang`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

Hints at the human language of the linked URL. See[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#hreflang).

`target`

`HTMLAttributeAnchorTarget`

The target window for the link. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#target).

`rel`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

The relationship between the linked resource and the current page. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel).

`download`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

Causes the browser to download the linked URL. A string may be provided to suggest a file name. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#download).

`ping`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

A space-separated list of URLs to ping when the link is followed. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#ping).

`referrerPolicy`

`HTMLAttributeReferrerPolicy`

How much of the referrer to send when following the link. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#referrerpolicy).

`routerOptions`

`[RouterOptions](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dom.d.ts:RouterOptions)`

Options for the configured client side router.

`children`

`[ChildrenOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ChildrenOrFunction)<[LinkRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Link.tsx:LinkRenderProps)>`

The children of the component. A function may be provided to alter the children based on component state.

`className`

`[ClassNameOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ClassNameOrFunction)<[LinkRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Link.tsx:LinkRenderProps)>`

The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.

`style`

`[StyleOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:StyleOrFunction)<[LinkRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Link.tsx:LinkRenderProps)>`

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
.react-aria-Link {
  /* ... */
}
```

```
.react-aria-Link {
  /* ... */
}
```

```
.react-aria-Link {
  /* ... */
}
```

A custom `className` can also be specified on any component. This overrides the default `className` provided by React Aria with your own.

```
<Link className="my-link">
  {/* ... */}
</Link>
```

```
<Link className="my-link">
  {/* ... */}
</Link>
```

```
<Link className="my-link">
  {/* ... */}
</Link>
```

In addition, some components support multiple UI states (e.g. focused, placeholder, readonly, etc.). React Aria components expose states using data attributes, which you can target in CSS selectors. For example:

```
.react-aria-Link[data-pressed] {
  /* ... */
}
```

```
.react-aria-Link[data-pressed] {
  /* ... */
}
```

```
.react-aria-Link[data-pressed] {
  /* ... */
}
```

The `className` and `style` props also accept functions which receive states for styling. This lets you dynamically determine the classes or styles to apply, which is useful when using utility CSS libraries like [Tailwind](https://tailwindcss.com/).

```
<Link
  className={({ isPressed }) => isPressed ? 'bg-gray-700' : 'bg-gray-600'}
/>
```

```
<Link
  className={({ isPressed }) =>
    isPressed ? 'bg-gray-700' : 'bg-gray-600'}
/>
```

```
<Link
  className={(
    { isPressed }
  ) =>
    isPressed
      ? 'bg-gray-700'
      : 'bg-gray-600'}
/>
```

Render props may also be used as children to alter what elements are rendered based on the current state. For example, you could render an extra element when the link is in a pressed state.

```
<Link>
  {({isPressed}) => (
    <>
      {isPressed && <PressHighlight />}
      Press me
    </>
  )}
</Link>
```

```
<Link>
  {({isPressed}) => (
    <>
      {isPressed && <PressHighlight />}
      Press me
    </>
  )}
</Link>
```

```
<Link>
  {({ isPressed }) => (
    <>
      {isPressed && (
        <PressHighlight />
      )}
      Press me
    </>
  )}
</Link>
```

The states, selectors, and render props for `Link` are documented below.

Name

CSS Selector

Description

`isCurrent`

`[data-current]`

Whether the link is the current item within a list.

`isHovered`

`[data-hovered]`

Whether the link is currently hovered with a mouse.

`isPressed`

`[data-pressed]`

Whether the link is currently in a pressed state.

`isFocused`

`[data-focused]`

Whether the link is focused, either via a mouse or keyboard.

`isFocusVisible`

`[data-focus-visible]`

Whether the link is keyboard focused.

`isDisabled`

`[data-disabled]`

Whether the link is disabled.

* * *

All React Aria Components export a corresponding context that can be used to send props to them from a parent element. This enables you to build your own compositional APIs similar to those found in React Aria Components itself. You can send any prop or ref via context that you could pass to the corresponding component. The local props and ref on the component are merged with the ones passed via context, with the local props taking precedence (following the rules documented in [mergeProps](https://react-spectrum.adobe.com/react-aria/mergeProps.html)).

Component

Context

Props

Ref

`Link`

`LinkContext`

`[LinkProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Link.tsx:LinkProps)`

`[HTMLAnchorElement](https://developer.mozilla.org/docs/Web/API/HTMLAnchorElement)`

This example shows a `Router` component that accepts `Link` elements as children and keeps track of which one was last clicked.

```
import type {PressEvent} from 'react-aria-components';
import {LinkContext} from 'react-aria-components';

function Router({children}) {
  let [clicked, setClicked] = React.useState(null);
  let onPress = (e: PressEvent) => {
    setClicked(e.target.textContent);
  };

  return (
    <LinkContext.Provider value={{onPress}}>      {children}
      {clicked && `You clicked ${clicked}`}
    </LinkContext.Provider>
  );
}
```

```
import type {PressEvent} from 'react-aria-components';
import {LinkContext} from 'react-aria-components';

function Router({children}) {
  let [clicked, setClicked] = React.useState(null);
  let onPress = (e: PressEvent) => {
    setClicked(e.target.textContent);
  };

  return (
    <LinkContext.Provider value={{onPress}}>      {children}
      {clicked && `You clicked ${clicked}`}
    </LinkContext.Provider>
  );
}
```

```
import type {PressEvent} from 'react-aria-components';
import {LinkContext} from 'react-aria-components';

function Router(
  { children }
) {
  let [
    clicked,
    setClicked
  ] = React.useState(
    null
  );
  let onPress = (
    e: PressEvent
  ) => {
    setClicked(
      e.target
        .textContent
    );
  };

  return (
    <LinkContext.Provider
      value={{ onPress }}
    >      {children}
      {clicked &&
        `You clicked ${clicked}`}
    </LinkContext.Provider>
  );
}
```

Now any `Link` inside a `Router` will update the router state when it is pressed.

```
<Router>
  <ul>
    <li><Link>Breadcrumbs</Link></li>
    <li><Link>Button</Link></li>
    <li><Link>Calendar</Link></li>
  </ul>
</Router>
```

```
<Router>
  <ul>
    <li><Link>Breadcrumbs</Link></li>
    <li><Link>Button</Link></li>
    <li><Link>Calendar</Link></li>
  </ul>
</Router>
```

```
<Router>
  <ul>
    <li>
      <Link>
        Breadcrumbs
      </Link>
    </li>
    <li>
      <Link>
        Button
      </Link>
    </li>
    <li>
      <Link>
        Calendar
      </Link>
    </li>
  </ul>
</Router>
```

If you need to customize things further, such as customizing the DOM structure, you can drop down to the lower level Hook-based API. See [useLink](https://react-spectrum.adobe.com/react-aria/useLink.html) for more details.