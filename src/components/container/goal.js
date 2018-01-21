import React, { Component } from 'react';
import Push from 'push.js';
import ReactSwipe from 'react-swipe';
import Muller from '../../assets/muller.gif';
import Cheer from '../../assets/cheer.gif';
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
        <ReactSwipe className="carousel" swipeOptions={{continuous: false}}>
          <img src = { Muller }/>
          <img src = { Cheer }/>
        </ReactSwipe>
      </div>
    );
  }
}

export default Goal;
