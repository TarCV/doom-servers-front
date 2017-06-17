import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import Container from '../components/Container'
import Home from './Home'
import Login from './Login'
import ServerList from './ServerList'
import Server from './Server'
import ServerConfigure from './ServerConfigure'
import ConnectedRegister from './Register'
import Logout from './Logout'

import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Redirect
} from 'react-router-dom';

const routes = [
  { path: '/', component: <ServerList /> },
  { path: '/login', name: 'Login', component: <Login /> },
  { path: '/logout', name: 'Login', component: <Logout /> },
  { path: '/register', name: 'Sign Up', component: <ConnectedRegister /> },
  { path: '/servers/:serverId', name: 'Server info', component: <Server /> },
  { path: '/servers/:serverId/configure', name: 'Customize Server', component: <ServerConfigure /> },
];

const siteLinks = createLinks([
  { path: '/', name: 'Servers' },
  { path: '/servers/new/configure', name: 'Customize Server' },
]);

const guestLinks = createLinks([
  { path: '/login', name: 'Login' },
  { path: '/register', name: 'Sign Up' },
]);

const loggedinLinks = createLinks([
  { path: '/logout', name: 'Logout' }
]);

function createLinks(linkRoutes) {
  return linkRoutes.map((route, index) => (<li key={index}><NavLink to={route.path}>{route.name}</NavLink></li>))
}

function appendTo(array, items) {
  Array.prototype.push.call(array, items);
}

class App extends Component {
  contentRoutes() {
    return routes.map((route, index) => {
      let innerComponent;
      if (route.creater) {
        innerComponent = route.creater(this.props);
      } else {
        innerComponent = route.component;
      }

      const container = () => (
        <Container title={route.name} className={'content'}>
          {innerComponent}
        </Container>
      );

      return (<Route key={index} path={route.path} component={container} exact={true} />)
    })
  }

  links() {
    const links = [];
    appendTo(links, siteLinks )
    appendTo(links, [<hr key='hrBeforeProfileLinks' />])
    if (this.props.loggedIn) {
      appendTo(links, loggedinLinks )
    } else {
      appendTo(links, guestLinks )
    }
    return links;
  }

  render() {
    const redirect = this.props.redirectTo
            ? <Redirect to={{ pathname: this.props.redirectTo }} />
            : (<div></div>);
    return (
      <Router>
        <div style={{ display: 'flex' }}>
          <Container title="menu">
            <ul role="nav">
              {this.links()}
            </ul>
          </Container>
          {this.contentRoutes()}
          {redirect}
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.authentication.token,
    redirectTo: state.location.redirectTo,
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLogout: (data) => dispatch({ type: 'LOGOUT_ATTEMPT', payload: data })
    }
};

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default ConnectedApp;
