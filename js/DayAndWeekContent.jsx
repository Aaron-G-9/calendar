import React, { PropTypes } from 'react'
import ContentCreator from "./ContentCreator.js"
const prettyHours = ["7am", "8am", "9am", "10am", "11am", "12am", "1pm",
    "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm"];

export default class DayAndWeek extends React.Component{
  render() {
    return (
        <DayContent dayOfWeek={this.props.dayOfWeek} courseObject={this.props.courseObject} />
    );
  }
}

class DayContent extends React.Component{
  render() {
    var contentboxes = [];
    for (var i = 0; i < (prettyHours.length * 2); i++){
      contentboxes.push(<HourContent dayOfWeek={this.props.dayOfWeek} courseObject={this.props.courseObject} hourBoxNumber={i} />);
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
    var testingArr = [];

    for (var i = 0; i < this.props.courseObject.myCourses.length; i++){
      var content = new ContentCreator(this.props.courseObject, i);

      var stylyy={
        height: content.getDesiredHeight()  + "rem",
      }

      if (this.props.hourBoxNumber == content.getWeekViewPosition() && content.getMeetDays()[this.props.dayOfWeek] == true ){
        return(
          <div className="filledHourBoxContent">
            <button className="weekEventButton" style={stylyy}>{content.getShortName()}</button>
          </div>
        );
      }
    }
    return (
      <div className="hourBoxContent">

      </div>
    );
  }
}
