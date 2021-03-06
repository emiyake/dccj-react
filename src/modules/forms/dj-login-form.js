import React, { Component } from 'react';

import './dj-login-form.css';
import DjButton from '../buttons/dj-button.js';
import DjInput from '../inputs/dj-input.js';
import LoginUseCase from '../../domain/login.use-case.js'

class DjLoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '', errorMsg: null };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  onSubmit(event) {
    event.preventDefault();
    LoginUseCase.execute(this.state.username, this.state.password)
      .subscribe(
        response => this.props.hasLogged(response),
        error => this.setState({ errorMsg: error }),
      )
  }

  render() {
    const usernameLabel = 'Username';
    const passwordLabel = 'Password'
    return (
      <form className="form" onSubmit={this.onSubmit}>
        <h2>Faça login!</h2>
        <div className="formInput">
          <DjInput 
            label = { usernameLabel }
            id = "username"
            name="username"
            type="text"
            placeholder="username"
            onInputChange={ this.onInputChange }
          />
        </div>
        <div className="formInput">
          <DjInput 
            label = { passwordLabel }
            id = "password"
            name="password"
            type="password"
            placeholder="password"
            onInputChange={ this.onInputChange }
          />
        </div>
        <div>
          <DjButton label="Login" />
        </div>
        {
          this.state.errorMsg &&
          <p className="error">{ this.state.errorMsg }</p>
        }
      </form>
    )
  }
}

export default DjLoginForm