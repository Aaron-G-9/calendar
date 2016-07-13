import React from "react";
import DayAndWeekContent from "./DayAndWeekContent.jsx"
import DayAndWeekHours from "./DayAndWeekHours.jsx"

var d = new Date();


export default class DayGrid extends React.Component{
  render() {
    //console.log(this.props.getDateSelection());
    return (
      <div className="daygrid">
        <DayAndWeekHours />
        <DayAndWeekContent getDateSelection={this.props.getDateSelection} courseObject={this.props.courseObject} />
      </div>
    );
  }
}
