# SSRProvider

**Source**: [https://react-spectrum.adobe.com/react-aria/SSRProvider.html](https://react-spectrum.adobe.com/react-aria/SSRProvider.html)

> Documentation for SSRProvider in the React Aria package.

---

When using SSR with React Aria in React 16 or 17, applications must be wrapped in an SSRProvider. This ensures that auto generated ids are consistent between the client and server.

* * *

If you're using React 16 or 17, `SSRProvider` should be used as a wrapper for the entire application during server side rendering. It works together with the [useId](https://react-spectrum.adobe.com/react-aria/useId.html) hook to ensure that auto generated ids are consistent between the client and server by resetting the id internal counter on each request. See the [server side rendering](https://react-spectrum.adobe.com/react-aria/ssr.html) docs for more information.

**Note**: if you're using React 18 or newer, `SSRProvider` is not necessary and can be removed from your app. React Aria uses the [React.useId](https://react.dev/reference/react/useId) hook internally when using React 18, which ensures ids are consistent.

* * *

Name

Type

Description

`children`

`[ReactNode](https://reactjs.org/docs/rendering-elements.html)`

Your application here.

* * *

```
import {SSRProvider} from 'react-aria';

<SSRProvider>
  <YourApp />
</SSRProvider>
```

```
import {SSRProvider} from 'react-aria';

<SSRProvider>
  <YourApp />
</SSRProvider>
```

```
import {SSRProvider} from 'react-aria';

<SSRProvider>
  <YourApp />
</SSRProvider>
```