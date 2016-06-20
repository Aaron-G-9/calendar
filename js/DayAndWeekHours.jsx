import React, { PropTypes } from 'react'

const prettyHours = ["All Day", "7am", "8am", "9am", "10am", "11am", "12am", "1pm",
    "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm"];

export default class DayAndWeekHours extends React.Component{
  render () {
    return (
      <div>
        <DayHours/>
      </div>
    );
  }
}


class DayHours extends React.Component{
  render() {
    var timeboxes = [];
    for (var i = 0; i < prettyHours.length; i++){
      timeboxes.push(<HourBox title={prettyHours[i]} />);
      timeboxes[i] = (<HourBox title={prettyHours[i]} />);
    }
    return (
      <div className="dayview">
        {timeboxes}
      </div>
    );
  }
}


class HourBox extends React.Component{
  render() {
    return (
      <div className="hourBox">
        {this.props.title}
      </div>
    );
  }
}
