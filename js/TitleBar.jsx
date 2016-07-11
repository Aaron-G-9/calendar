import React from "react";
import DateHelper from './DateHelper.js';



var sundayWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var currentMonth;
var currentYear;
var currentDay;


export default class TitleBar extends React.Component{
  render(){
    currentMonth = this.props.getDateSelection().selectedMonth;
    currentYear = this.props.getDateSelection().selectedYear;
    currentDay = this.props.getDateSelection().selectedDay;
    return (
      <div className="titleBar">
          <button className="scheduleButtons">
            <i className="material-icons">today</i>
          </button>
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
      var day = new Date(this.props.getDateSelection().selectedMonth, this.props.getDateSelection().selectedYear, 1);
      console.log(this.props.getDateSelection().selectedWeek);
      console.log(DateHelper.getWeekArray(this.props.getDateSelection().selectedYear, this.props.getDateSelection().selectedMonth, this.props.getDateSelection().selectedWeek));
      if (this.props.getDateSelection().selectedWeek == DateHelper.getWeeksOfMonth(day)){
        console.log("we are on the last week");
      }else{
        console.log(this.props.getDateSelection().selectedWeek + 1);
        this.props.changeDateSelection(currentMonth, currentYear, currentDay, (this.props.getDateSelection().selectedWeek + 1));
        console.log(this.props.getDateSelection());
      }



    }else{
      alert("I don't know what to do...");
    }


    this.props.changeDateSelection(currentMonth, currentYear, currentDay );
  }

  backMonth(){
    if (currentMonth < 1){
      currentMonth = 11;
      currentYear -= 1;
    }else{
      currentMonth -= 1;
    }
    this.props.changeDateSelection(currentMonth, currentYear, currentDay);
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
    console.log(this.props.currentView);
    if (this.props.currentView == "MonthView"){
      return (
        <div className="dateRange">
            {this.props.month + " " + this.props.year}
        </div>
      );
    }else if (this.props.currentView == "WeekView"){
      return (
        <div className="dateRange">
            {this.props.month + " " + this.props.selectedWeek + " - " }
        </div>
      );
    }else if (this.props.currentView == "DayView"){
      return (
        <div>

        </div>
      );
    }else{
      return (
        <div>ERROR</div>
      );

    }

  }
}
