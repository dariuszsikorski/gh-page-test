# useObjectRef

**Source**: [https://react-spectrum.adobe.com/react-aria/useObjectRef.html](https://react-spectrum.adobe.com/react-aria/useObjectRef.html)

> Documentation for useObjectRef in the React Aria package.

---

Offers an object ref for a given callback ref or an object ref. Especially helfpul when passing forwarded refs (created using \`React.forwardRef\`) to React Aria hooks.

* * *

`useObjectRef<T>( (ref?: ( (instance: T |  | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null) )) => () => void |  | void | MutableRefObject<T |  | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)> | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null) )): MutableRefObject<T | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)>`

* * *

`useObjectRef` is a utility function that will give an object ref back regardless of if a callback ref or object ref was passed in. This is useful for passing refs to React Aria hooks.

* * *

```
import {useButton, useObjectRef} from 'react-aria';
import {AriaButtonProps} from '@react-types/button';

let Button = React.forwardRef(
  (props: AriaButtonProps, ref: React.ForwardedRef<HTMLButtonElement>) => {
    let objRef = useObjectRef(ref);
    let { buttonProps } = useButton(props, objRef);
    let { children } = props;

    return (
      <button {...buttonProps} ref={objRef}>
        {children}
      </button>
    );
  }
);

function MyButton(props) {
  let ref = React.useRef(null);
  return (
    <Button ref={ref} onPress={() => console.log(ref.current)}>
      {props.children}
    </Button>
  );
}

<MyButton>Test</MyButton>
```

```
import {useButton, useObjectRef} from 'react-aria';
import {AriaButtonProps} from '@react-types/button';

let Button = React.forwardRef(
  (
    props: AriaButtonProps,
    ref: React.ForwardedRef<HTMLButtonElement>
  ) => {
    let objRef = useObjectRef(ref);
    let { buttonProps } = useButton(props, objRef);
    let { children } = props;

    return (
      <button {...buttonProps} ref={objRef}>
        {children}
      </button>
    );
  }
);

function MyButton(props) {
  let ref = React.useRef(null);
  return (
    <Button
      ref={ref}
      onPress={() => console.log(ref.current)}
    >
      {props.children}
    </Button>
  );
}

<MyButton>Test</MyButton>
```

```
import {
  useButton,
  useObjectRef
} from 'react-aria';
import {AriaButtonProps} from '@react-types/button';

let Button = React
  .forwardRef(
    (
      props:
        AriaButtonProps,
      ref:
        React.ForwardedRef<
          HTMLButtonElement
        >
    ) => {
      let objRef =
        useObjectRef(
          ref
        );
      let {
        buttonProps
      } = useButton(
        props,
        objRef
      );
      let { children } =
        props;

      return (
        <button
          {...buttonProps}
          ref={objRef}
        >
          {children}
        </button>
      );
    }
  );

function MyButton(
  props
) {
  let ref = React.useRef(
    null
  );
  return (
    <Button
      ref={ref}
      onPress={() =>
        console.log(
          ref.current
        )}
    >
      {props.children}
    </Button>
  );
}

<MyButton>
  Test
</MyButton>
```