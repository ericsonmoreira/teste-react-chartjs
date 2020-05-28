import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/app/App';
import Login from './pages/login/Login'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={App} />
      <Route path="/login" component={Login} />
    </Switch>
  </BrowserRouter> ,
  document.getElementById('root')
);
