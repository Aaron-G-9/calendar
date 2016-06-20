import React from "react";
import DayAndWeekContent from "./DayAndWeekContent.jsx"
import DayAndWeekHours from "./DayAndWeekHours.jsx"

export default class WeekView extends React.Component{
  render () {
    return (
      <div className="daygrid">
        <DayAndWeekHours />
        <WeekContent />
      </div>
    );
  }
}

class WeekContent extends React.Component{
  render(){
    var contentArray = [];
    for (var i = 0; i < 7; i++){
      contentArray.push(<DayAndWeekContent />);
    }
    return(
      <div className="weekContent">
        {contentArray}
      </div>
    );
  }
}
