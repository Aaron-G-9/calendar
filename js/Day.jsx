import React from "react";

export default class DayHours extends React.Component{
  render() {
    var timeboxes = [];
    for (var i = 0; i < prettyHours.length; i++){
      timeboxes.push(<HourBox title={prettyHours[i]} />);
    }
    return (
      <tbody>
        {timeboxes}
      </tbody>
    );
  }
}

class DayContent extends React.Component{
  render() {
    var contentboxes = [];
    for (var i = 0; i < prettyHours.length; i++){
      contentboxes.push(<HourContent />);
    }
    return (
      <tbody>
        {contentboxes}
      </tbody>
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

class HourContent extends React.Component{
  render() {
    return (
      <div className="hourBoxContent">

      </div>
    );
  }
}
