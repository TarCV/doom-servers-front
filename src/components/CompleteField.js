import React, { Component, PropTypes } from 'react';
import { FieldLine } from './FieldLine';
import _ from 'underscore';

export class CompleteField extends Component {
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
      <FieldLine id={id} text={this.props.setting.text}>{hiddenInput}
        <input id={id} name={namePrefix + this.props.setting.name} checked={displayedValue} onChange={this.handleCheckedChange} type="checkbox" />
      </FieldLine>
    )
  }
  renderInteger() {
    const id = this.state.id;
    return (
      <FieldLine id={id} text={this.props.setting.text}>
        <input id={id} name={this.props.setting.name} value={this.props.setting.value} onChange={this.handleValueChange} type="number" />
      </FieldLine>
    );
  }
  renderPassword() {
    const id = this.state.id;
    return (
      <FieldLine id={id} text={this.props.setting.text}>
        <input id={id} name={this.props.setting.name} value={this.props.setting.value} onChange={this.handleValueChange} type="password" />
      </FieldLine>
    );
  }
  renderChoice() {
    const id = this.state.id;
    return (
      <FieldLine id={id} text={this.props.setting.text}>
        <select id={id} name={this.props.setting.name} value={this.props.setting.value} onChange={this.handleValueChange}>
          {
            this.props.setting.choices.map(function (choice) {
              return <option key={choice.value} value={choice.value}>{choice.name}</option>;
            })
          }
        </select>
      </FieldLine>
    );
  }
  renderEmail() {
    const id = this.state.id;
    return (
      <FieldLine id={id} text={this.props.setting.text}>
        <input id={id} name={this.props.setting.name} value={this.props.setting.value} onChange={this.handleValueChange} type="email" />
      </FieldLine>
    );
  }
  renderRegisterLogin() {
    const id = this.state.id;
    return (
      <FieldLine id={id} text={this.props.setting.text}>
        <input id={id} name={this.props.setting.name} value={this.props.setting.value} onChange={this.handleValueChange} pattern="[a-z-]{3,15}" />
      </FieldLine>
    );
  }
  renderUnknown() {
    const id = this.state.id;
    return (
      <FieldLine id={id} text={this.props.setting.text} />
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
      case "email":
        return this.renderEmail;
      case "register.login":
        return this.renderRegisterLogin;
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
CompleteField.propTypes = {
  id: PropTypes.string,
  setting: PropTypes.object,
  onChange: PropTypes.func.isRequired
}
