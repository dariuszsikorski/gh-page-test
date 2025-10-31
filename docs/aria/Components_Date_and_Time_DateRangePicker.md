# DateRangePicker

**Source**: [https://react-spectrum.adobe.com/react-aria/DateRangePicker.html](https://react-spectrum.adobe.com/react-aria/DateRangePicker.html)

> Documentation for DateRangePicker in the React Aria package.

---

A date range picker combines two DateFields and a RangeCalendar popover to allow users to enter or select a date and time range.

* * *

```
import {Button, CalendarCell, CalendarGrid, DateInput, DateRangePicker, DateSegment, Dialog, Group, Heading, Label, Popover, RangeCalendar} from 'react-aria-components';
import {ChevronDown, ChevronLeft, ChevronRight} from 'lucide-react';

<DateRangePicker>
  <Label>Trip dates</Label>
  <Group>
    <DateInput slot="start">
      {(segment) => <DateSegment segment={segment} />}
    </DateInput>
    <span aria-hidden="true">–</span>
    <DateInput slot="end">
      {(segment) => <DateSegment segment={segment} />}
    </DateInput>
    <Button>
      <ChevronDown size={20} />
    </Button>
  </Group>
  <Popover>
    <Dialog>
      <RangeCalendar>
        <header>
          <Button slot="previous">
            <ChevronLeft size={20} />
          </Button>
          <Heading />
          <Button slot="next">
            <ChevronRight size={20} />
          </Button>
        </header>
        <CalendarGrid>
          {(date) => <CalendarCell date={date} />}
        </CalendarGrid>
      </RangeCalendar>
    </Dialog>
  </Popover>
</DateRangePicker>
```

```
import {
  Button,
  CalendarCell,
  CalendarGrid,
  DateInput,
  DateRangePicker,
  DateSegment,
  Dialog,
  Group,
  Heading,
  Label,
  Popover,
  RangeCalendar
} from 'react-aria-components';
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

<DateRangePicker>
  <Label>Trip dates</Label>
  <Group>
    <DateInput slot="start">
      {(segment) => <DateSegment segment={segment} />}
    </DateInput>
    <span aria-hidden="true">–</span>
    <DateInput slot="end">
      {(segment) => <DateSegment segment={segment} />}
    </DateInput>
    <Button>
      <ChevronDown size={20} />
    </Button>
  </Group>
  <Popover>
    <Dialog>
      <RangeCalendar>
        <header>
          <Button slot="previous">
            <ChevronLeft size={20} />
          </Button>
          <Heading />
          <Button slot="next">
            <ChevronRight size={20} />
          </Button>
        </header>
        <CalendarGrid>
          {(date) => <CalendarCell date={date} />}
        </CalendarGrid>
      </RangeCalendar>
    </Dialog>
  </Popover>
</DateRangePicker>
```

```
import {
  Button,
  CalendarCell,
  CalendarGrid,
  DateInput,
  DateRangePicker,
  DateSegment,
  Dialog,
  Group,
  Heading,
  Label,
  Popover,
  RangeCalendar
} from 'react-aria-components';
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

<DateRangePicker>
  <Label>
    Trip dates
  </Label>
  <Group>
    <DateInput slot="start">
      {(segment) => (
        <DateSegment
          segment={segment}
        />
      )}
    </DateInput>
    <span aria-hidden="true">
      –
    </span>
    <DateInput slot="end">
      {(segment) => (
        <DateSegment
          segment={segment}
        />
      )}
    </DateInput>
    <Button>
      <ChevronDown
        size={20}
      />
    </Button>
  </Group>
  <Popover>
    <Dialog>
      <RangeCalendar>
        <header>
          <Button slot="previous">
            <ChevronLeft
              size={20}
            />
          </Button>
          <Heading />
          <Button slot="next">
            <ChevronRight
              size={20}
            />
          </Button>
        </header>
        <CalendarGrid>
          {(date) => (
            <CalendarCell
              date={date}
            />
          )}
        </CalendarGrid>
      </RangeCalendar>
    </Dialog>
  </Popover>
</DateRangePicker>
```

Show CSS

```
@import "@react-aria/example-theme";

.react-aria-DateRangePicker {
  color: var(--text-color);

  .react-aria-Group {
    display: flex;
    align-items: center;
    width: fit-content;
    min-width: 220px;
    max-width: 100%;
    box-sizing: border-box;
    overflow: auto;
    position: relative;
    padding: 4px 4px 4px 8px;
    border: 1px solid var(--border-color);
    border-radius: 6px;
    background: var(--field-background);
    white-space: nowrap;

    &[data-pressed] {
      box-shadow: none;
      background: var(--highlight-background);
    }

    &[data-focus-within] {
      outline: 2px solid var(--focus-ring-color);
      outline-offset: -1px;
    }
  }

  [slot=start] + span {
    padding: 0 4px;
  }

  [slot=end] {
    margin-right: 2rem;
    flex: 1;
  }

  .react-aria-Button {
    background: var(--highlight-background);
    color: var(--highlight-foreground);
    border: 2px solid var(--field-background);
    forced-color-adjust: none;
    border-radius: 4px;
    border: none;
    margin-left: auto;
    width: 1.429rem;
    height: 1.429rem;
    padding: 0;
    font-size: 0.857rem;
    box-sizing: content-box;
    flex-shrink: 0;
    position: sticky;
    right: 0;

    &[data-focus-visible] {
      outline: 2px solid var(--focus-ring-color);
      outline-offset: 2px;
    }
  }

  .react-aria-DateInput {
    width: unset;
    min-width: unset;
    padding: unset;
    border: unset;
    outline: unset;
  }
}

.react-aria-Popover[data-trigger=DateRangePicker] {
  max-width: unset;
}
```

```
@import "@react-aria/example-theme";

.react-aria-DateRangePicker {
  color: var(--text-color);

  .react-aria-Group {
    display: flex;
    align-items: center;
    width: fit-content;
    min-width: 220px;
    max-width: 100%;
    box-sizing: border-box;
    overflow: auto;
    position: relative;
    padding: 4px 4px 4px 8px;
    border: 1px solid var(--border-color);
    border-radius: 6px;
    background: var(--field-background);
    white-space: nowrap;

    &[data-pressed] {
      box-shadow: none;
      background: var(--highlight-background);
    }

    &[data-focus-within] {
      outline: 2px solid var(--focus-ring-color);
      outline-offset: -1px;
    }
  }

  [slot=start] + span {
    padding: 0 4px;
  }

  [slot=end] {
    margin-right: 2rem;
    flex: 1;
  }

  .react-aria-Button {
    background: var(--highlight-background);
    color: var(--highlight-foreground);
    border: 2px solid var(--field-background);
    forced-color-adjust: none;
    border-radius: 4px;
    border: none;
    margin-left: auto;
    width: 1.429rem;
    height: 1.429rem;
    padding: 0;
    font-size: 0.857rem;
    box-sizing: content-box;
    flex-shrink: 0;
    position: sticky;
    right: 0;

    &[data-focus-visible] {
      outline: 2px solid var(--focus-ring-color);
      outline-offset: 2px;
    }
  }

  .react-aria-DateInput {
    width: unset;
    min-width: unset;
    padding: unset;
    border: unset;
    outline: unset;
  }
}

.react-aria-Popover[data-trigger=DateRangePicker] {
  max-width: unset;
}
```

```
@import "@react-aria/example-theme";

.react-aria-DateRangePicker {
  color: var(--text-color);

  .react-aria-Group {
    display: flex;
    align-items: center;
    width: fit-content;
    min-width: 220px;
    max-width: 100%;
    box-sizing: border-box;
    overflow: auto;
    position: relative;
    padding: 4px 4px 4px 8px;
    border: 1px solid var(--border-color);
    border-radius: 6px;
    background: var(--field-background);
    white-space: nowrap;

    &[data-pressed] {
      box-shadow: none;
      background: var(--highlight-background);
    }

    &[data-focus-within] {
      outline: 2px solid var(--focus-ring-color);
      outline-offset: -1px;
    }
  }

  [slot=start] + span {
    padding: 0 4px;
  }

  [slot=end] {
    margin-right: 2rem;
    flex: 1;
  }

  .react-aria-Button {
    background: var(--highlight-background);
    color: var(--highlight-foreground);
    border: 2px solid var(--field-background);
    forced-color-adjust: none;
    border-radius: 4px;
    border: none;
    margin-left: auto;
    width: 1.429rem;
    height: 1.429rem;
    padding: 0;
    font-size: 0.857rem;
    box-sizing: content-box;
    flex-shrink: 0;
    position: sticky;
    right: 0;

    &[data-focus-visible] {
      outline: 2px solid var(--focus-ring-color);
      outline-offset: 2px;
    }
  }

  .react-aria-DateInput {
    width: unset;
    min-width: unset;
    padding: unset;
    border: unset;
    outline: unset;
  }
}

.react-aria-Popover[data-trigger=DateRangePicker] {
  max-width: unset;
}
```

* * *

A date range picker can be built using two separate `<input type="date">` elements, but this is very limited in functionality, lacking in internationalization capabilities, inconsistent between browsers, and difficult to style. `DateRangePicker` helps achieve accessible and international date and time range pickers that can be styled as needed.

-   **Dates and times** – Support for dates and times with configurable granularity.
-   **International** – Support for 13 calendar systems used around the world, including Gregorian, Buddhist, Islamic, Persian, and more. Locale-specific formatting, number systems, hour cycles, and right-to-left support are available as well.
-   **Time zone aware** – Dates and times can optionally include a time zone. All modifications follow time zone rules such as daylight saving time.
-   **Accessible** – Each date and time unit is displayed as an individually focusable and editable segment, which allows users an easy way to edit dates using the keyboard, in any date format and locale. Users can also open a calendar popover to select date ranges in a standard month grid. Localized screen reader messages are included to announce when the selection and visible date range change.
-   **Touch friendly** – Date segments are editable using an easy to use numeric keypad, date ranges can be selected by dragging over dates in the calendar using a touch screen, and all interactions are accessible using touch-based screen readers.
-   **Validation** – Integrates with HTML forms, supporting required, minimum and maximum values, unavailable dates, custom validation functions, realtime validation, and server-side validation errors.
-   **Customizable** – As with all of React Aria, the DOM structure and styling of all elements can be fully customized.

Read our [blog post](https://react-spectrum.adobe.com/blog/date-and-time-pickers-for-all.html) for more details about the internationalization, accessibility, and user experience features implemented by `DateRangePicker`.

* * *

September 2021SMTWTF5789101314151619202122232412326272930628S111825412176Event dateGroupLabelButtonStart fieldEnd fieldCalendarDialog9 / 17 / 20219 / 6 / 2021 –

A date range picker consists of a label, and group containing two [date fields](https://react-spectrum.adobe.com/react-aria/DateField.html) and a button. Clicking the button opens a popup containing a [range calendar](https://react-spectrum.adobe.com/react-aria/RangeCalendar.html). The date fields include segments representing each unit of a date and time (e.g. years, months, days, etc.), each of which is individually focusable and editable using the keyboard. The calendar popup offers a more visual way of choosing a date range.

`DateRangePicker` also supports optional description and error message elements, which can be used to provide more context about the field, and any validation messages. These are linked with the input via the `aria-describedby` attribute.

```
import {Button, CalendarCell, CalendarGrid, CalendarGridBody, CalendarGridHeader, CalendarHeaderCell, DateInput, DateRangePicker, DateSegment, Dialog, FieldError, Group, Heading, Label, Popover, RangeCalendar, Text} from 'react-aria-components';

<DateRangePicker>
  <Label />
  <Group>
    <DateInput slot="start">
      {(segment) => <DateSegment segment={segment} />}
    </DateInput>
    <DateInput slot="end">
      {(segment) => <DateSegment segment={segment} />}
    </DateInput>
    <Button />
  </Group>
  <Text slot="description" />
  <FieldError />
  <Popover>
    <Dialog>
      <RangeCalendar>
        <Button slot="previous" />
        <Heading />
        <Button slot="next" />
        <CalendarGrid>
          <CalendarGridHeader>
            {(day) => <CalendarHeaderCell />}
          </CalendarGridHeader>
          <CalendarGridBody>
            {(date) => <CalendarCell date={date} />}
          </CalendarGridBody>
        </CalendarGrid>
        <Text slot="errorMessage" />
      </RangeCalendar>
    </Dialog>
  </Popover>
</DateRangePicker>
```

```
import {
  Button,
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHeader,
  CalendarHeaderCell,
  DateInput,
  DateRangePicker,
  DateSegment,
  Dialog,
  FieldError,
  Group,
  Heading,
  Label,
  Popover,
  RangeCalendar,
  Text
} from 'react-aria-components';

<DateRangePicker>
  <Label />
  <Group>
    <DateInput slot="start">
      {(segment) => <DateSegment segment={segment} />}
    </DateInput>
    <DateInput slot="end">
      {(segment) => <DateSegment segment={segment} />}
    </DateInput>
    <Button />
  </Group>
  <Text slot="description" />
  <FieldError />
  <Popover>
    <Dialog>
      <RangeCalendar>
        <Button slot="previous" />
        <Heading />
        <Button slot="next" />
        <CalendarGrid>
          <CalendarGridHeader>
            {(day) => <CalendarHeaderCell />}
          </CalendarGridHeader>
          <CalendarGridBody>
            {(date) => <CalendarCell date={date} />}
          </CalendarGridBody>
        </CalendarGrid>
        <Text slot="errorMessage" />
      </RangeCalendar>
    </Dialog>
  </Popover>
</DateRangePicker>
```

```
import {
  Button,
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHeader,
  CalendarHeaderCell,
  DateInput,
  DateRangePicker,
  DateSegment,
  Dialog,
  FieldError,
  Group,
  Heading,
  Label,
  Popover,
  RangeCalendar,
  Text
} from 'react-aria-components';

<DateRangePicker>
  <Label />
  <Group>
    <DateInput slot="start">
      {(segment) => (
        <DateSegment
          segment={segment}
        />
      )}
    </DateInput>
    <DateInput slot="end">
      {(segment) => (
        <DateSegment
          segment={segment}
        />
      )}
    </DateInput>
    <Button />
  </Group>
  <Text slot="description" />
  <FieldError />
  <Popover>
    <Dialog>
      <RangeCalendar>
        <Button slot="previous" />
        <Heading />
        <Button slot="next" />
        <CalendarGrid>
          <CalendarGridHeader>
            {(day) => (
              <CalendarHeaderCell />
            )}
          </CalendarGridHeader>
          <CalendarGridBody>
            {(date) => (
              <CalendarCell
                date={date}
              />
            )}
          </CalendarGridBody>
        </CalendarGrid>
        <Text slot="errorMessage" />
      </RangeCalendar>
    </Dialog>
  </Popover>
</DateRangePicker>
```

If the date range picker does not have a visible label, an `aria-label` or `aria-labelledby` prop must be passed instead to identify it to assistive technology.

Note that most of this anatomy is shared with [DatePicker](https://react-spectrum.adobe.com/react-aria/DatePicker.html), so you can reuse many components between them if you have both.

To ensure the proper date and time format in RTL locales, `DateInput` must have `display` set to either `inline`, `inline-block`, or `block`.

`DateRangePicker` makes use of the following concepts:

[

@internationalized/date

Represent and manipulate dates and times in a locale-aware manner.

](https://react-spectrum.adobe.com/internationalized/date/index.html)[

Forms

Validating and submitting form data, and integrating with form libraries.

](https://react-spectrum.adobe.com/react-aria/forms.html)

A `DateRangePicker` uses the following components, which may also be used standalone or reused in other components.

[

Label

A label provides context for an input element.

](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label)[

DateField

A date field allows a user to enter and edit date values using a keyboard.

](https://react-spectrum.adobe.com/react-aria/DateField.html)[

Button

A button allows a user to perform an action.

](https://react-spectrum.adobe.com/react-aria/Button.html)[

Popover

A popover displays content in context with a trigger element.

](https://react-spectrum.adobe.com/react-aria/Popover.html)[

Dialog

A dialog is an overlay shown above other content in an application.

](https://react-spectrum.adobe.com/react-aria/Dialog.html)[

RangeCalendar

A range calendar allows a user to select a contiguous range of dates.

](https://react-spectrum.adobe.com/react-aria/RangeCalendar.html)

* * *

To help kick-start your project, we offer starter kits that include example implementations of all React Aria components with various styling solutions. All components are fully styled, including support for dark mode, high contrast mode, and all UI states. Each starter comes with a pre-configured [Storybook](https://storybook.js.org/) that you can experiment with, or use as a starting point for your own component library.

* * *

If you will use a DateRangePicker in multiple places in your app, you can wrap all of the pieces into a reusable component. This way, the DOM structure, styling code, and other logic are defined in a single place and reused everywhere to ensure consistency.

This example wraps `DateRangePicker` and all of its children together into a single component which accepts a `label` prop, which is passed to the right place. It also shows how to use the `description` slot to render [help text](#description), and `FieldError` component to render [validation errors](#validation).

```
import type {DateRangePickerProps, DateValue, ValidationResult} from 'react-aria-components';
import {FieldError, Text} from 'react-aria-components';

interface MyDateRangePickerProps<T extends DateValue>
  extends DateRangePickerProps<T> {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
}

function MyDateRangePicker<T extends DateValue>(
  { label, description, errorMessage, firstDayOfWeek, ...props }:
    MyDateRangePickerProps<T>
) {
  return (
    <DateRangePicker {...props}>
      <Label>{label}</Label>
      <Group>
        <DateInput slot="start">
          {(segment) => <DateSegment segment={segment} />}
        </DateInput>
        <span aria-hidden="true">–</span>
        <DateInput slot="end">
          {(segment) => <DateSegment segment={segment} />}
        </DateInput>
        <Button>
          <ChevronDown size={20} />
        </Button>
      </Group>
      {description && <Text slot="description">{description}</Text>}
      <FieldError>{errorMessage}</FieldError>
      <Popover>
        <Dialog>
          <RangeCalendar firstDayOfWeek={firstDayOfWeek}>
            <header>
              <Button slot="previous">
                <ChevronLeft size={20} />
              </Button>
              <Heading />
              <Button slot="next">
                <ChevronRight size={20} />
              </Button>
            </header>
            <CalendarGrid>
              {(date) => <CalendarCell date={date} />}
            </CalendarGrid>
          </RangeCalendar>
        </Dialog>
      </Popover>
    </DateRangePicker>
  );
}

<MyDateRangePicker label="Event date" />
```

```
import type {
  DateRangePickerProps,
  DateValue,
  ValidationResult
} from 'react-aria-components';
import {FieldError, Text} from 'react-aria-components';

interface MyDateRangePickerProps<T extends DateValue>
  extends DateRangePickerProps<T> {
  label?: string;
  description?: string;
  errorMessage?:
    | string
    | ((validation: ValidationResult) => string);
}

function MyDateRangePicker<T extends DateValue>(
  {
    label,
    description,
    errorMessage,
    firstDayOfWeek,
    ...props
  }: MyDateRangePickerProps<T>
) {
  return (
    <DateRangePicker {...props}>
      <Label>{label}</Label>
      <Group>
        <DateInput slot="start">
          {(segment) => <DateSegment segment={segment} />}
        </DateInput>
        <span aria-hidden="true">–</span>
        <DateInput slot="end">
          {(segment) => <DateSegment segment={segment} />}
        </DateInput>
        <Button>
          <ChevronDown size={20} />
        </Button>
      </Group>
      {description && (
        <Text slot="description">{description}</Text>
      )}
      <FieldError>{errorMessage}</FieldError>
      <Popover>
        <Dialog>
          <RangeCalendar firstDayOfWeek={firstDayOfWeek}>
            <header>
              <Button slot="previous">
                <ChevronLeft size={20} />
              </Button>
              <Heading />
              <Button slot="next">
                <ChevronRight size={20} />
              </Button>
            </header>
            <CalendarGrid>
              {(date) => <CalendarCell date={date} />}
            </CalendarGrid>
          </RangeCalendar>
        </Dialog>
      </Popover>
    </DateRangePicker>
  );
}

<MyDateRangePicker label="Event date" />
```

```
import type {
  DateRangePickerProps,
  DateValue,
  ValidationResult
} from 'react-aria-components';
import {
  FieldError,
  Text
} from 'react-aria-components';

interface MyDateRangePickerProps<
  T extends DateValue
> extends
  DateRangePickerProps<
    T
  > {
  label?: string;
  description?: string;
  errorMessage?:
    | string
    | ((
      validation:
        ValidationResult
    ) => string);
}

function MyDateRangePicker<
  T extends DateValue
>({
  label,
  description,
  errorMessage,
  firstDayOfWeek,
  ...props
}: MyDateRangePickerProps<
  T
>) {
  return (
    <DateRangePicker
      {...props}
    >
      <Label>
        {label}
      </Label>
      <Group>
        <DateInput slot="start">
          {(segment) => (
            <DateSegment
              segment={segment}
            />
          )}
        </DateInput>
        <span aria-hidden="true">
          –
        </span>
        <DateInput slot="end">
          {(segment) => (
            <DateSegment
              segment={segment}
            />
          )}
        </DateInput>
        <Button>
          <ChevronDown
            size={20}
          />
        </Button>
      </Group>
      {description && (
        <Text slot="description">
          {description}
        </Text>
      )}
      <FieldError>
        {errorMessage}
      </FieldError>
      <Popover>
        <Dialog>
          <RangeCalendar
            firstDayOfWeek={firstDayOfWeek}
          >
            <header>
              <Button slot="previous">
                <ChevronLeft
                  size={20}
                />
              </Button>
              <Heading />
              <Button slot="next">
                <ChevronRight
                  size={20}
                />
              </Button>
            </header>
            <CalendarGrid>
              {(date) => (
                <CalendarCell
                  date={date}
                />
              )}
            </CalendarGrid>
          </RangeCalendar>
        </Dialog>
      </Popover>
    </DateRangePicker>
  );
}

<MyDateRangePicker label="Event date" />
```

* * *

A `DateRangePicker` displays a placeholder by default. An initial, uncontrolled value can be provided to the `DateRangePicker` using the `defaultValue` prop. Alternatively, a controlled value can be provided using the `value` prop.

Date ranges are objects with `start` and `end` properties containing date values, which are provided using objects in the [@internationalized/date](https://react-spectrum.adobe.com/internationalized/date/) package. This library handles correct international date manipulation across calendars, time zones, and other localization concerns. `DateRangePicker` supports values of the following types:

-   `[CalendarDate](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@internationalized/date/src/CalendarDate.ts:CalendarDate)` – a date without any time components. May be parsed from a string representation using the `[parseDate](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@internationalized/date/src/string.ts:parseDate)` function. Use this type to represent dates where the time is not important, such as a birthday or an all day calendar event.
-   `[CalendarDateTime](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@internationalized/date/src/CalendarDate.ts:CalendarDateTime)` – a date with a time, but not in any specific time zone. May be parsed from a string representation using the `[parseDateTime](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@internationalized/date/src/string.ts:parseDateTime)` function. Use this type to represent times that occur at the same local time regardless of the time zone, such as the time of New Years Eve fireworks which always occur at midnight. Most times are better stored as a `ZonedDateTime`.
-   `[ZonedDateTime](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@internationalized/date/src/CalendarDate.ts:ZonedDateTime)` – a date with a time in a specific time zone. May be parsed from a string representation using the `[parseZonedDateTime](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@internationalized/date/src/string.ts:parseZonedDateTime)`, `[parseAbsolute](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@internationalized/date/src/string.ts:parseAbsolute)`, or `[parseAbsoluteToLocal](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@internationalized/date/src/string.ts:parseAbsoluteToLocal)` functions. Use this type to represent an exact moment in time at a particular location on Earth.

```
import {parseDate} from '@internationalized/date';

function Example() {
  let [value, setValue] = React.useState({
    start: parseDate('2020-02-03'),
    end: parseDate('2020-02-08')
  });

  return (
    <>
      <MyDateRangePicker
        label="Date range (uncontrolled)"
        defaultValue={{
          start: parseDate('2020-02-03'),
          end: parseDate('2020-02-08')
        }} />
      <MyDateRangePicker
        label="Date range (controlled)"
        value={value}
        onChange={setValue} />
    </>
  );
}
```

```
import {parseDate} from '@internationalized/date';

function Example() {
  let [value, setValue] = React.useState({
    start: parseDate('2020-02-03'),
    end: parseDate('2020-02-08')
  });

  return (
    <>
      <MyDateRangePicker
        label="Date range (uncontrolled)"
        defaultValue={{
          start: parseDate('2020-02-03'),
          end: parseDate('2020-02-08')
        }} />
      <MyDateRangePicker
        label="Date range (controlled)"
        value={value}
        onChange={setValue} />
    </>
  );
}
```

```
import {parseDate} from '@internationalized/date';

function Example() {
  let [value, setValue] =
    React.useState({
      start: parseDate(
        '2020-02-03'
      ),
      end: parseDate(
        '2020-02-08'
      )
    });

  return (
    <>
      <MyDateRangePicker
        label="Date range (uncontrolled)"
        defaultValue={{
          start:
            parseDate(
              '2020-02-03'
            ),
          end: parseDate(
            '2020-02-08'
          )
        }}
      />
      <MyDateRangePicker
        label="Date range (controlled)"
        value={value}
        onChange={setValue}
      />
    </>
  );
}
```

`DateRangePicker` is time zone aware when `[ZonedDateTime](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@internationalized/date/src/CalendarDate.ts:ZonedDateTime)` objects are provided as the value. In this case, the time zone abbreviation is displayed, and time zone concerns such as daylight saving time are taken into account when the value is manipulated.

In most cases, your data will come from and be sent to a server as an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string. [@internationalized/date](https://react-spectrum.adobe.com/internationalized/date/) includes functions for parsing strings in multiple formats into `[ZonedDateTime](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@internationalized/date/src/CalendarDate.ts:ZonedDateTime)` objects. Which format you use will depend on what information you need to store.

-   `[parseZonedDateTime](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@internationalized/date/src/string.ts:parseZonedDateTime)` – This function parses a date with an explicit time zone and optional UTC offset attached (e.g. `"2021-11-07T00:45[America/Los_Angeles]"` or `"2021-11-07T00:45-07:00[America/Los_Angeles]"`). This format preserves the maximum amount of information. If the exact local time and time zone that a user selected is important, use this format. Storing the time zone and offset that was selected rather than converting to UTC ensures that the local time is correct regardless of daylight saving rule changes (e.g. if a locale abolishes DST). Examples where this applies include calendar events, reminders, and other times that occur in a particular location.
-   `[parseAbsolute](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@internationalized/date/src/string.ts:parseAbsolute)` – This function parses an absolute date and time that occurs at the same instant at all locations on Earth. It can be represented in UTC (e.g. `"2021-11-07T07:45:00Z"`), or stored with a particular offset (e.g. `"2021-11-07T07:45:00-07:00"`). A time zone identifier, e.g. `America/Los_Angeles`, must be passed, and the result will be converted into that time zone. Absolute times are the best way to represent events that occurred in the past, or future events where an exact time is needed, regardless of time zone.
-   `[parseAbsoluteToLocal](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@internationalized/date/src/string.ts:parseAbsoluteToLocal)` – This function parses an absolute date and time into the current user's local time zone. It is a shortcut for `parseAbsolute`, and accepts the same formats.

```
import {parseZonedDateTime} from '@internationalized/date';

<MyDateRangePicker
  label="Date range"
  defaultValue={{
    start: parseZonedDateTime('2022-11-07T00:45[America/Los_Angeles]'),
    end: parseZonedDateTime('2022-11-08T11:15[America/Los_Angeles]')
  }} />
```

```
import {parseZonedDateTime} from '@internationalized/date';

<MyDateRangePicker
  label="Date range"
  defaultValue={{
    start: parseZonedDateTime(
      '2022-11-07T00:45[America/Los_Angeles]'
    ),
    end: parseZonedDateTime(
      '2022-11-08T11:15[America/Los_Angeles]'
    )
  }}
/>
```

```
import {parseZonedDateTime} from '@internationalized/date';

<MyDateRangePicker
  label="Date range"
  defaultValue={{
    start:
      parseZonedDateTime(
        '2022-11-07T00:45[America/Los_Angeles]'
      ),
    end:
      parseZonedDateTime(
        '2022-11-08T11:15[America/Los_Angeles]'
      )
  }}
/>
```

`DateRangePicker` displays times in the time zone included in the `ZonedDateTime` object. The above example is always displayed in Pacific Standard Time because the `America/Los_Angeles` time zone identifier is provided. [@internationalized/date](https://react-spectrum.adobe.com/internationalized/date/) includes functions for converting dates between time zones, or parsing a date directly into a specific time zone or the user's local time zone, as shown below.

```
import {parseAbsoluteToLocal} from '@internationalized/date';

<MyDateRangePicker
  label="Date range"
  defaultValue={{
    start: parseAbsoluteToLocal('2021-11-07T07:45:00Z'),
    end: parseAbsoluteToLocal('2021-11-08T14:25:00Z')
  }}
/>
```

```
import {parseAbsoluteToLocal} from '@internationalized/date';

<MyDateRangePicker
  label="Date range"
  defaultValue={{
    start: parseAbsoluteToLocal('2021-11-07T07:45:00Z'),
    end: parseAbsoluteToLocal('2021-11-08T14:25:00Z')
  }}
/>
```

```
import {parseAbsoluteToLocal} from '@internationalized/date';

<MyDateRangePicker
  label="Date range"
  defaultValue={{
    start:
      parseAbsoluteToLocal(
        '2021-11-07T07:45:00Z'
      ),
    end:
      parseAbsoluteToLocal(
        '2021-11-08T14:25:00Z'
      )
  }}
/>
```

The `granularity` prop allows you to control the smallest unit that is displayed by `DateRangePicker`. By default, `CalendarDate` values are displayed with `"day"` granularity (year, month, and day), and `CalendarDateTime` and `ZonedDateTime` values are displayed with `"minute"` granularity. More granular time values can be displayed by setting the `granularity` prop to `"second"`.

In addition, when a value with a time is provided but you wish to only display the date, you can set the granularity to `"day"`. This has no effect on the actual value (it still has a time component), only on what fields are displayed. In the following example, two DateRangePickers are synchronized with the same value, but display different granularities.

```
function Example() {
  let [date, setDate] = React.useState({
    start: parseAbsoluteToLocal('2021-04-07T18:45:22Z'),
    end: parseAbsoluteToLocal('2021-04-08T20:00:00Z')
  });

  return (
    <>
      <MyDateRangePicker
        label="Date and time range"
        granularity="second"        value={date}
        onChange={setDate} />
      <MyDateRangePicker
        label="Date range"
        granularity="day"        value={date}
        onChange={setDate} />
    </>
  );
}
```

```
function Example() {
  let [date, setDate] = React.useState({
    start: parseAbsoluteToLocal('2021-04-07T18:45:22Z'),
    end: parseAbsoluteToLocal('2021-04-08T20:00:00Z')
  });

  return (
    <>
      <MyDateRangePicker
        label="Date and time range"
        granularity="second"        value={date}
        onChange={setDate} />
      <MyDateRangePicker
        label="Date range"
        granularity="day"        value={date}
        onChange={setDate} />
    </>
  );
}
```

```
function Example() {
  let [date, setDate] =
    React.useState({
      start:
        parseAbsoluteToLocal(
          '2021-04-07T18:45:22Z'
        ),
      end:
        parseAbsoluteToLocal(
          '2021-04-08T20:00:00Z'
        )
    });

  return (
    <>
      <MyDateRangePicker
        label="Date and time range"
        granularity="second"        value={date}
        onChange={setDate}
      />
      <MyDateRangePicker
        label="Date range"
        granularity="day"        value={date}
        onChange={setDate}
      />
    </>
  );
}
```

If no `value` or `defaultValue` prop is passed, then the `granularity` prop also affects which type of value is emitted from the `onChange` event. Note that by default, time values will not have a time zone because none was supplied. You can override this by setting the `placeholderValue` prop explicitly. Values emitted from `onChange` will use the time zone of the placeholder value.

```
import {now} from '@internationalized/date';

<MyDateRangePicker
  label="Date range"
  granularity="second" />
<MyDateRangePicker
  label="Date range"
  placeholderValue={now('America/New_York')}
  granularity="second" />
```

```
import {now} from '@internationalized/date';

<MyDateRangePicker
  label="Date range"
  granularity="second" />
<MyDateRangePicker
  label="Date range"
  placeholderValue={now('America/New_York')}
  granularity="second" />
```

```
import {now} from '@internationalized/date';

<MyDateRangePicker
  label="Date range"
  granularity="second"
/>
<MyDateRangePicker
  label="Date range"
  placeholderValue={now(
    'America/New_York'
  )}
  granularity="second"
/>
```

`DateRangePicker` supports selecting dates in many calendar systems used around the world, including Gregorian, Hebrew, Indian, Islamic, Buddhist, and more. Dates are automatically displayed in the appropriate calendar system for the user's locale. The calendar system can be overridden using the [Unicode calendar locale extension](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/calendar#adding_a_calendar_in_the_locale_string), passed to the [I18nProvider](https://react-spectrum.adobe.com/react-aria/I18nProvider.html) component.

Selected dates passed to `onChange` always use the same calendar system as the `value` or `defaultValue` prop. If no `value` or `defaultValue` is provided, then dates passed to `onChange` are always in the Gregorian calendar since this is the most commonly used. This means that even though the user selects dates in their local calendar system, applications are able to deal with dates from all users consistently.

The below example displays a `DateRangePicker` in the Hindi language, using the Indian calendar. Dates emitted from `onChange` are in the Gregorian calendar.

```
import {I18nProvider} from 'react-aria';
import type {DateRange} from 'react-aria-components';

function Example() {
  let [range, setRange] = React.useState<DateRange | null>(null);
  return (
    <I18nProvider locale="hi-IN-u-ca-indian">      <MyDateRangePicker label="Date range" value={range} onChange={setRange} />
      <p>Start date: {range?.start.toString()}</p>
      <p>End date: {range?.end.toString()}</p>
    </I18nProvider>
  );
}
```

```
import {I18nProvider} from 'react-aria';
import type {DateRange} from 'react-aria-components';

function Example() {
  let [range, setRange] = React.useState<DateRange | null>(
    null
  );
  return (
    <I18nProvider locale="hi-IN-u-ca-indian">      <MyDateRangePicker
        label="Date range"
        value={range}
        onChange={setRange}
      />
      <p>Start date: {range?.start.toString()}</p>
      <p>End date: {range?.end.toString()}</p>
    </I18nProvider>
  );
}
```

```
import {I18nProvider} from 'react-aria';
import type {DateRange} from 'react-aria-components';

function Example() {
  let [range, setRange] =
    React.useState<
      DateRange | null
    >(null);
  return (
    <I18nProvider locale="hi-IN-u-ca-indian">      <MyDateRangePicker
        label="Date range"
        value={range}
        onChange={setRange}
      />
      <p>
        Start date:{' '}
        {range?.start
          .toString()}
      </p>
      <p>
        End date:{' '}
        {range?.end
          .toString()}
      </p>
    </I18nProvider>
  );
}
```

DateRangePicker supports the `startName` and `endName` props for integration with HTML forms. The values will be submitted to the server as [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted strings according to the granularity of the value. For example, if the date range picker allows selecting only dates then strings such as `"2023-02-03"` will be submitted, and if it allows selecting times then strings such as `"2023-02-03T08:45:00"` will be submitted. See the [Value](#value) section above for more details about the supported value types.

```
<MyDateRangePicker
  label="Trip dates"
  startName="startDate"
  endName="endDate"
/>
```

```
<MyDateRangePicker
  label="Trip dates"
  startName="startDate"
  endName="endDate"
/>
```

```
<MyDateRangePicker
  label="Trip dates"
  startName="startDate"
  endName="endDate"
/>
```

* * *

`DateRangePicker` accepts an `onChange` prop which is triggered whenever the start or end date is edited by the user. The example below uses `onChange` to update a separate element with a formatted version of the date range in the user's locale and local time zone. This is done by converting the dates to native JavaScript `Date` objects to pass to the formatter.

```
import {useDateFormatter} from 'react-aria';
import {getLocalTimeZone} from '@internationalized/date';

function Example() {
  let [range, setRange] = React.useState({
    start: parseDate('2020-07-03'),
    end: parseDate('2020-07-10')
  });
  let formatter = useDateFormatter({ dateStyle: 'long' });

  return (
    <>
      <MyDateRangePicker label="Date range" value={range} onChange={setRange} />
      <p>
        Selected date: {range
          ? formatter.formatRange(
            range.start.toDate(getLocalTimeZone()),
            range.end.toDate(getLocalTimeZone())
          )
          : '--'}
      </p>
    </>
  );
}
```

```
import {useDateFormatter} from 'react-aria';
import {getLocalTimeZone} from '@internationalized/date';

function Example() {
  let [range, setRange] = React.useState({
    start: parseDate('2020-07-03'),
    end: parseDate('2020-07-10')
  });
  let formatter = useDateFormatter({ dateStyle: 'long' });

  return (
    <>
      <MyDateRangePicker
        label="Date range"
        value={range}
        onChange={setRange}
      />
      <p>
        Selected date: {range
          ? formatter.formatRange(
            range.start.toDate(getLocalTimeZone()),
            range.end.toDate(getLocalTimeZone())
          )
          : '--'}
      </p>
    </>
  );
}
```

```
import {useDateFormatter} from 'react-aria';
import {getLocalTimeZone} from '@internationalized/date';

function Example() {
  let [range, setRange] =
    React.useState({
      start: parseDate(
        '2020-07-03'
      ),
      end: parseDate(
        '2020-07-10'
      )
    });
  let formatter =
    useDateFormatter({
      dateStyle: 'long'
    });

  return (
    <>
      <MyDateRangePicker
        label="Date range"
        value={range}
        onChange={setRange}
      />
      <p>
        Selected date:
        {' '}
        {range
          ? formatter
            .formatRange(
              range.start
                .toDate(
                  getLocalTimeZone()
                ),
              range.end
                .toDate(
                  getLocalTimeZone()
                )
            )
          : '--'}
      </p>
    </>
  );
}
```

* * *

DateRangePicker supports the `isRequired` prop to ensure the user enters a value, as well as minimum and maximum values, and custom client and server-side validation. It can also be integrated with other form libraries. See the [Forms](https://react-spectrum.adobe.com/react-aria/forms.html) guide to learn more.

To display validation errors, add a `<FieldError>` element as a child of the DateRangePicker. This allows you to render error messages from all of the above sources with consistent custom styles.

```
import {Form, FieldError} from 'react-aria-components';

<Form>
  <DateRangePicker startName="startDate" endName="endDate" isRequired>    <Label>Trip dates</Label>
    <Group>
      <DateInput slot="start">
        {segment => <DateSegment segment={segment} />}
      </DateInput>
      <span aria-hidden="true">–</span>
      <DateInput slot="end">
        {segment => <DateSegment segment={segment} />}
      </DateInput>
      <Button><ChevronDown size={20} /></Button>
    </Group>
    <FieldError />    <Popover>
      <Dialog>
        <RangeCalendar>
          <header>
            <Button slot="previous"><ChevronLeft size={20} /></Button>
            <Heading />
            <Button slot="next"><ChevronRight size={20} /></Button>
          </header>
          <CalendarGrid>
            {date => <CalendarCell date={date} />}
          </CalendarGrid>
        </RangeCalendar>
      </Dialog>
    </Popover>
  </DateRangePicker>
  <Button type="submit">Submit</Button>
</Form>
```

```
import {FieldError, Form} from 'react-aria-components';

<Form>
  <DateRangePicker
    startName="startDate"
    endName="endDate"
    isRequired
  >    <Label>Trip dates</Label>
    <Group>
      <DateInput slot="start">
        {(segment) => <DateSegment segment={segment} />}
      </DateInput>
      <span aria-hidden="true">–</span>
      <DateInput slot="end">
        {(segment) => <DateSegment segment={segment} />}
      </DateInput>
      <Button>
        <ChevronDown size={20} />
      </Button>
    </Group>
    <FieldError />    <Popover>
      <Dialog>
        <RangeCalendar>
          <header>
            <Button slot="previous">
              <ChevronLeft size={20} />
            </Button>
            <Heading />
            <Button slot="next">
              <ChevronRight size={20} />
            </Button>
          </header>
          <CalendarGrid>
            {(date) => <CalendarCell date={date} />}
          </CalendarGrid>
        </RangeCalendar>
      </Dialog>
    </Popover>
  </DateRangePicker>
  <Button type="submit">Submit</Button>
</Form>
```

```
import {
  FieldError,
  Form
} from 'react-aria-components';

<Form>
  <DateRangePicker
    startName="startDate"
    endName="endDate"
    isRequired
  >    <Label>
      Trip dates
    </Label>
    <Group>
      <DateInput slot="start">
        {(segment) => (
          <DateSegment
            segment={segment}
          />
        )}
      </DateInput>
      <span aria-hidden="true">
        –
      </span>
      <DateInput slot="end">
        {(segment) => (
          <DateSegment
            segment={segment}
          />
        )}
      </DateInput>
      <Button>
        <ChevronDown
          size={20}
        />
      </Button>
    </Group>
    <FieldError />    <Popover>
      <Dialog>
        <RangeCalendar>
          <header>
            <Button slot="previous">
              <ChevronLeft
                size={20}
              />
            </Button>
            <Heading />
            <Button slot="next">
              <ChevronRight
                size={20}
              />
            </Button>
          </header>
          <CalendarGrid>
            {(date) => (
              <CalendarCell
                date={date}
              />
            )}
          </CalendarGrid>
        </RangeCalendar>
      </Dialog>
    </Popover>
  </DateRangePicker>
  <Button type="submit">
    Submit
  </Button>
</Form>
```

Show CSS

```
.react-aria-DateRangePicker {
  &[data-invalid] {
    [slot=end]:after {
      content: '🚫' / '';
      content: '🚫';
      alt: ' ';
      flex: 1;
      text-align: end;
      margin-left: 1.5rem;
      margin-right: -1.5rem;
    }
  }

  .react-aria-FieldError {
    font-size: 12px;
    color: var(--invalid-color);
  }
}
```

```
.react-aria-DateRangePicker {
  &[data-invalid] {
    [slot=end]:after {
      content: '🚫' / '';
      content: '🚫';
      alt: ' ';
      flex: 1;
      text-align: end;
      margin-left: 1.5rem;
      margin-right: -1.5rem;
    }
  }

  .react-aria-FieldError {
    font-size: 12px;
    color: var(--invalid-color);
  }
}
```

```
.react-aria-DateRangePicker {
  &[data-invalid] {
    [slot=end]:after {
      content: '🚫' / '';
      content: '🚫';
      alt: ' ';
      flex: 1;
      text-align: end;
      margin-left: 1.5rem;
      margin-right: -1.5rem;
    }
  }

  .react-aria-FieldError {
    font-size: 12px;
    color: var(--invalid-color);
  }
}
```

By default, `FieldError` displays default validation messages provided by the browser. See [Customizing error messages](https://react-spectrum.adobe.com/react-aria/forms.html#customizing-error-messages) in the Forms guide to learn how to provide your own custom errors.

### Minimum and maximum values[#](#minimum-and-maximum-values)

The `minValue` and `maxValue` props can also be used to ensure the value is within a specific range. `DateRangePicker` also validates that the end date is after the start date. This example only accepts dates after today.

```
import {today} from '@internationalized/date';

<Form>
  <MyDateRangePicker
    label="Trip dates"
    minValue={today(getLocalTimeZone())}    defaultValue={{
      start: parseDate('2022-02-03'),
      end: parseDate('2022-05-03')
    }} />
  <Button type="submit">Submit</Button>
</Form>
```

```
import {today} from '@internationalized/date';

<Form>
  <MyDateRangePicker
    label="Trip dates"
    minValue={today(getLocalTimeZone())}    defaultValue={{
      start: parseDate('2022-02-03'),
      end: parseDate('2022-05-03')
    }} />
  <Button type="submit">Submit</Button>
</Form>
```

```
import {today} from '@internationalized/date';

<Form>
  <MyDateRangePicker
    label="Trip dates"
    minValue={today(
      getLocalTimeZone()
    )}    defaultValue={{
      start: parseDate(
        '2022-02-03'
      ),
      end: parseDate(
        '2022-05-03'
      )
    }}
  />
  <Button type="submit">
    Submit
  </Button>
</Form>
```

The `validate` function can be used to perform custom validation logic. It receives the current date range, and should return a string or array of strings representing one or more error messages if the value is invalid.

This example validates that the selected date range is a maximum of 1 week in duration.

```
<Form>
  <MyDateRangePicker
    label="Trip dates"
    validate={(range) =>
      range?.end.compare(range.start) > 7
        ? 'Maximum stay duration is 1 week.'
        : null}    defaultValue={{
      start: today(getLocalTimeZone()),
      end: today(getLocalTimeZone()).add({ weeks: 1, days: 3 })
    }}
  />
  <Button type="submit">Submit</Button>
</Form>
```

```
<Form>
  <MyDateRangePicker
    label="Trip dates"
    validate={(range) =>
      range?.end.compare(range.start) > 7
        ? 'Maximum stay duration is 1 week.'
        : null}    defaultValue={{
      start: today(getLocalTimeZone()),
      end: today(getLocalTimeZone()).add({
        weeks: 1,
        days: 3
      })
    }}
  />
  <Button type="submit">Submit</Button>
</Form>
```

```
<Form>
  <MyDateRangePicker
    label="Trip dates"
    validate={(range) =>
      range?.end
          .compare(
            range.start
          ) > 7
        ? 'Maximum stay duration is 1 week.'
        : null}    defaultValue={{
      start: today(
        getLocalTimeZone()
      ),
      end: today(
        getLocalTimeZone()
      ).add({
        weeks: 1,
        days: 3
      })
    }}
  />
  <Button type="submit">
    Submit
  </Button>
</Form>
```

`DateRangePicker` supports marking certain dates as _unavailable_. These dates remain focusable with the keyboard in the calendar so that navigation is consistent, but cannot be selected by the user. The `isDateUnavailable` prop accepts a callback that is called to evaluate whether each visible date is unavailable.

Note that by default, users may not select non-contiguous ranges, i.e. ranges that contain unavailable dates within them. Once a start date is selected in the calendar, enabled dates will be restricted to subsequent dates until an unavailable date is hit. While this is handled automatically in the calendar, additional validation logic must be provided to ensure an invalid state is displayed in the date field. This can be achieved using the `validate` prop. See [below](#non-contiguous-ranges) for an example of how to allow non-contiguous ranges.

This example includes multiple unavailable date ranges, e.g. dates when a rental house is not available. The `minValue` prop is also used to prevent selecting dates before today. The `validate` prop is used to mark selected date ranges with unavailable dates in the middle as invalid.

```
import {today} from '@internationalized/date';

function Example() {
  let now = today(getLocalTimeZone());
  let disabledRanges = [
    [now, now.add({ days: 5 })],
    [now.add({ days: 14 }), now.add({ days: 16 })],
    [now.add({ days: 23 }), now.add({ days: 24 })]
  ];

  return (
    <MyDateRangePicker
      label="Trip dates"
      minValue={today(getLocalTimeZone())}
      isDateUnavailable={(date) =>
        disabledRanges.some((interval) =>
          date.compare(interval[0]) >= 0 && date.compare(interval[1]) <= 0
        )}
      validate={(value) =>
        disabledRanges.some((interval) =>
            value && value.end.compare(interval[0]) >= 0 &&
            value.start.compare(interval[1]) <= 0
          )
          ? 'Selected date range may not include unavailable dates.'
          : null}    />
  );
}
```

```
import {today} from '@internationalized/date';

function Example() {
  let now = today(getLocalTimeZone());
  let disabledRanges = [
    [now, now.add({ days: 5 })],
    [now.add({ days: 14 }), now.add({ days: 16 })],
    [now.add({ days: 23 }), now.add({ days: 24 })]
  ];

  return (
    <MyDateRangePicker
      label="Trip dates"
      minValue={today(getLocalTimeZone())}
      isDateUnavailable={(date) =>
        disabledRanges.some((interval) =>
          date.compare(interval[0]) >= 0 &&
          date.compare(interval[1]) <= 0
        )}
      validate={(value) =>
        disabledRanges.some((interval) =>
            value && value.end.compare(interval[0]) >= 0 &&
            value.start.compare(interval[1]) <= 0
          )
          ? 'Selected date range may not include unavailable dates.'
          : null}    />
  );
}
```

```
import {today} from '@internationalized/date';

function Example() {
  let now = today(
    getLocalTimeZone()
  );
  let disabledRanges = [
    [
      now,
      now.add({
        days: 5
      })
    ],
    [
      now.add({
        days: 14
      }),
      now.add({
        days: 16
      })
    ],
    [
      now.add({
        days: 23
      }),
      now.add({
        days: 24
      })
    ]
  ];

  return (
    <MyDateRangePicker
      label="Trip dates"
      minValue={today(
        getLocalTimeZone()
      )}
      isDateUnavailable={(date) =>
        disabledRanges
          .some((
            interval
          ) =>
            date.compare(
                interval[
                  0
                ]
              ) >= 0 &&
            date.compare(
                interval[
                  1
                ]
              ) <= 0
          )}
      validate={(value) =>
        disabledRanges
            .some(
              (interval) =>
                value &&
                value.end
                    .compare(
                      interval[
                        0
                      ]
                    ) >=
                  0 &&
                value
                    .start
                    .compare(
                      interval[
                        1
                      ]
                    ) <=
                  0
            )
          ? 'Selected date range may not include unavailable dates.'
          : null}    />
  );
}
```

The `allowsNonContiguousRanges` prop enables a range to be selected even if there are unavailable dates in the middle. The value emitted in the `onChange` event will still be a single range with a `start` and `end` property, but unavailable dates will not be displayed as selected. It is up to applications to split the full selected range into multiple as needed for business logic.

This example prevents selecting weekends, but allows selecting ranges that span multiple weeks.

```
import {useLocale} from 'react-aria';
import {isWeekend} from '@internationalized/date';

function Example() {
  let { locale } = useLocale();

  return (
    <MyDateRangePicker
      label="Time off request"
      isDateUnavailable={(date) => isWeekend(date, locale)}
      allowsNonContiguousRanges
    />  );
}
```

```
import {useLocale} from 'react-aria';
import {isWeekend} from '@internationalized/date';

function Example() {
  let { locale } = useLocale();

  return (
    <MyDateRangePicker
      label="Time off request"
      isDateUnavailable={(date) => isWeekend(date, locale)}
      allowsNonContiguousRanges
    />  );
}
```

```
import {useLocale} from 'react-aria';
import {isWeekend} from '@internationalized/date';

function Example() {
  let { locale } =
    useLocale();

  return (
    <MyDateRangePicker
      label="Time off request"
      isDateUnavailable={(date) =>
        isWeekend(
          date,
          locale
        )}
      allowsNonContiguousRanges
    />  );
}
```

The `description` slot can be used to associate additional help text with a date range picker.

```
<DateRangePicker>
  <Label>Trip dates</Label>
  <Group>
    <DateInput slot="start">
      {segment => <DateSegment segment={segment} />}
    </DateInput>
    <span aria-hidden="true">–</span>
    <DateInput slot="end">
      {segment => <DateSegment segment={segment} />}
    </DateInput>
    <Button><ChevronDown size={20} /></Button>
  </Group>
  <Text slot="description">Please your vacation dates.</Text>  <Popover>
    <Dialog>
      <RangeCalendar>
        <header>
          <Button slot="previous"><ChevronLeft size={20} /></Button>
          <Heading />
          <Button slot="next"><ChevronRight size={20} /></Button>
        </header>
        <CalendarGrid>
          {date => <CalendarCell date={date} />}
        </CalendarGrid>
      </RangeCalendar>
    </Dialog>
  </Popover>
</DateRangePicker>
```

```
<DateRangePicker>
  <Label>Trip dates</Label>
  <Group>
    <DateInput slot="start">
      {(segment) => <DateSegment segment={segment} />}
    </DateInput>
    <span aria-hidden="true">–</span>
    <DateInput slot="end">
      {(segment) => <DateSegment segment={segment} />}
    </DateInput>
    <Button>
      <ChevronDown size={20} />
    </Button>
  </Group>
  <Text slot="description">
    Please your vacation dates.
  </Text>  <Popover>
    <Dialog>
      <RangeCalendar>
        <header>
          <Button slot="previous">
            <ChevronLeft size={20} />
          </Button>
          <Heading />
          <Button slot="next">
            <ChevronRight size={20} />
          </Button>
        </header>
        <CalendarGrid>
          {(date) => <CalendarCell date={date} />}
        </CalendarGrid>
      </RangeCalendar>
    </Dialog>
  </Popover>
</DateRangePicker>
```

```
<DateRangePicker>
  <Label>
    Trip dates
  </Label>
  <Group>
    <DateInput slot="start">
      {(segment) => (
        <DateSegment
          segment={segment}
        />
      )}
    </DateInput>
    <span aria-hidden="true">
      –
    </span>
    <DateInput slot="end">
      {(segment) => (
        <DateSegment
          segment={segment}
        />
      )}
    </DateInput>
    <Button>
      <ChevronDown
        size={20}
      />
    </Button>
  </Group>
  <Text slot="description">
    Please your
    vacation dates.
  </Text>  <Popover>
    <Dialog>
      <RangeCalendar>
        <header>
          <Button slot="previous">
            <ChevronLeft
              size={20}
            />
          </Button>
          <Heading />
          <Button slot="next">
            <ChevronRight
              size={20}
            />
          </Button>
        </header>
        <CalendarGrid>
          {(date) => (
            <CalendarCell
              date={date}
            />
          )}
        </CalendarGrid>
      </RangeCalendar>
    </Dialog>
  </Popover>
</DateRangePicker>
```

Show CSS

```
.react-aria-DateRangePicker {
  [slot=description] {
    font-size: 12px;
  }
}
```

```
.react-aria-DateRangePicker {
  [slot=description] {
    font-size: 12px;
  }
}
```

```
.react-aria-DateRangePicker {
  [slot=description] {
    font-size: 12px;
  }
}
```

* * *

When no value is set, a placeholder is shown. The format of the placeholder is influenced by the `granularity` and `placeholderValue` props. `placeholderValue` also controls the default values of each segment when the user first interacts with them, e.g. using the up and down arrow keys, as well as the default month shown in the calendar popover. By default, the `placeholderValue` is the current date at midnight, but you can set it to a more appropriate value if needed.

```
import {CalendarDate} from '@internationalized/date';

<MyDateRangePicker
  label="Date range"
  placeholderValue={new CalendarDate(1980, 1, 1)}
/>
```

```
import {CalendarDate} from '@internationalized/date';

<MyDateRangePicker
  label="Date range"
  placeholderValue={new CalendarDate(1980, 1, 1)}
/>
```

```
import {CalendarDate} from '@internationalized/date';

<MyDateRangePicker
  label="Date range"
  placeholderValue={new CalendarDate(
    1980,
    1,
    1
  )}
/>
```

When `ZonedDateTime` objects are provided as the value of to `DateRangePicker`, the time zone abbreviation is displayed by default. However, if this is displayed elsewhere or implicit based on the usecase, it can be hidden using the `hideTimeZone` option.

```
<MyDateRangePicker
  label="Date range"
  defaultValue={{
    start: parseZonedDateTime('2022-11-07T10:45[America/Los_Angeles]'),
    end: parseZonedDateTime('2022-11-08T19:45[America/Los_Angeles]')
  }}
  hideTimeZone />
```

```
<MyDateRangePicker
  label="Date range"
  defaultValue={{
    start: parseZonedDateTime(
      '2022-11-07T10:45[America/Los_Angeles]'
    ),
    end: parseZonedDateTime(
      '2022-11-08T19:45[America/Los_Angeles]'
    )
  }}
  hideTimeZone
/>
```

```
<MyDateRangePicker
  label="Date range"
  defaultValue={{
    start:
      parseZonedDateTime(
        '2022-11-07T10:45[America/Los_Angeles]'
      ),
    end:
      parseZonedDateTime(
        '2022-11-08T19:45[America/Los_Angeles]'
      )
  }}
  hideTimeZone
/>
```

By default, `DateRangePicker` displays times in either 12 or 24 hour hour format depending on the user's locale. However, this can be overridden using the `hourCycle` prop if needed for a specific usecase. This example forces the `DateRangePicker` to use 24-hour time, regardless of the locale.

```
<MyDateRangePicker
  label="Date range"
  granularity="minute"
  hourCycle={24} />
```

```
<MyDateRangePicker
  label="Date range"
  granularity="minute"
  hourCycle={24} />
```

```
<MyDateRangePicker
  label="Date range"
  granularity="minute"
  hourCycle={24} />
```

By default, the first day of the week is automatically set based on the current locale. This can be changed by setting the `firstDayOfWeek` prop to `'sun'`, `'mon'`, `'tue'`, `'wed'`, `'thu'`, `'fri'`, or `'sat'`.

```
<MyDateRangePicker label="Date range" firstDayOfWeek="mon" />
```

```
<MyDateRangePicker
  label="Date range"
  firstDayOfWeek="mon"
/>
```

```
<MyDateRangePicker
  label="Date range"
  firstDayOfWeek="mon"
/>
```

* * *

Name

Type

Default

Description

`pageBehavior`

`[PageBehavior](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/calendar/src/index.d.ts:PageBehavior)`

`visible`

Controls the behavior of paging. Pagination either works by advancing the visible page by visibleDuration (default) or one unit of visibleDuration.

`firstDayOfWeek`

`'sun' | 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat'`

—

The day that starts the week.

`minValue`

`[DateValue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/datepicker/src/index.d.ts:DateValue) | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)`

—

The minimum allowed date that a user may select.

`maxValue`

`[DateValue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/datepicker/src/index.d.ts:DateValue) | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)`

—

The maximum allowed date that a user may select.

`isDateUnavailable`

`( (date: [DateValue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/datepicker/src/index.d.ts:DateValue) )) => [boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Callback that is called for each date of the calendar. If it returns true, then the date is unavailable.

`placeholderValue`

`[DateValue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/datepicker/src/index.d.ts:DateValue) | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)`

—

A placeholder date that influences the format of the placeholder shown when no value is selected. Defaults to today's date at midnight.

`hourCycle`

`12 | 24`

—

Whether to display the time in 12 or 24 hour format. By default, this is determined by the user's locale.

`granularity`

`[Granularity](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/datepicker/src/index.d.ts:Granularity)`

—

Determines the smallest unit that is displayed in the date picker. By default, this is `"day"` for dates, and `"minute"` for times.

`hideTimeZone`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

`false`

Whether to hide the time zone abbreviation.

`shouldForceLeadingZeros`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether to always show leading zeros in the month, day, and hour fields. By default, this is determined by the user's locale.

`isDisabled`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the input is disabled.

`isReadOnly`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the input can be selected but not changed by the user.

`isRequired`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether user input is required on the input before form submission.

`isInvalid`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the input value is invalid.

`autoFocus`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the element should receive focus on render.

`isOpen`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the overlay is open by default (controlled).

`defaultOpen`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the overlay is open by default (uncontrolled).

`form`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

The `<form>` element to associate the input with. The value of this attribute must be the id of a `<form>` in the same document. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#form).

`allowsNonContiguousRanges`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

When combined with `isDateUnavailable`, determines whether non-contiguous ranges, i.e. ranges containing unavailable dates, may be selected.

`startName`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

The name of the start date input element, used when submitting an HTML form. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname).

`endName`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

The name of the end date input element, used when submitting an HTML form. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname).

`validate`

`( (value: [RangeValue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/inputs.d.ts:RangeValue)<[MappedDateValue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/datepicker/src/index.d.ts:MappedDateValue)<[DateValue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/datepicker/src/index.d.ts:DateValue)>> )) => [ValidationError](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/inputs.d.ts:ValidationError) | true | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null) | [undefined](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined)`

—

A function that returns an error message if a given value is invalid. Validation errors are displayed to the user when the form is submitted if `validationBehavior="native"`. For realtime validation, use the `isInvalid` prop instead.

`value`

`[RangeValue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/inputs.d.ts:RangeValue)<[DateValue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/datepicker/src/index.d.ts:DateValue)> | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)`

—

The current value (controlled).

`defaultValue`

`[RangeValue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/inputs.d.ts:RangeValue)<[DateValue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/datepicker/src/index.d.ts:DateValue)> | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)`

—

The default value (uncontrolled).

`shouldCloseOnSelect`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) | () => [boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

`true`

Determines whether the date picker popover should close automatically when a date is selected.

`validationBehavior`

`'native' | 'aria'`

`'native'`

Whether to use native HTML form validation to prevent form submission when the value is missing or invalid, or mark the field as required or invalid via ARIA.

`children`

`[ChildrenOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ChildrenOrFunction)<[DateRangePickerRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/DatePicker.tsx:DateRangePickerRenderProps)>`

—

The children of the component. A function may be provided to alter the children based on component state.

`className`

`[ClassNameOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ClassNameOrFunction)<[DateRangePickerRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/DatePicker.tsx:DateRangePickerRenderProps)>`

—

The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.

`style`

`[StyleOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:StyleOrFunction)<[DateRangePickerRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/DatePicker.tsx:DateRangePickerRenderProps)>`

—

The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.

Events

Name

Type

Description

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

`onOpenChange`

`( (isOpen: [boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) )) => void`

Handler that is called when the overlay's open state changes.

`onChange`

`( (value: [RangeValue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/inputs.d.ts:RangeValue)<[MappedDateValue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/datepicker/src/index.d.ts:MappedDateValue)<[DateValue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/datepicker/src/index.d.ts:DateValue)>> |  | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null) )) => void`

Handler that is called when the value changes.

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

A `<Label>` accepts all HTML attributes.

A `<Group>` accepts all HTML attributes.

The `<DateInput>` component renders a group of date segments. It accepts a function as its `children`, which is called to render a `<DateSegment>` for each segment. The `slot="start"` and `slot="end"` props distinguish the two instances within a `DateRangePicker`.

Show props

Name

Type

Description

`children`

`( (segment: [DateSegment](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/datepicker/src/useDateFieldState.ts:DateSegment) )) => [ReactElement](https://reactjs.org/docs/rendering-elements.html)`

`className`

`[ClassNameOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ClassNameOrFunction)<[DateInputRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/DateField.tsx:DateInputRenderProps)>`

The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.

`style`

`[StyleOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:StyleOrFunction)<[DateInputRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/DateField.tsx:DateInputRenderProps)>`

The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.

EventsLayout

Name

Type

Description

`slot`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)`

A slot name for the component. Slots allow the component to receive props from a parent component. An explicit `null` value indicates that the local props completely override all props received from a parent.

Positioning

The `<DateSegment>` component renders an individual segment.

Show props

Name

Type

Description

`segment`

`[DateSegment](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/datepicker/src/useDateFieldState.ts:DateSegment)`

`children`

`[ChildrenOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ChildrenOrFunction)<[DateSegmentRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/DateField.tsx:DateSegmentRenderProps)>`

The children of the component. A function may be provided to alter the children based on component state.

`className`

`[ClassNameOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ClassNameOrFunction)<[DateSegmentRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/DateField.tsx:DateSegmentRenderProps)>`

The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.

`style`

`[StyleOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:StyleOrFunction)<[DateSegmentRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/DateField.tsx:DateSegmentRenderProps)>`

The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.

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

Positioning

A `<Button>` accepts its contents as `children`. Other props such as `onPress` and `isDisabled` will be set by the `DateRangePicker` or `RangeCalendar`.

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

A `<FieldError>` displays validation errors.

Show props

Name

Type

Description

`children`

`[ChildrenOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ChildrenOrFunction)<[FieldErrorRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/FieldError.tsx:FieldErrorRenderProps)>`

The children of the component. A function may be provided to alter the children based on component state.

`className`

`[ClassNameOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ClassNameOrFunction)<[FieldErrorRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/FieldError.tsx:FieldErrorRenderProps)>`

The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.

`style`

`[StyleOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:StyleOrFunction)<[FieldErrorRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/FieldError.tsx:FieldErrorRenderProps)>`

The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.

EventsPositioningAccessibility

Name

Type

Description

`id`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

The element's unique identifier. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id).

A `<Popover>` is an overlay to hold the `<Calendar>`, positioned relative to the `<Group>`. By default, it has a `placement` of `bottom start` within a `<DateRangePicker>`, but this and other positioning properties may be customized.

Show props

Name

Type

Default

Description

`trigger`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

The name of the component that triggered the popover. This is reflected on the element as the `data-trigger` attribute, and can be used to provide specific styles for the popover depending on which element triggered it.

`triggerRef`

`[RefObject](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/refs.d.ts:RefObject)<[Element](https://developer.mozilla.org/docs/Web/API/Element) | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)>`

—

The ref for the element which the popover positions itself with respect to.

When used within a trigger component such as DialogTrigger, MenuTrigger, Select, etc., this is set automatically. It is only required when used standalone.

`isEntering`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the popover is currently performing an entry animation.

`isExiting`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the popover is currently performing an exit animation.

`offset`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)`

`8`

The additional offset applied along the main axis between the element and its anchor element.

`placement`

`[Placement](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/overlays/src/index.d.ts:Placement)`

`'bottom'`

The placement of the element with respect to its anchor element.

`containerPadding`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)`

`12`

The placement padding that should be applied between the element and its surrounding container.

`crossOffset`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)`

`0`

The additional offset applied along the cross axis between the element and its anchor element.

`shouldFlip`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

`true`

Whether the element should flip its orientation (e.g. top to bottom or left to right) when there is insufficient room for it to render completely.

`arrowRef`

`[RefObject](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/refs.d.ts:RefObject)<[Element](https://developer.mozilla.org/docs/Web/API/Element) | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)>`

—

A ref for the popover arrow element.

`isNonModal`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the popover is non-modal, i.e. elements outside the popover may be interacted with by assistive technologies.

Most popovers should not use this option as it may negatively impact the screen reader experience. Only use with components such as combobox, which are designed to handle this situation carefully.

`isKeyboardDismissDisabled`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

`false`

Whether pressing the escape key to close the popover should be disabled.

Most popovers should not use this option. When set to true, an alternative way to close the popover with a keyboard must be provided.

`shouldCloseOnInteractOutside`

`( (element: [Element](https://developer.mozilla.org/docs/Web/API/Element) )) => [boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

When user interacts with the argument element outside of the popover ref, return true if onClose should be called. This gives you a chance to filter out interaction with elements that should not dismiss the popover. By default, onClose will always be called on interaction outside the popover ref.

`boundaryElement`

`[Element](https://developer.mozilla.org/docs/Web/API/Element)`

`document.body`

Element that that serves as the positioning boundary.

`scrollRef`

`[RefObject](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/refs.d.ts:RefObject)<[Element](https://developer.mozilla.org/docs/Web/API/Element) | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)>`

`overlayRef`

A ref for the scrollable region within the overlay.

`shouldUpdatePosition`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

`true`

Whether the overlay should update its position automatically.

`arrowBoundaryOffset`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)`

`0`

The minimum distance the arrow's edge should be from the edge of the overlay element.

`isOpen`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the overlay is open by default (controlled).

`defaultOpen`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the overlay is open by default (uncontrolled).

`children`

`[ChildrenOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ChildrenOrFunction)<[PopoverRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Popover.tsx:PopoverRenderProps)>`

—

The children of the component. A function may be provided to alter the children based on component state.

`className`

`[ClassNameOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ClassNameOrFunction)<[PopoverRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Popover.tsx:PopoverRenderProps)>`

—

The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.

`style`

`[StyleOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:StyleOrFunction)<[PopoverRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Popover.tsx:PopoverRenderProps)>`

—

The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.

Events

Name

Type

Description

`onOpenChange`

`( (isOpen: [boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean) )) => void`

Handler that is called when the overlay's open state changes.

Layout

Name

Type

Description

`slot`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)`

A slot name for the component. Slots allow the component to receive props from a parent component. An explicit `null` value indicates that the local props completely override all props received from a parent.

Sizing

Name

Type

Description

`maxHeight`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)`

The maxHeight specified for the overlay element. By default, it will take all space up to the current viewport height.

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

A `<Dialog>` is placed within a `<Popover>` to hold the `<Calendar>` for a DateRangePicker.

Show props

Name

Type

Description

`children`

`[ReactNode](https://reactjs.org/docs/rendering-elements.html) | ( (opts: [DialogRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Dialog.tsx:DialogRenderProps) )) => [ReactNode](https://reactjs.org/docs/rendering-elements.html)`

Children of the dialog. A function may be provided to access a function to close the dialog.

`className`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element.

`style`

`[CSSProperties](https://reactjs.org/docs/dom-elements.html#style)`

The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element.

EventsLayout

Name

Type

Description

`slot`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)`

A slot name for the component. Slots allow the component to receive props from a parent component. An explicit `null` value indicates that the local props completely override all props received from a parent.

PositioningAccessibility

Name

Type

Default

Description

`role`

`'dialog' | 'alertdialog'`

`'dialog'`

The accessibility role for the dialog.

`id`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

The element's unique identifier. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id).

`aria-label`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

Defines a string value that labels the current element.

`aria-labelledby`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

Identifies the element (or elements) that labels the current element.

`aria-describedby`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

Identifies the element (or elements) that describes the object.

`aria-details`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

Identifies the element (or elements) that provide a detailed, extended description for the object.

A `<RangeCalendar>` accepts one or more month grids as children, along with previous and next buttons to navigate forward and backward.

Show props

Name

Type

Default

Description

`visibleDuration`

`[DateDuration](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@internationalized/date/src/types.ts:DateDuration)`

`{months: 1}`

The amount of days that will be displayed at once. This affects how pagination works.

`createCalendar`

`( (identifier: [CalendarIdentifier](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@internationalized/date/src/types.ts:CalendarIdentifier) )) => [Calendar](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@internationalized/date/src/types.ts:Calendar)`

—

A function to create a new [Calendar](https://react-spectrum.adobe.com/internationalized/date/Calendar.html) object for a given calendar identifier. If not provided, the `createCalendar` function from `@internationalized/date` will be used.

`minValue`

`[DateValue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/calendar/src/index.d.ts:DateValue) | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)`

—

The minimum allowed date that a user may select.

`maxValue`

`[DateValue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/calendar/src/index.d.ts:DateValue) | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)`

—

The maximum allowed date that a user may select.

`isDateUnavailable`

`( (date: [DateValue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/calendar/src/index.d.ts:DateValue) )) => [boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Callback that is called for each date of the calendar. If it returns true, then the date is unavailable.

`isDisabled`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

`false`

Whether the calendar is disabled.

`isReadOnly`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

`false`

Whether the calendar value is immutable.

`autoFocus`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

`false`

Whether to automatically focus the calendar when it mounts.

`focusedValue`

`[DateValue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/calendar/src/index.d.ts:DateValue) | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)`

—

Controls the currently focused date within the calendar.

`defaultFocusedValue`

`[DateValue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/calendar/src/index.d.ts:DateValue) | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)`

—

The date that is focused when the calendar first mounts (uncountrolled).

`isInvalid`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the current selection is invalid according to application logic.

`pageBehavior`

`[PageBehavior](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/calendar/src/index.d.ts:PageBehavior)`

`visible`

Controls the behavior of paging. Pagination either works by advancing the visible page by visibleDuration (default) or one unit of visibleDuration.

`firstDayOfWeek`

`'sun' | 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat'`

—

The day that starts the week.

`selectionAlignment`

`'start' | 'center' | 'end'`

`'center'`

Determines the alignment of the visible months on initial render based on the current selection or current date if there is no selection.

`value`

`[DateValue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/calendar/src/index.d.ts:DateValue) | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)`

—

The current value (controlled).

`defaultValue`

`[DateValue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/calendar/src/index.d.ts:DateValue) | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)`

—

The default value (uncontrolled).

`children`

`[ChildrenOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ChildrenOrFunction)<[CalendarRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Calendar.tsx:CalendarRenderProps)>`

—

The children of the component. A function may be provided to alter the children based on component state.

`className`

`[ClassNameOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ClassNameOrFunction)<[CalendarRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Calendar.tsx:CalendarRenderProps)>`

—

The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.

`style`

`[StyleOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:StyleOrFunction)<[CalendarRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Calendar.tsx:CalendarRenderProps)>`

—

The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.

Events

Name

Type

Description

`onFocusChange`

`( (date: [CalendarDate](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@internationalized/date/src/CalendarDate.ts:CalendarDate) )) => void`

Handler that is called when the focused date changes.

`onChange`

`( (value: [MappedDateValue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/calendar/src/index.d.ts:MappedDateValue)<[DateValue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/calendar/src/index.d.ts:DateValue)> )) => void`

Handler that is called when the value changes.

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

A `<CalendarGrid>` renders an individual month within a `<RangeCalendar>`. It accepts a function as its `children`, which is called to render a `<CalendarCell>` for each date. This renders a default `<CalendarGridHeader>`, which displays the weekday names in the column headers. This can be customized by providing a `<CalendarGridHeader>` and `<CalendarGridBody>` as children instead of a function.

Show props

Name

Type

Default

Description

`children`

`[ReactElement](https://reactjs.org/docs/rendering-elements.html) | [ReactElement](https://reactjs.org/docs/rendering-elements.html)[] | ( (date: [CalendarDate](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@internationalized/date/src/CalendarDate.ts:CalendarDate) )) => [ReactElement](https://reactjs.org/docs/rendering-elements.html)`

—

Either a function to render calendar cells for each date in the month, or children containing a `<CalendarGridHeader>`` and`<CalendarGridBody>\` when additional customization is needed.

`offset`

`[DateDuration](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@internationalized/date/src/types.ts:DateDuration)`

—

An offset from the beginning of the visible date range that this CalendarGrid should display. Useful when displaying more than one month at a time.

`weekdayStyle`

`'narrow' | 'short' | 'long'`

`"narrow"`

The style of weekday names to display in the calendar grid header, e.g. single letter, abbreviation, or full day name.

`className`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element.

`style`

`[CSSProperties](https://reactjs.org/docs/dom-elements.html#style)`

—

The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element.

EventsPositioning

A `<CalendarGridHeader>` renders the header within a `<CalendarGrid>`, displaying a list of weekday names. It accepts a function as its `children`, which is called with a day name abbreviation to render a `<CalendarHeaderCell>` for each column header.

Show props

Name

Type

Description

`children`

`( (day: [string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String) )) => [ReactElement](https://reactjs.org/docs/rendering-elements.html)`

A function to render a `<CalendarHeaderCell>` for a weekday name.

`className`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element.

`style`

`[CSSProperties](https://reactjs.org/docs/dom-elements.html#style)`

The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element.

EventsPositioning

A `<CalendarHeaderCell>` renders a column header within a `<CalendarGridHeader>`. It typically displays a weekday name.

Show props

Name

Type

Description

`children`

`[ReactNode](https://reactjs.org/docs/rendering-elements.html)`

The children of the component.

`className`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element.

`style`

`[CSSProperties](https://reactjs.org/docs/dom-elements.html#style)`

The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element.

EventsPositioningAccessibility

Name

Type

Description

`id`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

The element's unique identifier. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/id).

### CalendarGridBody[#](#calendargridbody)

A `<CalendarGridBody>` renders the body within a `<CalendarGrid>`. It accepts a function as its `children`, which is called to render a `<CalendarCell>` for each date.

Show props

Name

Type

Description

`children`

`( (date: [CalendarDate](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@internationalized/date/src/CalendarDate.ts:CalendarDate) )) => [ReactElement](https://reactjs.org/docs/rendering-elements.html)`

A function to render a `<CalendarCell>` for a given date.

`className`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element.

`style`

`[CSSProperties](https://reactjs.org/docs/dom-elements.html#style)`

The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element.

EventsPositioning

A `<CalendarCell>` renders an individual date within a `<CalendarGrid>`.

Show props

Name

Type

Description

`date`

`[CalendarDate](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@internationalized/date/src/CalendarDate.ts:CalendarDate)`

The date to render in the cell.

`children`

`[ChildrenOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ChildrenOrFunction)<[CalendarCellRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Calendar.tsx:CalendarCellRenderProps)>`

The children of the component. A function may be provided to alter the children based on component state.

`className`

`[ClassNameOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ClassNameOrFunction)<[CalendarCellRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Calendar.tsx:CalendarCellRenderProps)>`

The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.

`style`

`[StyleOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:StyleOrFunction)<[CalendarCellRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Calendar.tsx:CalendarCellRenderProps)>`

The inline [style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) for the element. A function may be provided to compute the style based on component state.

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

Positioning

* * *

React Aria components can be styled in many ways, including using CSS classes, inline styles, utility classes (e.g. Tailwind), CSS-in-JS (e.g. Styled Components), etc. By default, all components include a builtin `className` attribute which can be targeted using CSS selectors. These follow the `react-aria-ComponentName` naming convention.

```
.react-aria-DateRangePicker {
  /* ... */
}
```

```
.react-aria-DateRangePicker {
  /* ... */
}
```

```
.react-aria-DateRangePicker {
  /* ... */
}
```

A custom `className` can also be specified on any component. This overrides the default `className` provided by React Aria with your own.

```
<DateInput className="my-date-input">
  {/* ... */}
</DateInput>
```

```
<DateInput className="my-date-input">
  {/* ... */}
</DateInput>
```

```
<DateInput className="my-date-input">
  {/* ... */}
</DateInput>
```

In addition, some components support multiple UI states (e.g. focused, placeholder, readonly, etc.). React Aria components expose states using data attributes, which you can target in CSS selectors. For example:

```
.react-aria-DateSegment[data-placeholder] {
  /* ... */
}

.react-aria-DateSegment[data-readonly] {
  /* ... */
}
```

```
.react-aria-DateSegment[data-placeholder] {
  /* ... */
}

.react-aria-DateSegment[data-readonly] {
  /* ... */
}
```

```
.react-aria-DateSegment[data-placeholder] {
  /* ... */
}

.react-aria-DateSegment[data-readonly] {
  /* ... */
}
```

The `className` and `style` props also accept functions which receive states for styling. This lets you dynamically determine the classes or styles to apply, which is useful when using utility CSS libraries like [Tailwind](https://tailwindcss.com/).

```
<DateSegment
  className={({ isPlaceholder }) =>
    isPlaceholder ? 'bg-gray-300' : 'bg-gray-600'}
/>
```

```
<DateSegment
  className={({ isPlaceholder }) =>
    isPlaceholder ? 'bg-gray-300' : 'bg-gray-600'}
/>
```

```
<DateSegment
  className={(
    { isPlaceholder }
  ) =>
    isPlaceholder
      ? 'bg-gray-300'
      : 'bg-gray-600'}
/>
```

Render props may also be used as children to alter what elements are rendered based on the current state. For example, you could render the placeholder as a separate element to always reserve space for it.

```
<DateSegment>
  {({ text, placeholder, isPlaceholder }) => (
    <>
      <span style={{ visibility: isPlaceholder ? 'visible' : 'hidden' }}>
        {placeholder}
      </span>
      {isPlaceholder ? '' : text}
    </>
  )}
</DateSegment>
```

```
<DateSegment>
  {({ text, placeholder, isPlaceholder }) => (
    <>
      <span
        style={{
          visibility: isPlaceholder ? 'visible' : 'hidden'
        }}
      >
        {placeholder}
      </span>
      {isPlaceholder ? '' : text}
    </>
  )}
</DateSegment>
```

```
<DateSegment>
  {(
    {
      text,
      placeholder,
      isPlaceholder
    }
  ) => (
    <>
      <span
        style={{
          visibility:
            isPlaceholder
              ? 'visible'
              : 'hidden'
        }}
      >
        {placeholder}
      </span>
      {isPlaceholder
        ? ''
        : text}
    </>
  )}
</DateSegment>
```

The states, selectors, and render props for each component used in a `DateRangePicker` are documented below.

A `DateRangePicker` can be targeted with the `.react-aria-DateRangePicker` CSS selector, or by overriding with a custom `className`. It supports the following states and render props:

Name

CSS Selector

Description

`state`

`—`

State of the date range picker.

`isFocusWithin`

`[data-focus-within]`

Whether an element within the date picker is focused, either via a mouse or keyboard.

`isFocusVisible`

`[data-focus-visible]`

Whether an element within the date picker is keyboard focused.

`isDisabled`

`[data-disabled]`

Whether the date picker is disabled.

`isReadOnly`

`[data-readonly]`

Whether the date picker is read only.

`isInvalid`

`[data-invalid]`

Whether the date picker is invalid.

`isOpen`

`[data-open]`

Whether the date picker's popover is currently open.

A `Label` can be targeted with the `.react-aria-Label` CSS selector, or by overriding with a custom `className`.

A `Group` can be targeted with the `.react-aria-Group` selector, or by overriding with a custom `className`. It supports the following states:

Name

CSS Selector

Description

`isHovered`

`[data-hovered]`

Whether the group is currently hovered with a mouse.

`isFocusWithin`

`[data-focus-within]`

Whether an element within the group is focused, either via a mouse or keyboard.

`isFocusVisible`

`[data-focus-visible]`

Whether an element within the group is keyboard focused.

`isDisabled`

`[data-disabled]`

Whether the group is disabled.

`isInvalid`

`[data-invalid]`

Whether the group is invalid.

A `DateInput` can be targeted with the `.react-aria-DateInput` CSS selector, or by overriding with a custom `className`. It supports the following states:

Name

CSS Selector

Description

`isHovered`

`[data-hovered]`

Whether the date input is currently hovered with a mouse.

`isFocusWithin`

`[data-focus-within]`

Whether an element within the date input is focused, either via a mouse or keyboard.

`isFocusVisible`

`[data-focus-visible]`

Whether an element within the date input is keyboard focused.

`isDisabled`

`[data-disabled]`

Whether the date input is disabled.

`isInvalid`

`[data-invalid]`

Whether the date input is invalid.

A `DateSegment` can be targeted with the `.react-aria-DateSegment` CSS selector, or by overriding with a custom `className`. It supports the following states and render props:

Name

CSS Selector

Description

`isHovered`

`[data-hovered]`

Whether the segment is currently hovered with a mouse.

`isFocused`

`[data-focused]`

Whether the segment is focused, either via a mouse or keyboard.

`isFocusVisible`

`[data-focus-visible]`

Whether the segment is keyboard focused.

`isPlaceholder`

`[data-placeholder]`

Whether the value is a placeholder.

`isReadOnly`

`[data-readonly]`

Whether the segment is read only.

`isDisabled`

`[data-disabled]`

Whether the date field is disabled.

`isInvalid`

`[data-invalid]`

Whether the date field is in an invalid state.

`type`

`[data-type="..."]`

The type of segment. Values include `literal`, `year`, `month`, `day`, etc.

`text`

`—`

The formatted text for the segment.

`placeholder`

`—`

A placeholder string for the segment.

A [Button](https://react-spectrum.adobe.com/react-aria/Button.html) can be targeted with the `.react-aria-Button` CSS selector, or by overriding with a custom `className`. The next and previous buttons within a range calendar can be targeted specifically with the `[slot=previous]` and `[slot=next]` selectors. Buttons support the following states:

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

A `FieldError` can be targeted with the `.react-aria-FieldError` CSS selector, or by overriding with a custom `className`. It supports the following render props:

Name

Description

`isInvalid`

Whether the input value is invalid.

`validationErrors`

The current error messages for the input if it is invalid, otherwise an empty array.

`validationDetails`

The native validation details for the input.

The [Popover](https://react-spectrum.adobe.com/react-aria/Popover.html) component can be targeted with the `.react-aria-Popover` CSS selector, or by overriding with a custom `className`. Note that it renders in a [React Portal](https://reactjs.org/docs/portals.html), so it will not appear as a descendant of the DateRangePicker in the DOM. It supports the following states and render props:

Name

CSS Selector

Description

`trigger`

`[data-trigger="..."]`

The name of the component that triggered the popover, e.g. "DialogTrigger" or "ComboBox".

`placement`

`[data-placement="left | right | top | bottom"]`

The placement of the popover relative to the trigger.

`isEntering`

`[data-entering]`

Whether the popover is currently entering. Use this to apply animations.

`isExiting`

`[data-exiting]`

Whether the popover is currently exiting. Use this to apply animations.

Within a DateRangePicker, the popover will have the `data-trigger="DateRangePicker"` attribute, which can be used to define date range picker-specific styles. In addition, the `--trigger-width` CSS custom property will be set on the popover, which you can use to make the popover match the width of the input group.

```
.react-aria-Popover[data-trigger=DateRangePicker] {
  width: var(--trigger-width);
}
```

```
.react-aria-Popover[data-trigger=DateRangePicker] {
  width: var(--trigger-width);
}
```

```
.react-aria-Popover[data-trigger=DateRangePicker] {
  width: var(--trigger-width);
}
```

A [Dialog](https://react-spectrum.adobe.com/react-aria/Dialog.html) can be targeted with the `.react-aria-Dialog` CSS selector, or by overriding with a custom `className`.

A [RangeCalendar](https://react-spectrum.adobe.com/react-aria/RangeCalendar.html) can be targeted with the `.react-aria-RangeCalendar` CSS selector, or by overriding with a custom `className`.

A `CalendarGrid` can be targeted with the `.react-aria-CalendarGrid` CSS selector, or by overriding with a custom `className`. When a function is provided as children, a default `<CalendarGridHeader>` and `<CalendarGridBody>` are rendered. If you need to customize the styling of the header cells, you can render them yourself. See the [RangeCalendar](https://react-spectrum.adobe.com/react-aria/RangeCalendar.html#calendargrid-1) docs for an example.

A `CalendarGridHeader` can be targeted with the `.react-aria-CalendarGridHeader` CSS selector, or by overriding with a custom `className`.

A `CalendarHeaderCell` can be targeted with the `.react-aria-CalendarHeaderCell` CSS selector, or by overriding with a custom `className`.

### CalendarGridBody[#](#calendargridbody-1)

A `CalendarGridBody` can be targeted with the `.react-aria-CalendarGridBody` CSS selector, or by overriding with a custom `className`.

A `CalendarCell` can be targeted with the `.react-aria-CalendarCell` CSS selector, or by overriding with a custom `className`. It supports the following states:

Name

CSS Selector

Description

`date`

`—`

The date that the cell represents.

`formattedDate`

`—`

The day number formatted according to the current locale.

`isHovered`

`[data-hovered]`

Whether the cell is currently hovered with a mouse.

`isPressed`

`[data-pressed]`

Whether the cell is currently being pressed.

`isSelected`

`[data-selected]`

Whether the cell is selected.

`isSelectionStart`

`[data-selection-start]`

Whether the cell is the first date in a range selection.

`isSelectionEnd`

`[data-selection-end]`

Whether the cell is the last date in a range selection.

`isFocused`

`[data-focused]`

Whether the cell is focused.

`isFocusVisible`

`[data-focus-visible]`

Whether the cell is keyboard focused.

`isDisabled`

`[data-disabled]`

Whether the cell is disabled, according to the calendar's `minValue`, `maxValue`, and `isDisabled` props. Disabled dates are not focusable, and cannot be selected by the user. They are typically displayed with a dimmed appearance.

`isOutsideVisibleRange`

`[data-outside-visible-range]`

Whether the cell is outside the visible range of the calendar. For example, dates before the first day of a month in the same week.

`isOutsideMonth`

`[data-outside-month]`

Whether the cell is outside the current month.

`isUnavailable`

`[data-unavailable]`

Whether the cell is unavailable, according to the calendar's `isDateUnavailable` prop. Unavailable dates remain focusable, but cannot be selected by the user. They should be displayed with a visual affordance to indicate they are unavailable, such as a different color or a strikethrough.

Note that because they are focusable, unavailable dates must meet a 4.5:1 color contrast ratio, [as defined by WCAG](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html).

`isInvalid`

`[data-invalid]`

Whether the cell is part of an invalid selection.

`isToday`

`[data-today]`

Whether the cell is today.

The help text elements within a `DateRangePicker` can be targeted with the `[slot=description]` and `[slot=errorMessage]` CSS selectors, or by adding a custom `className`.

* * *

If you need to customize one of the components within a `DateRangePicker`, such as `Label` or `DateSegment`, in many cases you can create a wrapper component. This lets you customize the props passed to the component.

```
function MyDateSegment(props) {
  return <MyDateSegment {...props} className="my-date-segment" />
}
```

```
function MyDateSegment(props) {
  return (
    <MyDateSegment {...props} className="my-date-segment" />
  );
}
```

```
function MyDateSegment(
  props
) {
  return (
    <MyDateSegment
      {...props}
      className="my-date-segment"
    />
  );
}
```

All React Aria Components export a corresponding context that can be used to send props to them from a parent element. This enables you to build your own compositional APIs similar to those found in React Aria Components itself. You can send any prop or ref via context that you could pass to the corresponding component. The local props and ref on the component are merged with the ones passed via context, with the local props taking precedence (following the rules documented in [mergeProps](https://react-spectrum.adobe.com/react-aria/mergeProps.html)).

Component

Context

Props

Ref

`DateRangePicker`

`DateRangePickerContext`

`[DateRangePickerProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/DatePicker.tsx:DateRangePickerProps)`

`[HTMLDivElement](https://developer.mozilla.org/docs/Web/API/HTMLDivElement)`

This example shows a `FieldGroup` component that renders a group of date pickers with a title and optional error message. It uses the [useId](https://react-spectrum.adobe.com/react-aria/useId.html) hook to generate a unique id for the error message. All of the child DateRangePickers are marked invalid and associated with the error message via the `aria-describedby` attribute passed to the `DateRangePickerContext` provider.

```
import {DateRangePickerContext} from 'react-aria-components';
import {useId} from 'react-aria';

interface FieldGroupProps {
  title?: string;
  children?: React.ReactNode;
  errorMessage?: string;
}

function FieldGroup({ title, children, errorMessage }: FieldGroupProps) {
  let errorId = useId();
  return (
    <fieldset>
      <legend>{title}</legend>
      <DateRangePickerContext.Provider
        value={{
          isInvalid: !!errorMessage,
          'aria-describedby': errorMessage ? errorId : undefined
        }}
      >        {children}
      </DateRangePickerContext.Provider>
      {errorMessage && (
        <small id={errorId} className="invalid">{errorMessage}</small>
      )}
    </fieldset>
  );
}

<FieldGroup
  title="Dates"
  errorMessage="Ticket sale and event dates cannot overlap."
>
  <MyDateRangePicker
    label="Ticket sale dates"
    defaultValue={{
      start: parseDate('2023-07-12'),
      end: parseDate('2023-08-04')
    }}
  />
  <MyDateRangePicker
    label="Event dates"
    defaultValue={{
      start: parseDate('2023-08-01'),
      end: parseDate('2023-08-10')
    }}
  />
</FieldGroup>
```

```
import {DateRangePickerContext} from 'react-aria-components';
import {useId} from 'react-aria';

interface FieldGroupProps {
  title?: string;
  children?: React.ReactNode;
  errorMessage?: string;
}

function FieldGroup(
  { title, children, errorMessage }: FieldGroupProps
) {
  let errorId = useId();
  return (
    <fieldset>
      <legend>{title}</legend>
      <DateRangePickerContext.Provider
        value={{
          isInvalid: !!errorMessage,
          'aria-describedby': errorMessage
            ? errorId
            : undefined
        }}
      >        {children}
      </DateRangePickerContext.Provider>
      {errorMessage && (
        <small id={errorId} className="invalid">
          {errorMessage}
        </small>
      )}
    </fieldset>
  );
}

<FieldGroup
  title="Dates"
  errorMessage="Ticket sale and event dates cannot overlap."
>
  <MyDateRangePicker
    label="Ticket sale dates"
    defaultValue={{
      start: parseDate('2023-07-12'),
      end: parseDate('2023-08-04')
    }}
  />
  <MyDateRangePicker
    label="Event dates"
    defaultValue={{
      start: parseDate('2023-08-01'),
      end: parseDate('2023-08-10')
    }}
  />
</FieldGroup>
```

```
import {DateRangePickerContext} from 'react-aria-components';
import {useId} from 'react-aria';

interface FieldGroupProps {
  title?: string;
  children?:
    React.ReactNode;
  errorMessage?: string;
}

function FieldGroup(
  {
    title,
    children,
    errorMessage
  }: FieldGroupProps
) {
  let errorId = useId();
  return (
    <fieldset>
      <legend>
        {title}
      </legend>
      <DateRangePickerContext.Provider
        value={{
          isInvalid:
            !!errorMessage,
          'aria-describedby':
            errorMessage
              ? errorId
              : undefined
        }}
      >        {children}
      </DateRangePickerContext.Provider>
      {errorMessage && (
        <small
          id={errorId}
          className="invalid"
        >
          {errorMessage}
        </small>
      )}
    </fieldset>
  );
}

<FieldGroup
  title="Dates"
  errorMessage="Ticket sale and event dates cannot overlap."
>
  <MyDateRangePicker
    label="Ticket sale dates"
    defaultValue={{
      start: parseDate(
        '2023-07-12'
      ),
      end: parseDate(
        '2023-08-04'
      )
    }}
  />
  <MyDateRangePicker
    label="Event dates"
    defaultValue={{
      start: parseDate(
        '2023-08-01'
      ),
      end: parseDate(
        '2023-08-10'
      )
    }}
  />
</FieldGroup>
```

Show CSS

```
fieldset {
  padding: 1.5em;
  width: fit-content;
}

.invalid {
  color: var(--invalid-color);
  margin-top: 1em;
  display: block;
}
```

```
fieldset {
  padding: 1.5em;
  width: fit-content;
}

.invalid {
  color: var(--invalid-color);
  margin-top: 1em;
  display: block;
}
```

```
fieldset {
  padding: 1.5em;
  width: fit-content;
}

.invalid {
  color: var(--invalid-color);
  margin-top: 1em;
  display: block;
}
```

DateRangePicker passes props to its child components, such as the label and popover, via their associated contexts. These contexts are exported so you can also consume them in your own custom components. This enables you to reuse existing components from your app or component library together with React Aria Components.

Component

Context

Props

Ref

`Label`

`LabelContext`

`[LabelProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Label.tsx:LabelProps)`

`[HTMLLabelElement](https://developer.mozilla.org/docs/Web/API/HTMLLabelElement)`

`Group`

`GroupContext`

`[GroupProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Group.tsx:GroupProps)`

`[HTMLDivElement](https://developer.mozilla.org/docs/Web/API/HTMLDivElement)`

`Button`

`ButtonContext`

`[ButtonProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Button.tsx:ButtonProps)`

`[HTMLButtonElement](https://developer.mozilla.org/docs/Web/API/HTMLButtonElement)`

`Popover`

`PopoverContext`

`[PopoverProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Popover.tsx:PopoverProps)`

`[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)`

`Dialog`

`DialogContext`

`[DialogProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Dialog.tsx:DialogProps)`

`[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)`

`RangeCalendar`

`RangeCalendarContext`

`[RangeCalendarProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Calendar.tsx:RangeCalendarProps)`

`[HTMLDivElement](https://developer.mozilla.org/docs/Web/API/HTMLDivElement)`

`Text`

`TextContext`

`[TextProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Text.tsx:TextProps)`

`[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)`

This example consumes from `LabelContext` in an existing styled label component to make it compatible with React Aria Components. The `[useContextProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:useContextProps)` hook merges the local props and ref with the ones provided via context by DateRangePicker.

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

Now you can use `MyCustomLabel` within a `DateRangePicker`, in place of the builtin React Aria Components `Label`.

```
<DateRangePicker>
  <MyCustomLabel>Name</MyCustomLabel>  {/* ... */}
</DateRangePicker>
```

```
<DateRangePicker>
  <MyCustomLabel>Name</MyCustomLabel>  {/* ... */}
</DateRangePicker>
```

```
<DateRangePicker>
  <MyCustomLabel>
    Name
  </MyCustomLabel>  {/* ... */}
</DateRangePicker>
```

DateRangePicker provides a `[DateRangePickerState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/datepicker/src/useDateRangePickerState.ts:DateRangePickerState)` object to its children via `DateRangePickerStateContext`. This can be used to access and manipulate the date range picker's state.

This example shows a `DateRangePickerClearButton` component that can be placed within a `DateRangePicker` to allow the user to clear the selected value.

```
import {DateRangePickerStateContext} from 'react-aria-components';

function DateRangePickerClearButton() {
  let state = React.useContext(DateRangePickerStateContext)!;  return (
    <Button
      // Don't inherit default Button behavior from DateRangePicker.
      slot={null}
      className="clear-button"
      aria-label="Clear"
      onPress={() => state.setValue(null)}
    >
      ✕
    </Button>
  );
}

<DateRangePicker
  defaultValue={{
    start: parseDate('2023-07-12'),
    end: parseDate('2023-08-04')
  }}
>
  <Label>Trip dates</Label>
  <Group>
    <DateInput slot="start">
      {(segment) => <DateSegment segment={segment} />}
    </DateInput>
    <span aria-hidden="true">–</span>
    <DateInput slot="end">
      {(segment) => <DateSegment segment={segment} />}
    </DateInput>
    <DateRangePickerClearButton />    <Button>
      <ChevronDown size={20} />
    </Button>
  </Group>
  <Popover>
    <Dialog>
      <RangeCalendar>
        <header>
          <Button slot="previous">
            <ChevronLeft size={20} />
          </Button>
          <Heading />
          <Button slot="next">
            <ChevronRight size={20} />
          </Button>
        </header>
        <CalendarGrid>
          {(date) => <CalendarCell date={date} />}
        </CalendarGrid>
      </RangeCalendar>
    </Dialog>
  </Popover>
</DateRangePicker>
```

```
import {DateRangePickerStateContext} from 'react-aria-components';

function DateRangePickerClearButton() {
  let state = React.useContext(
    DateRangePickerStateContext
  )!;  return (
    <Button
      // Don't inherit default Button behavior from DateRangePicker.
      slot={null}
      className="clear-button"
      aria-label="Clear"
      onPress={() => state.setValue(null)}
    >
      ✕
    </Button>
  );
}

<DateRangePicker
  defaultValue={{
    start: parseDate('2023-07-12'),
    end: parseDate('2023-08-04')
  }}
>
  <Label>Trip dates</Label>
  <Group>
    <DateInput slot="start">
      {(segment) => <DateSegment segment={segment} />}
    </DateInput>
    <span aria-hidden="true">–</span>
    <DateInput slot="end">
      {(segment) => <DateSegment segment={segment} />}
    </DateInput>
    <DateRangePickerClearButton />    <Button>
      <ChevronDown size={20} />
    </Button>
  </Group>
  <Popover>
    <Dialog>
      <RangeCalendar>
        <header>
          <Button slot="previous">
            <ChevronLeft size={20} />
          </Button>
          <Heading />
          <Button slot="next">
            <ChevronRight size={20} />
          </Button>
        </header>
        <CalendarGrid>
          {(date) => <CalendarCell date={date} />}
        </CalendarGrid>
      </RangeCalendar>
    </Dialog>
  </Popover>
</DateRangePicker>
```

```
import {DateRangePickerStateContext} from 'react-aria-components';

function DateRangePickerClearButton() {
  let state = React
    .useContext(
      DateRangePickerStateContext
    )!;  return (
    <Button
      // Don't inherit default Button behavior from DateRangePicker.
      slot={null}
      className="clear-button"
      aria-label="Clear"
      onPress={() =>
        state.setValue(
          null
        )}
    >
      ✕
    </Button>
  );
}

<DateRangePicker
  defaultValue={{
    start: parseDate(
      '2023-07-12'
    ),
    end: parseDate(
      '2023-08-04'
    )
  }}
>
  <Label>
    Trip dates
  </Label>
  <Group>
    <DateInput slot="start">
      {(segment) => (
        <DateSegment
          segment={segment}
        />
      )}
    </DateInput>
    <span aria-hidden="true">
      –
    </span>
    <DateInput slot="end">
      {(segment) => (
        <DateSegment
          segment={segment}
        />
      )}
    </DateInput>
    <DateRangePickerClearButton />    <Button>
      <ChevronDown
        size={20}
      />
    </Button>
  </Group>
  <Popover>
    <Dialog>
      <RangeCalendar>
        <header>
          <Button slot="previous">
            <ChevronLeft
              size={20}
            />
          </Button>
          <Heading />
          <Button slot="next">
            <ChevronRight
              size={20}
            />
          </Button>
        </header>
        <CalendarGrid>
          {(date) => (
            <CalendarCell
              date={date}
            />
          )}
        </CalendarGrid>
      </RangeCalendar>
    </Dialog>
  </Popover>
</DateRangePicker>
```

Show CSS

```
.clear-button {
  width: 1.143rem;
  height: 1.143rem;
  border-radius: 1.143rem;
  font-size: 0.857rem;
  line-height: 0.857rem;
  vertical-align: middle;
  text-align: center;
  background: gray;
  color: white;
  border: none;
  padding: 0;
  outline: none;

  &[data-pressed] {
    background: dimgray;
  }

  &[data-focus-visible] {
    outline: 2px solid var(--focus-ring-color);
    outline-offset: 2px;
  }

  + .react-aria-Button {
    margin-left: 4px;
  }
}
```

```
.clear-button {
  width: 1.143rem;
  height: 1.143rem;
  border-radius: 1.143rem;
  font-size: 0.857rem;
  line-height: 0.857rem;
  vertical-align: middle;
  text-align: center;
  background: gray;
  color: white;
  border: none;
  padding: 0;
  outline: none;

  &[data-pressed] {
    background: dimgray;
  }

  &[data-focus-visible] {
    outline: 2px solid var(--focus-ring-color);
    outline-offset: 2px;
  }

  + .react-aria-Button {
    margin-left: 4px;
  }
}
```

```
.clear-button {
  width: 1.143rem;
  height: 1.143rem;
  border-radius: 1.143rem;
  font-size: 0.857rem;
  line-height: 0.857rem;
  vertical-align: middle;
  text-align: center;
  background: gray;
  color: white;
  border: none;
  padding: 0;
  outline: none;

  &[data-pressed] {
    background: dimgray;
  }

  &[data-focus-visible] {
    outline: 2px solid var(--focus-ring-color);
    outline-offset: 2px;
  }

  + .react-aria-Button {
    margin-left: 4px;
  }
}
```

If you need to customize things even further, such as accessing internal state, intercepting events, or customizing the DOM structure, you can drop down to the lower level Hook-based API. See [useDateRangePicker](https://react-spectrum.adobe.com/react-aria/useDateRangePicker.html) for more details.