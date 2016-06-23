import React, { PropTypes } from 'react';
import ContentCreator from './ContentCreator.js';
export default class MonthBoxContent extends React.Component{


  render () {
    if (this.props.courseObject != "empty"){
      var contentBoxesArr = [];
      console.log(this.props.courseObject);
      //console.log(this.props.courseObject.myCourses.length);
      for (var i = 0; i < this.props.courseObject.myCourses.length; i++){
        var content = new ContentCreator(this.props.courseObject, i);
        //If it is the months in between the start and end months of the class
        if (content.getStartDate() < this.props.getDateSelection().selectedMonth
          && content.getEndDate() > this.props.getDateSelection().selectedMonth
          && content.getMeetDays()[this.props.dayOfWeek] == true){

            contentBoxesArr.push(<ContentBoxes shortName={content.getShortName()} time={content.getStartTimeInfo("string")}/>)
        }
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
    console.log()
    return (
      <div className="monthBoxContent">
        <button className="eventButton" >
          {this.props.shortName}
          <b>{this.props.time}</b>
        </button>
      </div>
    );
  }
}
