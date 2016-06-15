//Variables will go here:
var d = new Date();

const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
];

const prettyHours = ["All Day", "7am", "8am", "9am", "10am", "11am", "12am", "1pm",
    "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm"];

var sundayWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var currentMonth = d.getMonth();
var currentYear = d.getUTCFullYear();
var currentMonthName = monthNames[currentMonth];

class App extends React.Component{
    render() {
        return (
            <div className="content">
                <Everything />
            </div>
        );
    }
}




class Everything extends React.Component{
  render() {
    return (
      <div>
          <TitleBar />
          <div className="mainContent">
            <MonthGrid />

          </div>
      </div>
    );
  }
}

class TitleBar extends React.Component{
  render(){
    return (
      <div className="titleBar">
          <button className="scheduleButtons">
            <i className="material-icons">today</i>
          </button>
          <DatePaginator />
          <ViewSelectorButtons />
      </div>
    );
  }
}



class ViewSelectorButtons extends React.Component{
  render () {
    return (
        <div className="viewSelectorButtons">
            <button className="scheduleViewButtons" >
                <i className="material-icons w3-xxxlarge">view_day</i>
            </button>
            <button className="scheduleViewButtons">
                <i className="material-icons w3-xxxlarge">view_week</i>
            </button>
            <button className="scheduleViewButtons">
                <i className="material-icons w3-xxxlarge">view_module</i>
            </button>
        </div>
    );
  }
}


class DateRange extends React.Component{
  constructor(){
    super();
    this.state = {
      month: monthNames[currentMonth],
      year: currentYear,
    };
  }
  render () {
    return (
      <div className="dateRange">
          {this.state.month + " " + this.state.year }
      </div>
    );
  }
}

function getDaysOfMonth(){
  var days = new Date(currentYear, currentMonth +1, 0);
  return days.getDate();
}

function getFirstDayofMonth(){
  var days = new Date(currentYear, currentMonth, 1);
  return days.getDay();
}

function forwardMonth(){
  if (currentMonth < 11){
    currentMonth += 1;
  }else{
    currentMonth = 0;
    currentYear +=1;
  }

  console.log("Month: " + monthNames[currentMonth] + "\n Days: " + getDaysOfMonth() + "\n Start: " + sundayWeek[getFirstDayofMonth()]);
}
function backMonth(){
  currentMonth -= 1;
}



class DatePaginator extends React.Component{


  render() {
    return (
      <div className="datePaginator">
        <button className="scheduleButtons" onClick={backMonth}>
          <i className="material-icons">navigate_before</i>
        </button>
        <DateRange />
        <button className="scheduleButtons" id="scheduleForwardWeek" onClick={forwardMonth}>
          <i className="material-icons">navigate_next</i>
        </button>
      </div>
    );
  }
}



class DayView extends React.Component{
  render() {
    return (
      <div className="dayview">
        <DayHours />
      </div>
    );
  }
}




class DayHours extends React.Component{
  render() {
    var timeboxes = [];
    for (var i = 0; i < prettyHours.length; i++){
      timeboxes.push(<HourBox title={prettyHours[i]} />);
    }
    return (
      <tbody>
        {timeboxes}
      </tbody>
    );
  }
}

class DayContent extends React.Component{
  render() {
    var contentboxes = [];
    for (var i = 0; i < prettyHours.length; i++){
      contentboxes.push(<HourContent />);
    }
    return (
      <tbody>
        {contentboxes}
      </tbody>
    );
  }
}

class HourBox extends React.Component{
  render() {
    return (
      <div className="hourBox">
        {this.props.title}
      </div>
    );
  }
}

class HourContent extends React.Component{
  render() {
    return (
      <div className="hourBoxContent">

      </div>
    );
  }
}



//***************************Month Stuff**********************//


class MonthRow extends React.Component{
  render() {
    var monthDayBoxArray = [];
    for (var i = 1; i < 8; i++){
      monthDayBoxArray.push(<MonthDayBox dayBoxNumber={i + (this.props.monthRowNumber * 7)} />);
    }
    return (
      <div className="monthRow">
        {monthDayBoxArray}
      </div>
    );
  }
}

class MonthGrid extends React.Component{
  render() {
    var monthRowArray = [];
    for (var i  = 0; i < 5; i++){
      monthRowArray.push(<MonthRow key={i} monthRowNumber={i} />);
    }
    return (
      <div className="monthGrid">
        <MonthDaysHeader />
        {monthRowArray}
      </div>
    );
  }
}

class MonthDayBox extends React.Component{
  render () {
    if (this.props.dayBoxNumber == d.getDate()){
      return (
        <div className="selectedMonthDaybox">
          {this.props.dayBoxNumber}
        </div>
      );
    }else{
      return (
        <div className="monthDaybox">
          {this.props.dayBoxNumber}
        </div>
      );
    }
  }
}

class MonthDaysHeader extends React.Component{
  render() {

    return(
      <div className="monthDaysHeader">

          <div>{sundayWeek[0]}</div>
          <div>{sundayWeek[1]}</div>
          <div>{sundayWeek[2]}</div>
          <div>{sundayWeek[3]}</div>
          <div>{sundayWeek[4]}</div>
          <div>{sundayWeek[5]}</div>
          <div>{sundayWeek[6]}</div>

      </div>
    );
  }
}





ReactDOM.render(
    <App/>,
    document.getElementById('app')

);
