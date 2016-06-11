

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
          <MonthGrid />
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
                <i className="material-icons">view_day</i>
            </button>
            <button className="scheduleViewButtons">
                <i className="material-icons">view_week</i>
            </button>
            <button className="scheduleViewButtons">
                <i className="material-icons">view_module</i>
            </button>
        </div>
    );
  }
});


const DateRange = React.createClass({
  render () {
    return (
      <div className="dateRange">
          July, 2016
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




const MonthGrid = React.createClass({
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

const MonthDayBox = React.createClass({
  render () {
    return (
      <div className="monthDaybox">
        asdf
      </div>
    );
  }
});







ReactDOM.render(
    <App/>,
    document.getElementById('app')

);
