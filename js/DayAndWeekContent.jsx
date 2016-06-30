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
    var content = new ContentCreator(this.props.courseObject, 2);

    for (var i = 0; i < (prettyHours.length * 2); i++){
      contentboxes.push(<HourContent dayOfWeek={this.props.dayOfWeek} meetDays={content.getMeetDays()} startTime={content.getWeekViewPosition()} shortName={content.getShortName()}  desiredHeight={content.getDesiredHeight()  + "rem"} hourBoxNumber={i} />);
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
    console.log(this.props.dayOfWeek + " " + this.props.meetDays);
    if (this.props.hourBoxNumber == this.props.startTime && this.props.meetDays[this.props.dayOfWeek] == true ){
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
