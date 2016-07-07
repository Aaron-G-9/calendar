import React, { PropTypes } from 'react'

const prettyHours = ["7am", "8am", "9am", "10am", "11am", "12am", "1pm",
    "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm"];

export default class DayAndWeekHours extends React.Component{
  render () {
    return (
        <DayHours/>
    );
  }
}


class DayHours extends React.Component{
  render() {
    var timeboxes = [];
    for (var i = 0; i < prettyHours.length; i++){
      timeboxes.push(<HourGuideBox title={prettyHours[i]} />);
      timeboxes[i] = (<HourGuideBox Box title={prettyHours[i]} />);
    }
    return (
      <div className="dayview">
        {timeboxes}
      </div>
    );
  }
}


class HourGuideBox extends React.Component{
  render() {
    return (
      <div className="hourGuideBox">
        {this.props.title}
      </div>
    );
  }
}
