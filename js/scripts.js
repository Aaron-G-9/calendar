//Necessary import statements for react to work
import React from "react";
import ReactDOM from "react-dom";
//Importing our parent component
import Calendar from "./Calendar.jsx"
//Renders the application
const app = document.getElementById('app');
ReactDOM.render(<Calendar />, app);
