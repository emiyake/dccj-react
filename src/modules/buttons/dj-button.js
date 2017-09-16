import React, { Component } from 'react';

import './dj-button.css';

class DjButton extends Component {
  render() {
    return (
      <div>
        <button className="button">{ this.props.label }</button>
      </div>
    )
  }
}

export default DjButton