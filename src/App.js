import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import Clock from './modules/clock/dj-clock.js'
import DjLoginForm from './modules/forms/dj-login-form.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { isLogged: false, name: '' }

    this.handleLogin = this.handleLogin.bind(this)
  }

  handleLogin(loginResponse) {
    console.log('handleLogin')
    this.setState({
      isLogged: true,
      name: loginResponse.name
    })
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        {
          this.state.isLogged &&
          <Clock name={ this.state.name }/>
        }
        {
          !this.state.isLogged &&
          <DjLoginForm hasLogged={ this.handleLogin }/>
        }
      </div>
    );
  }
}

export default App;