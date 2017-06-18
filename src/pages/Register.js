import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Form } from '../components/Form';

const signupForm = [
  { name: 'login', text: 'Login', type: 'register.login', value: '' },
  { name: 'password', text: 'Password', type: 'password', value: '' },
  { name: 'mail', text: 'E-mail', type: 'email', value: '' },
];
const resendForm = [
  { name: 'mail', text: 'E-mail', type: 'email', value: '' },
];

class Register extends PureComponent {
  render() {
    if (this.props.mailSent) {
      return (
          <Form
            onSubmit={this.props.onSendAgain}
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
        error={this.props.error}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mailSent: state.registration.mailSent,
    token: state.registration.token,
    error: state.registration.error
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSave: (data) => dispatch({ type: 'REGISTER_ATTEMPT', payload: data }),
    onSendAgain: (data) => dispatch({ type: 'REGISTER_CHANGE_MAIL', payload: data }),
  };
};

const ConnectedRegister = connect(
  mapStateToProps,
  mapDispatchToProps
)(Register)

export default ConnectedRegister;
