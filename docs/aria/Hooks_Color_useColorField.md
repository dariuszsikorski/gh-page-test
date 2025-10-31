# useColorField

**Source**: [https://react-spectrum.adobe.com/react-aria/useColorField.html](https://react-spectrum.adobe.com/react-aria/useColorField.html)

> Documentation for useColorField in the React Aria package.

---

Provides the behavior and accessibility implementation for a color field component. Color fields allow users to enter and adjust a hex color value.

* * *

`useColorField( props: [AriaColorFieldProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/color/src/index.d.ts:AriaColorFieldProps), state: [ColorFieldState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/color/src/useColorFieldState.ts:ColorFieldState), ref: RefObject<[HTMLInputElement](https://developer.mozilla.org/docs/Web/API/HTMLInputElement) |  | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)> ): [ColorFieldAria](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/color/src/useColorField.ts:ColorFieldAria)`

* * *

The [<input type="color">](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color) HTML element can be used to build a color picker, however it is very inconsistent across browsers and operating systems and consists of a complete color picker rather than a single field for editing a hex value. `useColorField` helps achieve accessible color fields that can be styled as needed.

-   Support for parsing and formatting a hex color value
-   Validates keyboard entry as the user types so that only valid hex characters are accepted
-   Supports using the arrow keys to increment and decrement the value
-   Exposed to assistive technology as a `textbox` via ARIA
-   Visual and ARIA labeling support
-   Follows the [spinbutton](https://www.w3.org/WAI/ARIA/apg/patterns/spinbutton/) ARIA pattern
-   Works around bugs in VoiceOver with the spinbutton role
-   Uses an ARIA live region to ensure that value changes are announced

* * *

Shows a color field component with labels pointing to its parts, including the input, and label elements.#ABCDEFBackground colorInputLabel

A color field consists of an input element and a label. `useColorField` automatically manages the relationship between the two elements using the `for` attribute on the `<label>` element and the `aria-labelledby` attribute on the `<input>` element.

`useColorField` returns two sets of props that you should spread onto the appropriate element:

Name

Type

Description

`labelProps`

`[LabelHTMLAttributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label#attributes)<[HTMLLabelElement](https://developer.mozilla.org/docs/Web/API/HTMLLabelElement)>`

Props for the label element.

`inputProps`

`[InputHTMLAttributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes)<[HTMLInputElement](https://developer.mozilla.org/docs/Web/API/HTMLInputElement)>`

Props for the input element.

`descriptionProps`

`[DOMAttributes](https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes)`

Props for the text field's description element, if any.

`errorMessageProps`

`[DOMAttributes](https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes)`

Props for the text field's error message element, if any.

`isInvalid`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether the input value is invalid.

`validationErrors`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)[]`

The current error messages for the input if it is invalid, otherwise an empty array.

`validationDetails`

`ValidityState`

The native validation details for the input.

State is managed by the `[useColorFieldState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/color/src/useColorFieldState.ts:useColorFieldState)` hook from `@react-stately/color`. The state object should be passed as an option to `useColorField`

If there is no visual label, an `aria-label` or `aria-labelledby` prop must be passed instead to identify the element to screen readers.

* * *

```
import {useColorFieldState} from 'react-stately';
import {useColorField} from 'react-aria';

function ColorField(props) {
  let state = useColorFieldState(props);
  let inputRef = React.useRef(null);
  let {
    labelProps,
    inputProps
  } = useColorField(props, state, inputRef);

  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column' }}>
      <label {...labelProps}>{props.label}</label>
      <input {...inputProps} ref={inputRef} />
    </div>
  );
}

<ColorField label="Color" />
```

```
import {useColorFieldState} from 'react-stately';
import {useColorField} from 'react-aria';

function ColorField(props) {
  let state = useColorFieldState(props);
  let inputRef = React.useRef(null);
  let {
    labelProps,
    inputProps
  } = useColorField(props, state, inputRef);

  return (
    <div
      style={{
        display: 'inline-flex',
        flexDirection: 'column'
      }}
    >
      <label {...labelProps}>{props.label}</label>
      <input {...inputProps} ref={inputRef} />
    </div>
  );
}

<ColorField label="Color" />
```

```
import {useColorFieldState} from 'react-stately';
import {useColorField} from 'react-aria';

function ColorField(
  props
) {
  let state =
    useColorFieldState(
      props
    );
  let inputRef = React
    .useRef(null);
  let {
    labelProps,
    inputProps
  } = useColorField(
    props,
    state,
    inputRef
  );

  return (
    <div
      style={{
        display:
          'inline-flex',
        flexDirection:
          'column'
      }}
    >
      <label
        {...labelProps}
      >
        {props.label}
      </label>
      <input
        {...inputProps}
        ref={inputRef}
      />
    </div>
  );
}

<ColorField label="Color" />
```

* * *

The following examples show how to use the `ColorField` component created in the above example.

By default, `ColorField` is uncontrolled. You can set a default value using the `defaultValue` prop.

```
<ColorField aria-label="Color" defaultValue="#7f007f" />
```

```
<ColorField aria-label="Color" defaultValue="#7f007f" />
```

```
<ColorField
  aria-label="Color"
  defaultValue="#7f007f"
/>
```

A `ColorField` can be made controlled. The `[parseColor](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/color/src/Color.ts:parseColor)` function is used to parse the initial color from a hex string, stored in state. The `value` and `onChange` props are used to update the value in state when the edits the value.

```
import {parseColor} from 'react-stately';

function Example() {
  let [color, setColor] = React.useState(parseColor('#7f007f'));
  return (
    <>
      <ColorField aria-label="Color" value={color} onChange={setColor} />
      <p>Current color value: {color.toString('hex')}</p>
    </>
  );
}
```

```
import {parseColor} from 'react-stately';

function Example() {
  let [color, setColor] = React.useState(
    parseColor('#7f007f')
  );
  return (
    <>
      <ColorField
        aria-label="Color"
        value={color}
        onChange={setColor}
      />
      <p>Current color value: {color.toString('hex')}</p>
    </>
  );
}
```

```
import {parseColor} from 'react-stately';

function Example() {
  let [color, setColor] =
    React.useState(
      parseColor(
        '#7f007f'
      )
    );
  return (
    <>
      <ColorField
        aria-label="Color"
        value={color}
        onChange={setColor}
      />
      <p>
        Current color
        value:{' '}
        {color.toString(
          'hex'
        )}
      </p>
    </>
  );
}
```

### Disabled and read only[#](#disabled-and-read-only)

A `ColorField` can be disabled using the `isDisabled` prop, and made read only using the `isReadOnly` prop. The difference is that read only color fields are focusable but disabled color fields are not.

```
<ColorField aria-label="Color" defaultValue="#7f007f" isDisabled />
<ColorField aria-label="Color" defaultValue="#7f007f" isReadOnly />
```

```
<ColorField
  aria-label="Color"
  defaultValue="#7f007f"
  isDisabled
/>
<ColorField
  aria-label="Color"
  defaultValue="#7f007f"
  isReadOnly
/>
```

```
<ColorField
  aria-label="Color"
  defaultValue="#7f007f"
  isDisabled
/>
<ColorField
  aria-label="Color"
  defaultValue="#7f007f"
  isReadOnly
/>
```

ColorField supports the `name` prop for integration with HTML forms. The value will be submitted to the server as a hex color string.

```
<ColorField label="Color" name="color" />
```

```
<ColorField label="Color" name="color" />
```

```
<ColorField
  label="Color"
  name="color"
/>
```

* * *

In right-to-left languages, color fields should be mirrored. The label should be right aligned, along with the text in the input. Ensure that your CSS accounts for this.