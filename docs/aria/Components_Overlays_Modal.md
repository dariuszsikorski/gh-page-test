# Modal

**Source**: [https://react-spectrum.adobe.com/react-aria/Modal.html](https://react-spectrum.adobe.com/react-aria/Modal.html)

> Documentation for Modal in the React Aria package.

---

A modal is an overlay element which blocks interaction with elements outside it.

* * *

```
import {Button, Dialog, DialogTrigger, Heading, Input, Label, Modal, TextField} from 'react-aria-components';

<DialogTrigger>
  <Button>Sign up…</Button>
  <Modal>
    <Dialog>
      <form>
        <Heading slot="title">Sign up</Heading>
        <TextField autoFocus>
          <Label>First Name:</Label>
          <Input />
        </TextField>
        <TextField>
          <Label>Last Name:</Label>
          <Input />
        </TextField>
        <Button slot="close">
          Submit
        </Button>
      </form>
    </Dialog>
  </Modal>
</DialogTrigger>
```

```
import {
  Button,
  Dialog,
  DialogTrigger,
  Heading,
  Input,
  Label,
  Modal,
  TextField
} from 'react-aria-components';

<DialogTrigger>
  <Button>Sign up…</Button>
  <Modal>
    <Dialog>
      <form>
        <Heading slot="title">Sign up</Heading>
        <TextField autoFocus>
          <Label>First Name:</Label>
          <Input />
        </TextField>
        <TextField>
          <Label>Last Name:</Label>
          <Input />
        </TextField>
        <Button slot="close">
          Submit
        </Button>
      </form>
    </Dialog>
  </Modal>
</DialogTrigger>
```

```
import {
  Button,
  Dialog,
  DialogTrigger,
  Heading,
  Input,
  Label,
  Modal,
  TextField
} from 'react-aria-components';

<DialogTrigger>
  <Button>
    Sign up…
  </Button>
  <Modal>
    <Dialog>
      <form>
        <Heading slot="title">
          Sign up
        </Heading>
        <TextField
          autoFocus
        >
          <Label>
            First Name:
          </Label>
          <Input />
        </TextField>
        <TextField>
          <Label>
            Last Name:
          </Label>
          <Input />
        </TextField>
        <Button slot="close">
          Submit
        </Button>
      </form>
    </Dialog>
  </Modal>
</DialogTrigger>
```

Show CSS

```
@import "@react-aria/example-theme";

.react-aria-ModalOverlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: var(--page-height);
  background: rgba(0 0 0 / .5);
  z-index: 100;

  &[data-entering] {
    animation: modal-fade 200ms;
  }

  &[data-exiting] {
    animation: modal-fade 150ms reverse ease-in;
  }
}

.react-aria-Modal {
  position: fixed;
  max-height: var(--visual-viewport-height);
  top: calc(var(--visual-viewport-height) / 2);
  left: 50%;
  translate: -50% -50%;
  box-shadow: 0 8px 20px rgba(0 0 0 / 0.1);
  border-radius: 6px;
  background: var(--overlay-background);
  color: var(--text-color);
  border: 1px solid var(--gray-400);
  outline: none;
  width: max-content;
  max-width: 300px;

  &[data-entering] {
    animation: modal-zoom 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .react-aria-TextField {
    margin-bottom: 8px;
  }
}

@keyframes modal-fade {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes modal-zoom {
  from {
    transform: scale(0.8);
  }

  to {
    transform: scale(1);
  }
}
```

```
@import "@react-aria/example-theme";

.react-aria-ModalOverlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: var(--page-height);
  background: rgba(0 0 0 / .5);
  z-index: 100;

  &[data-entering] {
    animation: modal-fade 200ms;
  }

  &[data-exiting] {
    animation: modal-fade 150ms reverse ease-in;
  }
}

.react-aria-Modal {
  position: fixed;
  max-height: var(--visual-viewport-height);
  top: calc(var(--visual-viewport-height) / 2);
  left: 50%;
  translate: -50% -50%;
  box-shadow: 0 8px 20px rgba(0 0 0 / 0.1);
  border-radius: 6px;
  background: var(--overlay-background);
  color: var(--text-color);
  border: 1px solid var(--gray-400);
  outline: none;
  width: max-content;
  max-width: 300px;

  &[data-entering] {
    animation: modal-zoom 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .react-aria-TextField {
    margin-bottom: 8px;
  }
}

@keyframes modal-fade {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes modal-zoom {
  from {
    transform: scale(0.8);
  }

  to {
    transform: scale(1);
  }
}
```

```
@import "@react-aria/example-theme";

.react-aria-ModalOverlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: var(--page-height);
  background: rgba(0 0 0 / .5);
  z-index: 100;

  &[data-entering] {
    animation: modal-fade 200ms;
  }

  &[data-exiting] {
    animation: modal-fade 150ms reverse ease-in;
  }
}

.react-aria-Modal {
  position: fixed;
  max-height: var(--visual-viewport-height);
  top: calc(var(--visual-viewport-height) / 2);
  left: 50%;
  translate: -50% -50%;
  box-shadow: 0 8px 20px rgba(0 0 0 / 0.1);
  border-radius: 6px;
  background: var(--overlay-background);
  color: var(--text-color);
  border: 1px solid var(--gray-400);
  outline: none;
  width: max-content;
  max-width: 300px;

  &[data-entering] {
    animation: modal-zoom 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .react-aria-TextField {
    margin-bottom: 8px;
  }
}

@keyframes modal-fade {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes modal-zoom {
  from {
    transform: scale(0.8);
  }

  to {
    transform: scale(1);
  }
}
```

* * *

The HTML [<dialog>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog) element can be used to build modals. However, it is not yet widely supported across browsers, and building fully accessible custom dialogs from scratch is very difficult and error prone. `Modal` helps achieve accessible modals that can be styled as needed.

-   **Styleable** – States for entry and exit animations are included for easy styling. Both the underlay and overlay elements can be customized.
-   **Accessible** – Content outside the model is hidden from assistive technologies while it is open. The modal optionally closes when interacting outside, or pressing the Escape key.
-   **Focus management** – Focus is moved into the modal on mount, and restored to the trigger element on unmount. While open, focus is contained within the modal, preventing the user from tabbing outside.
-   **Scroll locking** – Scrolling the page behind the modal is prevented while it is open, including in mobile browsers.

Note: `Modal` only provides the overlay itself. It should be combined with [Dialog](https://react-spectrum.adobe.com/react-aria/Dialog.html) to create fully accessible modal dialogs. Other overlays such as menus may also be placed in a modal overlay.

* * *

UnderlayModal

A modal consists of an overlay container element, and an underlay. The overlay may contain a [Dialog](https://react-spectrum.adobe.com/react-aria/Dialog.html), or another element such as a [Menu](https://react-spectrum.adobe.com/react-aria/Menu.html) or [ListBox](https://react-spectrum.adobe.com/react-aria/ListBox.html) when used within a component such as a [Select](https://react-spectrum.adobe.com/react-aria/Select.html) or [ComboBox](https://react-spectrum.adobe.com/react-aria/ComboBox.html). The underlay is typically a partially transparent element that covers the rest of the screen behind the overlay, and prevents the user from interacting with the elements behind it.

```
import {Modal, ModalOverlay} from 'react-aria-components';

<ModalOverlay>
  <Modal />
</ModalOverlay>
```

```
import {Modal, ModalOverlay} from 'react-aria-components';

<ModalOverlay>
  <Modal />
</ModalOverlay>
```

```
import {
  Modal,
  ModalOverlay
} from 'react-aria-components';

<ModalOverlay>
  <Modal />
</ModalOverlay>
```

* * *

[![](https://react-spectrum.adobe.com/destructive-dialog.b60d06e4.png)

Destructive Alert Dialog

An animated confirmation dialog, styled with Tailwind CSS.

](https://react-spectrum.adobe.com/react-aria/examples/destructive-dialog.html)[![](https://react-spectrum.adobe.com/framer-modal-sheet.888af290.png)

Gesture Driven Modal Sheet

An iOS-style gesture driven modal sheet built with Framer Motion.

](https://react-spectrum.adobe.com/react-aria/examples/framer-modal-sheet.html)

* * *

To help kick-start your project, we offer starter kits that include example implementations of all React Aria components with various styling solutions. All components are fully styled, including support for dark mode, high contrast mode, and all UI states. Each starter comes with a pre-configured [Storybook](https://storybook.js.org/) that you can experiment with, or use as a starting point for your own component library.

* * *

If your modal doesn't require the user to make a confirmation, you can set `isDismissable` on the `Modal`. This allows the user to click outside to close the dialog.

```
<DialogTrigger>
  <Button>Open dialog</Button>
  <Modal isDismissable>
    <Dialog>
      <Heading slot="title">Notice</Heading>
      <p>Click outside to close this dialog.</p>
    </Dialog>
  </Modal>
</DialogTrigger>
```

```
<DialogTrigger>
  <Button>Open dialog</Button>
  <Modal isDismissable>
    <Dialog>
      <Heading slot="title">Notice</Heading>
      <p>Click outside to close this dialog.</p>
    </Dialog>
  </Modal>
</DialogTrigger>
```

```
<DialogTrigger>
  <Button>
    Open dialog
  </Button>
  <Modal isDismissable>
    <Dialog>
      <Heading slot="title">
        Notice
      </Heading>
      <p>
        Click outside
        to close this
        dialog.
      </p>
    </Dialog>
  </Modal>
</DialogTrigger>
```

By default, modals can be closed by pressing the Escape key. This can be disabled with the `isKeyboardDismissDisabled` prop.

```
<DialogTrigger>
  <Button>Open dialog</Button>
  <Modal isKeyboardDismissDisabled>
    <Dialog>
      <Heading slot="title">Notice</Heading>
      <p>You must close this dialog using the button below.</p>
      <Button slot="close">Close</Button>
    </Dialog>
  </Modal>
</DialogTrigger>
```

```
<DialogTrigger>
  <Button>Open dialog</Button>
  <Modal isKeyboardDismissDisabled>
    <Dialog>
      <Heading slot="title">Notice</Heading>
      <p>
        You must close this dialog using the button below.
      </p>
      <Button slot="close">Close</Button>
    </Dialog>
  </Modal>
</DialogTrigger>
```

```
<DialogTrigger>
  <Button>
    Open dialog
  </Button>
  <Modal
    isKeyboardDismissDisabled
  >
    <Dialog>
      <Heading slot="title">
        Notice
      </Heading>
      <p>
        You must close
        this dialog
        using the
        button below.
      </p>
      <Button slot="close">
        Close
      </Button>
    </Dialog>
  </Modal>
</DialogTrigger>
```

* * *

`ModalOverlay` can be used to customize the backdrop rendered behind a `Modal`. Together with support for custom entry and exit animations, you can build other types of overlays beyond traditional modal dialogs such as trays or drawers.

```
import {ModalOverlay} from 'react-aria-components';

<DialogTrigger>
  <Button>Open modal</Button>
  <ModalOverlay className="my-overlay">
    <Modal className="my-modal">
      <Dialog>
        <Heading slot="title">Notice</Heading>
        <p>This is a modal with a custom modal overlay.</p>
        <Button slot="close">Close</Button>
      </Dialog>
    </Modal>
  </ModalOverlay>
</DialogTrigger>
```

```
import {ModalOverlay} from 'react-aria-components';

<DialogTrigger>
  <Button>Open modal</Button>
  <ModalOverlay className="my-overlay">
    <Modal className="my-modal">
      <Dialog>
        <Heading slot="title">Notice</Heading>
        <p>This is a modal with a custom modal overlay.</p>
        <Button slot="close">Close</Button>
      </Dialog>
    </Modal>
  </ModalOverlay>
</DialogTrigger>
```

```
import {ModalOverlay} from 'react-aria-components';

<DialogTrigger>
  <Button>
    Open modal
  </Button>
  <ModalOverlay className="my-overlay">
    <Modal className="my-modal">
      <Dialog>
        <Heading slot="title">
          Notice
        </Heading>
        <p>
          This is a
          modal with a
          custom modal
          overlay.
        </p>
        <Button slot="close">
          Close
        </Button>
      </Dialog>
    </Modal>
  </ModalOverlay>
</DialogTrigger>
```

Show CSS

```
.my-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--page-height);
  background: rgba(45 0 0 / .3);
  backdrop-filter: blur(10px);

  &[data-entering] {
    animation: mymodal-blur 300ms;
  }

  &[data-exiting] {
    animation: mymodal-blur 300ms reverse ease-in;
  }
}

.my-modal {
  position: sticky;
  left: 0;
  width: 300px;
  /* Extra padding to account for iOS floating browser UI. */
  top: -100px;
  height: calc(100dvh + 200px);
  padding: 100px 0;
  margin-left: auto;
  background: var(--overlay-background);
  outline: none;
  border-left: 1px solid var(--border-color);
  box-shadow: -8px 0 20px rgba(0 0 0 / 0.1);

  &[data-entering] {
    animation: mymodal-slide 300ms;
  }

  &[data-exiting] {
    animation: mymodal-slide 300ms reverse ease-in;
  }
}

@keyframes mymodal-blur {
  from {
    background: rgba(45 0 0 / 0);
    backdrop-filter: blur(0);
  }

  to {
    background: rgba(45 0 0 / .3);
    backdrop-filter: blur(10px);
  }
}

@keyframes mymodal-slide {
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0);
  }
}
```

```
.my-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--page-height);
  background: rgba(45 0 0 / .3);
  backdrop-filter: blur(10px);

  &[data-entering] {
    animation: mymodal-blur 300ms;
  }

  &[data-exiting] {
    animation: mymodal-blur 300ms reverse ease-in;
  }
}

.my-modal {
  position: sticky;
  left: 0;
  width: 300px;
  /* Extra padding to account for iOS floating browser UI. */
  top: -100px;
  height: calc(100dvh + 200px);
  padding: 100px 0;
  margin-left: auto;
  background: var(--overlay-background);
  outline: none;
  border-left: 1px solid var(--border-color);
  box-shadow: -8px 0 20px rgba(0 0 0 / 0.1);

  &[data-entering] {
    animation: mymodal-slide 300ms;
  }

  &[data-exiting] {
    animation: mymodal-slide 300ms reverse ease-in;
  }
}

@keyframes mymodal-blur {
  from {
    background: rgba(45 0 0 / 0);
    backdrop-filter: blur(0);
  }

  to {
    background: rgba(45 0 0 / .3);
    backdrop-filter: blur(10px);
  }
}

@keyframes mymodal-slide {
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0);
  }
}
```

```
.my-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--page-height);
  background: rgba(45 0 0 / .3);
  backdrop-filter: blur(10px);

  &[data-entering] {
    animation: mymodal-blur 300ms;
  }

  &[data-exiting] {
    animation: mymodal-blur 300ms reverse ease-in;
  }
}

.my-modal {
  position: sticky;
  left: 0;
  width: 300px;
  /* Extra padding to account for iOS floating browser UI. */
  top: -100px;
  height: calc(100dvh + 200px);
  padding: 100px 0;
  margin-left: auto;
  background: var(--overlay-background);
  outline: none;
  border-left: 1px solid var(--border-color);
  box-shadow: -8px 0 20px rgba(0 0 0 / 0.1);

  &[data-entering] {
    animation: mymodal-slide 300ms;
  }

  &[data-exiting] {
    animation: mymodal-slide 300ms reverse ease-in;
  }
}

@keyframes mymodal-blur {
  from {
    background: rgba(45 0 0 / 0);
    backdrop-filter: blur(0);
  }

  to {
    background: rgba(45 0 0 / .3);
    backdrop-filter: blur(10px);
  }
}

@keyframes mymodal-slide {
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0);
  }
}
```

* * *

The above examples have shown `Modal` used within a `<DialogTrigger>`, which handles opening the modal when a button is clicked. This is convenient, but there are cases where you want to show a modal programmatically rather than as a result of a user action, or render the `<Modal>` in a different part of the JSX tree.

To do this, you can manage the modal's `isOpen` state yourself and provide it as a prop to the `<Modal>` element. The `onOpenChange` prop will be called when the user closes the modal, and should be used to update your state.

```
function Example() {
  let [isOpen, setOpen] = React.useState(false);

  return (
    <>
      <Button onPress={() => setOpen(true)}>Open dialog</Button>
      <Modal isDismissable isOpen={isOpen} onOpenChange={setOpen}>
        <Dialog>
          <Heading slot="title">Notice</Heading>
          <p>Click outside to close this dialog.</p>
        </Dialog>
      </Modal>
    </>
  );
}
```

```
function Example() {
  let [isOpen, setOpen] = React.useState(false);

  return (
    <>
      <Button onPress={() => setOpen(true)}>
        Open dialog
      </Button>
      <Modal
        isDismissable
        isOpen={isOpen}
        onOpenChange={setOpen}
      >
        <Dialog>
          <Heading slot="title">Notice</Heading>
          <p>Click outside to close this dialog.</p>
        </Dialog>
      </Modal>
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

  return (
    <>
      <Button
        onPress={() =>
          setOpen(true)}
      >
        Open dialog
      </Button>
      <Modal
        isDismissable
        isOpen={isOpen}
        onOpenChange={setOpen}
      >
        <Dialog>
          <Heading slot="title">
            Notice
          </Heading>
          <p>
            Click outside
            to close this
            dialog.
          </p>
        </Dialog>
      </Modal>
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
  </Pressable>  <Modal>
    <Dialog>
      <Heading slot="title">Dialog</Heading>
      <p>This dialog was triggered by a custom button.</p>
      <Button slot="close">Close</Button>
    </Dialog>
  </Modal>
</DialogTrigger>
```

```
import {Pressable} from 'react-aria-components';

<DialogTrigger>
  <Pressable>
    <span role="button">Custom trigger</span>
  </Pressable>  <Modal>
    <Dialog>
      <Heading slot="title">Dialog</Heading>
      <p>This dialog was triggered by a custom button.</p>
      <Button slot="close">Close</Button>
    </Dialog>
  </Modal>
</DialogTrigger>
```

```
import {Pressable} from 'react-aria-components';

<DialogTrigger>
  <Pressable>
    <span role="button">
      Custom trigger
    </span>
  </Pressable>  <Modal>
    <Dialog>
      <Heading slot="title">
        Dialog
      </Heading>
      <p>
        This dialog was
        triggered by a
        custom button.
      </p>
      <Button slot="close">
        Close
      </Button>
    </Dialog>
  </Modal>
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

`isEntering`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the modal is currently performing an entry animation.

`isExiting`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the modal is currently performing an exit animation.

`isDismissable`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

`false`

Whether to close the modal when the user interacts outside it.

`isKeyboardDismissDisabled`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

`false`

Whether pressing the escape key to close the modal should be disabled.

`shouldCloseOnInteractOutside`

`( (element: [Element](https://developer.mozilla.org/docs/Web/API/Element) )) => [boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

When user interacts with the argument element outside of the overlay ref, return true if onClose should be called. This gives you a chance to filter out interaction with elements that should not dismiss the overlay. By default, onClose will always be called on interaction outside the overlay ref.

`isOpen`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the overlay is open by default (controlled).

`defaultOpen`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the overlay is open by default (uncontrolled).

`children`

`[ChildrenOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ChildrenOrFunction)<[ModalRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Modal.tsx:ModalRenderProps)>`

—

The children of the component. A function may be provided to alter the children based on component state.

`className`

`[ClassNameOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ClassNameOrFunction)<[ModalRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Modal.tsx:ModalRenderProps)>`

—

The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.

`style`

`[StyleOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:StyleOrFunction)<[ModalRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Modal.tsx:ModalRenderProps)>`

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

Positioning

* * *

React Aria components can be styled in many ways, including using CSS classes, inline styles, utility classes (e.g. Tailwind), CSS-in-JS (e.g. Styled Components), etc. By default, all components include a builtin `className` attribute which can be targeted using CSS selectors. These follow the `react-aria-ComponentName` naming convention.

```
.react-aria-Modal {
  /* ... */
}
```

```
.react-aria-Modal {
  /* ... */
}
```

```
.react-aria-Modal {
  /* ... */
}
```

A custom `className` can also be specified on any component. This overrides the default `className` provided by React Aria with your own.

```
<Modal className="my-modal">
  {/* ... */}
</Modal>
```

```
<Modal className="my-modal">
  {/* ... */}
</Modal>
```

```
<Modal className="my-modal">
  {/* ... */}
</Modal>
```

In addition, modals support entry and exit animations, which are exposed as states using DOM attributes that you can target with CSS selectors. `Modal` and `ModalOverlay` will automatically wait for any exit animations to complete before removing the element from the DOM. See the [animation guide](https://react-spectrum.adobe.com/react-aria/styling.html#animation) for more details.

```
.react-aria-Modal[data-entering] {
  animation: slide 300ms;
}

.react-aria-Modal[data-exiting] {
  animation: slide 300ms reverse;
}

@keyframes slide {
  /* ... */
}
```

```
.react-aria-Modal[data-entering] {
  animation: slide 300ms;
}

.react-aria-Modal[data-exiting] {
  animation: slide 300ms reverse;
}

@keyframes slide {
  /* ... */
}
```

```
.react-aria-Modal[data-entering] {
  animation: slide 300ms;
}

.react-aria-Modal[data-exiting] {
  animation: slide 300ms reverse;
}

@keyframes slide {
  /* ... */
}
```

The `className` and `style` props also accept functions which receive states for styling. This lets you dynamically determine the classes or styles to apply, which is useful when using utility CSS libraries like [Tailwind](https://tailwindcss.com/).

```
<Modal className={({isEntering}) => isEntering ? 'slide-in' : ''}>
  {/* ... */}
</Modal>
```

```
<Modal
  className={({ isEntering }) =>
    isEntering ? 'slide-in' : ''}
>
  {/* ... */}
</Modal>
```

```
<Modal
  className={(
    { isEntering }
  ) =>
    isEntering
      ? 'slide-in'
      : ''}
>
  {/* ... */}
</Modal>
```

The states, selectors, and render props for each component used in a `Modal` are documented below.

A `Modal` can be targeted with the `.react-aria-Modal` CSS selector, or by overriding with a custom `className`. It supports the following states and render props:

Name

CSS Selector

Description

`isEntering`

`[data-entering]`

Whether the modal is currently entering. Use this to apply animations.

`isExiting`

`[data-exiting]`

Whether the modal is currently exiting. Use this to apply animations.

`state`

`—`

State of the modal.

By default, `Modal` includes a builtin `ModalOverlay`, which renders a backdrop over the page when a modal is open. This can be targeted using the `.react-aria-ModalOverlay` CSS selector. To customize the `ModalOverlay` with a different class name or other attributes, render a `ModalOverlay` and place a `Modal` inside.

The `--page-height` and `--visual-viewport-height` CSS custom property will be set on the `ModalOverlay`, the latter of which you can use to set the height of the Modal to account for the virtual keyboard on mobile.

```
.react-aria-ModalOverlay {
  position: absolute;
  height: var(--page-height);
}

.react-aria-Modal {
  /* Center modal without adding a extra wrapping div. */
  position: fixed;
  max-height: var(--visual-viewport-height);
  top: calc(var(--visual-viewport-height) / 2);
  left: 50%;
  translate: -50% -50%;
}
```

```
.react-aria-ModalOverlay {
  position: absolute;
  height: var(--page-height);
}

.react-aria-Modal {
  /* Center modal without adding a extra wrapping div. */
  position: fixed;
  max-height: var(--visual-viewport-height);
  top: calc(var(--visual-viewport-height) / 2);
  left: 50%;
  translate: -50% -50%;
}
```

```
.react-aria-ModalOverlay {
  position: absolute;
  height: var(--page-height);
}

.react-aria-Modal {
  /* Center modal without adding a extra wrapping div. */
  position: fixed;
  max-height: var(--visual-viewport-height);
  top: calc(var(--visual-viewport-height) / 2);
  left: 50%;
  translate: -50% -50%;
}
```

* * *

All React Aria Components export a corresponding context that can be used to send props to them from a parent element. This enables you to build your own compositional APIs similar to those found in React Aria Components itself. You can send any prop or ref via context that you could pass to the corresponding component. The local props and ref on the component are merged with the ones passed via context, with the local props taking precedence (following the rules documented in [mergeProps](https://react-spectrum.adobe.com/react-aria/mergeProps.html)).

Component

Context

Props

Ref

`Modal`

`ModalContext`

`[ModalOverlayProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Modal.tsx:ModalOverlayProps)`

`[HTMLDivElement](https://developer.mozilla.org/docs/Web/API/HTMLDivElement)`

This example shows a `KeyboardModalTrigger` component that shows a modal when a user presses a specific key from anywhere on the page. It uses `ModalContext` to set the open state of the nested modal.

```
import {ModalContext} from 'react-aria-components';

interface KeyboardModalTriggerProps {
  keyboardShortcut: string,
  children: React.ReactNode
}

function KeyboardModalTrigger(props: KeyboardModalTriggerProps) {
  let [isOpen, setOpen] = React.useState(false);
  React.useEffect(() => {
    let onKeyDown = (e: KeyboardEvent) => {
      if (e.key === props.keyboardShortcut) {
        setOpen(true);
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [props.keyboardShortcut]);

  return (
    <ModalContext.Provider value={{isOpen, onOpenChange: setOpen}}>      {props.children}
    </ModalContext.Provider>
  );
}
```

```
import {ModalContext} from 'react-aria-components';

interface KeyboardModalTriggerProps {
  keyboardShortcut: string;
  children: React.ReactNode;
}

function KeyboardModalTrigger(
  props: KeyboardModalTriggerProps
) {
  let [isOpen, setOpen] = React.useState(false);
  React.useEffect(() => {
    let onKeyDown = (e: KeyboardEvent) => {
      if (e.key === props.keyboardShortcut) {
        setOpen(true);
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () =>
      document.removeEventListener('keydown', onKeyDown);
  }, [props.keyboardShortcut]);

  return (
    <ModalContext.Provider
      value={{ isOpen, onOpenChange: setOpen }}
    >      {props.children}
    </ModalContext.Provider>
  );
}
```

```
import {ModalContext} from 'react-aria-components';

interface KeyboardModalTriggerProps {
  keyboardShortcut:
    string;
  children:
    React.ReactNode;
}

function KeyboardModalTrigger(
  props:
    KeyboardModalTriggerProps
) {
  let [isOpen, setOpen] =
    React.useState(
      false
    );
  React.useEffect(() => {
    let onKeyDown = (
      e: KeyboardEvent
    ) => {
      if (
        e.key ===
          props
            .keyboardShortcut
      ) {
        setOpen(true);
      }
    };

    document
      .addEventListener(
        'keydown',
        onKeyDown
      );
    return () =>
      document
        .removeEventListener(
          'keydown',
          onKeyDown
        );
  }, [
    props
      .keyboardShortcut
  ]);

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        onOpenChange:
          setOpen
      }}
    >      {props.children}
    </ModalContext.Provider>
  );
}
```

The following example uses `KeyboardModalTrigger` to show a modal when the / key is pressed.

```
<KeyboardModalTrigger keyboardShortcut="/">
  <Modal isDismissable>
    <Dialog>
      <Heading slot="title">Command palette</Heading>
      <p>Your cool command palette UI here!</p>
    </Dialog>
  </Modal>
</KeyboardModalTrigger>
```

```
<KeyboardModalTrigger keyboardShortcut="/">
  <Modal isDismissable>
    <Dialog>
      <Heading slot="title">Command palette</Heading>
      <p>Your cool command palette UI here!</p>
    </Dialog>
  </Modal>
</KeyboardModalTrigger>
```

```
<KeyboardModalTrigger keyboardShortcut="/">
  <Modal isDismissable>
    <Dialog>
      <Heading slot="title">
        Command palette
      </Heading>
      <p>
        Your cool
        command palette
        UI here!
      </p>
    </Dialog>
  </Modal>
</KeyboardModalTrigger>
```

If you need to customize things further, such as accessing internal state or customizing DOM structure, you can drop down to the lower level Hook-based API. See [useModalOverlay](https://react-spectrum.adobe.com/react-aria/useModalOverlay.html) for more details.