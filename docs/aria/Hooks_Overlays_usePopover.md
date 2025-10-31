# usePopover

**Source**: [https://react-spectrum.adobe.com/react-aria/usePopover.html](https://react-spectrum.adobe.com/react-aria/usePopover.html)

> Documentation for usePopover in the React Aria package.

---

Provides the behavior and accessibility implementation for a popover component. A popover is an overlay element positioned relative to a trigger.

* * *

`usePopover( (props: [AriaPopoverProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/overlays/src/usePopover.ts:AriaPopoverProps), , state: [OverlayTriggerState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/overlays/src/useOverlayTriggerState.ts:OverlayTriggerState) )): [PopoverAria](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/overlays/src/usePopover.ts:PopoverAria)`

* * *

There is no built in way to create popovers in HTML. `[usePopover](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/overlays/src/usePopover.ts:usePopover)`, helps achieve accessible popovers that can be styled as needed.

-   **Accessible** – The trigger and popover are automatically associated semantically via ARIA. Content outside the popover is hidden from assistive technologies while it is open. The popover closes when interacting outside, or pressing the Escape key.
-   **Focus management** – Focus is moved into the popover on mount, and restored to the trigger element on unmount.
-   **Positioning** – The popover is positioned relative to the trigger element, and automatically flips and adjusts to avoid overlapping with the edge of the browser window. Scrolling is prevented outside the popover to avoid unintentionally repositioning or closing it.

**Note**: `usePopover` only handles the overlay itself. It should be combined with [useDialog](https://react-spectrum.adobe.com/react-aria/useDialog.html) to create fully accessible popovers. Other overlays such as menus may also be placed in a popover.

* * *

Arrow (optional)Popover

A popover consists of a trigger element (e.g. button) and an overlay, which is positioned relative to the trigger. The overlay may contain a [dialog](https://react-spectrum.adobe.com/react-aria/useDialog.html), or another element such as a [menu](https://react-spectrum.adobe.com/react-aria/useMenu.html) or [listbox](https://react-spectrum.adobe.com/react-aria/useListBox.html) when used within a component such as a [select](https://react-spectrum.adobe.com/react-aria/useSelect.html) or [combobox](https://react-spectrum.adobe.com/react-aria/useComboBox.html).

`usePopover` returns props that you should spread onto the appropriate elements, as well as the computed placement of the popover relative to the trigger:

Name

Type

Description

`popoverProps`

`[DOMAttributes](https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes)`

Props for the popover element.

`arrowProps`

`[DOMAttributes](https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes)`

Props for the popover tip arrow if any.

`underlayProps`

`[DOMAttributes](https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes)`

Props to apply to the underlay element, if any.

`placement`

`[PlacementAxis](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/overlays/src/index.d.ts:PlacementAxis) | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)`

Placement of the popover with respect to the trigger.

`triggerAnchorPoint`

`{  x: [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number),  y: [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)  } | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)`

The origin of the target in the overlay's coordinate system. Useful for animations.

State is managed by the `[useOverlayTriggerState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/overlays/src/useOverlayTriggerState.ts:useOverlayTriggerState)` hook in `@react-stately/overlays`. The state object should be passed as an argument to `usePopover`.

* * *

This example shows how to build a typical popover overlay that is positioned relative to a trigger button. The content of the popover is a dialog, built with `[useDialog](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/dialog/src/useDialog.ts:useDialog)`. The `Dialog` component used in this example can also be reused within a [modal](https://react-spectrum.adobe.com/react-aria/useModalOverlay.html) or other types of overlays. The implementation is available below.

The `Popover` component uses an <`[Overlay](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/overlays/src/Overlay.tsx:Overlay)`\> to render its contents in a React [Portal](https://reactjs.org/docs/portals.html) at the end of the document body, which ensures it is not clipped by other elements. It also acts as a focus scope, containing focus within the popover and restoring it to the trigger when it unmounts. `[usePopover](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/overlays/src/usePopover.ts:usePopover)` handles positioning the popover relative to the trigger element, and closing it when the user interacts outside or presses the Escape key.

`[usePopover](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/overlays/src/usePopover.ts:usePopover)` also hides content outside the popover from screen readers, which is important since the surrounding content won't be in context of the original trigger due to the portal. To allow screen reader users to dismiss the popover without a keyboard (e.g. on mobile), visually hidden <`[DismissButton](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/overlays/src/DismissButton.tsx:DismissButton)`\> elements are added at the start and end of the popover. An underlay is also used to prevent scrolling and interacting with elements outside the popover with a pointer, to avoid unintentially repositioning or closing it.

```
import {DismissButton, Overlay, usePopover} from 'react-aria';
import type {AriaPopoverProps} from 'react-aria';
import type {OverlayTriggerState} from 'react-stately';

interface PopoverProps extends Omit<AriaPopoverProps, 'popoverRef'> {
  children: React.ReactNode;
  state: OverlayTriggerState;
}

function Popover({ children, state, offset = 8, ...props }: PopoverProps) {
  let popoverRef = React.useRef(null);
  let { popoverProps, underlayProps, arrowProps, placement } = usePopover({
    ...props,
    offset,
    popoverRef
  }, state);

  return (
    <Overlay>
      <div {...underlayProps} className="underlay" />
      <div
        {...popoverProps}
        ref={popoverRef}
        className="popover"
      >
        <svg
          {...arrowProps}
          className="arrow"
          data-placement={placement}
          viewBox="0 0 12 12"
        >
          <path d="M0 0 L6 6 L12 0" />
        </svg>
        <DismissButton onDismiss={state.close} />
        {children}
        <DismissButton onDismiss={state.close} />
      </div>
    </Overlay>
  );
}
```

```
import {
  DismissButton,
  Overlay,
  usePopover
} from 'react-aria';
import type {AriaPopoverProps} from 'react-aria';
import type {OverlayTriggerState} from 'react-stately';

interface PopoverProps
  extends Omit<AriaPopoverProps, 'popoverRef'> {
  children: React.ReactNode;
  state: OverlayTriggerState;
}

function Popover(
  { children, state, offset = 8, ...props }: PopoverProps
) {
  let popoverRef = React.useRef(null);
  let {
    popoverProps,
    underlayProps,
    arrowProps,
    placement
  } = usePopover({
    ...props,
    offset,
    popoverRef
  }, state);

  return (
    <Overlay>
      <div {...underlayProps} className="underlay" />
      <div
        {...popoverProps}
        ref={popoverRef}
        className="popover"
      >
        <svg
          {...arrowProps}
          className="arrow"
          data-placement={placement}
          viewBox="0 0 12 12"
        >
          <path d="M0 0 L6 6 L12 0" />
        </svg>
        <DismissButton onDismiss={state.close} />
        {children}
        <DismissButton onDismiss={state.close} />
      </div>
    </Overlay>
  );
}
```

```
import {
  DismissButton,
  Overlay,
  usePopover
} from 'react-aria';
import type {AriaPopoverProps} from 'react-aria';
import type {OverlayTriggerState} from 'react-stately';

interface PopoverProps
  extends
    Omit<
      AriaPopoverProps,
      'popoverRef'
    > {
  children:
    React.ReactNode;
  state:
    OverlayTriggerState;
}

function Popover(
  {
    children,
    state,
    offset = 8,
    ...props
  }: PopoverProps
) {
  let popoverRef = React
    .useRef(null);
  let {
    popoverProps,
    underlayProps,
    arrowProps,
    placement
  } = usePopover({
    ...props,
    offset,
    popoverRef
  }, state);

  return (
    <Overlay>
      <div
        {...underlayProps}
        className="underlay"
      />
      <div
        {...popoverProps}
        ref={popoverRef}
        className="popover"
      >
        <svg
          {...arrowProps}
          className="arrow"
          data-placement={placement}
          viewBox="0 0 12 12"
        >
          <path d="M0 0 L6 6 L12 0" />
        </svg>
        <DismissButton
          onDismiss={state
            .close}
        />
        {children}
        <DismissButton
          onDismiss={state
            .close}
        />
      </div>
    </Overlay>
  );
}
```

The above `Popover` component can be used as part of many different patterns, such as [ComboBox](https://react-spectrum.adobe.com/react-aria/useComboBox.html), [Select](https://react-spectrum.adobe.com/react-aria/useSelect.html), and [DatePicker](https://react-spectrum.adobe.com/react-aria/useDatePicker.html). To use it standalone, we need a trigger element. The below `PopoverTrigger` component uses the `[useOverlayTrigger](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/overlays/src/useOverlayTrigger.ts:useOverlayTrigger)` hook to trigger the popover when a button is pressed. This hook also ensures that the button and popover are semantically connected via ARIA.

```
import {useOverlayTrigger} from 'react-aria';
import {useOverlayTriggerState} from 'react-stately';

// Reuse the Button from your component library. See below for details.
import {Button} from 'your-component-library';

function PopoverTrigger({ label, children, ...props }) {
  let ref = React.useRef(null);
  let state = useOverlayTriggerState(props);
  let { triggerProps, overlayProps } = useOverlayTrigger(
    { type: 'dialog' },
    state,
    ref
  );

  return (
    <>
      <Button {...triggerProps} buttonRef={ref}>{label}</Button>
      {state.isOpen &&
        (
          <Popover {...props} triggerRef={ref} state={state}>
            {React.cloneElement(children, overlayProps)}
          </Popover>
        )}
    </>
  );
}
```

```
import {useOverlayTrigger} from 'react-aria';
import {useOverlayTriggerState} from 'react-stately';

// Reuse the Button from your component library. See below for details.
import {Button} from 'your-component-library';

function PopoverTrigger({ label, children, ...props }) {
  let ref = React.useRef(null);
  let state = useOverlayTriggerState(props);
  let { triggerProps, overlayProps } = useOverlayTrigger(
    { type: 'dialog' },
    state,
    ref
  );

  return (
    <>
      <Button {...triggerProps} buttonRef={ref}>
        {label}
      </Button>
      {state.isOpen &&
        (
          <Popover
            {...props}
            triggerRef={ref}
            state={state}
          >
            {React.cloneElement(children, overlayProps)}
          </Popover>
        )}
    </>
  );
}
```

```
import {useOverlayTrigger} from 'react-aria';
import {useOverlayTriggerState} from 'react-stately';

// Reuse the Button from your component library. See below for details.
import {Button} from 'your-component-library';

function PopoverTrigger(
  {
    label,
    children,
    ...props
  }
) {
  let ref = React.useRef(
    null
  );
  let state =
    useOverlayTriggerState(
      props
    );
  let {
    triggerProps,
    overlayProps
  } = useOverlayTrigger(
    { type: 'dialog' },
    state,
    ref
  );

  return (
    <>
      <Button
        {...triggerProps}
        buttonRef={ref}
      >
        {label}
      </Button>
      {state.isOpen &&
        (
          <Popover
            {...props}
            triggerRef={ref}
            state={state}
          >
            {React
              .cloneElement(
                children,
                overlayProps
              )}
          </Popover>
        )}
    </>
  );
}
```

Now, we can render an example popover containing a dialog.

```
// Reuse the Dialog from your component library. See below for details.
import {Dialog} from 'your-component-library';

<PopoverTrigger label="Open Popover">
  <Dialog title="Popover title">
    This is the content of the popover.
  </Dialog>
</PopoverTrigger>
```

```
// Reuse the Dialog from your component library. See below for details.
import {Dialog} from 'your-component-library';

<PopoverTrigger label="Open Popover">
  <Dialog title="Popover title">
    This is the content of the popover.
  </Dialog>
</PopoverTrigger>
```

```
// Reuse the Dialog from your component library. See below for details.
import {Dialog} from 'your-component-library';

<PopoverTrigger label="Open Popover">
  <Dialog title="Popover title">
    This is the content
    of the popover.
  </Dialog>
</PopoverTrigger>
```

Show CSS

```
.underlay {
  position: fixed;
  inset: 0;
}

.popover {
  background: var(--page-background);
  border: 1px solid var(--spectrum-global-color-gray-400);
  box-shadow: 0 8px 20px rgba(0 0 0 / 0.1);
  border-radius: 6px;
}

.arrow {
  position: absolute;
  fill: var(--page-background);
  stroke: var(--spectrum-global-color-gray-400);
  stroke-width: 1px;
  width: 12px;
  height: 12px;
}

.arrow[data-placement=top] {
  top: 100%;
  transform: translateX(-50%);
}

.arrow[data-placement=bottom] {
  bottom: 100%;
  transform: translateX(-50%) rotate(180deg);
}

.arrow[data-placement=left] {
  left: 100%;
  transform: translateY(-50%) rotate(-90deg);
}

.arrow[data-placement=right] {
  right: 100%;
  transform: translateY(-50%) rotate(90deg);
}
```

```
.underlay {
  position: fixed;
  inset: 0;
}

.popover {
  background: var(--page-background);
  border: 1px solid var(--spectrum-global-color-gray-400);
  box-shadow: 0 8px 20px rgba(0 0 0 / 0.1);
  border-radius: 6px;
}

.arrow {
  position: absolute;
  fill: var(--page-background);
  stroke: var(--spectrum-global-color-gray-400);
  stroke-width: 1px;
  width: 12px;
  height: 12px;
}

.arrow[data-placement=top] {
  top: 100%;
  transform: translateX(-50%);
}

.arrow[data-placement=bottom] {
  bottom: 100%;
  transform: translateX(-50%) rotate(180deg);
}

.arrow[data-placement=left] {
  left: 100%;
  transform: translateY(-50%) rotate(-90deg);
}

.arrow[data-placement=right] {
  right: 100%;
  transform: translateY(-50%) rotate(90deg);
}
```

```
.underlay {
  position: fixed;
  inset: 0;
}

.popover {
  background: var(--page-background);
  border: 1px solid var(--spectrum-global-color-gray-400);
  box-shadow: 0 8px 20px rgba(0 0 0 / 0.1);
  border-radius: 6px;
}

.arrow {
  position: absolute;
  fill: var(--page-background);
  stroke: var(--spectrum-global-color-gray-400);
  stroke-width: 1px;
  width: 12px;
  height: 12px;
}

.arrow[data-placement=top] {
  top: 100%;
  transform: translateX(-50%);
}

.arrow[data-placement=bottom] {
  bottom: 100%;
  transform: translateX(-50%) rotate(180deg);
}

.arrow[data-placement=left] {
  left: 100%;
  transform: translateY(-50%) rotate(-90deg);
}

.arrow[data-placement=right] {
  right: 100%;
  transform: translateY(-50%) rotate(90deg);
}
```

The `Dialog` component is rendered within the `Popover` component. It is built using the [useDialog](https://react-spectrum.adobe.com/react-aria/useDialog.html) hook, and can also be used in other overlay containers such as [modals](https://react-spectrum.adobe.com/react-aria/useModalOverlay.html).

Show code

```
import type {AriaDialogProps} from 'react-aria';
import {useDialog} from 'react-aria';

interface DialogProps extends AriaDialogProps {
  title?: React.ReactNode;
  children: React.ReactNode;
}

function Dialog({ title, children, ...props }: DialogProps) {
  let ref = React.useRef(null);
  let { dialogProps, titleProps } = useDialog(props, ref);

  return (
    <div
      {...dialogProps}
      ref={ref}
      style={{ padding: 30, maxWidth: 200, outline: 'none' }}
    >
      {title &&
        (
          <h3 {...titleProps} style={{ marginTop: 0 }}>
            {title}
          </h3>
        )}
      {children}
    </div>
  );
}
```

```
import type {AriaDialogProps} from 'react-aria';
import {useDialog} from 'react-aria';

interface DialogProps extends AriaDialogProps {
  title?: React.ReactNode;
  children: React.ReactNode;
}

function Dialog(
  { title, children, ...props }: DialogProps
) {
  let ref = React.useRef(null);
  let { dialogProps, titleProps } = useDialog(props, ref);

  return (
    <div
      {...dialogProps}
      ref={ref}
      style={{
        padding: 30,
        maxWidth: 200,
        outline: 'none'
      }}
    >
      {title &&
        (
          <h3 {...titleProps} style={{ marginTop: 0 }}>
            {title}
          </h3>
        )}
      {children}
    </div>
  );
}
```

```
import type {AriaDialogProps} from 'react-aria';
import {useDialog} from 'react-aria';

interface DialogProps
  extends
    AriaDialogProps {
  title?:
    React.ReactNode;
  children:
    React.ReactNode;
}

function Dialog(
  {
    title,
    children,
    ...props
  }: DialogProps
) {
  let ref = React.useRef(
    null
  );
  let {
    dialogProps,
    titleProps
  } = useDialog(
    props,
    ref
  );

  return (
    <div
      {...dialogProps}
      ref={ref}
      style={{
        padding: 30,
        maxWidth: 200,
        outline: 'none'
      }}
    >
      {title &&
        (
          <h3
            {...titleProps}
            style={{
              marginTop:
                0
            }}
          >
            {title}
          </h3>
        )}
      {children}
    </div>
  );
}
```

The `Button` component is used in the above example to toggle the popover. It is built using the [useButton](https://react-spectrum.adobe.com/react-aria/useButton.html) hook, and can be shared with many other components.

Show code

```
import {useButton} from 'react-aria';

function Button(props) {
  let ref = props.buttonRef;
  let { buttonProps } = useButton(props, ref);
  return (
    <button {...buttonProps} ref={ref} style={props.style}>
      {props.children}
    </button>
  );
}
```

```
import {useButton} from 'react-aria';

function Button(props) {
  let ref = props.buttonRef;
  let { buttonProps } = useButton(props, ref);
  return (
    <button {...buttonProps} ref={ref} style={props.style}>
      {props.children}
    </button>
  );
}
```

```
import {useButton} from 'react-aria';

function Button(props) {
  let ref =
    props.buttonRef;
  let { buttonProps } =
    useButton(
      props,
      ref
    );
  return (
    <button
      {...buttonProps}
      ref={ref}
      style={props.style}
    >
      {props.children}
    </button>
  );
}
```

* * *

The following examples show how to use the `Popover` and `PopoverTrigger` components created in the above example.

The popover's placement with respect to its anchor element can be adjusted using the `placement` prop. See `[Placement](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/overlays/src/index.d.ts:Placement)` for a full list of available placement combinations.

```
<div style={{ display: 'flex', gap: 8 }}>
  <PopoverTrigger placement="start" label="⬅️">
    <Dialog>
      In left-to-right, this is on the left. In right-to-left, this is on the
      right.
    </Dialog>
  </PopoverTrigger>
  <PopoverTrigger placement="top" label="⬆️">
    <Dialog>This popover is above the button.</Dialog>
  </PopoverTrigger>
  <PopoverTrigger placement="bottom" label="⬇️">
    <Dialog>This popover is below the button.</Dialog>
  </PopoverTrigger>
  <PopoverTrigger placement="end" label="➡️">
    <Dialog>
      In left-to-right, this is on the right. In right-to-left, this is on the
      left.
    </Dialog>
  </PopoverTrigger>
</div>
```

```
<div style={{ display: 'flex', gap: 8 }}>
  <PopoverTrigger placement="start" label="⬅️">
    <Dialog>
      In left-to-right, this is on the left. In
      right-to-left, this is on the right.
    </Dialog>
  </PopoverTrigger>
  <PopoverTrigger placement="top" label="⬆️">
    <Dialog>This popover is above the button.</Dialog>
  </PopoverTrigger>
  <PopoverTrigger placement="bottom" label="⬇️">
    <Dialog>This popover is below the button.</Dialog>
  </PopoverTrigger>
  <PopoverTrigger placement="end" label="➡️">
    <Dialog>
      In left-to-right, this is on the right. In
      right-to-left, this is on the left.
    </Dialog>
  </PopoverTrigger>
</div>
```

```
<div
  style={{
    display: 'flex',
    gap: 8
  }}
>
  <PopoverTrigger
    placement="start"
    label="⬅️"
  >
    <Dialog>
      In left-to-right,
      this is on the
      left. In
      right-to-left,
      this is on the
      right.
    </Dialog>
  </PopoverTrigger>
  <PopoverTrigger
    placement="top"
    label="⬆️"
  >
    <Dialog>
      This popover is
      above the button.
    </Dialog>
  </PopoverTrigger>
  <PopoverTrigger
    placement="bottom"
    label="⬇️"
  >
    <Dialog>
      This popover is
      below the button.
    </Dialog>
  </PopoverTrigger>
  <PopoverTrigger
    placement="end"
    label="➡️"
  >
    <Dialog>
      In left-to-right,
      this is on the
      right. In
      right-to-left,
      this is on the
      left.
    </Dialog>
  </PopoverTrigger>
</div>
```

### Offset and cross offset[#](#offset-and-cross-offset)

The popover's offset with respect to its anchor element can be adjusted using the `offset` and `crossOffset` props. The `offset` prop controls the spacing applied along the main axis between the element and its anchor element whereas the `crossOffset` prop handles the spacing applied along the cross axis.

Below is a popover offset by an additional 50px above the trigger.

```
<PopoverTrigger placement="top" offset={50} label="Trigger">
  <Dialog>
    Offset by an additional 50px.
  </Dialog>
</PopoverTrigger>
```

```
<PopoverTrigger placement="top" offset={50} label="Trigger">
  <Dialog>
    Offset by an additional 50px.
  </Dialog>
</PopoverTrigger>
```

```
<PopoverTrigger
  placement="top"
  offset={50}
  label="Trigger"
>
  <Dialog>
    Offset by an
    additional 50px.
  </Dialog>
</PopoverTrigger>
```

Below is a popover cross offset by an additional 100px to the right of the trigger.

```
<PopoverTrigger placement="top" crossOffset={100} label="Trigger">
  <Dialog>
    Offset by an additional 100px.
  </Dialog>
</PopoverTrigger>
```

```
<PopoverTrigger
  placement="top"
  crossOffset={100}
  label="Trigger"
>
  <Dialog>
    Offset by an additional 100px.
  </Dialog>
</PopoverTrigger>
```

```
<PopoverTrigger
  placement="top"
  crossOffset={100}
  label="Trigger"
>
  <Dialog>
    Offset by an
    additional 100px.
  </Dialog>
</PopoverTrigger>
```

By default, `usePopover` attempts to flip popovers on the main axis in situations where the original placement would cause it to render out of view. This can be overridden by setting `shouldFlip={false}`. To see the difference between the two options, scroll this page so that the example below is near the bottom of the window.

```
<PopoverTrigger placement="bottom" label="Default">
  <Dialog>
    This is a popover that will flip if it can't fully render below the button.
  </Dialog>
</PopoverTrigger>

<PopoverTrigger placement="bottom" shouldFlip={false} label="shouldFlip=false">
  <Dialog>
    This is a popover that won't flip if it can't fully render below the button.
  </Dialog>
</PopoverTrigger>
```

```
<PopoverTrigger placement="bottom" label="Default">
  <Dialog>
    This is a popover that will flip if it can't fully
    render below the button.
  </Dialog>
</PopoverTrigger>
 <PopoverTrigger
  placement="bottom"
  shouldFlip={false}
  label="shouldFlip=false"
>
  <Dialog>
    This is a popover that won't flip if it can't fully
    render below the button.
  </Dialog>
</PopoverTrigger>
```

```
<PopoverTrigger
  placement="bottom"
  label="Default"
>
  <Dialog>
    This is a popover
    that will flip if
    it can't fully
    render below the
    button.
  </Dialog>
</PopoverTrigger>
 <PopoverTrigger
  placement="bottom"
  shouldFlip={false}
  label="shouldFlip=false"
>
  <Dialog>
    This is a popover
    that won't flip if
    it can't fully
    render below the
    button.
  </Dialog>
</PopoverTrigger>
```

You can control the minimum padding required between the popover and the surrounding container via the `containerPadding` prop. This affects the positioning breakpoints that determine when it will attempt to flip.

The example below will maintain at least 50px between the popover and the edge of the browser window.

```
<PopoverTrigger placement="top" containerPadding={50} label="Trigger">
  <Dialog>
    This is a popover.
  </Dialog>
</PopoverTrigger>
```

```
<PopoverTrigger
  placement="top"
  containerPadding={50}
  label="Trigger"
>
  <Dialog>
    This is a popover.
  </Dialog>
</PopoverTrigger>
```

```
<PopoverTrigger
  placement="top"
  containerPadding={50}
  label="Trigger"
>
  <Dialog>
    This is a popover.
  </Dialog>
</PopoverTrigger>
```