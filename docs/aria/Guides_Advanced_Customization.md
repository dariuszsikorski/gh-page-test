# Advanced Customization

**Source**: [https://react-spectrum.adobe.com/react-aria/advanced.html](https://react-spectrum.adobe.com/react-aria/advanced.html)

> React Aria Components is built using a flexible and composable API that you can extend to build new patterns. If you need even more customizability, drop down to the lower level Hook-based API for even more control over rendering and behavior. Mix and match as needed.

---

React Aria Components is built using a flexible and composable API that you can extend to build new patterns. If you need even more customizability, drop down to the lower level Hook-based API for even more control over rendering and behavior. Mix and match as needed.

* * *

The React Aria Components API is designed around composition. Components are reused between patterns to build larger composite components. For example, there is no dedicated `NumberFieldIncrementButton` or `SelectPopover` component. Instead, the standalone [Button](https://react-spectrum.adobe.com/react-aria/Button.html) and [Popover](https://react-spectrum.adobe.com/react-aria/Popover.html) components are reused within [NumberField](https://react-spectrum.adobe.com/react-aria/NumberField.html) and [Select](https://react-spectrum.adobe.com/react-aria/Select.html). This reduces the amount of duplicate styling code you need to write and maintain, and provides powerful composition capabilities you can use in your own components.

```
<NumberField>
  <Label>Width</Label>
  <Group>
    <Input />
    <Button slot="increment">+</Button>
    <Button slot="decrement">-</Button>
  </Group>
</NumberField>
```

```
<NumberField>
  <Label>Width</Label>
  <Group>
    <Input />
    <Button slot="increment">+</Button>
    <Button slot="decrement">-</Button>
  </Group>
</NumberField>
```

```
<NumberField>
  <Label>Width</Label>
  <Group>
    <Input />
    <Button slot="increment">
      +
    </Button>
    <Button slot="decrement">
      -
    </Button>
  </Group>
</NumberField>
```

React Aria Components automatically provide behavior to their children by passing event handlers and other attributes via context. For example, the increment and decrement buttons in a `NumberField` receive `onPress` handlers that update the value. Keeping each element of a component separate enables full styling, layout, and DOM structure control, and contexts ensure that accessibility and behavior are taken care of on your behalf.

This architecture also enables you to reuse React Aria Components in your own custom patterns, or even replace one part of a component with your own custom implementation without rebuilding the whole pattern from scratch.

Each React Aria Component exports a corresponding context that you can use to build your own compositional APIs similar to the built-in components. You can send any prop or ref via context that you could pass to the corresponding component. The local props and ref on the component are merged with the ones passed via context, with the local props taking precedence (following the rules documented in [mergeProps](https://react-spectrum.adobe.com/react-aria/mergeProps.html)).

This example shows a `FieldGroup` component that renders a group of text fields. The entire group can be marked as disabled via the `isDisabled` prop, which is passed to all child text fields via the `TextFieldContext` provider.

```
import {TextFieldContext} from 'react-aria-components';

interface FieldGroupProps {
  children?: React.ReactNode,
  isDisabled?: boolean
}

function FieldGroup({children, isDisabled}: FieldGroupProps) {
  return (
    <TextFieldContext.Provider value={{isDisabled}}>      {children}
    </TextFieldContext.Provider>
  );
}
```

```
import {TextFieldContext} from 'react-aria-components';

interface FieldGroupProps {
  children?: React.ReactNode;
  isDisabled?: boolean;
}

function FieldGroup(
  { children, isDisabled }: FieldGroupProps
) {
  return (
    <TextFieldContext.Provider value={{ isDisabled }}>      {children}
    </TextFieldContext.Provider>
  );
}
```

```
import {TextFieldContext} from 'react-aria-components';

interface FieldGroupProps {
  children?:
    React.ReactNode;
  isDisabled?: boolean;
}

function FieldGroup(
  {
    children,
    isDisabled
  }: FieldGroupProps
) {
  return (
    <TextFieldContext.Provider
      value={{
        isDisabled
      }}
    >      {children}
    </TextFieldContext.Provider>
  );
}
```

Any `TextField` component you place inside a `FieldGroup` will automatically receive the `isDisabled` prop from the group, including those that are deeply nested inside other components.

```
<FieldGroup isDisabled={isSubmitting}>
  <MyTextField label="Name" />
  <MyTextField label="Email" />
  <CreditCardFields />
</FieldGroup>
```

```
<FieldGroup isDisabled={isSubmitting}>
  <MyTextField label="Name" />
  <MyTextField label="Email" />
  <CreditCardFields />
</FieldGroup>
```

```
<FieldGroup
  isDisabled={isSubmitting}
>
  <MyTextField label="Name" />
  <MyTextField label="Email" />
  <CreditCardFields />
</FieldGroup>
```

The contexts consumed by each component are listed in the Advanced Customization section of their documentation, along with examples of some potential use cases.

Some patterns include multiple instances of the same component. These use the `slot` prop to distinguish each instance. Slots are named children within a component that can receive separate behaviors and [styles](https://react-spectrum.adobe.com/react-aria/styling.html#slots). Separate props can be sent to slots by providing an object with keys for each slot name to the component's context provider.

This example shows a `Stepper` component with slots for its increment and decrement buttons.

```
function Stepper({children}) {
  let [value, setValue] = React.useState(0);

  return (
    <ButtonContext.Provider
      value={{
        slots: {
          increment: {
            onPress: () => setValue(value + 1)
          },
          decrement: {
            onPress: () => setValue(value - 1)
          }
        }
      }}>
      {children}
    </ButtonContext.Provider>
  );
}

<Stepper>
  <Button slot="increment">⬆</Button>
  <Button slot="decrement">⬇</Button>
</Stepper>
```

```
function Stepper({children}) {
  let [value, setValue] = React.useState(0);

  return (
    <ButtonContext.Provider
      value={{
        slots: {
          increment: {
            onPress: () => setValue(value + 1)
          },
          decrement: {
            onPress: () => setValue(value - 1)
          }
        }
      }}>
      {children}
    </ButtonContext.Provider>
  );
}

<Stepper>
  <Button slot="increment">⬆</Button>
  <Button slot="decrement">⬇</Button>
</Stepper>
```

```
function Stepper(
  { children }
) {
  let [value, setValue] =
    React.useState(0);

  return (
    <ButtonContext.Provider
      value={{
        slots: {
          increment: {
            onPress:
              () =>
                setValue(
                  value +
                    1
                )
          },
          decrement: {
            onPress:
              () =>
                setValue(
                  value -
                    1
                )
          }
        }
      }}
    >
      {children}
    </ButtonContext.Provider>
  );
}

<Stepper>
  <Button slot="increment">
    ⬆
  </Button>
  <Button slot="decrement">
    ⬇
  </Button>
</Stepper>
```

The slots provided by each built-in React Aria component are shown in the Anatomy section of their documentation.

The default slot is used to provide props to a component without specifying a slot name. This approach allows you to assign a default slot to a component for its default use case and enables you to specify a slot name for a specific use case.

This example shows a custom component that passes a specific class name to a standard button child and to a button child with a slot named "end".

```
import {Button, ButtonContext, DEFAULT_SLOT} from 'react-aria-components';

function MyCustomComponent({children}) {
  return (
    <ButtonContext.Provider
      value={{
        slots: {
          [DEFAULT_SLOT]: {
            className: "left-button"
          },
          end: {
            className: "right-button"
          }
        }
      }}>
      {children}
    </ButtonContext.Provider>
  );
}

<MyCustomComponent>
  {/* Consumes the props passed to the default slot */}
  <Button>Click me</Button>
</MyCustomComponent>

<MyCustomComponent>
  {/* Consumes the props passed to the "end" slot */}
  <Button slot="end">Click me</Button>
</MyCustomComponent>
```

```
import {
  Button,
  ButtonContext,
  DEFAULT_SLOT
} from 'react-aria-components';

function MyCustomComponent({ children }) {
  return (
    <ButtonContext.Provider
      value={{
        slots: {
          [DEFAULT_SLOT]: {
            className: 'left-button'
          },
          end: {
            className: 'right-button'
          }
        }
      }}
    >
      {children}
    </ButtonContext.Provider>
  );
}

<MyCustomComponent>
  {/* Consumes the props passed to the default slot */}
  <Button>Click me</Button>
</MyCustomComponent>
 <MyCustomComponent>
  {/* Consumes the props passed to the "end" slot */}
  <Button slot="end">Click me</Button>
</MyCustomComponent>
```

```
import {
  Button,
  ButtonContext,
  DEFAULT_SLOT
} from 'react-aria-components';

function MyCustomComponent(
  { children }
) {
  return (
    <ButtonContext.Provider
      value={{
        slots: {
          [DEFAULT_SLOT]:
            {
              className:
                'left-button'
            },
          end: {
            className:
              'right-button'
          }
        }
      }}
    >
      {children}
    </ButtonContext.Provider>
  );
}

<MyCustomComponent>
  {/* Consumes the props passed to the default slot */}
  <Button>
    Click me
  </Button>
</MyCustomComponent>
 <MyCustomComponent>
  {/* Consumes the props passed to the "end" slot */}
  <Button slot="end">
    Click me
  </Button>
</MyCustomComponent>
```

In complex components, you may need to provide many contexts. The `Provider` component is a utility that makes it easier to provide multiple React contexts without manually nesting them. This can be achieved by passing pairs of contexts and values as an array to the `values` prop.

```
import {Provider, ButtonContext, InputContext} from 'react-aria-components';

<Provider
  values={[
    [ButtonContext, {/* ... */}],
    [InputContext, {/* ... */}]
  ]}>
  {/* ... */}
</Provider>
```

```
import {
  ButtonContext,
  InputContext,
  Provider
} from 'react-aria-components';

<Provider
  values={[
    [ButtonContext, {/* ... */}],
    [InputContext, {/* ... */}]
  ]}
>
  {/* ... */}
</Provider>
```

```
import {
  ButtonContext,
  InputContext,
  Provider
} from 'react-aria-components';

<Provider
  values={[
    [ButtonContext, {
      /* ... */
    }],
    [InputContext, {
      /* ... */
    }]
  ]}
>
  {/* ... */}
</Provider>
```

This is equivalent to:

```
<ButtonContext.Provider value={{/* ... */}}>
  <InputContext.Provider value={{/* ... */}}>
    {/* ... */}
  </InputContext.Provider>
</ButtonContext.Provider>
```

```
<ButtonContext.Provider value={{/* ... */}}>
  <InputContext.Provider value={{/* ... */}}>
    {/* ... */}
  </InputContext.Provider>
</ButtonContext.Provider>
```

```
<ButtonContext.Provider
  value={{/* ... */}}
>
  <InputContext.Provider
    value={{/* ... */}}
  >
    {/* ... */}
  </InputContext.Provider>
</ButtonContext.Provider>
```

You can also consume from contexts provided by React Aria Components in your own custom components. This allows you to replace a component used as part of a larger pattern with a custom implementation. For example, you could consume from `LabelContext` in an existing styled label component to make it compatible with React Aria Components.

The `[useContextProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:useContextProps)` hook merges the local props and ref with the ones provided via context by a parent component. The local props always take precedence over the context values (following the rules documented in [mergeProps](https://react-spectrum.adobe.com/react-aria/mergeProps.html)). `useContextProps` supports the [slot](#slots) prop to indicate which value to consume from context.

```
import type {LabelProps} from 'react-aria-components';
import {LabelContext, useContextProps} from 'react-aria-components';

const MyCustomLabel = React.forwardRef(
  (props: LabelProps, ref: React.ForwardedRef<HTMLLabelElement>) => {
    // Merge the local props and ref with the ones provided via context.
    [props, ref] = useContextProps(props, ref, LabelContext);
    // ... your existing Label component
    return <label {...props} ref={ref} />;
  }
);
```

```
import type {LabelProps} from 'react-aria-components';
import {
  LabelContext,
  useContextProps
} from 'react-aria-components';

const MyCustomLabel = React.forwardRef(
  (
    props: LabelProps,
    ref: React.ForwardedRef<HTMLLabelElement>
  ) => {
    // Merge the local props and ref with the ones provided via context.
    [props, ref] = useContextProps(
      props,
      ref,
      LabelContext
    );
    // ... your existing Label component
    return <label {...props} ref={ref} />;
  }
);
```

```
import type {LabelProps} from 'react-aria-components';
import {
  LabelContext,
  useContextProps
} from 'react-aria-components';

const MyCustomLabel =
  React.forwardRef(
    (
      props: LabelProps,
      ref:
        React.ForwardedRef<
          HTMLLabelElement
        >
    ) => {
      // Merge the local props and ref with the ones provided via context.
      [props, ref] =
        useContextProps(
          props,
          ref,
          LabelContext
        );
      // ... your existing Label component
      return (
        <label
          {...props}
          ref={ref}
        />
      );
    }
  );
```

Since it consumes from `LabelContext`, `MyCustomLabel` can be used within any React Aria component instead of the built-in `Label`.

```
<TextField>
  <MyCustomLabel>Name</MyCustomLabel>  <Input />
</TextField>
```

```
<TextField>
  <MyCustomLabel>Name</MyCustomLabel>  <Input />
</TextField>
```

```
<TextField>
  <MyCustomLabel>
    Name
  </MyCustomLabel>  <Input />
</TextField>
```

To consume a context without merging with existing props, use the `[useSlottedContext](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:useSlottedContext)` hook. This works like React's `useContext`, and also accepts an optional slot argument to identify which slot name to consume.

```
import {useSlottedContext} from 'react-aria-components';

// Consume the un-slotted value.
let buttonContext = useSlottedContext(ButtonContext);

// Consume the value for a specific slot name.
let incrementButtonContext = useSlottedContext(ButtonContext, 'increment');
```

```
import {useSlottedContext} from 'react-aria-components';

// Consume the un-slotted value.
let buttonContext = useSlottedContext(ButtonContext);

// Consume the value for a specific slot name.
let incrementButtonContext = useSlottedContext(
  ButtonContext,
  'increment'
);
```

```
import {useSlottedContext} from 'react-aria-components';

// Consume the un-slotted value.
let buttonContext =
  useSlottedContext(
    ButtonContext
  );

// Consume the value for a specific slot name.
let incrementButtonContext =
  useSlottedContext(
    ButtonContext,
    'increment'
  );
```

Most React Aria Components compose other standalone components in their children to build larger patterns. However, some components are made up of more tightly coupled children. For example, [Calendar](https://react-spectrum.adobe.com/react-aria/Calendar.html) includes children such as `CalendarGrid` and `CalendarCell` that cannot be used standalone, and must appear within a `Calendar` or `RangeCalendar`. These components access the state from their parent via context.

You can access the state from a parent component via the same contexts in order to build your own custom children. This example shows a `CalendarValue` component that displays the currently selected date from a calendar as a formatted string.

```
import {CalendarStateContext} from 'react-aria-components';
import {useDateFormatter} from 'react-aria';
import {getLocalTimeZone} from '@internationalized/date';

function CalendarValue() {
  let state = React.useContext(CalendarStateContext)!;  let date = state.value?.toDate(getLocalTimeZone());
  let {format} = useDateFormatter();
  let formatted = date ? format(date) : 'None';
  return `Selected date: ${formatted}`;
}
```

```
import {CalendarStateContext} from 'react-aria-components';
import {useDateFormatter} from 'react-aria';
import {getLocalTimeZone} from '@internationalized/date';

function CalendarValue() {
  let state = React.useContext(CalendarStateContext)!;  let date = state.value?.toDate(getLocalTimeZone());
  let {format} = useDateFormatter();
  let formatted = date ? format(date) : 'None';
  return `Selected date: ${formatted}`;
}
```

```
import {CalendarStateContext} from 'react-aria-components';
import {useDateFormatter} from 'react-aria';
import {getLocalTimeZone} from '@internationalized/date';

function CalendarValue() {
  let state = React
    .useContext(
      CalendarStateContext
    )!;  let date = state.value
    ?.toDate(
      getLocalTimeZone()
    );
  let { format } =
    useDateFormatter();
  let formatted = date
    ? format(date)
    : 'None';
  return `Selected date: ${formatted}`;
}
```

This enables a `<CalendarValue>` to be placed inside a `<Calendar>` to display the current value.

```
<Calendar>
  {/* ... */}
  <CalendarValue /></Calendar>
```

```
<Calendar>
  {/* ... */}
  <CalendarValue /></Calendar>
```

```
<Calendar>
  {/* ... */}
  <CalendarValue /></Calendar>
```

The state interfaces and their associated contexts supported by each component are listed in the Advanced Customization section of their documentation.

* * *

If you need to customize things even further, such as overriding behavior, intercepting events, or customizing DOM structure, you can drop down to the lower level Hook-based API. Hooks only provide behavior and leave all rendering to you. This gives you more control and flexibility, but requires additional glue code to set up.

React Aria Components and Hooks can be used together, allowing you to mix and match depending on the level of customization you require. We recommend starting with the component API by default, and only dropping down to hooks when you need to customize something that the component API does not allow.

Some potential use cases for Hooks are:

-   Overriding which DOM element a component renders
-   Rendering a subset of the children (e.g. virtualized scrolling)
-   Intercepting a DOM event to apply conditional logic
-   Overriding internal state management behavior
-   Customizing overlay positioning
-   Removing unused features to reduce bundle size

As described [above](#contexts), each React Aria component exports a corresponding context. You can build a custom implementation of a component using Hooks by consuming from the relevant context with `[useContextProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:useContextProps)`.

This example shows how a custom checkbox could be set up using `CheckboxContext` from `react-aria-components` and the [useCheckbox](https://react-spectrum.adobe.com/react-aria/useCheckbox.html) hook from `react-aria`.

```
import type {CheckboxProps} from 'react-aria-components';
import {CheckboxContext, useContextProps} from 'react-aria-components';
import {useToggleState} from 'react-stately';
import {useCheckbox} from 'react-aria';

const MyCheckbox = React.forwardRef(
  (props: CheckboxProps, ref: React.ForwardedRef<HTMLInputElement>) => {
    // Merge the local props and ref with the ones provided via context.
    [props, ref] = useContextProps(props, ref, CheckboxContext);
    // Follow the hook docs and implement your customizations...
    let state = useToggleState(props);
    let { inputProps } = useCheckbox(props, state, ref);
    return <input {...inputProps} ref={ref} />;
  }
);
```

```
import type {CheckboxProps} from 'react-aria-components';
import {
  CheckboxContext,
  useContextProps
} from 'react-aria-components';
import {useToggleState} from 'react-stately';
import {useCheckbox} from 'react-aria';

const MyCheckbox = React.forwardRef(
  (
    props: CheckboxProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    // Merge the local props and ref with the ones provided via context.
    [props, ref] = useContextProps(
      props,
      ref,
      CheckboxContext
    );
    // Follow the hook docs and implement your customizations...
    let state = useToggleState(props);
    let { inputProps } = useCheckbox(props, state, ref);
    return <input {...inputProps} ref={ref} />;
  }
);
```

```
import type {CheckboxProps} from 'react-aria-components';
import {
  CheckboxContext,
  useContextProps
} from 'react-aria-components';
import {useToggleState} from 'react-stately';
import {useCheckbox} from 'react-aria';

const MyCheckbox = React
  .forwardRef(
    (
      props:
        CheckboxProps,
      ref:
        React.ForwardedRef<
          HTMLInputElement
        >
    ) => {
      // Merge the local props and ref with the ones provided via context.
      [props, ref] =
        useContextProps(
          props,
          ref,
          CheckboxContext
        );
      // Follow the hook docs and implement your customizations...
      let state =
        useToggleState(
          props
        );
      let {
        inputProps
      } = useCheckbox(
        props,
        state,
        ref
      );
      return (
        <input
          {...inputProps}
          ref={ref}
        />
      );
    }
  );
```

Since `MyCheckbox` consumes from `CheckboxContext` it can be used within other React Aria Components in place of the built-in `Checkbox`, such as within a [Table](https://react-spectrum.adobe.com/react-aria/Table.html) or [GridList](https://react-spectrum.adobe.com/react-aria/GridList.html). This lets you provide a custom checkbox implementation without rewriting all other React Aria Components you might use it in.

```
<GridList>
  <GridListItem>
    <MyCheckbox slot="selection" />    {/* ... */}
  </GridListItem>
</GridList>
```

```
<GridList>
  <GridListItem>
    <MyCheckbox slot="selection" />    {/* ... */}
  </GridListItem>
</GridList>
```

```
<GridList>
  <GridListItem>
    <MyCheckbox slot="selection" />    {/* ... */}
  </GridListItem>
</GridList>
```

You can also provide values for React Aria Components from a Hook-based implementation. This allows you to customize the parent component of a larger pattern, while reusing the existing implementations of the child elements from React Aria Components.

This example shows how a custom number field could be set up. First, follow the docs for [useNumberField](https://react-spectrum.adobe.com/react-aria/useNumberField.html), and then use [Provider](#provider) to send values returned by the hook to each of the child elements via their corresponding contexts.

```
import type {NumberFieldProps} from 'react-aria-components';
import {ButtonContext, GroupContext, InputContext, LabelContext, Provider} from 'react-aria-components';
import {useNumberFieldState} from 'react-stately';
import {useLocale, useNumberField} from 'react-aria';

function CustomNumberField(props: NumberFieldProps) {
  // Follow the hook docs...
  let { locale } = useLocale();
  let state = useNumberFieldState({ ...props, locale });
  let ref = useRef<HTMLInputElement>(null);
  let {
    labelProps,
    groupProps,
    inputProps,
    incrementButtonProps,
    decrementButtonProps
  } = useNumberField(props, state, ref);

  // Provide values for the child components via context.
  return (
    <Provider
      values={[
        [GroupContext, groupProps],
        [InputContext, { ...inputProps, ref }],
        [LabelContext, labelProps],
        [ButtonContext, {
          slots: {
            increment: incrementButtonProps,
            decrement: decrementButtonProps
          }
        }]
      ]}
    >
      {props.children}
    </Provider>  );
}
```

```
import type {NumberFieldProps} from 'react-aria-components';
import {
  ButtonContext,
  GroupContext,
  InputContext,
  LabelContext,
  Provider
} from 'react-aria-components';
import {useNumberFieldState} from 'react-stately';
import {useLocale, useNumberField} from 'react-aria';

function CustomNumberField(props: NumberFieldProps) {
  // Follow the hook docs...
  let { locale } = useLocale();
  let state = useNumberFieldState({ ...props, locale });
  let ref = useRef<HTMLInputElement>(null);
  let {
    labelProps,
    groupProps,
    inputProps,
    incrementButtonProps,
    decrementButtonProps
  } = useNumberField(props, state, ref);

  // Provide values for the child components via context.
  return (
    <Provider
      values={[
        [GroupContext, groupProps],
        [InputContext, { ...inputProps, ref }],
        [LabelContext, labelProps],
        [ButtonContext, {
          slots: {
            increment: incrementButtonProps,
            decrement: decrementButtonProps
          }
        }]
      ]}
    >
      {props.children}
    </Provider>  );
}
```

```
import type {NumberFieldProps} from 'react-aria-components';
import {
  ButtonContext,
  GroupContext,
  InputContext,
  LabelContext,
  Provider
} from 'react-aria-components';
import {useNumberFieldState} from 'react-stately';
import {
  useLocale,
  useNumberField
} from 'react-aria';

function CustomNumberField(
  props: NumberFieldProps
) {
  // Follow the hook docs...
  let { locale } =
    useLocale();
  let state =
    useNumberFieldState({
      ...props,
      locale
    });
  let ref = useRef<
    HTMLInputElement
  >(null);
  let {
    labelProps,
    groupProps,
    inputProps,
    incrementButtonProps,
    decrementButtonProps
  } = useNumberField(
    props,
    state,
    ref
  );

  // Provide values for the child components via context.
  return (
    <Provider
      values={[
        [
          GroupContext,
          groupProps
        ],
        [InputContext, {
          ...inputProps,
          ref
        }],
        [
          LabelContext,
          labelProps
        ],
        [ButtonContext, {
          slots: {
            increment:
              incrementButtonProps,
            decrement:
              decrementButtonProps
          }
        }]
      ]}
    >
      {props.children}
    </Provider>  );
}
```

Because `CustomNumberField` provides values for the `Group`, `Input`, `Label`, and `Button` components via context, the implementations from React Aria Components can be reused.

```
<CustomNumberField>
  <Label>Width</Label>
  <Group>
    <Input />
    <Button slot="increment">+</Button>
    <Button slot="decrement">-</Button>
  </Group>
</CustomNumberField>
```

```
<CustomNumberField>
  <Label>Width</Label>
  <Group>
    <Input />
    <Button slot="increment">+</Button>
    <Button slot="decrement">-</Button>
  </Group>
</CustomNumberField>
```

```
<CustomNumberField>
  <Label>Width</Label>
  <Group>
    <Input />
    <Button slot="increment">
      +
    </Button>
    <Button slot="decrement">
      -
    </Button>
  </Group>
</CustomNumberField>
```

The contexts provided and consumed by each component, along with the corresponding hooks, are listed in the Advanced Customization section of their documentation. The corresponding hook docs cover the implementation and APIs of each component in detail.

The [source code](https://github.com/adobe/react-spectrum/tree/main/packages/react-aria-components/src) of React Aria Components can also be a good resource when building a custom implementation of a component. This may help you understand how all of the hooks and contexts fit together. You can also start by copy and pasting the source for a component from React Aria Components into your project, using this as a starting point to make your customizations.