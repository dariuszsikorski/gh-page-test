# Forms

**Source**: [https://react-spectrum.adobe.com/react-aria/forms.html](https://react-spectrum.adobe.com/react-aria/forms.html)

> Documentation for Forms in the React Aria package.

---

Forms allow users to enter and submit data, and provide them with feedback along the way. React Aria includes many components that integrate with HTML forms, with support for custom validation and styling.

## Labels and help text[#](#labels-and-help-text)

* * *

Accessible forms start with clear, descriptive labels for each field. All React Aria form components support labeling using the `Label` component, which is automatically associated with the field via the `id` and `for` attributes on your behalf.

In addition, React Aria components support help text, which associates additional context with a field such as a description or error message. The label and help text are announced by assistive technology such as screen readers when the user focuses the field.

```
import {TextField, Label, Input, Text} from 'react-aria-components';

<TextField type="password">
  <Label>Password</Label>  <Input />
  <Text slot="description">Password must be at least 8 characters.</Text></TextField>
```

```
import {
  Input,
  Label,
  Text,
  TextField
} from 'react-aria-components';

<TextField type="password">
  <Label>Password</Label>  <Input />
  <Text slot="description">
    Password must be at least 8 characters.
  </Text></TextField>
```

```
import {
  Input,
  Label,
  Text,
  TextField
} from 'react-aria-components';

<TextField type="password">
  <Label>
    Password
  </Label>  <Input />
  <Text slot="description">
    Password must be at
    least 8 characters.
  </Text></TextField>
```

Most fields should have a visible label. In rare exceptions, the `aria-label` or `aria-labelledby` attribute must be provided instead to identify the element to screen readers.

* * *

How you submit form data depends on your framework, application, and server. By default, HTML forms are submitted by the browser using a full page refresh. You can take control of form submission by calling `preventDefault` during the `onSubmit` event, and make an API call to submit the data however you like. Frameworks like [Next.js](https://nextjs.org/docs/app/building-your-application/data-fetching/forms-and-mutations) and [Remix](https://remix.run/docs/en/main/components/form) also include builtin APIs to manage this for you.

The simplest way to get data from a form is using the browser's [FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData) API during the `onSubmit` event. This can be passed directly to [fetch](https://developer.mozilla.org/en-US/docs/Web/API/fetch), or converted into a regular JavaScript object using [Object.fromEntries](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries). Each field should have a `name` prop to identify it, and values will be serialized to strings by the browser.

```
import {Button, Form, Input, Label, TextField} from 'react-aria-components';

function Example() {
  let [submitted, setSubmitted] = React.useState(null);

  let onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Prevent default browser page refresh.
    e.preventDefault();

    // Get form data as an object.
    let data = Object.fromEntries(new FormData(e.currentTarget));

    // Submit to your backend API...
    setSubmitted(data);
  };
  return (
    <Form onSubmit={onSubmit}>
      <TextField name="name">
        <Label>Name</Label>
        <Input />
      </TextField>
      <Button type="submit">Submit</Button>
      {submitted && (
        <div>
          You submitted: <code>{JSON.stringify(submitted)}</code>
        </div>
      )}
    </Form>
  );
}
```

```
import {
  Button,
  Form,
  Input,
  Label,
  TextField
} from 'react-aria-components';

function Example() {
  let [submitted, setSubmitted] = React.useState(null);

  let onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Prevent default browser page refresh.
    e.preventDefault();

    // Get form data as an object.
    let data = Object.fromEntries(
      new FormData(e.currentTarget)
    );

    // Submit to your backend API...
    setSubmitted(data);
  };
  return (
    <Form onSubmit={onSubmit}>
      <TextField name="name">
        <Label>Name</Label>
        <Input />
      </TextField>
      <Button type="submit">Submit</Button>
      {submitted && (
        <div>
          You submitted:{' '}
          <code>{JSON.stringify(submitted)}</code>
        </div>
      )}
    </Form>
  );
}
```

```
import {
  Button,
  Form,
  Input,
  Label,
  TextField
} from 'react-aria-components';

function Example() {
  let [
    submitted,
    setSubmitted
  ] = React.useState(
    null
  );

  let onSubmit = (
    e: React.FormEvent<
      HTMLFormElement
    >
  ) => {
    // Prevent default browser page refresh.
    e.preventDefault();

    // Get form data as an object.
    let data = Object
      .fromEntries(
        new FormData(
          e.currentTarget
        )
      );

    // Submit to your backend API...
    setSubmitted(data);
  };
  return (
    <Form
      onSubmit={onSubmit}
    >
      <TextField name="name">
        <Label>
          Name
        </Label>
        <Input />
      </TextField>
      <Button type="submit">
        Submit
      </Button>
      {submitted && (
        <div>
          You submitted:
          {' '}
          <code>
            {JSON
              .stringify(
                submitted
              )}
          </code>
        </div>
      )}
    </Form>
  );
}
```

By default, all React Aria components are uncontrolled, which means that the state is stored internally on your behalf. If you need access to the value in realtime, as the user is editing, you can make it controlled. You'll need to manage the state using React's [useState](https://react.dev/reference/react/useState) hook, and pass the current value and a change handler into each form component.

```
import {Form, TextField, Label, Input, Button} from 'react-aria-components';

function Example() {
  let [name, setName] = React.useState('');
  let onSubmit = (e) => {
    e.preventDefault();

    // Submit data to your backend API...
    alert(name);
  };

  return (
    <Form onSubmit={onSubmit}>
      <TextField value={name} onChange={setName}>        <Label>Name</Label>
        <Input />
      </TextField>
      <div>You entered: {name}</div>
      <Button type="submit">Submit</Button>
    </Form>
  );
}
```

```
import {
  Button,
  Form,
  Input,
  Label,
  TextField
} from 'react-aria-components';

function Example() {
  let [name, setName] = React.useState('');
  let onSubmit = (e) => {
    e.preventDefault();

    // Submit data to your backend API...
    alert(name);
  };

  return (
    <Form onSubmit={onSubmit}>
      <TextField value={name} onChange={setName}>        <Label>Name</Label>
        <Input />
      </TextField>
      <div>You entered: {name}</div>
      <Button type="submit">Submit</Button>
    </Form>
  );
}
```

```
import {
  Button,
  Form,
  Input,
  Label,
  TextField
} from 'react-aria-components';

function Example() {
  let [name, setName] =
    React.useState('');
  let onSubmit = (e) => {
    e.preventDefault();

    // Submit data to your backend API...
    alert(name);
  };

  return (
    <Form
      onSubmit={onSubmit}
    >
      <TextField
        value={name}
        onChange={setName}
      >        <Label>
          Name
        </Label>
        <Input />
      </TextField>
      <div>
        You entered:{' '}
        {name}
      </div>
      <Button type="submit">
        Submit
      </Button>
    </Form>
  );
}
```

* * *

Form validation is important to ensure user input is in an expected format and meets business requirements. Well-designed form validation assists the user with specific, helpful error messages without confusing and frustrating them with unnecessary errors on partial input. React Aria supports native HTML constraint validation with customizable UI, custom validation functions, realtime validation, and integration with server-side validation errors.

All React Aria form components integrate with native HTML [constraint validation](https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation). This allows you to define constraints on each field such as required, minimum and maximum values, text formats such as email addresses, and even custom regular expression patterns. These constraints are checked by the browser when the user commits changes to the value (e.g. on blur) or submits the form.

React Aria's `FieldError` component makes it easy to display validation errors with custom styles rather than the browser's default UI. This example shows a required email field, which is validated by the browser and displayed with a custom UI.

```
import {FieldError} from 'react-aria-components';

<Form>
  <TextField name="email" type="email" isRequired>    <Label>Email</Label>
    <Input />
    <FieldError />  </TextField>
  <Button type="submit">Submit</Button>
</Form>
```

```
import {FieldError} from 'react-aria-components';

<Form>
  <TextField name="email" type="email" isRequired>    <Label>Email</Label>
    <Input />
    <FieldError />  </TextField>
  <Button type="submit">Submit</Button>
</Form>
```

```
import {FieldError} from 'react-aria-components';

<Form>
  <TextField
    name="email"
    type="email"
    isRequired
  >    <Label>
      Email
    </Label>
    <Input />
    <FieldError />  </TextField>
  <Button type="submit">
    Submit
  </Button>
</Form>
```

Supported constraints include:

-   `isRequired` indicates that a field must have a value before the form can be submitted.
-   `minValue` and `maxValue` specify the minimum and maximum value in a date picker or number field.
-   `minLength` and `maxLength` specify the minimum and length of text input.
-   `pattern` provides a custom [regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions) that a text input must conform to.
-   `type="email"` and `type="url"` provide builtin validation for email addresses and URLs.

See each component's documentation for more details on the supported validation props.

By default, the `FieldError` component displays the error message provided by the browser, which is localized in the user's preferred language. You can customize these messages by providing a render prop function to `FieldError`. This receives a list of error strings along with a [ValidityState](https://developer.mozilla.org/en-US/docs/Web/API/ValidityState) object describing why the field is invalid.

```
<Form>
  <TextField name="name" isRequired>
    <Label>Name</Label>
    <Input />
    <FieldError>
      {({validationDetails}) => (
        validationDetails.valueMissing ? 'Please enter a name.' : ''
      )}
    </FieldError>  </TextField>
  <Button type="submit">Submit</Button>
</Form>
```

```
<Form>
  <TextField name="name" isRequired>
    <Label>Name</Label>
    <Input />
    <FieldError>
      {({ validationDetails }) => (
        validationDetails.valueMissing
          ? 'Please enter a name.'
          : ''
      )}
    </FieldError>  </TextField>
  <Button type="submit">Submit</Button>
</Form>
```

```
<Form>
  <TextField
    name="name"
    isRequired
  >
    <Label>Name</Label>
    <Input />
    <FieldError>
      {(
        {
          validationDetails
        }
      ) => (
        validationDetails
            .valueMissing
          ? 'Please enter a name.'
          : ''
      )}
    </FieldError>  </TextField>
  <Button type="submit">
    Submit
  </Button>
</Form>
```

**Note**: The default error messages are localized by the browser using the browser/operating system language setting. React Aria's [I18nProvider](https://react-spectrum.adobe.com/react-aria/I18nProvider.html) has no effect on validation errors.

In addition to the built-in constraints, custom validation is supported by providing a function to the `validate` prop. This function receives the current field value, and can return a string or array of strings representing one or more error messages. These are displayed to the user after the value is committed (e.g. on blur) to avoid distracting them on each keystroke.

```
<Form>
  <TextField validate={value => value === 'admin' ? 'Nice try!' : null}>    <Label>Username</Label>
    <Input />
    <FieldError />
  </TextField>
  <Button type="submit">Submit</Button>
</Form>
```

```
<Form>
  <TextField
    validate={(value) =>
      value === 'admin' ? 'Nice try!' : null}
  >    <Label>Username</Label>
    <Input />
    <FieldError />
  </TextField>
  <Button type="submit">Submit</Button>
</Form>
```

```
<Form>
  <TextField
    validate={(value) =>
      value === 'admin'
        ? 'Nice try!'
        : null}
  >    <Label>
      Username
    </Label>
    <Input />
    <FieldError />
  </TextField>
  <Button type="submit">
    Submit
  </Button>
</Form>
```

By default, validation errors are displayed to the user after the value is committed (e.g. on blur), or when the form is submitted. This avoids confusing the user with irrelevant errors while they are still entering a value.

In some cases, validating in realtime can be desireable, such as when meeting password requirements. This can be accomplished by making the field value [controlled](#controlled-forms), and setting the `isInvalid` prop and `FieldError` children accordingly.

```
function Example() {
  let [password, setPassword] = React.useState('');
  let errors = [];
  if (password.length < 8) {
    errors.push('Password must be 8 characters or more.');
  }
  if ((password.match(/[A-Z]/g) ?? []).length < 2) {
    errors.push('Password must include at least 2 upper case letters');
  }
  if ((password.match(/[^a-z]/ig) ?? []).length < 2) {
    errors.push('Password must include at least 2 symbols.');
  }

  return (
    <TextField
      isInvalid={errors.length > 0}
      value={password}
      onChange={setPassword}
    >      <Label>Name</Label>
      <Input />
      <FieldError>
        <ul>{errors.map((error, i) => <li key={i}>{error}</li>)}</ul>
      </FieldError>    </TextField>
  );
}
```

```
function Example() {
  let [password, setPassword] = React.useState('');
  let errors = [];
  if (password.length < 8) {
    errors.push('Password must be 8 characters or more.');
  }
  if ((password.match(/[A-Z]/g) ?? []).length < 2) {
    errors.push(
      'Password must include at least 2 upper case letters'
    );
  }
  if ((password.match(/[^a-z]/ig) ?? []).length < 2) {
    errors.push(
      'Password must include at least 2 symbols.'
    );
  }

  return (
    <TextField
      isInvalid={errors.length > 0}
      value={password}
      onChange={setPassword}
    >      <Label>Name</Label>
      <Input />
      <FieldError>
        <ul>
          {errors.map((error, i) => <li key={i}>{error}
          </li>)}
        </ul>
      </FieldError>    </TextField>
  );
}
```

```
function Example() {
  let [
    password,
    setPassword
  ] = React.useState('');
  let errors = [];
  if (
    password.length < 8
  ) {
    errors.push(
      'Password must be 8 characters or more.'
    );
  }
  if (
    (password.match(
      /[A-Z]/g
    ) ?? []).length < 2
  ) {
    errors.push(
      'Password must include at least 2 upper case letters'
    );
  }
  if (
    (password.match(
      /[^a-z]/ig
    ) ?? []).length < 2
  ) {
    errors.push(
      'Password must include at least 2 symbols.'
    );
  }

  return (
    <TextField
      isInvalid={errors
        .length > 0}
      value={password}
      onChange={setPassword}
    >      <Label>Name</Label>
      <Input />
      <FieldError>
        <ul>
          {errors.map((
            error,
            i
          ) => (
            <li key={i}>
              {error}
            </li>
          ))}
        </ul>
      </FieldError>    </TextField>
  );
}
```

By default, invalid fields block forms from being submitted. To avoid this, use `validationBehavior="aria"`, which will only mark the field as required and invalid for assistive technologies, and will not prevent form submission.

Client side validation is useful to give the user immediate feedback, but only one half of the validation story. Data should also be validated on the backend for security and reliability, and your business logic may include rules which cannot be validated on the frontend.

React Aria supports displaying server validation errors by passing the `validationErrors` prop to the [Form](https://react-spectrum.adobe.com/react-aria/Form.html) component. This should be set to an object that maps each field's `name` prop to a string or array of strings representing one or more errors. These are displayed to the user as soon as the `validationErrors` prop is set, and cleared after the user modifies each field's value.

```
function Example() {
  let [errors, setErrors] = React.useState({});  let onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let data = Object.fromEntries(new FormData(e.currentTarget));
    let result = await callServer(data)
    setErrors(result.errors);  };

  return (
    <Form validationErrors={errors} onSubmit={onSubmit}>      <TextField name="username" isRequired>
        <Label>Username</Label>
        <Input />
        <FieldError />
      </TextField>
      <TextField name="password" type="password" isRequired>
        <Label>Password</Label>
        <Input />
        <FieldError />
      </TextField>
      <Button type="submit">Submit</Button>
    </Form>
  );
}

// Fake server used in this example.
function callServer(data) {
  return {
    errors: {
      username: 'Sorry, this username is taken.'
    }
  };
}
```

```
function Example() {
  let [errors, setErrors] = React.useState({});  let onSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    let data = Object.fromEntries(
      new FormData(e.currentTarget)
    );
    let result = await callServer(data);
    setErrors(result.errors);  };

  return (
    <Form validationErrors={errors} onSubmit={onSubmit}>      <TextField name="username" isRequired>
        <Label>Username</Label>
        <Input />
        <FieldError />
      </TextField>
      <TextField name="password" type="password" isRequired>
        <Label>Password</Label>
        <Input />
        <FieldError />
      </TextField>
      <Button type="submit">Submit</Button>
    </Form>
  );
}

// Fake server used in this example.
function callServer(data) {
  return {
    errors: {
      username: 'Sorry, this username is taken.'
    }
  };
}
```

```
function Example() {
  let [
    errors,
    setErrors
  ] = React.useState({});  let onSubmit = async (
    e: React.FormEvent<
      HTMLFormElement
    >
  ) => {
    e.preventDefault();

    let data = Object
      .fromEntries(
        new FormData(
          e.currentTarget
        )
      );
    let result =
      await callServer(
        data
      );
    setErrors(
      result.errors
    );  };

  return (
    <Form
      validationErrors={errors}
      onSubmit={onSubmit}
    >      <TextField
        name="username"
        isRequired
      >
        <Label>
          Username
        </Label>
        <Input />
        <FieldError />
      </TextField>
      <TextField
        name="password"
        type="password"
        isRequired
      >
        <Label>
          Password
        </Label>
        <Input />
        <FieldError />
      </TextField>
      <Button type="submit">
        Submit
      </Button>
    </Form>
  );
}

// Fake server used in this example.
function callServer(
  data
) {
  return {
    errors: {
      username:
        'Sorry, this username is taken.'
    }
  };
}
```

React Aria is compatible with errors returned from schema validation libraries like [Zod](https://zod.dev/), which are often used for server-side form validation. Use the [flatten](https://zod.dev/ERROR_HANDLING?id=flattening-errors) method to get a list of errors for each field and return this as part of your HTTP response.

```
// In your server...
import {z} from 'zod';

const schema = z.object({
  name: z.string().min(1),
  age: z.coerce.number().positive()
});

function handleRequest(formData: FormData) {
  let result = schema.safeParse(Object.fromEntries(formData));
  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors    };
  }

  // Do stuff...

  return {
    errors: {}
  };
}
```

```
// In your server...
import {z} from 'zod';

const schema = z.object({
  name: z.string().min(1),
  age: z.coerce.number().positive()
});

function handleRequest(formData: FormData) {
  let result = schema.safeParse(
    Object.fromEntries(formData)
  );
  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors    };
  }

  // Do stuff...

  return {
    errors: {}
  };
}
```

```
// In your server...
import {z} from 'zod';

const schema = z.object({
  name: z.string().min(
    1
  ),
  age: z.coerce.number()
    .positive()
});

function handleRequest(
  formData: FormData
) {
  let result = schema
    .safeParse(
      Object.fromEntries(
        formData
      )
    );
  if (!result.success) {
    return {
      errors:
        result.error
          .flatten()
          .fieldErrors    };
  }

  // Do stuff...

  return {
    errors: {}
  };
}
```

Note that error message localization is also best done on the server rather than on the client to avoid large bundles. You can submit the user's locale as part of the form data if needed, and use something like [zod-i18n](https://github.com/aiji42/zod-i18n) to translate the errors into the correct language.

[Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/forms-and-mutations) are a new React feature currently supported by Next.js. They enable the client to seamlessly call the server without setting up any API routes, and integrate with forms via the `action` prop. The [useFormState](https://react.dev/reference/react-dom/hooks/useFormState) hook can be used to get the value returned by a server action after submitting a form, which may include validation errors.

```
// app/add-form.tsx
'use client';

import {useFormState} from 'react-dom';
import {Button, FieldError, Form, Input, Label, TextField} from 'react-aria-components';
import {createTodo} from '@/app/actions';

export function AddForm() {
  let [{ errors }, formAction] = useFormState(createTodo, { errors: {} });
  return (
    <Form action={formAction} validationErrors={errors}>      <TextField name="todo">
        <Label>Task</Label>
        <Input />
        <FieldError />
      </TextField>
      <Button type="submit">Add</Button>
    </Form>
  );
}
```

```
// app/add-form.tsx
'use client';

import {useFormState} from 'react-dom';
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField
} from 'react-aria-components';
import {createTodo} from '@/app/actions';

export function AddForm() {
  let [{ errors }, formAction] = useFormState(createTodo, {
    errors: {}
  });
  return (
    <Form action={formAction} validationErrors={errors}>      <TextField name="todo">
        <Label>Task</Label>
        <Input />
        <FieldError />
      </TextField>
      <Button type="submit">Add</Button>
    </Form>
  );
}
```

```
// app/add-form.tsx
'use client';

import {useFormState} from 'react-dom';
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField
} from 'react-aria-components';
import {createTodo} from '@/app/actions';

export function AddForm() {
  let [
    { errors },
    formAction
  ] = useFormState(
    createTodo,
    { errors: {} }
  );
  return (
    <Form
      action={formAction}
      validationErrors={errors}
    >      <TextField name="todo">
        <Label>
          Task
        </Label>
        <Input />
        <FieldError />
      </TextField>
      <Button type="submit">
        Add
      </Button>
    </Form>
  );
}
```

```
// app/actions.ts
'use server';

export async function createTodo(prevState: any, formData: FormData) {
  try {
    // Create the todo...
  } catch (err) {
    return {
      errors: {
        todo: 'Invalid todo.'      }
    };
  }
}
```

```
// app/actions.ts
'use server';

export async function createTodo(
  prevState: any,
  formData: FormData
) {
  try {
    // Create the todo...
  } catch (err) {
    return {
      errors: {
        todo: 'Invalid todo.'      }
    };
  }
}
```

```
// app/actions.ts
'use server';

export async function createTodo(
  prevState: any,
  formData: FormData
) {
  try {
    // Create the todo...
  } catch (err) {
    return {
      errors: {
        todo:
          'Invalid todo.'      }
    };
  }
}
```

[Remix actions](https://remix.run/docs/en/main/route/action) handle form submissions on the server. The [useSubmit](https://remix.run/docs/en/main/hooks/use-submit) hook can be used to submit data to the server, and the [useActionData](https://remix.run/docs/en/main/hooks/use-action-data) hook can be used to get the value returned by the server, which may include validation errors.

```
// app/routes/signup.tsx
import type {ActionFunctionArgs} from '@remix-run/node';
import {useActionData, useSubmit} from '@remix-run/react';
import {Button, FieldError, Form, Input, Label, TextField} from 'react-aria-components';

export default function SignupForm() {
  let submit = useSubmit();
  let onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submit(e.currentTarget);
  };

  let actionData = useActionData<typeof action>();
  return (
    <Form
      method="post"
      validationErrors={actionData?.errors}      onSubmit={onSubmit}
    >
      <TextField name="username" isRequired>
        <Label>Username</Label>
        <Input />
        <FieldError />
      </TextField>
      <TextField name="password" type="password" isRequired>
        <Label>Password</Label>
        <Input />
        <FieldError />
      </TextField>
      <Button type="submit">Submit</Button>
    </Form>
  );
}

export async function action({ request }: ActionFunctionArgs) {
  try {
    // Validate data and perform action...
  } catch (err) {
    return {
      errors: {
        username: 'Sorry, this username is taken.'      }
    };
  }
}
```

```
// app/routes/signup.tsx
import type {ActionFunctionArgs} from '@remix-run/node';
import {useActionData, useSubmit} from '@remix-run/react';
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField
} from 'react-aria-components';

export default function SignupForm() {
  let submit = useSubmit();
  let onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submit(e.currentTarget);
  };

  let actionData = useActionData<typeof action>();
  return (
    <Form
      method="post"
      validationErrors={actionData?.errors}      onSubmit={onSubmit}
    >
      <TextField name="username" isRequired>
        <Label>Username</Label>
        <Input />
        <FieldError />
      </TextField>
      <TextField name="password" type="password" isRequired>
        <Label>Password</Label>
        <Input />
        <FieldError />
      </TextField>
      <Button type="submit">Submit</Button>
    </Form>
  );
}

export async function action(
  { request }: ActionFunctionArgs
) {
  try {
    // Validate data and perform action...
  } catch (err) {
    return {
      errors: {
        username: 'Sorry, this username is taken.'      }
    };
  }
}
```

```
// app/routes/signup.tsx
import type {ActionFunctionArgs} from '@remix-run/node';
import {
  useActionData,
  useSubmit
} from '@remix-run/react';
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField
} from 'react-aria-components';

export default function SignupForm() {
  let submit =
    useSubmit();
  let onSubmit = (
    e: React.FormEvent<
      HTMLFormElement
    >
  ) => {
    e.preventDefault();
    submit(
      e.currentTarget
    );
  };

  let actionData =
    useActionData<
      typeof action
    >();
  return (
    <Form
      method="post"
      validationErrors={actionData
        ?.errors}      onSubmit={onSubmit}
    >
      <TextField
        name="username"
        isRequired
      >
        <Label>
          Username
        </Label>
        <Input />
        <FieldError />
      </TextField>
      <TextField
        name="password"
        type="password"
        isRequired
      >
        <Label>
          Password
        </Label>
        <Input />
        <FieldError />
      </TextField>
      <Button type="submit">
        Submit
      </Button>
    </Form>
  );
}

export async function action(
  { request }:
    ActionFunctionArgs
) {
  try {
    // Validate data and perform action...
  } catch (err) {
    return {
      errors: {
        username:
          'Sorry, this username is taken.'      }
    };
  }
}
```

* * *

In most cases, uncontrolled forms with the builtin validation features are enough. However, if you are building a truly complex form, or integrating React Aria components into an existing form, a separate form library such as [React Hook Form](https://react-hook-form.com/) or [Formik](https://formik.org/) may be helpful.

[React Hook Form](https://react-hook-form.com/) is a popular form library for React. It is primarily designed to work directly with plain HTML input elements, but supports custom form components like the ones in React Aria as well.

Since React Aria manages the state for components internally, you can use the [Controller](https://react-hook-form.com/docs/usecontroller/controller) component from React Hook Form to integrate React Aria components. Pass the props for the `field` render prop through to the React Aria component you're using, and use the `fieldState` to get validation errors to display.

```
import {Controller, useForm} from 'react-hook-form';
import {Button, FieldError, Form, Input, Label, TextField} from 'react-aria-components';

function App() {
  let { handleSubmit, control } = useForm({
    defaultValues: {
      name: ''
    }
  });
  let onSubmit = (data) => {
    // Call your API here...
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="name"
        rules={{ required: 'Name is required.' }}
        render={({
          field: { name, value, onChange, onBlur, ref },
          fieldState: { invalid, error }
        }) => (
          <TextField
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            isRequired
            // Let React Hook Form handle validation instead of the browser.
            validationBehavior="aria"
            isInvalid={invalid}
          >
            <Label>Name</Label>
            // Assign React Hook Form ref to Input so it can focus the Input
            after validation.
            <Input ref={ref} />
            <FieldError>{error?.message}</FieldError>
          </TextField>
        )}
      />
      <Button type="submit">Submit</Button>
    </Form>
  );
}
```

```
import {Controller, useForm} from 'react-hook-form';
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField
} from 'react-aria-components';

function App() {
  let { handleSubmit, control } = useForm({
    defaultValues: {
      name: ''
    }
  });
  let onSubmit = (data) => {
    // Call your API here...
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="name"
        rules={{ required: 'Name is required.' }}
        render={({
          field: { name, value, onChange, onBlur, ref },
          fieldState: { invalid, error }
        }) => (
          <TextField
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            isRequired
            // Let React Hook Form handle validation instead of the browser.
            validationBehavior="aria"
            isInvalid={invalid}
          >
            <Label>Name</Label>
            // Assign React Hook Form ref to Input so it can
            focus the Input after validation.
            <Input ref={ref} />
            <FieldError>{error?.message}</FieldError>
          </TextField>
        )}
      />
      <Button type="submit">Submit</Button>
    </Form>
  );
}
```

```
import {
  Controller,
  useForm
} from 'react-hook-form';
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField
} from 'react-aria-components';

function App() {
  let {
    handleSubmit,
    control
  } = useForm({
    defaultValues: {
      name: ''
    }
  });
  let onSubmit = (
    data
  ) => {
    // Call your API here...
  };

  return (
    <Form
      onSubmit={handleSubmit(
        onSubmit
      )}
    >
      <Controller
        control={control}
        name="name"
        rules={{
          required:
            'Name is required.'
        }}
        render={({
          field: {
            name,
            value,
            onChange,
            onBlur,
            ref
          },
          fieldState: {
            invalid,
            error
          }
        }) => (
          <TextField
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            isRequired
            // Let React Hook Form handle validation instead of the browser.
            validationBehavior="aria"
            isInvalid={invalid}
          >
            <Label>
              Name
            </Label>
            // Assign
            React Hook
            Form ref to
            Input so it
            can focus the
            Input after
            validation.
            <Input
              ref={ref}
            />
            <FieldError>
              {error
                ?.message}
            </FieldError>
          </TextField>
        )}
      />
      <Button type="submit">
        Submit
      </Button>
    </Form>
  );
}
```

* * *

If you're using React Aria hooks rather than components, native form validation can be enabled using the `validationBehavior="native"` prop. Each hook returns validation information which can be used to render error messages with custom styles.

```
let {isInvalid, validationErrors, validationDetails} = useTextField(props, ref);
```

```
let { isInvalid, validationErrors, validationDetails } =
  useTextField(props, ref);
```

```
let {
  isInvalid,
  validationErrors,
  validationDetails
} = useTextField(
  props,
  ref
);
```

Name

Type

Description

`isInvalid`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether the input value is invalid.

`validationErrors`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)[]`

The current error messages for the input if it is invalid, otherwise an empty array.

`validationDetails`

`ValidityState`

The native validation details for the input.

Server errors can be provided using the `FormValidationContext` directly, or using the `Form` component from `react-aria-components` as described above.

```
import {FormValidationContext} from 'react-stately';

<FormValidationContext.Provider
  value={{ username: 'This username is taken.' }}
>
  <MyTextField
    name="username"
    isRequired
    validationBehavior="native"
  />
  {/* ... */}
</FormValidationContext.Provider>
```

```
import {FormValidationContext} from 'react-stately';

<FormValidationContext.Provider
  value={{ username: 'This username is taken.' }}
>
  <MyTextField
    name="username"
    isRequired
    validationBehavior="native"
  />
  {/* ... */}
</FormValidationContext.Provider>
```

```
import {FormValidationContext} from 'react-stately';

<FormValidationContext.Provider
  value={{
    username:
      'This username is taken.'
  }}
>
  <MyTextField
    name="username"
    isRequired
    validationBehavior="native"
  />
  {/* ... */}
</FormValidationContext.Provider>
```

See the [useTextField](https://react-spectrum.adobe.com/react-aria/useTextField.html) docs for an example of how to render validation errors.