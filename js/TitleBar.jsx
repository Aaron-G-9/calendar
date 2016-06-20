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
var currentDay = d.getDate();
var currentMonthName = monthNames[currentMonth];



export default class TitleBar extends React.Component{
  render(){
    return (
      <div className="titleBar">
          <button className="scheduleButtons">
            <i className="material-icons">today</i>
          </button>
          <DatePaginator changeDateSelection={this.props.changeDateSelection} />
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
    if (currentMonth < 11){
      currentMonth += 1;
    }else{
      currentMonth = 0;
      currentYear +=1;
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
        <DateRange month={monthNames[currentMonth]} year={currentYear}/>
        <button className="scheduleButtons" id="scheduleForwardWeek" onClick={this.forwardMonth.bind(this)}>
          <i className="material-icons">navigate_next</i>
        </button>
      </div>
    );
  }
}


class DateRange extends React.Component{
  render () {
    return (
      <div className="dateRange">
          {this.props.month + " " + this.props.year }
      </div>
    );
  }
}
