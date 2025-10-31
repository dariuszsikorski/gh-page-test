# mergeProps

**Source**: [https://react-spectrum.adobe.com/react-aria/mergeProps.html](https://react-spectrum.adobe.com/react-aria/mergeProps.html)

> Documentation for mergeProps in the React Aria package.

---

Merges multiple props objects together. Event handlers are chained, classNames are combined, and ids are deduplicated - different ids will trigger a side-effect and re-render components hooked up with \`useId\`. For all other props, the last prop object overrides all previous ones.

* * *

`mergeProps<T extends [PropsArg](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/utils/src/mergeProps.ts:PropsArg)[]>( (...args: T )): [UnionToIntersection](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/utils/src/mergeProps.ts:UnionToIntersection)<[TupleTypes](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/utils/src/mergeProps.ts:TupleTypes)<T>>`

* * *

`mergeProps` is a utility function that combines multiple props objects together in a smart way. This can be useful when you need to combine the results of multiple react-aria hooks onto a single element. For example, both hooks may return the same event handlers, class names, or ids, and only one of these can be applied. `mergeProps` handles combining these props together so that multiple event handlers will be chained, multiple classes will be combined, and ids will be deduplicated. For all other props, the last prop object overrides all previous ones.

* * *

```
import {mergeProps} from 'react-aria';

let a = {
  className: 'foo',
  onKeyDown(e) {
    if (e.key === 'Enter') {
      console.log('enter');
    }
  }
};

let b = {
  className: 'bar',
  onKeyDown(e) {
    if (e.key === ' ') {
      console.log('space');
    }
  }
};

let merged = mergeProps(a, b);
```

```
import {mergeProps} from 'react-aria';

let a = {
  className: 'foo',
  onKeyDown(e) {
    if (e.key === 'Enter') {
      console.log('enter');
    }
  }
};

let b = {
  className: 'bar',
  onKeyDown(e) {
    if (e.key === ' ') {
      console.log('space');
    }
  }
};

let merged = mergeProps(a, b);
```

```
import {mergeProps} from 'react-aria';

let a = {
  className: 'foo',
  onKeyDown(e) {
    if (
      e.key === 'Enter'
    ) {
      console.log(
        'enter'
      );
    }
  }
};

let b = {
  className: 'bar',
  onKeyDown(e) {
    if (e.key === ' ') {
      console.log(
        'space'
      );
    }
  }
};

let merged = mergeProps(
  a,
  b
);
```

The result of the above example will be equivalent to this:

```
let merged = {
  className: 'foo bar',
  onKeyDown(e) {
    a.onKeyDown(e);
    b.onKeyDown(e);
  }
};
```

```
let merged = {
  className: 'foo bar',
  onKeyDown(e) {
    a.onKeyDown(e);
    b.onKeyDown(e);
  }
};
```

```
let merged = {
  className: 'foo bar',
  onKeyDown(e) {
    a.onKeyDown(e);
    b.onKeyDown(e);
  }
};
```