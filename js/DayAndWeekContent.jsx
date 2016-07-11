import React from 'react'
import ContentCreator from "./ContentCreator.js"
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Popover from 'react-bootstrap/lib/Popover';
import DateHelper from './DateHelper.js';

const prettyHours = ["7am", "8am", "9am", "10am", "11am", "12am", "1pm",
    "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm"];

var currentMonth;
var currentYear;
var currentDay;
var currentWeek;

export default class WeekColumn extends React.Component{
  render() {
    currentMonth = this.props.getDateSelection().selectedMonth;
    currentYear = this.props.getDateSelection().selectedYear;
    currentDay = this.props.getDateSelection().selectedDay;
    currentWeek = this.props.getDateSelection().selectedWeek;
    var contentboxes = [];
    for (var i = 0; i < (prettyHours.length * 2); i++){
      contentboxes.push(<HourBox getDateSelection={this.props.getDateSelection} dayOfWeek={this.props.dayOfWeek} courseObject={this.props.courseObject} hourBoxNumber={i} />);
    }
    return (
      <div className="weekCol">
        {contentboxes}
      </div>
    );
  }
}

class HourBox extends React.Component{

  getFirstDayofMonth(){
    var days = new Date(this.props.getDateSelection().selectedYear, this.props.getDateSelection().selectedMonth, 1);
    return days.getDay();
  }

  render() {
    if (DateHelper.getWeekArray(currentMonth, currentYear, currentWeek)[this.props.dayOfWeek] != 0){
      return (
        <div className="hourBox">
          <HourContent getDateSelection={this.props.getDateSelection} dayOfWeek={this.props.dayOfWeek} courseObject={this.props.courseObject} hourBoxNumber={this.props.hourBoxNumber}/>
        </div>
      );
    }else{
      return(
        <div className="greyedHourBox">

        </div>
      )
    }


  }
}

class HourContent extends React.Component{
  render() {
    var testingArr = [];
    //console.log(this.props.courseObject);
    for (var i = 0; i < this.props.courseObject.myCourses.length; i++){
      var content = new ContentCreator(this.props.courseObject, i);

      var lengthStyle={
        height: content.getDesiredHeight()  + "rem",
      }

      if (content.getStartMonth() < this.props.getDateSelection().selectedMonth
          && content.getEndMonth() > this.props.getDateSelection().selectedMonth
          && this.props.hourBoxNumber == content.getWeekViewPosition()
          && content.getMeetDays()[this.props.dayOfWeek] == true ){
        console.log(content.getWeekViewPosition() + " " + this.props.hourBoxNumber);
        return(
          <div className="filledHourBoxContent">
            <OverlayTrigger trigger="click" rootClose placement="bottom" overlay={<Popover  title={content.getTitle()} ><PopoverContent location={content.getBuilding()} time={content.getStartTimeInfo("string") + " - " + content.getEndTimeInfo("string")}/></Popover>}>
            <button className="weekEventButton" style={lengthStyle}>{content.getShortName()}</button>
            </OverlayTrigger>
          </div>
        );
      }
    }
    return (
      <div>
      </div>
    );
  }
}

class PopoverContent extends React.Component{
  render() {
    return (
      <div>
        <div className="popoverTime">
          <i class="material-icons" id="coursesPortlet-month-popover-time">access_time</i>
          {this.props.time}
        </div>
        <div className="popoverTime">
          <i id="coursesPortlet-month-popover-time" class="material-icons">map</i>
          {this.props.location}
        </div>
      </div>
    );
  }
}
