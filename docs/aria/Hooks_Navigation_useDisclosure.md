# useDisclosure

**Source**: [https://react-spectrum.adobe.com/react-aria/useDisclosure.html](https://react-spectrum.adobe.com/react-aria/useDisclosure.html)

> Documentation for useDisclosure in the React Aria package.

---

Provides the behavior and accessibility implementation for a disclosure component.

* * *

`useDisclosure( props: [AriaDisclosureProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/disclosure/src/useDisclosure.ts:AriaDisclosureProps), state: [DisclosureState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/disclosure/src/useDisclosureState.ts:DisclosureState), ref: RefObject<[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element) |  | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)> ): [DisclosureAria](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/disclosure/src/useDisclosure.ts:DisclosureAria)`

* * *

A disclosure is a collapsible section of content. It is composed of a trigger button and a panel that contains the content. `useDisclosure` can be used to implement these in an accessible way.

-   Support for mouse, touch, and keyboard interactions to open and close the disclosure
-   Support for disabled disclosures
-   Follows the disclosure ARIA pattern, semantically linking the trigger button and panel
-   Uses [hidden="until-found"](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/hidden#the_hidden_until_found_state) in supported browsers, enabling find-in-page search support and improved search engine visibility for collapsed content

* * *

LandscapeButtonLandscape contentPanel

A disclosure consists of a trigger button and a panel. Clicking on or pressing Enter or Space while the trigger button is focused toggles the visibility of the panel.

`useDisclosure` returns props to spread onto the trigger button and panel.

Name

Type

Description

`buttonProps`

`[AriaButtonProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/button/src/index.d.ts:AriaButtonProps)`

Props for the disclosure button.

`panelProps`

`[HTMLAttributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)<[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)>`

Props for the disclosure panel.

State is managed by the `[useDisclosureState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/disclosure/src/useDisclosureState.ts:useDisclosureState)` hook in `@react-stately/disclosure`. The state object should be passed as an option to `useDisclosure`.

* * *

This example displays a basic disclosure with a button that toggles the visibility of the panel.

```
import {useButton, useDisclosure} from 'react-aria';
import {useDisclosureState} from 'react-stately';
import {mergeProps, useFocusRing} from 'react-aria';

function Disclosure(props) {
  let state = useDisclosureState(props);
  let panelRef = React.useRef<HTMLDivElement | null>(null);
  let triggerRef = React.useRef<HTMLButtonElement | null>(null);
  let { buttonProps: triggerProps, panelProps } = useDisclosure(
    props,
    state,
    panelRef
  );
  let { buttonProps } = useButton(triggerProps, triggerRef);
  let { isFocusVisible, focusProps } = useFocusRing();

  return (
    <div className="disclosure">
      <h3>
        <button
          className="trigger"
          ref={triggerRef}
          {...mergeProps(buttonProps, focusProps)}
          style={{ outline: isFocusVisible ? '2px solid dodgerblue' : 'none' }}
        >
          <svg viewBox="0 0 24 24">
            <path d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
          {props.title}
        </button>
      </h3>
      <div className="panel" ref={panelRef} {...panelProps}>
        <p>
          {props.children}
        </p>
      </div>
    </div>
  );
}

<Disclosure title="System Requirements">
  Details about system requirements here.
</Disclosure>
```

```
import {useButton, useDisclosure} from 'react-aria';
import {useDisclosureState} from 'react-stately';
import {mergeProps, useFocusRing} from 'react-aria';

function Disclosure(props) {
  let state = useDisclosureState(props);
  let panelRef = React.useRef<HTMLDivElement | null>(null);
  let triggerRef = React.useRef<HTMLButtonElement | null>(
    null
  );
  let { buttonProps: triggerProps, panelProps } =
    useDisclosure(props, state, panelRef);
  let { buttonProps } = useButton(triggerProps, triggerRef);
  let { isFocusVisible, focusProps } = useFocusRing();

  return (
    <div className="disclosure">
      <h3>
        <button
          className="trigger"
          ref={triggerRef}
          {...mergeProps(buttonProps, focusProps)}
          style={{
            outline: isFocusVisible
              ? '2px solid dodgerblue'
              : 'none'
          }}
        >
          <svg viewBox="0 0 24 24">
            <path d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
          {props.title}
        </button>
      </h3>
      <div className="panel" ref={panelRef} {...panelProps}>
        <p>
          {props.children}
        </p>
      </div>
    </div>
  );
}

<Disclosure title="System Requirements">
  Details about system requirements here.
</Disclosure>
```

```
import {
  useButton,
  useDisclosure
} from 'react-aria';
import {useDisclosureState} from 'react-stately';
import {
  mergeProps,
  useFocusRing
} from 'react-aria';

function Disclosure(
  props
) {
  let state =
    useDisclosureState(
      props
    );
  let panelRef = React
    .useRef<
      | HTMLDivElement
      | null
    >(null);
  let triggerRef = React
    .useRef<
      | HTMLButtonElement
      | null
    >(null);
  let {
    buttonProps:
      triggerProps,
    panelProps
  } = useDisclosure(
    props,
    state,
    panelRef
  );
  let { buttonProps } =
    useButton(
      triggerProps,
      triggerRef
    );
  let {
    isFocusVisible,
    focusProps
  } = useFocusRing();

  return (
    <div className="disclosure">
      <h3>
        <button
          className="trigger"
          ref={triggerRef}
          {...mergeProps(
            buttonProps,
            focusProps
          )}
          style={{
            outline:
              isFocusVisible
                ? '2px solid dodgerblue'
                : 'none'
          }}
        >
          <svg viewBox="0 0 24 24">
            <path d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
          {props.title}
        </button>
      </h3>
      <div
        className="panel"
        ref={panelRef}
        {...panelProps}
      >
        <p>
          {props
            .children}
        </p>
      </div>
    </div>
  );
}

<Disclosure title="System Requirements">
  Details about system
  requirements here.
</Disclosure>
```

Show CSS

```
@import "@react-aria/example-theme";

.disclosure {
  .trigger {
    background: none;
    border: none;
    box-shadow: none;
    font-weight: bold;
    font-size: 16px;
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-color);

    svg {
      rotate: 0deg;
      transition: rotate 200ms;
      width: 12px;
      height: 12px;
      fill: none;
      stroke: currentColor;
      stroke-width: 3px;
    }

    &[aria-expanded="true"] svg {
      rotate: 90deg;
    }

    &:disabled {
      color: var(--gray-300);
    }
  }
}

.panel {
  margin-left: 32px;
}
```

```
@import "@react-aria/example-theme";

.disclosure {
  .trigger {
    background: none;
    border: none;
    box-shadow: none;
    font-weight: bold;
    font-size: 16px;
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-color);

    svg {
      rotate: 0deg;
      transition: rotate 200ms;
      width: 12px;
      height: 12px;
      fill: none;
      stroke: currentColor;
      stroke-width: 3px;
    }

    &[aria-expanded="true"] svg {
      rotate: 90deg;
    }

    &:disabled {
      color: var(--gray-300);
    }
  }
}

.panel {
  margin-left: 32px;
}
```

```
@import "@react-aria/example-theme";

.disclosure {
  .trigger {
    background: none;
    border: none;
    box-shadow: none;
    font-weight: bold;
    font-size: 16px;
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-color);

    svg {
      rotate: 0deg;
      transition: rotate 200ms;
      width: 12px;
      height: 12px;
      fill: none;
      stroke: currentColor;
      stroke-width: 3px;
    }

    &[aria-expanded="true"] svg {
      rotate: 90deg;
    }

    &:disabled {
      color: var(--gray-300);
    }
  }
}

.panel {
  margin-left: 32px;
}
```

* * *

The following examples show how to use the `Disclosure` component created in the above example.

Whether or not the disclosure is expanded or not by default can be set with the `defaultExpanded` prop.

```
<Disclosure title="System Requirements" defaultExpanded>
  Details about system requirements here.
</Disclosure>
```

```
<Disclosure title="System Requirements" defaultExpanded>
  Details about system requirements here.
</Disclosure>
```

```
<Disclosure
  title="System Requirements"
  defaultExpanded
>
  Details about system
  requirements here.
</Disclosure>
```

Expansion can be controlled using the `isExpanded` prop, paired with the `onExpandedChange` event. The `onExpandedChange` event is fired when the user presses the trigger button.

```
function ControlledDisclosure(props) {
  let [isExpanded, setExpanded] = React.useState(false);

  return (
    <Disclosure
      title="System Requirements"
      isExpanded={isExpanded}
      onExpandedChange={setExpanded}
    >
      Details about system requirements here.
    </Disclosure>
  );
}
```

```
function ControlledDisclosure(props) {
  let [isExpanded, setExpanded] = React.useState(false);

  return (
    <Disclosure
      title="System Requirements"
      isExpanded={isExpanded}
      onExpandedChange={setExpanded}
    >
      Details about system requirements here.
    </Disclosure>
  );
}
```

```
function ControlledDisclosure(
  props
) {
  let [
    isExpanded,
    setExpanded
  ] = React.useState(
    false
  );

  return (
    <Disclosure
      title="System Requirements"
      isExpanded={isExpanded}
      onExpandedChange={setExpanded}
    >
      Details about
      system requirements
      here.
    </Disclosure>
  );
}
```

A disclosure can be disabled with the `isDisabled` prop. This will disable the trigger button and prevent the panel from being opened or closed.

```
<Disclosure title="System Requirements" isDisabled>
  Details about system requirements here.
</Disclosure>
```

```
<Disclosure title="System Requirements" isDisabled>
  Details about system requirements here.
</Disclosure>
```

```
<Disclosure
  title="System Requirements"
  isDisabled
>
  Details about system
  requirements here.
</Disclosure>
```

* * *

A disclosure group (i.e. accordion) is a set of disclosures where only one disclosure can be expanded at a time. The following example shows how to create a `DisclosureGroup` component with the `useDisclosureGroupState` hook. We'll also create a `DisclosureItem` component that uses the `DisclosureGroupState` context for managing its state.

```
import {useId} from 'react-aria';
import {useDisclosureGroupState} from 'react-stately';

const DisclosureGroupStateContext = React.createContext(null);

function DisclosureGroup(props) {
  let state = useDisclosureGroupState(props);

  return (
    <div className="group">
      <DisclosureGroupStateContext.Provider value={state}>
        {props.children}
      </DisclosureGroupStateContext.Provider>
    </div>
  );
}

function DisclosureItem(props) {
  let defaultId = useId();
  let id = props.id || defaultId;
  let groupState = React.useContext(DisclosureGroupStateContext);
  let isExpanded = groupState
    ? groupState.expandedKeys.has(id)
    : props.isExpanded;
  let state = useDisclosureState({
    ...props,
    isExpanded,
    onExpandedChange(isExpanded) {
      if (groupState) {
        groupState.toggleKey(id);
      }

      props.onExpandedChange?.(isExpanded);
    }
  });

  let panelRef = React.useRef<HTMLDivElement | null>(null);
  let triggerRef = React.useRef<HTMLButtonElement | null>(null);
  let isDisabled = props.isDisabled || groupState?.isDisabled || false;
  let { buttonProps: triggerProps, panelProps } = useDisclosure(
    {
      ...props,
      isExpanded,
      isDisabled
    },
    state,
    panelRef
  );
  let { buttonProps } = useButton(triggerProps, triggerRef);
  let { isFocusVisible, focusProps } = useFocusRing();

  return (
    <div className="disclosure">
      <h3>
        <button
          className="trigger"
          ref={triggerRef}
          {...mergeProps(buttonProps, focusProps)}
          style={{ outline: isFocusVisible ? '2px solid dodgerblue' : 'none' }}
        >
          <svg viewBox="0 0 24 24">
            <path d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
          {props.title}
        </button>
      </h3>
      <div className="panel" ref={panelRef} {...panelProps}>
        <p>
          {props.children}
        </p>
      </div>
    </div>
  );
}
```

```
import {useId} from 'react-aria';
import {useDisclosureGroupState} from 'react-stately';

const DisclosureGroupStateContext = React.createContext(
  null
);

function DisclosureGroup(props) {
  let state = useDisclosureGroupState(props);

  return (
    <div className="group">
      <DisclosureGroupStateContext.Provider value={state}>
        {props.children}
      </DisclosureGroupStateContext.Provider>
    </div>
  );
}

function DisclosureItem(props) {
  let defaultId = useId();
  let id = props.id || defaultId;
  let groupState = React.useContext(
    DisclosureGroupStateContext
  );
  let isExpanded = groupState
    ? groupState.expandedKeys.has(id)
    : props.isExpanded;
  let state = useDisclosureState({
    ...props,
    isExpanded,
    onExpandedChange(isExpanded) {
      if (groupState) {
        groupState.toggleKey(id);
      }

      props.onExpandedChange?.(isExpanded);
    }
  });

  let panelRef = React.useRef<HTMLDivElement | null>(null);
  let triggerRef = React.useRef<HTMLButtonElement | null>(
    null
  );
  let isDisabled = props.isDisabled ||
    groupState?.isDisabled || false;
  let { buttonProps: triggerProps, panelProps } =
    useDisclosure(
      {
        ...props,
        isExpanded,
        isDisabled
      },
      state,
      panelRef
    );
  let { buttonProps } = useButton(triggerProps, triggerRef);
  let { isFocusVisible, focusProps } = useFocusRing();

  return (
    <div className="disclosure">
      <h3>
        <button
          className="trigger"
          ref={triggerRef}
          {...mergeProps(buttonProps, focusProps)}
          style={{
            outline: isFocusVisible
              ? '2px solid dodgerblue'
              : 'none'
          }}
        >
          <svg viewBox="0 0 24 24">
            <path d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
          {props.title}
        </button>
      </h3>
      <div className="panel" ref={panelRef} {...panelProps}>
        <p>
          {props.children}
        </p>
      </div>
    </div>
  );
}
```

```
import {useId} from 'react-aria';
import {useDisclosureGroupState} from 'react-stately';

const DisclosureGroupStateContext =
  React.createContext(
    null
  );

function DisclosureGroup(
  props
) {
  let state =
    useDisclosureGroupState(
      props
    );

  return (
    <div className="group">
      <DisclosureGroupStateContext.Provider
        value={state}
      >
        {props.children}
      </DisclosureGroupStateContext.Provider>
    </div>
  );
}

function DisclosureItem(
  props
) {
  let defaultId =
    useId();
  let id = props.id ||
    defaultId;
  let groupState = React
    .useContext(
      DisclosureGroupStateContext
    );
  let isExpanded =
    groupState
      ? groupState
        .expandedKeys
        .has(id)
      : props.isExpanded;
  let state =
    useDisclosureState({
      ...props,
      isExpanded,
      onExpandedChange(
        isExpanded
      ) {
        if (groupState) {
          groupState
            .toggleKey(
              id
            );
        }

        props
          .onExpandedChange?.(
            isExpanded
          );
      }
    });

  let panelRef = React
    .useRef<
      | HTMLDivElement
      | null
    >(null);
  let triggerRef = React
    .useRef<
      | HTMLButtonElement
      | null
    >(null);
  let isDisabled =
    props.isDisabled ||
    groupState
      ?.isDisabled ||
    false;
  let {
    buttonProps:
      triggerProps,
    panelProps
  } = useDisclosure(
    {
      ...props,
      isExpanded,
      isDisabled
    },
    state,
    panelRef
  );
  let { buttonProps } =
    useButton(
      triggerProps,
      triggerRef
    );
  let {
    isFocusVisible,
    focusProps
  } = useFocusRing();

  return (
    <div className="disclosure">
      <h3>
        <button
          className="trigger"
          ref={triggerRef}
          {...mergeProps(
            buttonProps,
            focusProps
          )}
          style={{
            outline:
              isFocusVisible
                ? '2px solid dodgerblue'
                : 'none'
          }}
        >
          <svg viewBox="0 0 24 24">
            <path d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
          {props.title}
        </button>
      </h3>
      <div
        className="panel"
        ref={panelRef}
        {...panelProps}
      >
        <p>
          {props
            .children}
        </p>
      </div>
    </div>
  );
}
```

The following examples show how to use the `DisclosureGroup` component created in the above example.

```
<DisclosureGroup>
  <DisclosureItem title="Personal Information">
    Personal information form here.
  </DisclosureItem>
  <DisclosureItem title="Billing Address">
    Billing address form here.
  </DisclosureItem>
</DisclosureGroup>
```

```
<DisclosureGroup>
  <DisclosureItem title="Personal Information">
    Personal information form here.
  </DisclosureItem>
  <DisclosureItem title="Billing Address">
    Billing address form here.
  </DisclosureItem>
</DisclosureGroup>
```

```
<DisclosureGroup>
  <DisclosureItem title="Personal Information">
    Personal
    information form
    here.
  </DisclosureItem>
  <DisclosureItem title="Billing Address">
    Billing address
    form here.
  </DisclosureItem>
</DisclosureGroup>
```

Which disclosure is expanded by default can be set with the `defaultExpandedKeys` prop.

```
<DisclosureGroup defaultExpandedKeys={['billing']}>
  <DisclosureItem id="personal" title="Personal Information">
    Personal information form here.
  </DisclosureItem>
  <DisclosureItem id="billing" title="Billing Address">
    Billing address form here.
  </DisclosureItem>
</DisclosureGroup>
```

```
<DisclosureGroup defaultExpandedKeys={['billing']}>
  <DisclosureItem
    id="personal"
    title="Personal Information"
  >
    Personal information form here.
  </DisclosureItem>
  <DisclosureItem id="billing" title="Billing Address">
    Billing address form here.
  </DisclosureItem>
</DisclosureGroup>
```

```
<DisclosureGroup
  defaultExpandedKeys={[
    'billing'
  ]}
>
  <DisclosureItem
    id="personal"
    title="Personal Information"
  >
    Personal
    information form
    here.
  </DisclosureItem>
  <DisclosureItem
    id="billing"
    title="Billing Address"
  >
    Billing address
    form here.
  </DisclosureItem>
</DisclosureGroup>
```

Expansion can be controlled using the `expandedKeys` prop, paired with the `onExpandedChange` event. The `onExpandedChange` event is fired when one of the disclosures is expanded or collapsed.

```
function ControlledDisclosureGroup(props) {
  let [expandedKeys, setExpandedKeys] = React.useState(['personal']);

  return (
    <DisclosureGroup
      expandedKeys={expandedKeys}
      onExpandedChange={setExpandedKeys}
    >
      <DisclosureItem id="personal" title="Personal Information">
        Personal information form here.
      </DisclosureItem>
      <DisclosureItem id="billing" title="Billing Address">
        Billing address form here.
      </DisclosureItem>
    </DisclosureGroup>
  );
}
```

```
function ControlledDisclosureGroup(props) {
  let [expandedKeys, setExpandedKeys] = React.useState([
    'personal'
  ]);

  return (
    <DisclosureGroup
      expandedKeys={expandedKeys}
      onExpandedChange={setExpandedKeys}
    >
      <DisclosureItem
        id="personal"
        title="Personal Information"
      >
        Personal information form here.
      </DisclosureItem>
      <DisclosureItem id="billing" title="Billing Address">
        Billing address form here.
      </DisclosureItem>
    </DisclosureGroup>
  );
}
```

```
function ControlledDisclosureGroup(
  props
) {
  let [
    expandedKeys,
    setExpandedKeys
  ] = React.useState([
    'personal'
  ]);

  return (
    <DisclosureGroup
      expandedKeys={expandedKeys}
      onExpandedChange={setExpandedKeys}
    >
      <DisclosureItem
        id="personal"
        title="Personal Information"
      >
        Personal
        information form
        here.
      </DisclosureItem>
      <DisclosureItem
        id="billing"
        title="Billing Address"
      >
        Billing address
        form here.
      </DisclosureItem>
    </DisclosureGroup>
  );
}
```

#### Multiple expanded[#](#multiple-expanded)

Multiple disclosures can be expanded at the same time by setting the `allowsMultipleExpanded` prop to `true`.

```
<DisclosureGroup allowsMultipleExpanded>
  <DisclosureItem title="Personal Information">
    Personal information form here.
  </DisclosureItem>
  <DisclosureItem title="Billing Address">
    Billing address form here.
  </DisclosureItem>
</DisclosureGroup>
```

```
<DisclosureGroup allowsMultipleExpanded>
  <DisclosureItem title="Personal Information">
    Personal information form here.
  </DisclosureItem>
  <DisclosureItem title="Billing Address">
    Billing address form here.
  </DisclosureItem>
</DisclosureGroup>
```

```
<DisclosureGroup
  allowsMultipleExpanded
>
  <DisclosureItem title="Personal Information">
    Personal
    information form
    here.
  </DisclosureItem>
  <DisclosureItem title="Billing Address">
    Billing address
    form here.
  </DisclosureItem>
</DisclosureGroup>
```

An entire disclosure group can be disabled with the `isDisabled` prop. This will disable all trigger buttons and prevent the panels from being opened or closed.

```
<DisclosureGroup isDisabled>
  <DisclosureItem title="Personal Information">
    Personal information form here.
  </DisclosureItem>
  <DisclosureItem title="Billing Address">
    Billing address form here.
  </DisclosureItem>
</DisclosureGroup>
```

```
<DisclosureGroup isDisabled>
  <DisclosureItem title="Personal Information">
    Personal information form here.
  </DisclosureItem>
  <DisclosureItem title="Billing Address">
    Billing address form here.
  </DisclosureItem>
</DisclosureGroup>
```

```
<DisclosureGroup
  isDisabled
>
  <DisclosureItem title="Personal Information">
    Personal
    information form
    here.
  </DisclosureItem>
  <DisclosureItem title="Billing Address">
    Billing address
    form here.
  </DisclosureItem>
</DisclosureGroup>
```