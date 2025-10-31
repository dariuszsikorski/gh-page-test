# ColorPicker

**Source**: [https://react-spectrum.adobe.com/react-aria/ColorPicker.html](https://react-spectrum.adobe.com/react-aria/ColorPicker.html)

> Documentation for ColorPicker in the React Aria package.

---

A ColorPicker synchronizes a color value between multiple React Aria color components. It simplifies building color pickers with customizable layouts via composition.

* * *

```
import {Button, ColorPicker, Dialog, DialogTrigger, Popover} from 'react-aria-components';
import {MyColorSwatch} from './ColorSwatch';
import {MyColorSlider} from './ColorSlider';
import {MyColorArea} from './ColorArea';
import {MyColorField} from './ColorField';

<ColorPicker defaultValue="#5100FF">
  <DialogTrigger>
    <Button className="color-picker">
      <MyColorSwatch />
      <span>Fill color</span>
    </Button>
    <Popover placement="bottom start">
      <Dialog className="color-picker-dialog">
        <MyColorArea
          colorSpace="hsb"
          xChannel="saturation"
          yChannel="brightness"
        />
        <MyColorSlider colorSpace="hsb" channel="hue" />
        <MyColorField label="Hex" />
      </Dialog>
    </Popover>
  </DialogTrigger>
</ColorPicker>
```

```
import {
  Button,
  ColorPicker,
  Dialog,
  DialogTrigger,
  Popover
} from 'react-aria-components';
import {MyColorSwatch} from './ColorSwatch';
import {MyColorSlider} from './ColorSlider';
import {MyColorArea} from './ColorArea';
import {MyColorField} from './ColorField';

<ColorPicker defaultValue="#5100FF">
  <DialogTrigger>
    <Button className="color-picker">
      <MyColorSwatch />
      <span>Fill color</span>
    </Button>
    <Popover placement="bottom start">
      <Dialog className="color-picker-dialog">
        <MyColorArea
          colorSpace="hsb"
          xChannel="saturation"
          yChannel="brightness"
        />
        <MyColorSlider colorSpace="hsb" channel="hue" />
        <MyColorField label="Hex" />
      </Dialog>
    </Popover>
  </DialogTrigger>
</ColorPicker>
```

```
import {
  Button,
  ColorPicker,
  Dialog,
  DialogTrigger,
  Popover
} from 'react-aria-components';
import {MyColorSwatch} from './ColorSwatch';
import {MyColorSlider} from './ColorSlider';
import {MyColorArea} from './ColorArea';
import {MyColorField} from './ColorField';

<ColorPicker defaultValue="#5100FF">
  <DialogTrigger>
    <Button className="color-picker">
      <MyColorSwatch />
      <span>
        Fill color
      </span>
    </Button>
    <Popover placement="bottom start">
      <Dialog className="color-picker-dialog">
        <MyColorArea
          colorSpace="hsb"
          xChannel="saturation"
          yChannel="brightness"
        />
        <MyColorSlider
          colorSpace="hsb"
          channel="hue"
        />
        <MyColorField label="Hex" />
      </Dialog>
    </Popover>
  </DialogTrigger>
</ColorPicker>
```

Show CSS

```
@import "@react-aria/example-theme";

.color-picker {
  background: none;
  border: none;
  padding: 0;
  display: flex;
  align-items: center;
  gap: 8px;
  outline: none;
  border-radius: 4px;
  appearance: none;
  vertical-align: middle;
  font-size: 1rem;
  color: var(--text-color);

  &[data-focus-visible] {
    outline: 2px solid var(--focus-ring-color);
    outline-offset: 2px;
  }
}

.color-picker-dialog {
  outline: none;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 192px;
  max-height: inherit;
  box-sizing: border-box;
  overflow: auto;
}
```

```
@import "@react-aria/example-theme";

.color-picker {
  background: none;
  border: none;
  padding: 0;
  display: flex;
  align-items: center;
  gap: 8px;
  outline: none;
  border-radius: 4px;
  appearance: none;
  vertical-align: middle;
  font-size: 1rem;
  color: var(--text-color);

  &[data-focus-visible] {
    outline: 2px solid var(--focus-ring-color);
    outline-offset: 2px;
  }
}

.color-picker-dialog {
  outline: none;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 192px;
  max-height: inherit;
  box-sizing: border-box;
  overflow: auto;
}
```

```
@import "@react-aria/example-theme";

.color-picker {
  background: none;
  border: none;
  padding: 0;
  display: flex;
  align-items: center;
  gap: 8px;
  outline: none;
  border-radius: 4px;
  appearance: none;
  vertical-align: middle;
  font-size: 1rem;
  color: var(--text-color);

  &[data-focus-visible] {
    outline: 2px solid var(--focus-ring-color);
    outline-offset: 2px;
  }
}

.color-picker-dialog {
  outline: none;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 192px;
  max-height: inherit;
  box-sizing: border-box;
  overflow: auto;
}
```

* * *

The [<input type="color">](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color) HTML element can be used to build a color picker, however it is very inconsistent across browsers and operating systems and does not allow customization. `ColorPicker` helps achieve accessible color pickers that can be styled as needed.

-   **Customizable** – Support for rendering any color picker UI by placing components like [ColorArea](https://react-spectrum.adobe.com/react-aria/ColorArea.html), [ColorSlider](https://react-spectrum.adobe.com/react-aria/ColorSlider.html), [ColorWheel](https://react-spectrum.adobe.com/react-aria/ColorWheel.html), [ColorField](https://react-spectrum.adobe.com/react-aria/ColorField.html), and [ColorSwatchPicker](https://react-spectrum.adobe.com/react-aria/ColorSwatchPicker.html) inside. These can be arranged in any desired combination or layout, with or without a popover.
-   **Accessible** – All color components announce localized color descriptions for screen reader users (e.g. "dark vibrant blue").

* * *

A color picker does not render any UI by itself. You can render any combination of color components as children of a color picker, including [ColorArea](https://react-spectrum.adobe.com/react-aria/ColorArea.html), [ColorSlider](https://react-spectrum.adobe.com/react-aria/ColorSlider.html), [ColorWheel](https://react-spectrum.adobe.com/react-aria/ColorWheel.html), [ColorField](https://react-spectrum.adobe.com/react-aria/ColorField.html), [ColorSwatch](https://react-spectrum.adobe.com/react-aria/ColorSwatch.html), and [ColorSwatchPicker](https://react-spectrum.adobe.com/react-aria/ColorSwatchPicker.html). `ColorPicker` manages the state of the selected color, and coordinates the value between all of the components inside it.

```
import {ColorPicker} from 'react-aria-components';

<ColorPicker>
  {/* Color components here */}
</ColorPicker>
```

```
import {ColorPicker} from 'react-aria-components';

<ColorPicker>
  {/* Color components here */}
</ColorPicker>
```

```
import {ColorPicker} from 'react-aria-components';

<ColorPicker>
  {/* Color components here */}
</ColorPicker>
```

A `ColorPicker` uses the following components, which may also be used standalone or reused in other components.

[

ColorArea

A color area allows users to adjust two channels of a color value.

](https://react-spectrum.adobe.com/react-aria/ColorArea.html)[

ColorSlider

A color slider allows users to adjust an individual channel of a color value.

](https://react-spectrum.adobe.com/react-aria/ColorSlider.html)[

ColorWheel

A color wheel allows users to adjust the hue of a color value on a circular track.

](https://react-spectrum.adobe.com/react-aria/ColorWheel.html)[

ColorField

A color field allows users to edit a hex color or individual color channel value.

](https://react-spectrum.adobe.com/react-aria/ColorField.html)[

ColorSwatch

A ColorSwatch displays a preview of a selected color.

](https://react-spectrum.adobe.com/react-aria/ColorSwatch.html)[

ColorSwatchPicker

A ColorSwatchPicker displays a list of color swatches and allows a user to select one of them.

](https://react-spectrum.adobe.com/react-aria/ColorSwatchPicker.html)

* * *

To help kick-start your project, we offer starter kits that include example implementations of all React Aria components with various styling solutions. All components are fully styled, including support for dark mode, high contrast mode, and all UI states. Each starter comes with a pre-configured [Storybook](https://storybook.js.org/) that you can experiment with, or use as a starting point for your own component library.

* * *

If you will use a ColorPicker in multiple places in your app, you can wrap all of the pieces into a reusable component. This way, the DOM structure, styling code, and other logic are defined in a single place and reused everywhere to ensure consistency.

This example wraps `ColorPicker` and all of its children together into a single component. It uses the reusable wrappers for [ColorSwatch](https://react-spectrum.adobe.com/react-aria/ColorSwatch.html#reusable-wrappers), [ColorArea](https://react-spectrum.adobe.com/react-aria/ColorArea.html#reusable-wrappers), [ColorSlider](https://react-spectrum.adobe.com/react-aria/ColorSlider.html#reusable-wrappers), and [ColorField](https://react-spectrum.adobe.com/react-aria/ColorField.html#reusable-wrappers) created on their corresponding documentation pages. Custom children can also be provided to customize the layout within the popover.

```
import type {ColorPickerProps} from 'react-aria-components';
import {Button, ColorPicker, Dialog, DialogTrigger, Popover} from 'react-aria-components';
import {MyColorSwatch} from './ColorSwatch';
import {MyColorArea} from './ColorArea';
import {MyColorSlider} from './ColorSlider';
import {MyColorField} from './ColorField';

interface MyColorPickerProps extends ColorPickerProps {
  label?: string;
  children?: React.ReactNode;
}

function MyColorPicker({ label, children, ...props }: MyColorPickerProps) {
  return (
    <ColorPicker {...props}>
      <DialogTrigger>
        <Button className="color-picker">
          <MyColorSwatch />
          <span>{label}</span>
        </Button>
        <Popover placement="bottom start">
          <Dialog className="color-picker-dialog">
            {children || (
              <>
                <MyColorArea
                  colorSpace="hsb"
                  xChannel="saturation"
                  yChannel="brightness"
                />
                <MyColorSlider colorSpace="hsb" channel="hue" />
                <MyColorField label="Hex" />
              </>
            )}
          </Dialog>
        </Popover>
      </DialogTrigger>
    </ColorPicker>
  );
}

<MyColorPicker label="Fill color" defaultValue="#f00" />
```

```
import type {ColorPickerProps} from 'react-aria-components';
import {
  Button,
  ColorPicker,
  Dialog,
  DialogTrigger,
  Popover
} from 'react-aria-components';
import {MyColorSwatch} from './ColorSwatch';
import {MyColorArea} from './ColorArea';
import {MyColorSlider} from './ColorSlider';
import {MyColorField} from './ColorField';

interface MyColorPickerProps extends ColorPickerProps {
  label?: string;
  children?: React.ReactNode;
}

function MyColorPicker(
  { label, children, ...props }: MyColorPickerProps
) {
  return (
    <ColorPicker {...props}>
      <DialogTrigger>
        <Button className="color-picker">
          <MyColorSwatch />
          <span>{label}</span>
        </Button>
        <Popover placement="bottom start">
          <Dialog className="color-picker-dialog">
            {children || (
              <>
                <MyColorArea
                  colorSpace="hsb"
                  xChannel="saturation"
                  yChannel="brightness"
                />
                <MyColorSlider
                  colorSpace="hsb"
                  channel="hue"
                />
                <MyColorField label="Hex" />
              </>
            )}
          </Dialog>
        </Popover>
      </DialogTrigger>
    </ColorPicker>
  );
}

<MyColorPicker label="Fill color" defaultValue="#f00" />
```

```
import type {ColorPickerProps} from 'react-aria-components';
import {
  Button,
  ColorPicker,
  Dialog,
  DialogTrigger,
  Popover
} from 'react-aria-components';
import {MyColorSwatch} from './ColorSwatch';
import {MyColorArea} from './ColorArea';
import {MyColorSlider} from './ColorSlider';
import {MyColorField} from './ColorField';

interface MyColorPickerProps
  extends
    ColorPickerProps {
  label?: string;
  children?:
    React.ReactNode;
}

function MyColorPicker(
  {
    label,
    children,
    ...props
  }: MyColorPickerProps
) {
  return (
    <ColorPicker
      {...props}
    >
      <DialogTrigger>
        <Button className="color-picker">
          <MyColorSwatch />
          <span>
            {label}
          </span>
        </Button>
        <Popover placement="bottom start">
          <Dialog className="color-picker-dialog">
            {children ||
              (
                <>
                  <MyColorArea
                    colorSpace="hsb"
                    xChannel="saturation"
                    yChannel="brightness"
                  />
                  <MyColorSlider
                    colorSpace="hsb"
                    channel="hue"
                  />
                  <MyColorField label="Hex" />
                </>
              )}
          </Dialog>
        </Popover>
      </DialogTrigger>
    </ColorPicker>
  );
}

<MyColorPicker
  label="Fill color"
  defaultValue="#f00"
/>
```

* * *

A ColorPicker requires either an uncontrolled default value or a controlled value, provided using the `defaultValue` or `value` props respectively. The value provided to either of these props should be a color string or `[Color](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/color/src/index.d.ts:Color)` object.

By default, `ColorPicker` is uncontrolled. You can set a default value using the `defaultValue` prop.

```
<MyColorPicker
  label="Color"
  defaultValue="hsl(25, 100%, 50%)" />
```

```
<MyColorPicker
  label="Color"
  defaultValue="hsl(25, 100%, 50%)" />
```

```
<MyColorPicker
  label="Color"
  defaultValue="hsl(25, 100%, 50%)"
/>
```

In the example below, the `[parseColor](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/color/src/Color.ts:parseColor)` function is used to parse the initial color from a HSL string so that `value`'s type remains consistent.

```
import {parseColor} from 'react-aria-components';

function Example() {
  let [value, setValue] = React.useState(parseColor('hsl(25, 100%, 50%)'));
  return (
    <MyColorPicker
      label="Color"
      value={value}
      onChange={setValue} />
  );
}
```

```
import {parseColor} from 'react-aria-components';

function Example() {
  let [value, setValue] = React.useState(
    parseColor('hsl(25, 100%, 50%)')
  );
  return (
    <MyColorPicker
      label="Color"
      value={value}
      onChange={setValue}
    />
  );
}
```

```
import {parseColor} from 'react-aria-components';

function Example() {
  let [value, setValue] =
    React.useState(
      parseColor(
        'hsl(25, 100%, 50%)'
      )
    );
  return (
    <MyColorPicker
      label="Color"
      value={value}
      onChange={setValue}
    />
  );
}
```

* * *

ColorPicker accepts an `onChange` prop which is triggered whenever the value is edited by the user. It receives a `[Color](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/color/src/index.d.ts:Color)` object as a parameter.

The example below uses `onChange` to update a separate element with the color value as a string.

```
function Example() {
  let [value, setValue] = React.useState(parseColor('hsl(50, 100%, 50%)'));

  return (
    <div>
      <MyColorPicker
        label="Color"
        value={value}
        onChange={setValue} />
      <p>Selected color: {value.toString('hsl')}</p>
    </div>
  );
}
```

```
function Example() {
  let [value, setValue] = React.useState(
    parseColor('hsl(50, 100%, 50%)')
  );

  return (
    <div>
      <MyColorPicker
        label="Color"
        value={value}
        onChange={setValue}
      />
      <p>Selected color: {value.toString('hsl')}</p>
    </div>
  );
}
```

```
function Example() {
  let [value, setValue] =
    React.useState(
      parseColor(
        'hsl(50, 100%, 50%)'
      )
    );

  return (
    <div>
      <MyColorPicker
        label="Color"
        value={value}
        onChange={setValue}
      />
      <p>
        Selected color:
        {' '}
        {value.toString(
          'hsl'
        )}
      </p>
    </div>
  );
}
```

* * *

This example uses [ColorSlider](https://react-spectrum.adobe.com/react-aria/ColorSlider.html) to allow a user to adjust each channel of a color value, with a [Select](https://react-spectrum.adobe.com/react-aria/Select.html) to switch between color spaces.

```
import type {ColorSpace} from 'react-aria-components';
import {getColorChannels} from 'react-aria-components';
import {MyColorSlider} from './ColorSlider';
import {MyItem, MySelect} from './Select';

function Example() {
  let [space, setSpace] = React.useState<ColorSpace>('rgb');

  return (
    <MyColorPicker label="Fill color" defaultValue="#184">
      <MySelect
        aria-label="Color space"
        selectedKey={space}
        onSelectionChange={(s) => setSpace(s as ColorSpace)}
      >
        <MyItem id="rgb">RGB</MyItem>
        <MyItem id="hsl">HSL</MyItem>
        <MyItem id="hsb">HSB</MyItem>
      </MySelect>
      {getColorChannels(space).map((channel) => (
        <MyColorSlider key={channel} colorSpace={space} channel={channel} />
      ))}
      <MyColorSlider channel="alpha" />    </MyColorPicker>
  );
}
```

```
import type {ColorSpace} from 'react-aria-components';
import {getColorChannels} from 'react-aria-components';
import {MyColorSlider} from './ColorSlider';
import {MyItem, MySelect} from './Select';

function Example() {
  let [space, setSpace] = React.useState<ColorSpace>('rgb');

  return (
    <MyColorPicker label="Fill color" defaultValue="#184">
      <MySelect
        aria-label="Color space"
        selectedKey={space}
        onSelectionChange={(s) => setSpace(s as ColorSpace)}
      >
        <MyItem id="rgb">RGB</MyItem>
        <MyItem id="hsl">HSL</MyItem>
        <MyItem id="hsb">HSB</MyItem>
      </MySelect>
      {getColorChannels(space).map((channel) => (
        <MyColorSlider
          key={channel}
          colorSpace={space}
          channel={channel}
        />
      ))}
      <MyColorSlider channel="alpha" />    </MyColorPicker>
  );
}
```

```
import type {ColorSpace} from 'react-aria-components';
import {getColorChannels} from 'react-aria-components';
import {MyColorSlider} from './ColorSlider';
import {
  MyItem,
  MySelect
} from './Select';

function Example() {
  let [space, setSpace] =
    React.useState<
      ColorSpace
    >('rgb');

  return (
    <MyColorPicker
      label="Fill color"
      defaultValue="#184"
    >
      <MySelect
        aria-label="Color space"
        selectedKey={space}
        onSelectionChange={(s) =>
          setSpace(
            s as ColorSpace
          )}
      >
        <MyItem id="rgb">
          RGB
        </MyItem>
        <MyItem id="hsl">
          HSL
        </MyItem>
        <MyItem id="hsb">
          HSB
        </MyItem>
      </MySelect>
      {getColorChannels(
        space
      ).map(
        (channel) => (
          <MyColorSlider
            key={channel}
            colorSpace={space}
            channel={channel}
          />
        )
      )}
      <MyColorSlider channel="alpha" />    </MyColorPicker>
  );
}
```

This example combines a [ColorWheel](https://react-spectrum.adobe.com/react-aria/ColorWheel.html) and [ColorArea](https://react-spectrum.adobe.com/react-aria/ColorArea.html) to build an HSB color picker.

```
import {MyColorWheel} from './ColorWheel';
import {MyColorArea} from './ColorArea';

<MyColorPicker label="Stroke color" defaultValue="#345">
  <MyColorWheel />
  <MyColorArea
    colorSpace="hsb"
    xChannel="saturation"
    yChannel="brightness"
    style={{
      width: '100px',
      height: '100px',
      position: 'absolute',
      top: 'calc(50% - 50px)',
      left: 'calc(50% - 50px)'
    }}
  />
</MyColorPicker>
```

```
import {MyColorWheel} from './ColorWheel';
import {MyColorArea} from './ColorArea';

<MyColorPicker label="Stroke color" defaultValue="#345">
  <MyColorWheel />
  <MyColorArea
    colorSpace="hsb"
    xChannel="saturation"
    yChannel="brightness"
    style={{
      width: '100px',
      height: '100px',
      position: 'absolute',
      top: 'calc(50% - 50px)',
      left: 'calc(50% - 50px)'
    }}
  />
</MyColorPicker>
```

```
import {MyColorWheel} from './ColorWheel';
import {MyColorArea} from './ColorArea';

<MyColorPicker
  label="Stroke color"
  defaultValue="#345"
>
  <MyColorWheel />
  <MyColorArea
    colorSpace="hsb"
    xChannel="saturation"
    yChannel="brightness"
    style={{
      width: '100px',
      height: '100px',
      position:
        'absolute',
      top:
        'calc(50% - 50px)',
      left:
        'calc(50% - 50px)'
    }}
  />
</MyColorPicker>
```

This example uses [ColorField](https://react-spectrum.adobe.com/react-aria/ColorField.html) to allow a user to edit the value of each color channel as a number, along with a [Select](https://react-spectrum.adobe.com/react-aria/Select.html) to switch between color spaces.

```
import type {ColorSpace} from 'react-aria-components';
import {getColorChannels} from 'react-aria-components';
import {MyColorArea} from './ColorArea';
import {MyColorSlider} from './ColorSlider';
import {MyItem, MySelect} from './Select';
import {MyColorField} from './ColorField';

function Example() {
  let [space, setSpace] = React.useState<ColorSpace>('rgb');

  return (
    <MyColorPicker label="Color" defaultValue="#f80">
      <MyColorArea
        colorSpace="hsb"
        xChannel="saturation"
        yChannel="brightness"
      />
      <MyColorSlider colorSpace="hsb" channel="hue" />
      <MySelect
        aria-label="Color space"
        selectedKey={space}
        onSelectionChange={(s) => setSpace(s as ColorSpace)}
      >
        <MyItem id="rgb">RGB</MyItem>
        <MyItem id="hsl">HSL</MyItem>
        <MyItem id="hsb">HSB</MyItem>
      </MySelect>
      <div style={{ display: 'flex', gap: 4, width: 192 }}>
        {getColorChannels(space).map((channel) => (
          <MyColorField
            key={channel}
            colorSpace={space}
            channel={channel}
            style={{ flex: 1 }}
          />
        ))}      </div>
    </MyColorPicker>
  );
}
```

```
import type {ColorSpace} from 'react-aria-components';
import {getColorChannels} from 'react-aria-components';
import {MyColorArea} from './ColorArea';
import {MyColorSlider} from './ColorSlider';
import {MyItem, MySelect} from './Select';
import {MyColorField} from './ColorField';

function Example() {
  let [space, setSpace] = React.useState<ColorSpace>('rgb');

  return (
    <MyColorPicker label="Color" defaultValue="#f80">
      <MyColorArea
        colorSpace="hsb"
        xChannel="saturation"
        yChannel="brightness"
      />
      <MyColorSlider colorSpace="hsb" channel="hue" />
      <MySelect
        aria-label="Color space"
        selectedKey={space}
        onSelectionChange={(s) => setSpace(s as ColorSpace)}
      >
        <MyItem id="rgb">RGB</MyItem>
        <MyItem id="hsl">HSL</MyItem>
        <MyItem id="hsb">HSB</MyItem>
      </MySelect>
      <div style={{ display: 'flex', gap: 4, width: 192 }}>
        {getColorChannels(space).map((channel) => (
          <MyColorField
            key={channel}
            colorSpace={space}
            channel={channel}
            style={{ flex: 1 }}
          />
        ))}      </div>
    </MyColorPicker>
  );
}
```

```
import type {ColorSpace} from 'react-aria-components';
import {getColorChannels} from 'react-aria-components';
import {MyColorArea} from './ColorArea';
import {MyColorSlider} from './ColorSlider';
import {
  MyItem,
  MySelect
} from './Select';
import {MyColorField} from './ColorField';

function Example() {
  let [space, setSpace] =
    React.useState<
      ColorSpace
    >('rgb');

  return (
    <MyColorPicker
      label="Color"
      defaultValue="#f80"
    >
      <MyColorArea
        colorSpace="hsb"
        xChannel="saturation"
        yChannel="brightness"
      />
      <MyColorSlider
        colorSpace="hsb"
        channel="hue"
      />
      <MySelect
        aria-label="Color space"
        selectedKey={space}
        onSelectionChange={(s) =>
          setSpace(
            s as ColorSpace
          )}
      >
        <MyItem id="rgb">
          RGB
        </MyItem>
        <MyItem id="hsl">
          HSL
        </MyItem>
        <MyItem id="hsb">
          HSB
        </MyItem>
      </MySelect>
      <div
        style={{
          display:
            'flex',
          gap: 4,
          width: 192
        }}
      >
        {getColorChannels(
          space
        ).map(
          (channel) => (
            <MyColorField
              key={channel}
              colorSpace={space}
              channel={channel}
              style={{
                flex: 1
              }}
            />
          )
        )}      </div>
    </MyColorPicker>
  );
}
```

This example uses a [ColorSwatchPicker](https://react-spectrum.adobe.com/react-aria/ColorSwatchPicker.html) to provide color presets for a color picker.

```
import {MyColorSwatchPicker, MyColorSwatchPickerItem} from './ColorSwatchPicker';

<MyColorPicker label="Color" defaultValue="#A00">
  <MyColorArea colorSpace="hsb" xChannel="saturation" yChannel="brightness" />
  <MyColorSlider colorSpace="hsb" channel="hue" />
  <MyColorSwatchPicker>
    <MyColorSwatchPickerItem color="#A00" />
    <MyColorSwatchPickerItem color="#f80" />
    <MyColorSwatchPickerItem color="#080" />
    <MyColorSwatchPickerItem color="#08f" />
    <MyColorSwatchPickerItem color="#008" />
  </MyColorSwatchPicker>
</MyColorPicker>
```

```
import {
  MyColorSwatchPicker,
  MyColorSwatchPickerItem
} from './ColorSwatchPicker';

<MyColorPicker label="Color" defaultValue="#A00">
  <MyColorArea
    colorSpace="hsb"
    xChannel="saturation"
    yChannel="brightness"
  />
  <MyColorSlider colorSpace="hsb" channel="hue" />
  <MyColorSwatchPicker>
    <MyColorSwatchPickerItem color="#A00" />
    <MyColorSwatchPickerItem color="#f80" />
    <MyColorSwatchPickerItem color="#080" />
    <MyColorSwatchPickerItem color="#08f" />
    <MyColorSwatchPickerItem color="#008" />
  </MyColorSwatchPicker>
</MyColorPicker>
```

```
import {
  MyColorSwatchPicker,
  MyColorSwatchPickerItem
} from './ColorSwatchPicker';

<MyColorPicker
  label="Color"
  defaultValue="#A00"
>
  <MyColorArea
    colorSpace="hsb"
    xChannel="saturation"
    yChannel="brightness"
  />
  <MyColorSlider
    colorSpace="hsb"
    channel="hue"
  />
  <MyColorSwatchPicker>
    <MyColorSwatchPickerItem color="#A00" />
    <MyColorSwatchPickerItem color="#f80" />
    <MyColorSwatchPickerItem color="#080" />
    <MyColorSwatchPickerItem color="#08f" />
    <MyColorSwatchPickerItem color="#008" />
  </MyColorSwatchPicker>
</MyColorPicker>
```

* * *

Name

Type

Description

`value`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) | [Color](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/color/src/index.d.ts:Color)`

The current value (controlled).

`defaultValue`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) | [Color](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/color/src/index.d.ts:Color)`

The default value (uncontrolled).

`children`

`[ChildrenOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ChildrenOrFunction)<T>`

The children of the component. A function may be provided to alter the children based on component state.

Events

Name

Type

Description

`onChange`

`( (value: [Color](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/color/src/index.d.ts:Color) )) => void`

Handler that is called when the value changes.

Layout

Name

Type

Description

`slot`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)`

A slot name for the component. Slots allow the component to receive props from a parent component. An explicit `null` value indicates that the local props completely override all props received from a parent.

* * *

All React Aria Components export a corresponding context that can be used to send props to them from a parent element. This enables you to build your own compositional APIs similar to those found in React Aria Components itself. You can send any prop or ref via context that you could pass to the corresponding component. The local props and ref on the component are merged with the ones passed via context, with the local props taking precedence (following the rules documented in [mergeProps](https://react-spectrum.adobe.com/react-aria/mergeProps.html)).

Component

Context

Props

Ref

`ColorPicker`

`ColorPickerContext`

`[ColorPickerProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/ColorPicker.tsx:ColorPickerProps)`

–

ColorPicker provides a `[ColorPickerState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/color/src/useColorPickerState.ts:ColorPickerState)` object to its children via `ColorPickerStateContext`. This can be used to access and manipulate the color area's state.

This example uses the browser [EyeDropper](https://developer.mozilla.org/en-US/docs/Web/API/EyeDropper_API) API (currently available in Chromium-based browsers) to allow users to sample on-screen colors. The ColorPicker is updated when the user chooses a color via the `ColorPickerStateContext`.

```
import {ColorPickerStateContext, parseColor} from 'react-aria-components';
import SamplerIcon from '@spectrum-icons/workflow/Sampler';

function EyeDropperButton() {
  let state = React.useContext(ColorPickerStateContext)!;

  // Check browser support.
  // @ts-ignore
  if (typeof EyeDropper === 'undefined') {
    return 'EyeDropper is not supported in your browser.';
  }

  return (
    <Button
      aria-label="Eye dropper"
      style={{ alignSelf: 'start' }}
      onPress={() => {
        // @ts-ignore
        new EyeDropper().open().then((result) =>
          state.setColor(parseColor(result.sRGBHex))
        );
      }}
    >
      <SamplerIcon size="S" />
    </Button>
  );
}

<MyColorPicker label="Color" defaultValue="#345">
  <MyColorArea colorSpace="hsb" xChannel="saturation" yChannel="brightness" />
  <MyColorSlider colorSpace="hsb" channel="hue" />
  <EyeDropperButton />
</MyColorPicker>
```

```
import {
  ColorPickerStateContext,
  parseColor
} from 'react-aria-components';
import SamplerIcon from '@spectrum-icons/workflow/Sampler';

function EyeDropperButton() {
  let state = React.useContext(ColorPickerStateContext)!;

  // Check browser support.
  // @ts-ignore
  if (typeof EyeDropper === 'undefined') {
    return 'EyeDropper is not supported in your browser.';
  }

  return (
    <Button
      aria-label="Eye dropper"
      style={{ alignSelf: 'start' }}
      onPress={() => {
        // @ts-ignore
        new EyeDropper().open().then((result) =>
          state.setColor(parseColor(result.sRGBHex))
        );
      }}
    >
      <SamplerIcon size="S" />
    </Button>
  );
}

<MyColorPicker label="Color" defaultValue="#345">
  <MyColorArea
    colorSpace="hsb"
    xChannel="saturation"
    yChannel="brightness"
  />
  <MyColorSlider colorSpace="hsb" channel="hue" />
  <EyeDropperButton />
</MyColorPicker>
```

```
import {
  ColorPickerStateContext,
  parseColor
} from 'react-aria-components';
import SamplerIcon from '@spectrum-icons/workflow/Sampler';

function EyeDropperButton() {
  let state = React
    .useContext(
      ColorPickerStateContext
    )!;

  // Check browser support.
  // @ts-ignore
  if (
    typeof EyeDropper ===
      'undefined'
  ) {
    return 'EyeDropper is not supported in your browser.';
  }

  return (
    <Button
      aria-label="Eye dropper"
      style={{
        alignSelf:
          'start'
      }}
      onPress={() => {
        // @ts-ignore
        new EyeDropper()
          .open().then(
            (result) =>
              state
                .setColor(
                  parseColor(
                    result
                      .sRGBHex
                  )
                )
          );
      }}
    >
      <SamplerIcon size="S" />
    </Button>
  );
}

<MyColorPicker
  label="Color"
  defaultValue="#345"
>
  <MyColorArea
    colorSpace="hsb"
    xChannel="saturation"
    yChannel="brightness"
  />
  <MyColorSlider
    colorSpace="hsb"
    channel="hue"
  />
  <EyeDropperButton />
</MyColorPicker>
```