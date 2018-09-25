import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Travel from './Travel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to my Travels</h1>
        </header>
        <Travel
          destination="Paris"
          country="France"
          photo="http://theswissholidays.co.in/europe-tours/europe-tour-packages/images/paris-tour1.jpg"
          distance="0.6km"
        />
        <Travel
          destination="Amsterdam"
          country="Holland"
          photo="http://www.theswissholidays.com/europe-tours/europe-tour-packages/images/Amsterdam-Brussels-Paris.jpg"
          distance="1200km"
        />
      </div>
    );
  }
}

export default App;
