# useModalOverlay

**Source**: [https://react-spectrum.adobe.com/react-aria/useModalOverlay.html](https://react-spectrum.adobe.com/react-aria/useModalOverlay.html)

> Documentation for useModalOverlay in the React Aria package.

---

Provides the behavior and accessibility implementation for a modal component. A modal is an overlay element which blocks interaction with elements outside it.

* * *

`useModalOverlay( props: [AriaModalOverlayProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/overlays/src/useModalOverlay.ts:AriaModalOverlayProps), state: [OverlayTriggerState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/overlays/src/useOverlayTriggerState.ts:OverlayTriggerState), ref: [RefObject](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/refs.d.ts:RefObject)<[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element) |  | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)> ): [ModalOverlayAria](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/overlays/src/useModalOverlay.ts:ModalOverlayAria)`

* * *

The HTML [<dialog>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog) element can be used to build modal overlays. However, it is not yet widely supported across browsers, and can be difficult to style and customize. `useModalOverlay`, helps achieve accessible modal overlays that can be styled as needed.

-   **Accessible** – Content outside the modal is hidden from assistive technologies while it is open. The modal optionally closes when interacting outside, or pressing the Escape key.
-   **Focus management** – Focus is moved into the modal on mount, and restored to the trigger element on unmount. While open, focus is contained within the modal, preventing the user from tabbing outside.
-   **Scroll locking** – Scrolling the page behind the modal is prevented while it is open, including in mobile browsers.

**Note**: `useModalOverlay` only handles the overlay itself. It should be combined with [useDialog](https://react-spectrum.adobe.com/react-aria/useDialog.html) to create fully accessible modal dialogs. Other overlays such as menus may also be placed in a modal overlay.

* * *

UnderlayModal

A modal overlay consists of an overlay container element, and an underlay. The overlay may contain a [dialog](https://react-spectrum.adobe.com/react-aria/useDialog.html), or another element such as a [menu](https://react-spectrum.adobe.com/react-aria/useMenu.html) or [listbox](https://react-spectrum.adobe.com/react-aria/useListBox.html) when used within a component such as a [select](https://react-spectrum.adobe.com/react-aria/useSelect.html) or [combobox](https://react-spectrum.adobe.com/react-aria/useComboBox.html). The underlay is typically a partially transparent element that covers the rest of the screen behind the overlay, and prevents the user from interacting with the elements behind it.

`useModalOverlay` returns props that you should spread onto the overlay and underlay elements:

Name

Type

Description

`modalProps`

`[DOMAttributes](https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes)`

Props for the modal element.

`underlayProps`

`[DOMAttributes](https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes)`

Props for the underlay element.

State is managed by the `[useOverlayTriggerState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/overlays/src/useOverlayTriggerState.ts:useOverlayTriggerState)` hook in `@react-stately/overlays`. The state object should be passed as an argument to `useModalOverlay`.

* * *

This example shows how to build a typical modal dialog, by combining `useModalOverlay` with [useDialog](https://react-spectrum.adobe.com/react-aria/useDialog.html). The `Dialog` component used in this example can also be reused within a [popover](https://react-spectrum.adobe.com/react-aria/usePopover.html) or other types of overlays.

The `Modal` component uses an <`[Overlay](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/overlays/src/Overlay.tsx:Overlay)`\> to render its contents in a React [Portal](https://reactjs.org/docs/portals.html) at the end of the document body, which ensures it is not clipped by other elements. It also acts as a focus scope, containing focus within the modal and restoring it to the trigger when it unmounts. `[useModalOverlay](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/overlays/src/useModalOverlay.ts:useModalOverlay)` handles preventing page scrolling while the modal is open, hiding content outside the modal from screen readers, and optionally closing it when the user interacts outside or presses the Escape key.

```
import {Overlay, useModalOverlay, useViewportSize} from 'react-aria';

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
```

```
import {
  Overlay,
  useModalOverlay,
  useViewportSize
} from 'react-aria';

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
```

```
import {
  Overlay,
  useModalOverlay,
  useViewportSize
} from 'react-aria';

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
```

The below `ModalTrigger` component uses the `[useOverlayTrigger](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/overlays/src/useOverlayTrigger.ts:useOverlayTrigger)` hook to show the modal when a button is pressed. It accepts a function as children, which is called with a callback that closes the modal. This can be used to implement a close button.

```
import {useOverlayTrigger} from 'react-aria';
import {useOverlayTriggerState} from 'react-stately';

// Reuse the Button from your component library. See below for details.
import {Button} from 'your-component-library';

function ModalTrigger({ label, children, ...props }) {
  let state = useOverlayTriggerState(props);
  let { triggerProps, overlayProps } = useOverlayTrigger(
    { type: 'dialog' },
    state
  );

  return (
    <>
      <Button {...triggerProps}>Open Dialog</Button>
      {state.isOpen &&
        (
          <Modal {...props} state={state}>
            {React.cloneElement(children(state.close), overlayProps)}
          </Modal>
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

function ModalTrigger({ label, children, ...props }) {
  let state = useOverlayTriggerState(props);
  let { triggerProps, overlayProps } = useOverlayTrigger({
    type: 'dialog'
  }, state);

  return (
    <>
      <Button {...triggerProps}>Open Dialog</Button>
      {state.isOpen &&
        (
          <Modal {...props} state={state}>
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
import {useOverlayTrigger} from 'react-aria';
import {useOverlayTriggerState} from 'react-stately';

// Reuse the Button from your component library. See below for details.
import {Button} from 'your-component-library';

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
        Open Dialog
      </Button>
      {state.isOpen &&
        (
          <Modal
            {...props}
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

Now, we can render an example modal containing a dialog, with a button that closes it using the function provided by `ModalTrigger`.

```
// Reuse the Dialog from your component library. See below for details.
import {Dialog} from 'your-component-library';

<ModalTrigger label="Open Dialog">
  {close =>
    <Dialog title="Enter your name">
      <form style={{display: 'flex', flexDirection: 'column'}}>
        <label htmlFor="first-name">First Name:</label>
        <input id="first-name" />
        <label htmlFor="last-name">Last Name:</label>
        <input id="last-name" />
        <Button
          onPress={close}
          style={{marginTop: 10}}>
          Submit
        </Button>
      </form>
    </Dialog>
  }
</ModalTrigger>
```

```
// Reuse the Dialog from your component library. See below for details.
import {Dialog} from 'your-component-library';

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
// Reuse the Dialog from your component library. See below for details.
import {Dialog} from 'your-component-library';

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

The `Dialog` component is rendered within the `ModalOverlay` component. It is built using the [useDialog](https://react-spectrum.adobe.com/react-aria/useDialog.html) hook, and can also be used in other overlay containers such as [popovers](https://react-spectrum.adobe.com/react-aria/usePopover.html).

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

The following examples show how to use the `Modal` and `ModalTrigger` components created in the above example.

If your modal doesn't require the user to make a confirmation, you can set `isDismissable` on the `Modal`. This allows the user to click outside to close the dialog.

```
<ModalTrigger isDismissable label="Open Dialog">
  {() =>
    <Dialog title="Notice">
      Click outside to close this dialog.
    </Dialog>
  }
</ModalTrigger>
```

```
<ModalTrigger isDismissable label="Open Dialog">
  {() =>
    <Dialog title="Notice">
      Click outside to close this dialog.
    </Dialog>
  }
</ModalTrigger>
```

```
<ModalTrigger
  isDismissable
  label="Open Dialog"
>
  {() => (
    <Dialog title="Notice">
      Click outside to
      close this
      dialog.
    </Dialog>
  )}
</ModalTrigger>
```

By default, modals can be closed by pressing the Escape key. This can be disabled with the `isKeyboardDismissDisabled` prop.

```
<ModalTrigger isKeyboardDismissDisabled label="Open Dialog">
  {close =>
    <Dialog title="Notice">
      <p>You must close this dialog using the button below.</p>
      <Button onPress={close}>Close</Button>
    </Dialog>
  }
</ModalTrigger>
```

```
<ModalTrigger
  isKeyboardDismissDisabled
  label="Open Dialog"
>
  {(close) => (
    <Dialog title="Notice">
      <p>
        You must close this dialog using the button below.
      </p>
      <Button onPress={close}>Close</Button>
    </Dialog>
  )}
</ModalTrigger>
```

```
<ModalTrigger
  isKeyboardDismissDisabled
  label="Open Dialog"
>
  {(close) => (
    <Dialog title="Notice">
      <p>
        You must close
        this dialog
        using the
        button below.
      </p>
      <Button
        onPress={close}
      >
        Close
      </Button>
    </Dialog>
  )}
</ModalTrigger>
```