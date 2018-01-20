import React, { Component } from 'react';
import Push from 'push.js';
import Muller from '../../assets/muller.gif';
import '../../App.css';

class Goal extends Component {

  constructor() {
    super();
    this.state = {
      goal : true
    };
  }

  componentDidMount() {
    Push.create('Goal!');
    setTimeout(() => this.setState({ goal: false }), 2000);
  }


  render() {

    if(this.state.goal) {
      		return (
	      				<div className = "goal"/>
        			);
    	}

    return (
      <div>
        <h1>Hey it's a goal</h1>
        <img src = { Muller } />
      </div>
    );
  }
}

export default Goal;
