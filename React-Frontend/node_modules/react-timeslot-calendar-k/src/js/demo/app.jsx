import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import 'moment/locale/ru';

import '../../styles/demo/main.scss';

import ReactTimeslotCalendar from './../react-timeslot-calendar.jsx';
import MarkdownSnippet from './../util/markdown-snippet.jsx';
/** Code snippets **/
import customTimeslotSnippet from './snippets/custom-timeslot.md';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.initialDate = moment([2017, 3, 24]);
    this.finalDate = moment([2017, 3, 28]);

  }
  render() {
    return (
      <div className = "app">
        <h1> React Timeslot Calendar </h1>
        { this._customTimeslotSnippetRender() }
      </div>
    );
  }

  renderSlotContent({slot, timeslotProps}) {
    let content = '';
    for (let i = 0; i < slot.length; i ++){
      content += moment(slot[i], timeslotProps.format).format(timeslotProps.showFormat);
      if (i < (slot.length - 1)){
        content += ' - ';
      }
    }
    return (
      <div>
        <div>
          {content}
        </div>
      </div>
    );
  }

  _customTimeslotSnippetRender() {
    return (
      <div>
        <h3> Using Custom Timeslots and Callback </h3>
        <MarkdownSnippet snippet = { customTimeslotSnippet }/>
        <ReactTimeslotCalendar
          initialDate = { this.initialDate.format() }
          finalDate = { this.finalDate.format() }
          timeslots = { [
            ['09:00'],
            ['10:30'],
            ['18:23'],
          ] }
          timeslotProps = { {
            format: 'HH:mm',
            showFormat: 'HH:mm',
          } }
          selectedTimeslots = { [ { 
            startDate: moment('2017-05-01T06:00:00.000Z'), 
            endDate: moment('2018-05-01T07:20:00.000Z'),
          } ] }
          renderDisabled = { false }
          enabledTimeslots = { [
            {
              startDate: '2017-04-30T09:00:00',
              format: 'YYYY-MM-DDTHH:mm:ss',
            },
            {
              startDate: '2017-05-01T10:30:00',
              format: 'YYYY-MM-DDTHH:mm:ss',
            },
            {
              startDate: '2017-05-05T10:30:00',
              format: 'YYYY-MM-DDTHH:mm:ss',
            },
          ] }
          disabledButRenderedTimeslots = { [
            {
              startDate: '2017-04-30T10:30:00',
              format: 'YYYY-MM-DDTHH:mm:ss',
            },
          ] }
          renderSlotContent = { this.renderSlotContent }
          maxTimeslots = { 1 }
          onSelectTimeslot = { (timeslots, lastSelected) => {
            console.log('All Timeslots:');
            console.log(timeslots);

            console.log('Last selected timeslot:');
            console.log(lastSelected);
          } }
        />
      </div>
    );
  }


}

ReactDOM.render(<App />, document.getElementById('react-timeslot-calendar'));
