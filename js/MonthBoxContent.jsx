import React, { PropTypes } from 'react';
import ContentCreator from './ContentCreator.js';
export default class MonthBoxContent extends React.Component{
  kaboom(){
    alert('splosions');
  }

  render () {
    if (this.props.courseObject != "empty"){
      var content = new ContentCreator(this.props.courseObject);
      //content.getTitle();
      //content.getStartDate();
      //content.getEndDate();
      //content.getStartTime();
      //console.log("THIS IS START DATE: " + content.getStartDate());
      //console.log("SELECTED MONTH: " + this.props.getDateSelection().selectedMonth);
      //console.log("THIS IS END DATE: " + content.getEndDate());
      if (content.getStartDate() < this.props.getDateSelection().selectedMonth
        && content.getEndDate() > this.props.getDateSelection().selectedMonth){
          //console.log(this.props.dayBoxNumber);
          console.log("THIS IS ALL TRUE!!!");
      }
    }
    return (
      <div className="monthBoxContent">
        <button className="eventButton" onClick={this.kaboom}>All the days...</button>
        <button className="eventButton">7 Computer Science</button>
      </div>
    );
  }
}
