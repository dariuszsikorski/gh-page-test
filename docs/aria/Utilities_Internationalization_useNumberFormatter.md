# useNumberFormatter

**Source**: [https://react-spectrum.adobe.com/react-aria/useNumberFormatter.html](https://react-spectrum.adobe.com/react-aria/useNumberFormatter.html)

> Documentation for useNumberFormatter in the React Aria package.

---

Provides localized number formatting for the current locale. Automatically updates when the locale changes, and handles caching of the number formatter for performance.

* * *

`useNumberFormatter` wraps a builtin browser [Intl.NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) object to provide a React Hook that integrates with the i18n system in React Aria. It handles formatting numbers for the current locale, updating when the locale changes, and caching of number formatters for performance. See the [Intl.NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) docs for information on formatting options.

* * *

`useNumberFormatter( (options: [NumberFormatOptions](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@internationalized/number/src/NumberFormatter.ts:NumberFormatOptions) )): [Intl.NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat)`

* * *

This example displays a currency value for two locales: USA, and Germany. Two instances of the `Currency` component are rendered, using the [I18nProvider](https://react-spectrum.adobe.com/react-aria/I18nProvider.html) to specify the locale to display.

```
import {I18nProvider, useNumberFormatter} from 'react-aria';

function Currency({ value, currency }) {
  let formatter = useNumberFormatter({
    style: 'currency',
    currency,
    minimumFractionDigits: 0
  });

  return <p>{formatter.format(value)}</p>;
}

<>
  <I18nProvider locale="en-US">
    <Currency value={125000} currency="USD" />
  </I18nProvider>
  <I18nProvider locale="de-DE">
    <Currency value={350000} currency="EUR" />
  </I18nProvider>
</>
```

```
import {I18nProvider, useNumberFormatter} from 'react-aria';

function Currency({ value, currency }) {
  let formatter = useNumberFormatter({
    style: 'currency',
    currency,
    minimumFractionDigits: 0
  });

  return <p>{formatter.format(value)}</p>;
}

<>
  <I18nProvider locale="en-US">
    <Currency value={125000} currency="USD" />
  </I18nProvider>
  <I18nProvider locale="de-DE">
    <Currency value={350000} currency="EUR" />
  </I18nProvider>
</>
```

```
import {
  I18nProvider,
  useNumberFormatter
} from 'react-aria';

function Currency(
  { value, currency }
) {
  let formatter =
    useNumberFormatter({
      style: 'currency',
      currency,
      minimumFractionDigits:
        0
    });

  return (
    <p>
      {formatter.format(
        value
      )}
    </p>
  );
}

<>
  <I18nProvider locale="en-US">
    <Currency
      value={125000}
      currency="USD"
    />
  </I18nProvider>
  <I18nProvider locale="de-DE">
    <Currency
      value={350000}
      currency="EUR"
    />
  </I18nProvider>
</>
```