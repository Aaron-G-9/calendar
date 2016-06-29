import React, { PropTypes } from 'react'
import ContentCreator from "./ContentCreator.js"
const prettyHours = ["7am", "8am", "9am", "10am", "11am", "12am", "1pm",
    "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm"];

export default class DayAndWeek extends React.Component{
  render() {
    return (
        <DayContent coursesObject={this.props.coursesObject} />
    );
  }
}

class DayContent extends React.Component{
  render() {
    var content = new ContentCreator(this.props.courseObject, 0);
    var contentboxes = [];
    for (var i = 0; i < (prettyHours.length * 2); i++){
      contentboxes.push(<HourContent desiredHeight={content.getDesiredHeight()  + "rem"} hourBoxNumber={i} />);
    }
    return (
      <div className="weekCol">
        {contentboxes}
      </div>
    );
  }
}

function getDesiredHeight(){
  return 3.45;
}


class HourContent extends React.Component{
  render() {
    console.log(this.props.hourBoxContent);
    var stylyy={
      height: this.props.desiredHeight,
    }
    if (this.props.hourBoxNumber == 10){
      return(
        <div className="filledHourBoxContent">
          <button className="weekEventButton" style={stylyy}>CSE 230</button>
        </div>
      )
    }
    return (
      <div className="hourBoxContent">

      </div>
    );
  }
}
