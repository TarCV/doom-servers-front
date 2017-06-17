import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Form } from '../components/Form';

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
    if (this.props.authInfo) {
      return (<div>
        Logging you out
      </div>)
    } else {
      return (<div>
        Successfully logged out
      </div>)
    }
  }
}

const mapStateToProps = (state) => {
  return {
    authInfo: {
      token: state.authentication.token
    }
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
