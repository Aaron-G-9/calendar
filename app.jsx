

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
