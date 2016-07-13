import React from "react";
import DateHelper from './DateHelper.js';
import ICalCreator from './ICalCreator';

var sundayWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var currentMonth;
var currentYear;
var currentDay;
var currentWeek;

export default class TitleBar extends React.Component{
  render(){
    currentMonth = this.props.getDateSelection().selectedMonth;
    currentYear = this.props.getDateSelection().selectedYear;
    currentDay = this.props.getDateSelection().selectedDay;
    currentWeek = this.props.getDateSelection().selectedWeek;
    //console.log(this.props.courseObject);
    var creator = new ICalCreator(this.props.courseObject);
    //console.log(creator.addClass);
    return (
      <div className="titleBar">
          <button className="scheduleButtons">
            <i className="material-icons">today</i>
          </button>
          <a href={"data:text/plain;charset=UTF-8," + creator.makeFile()} download="mycourses.ics">Download iCal!</a>
          <DatePaginator getDateSelection={this.props.getDateSelection} selectedWeek={this.props.selectedWeek} currentView={this.props.currentView} changeDateSelection={this.props.changeDateSelection} />
          <ViewSelectorButtons changeDesiredView={this.props.changeDesiredView} />
      </div>
    );
  }
}



class ViewSelectorButtons extends React.Component{
  render () {
    /*
    ()=>this.props.changeDesiredView("DayView")
    method is the ES6 equivalent to
    this.props.changeDesiredView.bind(this, "DayView")
    */
    return (
        <div className="viewSelectorButtons">
            <button className="scheduleViewButtons" onClick={()=>this.props.changeDesiredView("DayView")} >
                <i className="material-icons w3-xxxlarge">view_day</i>
            </button>
            <button className="scheduleViewButtons" onClick={()=>this.props.changeDesiredView("WeekView")}>
                <i className="material-icons w3-xxxlarge">view_week</i>
            </button>
            <button className="scheduleViewButtons" onClick={()=>this.props.changeDesiredView("MonthView")}>
                <i className="material-icons w3-xxxlarge">view_module</i>
            </button>
        </div>
    );
  }
}

class DatePaginator extends React.Component{

  forwardMonth(){
    if(this.props.currentView == "MonthView"){
      if (currentMonth < 11){
        currentMonth += 1;
      }else{
        currentMonth = 0;
        currentYear +=1;
      }
    }else if (this.props.currentView == "WeekView"){
      var day = new Date(currentMonth, currentYear, 1);
      if (currentWeek == DateHelper.getWeeksOfMonth(day)){ //We are on the last week
        //console.log("entering this one");
        if (currentMonth < 11){
          currentMonth += 1;
        }else{
          currentMonth = 0;
          currentYear +=1;
        }
        currentWeek = 1;
      }else{
        currentWeek++;
      }
    }else if (this.props.currentView == "DayView"){
      var day = new Date(currentMonth, currentYear, 0);
      if(currentDay == day.getDate()){
        if (currentMonth < 11){
          currentMonth++;
          currentDay = 1;
        }else{
          currentMonth = 0;
          currentYear++;
          currentDay = 1;
        }
      }else{
        currentDay++;
      }
    }else{
      alert("I don't know what to do...");
    }


    this.props.changeDateSelection(currentMonth, currentYear, currentDay, currentWeek);
  }

  backMonth(){
    if(this.props.currentView == "MonthView"){
      if (currentMonth < 1){
        currentMonth = 11;
        currentYear -= 1;
      }else{
        currentMonth -= 1;
      }
    }else if (this.props.currentView == "WeekView"){
      if (currentWeek == 1){ //We are on the first week
        if (currentMonth < 1){
          currentMonth = 11;
          currentYear -= 1;
        }else{
          currentMonth--;
        }
        var day = new Date(currentMonth, currentYear, 1);
        currentWeek = DateHelper.getWeeksOfMonth(day);
      }else{
        currentWeek--;
      }
    }else if (this.props.currentView == "DayView"){
      if(currentDay == 1){
        if (currentMonth < 1){
          currentMonth = 11;
          currentYear--;
          var day = new Date(currentMonth, currentYear, 0);
          currentDay = day.getDate();
        }else{
          currentMonth--;
          var day = new Date(currentMonth, currentYear, 0);
          currentDay = day.getDate();
        }
      }else{
        currentDay--;
      }
    }else{
      alert("I don't know what to do...");
    }
    this.props.changeDateSelection(currentMonth, currentYear, currentDay, currentWeek );
  }




  render() {
    return (
      <div className="datePaginator">
        <button className="scheduleButtons" onClick={this.backMonth.bind(this)}>
          <i className="material-icons">navigate_before</i>
        </button>
        <DateRange getDateSelection={this.props.getDateSelection} selectedWeek={this.props.selectedWeek} currentView={this.props.currentView} month={DateHelper.getMonthNames()[this.props.getDateSelection().selectedMonth]} year={this.props.getDateSelection().selectedYear}/>
        <button className="scheduleButtons" id="scheduleForwardWeek" onClick={this.forwardMonth.bind(this)}>
          <i className="material-icons">navigate_next</i>
        </button>
      </div>
    );
  }
}


class DateRange extends React.Component{
  /*
  getFirstDayofMonth(){
    var days = new Date(this.props.getDateSelection().selectedYear, this.props.getDateSelection().selectedMonth, 1);
    return days.getDay();
  }
  */
  render () {

    if (this.props.currentView == "MonthView"){
      return (
        <div className="dateRange">
            {this.props.month + " " + this.props.year}
        </div>
      );
    }else if (this.props.currentView == "WeekView"){
      return (
        <div className="dateRange">
            {this.props.month + " " + DateHelper.getWeekDateRange(currentMonth, currentYear, currentWeek) }
        </div>
      );
    }else if (this.props.currentView == "DayView"){
      return (
        <div className="dateRange">
          {this.props.month + " " + currentDay}
        </div>
      );
    }else{
      return (
        <div>ERROR</div>
      );

    }

  }
}
