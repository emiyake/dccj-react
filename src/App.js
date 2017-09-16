import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Clock from './tests/Clock.js';
import Toggle from './tests/Toggle.js';
import DjButton from './modules/buttons/dj-button.js'
import DjInput from './modules/inputs/dj-input.js'
import DjLoginForm from './modules/forms/dj-login-form.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Clock />
        <DjLoginForm />
      </div>
    );
  }
}

export default App;