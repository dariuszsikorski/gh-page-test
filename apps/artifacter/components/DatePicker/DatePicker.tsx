import { useRef } from 'react'
import {
  useDatePicker,
  useDateSegment,
  useDateField,
  useButton,
  useCalendar,
  useCalendarCell,
  useCalendarGrid,
} from 'react-aria'
import {
  useDatePickerState,
  useDateFieldState,
  useCalendarState,
} from 'react-stately'
import type { DatePickerProps, DateValue } from 'react-aria'
import type { DateFieldState, DateSegment as IDateSegment } from 'react-stately'
import { createCalendar } from '@internationalized/date'
import styles from './DatePicker.module.scss'

function DateSegment({ segment, state }: { segment: IDateSegment; state: DateFieldState }) {
  const ref = useRef(null)
  const { segmentProps } = useDateSegment(segment, state, ref)

  return (
    <div
      {...segmentProps}
      ref={ref}
      className={`${styles.segment} ${segment.isPlaceholder ? styles.placeholder : ''}`}
    >
      {segment.text}
    </div>
  )
}

function DateField({ ...props }) {
  const ref = useRef(null)
  const { locale } = props
  const state = useDateFieldState({ ...props, locale })
  const { fieldProps } = useDateField(props, state, ref)

  return (
    <div {...fieldProps} ref={ref} className={styles.dateField}>
      {state.segments.map((segment, i) => (
        <DateSegment key={i} segment={segment} state={state} />
      ))}
    </div>
  )
}

function CalendarCell({ state, date }: any) {
  const ref = useRef(null)
  const {
    cellProps,
    buttonProps,
    isSelected,
    isOutsideVisibleRange,
    isDisabled,
    formattedDate,
  } = useCalendarCell({ date }, state, ref)

  return (
    <td {...cellProps} className={styles.calendarCell}>
      <div
        {...buttonProps}
        ref={ref}
        hidden={isOutsideVisibleRange}
        className={`${styles.calendarCellButton} ${isSelected ? styles.selected : ''} ${isDisabled ? styles.disabled : ''}`}
      >
        {formattedDate}
      </div>
    </td>
  )
}

function CalendarGrid({ state, ...props }: any) {
  const { gridProps, headerProps, weekDays } = useCalendarGrid(props, state)

  return (
    <table {...gridProps} className={styles.calendarGrid}>
      <thead {...headerProps}>
        <tr>
          {weekDays.map((day, index) => (
            <th key={index} className={styles.weekDay}>
              {day}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {[...new Array(state.getDatesInWeek(0).length / 7).keys()].map((weekIndex) => (
          <tr key={weekIndex}>
            {state.getDatesInWeek(weekIndex).map((date: any, i: number) =>
              date ? <CalendarCell key={i} state={state} date={date} /> : <td key={i} />
            )}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

function Calendar({ ...props }) {
  const state = useCalendarState({
    ...props,
    locale: 'en-US',
    createCalendar,
  })

  const ref = useRef(null)
  const { calendarProps, prevButtonProps, nextButtonProps, title } = useCalendar(props, state)

  return (
    <div {...calendarProps} ref={ref} className={styles.calendar}>
      <div className={styles.calendarHeader}>
        <button {...prevButtonProps} className={styles.calendarNavButton}>
          ◀
        </button>
        <h2 className={styles.calendarTitle}>{title}</h2>
        <button {...nextButtonProps} className={styles.calendarNavButton}>
          ▶
        </button>
      </div>
      <CalendarGrid state={state} />
    </div>
  )
}

export function DatePicker(props: DatePickerProps<DateValue>) {
  const state = useDatePickerState(props)
  const ref = useRef(null)
  const { groupProps, labelProps, fieldProps, buttonProps, dialogProps, calendarProps } =
    useDatePicker(props, state, ref)

  const buttonRef = useRef(null)
  const { buttonProps: triggerButtonProps } = useButton(buttonProps, buttonRef)

  return (
    <div className={styles.datePicker}>
      <span {...labelProps} className={styles.label}>
        {props.label}
      </span>
      <div {...groupProps} ref={ref} className={styles.datePickerGroup}>
        <DateField {...fieldProps} />
        <button {...triggerButtonProps} ref={buttonRef} className={styles.calendarButton}>
          📅
        </button>
      </div>
      {state.isOpen && (
        <div {...dialogProps} className={styles.calendarPopover}>
          <Calendar {...calendarProps} />
        </div>
      )}
    </div>
  )
}
