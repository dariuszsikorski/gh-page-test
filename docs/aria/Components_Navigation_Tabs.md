# Tabs

**Source**: [https://react-spectrum.adobe.com/react-aria/Tabs.html](https://react-spectrum.adobe.com/react-aria/Tabs.html)

> Documentation for Tabs in the React Aria package.

---

Tabs organize content into multiple sections and allow users to navigate between them.

* * *

```
import {SelectionIndicator, Tab, TabList, TabPanel, Tabs} from 'react-aria-components';

<Tabs>
  <TabList aria-label="History of Ancient Rome">
    <Tab id="FoR">
      <span>Founding of Rome</span>
      <SelectionIndicator />
    </Tab>
    <Tab id="MaR">
      <span>Monarchy and Republic</span>
      <SelectionIndicator />
    </Tab>
    <Tab id="Emp">
      <span>Empire</span>
      <SelectionIndicator />
    </Tab>
  </TabList>
  <TabPanel id="FoR">
    Arma virumque cano, Troiae qui primus ab oris.
  </TabPanel>
  <TabPanel id="MaR">
    Senatus Populusque Romanus.
  </TabPanel>
  <TabPanel id="Emp">
    Alea jacta est.
  </TabPanel>
</Tabs>
```

```
import {
  SelectionIndicator,
  Tab,
  TabList,
  TabPanel,
  Tabs
} from 'react-aria-components';

<Tabs>
  <TabList aria-label="History of Ancient Rome">
    <Tab id="FoR">
      <span>Founding of Rome</span>
      <SelectionIndicator />
    </Tab>
    <Tab id="MaR">
      <span>Monarchy and Republic</span>
      <SelectionIndicator />
    </Tab>
    <Tab id="Emp">
      <span>Empire</span>
      <SelectionIndicator />
    </Tab>
  </TabList>
  <TabPanel id="FoR">
    Arma virumque cano, Troiae qui primus ab oris.
  </TabPanel>
  <TabPanel id="MaR">
    Senatus Populusque Romanus.
  </TabPanel>
  <TabPanel id="Emp">
    Alea jacta est.
  </TabPanel>
</Tabs>
```

```
import {
  SelectionIndicator,
  Tab,
  TabList,
  TabPanel,
  Tabs
} from 'react-aria-components';

<Tabs>
  <TabList aria-label="History of Ancient Rome">
    <Tab id="FoR">
      <span>
        Founding of
        Rome
      </span>
      <SelectionIndicator />
    </Tab>
    <Tab id="MaR">
      <span>
        Monarchy and
        Republic
      </span>
      <SelectionIndicator />
    </Tab>
    <Tab id="Emp">
      <span>
        Empire
      </span>
      <SelectionIndicator />
    </Tab>
  </TabList>
  <TabPanel id="FoR">
    Arma virumque cano,
    Troiae qui primus
    ab oris.
  </TabPanel>
  <TabPanel id="MaR">
    Senatus Populusque
    Romanus.
  </TabPanel>
  <TabPanel id="Emp">
    Alea jacta est.
  </TabPanel>
</Tabs>
```

Show CSS

```
@import "@react-aria/example-theme";

.react-aria-Tabs {
  display: flex;
  color: var(--text-color);

  &[data-orientation=horizontal] {
    flex-direction: column;
  }
}

.react-aria-TabList {
  display: flex;

  &[data-orientation=horizontal] {
    border-bottom: 1px solid var(--border-color);

    .react-aria-SelectionIndicator {
      left: 0;
      bottom: 0;
      width: 100%;
      border-bottom: 3px solid var(--border-color);
    }
  }
}

.react-aria-Tab {
  padding: 10px;
  cursor: default;
  outline: none;
  position: relative;
  color: var(--text-color-base);
  transition: color 200ms;
  --border-color: transparent;
  forced-color-adjust: none;

  .react-aria-SelectionIndicator {
    position: absolute;
    transition-property: translate, width, height;
    transition-duration: 200ms;
    
    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  }

  &[data-hovered],
  &[data-focused] {
    color: var(--text-color-hover);
  }

  &[data-selected] {
    --border-color: var(--highlight-background);
    color: var(--text-color);
  }

  &[data-disabled] {
    color: var(--text-color-disabled);
    &[data-selected] {
      --border-color: var(--text-color-disabled);
    }
  }

  &[data-focus-visible]:after {
    content: '';
    position: absolute;
    inset: 4px;
    border-radius: 4px;
    border: 2px solid var(--focus-ring-color);
  }
}

.react-aria-TabPanel {
  margin-top: 4px;
  padding: 10px;
  border-radius: 4px;
  outline: none;

  &[data-focus-visible] {
    outline: 2px solid var(--focus-ring-color);
  }
}
```

```
@import "@react-aria/example-theme";

.react-aria-Tabs {
  display: flex;
  color: var(--text-color);

  &[data-orientation=horizontal] {
    flex-direction: column;
  }
}

.react-aria-TabList {
  display: flex;

  &[data-orientation=horizontal] {
    border-bottom: 1px solid var(--border-color);

    .react-aria-SelectionIndicator {
      left: 0;
      bottom: 0;
      width: 100%;
      border-bottom: 3px solid var(--border-color);
    }
  }
}

.react-aria-Tab {
  padding: 10px;
  cursor: default;
  outline: none;
  position: relative;
  color: var(--text-color-base);
  transition: color 200ms;
  --border-color: transparent;
  forced-color-adjust: none;

  .react-aria-SelectionIndicator {
    position: absolute;
    transition-property: translate, width, height;
    transition-duration: 200ms;
    
    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  }

  &[data-hovered],
  &[data-focused] {
    color: var(--text-color-hover);
  }

  &[data-selected] {
    --border-color: var(--highlight-background);
    color: var(--text-color);
  }

  &[data-disabled] {
    color: var(--text-color-disabled);
    &[data-selected] {
      --border-color: var(--text-color-disabled);
    }
  }

  &[data-focus-visible]:after {
    content: '';
    position: absolute;
    inset: 4px;
    border-radius: 4px;
    border: 2px solid var(--focus-ring-color);
  }
}

.react-aria-TabPanel {
  margin-top: 4px;
  padding: 10px;
  border-radius: 4px;
  outline: none;

  &[data-focus-visible] {
    outline: 2px solid var(--focus-ring-color);
  }
}
```

```
@import "@react-aria/example-theme";

.react-aria-Tabs {
  display: flex;
  color: var(--text-color);

  &[data-orientation=horizontal] {
    flex-direction: column;
  }
}

.react-aria-TabList {
  display: flex;

  &[data-orientation=horizontal] {
    border-bottom: 1px solid var(--border-color);

    .react-aria-SelectionIndicator {
      left: 0;
      bottom: 0;
      width: 100%;
      border-bottom: 3px solid var(--border-color);
    }
  }
}

.react-aria-Tab {
  padding: 10px;
  cursor: default;
  outline: none;
  position: relative;
  color: var(--text-color-base);
  transition: color 200ms;
  --border-color: transparent;
  forced-color-adjust: none;

  .react-aria-SelectionIndicator {
    position: absolute;
    transition-property: translate, width, height;
    transition-duration: 200ms;
    
    @media (prefers-reduced-motion: reduce) {
      transition: none;
    }
  }

  &[data-hovered],
  &[data-focused] {
    color: var(--text-color-hover);
  }

  &[data-selected] {
    --border-color: var(--highlight-background);
    color: var(--text-color);
  }

  &[data-disabled] {
    color: var(--text-color-disabled);
    &[data-selected] {
      --border-color: var(--text-color-disabled);
    }
  }

  &[data-focus-visible]:after {
    content: '';
    position: absolute;
    inset: 4px;
    border-radius: 4px;
    border: 2px solid var(--focus-ring-color);
  }
}

.react-aria-TabPanel {
  margin-top: 4px;
  padding: 10px;
  border-radius: 4px;
  outline: none;

  &[data-focus-visible] {
    outline: 2px solid var(--focus-ring-color);
  }
}
```

* * *

Tabs provide a list of tabs that a user can select from to switch between multiple tab panels. `Tabs` can be used to implement these in an accessible way.

-   **Flexible** – Support for both horizontal and vertical orientations, disabled tabs, customizable layout, and multiple keyboard activation modes.
-   **Accessible** – Follows the [ARIA tabs pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tabpanel/), automatically linking tabs and their associated tab panels semantically. The arrow keys can be used to navigate between tabs, and tab panels automatically become focusable when they don't contain any focusable children.
-   **International** – Keyboard navigation is automatically mirrored in right-to-left languages.
-   **Styleable** – Hover, press, keyboard focus, and selection states are provided for easy styling. These states only apply when interacting with an appropriate input device, unlike CSS pseudo classes.

* * *

Shows a tabs component with labels for each tab, a selection state, and the tab panel.Section 1Section 2TabTab (selected)Tab listTab panel

Tabs consist of a tab list with one or more visually separated tabs. Each tab has associated content, and only the selected tab's content is shown. Each tab can be clicked, tapped, or navigated to via arrow keys. Depending on the `keyboardActivation` prop, the tab can be selected by receiving keyboard focus, or it can be selected with the Enter key.

```
import {SelectionIndicator, Tab, TabList, TabPanel, Tabs} from 'react-aria-components';

<Tabs>
  <TabList>
    <Tab>
      <SelectionIndicator />
    </Tab>
  </TabList>
  <TabPanel />
</Tabs>
```

```
import {
  SelectionIndicator,
  Tab,
  TabList,
  TabPanel,
  Tabs
} from 'react-aria-components';

<Tabs>
  <TabList>
    <Tab>
      <SelectionIndicator />
    </Tab>
  </TabList>
  <TabPanel />
</Tabs>
```

```
import {
  SelectionIndicator,
  Tab,
  TabList,
  TabPanel,
  Tabs
} from 'react-aria-components';

<Tabs>
  <TabList>
    <Tab>
      <SelectionIndicator />
    </Tab>
  </TabList>
  <TabPanel />
</Tabs>
```

`Tabs` makes use of the following concepts:

[

Collections

Defining collections of items, async loading, and updating items over time.

](https://react-spectrum.adobe.com/react-aria/collections.html)[

Selection

Interactions and data structures to represent selection.

](https://react-spectrum.adobe.com/react-aria/selection.html)

* * *

[![](https://react-spectrum.adobe.com/category-tabs.c5f12c9a.png)

Category Tabs

An article category tabs component styled with Tailwind CSS.

](https://react-spectrum.adobe.com/react-aria/examples/category-tabs.html)[![](https://react-spectrum.adobe.com/swipeable-tabs.1186ed25.png)

Swipeable Tabs

A swipeable Tabs component built with Framer Motion and CSS scroll snapping.

](https://react-spectrum.adobe.com/react-aria/examples/swipeable-tabs.html)

* * *

To help kick-start your project, we offer starter kits that include example implementations of all React Aria components with various styling solutions. All components are fully styled, including support for dark mode, high contrast mode, and all UI states. Each starter comes with a pre-configured [Storybook](https://storybook.js.org/) that you can experiment with, or use as a starting point for your own component library.

* * *

This example wraps the `Tab` component to include a `SelectionIndicator`, which enables animating the tab selection state.

```
import {composeRenderProps, SelectionIndicator, Tab, TabList, TabPanel, TabProps, Tabs} from 'react-aria-components';

function MyTab(props: TabProps) {
  return (
    <Tab {...props}>
      {composeRenderProps(props.children, (children) => (
        <>
          {children}
          <SelectionIndicator />
        </>
      ))}
    </Tab>
  );
}

<Tabs>
  <TabList aria-label="History of Ancient Rome">
    <MyTab id="home">Home</MyTab>
    <MyTab id="search">Search</MyTab>
    <MyTab id="notifications">Notifications</MyTab>
  </TabList>
  <TabPanel id="home">Home content</TabPanel>
  <TabPanel id="search">Search content</TabPanel>
  <TabPanel id="notifications">Notifications content</TabPanel>
</Tabs>
```

```
import {
  composeRenderProps,
  SelectionIndicator,
  Tab,
  TabList,
  TabPanel,
  TabProps,
  Tabs
} from 'react-aria-components';

function MyTab(props: TabProps) {
  return (
    <Tab {...props}>
      {composeRenderProps(props.children, (children) => (
        <>
          {children}
          <SelectionIndicator />
        </>
      ))}
    </Tab>
  );
}

<Tabs>
  <TabList aria-label="History of Ancient Rome">
    <MyTab id="home">Home</MyTab>
    <MyTab id="search">Search</MyTab>
    <MyTab id="notifications">Notifications</MyTab>
  </TabList>
  <TabPanel id="home">Home content</TabPanel>
  <TabPanel id="search">Search content</TabPanel>
  <TabPanel id="notifications">
    Notifications content
  </TabPanel>
</Tabs>
```

```
import {
  composeRenderProps,
  SelectionIndicator,
  Tab,
  TabList,
  TabPanel,
  TabProps,
  Tabs
} from 'react-aria-components';

function MyTab(
  props: TabProps
) {
  return (
    <Tab {...props}>
      {composeRenderProps(
        props.children,
        (children) => (
          <>
            {children}
            <SelectionIndicator />
          </>
        )
      )}
    </Tab>
  );
}

<Tabs>
  <TabList aria-label="History of Ancient Rome">
    <MyTab id="home">
      Home
    </MyTab>
    <MyTab id="search">
      Search
    </MyTab>
    <MyTab id="notifications">
      Notifications
    </MyTab>
  </TabList>
  <TabPanel id="home">
    Home content
  </TabPanel>
  <TabPanel id="search">
    Search content
  </TabPanel>
  <TabPanel id="notifications">
    Notifications
    content
  </TabPanel>
</Tabs>
```

* * *

A default selected tab can be provided using the `defaultSelectedKey` prop, which should correspond to the `id` prop provided to each item. When `Tabs` is used with dynamic items as described below, the key of each item is derived from the data. See the [Selection](https://react-spectrum.adobe.com/react-aria/selection.html) guide for more details.

```
<Tabs defaultSelectedKey="keyboard">
  <TabList aria-label="Input settings">
    <MyTab id="mouse">Mouse Settings</MyTab>
    <MyTab id="keyboard">Keyboard Settings</MyTab>
    <MyTab id="gamepad">Gamepad Settings</MyTab>
  </TabList>
  <TabPanel id="mouse">Mouse Settings</TabPanel>
  <TabPanel id="keyboard">Keyboard Settings</TabPanel>
  <TabPanel id="gamepad">Gamepad Settings</TabPanel>
</Tabs>
```

```
<Tabs defaultSelectedKey="keyboard">
  <TabList aria-label="Input settings">
    <MyTab id="mouse">Mouse Settings</MyTab>
    <MyTab id="keyboard">Keyboard Settings</MyTab>
    <MyTab id="gamepad">Gamepad Settings</MyTab>
  </TabList>
  <TabPanel id="mouse">Mouse Settings</TabPanel>
  <TabPanel id="keyboard">Keyboard Settings</TabPanel>
  <TabPanel id="gamepad">Gamepad Settings</TabPanel>
</Tabs>
```

```
<Tabs defaultSelectedKey="keyboard">
  <TabList aria-label="Input settings">
    <MyTab id="mouse">
      Mouse Settings
    </MyTab>
    <MyTab id="keyboard">
      Keyboard Settings
    </MyTab>
    <MyTab id="gamepad">
      Gamepad Settings
    </MyTab>
  </TabList>
  <TabPanel id="mouse">
    Mouse Settings
  </TabPanel>
  <TabPanel id="keyboard">
    Keyboard Settings
  </TabPanel>
  <TabPanel id="gamepad">
    Gamepad Settings
  </TabPanel>
</Tabs>
```

Selection can be controlled using the `selectedKey` prop, paired with the `onSelectionChange` event. The `id` prop from the selected tab will be passed into the callback when the tab is selected, allowing you to update state accordingly.

```
import type {Key} from 'react-aria-components';

function Example() {
  let [timePeriod, setTimePeriod] = React.useState<Key>('triassic');

  return (
    <>
      <p>Selected time period: {timePeriod}</p>
      <Tabs selectedKey={timePeriod} onSelectionChange={setTimePeriod}>
        <TabList aria-label="Mesozoic time periods">
          <MyTab id="triassic">Triassic</MyTab>
          <MyTab id="jurassic">Jurassic</MyTab>
          <MyTab id="cretaceous">Cretaceous</MyTab>
        </TabList>
        <TabPanel id="triassic">
          The Triassic ranges roughly from 252 million to 201 million years ago,
          preceding the Jurassic Period.
        </TabPanel>
        <TabPanel id="jurassic">
          The Jurassic ranges from 200 million years to 145 million years ago.
        </TabPanel>
        <TabPanel id="cretaceous">
          The Cretaceous is the longest period of the Mesozoic, spanning from
          145 million to 66 million years ago.
        </TabPanel>
      </Tabs>
    </>
  );
}
```

```
import type {Key} from 'react-aria-components';

function Example() {
  let [timePeriod, setTimePeriod] = React.useState<Key>(
    'triassic'
  );

  return (
    <>
      <p>Selected time period: {timePeriod}</p>
      <Tabs
        selectedKey={timePeriod}
        onSelectionChange={setTimePeriod}
      >
        <TabList aria-label="Mesozoic time periods">
          <MyTab id="triassic">Triassic</MyTab>
          <MyTab id="jurassic">Jurassic</MyTab>
          <MyTab id="cretaceous">Cretaceous</MyTab>
        </TabList>
        <TabPanel id="triassic">
          The Triassic ranges roughly from 252 million to
          201 million years ago, preceding the Jurassic
          Period.
        </TabPanel>
        <TabPanel id="jurassic">
          The Jurassic ranges from 200 million years to 145
          million years ago.
        </TabPanel>
        <TabPanel id="cretaceous">
          The Cretaceous is the longest period of the
          Mesozoic, spanning from 145 million to 66 million
          years ago.
        </TabPanel>
      </Tabs>
    </>
  );
}
```

```
import type {Key} from 'react-aria-components';

function Example() {
  let [
    timePeriod,
    setTimePeriod
  ] = React.useState<
    Key
  >('triassic');

  return (
    <>
      <p>
        Selected time
        period:{' '}
        {timePeriod}
      </p>
      <Tabs
        selectedKey={timePeriod}
        onSelectionChange={setTimePeriod}
      >
        <TabList aria-label="Mesozoic time periods">
          <MyTab id="triassic">
            Triassic
          </MyTab>
          <MyTab id="jurassic">
            Jurassic
          </MyTab>
          <MyTab id="cretaceous">
            Cretaceous
          </MyTab>
        </TabList>
        <TabPanel id="triassic">
          The Triassic
          ranges roughly
          from 252
          million to 201
          million years
          ago, preceding
          the Jurassic
          Period.
        </TabPanel>
        <TabPanel id="jurassic">
          The Jurassic
          ranges from 200
          million years
          to 145 million
          years ago.
        </TabPanel>
        <TabPanel id="cretaceous">
          The Cretaceous
          is the longest
          period of the
          Mesozoic,
          spanning from
          145 million to
          66 million
          years ago.
        </TabPanel>
      </Tabs>
    </>
  );
}
```

By default, pressing the arrow keys while focus is on a Tab will switch selection to the adjacent Tab in that direction, updating the content displayed accordingly. If you would like to prevent selection change from happening automatically you can set the `keyboardActivation` prop to "manual". This will prevent tab selection from changing on arrow key press, requiring a subsequent `Enter` or `Space` key press to confirm tab selection.

```
<Tabs keyboardActivation="manual">
  <TabList aria-label="Input settings">
    <MyTab id="mouse">Mouse Settings</MyTab>
    <MyTab id="keyboard">Keyboard Settings</MyTab>
    <MyTab id="gamepad">Gamepad Settings</MyTab>
  </TabList>
  <TabPanel id="mouse">Mouse Settings</TabPanel>
  <TabPanel id="keyboard">Keyboard Settings</TabPanel>
  <TabPanel id="gamepad">Gamepad Settings</TabPanel>
</Tabs>
```

```
<Tabs keyboardActivation="manual">
  <TabList aria-label="Input settings">
    <MyTab id="mouse">Mouse Settings</MyTab>
    <MyTab id="keyboard">Keyboard Settings</MyTab>
    <MyTab id="gamepad">Gamepad Settings</MyTab>
  </TabList>
  <TabPanel id="mouse">Mouse Settings</TabPanel>
  <TabPanel id="keyboard">Keyboard Settings</TabPanel>
  <TabPanel id="gamepad">Gamepad Settings</TabPanel>
</Tabs>
```

```
<Tabs keyboardActivation="manual">
  <TabList aria-label="Input settings">
    <MyTab id="mouse">
      Mouse Settings
    </MyTab>
    <MyTab id="keyboard">
      Keyboard Settings
    </MyTab>
    <MyTab id="gamepad">
      Gamepad Settings
    </MyTab>
  </TabList>
  <TabPanel id="mouse">
    Mouse Settings
  </TabPanel>
  <TabPanel id="keyboard">
    Keyboard Settings
  </TabPanel>
  <TabPanel id="gamepad">
    Gamepad Settings
  </TabPanel>
</Tabs>
```

## Content[#](#content)

* * *

### Focusable content[#](#focusable-content)

When the tab panel doesn't contain any focusable content, the entire panel is given a `tabIndex=0` so that the content can be navigated to with the keyboard. When the tab panel contains focusable content, such as a textfield, then the `tabIndex` is omitted because the content itself can receive focus.

This example uses the same `Tabs` component from above. Try navigating from the tabs to the content for each panel using the keyboard.

```
<Tabs>
  <TabList aria-label="Notes app">
    <MyTab id="1">Jane Doe</MyTab>
    <MyTab id="2">John Doe</MyTab>
    <MyTab id="3">Joe Bloggs</MyTab>
  </TabList>
  <TabPanel id="1">
    <label>Leave a note for Jane: <input type="text" /></label>
  </TabPanel>
  <TabPanel id="2">Senatus Populusque Romanus.</TabPanel>
  <TabPanel id="3">Alea jacta est.</TabPanel>
</Tabs>
```

```
<Tabs>
  <TabList aria-label="Notes app">
    <MyTab id="1">Jane Doe</MyTab>
    <MyTab id="2">John Doe</MyTab>
    <MyTab id="3">Joe Bloggs</MyTab>
  </TabList>
  <TabPanel id="1">
    <label>
      Leave a note for Jane: <input type="text" />
    </label>
  </TabPanel>
  <TabPanel id="2">Senatus Populusque Romanus.</TabPanel>
  <TabPanel id="3">Alea jacta est.</TabPanel>
</Tabs>
```

```
<Tabs>
  <TabList aria-label="Notes app">
    <MyTab id="1">
      Jane Doe
    </MyTab>
    <MyTab id="2">
      John Doe
    </MyTab>
    <MyTab id="3">
      Joe Bloggs
    </MyTab>
  </TabList>
  <TabPanel id="1">
    <label>
      Leave a note for
      Jane:{' '}
      <input type="text" />
    </label>
  </TabPanel>
  <TabPanel id="2">
    Senatus Populusque
    Romanus.
  </TabPanel>
  <TabPanel id="3">
    Alea jacta est.
  </TabPanel>
</Tabs>
```

The above examples have shown tabs with static items. The `items` prop can be used when creating tabs from a dynamic collection, for example when the user can add and remove tabs, or the tabs come from an external data source. The function passed as the children of the `TabList` component is called for each item in the list, and returns an `<Tab>`. A function passed as the children of the `[Collection](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/collections/src/CollectionBuilder.tsx:Collection)` component returns a corresponding `<TabPanel>` for each tab.

Each item accepts an `id` prop, which is passed to the `onSelectionChange` handler to identify the selected item. Alternatively, if the item objects contain an `id` property, as shown in the example below, then this is used automatically and an `id` prop is not required. See [Collection Components](https://react-spectrum.adobe.com/react-aria/collections.html) for more details.

```
import {Collection, Button} from 'react-aria-components';

function Example() {
  let [tabs, setTabs] = React.useState([
    {id: 1, title: 'Tab 1', content: 'Tab body 1'},
    {id: 2, title: 'Tab 2', content: 'Tab body 2'},
    {id: 3, title: 'Tab 3', content: 'Tab body 3'}
  ]);

  let addTab = () => {
    setTabs(tabs => [
      ...tabs,
      {
        id: tabs.length + 1,
        title: `Tab ${tabs.length + 1}`,
        content: `Tab body ${tabs.length + 1}`
      }
    ]);
  };

  let removeTab = () => {
    if (tabs.length > 1) {
      setTabs(tabs => tabs.slice(0, -1));
    }
  };

  return (
    <Tabs>
      <div style={{display: 'flex'}}>
        <TabList aria-label="Dynamic tabs" items={tabs} style={{flex: 1}}>
          {item => <MyTab>{item.title}</MyTab>}
        </TabList>
        <div className="button-group">
          <Button onPress={addTab}>Add tab</Button>
          <Button onPress={removeTab}>Remove tab</Button>
        </div>
      </div>
      <Collection items={tabs}>
        {item => <TabPanel>{item.content}</TabPanel>}
      </Collection>
    </Tabs>
  );
}
```

```
import {Button, Collection} from 'react-aria-components';

function Example() {
  let [tabs, setTabs] = React.useState([
    { id: 1, title: 'Tab 1', content: 'Tab body 1' },
    { id: 2, title: 'Tab 2', content: 'Tab body 2' },
    { id: 3, title: 'Tab 3', content: 'Tab body 3' }
  ]);

  let addTab = () => {
    setTabs((tabs) => [
      ...tabs,
      {
        id: tabs.length + 1,
        title: `Tab ${tabs.length + 1}`,
        content: `Tab body ${tabs.length + 1}`
      }
    ]);
  };

  let removeTab = () => {
    if (tabs.length > 1) {
      setTabs((tabs) => tabs.slice(0, -1));
    }
  };

  return (
    <Tabs>
      <div style={{ display: 'flex' }}>
        <TabList
          aria-label="Dynamic tabs"
          items={tabs}
          style={{ flex: 1 }}
        >
          {(item) => <MyTab>{item.title}</MyTab>}
        </TabList>
        <div className="button-group">
          <Button onPress={addTab}>Add tab</Button>
          <Button onPress={removeTab}>Remove tab</Button>
        </div>
      </div>
      <Collection items={tabs}>
        {(item) => <TabPanel>{item.content}</TabPanel>}
      </Collection>
    </Tabs>
  );
}
```

```
import {
  Button,
  Collection
} from 'react-aria-components';

function Example() {
  let [tabs, setTabs] =
    React.useState([
      {
        id: 1,
        title: 'Tab 1',
        content:
          'Tab body 1'
      },
      {
        id: 2,
        title: 'Tab 2',
        content:
          'Tab body 2'
      },
      {
        id: 3,
        title: 'Tab 3',
        content:
          'Tab body 3'
      }
    ]);

  let addTab = () => {
    setTabs((tabs) => [
      ...tabs,
      {
        id: tabs.length +
          1,
        title: `Tab ${
          tabs.length + 1
        }`,
        content:
          `Tab body ${
            tabs.length +
            1
          }`
      }
    ]);
  };

  let removeTab = () => {
    if (
      tabs.length > 1
    ) {
      setTabs((tabs) =>
        tabs.slice(0, -1)
      );
    }
  };

  return (
    <Tabs>
      <div
        style={{
          display: 'flex'
        }}
      >
        <TabList
          aria-label="Dynamic tabs"
          items={tabs}
          style={{
            flex: 1
          }}
        >
          {(item) => (
            <MyTab>
              {item
                .title}
            </MyTab>
          )}
        </TabList>
        <div className="button-group">
          <Button
            onPress={addTab}
          >
            Add tab
          </Button>
          <Button
            onPress={removeTab}
          >
            Remove tab
          </Button>
        </div>
      </div>
      <Collection
        items={tabs}
      >
        {(item) => (
          <TabPanel>
            {item
              .content}
          </TabPanel>
        )}
      </Collection>
    </Tabs>
  );
}
```

Show CSS

```
.button-group {
  border-bottom: 1px solid gray;
  display: flex;
  align-items: center;
  gap: 8px;
}
```

```
.button-group {
  border-bottom: 1px solid gray;
  display: flex;
  align-items: center;
  gap: 8px;
}
```

```
.button-group {
  border-bottom: 1px solid gray;
  display: flex;
  align-items: center;
  gap: 8px;
}
```

* * *

By default, tabs are horizontally oriented. The `orientation` prop can be set to `vertical` to change this. This does not affect keyboard navigation. You are responsible for styling your tabs accordingly.

```
<Tabs orientation="vertical">
  <TabList aria-label="Chat log orientation example">
    <MyTab id="1">John Doe</MyTab>
    <MyTab id="2">Jane Doe</MyTab>
    <MyTab id="3">Joe Bloggs</MyTab>
  </TabList>
  <TabPanel id="1">There is no prior chat history with John Doe.</TabPanel>
  <TabPanel id="2">There is no prior chat history with Jane Doe.</TabPanel>
  <TabPanel id="3">There is no prior chat history with Joe Bloggs.</TabPanel>
</Tabs>
```

```
<Tabs orientation="vertical">
  <TabList aria-label="Chat log orientation example">
    <MyTab id="1">John Doe</MyTab>
    <MyTab id="2">Jane Doe</MyTab>
    <MyTab id="3">Joe Bloggs</MyTab>
  </TabList>
  <TabPanel id="1">
    There is no prior chat history with John Doe.
  </TabPanel>
  <TabPanel id="2">
    There is no prior chat history with Jane Doe.
  </TabPanel>
  <TabPanel id="3">
    There is no prior chat history with Joe Bloggs.
  </TabPanel>
</Tabs>
```

```
<Tabs orientation="vertical">
  <TabList aria-label="Chat log orientation example">
    <MyTab id="1">
      John Doe
    </MyTab>
    <MyTab id="2">
      Jane Doe
    </MyTab>
    <MyTab id="3">
      Joe Bloggs
    </MyTab>
  </TabList>
  <TabPanel id="1">
    There is no prior
    chat history with
    John Doe.
  </TabPanel>
  <TabPanel id="2">
    There is no prior
    chat history with
    Jane Doe.
  </TabPanel>
  <TabPanel id="3">
    There is no prior
    chat history with
    Joe Bloggs.
  </TabPanel>
</Tabs>
```

Show CSS

```
.react-aria-Tabs {
  &[data-orientation=vertical] {
    flex-direction: row;
  }
}

.react-aria-TabList {
  &[data-orientation=vertical] {
    flex-direction: column;
    border-inline-end: 1px solid gray;

    .react-aria-SelectionIndicator {
      top: 0;
      right: 0;
      height: 100%;
      border-inline-end: 3px solid var(--border-color, transparent);
    }
  }
}
```

```
.react-aria-Tabs {
  &[data-orientation=vertical] {
    flex-direction: row;
  }
}

.react-aria-TabList {
  &[data-orientation=vertical] {
    flex-direction: column;
    border-inline-end: 1px solid gray;

    .react-aria-SelectionIndicator {
      top: 0;
      right: 0;
      height: 100%;
      border-inline-end: 3px solid var(--border-color, transparent);
    }
  }
}
```

```
.react-aria-Tabs {
  &[data-orientation=vertical] {
    flex-direction: row;
  }
}

.react-aria-TabList {
  &[data-orientation=vertical] {
    flex-direction: column;
    border-inline-end: 1px solid gray;

    .react-aria-SelectionIndicator {
      top: 0;
      right: 0;
      height: 100%;
      border-inline-end: 3px solid var(--border-color, transparent);
    }
  }
}
```

* * *

All tabs can be disabled using the `isDisabled` prop.

```
<Tabs isDisabled>
  <TabList aria-label="Input settings">
    <MyTab id="mouse">Mouse Settings</MyTab>
    <MyTab id="keyboard">Keyboard Settings</MyTab>
    <MyTab id="gamepad">Gamepad Settings</MyTab>
  </TabList>
  <TabPanel id="mouse">Mouse Settings</TabPanel>
  <TabPanel id="keyboard">Keyboard Settings</TabPanel>
  <TabPanel id="gamepad">Gamepad Settings</TabPanel>
</Tabs>
```

```
<Tabs isDisabled>
  <TabList aria-label="Input settings">
    <MyTab id="mouse">Mouse Settings</MyTab>
    <MyTab id="keyboard">Keyboard Settings</MyTab>
    <MyTab id="gamepad">Gamepad Settings</MyTab>
  </TabList>
  <TabPanel id="mouse">Mouse Settings</TabPanel>
  <TabPanel id="keyboard">Keyboard Settings</TabPanel>
  <TabPanel id="gamepad">Gamepad Settings</TabPanel>
</Tabs>
```

```
<Tabs isDisabled>
  <TabList aria-label="Input settings">
    <MyTab id="mouse">
      Mouse Settings
    </MyTab>
    <MyTab id="keyboard">
      Keyboard Settings
    </MyTab>
    <MyTab id="gamepad">
      Gamepad Settings
    </MyTab>
  </TabList>
  <TabPanel id="mouse">
    Mouse Settings
  </TabPanel>
  <TabPanel id="keyboard">
    Keyboard Settings
  </TabPanel>
  <TabPanel id="gamepad">
    Gamepad Settings
  </TabPanel>
</Tabs>
```

Show CSS

```
.react-aria-Tab {
  &[data-disabled] {
    color: var(--text-color-disabled);
    &[data-selected] {
      --border-color: var(--border-color-disabled);
    }
  }
}
```

```
.react-aria-Tab {
  &[data-disabled] {
    color: var(--text-color-disabled);
    &[data-selected] {
      --border-color: var(--border-color-disabled);
    }
  }
}
```

```
.react-aria-Tab {
  &[data-disabled] {
    color: var(--text-color-disabled);
    &[data-selected] {
      --border-color: var(--border-color-disabled);
    }
  }
}
```

An individual `Tab` can be disabled with the `isDisabled` prop. Disabled tabs are not focusable, selectable, or keyboard navigable.

```
<Tabs>
  <TabList aria-label="Input settings">
    <MyTab id="mouse">Mouse Settings</MyTab>
    <MyTab id="keyboard">Keyboard Settings</MyTab>
    <MyTab id="gamepad" isDisabled>Gamepad Settings</MyTab>  </TabList>
  <TabPanel id="mouse">Mouse Settings</TabPanel>
  <TabPanel id="keyboard">Keyboard Settings</TabPanel>
  <TabPanel id="gamepad">Gamepad Settings</TabPanel>
</Tabs>
```

```
<Tabs>
  <TabList aria-label="Input settings">
    <MyTab id="mouse">Mouse Settings</MyTab>
    <MyTab id="keyboard">Keyboard Settings</MyTab>
    <MyTab id="gamepad" isDisabled>Gamepad Settings</MyTab>  </TabList>
  <TabPanel id="mouse">Mouse Settings</TabPanel>
  <TabPanel id="keyboard">Keyboard Settings</TabPanel>
  <TabPanel id="gamepad">Gamepad Settings</TabPanel>
</Tabs>
```

```
<Tabs>
  <TabList aria-label="Input settings">
    <MyTab id="mouse">
      Mouse Settings
    </MyTab>
    <MyTab id="keyboard">
      Keyboard Settings
    </MyTab>
    <MyTab
      id="gamepad"
      isDisabled
    >
      Gamepad Settings
    </MyTab>  </TabList>
  <TabPanel id="mouse">
    Mouse Settings
  </TabPanel>
  <TabPanel id="keyboard">
    Keyboard Settings
  </TabPanel>
  <TabPanel id="gamepad">
    Gamepad Settings
  </TabPanel>
</Tabs>
```

In dynamic collections, it may be more convenient to use the `disabledKeys` prop at the `Tabs` level instead of `isDisabled` on individual tabs. Each key in this list corresponds with the `id` prop passed to the `Tab` component, or automatically derived from the values passed to the `items` prop (see the [Collections](https://react-spectrum.adobe.com/react-aria/collections.html) for more details). A tab is considered disabled if its id exists in `disabledKeys` or if it has `isDisabled`.

```
function Example() {
  let tabs = [
    {id: 1, title: 'Mouse settings'},
    {id: 2, title: 'Keyboard settings'},
    {id: 3, title: 'Gamepad settings'}
  ];

  return (
    <Tabs disabledKeys={[2]}>
      <TabList aria-label="Input settings" items={tabs}>
        {item => <MyTab>{item.title}</MyTab>}
      </TabList>
      <Collection items={tabs}>
        {item => <TabPanel>{item.title}</TabPanel>}
      </Collection>
    </Tabs>
  );
}
```

```
function Example() {
  let tabs = [
    {id: 1, title: 'Mouse settings'},
    {id: 2, title: 'Keyboard settings'},
    {id: 3, title: 'Gamepad settings'}
  ];

  return (
    <Tabs disabledKeys={[2]}>
      <TabList aria-label="Input settings" items={tabs}>
        {item => <MyTab>{item.title}</MyTab>}
      </TabList>
      <Collection items={tabs}>
        {item => <TabPanel>{item.title}</TabPanel>}
      </Collection>
    </Tabs>
  );
}
```

```
function Example() {
  let tabs = [
    {
      id: 1,
      title:
        'Mouse settings'
    },
    {
      id: 2,
      title:
        'Keyboard settings'
    },
    {
      id: 3,
      title:
        'Gamepad settings'
    }
  ];

  return (
    <Tabs
      disabledKeys={[2]}
    >
      <TabList
        aria-label="Input settings"
        items={tabs}
      >
        {(item) => (
          <MyTab>
            {item.title}
          </MyTab>
        )}
      </TabList>
      <Collection
        items={tabs}
      >
        {(item) => (
          <TabPanel>
            {item.title}
          </TabPanel>
        )}
      </Collection>
    </Tabs>
  );
}
```

* * *

Tabs may be rendered as links to different routes in your application. This can be achieved by passing the `href` prop to the `<Tab>` component. By default, links perform native browser navigation. However, you'll usually want to synchronize the selected tab with the URL from your client side router. This takes two steps:

1.  Set up a `[RouterProvider](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/utils/src/openLink.tsx:RouterProvider)` at the root of your app. This will handle link navigation from all React Aria components using your framework or router. See the [client side routing guide](https://react-spectrum.adobe.com/react-aria/routing.html) to learn how to set this up.
2.  Use the `selectedKey` prop to set the selected tab based on the URL, as [described above](#selection).

This example uses [React Router](https://reactrouter.com/en/main) to setup routes for each tab and synchronize the selection with the URL.

```
import {BrowserRouter, Route, Routes, useLocation, useNavigate} from 'react-router-dom';
import {RouterProvider} from 'react-aria-components';

function AppTabs() {
  let { pathname } = useLocation();

  return (
    <Tabs selectedKey={pathname}>
      <TabList aria-label="Tabs">
        <MyTab id="/" href="/">Home</MyTab>
        <MyTab id="/shared" href="/shared">Shared</MyTab>
        <MyTab id="/deleted" href="/deleted">Deleted</MyTab>
      </TabList>
      <TabPanel id={pathname}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shared" element={<SharedPage />} />
          <Route path="/deleted" element={<DeletedPage />} />
        </Routes>
      </TabPanel>
    </Tabs>
  );
}

function App() {
  let navigate = useNavigate();
  return (
    <RouterProvider navigate={navigate}>
      <Routes>
        <Route path="/*" element={<AppTabs />} />
      </Routes>
    </RouterProvider>
  );
}

<BrowserRouter>
  <App />
</BrowserRouter>
```

```
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  useNavigate
} from 'react-router-dom';
import {RouterProvider} from 'react-aria-components';

function AppTabs() {
  let { pathname } = useLocation();

  return (
    <Tabs selectedKey={pathname}>
      <TabList aria-label="Tabs">
        <MyTab id="/" href="/">Home</MyTab>
        <MyTab id="/shared" href="/shared">Shared</MyTab>
        <MyTab id="/deleted" href="/deleted">Deleted</MyTab>
      </TabList>
      <TabPanel id={pathname}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shared" element={<SharedPage />} />
          <Route
            path="/deleted"
            element={<DeletedPage />}
          />
        </Routes>
      </TabPanel>
    </Tabs>
  );
}

function App() {
  let navigate = useNavigate();
  return (
    <RouterProvider navigate={navigate}>
      <Routes>
        <Route path="/*" element={<AppTabs />} />
      </Routes>
    </RouterProvider>
  );
}

<BrowserRouter>
  <App />
</BrowserRouter>
```

```
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  useNavigate
} from 'react-router-dom';
import {RouterProvider} from 'react-aria-components';

function AppTabs() {
  let { pathname } =
    useLocation();

  return (
    <Tabs
      selectedKey={pathname}
    >
      <TabList aria-label="Tabs">
        <MyTab
          id="/"
          href="/"
        >
          Home
        </MyTab>
        <MyTab
          id="/shared"
          href="/shared"
        >
          Shared
        </MyTab>
        <MyTab
          id="/deleted"
          href="/deleted"
        >
          Deleted
        </MyTab>
      </TabList>
      <TabPanel
        id={pathname}
      >
        <Routes>
          <Route
            path="/"
            element={
              <HomePage />
            }
          />
          <Route
            path="/shared"
            element={
              <SharedPage />
            }
          />
          <Route
            path="/deleted"
            element={
              <DeletedPage />
            }
          />
        </Routes>
      </TabPanel>
    </Tabs>
  );
}

function App() {
  let navigate =
    useNavigate();
  return (
    <RouterProvider
      navigate={navigate}
    >
      <Routes>
        <Route
          path="/*"
          element={
            <AppTabs />
          }
        />
      </Routes>
    </RouterProvider>
  );
}

<BrowserRouter>
  <App />
</BrowserRouter>
```

* * *

Name

Type

Default

Description

`isDisabled`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the TabList is disabled. Shows that a selection exists, but is not available in that circumstance.

`disabledKeys`

`[Iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)<[Key](https://reactjs.org/docs/lists-and-keys.html)>`

—

The item keys that are disabled. These items cannot be selected, focused, or otherwise interacted with.

`selectedKey`

`[Key](https://reactjs.org/docs/lists-and-keys.html) | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)`

—

The currently selected key in the collection (controlled).

`defaultSelectedKey`

`[Key](https://reactjs.org/docs/lists-and-keys.html)`

—

The initial selected key in the collection (uncontrolled).

`keyboardActivation`

`'automatic' | 'manual'`

`'automatic'`

Whether tabs are activated automatically on focus or manually.

`orientation`

`[Orientation](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/orientation.d.ts:Orientation)`

`'horizontal'`

The orientation of the tabs.

`children`

`[ChildrenOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ChildrenOrFunction)<[TabsRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Tabs.tsx:TabsRenderProps)>`

—

The children of the component. A function may be provided to alter the children based on component state.

`className`

`[ClassNameOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ClassNameOrFunction)<[TabsRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Tabs.tsx:TabsRenderProps)>`

—

The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.

`style`

`[StyleOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:StyleOrFunction)<[TabsRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Tabs.tsx:TabsRenderProps)>`

—

The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.

Events

Name

Type

Description

`onSelectionChange`

`( (key: [Key](https://reactjs.org/docs/lists-and-keys.html) )) => void`

Handler that is called when the selection changes.

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

Name

Type

Description

`className`

`[ClassNameOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ClassNameOrFunction)<[TabListRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Tabs.tsx:TabListRenderProps)>`

The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.

`style`

`[StyleOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:StyleOrFunction)<[TabListRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Tabs.tsx:TabListRenderProps)>`

The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.

`children`

`[ReactNode](https://reactjs.org/docs/rendering-elements.html) | ( (item: T )) => [ReactNode](https://reactjs.org/docs/rendering-elements.html)`

The contents of the collection.

`dependencies`

`ReadonlyArray<any>`

Values that should invalidate the item cache when using dynamic collections.

`items`

`[Iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)<T>`

Item objects in the collection.

EventsPositioningAccessibility

Name

Type

Description

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

Name

Type

Description

`id`

`[Key](https://reactjs.org/docs/lists-and-keys.html)`

The unique id of the tab.

`isDisabled`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether the tab is disabled.

`children`

`[ChildrenOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ChildrenOrFunction)<[TabRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Tabs.tsx:TabRenderProps)>`

The children of the component. A function may be provided to alter the children based on component state.

`className`

`[ClassNameOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ClassNameOrFunction)<[TabRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Tabs.tsx:TabRenderProps)>`

The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.

`style`

`[StyleOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:StyleOrFunction)<[TabRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Tabs.tsx:TabRenderProps)>`

The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.

`href`

`[Href](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dom.d.ts:Href)`

A URL to link to. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#href).

`hrefLang`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

Hints at the human language of the linked URL. See[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#hreflang).

`target`

`HTMLAttributeAnchorTarget`

The target window for the link. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#target).

`rel`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

The relationship between the linked resource and the current page. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel).

`download`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

Causes the browser to download the linked URL. A string may be provided to suggest a file name. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#download).

`ping`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

A space-separated list of URLs to ping when the link is followed. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#ping).

`referrerPolicy`

`HTMLAttributeReferrerPolicy`

How much of the referrer to send when following the link. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#referrerpolicy).

`routerOptions`

`[RouterOptions](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dom.d.ts:RouterOptions)`

Options for the configured client side router.

Events

Name

Type

Description

`onHoverStart`

`( (e: [HoverEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/events.d.ts:HoverEvent) )) => void`

Handler that is called when a hover interaction starts.

`onHoverEnd`

`( (e: [HoverEvent](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/events.d.ts:HoverEvent) )) => void`

Handler that is called when a hover interaction ends.

`onHoverChange`

`( (isHovering: [boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) )) => void`

Handler that is called when the hover state changes.

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

PositioningAccessibility

Name

Type

Description

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

Name

Type

Default

Description

`shouldForceMount`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

`false`

Whether to mount the tab panel in the DOM even when it is not currently selected. Inactive tab panels are inert and cannot be interacted with. They must be styled appropriately so this is clear to the user visually.

`id`

`[Key](https://reactjs.org/docs/lists-and-keys.html)`

—

The unique id of the tab.

`children`

`[ChildrenOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ChildrenOrFunction)<[TabPanelRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Tabs.tsx:TabPanelRenderProps)>`

—

The children of the component. A function may be provided to alter the children based on component state.

`className`

`[ClassNameOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ClassNameOrFunction)<[TabPanelRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Tabs.tsx:TabPanelRenderProps)>`

—

The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.

`style`

`[StyleOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:StyleOrFunction)<[TabPanelRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Tabs.tsx:TabPanelRenderProps)>`

—

The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.

EventsPositioningAccessibility

Name

Type

Description

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

* * *

React Aria components can be styled in many ways, including using CSS classes, inline styles, utility classes (e.g. Tailwind), CSS-in-JS (e.g. Styled Components), etc. By default, all components include a builtin `className` attribute which can be targeted using CSS selectors. These follow the `react-aria-ComponentName` naming convention.

```
.react-aria-Tabs {
  /* ... */
}
```

```
.react-aria-Tabs {
  /* ... */
}
```

```
.react-aria-Tabs {
  /* ... */
}
```

A custom `className` can also be specified on any component. This overrides the default `className` provided by React Aria with your own.

```
<Tabs className="my-tabs">
  {/* ... */}
</Tabs>
```

```
<Tabs className="my-tabs">
  {/* ... */}
</Tabs>
```

```
<Tabs className="my-tabs">
  {/* ... */}
</Tabs>
```

In addition, some components support multiple UI states (e.g. pressed, hovered, etc.). React Aria components expose states using data attributes, which you can target in CSS selectors. For example:

```
.react-aria-Tab[data-selected] {
  /* ... */
}

.react-aria-Tab[data-focus-visible] {
  /* ... */
}
```

```
.react-aria-Tab[data-selected] {
  /* ... */
}

.react-aria-Tab[data-focus-visible] {
  /* ... */
}
```

```
.react-aria-Tab[data-selected] {
  /* ... */
}

.react-aria-Tab[data-focus-visible] {
  /* ... */
}
```

The `className` and `style` props also accept functions which receive states for styling. This lets you dynamically determine the classes or styles to apply, which is useful when using utility CSS libraries like [Tailwind](https://tailwindcss.com/).

```
<Tab
  className={({ isSelected }) => isSelected ? 'bg-blue-400' : 'bg-gray-100'}
>
  Settings
</Tab>
```

```
<Tab
  className={({ isSelected }) =>
    isSelected ? 'bg-blue-400' : 'bg-gray-100'}
>
  Settings
</Tab>
```

```
<Tab
  className={(
    { isSelected }
  ) =>
    isSelected
      ? 'bg-blue-400'
      : 'bg-gray-100'}
>
  Settings
</Tab>
```

Render props may also be used as children to alter what elements are rendered based on the current state. For example, you could render an extra element when an item is selected.

```
<Tab>
  {({isSelected}) => (
    <>
      {isSelected && <SelectionIndicator />}
      Item
    </>
  )}
</Tab>
```

```
<Tab>
  {({isSelected}) => (
    <>
      {isSelected && <SelectionIndicator />}
      Item
    </>
  )}
</Tab>
```

```
<Tab>
  {(
    { isSelected }
  ) => (
    <>
      {isSelected && (
        <SelectionIndicator />
      )}
      Item
    </>
  )}
</Tab>
```

The states and selectors for each component used in `Tabs` are documented below.

`Tabs` can be targeted with the `.react-aria-Tabs` CSS selector, or by overriding with a custom `className`. It supports the following states and render props:

Name

CSS Selector

Description

`orientation`

`[data-orientation="horizontal | vertical"]`

The orientation of the tabs.

A `TabList` can be targeted with the `.react-aria-TabList` CSS selector, or by overriding with a custom `className`. It supports the following states:

Name

CSS Selector

Description

`orientation`

`[data-orientation="horizontal | vertical"]`

The orientation of the tab list.

`state`

`—`

State of the tab list.

A `Tab` can be targeted with the `.react-aria-Tab` CSS selector, or by overriding with a custom `className`. It supports the following states and render props:

Name

CSS Selector

Description

`isHovered`

`[data-hovered]`

Whether the tab is currently hovered with a mouse.

`isPressed`

`[data-pressed]`

Whether the tab is currently in a pressed state.

`isSelected`

`[data-selected]`

Whether the tab is currently selected.

`isFocused`

`[data-focused]`

Whether the tab is currently focused.

`isFocusVisible`

`[data-focus-visible]`

Whether the tab is currently keyboard focused.

`isDisabled`

`[data-disabled]`

Whether the tab is disabled.

A `TabPanel` can be targeted with the `.react-aria-TabPanel` CSS selector, or by overriding with a custom `className`. It supports the following states and render props:

Name

CSS Selector

Description

`isFocused`

`[data-focused]`

Whether the tab panel is currently focused.

`isFocusVisible`

`[data-focus-visible]`

Whether the tab panel is currently keyboard focused.

`isInert`

`[data-inert]`

Whether the tab panel is currently non-interactive. This occurs when the `shouldForceMount` prop is true, and the corresponding tab is not selected.

`state`

`—`

State of the tab list.

* * *

All React Aria Components export a corresponding context that can be used to send props to them from a parent element. This enables you to build your own compositional APIs similar to those found in React Aria Components itself. You can send any prop or ref via context that you could pass to the corresponding component. The local props and ref on the component are merged with the ones passed via context, with the local props taking precedence (following the rules documented in [mergeProps](https://react-spectrum.adobe.com/react-aria/mergeProps.html)).

Component

Context

Props

Ref

`Tabs`

`TabsContext`

`[TabsProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Tabs.tsx:TabsProps)`

`[HTMLDivElement](https://developer.mozilla.org/docs/Web/API/HTMLDivElement)`

This example shows a `Router` component that accepts `Tabs` and `Link` elements as children. When a link is clicked, it updates the selected tab accordingly.

```
import type {PressEvent} from 'react-aria-components';
import {TabsContext, LinkContext} from 'react-aria-components';

function Router({children}) {
  let [selectedKey, onSelectionChange] = React.useState(null);
  let onPress = (e: PressEvent) => {
    onSelectionChange(e.target.getAttribute('data-href'));
  };

  return (
    <TabsContext.Provider value={{selectedKey, onSelectionChange}}>      <LinkContext.Provider value={{onPress}}>
        {children}
      </LinkContext.Provider>
    </TabsContext.Provider>
  );
}
```

```
import type {PressEvent} from 'react-aria-components';
import {
  LinkContext,
  TabsContext
} from 'react-aria-components';

function Router({ children }) {
  let [selectedKey, onSelectionChange] = React.useState(
    null
  );
  let onPress = (e: PressEvent) => {
    onSelectionChange(e.target.getAttribute('data-href'));
  };

  return (
    <TabsContext.Provider
      value={{ selectedKey, onSelectionChange }}
    >      <LinkContext.Provider value={{ onPress }}>
        {children}
      </LinkContext.Provider>
    </TabsContext.Provider>
  );
}
```

```
import type {PressEvent} from 'react-aria-components';
import {
  LinkContext,
  TabsContext
} from 'react-aria-components';

function Router(
  { children }
) {
  let [
    selectedKey,
    onSelectionChange
  ] = React.useState(
    null
  );
  let onPress = (
    e: PressEvent
  ) => {
    onSelectionChange(
      e.target
        .getAttribute(
          'data-href'
        )
    );
  };

  return (
    <TabsContext.Provider
      value={{
        selectedKey,
        onSelectionChange
      }}
    >      <LinkContext.Provider
        value={{
          onPress
        }}
      >
        {children}
      </LinkContext.Provider>
    </TabsContext.Provider>
  );
}
```

Now clicking a link rendered within a `Router` navigates to the linked tab.

```
import {Link} from 'react-aria-components';

<Router>
  <Tabs>
    <TabList aria-label="Mesozoic time periods">
      <Tab id="triassic">Triassic</Tab>
      <Tab id="jurassic">Jurassic</Tab>
      <Tab id="cretaceous">Cretaceous</Tab>
    </TabList>
    <TabPanel id="triassic">
      The Triassic ranges roughly from 252 million to 201 million years ago,
      preceding the <Link data-href="jurassic">Jurassic Period</Link>.
    </TabPanel>
    <TabPanel id="jurassic">
      The Jurassic ranges from 200 million years to 145 million years ago,
      preceding the <Link data-href="cretaceous">Cretaceous Period</Link>.
    </TabPanel>
    <TabPanel id="cretaceous">
      The Cretaceous is the longest period of the Mesozoic, spanning from 145
      million to 66 million years ago.
    </TabPanel>
  </Tabs>
</Router>
```

```
import {Link} from 'react-aria-components';

<Router>
  <Tabs>
    <TabList aria-label="Mesozoic time periods">
      <Tab id="triassic">Triassic</Tab>
      <Tab id="jurassic">Jurassic</Tab>
      <Tab id="cretaceous">Cretaceous</Tab>
    </TabList>
    <TabPanel id="triassic">
      The Triassic ranges roughly from 252 million to 201
      million years ago, preceding the{' '}
      <Link data-href="jurassic">Jurassic Period</Link>.
    </TabPanel>
    <TabPanel id="jurassic">
      The Jurassic ranges from 200 million years to 145
      million years ago, preceding the{' '}
      <Link data-href="cretaceous">
        Cretaceous Period
      </Link>.
    </TabPanel>
    <TabPanel id="cretaceous">
      The Cretaceous is the longest period of the
      Mesozoic, spanning from 145 million to 66 million
      years ago.
    </TabPanel>
  </Tabs>
</Router>
```

```
import {Link} from 'react-aria-components';

<Router>
  <Tabs>
    <TabList aria-label="Mesozoic time periods">
      <Tab id="triassic">
        Triassic
      </Tab>
      <Tab id="jurassic">
        Jurassic
      </Tab>
      <Tab id="cretaceous">
        Cretaceous
      </Tab>
    </TabList>
    <TabPanel id="triassic">
      The Triassic
      ranges roughly
      from 252 million
      to 201 million
      years ago,
      preceding the
      {' '}
      <Link data-href="jurassic">
        Jurassic Period
      </Link>.
    </TabPanel>
    <TabPanel id="jurassic">
      The Jurassic
      ranges from 200
      million years to
      145 million years
      ago, preceding
      the{' '}
      <Link data-href="cretaceous">
        Cretaceous
        Period
      </Link>.
    </TabPanel>
    <TabPanel id="cretaceous">
      The Cretaceous is
      the longest
      period of the
      Mesozoic,
      spanning from 145
      million to 66
      million years
      ago.
    </TabPanel>
  </Tabs>
</Router>
```

Tabs provides a `[TabListState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/tabs/src/useTabListState.ts:TabListState)` object to its children via `TabListStateContext`. This can be used to access and manipulate the tab list state.

This example shows a `TabNavigation` component that can be placed within `Tabs` to navigate to the previous or next selected tab.

```
import {Button, TabListStateContext} from 'react-aria-components';
import {ArrowLeft, ArrowRight} from 'lucide-react';

function TabNavigation() {
  let state = React.useContext(TabListStateContext);  let prevKey = state?.collection.getKeyBefore(state.selectedKey);
  let nextKey = state?.collection.getKeyAfter(state.selectedKey);
  let onPrev = prevKey != null ? () => state.setSelectedKey(prevKey) : null;
  let onNext = nextKey != null ? () => state.setSelectedKey(nextKey) : null;
  return (
    <div className="button-group">
      <Button aria-label="Previous tab" onPress={onPrev}>
        <ArrowLeft size={16} />
      </Button>
      <Button aria-label="Next tab" onPress={onNext}>
        <ArrowRight size={16} />
      </Button>
    </div>
  );
}

<Tabs>
  <div style={{ display: 'flex' }}>
    <TabList aria-label="Tabs" style={{ flex: 1 }}>
      <Tab id="home">Home</Tab>
      <Tab id="projects">Projects</Tab>
      <Tab id="search">Search</Tab>
    </TabList>
    <TabNavigation />  </div>
  <TabPanel id="home">Home</TabPanel>
  <TabPanel id="projects">Projects</TabPanel>
  <TabPanel id="search">Search</TabPanel>
</Tabs>
```

```
import {
  Button,
  TabListStateContext
} from 'react-aria-components';
import {ArrowLeft, ArrowRight} from 'lucide-react';

function TabNavigation() {
  let state = React.useContext(TabListStateContext);  let prevKey = state?.collection.getKeyBefore(
    state.selectedKey
  );
  let nextKey = state?.collection.getKeyAfter(
    state.selectedKey
  );
  let onPrev = prevKey != null
    ? () => state.setSelectedKey(prevKey)
    : null;
  let onNext = nextKey != null
    ? () => state.setSelectedKey(nextKey)
    : null;
  return (
    <div className="button-group">
      <Button aria-label="Previous tab" onPress={onPrev}>
        <ArrowLeft size={16} />
      </Button>
      <Button aria-label="Next tab" onPress={onNext}>
        <ArrowRight size={16} />
      </Button>
    </div>
  );
}

<Tabs>
  <div style={{ display: 'flex' }}>
    <TabList aria-label="Tabs" style={{ flex: 1 }}>
      <Tab id="home">Home</Tab>
      <Tab id="projects">Projects</Tab>
      <Tab id="search">Search</Tab>
    </TabList>
    <TabNavigation />  </div>
  <TabPanel id="home">Home</TabPanel>
  <TabPanel id="projects">Projects</TabPanel>
  <TabPanel id="search">Search</TabPanel>
</Tabs>
```

```
import {
  Button,
  TabListStateContext
} from 'react-aria-components';
import {
  ArrowLeft,
  ArrowRight
} from 'lucide-react';

function TabNavigation() {
  let state = React
    .useContext(
      TabListStateContext
    );  let prevKey = state
    ?.collection
    .getKeyBefore(
      state.selectedKey
    );
  let nextKey = state
    ?.collection
    .getKeyAfter(
      state.selectedKey
    );
  let onPrev =
    prevKey != null
      ? () =>
        state
          .setSelectedKey(
            prevKey
          )
      : null;
  let onNext =
    nextKey != null
      ? () =>
        state
          .setSelectedKey(
            nextKey
          )
      : null;
  return (
    <div className="button-group">
      <Button
        aria-label="Previous tab"
        onPress={onPrev}
      >
        <ArrowLeft
          size={16}
        />
      </Button>
      <Button
        aria-label="Next tab"
        onPress={onNext}
      >
        <ArrowRight
          size={16}
        />
      </Button>
    </div>
  );
}

<Tabs>
  <div
    style={{
      display: 'flex'
    }}
  >
    <TabList
      aria-label="Tabs"
      style={{
        flex: 1
      }}
    >
      <Tab id="home">
        Home
      </Tab>
      <Tab id="projects">
        Projects
      </Tab>
      <Tab id="search">
        Search
      </Tab>
    </TabList>
    <TabNavigation />  </div>
  <TabPanel id="home">
    Home
  </TabPanel>
  <TabPanel id="projects">
    Projects
  </TabPanel>
  <TabPanel id="search">
    Search
  </TabPanel>
</Tabs>
```

If you need to customize things even further, such as accessing internal state or customizing DOM structure, you can drop down to the lower level Hook-based API. See [useTabList](https://react-spectrum.adobe.com/react-aria/useTabList.html) for more details.

* * *

`@react-aria/test-utils` offers common tabs interaction utilities which you may find helpful when writing tests. See [here](https://react-spectrum.adobe.com/react-aria/testing.html#react-aria-test-utils) for more information on how to setup these utilities in your tests. Below is the full definition of the tabs tester and a sample of how you could use it in your test suite.

```
// Tabs.test.ts
import {render} from '@testing-library/react';
import {User} from '@react-aria/test-utils';

let testUtilUser = new User({ interactionType: 'mouse' });
// ...

it('Tabs can change selection via keyboard', async function () {
  // Render your test component/app and initialize the listbox tester
  let { getByTestId } = render(
    <Tabs data-testid="test-tabs">
      ...
    </Tabs>
  );
  let tabsTester = testUtilUser.createTester('Tabs', {
    root: getByTestId('test-tabs'),
    interactionType: 'keyboard'
  });

  let tabs = tabsTester.tabs;
  expect(tabsTester.selectedTab).toBe(tabs[0]);

  await tabsTester.triggerTab({ tab: 1 });
  expect(tabsTester.selectedTab).toBe(tabs[1]);
});
```

```
// Tabs.test.ts
import {render} from '@testing-library/react';
import {User} from '@react-aria/test-utils';

let testUtilUser = new User({ interactionType: 'mouse' });
// ...

it('Tabs can change selection via keyboard', async function () {
  // Render your test component/app and initialize the listbox tester
  let { getByTestId } = render(
    <Tabs data-testid="test-tabs">
      ...
    </Tabs>
  );
  let tabsTester = testUtilUser.createTester('Tabs', {
    root: getByTestId('test-tabs'),
    interactionType: 'keyboard'
  });

  let tabs = tabsTester.tabs;
  expect(tabsTester.selectedTab).toBe(tabs[0]);

  await tabsTester.triggerTab({ tab: 1 });
  expect(tabsTester.selectedTab).toBe(tabs[1]);
});
```

```
// Tabs.test.ts
import {render} from '@testing-library/react';
import {User} from '@react-aria/test-utils';

let testUtilUser =
  new User({
    interactionType:
      'mouse'
  });
// ...

it('Tabs can change selection via keyboard', async function () {
  // Render your test component/app and initialize the listbox tester
  let { getByTestId } =
    render(
      <Tabs data-testid="test-tabs">
        ...
      </Tabs>
    );
  let tabsTester =
    testUtilUser
      .createTester(
        'Tabs',
        {
          root:
            getByTestId(
              'test-tabs'
            ),
          interactionType:
            'keyboard'
        }
      );

  let tabs =
    tabsTester.tabs;
  expect(
    tabsTester
      .selectedTab
  ).toBe(tabs[0]);

  await tabsTester
    .triggerTab({
      tab: 1
    });
  expect(
    tabsTester
      .selectedTab
  ).toBe(tabs[1]);
});
```

### Properties

Name

Type

Description

`tablist`

`[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)`

Returns the tablist.

`tabpanels`

`[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)[]`

Returns the tabpanels.

`tabs`

`[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)[]`

Returns the tabs in the tablist.

`selectedTab`

`[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element) | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)`

Returns the currently selected tab in the tablist if any.

`activeTabpanel`

`[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element) | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)`

Returns the currently active tabpanel if any.

### Methods

Method

Description

`constructor( (opts: [TabsTesterOpts](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/test-utils/src/types.ts:TabsTesterOpts) )): void`

`setInteractionType( (type: [UserOpts](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/test-utils/src/types.ts:UserOpts)['interactionType'] )): void`

Set the interaction type used by the tabs tester.

`findTab( (opts: {  tabIndexOrText: [number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number) |  | [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)  } )): [HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)`

Returns a tab matching the specified index or text content.

`triggerTab( (opts: [TriggerTabOptions](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/test-utils/src/tabs.ts:TriggerTabOptions) )): [Promise](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)<void>`

Triggers the specified tab. Defaults to using the interaction type set on the tabs tester.