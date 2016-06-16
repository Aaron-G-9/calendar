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
      desiredView: "MonthView",
    }
  }

  changeDesiredView(desiredView){
    console.log(desiredView);
    this.setState({desiredView});
  }


  render() {
    if (this.state.desiredView == ("WeekView")){
      return (
          <div className="content">
            <TitleBar changeDesiredView={this.changeDesiredView.bind(this)} />
          </div>
      );
    }else if (this.state.desiredView == ("DayView")){
      return (
          <div className="content">
            <TitleBar changeDesiredView={this.changeDesiredView.bind(this)} />
            <DayView />
          </div>
      );
    }else{
      return (
          <div className="content">
            <TitleBar changeDesiredView={this.changeDesiredView.bind(this)} />
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
      <div>
        <DayGrid />
      </div>
    );
  }
}
