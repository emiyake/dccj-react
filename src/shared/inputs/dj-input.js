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
      <input 
        className="input"
        type = { this.props.type }
        name = { this.props.name }
        placeholder = { this.props.placeholder }
        onChange = { this.handleInputChange }
      />
    )
  }
}

export default DjInput