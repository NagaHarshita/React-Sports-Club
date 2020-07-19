import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import CalendarJS from 'calendarjs-ru';
import Month from './month.jsx';

export default class Calendar extends React.Component {
  constructor(props) {

    super(props);

    this._updateInputProps(this.props.startDateInputProps, this.props.endDateInputProps);
    this._updateTimeslotProps(this.props.timeslotProps);
    this._updateRenderDays(this.props.renderDays);

    this.state = {
      currentDate: moment(props.currentDate || props.initialDate),
      selectedTimeslots: props.selectedTimeslots || [],
    };

    this._updateCurrentDate = this._updateCurrentDate.bind(this);
    this._updateSelectedTimeslotsAndCurrentDate = this._updateSelectedTimeslotsAndCurrentDate.bind(this);
  }

  render() {
    return (
      <div className = "tsc-calendar">
        { this._renderActions() }
        { this._renderMonth() }
        { this._renderInputs() }
      </div>
    );
  }

  _renderActions() {
    const {
      currentDate,
    } = this.state;

    const actionTitle = `${currentDate.format('MMMM - YYYY')}`;

    return (
      <div className = "tsc-calendar__actions">
        <div className = "tsc-calendar__action tsc-calendar__action-element tsc-calendar__action-element--left" onClick = { this._onGoToPrevMonth.bind(this) }>
          &#8249;
        </div>
        <div className = "tsc-calendar__action tsc-calendar__action-title">
          { actionTitle }
        </div>
        <div className = "tsc-calendar__action tsc-calendar__action-element tsc-calendar__action-element--right" onClick = { this._onGoToNextMonth.bind(this) }>
          &#8250;
        </div>
      </div>
    );
  }

  _renderMonth() {
    const {
      currentDate,
      selectedTimeslots,
    } = this.state;

    const {
      timeslots,
      initialDate,
      finalDate,
      renderDisabled,
      disabledButRenderedTimeslots,
      renderSlotContent,
    } = this.props;

    const cal = new CalendarJS(currentDate.year(), currentDate.month() + 1);
    const weeks = cal.generate();

    return (
      <Month
        currentDate = { currentDate }
        initialDate = { moment(initialDate) }
        finalDate = { moment(finalDate) }
        weeks = { weeks }
        onChangeCurrentDate = { this._onChangeCurrentDate.bind(this) }
        onTimeslotClick = { this._onTimeslotClick.bind(this) }
        timeslots = { timeslots }
        timeslotProps = { this.timeslotProps }
        selectedTimeslots = { selectedTimeslots }
        enabledTimeslots = { this._formatEnabledTimeslots() }
        renderDays = { this.renderDays }
        renderDisabled = { renderDisabled }
        disabledButRenderedTimeslots = { disabledButRenderedTimeslots }
        renderSlotContent = { renderSlotContent }
      />
    );
  }

  _renderInputs() {
    const {
      selectedTimeslots,
    } = this.state;

    const {
      startDate,
      endDate,
    } = this.inputProps;

    //Determines if multiple input or single one.
    const inputPrefix = selectedTimeslots.length > 1 ? '[]' : '';

    return selectedTimeslots.map((timeslot, index) => {
      return (
        <div key = { index } >
          <input
            name = { startDate.name + inputPrefix }
            className = { startDate.class }
            type = { startDate.type }
            value = { timeslot.startDate.format() }
          />
          <input
            name = { endDate.name + inputPrefix }
            className = { endDate.class }
            type = { endDate.type }
            value = { timeslot.endDate.format() }
          />
        </div>
      );
    });
  }

  _onChangeCurrentDate(updateDate) {
    this._updateCurrentDate(updateDate);

    return;
  }

  _updateCurrentDate(currentDate) {
    const {onChangeCurrentDate} = this.props;
    if (this.props.currentDate) {
      onChangeCurrentDate && onChangeCurrentDate(currentDate);
    } else {
      this.setState({currentDate}, () => {
        onChangeCurrentDate && onChangeCurrentDate(currentDate);
      });
    }
  }

  _updateSelectedTimeslotsAndCurrentDate(selectedTimeslots, timeslot) {
    const {onSelectTimeslot} = this.props;
    if (this.props.selectedTimeslots) {
      onSelectTimeslot && onSelectTimeslot(selectedTimeslots, timeslot);
    } else {
      this.setState({
        currentDate: moment(timeslot.startDate),
        selectedTimeslots,
      }, () => {
        // State was set:
        onSelectTimeslot && onSelectTimeslot(selectedTimeslots, timeslot);
      });
    }
  }

  _onGoToNextMonth() {
    const {
      currentDate,
    } = this.state;

    let nextDate = currentDate.clone()
      .startOf('month')
      .add(1, 'months')
      .startOf('month');

    this._updateCurrentDate(nextDate);
  }

  _onGoToPrevMonth() {
    const {
      currentDate,
    } = this.state;

    let nextDate = currentDate.clone()
      .startOf('month')
      .subtract(1, 'months')
      .startOf('month');

    this._updateCurrentDate(nextDate);
  }

  _formatEnabledTimeslots() {
    const {
      enabledTimeslots,
    } = this.props;

    return enabledTimeslots.map((timeslot) => {
      let timeslotMoment = Object.assign({}, timeslot);
      timeslotMoment.startDate = moment(timeslotMoment.startDate, timeslotMoment.format);
      timeslotMoment.endDate = moment(timeslotMoment.endDate, timeslotMoment.format);

      return timeslotMoment;
    });
  }

  _onTimeslotClick(newTimeslot) {
    const {
      selectedTimeslots,
    } = this.state;

    const {
      maxTimeslots,
    } = this.props;

    const newSelectedTimeslots = selectedTimeslots.slice();

    let existentTimeslotIndex = -1;
    const timeslotExists = newSelectedTimeslots.some((timeslot, index) => {
      existentTimeslotIndex = index;
      return newTimeslot.startDate.format() === timeslot.startDate.format();
    });

    if (timeslotExists) {
      newSelectedTimeslots.splice(existentTimeslotIndex, 1);
    }
    else {
      newSelectedTimeslots.push(newTimeslot);
    }

    if (newSelectedTimeslots.length > maxTimeslots) {
      newSelectedTimeslots.splice(0, 1);
    }

    this._updateSelectedTimeslotsAndCurrentDate(newSelectedTimeslots, newTimeslot);
  }

  _updateInputProps(startDateInputProps, endDateInputProps) {
    const defaultStartDateProps = {
      name: 'tsc-startDate',
      classes: 'tsc-hidden-input',
      type: 'hidden',
    };

    const defaultEndDateProps = {
      name: 'tsc-endDate',
      classes: 'tsc-hidden-input',
      type: 'hidden',
    };

    this.inputProps = {
      startDate: Object.assign({}, defaultStartDateProps, startDateInputProps),
      endDate: Object.assign({}, defaultEndDateProps, endDateInputProps),
    };
  }

  _updateTimeslotProps(timeslotProps) {
    const defaultProps = {
      format: 'h',
      showFormat: 'h:mm A',
    };

    this.timeslotProps = Object.assign({}, defaultProps, timeslotProps);
  }

  _updateRenderDays(renderDays) {
    const defaultRenderDays = {
      sunday: true,
      monday: true,
      tuesday: true,
      wednesday: true,
      thursday: true,
      friday: true,
      saturday: true,
    };

    this.renderDays = Object.assign({}, defaultRenderDays, renderDays);
  }
  
// eslint-disable-next-line
  UNSAFE_componentWillReceiveProps(nextProps) {
    this._updateInputProps(nextProps.startDateInputProps, nextProps.endDateInputProps);
    this._updateTimeslotProps(nextProps.timeslotProps);
    this._updateRenderDays(nextProps.renderDays);
    if ( moment(this.props.currentDate).format() !== moment(nextProps.currentDate).format()
      || this.props.selectedTimeslots !== nextProps.selectedTimeslots
    ) {
      this.setState({
        currentDate: moment(nextProps.currentDate),
        selectedTimeslots: nextProps.selectedTimeslots || [],
      });
    }
  }

}

Calendar.defaultProps = {
  enabledTimeslots: [],
  maxTimeslots: 1,
  inputProps: {
    names: {},
  },
  startDateInputProps: {},
  endDateInputProps: {},
};

/**
 * @type {String} initialDate:  The initial date in which to place the calendar. Must be MomentJS parseable.
 * @type {Array} timeslots:  An array of timeslots to be displayed in each day.
 * @type {Object} timeslotProps: An object with keys and values for timeslot props (format, viewFormat)
 * @type {Array} selectedTimeslots: Initial value for selected timeslot inputs. Expects Dates formatted as Strings.
 * @type {Array} disabledTimeslots: Initial value for selected timeslot inputs. Expects Dates formatted as Strings.
 * @type {Integer} maxTimexlots: maximum ammount of timeslots to select.
 * @type {Object} renderDays: An array of days which states which days of the week to render. By default renders all days.
 * @type {Object} startDateInputProps: properties for the startDate Inputs. Includes name, class, type (hidden, text...)
 * @type {Object} endDateInputProps: properties for the endDate Inputs. Includes name, class, type (hidden, text...)
 */
Calendar.propTypes = {
  currentDate: PropTypes.string,
  initialDate: PropTypes.string.isRequired,
  finalDate: PropTypes.string.isRequired,
  timeslots: PropTypes.array.isRequired,
  timeslotProps: PropTypes.object,
  selectedTimeslots: PropTypes.array,
  enabledTimeslots: PropTypes.array,
  maxTimeslots: PropTypes.number,
  renderDays: PropTypes.object,
  startDateInputProps: PropTypes.object,
  endDateInputProps: PropTypes.object,
  onSelectTimeslot: PropTypes.func,
  renderDisabled: PropTypes.bool,
  onChangeCurrentDate: PropTypes.func,
  disabledButRenderedTimeslots: PropTypes.array,
  renderSlotContent: PropTypes.func,
};
