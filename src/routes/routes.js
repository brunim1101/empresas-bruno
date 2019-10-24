import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import App from '../containers/App'
import Login from '../containers/Login'
import Main from '../containers/Main'
import MainBigCard from '../containers/MainBigCard'

import { isAuthenticated } from "../services/auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/maincard/:id" component={MainBigCard} />
      <Route path="/main" component={Main} />
      <Route path="/" component={Login} />
    </Switch>
  </BrowserRouter>
);

export default Routes;