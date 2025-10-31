# I18nProvider

**Source**: [https://react-spectrum.adobe.com/react-aria/I18nProvider.html](https://react-spectrum.adobe.com/react-aria/I18nProvider.html)

> Documentation for I18nProvider in the React Aria package.

---

Provides the locale for the application to all child components.

* * *

`I18nProvider` allows you to override the default locale as determined by the browser/system setting with a locale defined by your application (e.g. application setting). This should be done by wrapping your entire application in the provider, which will be cause all child elements to receive the new locale information via [useLocale](https://react-spectrum.adobe.com/react-aria/useLocale.html).

* * *

Name

Type

Description

`children`

`[ReactNode](https://reactjs.org/docs/rendering-elements.html)`

Contents that should have the locale applied.

`locale`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

The locale to apply to the children.

* * *

```
import {I18nProvider} from 'react-aria';

<I18nProvider locale="fr-FR">
  <YourApp />
</I18nProvider>
```

```
import {I18nProvider} from 'react-aria';

<I18nProvider locale="fr-FR">
  <YourApp />
</I18nProvider>
```

```
import {I18nProvider} from 'react-aria';

<I18nProvider locale="fr-FR">
  <YourApp />
</I18nProvider>
```