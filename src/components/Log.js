import React, { Component, PropTypes } from 'react';

export class Log extends Component {
  render() {
    const lines = this.props.log.map(message => (<li>{message.text}</li>))
    return (
      <ul>
        {lines}
      </ul>
    );
  }
}
Log.propTypes = {
  log: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
}
