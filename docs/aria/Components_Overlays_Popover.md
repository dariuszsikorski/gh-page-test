# Popover

**Source**: [https://react-spectrum.adobe.com/react-aria/Popover.html](https://react-spectrum.adobe.com/react-aria/Popover.html)

> Documentation for Popover in the React Aria package.

---

A popover is an overlay element positioned relative to a trigger.

* * *

```
import {Button, Dialog, DialogTrigger, Heading, OverlayArrow, Popover, Switch} from 'react-aria-components';

<DialogTrigger>
  <Button>Settings</Button>
  <Popover>
    <OverlayArrow>
      <svg width={12} height={12} viewBox="0 0 12 12">
        <path d="M0 0 L6 6 L12 0" />
      </svg>
    </OverlayArrow>
    <Dialog>
      <div className="flex-col">
        <Switch defaultSelected>
          <div className="indicator" /> Wi-Fi
        </Switch>
        <Switch defaultSelected>
          <div className="indicator" /> Bluetooth
        </Switch>
        <Switch>
          <div className="indicator" /> Mute
        </Switch>
      </div>
    </Dialog>
  </Popover>
</DialogTrigger>
```

```
import {
  Button,
  Dialog,
  DialogTrigger,
  Heading,
  OverlayArrow,
  Popover,
  Switch
} from 'react-aria-components';

<DialogTrigger>
  <Button>Settings</Button>
  <Popover>
    <OverlayArrow>
      <svg width={12} height={12} viewBox="0 0 12 12">
        <path d="M0 0 L6 6 L12 0" />
      </svg>
    </OverlayArrow>
    <Dialog>
      <div className="flex-col">
        <Switch defaultSelected>
          <div className="indicator" /> Wi-Fi
        </Switch>
        <Switch defaultSelected>
          <div className="indicator" /> Bluetooth
        </Switch>
        <Switch>
          <div className="indicator" /> Mute
        </Switch>
      </div>
    </Dialog>
  </Popover>
</DialogTrigger>
```

```
import {
  Button,
  Dialog,
  DialogTrigger,
  Heading,
  OverlayArrow,
  Popover,
  Switch
} from 'react-aria-components';

<DialogTrigger>
  <Button>
    Settings
  </Button>
  <Popover>
    <OverlayArrow>
      <svg
        width={12}
        height={12}
        viewBox="0 0 12 12"
      >
        <path d="M0 0 L6 6 L12 0" />
      </svg>
    </OverlayArrow>
    <Dialog>
      <div className="flex-col">
        <Switch
          defaultSelected
        >
          <div className="indicator" />
          {' '}
          Wi-Fi
        </Switch>
        <Switch
          defaultSelected
        >
          <div className="indicator" />
          {' '}
          Bluetooth
        </Switch>
        <Switch>
          <div className="indicator" />
          {' '}
          Mute
        </Switch>
      </div>
    </Dialog>
  </Popover>
</DialogTrigger>
```

Show CSS

```
@import "@react-aria/example-theme";

.react-aria-Popover {
  --background-color: var(--overlay-background);

  border: 1px solid var(--border-color);
  box-shadow: 0 8px 20px rgba(0 0 0 / 0.1);
  border-radius: 6px;
  background: var(--background-color);
  color: var(--text-color);
  outline: none;
  max-width: 250px;
  transition: transform 200ms, opacity 200ms;
  --starting-scale: scale(0.9);
  transform-origin: var(--trigger-anchor-point);

  .react-aria-OverlayArrow svg {
    display: block;
    fill: var(--background-color);
    stroke: var(--border-color);
    stroke-width: 1px;
  }

  &[data-entering],
  &[data-exiting] {
    transform: var(--starting-scale) var(--origin);
    opacity: 0;
  }

  &[data-placement=top] {
    --origin: translateY(8px);

    &:has(.react-aria-OverlayArrow) {
      margin-bottom: 6px;
    }
  }

  &[data-placement=bottom] {
    --origin: translateY(-8px);

    &:has(.react-aria-OverlayArrow) {
      margin-top: 6px;
    }

    .react-aria-OverlayArrow svg {
      transform: rotate(180deg);
    }
  }

  &[data-placement=right] {
    --origin: translateX(-8px);

    &:has(.react-aria-OverlayArrow) {
      margin-left: 6px;
    }

    .react-aria-OverlayArrow svg {
      transform: rotate(90deg);
    }
  }

  &[data-placement=left] {
    --origin: translateX(8px);

    &:has(.react-aria-OverlayArrow) {
      margin-right: 6px;
    }

    .react-aria-OverlayArrow svg {
      transform: rotate(-90deg);
    }
  }
}
```

```
@import "@react-aria/example-theme";

.react-aria-Popover {
  --background-color: var(--overlay-background);

  border: 1px solid var(--border-color);
  box-shadow: 0 8px 20px rgba(0 0 0 / 0.1);
  border-radius: 6px;
  background: var(--background-color);
  color: var(--text-color);
  outline: none;
  max-width: 250px;
  transition: transform 200ms, opacity 200ms;
  --starting-scale: scale(0.9);
  transform-origin: var(--trigger-anchor-point);

  .react-aria-OverlayArrow svg {
    display: block;
    fill: var(--background-color);
    stroke: var(--border-color);
    stroke-width: 1px;
  }

  &[data-entering],
  &[data-exiting] {
    transform: var(--starting-scale) var(--origin);
    opacity: 0;
  }

  &[data-placement=top] {
    --origin: translateY(8px);

    &:has(.react-aria-OverlayArrow) {
      margin-bottom: 6px;
    }
  }

  &[data-placement=bottom] {
    --origin: translateY(-8px);

    &:has(.react-aria-OverlayArrow) {
      margin-top: 6px;
    }

    .react-aria-OverlayArrow svg {
      transform: rotate(180deg);
    }
  }

  &[data-placement=right] {
    --origin: translateX(-8px);

    &:has(.react-aria-OverlayArrow) {
      margin-left: 6px;
    }

    .react-aria-OverlayArrow svg {
      transform: rotate(90deg);
    }
  }

  &[data-placement=left] {
    --origin: translateX(8px);

    &:has(.react-aria-OverlayArrow) {
      margin-right: 6px;
    }

    .react-aria-OverlayArrow svg {
      transform: rotate(-90deg);
    }
  }
}
```

```
@import "@react-aria/example-theme";

.react-aria-Popover {
  --background-color: var(--overlay-background);

  border: 1px solid var(--border-color);
  box-shadow: 0 8px 20px rgba(0 0 0 / 0.1);
  border-radius: 6px;
  background: var(--background-color);
  color: var(--text-color);
  outline: none;
  max-width: 250px;
  transition: transform 200ms, opacity 200ms;
  --starting-scale: scale(0.9);
  transform-origin: var(--trigger-anchor-point);

  .react-aria-OverlayArrow svg {
    display: block;
    fill: var(--background-color);
    stroke: var(--border-color);
    stroke-width: 1px;
  }

  &[data-entering],
  &[data-exiting] {
    transform: var(--starting-scale) var(--origin);
    opacity: 0;
  }

  &[data-placement=top] {
    --origin: translateY(8px);

    &:has(.react-aria-OverlayArrow) {
      margin-bottom: 6px;
    }
  }

  &[data-placement=bottom] {
    --origin: translateY(-8px);

    &:has(.react-aria-OverlayArrow) {
      margin-top: 6px;
    }

    .react-aria-OverlayArrow svg {
      transform: rotate(180deg);
    }
  }

  &[data-placement=right] {
    --origin: translateX(-8px);

    &:has(.react-aria-OverlayArrow) {
      margin-left: 6px;
    }

    .react-aria-OverlayArrow svg {
      transform: rotate(90deg);
    }
  }

  &[data-placement=left] {
    --origin: translateX(8px);

    &:has(.react-aria-OverlayArrow) {
      margin-right: 6px;
    }

    .react-aria-OverlayArrow svg {
      transform: rotate(-90deg);
    }
  }
}
```

* * *

There is no built in way to create popovers in HTML. `Popover` helps achieve accessible popovers that can be styled as needed.

-   **Styleable** – States for entry and exit animations are included for easy styling, and an optional arrow element can be rendered.
-   **Accessible** – The trigger and popover are automatically associated semantically via ARIA. Content outside the popover is hidden from assistive technologies while it is open. The popover closes when interacting outside, or pressing the Escape key.
-   **Focus management** – Focus is moved into the popover on mount, and restored to the trigger element on unmount.
-   **Positioning** – The popover is positioned relative to the trigger element, and automatically flips and adjusts to avoid overlapping with the edge of the browser window.

Note: `Popover` only provides the overlay itself. It should be combined with [Dialog](https://react-spectrum.adobe.com/react-aria/Dialog.html) to create fully accessible popovers. Other overlays such as menus may also be placed in a popover.

* * *

Arrow (optional)Popover

A popover consists of a trigger element (e.g. button) and an overlay, which is positioned relative to the trigger. The overlay may contain a [Dialog](https://react-spectrum.adobe.com/react-aria/Dialog.html), or another element such as a [Menu](https://react-spectrum.adobe.com/react-aria/Menu.html) or [ListBox](https://react-spectrum.adobe.com/react-aria/ListBox.html) when used within a component such as a [Select](https://react-spectrum.adobe.com/react-aria/Select.html) or [ComboBox](https://react-spectrum.adobe.com/react-aria/ComboBox.html).

```
import {Button, Dialog, DialogTrigger, OverlayArrow, Popover} from 'react-aria-components';

<DialogTrigger>
  <Button />
  <Popover>
    <OverlayArrow />
    <Dialog />
  </Popover>
</DialogTrigger>
```

```
import {
  Button,
  Dialog,
  DialogTrigger,
  OverlayArrow,
  Popover
} from 'react-aria-components';

<DialogTrigger>
  <Button />
  <Popover>
    <OverlayArrow />
    <Dialog />
  </Popover>
</DialogTrigger>
```

```
import {
  Button,
  Dialog,
  DialogTrigger,
  OverlayArrow,
  Popover
} from 'react-aria-components';

<DialogTrigger>
  <Button />
  <Popover>
    <OverlayArrow />
    <Dialog />
  </Popover>
</DialogTrigger>
```

* * *

[![](https://react-spectrum.adobe.com/account-menu.1d025b67.png)

Account Menu

A Menu with an interactive header, built with a Popover.

](https://react-spectrum.adobe.com/react-aria/examples/account-menu.html)[![](https://react-spectrum.adobe.com/notifications-popover.7701a7df.png)

Notifications Popover

A notifications popover styled with Tailwind CSS.

](https://react-spectrum.adobe.com/react-aria/examples/notifications-popover.html)

* * *

To help kick-start your project, we offer starter kits that include example implementations of all React Aria components with various styling solutions. All components are fully styled, including support for dark mode, high contrast mode, and all UI states. Each starter comes with a pre-configured [Storybook](https://storybook.js.org/) that you can experiment with, or use as a starting point for your own component library.

* * *

If you will use a Popover in multiple places in your app, you can wrap all of the pieces into a reusable component. This way, the DOM structure, styling code, and other logic are defined in a single place and reused everywhere to ensure consistency.

This example wraps `Popover` and all of its children together into a single component. Since the `Dialog` is built in, this means it can't be used for components like Select, Menu, and ComboBox. Exclude the dialog if your popover will be reused in these components.

```
import type {PopoverProps} from 'react-aria-components';
import {HelpCircle} from 'lucide-react';

interface MyPopoverProps extends Omit<PopoverProps, 'children'> {
  children: React.ReactNode;
}

function MyPopover({ children, ...props }: MyPopoverProps) {
  return (
    <Popover {...props}>
      <OverlayArrow>
        <svg width={12} height={12} viewBox="0 0 12 12">
          <path d="M0 0 L6 6 L12 0" />
        </svg>
      </OverlayArrow>
      <Dialog>
        {children}
      </Dialog>
    </Popover>
  );
}

<DialogTrigger>
  <Button aria-label="Help">
    <HelpCircle size={18} />
  </Button>
  <MyPopover>
    <Heading slot="title">Help</Heading>
    <p>For help accessing your account, please contact support.</p>
  </MyPopover>
</DialogTrigger>
```

```
import type {PopoverProps} from 'react-aria-components';
import {HelpCircle} from 'lucide-react';

interface MyPopoverProps
  extends Omit<PopoverProps, 'children'> {
  children: React.ReactNode;
}

function MyPopover({ children, ...props }: MyPopoverProps) {
  return (
    <Popover {...props}>
      <OverlayArrow>
        <svg width={12} height={12} viewBox="0 0 12 12">
          <path d="M0 0 L6 6 L12 0" />
        </svg>
      </OverlayArrow>
      <Dialog>
        {children}
      </Dialog>
    </Popover>
  );
}

<DialogTrigger>
  <Button aria-label="Help">
    <HelpCircle size={18} />
  </Button>
  <MyPopover>
    <Heading slot="title">Help</Heading>
    <p>
      For help accessing your account, please contact
      support.
    </p>
  </MyPopover>
</DialogTrigger>
```

```
import type {PopoverProps} from 'react-aria-components';
import {HelpCircle} from 'lucide-react';

interface MyPopoverProps
  extends
    Omit<
      PopoverProps,
      'children'
    > {
  children:
    React.ReactNode;
}

function MyPopover(
  { children, ...props }:
    MyPopoverProps
) {
  return (
    <Popover {...props}>
      <OverlayArrow>
        <svg
          width={12}
          height={12}
          viewBox="0 0 12 12"
        >
          <path d="M0 0 L6 6 L12 0" />
        </svg>
      </OverlayArrow>
      <Dialog>
        {children}
      </Dialog>
    </Popover>
  );
}

<DialogTrigger>
  <Button aria-label="Help">
    <HelpCircle
      size={18}
    />
  </Button>
  <MyPopover>
    <Heading slot="title">
      Help
    </Heading>
    <p>
      For help
      accessing your
      account, please
      contact support.
    </p>
  </MyPopover>
</DialogTrigger>
```

* * *

The popover's placement with respect to its anchor element can be adjusted using the `placement` prop. See `[Placement](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/overlays/src/index.d.ts:Placement)` for a full list of available placement combinations. Popovers will also automatically [flip](#flipping) to the opposite direction if there isn't enough space.

```
import {ArrowDown, ArrowLeft, ArrowRight, ArrowUp} from 'lucide-react';
<div style={{ display: 'flex', gap: 8 }}>
  <DialogTrigger>
    <Button>
      <ArrowLeft size={18} />
    </Button>
    <MyPopover placement="start">
      In left-to-right, this is on the left. In right-to-left, this is on the
      right.
    </MyPopover>
  </DialogTrigger>
  <DialogTrigger>
    <Button>
      <ArrowUp size={18} />
    </Button>
    <MyPopover placement="top">This popover is above the button.</MyPopover>
  </DialogTrigger>
  <DialogTrigger>
    <Button>
      <ArrowDown size={18} />
    </Button>
    <MyPopover placement="bottom">
      This popover is below the button.
    </MyPopover>
  </DialogTrigger>
  <DialogTrigger>
    <Button>
      <ArrowRight size={18} />
    </Button>
    <MyPopover placement="end">
      In left-to-right, this is on the right. In right-to-left, this is on the
      left.
    </MyPopover>
  </DialogTrigger>
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
  <DialogTrigger>
    <Button>
      <ArrowLeft size={18} />
    </Button>
    <MyPopover placement="start">
      In left-to-right, this is on the left. In
      right-to-left, this is on the right.
    </MyPopover>
  </DialogTrigger>
  <DialogTrigger>
    <Button>
      <ArrowUp size={18} />
    </Button>
    <MyPopover placement="top">
      This popover is above the button.
    </MyPopover>
  </DialogTrigger>
  <DialogTrigger>
    <Button>
      <ArrowDown size={18} />
    </Button>
    <MyPopover placement="bottom">
      This popover is below the button.
    </MyPopover>
  </DialogTrigger>
  <DialogTrigger>
    <Button>
      <ArrowRight size={18} />
    </Button>
    <MyPopover placement="end">
      In left-to-right, this is on the right. In
      right-to-left, this is on the left.
    </MyPopover>
  </DialogTrigger>
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
  <DialogTrigger>
    <Button>
      <ArrowLeft
        size={18}
      />
    </Button>
    <MyPopover placement="start">
      In left-to-right,
      this is on the
      left. In
      right-to-left,
      this is on the
      right.
    </MyPopover>
  </DialogTrigger>
  <DialogTrigger>
    <Button>
      <ArrowUp
        size={18}
      />
    </Button>
    <MyPopover placement="top">
      This popover is
      above the button.
    </MyPopover>
  </DialogTrigger>
  <DialogTrigger>
    <Button>
      <ArrowDown
        size={18}
      />
    </Button>
    <MyPopover placement="bottom">
      This popover is
      below the button.
    </MyPopover>
  </DialogTrigger>
  <DialogTrigger>
    <Button>
      <ArrowRight
        size={18}
      />
    </Button>
    <MyPopover placement="end">
      In left-to-right,
      this is on the
      right. In
      right-to-left,
      this is on the
      left.
    </MyPopover>
  </DialogTrigger>
</div>
```

### Offset and cross offset[#](#offset-and-cross-offset)

The popover's offset with respect to its anchor element can be adjusted using the `offset` and `crossOffset` props. The `offset` prop controls the spacing applied along the main axis between the element and its anchor element whereas the `crossOffset` prop handles the spacing applied along the cross axis.

Below is a popover offset by an additional 50px above the trigger.

```
<DialogTrigger>
  <Button>Offset</Button>
  <MyPopover placement="top" offset={50}>
    Offset by an additional 50px.
  </MyPopover>
</DialogTrigger>
```

```
<DialogTrigger>
  <Button>Offset</Button>
  <MyPopover placement="top" offset={50}>
    Offset by an additional 50px.
  </MyPopover>
</DialogTrigger>
```

```
<DialogTrigger>
  <Button>
    Offset
  </Button>
  <MyPopover
    placement="top"
    offset={50}
  >
    Offset by an
    additional 50px.
  </MyPopover>
</DialogTrigger>
```

Below is a popover cross offset by an additional 100px to the right of the trigger.

```
<DialogTrigger>
  <Button>Cross offset</Button>
  <MyPopover placement="top" crossOffset={100}>
    Offset by an additional 100px.
  </MyPopover>
</DialogTrigger>
```

```
<DialogTrigger>
  <Button>Cross offset</Button>
  <MyPopover placement="top" crossOffset={100}>
    Offset by an additional 100px.
  </MyPopover>
</DialogTrigger>
```

```
<DialogTrigger>
  <Button>
    Cross offset
  </Button>
  <MyPopover
    placement="top"
    crossOffset={100}
  >
    Offset by an
    additional 100px.
  </MyPopover>
</DialogTrigger>
```

By default, `usePopover` attempts to flip popovers on the main axis in situations where the original placement would cause it to render out of view. This can be overridden by setting `shouldFlip={false}`. To see the difference between the two options, scroll this page so that the example below is near the bottom of the window.

```
<div className="flex-row">
  <DialogTrigger>
    <Button>Default</Button>
    <MyPopover placement="bottom">
      This is a popover that will flip if it can't fully render below the
      button.
    </MyPopover>
  </DialogTrigger>
   <DialogTrigger>
    <Button>shouldFlip=false</Button>
    <MyPopover placement="bottom" shouldFlip={false}>
      This is a popover that won't flip if it can't fully render below the
      button.
    </MyPopover>
  </DialogTrigger>
</div>
```

```
<div className="flex-row">
  <DialogTrigger>
    <Button>Default</Button>
    <MyPopover placement="bottom">
      This is a popover that will flip if it can't fully
      render below the button.
    </MyPopover>
  </DialogTrigger>
   <DialogTrigger>
    <Button>shouldFlip=false</Button>
    <MyPopover placement="bottom" shouldFlip={false}>
      This is a popover that won't flip if it can't fully
      render below the button.
    </MyPopover>
  </DialogTrigger>
</div>
```

```
<div className="flex-row">
  <DialogTrigger>
    <Button>
      Default
    </Button>
    <MyPopover placement="bottom">
      This is a popover
      that will flip if
      it can't fully
      render below the
      button.
    </MyPopover>
  </DialogTrigger>
   <DialogTrigger>
    <Button>
      shouldFlip=false
    </Button>
    <MyPopover
      placement="bottom"
      shouldFlip={false}
    >
      This is a popover
      that won't flip
      if it can't fully
      render below the
      button.
    </MyPopover>
  </DialogTrigger>
</div>
```

You can control the minimum padding required between the popover and the surrounding container via the `containerPadding` prop. This affects the positioning breakpoints that determine when it will attempt to flip.

The example below will maintain at least 50px between the popover and the edge of the browser window.

```
<DialogTrigger>
  <Button>Container padding</Button>
  <MyPopover placement="top" containerPadding={50}>
    This is a popover.
  </MyPopover>
</DialogTrigger>
```

```
<DialogTrigger>
  <Button>Container padding</Button>
  <MyPopover placement="top" containerPadding={50}>
    This is a popover.
  </MyPopover>
</DialogTrigger>
```

```
<DialogTrigger>
  <Button>
    Container padding
  </Button>
  <MyPopover
    placement="top"
    containerPadding={50}
  >
    This is a popover.
  </MyPopover>
</DialogTrigger>
```

* * *

The above examples have shown `Popover` used within a `<DialogTrigger>`, which handles opening the popover when a button is clicked, and positioning relative to the trigger. This is convenient, but there are cases where you want to show a popover programmatically rather than as a result of a user action, or render the `<Popover>` in a different part of the JSX tree.

To do this, you can manage the popover's `isOpen` state yourself and provide it as a prop to the `<Popover>` element. The `onOpenChange` prop will be called when the user closes the popover, and should be used to update your state. In addition, the `triggerRef` prop must be set to the element that the popover should be positioned relative to.

```
function Example() {
  let [isOpen, setOpen] = React.useState(false);
  let triggerRef = React.useRef(null);

  return (
    <>
      <Button onPress={() => setOpen(true)}>Trigger</Button>
      <span ref={triggerRef} style={{ paddingLeft: 12 }}>
        Popover will be positioned relative to me
      </span>
      <MyPopover triggerRef={triggerRef} isOpen={isOpen} onOpenChange={setOpen}>
        <Heading slot="title">Popover</Heading>
        <div>I'm over here!</div>
      </MyPopover>
    </>
  );
}
```

```
function Example() {
  let [isOpen, setOpen] = React.useState(false);
  let triggerRef = React.useRef(null);

  return (
    <>
      <Button onPress={() => setOpen(true)}>Trigger</Button>
      <span ref={triggerRef} style={{ paddingLeft: 12 }}>
        Popover will be positioned relative to me
      </span>
      <MyPopover
        triggerRef={triggerRef}
        isOpen={isOpen}
        onOpenChange={setOpen}
      >
        <Heading slot="title">Popover</Heading>
        <div>I'm over here!</div>
      </MyPopover>
    </>
  );
}
```

```
function Example() {
  let [isOpen, setOpen] =
    React.useState(
      false
    );
  let triggerRef = React
    .useRef(null);

  return (
    <>
      <Button
        onPress={() =>
          setOpen(true)}
      >
        Trigger
      </Button>
      <span
        ref={triggerRef}
        style={{
          paddingLeft: 12
        }}
      >
        Popover will be
        positioned
        relative to me
      </span>
      <MyPopover
        triggerRef={triggerRef}
        isOpen={isOpen}
        onOpenChange={setOpen}
      >
        <Heading slot="title">
          Popover
        </Heading>
        <div>
          I'm over here!
        </div>
      </MyPopover>
    </>
  );
}
```

* * *

`DialogTrigger` works out of the box with any pressable React Aria component (e.g. [Button](https://react-spectrum.adobe.com/react-aria/Button.html), [Link](https://react-spectrum.adobe.com/react-aria/Link.html), etc.). Custom trigger elements such as third party components and other DOM elements are also supported by wrapping them with the `<Pressable>` component, or using the [usePress](https://react-spectrum.adobe.com/react-aria/usePress.html) hook.

```
import {Pressable} from 'react-aria-components';

<DialogTrigger>
  <Pressable>
    <span role="button">Custom trigger</span>
  </Pressable>  <MyPopover>
    <Heading slot="title">Dialog</Heading>
    <p>This popover was triggered by a custom button.</p>
  </MyPopover>
</DialogTrigger>
```

```
import {Pressable} from 'react-aria-components';

<DialogTrigger>
  <Pressable>
    <span role="button">Custom trigger</span>
  </Pressable>  <MyPopover>
    <Heading slot="title">Dialog</Heading>
    <p>This popover was triggered by a custom button.</p>
  </MyPopover>
</DialogTrigger>
```

```
import {Pressable} from 'react-aria-components';

<DialogTrigger>
  <Pressable>
    <span role="button">
      Custom trigger
    </span>
  </Pressable>  <MyPopover>
    <Heading slot="title">
      Dialog
    </Heading>
    <p>
      This popover was
      triggered by a
      custom button.
    </p>
  </MyPopover>
</DialogTrigger>
```

Note that any `<Pressable>` child must have an [interactive ARIA role](https://www.w3.org/TR/wai-aria-1.2/#widget_roles) or use an appropriate semantic HTML element so that screen readers can announce the trigger. Trigger components must forward their `ref` and spread all props to a DOM element.

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

* * *

Name

Type

Default

Description

`trigger`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

The name of the component that triggered the popover. This is reflected on the element as the `data-trigger` attribute, and can be used to provide specific styles for the popover depending on which element triggered it.

`triggerRef`

`[RefObject](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/refs.d.ts:RefObject)<[Element](https://developer.mozilla.org/docs/Web/API/Element) | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)>`

—

The ref for the element which the popover positions itself with respect to.

When used within a trigger component such as DialogTrigger, MenuTrigger, Select, etc., this is set automatically. It is only required when used standalone.

`isEntering`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the popover is currently performing an entry animation.

`isExiting`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the popover is currently performing an exit animation.

`offset`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)`

`8`

The additional offset applied along the main axis between the element and its anchor element.

`placement`

`[Placement](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/overlays/src/index.d.ts:Placement)`

`'bottom'`

The placement of the element with respect to its anchor element.

`containerPadding`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)`

`12`

The placement padding that should be applied between the element and its surrounding container.

`crossOffset`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)`

`0`

The additional offset applied along the cross axis between the element and its anchor element.

`shouldFlip`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

`true`

Whether the element should flip its orientation (e.g. top to bottom or left to right) when there is insufficient room for it to render completely.

`arrowRef`

`[RefObject](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/refs.d.ts:RefObject)<[Element](https://developer.mozilla.org/docs/Web/API/Element) | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)>`

—

A ref for the popover arrow element.

`isNonModal`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the popover is non-modal, i.e. elements outside the popover may be interacted with by assistive technologies.

Most popovers should not use this option as it may negatively impact the screen reader experience. Only use with components such as combobox, which are designed to handle this situation carefully.

`isKeyboardDismissDisabled`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

`false`

Whether pressing the escape key to close the popover should be disabled.

Most popovers should not use this option. When set to true, an alternative way to close the popover with a keyboard must be provided.

`shouldCloseOnInteractOutside`

`( (element: [Element](https://developer.mozilla.org/docs/Web/API/Element) )) => [boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

When user interacts with the argument element outside of the popover ref, return true if onClose should be called. This gives you a chance to filter out interaction with elements that should not dismiss the popover. By default, onClose will always be called on interaction outside the popover ref.

`boundaryElement`

`[Element](https://developer.mozilla.org/docs/Web/API/Element)`

`document.body`

Element that that serves as the positioning boundary.

`scrollRef`

`[RefObject](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/refs.d.ts:RefObject)<[Element](https://developer.mozilla.org/docs/Web/API/Element) | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)>`

`overlayRef`

A ref for the scrollable region within the overlay.

`shouldUpdatePosition`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

`true`

Whether the overlay should update its position automatically.

`arrowBoundaryOffset`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)`

`0`

The minimum distance the arrow's edge should be from the edge of the overlay element.

`isOpen`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the overlay is open by default (controlled).

`defaultOpen`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the overlay is open by default (uncontrolled).

`children`

`[ChildrenOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ChildrenOrFunction)<[PopoverRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Popover.tsx:PopoverRenderProps)>`

—

The children of the component. A function may be provided to alter the children based on component state.

`className`

`[ClassNameOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ClassNameOrFunction)<[PopoverRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Popover.tsx:PopoverRenderProps)>`

—

The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.

`style`

`[StyleOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:StyleOrFunction)<[PopoverRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Popover.tsx:PopoverRenderProps)>`

—

The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.

Events

Name

Type

Description

`onOpenChange`

`( (isOpen: [boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) )) => void`

Handler that is called when the overlay's open state changes.

Layout

Name

Type

Description

`slot`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)`

A slot name for the component. Slots allow the component to receive props from a parent component. An explicit `null` value indicates that the local props completely override all props received from a parent.

Sizing

Name

Type

Description

`maxHeight`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)`

The maxHeight specified for the overlay element. By default, it will take all space up to the current viewport height.

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
.react-aria-Popover {
  /* ... */
}
```

```
.react-aria-Popover {
  /* ... */
}
```

```
.react-aria-Popover {
  /* ... */
}
```

A custom `className` can also be specified on any component. This overrides the default `className` provided by React Aria with your own.

```
<Popover className="my-popover">
  {/* ... */}
</Popover>
```

```
<Popover className="my-popover">
  {/* ... */}
</Popover>
```

```
<Popover className="my-popover">
  {/* ... */}
</Popover>
```

In addition, some components support multiple UI states (e.g. focused, placeholder, readonly, etc.). React Aria components expose states using data attributes, which you can target in CSS selectors. For example:

```
.react-aria-Popover[data-placement=left] {
  /* ... */
}
```

```
.react-aria-Popover[data-placement=left] {
  /* ... */
}
```

```
.react-aria-Popover[data-placement=left] {
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

Popovers also support entry and exit animations via states exposed as data attributes and render props. `Popover` will automatically wait for any exit animations to complete before it is removed from the DOM. The `--trigger-anchor-point` variable is set to the position of the trigger relative to the popover, which is useful for origin-aware animations. See the [animation guide](https://react-spectrum.adobe.com/react-aria/styling.html#animation) for more details.

```
.react-aria-Popover {
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
.react-aria-Popover {
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
.react-aria-Popover {
  transition: opacity 300ms, scale 300ms;
  transform-origin: var(--trigger-anchor-point);

  &[data-entering],
  &[data-exiting] {
    opacity: 0;
    scale: 0.85;
  }
}
```

The states, selectors, and render props for each component used in a `Popover` are documented below.

A `Popover` can be targeted with the `.react-aria-Popover` CSS selector, or by overriding with a custom `className`. It supports the following states and render props:

Name

CSS Selector

Description

`trigger`

`[data-trigger="..."]`

The name of the component that triggered the popover, e.g. "DialogTrigger" or "ComboBox".

`placement`

`[data-placement="left | right | top | bottom"]`

The placement of the popover relative to the trigger.

`isEntering`

`[data-entering]`

Whether the popover is currently entering. Use this to apply animations.

`isExiting`

`[data-exiting]`

Whether the popover is currently exiting. Use this to apply animations.

Within a DialogTrigger, the popover will have the `data-trigger="DialogTrigger"` attribute. In addition, the `--trigger-width` CSS custom property will be set on the popover, which you can use to make the popover match the width of the trigger button. The `--trigger-anchor-point` variable is set to the position of the trigger relative to the popover, which is useful for origin-aware animations.

```
.react-aria-Popover[data-trigger=DialogTrigger] {
  width: var(--trigger-width);
}
```

```
.react-aria-Popover[data-trigger=DialogTrigger] {
  width: var(--trigger-width);
}
```

```
.react-aria-Popover[data-trigger=DialogTrigger] {
  width: var(--trigger-width);
}
```

A `OverlayArrow` can be targeted with the `.react-aria-OverlayArrow` CSS selector, or by overriding with a custom `className`. It supports the following states and render props:

Name

CSS Selector

Description

`placement`

`[data-placement="left | right | top | bottom"]`

The placement of the overlay relative to the trigger.

* * *

All React Aria Components export a corresponding context that can be used to send props to them from a parent element. This enables you to build your own compositional APIs similar to those found in React Aria Components itself. You can send any prop or ref via context that you could pass to the corresponding component. The local props and ref on the component are merged with the ones passed via context, with the local props taking precedence (following the rules documented in [mergeProps](https://react-spectrum.adobe.com/react-aria/mergeProps.html)).

Component

Context

Props

Ref

`Popover`

`PopoverContext`

`[PopoverProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Popover.tsx:PopoverProps)`

`[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)`

This example shows a `HelpTrigger` component that wraps a button and a popover and shows the popover when the user presses the ? key. It uses `ButtonContext` to provide a keyboard listener and ref to a nested button, and `PopoverContext` to provide the trigger ref and open state to the nested popover.

```
import {ButtonContext, PopoverContext} from 'react-aria-components';

interface HelpTriggerProps {
  children?: React.ReactNode;
}

function HelpTrigger({ children }: HelpTriggerProps) {
  let triggerRef = React.useRef(null);
  let [isOpen, setOpen] = React.useState(false);
  let onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === '?') {
      setOpen(true);
    }
  };

  return (
    <ButtonContext.Provider value={{ onKeyDown, ref: triggerRef }}>
      <PopoverContext.Provider
        value={{ triggerRef, isOpen, onOpenChange: setOpen }}
      >        {children}
      </PopoverContext.Provider>
    </ButtonContext.Provider>
  );
}

<HelpTrigger>
  <Button>Press ? for help</Button>
  <MyPopover>
    <Heading slot="title">Help</Heading>
    <div>Do you need help?</div>
  </MyPopover>
</HelpTrigger>
```

```
import {
  ButtonContext,
  PopoverContext
} from 'react-aria-components';

interface HelpTriggerProps {
  children?: React.ReactNode;
}

function HelpTrigger({ children }: HelpTriggerProps) {
  let triggerRef = React.useRef(null);
  let [isOpen, setOpen] = React.useState(false);
  let onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === '?') {
      setOpen(true);
    }
  };

  return (
    <ButtonContext.Provider
      value={{ onKeyDown, ref: triggerRef }}
    >
      <PopoverContext.Provider
        value={{
          triggerRef,
          isOpen,
          onOpenChange: setOpen
        }}
      >        {children}
      </PopoverContext.Provider>
    </ButtonContext.Provider>
  );
}

<HelpTrigger>
  <Button>Press ? for help</Button>
  <MyPopover>
    <Heading slot="title">Help</Heading>
    <div>Do you need help?</div>
  </MyPopover>
</HelpTrigger>
```

```
import {
  ButtonContext,
  PopoverContext
} from 'react-aria-components';

interface HelpTriggerProps {
  children?:
    React.ReactNode;
}

function HelpTrigger(
  { children }:
    HelpTriggerProps
) {
  let triggerRef = React
    .useRef(null);
  let [isOpen, setOpen] =
    React.useState(
      false
    );
  let onKeyDown = (
    e: React.KeyboardEvent
  ) => {
    if (e.key === '?') {
      setOpen(true);
    }
  };

  return (
    <ButtonContext.Provider
      value={{
        onKeyDown,
        ref: triggerRef
      }}
    >
      <PopoverContext.Provider
        value={{
          triggerRef,
          isOpen,
          onOpenChange:
            setOpen
        }}
      >        {children}
      </PopoverContext.Provider>
    </ButtonContext.Provider>
  );
}

<HelpTrigger>
  <Button>
    Press ? for help
  </Button>
  <MyPopover>
    <Heading slot="title">
      Help
    </Heading>
    <div>
      Do you need help?
    </div>
  </MyPopover>
</HelpTrigger>
```

If you need to customize things further, such as accessing internal state or customizing DOM structure, you can drop down to the lower level Hook-based API. See [usePopover](https://react-spectrum.adobe.com/react-aria/usePopover.html) for more details.