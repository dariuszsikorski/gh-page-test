# Breadcrumbs

**Source**: [https://react-spectrum.adobe.com/react-aria/Breadcrumbs.html](https://react-spectrum.adobe.com/react-aria/Breadcrumbs.html)

> Documentation for Breadcrumbs in the React Aria package.

---

Breadcrumbs display a hierarchy of links to the current page or resource in an application.

* * *

```
import {Breadcrumbs, Breadcrumb, Link} from 'react-aria-components';

<Breadcrumbs>
  <Breadcrumb><Link href="/">Home</Link></Breadcrumb>
  <Breadcrumb><Link href="/react-aria/">React Aria</Link></Breadcrumb>
  <Breadcrumb><Link>Breadcrumbs</Link></Breadcrumb>
</Breadcrumbs>
```

```
import {
  Breadcrumb,
  Breadcrumbs,
  Link
} from 'react-aria-components';

<Breadcrumbs>
  <Breadcrumb>
    <Link href="/">Home</Link>
  </Breadcrumb>
  <Breadcrumb>
    <Link href="/react-aria/">React Aria</Link>
  </Breadcrumb>
  <Breadcrumb>
    <Link>Breadcrumbs</Link>
  </Breadcrumb>
</Breadcrumbs>
```

```
import {
  Breadcrumb,
  Breadcrumbs,
  Link
} from 'react-aria-components';

<Breadcrumbs>
  <Breadcrumb>
    <Link href="/">
      Home
    </Link>
  </Breadcrumb>
  <Breadcrumb>
    <Link href="/react-aria/">
      React Aria
    </Link>
  </Breadcrumb>
  <Breadcrumb>
    <Link>
      Breadcrumbs
    </Link>
  </Breadcrumb>
</Breadcrumbs>
```

Show CSS

```
@import "@react-aria/example-theme";

.react-aria-Breadcrumbs {
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 18px;
  color: var(--text-color);

  .react-aria-Breadcrumb:not(:last-child)::after {
    content: '›';
    content: '›' / '';
    alt: ' ';
    padding: 0 5px;
  }

  .react-aria-Link {
    color: var(--link-color-secondary);
    outline: none;
    position: relative;
    text-decoration: none;
    cursor: pointer;

    &[data-hovered] {
      text-decoration: underline;
    }

    &[data-current] {
      color: var(--text-color);
      font-weight: bold;
    }

    &[data-focus-visible]:after {
      content: '';
      position: absolute;
      inset: -2px -4px;
      border-radius: 6px;
      border: 2px solid var(--focus-ring-color);
    }
  }
}
```

```
@import "@react-aria/example-theme";

.react-aria-Breadcrumbs {
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 18px;
  color: var(--text-color);

  .react-aria-Breadcrumb:not(:last-child)::after {
    content: '›';
    content: '›' / '';
    alt: ' ';
    padding: 0 5px;
  }

  .react-aria-Link {
    color: var(--link-color-secondary);
    outline: none;
    position: relative;
    text-decoration: none;
    cursor: pointer;

    &[data-hovered] {
      text-decoration: underline;
    }

    &[data-current] {
      color: var(--text-color);
      font-weight: bold;
    }

    &[data-focus-visible]:after {
      content: '';
      position: absolute;
      inset: -2px -4px;
      border-radius: 6px;
      border: 2px solid var(--focus-ring-color);
    }
  }
}
```

```
@import "@react-aria/example-theme";

.react-aria-Breadcrumbs {
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 18px;
  color: var(--text-color);

  .react-aria-Breadcrumb:not(:last-child)::after {
    content: '›';
    content: '›' / '';
    alt: ' ';
    padding: 0 5px;
  }

  .react-aria-Link {
    color: var(--link-color-secondary);
    outline: none;
    position: relative;
    text-decoration: none;
    cursor: pointer;

    &[data-hovered] {
      text-decoration: underline;
    }

    &[data-current] {
      color: var(--text-color);
      font-weight: bold;
    }

    &[data-focus-visible]:after {
      content: '';
      position: absolute;
      inset: -2px -4px;
      border-radius: 6px;
      border: 2px solid var(--focus-ring-color);
    }
  }
}
```

* * *

Breadcrumbs provide a list of links to parent pages of the current page in hierarchical order. `Breadcrumbs` helps implement these in an accessible way.

-   **Flexible** – Support for HTML navigation links, JavaScript handled links, and client side routing.
-   **Accessible** – Implemented as an ordered list of links. The last link is automatically marked as the current page using `aria-current`.
-   **Styleable** – Hover, press, and keyboard focus states are provided for easy styling. These states only apply when interacting with an appropriate input device, unlike CSS pseudo classes.

* * *

Shows a breadcrumbs component with labels pointing to its parts, including the navigation container, breadcrumb items, separators, and current page elements.TrendSub ItemJanuary 2019 AssetsBreadcrumb itemSeparatorCurrent pageNavigation

Breadcrumbs consist of a list of links, typically with a visual separator icon between each item. The last link represents the current page in the hierarchy, with the previous links representing the parent pages of the current page. Each of these parent links can be clicked, tapped, or triggered via the Enter key to navigate to that page.

```
import {Breadcrumbs, Breadcrumb, Link} from 'react-aria-components';

<Breadcrumbs>
  <Breadcrumb><Link /></Breadcrumb>
</Breadcrumbs>
```

```
import {
  Breadcrumb,
  Breadcrumbs,
  Link
} from 'react-aria-components';

<Breadcrumbs>
  <Breadcrumb>
    <Link />
  </Breadcrumb>
</Breadcrumbs>
```

```
import {
  Breadcrumb,
  Breadcrumbs,
  Link
} from 'react-aria-components';

<Breadcrumbs>
  <Breadcrumb>
    <Link />
  </Breadcrumb>
</Breadcrumbs>
```

`Breadcrumbs` makes use of the following concepts:

[

Collections

Defining collections of items, async loading, and updating items over time.

](https://react-spectrum.adobe.com/react-aria/collections.html)

`Breadcrumbs` uses the following components, which may also be used standalone or reused in other components.

[

Link

A link allows a user to navigate to another page.

](https://react-spectrum.adobe.com/react-aria/Link.html)

* * *

To help kick-start your project, we offer starter kits that include example implementations of all React Aria components with various styling solutions. All components are fully styled, including support for dark mode, high contrast mode, and all UI states. Each starter comes with a pre-configured [Storybook](https://storybook.js.org/) that you can experiment with, or use as a starting point for your own component library.

## Content[#](#content)

* * *

`Breadcrumbs` follows the [Collection Components API](https://react-spectrum.adobe.com/react-aria/collections.html), accepting both static and dynamic collections. The examples above show static collections, which can be used when the full list of options is known ahead of time. Dynamic collections, as shown below, can be used when the options come from an external data source such as an API call, or update over time.

As seen below, an iterable list of options is passed to the Breadcrumbs using the `items` prop. A function provided as `children` of the `<Breadcrumbs>` is called to render each item. When a breadcrumb is pressed, the `onAction` event is triggered and the breadcrumbs array is updated.

```
import type {Key} from 'react-aria-components';

function Example() {
  let [breadcrumbs, setBreadcrumbs] = React.useState([
    {id: 1, label: 'Home'},
    {id: 2, label: 'Trendy'},
    {id: 3, label: 'March 2022 Assets'}
  ]);

  let navigate = (id: Key) => {
    let i = breadcrumbs.findIndex(item => item.id === id);
    setBreadcrumbs(breadcrumbs.slice(0, i + 1));
  };

  return (
    <Breadcrumbs items={breadcrumbs} onAction={navigate}>
      {item => <Breadcrumb><Link>{item.label}</Link></Breadcrumb>}
    </Breadcrumbs>
  );
}
```

```
import type {Key} from 'react-aria-components';

function Example() {
  let [breadcrumbs, setBreadcrumbs] = React.useState([
    { id: 1, label: 'Home' },
    { id: 2, label: 'Trendy' },
    { id: 3, label: 'March 2022 Assets' }
  ]);

  let navigate = (id: Key) => {
    let i = breadcrumbs.findIndex((item) => item.id === id);
    setBreadcrumbs(breadcrumbs.slice(0, i + 1));
  };

  return (
    <Breadcrumbs items={breadcrumbs} onAction={navigate}>
      {(item) => (
        <Breadcrumb>
          <Link>{item.label}</Link>
        </Breadcrumb>
      )}
    </Breadcrumbs>
  );
}
```

```
import type {Key} from 'react-aria-components';

function Example() {
  let [
    breadcrumbs,
    setBreadcrumbs
  ] = React.useState([
    {
      id: 1,
      label: 'Home'
    },
    {
      id: 2,
      label: 'Trendy'
    },
    {
      id: 3,
      label:
        'March 2022 Assets'
    }
  ]);

  let navigate = (
    id: Key
  ) => {
    let i = breadcrumbs
      .findIndex(
        (item) =>
          item.id === id
      );
    setBreadcrumbs(
      breadcrumbs.slice(
        0,
        i + 1
      )
    );
  };

  return (
    <Breadcrumbs
      items={breadcrumbs}
      onAction={navigate}
    >
      {(item) => (
        <Breadcrumb>
          <Link>
            {item.label}
          </Link>
        </Breadcrumb>
      )}
    </Breadcrumbs>
  );
}
```

The `<Link>` component works with frameworks and client side routers like [Next.js](https://nextjs.org/) and [React Router](https://reactrouter.com/en/main). As with other React Aria components that support links, this works via the `[RouterProvider](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/utils/src/openLink.tsx:RouterProvider)` component at the root of your app. See the [client side routing guide](https://react-spectrum.adobe.com/react-aria/routing.html) to learn how to set this up.

* * *

The above examples use the CSS `:after` pseudo class to add separators between each item. These may also be DOM elements instead, e.g. SVG icons. Be sure that they have `aria-hidden="true"` so they are hidden from assistive technologies.

```
import ChevronIcon from '@spectrum-icons/workflow/ChevronDoubleRight';

<Breadcrumbs>
  <Breadcrumb className="my-item">
    <Link href="/">Home</Link>
    <ChevronIcon size="S" />
  </Breadcrumb>
  <Breadcrumb><Link>React Aria</Link></Breadcrumb>
</Breadcrumbs>
```

```
import ChevronIcon from '@spectrum-icons/workflow/ChevronDoubleRight';

<Breadcrumbs>
  <Breadcrumb className="my-item">
    <Link href="/">Home</Link>
    <ChevronIcon size="S" />
  </Breadcrumb>
  <Breadcrumb>
    <Link>React Aria</Link>
  </Breadcrumb>
</Breadcrumbs>
```

```
import ChevronIcon from '@spectrum-icons/workflow/ChevronDoubleRight';

<Breadcrumbs>
  <Breadcrumb className="my-item">
    <Link href="/">
      Home
    </Link>
    <ChevronIcon size="S" />
  </Breadcrumb>
  <Breadcrumb>
    <Link>
      React Aria
    </Link>
  </Breadcrumb>
</Breadcrumbs>
```

Show CSS

```
.my-item svg {
  vertical-align: middle;
  padding: 0 5px;
  margin-top: -2px;
}
```

```
.my-item svg {
  vertical-align: middle;
  padding: 0 5px;
  margin-top: -2px;
}
```

```
.my-item svg {
  vertical-align: middle;
  padding: 0 5px;
  margin-top: -2px;
}
```

## Landmarks[#](#landmarks)

* * *

When breadcrumbs are used as a main navigation element for a page, they can be placed in a [navigation landmark](https://www.w3.org/WAI/ARIA/apg/patterns/landmarks/examples/navigation.html). Landmarks help assistive technology users quickly find major sections of a page. Place breadcrumbs inside a `<nav>` element with an `aria-label` to create a navigation landmark.

```
<nav aria-label="Breadcrumbs">
  <Breadcrumbs>
    <Breadcrumb><Link href="/">Home</Link></Breadcrumb>
    <Breadcrumb><Link href="/react-aria/">React Aria</Link></Breadcrumb>
    <Breadcrumb><Link>Breadcrumbs</Link></Breadcrumb>
  </Breadcrumbs>
</nav>
```

```
<nav aria-label="Breadcrumbs">
  <Breadcrumbs>
    <Breadcrumb>
      <Link href="/">Home</Link>
    </Breadcrumb>
    <Breadcrumb>
      <Link href="/react-aria/">React Aria</Link>
    </Breadcrumb>
    <Breadcrumb>
      <Link>Breadcrumbs</Link>
    </Breadcrumb>
  </Breadcrumbs>
</nav>
```

```
<nav aria-label="Breadcrumbs">
  <Breadcrumbs>
    <Breadcrumb>
      <Link href="/">
        Home
      </Link>
    </Breadcrumb>
    <Breadcrumb>
      <Link href="/react-aria/">
        React Aria
      </Link>
    </Breadcrumb>
    <Breadcrumb>
      <Link>
        Breadcrumbs
      </Link>
    </Breadcrumb>
  </Breadcrumbs>
</nav>
```

It is best to keep the number of landmarks on a page to a minimum, so only place breadcrumbs in a navigation landmark when it represents the primary or secondary navigation for the page. For example, breadcrumbs within table rows or popovers most likely should not be landmarks.

* * *

Breadcrumbs can be disabled using the `isDisabled` prop. This indicates that navigation is not currently available. When a breadcrumb is disabled, `onPress` will not be triggered, navigation will not occur, and links will be marked as `aria-disabled` for assistive technologies.

```
<Breadcrumbs isDisabled>
  <Breadcrumb><Link href="/">Home</Link></Breadcrumb>
  <Breadcrumb><Link href="/react-aria/">React Aria</Link></Breadcrumb>
  <Breadcrumb><Link>Breadcrumbs</Link></Breadcrumb>
</Breadcrumbs>
```

```
<Breadcrumbs isDisabled>
  <Breadcrumb>
    <Link href="/">Home</Link>
  </Breadcrumb>
  <Breadcrumb>
    <Link href="/react-aria/">React Aria</Link>
  </Breadcrumb>
  <Breadcrumb>
    <Link>Breadcrumbs</Link>
  </Breadcrumb>
</Breadcrumbs>
```

```
<Breadcrumbs
  isDisabled
>
  <Breadcrumb>
    <Link href="/">
      Home
    </Link>
  </Breadcrumb>
  <Breadcrumb>
    <Link href="/react-aria/">
      React Aria
    </Link>
  </Breadcrumb>
  <Breadcrumb>
    <Link>
      Breadcrumbs
    </Link>
  </Breadcrumb>
</Breadcrumbs>
```

Show CSS

```
.react-aria-Breadcrumbs {
  .react-aria-Link {
    &[data-disabled] {
      cursor: default;

      &:not([data-current]) {
        color: var(--text-color-disabled);
      }
    }
  }
}
```

```
.react-aria-Breadcrumbs {
  .react-aria-Link {
    &[data-disabled] {
      cursor: default;

      &:not([data-current]) {
        color: var(--text-color-disabled);
      }
    }
  }
}
```

```
.react-aria-Breadcrumbs {
  .react-aria-Link {
    &[data-disabled] {
      cursor: default;

      &:not([data-current]) {
        color: var(--text-color-disabled);
      }
    }
  }
}
```

Individual breadcrumbs can also be disabled by passing the `isDisabled` prop to the `<Link>` element:

```
<Breadcrumbs>
  <Breadcrumb>
    <Link href="/">Home</Link>
  </Breadcrumb>
  <Breadcrumb>
    <Link isDisabled href="/react-aria/">React Aria</Link>
  </Breadcrumb>
  <Breadcrumb>
    <Link>Breadcrumbs</Link>
  </Breadcrumb>
</Breadcrumbs>
```

```
<Breadcrumbs>
  <Breadcrumb>
    <Link href="/">Home</Link>
  </Breadcrumb>
  <Breadcrumb>
    <Link isDisabled href="/react-aria/">React Aria</Link>
  </Breadcrumb>
  <Breadcrumb>
    <Link>Breadcrumbs</Link>
  </Breadcrumb>
</Breadcrumbs>
```

```
<Breadcrumbs>
  <Breadcrumb>
    <Link href="/">
      Home
    </Link>
  </Breadcrumb>
  <Breadcrumb>
    <Link
      isDisabled
      href="/react-aria/"
    >
      React Aria
    </Link>
  </Breadcrumb>
  <Breadcrumb>
    <Link>
      Breadcrumbs
    </Link>
  </Breadcrumb>
</Breadcrumbs>
```

* * *

Name

Type

Description

`isDisabled`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether the breadcrumbs are disabled.

`children`

`[ReactNode](https://reactjs.org/docs/rendering-elements.html) | ( (item: T )) => [ReactNode](https://reactjs.org/docs/rendering-elements.html)`

The contents of the collection.

`dependencies`

`ReadonlyArray<any>`

Values that should invalidate the item cache when using dynamic collections.

`items`

`[Iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)<T>`

Item objects in the collection.

`className`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element.

`style`

`[CSSProperties](https://reactjs.org/docs/dom-elements.html#style)`

The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element.

Events

Name

Type

Description

`onAction`

`( (key: [Key](https://reactjs.org/docs/lists-and-keys.html) )) => void`

Handler that is called when a breadcrumb is clicked.

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

Name

Type

Description

`id`

`[Key](https://reactjs.org/docs/lists-and-keys.html)`

A unique id for the breadcrumb, which will be passed to `onAction` when the breadcrumb is pressed.

`children`

`[ChildrenOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ChildrenOrFunction)<[BreadcrumbRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Breadcrumbs.tsx:BreadcrumbRenderProps)>`

The children of the component. A function may be provided to alter the children based on component state.

`className`

`[ClassNameOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ClassNameOrFunction)<[BreadcrumbRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Breadcrumbs.tsx:BreadcrumbRenderProps)>`

The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.

`style`

`[StyleOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:StyleOrFunction)<[BreadcrumbRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Breadcrumbs.tsx:BreadcrumbRenderProps)>`

The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.

EventsPositioning

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
.react-aria-Breadcrumbs {
  /* ... */
}
```

```
.react-aria-Breadcrumbs {
  /* ... */
}
```

```
.react-aria-Breadcrumbs {
  /* ... */
}
```

A custom `className` can also be specified on any component. This overrides the default `className` provided by React Aria with your own.

```
<Breadcrumbs className="my-breadcrumbs">
  {/* ... */}
</Breadcrumbs>
```

```
<Breadcrumbs className="my-breadcrumbs">
  {/* ... */}
</Breadcrumbs>
```

```
<Breadcrumbs className="my-breadcrumbs">
  {/* ... */}
</Breadcrumbs>
```

In addition, some components support multiple UI states (e.g. focused, placeholder, readonly, etc.). React Aria components expose states using data attributes, which you can target in CSS selectors. For example:

```
.react-aria-Link[data-current] {
  /* ... */
}
```

```
.react-aria-Link[data-current] {
  /* ... */
}
```

```
.react-aria-Link[data-current] {
  /* ... */
}
```

The `className` and `style` props also accept functions which receive states for styling. This lets you dynamically determine the classes or styles to apply, which is useful when using utility CSS libraries like [Tailwind](https://tailwindcss.com/).

```
<Link
  className={({ isCurrent }) => isCurrent ? 'bg-gray-700' : 'bg-gray-600'}
/>
```

```
<Link
  className={({ isCurrent }) =>
    isCurrent ? 'bg-gray-700' : 'bg-gray-600'}
/>
```

```
<Link
  className={(
    { isCurrent }
  ) =>
    isCurrent
      ? 'bg-gray-700'
      : 'bg-gray-600'}
/>
```

Render props may also be used as children to alter what elements are rendered based on the current state. For example, you could render a link for all the breadcrumb items except the current one.

```
<Breadcrumbs items={items}>
  {(item) => (
    <Breadcrumb>
      {({ isCurrent }) =>
        isCurrent ? <strong>{item.label}</strong> : <Link>{item.label}</Link>}
    </Breadcrumb>
  )}
</Breadcrumbs>
```

```
<Breadcrumbs items={items}>
  {(item) => (
    <Breadcrumb>
      {({ isCurrent }) =>
        isCurrent
          ? <strong>{item.label}</strong>
          : <Link>{item.label}</Link>}
    </Breadcrumb>
  )}
</Breadcrumbs>
```

```
<Breadcrumbs
  items={items}
>
  {(item) => (
    <Breadcrumb>
      {(
        { isCurrent }
      ) =>
        isCurrent
          ? (
            <strong>
              {item
                .label}
            </strong>
          )
          : (
            <Link>
              {item
                .label}
            </Link>
          )}
    </Breadcrumb>
  )}
</Breadcrumbs>
```

The states, selectors, and render props for all components used in `Breadcrumbs` are documented below.

`Breadcrumbs` can be targed with the `.react-aria-Breadcrumbs` CSS selector, or by overriding with a custom `className`. It is rendered as an `<ol>` element representing the list of items.

A `Breadcrumb` can be targeted with the `.react-aria-Breadcrumb` CSS selector, or by overriding with a custom `className`. It is rendered as an `<li>` element, and should contain a `<Link>`. It may also include another element such as a [separator icon](#separator-icons). Breadcrumb support the following states and render props:

Name

CSS Selector

Description

`isCurrent`

`[data-current]`

Whether the breadcrumb is for the current page.

`isDisabled`

`[data-disabled]`

Whether the breadcrumb is disabled.

A `Link` can be targeted with the `.react-aria-Link` CSS selector, or by overriding with a custom `className`. It is rendered as an `<a>` element when a href is provided via props. If only text is provided, it is rendered as a `<span>`. Links support the following states and render props:

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

`Breadcrumbs`

`BreadcrumbsContext`

`[BreadcrumbsProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Breadcrumbs.tsx:BreadcrumbsProps)`

`[HTMLOListElement](https://developer.mozilla.org/docs/Web/JavaScript)`

This example shows a `Router` component that accepts `Breadcrumbs` and `Link` elements as children, and tracks a history stack. When a link is clicked, it is pushed to the stack and automatically updates the breadcrumbs. When a breadcrumb is clicked, the stack is popped to that location.

```
import type {PressEvent} from 'react-aria-components';
import {BreadcrumbsContext, LinkContext} from 'react-aria-components';

interface RouterItem {
  id: number,
  label: string
}

function Router({children}) {
  let [items, setItems] = React.useState<RouterItem[]>([
    {id: 0, label: 'Home'},
    {id: 1, label: 'React Aria'},
  ]);

  // Pop stack when a breadcrumb item is clicked.
  let onAction = (id: Key) => {
    let i = items.findIndex(item => item.id === id);
    setItems(items.slice(0, i + 1));
  };

  // Push stack when a link is clicked.
  let onPress = (e: PressEvent) => {
    let label = e.target.textContent;
    setItems(items.concat({id: items.length, label}));
  };

  return (
    <BreadcrumbsContext.Provider value={{items, onAction}}>      <LinkContext.Provider value={{onPress}}>
        {children}
      </LinkContext.Provider>
    </BreadcrumbsContext.Provider>
  );
}
```

```
import type {PressEvent} from 'react-aria-components';
import {
  BreadcrumbsContext,
  LinkContext
} from 'react-aria-components';

interface RouterItem {
  id: number;
  label: string;
}

function Router({ children }) {
  let [items, setItems] = React.useState<RouterItem[]>([
    { id: 0, label: 'Home' },
    { id: 1, label: 'React Aria' }
  ]);

  // Pop stack when a breadcrumb item is clicked.
  let onAction = (id: Key) => {
    let i = items.findIndex((item) => item.id === id);
    setItems(items.slice(0, i + 1));
  };

  // Push stack when a link is clicked.
  let onPress = (e: PressEvent) => {
    let label = e.target.textContent;
    setItems(items.concat({ id: items.length, label }));
  };

  return (
    <BreadcrumbsContext.Provider
      value={{ items, onAction }}
    >      <LinkContext.Provider value={{ onPress }}>
        {children}
      </LinkContext.Provider>
    </BreadcrumbsContext.Provider>
  );
}
```

```
import type {PressEvent} from 'react-aria-components';
import {
  BreadcrumbsContext,
  LinkContext
} from 'react-aria-components';

interface RouterItem {
  id: number;
  label: string;
}

function Router(
  { children }
) {
  let [items, setItems] =
    React.useState<
      RouterItem[]
    >([
      {
        id: 0,
        label: 'Home'
      },
      {
        id: 1,
        label:
          'React Aria'
      }
    ]);

  // Pop stack when a breadcrumb item is clicked.
  let onAction = (
    id: Key
  ) => {
    let i = items
      .findIndex(
        (item) =>
          item.id === id
      );
    setItems(
      items.slice(
        0,
        i + 1
      )
    );
  };

  // Push stack when a link is clicked.
  let onPress = (
    e: PressEvent
  ) => {
    let label =
      e.target
        .textContent;
    setItems(
      items.concat({
        id: items.length,
        label
      })
    );
  };

  return (
    <BreadcrumbsContext.Provider
      value={{
        items,
        onAction
      }}
    >      <LinkContext.Provider
        value={{
          onPress
        }}
      >
        {children}
      </LinkContext.Provider>
    </BreadcrumbsContext.Provider>
  );
}
```

**Note**: `LinkContext` only affects links outside `Breadcrumbs` because `Breadcrumbs` also provides a value for `LinkContext` which overrides an outer provider. See [custom children](#custom-children) below for more details.

Now when you place `Breadcrumbs` inside a `Router`, it automatically has access to the location history via context.

```
<Router>
  <Breadcrumbs>
    {(item: RouterItem) => <Breadcrumb><Link>{item.label}</Link></Breadcrumb>}
  </Breadcrumbs>
  <ul>
    <li><Link>Breadcrumbs</Link></li>
    <li><Link>Button</Link></li>
    <li><Link>Calendar</Link></li>
  </ul>
</Router>
```

```
<Router>
  <Breadcrumbs>
    {(item: RouterItem) => (
      <Breadcrumb>
        <Link>{item.label}</Link>
      </Breadcrumb>
    )}
  </Breadcrumbs>
  <ul>
    <li>
      <Link>Breadcrumbs</Link>
    </li>
    <li>
      <Link>Button</Link>
    </li>
    <li>
      <Link>Calendar</Link>
    </li>
  </ul>
</Router>
```

```
<Router>
  <Breadcrumbs>
    {(
      item: RouterItem
    ) => (
      <Breadcrumb>
        <Link>
          {item.label}
        </Link>
      </Breadcrumb>
    )}
  </Breadcrumbs>
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

Breadcrumbs passes props to its child components, such as the links, via their associated contexts. These contexts are exported so you can also consume them in your own custom components. This enables you to reuse existing components from your app or component library together with React Aria Components.

Component

Context

Props

Ref

`Link`

`LinkContext`

`[LinkProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Link.tsx:LinkProps)`

`[HTMLAnchorElement](https://developer.mozilla.org/docs/Web/API/HTMLAnchorElement)`

This example consumes from `LinkContext` in an existing styled link component to make it compatible with React Aria Components. The `[useContextProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:useContextProps)` hook merges the local props and ref with the ones provided via context by Breadcrumbs. [useLink](https://react-spectrum.adobe.com/react-aria/useLink.html) returns DOM props to spread onto the link element.

```
import type {LinkProps} from 'react-aria-components';
import {LinkContext, useContextProps} from 'react-aria-components';

const MyCustomLink = React.forwardRef(
  (props: LinkProps, ref: React.ForwardedRef<HTMLAnchorElement>) => {
    // Merge the local props and ref with the ones provided via context.
    [props, ref] = useContextProps(props, ref, LinkContext);
    // ... your existing Link component
    let { linkProps } = useLink(props, ref);
    return <a {...linkProps} ref={ref} />;
  }
);
```

```
import type {LinkProps} from 'react-aria-components';
import {
  LinkContext,
  useContextProps
} from 'react-aria-components';

const MyCustomLink = React.forwardRef(
  (
    props: LinkProps,
    ref: React.ForwardedRef<HTMLAnchorElement>
  ) => {
    // Merge the local props and ref with the ones provided via context.
    [props, ref] = useContextProps(props, ref, LinkContext);
    // ... your existing Link component
    let { linkProps } = useLink(props, ref);
    return <a {...linkProps} ref={ref} />;
  }
);
```

```
import type {LinkProps} from 'react-aria-components';
import {
  LinkContext,
  useContextProps
} from 'react-aria-components';

const MyCustomLink =
  React.forwardRef(
    (
      props: LinkProps,
      ref:
        React.ForwardedRef<
          HTMLAnchorElement
        >
    ) => {
      // Merge the local props and ref with the ones provided via context.
      [props, ref] =
        useContextProps(
          props,
          ref,
          LinkContext
        );
      // ... your existing Link component
      let { linkProps } =
        useLink(
          props,
          ref
        );
      return (
        <a
          {...linkProps}
          ref={ref}
        />
      );
    }
  );
```

Now you can use `MyCustomLink` within `Breadcrumbs`, in place of the builtin React Aria Components `Link`.

```
<Breadcrumbs>
  <Breadcrumb><MyCustomLink>Custom link</MyCustomLink></Breadcrumb>  {/* ... */}
</Breadcrumbs>
```

```
<Breadcrumbs>
  <Breadcrumb>
    <MyCustomLink>Custom link</MyCustomLink>
  </Breadcrumb>  {/* ... */}
</Breadcrumbs>
```

```
<Breadcrumbs>
  <Breadcrumb>
    <MyCustomLink>
      Custom link
    </MyCustomLink>
  </Breadcrumb>  {/* ... */}
</Breadcrumbs>
```

If you need to customize things further, such as customizing the DOM structure, you can drop down to the lower level Hook-based API. See [useBreadcrumbs](https://react-spectrum.adobe.com/react-aria/useBreadcrumbs.html) for more details.