//Variables will go here:
var d = new Date();

const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
];

const prettyHours = ["All Day", "7am", "8am", "9am", "10am", "11am", "12am", "1pm",
    "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm"];

var currentMonth = d.getMonth();
var currentYear = d.getUTCFullYear();
var currentMonthName = monthNames[currentMonth];

const App = React.createClass({
    render() {
        return (
            <div className="content">
                <Everything />
            </div>
        );
    }
});




const Everything = React.createClass({
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
});

const TitleBar = React.createClass({
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
});



const ViewSelectorButtons = React.createClass({
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
});


const DateRange = React.createClass({
  render () {
    return (
      <div className="dateRange">
          {currentMonthName + " " + currentYear }
      </div>
    );
  }
});

function forwardMonth(){
  if (currentMonth < 11){
    currentMonth += 1;
    currentMonthName=monthNames[currentMonth];
  }else{
    currentMonth = 0;
    currentYear +=1;
  }

  console.log(monthNames[currentMonth]);
}
function backMonth(){
  currentMonth -= 1;
}



const DatePaginator = React.createClass({


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
});



const DayView = React.createClass({
  render() {
    return (
      <div className="dayview">
        <DayHours />
      </div>
    );
  }
});




const DayHours = React.createClass({
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
});

const DayContent = React.createClass({
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
});

const HourBox = React.createClass({
  render() {
    return (
      <div className="hourBox">
        {this.props.title}
      </div>
    );
  }
});

const HourContent = React.createClass({
  render() {
    return (
      <div className="hourBoxContent">

      </div>
    );
  }
});



//***************************Month Stuff**********************//


const MonthRow = React.createClass({
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
});

const MonthGrid = React.createClass({
  render() {
    var monthRowArray = [];
    for (var i  = 0; i < 5; i++){
      monthRowArray.push(<MonthRow monthRowNumber={i} />);
    }
    return (
      <div className="monthGrid">
        <MonthDaysHeader />
        {monthRowArray}
      </div>
    );
  }
});

const MonthDayBox = React.createClass({
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
});

const MonthDaysHeader = React.createClass({
  render() {
    var sundayWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
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
});





ReactDOM.render(
    <App/>,
    document.getElementById('app')

);
