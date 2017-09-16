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
    this.handleLogout = this.handleLogout.bind(this)
  }

  handleLogin(loginResponse) {
    this.setState({
      isLogged: true,
      name: loginResponse.name
    })
  }

  handleLogout() {
    this.setState({
      isLogged: false
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
        {
          this.state.isLogged &&
          <a className="link" onClick={ this.handleLogout }>Logout</a>
        }
      </div>
    );
  }
}

export default App;