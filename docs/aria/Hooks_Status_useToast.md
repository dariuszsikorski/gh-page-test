# useToast

**Source**: [https://react-spectrum.adobe.com/react-aria/useToast.html](https://react-spectrum.adobe.com/react-aria/useToast.html)

> Documentation for useToast in the React Aria package.

---

Provides the behavior and accessibility implementation for a toast component. Toasts display brief, temporary notifications of actions, errors, or other events in an application.

* * *

`useToastRegion<T>( props: [AriaToastRegionProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/toast/src/useToastRegion.ts:AriaToastRegionProps), state: [ToastState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/toast/src/useToastState.ts:ToastState)<T>, ref: [RefObject](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/refs.d.ts:RefObject)<[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element) |  | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)> ): [ToastRegionAria](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/toast/src/useToastRegion.ts:ToastRegionAria)` `useToast<T>( props: [AriaToastProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/toast/src/useToast.ts:AriaToastProps)<T>, state: [ToastState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/toast/src/useToastState.ts:ToastState)<T>, ref: [RefObject](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/refs.d.ts:RefObject)<[FocusableElement](https://developer.mozilla.org/en-US/docs/Web/API/Element) |  | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)> ): [ToastAria](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/toast/src/useToast.ts:ToastAria)`

* * *

There is no built in way to display toast notifications in HTML. `[useToastRegion](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/toast/src/useToastRegion.ts:useToastRegion)` and `[useToast](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/toast/src/useToast.ts:useToast)` help achieve accessible toasts that can be styled as needed.

-   **Accessible** – Toasts follow the [ARIA alertdialog pattern](https://www.w3.org/WAI/ARIA/apg/patterns/alertdialog/). They are rendered in a [landmark region](https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/), which keyboard and screen reader users can easily jump to when an alert is announced.
-   **Focus management** – When a toast unmounts, focus is moved to the next toast if any. Otherwise, focus is restored to where it was before navigating to the toast region. Tabbing through the Toast region will move from newest to oldest.

* * *

Analysis completeTitleClose buttonToastRegion

A toast region is an [ARIA landmark region](https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/) labeled "Notifications" by default. A toast region contains one or more visible toasts, in chronological order. When the limit is reached, additional toasts are queued until the user dismisses one. Each toast is a non-modal ARIA [alertdialog](https://www.w3.org/WAI/ARIA/apg/patterns/alertdialog/), containing the content of the notification and a close button.

Landmark regions including the toast container can be navigated using the keyboard by pressing the F6 key to move forward, and the Shift + F6 key to move backward. This provides an easy way for keyboard users to jump to the toasts from anywhere in the app. When the last toast is closed, keyboard focus is restored.

`useToastRegion` returns props that you should spread onto the toast container element:

Name

Type

Description

`regionProps`

`[DOMAttributes](https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes)`

Props for the landmark region element.

`useToast` returns props that you should spread onto an individual toast and its child elements:

Name

Type

Description

`toastProps`

`[DOMAttributes](https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes)`

Props for the toast container, non-modal dialog element.

`contentProps`

`[DOMAttributes](https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes)`

Props for the toast content alert message.

`titleProps`

`[DOMAttributes](https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes)`

Props for the toast title element.

`descriptionProps`

`[DOMAttributes](https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes)`

Props for the toast description element, if any.

`closeButtonProps`

`[AriaButtonProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/button/src/index.d.ts:AriaButtonProps)`

Props for the toast close button.

* * *

Toasts consist of three components. The first is a `ToastProvider` component which will manage the state for the toast queue with the `[useToastState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/toast/src/useToastState.ts:useToastState)` hook. Alternatively, you could use a global toast queue ([see below](#global-toast-queue)).

```
import {useToastState} from 'react-stately';

function ToastProvider({ children, ...props }) {
  let state = useToastState({
    maxVisibleToasts: 5
  });

  return (
    <>
      {children(state)}
      {state.visibleToasts.length > 0 && (
        <ToastRegion {...props} state={state} />
      )}
    </>
  );
}
```

```
import {useToastState} from 'react-stately';

function ToastProvider({ children, ...props }) {
  let state = useToastState({
    maxVisibleToasts: 5
  });

  return (
    <>
      {children(state)}
      {state.visibleToasts.length > 0 && (
        <ToastRegion {...props} state={state} />
      )}
    </>
  );
}
```

```
import {useToastState} from 'react-stately';

function ToastProvider(
  { children, ...props }
) {
  let state =
    useToastState({
      maxVisibleToasts: 5
    });

  return (
    <>
      {children(state)}
      {state
            .visibleToasts
            .length >
          0 && (
        <ToastRegion
          {...props}
          state={state}
        />
      )}
    </>
  );
}
```

The `ToastRegion` component will be rendered when there are toasts to display. It uses the `[useToastRegion](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/toast/src/useToastRegion.ts:useToastRegion)` hook to create a landmark region, allowing keyboard and screen reader users to easily navigate to it.

```
import type {ToastState} from 'react-stately';
import type {AriaToastRegionProps} from 'react-aria';
import {useToastRegion} from 'react-aria';

interface ToastRegionProps<T> extends AriaToastRegionProps {
  state: ToastState<T>;
}

function ToastRegion<T extends React.ReactNode>(
  { state, ...props }: ToastRegionProps<T>
) {
  let ref = React.useRef(null);
  let { regionProps } = useToastRegion(props, state, ref);

  return (
    <div {...regionProps} ref={ref} className="toast-region">
      {state.visibleToasts.map((toast) => (
        <Toast key={toast.key} toast={toast} state={state} />
      ))}
    </div>
  );
}
```

```
import type {ToastState} from 'react-stately';
import type {AriaToastRegionProps} from 'react-aria';
import {useToastRegion} from 'react-aria';

interface ToastRegionProps<T> extends AriaToastRegionProps {
  state: ToastState<T>;
}

function ToastRegion<T extends React.ReactNode>(
  { state, ...props }: ToastRegionProps<T>
) {
  let ref = React.useRef(null);
  let { regionProps } = useToastRegion(props, state, ref);

  return (
    <div
      {...regionProps}
      ref={ref}
      className="toast-region"
    >
      {state.visibleToasts.map((toast) => (
        <Toast
          key={toast.key}
          toast={toast}
          state={state}
        />
      ))}
    </div>
  );
}
```

```
import type {ToastState} from 'react-stately';
import type {AriaToastRegionProps} from 'react-aria';
import {useToastRegion} from 'react-aria';

interface ToastRegionProps<
  T
> extends
  AriaToastRegionProps {
  state: ToastState<T>;
}

function ToastRegion<
  T
    extends React.ReactNode
>(
  { state, ...props }:
    ToastRegionProps<T>
) {
  let ref = React.useRef(
    null
  );
  let { regionProps } =
    useToastRegion(
      props,
      state,
      ref
    );

  return (
    <div
      {...regionProps}
      ref={ref}
      className="toast-region"
    >
      {state
        .visibleToasts
        .map((toast) => (
          <Toast
            key={toast
              .key}
            toast={toast}
            state={state}
          />
        ))}
    </div>
  );
}
```

Finally, we need the `Toast` component to render an individual toast within a `ToastRegion`, built with `[useToast](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/toast/src/useToast.ts:useToast)`.

```
import type {AriaToastProps} from 'react-aria';
import {useToast} from 'react-aria';

// Reuse the Button from your component library. See below for details.
import {Button} from 'your-component-library';

interface ToastProps<T> extends AriaToastProps<T> {
  state: ToastState<T>;
}

function Toast<T extends React.ReactNode>({ state, ...props }: ToastProps<T>) {
  let ref = React.useRef(null);
  let { toastProps, contentProps, titleProps, closeButtonProps } = useToast(
    props,
    state,
    ref
  );

  return (
    <div {...toastProps} ref={ref} className="toast">
      <div {...contentProps}>
        <div {...titleProps}>{props.toast.content}</div>
      </div>
      <Button {...closeButtonProps}>x</Button>
    </div>
  );
}
```

```
import type {AriaToastProps} from 'react-aria';
import {useToast} from 'react-aria';

// Reuse the Button from your component library. See below for details.
import {Button} from 'your-component-library';

interface ToastProps<T> extends AriaToastProps<T> {
  state: ToastState<T>;
}

function Toast<T extends React.ReactNode>(
  { state, ...props }: ToastProps<T>
) {
  let ref = React.useRef(null);
  let {
    toastProps,
    contentProps,
    titleProps,
    closeButtonProps
  } = useToast(props, state, ref);

  return (
    <div {...toastProps} ref={ref} className="toast">
      <div {...contentProps}>
        <div {...titleProps}>{props.toast.content}</div>
      </div>
      <Button {...closeButtonProps}>x</Button>
    </div>
  );
}
```

```
import type {AriaToastProps} from 'react-aria';
import {useToast} from 'react-aria';

// Reuse the Button from your component library. See below for details.
import {Button} from 'your-component-library';

interface ToastProps<T>
  extends
    AriaToastProps<T> {
  state: ToastState<T>;
}

function Toast<
  T
    extends React.ReactNode
>(
  { state, ...props }:
    ToastProps<T>
) {
  let ref = React.useRef(
    null
  );
  let {
    toastProps,
    contentProps,
    titleProps,
    closeButtonProps
  } = useToast(
    props,
    state,
    ref
  );

  return (
    <div
      {...toastProps}
      ref={ref}
      className="toast"
    >
      <div
        {...contentProps}
      >
        <div
          {...titleProps}
        >
          {props.toast
            .content}
        </div>
      </div>
      <Button
        {...closeButtonProps}
      >
        x
      </Button>
    </div>
  );
}
```

```
<ToastProvider>
  {state => (
    <Button onPress={() => state.add('Toast is done!')}>Show toast</Button>
  )}
</ToastProvider>
```

```
<ToastProvider>
  {(state) => (
    <Button onPress={() => state.add('Toast is done!')}>
      Show toast
    </Button>
  )}
</ToastProvider>
```

```
<ToastProvider>
  {(state) => (
    <Button
      onPress={() =>
        state.add(
          'Toast is done!'
        )}
    >
      Show toast
    </Button>
  )}
</ToastProvider>
```

Show CSS

```
.toast-region {
  position: fixed;
  bottom: 16px;
  right: 16px;
  display: flex;
  flex-direction: column-reverse;
  gap: 8px;
}

.toast {
  display: flex;
  align-items: center;
  gap: 16px;
  background: slateblue;
  color: white;
  padding: 12px 16px;
  border-radius: 8px;
}

.toast button {
  background: none;
  border: none;
  appearance: none;
  border-radius: 50%;
  height: 32px;
  width: 32px;
  font-size: 16px;
  border: 1px solid white;
  color: white;
  padding: 0;
}

.toast button:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px slateblue, 0 0 0 4px white;
}

.toast button:active {
  background: rgba(255, 255, 255, 0.2);
}
```

```
.toast-region {
  position: fixed;
  bottom: 16px;
  right: 16px;
  display: flex;
  flex-direction: column-reverse;
  gap: 8px;
}

.toast {
  display: flex;
  align-items: center;
  gap: 16px;
  background: slateblue;
  color: white;
  padding: 12px 16px;
  border-radius: 8px;
}

.toast button {
  background: none;
  border: none;
  appearance: none;
  border-radius: 50%;
  height: 32px;
  width: 32px;
  font-size: 16px;
  border: 1px solid white;
  color: white;
  padding: 0;
}

.toast button:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px slateblue, 0 0 0 4px white;
}

.toast button:active {
  background: rgba(255, 255, 255, 0.2);
}
```

```
.toast-region {
  position: fixed;
  bottom: 16px;
  right: 16px;
  display: flex;
  flex-direction: column-reverse;
  gap: 8px;
}

.toast {
  display: flex;
  align-items: center;
  gap: 16px;
  background: slateblue;
  color: white;
  padding: 12px 16px;
  border-radius: 8px;
}

.toast button {
  background: none;
  border: none;
  appearance: none;
  border-radius: 50%;
  height: 32px;
  width: 32px;
  font-size: 16px;
  border: 1px solid white;
  color: white;
  padding: 0;
}

.toast button:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px slateblue, 0 0 0 4px white;
}

.toast button:active {
  background: rgba(255, 255, 255, 0.2);
}
```

The `Button` component is used in the above example to close a toast. It is built using the [useButton](https://react-spectrum.adobe.com/react-aria/useButton.html) hook, and can be shared with many other components.

Show code

```
import {useButton} from 'react-aria';

function Button(props) {
  let ref = React.useRef(null);
  let { buttonProps } = useButton(props, ref);
  return <button {...buttonProps} ref={ref}>{props.children}</button>;
}
```

```
import {useButton} from 'react-aria';

function Button(props) {
  let ref = React.useRef(null);
  let { buttonProps } = useButton(props, ref);
  return (
    <button {...buttonProps} ref={ref}>
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
    >
      {props.children}
    </button>
  );
}
```

* * *

The following examples show how to use the `ToastProvider` component created in the above example.

Toasts support a `timeout` option to automatically hide them after a certain amount of time. For accessibility, toasts should have a minimum timeout of 5 seconds to give users enough time to read them. If a toast includes action buttons or other interactive elements it should not auto dismiss. In addition, timers will automatically pause when the user focuses or hovers over a toast.

Be sure only to automatically dismiss toasts when the information is not important, or may be found elsewhere. Some users may require additional time to read a toast message, and screen zoom users may miss toasts entirely.

```
<ToastProvider>
  {state => (
    <Button onPress={() => state.add('Toast still toasting!', {timeout: 5000})}>      Show toast
    </Button>
  )}
</ToastProvider>
```

```
<ToastProvider>
  {(state) => (
    <Button
      onPress={() =>
        state.add('Toast still toasting!', {
          timeout: 5000
        })}
    >      Show toast
    </Button>
  )}
</ToastProvider>
```

```
<ToastProvider>
  {(state) => (
    <Button
      onPress={() =>
        state.add(
          'Toast still toasting!',
          {
            timeout:
              5000
          }
        )}
    >      Show toast
    </Button>
  )}
</ToastProvider>
```

Toasts may be programmatically dismissed if they become irrelevant before the user manually closes them. `state.add` returns a key for the toast which may be passed to `state.close` to dismiss the toast.

```
function Example() {
  let [toastKey, setToastKey] = React.useState(null);

  return (
    <ToastProvider>
      {(state) => (
        <Button
          onPress={() => {
            if (!toastKey) {
              setToastKey(
                state.add('Unable to save', {
                  onClose: () => setToastKey(null)
                })
              );            } else {
              state.close(toastKey);            }
          }}
        >
          {toastKey ? 'Hide' : 'Show'} Toast
        </Button>
      )}
    </ToastProvider>
  );
}
```

```
function Example() {
  let [toastKey, setToastKey] = React.useState(null);

  return (
    <ToastProvider>
      {(state) => (
        <Button
          onPress={() => {
            if (!toastKey) {
              setToastKey(
                state.add('Unable to save', {
                  onClose: () => setToastKey(null)
                })
              );            } else {
              state.close(toastKey);            }
          }}
        >
          {toastKey ? 'Hide' : 'Show'} Toast
        </Button>
      )}
    </ToastProvider>
  );
}
```

```
function Example() {
  let [
    toastKey,
    setToastKey
  ] = React.useState(
    null
  );

  return (
    <ToastProvider>
      {(state) => (
        <Button
          onPress={() => {
            if (
              !toastKey
            ) {
              setToastKey(
                state
                  .add(
                    'Unable to save',
                    {
                      onClose:
                        () =>
                          setToastKey(
                            null
                          )
                    }
                  )
              );            } else {
              state
                .close(
                  toastKey
                );            }
          }}
        >
          {toastKey
            ? 'Hide'
            : 'Show'}
          {' '}
          Toast
        </Button>
      )}
    </ToastProvider>
  );
}
```

* * *

In the above examples, each `ToastProvider` has a separate queue. This setup is simple, and fine for most cases where you can wrap the entire app in a single `ToastProvider`. However, in more complex situations, you may want to keep the toast queue outside the React tree so that toasts can be queued from anywhere. This can be done by creating your own `[ToastQueue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/toast/src/useToastState.ts:ToastQueue)` and subscribing to it using the `[useToastQueue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/toast/src/useToastState.ts:useToastQueue)` hook rather than `useToastState`.

```
import {ToastQueue, useToastQueue} from 'react-stately';
import {createPortal} from 'react-dom';

// Create a global toast queue.
const toastQueue = new ToastQueue({
  maxVisibleToasts: 5
});
function GlobalToastRegion(props) {
  // Subscribe to it.
  let state = useToastQueue(toastQueue);
  // Render toast region.
  return state.visibleToasts.length > 0
    ? createPortal(<ToastRegion {...props} state={state} />, document.body)
    : null;
}

// Render it somewhere in your app.
<GlobalToastRegion />
```

```
import {ToastQueue, useToastQueue} from 'react-stately';
import {createPortal} from 'react-dom';

// Create a global toast queue.
const toastQueue = new ToastQueue({
  maxVisibleToasts: 5
});
function GlobalToastRegion(props) {
  // Subscribe to it.
  let state = useToastQueue(toastQueue);
  // Render toast region.
  return state.visibleToasts.length > 0
    ? createPortal(
      <ToastRegion {...props} state={state} />,
      document.body
    )
    : null;
}

// Render it somewhere in your app.
<GlobalToastRegion />
```

```
import {
  ToastQueue,
  useToastQueue
} from 'react-stately';
import {createPortal} from 'react-dom';

// Create a global toast queue.
const toastQueue =
  new ToastQueue({
    maxVisibleToasts: 5
  });
function GlobalToastRegion(
  props
) {
  // Subscribe to it.
  let state =
    useToastQueue(
      toastQueue
    );
  // Render toast region.
  return state
      .visibleToasts
      .length > 0
    ? createPortal(
      <ToastRegion
        {...props}
        state={state}
      />,
      document.body
    )
    : null;
}

// Render it somewhere in your app.
<GlobalToastRegion />
```

Now you can queue a toast from anywhere:

```
<Button onPress={() => toastQueue.add('Toast is done!')}>Show toast</Button>
```

```
<Button onPress={() => toastQueue.add('Toast is done!')}>
  Show toast
</Button>
```

```
<Button
  onPress={() =>
    toastQueue.add(
      'Toast is done!'
    )}
>
  Show toast
</Button>
```

A `ToastQueue` and `useToastState` use a generic type to represent toast content. The examples so far have used strings, but you can type this however you want to enable passing custom objects or options. This example uses a custom object to support toasts with both a title and description.

```
import type {QueuedToast} from 'react-stately';

interface MyToast {
  title: string;
  description: string;
}
function ToastProvider() {
  let state = useToastState<MyToast>();
  // ...
}

interface ToastProps {
  toast: QueuedToast<MyToast>;}

function Toast(props: ToastProps) {
  // ...

  let { toastProps, titleProps, descriptionProps, closeButtonProps } = useToast(
    props,
    state,
    ref
  );

  return (
    <div {...toastProps} ref={ref} className="toast">
      <div>
        <div {...titleProps}>{props.toast.content.title}</div>
        <div {...descriptionProps}>{props.toast.content.description}</div>      </div>
      <Button {...closeButtonProps}>x</Button>
    </div>
  );
}

// Queuing a toast
state.add({ title: 'Success!', description: 'Toast is done.' });
```

```
import type {QueuedToast} from 'react-stately';

interface MyToast {
  title: string;
  description: string;
}
function ToastProvider() {
  let state = useToastState<MyToast>();
  // ...
}

interface ToastProps {
  toast: QueuedToast<MyToast>;}

function Toast(props: ToastProps) {
  // ...

  let {
    toastProps,
    titleProps,
    descriptionProps,
    closeButtonProps
  } = useToast(props, state, ref);

  return (
    <div {...toastProps} ref={ref} className="toast">
      <div>
        <div {...titleProps}>
          {props.toast.content.title}
        </div>
        <div {...descriptionProps}>
          {props.toast.content.description}
        </div>      </div>
      <Button {...closeButtonProps}>x</Button>
    </div>
  );
}

// Queuing a toast
state.add({
  title: 'Success!',
  description: 'Toast is done.'
});
```

```
import type {QueuedToast} from 'react-stately';

interface MyToast {
  title: string;
  description: string;
}
function ToastProvider() {
  let state =
    useToastState<
      MyToast
    >();
  // ...
}

interface ToastProps {
  toast: QueuedToast<
    MyToast
  >;}

function Toast(
  props: ToastProps
) {
  // ...

  let {
    toastProps,
    titleProps,
    descriptionProps,
    closeButtonProps
  } = useToast(
    props,
    state,
    ref
  );

  return (
    <div
      {...toastProps}
      ref={ref}
      className="toast"
    >
      <div>
        <div
          {...titleProps}
        >
          {props.toast
            .content
            .title}
        </div>
        <div
          {...descriptionProps}
        >
          {props.toast
            .content
            .description}
        </div>      </div>
      <Button
        {...closeButtonProps}
      >
        x
      </Button>
    </div>
  );
}

// Queuing a toast
state.add({
  title: 'Success!',
  description:
    'Toast is done.'
});
```