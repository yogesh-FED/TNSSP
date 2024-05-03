// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Home from '../Home.js';

const LoginRoute = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/home" component={Home} />
        {/* Add more routes as needed */}
      </Switch>
    </Router>
  );
};

export default LoginRoute;
