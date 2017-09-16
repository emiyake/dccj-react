import React, { Component } from 'react';

import './dj-input.css';

class DjInput extends Component {

  constructor(props) {
    super(props)

    this.handleInputChange = this.handleInputChange.bind(this)
    this.renderLabelIfThereIsLabel = this.renderLabelIfThereIsLabel.bind(this)
  }

  handleInputChange(event) {
    this.props.onInputChange(event)
  }

  renderLabelIfThereIsLabel() {
    if (this.props.label) {
      return <label className="label" htmlFor={ this.props.id }>{this.props.label}</label>
    }
  }

  render() {
    return (
      <div className="input-block">
        <div>
          { this.renderLabelIfThereIsLabel() }
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