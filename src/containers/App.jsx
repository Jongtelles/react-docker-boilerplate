import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

class App extends Component {
  render() {
    return (
      <div>
        React Boilerplate :D
        pls yay!! WOOOOO HOT
        {this.props.children}
      </div>
    );
  }
}

export default hot(module)(App);
