import React, {Component} from 'react';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TitleBar from './components/TitleBar';

//Necessary according material-ui
import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();

class Calendar extends Component {

		constructor() {
				super();
				this.state = ({desiredView: "WeekView", windowWidth: window.innerWidth, title: "Dec 6 1996"})
		}

		handleResize(e) {
				this.setState({windowWidth: window.innerWidth})
		}

		componentDidMount() {
				window.addEventListener('resize', this.handleResize.bind(this))
		}

		componentWillUnmount() {
				window.removeEventListener('resize', () => this.handleResize())
		}

		getDesiredView() {
				switch (this.state.desiredView) {
						case "WeekView":
								return (
										<TitleBar title={this.state.title}/>
								)
						case "DayView":
								return (
										<div>Day View</div>
								)
						case "MonthView":
								return (
										<div>Month View</div>
								)
				}
		}

		render() {
				return (
						<MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
								{this.getDesiredView()}
						</MuiThemeProvider>
				);
		}
}

export default Calendar;
