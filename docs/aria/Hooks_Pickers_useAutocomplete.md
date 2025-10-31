# useAutocomplete

**Source**: [https://react-spectrum.adobe.com/react-aria/useAutocomplete.html](https://react-spectrum.adobe.com/react-aria/useAutocomplete.html)

> Documentation for useAutocomplete in the React Aria package.

---

beta

Provides the behavior and accessibility implementation for an autocomplete component. An autocomplete combines a text input with a collection, allowing users to filter the collection's contents match a query.

* * *

`useAutocomplete<T>( (props: [AriaAutocompleteOptions](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/autocomplete/src/useAutocomplete.ts:AriaAutocompleteOptions)<T>, , state: [AutocompleteState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/autocomplete/src/useAutocompleteState.ts:AutocompleteState) )): [AutocompleteAria](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/autocomplete/src/useAutocomplete.ts:AutocompleteAria)<T>`

* * *

Autocomplete can be implemented using the [<datalist>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist) HTML element, but this has limited functionality and behaves differently across browsers. `useAutocomplete` helps achieve accessible text input and collection that can be styled as needed.

* * *

An autocomplete consists of a text input that displays the current value and a collection of items. Users can type within the input to filter the collection. `useAutocomplete` handles exposing the correct ARIA attributes for accessibility for each of the elements comprising the autocomplete.

`useAutocomplete` returns props that you should spread onto the appropriate elements:

Name

Type

Description

`inputProps`

`[InputProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/autocomplete/src/useAutocomplete.ts:InputProps)`

Props for the autocomplete input element. These should be passed to the input's aria hooks (e.g. useTextField/useSearchField/etc) respectively.

`collectionProps`

`[CollectionOptions](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/autocomplete/src/useAutocomplete.ts:CollectionOptions)`

Props for the collection, to be passed to collection's respective aria hook (e.g. useMenu).

`collectionRef`

`[RefObject](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/refs.d.ts:RefObject)<[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element) | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)>`

Ref to attach to the wrapped collection.

`filter`

`( (nodeTextValue: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String), , node: [Node](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/collections.d.ts:Node)<T> )) => [boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

A filter function that returns if the provided collection node should be filtered out of the collection.

State is managed by the `[useAutocompleteState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/autocomplete/src/useAutocompleteState.ts:useAutocompleteState)` hook from `@react-stately/autocomplete`. The state object should be passed as an option to `useAutocomplete`.

* * *

`useAutocomplete` handles some aspects of internationalization automatically. For example, VoiceOver announcements about the item focus, count, and selection are localized. You are responsible for localizing all labels and option content that is passed into the autocomplete.