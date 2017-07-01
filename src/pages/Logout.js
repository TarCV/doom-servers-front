import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Form } from '../components/Form';
import { Alert } from 'reactstrap';

const loginForm = [
  { name: 'login', text: 'Login', type: 'register.login' },
  { name: 'password', text: 'Password', type: 'password' },
]

class Logout extends Component {
  componentWillMount() {
      this.props.onLogout(this.props);
  }

  componentWillReceiveProps(nextProps) {
      if (nextProps.location !== this.props.location) {
          this.props.onLogout(nextProps);
      }
  }

  render() {
    if (this.props.error) {
      return (<Alert color="warning">
        There were problems logging you out. Will retry in 5 seconds.
      </Alert>)
    } else if (this.props.authInfo) {
      return (<Alert color="info">
        Logging you out
      </Alert>)
    } else {
      return (<Alert color="success">
        Successfully logged out
      </Alert>)
    }
  }
}

const mapStateToProps = (state) => {
  return {
    authInfo: state.authentication.token && {
      token: state.authentication.token
    },
    error: state.authentication.logoutError
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLogout: (nextProps) => dispatch({ type: 'LOGOUT_ATTEMPT', payload: nextProps.authInfo })
    }
};

const ConnectedLogout = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Logout))

export default ConnectedLogout;
