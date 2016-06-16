import React from "react";
import MonthGrid from "./Month.jsx"
import DayGrid from "./Day.jsx"
import TitleBar from "./TitleBar.jsx"
//Variables will go here:

var d = new Date();

const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
];

const prettyHours = ["All Day", "7am", "8am", "9am", "10am", "11am", "12am", "1pm",
    "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm"];

var sundayWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var currentMonth = d.getMonth();
var currentYear = d.getUTCFullYear();
var currentMonthName = monthNames[currentMonth];

var selectedMonth = currentMonth;
var selectedYear = currentYear;
var currentMonthName = currentMonthName;

export default class Calendar extends React.Component{
  constructor(){
    super();
    this.state = {
      showMonthView: true,
      showWeekView: false,
      showDayView: false,
    }
  }

  setMonthView(){
    this.setState({
      showMonthView: true,
      showWeekView: false,
      showDayView: false,
    });
  }

  setWeekView(){
    this.setState({
      showMonthView: false,
      showWeekView: true,
      showDayView: false,
    });
  }

  setDayView(){
    this.setState({
      showMonthView: false,
      showWeekView: false,
      showDayView: true,
    });
  }

  render() {
    if (this.state.showWeekView == true){
      return (
          <div className="content">
            <TitleBar />
          </div>
      );
    }else if (this.state.showDayView == true){
      return (
          <div className="content">
            <TitleBar />
          </div>
      );
    }else{
      console.log("monthView");
      console.log(this.state.showMonthView);
      return (
          <div className="content">
            <TitleBar />
            <MonthView />
          </div>
      );
    }

  }
}

class MonthView extends React.Component{

  render(){
    return(
    <div className="mainContent">
      <MonthGrid />
    </div>);
  }
}

class DayView extends React.Component{
  render() {
    return (
      <div className="dayview">
        <DayGrid />
      </div>
    );
  }
}
