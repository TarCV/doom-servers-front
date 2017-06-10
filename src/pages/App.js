import React from 'react'
import Container from '../components/Container'
import Home from './Home'
import Login from './Login'
import ServerList from './ServerList'
import Server from './Server'
import ServerConfigure from './ServerConfigure'
import ConnectedRegister from './Register'
import history from '../history'

import {
  BrowserRouter as Router,
  Route,
  NavLink,
} from 'react-router-dom';

const routes = [
  { path: '/', name: 'Home', component: <Home /> },
  { path: '/login', name: 'Login', component: <Login /> },
  { path: '/register', name: 'Sign Up', component: <ConnectedRegister /> },
  { path: '/servers', name: 'Servers', component: <ServerList /> },
  { path: '/servers/:serverId', name: 'Server info', component: <Server /> },
  { path: '/servers/:serverId/configure', name: 'Customize Server', component: <ServerConfigure /> },
];

export default React.createClass({
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
  },
  links() {
    return routes.map((route, index) => (<li key={index}><NavLink to={route.path}>{route.name}</NavLink></li>))
  },

  render() {
    return (
      <Router history={history}>
        <div style={{ display: 'flex' }}>
          <Container title="menu">
            <ul role="nav">
              {this.links()}
            </ul>
          </Container>
          {this.contentRoutes()}
        </div>
      </Router>
    );
  }
})
