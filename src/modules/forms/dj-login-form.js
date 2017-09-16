import React, { Component } from 'react';

import './dj-login-form.css';
import DjButton from '../buttons/dj-button.js';
import DjInput from '../inputs/dj-input.js';
import LoginUseCase from '../../domain/login.use-case.js'

class DjLoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    LoginUseCase.execute(this.state.username, this.state.password)
    alert('A name was submitted: ' + this.state.username);
    alert('A pw was submitted: ' + this.state.password);
    event.preventDefault();
  }

  render() {
    const usernameLabel = 'Username';
    const passwordLabel = 'Password'
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <h2>Faça login!</h2>
        <div className="formInput">
          <DjInput 
            label = { usernameLabel }
            id = "username"
            name="username"
            type="text"
            placeholder="username"
            onInputChange={ this.handleInputChange }
          />
        </div>
        <div className="formInput">
          <DjInput 
            label = { passwordLabel }
            id = "password"
            name="password"
            type="password"
            placeholder="password"
            onInputChange={ this.handleInputChange }
          />
        </div>
        <div>
          <DjButton label="Login" />
        </div>

        <div>
          <p>username: { this.state.username }</p>
          <p>password: { this.state.password }</p>
        </div>
      </form>
    )
  }
}

export default DjLoginForm