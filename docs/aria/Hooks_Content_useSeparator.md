# useSeparator

**Source**: [https://react-spectrum.adobe.com/react-aria/useSeparator.html](https://react-spectrum.adobe.com/react-aria/useSeparator.html)

> Documentation for useSeparator in the React Aria package.

---

Provides the accessibility implementation for a separator. A separator is a visual divider between two groups of content, e.g. groups of menu items or sections of a page.

* * *

`useSeparator( (props: [SeparatorProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/separator/src/useSeparator.ts:SeparatorProps) )): [SeparatorAria](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/separator/src/useSeparator.ts:SeparatorAria)`

* * *

Horizontal separators can be built with the HTML [<hr>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hr) element. However, there is no HTML element for a vertical separator. `useSeparator` helps achieve accessible separators that can be styled as needed.

-   Support for horizontal and vertical orientation
-   Support for HTML `<hr>` element or a custom element type

* * *

A separator consists of a single element that represents the divider. `useSeparator` returns props to be spread onto the element:

Name

Type

Description

`separatorProps`

`[DOMAttributes](https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes)`

Props for the separator element.

* * *

This example shows how create both a horizontal and a vertical oriented separator.

```
import {useSeparator} from 'react-aria';

function Separator(props) {
  let { separatorProps } = useSeparator(props);

  return (
    <div
      {...separatorProps}
      style={{
        background: 'gray',
        width: props.orientation === 'vertical' ? '1px' : '100%',
        height: props.orientation === 'vertical' ? '100%' : '1px',
        margin: props.orientation === 'vertical' ? '0 5px' : '5px 0'
      }}
    />
  );
}

<>
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    Content above
    <Separator />
    Content below
  </div>
   <div
    style={{
      display: 'flex',
      flexDirection: 'row',
      marginTop: 20,
      height: 40,
      alignItems: 'center'
    }}
  >
    Content left
    <Separator orientation="vertical" />
    Content right
  </div>
</>
```

```
import {useSeparator} from 'react-aria';

function Separator(props) {
  let { separatorProps } = useSeparator(props);

  return (
    <div
      {...separatorProps}
      style={{
        background: 'gray',
        width: props.orientation === 'vertical'
          ? '1px'
          : '100%',
        height: props.orientation === 'vertical'
          ? '100%'
          : '1px',
        margin: props.orientation === 'vertical'
          ? '0 5px'
          : '5px 0'
      }}
    />
  );
}

<>
  <div
    style={{ display: 'flex', flexDirection: 'column' }}
  >
    Content above
    <Separator />
    Content below
  </div>
   <div
    style={{
      display: 'flex',
      flexDirection: 'row',
      marginTop: 20,
      height: 40,
      alignItems: 'center'
    }}
  >
    Content left
    <Separator orientation="vertical" />
    Content right
  </div>
</>
```

```
import {useSeparator} from 'react-aria';

function Separator(
  props
) {
  let {
    separatorProps
  } = useSeparator(
    props
  );

  return (
    <div
      {...separatorProps}
      style={{
        background:
          'gray',
        width:
          props
              .orientation ===
              'vertical'
            ? '1px'
            : '100%',
        height:
          props
              .orientation ===
              'vertical'
            ? '100%'
            : '1px',
        margin:
          props
              .orientation ===
              'vertical'
            ? '0 5px'
            : '5px 0'
      }}
    />
  );
}

<>
  <div
    style={{
      display: 'flex',
      flexDirection:
        'column'
    }}
  >
    Content above
    <Separator />
    Content below
  </div>
   <div
    style={{
      display: 'flex',
      flexDirection:
        'row',
      marginTop: 20,
      height: 40,
      alignItems:
        'center'
    }}
  >
    Content left
    <Separator orientation="vertical" />
    Content right
  </div>
</>
```