import React, { Component } from 'react';
import prefix from 'react-prefixer';

import { UnsortedBlock } from '../components/UnsortedBlock';

const rest = require('rest');
const mime = require('rest/interceptor/mime');
const registry = require('rest/mime/registry');
const client = rest
  .wrap(mime, { registry });

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      settings: [
        { name: 'login', text: 'Login', type: 'register.login' },
        { name: 'password', text: 'Password', type: 'password' },
      ],
    };
    this.onSave = this.onSave.bind(this);
  }
  onChange() {

  }
  onSave(e) {
    e.preventDefault();

    const settingsObject = [].concat(this.state.settings.server, this.state.settings.gameplay, this.state.settings.map)
      .reduce((prev, curr) => {
        if (Object.prototype.hasOwnProperty.call(prev, curr.name)) {
          console.warn(`Duplicate setting: ${curr.name}`);
        }
        prev[curr.name] = curr.value;
        return prev;
      }, {});
    client({
      method: 'PATCH',
      path: 'https://localhost:8443/server/1/run',
      entity: settingsObject,
      headers: { 'Content-Type': 'application/json' },
    })
    .then((response) => {
      console.log('response: ', response);
    });
  }
  fixValue(type, stringValue) {
    try {
      return JSON.parse(`{"val": ${stringValue}}`).val;
    } catch (e) {
      return stringValue;
    }
  }
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <UnsortedBlock
          name="Account" multiColumn={false}
          settings={this.state.settings} onChange={this.onChange}
          style={{ margin: '0 auto', width: 'auto' }}
        />
        <button onClick={this.onSave}>Sign In</button>
      </div>
    );
  }
}
export default Login;
