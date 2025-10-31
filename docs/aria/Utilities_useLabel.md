# useLabel

**Source**: [https://react-spectrum.adobe.com/react-aria/useLabel.html](https://react-spectrum.adobe.com/react-aria/useLabel.html)

> Documentation for useLabel in the React Aria package.

---

Provides the accessibility implementation for labels and their associated elements. Labels provide context for user inputs.

* * *

`useLabel( (props: [LabelAriaProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/label/src/useLabel.ts:LabelAriaProps) )): [LabelAria](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/label/src/useLabel.ts:LabelAria)`

* * *

The `useLabel` hook associates a label with a field. It automatically handles creating an id for the field and associates the label with it.

```
import {useLabel} from 'react-aria';

function ColorField(props) {
  let { labelProps, fieldProps } = useLabel(props);

  return (
    <>
      <label {...labelProps}>{props.label}</label>
      <select {...fieldProps}>
        <option>Indigo</option>
        <option>Maroon</option>
        <option>Chartreuse</option>
      </select>
    </>
  );
}

<ColorField label="Favorite color" />
```

```
import {useLabel} from 'react-aria';

function ColorField(props) {
  let { labelProps, fieldProps } = useLabel(props);

  return (
    <>
      <label {...labelProps}>{props.label}</label>
      <select {...fieldProps}>
        <option>Indigo</option>
        <option>Maroon</option>
        <option>Chartreuse</option>
      </select>
    </>
  );
}

<ColorField label="Favorite color" />
```

```
import {useLabel} from 'react-aria';

function ColorField(
  props
) {
  let {
    labelProps,
    fieldProps
  } = useLabel(props);

  return (
    <>
      <label
        {...labelProps}
      >
        {props.label}
      </label>
      <select
        {...fieldProps}
      >
        <option>
          Indigo
        </option>
        <option>
          Maroon
        </option>
        <option>
          Chartreuse
        </option>
      </select>
    </>
  );
}

<ColorField label="Favorite color" />
```

By default, `useLabel` assumes that the label is a native HTML label element. However, if you are labeling a non-native form element, be sure to use an element other than a `<label>` and set the `labelElementType` prop appropriately.

See [useRadioGroup](https://react-spectrum.adobe.com/react-aria/useRadioGroup.html#example) and [useTextField](https://react-spectrum.adobe.com/react-aria/useTextField.html#example) for examples of how `useLabel` is used by components.