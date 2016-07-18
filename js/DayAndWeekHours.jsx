import React from 'react'

import DateHelper from './DateHelper.js';
//This component displays an array of the child component. This is an especially
//cool feature that React offers. And we can push however many components we want
//This array contains as many components as the length of the 'prettyHours array'
//This will create a div for each element in the array
export default class DayAndWeekHours extends React.Component {
    render() {
        var timeboxes = [];
        for (var i = 0; i < DateHelper.getPrettyHours().length; i++) {
            timeboxes.push(<HourGuideBox title={DateHelper.getPrettyHours()[i]}/>);
            timeboxes[i] = (<HourGuideBox Box title={DateHelper.getPrettyHours()[i]}/>);
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
class HourGuideBox extends React.Component {
    render() {
        return (
            <div className="hourGuideBox">
                {this.props.title}
            </div>
        );
    }
}
