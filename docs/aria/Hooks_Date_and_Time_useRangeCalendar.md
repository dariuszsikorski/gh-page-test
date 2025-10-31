# useRangeCalendar

**Source**: [https://react-spectrum.adobe.com/react-aria/useRangeCalendar.html](https://react-spectrum.adobe.com/react-aria/useRangeCalendar.html)

> Documentation for useRangeCalendar in the React Aria package.

---

Provides the behavior and accessibility implementation for a range calendar component. A range calendar displays one or more date grids and allows users to select a contiguous range of dates.

* * *

`useRangeCalendar<T extends [DateValue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/calendar/src/index.d.ts:DateValue)>( props: [AriaRangeCalendarProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/calendar/src/index.d.ts:AriaRangeCalendarProps)<T>, state: [RangeCalendarState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/calendar/src/types.ts:RangeCalendarState), ref: [RefObject](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/refs.d.ts:RefObject)<[FocusableElement](https://developer.mozilla.org/en-US/docs/Web/API/Element) |  | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)> ): [CalendarAria](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/calendar/src/useCalendarBase.ts:CalendarAria)` `useCalendarGrid( (props: [AriaCalendarGridProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/calendar/src/useCalendarGrid.ts:AriaCalendarGridProps), , state: [CalendarState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/calendar/src/types.ts:CalendarState) |  | [RangeCalendarState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/calendar/src/types.ts:RangeCalendarState) )): [CalendarGridAria](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/calendar/src/useCalendarGrid.ts:CalendarGridAria)` `useCalendarCell( props: [AriaCalendarCellProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/calendar/src/useCalendarCell.ts:AriaCalendarCellProps), state: [CalendarState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/calendar/src/types.ts:CalendarState) |  | [RangeCalendarState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/calendar/src/types.ts:RangeCalendarState), ref: [RefObject](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/refs.d.ts:RefObject)<[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element) |  | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)> ): [CalendarCellAria](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/calendar/src/useCalendarCell.ts:CalendarCellAria)`

* * *

There is no standalone range calendar element in HTML. Two separate `<input type="date">` elements could be used, but this is very limited in functionality, lacking in internationalization capabilities, inconsistent between browsers, and difficult to style. `useRangeCalendar` helps achieve accessible and international range calendar components that can be styled as needed.

-   **Flexible** – Display one or more months at once, or a custom time range for use cases like a week view. Minimum and maximum values, unavailable dates, and non-contiguous selections are supported as well.
-   **International** – Support for 13 calendar systems used around the world, including Gregorian, Buddhist, Islamic, Persian, and more. Locale-specific formatting, number systems, and right-to-left support are available as well.
-   **Accessible** – Calendar cells can be navigated and selected using the keyboard, and localized screen reader messages are included to announce when the selection and visible date range change.
-   **Touch friendly** – Date ranges can be selected by dragging over dates in the calendar using a touch screen, and all interactions are accessible using touch-based screen readers.
-   **Customizable** – As with all of React Aria, the DOM structure and styling of all elements can be fully customized.

Read our [blog post](https://react-spectrum.adobe.com/blog/date-and-time-pickers-for-all.html) for more details about the internationalization, accessibility, and user experience features implemented by `useRangeCalendar`.

* * *

September 2021SMTWTF5789101314151619202122232412326272930628S111825412176CellGridNext buttonPrevious button

A range calendar consists of a grouping element containing one or more date grids (e.g. months), and a previous and next button for navigating through time. Each calendar grid consists of cells containing button elements that can be pressed and navigated to using the arrow keys to select a date range. Once a start date is selected, the user can navigate to another date using the keyboard or by hovering over it, and clicking it or pressing the Enter key commits the selected date range.

`useRangeCalendar` returns props that you should spread onto the appropriate elements:

Name

Type

Description

`calendarProps`

`[DOMAttributes](https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes)`

Props for the calendar grouping element.

`nextButtonProps`

`[AriaButtonProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/button/src/index.d.ts:AriaButtonProps)`

Props for the next button.

`prevButtonProps`

`[AriaButtonProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/button/src/index.d.ts:AriaButtonProps)`

Props for the previous button.

`errorMessageProps`

`[DOMAttributes](https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes)`

Props for the error message element, if any.

`title`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

A description of the visible date range, for use in the calendar title.

`useCalendarGrid` returns props for an individual grid of dates, such as one month, along with a list of formatted weekday names in the current locale for use during rendering:

Name

Type

Description

`gridProps`

`[DOMAttributes](https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes)`

Props for the date grid element (e.g. `<table>`).

`headerProps`

`[DOMAttributes](https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes)`

Props for the grid header element (e.g. `<thead>`).

`weekDays`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)[]`

A list of week day abbreviations formatted for the current locale, typically used in column headers.

`weeksInMonth`

`[number](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number)`

The number of weeks in the month.

`useCalendarCell` returns props for an individual cell, along with states and information useful during rendering:

Name

Type

Description

`cellProps`

`[DOMAttributes](https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes)`

Props for the grid cell element (e.g. `<td>`).

`buttonProps`

`[DOMAttributes](https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes)`

Props for the button element within the cell.

`isPressed`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether the cell is currently being pressed.

`isSelected`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether the cell is selected.

`isFocused`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether the cell is focused.

`isDisabled`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether the cell is disabled, according to the calendar's `minValue`, `maxValue`, and `isDisabled` props. Disabled dates are not focusable, and cannot be selected by the user. They are typically displayed with a dimmed appearance.

`isUnavailable`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether the cell is unavailable, according to the calendar's `isDateUnavailable` prop. Unavailable dates remain focusable, but cannot be selected by the user. They should be displayed with a visual affordance to indicate they are unavailable, such as a different color or a strikethrough.

Note that because they are focusable, unavailable dates must meet a 4.5:1 color contrast ratio, [as defined by WCAG](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html).

`isOutsideVisibleRange`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether the cell is outside the visible range of the calendar. For example, dates before the first day of a month in the same week.

`isInvalid`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

Whether the cell is part of an invalid selection.

`formattedDate`

`[string](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String)`

The day number formatted according to the current locale.

State is managed by the `[useRangeCalendarState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/calendar/src/useRangeCalendarState.ts:useRangeCalendarState)` hook from `@react-stately/calendar`. The state object should be passed as an option to `useRangeCalendar`, `useCalendarGrid`, and `useCalendarCell`.

Note that much of this anatomy is shared with [non-range calendars](https://react-spectrum.adobe.com/react-aria/useCalendar.html). The only difference is that `useRangeCalendarState` is used instead of `useCalendarState`, and `useRangeCalendar` is used instead of `useCalendar`.

## Date and time values[#](#date-and-time-values)

* * *

Dates are represented in many different ways by cultures around the world. This includes differences in calendar systems, date formatting, numbering systems, weekday and weekend rules, and much more. When building applications that support users around the world, it is important to handle these aspects correctly for each locale.

`[useRangeCalendar](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-aria/calendar/src/useRangeCalendar.ts:useRangeCalendar)` uses the [@internationalized/date](https://react-spectrum.adobe.com/internationalized/date/) library to represent dates and times. This package provides a library of objects and functions to perform date and time related manipulation, queries, and conversions that work across locales and calendars. Date and time objects can be converted to and from native JavaScript `Date` objects or [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) strings. See the [documentation](https://react-spectrum.adobe.com/internationalized/date/), or the [examples below](#value) for more details.

`[useRangeCalendarState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/calendar/src/useRangeCalendarState.ts:useRangeCalendarState)` requires a `createCalendar` function to be provided, which is used to implement date manipulation across multiple calendar systems. The default implementation in `@internationalized/date` includes all supported calendar systems. While this library is quite small (8 kB minified + Brotli), you can reduce its bundle size further by providing your own implementation that includes only your supported calendars. See [below](#reducing-bundle-size) for an example.

* * *

A `RangeCalendar` consists of three components: the main calendar wrapper element with previous and next buttons for navigating, one or more `CalendarGrid` components to display each month, and `CalendarCell` components for each date cell. We'll go through them one by one.

For simplicity, this example only displays a single month at a time. See the [styled examples](#styled-examples) section for more examples with multiple months, as well as other time ranges like weeks.

```
import {useLocale, useRangeCalendar} from 'react-aria';
import {useRangeCalendarState} from 'react-stately';
import {createCalendar} from '@internationalized/date';

// Reuse the Button from your component library. See below for details.
import {Button} from 'your-component-library';

function RangeCalendar(props) {
  let { locale } = useLocale();
  let state = useRangeCalendarState({
    createCalendar,
    ...props,
    locale
  });

  let ref = React.useRef(null);
  let { calendarProps, prevButtonProps, nextButtonProps, title } =
    useRangeCalendar(props, state, ref);

  return (
    <div {...calendarProps} ref={ref} className="calendar">
      <div className="header">
        <h2>{title}</h2>
        <Button {...prevButtonProps}>&lt;</Button>
        <Button {...nextButtonProps}>&gt;</Button>
      </div>
      <CalendarGrid state={state} firstDayOfWeek={props.firstDayOfWeek} />
    </div>
  );
}
```

```
import {useLocale, useRangeCalendar} from 'react-aria';
import {useRangeCalendarState} from 'react-stately';
import {createCalendar} from '@internationalized/date';

// Reuse the Button from your component library. See below for details.
import {Button} from 'your-component-library';

function RangeCalendar(props) {
  let { locale } = useLocale();
  let state = useRangeCalendarState({
    createCalendar,
    ...props,
    locale
  });

  let ref = React.useRef(null);
  let {
    calendarProps,
    prevButtonProps,
    nextButtonProps,
    title
  } = useRangeCalendar(props, state, ref);

  return (
    <div {...calendarProps} ref={ref} className="calendar">
      <div className="header">
        <h2>{title}</h2>
        <Button {...prevButtonProps}>&lt;</Button>
        <Button {...nextButtonProps}>&gt;</Button>
      </div>
      <CalendarGrid
        state={state}
        firstDayOfWeek={props.firstDayOfWeek}
      />
    </div>
  );
}
```

```
import {
  useLocale,
  useRangeCalendar
} from 'react-aria';
import {useRangeCalendarState} from 'react-stately';
import {createCalendar} from '@internationalized/date';

// Reuse the Button from your component library. See below for details.
import {Button} from 'your-component-library';

function RangeCalendar(
  props
) {
  let { locale } =
    useLocale();
  let state =
    useRangeCalendarState(
      {
        createCalendar,
        ...props,
        locale
      }
    );

  let ref = React.useRef(
    null
  );
  let {
    calendarProps,
    prevButtonProps,
    nextButtonProps,
    title
  } = useRangeCalendar(
    props,
    state,
    ref
  );

  return (
    <div
      {...calendarProps}
      ref={ref}
      className="calendar"
    >
      <div className="header">
        <h2>{title}</h2>
        <Button
          {...prevButtonProps}
        >
          &lt;
        </Button>
        <Button
          {...nextButtonProps}
        >
          &gt;
        </Button>
      </div>
      <CalendarGrid
        state={state}
        firstDayOfWeek={props
          .firstDayOfWeek}
      />
    </div>
  );
}
```

The `CalendarGrid` component will be responsible for rendering an individual month. It is a separate component so that you can render more than one month at a time if you like. It's rendered as an HTML `<table>` element, and React Aria takes care of adding the proper ARIA roles and event handlers to make it behave as an ARIA grid. You can use the arrow keys to navigate between cells, and the Enter key to select a date.

The `state.getDatesInWeek` function returns the dates in each week of the month. Note that this always includes 7 values, but some of them may be null, which indicates that the date doesn't exist within the calendar system. You should render a placeholder `<td>` element in this case so that the cells line up correctly.

**Note**: this component is the same as the `CalendarGrid` component shown in the [useCalendar](https://react-spectrum.adobe.com/react-aria/useCalendar.html) docs, and you can reuse it between both `Calendar` and `RangeCalendar`.

```
import {useCalendarGrid} from 'react-aria';

function CalendarGrid({ state, ...props }) {
  let { gridProps, headerProps, weekDays, weeksInMonth } = useCalendarGrid(
    props,
    state
  );

  return (
    <table {...gridProps}>
      <thead {...headerProps}>
        <tr>
          {weekDays.map((day, index) => <th key={index}>{day}</th>)}
        </tr>
      </thead>
      <tbody>
        {[...new Array(weeksInMonth).keys()].map((weekIndex) => (
          <tr key={weekIndex}>
            {state.getDatesInWeek(weekIndex).map((date, i) => (
              date
                ? (
                  <CalendarCell
                    key={i}
                    state={state}
                    date={date}
                  />
                )
                : <td key={i} />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
```

```
import {useCalendarGrid} from 'react-aria';

function CalendarGrid({ state, ...props }) {
  let { gridProps, headerProps, weekDays, weeksInMonth } =
    useCalendarGrid(props, state);

  return (
    <table {...gridProps}>
      <thead {...headerProps}>
        <tr>
          {weekDays.map((day, index) => (
            <th key={index}>{day}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {[...new Array(weeksInMonth).keys()].map(
          (weekIndex) => (
            <tr key={weekIndex}>
              {state.getDatesInWeek(weekIndex).map((
                date,
                i
              ) => (
                date
                  ? (
                    <CalendarCell
                      key={i}
                      state={state}
                      date={date}
                    />
                  )
                  : <td key={i} />
              ))}
            </tr>
          )
        )}
      </tbody>
    </table>
  );
}
```

```
import {useCalendarGrid} from 'react-aria';

function CalendarGrid(
  { state, ...props }
) {
  let {
    gridProps,
    headerProps,
    weekDays,
    weeksInMonth
  } = useCalendarGrid(
    props,
    state
  );

  return (
    <table
      {...gridProps}
    >
      <thead
        {...headerProps}
      >
        <tr>
          {weekDays.map((
            day,
            index
          ) => (
            <th
              key={index}
            >
              {day}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {[...new Array(
          weeksInMonth
        ).keys()].map(
          (weekIndex) => (
            <tr
              key={weekIndex}
            >
              {state
                .getDatesInWeek(
                  weekIndex
                ).map((
                  date,
                  i
                ) => (
                  date
                    ? (
                      <CalendarCell
                        key={i}
                        state={state}
                        date={date}
                      />
                    )
                    : (
                      <td
                        key={i}
                      />
                    )
                ))}
            </tr>
          )
        )}
      </tbody>
    </table>
  );
}
```

Finally, the `CalendarCell` component renders an individual cell in a calendar. It consists of two elements: a `<td>` to represent the grid cell, and a `<div>` to represent a button that can be clicked to select the date. The `useCalendarCell` hook also returns the formatted date string in the current locale, as well as some information about the cell's state that can be useful for styling. See [above](#usecalendarcell) for details.

**Note**: this component is the same as the `CalendarCell` component shown in the [useCalendar](https://react-spectrum.adobe.com/react-aria/useCalendar.html) docs, and you can reuse it between both `Calendar` and `RangeCalendar`.

```
import {useCalendarCell} from 'react-aria';

function CalendarCell({ state, date }) {
  let ref = React.useRef(null);
  let {
    cellProps,
    buttonProps,
    isSelected,
    isOutsideVisibleRange,
    isDisabled,
    isUnavailable,
    formattedDate
  } = useCalendarCell({ date }, state, ref);

  return (
    <td {...cellProps}>
      <div
        {...buttonProps}
        ref={ref}
        hidden={isOutsideVisibleRange}
        className={`cell ${isSelected ? 'selected' : ''} ${
          isDisabled ? 'disabled' : ''
        } ${isUnavailable ? 'unavailable' : ''}`}
      >
        {formattedDate}
      </div>
    </td>
  );
}
```

```
import {useCalendarCell} from 'react-aria';

function CalendarCell({ state, date }) {
  let ref = React.useRef(null);
  let {
    cellProps,
    buttonProps,
    isSelected,
    isOutsideVisibleRange,
    isDisabled,
    isUnavailable,
    formattedDate
  } = useCalendarCell({ date }, state, ref);

  return (
    <td {...cellProps}>
      <div
        {...buttonProps}
        ref={ref}
        hidden={isOutsideVisibleRange}
        className={`cell ${isSelected ? 'selected' : ''} ${
          isDisabled ? 'disabled' : ''
        } ${isUnavailable ? 'unavailable' : ''}`}
      >
        {formattedDate}
      </div>
    </td>
  );
}
```

```
import {useCalendarCell} from 'react-aria';

function CalendarCell(
  { state, date }
) {
  let ref = React.useRef(
    null
  );
  let {
    cellProps,
    buttonProps,
    isSelected,
    isOutsideVisibleRange,
    isDisabled,
    isUnavailable,
    formattedDate
  } = useCalendarCell(
    { date },
    state,
    ref
  );

  return (
    <td {...cellProps}>
      <div
        {...buttonProps}
        ref={ref}
        hidden={isOutsideVisibleRange}
        className={`cell ${
          isSelected
            ? 'selected'
            : ''
        } ${
          isDisabled
            ? 'disabled'
            : ''
        } ${
          isUnavailable
            ? 'unavailable'
            : ''
        }`}
      >
        {formattedDate}
      </div>
    </td>
  );
}
```

That's it! Now we can render an example of our `RangeCalendar` component in action.

```
<RangeCalendar aria-label="Trip dates" />
```

```
<RangeCalendar aria-label="Trip dates" />
```

```
<RangeCalendar aria-label="Trip dates" />
```

Show CSS

```
.calendar {
  width: 220px;
}

.header {
  display: flex;
  align-items: center;
  gap: 4px;
  margin: 0 8px;
}

.header h2 {
  flex: 1;
  margin: 0;
}

.calendar table {
  width: 100%;
}

.cell {
  cursor: default;
  text-align: center;
}

.selected {
  background: var(--blue);
  color: white;
}

.unavailable {
  color: var(--spectrum-global-color-red-600);
}

.disabled {
  color: gray;
}
```

```
.calendar {
  width: 220px;
}

.header {
  display: flex;
  align-items: center;
  gap: 4px;
  margin: 0 8px;
}

.header h2 {
  flex: 1;
  margin: 0;
}

.calendar table {
  width: 100%;
}

.cell {
  cursor: default;
  text-align: center;
}

.selected {
  background: var(--blue);
  color: white;
}

.unavailable {
  color: var(--spectrum-global-color-red-600);
}

.disabled {
  color: gray;
}
```

```
.calendar {
  width: 220px;
}

.header {
  display: flex;
  align-items: center;
  gap: 4px;
  margin: 0 8px;
}

.header h2 {
  flex: 1;
  margin: 0;
}

.calendar table {
  width: 100%;
}

.cell {
  cursor: default;
  text-align: center;
}

.selected {
  background: var(--blue);
  color: white;
}

.unavailable {
  color: var(--spectrum-global-color-red-600);
}

.disabled {
  color: gray;
}
```

The `Button` component is used in the above example to navigate between months. It is built using the [useButton](https://react-spectrum.adobe.com/react-aria/useButton.html) hook, and can be shared with many other components.

Show code

```
import {useButton} from 'react-aria';

function Button(props) {
  let ref = React.useRef(null);
  let { buttonProps } = useButton(props, ref);
  return <button {...buttonProps} ref={ref}>{props.children}</button>;
}
```

```
import {useButton} from 'react-aria';

function Button(props) {
  let ref = React.useRef(null);
  let { buttonProps } = useButton(props, ref);
  return (
    <button {...buttonProps} ref={ref}>
      {props.children}
    </button>
  );
}
```

```
import {useButton} from 'react-aria';

function Button(props) {
  let ref = React.useRef(
    null
  );
  let { buttonProps } =
    useButton(
      props,
      ref
    );
  return (
    <button
      {...buttonProps}
      ref={ref}
    >
      {props.children}
    </button>
  );
}
```

* * *

[![](https://react-spectrum.adobe.com/tailwind.a39a548a.png)

Tailwind CSS

A RangeCalendar built with Tailwind, supporting multiple visible months.

](https://codesandbox.io/s/objective-shape-8r4utm?file=/src/RangeCalendar.js)

* * *

The following examples show how to use the `RangeCalendar` component created in the above example.

A `RangeCalendar` has no selection by default. An initial, uncontrolled value can be provided to the `RangeCalendar` using the `defaultValue` prop. Alternatively, a controlled value can be provided using the `value` prop.

Date ranges are objects with `start` and `end` properties containing date values, which are provided using objects in the [@internationalized/date](https://react-spectrum.adobe.com/internationalized/date/) package. This library handles correct international date manipulation across calendars, time zones, and other localization concerns.

`useRangeCalendar` supports values with both date and time components, but only allows users to modify the dates. By default, `useRangeCalendar` will emit `[CalendarDate](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@internationalized/date/src/CalendarDate.ts:CalendarDate)` objects in the `onChange` event, but if a `[CalendarDateTime](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@internationalized/date/src/CalendarDate.ts:CalendarDateTime)` or `[ZonedDateTime](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@internationalized/date/src/CalendarDate.ts:ZonedDateTime)` object is passed as the `value` or `defaultValue`, values of that type will be emitted, changing only the date and preserving the time components.

```
import {parseDate} from '@internationalized/date';

function Example() {
  let [value, setValue] = React.useState({
    start: parseDate('2020-02-03'),
    end: parseDate('2020-02-12')
  });

  return (
    <div style={{display: 'flex', gap: 20, flexWrap: 'wrap'}}>
      <RangeCalendar
        aria-label="Date range (uncontrolled)"
        defaultValue={{
          start: parseDate('2020-02-03'),
          end: parseDate('2020-02-12')
        }} />
      <RangeCalendar
        aria-label="Date range (controlled)"
        value={value}
        onChange={setValue} />
    </div>
  );
}
```

```
import {parseDate} from '@internationalized/date';

function Example() {
  let [value, setValue] = React.useState({
    start: parseDate('2020-02-03'),
    end: parseDate('2020-02-12')
  });

  return (
    <div
      style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}
    >
      <RangeCalendar
        aria-label="Date range (uncontrolled)"
        defaultValue={{
          start: parseDate('2020-02-03'),
          end: parseDate('2020-02-12')
        }}
      />
      <RangeCalendar
        aria-label="Date range (controlled)"
        value={value}
        onChange={setValue}
      />
    </div>
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
        '2020-02-12'
      )
    });

  return (
    <div
      style={{
        display: 'flex',
        gap: 20,
        flexWrap: 'wrap'
      }}
    >
      <RangeCalendar
        aria-label="Date range (uncontrolled)"
        defaultValue={{
          start:
            parseDate(
              '2020-02-03'
            ),
          end: parseDate(
            '2020-02-12'
          )
        }}
      />
      <RangeCalendar
        aria-label="Date range (controlled)"
        value={value}
        onChange={setValue}
      />
    </div>
  );
}
```

`useRangeCalendar` accepts an `onChange` prop which is triggered whenever a date is selected by the user. The example below uses `onChange` to update a separate element with a formatted version of the date in the user's locale. This is done by converting the date to a native JavaScript `Date` object to pass to the formatter.

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
      <RangeCalendar
        aria-label="Date range"
        value={range}
        onChange={setRange}
      />
      <p>
        Selected date: {formatter.formatRange(
          range.start.toDate(getLocalTimeZone()),
          range.end.toDate(getLocalTimeZone())
        )}
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
      <RangeCalendar
        aria-label="Date range"
        value={range}
        onChange={setRange}
      />
      <p>
        Selected date: {formatter.formatRange(
          range.start.toDate(getLocalTimeZone()),
          range.end.toDate(getLocalTimeZone())
        )}
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
      <RangeCalendar
        aria-label="Date range"
        value={range}
        onChange={setRange}
      />
      <p>
        Selected date:
        {' '}
        {formatter
          .formatRange(
            range.start
              .toDate(
                getLocalTimeZone()
              ),
            range.end
              .toDate(
                getLocalTimeZone()
              )
          )}
      </p>
    </>
  );
}
```

`useRangeCalendar` supports selecting dates in many calendar systems used around the world, including Gregorian, Hebrew, Indian, Islamic, Buddhist, and more. Dates are automatically displayed in the appropriate calendar system for the user's locale. The calendar system can be overridden using the [Unicode calendar locale extension](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/calendar#adding_a_calendar_in_the_locale_string), passed to the [I18nProvider](https://react-spectrum.adobe.com/react-aria/I18nProvider.html) component.

Selected dates passed to `onChange` always use the same calendar system as the `value` or `defaultValue` prop. If no `value` or `defaultValue` is provided, then dates passed to `onChange` are always in the Gregorian calendar since this is the most commonly used. This means that even though the user selects dates in their local calendar system, applications are able to deal with dates from all users consistently.

The below example displays a `RangeCalendar` in the Hindi language, using the Indian calendar. Dates emitted from `onChange` are in the Gregorian calendar.

```
import {I18nProvider} from 'react-aria';

function Example() {
  let [range, setRange] = React.useState(null);
  return (
    <I18nProvider locale="hi-IN-u-ca-indian">
      <RangeCalendar
        aria-label="Date range"
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

function Example() {
  let [range, setRange] = React.useState(null);
  return (
    <I18nProvider locale="hi-IN-u-ca-indian">
      <RangeCalendar
        aria-label="Date range"
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

function Example() {
  let [range, setRange] =
    React.useState(null);
  return (
    <I18nProvider locale="hi-IN-u-ca-indian">
      <RangeCalendar
        aria-label="Date range"
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

`RangeCalendar` also supports custom calendar systems that implement custom business rules. An example would be a fiscal year calendar that follows a [4-5-4 format](https://nrf.com/resources/4-5-4-calendar), where month ranges don't follow the usual Gregorian calendar.

The `createCalendar` prop accepts a function that returns an instance of the `[Calendar](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@internationalized/date/src/types.ts:Calendar)` interface. See the [@internationalized/date docs](https://react-spectrum.adobe.com/internationalized/date/Calendar.html#custom-calendars) for an example implementation.

```
import {GregorianCalendar} from '@internationalized/date';

function Example() {
  return (
    <RangeCalendar
      firstDayOfWeek="sun"
      createCalendar={() => new Custom454()}
    />
  );
}

class Custom454 extends GregorianCalendar {
  // See @internationalized/date docs linked above...
}
```

```
import {GregorianCalendar} from '@internationalized/date';

function Example() {
  return (
    <RangeCalendar
      firstDayOfWeek="sun"
      createCalendar={() => new Custom454()}
    />
  );
}

class Custom454 extends GregorianCalendar {
  // See @internationalized/date docs linked above...
}
```

```
import {GregorianCalendar} from '@internationalized/date';

function Example() {
  return (
    <RangeCalendar
      firstDayOfWeek="sun"
      createCalendar={() =>
        new Custom454()}
    />
  );
}

class Custom454
  extends GregorianCalendar {
  // See @internationalized/date docs linked above...
}
```

By default, `useRangeCalendar` allows selecting any date range. The `minValue` and `maxValue` props can also be used to prevent the user from selecting dates outside a certain range.

This example only accepts dates after today.

```
import {today} from '@internationalized/date';

<RangeCalendar aria-label="Trip dates" minValue={today(getLocalTimeZone())} />
```

```
import {today} from '@internationalized/date';

<RangeCalendar
  aria-label="Trip dates"
  minValue={today(getLocalTimeZone())}
/>
```

```
import {today} from '@internationalized/date';

<RangeCalendar
  aria-label="Trip dates"
  minValue={today(
    getLocalTimeZone()
  )}
/>
```

`useRangeCalendar` supports marking certain dates as _unavailable_. These dates remain focusable with the keyboard so that navigation is consistent, but cannot be selected by the user. In this example, they are displayed in red. The `isDateUnavailable` prop accepts a callback that is called to evaluate whether each visible date is unavailable.

Note that by default, users may not select non-contiguous ranges, i.e. ranges that contain unavailable dates within them. Once a start date is selected, enabled dates will be restricted to subsequent dates until an unavailable date is hit. See [below](#non-contiguous-ranges) for an example of how to allow non-contiguous ranges.

This example includes multiple unavailable date ranges, e.g. dates when a rental house is not available. The `minValue` prop is also used to prevent selecting dates before today.

```
import {today} from '@internationalized/date';

function Example() {
  let now = today(getLocalTimeZone());
  let disabledRanges = [
    [now, now.add({ days: 5 })],
    [now.add({ days: 14 }), now.add({ days: 16 })],
    [now.add({ days: 23 }), now.add({ days: 24 })]
  ];

  let isDateUnavailable = (date) =>
    disabledRanges.some((interval) =>
      date.compare(interval[0]) >= 0 && date.compare(interval[1]) <= 0
    );

  return (
    <RangeCalendar
      aria-label="Trip dates"
      minValue={today(getLocalTimeZone())}
      isDateUnavailable={isDateUnavailable}
    />
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

  let isDateUnavailable = (date) =>
    disabledRanges.some((interval) =>
      date.compare(interval[0]) >= 0 &&
      date.compare(interval[1]) <= 0
    );

  return (
    <RangeCalendar
      aria-label="Trip dates"
      minValue={today(getLocalTimeZone())}
      isDateUnavailable={isDateUnavailable}
    />
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

  let isDateUnavailable =
    (date) =>
      disabledRanges
        .some((
          interval
        ) =>
          date.compare(
              interval[0]
            ) >= 0 &&
          date.compare(
              interval[1]
            ) <= 0
        );

  return (
    <RangeCalendar
      aria-label="Trip dates"
      minValue={today(
        getLocalTimeZone()
      )}
      isDateUnavailable={isDateUnavailable}
    />
  );
}
```

The `allowsNonContiguousRanges` prop enables a range to be selected even if there are unavailable dates in the middle. The value emitted in the `onChange` event will still be a single range with a `start` and `end` property, but unavailable dates will not be displayed as selected. It is up to applications to split the full selected range into multiple as needed for business logic.

This example prevents selecting weekends, but allows selecting ranges that span multiple weeks.

```
import {isWeekend} from '@internationalized/date';

function Example() {
  let { locale } = useLocale();

  return (
    <RangeCalendar
      aria-label="Time off request"
      isDateUnavailable={(date) => isWeekend(date, locale)}
      allowsNonContiguousRanges
    />
  );
}
```

```
import {isWeekend} from '@internationalized/date';

function Example() {
  let { locale } = useLocale();

  return (
    <RangeCalendar
      aria-label="Time off request"
      isDateUnavailable={(date) => isWeekend(date, locale)}
      allowsNonContiguousRanges
    />
  );
}
```

```
import {isWeekend} from '@internationalized/date';

function Example() {
  let { locale } =
    useLocale();

  return (
    <RangeCalendar
      aria-label="Time off request"
      isDateUnavailable={(date) =>
        isWeekend(
          date,
          locale
        )}
      allowsNonContiguousRanges
    />
  );
}
```

By default, the first selected date is focused when a `RangeCalendar` first mounts. If no `value` or `defaultValue` prop is provided, then the current date is focused. However, `useRangeCalendar` supports controlling which date is focused using the `focusedValue` and `onFocusChange` props. This also determines which month is visible. The `defaultFocusedValue` prop allows setting the initial focused date when the `RangeCalendar` first mounts, without controlling it.

This example focuses July 1, 2021 by default. The user may change the focused date, and the `onFocusChange` event updates the state. Clicking the button resets the focused date back to the initial value.

```
import {CalendarDate} from '@internationalized/date';

function Example() {
  let defaultDate = new CalendarDate(2021, 7, 1);
  let [focusedDate, setFocusedDate] = React.useState(defaultDate);

  return (
    <div style={{ flexDirection: 'column', alignItems: 'start', gap: 20 }}>
      <button onClick={() => setFocusedDate(defaultDate)}>
        Reset focused date
      </button>
      <RangeCalendar
        focusedValue={focusedDate}
        onFocusChange={setFocusedDate}
      />
    </div>
  );
}
```

```
import {CalendarDate} from '@internationalized/date';

function Example() {
  let defaultDate = new CalendarDate(2021, 7, 1);
  let [focusedDate, setFocusedDate] = React.useState(
    defaultDate
  );

  return (
    <div
      style={{
        flexDirection: 'column',
        alignItems: 'start',
        gap: 20
      }}
    >
      <button onClick={() => setFocusedDate(defaultDate)}>
        Reset focused date
      </button>
      <RangeCalendar
        focusedValue={focusedDate}
        onFocusChange={setFocusedDate}
      />
    </div>
  );
}
```

```
import {CalendarDate} from '@internationalized/date';

function Example() {
  let defaultDate =
    new CalendarDate(
      2021,
      7,
      1
    );
  let [
    focusedDate,
    setFocusedDate
  ] = React.useState(
    defaultDate
  );

  return (
    <div
      style={{
        flexDirection:
          'column',
        alignItems:
          'start',
        gap: 20
      }}
    >
      <button
        onClick={() =>
          setFocusedDate(
            defaultDate
          )}
      >
        Reset focused
        date
      </button>
      <RangeCalendar
        focusedValue={focusedDate}
        onFocusChange={setFocusedDate}
      />
    </div>
  );
}
```

The `isDisabled` boolean prop makes the RangeCalendar disabled. Cells cannot be focused or selected.

```
<RangeCalendar aria-label="Trip dates" isDisabled />
```

```
<RangeCalendar aria-label="Trip dates" isDisabled />
```

```
<RangeCalendar
  aria-label="Trip dates"
  isDisabled
/>
```

The `isReadOnly` boolean prop makes the RangeCalendar's value immutable. Unlike `isDisabled`, the RangeCalendar remains focusable.

```
<RangeCalendar
  aria-label="Trip dates"
  value={{
    start: today(getLocalTimeZone()),
    end: today(getLocalTimeZone()).add({ weeks: 1 })
  }}
  isReadOnly
/>
```

```
<RangeCalendar
  aria-label="Trip dates"
  value={{
    start: today(getLocalTimeZone()),
    end: today(getLocalTimeZone()).add({ weeks: 1 })
  }}
  isReadOnly
/>
```

```
<RangeCalendar
  aria-label="Trip dates"
  value={{
    start: today(
      getLocalTimeZone()
    ),
    end: today(
      getLocalTimeZone()
    ).add({ weeks: 1 })
  }}
  isReadOnly
/>
```

By default, the first day of the week is automatically set based on the current locale. This can be changed by setting the `firstDayOfWeek` prop to `'sun'`, `'mon'`, `'tue'`, `'wed'`, `'thu'`, `'fri'`, or `'sat'`.

```
<RangeCalendar aria-label="Trip dates" firstDayOfWeek="mon" />
```

```
<RangeCalendar
  aria-label="Trip dates"
  firstDayOfWeek="mon"
/>
```

```
<RangeCalendar
  aria-label="Trip dates"
  firstDayOfWeek="mon"
/>
```

An aria-label must be provided to the `RangeCalendar` for accessibility. If it is labeled by a separate element, an `aria-labelledby` prop must be provided using the `id` of the labeling element instead.

In order to internationalize a `RangeCalendar`, a localized string should be passed to the `aria-label` prop. For languages that are read right-to-left (e.g. Hebrew and Arabic), keyboard navigation is automatically flipped. Ensure that your CSS accounts for this as well. Dates are automatically formatted using the current locale.

* * *

In the example above, the `[createCalendar](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@internationalized/date/src/createCalendar.ts:createCalendar)` function from the [@internationalized/date](https://react-spectrum.adobe.com/internationalized/date/) package is passed to the `[useRangeCalendarState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/calendar/src/useRangeCalendarState.ts:useRangeCalendarState)` hook. This function receives a [calendar identifier](https://react-spectrum.adobe.com/internationalized/date/Calendar.html#calendar-identifiers) string, and provides `[Calendar](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@internationalized/date/src/types.ts:Calendar)` instances to React Stately, which are used to implement date manipulation.

By default, this includes [all calendar systems](https://react-spectrum.adobe.com/internationalized/date/Calendar.html#implementations) supported by `@internationalized/date`. However, if your application supports a more limited set of regions, or you know you will only be picking dates in a certain calendar system, you can reduce your bundle size by providing your own implementation of `createCalendar` that includes a subset of these `Calendar` implementations.

For example, if your application only supports Gregorian dates, you could implement a `createCalendar` function like this:

```
import {useLocale} from 'react-aria';
import {useRangeCalendarState} from 'react-stately';
import {GregorianCalendar} from '@internationalized/date';

function createCalendar(identifier) {
  switch (identifier) {
    case 'gregory':
      return new GregorianCalendar();
    default:
      throw new Error(`Unsupported calendar ${identifier}`);
  }
}

function RangeCalendar(props) {
  let { locale } = useLocale();
  let state = useRangeCalendarState({
    ...props,
    locale,
    createCalendar
  });

  // ...
}
```

```
import {useLocale} from 'react-aria';
import {useRangeCalendarState} from 'react-stately';
import {GregorianCalendar} from '@internationalized/date';

function createCalendar(identifier) {
  switch (identifier) {
    case 'gregory':
      return new GregorianCalendar();
    default:
      throw new Error(`Unsupported calendar ${identifier}`);
  }
}

function RangeCalendar(props) {
  let { locale } = useLocale();
  let state = useRangeCalendarState({
    ...props,
    locale,
    createCalendar
  });

  // ...
}
```

```
import {useLocale} from 'react-aria';
import {useRangeCalendarState} from 'react-stately';
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

function RangeCalendar(
  props
) {
  let { locale } =
    useLocale();
  let state =
    useRangeCalendarState(
      {
        ...props,
        locale,
        createCalendar
      }
    );

  // ...
}
```

This way, only `GregorianCalendar` is imported, and the other calendar implementations can be tree-shaken.

See the [Calendar](https://react-spectrum.adobe.com/internationalized/date/Calendar.html) documentation in `@internationalized/date` to learn more about the supported calendar systems, and a list of string identifiers.