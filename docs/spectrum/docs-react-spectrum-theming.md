{
  "request": {
    "url": "https://react-spectrum.adobe.com/react-spectrum/theming.html",
    "method": "GET",
    "headers": {
      "User-Agent": "directiv-fetch/1.0"
    },
    "body": null
  },
  "response": {
    "statusCode": 200,
    "statusMessage": "OK",
    "headers": {
      "date": "Fri, 24 Oct 2025 23:56:28 GMT",
      "content-type": "text/html",
      "content-length": "51988",
      "connection": "keep-alive",
      "vary": "Accept-Encoding",
      "last-modified": "Thu, 02 Oct 2025 19:55:08 GMT",
      "etag": "\"0x8DE01ED971A1067\"",
      "x-ms-request-id": "2e22e48d-c01e-0017-6841-457d17000000",
      "x-ms-version": "2018-03-28",
      "x-azure-ref": "20251024T235628Z-r1c9cfb47dcg6mgphC1AMSf054000000092g000000005fwu",
      "x-fd-int-roxy-purgeid": "0",
      "x-cache": "TCP_MISS",
      "cache-control": "max-age=300",
      "content-security-policy": "frame-ancestors 'self';",
      "strict-transport-security": "max-age=31536000",
      "accept-ranges": "bytes"
    },
    "format": "markdown",
    "article": {
      "title": "Theming",
      "byline": null,
      "excerpt": "Documentation for Theming in the React Spectrum package.",
      "markdown": "This page describes how themes works in React Spectrum, including how applications adapt to operating system dark mode and touch scale.\n\n* * *\n\nReact Spectrum is built to support theming. Colors, sizing, and spacing options can be customized through the use of CSS variables which are defined using the [Provider](https://react-spectrum.adobe.com/react-spectrum/Provider.html) component. Themes consist of variable definitions for light and dark [color schemes](https://spectrum.adobe.com/page/color-fundamentals/#Color-themes-and-modes), along with medium and large [platform scales](https://spectrum.adobe.com/page/platform-scale/). Themes can also be nested to allow different parts of an application to adopt a different appearance.\n\n* * *\n\nReact Spectrum supports multiple [color schemes](https://spectrum.adobe.com/page/color-fundamentals/#Color-themes-and-modes) within a theme, including light and dark mode. These correspond to color schemes found in popular operating systems. By default, React Spectrum automatically switches between color schemes according to the operating system setting using the [prefers-color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme) media query. This even updates automatically, so if a user changes their system's color scheme or it changes automatically (e.g. based on time of day), React Spectrum components will update accordingly.\n\nWe recommend that all React Spectrum applications support both light and dark mode. It can be very jarring to use a light themed application when the rest of your applications are in dark mode, and visa versa. This can be accomplished by using Spectrum color variables rather than hard coded color values. All React Spectrum components adapt to color scheme out of the box. See the [styling](https://react-spectrum.adobe.com/react-spectrum/styling.html) page for details on how to use Spectrum color variables in your own custom components.\n\nIn case you need to override the operating system setting for some reason, e.g. an in-application setting, you can use the `colorScheme` prop on the [Provider](https://react-spectrum.adobe.com/react-spectrum/Provider.html) component. This can be set to `\"light\"` or `\"dark\"` to force the color scheme to a particular setting.\n\n```\n<Provider colorScheme=\"dark\">\n  <ActionButton margin=\"size-200\">I'm a dark button</ActionButton>\n</Provider>\n```\n\n```\n<Provider colorScheme=\"dark\">\n  <ActionButton margin=\"size-200\">\n    I'm a dark button\n  </ActionButton>\n</Provider>\n```\n\n```\n<Provider colorScheme=\"dark\">\n  <ActionButton margin=\"size-200\">\n    I'm a dark button\n  </ActionButton>\n</Provider>\n```\n\nColor schemes can also be nested. You could have a dark themed dialog inside a light themed application, for example. This might be useful for certain experiences like photo editing that are more optimal in dark mode, regardless of the operating system setting.\n\n```\n<Provider colorScheme=\"light\">\n  <ActionButton margin=\"size-200\">I'm a light button</ActionButton>\n  <Provider colorScheme=\"dark\">\n    <ActionButton margin=\"size-200\">I'm a dark button</ActionButton>\n  </Provider>\n</Provider>\n```\n\n```\n<Provider colorScheme=\"light\">\n  <ActionButton margin=\"size-200\">\n    I'm a light button\n  </ActionButton>\n  <Provider colorScheme=\"dark\">\n    <ActionButton margin=\"size-200\">\n      I'm a dark button\n    </ActionButton>\n  </Provider>\n</Provider>\n```\n\n```\n<Provider colorScheme=\"light\">\n  <ActionButton margin=\"size-200\">\n    I'm a light button\n  </ActionButton>\n  <Provider colorScheme=\"dark\">\n    <ActionButton margin=\"size-200\">\n      I'm a dark button\n    </ActionButton>\n  </Provider>\n</Provider>\n```\n\n* * *\n\nIn addition to color schemes, React Spectrum themes support multiple [platform scales](https://spectrum.adobe.com/page/platform-scale/). There is a medium scale for devices with fine grained pointers (e.g. mice), and a large scale for devices with coarser grained input (e.g. touch). Large scale increases the size of most components so that they have larger hit targets. React Spectrum automatically switches between scales according to these device characteristics.\n\nWe strongly recommend keeping the default behavior and allowing your application to adapt to different devices. It can be especially hard to use applications with too small hit targets on touch devices, and annoying to use controls that are too large on desktop. That said, if you have some use case that requires it, you can explicitly set the `scale` prop on the [Provider](https://react-spectrum.adobe.com/react-spectrum/Provider.html) component to force a particular scale.\n\n* * *\n\nThemes are specified by passing a `[Theme](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/provider/src/index.d.ts:Theme)` object to the [Provider](https://react-spectrum.adobe.com/react-spectrum/Provider.html) component. This object includes several [css modules](https://github.com/css-modules/css-modules) which define the values for the variables in each color scheme and platform scale. Each CSS module defines a CSS class which includes the variables it defines, and `Provider` applies these classes according to media queries and prop settings.\n\nReact Spectrum includes three themes by default.\n\n1.  The `defaultTheme` uses the Spectrum `light` and `darkest` color themes and is suitable for most applications.\n2.  The `darkTheme` uses the Spectrum `dark` and `darkest` color themes, and is suitable for applications that are optimal with a darker interface regardless of operating system setting (e.g. photo/video editors).\n3.  The `lightTheme` uses the Spectrum `lightest` and `darkest` color themes, and is suitable for applications that require high brightness levels while in light mode and high contrast ratios while in dark mode.\n\nSee the [Spectrum color](https://spectrum.adobe.com/page/color-fundamentals/#Color-themes-and-modes) page for more information.\n\nImport your desired theme and pass it to your application's `Provider` to apply it.\n\n```\nimport {defaultTheme} from '@adobe/react-spectrum';\n\n<Provider theme={defaultTheme}>\n  <YourApp />\n</Provider>\n```\n\n```\nimport {defaultTheme} from '@adobe/react-spectrum';\n\n<Provider theme={defaultTheme}>\n  <YourApp />\n</Provider>\n```\n\n```\nimport {defaultTheme} from '@adobe/react-spectrum';\n\n<Provider\n  theme={defaultTheme}\n>\n  <YourApp />\n</Provider>\n```",
      "length": 5325,
      "siteName": "Adobe",
      "lang": "en-US"
    }
  },
  "meta": {
    "timestamp": "2025-10-24T23:56:28.908Z",
    "durationMs": 952.16,
    "parseMessage": "Article converted to Markdown via Readability + Turndown"
  }
}