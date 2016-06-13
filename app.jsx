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
            <DayView />
            <DayContent />
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
            <button className="scheduleViewButtons">
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
    var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];
    var d = new Date();
    return (
      <div className="dateRange">
          {monthNames[d.getMonth()] + " " + d.getUTCFullYear() }
      </div>
    );
  }
});

const DatePaginator = React.createClass({
  render() {
    return (
      <div className="datePaginator">
        <button className="scheduleButtons">
          <i className="material-icons">navigate_before</i>
        </button>
        <DateRange />
        <button className="scheduleButtons" id="scheduleForwardWeek">
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

const prettyHours = ["All Day", "7am", "8am", "9am", "10am", "11am", "12am", "1pm",
    "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm"];



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
          aaa
      </div>
    );
  }
});



//***************************Month Stuff**********************//


const MonthRow = React.createClass({
  render() {
    return (
      <div className="monthRow">
        <MonthDayBox />
        <MonthDayBox />
        <MonthDayBox />
        <MonthDayBox />
        <MonthDayBox />
        <MonthDayBox />
        <MonthDayBox />
      </div>
    );
  }
});

const MonthGrid = React.createClass({
  render() {
    return (
      <div className="monthGrid">
        <MonthDaysHeader />
        <MonthRow />
        <MonthRow />
        <MonthRow />
        <MonthRow />
        <MonthRow />
      </div>
    );
  }
});

const MonthDayBox = React.createClass({
  render () {
    return (
      <div className="monthDaybox">
        asdf
      </div>
    );
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
