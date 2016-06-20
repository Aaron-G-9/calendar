import React from "react";


var d = new Date();
const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
];

const prettyHours = ["All Day", "7am", "8am", "9am", "10am", "11am", "12am", "1pm",
    "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm"];

var sundayWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];






export default class MonthGrid extends React.Component{
  render() {
    var monthRowArray = [];
    var days = new Date();
    console.log("Hello " + days);
    for (var i  = 0; i < 6; i++){
      monthRowArray.push(<MonthRow key={i} monthRowNumber={i} changeDateSelection={this.props.changeDateSelection} getDateSelection={this.props.getDateSelection} />);
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
        getDateSelection={this.props.getDateSelection} changeDateSelection={this.props.changeDateSelection}  dayBoxNumber={i + (this.props.monthRowNumber * 7)} />);
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
          boom
        </div>
      );
    }else if ((this.props.dayBoxNumber - this.getFirstDayofMonth() + 1) == d.getDate()){
      return(
        <div className="selectedMonthDaybox">
          {(this.props.dayBoxNumber - this.getFirstDayofMonth() + 1)}
        </div>
      );
    }else if ((this.props.dayBoxNumber - this.getFirstDayofMonth() + 1)> this.getDaysOfMonth()){
      return(
        <div className="greyedMonthDaybox">
        </div>
      );
    }else{
      return(
        <div className="monthDaybox">
          {(this.props.dayBoxNumber - this.getFirstDayofMonth() + 1)}
        </div>
      );
    }
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
