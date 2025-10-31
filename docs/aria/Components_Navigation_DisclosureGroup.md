# DisclosureGroup

**Source**: [https://react-spectrum.adobe.com/react-aria/DisclosureGroup.html](https://react-spectrum.adobe.com/react-aria/DisclosureGroup.html)

> Documentation for DisclosureGroup in the React Aria package.

---

A DisclosureGroup is a grouping of related disclosures, sometimes called an accordion. It supports both single and multiple expanded items.

* * *

```
import {Button, Disclosure, DisclosureGroup, DisclosurePanel, Heading} from 'react-aria-components';
import {ChevronRight} from 'lucide-react';

<DisclosureGroup defaultExpandedKeys={['personal']}>
  <Disclosure id="personal">
    <Heading>
      <Button slot="trigger">
        <ChevronRight size={18} />
        Personal Information
      </Button>
    </Heading>
    <DisclosurePanel>
      Personal information form here.
    </DisclosurePanel>
  </Disclosure>
  <Disclosure id="billing">
    <Heading>
      <Button slot="trigger">
        <ChevronRight size={18} />
        Billing Address
      </Button>
    </Heading>
    <DisclosurePanel>
      Billing address form here.
    </DisclosurePanel>
  </Disclosure>
</DisclosureGroup>
```

```
import {
  Button,
  Disclosure,
  DisclosureGroup,
  DisclosurePanel,
  Heading
} from 'react-aria-components';
import {ChevronRight} from 'lucide-react';

<DisclosureGroup defaultExpandedKeys={['personal']}>
  <Disclosure id="personal">
    <Heading>
      <Button slot="trigger">
        <ChevronRight size={18} />
        Personal Information
      </Button>
    </Heading>
    <DisclosurePanel>
      Personal information form here.
    </DisclosurePanel>
  </Disclosure>
  <Disclosure id="billing">
    <Heading>
      <Button slot="trigger">
        <ChevronRight size={18} />
        Billing Address
      </Button>
    </Heading>
    <DisclosurePanel>
      Billing address form here.
    </DisclosurePanel>
  </Disclosure>
</DisclosureGroup>
```

```
import {
  Button,
  Disclosure,
  DisclosureGroup,
  DisclosurePanel,
  Heading
} from 'react-aria-components';
import {ChevronRight} from 'lucide-react';

<DisclosureGroup
  defaultExpandedKeys={[
    'personal'
  ]}
>
  <Disclosure id="personal">
    <Heading>
      <Button slot="trigger">
        <ChevronRight
          size={18}
        />
        Personal
        Information
      </Button>
    </Heading>
    <DisclosurePanel>
      Personal
      information form
      here.
    </DisclosurePanel>
  </Disclosure>
  <Disclosure id="billing">
    <Heading>
      <Button slot="trigger">
        <ChevronRight
          size={18}
        />
        Billing Address
      </Button>
    </Heading>
    <DisclosurePanel>
      Billing address
      form here.
    </DisclosurePanel>
  </Disclosure>
</DisclosureGroup>
```

* * *

Disclosure groups can be built by combining multiple disclosures built in HTML with the [<details>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details) and [<summary>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary) HTML elements, but this can be difficult to style, especially when adding adjacent interactive elements, like buttons, to the disclosure's heading. `DisclosureGroup` helps achieve accessible disclosures implemented with the correct ARIA pattern while making custom styling easy.

-   **Accessible** - Disclosure group is exposed to assistive technology via ARIA. Uses hidden="until-found" in supported browsers, enabling find-in-page search support and improved search engine visibility for collapsed content.
-   **Styleable** - Disclosures include builtin states for styling such as keyboard focus, disabled, and expanded states.

* * *

RecentAbstractButtonLorem ipsum dolor sit amet, consectetur adipiscing elitPanelGroup

A disclosure group consists of a set of disclosures. Each disclosure includes a button within a heading and panel of content that is either shown or hidden. Zero or more disclosures within a group can be expanded at the same time, however, by default, only one disclosure can be expanded at a time. Users may click or touch a disclosure to expand it, or use the Tab key to navigate between disclosures and the Enter or Space key to toggle it.

```
import {Button, Disclosure, DisclosureGroup, DisclosurePanel, Heading} from 'react-aria-components';

<DisclosureGroup>
  <Disclosure>
    <Heading>
      <Button />
    </Heading>
    <DisclosurePanel />
  </Disclosure>
</DisclosureGroup>
```

```
import {
  Button,
  Disclosure,
  DisclosureGroup,
  DisclosurePanel,
  Heading
} from 'react-aria-components';

<DisclosureGroup>
  <Disclosure>
    <Heading>
      <Button />
    </Heading>
    <DisclosurePanel />
  </Disclosure>
</DisclosureGroup>
```

```
import {
  Button,
  Disclosure,
  DisclosureGroup,
  DisclosurePanel,
  Heading
} from 'react-aria-components';

<DisclosureGroup>
  <Disclosure>
    <Heading>
      <Button />
    </Heading>
    <DisclosurePanel />
  </Disclosure>
</DisclosureGroup>
```

[

Disclosure

A disclosure is a collapsible section of content.

](https://react-spectrum.adobe.com/react-aria/Disclosure.html)

## Expanded[#](#expanded)

* * *

### Default expanded[#](#default-expanded)

An uncontrolled DisclosureGroup can be expanded by default using the `defaultExpandedKeys` prop. The `defaultExpandedKeys` must match the `id` on the disclosure(s) component that you wish to expand.

```
import type {DisclosureProps} from 'react-aria-components';

interface MyDisclosureProps extends Omit<DisclosureProps, 'children'> {
  title?: string,
  children?: React.ReactNode
}

function MyDisclosure({title, children, ...props}: MyDisclosureProps) {
  return (
    <Disclosure {...props}>
      <Heading>
        <Button slot="trigger">
          <ChevronRight size={20} />
          {title}
        </Button>
      </Heading>
      <DisclosurePanel>
        {children}
      </DisclosurePanel>
    </Disclosure>
  )
}

<DisclosureGroup defaultExpandedKeys={["system"]}>
  <MyDisclosure id="system" title="System Requirements" >
    Details about system requirements here
  </MyDisclosure>
  <MyDisclosure id="personal" title="Personal Information" >
    Details about personal information here
  </MyDisclosure>
</DisclosureGroup>
```

```
import type {DisclosureProps} from 'react-aria-components';

interface MyDisclosureProps
  extends Omit<DisclosureProps, 'children'> {
  title?: string;
  children?: React.ReactNode;
}

function MyDisclosure(
  { title, children, ...props }: MyDisclosureProps
) {
  return (
    <Disclosure {...props}>
      <Heading>
        <Button slot="trigger">
          <ChevronRight size={20} />
          {title}
        </Button>
      </Heading>
      <DisclosurePanel>
        {children}
      </DisclosurePanel>
    </Disclosure>
  );
}

<DisclosureGroup defaultExpandedKeys={['system']}>
  <MyDisclosure id="system" title="System Requirements">
    Details about system requirements here
  </MyDisclosure>
  <MyDisclosure
    id="personal"
    title="Personal Information"
  >
    Details about personal information here
  </MyDisclosure>
</DisclosureGroup>
```

```
import type {DisclosureProps} from 'react-aria-components';

interface MyDisclosureProps
  extends
    Omit<
      DisclosureProps,
      'children'
    > {
  title?: string;
  children?:
    React.ReactNode;
}

function MyDisclosure(
  {
    title,
    children,
    ...props
  }: MyDisclosureProps
) {
  return (
    <Disclosure
      {...props}
    >
      <Heading>
        <Button slot="trigger">
          <ChevronRight
            size={20}
          />
          {title}
        </Button>
      </Heading>
      <DisclosurePanel>
        {children}
      </DisclosurePanel>
    </Disclosure>
  );
}

<DisclosureGroup
  defaultExpandedKeys={[
    'system'
  ]}
>
  <MyDisclosure
    id="system"
    title="System Requirements"
  >
    Details about
    system requirements
    here
  </MyDisclosure>
  <MyDisclosure
    id="personal"
    title="Personal Information"
  >
    Details about
    personal
    information here
  </MyDisclosure>
</DisclosureGroup>
```

### Controlled expanded[#](#controlled-expanded)

A controlled DisclosureGroup can be expanded and collapsed using `expandedKeys` and `onExpandedChange`. The `expandedKeys` must match the `id` on the disclosure component(s) that you wish to expand.

```
import {Key} from '@react-types/shared';

function ControlledExpanded() {
  let [expandedKeys, setExpandedKeys] = React.useState<Set<Key>>(
    new Set(['system'])
  );

  return (
    <>
      <DisclosureGroup
        expandedKeys={expandedKeys}
        onExpandedChange={setExpandedKeys}
      >
        <MyDisclosure id="system" title="System Requirements">
          Details about system requirements here
        </MyDisclosure>
        <MyDisclosure id="personal" title="Personal Information">
          Details about personal information here
        </MyDisclosure>
      </DisclosureGroup>
      <div style={{ marginTop: '20px' }}>You have expanded: {expandedKeys}</div>
    </>
  );
}
```

```
import {Key} from '@react-types/shared';

function ControlledExpanded() {
  let [expandedKeys, setExpandedKeys] = React.useState<
    Set<Key>
  >(new Set(['system']));

  return (
    <>
      <DisclosureGroup
        expandedKeys={expandedKeys}
        onExpandedChange={setExpandedKeys}
      >
        <MyDisclosure
          id="system"
          title="System Requirements"
        >
          Details about system requirements here
        </MyDisclosure>
        <MyDisclosure
          id="personal"
          title="Personal Information"
        >
          Details about personal information here
        </MyDisclosure>
      </DisclosureGroup>
      <div style={{ marginTop: '20px' }}>
        You have expanded: {expandedKeys}
      </div>
    </>
  );
}
```

```
import {Key} from '@react-types/shared';

function ControlledExpanded() {
  let [
    expandedKeys,
    setExpandedKeys
  ] = React.useState<
    Set<Key>
  >(new Set(['system']));

  return (
    <>
      <DisclosureGroup
        expandedKeys={expandedKeys}
        onExpandedChange={setExpandedKeys}
      >
        <MyDisclosure
          id="system"
          title="System Requirements"
        >
          Details about
          system
          requirements
          here
        </MyDisclosure>
        <MyDisclosure
          id="personal"
          title="Personal Information"
        >
          Details about
          personal
          information
          here
        </MyDisclosure>
      </DisclosureGroup>
      <div
        style={{
          marginTop:
            '20px'
        }}
      >
        You have
        expanded:{' '}
        {expandedKeys}
      </div>
    </>
  );
}
```

### Multiple expanded[#](#multiple-expanded)

By default, only one disclosure will be open at a time. To allow multiple disclosures to expand, use the `allowsMultipleExpanded` prop.

```
<DisclosureGroup
  defaultExpandedKeys={['system', 'personal']}
  allowsMultipleExpanded
>
  <MyDisclosure id="system" title="System Requirements">
    Details about system requirements here
  </MyDisclosure>
  <MyDisclosure id="personal" title="Personal Information">
    Details about personal information here
  </MyDisclosure>
</DisclosureGroup>
```

```
<DisclosureGroup
  defaultExpandedKeys={['system', 'personal']}
  allowsMultipleExpanded
>
  <MyDisclosure id="system" title="System Requirements">
    Details about system requirements here
  </MyDisclosure>
  <MyDisclosure id="personal" title="Personal Information">
    Details about personal information here
  </MyDisclosure>
</DisclosureGroup>
```

```
<DisclosureGroup
  defaultExpandedKeys={[
    'system',
    'personal'
  ]}
  allowsMultipleExpanded
>
  <MyDisclosure
    id="system"
    title="System Requirements"
  >
    Details about
    system requirements
    here
  </MyDisclosure>
  <MyDisclosure
    id="personal"
    title="Personal Information"
  >
    Details about
    personal
    information here
  </MyDisclosure>
</DisclosureGroup>
```

* * *

A DisclosureGroup can be disabled using the `isDisabled` prop.

```
<DisclosureGroup isDisabled>
  <MyDisclosure id="system" title="System Requirements" >
    Details about system requirements here
  </MyDisclosure>
  <MyDisclosure id="personal" title="Personal Information" >
    Details about personal information here"
  </MyDisclosure>
</DisclosureGroup>
```

```
<DisclosureGroup isDisabled>
  <MyDisclosure id="system" title="System Requirements" >
    Details about system requirements here
  </MyDisclosure>
  <MyDisclosure id="personal" title="Personal Information" >
    Details about personal information here"
  </MyDisclosure>
</DisclosureGroup>
```

```
<DisclosureGroup
  isDisabled
>
  <MyDisclosure
    id="system"
    title="System Requirements"
  >
    Details about
    system requirements
    here
  </MyDisclosure>
  <MyDisclosure
    id="personal"
    title="Personal Information"
  >
    Details about
    personal
    information here"
  </MyDisclosure>
</DisclosureGroup>
```

* * *

In some use cases, you may want to add an interactive element, like a button, adjacent to the disclosure's heading. Please ensure that these elements are siblings of the Heading element and not children.

```
<DisclosureGroup>
  <Disclosure id="system">
    <div style={{display: 'flex', alignItems: 'center'}}>
      <Heading>
        <Button slot="trigger">
          <ChevronRight size={18} />
          System Requirements
        </Button>
      </Heading>
      <Button>Click me</Button>
    </div>
    <DisclosurePanel>
      Details about system requirements here.
    </DisclosurePanel>
  </Disclosure>
  <Disclosure id="personal">
    <div style={{display: 'flex', alignItems: 'center'}}>
      <Heading>
        <Button slot="trigger">
          <ChevronRight size={18} />
          Personal Information
        </Button>
      </Heading>
      <Button>Click me</Button>
    </div>
    <DisclosurePanel>
      Details about personal information here.
    </DisclosurePanel>
  </Disclosure>
</DisclosureGroup>
```

```
<DisclosureGroup>
  <Disclosure id="system">
    <div style={{display: 'flex', alignItems: 'center'}}>
      <Heading>
        <Button slot="trigger">
          <ChevronRight size={18} />
          System Requirements
        </Button>
      </Heading>
      <Button>Click me</Button>
    </div>
    <DisclosurePanel>
      Details about system requirements here.
    </DisclosurePanel>
  </Disclosure>
  <Disclosure id="personal">
    <div style={{display: 'flex', alignItems: 'center'}}>
      <Heading>
        <Button slot="trigger">
          <ChevronRight size={18} />
          Personal Information
        </Button>
      </Heading>
      <Button>Click me</Button>
    </div>
    <DisclosurePanel>
      Details about personal information here.
    </DisclosurePanel>
  </Disclosure>
</DisclosureGroup>
```

```
<DisclosureGroup>
  <Disclosure id="system">
    <div
      style={{
        display:
          'flex',
        alignItems:
          'center'
      }}
    >
      <Heading>
        <Button slot="trigger">
          <ChevronRight
            size={18}
          />
          System
          Requirements
        </Button>
      </Heading>
      <Button>
        Click me
      </Button>
    </div>
    <DisclosurePanel>
      Details about
      system
      requirements
      here.
    </DisclosurePanel>
  </Disclosure>
  <Disclosure id="personal">
    <div
      style={{
        display:
          'flex',
        alignItems:
          'center'
      }}
    >
      <Heading>
        <Button slot="trigger">
          <ChevronRight
            size={18}
          />
          Personal
          Information
        </Button>
      </Heading>
      <Button>
        Click me
      </Button>
    </div>
    <DisclosurePanel>
      Details about
      personal
      information here.
    </DisclosurePanel>
  </Disclosure>
</DisclosureGroup>
```

* * *

Name

Type

Description

`allowsMultipleExpanded`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether multiple items can be expanded at the same time.

`isDisabled`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether all items are disabled.

`expandedKeys`

`[Iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)<[Key](https://reactjs.org/docs/lists-and-keys.html)>`

The currently expanded keys in the group (controlled).

`defaultExpandedKeys`

`[Iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)<[Key](https://reactjs.org/docs/lists-and-keys.html)>`

The initial expanded keys in the group (uncontrolled).

`children`

`[ChildrenOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ChildrenOrFunction)<[DisclosureGroupRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Disclosure.tsx:DisclosureGroupRenderProps)>`

The children of the component. A function may be provided to alter the children based on component state.

`className`

`[ClassNameOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ClassNameOrFunction)<[DisclosureGroupRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Disclosure.tsx:DisclosureGroupRenderProps)>`

The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.

`style`

`[StyleOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:StyleOrFunction)<[DisclosureGroupRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Disclosure.tsx:DisclosureGroupRenderProps)>`

The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.

Events

Name

Type

Description

`onExpandedChange`

`( (keys: [Set](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Set)<[Key](https://reactjs.org/docs/lists-and-keys.html)> )) => any`

Handler that is called when items are expanded or collapsed.

PositioningAccessibility

Name

Type

Description

`id`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

The element's unique identifier. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id).

Within a `<DisclosureGroup>`, most `<Disclosure>` props are set automatically. The `id` prop is required to identify the disclosure within the group.

Show props

Name

Type

Description

`id`

`[Key](https://reactjs.org/docs/lists-and-keys.html)`

An id for the disclosure when used within a DisclosureGroup, matching the id used in `expandedKeys`.

`isDisabled`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether the disclosure is disabled.

`isExpanded`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether the disclosure is expanded (controlled).

`defaultExpanded`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether the disclosure is expanded by default (uncontrolled).

`children`

`[ChildrenOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ChildrenOrFunction)<[DisclosureRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Disclosure.tsx:DisclosureRenderProps)>`

The children of the component. A function may be provided to alter the children based on component state.

`className`

`[ClassNameOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ClassNameOrFunction)<[DisclosureRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Disclosure.tsx:DisclosureRenderProps)>`

The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.

`style`

`[StyleOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:StyleOrFunction)<[DisclosureRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Disclosure.tsx:DisclosureRenderProps)>`

The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.

Events

Name

Type

Description

`onExpandedChange`

`( (isExpanded: [boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) )) => void`

Handler that is called when the disclosure's expanded state changes.

Layout

Name

Type

Description

`slot`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)`

A slot name for the component. Slots allow the component to receive props from a parent component. An explicit `null` value indicates that the local props completely override all props received from a parent.

Positioning

Show props

Name

Type

Default

Description

`isPending`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the button is in a pending state. This disables press and hover events while retaining focusability, and announces the pending state to screen readers.

`isDisabled`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the button is disabled.

`autoFocus`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the element should receive focus on render.

`type`

`'button' | 'submit' | 'reset'`

`'button'`

The behavior of the button when used in an HTML form.

`form`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

The `<form>` element to associate the button with. The value of this attribute must be the id of a `<form>` in the same document. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button#form).

`formAction`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

The URL that processes the information submitted by the button. Overrides the action attribute of the button's form owner.

`formEncType`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

Indicates how to encode the form data that is submitted.

`formMethod`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

Indicates the HTTP method used to submit the form.

`formNoValidate`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Indicates that the form is not to be validated when it is submitted.

`formTarget`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

Overrides the target attribute of the button's form owner.

`name`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

Submitted as a pair with the button's value as part of the form data.

`value`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

The value associated with the button's name when it's submitted with the form data.

`children`

`[ChildrenOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ChildrenOrFunction)<[ButtonRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Button.tsx:ButtonRenderProps)>`

—

The children of the component. A function may be provided to alter the children based on component state.

`className`

`[ClassNameOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ClassNameOrFunction)<[ButtonRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Button.tsx:ButtonRenderProps)>`

—

The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.

`style`

`[StyleOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:StyleOrFunction)<[ButtonRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Button.tsx:ButtonRenderProps)>`

—

The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.

Events

Name

Type

Description

`onPress`

`( (e: [PressEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/events.d.ts:PressEvent) )) => void`

Handler that is called when the press is released over the target.

`onPressStart`

`( (e: [PressEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/events.d.ts:PressEvent) )) => void`

Handler that is called when a press interaction starts.

`onPressEnd`

`( (e: [PressEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/events.d.ts:PressEvent) )) => void`

Handler that is called when a press interaction ends, either over the target or when the pointer leaves the target.

`onPressChange`

`( (isPressed: [boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) )) => void`

Handler that is called when the press state changes.

`onPressUp`

`( (e: [PressEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/events.d.ts:PressEvent) )) => void`

Handler that is called when a press is released over the target, regardless of whether it started on the target or not.

`onClick`

`( (e: [MouseEvent](https://developer.mozilla.org/docs/Web/API/MouseEvent)<[FocusableElement](https://developer.mozilla.org/en-US/docs/Web/API/Element)> )) => void`

**Not recommended – use `onPress` instead.** `onClick` is an alias for `onPress` provided for compatibility with other libraries. `onPress` provides additional event details for non-mouse interactions.

`onFocus`

`( (e: [FocusEvent](https://developer.mozilla.org/docs/Web/API/FocusEvent)<Target> )) => void`

Handler that is called when the element receives focus.

`onBlur`

`( (e: [FocusEvent](https://developer.mozilla.org/docs/Web/API/FocusEvent)<Target> )) => void`

Handler that is called when the element loses focus.

`onFocusChange`

`( (isFocused: [boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) )) => void`

Handler that is called when the element's focus status changes.

`onKeyDown`

`( (e: [KeyboardEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/events.d.ts:KeyboardEvent) )) => void`

Handler that is called when a key is pressed.

`onKeyUp`

`( (e: [KeyboardEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/events.d.ts:KeyboardEvent) )) => void`

Handler that is called when a key is released.

`onHoverStart`

`( (e: [HoverEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/events.d.ts:HoverEvent) )) => void`

Handler that is called when a hover interaction starts.

`onHoverEnd`

`( (e: [HoverEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/events.d.ts:HoverEvent) )) => void`

Handler that is called when a hover interaction ends.

`onHoverChange`

`( (isHovering: [boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) )) => void`

Handler that is called when the hover state changes.

Layout

Name

Type

Description

`slot`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)`

A slot name for the component. Slots allow the component to receive props from a parent component. An explicit `null` value indicates that the local props completely override all props received from a parent.

PositioningAccessibility

Name

Type

Description

`id`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

The element's unique identifier. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id).

`excludeFromTabOrder`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether to exclude the element from the sequential tab order. If true, the element will not be focusable via the keyboard by tabbing. This should be avoided except in rare scenarios where an alternative means of accessing the element or its functionality via the keyboard is available.

`preventFocusOnPress`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether to prevent focus from moving to the button when pressing it.

Caution, this can make the button inaccessible and should only be used when alternative keyboard interaction is provided, such as ComboBox's MenuTrigger or a NumberField's increment/decrement control.

`aria-disabled`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | 'true' | 'false'`

Indicates whether the element is disabled to users of assistive technology.

`aria-expanded`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | 'true' | 'false'`

Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.

`aria-haspopup`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog' | 'true' | 'false'`

Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element.

`aria-controls`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

Identifies the element (or elements) whose contents or presence are controlled by the current element.

`aria-pressed`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | 'true' | 'false' | 'mixed'`

Indicates the current "pressed" state of toggle buttons.

`aria-current`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | 'true' | 'false' | 'page' | 'step' | 'location' | 'date' | 'time'`

Indicates whether this element represents the current item within a container or set of related elements.

`aria-label`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

Defines a string value that labels the current element.

`aria-labelledby`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

Identifies the element (or elements) that labels the current element.

`aria-describedby`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

Identifies the element (or elements) that describes the object.

`aria-details`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

Identifies the element (or elements) that provide a detailed, extended description for the object.

Show props

Name

Type

Description

`children`

`[ReactNode](https://reactjs.org/docs/rendering-elements.html)`

The children of the component.

`className`

`[ClassNameOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ClassNameOrFunction)<[DisclosurePanelRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Disclosure.tsx:DisclosurePanelRenderProps)>`

The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.

`style`

`[StyleOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:StyleOrFunction)<[DisclosurePanelRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Disclosure.tsx:DisclosurePanelRenderProps)>`

The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.

EventsPositioningAccessibility

Name

Type

Default

Description

`role`

`'group' | 'region'`

`'group'`

The accessibility role for the disclosure's panel.

`id`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

The element's unique identifier. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id).

* * *

React Aria components can be styled in many ways, including using CSS classes, inline styles, utility classes (e.g. Tailwind), CSS-in-JS (e.g. Styled Components), etc. By default, all components include a builtin `className` attribute which can be targeted using CSS selectors. These follow the `react-aria-ComponentName` naming convention.

```
.react-aria-DisclosureGroup {
  /* ... */
}
```

```
.react-aria-DisclosureGroup {
  /* ... */
}
```

```
.react-aria-DisclosureGroup {
  /* ... */
}
```

A custom `className` can also be specified on any component. This overrides the default `className` provided by React Aria with your own.

```
<DisclosureGroup className="my-accordion">
  {/* ... */}
</DisclosureGroup>
```

```
<DisclosureGroup className="my-accordion">
  {/* ... */}
</DisclosureGroup>
```

```
<DisclosureGroup className="my-accordion">
  {/* ... */}
</DisclosureGroup>
```

In addition, some components support multiple UI states (e.g. focused, placeholder, readonly, etc.). React Aria components expose states using data attributes, which you can target in CSS selectors. For example:

```
.react-aria-DisclosureGroup[data-disabled] {
  /* ... */
}
```

```
.react-aria-DisclosureGroup[data-disabled] {
  /* ... */
}
```

```
.react-aria-DisclosureGroup[data-disabled] {
  /* ... */
}
```

The `className` and `style` props also accept functions which receive states for styling. This lets you dynamically determine the classes or styles to apply, which is useful when using utility CSS libraries like [Tailwind](https://tailwindcss.com/).

```
<Disclosure
  className={({ isExpanded }) =>
    isExpanded ? 'border-blue-500' : 'border-gray-600'}
/>
```

```
<Disclosure
  className={({ isExpanded }) =>
    isExpanded ? 'border-blue-500' : 'border-gray-600'}
/>
```

```
<Disclosure
  className={(
    { isExpanded }
  ) =>
    isExpanded
      ? 'border-blue-500'
      : 'border-gray-600'}
/>
```

The states, selectors, and render props for each component used in a `DisclosureGroup` are documented below.

A `DisclosureGroup` can be targeted with the `.react-aria-DisclosureGroup` CSS selector, or by overriding with a custom `className`. It supports the following states:

Name

CSS Selector

Description

`isDisabled`

`[data-disabled]`

Whether the disclosure group is disabled.

`state`

`—`

State of the disclosure group.

A `Disclosure` can be targeted with the `.react-aria-Disclosure` CSS selector, or by overriding with a custom `className`. It supports the following states:

Name

CSS Selector

Description

`isExpanded`

`[data-expanded]`

Whether the disclosure is expanded.

`isFocusVisibleWithin`

`[data-focus-visible-within]`

Whether the disclosure has keyboard focus.

`isDisabled`

`[data-disabled]`

Whether the disclosure is disabled.

`state`

`—`

State of the disclosure.

Use the `--disclosure-panel-width` and `--disclosure-panel-height` CSS variables to implement animations.

A `Button` can be targeted with the `.react-aria-Button` CSS selector, or by overriding with a custom `className`. It supports the following states:

Name

CSS Selector

Description

`isHovered`

`[data-hovered]`

Whether the button is currently hovered with a mouse.

`isPressed`

`[data-pressed]`

Whether the button is currently in a pressed state.

`isFocused`

`[data-focused]`

Whether the button is focused, either via a mouse or keyboard.

`isFocusVisible`

`[data-focus-visible]`

Whether the button is keyboard focused.

`isDisabled`

`[data-disabled]`

Whether the button is disabled.

`isPending`

`[data-pending]`

Whether the button is currently in a pending state.

A `DisclosurePanel` can be targeted with the `.react-aria-DisclosurePanel` CSS selector, or by overriding with a custom `className`.

Name

CSS Selector

Description

`isFocusVisibleWithin`

`[data-focus-visible-within]`

Whether keyboard focus is within the disclosure panel.

* * *

DisclosureGroup provides a `[DisclosureGroupState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/disclosure/src/useDisclosureGroupState.ts:DisclosureGroupState)` object to its children via `DisclosureGroupStateContext`. This can be used to access and manipulate the disclosure group's state.

If you need to customize things even further, such as accessing internal state, you can drop down to the lower level Hook-based API. See [useDisclosureGroupState](https://react-spectrum.adobe.com/react-aria/useDisclosure.html#disclosure-group) for more details.