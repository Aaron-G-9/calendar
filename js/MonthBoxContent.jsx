import React, { PropTypes } from 'react';
import ContentCreator from './ContentCreator.js';
export default class MonthBoxContent extends React.Component{
  kaboom(){

  }

  render () {
    if (this.props.courseObject != "empty"){
      console.log(this.props.courseObject.myCourses.length);
      for (var i = 0; i < this.props.courseObject.myCourses.length; i++){
        var content = new ContentCreator(this.props.courseObject, 2);

        //If it is the months in between the start and end months of the class
        if (content.getStartDate() < this.props.getDateSelection().selectedMonth
          && content.getEndDate() > this.props.getDateSelection().selectedMonth){

            if (content.getMeetDays()[this.props.dayOfWeek] == true){
              return (
                <div className="monthBoxContent">
                  <button className="eventButton" onClick={this.kaboom}>
                    {content.getShortName()}
                    <b>{content.getStartTimeInfo("string")}</b>
                  </button>

                </div>
              );
            }else{
              return (
                <div>

                </div>
              );
            }





            /*console.log(content.getMeetDays());
            console.log(content.getStartTime());
            console.log(this.props.dayNumber);
            console.log(this.props.dayOfWeek);*/


        }else{
          return(
            <div>

            </div>
          );
        }
      }


    }else{
      return(
        <div></div>
      );
    }

  }
}
