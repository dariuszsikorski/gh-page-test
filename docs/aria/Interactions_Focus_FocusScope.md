# FocusScope

**Source**: [https://react-spectrum.adobe.com/react-aria/FocusScope.html](https://react-spectrum.adobe.com/react-aria/FocusScope.html)

> Documentation for FocusScope in the React Aria package.

---

A FocusScope manages focus for its descendants. It supports containing focus inside the scope, restoring focus to the previously focused element on unmount, and auto focusing children on mount. It also acts as a container for a programmatic focus management interface that can be used to move focus forward and back in response to user events.

* * *

`FocusScope` is a utility component that can be used to manage focus for its descendants. When the `contain` prop is set, focus is contained within the scope. This is useful when implementing overlays like modal dialogs, which should not allow focus to escape them while open. In addition, the `restoreFocus` prop can be used to restore focus back to the previously focused element when the focus scope unmounts, for example, back to a button which opened a dialog. A FocusScope can also optionally auto focus the first focusable element within it on mount when the `autoFocus` prop is set.

The `[useFocusManager](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/focus/src/FocusScope.tsx:useFocusManager)` hook can also be used in combination with a FocusScope to programmatically move focus within the scope. For example, arrow key navigation could be implemented by handling keyboard events and using a focus manager to move focus to the next and previous elements.

* * *

Name

Type

Description

`children`

`[ReactNode](https://reactjs.org/docs/rendering-elements.html)`

The contents of the focus scope.

`contain`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether to contain focus inside the scope, so users cannot move focus outside, for example in a modal dialog.

`restoreFocus`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether to restore focus back to the element that was focused when the focus scope mounted, after the focus scope unmounts.

`autoFocus`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether to auto focus the first focusable element in the focus scope on mount.

* * *

To get a focus manager, call the `[useFocusManager](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/focus/src/FocusScope.tsx:useFocusManager)` hook from a component within the FocusScope. A focus manager supports the following methods:

Method

Description

`focusNext( (opts?: [FocusManagerOptions](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/focus/src/FocusScope.tsx:FocusManagerOptions) )): [FocusableElement](https://developer.mozilla.org/en-US/docs/Web/API/Element) | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)`

Moves focus to the next focusable or tabbable element in the focus scope.

`focusPrevious( (opts?: [FocusManagerOptions](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/focus/src/FocusScope.tsx:FocusManagerOptions) )): [FocusableElement](https://developer.mozilla.org/en-US/docs/Web/API/Element) | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)`

Moves focus to the previous focusable or tabbable element in the focus scope.

`focusFirst( (opts?: [FocusManagerOptions](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/focus/src/FocusScope.tsx:FocusManagerOptions) )): [FocusableElement](https://developer.mozilla.org/en-US/docs/Web/API/Element) | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)`

Moves focus to the first focusable or tabbable element in the focus scope.

`focusLast( (opts?: [FocusManagerOptions](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/focus/src/FocusScope.tsx:FocusManagerOptions) )): [FocusableElement](https://developer.mozilla.org/en-US/docs/Web/API/Element) | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)`

Moves focus to the last focusable or tabbable element in the focus scope.

* * *

A basic example of a focus scope that contains focus within it is below. Clicking the "Open" button mounts a FocusScope, which auto focuses the first input inside it. Once open, you can press the Tab key to move within the scope, but focus is contained inside. Clicking the "Close" button unmounts the focus scope, which restores focus back to the button.

For a full example of building a modal dialog, see [useDialog](https://react-spectrum.adobe.com/react-aria/useDialog.html).

```
import {FocusScope} from 'react-aria';

function Example() {
  let [isOpen, setOpen] = React.useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)}>Open</button>
      {isOpen &&
        (
          <FocusScope contain restoreFocus autoFocus>
            <label htmlFor="first-input">First Input</label>
            <input id="first-input" />
            <label htmlFor="second-input">Second Input</label>
            <input id="second-input" />
            <button onClick={() => setOpen(false)}>Close</button>
          </FocusScope>
        )}
    </>
  );
}
```

```
import {FocusScope} from 'react-aria';

function Example() {
  let [isOpen, setOpen] = React.useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)}>Open</button>
      {isOpen &&
        (
          <FocusScope contain restoreFocus autoFocus>
            <label htmlFor="first-input">First Input</label>
            <input id="first-input" />
            <label htmlFor="second-input">
              Second Input
            </label>
            <input id="second-input" />
            <button onClick={() => setOpen(false)}>
              Close
            </button>
          </FocusScope>
        )}
    </>
  );
}
```

```
import {FocusScope} from 'react-aria';

function Example() {
  let [isOpen, setOpen] =
    React.useState(
      false
    );
  return (
    <>
      <button
        onClick={() =>
          setOpen(true)}
      >
        Open
      </button>
      {isOpen &&
        (
          <FocusScope
            contain
            restoreFocus
            autoFocus
          >
            <label htmlFor="first-input">
              First Input
            </label>
            <input id="first-input" />
            <label htmlFor="second-input">
              Second
              Input
            </label>
            <input id="second-input" />
            <button
              onClick={() =>
                setOpen(
                  false
                )}
            >
              Close
            </button>
          </FocusScope>
        )}
    </>
  );
}
```

* * *

This example shows how to use `useFocusManager` to programmatically move focus within a `FocusScope`. It implements a basic toolbar component, which allows using the left and right arrow keys to move focus to the previous and next buttons. The `wrap` option is used to make focus wrap around when it reaches the first or last button.

```
import {useFocusManager} from 'react-aria';

function Toolbar(props) {
  return (
    <div role="toolbar">
      <FocusScope>
        {props.children}
      </FocusScope>
    </div>
  );
}

function ToolbarButton(props) {
  let focusManager = useFocusManager();
  let onKeyDown = (e) => {
    switch (e.key) {
      case 'ArrowRight':
        focusManager.focusNext({ wrap: true });
        break;
      case 'ArrowLeft':
        focusManager.focusPrevious({ wrap: true });
        break;
    }
  };

  return (
    <button
      onKeyDown={onKeyDown}
    >
      {props.children}
    </button>
  );
}

<Toolbar>
  <ToolbarButton>Cut</ToolbarButton>
  <ToolbarButton>Copy</ToolbarButton>
  <ToolbarButton>Paste</ToolbarButton>
</Toolbar>
```

```
import {useFocusManager} from 'react-aria';

function Toolbar(props) {
  return (
    <div role="toolbar">
      <FocusScope>
        {props.children}
      </FocusScope>
    </div>
  );
}

function ToolbarButton(props) {
  let focusManager = useFocusManager();
  let onKeyDown = (e) => {
    switch (e.key) {
      case 'ArrowRight':
        focusManager.focusNext({ wrap: true });
        break;
      case 'ArrowLeft':
        focusManager.focusPrevious({ wrap: true });
        break;
    }
  };

  return (
    <button
      onKeyDown={onKeyDown}
    >
      {props.children}
    </button>
  );
}

<Toolbar>
  <ToolbarButton>Cut</ToolbarButton>
  <ToolbarButton>Copy</ToolbarButton>
  <ToolbarButton>Paste</ToolbarButton>
</Toolbar>
```

```
import {useFocusManager} from 'react-aria';

function Toolbar(props) {
  return (
    <div role="toolbar">
      <FocusScope>
        {props.children}
      </FocusScope>
    </div>
  );
}

function ToolbarButton(
  props
) {
  let focusManager =
    useFocusManager();
  let onKeyDown = (
    e
  ) => {
    switch (e.key) {
      case 'ArrowRight':
        focusManager
          .focusNext({
            wrap: true
          });
        break;
      case 'ArrowLeft':
        focusManager
          .focusPrevious(
            {
              wrap: true
            }
          );
        break;
    }
  };

  return (
    <button
      onKeyDown={onKeyDown}
    >
      {props.children}
    </button>
  );
}

<Toolbar>
  <ToolbarButton>
    Cut
  </ToolbarButton>
  <ToolbarButton>
    Copy
  </ToolbarButton>
  <ToolbarButton>
    Paste
  </ToolbarButton>
</Toolbar>
```