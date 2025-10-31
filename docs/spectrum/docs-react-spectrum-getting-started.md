{
  "request": {
    "url": "https://react-spectrum.adobe.com/react-spectrum/getting-started.html",
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
      "date": "Fri, 24 Oct 2025 23:56:22 GMT",
      "content-type": "text/html",
      "content-length": "41373",
      "connection": "keep-alive",
      "vary": "Accept-Encoding",
      "last-modified": "Thu, 02 Oct 2025 19:55:09 GMT",
      "etag": "\"0x8DE01ED979593AA\"",
      "x-ms-request-id": "028a884b-c01e-0065-4140-457a58000000",
      "x-ms-version": "2018-03-28",
      "x-azure-ref": "20251024T235622Z-185c86b98984jcclhC1AMS7csg00000007fg00000000cby2",
      "x-fd-int-roxy-purgeid": "0",
      "x-cache": "TCP_HIT",
      "x-cache-info": "L1_T2",
      "cache-control": "max-age=300",
      "content-security-policy": "frame-ancestors 'self';",
      "strict-transport-security": "max-age=31536000",
      "accept-ranges": "bytes"
    },
    "format": "markdown",
    "article": {
      "title": "Getting Started",
      "byline": null,
      "excerpt": "Documentation for Getting Started in the React Spectrum package.",
      "markdown": "This page describes how to get started building an application with React Spectrum.\n\n* * *\n\n**React Spectrum** is a React implementation of [Spectrum](https://spectrum.adobe.com/), Adobe's design system. It provides components that are adaptive to interactions and screen sizes across devices, and includes full screen reader and keyboard navigation support for accessibility.\n\n* * *\n\nYou can install React Spectrum package using a package manager like [npm](https://docs.npmjs.com/cli/npm) or [yarn](https://classic.yarnpkg.com/lang/en/).\n\n```\nyarn add @adobe/react-spectrum\n```\n\nIf you prefer, you can also install components from individually versioned packages. See the [versioning](https://react-spectrum.adobe.com/react-spectrum/versioning.html) docs for more details.\n\n* * *\n\nReact Spectrum works with most popular build tooling, like [Parcel](https://parceljs.org/) and [create-react-app](https://create-react-app.dev/), or lower level tools like [webpack](https://webpack.js.org/).\n\nThe only requirement is CSS importing support. This is built into Parcel and create-react-app out of the box. If you're using React Spectrum with raw webpack, then you'll need to configure [css-loader](https://webpack.js.org/loaders/css-loader/).\n\nIf your application is written in TypeScript, be sure to add [@types/react](https://www.npmjs.com/package/@types/react) and [@types/react-dom](https://www.npmjs.com/package/@types/react-dom) to your project's dependencies as per React's [type checking guide](https://reactjs.org/docs/static-type-checking.html#type-definitions). React Spectrum components are published with their type definitions, so you can take advantage of static type checking, IDE autocomplete, and other TypeScript features.\n\n* * *\n\nAll React Spectrum applications start with a [Provider](https://react-spectrum.adobe.com/react-spectrum/Provider.html). The `Provider` specifies the theme to use, along with application level settings like the locale. Inside the `Provider`, you should render your application, including all React Spectrum components.\n\n```\nimport {Button, defaultTheme, Provider} from '@adobe/react-spectrum';\n\nfunction App() {\n  return (\n    (\n      <Provider theme={defaultTheme}>\n        <Button\n          variant=\"accent\"\n          onPress={() => alert('Hey there!')}\n        >\n          Hello React Spectrum!\n        </Button>\n      </Provider>\n    )\n  );\n}\n```\n\n```\nimport {\n  Button,\n  defaultTheme,\n  Provider\n} from '@adobe/react-spectrum';\n\nfunction App() {\n  return (\n    (\n      <Provider theme={defaultTheme}>\n        <Button\n          variant=\"accent\"\n          onPress={() => alert('Hey there!')}\n        >\n          Hello React Spectrum!\n        </Button>\n      </Provider>\n    )\n  );\n}\n```\n\n```\nimport {\n  Button,\n  defaultTheme,\n  Provider\n} from '@adobe/react-spectrum';\n\nfunction App() {\n  return (\n    (\n      <Provider\n        theme={defaultTheme}\n      >\n        <Button\n          variant=\"accent\"\n          onPress={() =>\n            alert(\n              'Hey there!'\n            )}\n        >\n          Hello React\n          Spectrum!\n        </Button>\n      </Provider>\n    )\n  );\n}\n```\n\nSee the [Provider](https://react-spectrum.adobe.com/react-spectrum/Provider.html) and [Button](https://react-spectrum.adobe.com/react-spectrum/Button.html) docs for more information about the components used in this example.\n\n* * *\n\nNow that you've set up your app, you can read the documentation for the individual components to understand them in detail. We also have high level documentation about topics like [theming](https://react-spectrum.adobe.com/react-spectrum/theming.html), [custom styling](https://react-spectrum.adobe.com/react-spectrum/styling.html), [layout](https://react-spectrum.adobe.com/react-spectrum/layout.html), and [testing](https://react-spectrum.adobe.com/react-spectrum/testing.html).",
      "length": 2863,
      "siteName": "Adobe",
      "lang": "en-US"
    }
  },
  "meta": {
    "timestamp": "2025-10-24T23:56:22.880Z",
    "durationMs": 193.88,
    "parseMessage": "Article converted to Markdown via Readability + Turndown"
  }
}