# Toast

**Source**: [https://react-spectrum.adobe.com/react-aria/Toast.html](https://react-spectrum.adobe.com/react-aria/Toast.html)

> Documentation for Toast in the React Aria package.

---

alpha

A Toast displays a brief, temporary notification of actions, errors, or other events in an application.

* * *

First, render a `ToastRegion` in the root of your app.

```
import {Button, Text, UNSTABLE_Toast as Toast, UNSTABLE_ToastContent as ToastContent, UNSTABLE_ToastQueue as ToastQueue, UNSTABLE_ToastRegion as ToastRegion} from 'react-aria-components';
import {X} from 'lucide-react';

// Define the type for your toast content.
interface MyToastContent {
  title: string;
  description?: string;
}

// Create a global ToastQueue.
export const queue = new ToastQueue<MyToastContent>();

// Render a <ToastRegion> in the root of your app.
export function App() {
  return (
    <>
      <ToastRegion queue={queue}>
        {({ toast }) => (
          <Toast toast={toast}>
            <ToastContent>
              <Text slot="title">{toast.content.title}</Text>
              <Text slot="description">{toast.content.description}</Text>
            </ToastContent>
            <Button slot="close">
              <X size={16} />
            </Button>
          </Toast>
        )}
      </ToastRegion>
      {/* Your app here */}
    </>
  );
}
```

```
import {
  Button,
  Text,
  UNSTABLE_Toast as Toast,
  UNSTABLE_ToastContent as ToastContent,
  UNSTABLE_ToastQueue as ToastQueue,
  UNSTABLE_ToastRegion as ToastRegion
} from 'react-aria-components';
import {X} from 'lucide-react';

// Define the type for your toast content.
interface MyToastContent {
  title: string;
  description?: string;
}

// Create a global ToastQueue.
export const queue = new ToastQueue<MyToastContent>();

// Render a <ToastRegion> in the root of your app.
export function App() {
  return (
    <>
      <ToastRegion queue={queue}>
        {({ toast }) => (
          <Toast toast={toast}>
            <ToastContent>
              <Text slot="title">
                {toast.content.title}
              </Text>
              <Text slot="description">
                {toast.content.description}
              </Text>
            </ToastContent>
            <Button slot="close">
              <X size={16} />
            </Button>
          </Toast>
        )}
      </ToastRegion>
      {/* Your app here */}
    </>
  );
}
```

```
import {
  Button,
  Text,
  UNSTABLE_Toast
    as Toast,
  UNSTABLE_ToastContent
    as ToastContent,
  UNSTABLE_ToastQueue
    as ToastQueue,
  UNSTABLE_ToastRegion
    as ToastRegion
} from 'react-aria-components';
import {X} from 'lucide-react';

// Define the type for your toast content.
interface MyToastContent {
  title: string;
  description?: string;
}

// Create a global ToastQueue.
export const queue =
  new ToastQueue<
    MyToastContent
  >();

// Render a <ToastRegion> in the root of your app.
export function App() {
  return (
    <>
      <ToastRegion
        queue={queue}
      >
        {({ toast }) => (
          <Toast
            toast={toast}
          >
            <ToastContent>
              <Text slot="title">
                {toast
                  .content
                  .title}
              </Text>
              <Text slot="description">
                {toast
                  .content
                  .description}
              </Text>
            </ToastContent>
            <Button slot="close">
              <X
                size={16}
              />
            </Button>
          </Toast>
        )}
      </ToastRegion>
      {/* Your app here */}
    </>
  );
}
```

Then, you can trigger a toast from anywhere using the exported `queue`.

```
<Button
  onPress={() => queue.add({
    title: 'Toast complete!',
    description: 'Great success.'
  })}>
  Toast
</Button>
```

```
<Button
  onPress={() => queue.add({
    title: 'Toast complete!',
    description: 'Great success.'
  })}>
  Toast
</Button>
```

```
<Button
  onPress={() =>
    queue.add({
      title:
        'Toast complete!',
      description:
        'Great success.'
    })}
>
  Toast
</Button>
```

Show CSS

```
@import "@react-aria/example-theme";

.react-aria-ToastRegion {
  position: fixed;
  bottom: 16px;
  right: 16px;
  display: flex;
  flex-direction: column-reverse;
  gap: 8px;
  border-radius: 8px;
  outline: none;

  &[data-focus-visible] {
    outline: 2px solid slateblue;
    outline-offset: 2px;
  }
}

.react-aria-Toast {
  display: flex;
  align-items: center;
  gap: 16px;
  background: slateblue;
  color: white;
  padding: 12px 16px;
  border-radius: 8px;
  outline: none;

  &[data-focus-visible] {
    outline: 2px solid slateblue;
    outline-offset: 2px;
  }

  .react-aria-ToastContent {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    min-width: 0px;

    [slot=title] {
      font-weight: bold;
    }
  }

  .react-aria-Button[slot=close] {
    flex: 0 0 auto;
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
    outline: none;

    &[data-focus-visible] {
      box-shadow: 0 0 0 2px slateblue, 0 0 0 4px white;
    }

    &[data-pressed] {
      background: rgba(255, 255, 255, 0.2);
    }
  }
}
```

```
@import "@react-aria/example-theme";

.react-aria-ToastRegion {
  position: fixed;
  bottom: 16px;
  right: 16px;
  display: flex;
  flex-direction: column-reverse;
  gap: 8px;
  border-radius: 8px;
  outline: none;

  &[data-focus-visible] {
    outline: 2px solid slateblue;
    outline-offset: 2px;
  }
}

.react-aria-Toast {
  display: flex;
  align-items: center;
  gap: 16px;
  background: slateblue;
  color: white;
  padding: 12px 16px;
  border-radius: 8px;
  outline: none;

  &[data-focus-visible] {
    outline: 2px solid slateblue;
    outline-offset: 2px;
  }

  .react-aria-ToastContent {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    min-width: 0px;

    [slot=title] {
      font-weight: bold;
    }
  }

  .react-aria-Button[slot=close] {
    flex: 0 0 auto;
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
    outline: none;

    &[data-focus-visible] {
      box-shadow: 0 0 0 2px slateblue, 0 0 0 4px white;
    }

    &[data-pressed] {
      background: rgba(255, 255, 255, 0.2);
    }
  }
}
```

```
@import "@react-aria/example-theme";

.react-aria-ToastRegion {
  position: fixed;
  bottom: 16px;
  right: 16px;
  display: flex;
  flex-direction: column-reverse;
  gap: 8px;
  border-radius: 8px;
  outline: none;

  &[data-focus-visible] {
    outline: 2px solid slateblue;
    outline-offset: 2px;
  }
}

.react-aria-Toast {
  display: flex;
  align-items: center;
  gap: 16px;
  background: slateblue;
  color: white;
  padding: 12px 16px;
  border-radius: 8px;
  outline: none;

  &[data-focus-visible] {
    outline: 2px solid slateblue;
    outline-offset: 2px;
  }

  .react-aria-ToastContent {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    min-width: 0px;

    [slot=title] {
      font-weight: bold;
    }
  }

  .react-aria-Button[slot=close] {
    flex: 0 0 auto;
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
    outline: none;

    &[data-focus-visible] {
      box-shadow: 0 0 0 2px slateblue, 0 0 0 4px white;
    }

    &[data-pressed] {
      background: rgba(255, 255, 255, 0.2);
    }
  }
}
```

* * *

There is no built in way to display toast notifications in HTML. `<ToastRegion>` and `<Toast>` help achieve accessible toasts that can be styled as needed.

-   **Accessible** – Toasts follow the [ARIA alertdialog pattern](https://www.w3.org/WAI/ARIA/apg/patterns/alertdialog/). They are rendered in a [landmark region](https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/), which keyboard and screen reader users can easily jump to when an alert is announced.
-   **Focus management** – When a toast unmounts, focus is moved to the next toast if any. Otherwise, focus is restored to where it was before navigating to the toast region.

* * *

Analysis completeTitleClose buttonToastRegion

A `<ToastRegion>` is an [ARIA landmark region](https://www.w3.org/WAI/ARIA/apg/practices/landmark-regions/) labeled "Notifications" by default. A `<ToastRegion>` accepts a function to render one or more visible toasts, in chronological order. When the limit is reached, additional toasts are queued until the user dismisses one. Each `<Toast>` is a non-modal ARIA [alertdialog](https://www.w3.org/WAI/ARIA/apg/patterns/alertdialog/), containing the content of the notification and a close button. The toast's content gets announced by screen readers when the toast appears, so it is recommended to render the close button as a sibling of `<ToastContent>` instead of inside it, but this is not a requirement.

Landmark regions including the toast container can be navigated using the keyboard by pressing the F6 key to move forward, and the Shift + F6 key to move backward. This provides an easy way for keyboard users to jump to the toasts from anywhere in the app. When the last toast is closed, keyboard focus is restored.

```
import {Button, Text, Toast, ToastContent, ToastRegion} from 'react-aria-components';

<ToastRegion>
  {({ toast }) => (
    <Toast toast={toast}>
      <ToastContent>
        <Text slot="title" />
        <Text slot="description" />
      </ToastContent>
      <Button slot="close" />
    </Toast>
  )}
</ToastRegion>
```

```
import {
  Button,
  Text,
  Toast,
  ToastContent,
  ToastRegion
} from 'react-aria-components';

<ToastRegion>
  {({ toast }) => (
    <Toast toast={toast}>
      <ToastContent>
        <Text slot="title" />
        <Text slot="description" />
      </ToastContent>
      <Button slot="close" />
    </Toast>
  )}
</ToastRegion>
```

```
import {
  Button,
  Text,
  Toast,
  ToastContent,
  ToastRegion
} from 'react-aria-components';

<ToastRegion>
  {({ toast }) => (
    <Toast
      toast={toast}
    >
      <ToastContent>
        <Text slot="title" />
        <Text slot="description" />
      </ToastContent>
      <Button slot="close" />
    </Toast>
  )}
</ToastRegion>
```

* * *

Toasts support a `timeout` option to automatically hide them after a certain amount of time. For accessibility, toasts should have a minimum timeout of 5 seconds to give users enough time to read them. If a toast includes action buttons or other interactive elements it should not auto dismiss. In addition, timers will automatically pause when the user focuses or hovers over a toast.

Be sure only to automatically dismiss toasts when the information is not important, or may be found elsewhere. Some users may require additional time to read a toast message, and screen zoom users may miss toasts entirely.

```
<Button
  onPress={() => queue.add({title: 'Toast is done!'}, {timeout: 5000})}>
  Show toast
</Button>
```

```
<Button
  onPress={() =>
    queue.add({ title: 'Toast is done!' }, {
      timeout: 5000
    })}>
  Show toast
</Button>
```

```
<Button
  onPress={() =>
    queue.add({
      title:
        'Toast is done!'
    }, {
      timeout: 5000
    })}>
  Show toast
</Button>
```

* * *

Toasts may be programmatically dismissed if they become irrelevant before the user manually closes them. `queue.add` returns a key for the toast which may be passed to `queue.close` to dismiss the toast.

```
function Example() {
  let [toastKey, setToastKey] = React.useState(null);

  return (
    <Button
      onPress={() => {
        if (!toastKey) {
          setToastKey(queue.add({ title: 'Unable to save' }, {
            onClose: () => setToastKey(null)
          }));        } else {
          queue.close(toastKey);        }
      }}
    >
      {toastKey ? 'Hide' : 'Show'} Toast
    </Button>
  );
}
```

```
function Example() {
  let [toastKey, setToastKey] = React.useState(null);

  return (
    <Button
      onPress={() => {
        if (!toastKey) {
          setToastKey(
            queue.add({ title: 'Unable to save' }, {
              onClose: () => setToastKey(null)
            })
          );        } else {
          queue.close(toastKey);        }
      }}
    >
      {toastKey ? 'Hide' : 'Show'} Toast
    </Button>
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
    <Button
      onPress={() => {
        if (!toastKey) {
          setToastKey(
            queue.add({
              title:
                'Unable to save'
            }, {
              onClose:
                () =>
                  setToastKey(
                    null
                  )
            })
          );        } else {
          queue.close(
            toastKey
          );        }
      }}
    >
      {toastKey
        ? 'Hide'
        : 'Show'} Toast
    </Button>
  );
}
```

* * *

Toast entry and exit animations can be done using third party animation libraries like [Motion](https://motion.dev/), or using native [CSS view transitions](https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API).

This example shows how to use the `wrapUpdate` option of `ToastQueue` to wrap state updates in a CSS view transition. The `toast.key` can be used to assign a `viewTransitionName` to each `Toast`.

```
import {flushSync} from 'react-dom';

const queue = new ToastQueue<MyToastContent>({
  // Wrap state updates in a CSS view transition.
  wrapUpdate(fn) {
    if ('startViewTransition' in document) {
      document.startViewTransition(() => {
        flushSync(fn);
      });
    } else {
      fn();
    }
  }});

<ToastRegion queue={queue}>
  {({toast}) => (
    <Toast
      style={{viewTransitionName: toast.key}}      toast={toast}>
      <ToastContent>
        <Text slot="title">{toast.content.title}</Text>
        <Text slot="description">{toast.content.description}</Text>
      </ToastContent>
      <Button slot="close"><X size={16} /></Button>
    </Toast>
  )}
</ToastRegion>
<Button onPress={() => queue.add({title: 'Toasted!'})}>Toast</Button>
```

```
import {flushSync} from 'react-dom';

const queue = new ToastQueue<MyToastContent>({
  // Wrap state updates in a CSS view transition.
  wrapUpdate(fn) {
    if ('startViewTransition' in document) {
      document.startViewTransition(() => {
        flushSync(fn);
      });
    } else {
      fn();
    }
  }});

<ToastRegion queue={queue}>
  {({ toast }) => (
    <Toast
      style={{ viewTransitionName: toast.key }}      toast={toast}
    >
      <ToastContent>
        <Text slot="title">{toast.content.title}</Text>
        <Text slot="description">
          {toast.content.description}
        </Text>
      </ToastContent>
      <Button slot="close">
        <X size={16} />
      </Button>
    </Toast>
  )}
</ToastRegion>
<Button onPress={() => queue.add({ title: 'Toasted!' })}>
  Toast
</Button>
```

```
import {flushSync} from 'react-dom';

const queue =
  new ToastQueue<
    MyToastContent
  >({
    // Wrap state updates in a CSS view transition.
    wrapUpdate(fn) {
      if (
        'startViewTransition' in
          document
      ) {
        document
          .startViewTransition(
            () => {
              flushSync(
                fn
              );
            }
          );
      } else {
        fn();
      }
    }  });

<ToastRegion
  queue={queue}
>
  {({ toast }) => (
    <Toast
      style={{
        viewTransitionName:
          toast.key
      }}      toast={toast}
    >
      <ToastContent>
        <Text slot="title">
          {toast
            .content
            .title}
        </Text>
        <Text slot="description">
          {toast
            .content
            .description}
        </Text>
      </ToastContent>
      <Button slot="close">
        <X size={16} />
      </Button>
    </Toast>
  )}
</ToastRegion>
<Button
  onPress={() =>
    queue.add({
      title: 'Toasted!'
    })}
>
  Toast
</Button>
```

Show CSS

```
.react-aria-Toast {
  view-transition-class: toast;
}

::view-transition-new(.toast):only-child {
  animation: slide-in 400ms;
}

::view-transition-old(.toast):only-child {
  animation: slide-out 400ms;
}

@keyframes slide-out {
  to {
    translate: 100% 0;
    opacity: 0;
  }
}

@keyframes slide-in {
  from {
    translate: 100% 0;
    opacity: 0;
  }
}
```

```
.react-aria-Toast {
  view-transition-class: toast;
}

::view-transition-new(.toast):only-child {
  animation: slide-in 400ms;
}

::view-transition-old(.toast):only-child {
  animation: slide-out 400ms;
}

@keyframes slide-out {
  to {
    translate: 100% 0;
    opacity: 0;
  }
}

@keyframes slide-in {
  from {
    translate: 100% 0;
    opacity: 0;
  }
}
```

```
.react-aria-Toast {
  view-transition-class: toast;
}

::view-transition-new(.toast):only-child {
  animation: slide-in 400ms;
}

::view-transition-old(.toast):only-child {
  animation: slide-out 400ms;
}

@keyframes slide-out {
  to {
    translate: 100% 0;
    opacity: 0;
  }
}

@keyframes slide-in {
  from {
    translate: 100% 0;
    opacity: 0;
  }
}
```

* * *

`<ToastRegion>` renders a group of toasts.

Name

Type

Description

`queue`

`[ToastQueue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/toast/src/useToastState.ts:ToastQueue)<T>`

The queue of toasts to display.

`children`

`[ReactNode](https://reactjs.org/docs/rendering-elements.html) | ( (renderProps: {  toast: [QueuedToast](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/toast/src/useToastState.ts:QueuedToast)<T>  } )) => [ReactElement](https://reactjs.org/docs/rendering-elements.html)`

A function to render each toast, or children containing a `<ToastList>`.

`className`

`[ClassNameOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ClassNameOrFunction)<[ToastRegionRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Toast.tsx:ToastRegionRenderProps)<T>>`

The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.

`style`

`[StyleOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:StyleOrFunction)<[ToastRegionRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Toast.tsx:ToastRegionRenderProps)<T>>`

The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.

EventsPositioningAccessibility

Name

Type

Default

Description

`aria-label`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

`"Notifications"`

An accessibility label for the toast region.

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

`<Toast>` renders an individual toast.

Name

Type

Description

`toast`

`[QueuedToast](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/toast/src/useToastState.ts:QueuedToast)<T>`

The toast object.

`children`

`[ChildrenOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ChildrenOrFunction)<[ToastRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Toast.tsx:ToastRenderProps)<T>>`

The children of the component. A function may be provided to alter the children based on component state.

`className`

`[ClassNameOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ClassNameOrFunction)<[ToastRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Toast.tsx:ToastRenderProps)<T>>`

The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.

`style`

`[StyleOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:StyleOrFunction)<[ToastRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Toast.tsx:ToastRenderProps)<T>>`

The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.

EventsPositioningAccessibility

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

### ToastContent[#](#toastcontent)

`<ToastContent>` renders the main content of a toast, including the title and description. It accepts all HTML attributes.

* * *

A `ToastQueue` manages the state for a `<ToastRegion>`. The state is stored outside React so that you can trigger toasts from anywhere in your application, not just inside components.

### Properties

Name

Type

Description

`visibleToasts`

`[QueuedToast](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/toast/src/useToastState.ts:QueuedToast)<T>[]`

The currently visible toasts.

### Methods

Method

Description

`constructor( (options?: [ToastStateProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/toast/src/useToastState.ts:ToastStateProps) )): void`

`subscribe( (fn: () => void )): () => void`

Subscribes to updates to the visible toasts.

`add( (content: T, , options: [ToastOptions](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/toast/src/useToastState.ts:ToastOptions) )): [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

Adds a new toast to the queue.

`close( (key: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) )): void`

Closes a toast.

`pauseAll(): void`

Pauses the timers for all visible toasts.

`resumeAll(): void`

Resumes the timers for all visible toasts.

`clear(): void`