import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Trivia from './pages/Trivia';

import Login from './pages/Login';
import Settings from './pages/Settings';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route exact path="/settings" component={ Settings } />
      <Route exact path="/trivia" component={ Trivia } />
    </Switch>
  );
}
