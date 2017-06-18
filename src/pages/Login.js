import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Form } from '../components/Form';

const loginForm = [
  { name: 'login', text: 'Login', type: 'register.login' },
  { name: 'password', text: 'Password', type: 'password' },
]

class Login extends PureComponent {
  render() {
    return (
      <div>
        <Form
          form={loginForm}
          onSubmit={this.props.onSave}
          submitTitle='Sign In'
          error={this.props.error}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    error: state.authentication.loginError
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSave: (data) => dispatch({ type: 'LOGIN_ATTEMPT', payload: data })
    }
};

const ConnectedLogin = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)

export default ConnectedLogin;
