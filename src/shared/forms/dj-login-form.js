import React, { Component } from 'react';

import './dj-login-form.css';
import DjButton from '../buttons/dj-button.js';
import DjInput from '../inputs/dj-input.js';

class DjLoginForm extends Component {
  render() {
    return (
      <div className="form">
        <h2>Faça login!</h2>
        <div className="formInput">
          <DjInput type="text" name="username" placeholder="username"/>
        </div>
        <div className="formInput">
          <DjInput type="password" name="password" placeholder="password" />
        </div>
        <div>
          <DjButton label="Login" />
        </div>
      </div>
    )
  }
}

export default DjLoginForm