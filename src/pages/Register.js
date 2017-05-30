import React, { Component } from 'react';
import { connect } from 'react-redux';
import prefix from 'react-prefixer';

import { UnsortedBlock } from '../components/UnsortedBlock';
import { Form } from '../components/Form';

const signupForm = [
  { name: 'login', text: 'Login', type: 'register.login', value: '' },
  { name: 'password', text: 'Password', type: 'password', value: '' },
  { name: 'mail', text: 'E-mail', type: 'email', value: '' },
];
const resendForm = [
  { name: 'mail', text: 'E-mail', type: 'email', value: '' },
];

class Register extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('mailSent', this.props.mailSent);
    if (this.props.mailSent) {
        return (
          <Form
             onSubmit={this.onSendAgain}
             form={resendForm}
             submitTitle='Send again'
             defaults={{ mail: this.props.mailSent }}
           />
        );
    }
    return (
      <Form
         onSubmit={this.props.onSave}
         form={signupForm}
         submitTitle='Sign up'
        />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mailSent: state.registration.mailSent,
    token: state.registration.token
  }
}

const ConnectedRegister = connect(
  mapStateToProps,
//  mapDispatchToProps
)(Register)

export default ConnectedRegister;
