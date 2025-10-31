# TimeField

**Source**: [https://react-spectrum.adobe.com/react-aria/TimeField.html](https://react-spectrum.adobe.com/react-aria/TimeField.html)

> Documentation for TimeField in the React Aria package.

---

A time field allows users to enter and edit time values using a keyboard. Each part of a time value is displayed in an individually editable segment.

* * *

```
import {TimeField, Label, DateInput, DateSegment} from 'react-aria-components';

<TimeField>
  <Label>Event time</Label>
  <DateInput>
    {segment => <DateSegment segment={segment} />}
  </DateInput>
</TimeField>
```

```
import {
  DateInput,
  DateSegment,
  Label,
  TimeField
} from 'react-aria-components';

<TimeField>
  <Label>Event time</Label>
  <DateInput>
    {(segment) => <DateSegment segment={segment} />}
  </DateInput>
</TimeField>
```

```
import {
  DateInput,
  DateSegment,
  Label,
  TimeField
} from 'react-aria-components';

<TimeField>
  <Label>
    Event time
  </Label>
  <DateInput>
    {(segment) => (
      <DateSegment
        segment={segment}
      />
    )}
  </DateInput>
</TimeField>
```

Show CSS

```
@import "@react-aria/example-theme";

.react-aria-TimeField {
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

.react-aria-TimeField {
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

.react-aria-TimeField {
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

A time field can be built using `<input type="time">`, but this is very limited in functionality, lacking in internationalization capabilities, inconsistent between browsers, and difficult to style. `TimeField` helps achieve accessible and international time fields that can be styled as needed.

-   **International** – Support for locale-specific formatting, number systems, hour cycles, and right-to-left layout.
-   **Time zone aware** – Times can optionally include a time zone. All modifications follow time zone rules such as daylight saving time.
-   **Accessible** – Each time unit is displayed as an individually focusable and editable segment, which allows users an easy way to edit times using the keyboard, in any format and locale.
-   **Touch friendly** – Time segments are editable using an easy to use numeric keypad, and all interactions are accessible using touch-based screen readers.
-   **Validation** – Integrates with HTML forms, supporting required, minimum and maximum values, custom validation functions, realtime validation, and server-side validation errors.
-   **Customizable** – As with all of React Aria, the DOM structure and styling of all elements can be fully customized.

Read our [blog post](https://react-spectrum.adobe.com/blog/date-and-time-pickers-for-all.html) for more details about the internationalization, accessibility, and user experience features implemented by `TimeField`.

* * *

Shows a time field with labels pointing to its parts, including the label, field, and segments.Appointment time12 : 45 PMSegmentFieldLabel

A time field consists of a label, and a group of segments representing each unit of a time (e.g. hours, minutes, and seconds). Each segment is individually focusable and editable by the user, by typing or using the arrow keys to increment and decrement the value. This approach allows values to be formatted and parsed correctly regardless of the locale or time format, and offers an easy and error-free way to edit times using the keyboard.

`TimeField` also supports optional description and error message elements, which can be used to provide more context about the field, and any validation messages. These are linked with the input via the `aria-describedby` attribute.

```
import {DateInput, DateSegment, FieldError, Label, Text, TimeField} from 'react-aria-components';

<TimeField>
  <Label />
  <DateInput>
    {(segment) => <DateSegment segment={segment} />}
  </DateInput>
  <Text slot="description" />
  <FieldError />
</TimeField>
```

```
import {
  DateInput,
  DateSegment,
  FieldError,
  Label,
  Text,
  TimeField
} from 'react-aria-components';

<TimeField>
  <Label />
  <DateInput>
    {(segment) => <DateSegment segment={segment} />}
  </DateInput>
  <Text slot="description" />
  <FieldError />
</TimeField>
```

```
import {
  DateInput,
  DateSegment,
  FieldError,
  Label,
  Text,
  TimeField
} from 'react-aria-components';

<TimeField>
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
</TimeField>
```

If the time field does not have a visible label, an `aria-label` or `aria-labelledby` prop must be passed instead to identify it to assistive technology.

Note that most of this anatomy is shared with [DateField](https://react-spectrum.adobe.com/react-aria/DateField.html), so you can reuse many components between them if you have both.

`TimeField` makes use of the following concepts:

[

@internationalized/date

Represent and manipulate dates and times in a locale-aware manner.

](https://react-spectrum.adobe.com/internationalized/date/index.html)[

Forms

Validating and submitting form data, and integrating with form libraries.

](https://react-spectrum.adobe.com/react-aria/forms.html)

A `TimeField` uses the following components, which may also be used standalone or reused in other components.

[

Label

A label provides context for an input element.

](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label)

* * *

To help kick-start your project, we offer starter kits that include example implementations of all React Aria components with various styling solutions. All components are fully styled, including support for dark mode, high contrast mode, and all UI states. Each starter comes with a pre-configured [Storybook](https://storybook.js.org/) that you can experiment with, or use as a starting point for your own component library.

* * *

If you will use a TimeField in multiple places in your app, you can wrap all of the pieces into a reusable component. This way, the DOM structure, styling code, and other logic are defined in a single place and reused everywhere to ensure consistency.

This example wraps `TimeField` and all of its children together into a single component which accepts a `label` prop, which is passed to the right place. It also shows how to use the `description` slot to render [help text](#description), and `FieldError` component to render [validation errors](#validation).

```
import type {TimeFieldProps, TimeValue, ValidationResult} from 'react-aria-components';
import {FieldError, Text} from 'react-aria-components';

interface MyTimeFieldProps<T extends TimeValue> extends TimeFieldProps<T> {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
}

function MyTimeField<T extends TimeValue>(
  { label, description, errorMessage, ...props }: MyTimeFieldProps<T>
) {
  return (
    <TimeField {...props}>
      <Label>{label}</Label>
      <DateInput>
        {(segment) => <DateSegment segment={segment} />}
      </DateInput>
      {description && <Text slot="description">{description}</Text>}
      <FieldError>{errorMessage}</FieldError>
    </TimeField>
  );
}

<MyTimeField label="Event time" />
```

```
import type {
  TimeFieldProps,
  TimeValue,
  ValidationResult
} from 'react-aria-components';
import {FieldError, Text} from 'react-aria-components';

interface MyTimeFieldProps<T extends TimeValue>
  extends TimeFieldProps<T> {
  label?: string;
  description?: string;
  errorMessage?:
    | string
    | ((validation: ValidationResult) => string);
}

function MyTimeField<T extends TimeValue>(
  { label, description, errorMessage, ...props }:
    MyTimeFieldProps<T>
) {
  return (
    <TimeField {...props}>
      <Label>{label}</Label>
      <DateInput>
        {(segment) => <DateSegment segment={segment} />}
      </DateInput>
      {description && (
        <Text slot="description">{description}</Text>
      )}
      <FieldError>{errorMessage}</FieldError>
    </TimeField>
  );
}

<MyTimeField label="Event time" />
```

```
import type {
  TimeFieldProps,
  TimeValue,
  ValidationResult
} from 'react-aria-components';
import {
  FieldError,
  Text
} from 'react-aria-components';

interface MyTimeFieldProps<
  T extends TimeValue
> extends
  TimeFieldProps<T> {
  label?: string;
  description?: string;
  errorMessage?:
    | string
    | ((
      validation:
        ValidationResult
    ) => string);
}

function MyTimeField<
  T extends TimeValue
>({
  label,
  description,
  errorMessage,
  ...props
}: MyTimeFieldProps<T>) {
  return (
    <TimeField
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
    </TimeField>
  );
}

<MyTimeField label="Event time" />
```

* * *

A `TimeField` displays a placeholder by default. An initial, uncontrolled value can be provided to the `TimeField` using the `defaultValue` prop. Alternatively, a controlled value can be provided using the `value` prop.

Time values are provided using objects in the [@internationalized/date](https://react-spectrum.adobe.com/internationalized/date/) package. This library handles correct international date and time manipulation across calendars, time zones, and other localization concerns.

`TimeField` only supports selecting times, but values with date components are also accepted. By default, `TimeField` will emit `[Time](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@internationalized/date/src/CalendarDate.ts:Time)` objects in the `onChange` event, but if a `[CalendarDateTime](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@internationalized/date/src/CalendarDate.ts:CalendarDateTime)` or `[ZonedDateTime](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@internationalized/date/src/CalendarDate.ts:ZonedDateTime)` object is passed as the `value` or `defaultValue`, values of that type will be emitted, changing only the time and preserving the date components.

```
import {Time} from '@internationalized/date';

function Example() {
  let [value, setValue] = React.useState(new Time(11, 45));

  return (
    <>
      <MyTimeField
        label="Time (uncontrolled)"
        defaultValue={new Time(11, 45)} />
      <MyTimeField
        label="Time (controlled)"
        value={value}
        onChange={setValue} />
    </>
  );
}
```

```
import {Time} from '@internationalized/date';

function Example() {
  let [value, setValue] = React.useState(new Time(11, 45));

  return (
    <>
      <MyTimeField
        label="Time (uncontrolled)"
        defaultValue={new Time(11, 45)} />
      <MyTimeField
        label="Time (controlled)"
        value={value}
        onChange={setValue} />
    </>
  );
}
```

```
import {Time} from '@internationalized/date';

function Example() {
  let [value, setValue] =
    React.useState(
      new Time(11, 45)
    );

  return (
    <>
      <MyTimeField
        label="Time (uncontrolled)"
        defaultValue={new Time(
          11,
          45
        )}
      />
      <MyTimeField
        label="Time (controlled)"
        value={value}
        onChange={setValue}
      />
    </>
  );
}
```

`Time` values may also be parsed from strings using the `[parseTime](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@internationalized/date/src/string.ts:parseTime)` function. This accepts [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601#Times) formatted time strings such as `"04:45:23.123"`. The `toString` method of a `Time` object can also be used to convert a time object to a string.

`TimeField` is time zone aware when a `[ZonedDateTime](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@internationalized/date/src/CalendarDate.ts:ZonedDateTime)` object is provided as the value. In this case, the time zone abbreviation is displayed, and time zone concerns such as daylight saving time are taken into account when the value is manipulated.

In most cases, your data will come from and be sent to a server as an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string. [@internationalized/date](https://react-spectrum.adobe.com/internationalized/date/) includes functions for parsing strings in multiple formats into `[ZonedDateTime](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@internationalized/date/src/CalendarDate.ts:ZonedDateTime)` objects. Which format you use will depend on what information you need to store.

-   `[parseZonedDateTime](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@internationalized/date/src/string.ts:parseZonedDateTime)` – This function parses a date with an explicit time zone and optional UTC offset attached (e.g. `"2021-11-07T00:45[America/Los_Angeles]"` or `"2021-11-07T00:45-07:00[America/Los_Angeles]"`). This format preserves the maximum amount of information. If the exact local time and time zone that a user selected is important, use this format. Storing the time zone and offset that was selected rather than converting to UTC ensures that the local time is correct regardless of daylight saving rule changes (e.g. if a locale abolishes DST). Examples where this applies include calendar events, reminders, and other times that occur in a particular location.
-   `[parseAbsolute](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@internationalized/date/src/string.ts:parseAbsolute)` – This function parses an absolute date and time that occurs at the same instant at all locations on Earth. It can be represented in UTC (e.g. `"2021-11-07T07:45:00Z"`), or stored with a particular offset (e.g. `"2021-11-07T07:45:00-07:00"`). A time zone identifier, e.g. `America/Los_Angeles`, must be passed, and the result will be converted into that time zone. Absolute times are the best way to represent events that occurred in the past, or future events where an exact time is needed, regardless of time zone.
-   `[parseAbsoluteToLocal](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@internationalized/date/src/string.ts:parseAbsoluteToLocal)` – This function parses an absolute date and time into the current user's local time zone. It is a shortcut for `parseAbsolute`, and accepts the same formats.

```
import {parseZonedDateTime} from '@internationalized/date';

<MyTimeField
  label="Event time"
  defaultValue={parseZonedDateTime('2022-11-07T00:45[America/Los_Angeles]')}
/>
```

```
import {parseZonedDateTime} from '@internationalized/date';

<MyTimeField
  label="Event time"
  defaultValue={parseZonedDateTime(
    '2022-11-07T00:45[America/Los_Angeles]'
  )}
/>
```

```
import {parseZonedDateTime} from '@internationalized/date';

<MyTimeField
  label="Event time"
  defaultValue={parseZonedDateTime(
    '2022-11-07T00:45[America/Los_Angeles]'
  )}
/>
```

`TimeField` displays times in the time zone included in the `ZonedDateTime` object. The above example is always displayed in Pacific Standard Time because the `America/Los_Angeles` time zone identifier is provided. [@internationalized/date](https://react-spectrum.adobe.com/internationalized/date/) includes functions for converting dates between time zones, or parsing a date directly into a specific time zone or the user's local time zone, as shown below.

```
import {parseAbsoluteToLocal} from '@internationalized/date';

<MyTimeField
  label="Event time"
  defaultValue={parseAbsoluteToLocal('2021-11-07T07:45:00Z')}
/>
```

```
import {parseAbsoluteToLocal} from '@internationalized/date';

<MyTimeField
  label="Event time"
  defaultValue={parseAbsoluteToLocal(
    '2021-11-07T07:45:00Z'
  )}
/>
```

```
import {parseAbsoluteToLocal} from '@internationalized/date';

<MyTimeField
  label="Event time"
  defaultValue={parseAbsoluteToLocal(
    '2021-11-07T07:45:00Z'
  )}
/>
```

The `granularity` prop allows you to control the smallest unit that is displayed by `TimeField`. By default, times are displayed with `"minute"` granularity. More granular time values can be displayed by setting the `granularity` prop to `"second"`.

```
<MyTimeField
  label="Event time"
  granularity="second"  defaultValue={parseAbsoluteToLocal('2021-04-07T18:45:22Z')} />
```

```
<MyTimeField
  label="Event time"
  granularity="second"  defaultValue={parseAbsoluteToLocal(
    '2021-04-07T18:45:22Z'
  )}
/>
```

```
<MyTimeField
  label="Event time"
  granularity="second"  defaultValue={parseAbsoluteToLocal(
    '2021-04-07T18:45:22Z'
  )}
/>
```

TimeField supports the `name` prop for integration with HTML forms. The value will be submitted to the server as an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string, e.g. `"08:45:00"`.

```
<MyTimeField label="Meeting time" name="meetingTime" />
```

```
<MyTimeField label="Meeting time" name="meetingTime" />
```

```
<MyTimeField
  label="Meeting time"
  name="meetingTime"
/>
```

* * *

`TimeField` accepts an `onChange` prop which is triggered whenever the time is edited by the user. The example below uses `onChange` to update a separate element with a formatted version of the date in the user's locale and local time zone. This is done by converting the date to a native JavaScript `Date` object to pass to the formatter. `TimeField` allows editing the time components while keeping the date fixed.

```
import {useDateFormatter} from 'react-aria';

function Example() {
  let [date, setDate] = React.useState(
    parseAbsoluteToLocal('2021-04-07T18:45:22Z')
  );
  let formatter = useDateFormatter({ dateStyle: 'long', timeStyle: 'long' });

  return (
    <>
      <MyTimeField label="Time" value={date} onChange={setDate} />
      <p>
        Selected date and time:{' '}
        {(date?.toDate && formatter.format(date.toDate())) ||
          (date && date.toString()) || '--'}
      </p>
    </>
  );
}
```

```
import {useDateFormatter} from 'react-aria';

function Example() {
  let [date, setDate] = React.useState(
    parseAbsoluteToLocal('2021-04-07T18:45:22Z')
  );
  let formatter = useDateFormatter({
    dateStyle: 'long',
    timeStyle: 'long'
  });

  return (
    <>
      <MyTimeField
        label="Time"
        value={date}
        onChange={setDate}
      />
      <p>
        Selected date and time:{' '}
        {(date?.toDate &&
          formatter.format(date.toDate())) ||
          (date && date.toString()) || '--'}
      </p>
    </>
  );
}
```

```
import {useDateFormatter} from 'react-aria';

function Example() {
  let [date, setDate] =
    React.useState(
      parseAbsoluteToLocal(
        '2021-04-07T18:45:22Z'
      )
    );
  let formatter =
    useDateFormatter({
      dateStyle: 'long',
      timeStyle: 'long'
    });

  return (
    <>
      <MyTimeField
        label="Time"
        value={date}
        onChange={setDate}
      />
      <p>
        Selected date and
        time:{' '}
        {(date?.toDate &&
          formatter
            .format(
              date
                .toDate()
            )) ||
          (date &&
            date
              .toString()) ||
          '--'}
      </p>
    </>
  );
}
```

* * *

TimeField supports the `isRequired` prop to ensure the user enters a value, as well as minimum and maximum values, and custom client and server-side validation. It can also be integrated with other form libraries. See the [Forms](https://react-spectrum.adobe.com/react-aria/forms.html) guide to learn more.

To display validation errors, add a `<FieldError>` element as a child of the TimeField. This allows you to render error messages from all of the above sources with consistent custom styles.

```
import {Form, FieldError, Button} from 'react-aria-components';

<Form>
  <TimeField name="time" isRequired>    <Label>Meeting time</Label>
    <DateInput>
      {segment => <DateSegment segment={segment} />}
    </DateInput>
    <FieldError />  </TimeField>
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
  <TimeField name="time" isRequired>    <Label>Meeting time</Label>
    <DateInput>
      {(segment) => <DateSegment segment={segment} />}
    </DateInput>
    <FieldError />  </TimeField>
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
  <TimeField
    name="time"
    isRequired
  >    <Label>
      Meeting time
    </Label>
    <DateInput>
      {(segment) => (
        <DateSegment
          segment={segment}
        />
      )}
    </DateInput>
    <FieldError />  </TimeField>
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

.react-aria-TimeField {
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

.react-aria-TimeField {
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

.react-aria-TimeField {
  .react-aria-FieldError {
    font-size: 12px;
    color: var(--invalid-color);
  }
}
```

By default, `FieldError` displays default validation messages provided by the browser. See [Customizing error messages](https://react-spectrum.adobe.com/react-aria/forms.html#customizing-error-messages) in the Forms guide to learn how to provide your own custom errors.

### Minimum and maximum values[#](#minimum-and-maximum-values)

The `minValue` and `maxValue` props can also be used to ensure the value is within a specific range. This example only accepts times between 9 AM and 5 PM.

```
<Form>
  <MyTimeField
    label="Meeting time"
    minValue={new Time(9)}
    maxValue={new Time(17)}    defaultValue={new Time(8)} />
  <Button type="submit">Submit</Button>
</Form>
```

```
<Form>
  <MyTimeField
    label="Meeting time"
    minValue={new Time(9)}
    maxValue={new Time(17)}    defaultValue={new Time(8)} />
  <Button type="submit">Submit</Button>
</Form>
```

```
<Form>
  <MyTimeField
    label="Meeting time"
    minValue={new Time(
      9
    )}
    maxValue={new Time(
      17
    )}    defaultValue={new Time(
      8
    )}
  />
  <Button type="submit">
    Submit
  </Button>
</Form>
```

The `validate` function can be used to perform custom validation logic. It receives the current field value, and should return a string or array of strings representing one or more error messages if the value is invalid.

This example validates that the selected time is on a 15 minute increment.

```
<Form>
  <MyTimeField
    label="Meeting time"
    validate={(time) =>
      time?.minute % 15 !== 0 ? 'Meetings start every 15 minutes.' : null}    defaultValue={new Time(9, 25)}
  />
  <Button type="submit">Submit</Button>
</Form>
```

```
<Form>
  <MyTimeField
    label="Meeting time"
    validate={(time) =>
      time?.minute % 15 !== 0
        ? 'Meetings start every 15 minutes.'
        : null}    defaultValue={new Time(9, 25)}
  />
  <Button type="submit">Submit</Button>
</Form>
```

```
<Form>
  <MyTimeField
    label="Meeting time"
    validate={(time) =>
      time?.minute %
            15 !== 0
        ? 'Meetings start every 15 minutes.'
        : null}    defaultValue={new Time(
      9,
      25
    )}
  />
  <Button type="submit">
    Submit
  </Button>
</Form>
```

The `description` slot can be used to associate additional help text with a date field.

```
<TimeField>
  <Label>Appointment time</Label>
  <DateInput>
    {segment => <DateSegment segment={segment} />}
  </DateInput>
  <Text slot="description">Please select a time between 9 AM and 5 PM.</Text></TimeField>
```

```
<TimeField>
  <Label>Appointment time</Label>
  <DateInput>
    {(segment) => <DateSegment segment={segment} />}
  </DateInput>
  <Text slot="description">
    Please select a time between 9 AM and 5 PM.
  </Text></TimeField>
```

```
<TimeField>
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
    time between 9 AM
    and 5 PM.
  </Text></TimeField>
```

Show CSS

```
.react-aria-TimeField {
  [slot=description] {
    font-size: 12px;
  }
}
```

```
.react-aria-TimeField {
  [slot=description] {
    font-size: 12px;
  }
}
```

```
.react-aria-TimeField {
  [slot=description] {
    font-size: 12px;
  }
}
```

* * *

When no value is set, a placeholder is shown. The format of the placeholder is influenced by the `granularity` and `placeholderValue` props. `placeholderValue` also controls the default values of each segment when the user first interacts with them, e.g. using the up and down arrow keys. By default, the `placeholderValue` is midnight, but you can set it to a more appropriate value if needed.

```
<MyTimeField label="Meeting time" placeholderValue={new Time(9)} />
```

```
<MyTimeField
  label="Meeting time"
  placeholderValue={new Time(9)}
/>
```

```
<MyTimeField
  label="Meeting time"
  placeholderValue={new Time(
    9
  )}
/>
```

When a `ZonedDateTime` object is provided as the value to `TimeField`, the time zone abbreviation is displayed by default. However, if this is displayed elsewhere or implicit based on the usecase, it can be hidden using the `hideTimeZone` option.

```
<MyTimeField
  label="Appointment time"
  defaultValue={parseZonedDateTime('2022-11-07T10:45[America/Los_Angeles]')}
  hideTimeZone />
```

```
<MyTimeField
  label="Appointment time"
  defaultValue={parseZonedDateTime(
    '2022-11-07T10:45[America/Los_Angeles]'
  )}
  hideTimeZone
/>
```

```
<MyTimeField
  label="Appointment time"
  defaultValue={parseZonedDateTime(
    '2022-11-07T10:45[America/Los_Angeles]'
  )}
  hideTimeZone
/>
```

By default, `TimeField` displays times in either 12 or 24 hour hour format depending on the user's locale. However, this can be overridden using the `hourCycle` prop if needed for a specific usecase. This example forces `TimeField` to use 24-hour time, regardless of the locale.

```
<MyTimeField
  label="Appointment time"
  hourCycle={24} />
```

```
<MyTimeField
  label="Appointment time"
  hourCycle={24} />
```

```
<MyTimeField
  label="Appointment time"
  hourCycle={24}
/>
```

* * *

Name

Type

Default

Description

`hourCycle`

`12 | 24`

—

Whether to display the time in 12 or 24 hour format. By default, this is determined by the user's locale.

`granularity`

`'hour' | 'minute' | 'second'`

`'minute'`

Determines the smallest unit that is displayed in the time picker.

`hideTimeZone`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether to hide the time zone abbreviation.

`shouldForceLeadingZeros`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether to always show leading zeros in the hour field. By default, this is determined by the user's locale.

`placeholderValue`

`[TimeValue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/datepicker/src/index.d.ts:TimeValue)`

—

A placeholder time that influences the format of the placeholder shown when no value is selected. Defaults to 12:00 AM or 00:00 depending on the hour cycle.

`minValue`

`[TimeValue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/datepicker/src/index.d.ts:TimeValue) | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)`

—

The minimum allowed time that a user may select.

`maxValue`

`[TimeValue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/datepicker/src/index.d.ts:TimeValue) | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)`

—

The maximum allowed time that a user may select.

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

`( (value: [MappedTimeValue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/datepicker/src/index.d.ts:MappedTimeValue)<[TimeValue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/datepicker/src/index.d.ts:TimeValue)> )) => [ValidationError](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/inputs.d.ts:ValidationError) | true | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null) | [undefined](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/undefined)`

—

A function that returns an error message if a given value is invalid. Validation errors are displayed to the user when the form is submitted if `validationBehavior="native"`. For realtime validation, use the `isInvalid` prop instead.

`autoFocus`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

Whether the element should receive focus on render.

`value`

`[TimeValue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/datepicker/src/index.d.ts:TimeValue) | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)`

—

The current value (controlled).

`defaultValue`

`[TimeValue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/datepicker/src/index.d.ts:TimeValue) | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)`

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

`( (value: [MappedTimeValue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/datepicker/src/index.d.ts:MappedTimeValue)<[TimeValue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/datepicker/src/index.d.ts:TimeValue)> |  | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null) )) => void`

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
.react-aria-TimeField {
  /* ... */
}
```

```
.react-aria-TimeField {
  /* ... */
}
```

```
.react-aria-TimeField {
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

The states, selectors, and render props for each component used in a `TimeField` are documented below.

A `TimeField` can be targeted with the `.react-aria-TimeField` CSS selector, or by overriding with a custom `className`. It supports the following states and render props:

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

If you need to customize one of the components within a `TimeField`, such as `Label` or `DateSegment`, in many cases you can create a wrapper component. This lets you customize the props passed to the component.

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

`TimeField`

`TimeFieldContext`

`[TimeFieldProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/DateField.tsx:TimeFieldProps)`

`[HTMLDivElement](https://developer.mozilla.org/docs/Web/API/HTMLDivElement)`

This example shows a `FieldGroup` component that renders a group of time fields with a title and optional error message. It uses the [useId](https://react-spectrum.adobe.com/react-aria/useId.html) hook to generate a unique id for the error message. All of the child TimeFields are marked invalid and associated with the error message via the `aria-describedby` attribute passed to the `TimeFieldContext` provider.

```
import {TimeFieldContext} from 'react-aria-components';
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
      <TimeFieldContext.Provider
        value={{
          isInvalid: !!errorMessage,
          'aria-describedby': errorMessage ? errorId : undefined
        }}
      >        {children}
      </TimeFieldContext.Provider>
      {errorMessage && (
        <small id={errorId} className="invalid">{errorMessage}</small>
      )}
    </fieldset>
  );
}

<FieldGroup
  title="Schedule meeting time"
  errorMessage="End time must be after start time."
>
  <MyTimeField label="Start" defaultValue={new Time(13)} />
  <MyTimeField label="End" defaultValue={new Time(9)} />
</FieldGroup>
```

```
import {TimeFieldContext} from 'react-aria-components';
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
      <TimeFieldContext.Provider
        value={{
          isInvalid: !!errorMessage,
          'aria-describedby': errorMessage
            ? errorId
            : undefined
        }}
      >        {children}
      </TimeFieldContext.Provider>
      {errorMessage && (
        <small id={errorId} className="invalid">
          {errorMessage}
        </small>
      )}
    </fieldset>
  );
}

<FieldGroup
  title="Schedule meeting time"
  errorMessage="End time must be after start time."
>
  <MyTimeField
    label="Start"
    defaultValue={new Time(13)}
  />
  <MyTimeField label="End" defaultValue={new Time(9)} />
</FieldGroup>
```

```
import {TimeFieldContext} from 'react-aria-components';
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
      <TimeFieldContext.Provider
        value={{
          isInvalid:
            !!errorMessage,
          'aria-describedby':
            errorMessage
              ? errorId
              : undefined
        }}
      >        {children}
      </TimeFieldContext.Provider>
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
  title="Schedule meeting time"
  errorMessage="End time must be after start time."
>
  <MyTimeField
    label="Start"
    defaultValue={new Time(
      13
    )}
  />
  <MyTimeField
    label="End"
    defaultValue={new Time(
      9
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

TimeField passes props to its child components, such as the label, via their associated contexts. These contexts are exported so you can also consume them in your own custom components. This enables you to reuse existing components from your app or component library together with React Aria Components.

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

This example consumes from `LabelContext` in an existing styled label component to make it compatible with React Aria Components. The `[useContextProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:useContextProps)` hook merges the local props and ref with the ones provided via context by TimeField.

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

Now you can use `MyCustomLabel` within a `TimeField`, in place of the builtin React Aria Components `Label`.

```
<TimeField>
  <MyCustomLabel>Name</MyCustomLabel>  <DateInput>
    {segment => <DateSegment segment={segment} />}
  </DateInput>
</TimeField>
```

```
<TimeField>
  <MyCustomLabel>Name</MyCustomLabel>  <DateInput>
    {segment => <DateSegment segment={segment} />}
  </DateInput>
</TimeField>
```

```
<TimeField>
  <MyCustomLabel>
    Name
  </MyCustomLabel>  <DateInput>
    {(segment) => (
      <DateSegment
        segment={segment}
      />
    )}
  </DateInput>
</TimeField>
```

TimeField provides a `[TimeFieldState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/datepicker/src/useTimeFieldState.ts:TimeFieldState)` object to its children via `TimeFieldStateContext`. This can be used to access and manipulate the time field's state.

This example shows a `TimeZoneName` component that can be placed within a `TimeField` to display the full time zone name.

```
import {TimeFieldStateContext} from 'react-aria-components';
import {useDateFormatter} from 'react-aria';

function TimeZoneName() {
  let state = React.useContext(TimeFieldStateContext)!;  if ('timeZone' in state.value) {
    let formatter = useDateFormatter({
      timeZoneName: 'long',
      timeZone: state.value.timeZone
    });
    let timeZone = formatter
      .formatToParts(state.value.toDate())
      .find((p) => p.type === 'timeZoneName').value;
    return <small>{timeZone}</small>;
  }
  return null;
}

<TimeField value={parseAbsoluteToLocal('2021-04-07T18:45:22Z')}>
  <Label>Time</Label>
  <DateInput>
    {(segment) => <DateSegment segment={segment} />}
  </DateInput>
  <TimeZoneName /></TimeField>
```

```
import {TimeFieldStateContext} from 'react-aria-components';
import {useDateFormatter} from 'react-aria';

function TimeZoneName() {
  let state = React.useContext(TimeFieldStateContext)!;  if ('timeZone' in state.value) {
    let formatter = useDateFormatter({
      timeZoneName: 'long',
      timeZone: state.value.timeZone
    });
    let timeZone = formatter
      .formatToParts(state.value.toDate())
      .find((p) => p.type === 'timeZoneName').value;
    return <small>{timeZone}</small>;
  }
  return null;
}

<TimeField
  value={parseAbsoluteToLocal('2021-04-07T18:45:22Z')}
>
  <Label>Time</Label>
  <DateInput>
    {(segment) => <DateSegment segment={segment} />}
  </DateInput>
  <TimeZoneName /></TimeField>
```

```
import {TimeFieldStateContext} from 'react-aria-components';
import {useDateFormatter} from 'react-aria';

function TimeZoneName() {
  let state = React
    .useContext(
      TimeFieldStateContext
    )!;  if (
    'timeZone' in
      state.value
  ) {
    let formatter =
      useDateFormatter({
        timeZoneName:
          'long',
        timeZone:
          state.value
            .timeZone
      });
    let timeZone =
      formatter
        .formatToParts(
          state.value
            .toDate()
        )
        .find((p) =>
          p.type ===
            'timeZoneName'
        ).value;
    return (
      <small>
        {timeZone}
      </small>
    );
  }
  return null;
}

<TimeField
  value={parseAbsoluteToLocal(
    '2021-04-07T18:45:22Z'
  )}
>
  <Label>Time</Label>
  <DateInput>
    {(segment) => (
      <DateSegment
        segment={segment}
      />
    )}
  </DateInput>
  <TimeZoneName /></TimeField>
```

If you need to customize things even further, such as accessing internal state or customizing DOM structure, you can drop down to the lower level Hook-based API. See [useTimeField](https://react-spectrum.adobe.com/react-aria/useTimeField.html) for more details.