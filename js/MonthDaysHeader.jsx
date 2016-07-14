import React from "react";
import DateHelper from './DateHelper.js';

export default class MonthDaysHeader extends React.Component{
  render() {
    var daysHeader = [];
    for (var i = 0; i < DateHelper.getSundayWeek().length; i++){
      daysHeader.push(<div>{DateHelper.getSundayWeek()[i]}</div>);
    }
    return(
      <div className="monthDaysHeader">
        {daysHeader}
      </div>
    );
  }
}
