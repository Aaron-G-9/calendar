import React from "react";
import WeekColumn from "./DayAndWeekContent.jsx"
import DayAndWeekHours from "./DayAndWeekHours.jsx"
import WeekHeader from "./WeekHeader.jsx";



export default class WeekView extends React.Component{
  render () {
    
    return (
      <div className="weekGrid">
          <WeekHeader />
        <div className="weekView">
          <DayAndWeekHours />
          <WeekContent getDateSelection={this.props.getDateSelection} courseObject={this.props.courseObject} />
        </div>
      </div>
    );
  }
}

class WeekContent extends React.Component{
  render(){
    var contentArray = [];
    for (var i = 0; i < 7; i++){
      contentArray.push(<WeekColumn getDateSelection={this.props.getDateSelection} dayOfWeek={i} courseObject={this.props.courseObject}/>);
    }
    return(
      <div className="weekContent">
        {contentArray}
      </div>
    );
  }
}
