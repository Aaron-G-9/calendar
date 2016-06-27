import React, { PropTypes } from 'react';
import ContentCreator from './ContentCreator.js';
export default class MonthBoxContent extends React.Component{


  render () {
    if (this.props.courseObject != "empty"){
      var contentBoxesArr = [];

      //console.log(this.props.courseObject.myCourses.length);
      for (var i = 0; i < this.props.courseObject.myCourses.length; i++){
        var content = new ContentCreator(this.props.courseObject, i);
        //If it is the months in between the start and end months of the class
        if (content.getStartMonth() < this.props.getDateSelection().selectedMonth
          && content.getEndMonth() > this.props.getDateSelection().selectedMonth
          && content.getMeetDays()[this.props.dayOfWeek] == true){

            contentBoxesArr.push(<ContentBoxes hour={content.getStartTimeInfo("hours")} shortName={content.getShortName()} time={content.getStartTimeInfo("string")}/>);
        }else if (content.getStartMonth() == this.props.getDateSelection().selectedMonth
          && content.getStartDay() <= this.props.dayNumber
          && content.getMeetDays()[this.props.dayOfWeek] == true){
            contentBoxesArr.push(<ContentBoxes hour={content.getStartTimeInfo("hours")} shortName={content.getShortName()} time={content.getStartTimeInfo("string")}/>);

        }else if (content.getEndMonth() == this.props.getDateSelection().selectedMonth
          && content.getEndDay() >= this.props.dayNumber
          && content.getMeetDays()[this.props.dayOfWeek] == true){
            contentBoxesArr.push(<ContentBoxes hour={content.getStartTimeInfo("hours")} shortName={content.getShortName()} time={content.getStartTimeInfo("string")}/>);
          }
      }
      try{
        contentBoxesArr.sort(function(a, b){return a.props.hour - b.props.hour});
        console.log(contentBoxesArr[0].props.hour);
      } catch (e){
        console.log("Woah. An error occured. I should do something about that.");
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
