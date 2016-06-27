import React from "react";
import DayAndWeekContent from "./DayAndWeekContent.jsx"
import DayAndWeekHours from "./DayAndWeekHours.jsx"
import WeekHeader from "./WeekHeader.jsx";


export default class WeekView extends React.Component{
  render () {
    return (
      <div className="weekGrid">
          <WeekHeader />
        <div>
          <DayAndWeekHours />
          <WeekContent />
        </div>
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

class WeekFloater extends React.Component{
  render() {
    return (
      <div>
        <MonthDaysHeader/>
      </div>
    );
  }
}
