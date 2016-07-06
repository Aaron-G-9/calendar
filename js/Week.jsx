import React from "react";
import DayAndWeekContent from "./DayAndWeekContent.jsx"
import DayAndWeekHours from "./DayAndWeekHours.jsx"
import WeekHeader from "./WeekHeader.jsx";



export default class WeekView extends React.Component{
  render () {
    return (
      <div className="weekGrid">
          <WeekHeader />
        <div className="weekView">
          <DayAndWeekHours />
          <WeekContent courseObject={this.props.courseObject} />
        </div>
      </div>
    );
  }
}

class WeekContent extends React.Component{
  render(){
    var contentArray = [];
    for (var i = 0; i < 7; i++){
      contentArray.push(<DayAndWeekContent dayOfMonth={23} dayOfWeek={i} courseObject={this.props.courseObject}/>);
    }
    return(
      <div className="weekContent">
        {contentArray}
      </div>
    );
  }
}
