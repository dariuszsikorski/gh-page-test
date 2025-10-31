# useDrop

**Source**: [https://react-spectrum.adobe.com/react-aria/useDrop.html](https://react-spectrum.adobe.com/react-aria/useDrop.html)

> Documentation for useDrop in the React Aria package.

---

Handles drop interactions for an element, with support for traditional mouse and touch based drag and drop, in addition to full parity for keyboard and screen reader users.

* * *

`useDrop( (options: [DropOptions](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/dnd/src/useDrop.ts:DropOptions) )): [DropResult](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/dnd/src/useDrop.ts:DropResult)`

* * *

Drag and drop is a common UI interaction that allows users to transfer data between two locations by directly moving a visual representation on screen. It is a flexible, efficient, and intuitive way for users to perform a variety of tasks, and is widely supported across both desktop and mobile operating systems.

React Aria supports traditional mouse and touch based drag and drop, but also implements keyboard and screen reader friendly interactions. Users can press Enter on a draggable element to enter drag and drop mode. Then, they can press Tab to navigate between drop targets, and Enter to drop or Escape to cancel. Touch screen reader users can also drag by double tapping to activate drag and drop mode, swiping between drop targets, and double tapping again to drop.

See the [drag and drop introduction](https://react-spectrum.adobe.com/react-aria/dnd.html) to learn more.

* * *

This example shows how to make a simple drop target that accepts plain text data. In order to support keyboard and screen reader drag interactions, the element must be focusable and have an ARIA role (in this case, `button`). While a drag is hovered over it, a blue outline is rendered by applying an additional CSS class.

```
import type {TextDropItem} from 'react-aria';
import {useDrop} from 'react-aria';

function DropTarget() {
  let [dropped, setDropped] = React.useState(null);
  let ref = React.useRef(null);
  let { dropProps, isDropTarget } = useDrop({
    ref,
    async onDrop(e) {
      let items = await Promise.all(
        e.items
          .filter((item) =>
            item.kind === 'text' && item.types.has('text/plain')
          )
          .map((item: TextDropItem) => item.getText('text/plain'))
      );
      setDropped(items.join('\n'));
    }
  });

  return (
    <div
      {...dropProps}
      role="button"
      tabIndex={0}
      ref={ref}
      className={`droppable ${isDropTarget ? 'target' : ''}`}
    >
      {dropped || 'Drop here'}
    </div>
  );
}

<Draggable />
<DropTarget />
```

```
import type {TextDropItem} from 'react-aria';
import {useDrop} from 'react-aria';

function DropTarget() {
  let [dropped, setDropped] = React.useState(null);
  let ref = React.useRef(null);
  let { dropProps, isDropTarget } = useDrop({
    ref,
    async onDrop(e) {
      let items = await Promise.all(
        e.items
          .filter((item) =>
            item.kind === 'text' &&
            item.types.has('text/plain')
          )
          .map((item: TextDropItem) =>
            item.getText('text/plain')
          )
      );
      setDropped(items.join('\n'));
    }
  });

  return (
    <div
      {...dropProps}
      role="button"
      tabIndex={0}
      ref={ref}
      className={`droppable ${
        isDropTarget ? 'target' : ''
      }`}
    >
      {dropped || 'Drop here'}
    </div>
  );
}

<Draggable />
<DropTarget />
```

```
import type {TextDropItem} from 'react-aria';
import {useDrop} from 'react-aria';

function DropTarget() {
  let [
    dropped,
    setDropped
  ] = React.useState(
    null
  );
  let ref = React.useRef(
    null
  );
  let {
    dropProps,
    isDropTarget
  } = useDrop({
    ref,
    async onDrop(e) {
      let items =
        await Promise
          .all(
            e.items
              .filter(
                (item) =>
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
      setDropped(
        items.join('\n')
      );
    }
  });

  return (
    <div
      {...dropProps}
      role="button"
      tabIndex={0}
      ref={ref}
      className={`droppable ${
        isDropTarget
          ? 'target'
          : ''
      }`}
    >
      {dropped ||
        'Drop here'}
    </div>
  );
}

<Draggable />
<DropTarget />
```

Show CSS

```
.draggable {
  display: inline-block;
  vertical-align: top;
  border: 1px solid gray;
  padding: 10px;
  margin-right: 20px;
}

.draggable.dragging {
  opacity: 0.5;
}

.droppable {
  width: 100px;
  height: 80px;
  border-radius: 6px;
  display: inline-block;
  padding: 20px;
  border: 2px dotted gray;
  white-space: pre-wrap;
  overflow: auto;
}

.droppable.target {
  border: 2px solid var(--blue);
}
```

```
.draggable {
  display: inline-block;
  vertical-align: top;
  border: 1px solid gray;
  padding: 10px;
  margin-right: 20px;
}

.draggable.dragging {
  opacity: 0.5;
}

.droppable {
  width: 100px;
  height: 80px;
  border-radius: 6px;
  display: inline-block;
  padding: 20px;
  border: 2px dotted gray;
  white-space: pre-wrap;
  overflow: auto;
}

.droppable.target {
  border: 2px solid var(--blue);
}
```

```
.draggable {
  display: inline-block;
  vertical-align: top;
  border: 1px solid gray;
  padding: 10px;
  margin-right: 20px;
}

.draggable.dragging {
  opacity: 0.5;
}

.droppable {
  width: 100px;
  height: 80px;
  border-radius: 6px;
  display: inline-block;
  padding: 20px;
  border: 2px dotted gray;
  white-space: pre-wrap;
  overflow: auto;
}

.droppable.target {
  border: 2px solid var(--blue);
}
```

The `Draggable` component used above is defined below. See [useDrag](https://react-spectrum.adobe.com/react-aria/useDrag.html) for more details and documentation.

Show code

```
import {useDrag} from 'react-aria';

function Draggable() {
  let { dragProps, isDragging } = useDrag({
    getItems() {
      return [{
        'text/plain': 'hello world',
        'my-app-custom-type': JSON.stringify({ message: 'hello world' })
      }];
    }
  });

  return (
    <div
      {...dragProps}
      role="button"
      tabIndex={0}
      className={`draggable ${isDragging ? 'dragging' : ''}`}
    >
      Drag me
    </div>
  );
}
```

```
import {useDrag} from 'react-aria';

function Draggable() {
  let { dragProps, isDragging } = useDrag({
    getItems() {
      return [{
        'text/plain': 'hello world',
        'my-app-custom-type': JSON.stringify({
          message: 'hello world'
        })
      }];
    }
  });

  return (
    <div
      {...dragProps}
      role="button"
      tabIndex={0}
      className={`draggable ${
        isDragging ? 'dragging' : ''
      }`}
    >
      Drag me
    </div>
  );
}
```

```
import {useDrag} from 'react-aria';

function Draggable() {
  let {
    dragProps,
    isDragging
  } = useDrag({
    getItems() {
      return [{
        'text/plain':
          'hello world',
        'my-app-custom-type':
          JSON.stringify(
            {
              message:
                'hello world'
            }
          )
      }];
    }
  });

  return (
    <div
      {...dragProps}
      role="button"
      tabIndex={0}
      className={`draggable ${
        isDragging
          ? 'dragging'
          : ''
      }`}
    >
      Drag me
    </div>
  );
}
```

* * *

`useDrop` allows users to drop one or more **drag items**, each of which contains data to be transferred from the drag source to drop target. There are three kinds of drag items:

-   `text` – represents data inline as a string in one or more formats
-   `file` – references a file on the user's device
-   `directory` – references the contents of a directory

A `[TextDropItem](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dnd.d.ts:TextDropItem)` represents textual data in one or more different formats. These may be either standard [mime types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types) or custom app-specific formats. Representing data in multiple formats allows drop targets both within and outside an application to choose data in a format that they understand. For example, a complex object may be serialized in a custom format for use within an application, with fallbacks in plain text and/or rich HTML that can be used when a user drops data from an external application.

The example below finds the first available item that includes a custom app-specific type. The same draggable component as used in the above example is used here, but rather than displaying the plain text representation, the custom format is used instead.

```
function DropTarget() {
  let [dropped, setDropped] = React.useState(null);
  let ref = React.useRef(null);
  let { dropProps, isDropTarget } = useDrop({
    ref,
    async onDrop(e) {
      let item = e.items.find((item) =>
        item.kind === 'text' && item.types.has('my-app-custom-type')
      ) as TextDropItem;
      if (item) {
        setDropped(await item.getText('my-app-custom-type'));
      }
    }  });

  // ...
}
```

```
function DropTarget() {
  let [dropped, setDropped] = React.useState(null);
  let ref = React.useRef(null);
  let { dropProps, isDropTarget } = useDrop({
    ref,
    async onDrop(e) {
      let item = e.items.find((item) =>
        item.kind === 'text' &&
        item.types.has('my-app-custom-type')
      ) as TextDropItem;
      if (item) {
        setDropped(
          await item.getText('my-app-custom-type')
        );
      }
    }  });

  // ...
}
```

```
function DropTarget() {
  let [
    dropped,
    setDropped
  ] = React.useState(
    null
  );
  let ref = React.useRef(
    null
  );
  let {
    dropProps,
    isDropTarget
  } = useDrop({
    ref,
    async onDrop(e) {
      let item = e.items
        .find((item) =>
          item.kind ===
            'text' &&
          item.types.has(
            'my-app-custom-type'
          )
        ) as TextDropItem;
      if (item) {
        setDropped(
          await item
            .getText(
              'my-app-custom-type'
            )
        );
      }
    }  });

  // ...
}
```

A `[FileDropItem](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dnd.d.ts:FileDropItem)` references a file on the user's device. It includes the name and mime type of the file, and methods to read the contents as plain text, or retrieve a native [File](https://developer.mozilla.org/en-US/docs/Web/API/File) object which can be attached to form data for uploading.

This example accepts JPEG and PNG image files, and renders them by creating a local [object URL](https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL).

```
import type {FileDropItem} from 'react-aria';

function DropTarget() {
  let [file, setFile] = React.useState(null);
  let ref = React.useRef(null);
  let { dropProps, isDropTarget } = useDrop({
    ref,
    async onDrop(e) {
      let item = e.items.find((item) =>
        item.kind === 'file' &&
        (item.type === 'image/jpeg' || item.type === 'image/png')
      ) as FileDropItem;
      if (item) {
        setFile(URL.createObjectURL(await item.getFile()));
      }
    }  });

  return (
    <div
      {...dropProps}
      role="button"
      tabIndex={0}
      ref={ref}
      className={`droppable ${isDropTarget ? 'target' : ''}`}
    >
      {file
        ? (
          <img
            src={file}
            style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          />
        )
        : 'Drop image here'}
    </div>
  );
}
```

```
import type {FileDropItem} from 'react-aria';

function DropTarget() {
  let [file, setFile] = React.useState(null);
  let ref = React.useRef(null);
  let { dropProps, isDropTarget } = useDrop({
    ref,
    async onDrop(e) {
      let item = e.items.find((item) =>
        item.kind === 'file' &&
        (item.type === 'image/jpeg' ||
          item.type === 'image/png')
      ) as FileDropItem;
      if (item) {
        setFile(URL.createObjectURL(await item.getFile()));
      }
    }  });

  return (
    <div
      {...dropProps}
      role="button"
      tabIndex={0}
      ref={ref}
      className={`droppable ${
        isDropTarget ? 'target' : ''
      }`}
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
        : 'Drop image here'}
    </div>
  );
}
```

```
import type {FileDropItem} from 'react-aria';

function DropTarget() {
  let [file, setFile] =
    React.useState(null);
  let ref = React.useRef(
    null
  );
  let {
    dropProps,
    isDropTarget
  } = useDrop({
    ref,
    async onDrop(e) {
      let item = e.items
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
    }  });

  return (
    <div
      {...dropProps}
      role="button"
      tabIndex={0}
      ref={ref}
      className={`droppable ${
        isDropTarget
          ? 'target'
          : ''
      }`}
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
        : 'Drop image here'}
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

function DropTarget() {
  let [files, setFiles] = React.useState(null);
  let ref = React.useRef(null);
  let { dropProps, isDropTarget } = useDrop({
    ref,
    async onDrop(e) {
      // Find the first dropped item that is a directory.
      let dir = e.items.find((item) =>
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
    }  });

  let contents = <>Drop directory here</>;
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
      {...dropProps}
      role="button"
      tabIndex={0}
      ref={ref}
      className={`droppable grid ${isDropTarget ? 'target' : ''}`}
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

function DropTarget() {
  let [files, setFiles] = React.useState(null);
  let ref = React.useRef(null);
  let { dropProps, isDropTarget } = useDrop({
    ref,
    async onDrop(e) {
      // Find the first dropped item that is a directory.
      let dir = e.items.find((item) =>
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
    }  });

  let contents = <>Drop directory here</>;
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
      {...dropProps}
      role="button"
      tabIndex={0}
      ref={ref}
      className={`droppable grid ${
        isDropTarget ? 'target' : ''
      }`}
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

function DropTarget() {
  let [files, setFiles] =
    React.useState(null);
  let ref = React.useRef(
    null
  );
  let {
    dropProps,
    isDropTarget
  } = useDrop({
    ref,
    async onDrop(e) {
      // Find the first dropped item that is a directory.
      let dir = e.items
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
    }  });

  let contents = (
    <>
      Drop directory here
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
      {...dropProps}
      role="button"
      tabIndex={0}
      ref={ref}
      className={`droppable grid ${
        isDropTarget
          ? 'target'
          : ''
      }`}
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

* * *

A `[DropOperation](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dnd.d.ts:DropOperation)` is an indication of what will happen when dragged data is dropped on a particular drop target. These are:

-   `move` – indicates that the dragged data will be moved from its source location to the target location.
-   `copy` – indicates that the dragged data will be copied to the target destination.
-   `link` – indicates that there will be a relationship established between the source and target locations.
-   `cancel` – indicates that the drag and drop operation will be canceled, resulting in no changes made to the source or target.

Many operating systems display these in the form of a cursor change, e.g. a plus sign to indicate a copy operation. The user may also be able to use a modifier key to choose which drop operation to perform, such as Option or Alt to switch from move to copy.

The drag source can specify which drop operations are allowed for the dragged data (see the [useDrag docs](https://react-spectrum.adobe.com/react-aria/useDrag.html) for how to customize this). By default, the first allowed operation is allowed by drop targets, meaning that the drop target accepts data of any type and operation.

The `getDropOperation` function passed to `useDrop` can be used to provide appropriate feedback to the user when a drag hovers over the drop target. If a drop target only supports data of specific types (e.g. images, videos, text, etc.), then it should implement `getDropOperation` and return `'cancel'` for types that aren't supported. This will prevent visual feedback indicating that the drop target accepts the dragged data when this is not true.

When the data is supported, either return one of the drop operations in `allowedOperation` or a specific drop operation if only that drop operation is supported. If the returned operation is not in `allowedOperations`, then the drop target will act as if `'cancel'` was returned.

In the below example, the drop target only supports dropping PNG images. If a PNG is dragged over the target, it will be highlighted and the operating system displays a copy cursor. If another type is dragged over the target, then there is no visual feedback, indicating that a drop is not accepted there. If the user holds a modifier key such as Control while dragging over the drop target in order to change the drop operation, then the drop target does not accept the drop.

```
function DropTarget() {
  let [file, setFile] = React.useState(null);
  let ref = React.useRef(null);
  let { dropProps, isDropTarget } = useDrop({
    ref,
    getDropOperation(types, allowedOperations) {
      return types.has('image/png') ? 'copy' : 'cancel';
    },    async onDrop(e) {
      let item = e.items.find((item) =>
        item.kind === 'file' && item.type === 'image/png'
      ) as FileDropItem;
      if (item) {
        setFile(URL.createObjectURL(await item.getFile()));
      }
    }
  });

  // ...
}
```

```
function DropTarget() {
  let [file, setFile] = React.useState(null);
  let ref = React.useRef(null);
  let { dropProps, isDropTarget } = useDrop({
    ref,
    getDropOperation(types, allowedOperations) {
      return types.has('image/png') ? 'copy' : 'cancel';
    },    async onDrop(e) {
      let item = e.items.find((item) =>
        item.kind === 'file' && item.type === 'image/png'
      ) as FileDropItem;
      if (item) {
        setFile(URL.createObjectURL(await item.getFile()));
      }
    }
  });

  // ...
}
```

```
function DropTarget() {
  let [file, setFile] =
    React.useState(null);
  let ref = React.useRef(
    null
  );
  let {
    dropProps,
    isDropTarget
  } = useDrop({
    ref,
    getDropOperation(
      types,
      allowedOperations
    ) {
      return types.has(
          'image/png'
        )
        ? 'copy'
        : 'cancel';
    },    async onDrop(e) {
      let item = e.items
        .find((item) =>
          item.kind ===
            'file' &&
          item.type ===
            'image/png'
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

  // ...
}
```

The `onDrop` event also includes the `dropOperation`. This can be used to perform different actions accordingly, for example, when communicating with a backend API.

```
function DropTarget(props) {
  let ref = React.useRef(null);
  let { dropProps, isDropTarget } = useDrop({
    ref,
    async onDrop(e) {
      let item = e.items.find((item) =>
        item.kind === 'text' && item.types.has('my-app-file')
      ) as TextDropItem;
      if (!item) {
        return;
      }

      let data = JSON.parse(await item.getText('my-app-file'));
      switch (e.dropOperation) {
        case 'move':
          MyAppFileService.move(data.filePath, props.filePath);
          break;
        case 'copy':
          MyAppFileService.copy(data.filePath, props.filePath);
          break;
        case 'link':
          MyAppFileService.link(data.filePath, props.filePath);
          break;
      }    }
  });

  // ...
}
```

```
function DropTarget(props) {
  let ref = React.useRef(null);
  let { dropProps, isDropTarget } = useDrop({
    ref,
    async onDrop(e) {
      let item = e.items.find((item) =>
        item.kind === 'text' &&
        item.types.has('my-app-file')
      ) as TextDropItem;
      if (!item) {
        return;
      }

      let data = JSON.parse(
        await item.getText('my-app-file')
      );
      switch (e.dropOperation) {
        case 'move':
          MyAppFileService.move(
            data.filePath,
            props.filePath
          );
          break;
        case 'copy':
          MyAppFileService.copy(
            data.filePath,
            props.filePath
          );
          break;
        case 'link':
          MyAppFileService.link(
            data.filePath,
            props.filePath
          );
          break;
      }    }
  });

  // ...
}
```

```
function DropTarget(
  props
) {
  let ref = React.useRef(
    null
  );
  let {
    dropProps,
    isDropTarget
  } = useDrop({
    ref,
    async onDrop(e) {
      let item = e.items
        .find((item) =>
          item.kind ===
            'text' &&
          item.types.has(
            'my-app-file'
          )
        ) as TextDropItem;
      if (!item) {
        return;
      }

      let data = JSON
        .parse(
          await item
            .getText(
              'my-app-file'
            )
        );
      switch (
        e.dropOperation
      ) {
        case 'move':
          MyAppFileService
            .move(
              data
                .filePath,
              props
                .filePath
            );
          break;
        case 'copy':
          MyAppFileService
            .copy(
              data
                .filePath,
              props
                .filePath
            );
          break;
        case 'link':
          MyAppFileService
            .link(
              data
                .filePath,
              props
                .filePath
            );
          break;
      }    }
  });

  // ...
}
```

* * *

Drop targets receive a number of events during a drag session. These are:

Name

Type

Description

`onDropEnter`

`( (e: [DropEnterEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dnd.d.ts:DropEnterEvent) )) => void`

Handler that is called when a valid drag enters the drop target.

`onDropMove`

`( (e: [DropMoveEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dnd.d.ts:DropMoveEvent) )) => void`

Handler that is called when a valid drag is moved within the drop target.

`onDropActivate`

`( (e: [DropActivateEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dnd.d.ts:DropActivateEvent) )) => void`

Handler that is called after a valid drag is held over the drop target for a period of time. This typically opens the item so that the user can drop within it.

`onDropExit`

`( (e: [DropExitEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dnd.d.ts:DropExitEvent) )) => void`

Handler that is called when a valid drag exits the drop target.

`onDrop`

`( (e: [DropEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dnd.d.ts:DropEvent) )) => void`

Handler that is called when a valid drag is dropped on the drop target.

This example logs all events that occur within the drop target:

```
function DropTarget() {
  let [events, setEvents] = React.useState([]);
  let onEvent = (e) => setEvents((events) => [JSON.stringify(e), ...events]);
  let ref = React.useRef(null);
  let { dropProps, isDropTarget } = useDrop({
    ref,
    onDropEnter: onEvent,
    onDropMove: onEvent,
    onDropExit: onEvent,
    onDrop: onEvent
  });

  return (
    <ul
      {...dropProps}
      role="button"
      tabIndex={0}
      ref={ref}
      className={`droppable ${isDropTarget ? 'target' : ''}`}
      style={{ display: 'block', width: 'auto' }}
    >
      {events.map((e, i) => <li key={i}>{e}</li>)}
    </ul>
  );
}

<Draggable />
<DropTarget />
```

```
function DropTarget() {
  let [events, setEvents] = React.useState([]);
  let onEvent = (e) =>
    setEvents((events) => [JSON.stringify(e), ...events]);
  let ref = React.useRef(null);
  let { dropProps, isDropTarget } = useDrop({
    ref,
    onDropEnter: onEvent,
    onDropMove: onEvent,
    onDropExit: onEvent,
    onDrop: onEvent
  });

  return (
    <ul
      {...dropProps}
      role="button"
      tabIndex={0}
      ref={ref}
      className={`droppable ${
        isDropTarget ? 'target' : ''
      }`}
      style={{ display: 'block', width: 'auto' }}
    >
      {events.map((e, i) => <li key={i}>{e}</li>)}
    </ul>
  );
}

<Draggable />
<DropTarget />
```

```
function DropTarget() {
  let [
    events,
    setEvents
  ] = React.useState([]);
  let onEvent = (e) =>
    setEvents(
      (events) => [
        JSON.stringify(
          e
        ),
        ...events
      ]
    );
  let ref = React.useRef(
    null
  );
  let {
    dropProps,
    isDropTarget
  } = useDrop({
    ref,
    onDropEnter: onEvent,
    onDropMove: onEvent,
    onDropExit: onEvent,
    onDrop: onEvent
  });

  return (
    <ul
      {...dropProps}
      role="button"
      tabIndex={0}
      ref={ref}
      className={`droppable ${
        isDropTarget
          ? 'target'
          : ''
      }`}
      style={{
        display: 'block',
        width: 'auto'
      }}
    >
      {events.map((
        e,
        i
      ) => (
        <li key={i}>
          {e}
        </li>
      ))}
    </ul>
  );
}

<Draggable />
<DropTarget />
```

* * *

If you need to temporarily disable dropping, you can pass the `isDisabled` option to `useDrop`. This will prevent the drop target from accepting any drops until it is re-enabled.

```
import type {TextDropItem} from 'react-aria';
import {useDrop} from 'react-aria';

function DropTarget() {
  let [dropped, setDropped] = React.useState(null);
  let ref = React.useRef(null);
  let { dropProps, isDropTarget } = useDrop({
    ref,
    async onDrop(e) {
      let items = await Promise.all(
        e.items
          .filter((item) =>
            item.kind === 'text' && item.types.has('text/plain')
          )
          .map((item: TextDropItem) => item.getText('text/plain'))
      );
      setDropped(items.join('\n'));
    },
    isDisabled: true  });

  return (
    <div
      {...dropProps}
      role="button"
      tabIndex={0}
      ref={ref}
      className={`droppable ${isDropTarget ? 'target' : ''}`}
    >
      {dropped || 'Drop here'}
    </div>
  );
}

<Draggable />
<DropTarget />
```

```
import type {TextDropItem} from 'react-aria';
import {useDrop} from 'react-aria';

function DropTarget() {
  let [dropped, setDropped] = React.useState(null);
  let ref = React.useRef(null);
  let { dropProps, isDropTarget } = useDrop({
    ref,
    async onDrop(e) {
      let items = await Promise.all(
        e.items
          .filter((item) =>
            item.kind === 'text' &&
            item.types.has('text/plain')
          )
          .map((item: TextDropItem) =>
            item.getText('text/plain')
          )
      );
      setDropped(items.join('\n'));
    },
    isDisabled: true  });

  return (
    <div
      {...dropProps}
      role="button"
      tabIndex={0}
      ref={ref}
      className={`droppable ${
        isDropTarget ? 'target' : ''
      }`}
    >
      {dropped || 'Drop here'}
    </div>
  );
}

<Draggable />
<DropTarget />
```

```
import type {TextDropItem} from 'react-aria';
import {useDrop} from 'react-aria';

function DropTarget() {
  let [
    dropped,
    setDropped
  ] = React.useState(
    null
  );
  let ref = React.useRef(
    null
  );
  let {
    dropProps,
    isDropTarget
  } = useDrop({
    ref,
    async onDrop(e) {
      let items =
        await Promise
          .all(
            e.items
              .filter(
                (item) =>
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
      setDropped(
        items.join('\n')
      );
    },
    isDisabled: true  });

  return (
    <div
      {...dropProps}
      role="button"
      tabIndex={0}
      ref={ref}
      className={`droppable ${
        isDropTarget
          ? 'target'
          : ''
      }`}
    >
      {dropped ||
        'Drop here'}
    </div>
  );
}

<Draggable />
<DropTarget />
```