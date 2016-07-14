import React from "react";
import MonthBoxContent from  "./MonthBoxContent.jsx";
import MonthDaysHeader from "./MonthDaysHeader.jsx";
import DateHelper from './DateHelper.js';
var d = new Date();



export default class MonthGrid extends React.Component{
  render() {
    var monthRowArray = [];
    var days = new Date(this.props.getDateSelection().selectedYear, this.props.getDateSelection().selectedMonth, 1);


    for (var i  = 0; i < (DateHelper.getWeeksOfMonth(days) % 7); i++){
      monthRowArray.push(<MonthRow key={i} monthRowNumber={i} getDateSelection={this.props.getDateSelection} courseObject={this.props.courseObject}/>);
    }
    return (
      <div className="monthGrid">
        <MonthDaysHeader />
        {monthRowArray}
      </div>
    );
  }
}

class MonthRow extends React.Component{

  render() {
    var monthDayBoxArray = [];

    for (var i = 0; i < 7; i++){
      monthDayBoxArray.push(<MonthDayBox key={i + (this.props.monthRowNumber * 7)}
        getDateSelection={this.props.getDateSelection} dayOfWeek={i} dayBoxNumber={i + (this.props.monthRowNumber * 7)} courseObject={this.props.courseObject}/>);
    }
    return (
      <div className="monthRow">
        {monthDayBoxArray}
      </div>
    );
  }
}


class MonthDayBox extends React.Component{
  getDaysOfMonth(){
    var days = new Date(this.props.getDateSelection().selectedYear, this.props.getDateSelection().selectedMonth +1, 0);
    return days.getDate();
  }

  getFirstDayofMonth(){
    var days = new Date(this.props.getDateSelection().selectedYear, this.props.getDateSelection().selectedMonth, 1);
    return days.getDay();
  }


  render () {
    //console.log(this.props.getDateSelection());
    //console.log("First Day of Month: " + this.getFirstDayofMonth());
    if(this.getFirstDayofMonth() > this.props.dayBoxNumber){
      return(
        <div className="greyedMonthDaybox">
        </div>
      );
    }else if ((this.props.dayBoxNumber - this.getFirstDayofMonth() + 1) == d.getDate() && this.props.getDateSelection().selectedMonth == d.getMonth()){
      return(
        <div className="selectedMonthDaybox">
          {(this.props.dayBoxNumber - this.getFirstDayofMonth() + 1)}
        </div>
      );
    }else if ((this.props.dayBoxNumber - this.getFirstDayofMonth() + 1) > this.getDaysOfMonth()){
      return(
        <div className="greyedMonthDaybox">
        </div>
      );
    }else{
      return(
        <div className="monthDaybox">
          {(this.props.dayBoxNumber - this.getFirstDayofMonth() + 1)}
          <MonthBoxContent  dayOfWeek={this.props.dayOfWeek} dayNumber={this.props.dayBoxNumber - this.getFirstDayofMonth()} courseObject={this.props.courseObject} getDateSelection={this.props.getDateSelection}/>
        </div>
      );
    }
  }
}
