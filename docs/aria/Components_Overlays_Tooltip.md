# Tooltip

**Source**: [https://react-spectrum.adobe.com/react-aria/Tooltip.html](https://react-spectrum.adobe.com/react-aria/Tooltip.html)

> Documentation for Tooltip in the React Aria package.

---

A tooltip displays a description of an element on hover or focus.

* * *

```
import {Button, OverlayArrow, Tooltip, TooltipTrigger} from 'react-aria-components';
import {Edit} from 'lucide-react';

<TooltipTrigger>
  <Button>
    <Edit size={18} />
  </Button>
  <Tooltip>
    <OverlayArrow>
      <svg width={8} height={8} viewBox="0 0 8 8">
        <path d="M0 0 L4 4 L8 0" />
      </svg>
    </OverlayArrow>
    Edit
  </Tooltip>
</TooltipTrigger>
```

```
import {
  Button,
  OverlayArrow,
  Tooltip,
  TooltipTrigger
} from 'react-aria-components';
import {Edit} from 'lucide-react';

<TooltipTrigger>
  <Button>
    <Edit size={18} />
  </Button>
  <Tooltip>
    <OverlayArrow>
      <svg width={8} height={8} viewBox="0 0 8 8">
        <path d="M0 0 L4 4 L8 0" />
      </svg>
    </OverlayArrow>
    Edit
  </Tooltip>
</TooltipTrigger>
```

```
import {
  Button,
  OverlayArrow,
  Tooltip,
  TooltipTrigger
} from 'react-aria-components';
import {Edit} from 'lucide-react';

<TooltipTrigger>
  <Button>
    <Edit size={18} />
  </Button>
  <Tooltip>
    <OverlayArrow>
      <svg
        width={8}
        height={8}
        viewBox="0 0 8 8"
      >
        <path d="M0 0 L4 4 L8 0" />
      </svg>
    </OverlayArrow>
    Edit
  </Tooltip>
</TooltipTrigger>
```

Show CSS

```
@import "@react-aria/example-theme";

.react-aria-Tooltip {
  box-shadow: 0 8px 20px rgba(0 0 0 / 0.1);
  border-radius: 4px;
  background: var(--highlight-background);
  color: var(--highlight-foreground);
  forced-color-adjust: none;
  outline: none;
  padding: 2px 8px;
  max-width: 150px;
  /* fixes FF gap */
  transform: translate3d(0, 0, 0);
  transition: transform 200ms, opacity 200ms;
  transform-origin: var(--trigger-anchor-point);

  &[data-entering],
  &[data-exiting] {
    transform: scale(0.9) var(--origin);
    opacity: 0;
  }

  &[data-placement=top] {
    margin-bottom: 8px;
    --origin: translateY(4px);
  }

  &[data-placement=bottom] {
    margin-top: 8px;
    --origin: translateY(-4px);
    & .react-aria-OverlayArrow svg {
      transform: rotate(180deg);
    }
  }

  &[data-placement=right] {
    margin-left: 8px;
    --origin: translateX(-4px);
    & .react-aria-OverlayArrow svg {
      transform: rotate(90deg);
    }
  }

  &[data-placement=left] {
    margin-right: 8px;
    --origin: translateX(4px);
    & .react-aria-OverlayArrow svg {
      transform: rotate(-90deg);
    }
  }

  & .react-aria-OverlayArrow svg {
    display: block;
    fill: var(--highlight-background);
  }
}
```

```
@import "@react-aria/example-theme";

.react-aria-Tooltip {
  box-shadow: 0 8px 20px rgba(0 0 0 / 0.1);
  border-radius: 4px;
  background: var(--highlight-background);
  color: var(--highlight-foreground);
  forced-color-adjust: none;
  outline: none;
  padding: 2px 8px;
  max-width: 150px;
  /* fixes FF gap */
  transform: translate3d(0, 0, 0);
  transition: transform 200ms, opacity 200ms;
  transform-origin: var(--trigger-anchor-point);

  &[data-entering],
  &[data-exiting] {
    transform: scale(0.9) var(--origin);
    opacity: 0;
  }

  &[data-placement=top] {
    margin-bottom: 8px;
    --origin: translateY(4px);
  }

  &[data-placement=bottom] {
    margin-top: 8px;
    --origin: translateY(-4px);
    & .react-aria-OverlayArrow svg {
      transform: rotate(180deg);
    }
  }

  &[data-placement=right] {
    margin-left: 8px;
    --origin: translateX(-4px);
    & .react-aria-OverlayArrow svg {
      transform: rotate(90deg);
    }
  }

  &[data-placement=left] {
    margin-right: 8px;
    --origin: translateX(4px);
    & .react-aria-OverlayArrow svg {
      transform: rotate(-90deg);
    }
  }

  & .react-aria-OverlayArrow svg {
    display: block;
    fill: var(--highlight-background);
  }
}
```

```
@import "@react-aria/example-theme";

.react-aria-Tooltip {
  box-shadow: 0 8px 20px rgba(0 0 0 / 0.1);
  border-radius: 4px;
  background: var(--highlight-background);
  color: var(--highlight-foreground);
  forced-color-adjust: none;
  outline: none;
  padding: 2px 8px;
  max-width: 150px;
  /* fixes FF gap */
  transform: translate3d(0, 0, 0);
  transition: transform 200ms, opacity 200ms;
  transform-origin: var(--trigger-anchor-point);

  &[data-entering],
  &[data-exiting] {
    transform: scale(0.9) var(--origin);
    opacity: 0;
  }

  &[data-placement=top] {
    margin-bottom: 8px;
    --origin: translateY(4px);
  }

  &[data-placement=bottom] {
    margin-top: 8px;
    --origin: translateY(-4px);
    & .react-aria-OverlayArrow svg {
      transform: rotate(180deg);
    }
  }

  &[data-placement=right] {
    margin-left: 8px;
    --origin: translateX(-4px);
    & .react-aria-OverlayArrow svg {
      transform: rotate(90deg);
    }
  }

  &[data-placement=left] {
    margin-right: 8px;
    --origin: translateX(4px);
    & .react-aria-OverlayArrow svg {
      transform: rotate(-90deg);
    }
  }

  & .react-aria-OverlayArrow svg {
    display: block;
    fill: var(--highlight-background);
  }
}
```

* * *

The HTML `title` attribute can be used to create a tooltip, but it cannot be styled. Custom styled tooltips can be hard to build in an accessible way. `TooltipTrigger` and `Tooltip` help build fully accessible tooltips that can be styled as needed.

-   **Styleable** – States for entry and exit animations are included for easy styling, and an optional arrow element can be rendered.
-   **Accessible** – The trigger element is automatically associated with the tooltip via `aria-describedby`. Tooltips are displayed when an element receives focus.
-   **Hover behavior** – Tooltips display after a global delay on hover of the first tooltip, with no delay on subsequent tooltips to avoid unintended flickering. Emulated hover events on touch devices are ignored.
-   **Positioning** – The tooltip is positioned relative to the trigger element, and automatically flips and adjusts to avoid overlapping with the edge of the browser window.

* * *

Shows a tooltip trigger component with labels pointing to its parts, including the tooltip, and trigger elements.FlipTooltipTooltipTrigger

A tooltip consists of two parts: the trigger element and the tooltip itself. Users may reveal the tooltip by hovering or focusing the trigger.

```
import {Button, OverlayArrow, Tooltip, TooltipTrigger} from 'react-aria-components';

<TooltipTrigger>
  <Button />
  <Tooltip>
    <OverlayArrow />
  </Tooltip>
</TooltipTrigger>
```

```
import {
  Button,
  OverlayArrow,
  Tooltip,
  TooltipTrigger
} from 'react-aria-components';

<TooltipTrigger>
  <Button />
  <Tooltip>
    <OverlayArrow />
  </Tooltip>
</TooltipTrigger>
```

```
import {
  Button,
  OverlayArrow,
  Tooltip,
  TooltipTrigger
} from 'react-aria-components';

<TooltipTrigger>
  <Button />
  <Tooltip>
    <OverlayArrow />
  </Tooltip>
</TooltipTrigger>
```

Tooltip triggers must be focusable and hoverable in order to ensure that all users can activate them. When displayed, TooltipTrigger automatically associates the tooltip with the trigger element so that it is described by the tooltip content.

**Note**: tooltips are not shown on touch screen interactions. Ensure that your UI is usable without tooltips, or use an alternative component such as a [Popover](https://react-spectrum.adobe.com/react-aria/Popover.html) to show information in an adjacent element.

* * *

To help kick-start your project, we offer starter kits that include example implementations of all React Aria components with various styling solutions. All components are fully styled, including support for dark mode, high contrast mode, and all UI states. Each starter comes with a pre-configured [Storybook](https://storybook.js.org/) that you can experiment with, or use as a starting point for your own component library.

* * *

If you will use a Tooltip in multiple places in your app, you can wrap all of the pieces into a reusable component. This way, the DOM structure, styling code, and other logic are defined in a single place and reused everywhere to ensure consistency.

This example wraps `Tooltip` and all of its children together into a single component.

```
import type {TooltipProps} from 'react-aria-components';
import {Save} from 'lucide-react';

interface MyTooltipProps extends Omit<TooltipProps, 'children'> {
  children: React.ReactNode;
}

function MyTooltip({ children, ...props }: MyTooltipProps) {
  return (
    <Tooltip {...props}>
      <OverlayArrow>
        <svg width={8} height={8} viewBox="0 0 8 8">
          <path d="M0 0 L4 4 L8 0" />
        </svg>
      </OverlayArrow>
      {children}
    </Tooltip>
  );
}

<TooltipTrigger>
  <Button>
    <Save size={18} />
  </Button>
  <MyTooltip>Save</MyTooltip>
</TooltipTrigger>
```

```
import type {TooltipProps} from 'react-aria-components';
import {Save} from 'lucide-react';

interface MyTooltipProps
  extends Omit<TooltipProps, 'children'> {
  children: React.ReactNode;
}

function MyTooltip({ children, ...props }: MyTooltipProps) {
  return (
    <Tooltip {...props}>
      <OverlayArrow>
        <svg width={8} height={8} viewBox="0 0 8 8">
          <path d="M0 0 L4 4 L8 0" />
        </svg>
      </OverlayArrow>
      {children}
    </Tooltip>
  );
}

<TooltipTrigger>
  <Button>
    <Save size={18} />
  </Button>
  <MyTooltip>Save</MyTooltip>
</TooltipTrigger>
```

```
import type {TooltipProps} from 'react-aria-components';
import {Save} from 'lucide-react';

interface MyTooltipProps
  extends
    Omit<
      TooltipProps,
      'children'
    > {
  children:
    React.ReactNode;
}

function MyTooltip(
  { children, ...props }:
    MyTooltipProps
) {
  return (
    <Tooltip {...props}>
      <OverlayArrow>
        <svg
          width={8}
          height={8}
          viewBox="0 0 8 8"
        >
          <path d="M0 0 L4 4 L8 0" />
        </svg>
      </OverlayArrow>
      {children}
    </Tooltip>
  );
}

<TooltipTrigger>
  <Button>
    <Save size={18} />
  </Button>
  <MyTooltip>
    Save
  </MyTooltip>
</TooltipTrigger>
```

* * *

Tooltips appear after a short delay when hovering the trigger, or instantly when using keyboard focus. This delay is called the "warmup period", and it is a global timer, shared by all tooltips. Once a tooltip is displayed, other tooltips display immediately. If the user waits for the "cooldown period" before hovering another element, the warmup timer restarts.

```
<div style={{display: 'flex', gap: 8}}>
  <TooltipTrigger>
    <Button>Hover me</Button>
    <MyTooltip>I come up after a delay.</MyTooltip>
  </TooltipTrigger>
  <TooltipTrigger>
    <Button>Then hover me</Button>
    <MyTooltip>If you did it quickly, I appear immediately.</MyTooltip>
  </TooltipTrigger>
</div>
```

```
<div style={{ display: 'flex', gap: 8 }}>
  <TooltipTrigger>
    <Button>Hover me</Button>
    <MyTooltip>I come up after a delay.</MyTooltip>
  </TooltipTrigger>
  <TooltipTrigger>
    <Button>Then hover me</Button>
    <MyTooltip>
      If you did it quickly, I appear immediately.
    </MyTooltip>
  </TooltipTrigger>
</div>
```

```
<div
  style={{
    display: 'flex',
    gap: 8
  }}
>
  <TooltipTrigger>
    <Button>
      Hover me
    </Button>
    <MyTooltip>
      I come up after a
      delay.
    </MyTooltip>
  </TooltipTrigger>
  <TooltipTrigger>
    <Button>
      Then hover me
    </Button>
    <MyTooltip>
      If you did it
      quickly, I appear
      immediately.
    </MyTooltip>
  </TooltipTrigger>
</div>
```

The delay can be adjusted for hover using the `delay` prop.

```
<TooltipTrigger delay={0}>
  <Button><Save size={18} /></Button>
  <MyTooltip>Save</MyTooltip>
</TooltipTrigger>
```

```
<TooltipTrigger delay={0}>
  <Button><Save size={18} /></Button>
  <MyTooltip>Save</MyTooltip>
</TooltipTrigger>
```

```
<TooltipTrigger
  delay={0}
>
  <Button>
    <Save size={18} />
  </Button>
  <MyTooltip>
    Save
  </MyTooltip>
</TooltipTrigger>
```

By default, tooltips appear both on hover and on focus. The `trigger` prop can be set to `"focus"` to display the tooltip only on focus, and not on hover.

```
import {Disc} from 'lucide-react';
<TooltipTrigger trigger="focus">
  <Button><Disc size={18} /></Button>
  <MyTooltip>Burn CD</MyTooltip>
</TooltipTrigger>
```

```
import {Disc} from 'lucide-react';
<TooltipTrigger trigger="focus">
  <Button><Disc size={18} /></Button>
  <MyTooltip>Burn CD</MyTooltip>
</TooltipTrigger>
```

```
import {Disc} from 'lucide-react';
<TooltipTrigger trigger="focus">
  <Button>
    <Disc size={18} />
  </Button>
  <MyTooltip>
    Burn CD
  </MyTooltip>
</TooltipTrigger>
```

* * *

The open state of the tooltip can be controlled via the `defaultOpen` and `isOpen` props.

```
import {Bell} from 'lucide-react';
function Example() {
  let [isOpen, setOpen] = React.useState(false);

  return (
    <>
      <TooltipTrigger isOpen={isOpen} onOpenChange={setOpen}>
        <Button><Bell size={18} /></Button>
        <MyTooltip>Notifications</MyTooltip>
      </TooltipTrigger>
      <p>Tooltip is {isOpen ? 'showing' : 'not showing'}</p>
    </>
  );
}
```

```
import {Bell} from 'lucide-react';
function Example() {
  let [isOpen, setOpen] = React.useState(false);

  return (
    <>
      <TooltipTrigger
        isOpen={isOpen}
        onOpenChange={setOpen}
      >
        <Button>
          <Bell size={18} />
        </Button>
        <MyTooltip>Notifications</MyTooltip>
      </TooltipTrigger>
      <p>Tooltip is {isOpen ? 'showing' : 'not showing'}</p>
    </>
  );
}
```

```
import {Bell} from 'lucide-react';
function Example() {
  let [isOpen, setOpen] =
    React.useState(
      false
    );

  return (
    <>
      <TooltipTrigger
        isOpen={isOpen}
        onOpenChange={setOpen}
      >
        <Button>
          <Bell
            size={18}
          />
        </Button>
        <MyTooltip>
          Notifications
        </MyTooltip>
      </TooltipTrigger>
      <p>
        Tooltip is{' '}
        {isOpen
          ? 'showing'
          : 'not showing'}
      </p>
    </>
  );
}
```

* * *

The Tooltip's placement with respect to its trigger element can be adjusted using the `placement` prop. See the props table for a full list of available placement combinations.

```
import {ArrowDown, ArrowLeft, ArrowRight, ArrowUp} from 'lucide-react';
<div style={{ display: 'flex', gap: 8 }}>
  <TooltipTrigger>
    <Button>
      <ArrowLeft size={18} />
    </Button>
    <MyTooltip placement="start">
      In left-to-right, this is on the left. In right-to-left, this is on the
      right.
    </MyTooltip>
  </TooltipTrigger>
  <TooltipTrigger>
    <Button>
      <ArrowUp size={18} />
    </Button>
    <MyTooltip placement="top">This tooltip is above the button.</MyTooltip>
  </TooltipTrigger>
  <TooltipTrigger>
    <Button>
      <ArrowDown size={18} />
    </Button>
    <MyTooltip placement="bottom">
      This tooltip is below the button.
    </MyTooltip>
  </TooltipTrigger>
  <TooltipTrigger>
    <Button>
      <ArrowRight size={18} />
    </Button>
    <MyTooltip placement="end">
      In left-to-right, this is on the right. In right-to-left, this is on the
      left.
    </MyTooltip>
  </TooltipTrigger>
</div>
```

```
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp
} from 'lucide-react';
<div style={{ display: 'flex', gap: 8 }}>
  <TooltipTrigger>
    <Button>
      <ArrowLeft size={18} />
    </Button>
    <MyTooltip placement="start">
      In left-to-right, this is on the left. In
      right-to-left, this is on the right.
    </MyTooltip>
  </TooltipTrigger>
  <TooltipTrigger>
    <Button>
      <ArrowUp size={18} />
    </Button>
    <MyTooltip placement="top">
      This tooltip is above the button.
    </MyTooltip>
  </TooltipTrigger>
  <TooltipTrigger>
    <Button>
      <ArrowDown size={18} />
    </Button>
    <MyTooltip placement="bottom">
      This tooltip is below the button.
    </MyTooltip>
  </TooltipTrigger>
  <TooltipTrigger>
    <Button>
      <ArrowRight size={18} />
    </Button>
    <MyTooltip placement="end">
      In left-to-right, this is on the right. In
      right-to-left, this is on the left.
    </MyTooltip>
  </TooltipTrigger>
</div>
```

```
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp
} from 'lucide-react';
<div
  style={{
    display: 'flex',
    gap: 8
  }}
>
  <TooltipTrigger>
    <Button>
      <ArrowLeft
        size={18}
      />
    </Button>
    <MyTooltip placement="start">
      In left-to-right,
      this is on the
      left. In
      right-to-left,
      this is on the
      right.
    </MyTooltip>
  </TooltipTrigger>
  <TooltipTrigger>
    <Button>
      <ArrowUp
        size={18}
      />
    </Button>
    <MyTooltip placement="top">
      This tooltip is
      above the button.
    </MyTooltip>
  </TooltipTrigger>
  <TooltipTrigger>
    <Button>
      <ArrowDown
        size={18}
      />
    </Button>
    <MyTooltip placement="bottom">
      This tooltip is
      below the button.
    </MyTooltip>
  </TooltipTrigger>
  <TooltipTrigger>
    <Button>
      <ArrowRight
        size={18}
      />
    </Button>
    <MyTooltip placement="end">
      In left-to-right,
      this is on the
      right. In
      right-to-left,
      this is on the
      left.
    </MyTooltip>
  </TooltipTrigger>
</div>
```

### Offset and cross offset[#](#offset-and-cross-offset)

The Tooltip's offset with respect to its trigger can be adjusted using the `offset` and `crossOffset` props. The `offset` prop controls the spacing applied along the main axis between the element and its trigger whereas the `crossOffset` prop handles the spacing applied along the cross axis.

Below is a tooltip offset by an additional 50px above the trigger.

```
<TooltipTrigger>
  <Button><ArrowUp size={18} /></Button>
  <MyTooltip offset={50}>This will shift up.</MyTooltip>
</TooltipTrigger>
```

```
<TooltipTrigger>
  <Button><ArrowUp size={18} /></Button>
  <MyTooltip offset={50}>This will shift up.</MyTooltip>
</TooltipTrigger>
```

```
<TooltipTrigger>
  <Button>
    <ArrowUp
      size={18}
    />
  </Button>
  <MyTooltip
    offset={50}
  >
    This will shift up.
  </MyTooltip>
</TooltipTrigger>
```

Below is a tooltip cross offset by an additional 100px to the right of the trigger.

```
<TooltipTrigger>
  <Button>
    <ArrowRight size={18} />
  </Button>
  <MyTooltip crossOffset={60} placement="bottom">
    This will shift over to the right.
  </MyTooltip>
</TooltipTrigger>
```

```
<TooltipTrigger>
  <Button>
    <ArrowRight size={18} />
  </Button>
  <MyTooltip crossOffset={60} placement="bottom">
    This will shift over to the right.
  </MyTooltip>
</TooltipTrigger>
```

```
<TooltipTrigger>
  <Button>
    <ArrowRight
      size={18}
    />
  </Button>
  <MyTooltip
    crossOffset={60}
    placement="bottom"
  >
    This will shift
    over to the right.
  </MyTooltip>
</TooltipTrigger>
```

* * *

The `isDisabled` prop can be provided to a TooltipTrigger to disable the tooltip, without disabling the trigger it displays on.

```
import {Printer} from 'lucide-react';
<TooltipTrigger isDisabled>
  <Button><Printer size={18} /></Button>
  <MyTooltip>Print</MyTooltip>
</TooltipTrigger>
```

```
import {Printer} from 'lucide-react';
<TooltipTrigger isDisabled>
  <Button><Printer size={18} /></Button>
  <MyTooltip>Print</MyTooltip>
</TooltipTrigger>
```

```
import {Printer} from 'lucide-react';
<TooltipTrigger
  isDisabled
>
  <Button>
    <Printer
      size={18}
    />
  </Button>
  <MyTooltip>
    Print
  </MyTooltip>
</TooltipTrigger>
```

* * *

`TooltipTrigger` works out of the box with any focusable React Aria component (e.g. [Button](https://react-spectrum.adobe.com/react-aria/Button.html), [Link](https://react-spectrum.adobe.com/react-aria/Link.html), etc.). Custom trigger elements such as third party components and other DOM elements are also supported by wrapping them with the `<Focusable>` component.

```
import {Focusable} from 'react-aria-components';

<TooltipTrigger>
  <Focusable>
    <span role="button">Custom trigger</span>
  </Focusable>  <MyTooltip>Tooltip</MyTooltip>
</TooltipTrigger>
```

```
import {Focusable} from 'react-aria-components';

<TooltipTrigger>
  <Focusable>
    <span role="button">Custom trigger</span>
  </Focusable>  <MyTooltip>Tooltip</MyTooltip>
</TooltipTrigger>
```

```
import {Focusable} from 'react-aria-components';

<TooltipTrigger>
  <Focusable>
    <span role="button">
      Custom trigger
    </span>
  </Focusable>  <MyTooltip>
    Tooltip
  </MyTooltip>
</TooltipTrigger>
```

Note that any `<Focusable>` child must have an ARIA role or use an appropriate semantic HTML element so that screen readers can announce the content of the tooltip. Trigger components must forward their `ref` and spread all props to a DOM element.

```
const CustomTrigger = React.forwardRef((props, ref) => (
  <button {...props} ref={ref} />
));
```

```
const CustomTrigger = React.forwardRef((props, ref) => (
  <button {...props} ref={ref} />
));
```

```
const CustomTrigger =
  React.forwardRef((
    props,
    ref
  ) => (
    <button
      {...props}
      ref={ref}
    />
  ));
```

[DialogTrigger](https://react-spectrum.adobe.com/react-aria/Dialog.html#custom-trigger) or [MenuTrigger](https://react-spectrum.adobe.com/react-aria/Menu.html#custom-trigger) with custom triggers via `<Pressable>` also automatically work with `TooltipTrigger`. All `<Pressable>` elements are already focusable, so there's no need to wrap them in `<Focusable>` in this case.

* * *

Name

Type

Default

Description

`children`

`[ReactNode](https://reactjs.org/docs/rendering-elements.html)`

—

`isDisabled`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the tooltip should be disabled, independent from the trigger.

`delay`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)`

`1500`

The delay time for the tooltip to show up. [See guidelines](https://spectrum.adobe.com/page/tooltip/#Immediate-or-delayed-appearance).

`closeDelay`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)`

`500`

The delay time for the tooltip to close. [See guidelines](https://spectrum.adobe.com/page/tooltip/#Warmup-and-cooldown).

`trigger`

`'hover' | 'focus'`

`'hover'`

By default, opens for both focus and hover. Can be made to open only for focus.

`isOpen`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the overlay is open by default (controlled).

`defaultOpen`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the overlay is open by default (uncontrolled).

Events

Name

Type

Description

`onOpenChange`

`( (isOpen: [boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) )) => void`

Handler that is called when the overlay's open state changes.

Name

Type

Default

Description

`triggerRef`

`[RefObject](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/refs.d.ts:RefObject)<[Element](https://developer.mozilla.org/docs/Web/API/Element) | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)>`

—

The ref for the element which the tooltip positions itself with respect to.

When used within a TooltipTrigger this is set automatically. It is only required when used standalone.

`isEntering`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the tooltip is currently performing an entry animation.

`isExiting`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the tooltip is currently performing an exit animation.

`placement`

`[Placement](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/overlays/src/index.d.ts:Placement)`

`'top'`

The placement of the tooltip with respect to the trigger.

`containerPadding`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)`

`12`

The placement padding that should be applied between the element and its surrounding container.

`offset`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)`

`0`

The additional offset applied along the main axis between the element and its anchor element.

`crossOffset`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)`

`0`

The additional offset applied along the cross axis between the element and its anchor element.

`shouldFlip`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

`true`

Whether the element should flip its orientation (e.g. top to bottom or left to right) when there is insufficient room for it to render completely.

`isOpen`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the element is rendered.

`arrowBoundaryOffset`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)`

`0`

The minimum distance the arrow's edge should be from the edge of the overlay element.

`defaultOpen`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the overlay is open by default (uncontrolled).

`children`

`[ChildrenOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ChildrenOrFunction)<[TooltipRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Tooltip.tsx:TooltipRenderProps)>`

—

The children of the component. A function may be provided to alter the children based on component state.

`className`

`[ClassNameOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ClassNameOrFunction)<[TooltipRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Tooltip.tsx:TooltipRenderProps)>`

—

The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.

`style`

`[StyleOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:StyleOrFunction)<[TooltipRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Tooltip.tsx:TooltipRenderProps)>`

—

The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.

Events

Name

Type

Description

`onOpenChange`

`( (isOpen: [boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) )) => void`

Handler that is called when the overlay's open state changes.

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

`OverlayArrow` accepts all HTML attributes.

* * *

React Aria components can be styled in many ways, including using CSS classes, inline styles, utility classes (e.g. Tailwind), CSS-in-JS (e.g. Styled Components), etc. By default, all components include a builtin `className` attribute which can be targeted using CSS selectors. These follow the `react-aria-ComponentName` naming convention.

```
.react-aria-Tooltip {
  /* ... */
}
```

```
.react-aria-Tooltip {
  /* ... */
}
```

```
.react-aria-Tooltip {
  /* ... */
}
```

A custom `className` can also be specified on any component. This overrides the default `className` provided by React Aria with your own.

```
<Tooltip className="my-tooltip">
  {/* ... */}
</Tooltip>
```

```
<Tooltip className="my-tooltip">
  {/* ... */}
</Tooltip>
```

```
<Tooltip className="my-tooltip">
  {/* ... */}
</Tooltip>
```

In addition, some components support multiple UI states (e.g. focused, placeholder, readonly, etc.). React Aria components expose states using data attributes, which you can target in CSS selectors. For example:

```
.react-aria-Tooltip[data-placement=left] {
  /* ... */
}
```

```
.react-aria-Tooltip[data-placement=left] {
  /* ... */
}
```

```
.react-aria-Tooltip[data-placement=left] {
  /* ... */
}
```

The `className` and `style` props also accept functions which receive states for styling. This lets you dynamically determine the classes or styles to apply, which is useful when using utility CSS libraries like [Tailwind](https://tailwindcss.com/).

```
<OverlayArrow
  className={({ placement }) =>
    placement === 'left' || placement === 'right' ? 'rotate-90' : 'rotate-0'}
>
  {/* ... */}
</OverlayArrow>
```

```
<OverlayArrow
  className={({ placement }) =>
    placement === 'left' || placement === 'right'
      ? 'rotate-90'
      : 'rotate-0'}
>
  {/* ... */}
</OverlayArrow>
```

```
<OverlayArrow
  className={(
    { placement }
  ) =>
    placement ===
        'left' ||
      placement ===
        'right'
      ? 'rotate-90'
      : 'rotate-0'}
>
  {/* ... */}
</OverlayArrow>
```

Tooltips also support entry and exit animations via states exposed as data attributes and render props. `Tooltip` will automatically wait for any exit animations to complete before it is removed from the DOM. The `--trigger-anchor-point` variable is set to the position of the trigger relative to the popover, which is useful for origin-aware animations. See the [animation guide](https://react-spectrum.adobe.com/react-aria/styling.html#animation) for more details.

```
.react-aria-Tooltip {
  transition: opacity 300ms, scale 300ms;
  transform-origin: var(--trigger-anchor-point);

  &[data-entering],
  &[data-exiting] {
    opacity: 0;
    scale: 0.85;
  }
}
```

```
.react-aria-Tooltip {
  transition: opacity 300ms, scale 300ms;
  transform-origin: var(--trigger-anchor-point);

  &[data-entering],
  &[data-exiting] {
    opacity: 0;
    scale: 0.85;
  }
}
```

```
.react-aria-Tooltip {
  transition: opacity 300ms, scale 300ms;
  transform-origin: var(--trigger-anchor-point);

  &[data-entering],
  &[data-exiting] {
    opacity: 0;
    scale: 0.85;
  }
}
```

The states, selectors, and render props for each component used in a `TooltipTrigger` are documented below.

The `TooltipTrigger` component does not render any DOM elements (it only passes through its children) so it does not support styling. If you need a wrapper element, add one yourself inside the `<TooltipTrigger>`.

```
<TooltipTrigger>
  <div className="my-tooltip-trigger">
    {/* ... */}
  </div>
</TooltipTrigger>
```

```
<TooltipTrigger>
  <div className="my-tooltip-trigger">
    {/* ... */}
  </div>
</TooltipTrigger>
```

```
<TooltipTrigger>
  <div className="my-tooltip-trigger">
    {/* ... */}
  </div>
</TooltipTrigger>
```

A `Tooltip` can be targeted with the `.react-aria-Tooltip` CSS selector, or by overriding with a custom `className`. It supports the following states and render props:

Name

CSS Selector

Description

`placement`

`[data-placement="left | right | top | bottom"]`

The placement of the tooltip relative to the trigger.

`isEntering`

`[data-entering]`

Whether the tooltip is currently entering. Use this to apply animations.

`isExiting`

`[data-exiting]`

Whether the tooltip is currently exiting. Use this to apply animations.

`state`

`—`

State of the tooltip.

A `OverlayArrow` can be targeted with the `.react-aria-OverlayArrow` CSS selector, or by overriding with a custom `className`. It supports the following states and render props:

Name

CSS Selector

Description

`placement`

`[data-placement="left | right | top | bottom"]`

The placement of the overlay relative to the trigger.

* * *

TooltipTrigger provides an `[TooltipTriggerState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/tooltip/src/useTooltipTriggerState.ts:TooltipTriggerState)` object to its children via `TooltipTriggerStateContext`. This can be used to access and manipulate the tooltip trigger's state.

If you need to customize things further, such as accessing internal state or customizing DOM structure, you can drop down to the lower level Hook-based API. See [useTooltipTrigger](https://react-spectrum.adobe.com/react-aria/useTooltipTrigger.html) for more details.