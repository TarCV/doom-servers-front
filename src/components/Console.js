import React, { Component, PropTypes } from 'react';
import { Log } from './Log.js'

export class Console extends Component {
  constructor (props) {
    super(props);
    this.onKeyPress = this.onKeyPress.bind(this);
  }

  onKeyPress(e) {
    if (e.nativeEvent.keyCode !== 13) return;
    let command = e.target.value;
    if (command === '') return;
    this.props.onCommand(command);
  }

  render() {
    return (
      <table>
        <tbody>
          <tr>
            <td>
              <Log log={this.props.log} />
            </td>
          </tr>
          <tr>
            <td>
              <input onKeyPress={this.onKeyPress} />
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}
Console.propTypes = {
  log: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  onCommand: PropTypes.func.isRequired
}
