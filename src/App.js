import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Test from './Test.js';
import Clock from './Clock.js';
import Toggle from './Toggle.js';
import DjButton from './shared/buttons/dj-button.js'
import DjInput from './shared/inputs/dj-input.js'
import DjLoginForm from './shared/forms/dj-login-form.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Test with props => {this.props.name}
        </p>
        <Test />
        <Clock />
        <Toggle />
        <DjLoginForm />
      </div>
    );
  }
}

export default App;