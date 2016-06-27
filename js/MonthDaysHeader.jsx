import React from "react";

var sundayWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export default class MonthDaysHeader extends React.Component{
  render() {
    var daysHeader = [];
    for (var i = 0; i < sundayWeek.length; i++){
      daysHeader.push(<div>{sundayWeek[i]}</div>);
    }
    return(
      <div className="monthDaysHeader">
        {daysHeader}
      </div>
    );
  }
}
