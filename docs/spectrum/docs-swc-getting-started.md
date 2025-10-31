{
  "request": {
    "url": "https://opensource.adobe.com/spectrum-web-components/getting-started/",
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
      "connection": "keep-alive",
      "content-length": "38357",
      "server": "GitHub.com",
      "content-type": "text/html; charset=utf-8",
      "last-modified": "Tue, 21 Oct 2025 12:23:25 GMT",
      "access-control-allow-origin": "*",
      "etag": "\"68f77b3d-95d5\"",
      "expires": "Sat, 25 Oct 2025 00:00:05 GMT",
      "cache-control": "max-age=600",
      "x-proxy-cache": "MISS",
      "x-github-request-id": "CEDF:148A9:171750:1773BE:68FC10AD",
      "via": "1.1 varnish, 1.1 varnish",
      "x-fastly-request-id": "b03afb14592b55269bff6a16fb561c795b0d4a58",
      "fastly-debug-states": "DELIVER",
      "accept-ranges": "bytes",
      "age": "366",
      "date": "Fri, 24 Oct 2025 23:56:12 GMT",
      "x-served-by": "cache-vie6378-VIE, cache-vie6332-VIE",
      "x-cache": "MISS, HIT",
      "x-cache-hits": "0, 0",
      "x-timer": "S1761350172.436881,VS0,VE1",
      "vary": "Accept-Encoding"
    },
    "format": "markdown",
    "article": {
      "title": "Getting started: Spectrum Web Components - Spectrum Web Components",
      "byline": null,
      "excerpt": "Spectrum Web Components provide interface components as custom elements to help teams work more efficiently and to make applications more consistent.",
      "markdown": "## Getting started\n\nThere are a couple ways to get started working with Spectrum Web Components:\n\nIf you're creating your own project, we recommend using `@open-wc`'s project generator, which will get you started in an environment similar to this repository. `@open-wc` also uses Lit for building components and `@web/test-runner` for their testing framework, making it easier for us to troubleshoot and reproduce any issues you run into, as well as reducing the amount of changes to make to your code if you decide to contribute your work to our library. For specific information on how to configure your `@open-wc` project, click here.\n\nIf you know which components you want to use, you can import those packages directly. We recommend grabbing `@spectrum-web-components/theme` in addition to your chosen components, as `sp-theme` is necessary for styling those components with Spectrum CSS. You can click here to learn about the full range of style customization provided by `@spectrum-web-components/theme`.\n\nThere is also the `@spectrum-web-components/bundle` package, which includes all of the elements defined by Spectrum Web Components in one easy-to-import entry point. The `@spectrum-web-components/bundle` package is literally _everything_ that Spectrum Web Components has to offer. This is why when bundled, it weighs as large as it does, and is why we DO NOT suggest leveraging this technique in a production application.\n\nWhether you chose to start with the bundle or a selection of components (you'll need `sp-button` and `sp-theme` for the snipped below), copy and paste the following HTML sample, and you’ll be up and running. Have fun!\n\n<sp-theme scale\\=\"large\" color\\=\"dark\"\\>\n    \n    <sp-button onclick\\=\"alert('I was clicked');\"\\>Click me!</sp-button\\>\n    \n</sp-theme\\>\n\nThe code above (with the comments around`<script>` tag removed) renders to the browser as follows (be patient while the JS for the `<iframe>` is loaded from the JSPM CDN...):\n\nNow that you have a starting point, visit the documentation for each package, if you haven't already, and find some components that are right for your project. You can take a look at our overview on webcomponents.dev to get an idea of how these components behave in a development environment, or browse through our storybook. Once you start developing, you’ll find that rapid, component-based prototyping brings your designs to life faster than ever.\n\nWhen you're ready to deploy your app to production, take a look at our Rollup and/or Webpack example projects for recommendations on how to optimize your project for that environment. Leverage the listings under the “Usage” section on each component’s documentation page to support the patterns you'll find therein. And then, when you're ready... ship, ship, ship! We look forward to seeing what you bring to life.",
      "length": 2795,
      "siteName": "Spectrum Web Components",
      "lang": "en"
    }
  },
  "meta": {
    "timestamp": "2025-10-24T23:56:12.332Z",
    "durationMs": 192.96,
    "parseMessage": "Article converted to Markdown via Readability + Turndown"
  }
}