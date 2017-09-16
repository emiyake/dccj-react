import React, { Component } from 'react';

import './dj-input.css';

class DjInput extends Component {

  constructor(props) {
    super(props)

    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(event) {
    this.props.onInputChange(event)
  }

  render() {
    return (
      <div className="input-block">
        <div>
        { this.props.label &&
          <label className="label" htmlFor={ this.props.id }>{this.props.label}</label>
        }
        </div>
        <input 
          className="input"
          type = { this.props.type }
          name = { this.props.name }
          id = { this.props.id }
          placeholder = { this.props.placeholder }
          onChange = { this.handleInputChange }
        />
      </div>
    )
  }
}

export default DjInput