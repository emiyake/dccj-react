import React, { Component } from 'react';

import './dj-input.css';

class DjInput extends Component {
  render() {
    return (
      <div>
        <input 
          className="input"
          type = { this.props.type }
          name = { this.props.name }
          placeholder = { this.props.placeholder }
        />
      </div>
    )
  }
}

export default DjInput