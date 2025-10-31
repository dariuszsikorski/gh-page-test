# useDateField

**Source**: [https://react-spectrum.adobe.com/react-aria/useDateField.html](https://react-spectrum.adobe.com/react-aria/useDateField.html)

> Documentation for useDateField in the React Aria package.

---

Provides the behavior and accessibility implementation for a date field component. A date field allows users to enter and edit date and time values using a keyboard. Each part of a date value is displayed in an individually editable segment.

* * *

`useDateField<T extends [DateValue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/datepicker/src/index.d.ts:DateValue)>( props: [AriaDateFieldOptions](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/datepicker/src/useDateField.ts:AriaDateFieldOptions)<T>, state: [DateFieldState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/datepicker/src/useDateFieldState.ts:DateFieldState), ref: [RefObject](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/refs.d.ts:RefObject)<[Element](https://developer.mozilla.org/docs/Web/API/Element) |  | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)> ): [DateFieldAria](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/datepicker/src/useDateField.ts:DateFieldAria)` `useDateSegment( segment: [DateSegment](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/datepicker/src/useDateFieldState.ts:DateSegment), state: [DateFieldState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/datepicker/src/useDateFieldState.ts:DateFieldState), ref: [RefObject](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/refs.d.ts:RefObject)<[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element) |  | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)> ): [DateSegmentAria](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/datepicker/src/useDateSegment.ts:DateSegmentAria)`

* * *

A date field can be built using `<input type="date">`, but this is very limited in functionality, lacking in internationalization capabilities, inconsistent between browsers, and difficult to style. `useDateField` helps achieve accessible and international date and time fields that can be styled as needed.

-   **Dates and times** – Support for dates and times with configurable granularity.
-   **International** – Support for 13 calendar systems used around the world, including Gregorian, Buddhist, Islamic, Persian, and more. Locale-specific formatting, number systems, hour cycles, and right-to-left support are available as well.
-   **Time zone aware** – Dates and times can optionally include a time zone. All modifications follow time zone rules such as daylight saving time.
-   **Accessible** – Each date and time unit is displayed as an individually focusable and editable segment, which allows users an easy way to edit dates using the keyboard, in any date format and locale.
-   **Touch friendly** – Date segments are editable using an easy to use numeric keypad, and all interactions are accessible using touch-based screen readers.
-   **Customizable** – As with all of React Aria, the DOM structure and styling of all elements can be fully customized.

Read our [blog post](https://react-spectrum.adobe.com/blog/date-and-time-pickers-for-all.html) for more details about the internationalization, accessibility, and user experience features implemented by `useDateField`.

* * *

Shows a date field with labels pointing to its parts, including the label, field, and segments.Event date8 / 15 / 2022SegmentFieldLabel

A date field consists of a label, and a group of segments representing each unit of a date and time (e.g. years, months, days, etc.). Each segment is individually focusable and editable by the user, by typing or using the arrow keys to increment and decrement the value. This approach allows values to be formatted and parsed correctly regardless of the locale or date format, and offers an easy and error-free way to edit dates using the keyboard.

`useDateField` also supports optional description and error message elements, which can be used to provide more context about the field, and any validation messages. These are linked with the input via the `aria-describedby` attribute.

`useDateField` returns props that you should spread onto the appropriate elements:

Name

Type

Description

`labelProps`

`[DOMAttributes](https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes)`

Props for the field's visible label element, if any.

`fieldProps`

`[GroupDOMAttributes](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/dom.d.ts:GroupDOMAttributes)`

Props for the field grouping element.

`inputProps`

`[InputHTMLAttributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes)<[HTMLInputElement](https://developer.mozilla.org/docs/Web/API/HTMLInputElement)>`

Props for the hidden input element for HTML form submission.

`descriptionProps`

`[DOMAttributes](https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes)`

Props for the description element, if any.

`errorMessageProps`

`[DOMAttributes](https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes)`

Props for the error message element, if any.

`isInvalid`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether the input value is invalid.

`validationErrors`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)[]`

The current error messages for the input if it is invalid, otherwise an empty array.

`validationDetails`

`ValidityState`

The native validation details for the input.

`useDateSegment` returns props for an individual date segment:

Name

Type

Description

`segmentProps`

`React.HTMLAttributes<[HTMLDivElement](https://developer.mozilla.org/docs/Web/API/HTMLDivElement)>`

Props for the segment element.

Note that most of this anatomy is shared with [useTimeField](https://react-spectrum.adobe.com/react-aria/useTimeField.html), so you can reuse many components between them if you have both.

State is managed by the `[useDateFieldState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/datepicker/src/useDateFieldState.ts:useDateFieldState)` hook from `@react-stately/datepicker`. The state object should be passed as an option to `useDateField` and `useDateSegment`.

If the date field does not have a visible label, an `aria-label` or `aria-labelledby` prop must be passed instead to identify it to assistive technology.

## Date and time values[#](#date-and-time-values)

* * *

Dates and times are represented in many different ways by cultures around the world. This includes differences in calendar systems, time zones, daylight saving time rules, date and time formatting, weekday and weekend rules, and much more. When building applications that support users around the world, it is important to handle these aspects correctly for each locale.

`[useDateField](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/datepicker/src/useDateField.ts:useDateField)` uses the [@internationalized/date](https://react-spectrum.adobe.com/internationalized/date/) library to represent dates and times. This package provides a library of objects and functions to perform date and time related manipulation, queries, and conversions that work across locales and calendars. Date and time objects can be converted to and from native JavaScript `Date` objects or [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) strings. See the [documentation](https://react-spectrum.adobe.com/internationalized/date/), or the [examples below](#value) for more details.

`[useDateFieldState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/datepicker/src/useDateFieldState.ts:useDateFieldState)` requires a `createCalendar` function to be provided, which is used to implement date manipulation across multiple calendar systems. The default implementation in `@internationalized/date` includes all supported calendar systems. While this library is quite small (8 kB minified + Brotli), you can reduce its bundle size further by providing your own implementation that includes only your supported calendars. See [below](#reducing-bundle-size) for an example.

* * *

```
import {useDateField, useDateSegment, useLocale} from 'react-aria';
import {useDateFieldState} from 'react-stately';
import {createCalendar} from '@internationalized/date';

export function DateField(props) {
  let { locale } = useLocale();
  let state = useDateFieldState({
    ...props,
    locale,
    createCalendar
  });

  let ref = React.useRef(null);
  let { labelProps, fieldProps } = useDateField(props, state, ref);

  return (
    <div className="wrapper">
      <span {...labelProps}>{props.label}</span>
      <div {...fieldProps} ref={ref} className="field">
        {state.segments.map((segment, i) => (
          <DateSegment key={i} segment={segment} state={state} />
        ))}
        {state.isInvalid &&
          <span aria-hidden="true">🚫</span>}
      </div>
    </div>
  );
}

function DateSegment({ segment, state }) {
  let ref = React.useRef(null);
  let { segmentProps } = useDateSegment(segment, state, ref);

  return (
    <span
      {...segmentProps}
      ref={ref}
      className={`segment ${segment.isPlaceholder ? 'placeholder' : ''}`}
    >
      {segment.text}
    </span>
  );
}

<DateField label="Event date" />
```

```
import {
  useDateField,
  useDateSegment,
  useLocale
} from 'react-aria';
import {useDateFieldState} from 'react-stately';
import {createCalendar} from '@internationalized/date';

export function DateField(props) {
  let { locale } = useLocale();
  let state = useDateFieldState({
    ...props,
    locale,
    createCalendar
  });

  let ref = React.useRef(null);
  let { labelProps, fieldProps } = useDateField(
    props,
    state,
    ref
  );

  return (
    <div className="wrapper">
      <span {...labelProps}>{props.label}</span>
      <div {...fieldProps} ref={ref} className="field">
        {state.segments.map((segment, i) => (
          <DateSegment
            key={i}
            segment={segment}
            state={state}
          />
        ))}
        {state.isInvalid &&
          <span aria-hidden="true">🚫</span>}
      </div>
    </div>
  );
}

function DateSegment({ segment, state }) {
  let ref = React.useRef(null);
  let { segmentProps } = useDateSegment(
    segment,
    state,
    ref
  );

  return (
    <span
      {...segmentProps}
      ref={ref}
      className={`segment ${
        segment.isPlaceholder ? 'placeholder' : ''
      }`}
    >
      {segment.text}
    </span>
  );
}

<DateField label="Event date" />
```

```
import {
  useDateField,
  useDateSegment,
  useLocale
} from 'react-aria';
import {useDateFieldState} from 'react-stately';
import {createCalendar} from '@internationalized/date';

export function DateField(
  props
) {
  let { locale } =
    useLocale();
  let state =
    useDateFieldState({
      ...props,
      locale,
      createCalendar
    });

  let ref = React.useRef(
    null
  );
  let {
    labelProps,
    fieldProps
  } = useDateField(
    props,
    state,
    ref
  );

  return (
    <div className="wrapper">
      <span
        {...labelProps}
      >
        {props.label}
      </span>
      <div
        {...fieldProps}
        ref={ref}
        className="field"
      >
        {state.segments
          .map((
            segment,
            i
          ) => (
            <DateSegment
              key={i}
              segment={segment}
              state={state}
            />
          ))}
        {state
          .isInvalid &&
          (
            <span aria-hidden="true">
              🚫
            </span>
          )}
      </div>
    </div>
  );
}

function DateSegment(
  { segment, state }
) {
  let ref = React.useRef(
    null
  );
  let { segmentProps } =
    useDateSegment(
      segment,
      state,
      ref
    );

  return (
    <span
      {...segmentProps}
      ref={ref}
      className={`segment ${
        segment
            .isPlaceholder
          ? 'placeholder'
          : ''
      }`}
    >
      {segment.text}
    </span>
  );
}

<DateField label="Event date" />
```

Show CSS

```
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.field {
  display: block;
  padding: 2px 4px;
  border-radius: 2px;
  border: 1px solid var(--gray);
  background: var(--spectrum-global-color-gray-50);
}

.field:focus-within {
  border-color: var(--blue);
}

.segment {
  padding: 0 2px;
  font-variant-numeric: tabular-nums;
  text-align: end;
}

.segment.placeholder {
  color: var(--spectrum-gray-600);
}

.segment:focus {
  color: white;
  background: var(--blue);
  outline: none;
  border-radius: 2px;
}
```

```
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.field {
  display: block;
  padding: 2px 4px;
  border-radius: 2px;
  border: 1px solid var(--gray);
  background: var(--spectrum-global-color-gray-50);
}

.field:focus-within {
  border-color: var(--blue);
}

.segment {
  padding: 0 2px;
  font-variant-numeric: tabular-nums;
  text-align: end;
}

.segment.placeholder {
  color: var(--spectrum-gray-600);
}

.segment:focus {
  color: white;
  background: var(--blue);
  outline: none;
  border-radius: 2px;
}
```

```
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.field {
  display: block;
  padding: 2px 4px;
  border-radius: 2px;
  border: 1px solid var(--gray);
  background: var(--spectrum-global-color-gray-50);
}

.field:focus-within {
  border-color: var(--blue);
}

.segment {
  padding: 0 2px;
  font-variant-numeric: tabular-nums;
  text-align: end;
}

.segment.placeholder {
  color: var(--spectrum-gray-600);
}

.segment:focus {
  color: white;
  background: var(--blue);
  outline: none;
  border-radius: 2px;
}
```

* * *

[![](https://react-spectrum.adobe.com/DateField-tailwind.70fdeb58.png)

Tailwind CSS

A date and time field built with Tailwind and React Aria.

](https://codesandbox.io/s/small-water-y5dgj4?file=/src/DateField.js)

* * *

The following examples show how to use the `DateField` component created in the above example.

A `DateField` displays a placeholder by default. An initial, uncontrolled value can be provided to the `DateField` using the `defaultValue` prop. Alternatively, a controlled value can be provided using the `value` prop.

Date values are provided using objects in the [@internationalized/date](https://react-spectrum.adobe.com/internationalized/date/) package. This library handles correct international date manipulation across calendars, time zones, and other localization concerns. `useDateField` supports values of the following types:

-   `[CalendarDate](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@internationalized/date/src/CalendarDate.ts:CalendarDate)` – a date without any time components. May be parsed from a string representation using the `[parseDate](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@internationalized/date/src/string.ts:parseDate)` function. Use this type to represent dates where the time is not important, such as a birthday or an all day calendar event.
-   `[CalendarDateTime](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@internationalized/date/src/CalendarDate.ts:CalendarDateTime)` – a date with a time, but not in any specific time zone. May be parsed from a string representation using the `[parseDateTime](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@internationalized/date/src/string.ts:parseDateTime)` function. Use this type to represent times that occur at the same local time regardless of the time zone, such as the time of New Years Eve fireworks which always occur at midnight. Most times are better stored as a `ZonedDateTime`.
-   `[ZonedDateTime](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@internationalized/date/src/CalendarDate.ts:ZonedDateTime)` – a date with a time in a specific time zone. May be parsed from a string representation using the `[parseZonedDateTime](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@internationalized/date/src/string.ts:parseZonedDateTime)`, `[parseAbsolute](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@internationalized/date/src/string.ts:parseAbsolute)`, or `[parseAbsoluteToLocal](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@internationalized/date/src/string.ts:parseAbsoluteToLocal)` functions. Use this type to represent an exact moment in time at a particular location on Earth.

```
import {parseDate} from '@internationalized/date';

function Example() {
  let [value, setValue] = React.useState(parseDate('2020-02-03'));

  return (
    <>
      <DateField
        label="Date (uncontrolled)"
        defaultValue={parseDate('2020-02-03')} />
      <DateField
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
      <DateField
        label="Date (uncontrolled)"
        defaultValue={parseDate('2020-02-03')}
      />
      <DateField
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
      <DateField
        label="Date (uncontrolled)"
        defaultValue={parseDate(
          '2020-02-03'
        )}
      />
      <DateField
        label="Date (controlled)"
        value={value}
        onChange={setValue}
      />
    </>
  );
}
```

`useDateField` accepts an `onChange` prop which is triggered whenever the date is edited by the user. The example below uses `onChange` to update a separate element with a formatted version of the date in the user's locale and local time zone. This is done by converting the date to a native JavaScript `Date` object to pass to the formatter.

```
import {useDateFormatter} from 'react-aria';
import {getLocalTimeZone} from '@internationalized/date';

function Example() {
  let [date, setDate] = React.useState(parseDate('1985-07-03'));
  let formatter = useDateFormatter({ dateStyle: 'full' });

  return (
    <>
      <DateField label="Birth date" value={date} onChange={setDate} />
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
      <DateField
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
      <DateField
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

`useDateField` is time zone aware when a `[ZonedDateTime](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@internationalized/date/src/CalendarDate.ts:ZonedDateTime)` object is provided as the value. In this case, the time zone abbreviation is displayed, and time zone concerns such as daylight saving time are taken into account when the value is manipulated.

In most cases, your data will come from and be sent to a server as an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string. [@internationalized/date](https://react-spectrum.adobe.com/internationalized/date/) includes functions for parsing strings in multiple formats into `[ZonedDateTime](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@internationalized/date/src/CalendarDate.ts:ZonedDateTime)` objects. Which format you use will depend on what information you need to store.

-   `[parseZonedDateTime](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@internationalized/date/src/string.ts:parseZonedDateTime)` – This function parses a date with an explicit time zone and optional UTC offset attached (e.g. `"2021-11-07T00:45[America/Los_Angeles]"` or `"2021-11-07T00:45-07:00[America/Los_Angeles]"`). This format preserves the maximum amount of information. If the exact local time and time zone that a user selected is important, use this format. Storing the time zone and offset that was selected rather than converting to UTC ensures that the local time is correct regardless of daylight saving rule changes (e.g. if a locale abolishes DST). Examples where this applies include calendar events, reminders, and other times that occur in a particular location.
-   `[parseAbsolute](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@internationalized/date/src/string.ts:parseAbsolute)` – This function parses an absolute date and time that occurs at the same instant at all locations on Earth. It can be represented in UTC (e.g. `"2021-11-07T07:45:00Z"`), or stored with a particular offset (e.g. `"2021-11-07T07:45:00-07:00"`). A time zone identifier, e.g. `America/Los_Angeles`, must be passed, and the result will be converted into that time zone. Absolute times are the best way to represent events that occurred in the past, or future events where an exact time is needed, regardless of time zone.
-   `[parseAbsoluteToLocal](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@internationalized/date/src/string.ts:parseAbsoluteToLocal)` – This function parses an absolute date and time into the current user's local time zone. It is a shortcut for `parseAbsolute`, and accepts the same formats.

```
import {parseZonedDateTime} from '@internationalized/date';

<DateField
  label="Event date"
  defaultValue={parseZonedDateTime('2022-11-07T00:45[America/Los_Angeles]')}
/>
```

```
import {parseZonedDateTime} from '@internationalized/date';

<DateField
  label="Event date"
  defaultValue={parseZonedDateTime(
    '2022-11-07T00:45[America/Los_Angeles]'
  )}
/>
```

```
import {parseZonedDateTime} from '@internationalized/date';

<DateField
  label="Event date"
  defaultValue={parseZonedDateTime(
    '2022-11-07T00:45[America/Los_Angeles]'
  )}
/>
```

`useDateField` displays times in the time zone included in the `ZonedDateTime` object. The above example is always displayed in Pacific Standard Time because the `America/Los_Angeles` time zone identifier is provided. [@internationalized/date](https://react-spectrum.adobe.com/internationalized/date/) includes functions for converting dates between time zones, or parsing a date directly into a specific time zone or the user's local time zone, as shown below.

```
import {parseAbsoluteToLocal} from '@internationalized/date';

<DateField
  label="Event date"
  defaultValue={parseAbsoluteToLocal('2021-11-07T07:45:00Z')}
/>
```

```
import {parseAbsoluteToLocal} from '@internationalized/date';

<DateField
  label="Event date"
  defaultValue={parseAbsoluteToLocal(
    '2021-11-07T07:45:00Z'
  )}
/>
```

```
import {parseAbsoluteToLocal} from '@internationalized/date';

<DateField
  label="Event date"
  defaultValue={parseAbsoluteToLocal(
    '2021-11-07T07:45:00Z'
  )}
/>
```

The `granularity` prop allows you to control the smallest unit that is displayed by `useDateField`. By default, `CalendarDate` values are displayed with `"day"` granularity (year, month, and day), and `CalendarDateTime` and `ZonedDateTime` values are displayed with `"minute"` granularity. More granular time values can be displayed by setting the `granularity` prop to `"second"`.

In addition, when a value with a time is provided but you wish to only display the date, you can set the granularity to `"day"`. This has no effect on the actual value (it still has a time component), only on what fields are displayed. In the following example, two DateFields are synchronized with the same value, but display different granularities.

```
function Example() {
  let [date, setDate] = React.useState(
    parseAbsoluteToLocal('2021-04-07T18:45:22Z')
  );

  return (
    <>
      <DateField
        label="Date and time"
        granularity="second"
        value={date}
        onChange={setDate}
      />
      <DateField
        label="Date"
        granularity="day"
        value={date}
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
      <DateField
        label="Date and time"
        granularity="second"
        value={date}
        onChange={setDate}
      />
      <DateField
        label="Date"
        granularity="day"
        value={date}
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
      <DateField
        label="Date and time"
        granularity="second"
        value={date}
        onChange={setDate}
      />
      <DateField
        label="Date"
        granularity="day"
        value={date}
        onChange={setDate}
      />
    </>
  );
}
```

If no `value` or `defaultValue` prop is passed, then the `granularity` prop also affects which type of value is emitted from the `onChange` event. Note that by default, time values will not have a time zone because none was supplied. You can override this by setting the `placeholderValue` prop explicitly. Values emitted from `onChange` will use the time zone of the placeholder value.

```
import {now} from '@internationalized/date';

<DateField
  label="Event date"
  granularity="second" />
<DateField
  label="Event date"
  placeholderValue={now('America/New_York')}
  granularity="second" />
```

```
import {now} from '@internationalized/date';

<DateField
  label="Event date"
  granularity="second" />
<DateField
  label="Event date"
  placeholderValue={now('America/New_York')}
  granularity="second" />
```

```
import {now} from '@internationalized/date';

<DateField
  label="Event date"
  granularity="second"
/>
<DateField
  label="Event date"
  placeholderValue={now(
    'America/New_York'
  )}
  granularity="second"
/>
```

`useDateField` supports selecting dates in many calendar systems used around the world, including Gregorian, Hebrew, Indian, Islamic, Buddhist, and more. Dates are automatically displayed in the appropriate calendar system for the user's locale. The calendar system can be overridden using the [Unicode calendar locale extension](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/calendar#adding_a_calendar_in_the_locale_string), passed to the [I18nProvider](https://react-spectrum.adobe.com/react-aria/I18nProvider.html) component.

Selected dates passed to `onChange` always use the same calendar system as the `value` or `defaultValue` prop. If no `value` or `defaultValue` is provided, then dates passed to `onChange` are always in the Gregorian calendar since this is the most commonly used. This means that even though the user selects dates in their local calendar system, applications are able to deal with dates from all users consistently.

The below example displays a `DateField` in the Hindi language, using the Indian calendar. Dates emitted from `onChange` are in the Gregorian calendar.

```
import {I18nProvider} from 'react-aria';

function Example() {
  let [date, setDate] = React.useState(null);
  return (
    <I18nProvider locale="hi-IN-u-ca-indian">
      <DateField label="Date" value={date} onChange={setDate} />
      <p>Selected date: {date?.toString()}</p>
    </I18nProvider>
  );
}
```

```
import {I18nProvider} from 'react-aria';

function Example() {
  let [date, setDate] = React.useState(null);
  return (
    <I18nProvider locale="hi-IN-u-ca-indian">
      <DateField
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
    React.useState(null);
  return (
    <I18nProvider locale="hi-IN-u-ca-indian">
      <DateField
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

### Minimum and maximum values[#](#minimum-and-maximum-values)

The `minValue` and `maxValue` props can also be used to perform builtin validation. This marks the date field as invalid using ARIA if the user enters an invalid date. You should implement a visual indication that the date field is invalid as well.

This example only accepts dates after today.

```
import {today} from '@internationalized/date';

<DateField
  label="Appointment date"
  minValue={today(getLocalTimeZone())}
  defaultValue={parseDate('2022-02-03')} />
```

```
import {today} from '@internationalized/date';

<DateField
  label="Appointment date"
  minValue={today(getLocalTimeZone())}
  defaultValue={parseDate('2022-02-03')} />
```

```
import {today} from '@internationalized/date';

<DateField
  label="Appointment date"
  minValue={today(
    getLocalTimeZone()
  )}
  defaultValue={parseDate(
    '2022-02-03'
  )}
/>
```

When no value is set, a placeholder is shown. The format of the placeholder is influenced by the `granularity` and `placeholderValue` props. `placeholderValue` also controls the default values of each segment when the user first interacts with them, e.g. using the up and down arrow keys. By default, the `placeholderValue` is the current date at midnight, but you can set it to a more appropriate value if needed.

```
import {CalendarDate} from '@internationalized/date';

<DateField
  label="Birth date"
  placeholderValue={new CalendarDate(1980, 1, 1)}
/>
```

```
import {CalendarDate} from '@internationalized/date';

<DateField
  label="Birth date"
  placeholderValue={new CalendarDate(1980, 1, 1)}
/>
```

```
import {CalendarDate} from '@internationalized/date';

<DateField
  label="Birth date"
  placeholderValue={new CalendarDate(
    1980,
    1,
    1
  )}
/>
```

When a `ZonedDateTime` object is provided as the value to `useDateField`, the time zone abbreviation is displayed by default. However, if this is displayed elsewhere or implicit based on the usecase, it can be hidden using the `hideTimeZone` option.

```
<DateField
  label="Appointment time"
  defaultValue={parseZonedDateTime('2022-11-07T10:45[America/Los_Angeles]')}
  hideTimeZone />
```

```
<DateField
  label="Appointment time"
  defaultValue={parseZonedDateTime(
    '2022-11-07T10:45[America/Los_Angeles]'
  )}
  hideTimeZone
/>
```

```
<DateField
  label="Appointment time"
  defaultValue={parseZonedDateTime(
    '2022-11-07T10:45[America/Los_Angeles]'
  )}
  hideTimeZone
/>
```

By default, `useDateField` displays times in either 12 or 24 hour hour format depending on the user's locale. However, this can be overridden using the `hourCycle` prop if needed for a specific usecase. This example forces `useDateField` to use 24-hour time, regardless of the locale.

```
<DateField
  label="Appointment time"
  granularity="minute"
  hourCycle={24} />
```

```
<DateField
  label="Appointment time"
  granularity="minute"
  hourCycle={24} />
```

```
<DateField
  label="Appointment time"
  granularity="minute"
  hourCycle={24}
/>
```

* * *

In the example above, the `[createCalendar](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@internationalized/date/src/createCalendar.ts:createCalendar)` function from the [@internationalized/date](https://react-spectrum.adobe.com/internationalized/date/) package is passed to the `[useDateFieldState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/datepicker/src/useDateFieldState.ts:useDateFieldState)` hook. This function receives a [calendar identifier](https://react-spectrum.adobe.com/internationalized/date/Calendar.html#calendar-identifiers) string, and provides `[Calendar](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@internationalized/date/src/types.ts:Calendar)` instances to React Stately, which are used to implement date manipulation.

By default, this includes [all calendar systems](https://react-spectrum.adobe.com/internationalized/date/Calendar.html#implementations) supported by `@internationalized/date`. However, if your application supports a more limited set of regions, or you know you will only be picking dates in a certain calendar system, you can reduce your bundle size by providing your own implementation of `createCalendar` that includes a subset of these `Calendar` implementations.

For example, if your application only supports Gregorian dates, you could implement a `createCalendar` function like this:

```
import {useLocale} from 'react-aria';
import {useDateFieldState} from 'react-stately';
import {GregorianCalendar} from '@internationalized/date';

function createCalendar(identifier) {
  switch (identifier) {
    case 'gregory':
      return new GregorianCalendar();
    default:
      throw new Error(`Unsupported calendar ${identifier}`);
  }
}

export function DateField(props) {
  let { locale } = useLocale();
  let state = useDateFieldState({
    ...props,
    locale,
    createCalendar
  });

  // ...
}
```

```
import {useLocale} from 'react-aria';
import {useDateFieldState} from 'react-stately';
import {GregorianCalendar} from '@internationalized/date';

function createCalendar(identifier) {
  switch (identifier) {
    case 'gregory':
      return new GregorianCalendar();
    default:
      throw new Error(`Unsupported calendar ${identifier}`);
  }
}

export function DateField(props) {
  let { locale } = useLocale();
  let state = useDateFieldState({
    ...props,
    locale,
    createCalendar
  });

  // ...
}
```

```
import {useLocale} from 'react-aria';
import {useDateFieldState} from 'react-stately';
import {GregorianCalendar} from '@internationalized/date';

function createCalendar(
  identifier
) {
  switch (identifier) {
    case 'gregory':
      return new GregorianCalendar();
    default:
      throw new Error(
        `Unsupported calendar ${identifier}`
      );
  }
}

export function DateField(
  props
) {
  let { locale } =
    useLocale();
  let state =
    useDateFieldState({
      ...props,
      locale,
      createCalendar
    });

  // ...
}
```

This way, only `GregorianCalendar` is imported, and the other calendar implementations can be tree-shaken.

See the [Calendar](https://react-spectrum.adobe.com/internationalized/date/Calendar.html) documentation in `@internationalized/date` to learn more about the supported calendar systems, and a list of string identifiers.