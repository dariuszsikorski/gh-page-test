# Server Side Rendering

**Source**: [https://react-spectrum.adobe.com/react-aria/ssr.html](https://react-spectrum.adobe.com/react-aria/ssr.html)

> Documentation for Server Side Rendering in the React Aria package.

---

This page describes how to use React Aria with server side rendering, including frameworks like Next.js, Remix, and Gatsby.

* * *

**Server side rendering**, or SSR, is the process of rendering components to HTML on the server, rather than rendering them only on the client. **Static rendering** is a similar approach, but pre-renders pages to HTML at build time rather than on each request. These techniques can help improve perceived loading performance and SEO. React Aria supports both of these approaches, either through a custom implementation or via frameworks like [Next.js](https://nextjs.org/), [Remix](https://remix.run/), and [Gatsby](https://www.gatsbyjs.com/).

* * *

When using server side rendering, the application should be wrapped in an [I18nProvider](https://react-spectrum.adobe.com/react-aria/I18nProvider.html) with an explicit `locale` prop, rather than relying on automatic locale selection. This ensures that the locale of the content rendered on the server matches the locale expected by the browser. The `Accept-Language` HTTP header, which the browser sends to the server with the user’s desired language, could be used to implement this. You could also use an in-application setting for this if available, or locale-specific URLs, for example. In addition to passing the `locale` prop to the `I18nProvider`, you should also ensure the `lang` and `dir` attributes are set on the `<html>` element for your page.

```
import {I18nProvider, useLocale} from 'react-aria-components';

function App() {
  let {locale, direction} = useLocale();

  return (
    <html lang={locale} dir={direction}>
      {/* your app here */}
    </html>
  );
}

<I18nProvider locale={locale}>
  <App />
</I18nProvider>
```

```
import {
  I18nProvider,
  useLocale
} from 'react-aria-components';

function App() {
  let { locale, direction } = useLocale();

  return (
    <html lang={locale} dir={direction}>
      {/* your app here */}
    </html>
  );
}

<I18nProvider locale={locale}>
  <App />
</I18nProvider>
```

```
import {
  I18nProvider,
  useLocale
} from 'react-aria-components';

function App() {
  let {
    locale,
    direction
  } = useLocale();

  return (
    <html
      lang={locale}
      dir={direction}
    >
      {/* your app here */}
    </html>
  );
}

<I18nProvider
  locale={locale}
>
  <App />
</I18nProvider>
```

See the [internationalization docs](https://react-spectrum.adobe.com/react-aria/internationalization.html) for more information about i18n in React Aria.

By default, React Aria includes translations for all 30+ [supported languages](https://react-spectrum.adobe.com/react-aria/internationalization.html#supported-locales). When using server side rendering, this can be optimized so that only the strings for the current user's language are sent over the network rather than the strings for all supported languages. This takes two steps:

1.  Configure React Aria's build plugin for your framework to exclude all translation strings from your JavaScript bundle at build time.
2.  Render React Aria's `LocalizedStringProvider` component at the root of your app. This includes the strings for the user's language in the initial HTML so that the client can access them. It also passes the locale to the client, so an `I18nProvider` is not needed.

See below for framework-specific guideance.

First, install `@react-aria/optimize-locales-plugin` with your package manager. Then, add the following to your `next.config.js`:

```
// next.config.js
const localesPlugin = require('@react-aria/optimize-locales-plugin');

module.exports = {
  // ...
  webpack(config, {isServer}) {
    if (!isServer) {
      // Don't include any locale strings in the client JS bundle.
      config.plugins.push(localesPlugin.webpack({locales: []}));    }
    return config;
  }
};
```

```
// next.config.js
const localesPlugin = require(
  '@react-aria/optimize-locales-plugin'
);

module.exports = {
  // ...
  webpack(config, { isServer }) {
    if (!isServer) {
      // Don't include any locale strings in the client JS bundle.
      config.plugins.push(
        localesPlugin.webpack({ locales: [] })
      );    }
    return config;
  }
};
```

```
// next.config.js
const localesPlugin =
  require(
    '@react-aria/optimize-locales-plugin'
  );

module.exports = {
  // ...
  webpack(
    config,
    { isServer }
  ) {
    if (!isServer) {
      // Don't include any locale strings in the client JS bundle.
      config.plugins
        .push(
          localesPlugin
            .webpack({
              locales: []
            })
        );    }
    return config;
  }
};
```

Finally, add a `LocalizedStringProvider` to your root layout component. This example uses a URL parameter to get the requested locale. See the [Next.js Internationalization guide](https://nextjs.org/docs/app/building-your-application/routing/internationalization) to learn how to set this up.

```
// app/[lang]/layout.tsx
import {LocalizedStringProvider} from 'react-aria-components/i18n';
export default function RootLayout(
  {children, params: {lang}}:
  {children: React.ReactNode, params: {lang: string}}
) {
  return (
    <html lang={lang}>
      <body>
        <LocalizedStringProvider locale={lang} />        {children}
      </body>
    </html>
  );
}
```

```
// app/[lang]/layout.tsx
import {LocalizedStringProvider} from 'react-aria-components/i18n';
export default function RootLayout(
  { children, params: { lang } }: {
    children: React.ReactNode;
    params: { lang: string };
  }
) {
  return (
    <html lang={lang}>
      <body>
        <LocalizedStringProvider locale={lang} />        {children}
      </body>
    </html>
  );
}
```

```
// app/[lang]/layout.tsx
import {LocalizedStringProvider} from 'react-aria-components/i18n';
export default function RootLayout(
  {
    children,
    params: { lang }
  }: {
    children:
      React.ReactNode;
    params: {
      lang: string;
    };
  }
) {
  return (
    <html lang={lang}>
      <body>
        <LocalizedStringProvider
          locale={lang}
        />        {children}
      </body>
    </html>
  );
}
```

**Note**: If you are using React Aria hooks rather than components, this can be imported from `react-aria/i18n` instead.

First, install `@react-aria/optimize-locales-plugin` with your package manager. Then, add the following to your `next.config.js`:

```
// next.config.js
const localesPlugin = require('@react-aria/optimize-locales-plugin');

module.exports = {
  // ...
  i18n: {
    // See Next.js i18n docs...
  },
  webpack(config, {isServer}) {
    if (!isServer) {
      // Don't include any locale strings in the client JS bundle.
      config.plugins.push(localesPlugin.webpack({locales: []}));    }
    return config;
  }
};
```

```
// next.config.js
const localesPlugin = require(
  '@react-aria/optimize-locales-plugin'
);

module.exports = {
  // ...
  i18n: {
    // See Next.js i18n docs...
  },
  webpack(config, { isServer }) {
    if (!isServer) {
      // Don't include any locale strings in the client JS bundle.
      config.plugins.push(
        localesPlugin.webpack({ locales: [] })
      );    }
    return config;
  }
};
```

```
// next.config.js
const localesPlugin =
  require(
    '@react-aria/optimize-locales-plugin'
  );

module.exports = {
  // ...
  i18n: {
    // See Next.js i18n docs...
  },
  webpack(
    config,
    { isServer }
  ) {
    if (!isServer) {
      // Don't include any locale strings in the client JS bundle.
      config.plugins
        .push(
          localesPlugin
            .webpack({
              locales: []
            })
        );    }
    return config;
  }
};
```

Finally, add a `LocalizedStringProvider` to `pages/_document.tsx` before the `<NextScript />` element. Use `props.locale` to access the requested locale, which is provided by Next.js. See the [Next.js Internationalization guide](https://nextjs.org/docs/pages/building-your-application/routing/internationalization) to learn how to set this up.

```
// pages/_document.tsx
import {Html, Head, Main, NextScript, DocumentProps} from 'next/document'
import {LocalizedStringProvider} from 'react-aria-components/i18n';
export default function Document(props: DocumentProps) {
  return (
    <Html lang={props.locale}>
      <Head />
      <body>
        <Main />
        <LocalizedStringProvider locale={props.locale} />        <NextScript />
      </body>
    </Html>
  );
}
```

```
// pages/_document.tsx
import {
  DocumentProps,
  Head,
  Html,
  Main,
  NextScript
} from 'next/document';
import {LocalizedStringProvider} from 'react-aria-components/i18n';
export default function Document(props: DocumentProps) {
  return (
    <Html lang={props.locale}>
      <Head />
      <body>
        <Main />
        <LocalizedStringProvider locale={props.locale} />        <NextScript />
      </body>
    </Html>
  );
}
```

```
// pages/_document.tsx
import {
  DocumentProps,
  Head,
  Html,
  Main,
  NextScript
} from 'next/document';
import {LocalizedStringProvider} from 'react-aria-components/i18n';
export default function Document(
  props: DocumentProps
) {
  return (
    <Html
      lang={props.locale}
    >
      <Head />
      <body>
        <Main />
        <LocalizedStringProvider
          locale={props
            .locale}
        />        <NextScript />
      </body>
    </Html>
  );
}
```

**Note**: If you are using React Aria hooks rather than components, this can be imported from `react-aria/i18n` instead.

Remix is supported [when using Vite](https://remix.run/docs/en/main/future/vite) for builds. First, install `@react-aria/optimize-locales-plugin` with your package manager. Then, add the following to your `vite.config.ts`:

```
// vite.config.ts
import { unstable_vitePlugin as remix } from '@remix-run/dev';
import { defineConfig } from 'vite';
import localesPlugin from '@react-aria/optimize-locales-plugin';
export default defineConfig({
  plugins: [
    remix(),
    // Don't include any locale strings in the client JS bundle.
    {...localesPlugin.vite({locales: []}), enforce: 'pre'}  ],
});
```

```
// vite.config.ts
import {unstable_vitePlugin as remix} from '@remix-run/dev';
import {defineConfig} from 'vite';
import localesPlugin from '@react-aria/optimize-locales-plugin';
export default defineConfig({
  plugins: [
    remix(),
    // Don't include any locale strings in the client JS bundle.
    {
      ...localesPlugin.vite({ locales: [] }),
      enforce: 'pre'
    }  ]
});
```

```
// vite.config.ts
import {unstable_vitePlugin as remix} from '@remix-run/dev';
import {defineConfig} from 'vite';
import localesPlugin from '@react-aria/optimize-locales-plugin';
export default defineConfig(
  {
    plugins: [
      remix(),
      // Don't include any locale strings in the client JS bundle.
      {
        ...localesPlugin
          .vite({
            locales: []
          }),
        enforce: 'pre'
      }    ]
  }
);
```

Finally, you'll need an [entry.server.tsx](https://remix.run/docs/en/main/file-conventions/entry.server) file, which will handle injecting the localized strings into the initial HTML for the client to access. The below file can be generated by running `npx remix reveal`, and making the highlighted modifications.

**Note**: Remix uses the `getLocalizationScript` function instead of the `LocalizedStringProvider` component to inject the strings into the initial HTML.

```
// app/entry.server.tsx
import type {EntryContext} from '@remix-run/node';
import {PassThrough} from 'node:stream';
import {createReadableStreamFromReadable} from '@remix-run/node';
import {RemixServer} from '@remix-run/react';
import {renderToPipeableStream} from 'react-dom/server';
import {getLocalizationScript} from 'react-aria-components/i18n';
const ABORT_DELAY = 5000;

export default async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
) {
  // Get the requested language (e.g. from headers, URL param, database, etc.)
  let lang = await getRequestedLanguageSomehow(request);
  return new Promise((resolve, reject) => {
    let {pipe, abort} = renderToPipeableStream(
      <RemixServer
        context={remixContext}
        url={request.url}
        abortDelay={ABORT_DELAY}
      />,
      {
        bootstrapScriptContent: getLocalizationScript(lang),        onShellReady() {
          let body = new PassThrough();
          let stream = createReadableStreamFromReadable(body);

          responseHeaders.set('Content-Type', 'text/html');
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode,
            })
          );

          pipe(body);
        },
        onShellError(error: unknown) {
          reject(error);
        },
        onError(error: unknown) {
          responseStatusCode = 500;
          console.error(error);
        },
      }
    );

    setTimeout(abort, ABORT_DELAY);
  });
}
```

```
// app/entry.server.tsx
import type {EntryContext} from '@remix-run/node';
import {PassThrough} from 'node:stream';
import {createReadableStreamFromReadable} from '@remix-run/node';
import {RemixServer} from '@remix-run/react';
import {renderToPipeableStream} from 'react-dom/server';
import {getLocalizationScript} from 'react-aria-components/i18n';
const ABORT_DELAY = 5000;

export default async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  // Get the requested language (e.g. from headers, URL param, database, etc.)
  let lang = await getRequestedLanguageSomehow(request);
  return new Promise((resolve, reject) => {
    let { pipe, abort } = renderToPipeableStream(
      <RemixServer
        context={remixContext}
        url={request.url}
        abortDelay={ABORT_DELAY}
      />,
      {
        bootstrapScriptContent: getLocalizationScript(lang),        onShellReady() {
          let body = new PassThrough();
          let stream = createReadableStreamFromReadable(
            body
          );

          responseHeaders.set('Content-Type', 'text/html');
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );

          pipe(body);
        },
        onShellError(error: unknown) {
          reject(error);
        },
        onError(error: unknown) {
          responseStatusCode = 500;
          console.error(error);
        }
      }
    );

    setTimeout(abort, ABORT_DELAY);
  });
}
```

```
// app/entry.server.tsx
import type {EntryContext} from '@remix-run/node';
import {PassThrough} from 'node:stream';
import {createReadableStreamFromReadable} from '@remix-run/node';
import {RemixServer} from '@remix-run/react';
import {renderToPipeableStream} from 'react-dom/server';
import {getLocalizationScript} from 'react-aria-components/i18n';
const ABORT_DELAY = 5000;

export default async function handleRequest(
  request: Request,
  responseStatusCode:
    number,
  responseHeaders:
    Headers,
  remixContext:
    EntryContext
) {
  // Get the requested language (e.g. from headers, URL param, database, etc.)
  let lang =
    await getRequestedLanguageSomehow(
      request
    );
  return new Promise(
    (
      resolve,
      reject
    ) => {
      let {
        pipe,
        abort
      } =
        renderToPipeableStream(
          <RemixServer
            context={remixContext}
            url={request
              .url}
            abortDelay={ABORT_DELAY}
          />,
          {
            bootstrapScriptContent:
              getLocalizationScript(
                lang
              ),            onShellReady() {
              let body =
                new PassThrough();
              let stream =
                createReadableStreamFromReadable(
                  body
                );

              responseHeaders
                .set(
                  'Content-Type',
                  'text/html'
                );
              resolve(
                new Response(
                  stream,
                  {
                    headers:
                      responseHeaders,
                    status:
                      responseStatusCode
                  }
                )
              );

              pipe(body);
            },
            onShellError(
              error:
                unknown
            ) {
              reject(
                error
              );
            },
            onError(
              error:
                unknown
            ) {
              responseStatusCode =
                500;
              console
                .error(
                  error
                );
            }
          }
        );

      setTimeout(
        abort,
        ABORT_DELAY
      );
    }
  );
}
```

**Note**: If you are using React Aria hooks rather than components, this can be imported from `react-aria/i18n` instead.

You should also make sure to set the `lang` attribute on the root `<html>` element in `app/root.tsx` using the same language detection logic used above.

`LocalizedStringProvider` includes the strings for all React Aria components by default. This reduces the size a lot compared with bundling all languages, but you can also manually include a subset of the strings for only the components you use to get the smallest possible bundle size. However, this takes some careful work to ensure you include the strings for all of the components used across your app and update this list over time.

Start by creating a `LocalizedStringDictionary` containing only the strings for the components you use with the `createLocalizedStringDictionary` function. This accepts a list of npm package names for the individual React Aria hooks and components you use.

```
import {createLocalizedStringDictionary} from 'react-aria-components/i18n';

const dictionary = createLocalizedStringDictionary(['@react-aria/datepicker']);
```

```
import {createLocalizedStringDictionary} from 'react-aria-components/i18n';

const dictionary = createLocalizedStringDictionary([
  '@react-aria/datepicker'
]);
```

```
import {createLocalizedStringDictionary} from 'react-aria-components/i18n';

const dictionary =
  createLocalizedStringDictionary(
    ['@react-aria/datepicker']
  );
```

Then, pass this as an additional prop to `LocalizedStringProvider`:

```
<LocalizedStringProvider locale={locale} dictionary={dictionary} />
```

```
<LocalizedStringProvider
  locale={locale}
  dictionary={dictionary}
/>
```

```
<LocalizedStringProvider
  locale={locale}
  dictionary={dictionary}
/>
```

Or if using Remix, pass the dictionary as an additional parameter to `getLocalizationScript`:

```
getLocalizationScript(locale, dictionary)
```

```
getLocalizationScript(locale, dictionary)
```

```
getLocalizationScript(
  locale,
  dictionary
);
```

* * *

You can also use the [useIsSSR](https://react-spectrum.adobe.com/react-aria/useIsSSR.html) hook in your own components to determine whether they are running in an SSR context. This hook returns `true` both during server rendering and hydration, but updates immediately to `false` after hydration. You can use this to delay browser-specific code like media queries and feature detection until after the client has hydrated.

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

* * *

When using SSR, only a single copy of React Aria can be on the page at a time. This is in contrast to client-side rendering, where multiple copies from different parts of an app can coexist. Internally, many components rely on auto-generated ids to link related elements via ARIA attributes. These ids typically use a randomly generated seed plus an incrementing counter to ensure uniqueness even when multiple instances of React Aria are on the page. With SSR, we need to ensure that these ids are consistent between the server and client. This means the counter resets on every request, and we use a consistent seed. Due to this, multiple copies of React Aria cannot be supported because the auto-generated ids would conflict.

If you use React Aria’s [useId](https://react-spectrum.adobe.com/react-aria/useId.html) hook in your own components, this will ensure the ids are consistent when server rendered. In React 16 and 17 you'll need to wrap your app in an `SSRProvider` as described above. No additional changes in each component are required to enable SSR support.

* * *

In React 18, SSR works out of the box with no additional work. If you're using React 16 or 17, you will need to wrap your application in an [SSRProvider](https://react-spectrum.adobe.com/react-aria/SSRProvider.html). This signals to all nested React Aria hooks that they are being rendered in an SSR context, which ensures that the HTML generated on the server matches the DOM structure hydrated on the client.

```
import {SSRProvider} from 'react-aria';

<SSRProvider>
  <App />
</SSRProvider>
```

```
import {SSRProvider} from 'react-aria';

<SSRProvider>
  <App />
</SSRProvider>
```

```
import {SSRProvider} from 'react-aria';

<SSRProvider>
  <App />
</SSRProvider>
```