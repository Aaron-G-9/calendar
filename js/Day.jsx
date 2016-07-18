import React from "react";

import DayAndWeekContent from "./DayAndWeekContent.jsx";
import DayAndWeekHours from "./DayAndWeekHours.jsx";

//This component, 'DayGrid' includes both the hours on the left, and then actual
//column/row view where the events will go. The side hour guide is used for both
//week and day views (hence the name, DayAndWeekHours)
export default class DayGrid extends React.Component{
  render() {
    return (
      <div className="daygrid">
        <DayAndWeekHours />
        <DayAndWeekContent getDateSelection={this.props.getDateSelection} courseObject={this.props.courseObject} />
      </div>
    );
  }
}
