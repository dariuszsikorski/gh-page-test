# useFilter

**Source**: [https://react-spectrum.adobe.com/react-aria/useFilter.html](https://react-spectrum.adobe.com/react-aria/useFilter.html)

> Documentation for useFilter in the React Aria package.

---

Provides localized string search functionality that is useful for filtering or matching items in a list. Options can be provided to adjust the sensitivity to case, diacritics, and other parameters.

* * *

`useFilter` provides functions for filtering or searching based on substring matches. The builtin JavaScript string methods `startsWith`, `endsWith`, and `includes` could be used for this, but do not implement locale sensitive matching. `useFilter` provides options to allow ignoring case, diacritics, and Unicode normalization forms, which are implemented according to locale-specific rules. It automatically uses the current locale set by the application, either via the default browser language or via the [I18nProvider](https://react-spectrum.adobe.com/react-aria/I18nProvider.html).

* * *

`useFilter( (options?: [Intl.CollatorOptions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator) )): [Filter](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/i18n/src/useFilter.ts:Filter)`

* * *

Method

Description

`startsWith( (string: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String), , substring: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) )): [boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Returns whether a string starts with a given substring.

`endsWith( (string: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String), , substring: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) )): [boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Returns whether a string ends with a given substring.

`contains( (string: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String), , substring: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) )): [boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Returns whether a string contains a given substring.

* * *

The following example implements a filterable list using a `contains` matching strategy that ignores both case and diacritics.

```
import {useFilter} from 'react-aria';

function Example() {
  const composers = [
    'Wolfgang Amadeus Mozart',
    'Johann Sebastian Bach',
    'Ludwig van Beethoven',
    'Claude Debussy',
    'George Frideric Handel',
    'Frédéric Chopin',
    'Johannes Brahms',
    'Pyotr Ilyich Tchaikovsky',
    'Antonín Dvořák',
    'Felix Mendelssohn',
    'Béla Bartók',
    'Niccolò Paganini'
  ];

  let { contains } = useFilter({
    sensitivity: 'base'
  });

  let [value, setValue] = React.useState('');
  let matchedComposers = composers.filter((composer) =>
    contains(composer, value)
  );

  return (
    <>
      <label htmlFor="search-input">Filter:</label>
      <input
        type="search"
        id="search-input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <ul style={{ height: 300 }}>
        {matchedComposers.map((composer, i) => <li key={i}>{composer}</li>)}
      </ul>
    </>
  );
}
```

```
import {useFilter} from 'react-aria';

function Example() {
  const composers = [
    'Wolfgang Amadeus Mozart',
    'Johann Sebastian Bach',
    'Ludwig van Beethoven',
    'Claude Debussy',
    'George Frideric Handel',
    'Frédéric Chopin',
    'Johannes Brahms',
    'Pyotr Ilyich Tchaikovsky',
    'Antonín Dvořák',
    'Felix Mendelssohn',
    'Béla Bartók',
    'Niccolò Paganini'
  ];

  let { contains } = useFilter({
    sensitivity: 'base'
  });

  let [value, setValue] = React.useState('');
  let matchedComposers = composers.filter((composer) =>
    contains(composer, value)
  );

  return (
    <>
      <label htmlFor="search-input">Filter:</label>
      <input
        type="search"
        id="search-input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <ul style={{ height: 300 }}>
        {matchedComposers.map((composer, i) => (
          <li key={i}>{composer}</li>
        ))}
      </ul>
    </>
  );
}
```

```
import {useFilter} from 'react-aria';

function Example() {
  const composers = [
    'Wolfgang Amadeus Mozart',
    'Johann Sebastian Bach',
    'Ludwig van Beethoven',
    'Claude Debussy',
    'George Frideric Handel',
    'Frédéric Chopin',
    'Johannes Brahms',
    'Pyotr Ilyich Tchaikovsky',
    'Antonín Dvořák',
    'Felix Mendelssohn',
    'Béla Bartók',
    'Niccolò Paganini'
  ];

  let { contains } =
    useFilter({
      sensitivity: 'base'
    });

  let [value, setValue] =
    React.useState('');
  let matchedComposers =
    composers.filter(
      (composer) =>
        contains(
          composer,
          value
        )
    );

  return (
    <>
      <label htmlFor="search-input">
        Filter:
      </label>
      <input
        type="search"
        id="search-input"
        value={value}
        onChange={(e) =>
          setValue(
            e.target
              .value
          )}
      />
      <ul
        style={{
          height: 300
        }}
      >
        {matchedComposers
          .map((
            composer,
            i
          ) => (
            <li key={i}>
              {composer}
            </li>
          ))}
      </ul>
    </>
  );
}
```