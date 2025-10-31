# useDialog

**Source**: [https://react-spectrum.adobe.com/react-aria/useDialog.html](https://react-spectrum.adobe.com/react-aria/useDialog.html)

> Documentation for useDialog in the React Aria package.

---

Provides the behavior and accessibility implementation for a dialog component. A dialog is an overlay shown above other content in an application.

* * *

`useDialog( (props: [AriaDialogProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/dialog/src/index.d.ts:AriaDialogProps), , ref: [RefObject](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/refs.d.ts:RefObject)<[FocusableElement](https://developer.mozilla.org/en-US/docs/Web/API/Element) |  | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)> )): [DialogAria](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/dialog/src/useDialog.ts:DialogAria)`

* * *

The HTML [<dialog>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog) element can be used to build dialogs. However, it is not yet widely supported across browsers, and building fully accessible custom dialogs from scratch is very difficult and error prone. `useDialog` helps achieve accessible dialogs that can be styled as needed.

-   **Flexible** – Dialogs can be used within a [modal](https://react-spectrum.adobe.com/react-aria/useModalOverlay.html) or [popover](https://react-spectrum.adobe.com/react-aria/usePopover.html) to create many types of overlay elements.
-   **Accessible** – Exposed to assistive technology as a `dialog` or `alertdialog` with ARIA. The dialog is labeled by its title element, and content outside the dialog is hidden from assistive technologies while it is open.
-   **Focus management** – Focus is moved into the dialog on mount, and restored to the trigger element on unmount. While open, focus is contained within the dialog, preventing the user from tabbing outside.

* * *

Shows a dialog component with labels pointing to its parts, including the title, and dialog container elements.CancelEnableEnable smart filters?Smart filters are nondestructive and will preserve your original images.TitleDialog

A dialog consists of a container element and an optional title. `useDialog` handles exposing this to assistive technology using ARIA. It can be combined with `[useModalOverlay](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/overlays/src/useModalOverlay.ts:useModalOverlay)` or `[usePopover](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/overlays/src/usePopover.ts:usePopover)`, to create modal dialogs, popovers, and other types of overlays.

`useDialog` returns props that you should spread onto the appropriate element:

Name

Type

Description

`dialogProps`

`[DOMAttributes](https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes)`

Props for the dialog container element.

`titleProps`

`[DOMAttributes](https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes)`

Props for the dialog title element.

If a dialog does not have a visible title element, an `aria-label` or `aria-labelledby` prop must be passed instead to identify the element to assistive technology.

* * *

This example shows how to build a typical modal dialog, by combining `useDialog` with [useModalOverlay](https://react-spectrum.adobe.com/react-aria/useModalOverlay.html). The code for the `Modal` component is available below. The `Dialog` component may also be used within a [popover](https://react-spectrum.adobe.com/react-aria/usePopover.html). See the docs for more details on overlay containers.

```
import type {AriaDialogProps} from 'react-aria';
import {useDialog} from 'react-aria';

// Reuse the Button and Modal from your component library. See below for details.
import {Button, Modal, ModalTrigger} from 'your-component-library';

interface DialogProps extends AriaDialogProps {
  title?: React.ReactNode;
  children: React.ReactNode;
}

function Dialog({ title, children, ...props }: DialogProps) {
  let ref = React.useRef(null);
  let { dialogProps, titleProps } = useDialog(props, ref);

  return (
    <div {...dialogProps} ref={ref} style={{ padding: 30 }}>
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

<ModalTrigger label="Open Dialog">
  {(close) => (
    <Dialog title="Enter your name">
      <form style={{ display: 'flex', flexDirection: 'column' }}>
        <label htmlFor="first-name">First Name:</label>
        <input id="first-name" />
        <label htmlFor="last-name">Last Name:</label>
        <input id="last-name" />
        <Button
          onPress={close}
          style={{ marginTop: 10 }}
        >
          Submit
        </Button>
      </form>
    </Dialog>
  )}
</ModalTrigger>
```

```
import type {AriaDialogProps} from 'react-aria';
import {useDialog} from 'react-aria';

// Reuse the Button and Modal from your component library. See below for details.
import {
  Button,
  Modal,
  ModalTrigger
} from 'your-component-library';

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
    <div {...dialogProps} ref={ref} style={{ padding: 30 }}>
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

<ModalTrigger label="Open Dialog">
  {(close) => (
    <Dialog title="Enter your name">
      <form
        style={{
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <label htmlFor="first-name">First Name:</label>
        <input id="first-name" />
        <label htmlFor="last-name">Last Name:</label>
        <input id="last-name" />
        <Button
          onPress={close}
          style={{ marginTop: 10 }}
        >
          Submit
        </Button>
      </form>
    </Dialog>
  )}
</ModalTrigger>
```

```
import type {AriaDialogProps} from 'react-aria';
import {useDialog} from 'react-aria';

// Reuse the Button and Modal from your component library. See below for details.
import {
  Button,
  Modal,
  ModalTrigger
} from 'your-component-library';

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
        padding: 30
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

<ModalTrigger label="Open Dialog">
  {(close) => (
    <Dialog title="Enter your name">
      <form
        style={{
          display:
            'flex',
          flexDirection:
            'column'
        }}
      >
        <label htmlFor="first-name">
          First Name:
        </label>
        <input id="first-name" />
        <label htmlFor="last-name">
          Last Name:
        </label>
        <input id="last-name" />
        <Button
          onPress={close}
          style={{
            marginTop:
              10
          }}
        >
          Submit
        </Button>
      </form>
    </Dialog>
  )}
</ModalTrigger>
```

The `Modal` and `ModalTrigger` components render the dialog within a typical modal container with a partially transparent underlay. See [useModalOverlay](https://react-spectrum.adobe.com/react-aria/useModalOverlay.html) for more details.

Show code

```
import {Overlay, useModalOverlay, useOverlayTrigger, useViewportSize} from 'react-aria';
import {useOverlayTriggerState} from 'react-stately';

function Modal({ state, children, ...props }) {
  let ref = React.useRef(null);
  let { modalProps, underlayProps } = useModalOverlay(props, state, ref);

  return (
    <Overlay>
      <div
        style={{
          position: 'absolute',
          zIndex: 100,
          top: 0,
          left: 0,
          width: '100%',
          height: document.body.clientHeight,
          background: 'rgba(0, 0, 0, 0.5)'
        }}
        {...underlayProps}
      />
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: useViewportSize().height + 'px',
          zIndex: 101,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div
          {...modalProps}
          ref={ref}
          style={{
            background: 'var(--page-background)',
            border: '1px solid gray'
          }}
        >
          {children}
        </div>
      </div>
    </Overlay>
  );
}

function ModalTrigger({ label, children, ...props }) {
  let state = useOverlayTriggerState(props);
  let { triggerProps, overlayProps } = useOverlayTrigger(
    { type: 'dialog' },
    state
  );

  return (
    <>
      <Button {...triggerProps}>{label}</Button>
      {state.isOpen &&
        (
          <Modal state={state}>
            {React.cloneElement(children(state.close), overlayProps)}
          </Modal>
        )}
    </>
  );
}
```

```
import {
  Overlay,
  useModalOverlay,
  useOverlayTrigger,
  useViewportSize
} from 'react-aria';
import {useOverlayTriggerState} from 'react-stately';

function Modal({ state, children, ...props }) {
  let ref = React.useRef(null);
  let { modalProps, underlayProps } = useModalOverlay(
    props,
    state,
    ref
  );

  return (
    <Overlay>
      <div
        style={{
          position: 'absolute',
          zIndex: 100,
          top: 0,
          left: 0,
          width: '100%',
          height: document.body.clientHeight,
          background: 'rgba(0, 0, 0, 0.5)'
        }}
        {...underlayProps}
      />
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: useViewportSize().height + 'px',
          zIndex: 101,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div
          {...modalProps}
          ref={ref}
          style={{
            background: 'var(--page-background)',
            border: '1px solid gray'
          }}
        >
          {children}
        </div>
      </div>
    </Overlay>
  );
}

function ModalTrigger({ label, children, ...props }) {
  let state = useOverlayTriggerState(props);
  let { triggerProps, overlayProps } = useOverlayTrigger({
    type: 'dialog'
  }, state);

  return (
    <>
      <Button {...triggerProps}>{label}</Button>
      {state.isOpen &&
        (
          <Modal state={state}>
            {React.cloneElement(
              children(state.close),
              overlayProps
            )}
          </Modal>
        )}
    </>
  );
}
```

```
import {
  Overlay,
  useModalOverlay,
  useOverlayTrigger,
  useViewportSize
} from 'react-aria';
import {useOverlayTriggerState} from 'react-stately';

function Modal(
  {
    state,
    children,
    ...props
  }
) {
  let ref = React.useRef(
    null
  );
  let {
    modalProps,
    underlayProps
  } = useModalOverlay(
    props,
    state,
    ref
  );

  return (
    <Overlay>
      <div
        style={{
          position:
            'absolute',
          zIndex: 100,
          top: 0,
          left: 0,
          width: '100%',
          height:
            document.body
              .clientHeight,
          background:
            'rgba(0, 0, 0, 0.5)'
        }}
        {...underlayProps}
      />
      <div
        style={{
          position:
            'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height:
            useViewportSize()
              .height +
            'px',
          zIndex: 101,
          display:
            'flex',
          alignItems:
            'center',
          justifyContent:
            'center'
        }}
      >
        <div
          {...modalProps}
          ref={ref}
          style={{
            background:
              'var(--page-background)',
            border:
              '1px solid gray'
          }}
        >
          {children}
        </div>
      </div>
    </Overlay>
  );
}

function ModalTrigger(
  {
    label,
    children,
    ...props
  }
) {
  let state =
    useOverlayTriggerState(
      props
    );
  let {
    triggerProps,
    overlayProps
  } = useOverlayTrigger({
    type: 'dialog'
  }, state);

  return (
    <>
      <Button
        {...triggerProps}
      >
        {label}
      </Button>
      {state.isOpen &&
        (
          <Modal
            state={state}
          >
            {React
              .cloneElement(
                children(
                  state
                    .close
                ),
                overlayProps
              )}
          </Modal>
        )}
    </>
  );
}
```

The `Button` component is used in the above example to open and close the dialog. It is built using the [useButton](https://react-spectrum.adobe.com/react-aria/useButton.html) hook, and can be shared with many other components.

Show code

```
import {useButton} from 'react-aria';

function Button(props) {
  let ref = React.useRef(null);
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
  let ref = React.useRef(null);
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
  let ref = React.useRef(
    null
  );
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

[![](https://react-spectrum.adobe.com/tailwind.00f5d4bb.png)

Tailwind CSS

An animated alert dialog using Tailwind and react-transition-group.

](https://codesandbox.io/s/delicate-hill-j4p5vs?file=/src/AlertDialog.tsx)