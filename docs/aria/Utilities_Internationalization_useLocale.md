# useLocale

**Source**: [https://react-spectrum.adobe.com/react-aria/useLocale.html](https://react-spectrum.adobe.com/react-aria/useLocale.html)

> Documentation for useLocale in the React Aria package.

---

Returns the current locale and layout direction.

* * *

`useLocale` allows components to access the current locale and interface layout direction. By default, this is automatically detected based on the browser or system language, but it can be overridden by using the [I18nProvider](https://react-spectrum.adobe.com/react-aria/I18nProvider.html) at the root of your app.

`useLocale` should be used in the root of your app to define the [lang](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang) and [dir](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/dir) attributes so that the browser knows which language and direction the user interface should be rendered in.

* * *

`useLocale(): [Locale](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/i18n/src/useDefaultLocale.ts:Locale)`

* * *

Name

Type

Description

`locale`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

The [BCP47](https://www.ietf.org/rfc/bcp/bcp47.txt) language code for the locale.

`direction`

`[Direction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/locale.d.ts:Direction)`

The writing direction for the locale.

* * *

```
import {useLocale} from 'react-aria';

function YourApp() {
  let { locale, direction } = useLocale();

  return (
    <div lang={locale} dir={direction}>
      {/* your app here */}
    </div>
  );
}
```

```
import {useLocale} from 'react-aria';

function YourApp() {
  let { locale, direction } = useLocale();

  return (
    <div lang={locale} dir={direction}>
      {/* your app here */}
    </div>
  );
}
```

```
import {useLocale} from 'react-aria';

function YourApp() {
  let {
    locale,
    direction
  } = useLocale();

  return (
    <div
      lang={locale}
      dir={direction}
    >
      {/* your app here */}
    </div>
  );
}
```