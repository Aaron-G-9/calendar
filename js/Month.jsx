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
var selectedMonthName = currentMonthName;

function getDaysOfMonth(){
  var days = new Date(selectedYear, selectedMonth +1, 0);
  return days.getDate();
}

function getFirstDayofMonth(){
  var days = new Date(selectedYear, selectedMonth, 1);
  return days.getDay();
}


export default class MonthGrid extends React.Component{
  render() {
    var monthRowArray = [];
    for (var i  = 0; i < 5; i++){
      monthRowArray.push(<MonthRow key={i} monthRowNumber={i} />);
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
      monthDayBoxArray.push(<MonthDayBox key={i + (this.props.monthRowNumber * 7)} dayBoxNumber={i + (this.props.monthRowNumber * 7)} />);
    }
    return (
      <div className="monthRow">
        {monthDayBoxArray}
      </div>
    );
  }
}


class MonthDayBox extends React.Component{
  componentWillMount() {
    var nameOfClass;
    var displayNumber;
    if (getFirstDayofMonth() > this.props.dayBoxNumber){
      nameOfClass = "greyedMonthDaybox";
    }else if ((this.props.dayBoxNumber - getFirstDayofMonth() + 1)> getDaysOfMonth()){
      nameOfClass = "greyedMonthDaybox";
    }else if ((this.props.dayBoxNumber - getFirstDayofMonth() + 1) == d.getDate()){
      nameOfClass = "selectedMonthDaybox";
      displayNumber = (this.props.dayBoxNumber - getFirstDayofMonth() + 1);
    }else{
      console.log("boom");
      nameOfClass = "monthDaybox";
      displayNumber = (this.props.dayBoxNumber - getFirstDayofMonth() + 1);
    }
    console.log(displayNumber);
    this.setState({
      thing: displayNumber,
      nameOfClass: nameOfClass,
    });
  }


  render () {
    return(
      <div className={this.state.nameOfClass}>
        {this.state.thing}
      </div>
    );
  }
}

class MonthDaysHeader extends React.Component{
  render() {

    return(
      <div className="monthDaysHeader">

          <div>{sundayWeek[0]}</div>
          <div>{sundayWeek[1]}</div>
          <div>{sundayWeek[2]}</div>
          <div>{sundayWeek[3]}</div>
          <div>{sundayWeek[4]}</div>
          <div>{sundayWeek[5]}</div>
          <div>{sundayWeek[6]}</div>

      </div>
    );
  }
}
