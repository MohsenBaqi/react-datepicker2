import React, { Component } from 'react';
import PropTypes from 'prop-types';
import momentJalaali from 'moment-jalaali';
import onClickOutside from 'react-onclickoutside';
import DaysViewHeading from './DaysViewHeading';
import DaysOfWeek from './DaysOfWeek';
import MonthSelector from './MonthSelector';
import YearSelector from './YearSelector';
import Day from './Day';
import { getDaysOfMonth, checkToday } from '../utils/moment-helper';
import { defaultStyles } from './DefaultStyles';
import RangeList from '../utils/RangesList';
export class Calendar extends Component {
  static propTypes = {
    min: PropTypes.object,
    max: PropTypes.object,
    styles: PropTypes.object,
    selectedDay: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    defaultYear: PropTypes.object,
    defaultMonth: PropTypes.object,
    onSelect: PropTypes.func,
    onYearChange: PropTypes.func,
    onMonthChange: PropTypes.func,
    onClickOutside: PropTypes.func,
    containerProps: PropTypes.object,
    isGregorian: PropTypes.bool,
    calendarClass: PropTypes.string,
    showToggleButton: PropTypes.bool,
    toggleButtonText: PropTypes.any,
    showTodayButton: PropTypes.bool,
    disableYearSelector: PropTypes.bool,
    isRangeSelector: PropTypes.bool,
    schedule: PropTypes.array,
  };

  static childContextTypes = {
    nextMonth: PropTypes.func.isRequired,
    prevMonth: PropTypes.func.isRequired,
    setCalendarMode: PropTypes.func.isRequired,
    setYear: PropTypes.func.isRequired,
    setMonth: PropTypes.func.isRequired,
    setType: PropTypes.func.isRequired,
  };

  static defaultProps = {
    styles: defaultStyles,
    containerProps: {},
    isGregorian: true,
    showToggleButton: false,
    showTodayButton: true,
    toggleButtonText: ['تاریخ شمسی', 'تاریخ میلادی'],
  };

  state = {
    year: this.props.defaultYear || this.props.selectedDay || momentJalaali(this.props.min),
    month: this.props.defaultMonth || this.props.selectedDay || momentJalaali(this.props.min),
    selectedDay:
      this.props.selectedDay ||
      (!this.props.isRangeSelector && this.props.value) ||
      momentJalaali(),
    startDay: this.props.value && this.props.value.startDay,
    endDay: this.props.value && this.props.value.endDay,
    mode: 'days',
    rangeStart: true,
    isGregorian: this.props.isGregorian,
    ranges: new RangeList(this.props.ranges),
    schedule: this.props.schedule,
  };

  getChildContext() {
    return {
      nextMonth: this.nextMonth.bind(this),
      prevMonth: this.prevMonth.bind(this),
      setCalendarMode: this.setMode.bind(this),
      setYear: this.setYear.bind(this),
      setMonth: this.setMonth.bind(this),
      setType: this.setMonth.bind(this),
    };
  }

  UNSAFE_componentWillReceiveProps({
    selectedDay,
    defaultYear,
    defaultMonth,
    min,
    isGregorian,
    ranges,
    schedule,
  }) {
    if (typeof isGregorian !== 'undefined' && isGregorian !== this.state.isGregorian) {
      this.setState({ isGregorian });
    }

    if (this.props.selectedDay !== selectedDay) {
      this.selectDay(selectedDay || momentJalaali());
    } else if (
      defaultYear &&
      this.props.defaultYear !== defaultYear &&
      this.state.year === this.props.defaultYear
    ) {
      this.setYear(defaultYear);
    } else if (
      defaultMonth &&
      this.props.defaultMonth !== defaultMonth &&
      this.state.month === this.props.defaultMonth
    ) {
      this.setMonth(defaultMonth);
    } else if (min && this.props.min !== min && this.state.month.isSame(this.props.min)) {
      this.setMonth(min.clone());
    }

    if (JSON.stringify(this.props.ranges) !== JSON.stringify(ranges)) {
      this.setState({ ranges: new RangeList(ranges) });
    }
    if (this.props.schedule !== schedule) {
      this.setState({ schedule: schedule });
    }
  }

  setMode = (mode) => {
    this.setState({ mode });
  };

  setYear = (year) => {
    const { onYearChange } = this.props;
    this.setState({ year });
    if (onYearChange) {
      onYearChange(year);
    }
  };

  setMonth = (month) => {
    const { onMonthChange } = this.props;
    this.setState({ month });
    if (onMonthChange) {
      onMonthChange(month);
    }
  };

  setType = (type) => {
    this.setState({ type });
  };

  nextMonth = () => {
    const { isGregorian } = this.state;
    const monthFormat = isGregorian ? 'Month' : 'jMonth';

    this.setState(
      {
        month: this.state.month.clone().add(1, monthFormat),
      },
      () => this.props.onMonthChange && this.props.onMonthChange(this.state.month)
    );
  };

  prevMonth = () => {
    const { isGregorian } = this.state;
    const monthFormat = isGregorian ? 'Month' : 'jMonth';

    this.setState(
      {
        month: this.state.month.clone().subtract(1, monthFormat),
      },
      () => this.props.onMonthChange && this.props.onMonthChange(this.state.month)
    );
  };

  selectDay = (selectedDay, isRangeSelector) => {
    const { month, isGregorian, rangeStart, startDay, endDay } = this.state;
    const yearMonthFormat = isGregorian ? 'YYYYMM' : 'jYYYYjMM';

    if (!selectedDay) {
      this.setState({
        year: this.props.defaultYear || this.props.selectedDay || momentJalaali(this.props.min),
        month: this.props.defaultMonth || this.props.selectedDay || momentJalaali(this.props.min),
        selectedDay: null,
      });
      return;
    }

    // Because there's no `m1.isSame(m2, 'jMonth')`
    if (selectedDay.format(yearMonthFormat) !== month.format(yearMonthFormat)) {
      this.setState({ month: selectedDay });
    }
    if (isRangeSelector) {
      if (this.state.rangeStart) {
        this.setState({
          selectedDay,
          rangeStart: !this.state.rangeStart,
          startDay: selectedDay,
          endDay: undefined,
        });
      } else {
        this.setState({ rangeStart: !this.state.rangeStart, endDay: selectedDay });
      }
    } else {
      this.setState({ selectedDay });
    }
  };

  handleClickOnDay = (selectedDay) => {
    const { onSelect, onChange, isRangeSelector } = this.props;
    const { startDay, rangeStart } = this.state;
    this.selectDay(selectedDay, isRangeSelector);

    if (isRangeSelector) {
      if (onSelect && startDay && !rangeStart) {
        onSelect({ startDay, endDay: selectedDay });
      }
      if (onChange && startDay && !rangeStart) onChange({ startDay, endDay: selectedDay });
    } else {
      if (onSelect) {
        onSelect(selectedDay);
      }
      if (onChange) onChange(selectedDay);
    }
  };

  handleClickOutside = (event) => {
    if (this.props.onClickOutside) {
      this.props.onClickOutside(event);
    }
  };

  days = null;

  lastRenderedMonth = null;

  renderMonthSelector = () => {
    const { month, isGregorian } = this.state;
    const { styles, disableYearSelector } = this.props;
    return (
      <MonthSelector
        disableYearSelector={disableYearSelector}
        styles={styles}
        isGregorian={isGregorian}
        selectedMonth={month}
      />
    );
  };

  renderYearSelector = () => {
    const { year, month, isGregorian } = this.state;
    const { styles } = this.props;
    return (
      <YearSelector
        styles={styles}
        isGregorian={isGregorian}
        selectedYear={year}
        selectedMonth={month}
      />
    );
  };

  groupSchedule = (schedule) => {
    return schedule?.length
      ? schedule.reduce(function (r, a) {
          r[momentJalaali(a.time).format('YYYYMMDD')] =
            r[momentJalaali(a.time).format('YYYYMMDD')] || [];
          r[momentJalaali(a.time).format('YYYYMMDD')].push(a.note);
          return r;
        }, Object.create(null))
      : null;
  };

  renderDays = () => {
    const { month, selectedDay, isGregorian, startDay, endDay } = this.state;
    const { children, min, max, styles, outsideClickIgnoreClass, schedule } = this.props;

    let days;

    if (this.lastRenderedMonth === month) {
      days = this.days;
    } else {
      days = getDaysOfMonth(month, isGregorian);
      this.days = days;
      this.lastRenderedMonth = month;
    }

    const monthFormat = isGregorian ? 'MM' : 'jMM';
    const dateFormat = isGregorian ? 'YYYYMMDD' : 'jYYYYjMMjDD';

    return (
      <div className={this.props.calendarClass}>
        {children}
        <DaysViewHeading
          timePicker={this.props.timePicker}
          isGregorian={isGregorian}
          styles={styles}
          month={month}
        />
        <DaysOfWeek styles={styles} isGregorian={isGregorian} />
        <div className={styles.dayPickerContainer}>
          {days.map((day) => {
            const isCurrentMonth = day.format(monthFormat) === month.format(monthFormat);
            const selected = selectedDay ? selectedDay.isSame(day, 'day') : false;
            const key = day.format(dateFormat);
            const isToday = checkToday(day.format('YYYYMMDD'));
            const isRangeStart = startDay && startDay.isSame(day, 'day');
            const isRangeEnd = endDay && endDay.isSame(day, 'day');

            const highlighted =
              startDay && endDay && (day.isBetween(startDay, endDay) || isRangeStart || isRangeEnd);

            // disabling by old min-max props
            const disabled =
              (min ? day.isBefore(min) : false) ||
              (max ? day.isAfter(max) : false) ||
              (startDay && !endDay && day.isSameOrBefore(startDay));

            // new method for disabling and highlighting the ranges of days
            const dayState = this.state.ranges.getDayState(day);
            const groupedSchedule = this.groupSchedule(this.state.schedule);

            return (
              <Day
                isGregorian={isGregorian}
                key={key}
                onClick={this.handleClickOnDay}
                day={day}
                isToday={isToday}
                isRangeEnd={isRangeEnd}
                isRangeStart={isRangeStart}
                colors={dayState.colors}
                disabled={disabled || dayState.disabled} // disabled by old method or new range method
                selected={selected}
                isCurrentMonth={isCurrentMonth}
                styles={styles}
                highlighted={highlighted}
                notes={groupedSchedule && groupedSchedule[day.format('YYYYMMDD')]}
              />
            );
          })}
        </div>
      </div>
    );
  };
  changeCalendarMode() {
    this.props.toggleMode();
  }
  render() {
    const {
      selectedDay,
      min,
      max,
      onClickOutside,
      outsideClickIgnoreClass,
      styles,
      className,
      showTodayButton,
      schedule,
    } = this.props;
    const { mode, isGregorian } = this.state;

    const jalaaliClassName = isGregorian ? '' : 'jalaali ';

    const today = momentJalaali();
    today.set({ hour: 0, minute: 0, second: 0, millisecond: 0 });

    // check today state -----------

    // disabling by old min-max props
    const disabled = (min ? today.isBefore(min) : false) || (max ? today.isAfter(max) : false);
    // new method for disabling and highlighting the ranges of days
    const dayState = this.state.ranges.getDayState(today);

    const isTodayDisabled = disabled || dayState.disabled;

    // ------------------------------

    return (
      <div
        className={`${styles.calendarContainer} ${jalaaliClassName}${className}${
          schedule?.length ? ' schedule' : ''
        }`}
      >
        {this.props.showToggleButton && (
          <button
            className="calendarButton toggleButton"
            type="button"
            onClick={this.changeCalendarMode.bind(this)}
          >
            {isGregorian ? this.props.toggleButtonText[0] : this.props.toggleButtonText[1]}
          </button>
        )}
        {mode === 'days' && this.renderDays()}
        {mode === 'monthSelector' && this.renderMonthSelector()}
        {mode === 'yearSelector' && this.renderYearSelector()}
        {showTodayButton && (
          <button
            type="button"
            className="calendarButton selectToday"
            onClick={() => this.handleClickOnDay(today)}
            disabled={isTodayDisabled}
          >
            {isGregorian ? 'today' : 'امروز'}
          </button>
        )}
      </div>
    );
  }
}

export default onClickOutside(Calendar);
