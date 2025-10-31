# PortalProvider

**Source**: [https://react-spectrum.adobe.com/react-aria/PortalProvider.html](https://react-spectrum.adobe.com/react-aria/PortalProvider.html)

> Documentation for PortalProvider in the React Aria package.

---

Sets the portal container for all overlay elements rendered by its children.

* * *

`UNSAFE_PortalProvider` is a utility wrapper component that can be used to set where components like Modals, Popovers, Toasts, and Tooltips will portal their overlay element to. This is typically used when your app is already portalling other elements to a location other than the `document.body` and thus requires your React Aria components to send their overlays to the same container.

Please note that `UNSAFE_PortalProvider` is considered `UNSAFE` because it is an escape hatch, and there are many places that an application could portal to. Not all of them will work, either with styling, accessibility, or for a variety of other reasons. Typically, it is best to portal to the root of the entire application, e.g. the `body` element, outside of any possible overflow or stacking contexts. We envision `UNSAFE_PortalProvider` being used to group all of the portalled elements into a single container at the root of the app or to control the order of children of the `body` element, but you may have use cases that need to do otherwise.

* * *

Name

Type

Description

`children`

`[ReactNode](https://reactjs.org/docs/rendering-elements.html)`

The content of the PortalProvider. Should contain all children that want to portal their overlays to the element returned by the provided `getContainer()`.

`getContainer`

`() => [HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element) | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null) | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)`

Should return the element where we should portal to. Can clear the context by passing null.

* * *

The example below shows how you can use `UNSAFE_PortalProvider` to portal your Toasts to an arbitrary container. Note that the Toast in this example is taken directly from the [React Aria Components Toast documentation](https://react-spectrum.adobe.com/react-aria/Toast.html#example), please visit that page for a detailed explanation of its implementation.

```
import {UNSAFE_PortalProvider} from 'react-aria';

// See the above Toast docs link for the ToastRegion implementation
function App() {
  let container = React.useRef(null);
  return (
    <>
      <UNSAFE_PortalProvider getContainer={() => container.current}>
        <MyToastRegion />
        <Button
          onPress={() =>
            queue.add({
              title: 'Toast complete!',
              description: 'Great success.'
            })}
        >
          Open Toast
        </Button>
      </UNSAFE_PortalProvider>
      <div
        ref={container}
        style={{
          height: '110px',
          width: '200px',
          overflow: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          padding: '5px'
        }}
      >
        Toasts are portalled here!
      </div>
    </>
  );
}

<App />
```

```
import {UNSAFE_PortalProvider} from 'react-aria';

// See the above Toast docs link for the ToastRegion implementation
function App() {
  let container = React.useRef(null);
  return (
    <>
      <UNSAFE_PortalProvider
        getContainer={() => container.current}
      >
        <MyToastRegion />
        <Button
          onPress={() =>
            queue.add({
              title: 'Toast complete!',
              description: 'Great success.'
            })}
        >
          Open Toast
        </Button>
      </UNSAFE_PortalProvider>
      <div
        ref={container}
        style={{
          height: '110px',
          width: '200px',
          overflow: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          padding: '5px'
        }}
      >
        Toasts are portalled here!
      </div>
    </>
  );
}

<App />
```

```
import {UNSAFE_PortalProvider} from 'react-aria';

// See the above Toast docs link for the ToastRegion implementation
function App() {
  let container = React
    .useRef(null);
  return (
    <>
      <UNSAFE_PortalProvider
        getContainer={() =>
          container
            .current}
      >
        <MyToastRegion />
        <Button
          onPress={() =>
            queue.add({
              title:
                'Toast complete!',
              description:
                'Great success.'
            })}
        >
          Open Toast
        </Button>
      </UNSAFE_PortalProvider>
      <div
        ref={container}
        style={{
          height:
            '110px',
          width: '200px',
          overflow:
            'auto',
          display:
            'flex',
          flexDirection:
            'column',
          gap: '20px',
          padding: '5px'
        }}
      >
        Toasts are
        portalled here!
      </div>
    </>
  );
}

<App />
```

* * *

The `getContainer` set by the nearest PortalProvider can be accessed by calling `useUNSAFE_PortalContext`. This can be used by custom overlay components to ensure that they are also being consistently portalled throughout your app.

`useUNSAFE_PortalContext(): [PortalProviderContextValue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/overlays/src/PortalProvider.tsx:PortalProviderContextValue)`

```
import {useUNSAFE_PortalContext} from 'react-aria';

function MyOverlay(props) {
  let { children } = props;
  let { getContainer } = useUNSAFE_PortalContext();
  return ReactDOM.createPortal(children, getContainer());
}
```

```
import {useUNSAFE_PortalContext} from 'react-aria';

function MyOverlay(props) {
  let { children } = props;
  let { getContainer } = useUNSAFE_PortalContext();
  return ReactDOM.createPortal(children, getContainer());
}
```

```
import {useUNSAFE_PortalContext} from 'react-aria';

function MyOverlay(
  props
) {
  let { children } =
    props;
  let { getContainer } =
    useUNSAFE_PortalContext();
  return ReactDOM
    .createPortal(
      children,
      getContainer()
    );
}
```