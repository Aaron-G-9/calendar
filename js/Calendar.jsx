import React from "react";

import DateHelper from './DateHelper.js'; //JS class used for date related methods
import DayGrid from "./Day.jsx"; //React component - day view
import MonthGrid from "./Month.jsx"; //React component - month view
import TitleBar from "./TitleBar.jsx"; //React component - title bar
import WeekGrid from "./Week.jsx"; //React component - week view

//The parent component. Everything is contained in this. It is the big daddy.
export default class Calendar extends React.Component{
  //A constructor to set initial state. This.state must be declared ONLY in the
  //constructor. Elsewhere, this.setstate() is used.
  constructor(){
    super(); //React component constructors must call super()
    this.state = {
      desiredView: "MonthView",
      selectedMonth: DateHelper.getTodayDate().month,
      selectedYear: DateHelper.getTodayDate().year,
      selectedDay: DateHelper.getTodayDate().day,
      courseObject: "empty",
      selectedWeek: 1,
    }
  }

  //Before the components mount to the virtual DOM, we fetch the courseObject
  //from the database.
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

  //This doesn't seem optimal, but in order to keep everything react-y, all
  //variables having anything to do with the view are state variables in this
  //parent component and passed through to the children. Hopefully when context
  //becomes a more stable thing, we can use that and keep componenets more stateless.

  //The next two methods are passed through the children so that children can change
  //the state of the parent, which changes the view.
  changeDesiredView(desiredView){
    this.setState({desiredView});
  }

  changeDateSelection(month, year, day, week){
    if (week == null){
      this.setState({
        selectedMonth: month,
        selectedDay: day,
        selectedYear: year,
      });
    }else{
      this.setState({
        selectedMonth: month,
        selectedDay: day,
        selectedYear: year,
        selectedWeek: week,
      });
    }
  }

  //An easy way to pass all the state variables, without having to pass them
  //individually through props.
  getDateSelection(){
    return(
      this.state
    );
  }


  render() {
    if (this.state.desiredView == ("WeekView")){
      return (
        <div className="content">
          <TitleBar courseObject={this.state.courseObject} getDateSelection={this.getDateSelection.bind(this)} selectedWeek={this.state.selectedWeek} currentView={this.state.desiredView} changeDesiredView={this.changeDesiredView.bind(this)} changeDateSelection={this.changeDateSelection.bind(this)} />
          <WeekGrid getDateSelection={this.getDateSelection.bind(this)} courseObject={this.state.courseObject}/>
        </div>
      );
    }else if (this.state.desiredView == ("DayView")){
      return (
          <div className="content">
            <TitleBar courseObject={this.state.courseObject} getDateSelection={this.getDateSelection.bind(this)} selectedDay={this.state.selectedDay} currentView={this.state.desiredView} changeDesiredView={this.changeDesiredView.bind(this)} changeDateSelection={this.changeDateSelection.bind(this)} />
            <DayView getDateSelection={this.getDateSelection.bind(this)} changeDateSelection={this.changeDateSelection.bind(this)} courseObject={this.state.courseObject} />
          </div>
      );
    }else{
      //Return MonthView
      return (
          <div className="content">
            <TitleBar  courseObject={this.state.courseObject} getDateSelection={this.getDateSelection.bind(this)} selectedDay={this.state.selectedDay} currentView={this.state.desiredView} changeDesiredView={this.changeDesiredView.bind(this)} changeDateSelection={this.changeDateSelection.bind(this)} />
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
        <DayGrid getDateSelection={this.props.getDateSelection} courseObject={this.props.courseObject}/>
      </div>
    );
  }
}
