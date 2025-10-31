# useClipboard

**Source**: [https://react-spectrum.adobe.com/react-aria/useClipboard.html](https://react-spectrum.adobe.com/react-aria/useClipboard.html)

> Documentation for useClipboard in the React Aria package.

---

Handles clipboard interactions for a focusable element. Supports items of multiple data types, and integrates with the operating system native clipboard.

* * *

`useClipboard( (options: [ClipboardProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/dnd/src/useClipboard.ts:ClipboardProps) )): [ClipboardResult](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/dnd/src/useClipboard.ts:ClipboardResult)`

* * *

Copy and paste is a common way to transfer data between locations, either within or between apps. Browsers support copy and paste of selected text content by default, but rich objects with custom data can also be copied and pasted using the [clipboard events](https://developer.mozilla.org/en-US/docs/Web/API/ClipboardEvent) API. For example, an app could support copying and pasting a selected card representing a rich object to a new location, or allow a user to paste files from their device to upload them. This can provide a keyboard accessible alternative to drag and drop.

The `[useClipboard](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/dnd/src/useClipboard.ts:useClipboard)` hook provides a simple way to implement copy and paste for a focusable element. When focused, users can press keyboard shortcuts like ⌘C and ⌘V, or even use the browser's "Copy" and "Paste" menu commands, to trigger clipboard events. Multiple items can be copied and pasted at once, each represented in one or more different data formats. Because it uses native browser APIs under the hood, copy and paste uses the operating system clipboard, which means it works between applications (e.g. Finder, Windows Explorer, a native email app, etc.) in addition to within the app.

* * *

This example shows a simple focusable element which supports copying a string when focused, and another element which supports pasting plain text.

```
import type {TextDropItem} from 'react-aria';
import {useClipboard} from 'react-aria';

function Copyable() {
  let { clipboardProps } = useClipboard({
    getItems() {
      return [{
        'text/plain': 'Hello world'
      }];
    }
  });

  return (
    <div role="textbox" tabIndex={0} {...clipboardProps}>
      Hello world
      <kbd>⌘C</kbd>
    </div>
  );
}

function Pasteable() {
  let [pasted, setPasted] = React.useState(null);
  let { clipboardProps } = useClipboard({
    async onPaste(items) {
      let pasted = await Promise.all(
        items
          .filter((item) =>
            item.kind === 'text' && item.types.has('text/plain')
          )
          .map((item: TextDropItem) => item.getText('text/plain'))
      );
      setPasted(pasted.join('\n'));
    }
  });

  return (
    <div role="textbox" tabIndex={0} {...clipboardProps}>
      {pasted || 'Paste here'}
      <kbd>⌘V</kbd>
    </div>
  );
}

<Copyable />
<Pasteable />
```

```
import type {TextDropItem} from 'react-aria';
import {useClipboard} from 'react-aria';

function Copyable() {
  let { clipboardProps } = useClipboard({
    getItems() {
      return [{
        'text/plain': 'Hello world'
      }];
    }
  });

  return (
    <div role="textbox" tabIndex={0} {...clipboardProps}>
      Hello world
      <kbd>⌘C</kbd>
    </div>
  );
}

function Pasteable() {
  let [pasted, setPasted] = React.useState(null);
  let { clipboardProps } = useClipboard({
    async onPaste(items) {
      let pasted = await Promise.all(
        items
          .filter((item) =>
            item.kind === 'text' &&
            item.types.has('text/plain')
          )
          .map((item: TextDropItem) =>
            item.getText('text/plain')
          )
      );
      setPasted(pasted.join('\n'));
    }
  });

  return (
    <div role="textbox" tabIndex={0} {...clipboardProps}>
      {pasted || 'Paste here'}
      <kbd>⌘V</kbd>
    </div>
  );
}

<Copyable />
<Pasteable />
```

```
import type {TextDropItem} from 'react-aria';
import {useClipboard} from 'react-aria';

function Copyable() {
  let {
    clipboardProps
  } = useClipboard({
    getItems() {
      return [{
        'text/plain':
          'Hello world'
      }];
    }
  });

  return (
    <div
      role="textbox"
      tabIndex={0}
      {...clipboardProps}
    >
      Hello world
      <kbd>⌘C</kbd>
    </div>
  );
}

function Pasteable() {
  let [
    pasted,
    setPasted
  ] = React.useState(
    null
  );
  let {
    clipboardProps
  } = useClipboard({
    async onPaste(
      items
    ) {
      let pasted =
        await Promise
          .all(
            items
              .filter((
                item
              ) =>
                item
                    .kind ===
                  'text' &&
                item
                  .types
                  .has(
                    'text/plain'
                  )
              )
              .map((
                item:
                  TextDropItem
              ) =>
                item
                  .getText(
                    'text/plain'
                  )
              )
          );
      setPasted(
        pasted.join('\n')
      );
    }
  });

  return (
    <div
      role="textbox"
      tabIndex={0}
      {...clipboardProps}
    >
      {pasted ||
        'Paste here'}
      <kbd>⌘V</kbd>
    </div>
  );
}

<Copyable />
<Pasteable />
```

Show CSS

```
[role=textbox] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--spectrum-global-color-gray-50);
  border: 1px solid var(--spectrum-global-color-gray-400);
  padding: 10px;
  margin-right: 20px;
  border-radius: 8px;
}

[role=textbox]:focus {
  outline: none;
  border-color: var(--blue);
  box-shadow: 0 0 0 1px var(--blue);
}

[role=textbox] kbd {
  display: inline-block;
  margin-left: 10px;
  padding: 0 4px;
  background: var(--spectrum-global-color-gray-100);
  border: 1px solid var(--spectrum-global-color-gray-300);
  border-radius: 4px;
  font-size: small;
  letter-spacing: .2em;
}
```

```
[role=textbox] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--spectrum-global-color-gray-50);
  border: 1px solid var(--spectrum-global-color-gray-400);
  padding: 10px;
  margin-right: 20px;
  border-radius: 8px;
}

[role=textbox]:focus {
  outline: none;
  border-color: var(--blue);
  box-shadow: 0 0 0 1px var(--blue);
}

[role=textbox] kbd {
  display: inline-block;
  margin-left: 10px;
  padding: 0 4px;
  background: var(--spectrum-global-color-gray-100);
  border: 1px solid var(--spectrum-global-color-gray-300);
  border-radius: 4px;
  font-size: small;
  letter-spacing: .2em;
}
```

```
[role=textbox] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--spectrum-global-color-gray-50);
  border: 1px solid var(--spectrum-global-color-gray-400);
  padding: 10px;
  margin-right: 20px;
  border-radius: 8px;
}

[role=textbox]:focus {
  outline: none;
  border-color: var(--blue);
  box-shadow: 0 0 0 1px var(--blue);
}

[role=textbox] kbd {
  display: inline-block;
  margin-left: 10px;
  padding: 0 4px;
  background: var(--spectrum-global-color-gray-100);
  border: 1px solid var(--spectrum-global-color-gray-300);
  border-radius: 4px;
  font-size: small;
  letter-spacing: .2em;
}
```

* * *

Data to copy can be provided in multiple formats at once. This allows the destination where the user pastes to choose the data that it understands. For example, you could serialize a complex object as JSON in a custom format for use within your own application, and also provide plain text and/or rich HTML fallbacks that can be used when a user pastes in an external application (e.g. an email message).

This can be done by returning multiple keys for an item from the `getItems` function. Types can either be a standard [mime type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types) for interoperability with external applications, or a custom string for use within your own app.

In addition to providing items in multiple formats, you can also return multiple drag items from `getItems` to transfer multiple objects in a single copy and paste operation.

This example copies two items, each of which contains representations as plain text, HTML, and a custom app-specific data format. Pasting on the target will use the custom data format to render formatted items. If you paste in an external application supporting rich text, the HTML representation will be used. Dropping in a text editor will use the plain text format.

```
function Copyable() {
  let {clipboardProps} = useClipboard({
    getItems() {
      return [{
        'text/plain': 'hello world',
        'text/html': '<strong>hello world</strong>',
        'my-app-custom-type': JSON.stringify({
          message: 'hello world',
          style: 'bold'
        })
      }, {
        'text/plain': 'foo bar',
        'text/html': '<em>foo bar</em>',
        'my-app-custom-type': JSON.stringify({
          message: 'foo bar',
          style: 'italic'
        })
      }];
    }
  });

  return (
    <div role="textbox" tabIndex={0} {...clipboardProps}>
      <div>
        <div><strong>hello world</strong></div>
        <div><em>foo bar</em></div>
      </div>
      <kbd>⌘C</kbd>
    </div>
  );
}
```

```
function Copyable() {
  let {clipboardProps} = useClipboard({
    getItems() {
      return [{
        'text/plain': 'hello world',
        'text/html': '<strong>hello world</strong>',
        'my-app-custom-type': JSON.stringify({
          message: 'hello world',
          style: 'bold'
        })
      }, {
        'text/plain': 'foo bar',
        'text/html': '<em>foo bar</em>',
        'my-app-custom-type': JSON.stringify({
          message: 'foo bar',
          style: 'italic'
        })
      }];
    }
  });

  return (
    <div role="textbox" tabIndex={0} {...clipboardProps}>
      <div>
        <div><strong>hello world</strong></div>
        <div><em>foo bar</em></div>
      </div>
      <kbd>���C</kbd>
    </div>
  );
}
```

```
function Copyable() {
  let {
    clipboardProps
  } = useClipboard({
    getItems() {
      return [{
        'text/plain':
          'hello world',
        'text/html':
          '<strong>hello world</strong>',
        'my-app-custom-type':
          JSON.stringify(
            {
              message:
                'hello world',
              style:
                'bold'
            }
          )
      }, {
        'text/plain':
          'foo bar',
        'text/html':
          '<em>foo bar</em>',
        'my-app-custom-type':
          JSON.stringify(
            {
              message:
                'foo bar',
              style:
                'italic'
            }
          )
      }];
    }
  });

  return (
    <div
      role="textbox"
      tabIndex={0}
      {...clipboardProps}
    >
      <div>
        <div>
          <strong>
            hello world
          </strong>
        </div>
        <div>
          <em>
            foo bar
          </em>
        </div>
      </div>
      <kbd>⌘C</kbd>
    </div>
  );
}
```

* * *

`useClipboard` allows users to paste one or more items, each of which contains data to be pasted. There are three kinds of items:

-   `text` – represents data inline as a string in one or more formats
-   `file` – references a file on the user's device
-   `directory` – references the contents of a directory

A `[TextDropItem](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dnd.d.ts:TextDropItem)` represents textual data in one or more different formats. These may be either standard [mime types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types) or custom app-specific formats. Representing data in multiple formats allows drop targets both within and outside an application to choose data in a format that they understand. For example, a complex object may be serialized in a custom format for use within an application, with fallbacks in plain text and/or rich HTML that can be used when a user drops data from an external application.

The example below works with the above `Copyable` example using a custom app-specific data format to transfer rich data. If no such data is available, it falls back to pasting plain text data.

```
function Pasteable() {
  let [pasted, setPasted] = React.useState(null);
  let { clipboardProps } = useClipboard({
    async onPaste(items) {
      let pasted = await Promise.all(
        items
          .filter((item) =>
            item.kind === 'text' &&
            (item.types.has('text/plain') ||
              item.types.has('my-app-custom-type'))
          )
          .map(async (item: TextDropItem) => {
            if (item.types.has('my-app-custom-type')) {
              return JSON.parse(await item.getText('my-app-custom-type'));
            } else {
              return { message: await item.getText('text/plain') };
            }
          })
      );
      setPasted(pasted);
    }
  });

  let message = ['Paste here'];
  if (pasted) {
    message = pasted.map((d) => {
      let message = d.message;
      if (d.style === 'bold') {
        message = <strong>{message}</strong>;
      } else if (d.style === 'italic') {
        message = <em>{message}</em>;
      }
      return <div>{message}</div>;
    });
  }

  return (
    <div role="textbox" tabIndex={0} {...clipboardProps}>
      <div>{message || 'Paste here'}</div>
      <kbd>⌘V</kbd>
    </div>
  );
}
```

```
function Pasteable() {
  let [pasted, setPasted] = React.useState(null);
  let { clipboardProps } = useClipboard({
    async onPaste(items) {
      let pasted = await Promise.all(
        items
          .filter((item) =>
            item.kind === 'text' &&
            (item.types.has('text/plain') ||
              item.types.has('my-app-custom-type'))
          )
          .map(async (item: TextDropItem) => {
            if (item.types.has('my-app-custom-type')) {
              return JSON.parse(
                await item.getText('my-app-custom-type')
              );
            } else {
              return {
                message: await item.getText('text/plain')
              };
            }
          })
      );
      setPasted(pasted);
    }
  });

  let message = ['Paste here'];
  if (pasted) {
    message = pasted.map((d) => {
      let message = d.message;
      if (d.style === 'bold') {
        message = <strong>{message}</strong>;
      } else if (d.style === 'italic') {
        message = <em>{message}</em>;
      }
      return <div>{message}</div>;
    });
  }

  return (
    <div role="textbox" tabIndex={0} {...clipboardProps}>
      <div>{message || 'Paste here'}</div>
      <kbd>⌘V</kbd>
    </div>
  );
}
```

```
function Pasteable() {
  let [
    pasted,
    setPasted
  ] = React.useState(
    null
  );
  let {
    clipboardProps
  } = useClipboard({
    async onPaste(
      items
    ) {
      let pasted =
        await Promise
          .all(
            items
              .filter(
                (item) =>
                  item
                      .kind ===
                    'text' &&
                  (item
                    .types
                    .has(
                      'text/plain'
                    ) ||
                    item
                      .types
                      .has(
                        'my-app-custom-type'
                      ))
              )
              .map(
                async (
                  item:
                    TextDropItem
                ) => {
                  if (
                    item
                      .types
                      .has(
                        'my-app-custom-type'
                      )
                  ) {
                    return JSON
                      .parse(
                        await item
                          .getText(
                            'my-app-custom-type'
                          )
                      );
                  } else {
                    return {
                      message:
                        await item
                          .getText(
                            'text/plain'
                          )
                    };
                  }
                }
              )
          );
      setPasted(pasted);
    }
  });

  let message = [
    'Paste here'
  ];
  if (pasted) {
    message = pasted.map(
      (d) => {
        let message =
          d.message;
        if (
          d.style ===
            'bold'
        ) {
          message = (
            <strong>
              {message}
            </strong>
          );
        } else if (
          d.style ===
            'italic'
        ) {
          message = (
            <em>
              {message}
            </em>
          );
        }
        return (
          <div>
            {message}
          </div>
        );
      }
    );
  }

  return (
    <div
      role="textbox"
      tabIndex={0}
      {...clipboardProps}
    >
      <div>
        {message ||
          'Paste here'}
      </div>
      <kbd>⌘V</kbd>
    </div>
  );
}
```

A `[FileDropItem](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dnd.d.ts:FileDropItem)` references a file on the user's device. It includes the name and mime type of the file, and methods to read the contents as plain text, or retrieve a native [File](https://developer.mozilla.org/en-US/docs/Web/API/File) object which can be attached to form data for uploading.

This example accepts JPEG and PNG image files, and renders them by creating a local [object URL](https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL).

```
import type {FileDropItem} from 'react-aria';

function Pasteable() {
  let [file, setFile] = React.useState(null);
  let { clipboardProps } = useClipboard({
    async onPaste(items) {
      let item = items.find((item) =>
        item.kind === 'file' &&
        (item.type === 'image/jpeg' || item.type === 'image/png')
      ) as FileDropItem;
      if (item) {
        setFile(URL.createObjectURL(await item.getFile()));
      }
    }
  });

  return (
    <div
      role="textbox"
      tabIndex={0}
      {...clipboardProps}
      style={{ width: 150, height: 100 }}
    >
      {file
        ? (
          <img
            src={file}
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        )
        : 'Paste image here'}
    </div>
  );
}
```

```
import type {FileDropItem} from 'react-aria';

function Pasteable() {
  let [file, setFile] = React.useState(null);
  let { clipboardProps } = useClipboard({
    async onPaste(items) {
      let item = items.find((item) =>
        item.kind === 'file' &&
        (item.type === 'image/jpeg' ||
          item.type === 'image/png')
      ) as FileDropItem;
      if (item) {
        setFile(URL.createObjectURL(await item.getFile()));
      }
    }
  });

  return (
    <div
      role="textbox"
      tabIndex={0}
      {...clipboardProps}
      style={{ width: 150, height: 100 }}
    >
      {file
        ? (
          <img
            src={file}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain'
            }}
          />
        )
        : 'Paste image here'}
    </div>
  );
}
```

```
import type {FileDropItem} from 'react-aria';

function Pasteable() {
  let [file, setFile] =
    React.useState(null);
  let {
    clipboardProps
  } = useClipboard({
    async onPaste(
      items
    ) {
      let item = items
        .find((item) =>
          item.kind ===
            'file' &&
          (item.type ===
              'image/jpeg' ||
            item.type ===
              'image/png')
        ) as FileDropItem;
      if (item) {
        setFile(
          URL
            .createObjectURL(
              await item
                .getFile()
            )
        );
      }
    }
  });

  return (
    <div
      role="textbox"
      tabIndex={0}
      {...clipboardProps}
      style={{
        width: 150,
        height: 100
      }}
    >
      {file
        ? (
          <img
            src={file}
            style={{
              width:
                '100%',
              height:
                '100%',
              objectFit:
                'contain'
            }}
          />
        )
        : 'Paste image here'}
    </div>
  );
}
```

A `[DirectoryDropItem](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dnd.d.ts:DirectoryDropItem)` references the contents of a directory on the user's device. It includes the name of the directory, as well as a method to iterate through the files and folders within the directory. The contents of any folders within the directory can be accessed recursively.

The `getEntries` method returns an [async iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of) object, which can be used in a `for await...of` loop. This provides each item in the directory as either a `[FileDropItem](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dnd.d.ts:FileDropItem)` or `[DirectoryDropItem](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dnd.d.ts:DirectoryDropItem)`, and you can access the contents of each file as discussed above.

This example renders the file names within a dropped directory in a grid.

```
import type {DirectoryDropItem} from 'react-aria';
import File from '@spectrum-icons/workflow/FileTxt';
import Folder from '@spectrum-icons/workflow/Folder';

function Pasteable() {
  let [files, setFiles] = React.useState(null);
  let { clipboardProps } = useClipboard({
    async onPaste(items) {
      // Find the first dropped item that is a directory.
      let dir = items.find((item) =>
        item.kind === 'directory'
      ) as DirectoryDropItem;
      if (dir) {
        // Read entries in directory and update state with relevant info.
        let files = [];
        for await (let entry of dir.getEntries()) {
          files.push({
            name: entry.name,
            kind: entry.kind
          });
        }
        setFiles(files);
      }
    }
  });

  let contents = <>Paste directory here</>;
  if (files) {
    contents = (
      <ul>
        {files.map((f) => (
          <li key={f.name}>
            {f.kind === 'directory' ? <Folder /> : <File />}
            <span>{f.name}</span>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div role="textbox" tabIndex={0} {...clipboardProps} className="grid">
      {contents}
    </div>
  );
}
```

```
import type {DirectoryDropItem} from 'react-aria';
import File from '@spectrum-icons/workflow/FileTxt';
import Folder from '@spectrum-icons/workflow/Folder';

function Pasteable() {
  let [files, setFiles] = React.useState(null);
  let { clipboardProps } = useClipboard({
    async onPaste(items) {
      // Find the first dropped item that is a directory.
      let dir = items.find((item) =>
        item.kind === 'directory'
      ) as DirectoryDropItem;
      if (dir) {
        // Read entries in directory and update state with relevant info.
        let files = [];
        for await (let entry of dir.getEntries()) {
          files.push({
            name: entry.name,
            kind: entry.kind
          });
        }
        setFiles(files);
      }
    }
  });

  let contents = <>Paste directory here</>;
  if (files) {
    contents = (
      <ul>
        {files.map((f) => (
          <li key={f.name}>
            {f.kind === 'directory' ? <Folder /> : <File />}
            <span>{f.name}</span>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div
      role="textbox"
      tabIndex={0}
      {...clipboardProps}
      className="grid"
    >
      {contents}
    </div>
  );
}
```

```
import type {DirectoryDropItem} from 'react-aria';
import File from '@spectrum-icons/workflow/FileTxt';
import Folder from '@spectrum-icons/workflow/Folder';

function Pasteable() {
  let [files, setFiles] =
    React.useState(null);
  let {
    clipboardProps
  } = useClipboard({
    async onPaste(
      items
    ) {
      // Find the first dropped item that is a directory.
      let dir = items
        .find((item) =>
          item.kind ===
            'directory'
        ) as DirectoryDropItem;
      if (dir) {
        // Read entries in directory and update state with relevant info.
        let files = [];
        for await (
          let entry
            of dir
              .getEntries()
        ) {
          files.push({
            name:
              entry.name,
            kind:
              entry.kind
          });
        }
        setFiles(files);
      }
    }
  });

  let contents = (
    <>
      Paste directory
      here
    </>
  );
  if (files) {
    contents = (
      <ul>
        {files.map(
          (f) => (
            <li
              key={f
                .name}
            >
              {f.kind ===
                  'directory'
                ? (
                  <Folder />
                )
                : (
                  <File />
                )}
              <span>
                {f.name}
              </span>
            </li>
          )
        )}
      </ul>
    );
  }

  return (
    <div
      role="textbox"
      tabIndex={0}
      {...clipboardProps}
      className="grid"
    >
      {contents}
    </div>
  );
}
```

Show CSS

```
.grid {
  display: block;
  width: auto;
  height: auto;
  min-height: 80px;
}

.grid ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, 100px);
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 20px;
}

.grid li {
  display: flex;
  align-items: center;
  gap: 8px;
}

.grid li svg {
  flex: 0 0 auto;
}

.grid li span {
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

```
.grid {
  display: block;
  width: auto;
  height: auto;
  min-height: 80px;
}

.grid ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, 100px);
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 20px;
}

.grid li {
  display: flex;
  align-items: center;
  gap: 8px;
}

.grid li svg {
  flex: 0 0 auto;
}

.grid li span {
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

```
.grid {
  display: block;
  width: auto;
  height: auto;
  min-height: 80px;
}

.grid ul {
  display: grid;
  grid-template-columns: repeat(auto-fit, 100px);
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 20px;
}

.grid li {
  display: flex;
  align-items: center;
  gap: 8px;
}

.grid li svg {
  flex: 0 0 auto;
}

.grid li span {
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

## Disabling copy and paste[#](#disabling-copy-and-paste)

* * *

If you need to temporarily disable copying and pasting, you can pass the `isDisabled` option to `useClipboard`. This will prevent copying and pasting on the element until it is re-enabled.

```
import type {TextDropItem} from 'react-aria';
import {useClipboard} from 'react-aria';

function Copyable() {
  let { clipboardProps } = useClipboard({
    getItems() {
      return [{
        'text/plain': 'Hello world'
      }];
    },
    isDisabled: true  });

  return (
    <div role="textbox" tabIndex={0} {...clipboardProps}>
      Hello world
      <kbd>⌘C</kbd>
    </div>
  );
}

function Pasteable() {
  let [pasted, setPasted] = React.useState(null);
  let { clipboardProps } = useClipboard({
    async onPaste(items) {
      let pasted = await Promise.all(
        items
          .filter((item) =>
            item.kind === 'text' && item.types.has('text/plain')
          )
          .map((item: TextDropItem) => item.getText('text/plain'))
      );
      setPasted(pasted.join('\n'));
    },
    isDisabled: true  });

  return (
    <div role="textbox" tabIndex={0} {...clipboardProps}>
      {pasted || 'Paste here'}
      <kbd>⌘V</kbd>
    </div>
  );
}

<Copyable />
<Pasteable />
```

```
import type {TextDropItem} from 'react-aria';
import {useClipboard} from 'react-aria';

function Copyable() {
  let { clipboardProps } = useClipboard({
    getItems() {
      return [{
        'text/plain': 'Hello world'
      }];
    },
    isDisabled: true  });

  return (
    <div role="textbox" tabIndex={0} {...clipboardProps}>
      Hello world
      <kbd>⌘C</kbd>
    </div>
  );
}

function Pasteable() {
  let [pasted, setPasted] = React.useState(null);
  let { clipboardProps } = useClipboard({
    async onPaste(items) {
      let pasted = await Promise.all(
        items
          .filter((item) =>
            item.kind === 'text' &&
            item.types.has('text/plain')
          )
          .map((item: TextDropItem) =>
            item.getText('text/plain')
          )
      );
      setPasted(pasted.join('\n'));
    },
    isDisabled: true  });

  return (
    <div role="textbox" tabIndex={0} {...clipboardProps}>
      {pasted || 'Paste here'}
      <kbd>⌘V</kbd>
    </div>
  );
}

<Copyable />
<Pasteable />
```

```
import type {TextDropItem} from 'react-aria';
import {useClipboard} from 'react-aria';

function Copyable() {
  let {
    clipboardProps
  } = useClipboard({
    getItems() {
      return [{
        'text/plain':
          'Hello world'
      }];
    },
    isDisabled: true  });

  return (
    <div
      role="textbox"
      tabIndex={0}
      {...clipboardProps}
    >
      Hello world
      <kbd>⌘C</kbd>
    </div>
  );
}

function Pasteable() {
  let [
    pasted,
    setPasted
  ] = React.useState(
    null
  );
  let {
    clipboardProps
  } = useClipboard({
    async onPaste(
      items
    ) {
      let pasted =
        await Promise
          .all(
            items
              .filter((
                item
              ) =>
                item
                    .kind ===
                  'text' &&
                item
                  .types
                  .has(
                    'text/plain'
                  )
              )
              .map((
                item:
                  TextDropItem
              ) =>
                item
                  .getText(
                    'text/plain'
                  )
              )
          );
      setPasted(
        pasted.join('\n')
      );
    },
    isDisabled: true  });

  return (
    <div
      role="textbox"
      tabIndex={0}
      {...clipboardProps}
    >
      {pasted ||
        'Paste here'}
      <kbd>⌘V</kbd>
    </div>
  );
}

<Copyable />
<Pasteable />
```