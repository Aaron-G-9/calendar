import React, { PropTypes } from 'react'
import ContentCreator from "./ContentCreator.js"
const prettyHours = ["7am", "8am", "9am", "10am", "11am", "12am", "1pm",
    "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm"];

export default class DayAndWeek extends React.Component{
  render() {
    return (
        <DayContent courseObject={this.props.courseObject} />
    );
  }
}

class DayContent extends React.Component{
  render() {
    var content = new ContentCreator(this.props.courseObject, 1);
    var contentboxes = [];
    for (var i = 0; i < (prettyHours.length * 2); i++){
      contentboxes.push(<HourContent startTime={(content.getStartTimeInfo("hours") - 7) * 2} shortName={content.getShortName()} desiredHeight={content.getDesiredHeight()  + "rem"} hourBoxNumber={i} />);
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
    //console.log("start time: " + this.props.startTime);
    var stylyy={
      height: this.props.desiredHeight,
    }
    if (this.props.hourBoxNumber == this.props.startTime){
      return(
        <div className="filledHourBoxContent">
          <button className="weekEventButton" style={stylyy}>{this.props.shortName}</button>
        </div>
      )
    }
    return (
      <div className="hourBoxContent">

      </div>
    );
  }
}
