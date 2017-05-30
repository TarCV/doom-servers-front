import React, { Component, PropTypes } from 'react';

let labelCell = {
  textAlign: 'right',
  vtextAlign: 'top'
}
let valueCell = {
  textAlign: 'left',
  vtextAlign: 'top',
  width: '10em'
}

export class FieldLine extends Component {
  render() {
    return (
          <tr>
            <td style={labelCell}><label htmlFor={this.props.id}>{this.props.text}</label></td>
            <td style={valueCell}>{this.props.children}</td>
          </tr>
    );
  }
}
FieldLine.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string.isRequired
}
