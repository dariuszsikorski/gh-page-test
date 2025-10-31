# useField

**Source**: [https://react-spectrum.adobe.com/react-aria/useField.html](https://react-spectrum.adobe.com/react-aria/useField.html)

> Documentation for useField in the React Aria package.

---

Provides the accessibility implementation for input fields. Fields accept user input, gain context from their label, and may display a description or error message.

* * *

`useField( (props: [AriaFieldProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/label/src/useField.ts:AriaFieldProps) )): [FieldAria](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/label/src/useField.ts:FieldAria)`

* * *

The `useField` hook associates a form control with a label, and an optional description and/or error message. This is useful for providing context about how users should fill in a field, or a validation message. `useField` takes care of creating ids for each element and associating them with the correct ARIA attributes (`aria-labelledby` and `aria-describedby`).

By default, `useField` assumes that the label is a native HTML `<label>` element. However, if you are labeling a non-native form element, be sure to use an element other than a `<label>` and set the `labelElementType` prop appropriately.

**Note**: Many other React Aria hooks such as [useTextField](https://react-spectrum.adobe.com/react-aria/useTextField.html), [useSelect](https://react-spectrum.adobe.com/react-aria/useSelect.html), and [useComboBox](https://react-spectrum.adobe.com/react-aria/useComboBox.html) already include support for description and error message elements. If you're using one of those hooks, there's no need to use `useField`.

```
import {useField} from 'react-aria';

function ContactPicker(props) {
  let { labelProps, fieldProps, descriptionProps, errorMessageProps } =
    useField(props);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: 200,
        marginBottom: 20
      }}
    >
      <label {...labelProps}>{props.label}</label>
      <select {...fieldProps}>
        <option>Email</option>
        <option>Phone</option>
        <option>Fax</option>
        <option>Carrier pigeon</option>
      </select>
      {props.description &&
        (
          <div {...descriptionProps} style={{ fontSize: 12 }}>
            {props.description}
          </div>
        )}
      {props.errorMessage &&
        (
          <div {...errorMessageProps} style={{ color: 'red', fontSize: 12 }}>
            {props.errorMessage}
          </div>
        )}
    </div>
  );
}

<ContactPicker
  label="Preferred contact method"
  description="Select the best way to contact you about issues with your account."
/>
 <ContactPicker
  label="Preferred contact method"
  errorMessage="Select a contact method."
/>
```

```
import {useField} from 'react-aria';

function ContactPicker(props) {
  let {
    labelProps,
    fieldProps,
    descriptionProps,
    errorMessageProps
  } = useField(props);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: 200,
        marginBottom: 20
      }}
    >
      <label {...labelProps}>{props.label}</label>
      <select {...fieldProps}>
        <option>Email</option>
        <option>Phone</option>
        <option>Fax</option>
        <option>Carrier pigeon</option>
      </select>
      {props.description &&
        (
          <div
            {...descriptionProps}
            style={{ fontSize: 12 }}
          >
            {props.description}
          </div>
        )}
      {props.errorMessage &&
        (
          <div
            {...errorMessageProps}
            style={{ color: 'red', fontSize: 12 }}
          >
            {props.errorMessage}
          </div>
        )}
    </div>
  );
}

<ContactPicker
  label="Preferred contact method"
  description="Select the best way to contact you about issues with your account."
/>
 <ContactPicker
  label="Preferred contact method"
  errorMessage="Select a contact method."
/>
```

```
import {useField} from 'react-aria';

function ContactPicker(
  props
) {
  let {
    labelProps,
    fieldProps,
    descriptionProps,
    errorMessageProps
  } = useField(props);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection:
          'column',
        width: 200,
        marginBottom: 20
      }}
    >
      <label
        {...labelProps}
      >
        {props.label}
      </label>
      <select
        {...fieldProps}
      >
        <option>
          Email
        </option>
        <option>
          Phone
        </option>
        <option>
          Fax
        </option>
        <option>
          Carrier pigeon
        </option>
      </select>
      {props
        .description &&
        (
          <div
            {...descriptionProps}
            style={{
              fontSize:
                12
            }}
          >
            {props
              .description}
          </div>
        )}
      {props
        .errorMessage &&
        (
          <div
            {...errorMessageProps}
            style={{
              color:
                'red',
              fontSize:
                12
            }}
          >
            {props
              .errorMessage}
          </div>
        )}
    </div>
  );
}

<ContactPicker
  label="Preferred contact method"
  description="Select the best way to contact you about issues with your account."
/>
 <ContactPicker
  label="Preferred contact method"
  errorMessage="Select a contact method."
/>
```