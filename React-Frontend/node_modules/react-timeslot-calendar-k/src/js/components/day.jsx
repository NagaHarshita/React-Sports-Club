import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import moment from 'moment';
import Timeslot from './timeslot.jsx';

import {
  DEFAULT_TIMESLOT_FORMAT,
  DEFAULT_TIMESLOT_SHOW_FORMAT,
} from '../constants/day.js';

import {
  DEFAULT,
  DISABLED,
  SELECTED,
} from '../constants/timeslot.js';

export default class Day extends React.Component {

  render() {
    const dayClassNames = classnames({
      'tsc-day': true,
    });

    return (
      <div className = { dayClassNames }>
        { this._renderTitle() }
        { this._renderTimeSlots() }
      </div>
    );
  }

  _renderTitle() {
    const {
      renderTitle,
      momentTime,
    } = this.props;

    return (
      <div className = "tsc-day__title">
        <span>{renderTitle(momentTime)}</span>
      </div>
    );
  }

  _renderTimeSlots() {
    const {
      renderSlotContent,
      timeslots,
      timeslotProps,
      selectedTimeslots,
      enabledTimeslots,
      momentTime,
      renderDisabled,
      disabledButRenderedTimeslots,
    } = this.props;


    return timeslots.map((slot, index) => {

      // let timeslotDates = {
      //   startDate: momentTime.clone().add(slot[0], timeslotProps.format),
      //   endDate: momentTime.clone().add(slot[slot.length - 1], timeslotProps.format),
      // };

      let timeslotDates = {
        startDate: moment(`${momentTime.clone().format('YYYY-MM-DD')}T${moment(slot[0], timeslotProps.format).format('HH:mm:ss')}`),
        endDate: moment(`${momentTime.clone().format('YYYY-MM-DD')}T${moment(slot[slot.length - 1], timeslotProps.format).format('HH:mm:ss')}`),
      };

      let status = DISABLED;

      const isSelected = selectedTimeslots.some((selectedTimeslot) => {
        return timeslotDates.startDate.format() === selectedTimeslot.startDate.format();
      });

      // const isDisabled = disabledTimeslots.some((disabledTimeslot) => {
      //   return disabledTimeslot.startDate.isBetween(timeslotDates.startDate, timeslotDates.endDate, null, '[)') ||
      //          disabledTimeslot.endDate.isBetween(timeslotDates.startDate, timeslotDates.endDate, null, '(]');
      // });
      const isDisabledButRendered = disabledButRenderedTimeslots.some((disabledButRenderedTimeslot) => {
        return timeslotDates.startDate.isSame(disabledButRenderedTimeslot.startDate);
      });

      const isEnabled = enabledTimeslots.some((enabledTimeslot) => {
        return enabledTimeslot.startDate.isSame(timeslotDates.startDate);
      });

      if (isEnabled) {
        status = DEFAULT;
      }

      if (isSelected && isEnabled) {
        status = SELECTED;
      }

      const timeslotDate = timeslotDates.startDate.format();
      const content = renderSlotContent({slot, index, timeslotProps, status, timeslotDate});

      return (
        <Timeslot
          key = { index }
          content = { content }
          renderSlotContent = { renderSlotContent }
          onClick = { this._onTimeslotClick.bind(this, index) }
          status = { status }
          renderDisabled = { renderDisabled }
          isDisabledButRendered = { isDisabledButRendered }
        />
      );
    });
  }

  _onTimeslotClick(index) {
    const {
      timeslots,
      timeslotProps,
      momentTime,
      onTimeslotClick,
      currentDate,
    } = this.props;

    // const timeslot = {
    //   startDate: momentTime.clone().add(timeslots[index][0], timeslotFormat),
    //   endDate: momentTime.clone().add(timeslots[index][1], timeslotFormat),
    // };
    const timeslot = {
      currentShowingDate: currentDate,
      startDate: moment(`${momentTime.clone().format('YYYY-MM-DD')}T${moment(timeslots[index][0], timeslotProps.format).format('HH:mm:ss')}`),
      endDate: moment(`${momentTime.clone().format('YYYY-MM-DD')}T${moment(timeslots[index][timeslots[index].length - 1], timeslotProps.format).format('HH:mm:ss')}`),
    };
    

    onTimeslotClick(timeslot);
  }
}

Day.defaultProps = {
  timeslotFormat: DEFAULT_TIMESLOT_FORMAT,
  timeslotShowFormat: DEFAULT_TIMESLOT_SHOW_FORMAT,
  renderSlotContent: ({slot, timeslotProps}) => {
    let content = '';
    for (let i = 0; i < slot.length; i ++){
      content += moment(slot[i], timeslotProps.format).format(timeslotProps.showFormat);
      if (i < (slot.length - 1)){
        content += ' - ';
      }
    }
    return content;
  },
  renderTitle: (momentTime) => {
    return momentTime.locale('ru').format('ddd (D)');
  },
};

/**
 * @type {Array} timeslots: Array of timeslots.
 * @type {Object} timeslotProps: An object with keys and values for timeslot props (format, viewFormat)
 * @type {Array} selectedTimeslots: Selected Timeslots Set used to add the SELECTED status if needed when renderizing timeslots.
 * @type {Array} disabledTimeslots: Disabled Timeslots Set used to add the DISABLED status if needed when renderizing timeslots.
 * @type {String} timeslotFormat: format used by moment when identifying the timeslot
 * @type {String} timslotShowFormat: format to show used by moment when formating timeslot hours for final view.
 * @type {Function} onTimeslotClick: Function to be excecuted when clicked.
 * @type {Function} renderTitle: Function to be used when rendering the title.
 * @type {Object} momentTime: MomentJS datetime object.
 * @type {Ojbect} initialDate: Moment JS Date used to initialize the Calendar and which progresses further into the tree.
 */
Day.propTypes = {
  currentDate: PropTypes.object,
  renderSlotContent: PropTypes.func,
  timeslots: PropTypes.array.isRequired,
  timeslotProps: PropTypes.object,
  selectedTimeslots: PropTypes.array,
  enabledTimeslots: PropTypes.array,
  timeslotFormat: PropTypes.string.isRequired,
  timeslotShowFormat: PropTypes.string.isRequired,
  onTimeslotClick: PropTypes.func.isRequired,
  renderTitle: PropTypes.func.isRequired,
  momentTime: PropTypes.object.isRequired,
  initialDate: PropTypes.object.isRequired,
  finalDate: PropTypes.object.isRequired,
  renderDisabled: PropTypes.bool,
  disabledButRenderedTimeslots: PropTypes.array,
};
