import React from "react";

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


export default class DayGrid extends React.Component{
  render() {
    return (
      <div className="daygrid">
        <DayHours />
        <DayContent />
      </div>
    );
  }
}


class DayHours extends React.Component{
  render() {
    var timeboxes = [];
    for (var i = 0; i < prettyHours.length; i++){
      timeboxes.push(<HourBox title={prettyHours[i]} />);
    }
    return (
      <div className="dayview">
        {timeboxes}
      </div>
    );
  }
}


class HourBox extends React.Component{
  render() {
    return (
      <div className="hourBox">
        {this.props.title}
      </div>
    );
  }
}


class DayContent extends React.Component{
  render() {
    var contentboxes = [];
    for (var i = 0; i < prettyHours.length; i++){
      contentboxes.push(<HourContent />);
    }
    return (
      <div>
        {contentboxes}
      </div>
    );
  }
}



class HourContent extends React.Component{
  render() {
    return (
      <div className="hourBoxContent">

      </div>
    );
  }
}
