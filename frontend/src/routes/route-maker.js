import React from 'react';
import {
  Route,
  Redirect,
} from 'react-router-dom';

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100) // fake async
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

const AppRoute = (route) => (
  <Route exact path={route.path} render={props => (
    (route.public || fakeAuth.isAuthenticated) ? (
      // pass the sub-routes down to keep nesting
      <route.component {...props} routes={route.routes}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

export default AppRoute;
