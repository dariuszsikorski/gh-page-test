# Getting Started

**Source**: [https://react-spectrum.adobe.com/react-aria/getting-started.html](https://react-spectrum.adobe.com/react-aria/getting-started.html)

> Documentation for Getting Started in the React Aria package.

---

This page describes how to get started with React Aria.

* * *

**React Aria** is a library of unstyled React components and hooks that helps you build accessible, high quality UI components for your application or design system. It provides components for common UI patterns, with [accessibility](https://react-spectrum.adobe.com/react-aria/accessibility.html), [internationalization](https://react-spectrum.adobe.com/react-aria/internationalization.html), [interactions](https://react-spectrum.adobe.com/react-aria/interactions.html), and behavior built in, allowing you to focus on your unique design and styling rather than re-building these challenging aspects. React Aria has been meticulously tested across a wide variety of devices, interaction modalities, and assistive technologies to ensure the best experience possible for all users.

* * *

React Aria Components can be installed using a package manager like [npm](https://docs.npmjs.com/cli/npm) or [yarn](https://classic.yarnpkg.com/lang/en/).

```
yarn add react-aria-components
```

All components are available in this one package for ease of dependency management.

* * *

Once installed, you can import and render the components you need. Each component may include several parts, as documented on the corresponding component page. The API is designed around composition, where each component generally has a 1:1 relationship with a single DOM element. This makes it easy to style every element, and control the layout and DOM order as needed to implement your design.

This example renders a custom [Select](https://react-spectrum.adobe.com/react-aria/Select.html).

```
import {Button, Label, ListBox, ListBoxItem, Popover, Select, SelectValue} from 'react-aria-components';

<Select>
  <Label>Favorite Animal</Label>
  <Button>
    <SelectValue />
    <span aria-hidden="true">▼</span>
  </Button>
  <Popover>
    <ListBox>
      <ListBoxItem>Cat</ListBoxItem>
      <ListBoxItem>Dog</ListBoxItem>
      <ListBoxItem>Kangaroo</ListBoxItem>
    </ListBox>
  </Popover>
</Select>
```

```
import {
  Button,
  Label,
  ListBox,
  ListBoxItem,
  Popover,
  Select,
  SelectValue
} from 'react-aria-components';

<Select>
  <Label>Favorite Animal</Label>
  <Button>
    <SelectValue />
    <span aria-hidden="true">▼</span>
  </Button>
  <Popover>
    <ListBox>
      <ListBoxItem>Cat</ListBoxItem>
      <ListBoxItem>Dog</ListBoxItem>
      <ListBoxItem>Kangaroo</ListBoxItem>
    </ListBox>
  </Popover>
</Select>
```

```
import {
  Button,
  Label,
  ListBox,
  ListBoxItem,
  Popover,
  Select,
  SelectValue
} from 'react-aria-components';

<Select>
  <Label>
    Favorite Animal
  </Label>
  <Button>
    <SelectValue />
    <span aria-hidden="true">
      ▼
    </span>
  </Button>
  <Popover>
    <ListBox>
      <ListBoxItem>
        Cat
      </ListBoxItem>
      <ListBoxItem>
        Dog
      </ListBoxItem>
      <ListBoxItem>
        Kangaroo
      </ListBoxItem>
    </ListBox>
  </Popover>
</Select>
```

React Aria Components do not include any styles by default, allowing you to build custom designs to fit your application or design system. It works with any styling solution, including vanilla CSS, Tailwind CSS, CSS-in-JS, etc.

By default, all React Aria Components include CSS class names that you can use for styling, along with data attributes to represent states such as pressed, hovered, selected, etc.

```
.react-aria-ListBoxItem {
  color: black;

  &[data-selected] {
    background: slateblue;
    color: white;
  }
}
```

```
.react-aria-ListBoxItem {
  color: black;

  &[data-selected] {
    background: slateblue;
    color: white;
  }
}
```

```
.react-aria-ListBoxItem {
  color: black;

  &[data-selected] {
    background: slateblue;
    color: white;
  }
}
```

This is a quick way to get started, but you can also create your own custom classes using the `className` prop, which overrides the defaults. The full CSS for all of the components in above example is below:

Show CSS

```
@import "@react-aria/example-theme";

.react-aria-Select {
  .react-aria-Button {
    color: var(--text-color);
    background: var(--button-background);
    border: 1px solid var(--border-color);
    box-shadow: 0 1px 2px rgba(0 0 0 / 0.1);
    forced-color-adjust: none;
    border-radius: 6px;
    appearance: none;
    vertical-align: middle;
    font-size: 1.072rem;
    padding: 0.286rem 0.286rem 0.286rem 0.571rem;
    margin: 0;
    outline: none;
    display: flex;
    align-items: center;
    max-width: 250px;

    &[data-focus-visible] {
      outline: 2px solid var(--focus-ring-color);
      outline-offset: -1px;
    }

    &[data-pressed] {
      background: var(--button-background-pressed);
    }
  }

  .react-aria-SelectValue {
    &[data-placeholder] {
      font-style: italic;
      color: var(--text-color-placeholder);
    }
  }

  span[aria-hidden] {
    width: 1.5rem;
    line-height: 1.375rem;
    margin-left: 1rem;
    padding: 1px;
    background: var(--highlight-background);
    color: var(--highlight-foreground);
    border-radius: 4px;
    font-size: 0.857rem;
  }
}

.react-aria-ListBox {
  max-height: inherit;
  box-sizing: border-box;
  overflow: auto;
  padding: 2px;
  outline: none;

  .react-aria-ListBoxItem {
    margin: 2px;
    padding: 0.286rem 0.571rem 0.286rem 1.571rem;
    border-radius: 6px;
    outline: none;
    cursor: default;
    color: var(--text-color);
    font-size: 1.072rem;
    position: relative;
    display: flex;
    flex-direction: column;
    forced-color-adjust: none;

    &[data-selected] {
      font-weight: 600;

      &::before {
        content: '✓';
        content: '✓' / '';
        alt: ' ';
        position: absolute;
        top: 4px;
        left: 4px;
      }
    }

    &[data-focused],
    &[data-pressed] {
      background: var(--highlight-background);
      color: var(--highlight-foreground);
    }
  }
}

.react-aria-Popover {
  border: 1px solid var(--gray-200);
  box-shadow: 0 8px 20px rgba(0 0 0 / 0.1);
  border-radius: 6px;
  background: var(--overlay-background);
  outline: none;
  min-width: var(--trigger-width);
  max-width: 250px;
  box-sizing: border-box;

  &[data-placement=top] {
    --origin: translateY(8px);
  }

  &[data-placement=bottom] {
    --origin: translateY(-8px);
  }

  &[data-entering] {
    animation: slide 200ms;
  }

  &[data-exiting] {
    animation: slide 200ms reverse ease-in;
  }
}

@keyframes slide {
  from {
    transform: var(--origin);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
}
```

```
@import "@react-aria/example-theme";

.react-aria-Select {
  .react-aria-Button {
    color: var(--text-color);
    background: var(--button-background);
    border: 1px solid var(--border-color);
    box-shadow: 0 1px 2px rgba(0 0 0 / 0.1);
    forced-color-adjust: none;
    border-radius: 6px;
    appearance: none;
    vertical-align: middle;
    font-size: 1.072rem;
    padding: 0.286rem 0.286rem 0.286rem 0.571rem;
    margin: 0;
    outline: none;
    display: flex;
    align-items: center;
    max-width: 250px;

    &[data-focus-visible] {
      outline: 2px solid var(--focus-ring-color);
      outline-offset: -1px;
    }

    &[data-pressed] {
      background: var(--button-background-pressed);
    }
  }

  .react-aria-SelectValue {
    &[data-placeholder] {
      font-style: italic;
      color: var(--text-color-placeholder);
    }
  }

  span[aria-hidden] {
    width: 1.5rem;
    line-height: 1.375rem;
    margin-left: 1rem;
    padding: 1px;
    background: var(--highlight-background);
    color: var(--highlight-foreground);
    border-radius: 4px;
    font-size: 0.857rem;
  }
}

.react-aria-ListBox {
  max-height: inherit;
  box-sizing: border-box;
  overflow: auto;
  padding: 2px;
  outline: none;

  .react-aria-ListBoxItem {
    margin: 2px;
    padding: 0.286rem 0.571rem 0.286rem 1.571rem;
    border-radius: 6px;
    outline: none;
    cursor: default;
    color: var(--text-color);
    font-size: 1.072rem;
    position: relative;
    display: flex;
    flex-direction: column;
    forced-color-adjust: none;

    &[data-selected] {
      font-weight: 600;

      &::before {
        content: '✓';
        content: '✓' / '';
        alt: ' ';
        position: absolute;
        top: 4px;
        left: 4px;
      }
    }

    &[data-focused],
    &[data-pressed] {
      background: var(--highlight-background);
      color: var(--highlight-foreground);
    }
  }
}

.react-aria-Popover {
  border: 1px solid var(--gray-200);
  box-shadow: 0 8px 20px rgba(0 0 0 / 0.1);
  border-radius: 6px;
  background: var(--overlay-background);
  outline: none;
  min-width: var(--trigger-width);
  max-width: 250px;
  box-sizing: border-box;

  &[data-placement=top] {
    --origin: translateY(8px);
  }

  &[data-placement=bottom] {
    --origin: translateY(-8px);
  }

  &[data-entering] {
    animation: slide 200ms;
  }

  &[data-exiting] {
    animation: slide 200ms reverse ease-in;
  }
}

@keyframes slide {
  from {
    transform: var(--origin);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
}
```

```
@import "@react-aria/example-theme";

.react-aria-Select {
  .react-aria-Button {
    color: var(--text-color);
    background: var(--button-background);
    border: 1px solid var(--border-color);
    box-shadow: 0 1px 2px rgba(0 0 0 / 0.1);
    forced-color-adjust: none;
    border-radius: 6px;
    appearance: none;
    vertical-align: middle;
    font-size: 1.072rem;
    padding: 0.286rem 0.286rem 0.286rem 0.571rem;
    margin: 0;
    outline: none;
    display: flex;
    align-items: center;
    max-width: 250px;

    &[data-focus-visible] {
      outline: 2px solid var(--focus-ring-color);
      outline-offset: -1px;
    }

    &[data-pressed] {
      background: var(--button-background-pressed);
    }
  }

  .react-aria-SelectValue {
    &[data-placeholder] {
      font-style: italic;
      color: var(--text-color-placeholder);
    }
  }

  span[aria-hidden] {
    width: 1.5rem;
    line-height: 1.375rem;
    margin-left: 1rem;
    padding: 1px;
    background: var(--highlight-background);
    color: var(--highlight-foreground);
    border-radius: 4px;
    font-size: 0.857rem;
  }
}

.react-aria-ListBox {
  max-height: inherit;
  box-sizing: border-box;
  overflow: auto;
  padding: 2px;
  outline: none;

  .react-aria-ListBoxItem {
    margin: 2px;
    padding: 0.286rem 0.571rem 0.286rem 1.571rem;
    border-radius: 6px;
    outline: none;
    cursor: default;
    color: var(--text-color);
    font-size: 1.072rem;
    position: relative;
    display: flex;
    flex-direction: column;
    forced-color-adjust: none;

    &[data-selected] {
      font-weight: 600;

      &::before {
        content: '✓';
        content: '✓' / '';
        alt: ' ';
        position: absolute;
        top: 4px;
        left: 4px;
      }
    }

    &[data-focused],
    &[data-pressed] {
      background: var(--highlight-background);
      color: var(--highlight-foreground);
    }
  }
}

.react-aria-Popover {
  border: 1px solid var(--gray-200);
  box-shadow: 0 8px 20px rgba(0 0 0 / 0.1);
  border-radius: 6px;
  background: var(--overlay-background);
  outline: none;
  min-width: var(--trigger-width);
  max-width: 250px;
  box-sizing: border-box;

  &[data-placement=top] {
    --origin: translateY(8px);
  }

  &[data-placement=bottom] {
    --origin: translateY(-8px);
  }

  &[data-entering] {
    animation: slide 200ms;
  }

  &[data-exiting] {
    animation: slide 200ms reverse ease-in;
  }
}

@keyframes slide {
  from {
    transform: var(--origin);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
}
```

Check out our [styling guide](https://react-spectrum.adobe.com/react-aria/styling.html) to learn more about styling, states, render props, working with Tailwind CSS, and animation.

* * *

To help kick-start your project, we offer starter kits that include example implementations of all React Aria components with various styling solutions. All components are fully styled, including support for dark mode, high contrast mode, and all UI states. Each starter comes with a pre-configured [Storybook](https://storybook.js.org/) that you can experiment with, or use as a starting point for your own component library.

* * *

React Aria includes both components and hooks depending on the level of customization you need. The components provide a default DOM structure and styling API, and handle all of the glue code necessary to connect the hooks together on your behalf. If you need even more control, you can drop down to the lower-level hook-based API. Check out our [Hooks Introduction](https://react-spectrum.adobe.com/react-aria/hooks.html) to get started.

The components and hooks also work together, allowing them to be mixed and matched depending on the level of customization required. We recommend starting with components, dropping down to hooks only when additional flexibility is needed. See our [Advanced Customization](https://react-spectrum.adobe.com/react-aria/advanced.html) guide to learn more about using components and hooks together.