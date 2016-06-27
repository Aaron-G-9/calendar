import React from "react";

var sundayWeek = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];

export default class MonthDaysHeader extends React.Component{
  render() {
    var daysHeader = [];
    for (var i = 0; i < sundayWeek.length; i++){
      daysHeader.push(<div>{sundayWeek[i]}</div>);
    }
    return(
      <div className="weekHeader">
        {daysHeader}
      </div>
    );
  }
}
