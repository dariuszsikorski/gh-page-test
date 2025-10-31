# Dialog

**Source**: [https://react-spectrum.adobe.com/react-aria/Dialog.html](https://react-spectrum.adobe.com/react-aria/Dialog.html)

> Documentation for Dialog in the React Aria package.

---

A dialog is an overlay shown above other content in an application.

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
          <Label>First Name</Label>
          <Input />
        </TextField>
        <TextField>
          <Label>Last Name</Label>
          <Input />
        </TextField>
        <Button slot="close" style={{ marginTop: 8 }}>
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
          <Label>First Name</Label>
          <Input />
        </TextField>
        <TextField>
          <Label>Last Name</Label>
          <Input />
        </TextField>
        <Button slot="close" style={{ marginTop: 8 }}>
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
            First Name
          </Label>
          <Input />
        </TextField>
        <TextField>
          <Label>
            Last Name
          </Label>
          <Input />
        </TextField>
        <Button
          slot="close"
          style={{
            marginTop:
              8
          }}
        >
          Submit
        </Button>
      </form>
    </Dialog>
  </Modal>
</DialogTrigger>
```

Show CSS

```
.react-aria-Dialog {
  outline: none;
  padding: 30px;
  max-height: inherit;
  box-sizing: border-box;
  overflow: auto;

  .react-aria-Heading[slot=title] {
    line-height: 1em;
    margin-top: 0;
  }
}
```

```
.react-aria-Dialog {
  outline: none;
  padding: 30px;
  max-height: inherit;
  box-sizing: border-box;
  overflow: auto;

  .react-aria-Heading[slot=title] {
    line-height: 1em;
    margin-top: 0;
  }
}
```

```
.react-aria-Dialog {
  outline: none;
  padding: 30px;
  max-height: inherit;
  box-sizing: border-box;
  overflow: auto;

  .react-aria-Heading[slot=title] {
    line-height: 1em;
    margin-top: 0;
  }
}
```

* * *

The HTML [<dialog>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog) element can be used to build dialogs. However, it is not yet widely supported across browsers, and building fully accessible custom dialogs from scratch is very difficult and error prone. `Dialog` helps achieve accessible dialogs that can be styled as needed.

-   **Flexible** – Dialogs can be used within a [Modal](https://react-spectrum.adobe.com/react-aria/Modal.html) or [Popover](https://react-spectrum.adobe.com/react-aria/Popover.html) to create many types of overlay elements.
-   **Accessible** – Exposed to assistive technology as a `dialog` or `alertdialog` with ARIA. The dialog is automatically labeled by a nested `<Heading>` element. Content outside the dialog is hidden from assistive technologies while it is open.
-   **Focus management** – Focus is moved into the dialog on mount, and restored to the trigger element on unmount. While open, focus is contained within the dialog, preventing the user from tabbing outside.

* * *

Shows a dialog component with labels pointing to its parts, including the title, and dialog container elements.CancelEnableEnable smart filters?Smart filters are nondestructive and will preserve your original images.TitleDialog

A dialog consists of a container element and an optional title and close button. It can be placed within a [Modal](https://react-spectrum.adobe.com/react-aria/Modal.html) or [Popover](https://react-spectrum.adobe.com/react-aria/Popover.html), to create modal dialogs, popovers, and other types of overlays. A `DialogTrigger` can be used to open a dialog overlay in response to a user action, e.g. clicking a button.

```
import {Button, Dialog, DialogTrigger, Heading, Modal} from 'react-aria-components';

<DialogTrigger>
  <Button />
  <Modal>
    <Dialog>
      <Heading slot="title" />
      <Button slot="close" />
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
  Modal
} from 'react-aria-components';

<DialogTrigger>
  <Button />
  <Modal>
    <Dialog>
      <Heading slot="title" />
      <Button slot="close" />
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
  Modal
} from 'react-aria-components';

<DialogTrigger>
  <Button />
  <Modal>
    <Dialog>
      <Heading slot="title" />
      <Button slot="close" />
    </Dialog>
  </Modal>
</DialogTrigger>
```

If a dialog does not have a visible heading element, an `aria-label` or `aria-labelledby` prop must be passed instead to identify the element to assistive technology.

* * *

[![](https://react-spectrum.adobe.com/destructive-dialog.b60d06e4.png)

Destructive Alert Dialog

An animated confirmation dialog, styled with Tailwind CSS.

](https://react-spectrum.adobe.com/react-aria/examples/destructive-dialog.html)[![](https://react-spectrum.adobe.com/framer-modal-sheet.888af290.png)

Gesture Driven Modal Sheet

An iOS-style gesture driven modal sheet built with Framer Motion.

](https://react-spectrum.adobe.com/react-aria/examples/framer-modal-sheet.html)[![](https://react-spectrum.adobe.com/notifications-popover.7701a7df.png)

Notifications Popover

A notifications popover styled with Tailwind CSS.

](https://react-spectrum.adobe.com/react-aria/examples/notifications-popover.html)

* * *

To help kick-start your project, we offer starter kits that include example implementations of all React Aria components with various styling solutions. All components are fully styled, including support for dark mode, high contrast mode, and all UI states. Each starter comes with a pre-configured [Storybook](https://storybook.js.org/) that you can experiment with, or use as a starting point for your own component library.

* * *

A `Dialog` may be placed within a [Popover](https://react-spectrum.adobe.com/react-aria/Popover.html) to display it in context with a trigger element.

```
import {OverlayArrow, Popover} from 'react-aria-components';

<DialogTrigger>
  <Button aria-label="Help">ⓘ</Button>
  <Popover>
    <OverlayArrow>
      <svg width={12} height={12} viewBox="0 0 12 12">
        <path d="M0 0 L6 6 L12 0" />
      </svg>
    </OverlayArrow>
    <Dialog>
      <Heading slot="title">Help</Heading>
      <p>For help accessing your account, please contact support.</p>
    </Dialog>
  </Popover>
</DialogTrigger>
```

```
import {OverlayArrow, Popover} from 'react-aria-components';

<DialogTrigger>
  <Button aria-label="Help">ⓘ</Button>
  <Popover>
    <OverlayArrow>
      <svg width={12} height={12} viewBox="0 0 12 12">
        <path d="M0 0 L6 6 L12 0" />
      </svg>
    </OverlayArrow>
    <Dialog>
      <Heading slot="title">Help</Heading>
      <p>
        For help accessing your account, please contact
        support.
      </p>
    </Dialog>
  </Popover>
</DialogTrigger>
```

```
import {
  OverlayArrow,
  Popover
} from 'react-aria-components';

<DialogTrigger>
  <Button aria-label="Help">
    ⓘ
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
      <Heading slot="title">
        Help
      </Heading>
      <p>
        For help
        accessing your
        account, please
        contact
        support.
      </p>
    </Dialog>
  </Popover>
</DialogTrigger>
```

* * *

Alert dialogs are a special type of dialog meant to present a prompt that the user must confirm before an action proceeds. An alert dialog may also behave differently with assistive technologies, such as playing a system alert sound when opening. Use the `role="alertdialog"` prop on the `<Dialog>` element to make an alert dialog.

```
<DialogTrigger>
  <Button>Delete…</Button>
  <Modal>
    <Dialog role="alertdialog">
      {({close}) => (
        <>
          <Heading slot="title">Delete file</Heading>
          <p>This will permanently delete the selected file. Continue?</p>
          <div style={{display: 'flex', gap: 8}}>
            <Button onPress={close}>Cancel</Button>
            <Button onPress={close}>Delete</Button>
          </div>
        </>
      )}
    </Dialog>
  </Modal>
</DialogTrigger>
```

```
<DialogTrigger>
  <Button>Delete…</Button>
  <Modal>
    <Dialog role="alertdialog">
      {({ close }) => (
        <>
          <Heading slot="title">Delete file</Heading>
          <p>
            This will permanently delete the selected
            file. Continue?
          </p>
          <div style={{ display: 'flex', gap: 8 }}>
            <Button onPress={close}>Cancel</Button>
            <Button onPress={close}>Delete</Button>
          </div>
        </>
      )}
    </Dialog>
  </Modal>
</DialogTrigger>
```

```
<DialogTrigger>
  <Button>
    Delete…
  </Button>
  <Modal>
    <Dialog role="alertdialog">
      {({ close }) => (
        <>
          <Heading slot="title">
            Delete file
          </Heading>
          <p>
            This will
            permanently
            delete the
            selected
            file.
            Continue?
          </p>
          <div
            style={{
              display:
                'flex',
              gap: 8
            }}
          >
            <Button
              onPress={close}
            >
              Cancel
            </Button>
            <Button
              onPress={close}
            >
              Delete
            </Button>
          </div>
        </>
      )}
    </Dialog>
  </Modal>
</DialogTrigger>
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

Description

`children`

`[ReactNode](https://reactjs.org/docs/rendering-elements.html)`

`isOpen`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether the overlay is open by default (controlled).

`defaultOpen`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

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

Description

`children`

`[ReactNode](https://reactjs.org/docs/rendering-elements.html) | ( (opts: [DialogRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Dialog.tsx:DialogRenderProps) )) => [ReactNode](https://reactjs.org/docs/rendering-elements.html)`

Children of the dialog. A function may be provided to access a function to close the dialog.

`className`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element.

`style`

`[CSSProperties](https://reactjs.org/docs/dom-elements.html#style)`

The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element.

EventsLayout

Name

Type

Description

`slot`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)`

A slot name for the component. Slots allow the component to receive props from a parent component. An explicit `null` value indicates that the local props completely override all props received from a parent.

PositioningAccessibility

Name

Type

Default

Description

`role`

`'dialog' | 'alertdialog'`

`'dialog'`

The accessibility role for the dialog.

`id`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

The element's unique identifier. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id).

`aria-label`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

Defines a string value that labels the current element.

`aria-labelledby`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

Identifies the element (or elements) that labels the current element.

`aria-describedby`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

Identifies the element (or elements) that describes the object.

`aria-details`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

Identifies the element (or elements) that provide a detailed, extended description for the object.

A `<Heading>` accepts all HTML attributes.

A `<Button slot="close">` element can be placed inside a `<Dialog>` to close it when pressed.

Show props

Name

Type

Default

Description

`isPending`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the button is in a pending state. This disables press and hover events while retaining focusability, and announces the pending state to screen readers.

`isDisabled`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the button is disabled.

`autoFocus`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the element should receive focus on render.

`type`

`'button' | 'submit' | 'reset'`

`'button'`

The behavior of the button when used in an HTML form.

`form`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

The `<form>` element to associate the button with. The value of this attribute must be the id of a `<form>` in the same document. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button#form).

`formAction`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

The URL that processes the information submitted by the button. Overrides the action attribute of the button's form owner.

`formEncType`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

Indicates how to encode the form data that is submitted.

`formMethod`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

Indicates the HTTP method used to submit the form.

`formNoValidate`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Indicates that the form is not to be validated when it is submitted.

`formTarget`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

Overrides the target attribute of the button's form owner.

`name`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

Submitted as a pair with the button's value as part of the form data.

`value`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

The value associated with the button's name when it's submitted with the form data.

`children`

`[ChildrenOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ChildrenOrFunction)<[ButtonRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Button.tsx:ButtonRenderProps)>`

—

The children of the component. A function may be provided to alter the children based on component state.

`className`

`[ClassNameOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ClassNameOrFunction)<[ButtonRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Button.tsx:ButtonRenderProps)>`

—

The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.

`style`

`[StyleOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:StyleOrFunction)<[ButtonRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Button.tsx:ButtonRenderProps)>`

—

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

`id`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

The element's unique identifier. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id).

`excludeFromTabOrder`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether to exclude the element from the sequential tab order. If true, the element will not be focusable via the keyboard by tabbing. This should be avoided except in rare scenarios where an alternative means of accessing the element or its functionality via the keyboard is available.

`preventFocusOnPress`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether to prevent focus from moving to the button when pressing it.

Caution, this can make the button inaccessible and should only be used when alternative keyboard interaction is provided, such as ComboBox's MenuTrigger or a NumberField's increment/decrement control.

`aria-disabled`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | 'true' | 'false'`

Indicates whether the element is disabled to users of assistive technology.

`aria-expanded`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | 'true' | 'false'`

Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.

`aria-haspopup`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog' | 'true' | 'false'`

Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.

`aria-controls`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

Identifies the element (or elements) whose contents or presence are controlled by the current element.

`aria-pressed`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | 'true' | 'false' | 'mixed'`

Indicates the current "pressed" state of toggle buttons.

`aria-current`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | 'true' | 'false' | 'page' | 'step' | 'location' | 'date' | 'time'`

Indicates whether this element represents the current item within a container or set of related elements.

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
.react-aria-Dialog {
  /* ... */
}
```

```
.react-aria-Dialog {
  /* ... */
}
```

```
.react-aria-Dialog {
  /* ... */
}
```

A custom `className` can also be specified on any component. This overrides the default `className` provided by React Aria with your own.

```
<Dialog className="my-dialog">
  {/* ... */}
</Dialog>
```

```
<Dialog className="my-dialog">
  {/* ... */}
</Dialog>
```

```
<Dialog className="my-dialog">
  {/* ... */}
</Dialog>
```

The selectors for each component used in a `Dialog` are documented below.

The `DialogTrigger` component does not render any DOM elements (it only passes through its children) so it does not support styling. If you need a wrapper element, add one yourself inside the `<DialogTrigger>`.

```
<DialogTrigger>
  <div className="my-dialog-trigger">
    {/* ... */}
  </div>
</DialogTrigger>
```

```
<DialogTrigger>
  <div className="my-dialog-trigger">
    {/* ... */}
  </div>
</DialogTrigger>
```

```
<DialogTrigger>
  <div className="my-dialog-trigger">
    {/* ... */}
  </div>
</DialogTrigger>
```

A `Dialog` can be targeted with the `.react-aria-Dialog` CSS selector, or by overriding with a custom `className`.

A `Heading` can be targeted with the `.react-aria-Heading` CSS selector, or by overriding with a custom `className`.

* * *

DialogTrigger and Dialog pass props to their child components, such as the trigger button and modal overlay, via their associated contexts. These contexts are exported so you can also consume them in your own custom components. This enables you to reuse existing components from your app or component library together with React Aria Components.

Component

Context

Props

Ref

`Button`

`ButtonContext`

`[ButtonProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Button.tsx:ButtonProps)`

`[HTMLButtonElement](https://developer.mozilla.org/docs/Web/API/HTMLButtonElement)`

`Dialog`

`DialogContext`

`[DialogProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Dialog.tsx:DialogProps)`

`[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)`

`Modal`

`ModalContext`

`[ModalOverlayProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Modal.tsx:ModalOverlayProps)`

`[HTMLDivElement](https://developer.mozilla.org/docs/Web/API/HTMLDivElement)`

`Popover`

`PopoverContext`

`[PopoverProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Popover.tsx:PopoverProps)`

`[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)`

`Heading`

`HeadingContext`

`[HeadingProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Heading.tsx:HeadingProps)`

`[HTMLHeadingElement](https://developer.mozilla.org/docs/Web/API/HTMLHeadingElement)`

This example consumes from `HeadingContext` in an existing styled heading component to make it compatible with React Aria Components. The `[useContextProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:useContextProps)` hook merges the local props and ref with the ones provided via context by Dialog.

```
import type {HeadingProps} from 'react-aria-components';
import {HeadingContext, useContextProps} from 'react-aria-components';

const MyCustomHeading = React.forwardRef(
  (props: HeadingProps, ref: React.ForwardedRef<HTMLHeadingElement>) => {
    // Merge the local props and ref with the ones provided via context.
    [props, ref] = useContextProps(props, ref, HeadingContext);
    // ... your existing Heading component
    return <h2 {...props} ref={ref} />;
  }
);
```

```
import type {HeadingProps} from 'react-aria-components';
import {
  HeadingContext,
  useContextProps
} from 'react-aria-components';

const MyCustomHeading = React.forwardRef(
  (
    props: HeadingProps,
    ref: React.ForwardedRef<HTMLHeadingElement>
  ) => {
    // Merge the local props and ref with the ones provided via context.
    [props, ref] = useContextProps(
      props,
      ref,
      HeadingContext
    );
    // ... your existing Heading component
    return <h2 {...props} ref={ref} />;
  }
);
```

```
import type {HeadingProps} from 'react-aria-components';
import {
  HeadingContext,
  useContextProps
} from 'react-aria-components';

const MyCustomHeading =
  React.forwardRef(
    (
      props:
        HeadingProps,
      ref:
        React.ForwardedRef<
          HTMLHeadingElement
        >
    ) => {
      // Merge the local props and ref with the ones provided via context.
      [props, ref] =
        useContextProps(
          props,
          ref,
          HeadingContext
        );
      // ... your existing Heading component
      return (
        <h2
          {...props}
          ref={ref}
        />
      );
    }
  );
```

Now you can use `MyCustomHeading` within a `Dialog`, in place of the builtin React Aria Components `Heading`.

```
<Dialog>
  <MyCustomHeading>Dialog title</MyCustomHeading>  {/* ... */}
</Dialog>
```

```
<Dialog>
  <MyCustomHeading>Dialog title</MyCustomHeading>  {/* ... */}
</Dialog>
```

```
<Dialog>
  <MyCustomHeading>
    Dialog title
  </MyCustomHeading>  {/* ... */}
</Dialog>
```

DialogTrigger provides an `[OverlayTriggerState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/overlays/src/useOverlayTriggerState.ts:OverlayTriggerState)` object to its children via `OverlayTriggerStateContext`. This can be used to access and manipulate the dialog trigger's state.

This example shows a `CloseButton` component that can be placed within a `DialogTrigger` to close the overlay.

```
import {OverlayTriggerStateContext} from 'react-aria-components';

function CloseButton() {
  let state = React.useContext(OverlayTriggerStateContext)!;  return <Button onPress={() => state.close()}>Close</Button>;
}

<DialogTrigger>
  <Button>About</Button>
  <Modal isDismissable>
    <Dialog>
      <Heading slot="title">About</Heading>
      <p>Copyright © 2023 Adobe. All rights reserved.</p>
      <CloseButton />    </Dialog>
  </Modal>
</DialogTrigger>
```

```
import {OverlayTriggerStateContext} from 'react-aria-components';

function CloseButton() {
  let state = React.useContext(OverlayTriggerStateContext)!;  return (
    <Button onPress={() => state.close()}>Close</Button>
  );
}

<DialogTrigger>
  <Button>About</Button>
  <Modal isDismissable>
    <Dialog>
      <Heading slot="title">About</Heading>
      <p>Copyright © 2023 Adobe. All rights reserved.</p>
      <CloseButton />    </Dialog>
  </Modal>
</DialogTrigger>
```

```
import {OverlayTriggerStateContext} from 'react-aria-components';

function CloseButton() {
  let state = React
    .useContext(
      OverlayTriggerStateContext
    )!;  return (
    <Button
      onPress={() =>
        state.close()}
    >
      Close
    </Button>
  );
}

<DialogTrigger>
  <Button>
    About
  </Button>
  <Modal isDismissable>
    <Dialog>
      <Heading slot="title">
        About
      </Heading>
      <p>
        Copyright ©
        2023 Adobe. All
        rights
        reserved.
      </p>
      <CloseButton />    </Dialog>
  </Modal>
</DialogTrigger>
```

If you need to customize things further, such as accessing internal state or customizing DOM structure, you can drop down to the lower level Hook-based API. See [useDialog](https://react-spectrum.adobe.com/react-aria/useDialog.html) for more details.