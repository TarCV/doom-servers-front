import React, { Component } from 'react';
import { connect } from 'react-redux';
import prefix from 'react-prefixer';

import { UnsortedBlock } from '../components/UnsortedBlock';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: [
        { name: 'login', text: 'Login', type: 'register.login', value: '' },
        { name: 'password', text: 'Password', type: 'password', value: '' },
        { name: 'mail', text: 'E-mail', type: 'email', value: '' },
      ]
    };
    if (props.defaults) {
      this.state.form.map(setting => {
        if (props.defaults.hasOwnProperty(setting.name)) {
          setting.value = props.defaults[setting.name];
        }
      })
    }
    this.onChange = this.onChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }
  onChange(e) {
    this.setState((prevState, props) => {
      const diff = {};
      diff[e.block] = prevState[e.block].slice(0);
      diff[e.block] = diff[e.block].map(setting => {
        if (e.name === setting.name) {
          setting.value = e.value;
        }
        return setting;
      });
      return diff;
    });
  }
  onSave(e) {
    e.preventDefault();

    const settingsObject = this.state.form.reduce((prev, curr) => {
      prev[curr.name] = curr.value;
      return prev;
    }, {});
    this.props.onSave(settingsObject);
  }
  render() {
    return (
      <form onSubmit={this.onSave}>
        <div style={{ textAlign: 'center' }}>
          <UnsortedBlock
            name="form" multiColumn={false}
            settings={this.state.form} onChange={this.onChange}
            style={{ margin: '0 auto', width: 'auto' }}
          />
          <input type='submit' value='Sign Up' />
        </div>
      </form>
    );
  }
}
