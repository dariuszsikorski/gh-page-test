# FileTrigger

**Source**: [https://react-spectrum.adobe.com/react-aria/FileTrigger.html](https://react-spectrum.adobe.com/react-aria/FileTrigger.html)

> Documentation for FileTrigger in the React Aria package.

---

A FileTrigger allows a user to access the file system with any pressable React Aria or React Spectrum component, or custom components built with usePress.

* * *

```
import {FileTrigger, Button} from 'react-aria-components';

function Example(){
  let [file, setFile] = React.useState(null);

  return (
    <>
      <FileTrigger
        onSelect={(e) => {
          let files = e ? Array.from(e) : [];
          let filenames = files.map((file) => file.name);
          setFile(filenames);
        }}>
        <Button>Select a file</Button>
      </FileTrigger>
      {file && file}
    </>
  )
}
```

```
import {FileTrigger, Button} from 'react-aria-components';

function Example(){
  let [file, setFile] = React.useState(null);

  return (
    <>
      <FileTrigger
        onSelect={(e) => {
          let files = e ? Array.from(e) : [];
          let filenames = files.map((file) => file.name);
          setFile(filenames);
        }}>
        <Button>Select a file</Button>
      </FileTrigger>
      {file && file}
    </>
  )
}
```

```
import {
  Button,
  FileTrigger
} from 'react-aria-components';

function Example() {
  let [file, setFile] =
    React.useState(null);

  return (
    <>
      <FileTrigger
        onSelect={(
          e
        ) => {
          let files = e
            ? Array.from(
              e
            )
            : [];
          let filenames =
            files.map((
              file
            ) =>
              file.name
            );
          setFile(
            filenames
          );
        }}
      >
        <Button>
          Select a file
        </Button>
      </FileTrigger>
      {file && file}
    </>
  );
}
```

* * *

A file input can be created with an `<input type=“file”>` element, but this supports limited styling options and may not integrate well with the overall design of a website or application. To overcome this, `FileTrigger` extends the functionality of the standard file input element by working with a pressable child such as a `Button` to create accessible file inputs that can be styled as needed.

-   **Customizable** – Works with any pressable React Aria or React Spectrum component, and custom components built with [usePress](https://react-spectrum.adobe.com/react-aria/usePress.html).

* * *

A `FileTrigger` wraps around a pressable child such as a button, and includes a visually hidden input element that allows the user to select files from their device.

```
import {FileTrigger, Button} from 'react-aria-components';

<FileTrigger>
  <Button />
</FileTrigger>
```

```
import {FileTrigger, Button} from 'react-aria-components';

<FileTrigger>
  <Button />
</FileTrigger>
```

```
import {
  Button,
  FileTrigger
} from 'react-aria-components';

<FileTrigger>
  <Button />
</FileTrigger>
```

If a visual label is not provided on the pressable child, then an `aria-label` or `aria-labelledby` prop must be passed to identify the file trigger to assistive technology.

A `FileTrigger` can use the following components, which may also be used standalone or reused in other components.

[

Button

A button allows a user to perform an action with a mouse, touch, or keyboard.

](https://react-spectrum.adobe.com/react-aria/Button.html)

* * *

By default, the file trigger will accept any file type. To support only certain file types, pass an array of the [mime type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types) of files via the `acceptedFileTypes` prop.

```
<FileTrigger acceptedFileTypes={['image/png']}>
  <Button>Select files</Button>
</FileTrigger>
```

```
<FileTrigger acceptedFileTypes={['image/png']}>
  <Button>Select files</Button>
</FileTrigger>
```

```
<FileTrigger
  acceptedFileTypes={[
    'image/png'
  ]}
>
  <Button>
    Select files
  </Button>
</FileTrigger>
```

* * *

A file trigger can accept multiple files by passsing the `allowsMultiple` property.

```
<FileTrigger allowsMultiple>
  <Button>Upload your files</Button>
</FileTrigger>
```

```
<FileTrigger allowsMultiple>
  <Button>Upload your files</Button>
</FileTrigger>
```

```
<FileTrigger
  allowsMultiple
>
  <Button>
    Upload your files
  </Button>
</FileTrigger>
```

* * *

To enable selecting directories instead of files, use the `acceptDirectory` property.

This reflects the [webkitdirectory](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/webkitdirectory) HTML attribute and allows users to select directories and their contents. Please note that support for this feature varies from browser to browser.

```
function Example() {
  let [files, setFiles] = React.useState([]);

  return (
    <>
      <FileTrigger
        acceptDirectory
        onSelect={(e) => {
          if (e) {
            let fileList = [...e].map((file) =>
              file.webkitRelativePath !== ''
                ? file.webkitRelativePath
                : file.name
            );
            setFiles(fileList);
          }
        }}
      >
        <Button>Upload</Button>
      </FileTrigger>
      {files && (
        <ul>
          {files.map((file, index) => <li key={index}>{file}</li>)}
        </ul>
      )}
    </>
  );
}
```

```
function Example() {
  let [files, setFiles] = React.useState([]);

  return (
    <>
      <FileTrigger
        acceptDirectory
        onSelect={(e) => {
          if (e) {
            let fileList = [...e].map((file) =>
              file.webkitRelativePath !== ''
                ? file.webkitRelativePath
                : file.name
            );
            setFiles(fileList);
          }
        }}
      >
        <Button>Upload</Button>
      </FileTrigger>
      {files && (
        <ul>
          {files.map((file, index) => (
            <li key={index}>{file}</li>
          ))}
        </ul>
      )}
    </>
  );
}
```

```
function Example() {
  let [files, setFiles] =
    React.useState([]);

  return (
    <>
      <FileTrigger
        acceptDirectory
        onSelect={(
          e
        ) => {
          if (e) {
            let fileList =
              [...e].map(
                (file) =>
                  file
                      .webkitRelativePath !==
                      ''
                    ? file
                      .webkitRelativePath
                    : file
                      .name
              );
            setFiles(
              fileList
            );
          }
        }}
      >
        <Button>
          Upload
        </Button>
      </FileTrigger>
      {files && (
        <ul>
          {files.map((
            file,
            index
          ) => (
            <li
              key={index}
            >
              {file}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
```

* * *

To specify the media capture mechanism to capture media on the spot, pass `user` for the user-facing camera or `environment` for the outward-facing camera via the `defaultCamera` prop.

This behavior only works on mobile devices. On desktop devices, it will open the file system like normal. [Read more about capture](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/capture).

```
<FileTrigger defaultCamera="environment">
  <Button>Open Camera</Button>
</FileTrigger>
```

```
<FileTrigger defaultCamera="environment">
  <Button>Open Camera</Button>
</FileTrigger>
```

```
<FileTrigger defaultCamera="environment">
  <Button>
    Open Camera
  </Button>
</FileTrigger>
```

* * *

Name

Type

Description

`acceptedFileTypes`

`ReadonlyArray<[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)>`

Specifies what mime type of files are allowed.

`allowsMultiple`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether multiple files can be selected.

`defaultCamera`

`'user' | 'environment'`

Specifies the use of a media capture mechanism to capture the media on the spot.

`children`

`[ReactNode](https://reactjs.org/docs/rendering-elements.html)`

The children of the component.

`acceptDirectory`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Enables the selection of directories instead of individual files.

Events

Name

Type

Description

`onSelect`

`( (files: FileList |  | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null) )) => void`

Handler when a user selects a file.

Positioning

* * *

The `FileTrigger` component does not render any element of its own so it does not support styling.

A [Button](https://react-spectrum.adobe.com/react-aria/Button.html) can be targeted with the `.react-aria-Button` CSS selector, or by overriding with a custom `className`. It supports the following states:

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