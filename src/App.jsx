import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        Hello your app goes here!
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
