import React, { Component, PropTypes } from 'react';
import _ from 'underscore';

let tableFullWidth = {
  textAlign: 'left',
  width: '100%',
  border: 'none'
}
let labelCell = {
  textAlign: 'right',
  vtextAlign: 'top'
}
let valueCell = {
  textAlign: 'left',
  vtextAlign: 'top',
  width: '10em'
}

export class ServerPair extends Component {
  render() {
    return (
      <table style={tableFullWidth}>
        <tbody>
          <tr>
            <td style={labelCell}><label htmlFor={this.props.id}>{this.props.text}</label></td>
            <td style={valueCell}>{this.props.children}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}
ServerPair.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string.isRequired
}

export class ServerSetting extends Component {
  constructor (props) {
    super(props)
    this.handleValueChange = this.handleValueChange.bind(this)
    this.handleCheckedChange = this.handleCheckedChange.bind(this)
  }

  componentWillMount() {
    const id = this.props.id || _.uniqueId("setting-");
    this.setState({ id: id });
  }

  handleValueChange(event) {
    this.props.onChange({value: event.target.value});
  }

  handleCheckedChange(event) {
    if (this.props.setting.displayInverted) {
      this.props.onChange({value: !event.target.checked});
    } else {
      this.props.onChange({value: event.target.checked});
    }
  }

  renderBoolean() {
    const id = this.state.id;
    let hiddenInput;
    let namePrefix = '';
    let displayedValue = this.props.setting.value;
    if (this.props.setting.displayInverted) {
      hiddenInput = (
        <input name={this.props.setting.name} value={this.props.setting.value} type="hidden" />        
      )
      namePrefix = '__ignore_'
      displayedValue = !this.props.setting.value;
    }
    return (
      <ServerPair id={id} text={this.props.setting.text}>{hiddenInput}
        <input id={id} name={namePrefix + this.props.setting.name} checked={displayedValue} onChange={this.handleCheckedChange} type="checkbox" />
      </ServerPair>
    )
  }
  renderInteger() {
    const id = this.state.id;
    return (
      <ServerPair id={id} text={this.props.setting.text}>
        <input id={id} name={this.props.setting.name} value={this.props.setting.value} onChange={this.handleValueChange} type="number" />
      </ServerPair>
    );
  }
  renderPassword() {
    const id = this.state.id;
    return (
      <ServerPair id={id} text={this.props.setting.text}>
        <input id={id} name={this.props.setting.name} value={this.props.setting.value} onChange={this.handleValueChange} type="password" />
      </ServerPair>
    );
  }
  renderChoice() {
    const id = this.state.id;
    return (
      <ServerPair id={id} text={this.props.setting.text}>
        <select id={id} name={this.props.setting.name} value={this.props.setting.value} onChange={this.handleValueChange}>
          {
            this.props.setting.choices.map(function (choice) {
              return <option key={choice.value} value={choice.value}>{choice.name}</option>;
            })
          }
        </select>
      </ServerPair>
    );
  }
  renderUnknown() {
    const id = this.state.id;
    return (
      <ServerPair id={id} text={this.props.setting.text} />
    );
  }

  typeToRenderer(type) {
    switch (type.toLowerCase()) {
      case "bool":
        return this.renderBoolean;
      case "int":
      case "float":
        return this.renderInteger;
      case "password":
        return this.renderPassword;
      case "choice":
        return this.renderChoice;
      default:
        console.warn(`Unknown setting type: ${type}`);
        return this.renderUnknown;
    }
  }

  render() {
    const renderer = this.typeToRenderer(this.props.setting.type)
    return renderer.apply(this)
  }
}
ServerSetting.propTypes = {
  id: PropTypes.string,
  setting: PropTypes.object,
  onChange: PropTypes.func.isRequired
}