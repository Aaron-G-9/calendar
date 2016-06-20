import React from "react";
import DayAndWeekContent from "./DayAndWeekContent.jsx"
import DayAndWeekHours from "./DayAndWeekHours.jsx"

var d = new Date();


export default class DayGrid extends React.Component{
  render() {
    return (
      <div className="daygrid">
        <DayAndWeekHours />
        <DayAndWeekContent />
      </div>
    );
  }
}
