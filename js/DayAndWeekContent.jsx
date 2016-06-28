import React, { PropTypes } from 'react'

const prettyHours = ["7am", "8am", "9am", "10am", "11am", "12am", "1pm",
    "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm"];

export default class DayAndWeek extends React.Component{
  render() {
    return (
        <DayContent />
    );
  }
}

class DayContent extends React.Component{
  render() {
    var contentboxes = [];
    for (var i = 0; i < (prettyHours.length * 2); i++){
      contentboxes.push(<HourContent />);
    }
    return (
      <div className="weekCol">
        {contentboxes}
      </div>
    );
  }
}



class HourContent extends React.Component{
  render() {
    return (
      <div className="hourBoxContent">

      </div>
    );
  }
}
