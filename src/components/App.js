import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import Main from './main';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">FC Vincitori</h1>
          <Link to = "/map"> Go to Map</Link>
        </header>
        <p className="App-intro">
        </p>
        <Main />
      </div>
    );
  }
}

export default App;
