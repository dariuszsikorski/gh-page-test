# useIsSSR

**Source**: [https://react-spectrum.adobe.com/react-aria/useIsSSR.html](https://react-spectrum.adobe.com/react-aria/useIsSSR.html)

> Documentation for useIsSSR in the React Aria package.

---

Returns whether the component is currently being server side rendered or hydrated on the client. Can be used to delay browser-specific rendering until after hydration.

* * *

`useIsSSR(): [boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

* * *

`useIsSSR` returns `true` during server rendering and hydration, and updates to `false` immediately after hydration. This can be used to ensure that the server rendered HTML and initially hydrated DOM match, but trigger an additional render after hydration to run browser-specific code. For example, it could be used to run media queries or feature detection for browser-specific APIs that affect rendering but cannot be run server side.

In React 16 and 17, this hook must be used in combination with the [SSRProvider](https://react-spectrum.adobe.com/react-aria/SSRProvider.html) component wrapping your application. See the [server side rendering](https://react-spectrum.adobe.com/react-aria/ssr.html) docs for more information.

* * *

```
import {useIsSSR} from 'react-aria';

function MyComponent() {
  let isSSR = useIsSSR();
  return <span>{isSSR ? 'Server' : 'Client'}</span>;
}
```

```
import {useIsSSR} from 'react-aria';

function MyComponent() {
  let isSSR = useIsSSR();
  return <span>{isSSR ? 'Server' : 'Client'}</span>;
}
```

```
import {useIsSSR} from 'react-aria';

function MyComponent() {
  let isSSR = useIsSSR();
  return (
    <span>
      {isSSR
        ? 'Server'
        : 'Client'}
    </span>
  );
}
```