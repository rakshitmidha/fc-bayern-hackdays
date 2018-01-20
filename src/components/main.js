import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Goal from './container/goal';
import Map from './container/map';

class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path = "/" component = {Goal} />
          <Route path = "/map" component = {Map} />
        </Switch>
      </main>
    );
  }
}

export default Main;
