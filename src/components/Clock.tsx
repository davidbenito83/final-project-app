import React from 'react';
// let moment = require('moment');

// let date = moment().format("DD/MM/YYYY")

let day = new Date().getDate();
let month = new Date().getMonth()+1;
let year = new Date().getFullYear().toLocaleString();

export class Clock extends React.Component {

  render() {
    return (
      <span className="navbar-date">
        {day} / {month} / {year}
      </span>
    );
  }
}