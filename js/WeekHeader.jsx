import React from "react";

var sundayWeek = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
var d = new Date();
var today = d.getDate();

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
