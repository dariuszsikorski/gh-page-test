# RangeCalendar

**Source**: [https://react-spectrum.adobe.com/react-aria/RangeCalendar.html](https://react-spectrum.adobe.com/react-aria/RangeCalendar.html)

> Documentation for RangeCalendar in the React Aria package.

---

A range calendar displays one or more date grids and allows users to select a contiguous range of dates.

* * *

```
import {Button, CalendarCell, CalendarGrid, Heading, RangeCalendar} from 'react-aria-components';
import {ChevronLeft, ChevronRight} from 'lucide-react';

<RangeCalendar aria-label="Trip dates">
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
```

```
import {
  Button,
  CalendarCell,
  CalendarGrid,
  Heading,
  RangeCalendar
} from 'react-aria-components';
import {ChevronLeft, ChevronRight} from 'lucide-react';

<RangeCalendar aria-label="Trip dates">
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
```

```
import {
  Button,
  CalendarCell,
  CalendarGrid,
  Heading,
  RangeCalendar
} from 'react-aria-components';
import {
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

<RangeCalendar aria-label="Trip dates">
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
```

Show CSS

```
@import "@react-aria/example-theme";

.react-aria-RangeCalendar {
  width: fit-content;
  max-width: 100%;
  color: var(--text-color);

  & header {
    display: flex;
    align-items: center;
    margin: 0 4px .5rem 4px;

    .react-aria-Heading {
      flex: 1;
      margin: 0;
      text-align: center;
      font-size: 1.375rem;
    }
  }

  .react-aria-Button {
    width: 2rem;
    height: 2rem;
    padding: 0;
  }

  & table {
    border-collapse: collapse;

    & td {
      padding: 2px 0;
    }
  }

  .react-aria-CalendarCell {
    width: 2.286rem;
    line-height: 2.286rem;
    text-align: center;
    border-radius: 6px;
    cursor: default;
    outline: none;
    forced-color-adjust: none;

    &[data-outside-month] {
      display: none;
    }

    &[data-pressed] {
      background: var(--gray-100);
    }

    &[data-focus-visible] {
      outline: 2px solid var(--highlight-background);
      outline-offset: -2px;
    }

    &[data-selected] {
      background: var(--highlight-background);
      color: var(--highlight-foreground);
      border-radius: 0;

      &[data-focus-visible] {
        outline-color: var(--highlight-foreground);
        outline-offset: -3px;
      }
    }

    &[data-selection-start] {
      border-start-start-radius: 6px;
      border-end-start-radius: 6px;
    }

    &[data-selection-end] {
      border-start-end-radius: 6px;
      border-end-end-radius: 6px;
    }
  }
}
```

```
@import "@react-aria/example-theme";

.react-aria-RangeCalendar {
  width: fit-content;
  max-width: 100%;
  color: var(--text-color);

  & header {
    display: flex;
    align-items: center;
    margin: 0 4px .5rem 4px;

    .react-aria-Heading {
      flex: 1;
      margin: 0;
      text-align: center;
      font-size: 1.375rem;
    }
  }

  .react-aria-Button {
    width: 2rem;
    height: 2rem;
    padding: 0;
  }

  & table {
    border-collapse: collapse;

    & td {
      padding: 2px 0;
    }
  }

  .react-aria-CalendarCell {
    width: 2.286rem;
    line-height: 2.286rem;
    text-align: center;
    border-radius: 6px;
    cursor: default;
    outline: none;
    forced-color-adjust: none;

    &[data-outside-month] {
      display: none;
    }

    &[data-pressed] {
      background: var(--gray-100);
    }

    &[data-focus-visible] {
      outline: 2px solid var(--highlight-background);
      outline-offset: -2px;
    }

    &[data-selected] {
      background: var(--highlight-background);
      color: var(--highlight-foreground);
      border-radius: 0;

      &[data-focus-visible] {
        outline-color: var(--highlight-foreground);
        outline-offset: -3px;
      }
    }

    &[data-selection-start] {
      border-start-start-radius: 6px;
      border-end-start-radius: 6px;
    }

    &[data-selection-end] {
      border-start-end-radius: 6px;
      border-end-end-radius: 6px;
    }
  }
}
```

```
@import "@react-aria/example-theme";

.react-aria-RangeCalendar {
  width: fit-content;
  max-width: 100%;
  color: var(--text-color);

  & header {
    display: flex;
    align-items: center;
    margin: 0 4px .5rem 4px;

    .react-aria-Heading {
      flex: 1;
      margin: 0;
      text-align: center;
      font-size: 1.375rem;
    }
  }

  .react-aria-Button {
    width: 2rem;
    height: 2rem;
    padding: 0;
  }

  & table {
    border-collapse: collapse;

    & td {
      padding: 2px 0;
    }
  }

  .react-aria-CalendarCell {
    width: 2.286rem;
    line-height: 2.286rem;
    text-align: center;
    border-radius: 6px;
    cursor: default;
    outline: none;
    forced-color-adjust: none;

    &[data-outside-month] {
      display: none;
    }

    &[data-pressed] {
      background: var(--gray-100);
    }

    &[data-focus-visible] {
      outline: 2px solid var(--highlight-background);
      outline-offset: -2px;
    }

    &[data-selected] {
      background: var(--highlight-background);
      color: var(--highlight-foreground);
      border-radius: 0;

      &[data-focus-visible] {
        outline-color: var(--highlight-foreground);
        outline-offset: -3px;
      }
    }

    &[data-selection-start] {
      border-start-start-radius: 6px;
      border-end-start-radius: 6px;
    }

    &[data-selection-end] {
      border-start-end-radius: 6px;
      border-end-end-radius: 6px;
    }
  }
}
```

* * *

There is no standalone range calendar element in HTML. Two separate `<input type="date">` elements could be used, but this is very limited in functionality, lacking in internationalization capabilities, inconsistent between browsers, and difficult to style. `RangeCalendar` helps achieve accessible and international range calendar components that can be styled as needed.

-   **Flexible** – Display one or more months at once, or a custom time range for use cases like a week view. Minimum and maximum values, unavailable dates, and non-contiguous selections are supported as well.
-   **International** – Support for 13 calendar systems used around the world, including Gregorian, Buddhist, Islamic, Persian, and more. Locale-specific formatting, number systems, and right-to-left support are available as well.
-   **Accessible** – Calendar cells can be navigated and selected using the keyboard, and localized screen reader messages are included to announce when the selection and visible date range change.
-   **Touch friendly** – Date ranges can be selected by dragging over dates in the calendar using a touch screen, and all interactions are accessible using touch-based screen readers.
-   **Customizable** – As with all of React Aria, the DOM structure and styling of all elements can be fully customized.

Read our [blog post](https://react-spectrum.adobe.com/blog/date-and-time-pickers-for-all.html) for more details about the internationalization, accessibility, and user experience features implemented by `RangeCalendar`.

* * *

September 2021SMTWTF5789101314151619202122232412326272930628S111825412176CellGridNext buttonPrevious button

A range calendar consists of a grouping element containing one or more date grids (e.g. months), and a previous and next button for navigating through time. Each calendar grid consists of cells containing button elements that can be pressed and navigated to using the arrow keys to select a date range. Once a start date is selected, the user can navigate to another date using the keyboard or by hovering over it, and clicking it or pressing the Enter key commits the selected date range.

`RangeCalendar` also supports an optional error message element, which can be used to provide more context about any validation errors. This is linked with the calendar via the `aria-describedby` attribute.

```
import {Button, CalendarCell, CalendarGrid, CalendarGridBody, CalendarGridHeader, CalendarHeaderCell, Heading, RangeCalendar, Text} from 'react-aria-components';

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
```

```
import {
  Button,
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHeader,
  CalendarHeaderCell,
  Heading,
  RangeCalendar,
  Text
} from 'react-aria-components';

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
```

```
import {
  Button,
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHeader,
  CalendarHeaderCell,
  Heading,
  RangeCalendar,
  Text
} from 'react-aria-components';

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
```

Note that much of this anatomy is shared with [non-range calendars](https://react-spectrum.adobe.com/react-aria/Calendar.html). If you have both, the styling and internal components such as `CalendarCell` can be shared.

`RangeCalendar` makes use of the following concepts:

[

@internationalized/date

Represent and manipulate dates and times in a locale-aware manner.

](https://react-spectrum.adobe.com/internationalized/date/index.html)

A `Calendar` uses the following components, which may also be used standalone or reused in other components.

[

Button

A button allows a user to perform an action.

](https://react-spectrum.adobe.com/react-aria/Button.html)

* * *

To help kick-start your project, we offer starter kits that include example implementations of all React Aria components with various styling solutions. All components are fully styled, including support for dark mode, high contrast mode, and all UI states. Each starter comes with a pre-configured [Storybook](https://storybook.js.org/) that you can experiment with, or use as a starting point for your own component library.

* * *

If you will use a RangeCalendar in multiple places in your app, you can wrap all of the pieces into a reusable component. This way, the DOM structure, styling code, and other logic are defined in a single place and reused everywhere to ensure consistency.

```
import type {DateValue, RangeCalendarProps} from 'react-aria-components';
import {Text} from 'react-aria-components';

interface MyRangeCalendarProps<T extends DateValue>
  extends RangeCalendarProps<T> {
  errorMessage?: string;
}

function MyRangeCalendar<T extends DateValue>(
  { errorMessage, ...props }: MyRangeCalendarProps<T>
) {
  return (
    <RangeCalendar {...props}>
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
      {errorMessage && <Text slot="errorMessage">{errorMessage}</Text>}
    </RangeCalendar>
  );
}

<MyRangeCalendar aria-label="Trip dates" />
```

```
import type {
  DateValue,
  RangeCalendarProps
} from 'react-aria-components';
import {Text} from 'react-aria-components';

interface MyRangeCalendarProps<T extends DateValue>
  extends RangeCalendarProps<T> {
  errorMessage?: string;
}

function MyRangeCalendar<T extends DateValue>(
  { errorMessage, ...props }: MyRangeCalendarProps<T>
) {
  return (
    <RangeCalendar {...props}>
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
      {errorMessage && (
        <Text slot="errorMessage">{errorMessage}</Text>
      )}
    </RangeCalendar>
  );
}

<MyRangeCalendar aria-label="Trip dates" />
```

```
import type {
  DateValue,
  RangeCalendarProps
} from 'react-aria-components';
import {Text} from 'react-aria-components';

interface MyRangeCalendarProps<
  T extends DateValue
> extends
  RangeCalendarProps<T> {
  errorMessage?: string;
}

function MyRangeCalendar<
  T extends DateValue
>(
  {
    errorMessage,
    ...props
  }: MyRangeCalendarProps<
    T
  >
) {
  return (
    <RangeCalendar
      {...props}
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
      {errorMessage && (
        <Text slot="errorMessage">
          {errorMessage}
        </Text>
      )}
    </RangeCalendar>
  );
}

<MyRangeCalendar aria-label="Trip dates" />
```

* * *

A `RangeCalendar` has no selection by default. An initial, uncontrolled value can be provided to the `RangeCalendar` using the `defaultValue` prop. Alternatively, a controlled value can be provided using the `value` prop.

Date ranges are objects with `start` and `end` properties containing date values, which are provided using objects in the [@internationalized/date](https://react-spectrum.adobe.com/internationalized/date/) package. This library handles correct international date manipulation across calendars, time zones, and other localization concerns.

`RangeCalendar` supports values with both date and time components, but only allows users to modify the dates. By default, `RangeCalendar` will emit `[CalendarDate](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@internationalized/date/src/CalendarDate.ts:CalendarDate)` objects in the `onChange` event, but if a `[CalendarDateTime](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@internationalized/date/src/CalendarDate.ts:CalendarDateTime)` or `[ZonedDateTime](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@internationalized/date/src/CalendarDate.ts:ZonedDateTime)` object is passed as the `value` or `defaultValue`, values of that type will be emitted, changing only the date and preserving the time components.

```
import {parseDate} from '@internationalized/date';

function Example() {
  let [value, setValue] = React.useState({
    start: parseDate('2020-02-03'),
    end: parseDate('2020-02-12')
  });

  return (
    <div style={{display: 'flex', gap: 20, flexWrap: 'wrap'}}>
      <MyRangeCalendar
        aria-label="Date range (uncontrolled)"
        defaultValue={{
          start: parseDate('2020-02-03'),
          end: parseDate('2020-02-12')
        }} />
      <MyRangeCalendar
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
      <MyRangeCalendar
        aria-label="Date range (uncontrolled)"
        defaultValue={{
          start: parseDate('2020-02-03'),
          end: parseDate('2020-02-12')
        }}
      />
      <MyRangeCalendar
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
      <MyRangeCalendar
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
      <MyRangeCalendar
        aria-label="Date range (controlled)"
        value={value}
        onChange={setValue}
      />
    </div>
  );
}
```

`RangeCalendar` supports selecting dates in many calendar systems used around the world, including Gregorian, Hebrew, Indian, Islamic, Buddhist, and more. Dates are automatically displayed in the appropriate calendar system for the user's locale. The calendar system can be overridden using the [Unicode calendar locale extension](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/calendar#adding_a_calendar_in_the_locale_string), passed to the [I18nProvider](https://react-spectrum.adobe.com/react-aria/I18nProvider.html) component.

Selected dates passed to `onChange` always use the same calendar system as the `value` or `defaultValue` prop. If no `value` or `defaultValue` is provided, then dates passed to `onChange` are always in the Gregorian calendar since this is the most commonly used. This means that even though the user selects dates in their local calendar system, applications are able to deal with dates from all users consistently.

The below example displays a `RangeCalendar` in the Hindi language, using the Indian calendar. Dates emitted from `onChange` are in the Gregorian calendar.

```
import {I18nProvider} from 'react-aria';
import type {DateRange} from 'react-aria-components';

function Example() {
  let [range, setRange] = React.useState<DateRange | null>(null);
  return (
    <I18nProvider locale="hi-IN-u-ca-indian">
      <MyRangeCalendar
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
import type {DateRange} from 'react-aria-components';

function Example() {
  let [range, setRange] = React.useState<DateRange | null>(
    null
  );
  return (
    <I18nProvider locale="hi-IN-u-ca-indian">
      <MyRangeCalendar
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
import type {DateRange} from 'react-aria-components';

function Example() {
  let [range, setRange] =
    React.useState<
      DateRange | null
    >(null);
  return (
    <I18nProvider locale="hi-IN-u-ca-indian">
      <MyRangeCalendar
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
    <MyRangeCalendar
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
    <MyRangeCalendar
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
    <MyRangeCalendar
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

* * *

`RangeCalendar` accepts an `onChange` prop which is triggered whenever a date is selected by the user. The example below uses `onChange` to update a separate element with a formatted version of the date in the user's locale. This is done by converting the date to a native JavaScript `Date` object to pass to the formatter.

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
      <MyRangeCalendar
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
      <MyRangeCalendar
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
      <MyRangeCalendar
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

* * *

Multiple `CalendarGrid` elements can be rendered to show multiple months at once. The `visibleDuration` prop should be provided to the `RangeCalendar` component to specify how many months are visible, and each `CalendarGrid` accepts an `offset` prop to specify its starting date relative to the first visible date.

```
<RangeCalendar aria-label="Trip dates" visibleDuration={{months: 3}}>
  <header>
    <Button slot="previous"><ChevronLeft size={20} /></Button>
    <Heading />
    <Button slot="next"><ChevronRight size={20} /></Button>
  </header>
  <div style={{display: 'flex', gap: 30, overflow: 'auto'}}>
    <CalendarGrid>
      {date => <CalendarCell date={date} />}
    </CalendarGrid>
    <CalendarGrid offset={{months: 1}}>
      {date => <CalendarCell date={date} />}
    </CalendarGrid>
    <CalendarGrid offset={{months: 2}}>
      {date => <CalendarCell date={date} />}
    </CalendarGrid>
  </div>
</RangeCalendar>
```

```
<RangeCalendar
  aria-label="Trip dates"
  visibleDuration={{ months: 3 }}
>
  <header>
    <Button slot="previous">
      <ChevronLeft size={20} />
    </Button>
    <Heading />
    <Button slot="next">
      <ChevronRight size={20} />
    </Button>
  </header>
  <div
    style={{ display: 'flex', gap: 30, overflow: 'auto' }}
  >
    <CalendarGrid>
      {(date) => <CalendarCell date={date} />}
    </CalendarGrid>
    <CalendarGrid offset={{ months: 1 }}>
      {(date) => <CalendarCell date={date} />}
    </CalendarGrid>
    <CalendarGrid offset={{ months: 2 }}>
      {(date) => <CalendarCell date={date} />}
    </CalendarGrid>
  </div>
</RangeCalendar>
```

```
<RangeCalendar
  aria-label="Trip dates"
  visibleDuration={{
    months: 3
  }}
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
  <div
    style={{
      display: 'flex',
      gap: 30,
      overflow: 'auto'
    }}
  >
    <CalendarGrid>
      {(date) => (
        <CalendarCell
          date={date}
        />
      )}
    </CalendarGrid>
    <CalendarGrid
      offset={{
        months: 1
      }}
    >
      {(date) => (
        <CalendarCell
          date={date}
        />
      )}
    </CalendarGrid>
    <CalendarGrid
      offset={{
        months: 2
      }}
    >
      {(date) => (
        <CalendarCell
          date={date}
        />
      )}
    </CalendarGrid>
  </div>
</RangeCalendar>
```

The `pageBehavior` prop allows you to control how the calendar navigates between months. By default, the calendar will navigate by `visibleDuration`, but by setting `pageBehavior` to `single`, pagination will be by one month.

```
<RangeCalendar
  aria-label="Trip dates"
  visibleDuration={{ months: 3 }}
  pageBehavior="single"
>
  <header>
    <Button slot="previous">
      <ChevronLeft size={20} />
    </Button>
    <Heading />
    <Button slot="next">
      <ChevronRight size={20} />
    </Button>
  </header>
  <div style={{ display: 'flex', gap: 30, overflow: 'auto' }}>
    <CalendarGrid>
      {(date) => <CalendarCell date={date} />}
    </CalendarGrid>
    <CalendarGrid offset={{ months: 1 }}>
      {(date) => <CalendarCell date={date} />}
    </CalendarGrid>
    <CalendarGrid offset={{ months: 2 }}>
      {(date) => <CalendarCell date={date} />}
    </CalendarGrid>
  </div>
</RangeCalendar>
```

```
<RangeCalendar
  aria-label="Trip dates"
  visibleDuration={{ months: 3 }}
  pageBehavior="single"
>
  <header>
    <Button slot="previous">
      <ChevronLeft size={20} />
    </Button>
    <Heading />
    <Button slot="next">
      <ChevronRight size={20} />
    </Button>
  </header>
  <div
    style={{ display: 'flex', gap: 30, overflow: 'auto' }}
  >
    <CalendarGrid>
      {(date) => <CalendarCell date={date} />}
    </CalendarGrid>
    <CalendarGrid offset={{ months: 1 }}>
      {(date) => <CalendarCell date={date} />}
    </CalendarGrid>
    <CalendarGrid offset={{ months: 2 }}>
      {(date) => <CalendarCell date={date} />}
    </CalendarGrid>
  </div>
</RangeCalendar>
```

```
<RangeCalendar
  aria-label="Trip dates"
  visibleDuration={{
    months: 3
  }}
  pageBehavior="single"
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
  <div
    style={{
      display: 'flex',
      gap: 30,
      overflow: 'auto'
    }}
  >
    <CalendarGrid>
      {(date) => (
        <CalendarCell
          date={date}
        />
      )}
    </CalendarGrid>
    <CalendarGrid
      offset={{
        months: 1
      }}
    >
      {(date) => (
        <CalendarCell
          date={date}
        />
      )}
    </CalendarGrid>
    <CalendarGrid
      offset={{
        months: 2
      }}
    >
      {(date) => (
        <CalendarCell
          date={date}
        />
      )}
    </CalendarGrid>
  </div>
</RangeCalendar>
```

* * *

By default, `RangeCalendar` allows selecting any date range. The `minValue` and `maxValue` props can also be used to prevent the user from selecting dates outside a certain range.

This example only accepts dates after today.

```
import {today} from '@internationalized/date';

<MyRangeCalendar
  aria-label="Trip dates"
  minValue={today(getLocalTimeZone())}
/>
```

```
import {today} from '@internationalized/date';

<MyRangeCalendar
  aria-label="Trip dates"
  minValue={today(getLocalTimeZone())}
/>
```

```
import {today} from '@internationalized/date';

<MyRangeCalendar
  aria-label="Trip dates"
  minValue={today(
    getLocalTimeZone()
  )}
/>
```

Show CSS

```
.react-aria-RangeCalendar {
  .react-aria-CalendarCell {
    &[data-disabled] {
      color: var(--text-color-disabled);
    }
  }
}
```

```
.react-aria-RangeCalendar {
  .react-aria-CalendarCell {
    &[data-disabled] {
      color: var(--text-color-disabled);
    }
  }
}
```

```
.react-aria-RangeCalendar {
  .react-aria-CalendarCell {
    &[data-disabled] {
      color: var(--text-color-disabled);
    }
  }
}
```

`RangeCalendar` supports marking certain dates as _unavailable_. These dates remain focusable with the keyboard so that navigation is consistent, but cannot be selected by the user. In this example, they are displayed in red. The `isDateUnavailable` prop accepts a callback that is called to evaluate whether each visible date is unavailable.

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

  let isDateUnavailable = (date: DateValue) =>
    disabledRanges.some((interval) =>
      date.compare(interval[0]) >= 0 && date.compare(interval[1]) <= 0
    );

  return (
    <MyRangeCalendar
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

  let isDateUnavailable = (date: DateValue) =>
    disabledRanges.some((interval) =>
      date.compare(interval[0]) >= 0 &&
      date.compare(interval[1]) <= 0
    );

  return (
    <MyRangeCalendar
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
    (date: DateValue) =>
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
    <MyRangeCalendar
      aria-label="Trip dates"
      minValue={today(
        getLocalTimeZone()
      )}
      isDateUnavailable={isDateUnavailable}
    />
  );
}
```

Show CSS

```
.react-aria-RangeCalendar {
  .react-aria-CalendarCell {

    &[data-unavailable] {
      text-decoration: line-through;
      color: var(--invalid-color);
    }

    &[data-invalid] {
      background: var(--invalid-color);
      color: var(--highlight-foreground);
    }
  }
}
```

```
.react-aria-RangeCalendar {
  .react-aria-CalendarCell {

    &[data-unavailable] {
      text-decoration: line-through;
      color: var(--invalid-color);
    }

    &[data-invalid] {
      background: var(--invalid-color);
      color: var(--highlight-foreground);
    }
  }
}
```

```
.react-aria-RangeCalendar {
  .react-aria-CalendarCell {

    &[data-unavailable] {
      text-decoration: line-through;
      color: var(--invalid-color);
    }

    &[data-invalid] {
      background: var(--invalid-color);
      color: var(--highlight-foreground);
    }
  }
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
    <MyRangeCalendar
      aria-label="Time off request"
      isDateUnavailable={(date) => isWeekend(date, locale)}
      allowsNonContiguousRanges
    />
  );
}
```

```
import {useLocale} from 'react-aria';
import {isWeekend} from '@internationalized/date';

function Example() {
  let { locale } = useLocale();

  return (
    <MyRangeCalendar
      aria-label="Time off request"
      isDateUnavailable={(date) => isWeekend(date, locale)}
      allowsNonContiguousRanges
    />
  );
}
```

```
import {useLocale} from 'react-aria';
import {isWeekend} from '@internationalized/date';

function Example() {
  let { locale } =
    useLocale();

  return (
    <MyRangeCalendar
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

`RangeCalendar` tries to avoid allowing the user to select invalid dates in the first place (see [Validation](#validation) and [Unavailable dates](#unavailable-dates) above). However, if according to application logic a selected date range is invalid, the `isInvalid` prop can be set. This alerts assistive technology users that the selection is invalid, and can be used for styling purposes as well. In addition, the `errorMessage` slot may be used to help the user fix the issue.

This example validates that the selected date range is a maximum of 1 week in duration.

```
import {today} from '@internationalized/date';

function Example() {
  let [range, setRange] = React.useState({
    start: today(getLocalTimeZone()),
    end: today(getLocalTimeZone()).add({ weeks: 1, days: 3 })
  });
  let isInvalid = range.end.compare(range.start) > 7;

  return (
    <MyRangeCalendar
      aria-label="Trip dates"
      value={range}
      onChange={setRange}
      isInvalid={isInvalid}
      errorMessage={isInvalid ? 'Maximum stay duration is 1 week' : undefined}    />
  );
}
```

```
import {today} from '@internationalized/date';

function Example() {
  let [range, setRange] = React.useState({
    start: today(getLocalTimeZone()),
    end: today(getLocalTimeZone()).add({
      weeks: 1,
      days: 3
    })
  });
  let isInvalid = range.end.compare(range.start) > 7;

  return (
    <MyRangeCalendar
      aria-label="Trip dates"
      value={range}
      onChange={setRange}
      isInvalid={isInvalid}
      errorMessage={isInvalid
        ? 'Maximum stay duration is 1 week'
        : undefined}    />
  );
}
```

```
import {today} from '@internationalized/date';

function Example() {
  let [range, setRange] =
    React.useState({
      start: today(
        getLocalTimeZone()
      ),
      end: today(
        getLocalTimeZone()
      ).add({
        weeks: 1,
        days: 3
      })
    });
  let isInvalid =
    range.end.compare(
      range.start
    ) > 7;

  return (
    <MyRangeCalendar
      aria-label="Trip dates"
      value={range}
      onChange={setRange}
      isInvalid={isInvalid}
      errorMessage={isInvalid
        ? 'Maximum stay duration is 1 week'
        : undefined}    />
  );
}
```

Show CSS

```
.react-aria-RangeCalendar {
  [slot=errorMessage] {
    font-size: 12px;
    color: var(--invalid-color);
  }
}
```

```
.react-aria-RangeCalendar {
  [slot=errorMessage] {
    font-size: 12px;
    color: var(--invalid-color);
  }
}
```

```
.react-aria-RangeCalendar {
  [slot=errorMessage] {
    font-size: 12px;
    color: var(--invalid-color);
  }
}
```

* * *

By default, the first selected date is focused when a `RangeCalendar` first mounts. If no `value` or `defaultValue` prop is provided, then the current date is focused. However, `RangeCalendar` supports controlling which date is focused using the `focusedValue` and `onFocusChange` props. This also determines which month is visible. The `defaultFocusedValue` prop allows setting the initial focused date when the `RangeCalendar` first mounts, without controlling it.

This example focuses July 1, 2021 by default. The user may change the focused date, and the `onFocusChange` event updates the state. Clicking the button resets the focused date back to the initial value.

```
import {CalendarDate} from '@internationalized/date';

function Example() {
  let defaultDate = new CalendarDate(2021, 7, 1);
  let [focusedDate, setFocusedDate] = React.useState(defaultDate);

  return (
    <>
      <button
        style={{ marginBottom: 20 }}
        onClick={() => setFocusedDate(defaultDate)}
      >
        Reset focused date
      </button>
      <MyRangeCalendar
        focusedValue={focusedDate}
        onFocusChange={setFocusedDate}
      />
    </>
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
    <>
      <button
        style={{ marginBottom: 20 }}
        onClick={() => setFocusedDate(defaultDate)}
      >
        Reset focused date
      </button>
      <MyRangeCalendar
        focusedValue={focusedDate}
        onFocusChange={setFocusedDate}
      />
    </>
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
    <>
      <button
        style={{
          marginBottom:
            20
        }}
        onClick={() =>
          setFocusedDate(
            defaultDate
          )}
      >
        Reset focused
        date
      </button>
      <MyRangeCalendar
        focusedValue={focusedDate}
        onFocusChange={setFocusedDate}
      />
    </>
  );
}
```

* * *

The `isDisabled` boolean prop makes the RangeCalendar disabled. Cells cannot be focused or selected.

```
<MyRangeCalendar aria-label="Trip dates" isDisabled />
```

```
<MyRangeCalendar aria-label="Trip dates" isDisabled />
```

```
<MyRangeCalendar
  aria-label="Trip dates"
  isDisabled
/>
```

The `isReadOnly` boolean prop makes the RangeCalendar's value immutable. Unlike `isDisabled`, the RangeCalendar remains focusable.

```
<MyRangeCalendar
  aria-label="Trip dates"
  value={{
    start: today(getLocalTimeZone()),
    end: today(getLocalTimeZone()).add({ weeks: 1 })
  }}
  isReadOnly
/>
```

```
<MyRangeCalendar
  aria-label="Trip dates"
  value={{
    start: today(getLocalTimeZone()),
    end: today(getLocalTimeZone()).add({ weeks: 1 })
  }}
  isReadOnly
/>
```

```
<MyRangeCalendar
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

* * *

By default, the first day of the week is automatically set based on the current locale. This can be changed by setting the `firstDayOfWeek` prop to `'sun'`, `'mon'`, `'tue'`, `'wed'`, `'thu'`, `'fri'`, or `'sat'`.

```
<MyRangeCalendar aria-label="Trip dates" firstDayOfWeek="mon" />
```

```
<MyRangeCalendar
  aria-label="Trip dates"
  firstDayOfWeek="mon"
/>
```

```
<MyRangeCalendar
  aria-label="Trip dates"
  firstDayOfWeek="mon"
/>
```

* * *

An aria-label must be provided to the `RangeCalendar` for accessibility. If it is labeled by a separate element, an `aria-labelledby` prop must be provided using the `id` of the labeling element instead.

In order to internationalize a `RangeCalendar`, a localized string should be passed to the `aria-label` prop. For languages that are read right-to-left (e.g. Hebrew and Arabic), keyboard navigation is automatically flipped. Ensure that your CSS accounts for this as well. Dates are automatically formatted using the current locale.

* * *

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

`allowsNonContiguousRanges`

`[boolean](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean)`

—

When combined with `isDateUnavailable`, determines whether non-contiguous ranges, i.e. ranges containing unavailable dates, may be selected.

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

`[RangeValue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/inputs.d.ts:RangeValue)<[DateValue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/calendar/src/index.d.ts:DateValue)> | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)`

—

The current value (controlled).

`defaultValue`

`[RangeValue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/inputs.d.ts:RangeValue)<[DateValue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/calendar/src/index.d.ts:DateValue)> | [null](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null)`

—

The default value (uncontrolled).

`children`

`[ChildrenOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ChildrenOrFunction)<[RangeCalendarRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Calendar.tsx:RangeCalendarRenderProps)>`

—

The children of the component. A function may be provided to alter the children based on component state.

`className`

`[ClassNameOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:ClassNameOrFunction)<[RangeCalendarRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Calendar.tsx:RangeCalendarRenderProps)>`

—

The CSS [className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) for the element. A function may be provided to compute the class based on component state.

`style`

`[StyleOrFunction](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:StyleOrFunction)<[RangeCalendarRenderProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Calendar.tsx:RangeCalendarRenderProps)>`

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

`( (value: [RangeValue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/shared/src/inputs.d.ts:RangeValue)<[MappedDateValue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/calendar/src/index.d.ts:MappedDateValue)<[DateValue](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-types/calendar/src/index.d.ts:DateValue)>> )) => void`

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

A `<Heading>` accepts all HTML attributes.

A `<Button>` accepts its contents as `children`. Other props such as `onPress` and `isDisabled` will be set by the `RangeCalendar`.

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

A `<CalendarGrid>` renders an individual month within a `<RangeCalendar>`. It accepts a function as its `children`, which is called to render a `<CalendarCell>` for each date. This renders a default `<CalendarGridHeader>`, which displays the weekday names in the column headers. This can be customized by providing a `<CalendarGridHeader>` and `<CalendarGridBody>` as children instead of a function.

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
.react-aria-RangeCalendar {
  /* ... */
}
```

```
.react-aria-RangeCalendar {
  /* ... */
}
```

```
.react-aria-RangeCalendar {
  /* ... */
}
```

A custom `className` can also be specified on any component. This overrides the default `className` provided by React Aria with your own.

```
<CalendarGrid className="my-calendar-grid">
  {/* ... */}
</CalendarGrid>
```

```
<CalendarGrid className="my-calendar-grid">
  {/* ... */}
</CalendarGrid>
```

```
<CalendarGrid className="my-calendar-grid">
  {/* ... */}
</CalendarGrid>
```

In addition, some components support multiple UI states (e.g. focused, placeholder, readonly, etc.). React Aria components expose states using data attributes, which you can target in CSS selectors. For example:

```
.react-aria-CalendarCell[data-selected] {
  /* ... */
}

.react-aria-CalendarCell[data-invalid] {
  /* ... */
}
```

```
.react-aria-CalendarCell[data-selected] {
  /* ... */
}

.react-aria-CalendarCell[data-invalid] {
  /* ... */
}
```

```
.react-aria-CalendarCell[data-selected] {
  /* ... */
}

.react-aria-CalendarCell[data-invalid] {
  /* ... */
}
```

The `className` and `style` props also accept functions which receive states for styling. This lets you dynamically determine the classes or styles to apply, which is useful when using utility CSS libraries like [Tailwind](https://tailwindcss.com/).

```
<CalendarCell
  className={({ isSelected }) => isSelected ? 'bg-blue-600' : 'bg-gray-600'}
/>
```

```
<CalendarCell
  className={({ isSelected }) =>
    isSelected ? 'bg-blue-600' : 'bg-gray-600'}
/>
```

```
<CalendarCell
  className={(
    { isSelected }
  ) =>
    isSelected
      ? 'bg-blue-600'
      : 'bg-gray-600'}
/>
```

Render props may also be used as children to alter what elements are rendered based on the current state. For example, you could add an additional element when a date is unavailable.

```
<CalendarCell>
  {({formattedDate, isUnavailable}) => (
    <>
      {isUnavailable && <UnavailableIcon />}
      <span>{formattedDate}</span>
    </>
  )}
</CalendarCell>
```

```
<CalendarCell>
  {({formattedDate, isUnavailable}) => (
    <>
      {isUnavailable && <UnavailableIcon />}
      <span>{formattedDate}</span>
    </>
  )}
</CalendarCell>
```

```
<CalendarCell>
  {(
    {
      formattedDate,
      isUnavailable
    }
  ) => (
    <>
      {isUnavailable &&
        (
          <UnavailableIcon />
        )}
      <span>
        {formattedDate}
      </span>
    </>
  )}
</CalendarCell>
```

The states, selectors, and render props for each component used in a `RangeCalendar` are documented below.

A `RangeCalendar` can be targeted with the `.react-aria-RangeCalendar` CSS selector, or by overriding with a custom `className`. It supports the following states and render props:

Name

CSS Selector

Description

`state`

`—`

State of the range calendar.

`isDisabled`

`[data-disabled]`

Whether the calendar is disabled.

`isInvalid`

`[data-invalid]`

Whether the calendar is invalid.

A [Button](https://react-spectrum.adobe.com/react-aria/Button.html) can be targeted with the `.react-aria-Button` CSS selector, or by overriding with a custom `className`. The next and previous buttons can be targeted specifically with the `[slot=previous]` and `[slot=next]` selectors. Buttons support the following states:

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

A `CalendarGrid` can be targeted with the `.react-aria-CalendarGrid` CSS selector, or by overriding with a custom `className`. When a function is provided as children, a default `<CalendarGridHeader>` and `<CalendarGridBody>` are rendered. If you need to customize the styling of the header cells, you can render them yourself.

```
import {CalendarGridBody, CalendarGridHeader, CalendarHeaderCell} from 'react-aria-components';

<RangeCalendar aria-label="Trip dates">
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
    <CalendarGridHeader>
      {(day) => (
        <CalendarHeaderCell style={{ color: 'var(--blue)' }}>
          {day}
        </CalendarHeaderCell>
      )}
    </CalendarGridHeader>
    <CalendarGridBody>
      {(date) => <CalendarCell date={date} />}
    </CalendarGridBody>
  </CalendarGrid>
</RangeCalendar>
```

```
import {
  CalendarGridBody,
  CalendarGridHeader,
  CalendarHeaderCell
} from 'react-aria-components';

<RangeCalendar aria-label="Trip dates">
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
    <CalendarGridHeader>
      {(day) => (
        <CalendarHeaderCell
          style={{ color: 'var(--blue)' }}
        >
          {day}
        </CalendarHeaderCell>
      )}
    </CalendarGridHeader>
    <CalendarGridBody>
      {(date) => <CalendarCell date={date} />}
    </CalendarGridBody>
  </CalendarGrid>
</RangeCalendar>
```

```
import {
  CalendarGridBody,
  CalendarGridHeader,
  CalendarHeaderCell
} from 'react-aria-components';

<RangeCalendar aria-label="Trip dates">
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
    <CalendarGridHeader>
      {(day) => (
        <CalendarHeaderCell
          style={{
            color:
              'var(--blue)'
          }}
        >
          {day}
        </CalendarHeaderCell>
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
</RangeCalendar>
```

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

The error message element within a `RangeCalendar` can be targeted with the `[slot=errorMessage]` CSS selector, or by adding a custom `className`.

* * *

If you need to customize one of the components within a `RangeCalendar`, such as `CalendarGrid` or `CalendarCell`, in many cases you can create a wrapper component. This lets you customize the props passed to the component.

```
function MyCalendarCell(props) {
  return <CalendarCell {...props} className="my-item" />
}
```

```
function MyCalendarCell(props) {
  return <CalendarCell {...props} className="my-item" />
}
```

```
function MyCalendarCell(
  props
) {
  return (
    <CalendarCell
      {...props}
      className="my-item"
    />
  );
}
```

All React Aria Components export a corresponding context that can be used to send props to them from a parent element. This enables you to build your own compositional APIs similar to those found in React Aria Components itself. You can send any prop or ref via context that you could pass to the corresponding component. The local props and ref on the component are merged with the ones passed via context, with the local props taking precedence (following the rules documented in [mergeProps](https://react-spectrum.adobe.com/react-aria/mergeProps.html)).

Component

Context

Props

Ref

`RangeCalendar`

`RangeCalendarContext`

`[RangeCalendarProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Calendar.tsx:RangeCalendarProps)`

`[HTMLDivElement](https://developer.mozilla.org/docs/Web/API/HTMLDivElement)`

This example uses `RangeCalendarContext` to create a composite component containing a calendar and buttons representing preset dates. The `[useSlottedContext](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:useSlottedContext)` hook can be used to consume contexts that support the `slot` prop.

```
import {RangeCalendarContext, useSlottedContext} from 'react-aria-components';

function CalendarPicker({ children }) {
  let [value, onChange] = React.useState(null);
  let [focusedValue, onFocusChange] = React.useState(null);

  return (
    <RangeCalendarContext.Provider
      value={{ value, onChange, focusedValue, onFocusChange }}
    >      <div className="calendar-picker">
        {children}
      </div>
    </RangeCalendarContext.Provider>
  );
}

interface PresetProps {
  value: { start: CalendarDate; end: CalendarDate };
  children: React.ReactNode;
}

function Preset({ value, children }: PresetProps) {
  let context = useSlottedContext(RangeCalendarContext)!;  let onPress = () => {
    context.onFocusChange(value.start);
    context.onChange(value);
  };

  return <Button onPress={onPress}>{children}</Button>;
}
```

```
import {
  RangeCalendarContext,
  useSlottedContext
} from 'react-aria-components';

function CalendarPicker({ children }) {
  let [value, onChange] = React.useState(null);
  let [focusedValue, onFocusChange] = React.useState(null);

  return (
    <RangeCalendarContext.Provider
      value={{
        value,
        onChange,
        focusedValue,
        onFocusChange
      }}
    >      <div className="calendar-picker">
        {children}
      </div>
    </RangeCalendarContext.Provider>
  );
}

interface PresetProps {
  value: { start: CalendarDate; end: CalendarDate };
  children: React.ReactNode;
}

function Preset({ value, children }: PresetProps) {
  let context = useSlottedContext(RangeCalendarContext)!;  let onPress = () => {
    context.onFocusChange(value.start);
    context.onChange(value);
  };

  return <Button onPress={onPress}>{children}</Button>;
}
```

```
import {
  RangeCalendarContext,
  useSlottedContext
} from 'react-aria-components';

function CalendarPicker(
  { children }
) {
  let [value, onChange] =
    React.useState(null);
  let [
    focusedValue,
    onFocusChange
  ] = React.useState(
    null
  );

  return (
    <RangeCalendarContext.Provider
      value={{
        value,
        onChange,
        focusedValue,
        onFocusChange
      }}
    >      <div className="calendar-picker">
        {children}
      </div>
    </RangeCalendarContext.Provider>
  );
}

interface PresetProps {
  value: {
    start: CalendarDate;
    end: CalendarDate;
  };
  children:
    React.ReactNode;
}

function Preset(
  { value, children }:
    PresetProps
) {
  let context =
    useSlottedContext(
      RangeCalendarContext
    )!;  let onPress = () => {
    context
      .onFocusChange(
        value.start
      );
    context.onChange(
      value
    );
  };

  return (
    <Button
      onPress={onPress}
    >
      {children}
    </Button>
  );
}
```

Now you can combine a `RangeCalendar` and one or more `Preset` components in a `CalendarPicker`.

```
import {endOfMonth, endOfWeek, startOfMonth, startOfWeek} from '@internationalized/date';
import {useLocale} from 'react-aria';

function Example() {
  let { locale } = useLocale();
  let now = today(getLocalTimeZone());
  let nextMonth = now.add({ months: 1 });

  return (
    <CalendarPicker>
      <Preset value={{ start: startOfMonth(now), end: endOfMonth(now) }}>
        This month
      </Preset>
      <Preset
        value={{ start: startOfWeek(now, locale), end: endOfWeek(now, locale) }}
      >
        This week
      </Preset>
      <Preset
        value={{ start: startOfMonth(nextMonth), end: endOfMonth(nextMonth) }}
      >
        Next month
      </Preset>
      <MyRangeCalendar aria-label="Date filter" />
    </CalendarPicker>
  );
}
```

```
import {
  endOfMonth,
  endOfWeek,
  startOfMonth,
  startOfWeek
} from '@internationalized/date';
import {useLocale} from 'react-aria';

function Example() {
  let { locale } = useLocale();
  let now = today(getLocalTimeZone());
  let nextMonth = now.add({ months: 1 });

  return (
    <CalendarPicker>
      <Preset
        value={{
          start: startOfMonth(now),
          end: endOfMonth(now)
        }}
      >
        This month
      </Preset>
      <Preset
        value={{
          start: startOfWeek(now, locale),
          end: endOfWeek(now, locale)
        }}
      >
        This week
      </Preset>
      <Preset
        value={{
          start: startOfMonth(nextMonth),
          end: endOfMonth(nextMonth)
        }}
      >
        Next month
      </Preset>
      <MyRangeCalendar aria-label="Date filter" />
    </CalendarPicker>
  );
}
```

```
import {
  endOfMonth,
  endOfWeek,
  startOfMonth,
  startOfWeek
} from '@internationalized/date';
import {useLocale} from 'react-aria';

function Example() {
  let { locale } =
    useLocale();
  let now = today(
    getLocalTimeZone()
  );
  let nextMonth = now
    .add({ months: 1 });

  return (
    <CalendarPicker>
      <Preset
        value={{
          start:
            startOfMonth(
              now
            ),
          end:
            endOfMonth(
              now
            )
        }}
      >
        This month
      </Preset>
      <Preset
        value={{
          start:
            startOfWeek(
              now,
              locale
            ),
          end: endOfWeek(
            now,
            locale
          )
        }}
      >
        This week
      </Preset>
      <Preset
        value={{
          start:
            startOfMonth(
              nextMonth
            ),
          end:
            endOfMonth(
              nextMonth
            )
        }}
      >
        Next month
      </Preset>
      <MyRangeCalendar aria-label="Date filter" />
    </CalendarPicker>
  );
}
```

Show CSS

```
.calendar-picker {
  > .react-aria-Button {
    margin: 0 4px 8px 4px;
  }
}
```

```
.calendar-picker {
  > .react-aria-Button {
    margin: 0 4px 8px 4px;
  }
}
```

```
.calendar-picker {
  > .react-aria-Button {
    margin: 0 4px 8px 4px;
  }
}
```

RangeCalendar passes props to its child components, such as the heading and buttons, via their associated contexts. These contexts are exported so you can also consume them in your own custom components. This enables you to reuse existing components from your app or component library together with React Aria Components.

Component

Context

Props

Ref

`Heading`

`HeadingContext`

`[HeadingProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Heading.tsx:HeadingProps)`

`[HTMLHeadingElement](https://developer.mozilla.org/docs/Web/API/HTMLHeadingElement)`

`Button`

`ButtonContext`

`[ButtonProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Button.tsx:ButtonProps)`

`[HTMLButtonElement](https://developer.mozilla.org/docs/Web/API/HTMLButtonElement)`

`Text`

`TextContext`

`[TextProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/Text.tsx:TextProps)`

`[HTMLElement](https://developer.mozilla.org/docs/Web/HTML/Element)`

This example consumes from `HeadingContext` in an existing styled heading component to make it compatible with React Aria Components. The `[useContextProps](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/react-aria-components/src/utils.tsx:useContextProps)` hook merges the local props and ref with the ones provided via context by RangeCalendar.

```
import type {HeadingProps} from 'react-aria-components';
import {HeadingContext, useContextProps} from 'react-aria-components';

const MyCustomHeading = React.forwardRef(
  (props: HeadingProps, ref: React.ForwardedRef<HTMLHeadingElement>) => {
    // Merge the local props and ref with the ones provided via context.
    [props, ref] = useContextProps(props, ref, HeadingContext);
    // ... your existing Heading component
    return <h2 {...props} ref={ref} />;
  }
);
```

```
import type {HeadingProps} from 'react-aria-components';
import {
  HeadingContext,
  useContextProps
} from 'react-aria-components';

const MyCustomHeading = React.forwardRef(
  (
    props: HeadingProps,
    ref: React.ForwardedRef<HTMLHeadingElement>
  ) => {
    // Merge the local props and ref with the ones provided via context.
    [props, ref] = useContextProps(
      props,
      ref,
      HeadingContext
    );
    // ... your existing Heading component
    return <h2 {...props} ref={ref} />;
  }
);
```

```
import type {HeadingProps} from 'react-aria-components';
import {
  HeadingContext,
  useContextProps
} from 'react-aria-components';

const MyCustomHeading =
  React.forwardRef(
    (
      props:
        HeadingProps,
      ref:
        React.ForwardedRef<
          HTMLHeadingElement
        >
    ) => {
      // Merge the local props and ref with the ones provided via context.
      [props, ref] =
        useContextProps(
          props,
          ref,
          HeadingContext
        );
      // ... your existing Heading component
      return (
        <h2
          {...props}
          ref={ref}
        />
      );
    }
  );
```

Now you can use `MyCustomHeading` within a `RangeCalendar`, in place of the builtin React Aria Components `Heading`.

```
<RangeCalendar>
  <MyCustomHeading />  {/* ... */}
</RangeCalendar>
```

```
<RangeCalendar>
  <MyCustomHeading />  {/* ... */}
</RangeCalendar>
```

```
<RangeCalendar>
  <MyCustomHeading />  {/* ... */}
</RangeCalendar>
```

RangeCalendar provides a `[RangeCalendarState](#/tmp/2611825fd45e232864e65051a682ad38/node_modules/@react-stately/calendar/src/types.ts:RangeCalendarState)` object to its children via `RangeCalendarStateContext`. This can be used to access and manipulate the calendar's state.

This example shows a `RangeCalendarValue` component that can be placed within a `RangeCalendar` to display the currently selected date as a formatted string.

```
import {RangeCalendarStateContext} from 'react-aria-components';
import {useDateFormatter} from 'react-aria';

function RangeCalendarValue() {
  let state = React.useContext(RangeCalendarStateContext)!;  let start = state.value?.start.toDate(getLocalTimeZone());
  let end = state.value?.end.toDate(getLocalTimeZone());
  let formatted = start && end
    ? useDateFormatter().formatRange(start, end)
    : 'None';
  return <small>Selected date range: {formatted}</small>;
}

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
  <RangeCalendarValue /></RangeCalendar>
```

```
import {RangeCalendarStateContext} from 'react-aria-components';
import {useDateFormatter} from 'react-aria';

function RangeCalendarValue() {
  let state = React.useContext(RangeCalendarStateContext)!;  let start = state.value?.start.toDate(getLocalTimeZone());
  let end = state.value?.end.toDate(getLocalTimeZone());
  let formatted = start && end
    ? useDateFormatter().formatRange(start, end)
    : 'None';
  return <small>Selected date range: {formatted}</small>;
}

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
  <RangeCalendarValue /></RangeCalendar>
```

```
import {RangeCalendarStateContext} from 'react-aria-components';
import {useDateFormatter} from 'react-aria';

function RangeCalendarValue() {
  let state = React
    .useContext(
      RangeCalendarStateContext
    )!;  let start = state.value
    ?.start.toDate(
      getLocalTimeZone()
    );
  let end = state.value
    ?.end.toDate(
      getLocalTimeZone()
    );
  let formatted =
    start && end
      ? useDateFormatter()
        .formatRange(
          start,
          end
        )
      : 'None';
  return (
    <small>
      Selected date
      range: {formatted}
    </small>
  );
}

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
  <RangeCalendarValue /></RangeCalendar>
```

If you need to customize things even further, such as accessing internal state or customizing DOM structure, you can drop down to the lower level Hook-based API. See [useRangeCalendar](https://react-spectrum.adobe.com/react-aria/useRangeCalendar.html) for more details.