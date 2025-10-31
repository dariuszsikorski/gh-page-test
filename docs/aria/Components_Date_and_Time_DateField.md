# DateField

**Source**: [https://react-spectrum.adobe.com/react-aria/DateField.html](https://react-spectrum.adobe.com/react-aria/DateField.html)

> Documentation for DateField in the React Aria package.

---

A date field allows users to enter and edit date and time values using a keyboard. Each part of a date value is displayed in an individually editable segment.

* * *

```
import {DateField, Label, DateInput, DateSegment} from 'react-aria-components';

<DateField>
  <Label>Birth date</Label>
  <DateInput>
    {segment => <DateSegment segment={segment} />}
  </DateInput>
</DateField>
```

```
import {
  DateField,
  DateInput,
  DateSegment,
  Label
} from 'react-aria-components';

<DateField>
  <Label>Birth date</Label>
  <DateInput>
    {(segment) => <DateSegment segment={segment} />}
  </DateInput>
</DateField>
```

```
import {
  DateField,
  DateInput,
  DateSegment,
  Label
} from 'react-aria-components';

<DateField>
  <Label>
    Birth date
  </Label>
  <DateInput>
    {(segment) => (
      <DateSegment
        segment={segment}
      />
    )}
  </DateInput>
</DateField>
```

Show CSS

```
@import "@react-aria/example-theme";

.react-aria-DateField {
  color: var(--text-color);
  display: flex;
  flex-direction: column;
}

.react-aria-DateInput {
  display: inline;
  padding: 4px;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  background: var(--field-background);
  width: fit-content;
  min-width: 150px;
  white-space: nowrap;
  forced-color-adjust: none;

  &[data-focus-within] {
    outline: 2px solid var(--focus-ring-color);
    outline-offset: -1px;
  }
}

.react-aria-DateSegment {
  padding: 0 2px;
  font-variant-numeric: tabular-nums;
  text-align: end;
  color: var(--text-color);

  &[data-type=literal] {
    padding: 0;
  }

  &[data-placeholder] {
    color: var(--text-color-placeholder);
    font-style: italic;
  }

  &:focus {
    color: var(--highlight-foreground);
    background: var(--highlight-background);
    outline: none;
    border-radius: 4px;
    caret-color: transparent;
  }
}
```

```
@import "@react-aria/example-theme";

.react-aria-DateField {
  color: var(--text-color);
  display: flex;
  flex-direction: column;
}

.react-aria-DateInput {
  display: inline;
  padding: 4px;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  background: var(--field-background);
  width: fit-content;
  min-width: 150px;
  white-space: nowrap;
  forced-color-adjust: none;

  &[data-focus-within] {
    outline: 2px solid var(--focus-ring-color);
    outline-offset: -1px;
  }
}

.react-aria-DateSegment {
  padding: 0 2px;
  font-variant-numeric: tabular-nums;
  text-align: end;
  color: var(--text-color);

  &[data-type=literal] {
    padding: 0;
  }

  &[data-placeholder] {
    color: var(--text-color-placeholder);
    font-style: italic;
  }

  &:focus {
    color: var(--highlight-foreground);
    background: var(--highlight-background);
    outline: none;
    border-radius: 4px;
    caret-color: transparent;
  }
}
```

```
@import "@react-aria/example-theme";

.react-aria-DateField {
  color: var(--text-color);
  display: flex;
  flex-direction: column;
}

.react-aria-DateInput {
  display: inline;
  padding: 4px;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  background: var(--field-background);
  width: fit-content;
  min-width: 150px;
  white-space: nowrap;
  forced-color-adjust: none;

  &[data-focus-within] {
    outline: 2px solid var(--focus-ring-color);
    outline-offset: -1px;
  }
}

.react-aria-DateSegment {
  padding: 0 2px;
  font-variant-numeric: tabular-nums;
  text-align: end;
  color: var(--text-color);

  &[data-type=literal] {
    padding: 0;
  }

  &[data-placeholder] {
    color: var(--text-color-placeholder);
    font-style: italic;
  }

  &:focus {
    color: var(--highlight-foreground);
    background: var(--highlight-background);
    outline: none;
    border-radius: 4px;
    caret-color: transparent;
  }
}
```

* * *

A date field can be built using `<input type="date">`, but this is very limited in functionality, lacking in internationalization capabilities, inconsistent between browsers, and difficult to style. `DateField` helps achieve accessible and international date and time fields that can be styled as needed.

-   **Dates and times** – Support for dates and times with configurable granularity.
-   **International** – Support for 13 calendar systems used around the world, including Gregorian, Buddhist, Islamic, Persian, and more. Locale-specific formatting, number systems, hour cycles, and right-to-left support are available as well.
-   **Time zone aware** – Dates and times can optionally include a time zone. All modifications follow time zone rules such as daylight saving time.
-   **Accessible** – Each date and time unit is displayed as an individually focusable and editable segment, which allows users an easy way to edit dates using the keyboard, in any date format and locale.
-   **Touch friendly** – Date segments are editable using an easy to use numeric keypad, and all interactions are accessible using touch-based screen readers.
-   **Validation** – Integrates with HTML forms, supporting required, minimum and maximum values, custom validation functions, realtime validation, and server-side validation errors.
-   **Customizable** – As with all of React Aria, the DOM structure and styling of all elements can be fully customized.

Read our [blog post](https://react-spectrum.adobe.com/blog/date-and-time-pickers-for-all.html) for more details about the internationalization, accessibility, and user experience features implemented by `DateField`.

* * *

Shows a date field with labels pointing to its parts, including the label, field, and segments.Event date8 / 15 / 2022SegmentFieldLabel

A date field consists of a label, and a group of segments representing each unit of a date and time (e.g. years, months, days, etc.). Each segment is individually focusable and editable by the user, by typing or using the arrow keys to increment and decrement the value. This approach allows values to be formatted and parsed correctly regardless of the locale or date format, and offers an easy and error-free way to edit dates using the keyboard.

`DateField` also supports optional description and error message elements, which can be used to provide more context about the field, and any validation messages. These are linked with the input via the `aria-describedby` attribute.

```
import {DateField, DateInput, DateSegment, FieldError, Label, Text} from 'react-aria-components';

<DateField>
  <Label />
  <DateInput>
    {(segment) => <DateSegment segment={segment} />}
  </DateInput>
  <Text slot="description" />
  <FieldError />
</DateField>
```

```
import {
  DateField,
  DateInput,
  DateSegment,
  FieldError,
  Label,
  Text
} from 'react-aria-components';

<DateField>
  <Label />
  <DateInput>
    {(segment) => <DateSegment segment={segment} />}
  </DateInput>
  <Text slot="description" />
  <FieldError />
</DateField>
```

```
import {
  DateField,
  DateInput,
  DateSegment,
  FieldError,
  Label,
  Text
} from 'react-aria-components';

<DateField>
  <Label />
  <DateInput>
    {(segment) => (
      <DateSegment
        segment={segment}
      />
    )}
  </DateInput>
  <Text slot="description" />
  <FieldError />
</DateField>
```

If the date field does not have a visible label, an `aria-label` or `aria-labelledby` prop must be passed instead to identify it to assistive technology.

Note that most of this anatomy is shared with [TimeField](https://react-spectrum.adobe.com/react-aria/TimeField.html), so you can reuse many components between them if you have both.

To ensure the proper date and time format in RTL locales, `DateInput` must have `display` set to either `inline`, `inline-block`, or `block`.

`DateField` makes use of the following concepts:

[

@internationalized/date

Represent and manipulate dates and times in a locale-aware manner.

](https://react-spectrum.adobe.com/internationalized/date/index.html)[

Forms

Validating and submitting form data, and integrating with form libraries.

](https://react-spectrum.adobe.com/react-aria/forms.html)

A `DateField` uses the following components, which may also be used standalone or reused in other components.

[

Label

A label provides context for an input element.

](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label)

* * *

To help kick-start your project, we offer starter kits that include example implementations of all React Aria components with various styling solutions. All components are fully styled, including support for dark mode, high contrast mode, and all UI states. Each starter comes with a pre-configured [Storybook](https://storybook.js.org/) that you can experiment with, or use as a starting point for your own component library.

* * *

If you will use a DateField in multiple places in your app, you can wrap all of the pieces into a reusable component. This way, the DOM structure, styling code, and other logic are defined in a single place and reused everywhere to ensure consistency.

This example wraps `DateField` and all of its children together into a single component which accepts a `label` prop, which is passed to the right place. It also shows how to use the `description` slot to render [help text](#description), and `FieldError` component to render [validation errors](#validation).

```
import type {DateFieldProps, DateValue, ValidationResult} from 'react-aria-components';
import {FieldError, Text} from 'react-aria-components';

interface MyDateFieldProps<T extends DateValue> extends DateFieldProps<T> {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
}

function MyDateField<T extends DateValue>(
  { label, description, errorMessage, ...props }: MyDateFieldProps<T>
) {
  return (
    <DateField {...props}>
      <Label>{label}</Label>
      <DateInput>
        {(segment) => <DateSegment segment={segment} />}
      </DateInput>
      {description && <Text slot="description">{description}</Text>}
      <FieldError>{errorMessage}</FieldError>
    </DateField>
  );
}

<MyDateField label="Event date" />
```

```
import type {
  DateFieldProps,
  DateValue,
  ValidationResult
} from 'react-aria-components';
import {FieldError, Text} from 'react-aria-components';

interface MyDateFieldProps<T extends DateValue>
  extends DateFieldProps<T> {
  label?: string;
  description?: string;
  errorMessage?:
    | string
    | ((validation: ValidationResult) => string);
}

function MyDateField<T extends DateValue>(
  { label, description, errorMessage, ...props }:
    MyDateFieldProps<T>
) {
  return (
    <DateField {...props}>
      <Label>{label}</Label>
      <DateInput>
        {(segment) => <DateSegment segment={segment} />}
      </DateInput>
      {description && (
        <Text slot="description">{description}</Text>
      )}
      <FieldError>{errorMessage}</FieldError>
    </DateField>
  );
}

<MyDateField label="Event date" />
```

```
import type {
  DateFieldProps,
  DateValue,
  ValidationResult
} from 'react-aria-components';
import {
  FieldError,
  Text
} from 'react-aria-components';

interface MyDateFieldProps<
  T extends DateValue
> extends
  DateFieldProps<T> {
  label?: string;
  description?: string;
  errorMessage?:
    | string
    | ((
      validation:
        ValidationResult
    ) => string);
}

function MyDateField<
  T extends DateValue
>({
  label,
  description,
  errorMessage,
  ...props
}: MyDateFieldProps<T>) {
  return (
    <DateField
      {...props}
    >
      <Label>
        {label}
      </Label>
      <DateInput>
        {(segment) => (
          <DateSegment
            segment={segment}
          />
        )}
      </DateInput>
      {description && (
        <Text slot="description">
          {description}
        </Text>
      )}
      <FieldError>
        {errorMessage}
      </FieldError>
    </DateField>
  );
}

<MyDateField label="Event date" />
```

* * *

A `DateField` displays a placeholder by default. An initial, uncontrolled value can be provided to the `DateField` using the `defaultValue` prop. Alternatively, a controlled value can be provided using the `value` prop.

Date values are provided using objects in the [@internationalized/date](https://react-spectrum.adobe.com/internationalized/date/) package. This library handles correct international date manipulation across calendars, time zones, and other localization concerns. `DateField` supports values of the following types:

-   `[CalendarDate](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@internationalized/date/src/CalendarDate.ts:CalendarDate)` – a date without any time components. May be parsed from a string representation using the `[parseDate](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@internationalized/date/src/string.ts:parseDate)` function. Use this type to represent dates where the time is not important, such as a birthday or an all day calendar event.
-   `[CalendarDateTime](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@internationalized/date/src/CalendarDate.ts:CalendarDateTime)` – a date with a time, but not in any specific time zone. May be parsed from a string representation using the `[parseDateTime](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@internationalized/date/src/string.ts:parseDateTime)` function. Use this type to represent times that occur at the same local time regardless of the time zone, such as the time of New Years Eve fireworks which always occur at midnight. Most times are better stored as a `ZonedDateTime`.
-   `[ZonedDateTime](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@internationalized/date/src/CalendarDate.ts:ZonedDateTime)` – a date with a time in a specific time zone. May be parsed from a string representation using the `[parseZonedDateTime](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@internationalized/date/src/string.ts:parseZonedDateTime)`, `[parseAbsolute](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@internationalized/date/src/string.ts:parseAbsolute)`, or `[parseAbsoluteToLocal](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@internationalized/date/src/string.ts:parseAbsoluteToLocal)` functions. Use this type to represent an exact moment in time at a particular location on Earth.

```
import {parseDate} from '@internationalized/date';

function Example() {
  let [value, setValue] = React.useState(parseDate('2020-02-03'));

  return (
    <>
      <MyDateField
        label="Date (uncontrolled)"
        defaultValue={parseDate('2020-02-03')} />
      <MyDateField
        label="Date (controlled)"
        value={value}
        onChange={setValue} />
    </>
  );
}
```

```
import {parseDate} from '@internationalized/date';

function Example() {
  let [value, setValue] = React.useState(
    parseDate('2020-02-03')
  );

  return (
    <>
      <MyDateField
        label="Date (uncontrolled)"
        defaultValue={parseDate('2020-02-03')}
      />
      <MyDateField
        label="Date (controlled)"
        value={value}
        onChange={setValue}
      />
    </>
  );
}
```

```
import {parseDate} from '@internationalized/date';

function Example() {
  let [value, setValue] =
    React.useState(
      parseDate(
        '2020-02-03'
      )
    );

  return (
    <>
      <MyDateField
        label="Date (uncontrolled)"
        defaultValue={parseDate(
          '2020-02-03'
        )}
      />
      <MyDateField
        label="Date (controlled)"
        value={value}
        onChange={setValue}
      />
    </>
  );
}
```

`DateField` is time zone aware when a `[ZonedDateTime](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@internationalized/date/src/CalendarDate.ts:ZonedDateTime)` object is provided as the value. In this case, the time zone abbreviation is displayed, and time zone concerns such as daylight saving time are taken into account when the value is manipulated.

In most cases, your data will come from and be sent to a server as an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string. [@internationalized/date](https://react-spectrum.adobe.com/internationalized/date/) includes functions for parsing strings in multiple formats into `[ZonedDateTime](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@internationalized/date/src/CalendarDate.ts:ZonedDateTime)` objects. Which format you use will depend on what information you need to store.

-   `[parseZonedDateTime](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@internationalized/date/src/string.ts:parseZonedDateTime)` – This function parses a date with an explicit time zone and optional UTC offset attached (e.g. `"2021-11-07T00:45[America/Los_Angeles]"` or `"2021-11-07T00:45-07:00[America/Los_Angeles]"`). This format preserves the maximum amount of information. If the exact local time and time zone that a user selected is important, use this format. Storing the time zone and offset that was selected rather than converting to UTC ensures that the local time is correct regardless of daylight saving rule changes (e.g. if a locale abolishes DST). Examples where this applies include calendar events, reminders, and other times that occur in a particular location.
-   `[parseAbsolute](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@internationalized/date/src/string.ts:parseAbsolute)` – This function parses an absolute date and time that occurs at the same instant at all locations on Earth. It can be represented in UTC (e.g. `"2021-11-07T07:45:00Z"`), or stored with a particular offset (e.g. `"2021-11-07T07:45:00-07:00"`). A time zone identifier, e.g. `America/Los_Angeles`, must be passed, and the result will be converted into that time zone. Absolute times are the best way to represent events that occurred in the past, or future events where an exact time is needed, regardless of time zone.
-   `[parseAbsoluteToLocal](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@internationalized/date/src/string.ts:parseAbsoluteToLocal)` – This function parses an absolute date and time into the current user's local time zone. It is a shortcut for `parseAbsolute`, and accepts the same formats.

```
import {parseZonedDateTime} from '@internationalized/date';

<MyDateField
  label="Event date"
  defaultValue={parseZonedDateTime('2022-11-07T00:45[America/Los_Angeles]')}
/>
```

```
import {parseZonedDateTime} from '@internationalized/date';

<MyDateField
  label="Event date"
  defaultValue={parseZonedDateTime(
    '2022-11-07T00:45[America/Los_Angeles]'
  )}
/>
```

```
import {parseZonedDateTime} from '@internationalized/date';

<MyDateField
  label="Event date"
  defaultValue={parseZonedDateTime(
    '2022-11-07T00:45[America/Los_Angeles]'
  )}
/>
```

`DateField` displays times in the time zone included in the `ZonedDateTime` object. The above example is always displayed in Pacific Standard Time because the `America/Los_Angeles` time zone identifier is provided. [@internationalized/date](https://react-spectrum.adobe.com/internationalized/date/) includes functions for converting dates between time zones, or parsing a date directly into a specific time zone or the user's local time zone, as shown below.

```
import {parseAbsoluteToLocal} from '@internationalized/date';

<MyDateField
  label="Event date"
  defaultValue={parseAbsoluteToLocal('2021-11-07T07:45:00Z')}
/>
```

```
import {parseAbsoluteToLocal} from '@internationalized/date';

<MyDateField
  label="Event date"
  defaultValue={parseAbsoluteToLocal(
    '2021-11-07T07:45:00Z'
  )}
/>
```

```
import {parseAbsoluteToLocal} from '@internationalized/date';

<MyDateField
  label="Event date"
  defaultValue={parseAbsoluteToLocal(
    '2021-11-07T07:45:00Z'
  )}
/>
```

The `granularity` prop allows you to control the smallest unit that is displayed by `DateField`. By default, `CalendarDate` values are displayed with `"day"` granularity (year, month, and day), and `CalendarDateTime` and `ZonedDateTime` values are displayed with `"minute"` granularity. More granular time values can be displayed by setting the `granularity` prop to `"second"`.

In addition, when a value with a time is provided but you wish to only display the date, you can set the granularity to `"day"`. This has no effect on the actual value (it still has a time component), only on what fields are displayed. In the following example, two DateFields are synchronized with the same value, but display different granularities.

```
function Example() {
  let [date, setDate] = React.useState(
    parseAbsoluteToLocal('2021-04-07T18:45:22Z')
  );

  return (
    <>
      <MyDateField
        label="Date and time"
        granularity="second"        value={date}
        onChange={setDate}
      />
      <MyDateField
        label="Date"
        granularity="day"        value={date}
        onChange={setDate}
      />
    </>
  );
}
```

```
function Example() {
  let [date, setDate] = React.useState(
    parseAbsoluteToLocal('2021-04-07T18:45:22Z')
  );

  return (
    <>
      <MyDateField
        label="Date and time"
        granularity="second"        value={date}
        onChange={setDate}
      />
      <MyDateField
        label="Date"
        granularity="day"        value={date}
        onChange={setDate}
      />
    </>
  );
}
```

```
function Example() {
  let [date, setDate] =
    React.useState(
      parseAbsoluteToLocal(
        '2021-04-07T18:45:22Z'
      )
    );

  return (
    <>
      <MyDateField
        label="Date and time"
        granularity="second"        value={date}
        onChange={setDate}
      />
      <MyDateField
        label="Date"
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

<MyDateField
  label="Event date"
  granularity="second" />
<MyDateField
  label="Event date"
  placeholderValue={now('America/New_York')}
  granularity="second" />
```

```
import {now} from '@internationalized/date';

<MyDateField
  label="Event date"
  granularity="second" />
<MyDateField
  label="Event date"
  placeholderValue={now('America/New_York')}
  granularity="second" />
```

```
import {now} from '@internationalized/date';

<MyDateField
  label="Event date"
  granularity="second"
/>
<MyDateField
  label="Event date"
  placeholderValue={now(
    'America/New_York'
  )}
  granularity="second"
/>
```

`DateField` supports selecting dates in many calendar systems used around the world, including Gregorian, Hebrew, Indian, Islamic, Buddhist, and more. Dates are automatically displayed in the appropriate calendar system for the user's locale. The calendar system can be overridden using the [Unicode calendar locale extension](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/calendar#adding_a_calendar_in_the_locale_string), passed to the [I18nProvider](https://react-spectrum.adobe.com/react-aria/I18nProvider.html) component.

Selected dates passed to `onChange` always use the same calendar system as the `value` or `defaultValue` prop. If no `value` or `defaultValue` is provided, then dates passed to `onChange` are always in the Gregorian calendar since this is the most commonly used. This means that even though the user selects dates in their local calendar system, applications are able to deal with dates from all users consistently.

The below example displays a `DateField` in the Hindi language, using the Indian calendar. Dates emitted from `onChange` are in the Gregorian calendar.

```
import {I18nProvider} from 'react-aria';

function Example() {
  let [date, setDate] = React.useState<DateValue | null>(null);
  return (
    <I18nProvider locale="hi-IN-u-ca-indian">      <MyDateField label="Date" value={date} onChange={setDate} />
      <p>Selected date: {date?.toString()}</p>
    </I18nProvider>
  );
}
```

```
import {I18nProvider} from 'react-aria';

function Example() {
  let [date, setDate] = React.useState<DateValue | null>(
    null
  );
  return (
    <I18nProvider locale="hi-IN-u-ca-indian">      <MyDateField
        label="Date"
        value={date}
        onChange={setDate}
      />
      <p>Selected date: {date?.toString()}</p>
    </I18nProvider>
  );
}
```

```
import {I18nProvider} from 'react-aria';

function Example() {
  let [date, setDate] =
    React.useState<
      DateValue | null
    >(null);
  return (
    <I18nProvider locale="hi-IN-u-ca-indian">      <MyDateField
        label="Date"
        value={date}
        onChange={setDate}
      />
      <p>
        Selected date:
        {' '}
        {date
          ?.toString()}
      </p>
    </I18nProvider>
  );
}
```

DateField supports the `name` prop for integration with HTML forms. The value will be submitted to the server as an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string according to the granularity of the value. For example, if the date field allows selecting only a date then a string such as `"2023-02-03"` will be submitted, and if it allows selecting a time then a string such as `"2023-02-03T08:45:00"` will be submitted. See the [Value](#value) section above for more details about the supported value types.

```
<MyDateField label="Birth date" name="birthday" />
```

```
<MyDateField label="Birth date" name="birthday" />
```

```
<MyDateField
  label="Birth date"
  name="birthday"
/>
```

* * *

`DateField` accepts an `onChange` prop which is triggered whenever the date is edited by the user. The example below uses `onChange` to update a separate element with a formatted version of the date in the user's locale and local time zone. This is done by converting the date to a native JavaScript `Date` object to pass to the formatter.

```
import {useDateFormatter} from 'react-aria';
import {getLocalTimeZone} from '@internationalized/date';

function Example() {
  let [date, setDate] = React.useState(parseDate('1985-07-03'));
  let formatter = useDateFormatter({ dateStyle: 'full' });

  return (
    <>
      <MyDateField label="Birth date" value={date} onChange={setDate} />
      <p>
        Selected date:{' '}
        {date ? formatter.format(date.toDate(getLocalTimeZone())) : '--'}
      </p>
    </>
  );
}
```

```
import {useDateFormatter} from 'react-aria';
import {getLocalTimeZone} from '@internationalized/date';

function Example() {
  let [date, setDate] = React.useState(
    parseDate('1985-07-03')
  );
  let formatter = useDateFormatter({ dateStyle: 'full' });

  return (
    <>
      <MyDateField
        label="Birth date"
        value={date}
        onChange={setDate}
      />
      <p>
        Selected date: {date
          ? formatter.format(
            date.toDate(getLocalTimeZone())
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
  let [date, setDate] =
    React.useState(
      parseDate(
        '1985-07-03'
      )
    );
  let formatter =
    useDateFormatter({
      dateStyle: 'full'
    });

  return (
    <>
      <MyDateField
        label="Birth date"
        value={date}
        onChange={setDate}
      />
      <p>
        Selected date:
        {' '}
        {date
          ? formatter
            .format(
              date
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

DateField supports the `isRequired` prop to ensure the user enters a value, as well as minimum and maximum values, and custom client and server-side validation. It can also be integrated with other form libraries. See the [Forms](https://react-spectrum.adobe.com/react-aria/forms.html) guide to learn more.

To display validation errors, add a `<FieldError>` element as a child of the DateField. This allows you to render error messages from all of the above sources with consistent custom styles.

```
import {Form, FieldError, Button} from 'react-aria-components';

<Form>
  <DateField name="date" isRequired>    <Label>Appointment date</Label>
    <DateInput>
      {segment => <DateSegment segment={segment} />}
    </DateInput>
    <FieldError />  </DateField>
  <Button type="submit">Submit</Button>
</Form>
```

```
import {
  Button,
  FieldError,
  Form
} from 'react-aria-components';

<Form>
  <DateField name="date" isRequired>    <Label>Appointment date</Label>
    <DateInput>
      {(segment) => <DateSegment segment={segment} />}
    </DateInput>
    <FieldError />  </DateField>
  <Button type="submit">Submit</Button>
</Form>
```

```
import {
  Button,
  FieldError,
  Form
} from 'react-aria-components';

<Form>
  <DateField
    name="date"
    isRequired
  >    <Label>
      Appointment date
    </Label>
    <DateInput>
      {(segment) => (
        <DateSegment
          segment={segment}
        />
      )}
    </DateInput>
    <FieldError />  </DateField>
  <Button type="submit">
    Submit
  </Button>
</Form>
```

Show CSS

```
.react-aria-DateSegment {
  &[data-invalid] {
    color: var(--invalid-color);

    &:focus {
      background: var(--highlight-background-invalid);
      color: var(--highlight-foreground);
    }
  }
}

.react-aria-DateField {
  .react-aria-FieldError {
    font-size: 12px;
    color: var(--invalid-color);
  }
}
```

```
.react-aria-DateSegment {
  &[data-invalid] {
    color: var(--invalid-color);

    &:focus {
      background: var(--highlight-background-invalid);
      color: var(--highlight-foreground);
    }
  }
}

.react-aria-DateField {
  .react-aria-FieldError {
    font-size: 12px;
    color: var(--invalid-color);
  }
}
```

```
.react-aria-DateSegment {
  &[data-invalid] {
    color: var(--invalid-color);

    &:focus {
      background: var(--highlight-background-invalid);
      color: var(--highlight-foreground);
    }
  }
}

.react-aria-DateField {
  .react-aria-FieldError {
    font-size: 12px;
    color: var(--invalid-color);
  }
}
```

By default, `FieldError` displays default validation messages provided by the browser. See [Customizing error messages](https://react-spectrum.adobe.com/react-aria/forms.html#customizing-error-messages) in the Forms guide to learn how to provide your own custom errors.

### Minimum and maximum values[#](#minimum-and-maximum-values)

The `minValue` and `maxValue` props can also be used to ensure the value is within a specific range. This example only accepts dates after today.

```
import {today} from '@internationalized/date';

<Form>
  <MyDateField
    label="Appointment date"
    minValue={today(getLocalTimeZone())}    defaultValue={parseDate('2022-02-03')} />
  <Button type="submit">Submit</Button>
</Form>
```

```
import {today} from '@internationalized/date';

<Form>
  <MyDateField
    label="Appointment date"
    minValue={today(getLocalTimeZone())}    defaultValue={parseDate('2022-02-03')} />
  <Button type="submit">Submit</Button>
</Form>
```

```
import {today} from '@internationalized/date';

<Form>
  <MyDateField
    label="Appointment date"
    minValue={today(
      getLocalTimeZone()
    )}    defaultValue={parseDate(
      '2022-02-03'
    )}
  />
  <Button type="submit">
    Submit
  </Button>
</Form>
```

The `validate` function can be used to perform custom validation logic. It receives the current field value, and should return a string or array of strings representing one or more error messages if the value is invalid.

This example validates that the selected date is a weekday and not a weekend according to the current locale.

```
import {isWeekend} from '@internationalized/date';
import {useLocale} from 'react-aria';

function Example() {
  let { locale } = useLocale();

  return (
    <Form>
      <MyDateField
        label="Appointment date"
        validate={(date) =>
          date && isWeekend(date, locale) ? 'We are closed on weekends.' : null}        defaultValue={parseDate('2023-10-28')}
      />
      <Button type="submit">Submit</Button>
    </Form>
  );
}
```

```
import {isWeekend} from '@internationalized/date';
import {useLocale} from 'react-aria';

function Example() {
  let { locale } = useLocale();

  return (
    <Form>
      <MyDateField
        label="Appointment date"
        validate={(date) =>
          date && isWeekend(date, locale)
            ? 'We are closed on weekends.'
            : null}        defaultValue={parseDate('2023-10-28')}
      />
      <Button type="submit">Submit</Button>
    </Form>
  );
}
```

```
import {isWeekend} from '@internationalized/date';
import {useLocale} from 'react-aria';

function Example() {
  let { locale } =
    useLocale();

  return (
    <Form>
      <MyDateField
        label="Appointment date"
        validate={(date) =>
          date &&
            isWeekend(
              date,
              locale
            )
            ? 'We are closed on weekends.'
            : null}        defaultValue={parseDate(
          '2023-10-28'
        )}
      />
      <Button type="submit">
        Submit
      </Button>
    </Form>
  );
}
```

The `description` slot can be used to associate additional help text with a date field.

```
<DateField granularity="hour">
  <Label>Appointment time</Label>
  <DateInput>
    {segment => <DateSegment segment={segment} />}
  </DateInput>
  <Text slot="description">Please select a weekday between 9 AM and 5 PM.</Text></DateField>
```

```
<DateField granularity="hour">
  <Label>Appointment time</Label>
  <DateInput>
    {(segment) => <DateSegment segment={segment} />}
  </DateInput>
  <Text slot="description">
    Please select a weekday between 9 AM and 5 PM.
  </Text></DateField>
```

```
<DateField granularity="hour">
  <Label>
    Appointment time
  </Label>
  <DateInput>
    {(segment) => (
      <DateSegment
        segment={segment}
      />
    )}
  </DateInput>
  <Text slot="description">
    Please select a
    weekday between 9
    AM and 5 PM.
  </Text></DateField>
```

Show CSS

```
.react-aria-DateField {
  [slot=description] {
    font-size: 12px;
  }
}
```

```
.react-aria-DateField {
  [slot=description] {
    font-size: 12px;
  }
}
```

```
.react-aria-DateField {
  [slot=description] {
    font-size: 12px;
  }
}
```

* * *

When no value is set, a placeholder is shown. The format of the placeholder is influenced by the `granularity` and `placeholderValue` props. `placeholderValue` also controls the default values of each segment when the user first interacts with them, e.g. using the up and down arrow keys. By default, the `placeholderValue` is the current date at midnight, but you can set it to a more appropriate value if needed.

```
import {CalendarDate} from '@internationalized/date';

<MyDateField
  label="Birth date"
  placeholderValue={new CalendarDate(1980, 1, 1)} />
```

```
import {CalendarDate} from '@internationalized/date';

<MyDateField
  label="Birth date"
  placeholderValue={new CalendarDate(1980, 1, 1)} />
```

```
import {CalendarDate} from '@internationalized/date';

<MyDateField
  label="Birth date"
  placeholderValue={new CalendarDate(
    1980,
    1,
    1
  )}
/>
```

When a `ZonedDateTime` object is provided as the value to `DateField`, the time zone abbreviation is displayed by default. However, if this is displayed elsewhere or implicit based on the usecase, it can be hidden using the `hideTimeZone` option.

```
<MyDateField
  label="Appointment time"
  defaultValue={parseZonedDateTime('2022-11-07T10:45[America/Los_Angeles]')}
  hideTimeZone />
```

```
<MyDateField
  label="Appointment time"
  defaultValue={parseZonedDateTime(
    '2022-11-07T10:45[America/Los_Angeles]'
  )}
  hideTimeZone
/>
```

```
<MyDateField
  label="Appointment time"
  defaultValue={parseZonedDateTime(
    '2022-11-07T10:45[America/Los_Angeles]'
  )}
  hideTimeZone
/>
```

By default, `DateField` displays times in either 12 or 24 hour hour format depending on the user's locale. However, this can be overridden using the `hourCycle` prop if needed for a specific usecase. This example forces `DateField` to use 24-hour time, regardless of the locale.

```
<MyDateField
  label="Appointment time"
  granularity="minute"
  hourCycle={24} />
```

```
<MyDateField
  label="Appointment time"
  granularity="minute"
  hourCycle={24} />
```

```
<MyDateField
  label="Appointment time"
  granularity="minute"
  hourCycle={24}
/>
```

* * *

Name

Type

Default

Description

`autoComplete`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

Describes the type of autocomplete functionality the input should provide if any. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefautocomplete).

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

`validate`

`( (value: [MappedDateValue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/datepicker/src/index.d.ts:MappedDateValue)<[DateValue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/datepicker/src/index.d.ts:DateValue)> )) => [ValidationError](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/inputs.d.ts:ValidationError) | true | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null) | [undefined](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined)`

—

A function that returns an error message if a given value is invalid. Validation errors are displayed to the user when the form is submitted if `validationBehavior="native"`. For realtime validation, use the `isInvalid` prop instead.

`autoFocus`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the element should receive focus on render.

`value`

`[DateValue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/datepicker/src/index.d.ts:DateValue) | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)`

—

The current value (controlled).

`defaultValue`

`[DateValue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/datepicker/src/index.d.ts:DateValue) | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)`

—

The default value (uncontrolled).

`name`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

The name of the input element, used when submitting an HTML form. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefname).

`form`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

—

The `<form>` element to associate the input with. The value of this attribute must be the id of a `<form>` in the same document. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input#form).

`validationBehavior`

`'native' | 'aria'`

`'native'`

Whether to use native HTML form validation to prevent form submission when the value is missing or invalid, or mark the field as required or invalid via ARIA.

`children`

`[ChildrenOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ChildrenOrFunction)<[DateFieldRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/DateField.tsx:DateFieldRenderProps)>`

—

The children of the component. A function may be provided to alter the children based on component state.

`className`

`[ClassNameOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ClassNameOrFunction)<[DateFieldRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/DateField.tsx:DateFieldRenderProps)>`

—

The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.

`style`

`[StyleOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:StyleOrFunction)<[DateFieldRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/DateField.tsx:DateFieldRenderProps)>`

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

`onChange`

`( (value: [MappedDateValue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/datepicker/src/index.d.ts:MappedDateValue)<[DateValue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/datepicker/src/index.d.ts:DateValue)> |  | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null) )) => void`

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

The `<DateInput>` component renders a group of date segments. It accepts a function as its `children`, which is called to render a `<DateSegment>` for each segment.

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

* * *

React Aria components can be styled in many ways, including using CSS classes, inline styles, utility classes (e.g. Tailwind), CSS-in-JS (e.g. Styled Components), etc. By default, all components include a builtin `className` attribute which can be targeted using CSS selectors. These follow the `react-aria-ComponentName` naming convention.

```
.react-aria-DateField {
  /* ... */
}
```

```
.react-aria-DateField {
  /* ... */
}
```

```
.react-aria-DateField {
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

The states, selectors, and render props for each component used in a `DateField` are documented below.

A `DateField` can be targeted with the `.react-aria-DateField` CSS selector, or by overriding with a custom `className`. It supports the following states and render props:

Name

CSS Selector

Description

`state`

`—`

State of the date field.

`isInvalid`

`[data-invalid]`

Whether the date field is invalid.

`isDisabled`

`[data-disabled]`

Whether the date field is disabled.

`isReadOnly`

`[data-readonly]`

Whether the date field is read only.

A `Label` can be targeted with the `.react-aria-Label` CSS selector, or by overriding with a custom `className`.

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

The help text elements within a `DateField` can be targeted with the `[slot=description]` and `[slot=errorMessage]` CSS selectors, or by adding a custom `className`.

A `FieldError` can be targeted with the `.react-aria-FieldError` CSS selector, or by overriding with a custom `className`. It supports the following render props:

Name

Description

`isInvalid`

Whether the input value is invalid.

`validationErrors`

The current error messages for the input if it is invalid, otherwise an empty array.

`validationDetails`

The native validation details for the input.

* * *

If you need to customize one of the components within a `DateField`, such as `Label` or `DateSegment`, in many cases you can create a wrapper component. This lets you customize the props passed to the component.

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

The components in a DateField support the following contexts:

Component

Context

Props

Ref

`DateField`

`DateFieldContext`

`[DateFieldProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/DateField.tsx:DateFieldProps)`

`[HTMLDivElement](https://developer.mozilla.org/docs/Web/API/HTMLDivElement)`

This example shows a `FieldGroup` component that renders a group of date fields with a title and optional error message. It uses the [useId](https://react-spectrum.adobe.com/react-aria/useId.html) hook to generate a unique id for the error message. All of the child DateFields are marked invalid and associated with the error message via the `aria-describedby` attribute passed to the `DateFieldContext` provider.

```
import {DateFieldContext} from 'react-aria-components';
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
      <DateFieldContext.Provider
        value={{
          isInvalid: !!errorMessage,
          'aria-describedby': errorMessage ? errorId : undefined
        }}
      >        {children}
      </DateFieldContext.Provider>
      {errorMessage && (
        <small id={errorId} className="invalid">{errorMessage}</small>
      )}
    </fieldset>
  );
}

<FieldGroup
  title="Dates"
  errorMessage="Tickets must go on sale before event."
>
  <MyDateField label="Event date" defaultValue={parseDate('2023-07-12')} />
  <MyDateField
    label="Ticket sale date"
    defaultValue={parseDate('2023-08-03')}
  />
</FieldGroup>
```

```
import {DateFieldContext} from 'react-aria-components';
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
      <DateFieldContext.Provider
        value={{
          isInvalid: !!errorMessage,
          'aria-describedby': errorMessage
            ? errorId
            : undefined
        }}
      >        {children}
      </DateFieldContext.Provider>
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
  errorMessage="Tickets must go on sale before event."
>
  <MyDateField
    label="Event date"
    defaultValue={parseDate('2023-07-12')}
  />
  <MyDateField
    label="Ticket sale date"
    defaultValue={parseDate('2023-08-03')}
  />
</FieldGroup>
```

```
import {DateFieldContext} from 'react-aria-components';
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
      <DateFieldContext.Provider
        value={{
          isInvalid:
            !!errorMessage,
          'aria-describedby':
            errorMessage
              ? errorId
              : undefined
        }}
      >        {children}
      </DateFieldContext.Provider>
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
  errorMessage="Tickets must go on sale before event."
>
  <MyDateField
    label="Event date"
    defaultValue={parseDate(
      '2023-07-12'
    )}
  />
  <MyDateField
    label="Ticket sale date"
    defaultValue={parseDate(
      '2023-08-03'
    )}
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

DateField passes props to its child components, such as the label, via their associated contexts. These contexts are exported so you can also consume them in your own custom components. This enables you to reuse existing components from your app or component library together with React Aria Components.

Component

Context

Props

Ref

`Label`

`LabelContext`

`[LabelProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Label.tsx:LabelProps)`

`[HTMLLabelElement](https://developer.mozilla.org/docs/Web/API/HTMLLabelElement)`

`Text`

`TextContext`

`[TextProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Text.tsx:TextProps)`

`[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)`

This example consumes from `LabelContext` in an existing styled label component to make it compatible with React Aria Components. The `[useContextProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:useContextProps)` hook merges the local props and ref with the ones provided via context by DateField.

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

Now you can use `MyCustomLabel` within a `DateField`, in place of the builtin React Aria Components `Label`.

```
<DateField>
  <MyCustomLabel>Name</MyCustomLabel>  <DateInput>
    {segment => <DateSegment segment={segment} />}
  </DateInput>
</DateField>
```

```
<DateField>
  <MyCustomLabel>Name</MyCustomLabel>  <DateInput>
    {segment => <DateSegment segment={segment} />}
  </DateInput>
</DateField>
```

```
<DateField>
  <MyCustomLabel>
    Name
  </MyCustomLabel>  <DateInput>
    {(segment) => (
      <DateSegment
        segment={segment}
      />
    )}
  </DateInput>
</DateField>
```

DateField provides a `[DateFieldState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/datepicker/src/useDateFieldState.ts:DateFieldState)` object to its children via `DateFieldStateContext`. This can be used to access and manipulate the date field's state.

This example shows a `DateFormat` component that can be placed within a `DateField` to display the expected date format.

```
import {DateFieldStateContext} from 'react-aria-components';
import {useLocale} from 'react-aria';

function DateFormat() {
  let state = React.useContext(DateFieldStateContext)!;  let { locale } = useLocale();
  let displayNames = new Intl.DisplayNames(locale, { type: 'dateTimeField' });
  let format = state.segments.map((segment) =>
    segment.type === 'literal' ? segment.text : displayNames.of(segment.type)
  ).join(' ');
  return <small>{format}</small>;
}

<DateField defaultValue={today(getLocalTimeZone())}>
  <Label>Date</Label>
  <DateInput>
    {(segment) => <DateSegment segment={segment} />}
  </DateInput>
  <DateFormat /></DateField>
```

```
import {DateFieldStateContext} from 'react-aria-components';
import {useLocale} from 'react-aria';

function DateFormat() {
  let state = React.useContext(DateFieldStateContext)!;  let { locale } = useLocale();
  let displayNames = new Intl.DisplayNames(locale, {
    type: 'dateTimeField'
  });
  let format = state.segments.map((segment) =>
    segment.type === 'literal'
      ? segment.text
      : displayNames.of(segment.type)
  ).join(' ');
  return <small>{format}</small>;
}

<DateField defaultValue={today(getLocalTimeZone())}>
  <Label>Date</Label>
  <DateInput>
    {(segment) => <DateSegment segment={segment} />}
  </DateInput>
  <DateFormat /></DateField>
```

```
import {DateFieldStateContext} from 'react-aria-components';
import {useLocale} from 'react-aria';

function DateFormat() {
  let state = React
    .useContext(
      DateFieldStateContext
    )!;  let { locale } =
    useLocale();
  let displayNames =
    new Intl
      .DisplayNames(
      locale,
      {
        type:
          'dateTimeField'
      }
    );
  let format = state
    .segments.map(
      (segment) =>
        segment.type ===
            'literal'
          ? segment.text
          : displayNames
            .of(
              segment
                .type
            )
    ).join(' ');
  return (
    <small>
      {format}
    </small>
  );
}

<DateField
  defaultValue={today(
    getLocalTimeZone()
  )}
>
  <Label>Date</Label>
  <DateInput>
    {(segment) => (
      <DateSegment
        segment={segment}
      />
    )}
  </DateInput>
  <DateFormat /></DateField>
```

If you need to customize things even further, such as accessing internal state or customizing DOM structure, you can drop down to the lower level Hook-based API. See [useDateField](https://react-spectrum.adobe.com/react-aria/useDateField.html) for more details.