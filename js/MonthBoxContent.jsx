import React, { PropTypes } from 'react';
import ContentCreator from './ContentCreator.js';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Popover from 'react-bootstrap/lib/Popover';

export default class MonthBoxContent extends React.Component{
  render () {
    if (this.props.courseObject != "empty"){
      var contentBoxesArr = [];

      ////console.log(this.props.courseObject.myCourses.length);
      for (var i = 0; i < this.props.courseObject.myCourses.length; i++){
        var content = new ContentCreator(this.props.courseObject, i);
        //If it is the months in between the start and end months of the class
        if (content.getStartMonth() < this.props.getDateSelection().selectedMonth
          && content.getEndMonth() > this.props.getDateSelection().selectedMonth
          && content.getMeetDays()[this.props.dayOfWeek] == true){

            contentBoxesArr.push(<ContentBoxes hour={content.getStartTimeInfo("hours")} location={content.getBuilding()} longName={content.getTitle()} shortName={content.getShortName()} endTime={content.getEndTimeInfo("string")} startTime={content.getStartTimeInfo("string")}/>);
        }else if (content.getStartMonth() == this.props.getDateSelection().selectedMonth
          && content.getStartDay() <= this.props.dayNumber
          && content.getMeetDays()[this.props.dayOfWeek] == true){
            contentBoxesArr.push(<ContentBoxes hour={content.getStartTimeInfo("hours")} location={content.getBuilding()} longName={content.getTitle()} shortName={content.getShortName()} endTime={content.getEndTimeInfo("string")} startTime={content.getStartTimeInfo("string")}/>);

        }else if (content.getEndMonth() == this.props.getDateSelection().selectedMonth
          && content.getEndDay() >= this.props.dayNumber
          && content.getMeetDays()[this.props.dayOfWeek] == true){
            contentBoxesArr.push(<ContentBoxes hour={content.getStartTimeInfo("hours")} location={content.getBuilding()} longName={content.getTitle()} shortName={content.getShortName()} endTime={content.getEndTimeInfo("string")} startTime={content.getStartTimeInfo("string")}/>);
          }
      }
      try{
        contentBoxesArr.sort(function(a, b){return a.props.hour - b.props.hour});
        //console.log(contentBoxesArr[0].props.hour);
      } catch (e){
        
      }

      return(
        <div>
          {contentBoxesArr}
        </div>
      );
      //push array here
    }else{
      return(
        <div></div>
      );
    }

  }
}

class ContentBoxes extends React.Component{
  render() {
    //console.log()
    return (
      <div className="monthBoxContent">
        <OverlayTrigger trigger="click" rootClose placement="bottom" overlay={<Popover  title={this.props.longName} ><PopoverContent time={this.props.startTime + " - " + this.props.endTime} location={this.props.location} /></Popover>}>
          <button className="eventButton" >
            {this.props.shortName}
            <b>{this.props.startTime}</b>
          </button>
        </OverlayTrigger>
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
