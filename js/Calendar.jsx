import React from "react";
import MonthGrid from "./Month.jsx"
import DayGrid from "./Day.jsx"
import TitleBar from "./TitleBar.jsx"
import WeekGrid from "./Week.jsx"
import DateHelper from './DateHelper.js';
//Variables will go here:
//Variables will go here:



const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
];

var sundayWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var d = new Date();
var currentMonth = d.getMonth();
var currentYear = d.getUTCFullYear();
var currentDay = d.getDate();
var currentMonthName = monthNames[currentMonth];


export default class Calendar extends React.Component{
  constructor(){
    super();
    this.state = {
      desiredView: "MonthView",
      selectedMonth: currentMonth,
      selectedYear: currentYear,
      selectedDay: currentDay,
      courseObject: "empty",
      selectedWeek: 1,
    }
  }

  componentWillMount(){
    fetch("../jsonTesting.json")
    .then(function(response){
      return response.json();
    }).then(function(j){
      this.setState({
        courseObject: j,
      });
    }.bind(this));
  }

  changeDesiredView(desiredView){
    //console.log(desiredView);
    //console.log(this.state.selectedMonth);
    this.setState({desiredView});
  }

  changeDateSelection(month, year, day){
    //console.log(month + " " + year + " " + day);
    this.setState({
      selectedMonth: month,
      selectedDay: day,
      selectedYear: year,
    });
  }

  changeDateSelection(month, year, day, week){
    console.log(day);
    this.setState({
      selectedMonth: month,
      selectedDay: day,
      selectedYear: year,
      selectedWeek: week,
    })
  }

  getDateSelection(){
    return(
      this.state
    );
  }

  render() {
    //console.log(this.state.courseObject);
    if (this.state.desiredView == ("WeekView")){
      return (
        <div className="content">
          <TitleBar getDateSelection={this.getDateSelection.bind(this)} selectedWeek={this.state.selectedWeek} currentView={this.state.desiredView} changeDesiredView={this.changeDesiredView.bind(this)} changeDateSelection={this.changeDateSelection.bind(this)} />
          <WeekGrid getDateSelection={this.getDateSelection.bind(this)} courseObject={this.state.courseObject}/>

          </div>
      );
    }else if (this.state.desiredView == ("DayView")){
      return (
          <div className="content">
            <TitleBar getDateSelection={this.getDateSelection.bind(this)} selectedDay={this.state.selectedDay} currentView={this.state.desiredView} changeDesiredView={this.changeDesiredView.bind(this)} changeDateSelection={this.changeDateSelection.bind(this)} />
            <DayView changeDateSelection={this.changeDateSelection.bind(this)} courseObject={this.state.courseObject} />
          </div>
      );
    }else{
      //Return MonthView
      return (
          <div className="content">
            <TitleBar getDateSelection={this.getDateSelection.bind(this)} selectedDay={this.state.selectedDay} currentView={this.state.desiredView} changeDesiredView={this.changeDesiredView.bind(this)} changeDateSelection={this.changeDateSelection.bind(this)} />
            <MonthView getDateSelection={this.getDateSelection.bind(this)} courseObject={this.state.courseObject}/>
          </div>
      );
    }

  }
}

class MonthView extends React.Component{

  render(){
    return(
    <div className="mainContent">
      <MonthGrid getDateSelection={this.props.getDateSelection} courseObject={this.props.courseObject}/>
    </div>);
  }
}

class DayView extends React.Component{
  render() {
    return (
      <div>
        <DayGrid courseObject={this.props.courseObject}/>
      </div>
    );
  }
}
