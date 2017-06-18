import React, { Component, PropTypes } from 'react';
import { InputGroup, InputGroupAddon } from 'reactstrap';

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
    let error;
    const groupClasses = []
    if (this.props.error !== undefined) {
      error = <InputGroupAddon>/!\</InputGroupAddon>
      groupClasses.push('has-danger');
    }
    return (
          <tr>
            <td style={labelCell}><label htmlFor={this.props.id}>{this.props.text}</label></td>
            <td style={valueCell}><InputGroup className={groupClasses}>{this.props.children}{error}</InputGroup></td>
          </tr>
    );
  }
}
FieldLine.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string.isRequired
}
