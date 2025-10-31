# useTimeField

**Source**: [https://react-spectrum.adobe.com/react-aria/useTimeField.html](https://react-spectrum.adobe.com/react-aria/useTimeField.html)

> Documentation for useTimeField in the React Aria package.

---

Provides the behavior and accessibility implementation for a time field component. A time field allows users to enter and edit time values using a keyboard. Each part of a time value is displayed in an individually editable segment.

* * *

`useTimeField<T extends [TimeValue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/datepicker/src/index.d.ts:TimeValue)>( props: [AriaTimeFieldOptions](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/datepicker/src/useDateField.ts:AriaTimeFieldOptions)<T>, state: [TimeFieldState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/datepicker/src/useTimeFieldState.ts:TimeFieldState), ref: [RefObject](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/refs.d.ts:RefObject)<[Element](https://developer.mozilla.org/docs/Web/API/Element) |  | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)> ): [DateFieldAria](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/datepicker/src/useDateField.ts:DateFieldAria)` `useDateSegment( segment: [DateSegment](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/datepicker/src/useDateFieldState.ts:DateSegment), state: [DateFieldState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/datepicker/src/useDateFieldState.ts:DateFieldState), ref: [RefObject](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/refs.d.ts:RefObject)<[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element) |  | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)> ): [DateSegmentAria](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/datepicker/src/useDateSegment.ts:DateSegmentAria)`

* * *

A time field can be built using `<input type="time">`, but this is very limited in functionality, lacking in internationalization capabilities, inconsistent between browsers, and difficult to style. `useTimeField` helps achieve accessible and international time fields that can be styled as needed.

-   **International** – Support for locale-specific formatting, number systems, hour cycles, and right-to-left layout.
-   **Time zone aware** – Times can optionally include a time zone. All modifications follow time zone rules such as daylight saving time.
-   **Accessible** – Each time unit is displayed as an individually focusable and editable segment, which allows users an easy way to edit times using the keyboard, in any format and locale.
-   **Touch friendly** – Time segments are editable using an easy to use numeric keypad, and all interactions are accessible using touch-based screen readers.
-   **Customizable** – As with all of React Aria, the DOM structure and styling of all elements can be fully customized.

Read our [blog post](https://react-spectrum.adobe.com/blog/date-and-time-pickers-for-all.html) for more details about the internationalization, accessibility, and user experience features implemented by `useTimeField`.

* * *

Shows a time field with labels pointing to its parts, including the label, field, and segments.Appointment time12 : 45 PMSegmentFieldLabel

A time field consists of a label, and a group of segments representing each unit of a time (e.g. hours, minutes, and seconds). Each segment is individually focusable and editable by the user, by typing or using the arrow keys to increment and decrement the value. This approach allows values to be formatted and parsed correctly regardless of the locale or time format, and offers an easy and error-free way to edit times using the keyboard.

`useTimeField` also supports optional description and error message elements, which can be used to provide more context about the field, and any validation messages. These are linked with the input via the `aria-describedby` attribute.

`useTimeField` returns props that you should spread onto the appropriate elements:

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

`useDateSegment` returns props for an individual time segment:

Name

Type

Description

`segmentProps`

`React.HTMLAttributes<[HTMLDivElement](https://developer.mozilla.org/docs/Web/API/HTMLDivElement)>`

Props for the segment element.

Note that most of this anatomy is shared with [useDateField](https://react-spectrum.adobe.com/react-aria/useDateField.html), so you can reuse many components between them if you have both.

State is managed by the `[useTimeFieldState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/datepicker/src/useTimeFieldState.ts:useTimeFieldState)` hook from `@react-stately/datepicker`. The state object should be passed as an option to `useTimeField` and `useDateSegment`.

If the time field does not have a visible label, an `aria-label` or `aria-labelledby` prop must be passed instead to identify it to assistive technology.

* * *

Times are represented in many different ways by cultures around the world. This includes differences in hour cycles, time zones, daylight saving time rules, formatting, and much more. When building applications that support users around the world, it is important to handle these aspects correctly for each locale.

`[useTimeField](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/datepicker/src/useDateField.ts:useTimeField)` uses the [@internationalized/date](https://react-spectrum.adobe.com/internationalized/date/) library to represent times. This package provides a library of objects and functions to perform date and time related manipulation, queries, and conversions that work across locales and calendars. Date and time objects can be converted to and from native JavaScript `Date` objects or [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) strings. See the [documentation](https://react-spectrum.adobe.com/internationalized/date/), or the [examples below](#value) for more details.

* * *

```
import {useDateSegment, useLocale, useTimeField} from 'react-aria';
import {useTimeFieldState} from 'react-stately';

export function TimeField(props) {
  let { locale } = useLocale();
  let state = useTimeFieldState({
    ...props,
    locale
  });

  let ref = React.useRef(null);
  let { labelProps, fieldProps } = useTimeField(props, state, ref);

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

// Note: this component is the same as in the useDateField docs.
function DateSegment({ segment, state }) {
  let ref = React.useRef(null);
  let { segmentProps } = useDateSegment(segment, state, ref);

  return (
    <div
      {...segmentProps}
      ref={ref}
      className={`segment ${segment.isPlaceholder ? 'placeholder' : ''}`}
    >
      {segment.text}
    </div>
  );
}

<TimeField label="Event date" />
```

```
import {
  useDateSegment,
  useLocale,
  useTimeField
} from 'react-aria';
import {useTimeFieldState} from 'react-stately';

export function TimeField(props) {
  let { locale } = useLocale();
  let state = useTimeFieldState({
    ...props,
    locale
  });

  let ref = React.useRef(null);
  let { labelProps, fieldProps } = useTimeField(
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

// Note: this component is the same as in the useDateField docs.
function DateSegment({ segment, state }) {
  let ref = React.useRef(null);
  let { segmentProps } = useDateSegment(
    segment,
    state,
    ref
  );

  return (
    <div
      {...segmentProps}
      ref={ref}
      className={`segment ${
        segment.isPlaceholder ? 'placeholder' : ''
      }`}
    >
      {segment.text}
    </div>
  );
}

<TimeField label="Event date" />
```

```
import {
  useDateSegment,
  useLocale,
  useTimeField
} from 'react-aria';
import {useTimeFieldState} from 'react-stately';

export function TimeField(
  props
) {
  let { locale } =
    useLocale();
  let state =
    useTimeFieldState({
      ...props,
      locale
    });

  let ref = React.useRef(
    null
  );
  let {
    labelProps,
    fieldProps
  } = useTimeField(
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

// Note: this component is the same as in the useDateField docs.
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
    <div
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
    </div>
  );
}

<TimeField label="Event date" />
```

Show CSS

```
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.field {
  display: inline-flex;
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
  display: inline-flex;
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
  display: inline-flex;
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

[![](https://react-spectrum.adobe.com/TimeField-tailwind.36575d37.png)

Tailwind CSS

A time field built with Tailwind and React Aria.

](https://codesandbox.io/s/small-water-y5dgj4?file=/src/TimeField.js)

* * *

The following examples show how to use the `TimeField` component created in the above example.

A `TimeField` displays a placeholder by default. An initial, uncontrolled value can be provided to the `TimeField` using the `defaultValue` prop. Alternatively, a controlled value can be provided using the `value` prop.

Time values are provided using objects in the [@internationalized/date](https://react-spectrum.adobe.com/internationalized/date/) package. This library handles correct international date and time manipulation across calendars, time zones, and other localization concerns.

`useTimeField` only supports selecting times, but values with date components are also accepted. By default, `useTimeField` will emit `[Time](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@internationalized/date/src/CalendarDate.ts:Time)` objects in the `onChange` event, but if a `[CalendarDateTime](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@internationalized/date/src/CalendarDate.ts:CalendarDateTime)` or `[ZonedDateTime](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@internationalized/date/src/CalendarDate.ts:ZonedDateTime)` object is passed as the `value` or `defaultValue`, values of that type will be emitted, changing only the time and preserving the date components.

```
import {Time} from '@internationalized/date';

function Example() {
  let [value, setValue] = React.useState(new Time(11, 45));

  return (
    <>
      <TimeField
        label="Time (uncontrolled)"
        defaultValue={new Time(11, 45)} />
      <TimeField
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
      <TimeField
        label="Time (uncontrolled)"
        defaultValue={new Time(11, 45)} />
      <TimeField
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
      <TimeField
        label="Time (uncontrolled)"
        defaultValue={new Time(
          11,
          45
        )}
      />
      <TimeField
        label="Time (controlled)"
        value={value}
        onChange={setValue}
      />
    </>
  );
}
```

`Time` values may also be parsed from strings using the `[parseTime](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@internationalized/date/src/string.ts:parseTime)` function. This accepts [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601#Times) formatted time strings such as `"04:45:23.123"`. The `toString` method of a `Time` object can also be used to convert a time object to a string.

`useTimeField` is time zone aware when a `[ZonedDateTime](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@internationalized/date/src/CalendarDate.ts:ZonedDateTime)` object is provided as the value. In this case, the time zone abbreviation is displayed, and time zone concerns such as daylight saving time are taken into account when the value is manipulated.

In most cases, your data will come from and be sent to a server as an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string. [@internationalized/date](https://react-spectrum.adobe.com/internationalized/date/) includes functions for parsing strings in multiple formats into `[ZonedDateTime](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@internationalized/date/src/CalendarDate.ts:ZonedDateTime)` objects. Which format you use will depend on what information you need to store.

-   `[parseZonedDateTime](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@internationalized/date/src/string.ts:parseZonedDateTime)` – This function parses a date with an explicit time zone and optional UTC offset attached (e.g. `"2021-11-07T00:45[America/Los_Angeles]"` or `"2021-11-07T00:45-07:00[America/Los_Angeles]"`). This format preserves the maximum amount of information. If the exact local time and time zone that a user selected is important, use this format. Storing the time zone and offset that was selected rather than converting to UTC ensures that the local time is correct regardless of daylight saving rule changes (e.g. if a locale abolishes DST). Examples where this applies include calendar events, reminders, and other times that occur in a particular location.
-   `[parseAbsolute](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@internationalized/date/src/string.ts:parseAbsolute)` – This function parses an absolute date and time that occurs at the same instant at all locations on Earth. It can be represented in UTC (e.g. `"2021-11-07T07:45:00Z"`), or stored with a particular offset (e.g. `"2021-11-07T07:45:00-07:00"`). A time zone identifier, e.g. `America/Los_Angeles`, must be passed, and the result will be converted into that time zone. Absolute times are the best way to represent events that occurred in the past, or future events where an exact time is needed, regardless of time zone.
-   `[parseAbsoluteToLocal](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@internationalized/date/src/string.ts:parseAbsoluteToLocal)` – This function parses an absolute date and time into the current user's local time zone. It is a shortcut for `parseAbsolute`, and accepts the same formats.

```
import {parseZonedDateTime} from '@internationalized/date';

<TimeField
  label="Event time"
  defaultValue={parseZonedDateTime('2022-11-07T00:45[America/Los_Angeles]')}
/>
```

```
import {parseZonedDateTime} from '@internationalized/date';

<TimeField
  label="Event time"
  defaultValue={parseZonedDateTime(
    '2022-11-07T00:45[America/Los_Angeles]'
  )}
/>
```

```
import {parseZonedDateTime} from '@internationalized/date';

<TimeField
  label="Event time"
  defaultValue={parseZonedDateTime(
    '2022-11-07T00:45[America/Los_Angeles]'
  )}
/>
```

`useTimeField` displays times in the time zone included in the `ZonedDateTime` object. The above example is always displayed in Pacific Standard Time because the `America/Los_Angeles` time zone identifier is provided. [@internationalized/date](https://react-spectrum.adobe.com/internationalized/date/) includes functions for converting dates between time zones, or parsing a date directly into a specific time zone or the user's local time zone, as shown below.

```
import {parseAbsoluteToLocal} from '@internationalized/date';

<TimeField
  label="Event time"
  defaultValue={parseAbsoluteToLocal('2021-11-07T07:45:00Z')}
/>
```

```
import {parseAbsoluteToLocal} from '@internationalized/date';

<TimeField
  label="Event time"
  defaultValue={parseAbsoluteToLocal(
    '2021-11-07T07:45:00Z'
  )}
/>
```

```
import {parseAbsoluteToLocal} from '@internationalized/date';

<TimeField
  label="Event time"
  defaultValue={parseAbsoluteToLocal(
    '2021-11-07T07:45:00Z'
  )}
/>
```

`useTimeField` accepts an `onChange` prop which is triggered whenever the time is edited by the user. The example below uses `onChange` to update a separate element with a formatted version of the date in the user's locale and local time zone. This is done by converting the date to a native JavaScript `Date` object to pass to the formatter. `useTimeField` allows editing the time components while keeping the date fixed.

```
import {useDateFormatter} from 'react-aria';

function Example() {
  let [date, setDate] = React.useState(
    parseAbsoluteToLocal('2021-04-07T18:45:22Z')
  );
  let formatter = useDateFormatter({ dateStyle: 'long', timeStyle: 'long' });

  return (
    <>
      <TimeField label="Time" value={date} onChange={setDate} />
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
      <TimeField
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
      <TimeField
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

The `granularity` prop allows you to control the smallest unit that is displayed by `useTimeField`. By default, times are displayed with `"minute"` granularity. More granular time values can be displayed by setting the `granularity` prop to `"second"`.

```
<TimeField
  label="Event time"
  granularity="second"
  defaultValue={parseAbsoluteToLocal('2021-04-07T18:45:22Z')} />
```

```
<TimeField
  label="Event time"
  granularity="second"
  defaultValue={parseAbsoluteToLocal(
    '2021-04-07T18:45:22Z'
  )}
/>
```

```
<TimeField
  label="Event time"
  granularity="second"
  defaultValue={parseAbsoluteToLocal(
    '2021-04-07T18:45:22Z'
  )}
/>
```

### Minimum and maximum values[#](#minimum-and-maximum-values)

The `minValue` and `maxValue` props can also be used to perform builtin validation. This marks the time field as invalid using ARIA if the user enters an invalid time. You should implement a visual indication that the time field is invalid as well.

This example only accepts times between 9 AM and 5 PM.

```
<TimeField
  label="Meeting time"
  minValue={new Time(9)}
  maxValue={new Time(17)}
  defaultValue={new Time(8)} />
```

```
<TimeField
  label="Meeting time"
  minValue={new Time(9)}
  maxValue={new Time(17)}
  defaultValue={new Time(8)} />
```

```
<TimeField
  label="Meeting time"
  minValue={new Time(
    9
  )}
  maxValue={new Time(
    17
  )}
  defaultValue={new Time(
    8
  )}
/>
```

When no value is set, a placeholder is shown. The format of the placeholder is influenced by the `granularity` and `placeholderValue` props. `placeholderValue` also controls the default values of each segment when the user first interacts with them, e.g. using the up and down arrow keys. By default, the `placeholderValue` is midnight, but you can set it to a more appropriate value if needed.

```
<TimeField label="Meeting time" placeholderValue={new Time(9)} />
```

```
<TimeField
  label="Meeting time"
  placeholderValue={new Time(9)}
/>
```

```
<TimeField
  label="Meeting time"
  placeholderValue={new Time(
    9
  )}
/>
```

When a `ZonedDateTime` object is provided as the value to `useTimeField`, the time zone abbreviation is displayed by default. However, if this is displayed elsewhere or implicit based on the usecase, it can be hidden using the `hideTimeZone` option.

```
<TimeField
  label="Appointment time"
  defaultValue={parseZonedDateTime('2022-11-07T10:45[America/Los_Angeles]')}
  hideTimeZone />
```

```
<TimeField
  label="Appointment time"
  defaultValue={parseZonedDateTime(
    '2022-11-07T10:45[America/Los_Angeles]'
  )}
  hideTimeZone
/>
```

```
<TimeField
  label="Appointment time"
  defaultValue={parseZonedDateTime(
    '2022-11-07T10:45[America/Los_Angeles]'
  )}
  hideTimeZone
/>
```

By default, `useTimeField` displays times in either 12 or 24 hour hour format depending on the user's locale. However, this can be overridden using the `hourCycle` prop if needed for a specific usecase. This example forces `useTimeField` to use 24-hour time, regardless of the locale.

```
<TimeField
  label="Appointment time"
  hourCycle={24} />
```

```
<TimeField
  label="Appointment time"
  hourCycle={24} />
```

```
<TimeField
  label="Appointment time"
  hourCycle={24}
/>
```