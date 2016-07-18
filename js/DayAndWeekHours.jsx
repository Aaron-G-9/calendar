import React from 'react'

//This array might be later moved into DateHelper class
//This is the text displayed on the left of dayView. It goes from 7-11
//because those are the times that classes are offered at the school that this
//is for.
const prettyHours = ["7am", "8am", "9am", "10am", "11am", "12am", "1pm",
    "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm"];

//This component displays an array of the child component. This is an especially
//cool feature that React offers. And we can push however many components we want
//This array contains as many components as the length of the 'prettyHours array'
//This will create a div for each element in the array
export default class DayAndWeekHours extends React.Component{
  render() {
    var timeboxes = [];
    for (var i = 0; i < prettyHours.length; i++){
      timeboxes.push(<HourGuideBox title={prettyHours[i]} />);
      timeboxes[i] = (<HourGuideBox Box title={prettyHours[i]} />);
    }
    return (
      <div className="dayview">
        {timeboxes}
      </div>
    );
  }
}

//This is the child component that DayAndWeekHours makes an array of. All it
//takes as props is a title, which is just the prettyHours element corresponding
//to which HourGuideBox you're creating
class HourGuideBox extends React.Component{
  render() {
    return (
      <div className="hourGuideBox">
        {this.props.title}
      </div>
    );
  }
}
