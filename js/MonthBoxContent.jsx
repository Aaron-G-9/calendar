import React, { PropTypes } from 'react'

export default class MonthBoxContent extends React.Component{
  kaboom(){
    alert('splosions');
  }

  render () {
    return (
      <div className="monthBoxContent">
        <button className="eventButton" onClick={this.kaboom}>All the days...</button>
        <button className="eventButton">7 ComSci</button>
      </div>
    );
  }
}
