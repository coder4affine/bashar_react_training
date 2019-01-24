import React, { Component, lazy, Suspense } from 'react';
// import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

const AsyncTodo = lazy(() => import('./screens/Todo'));
const AsyncHome = lazy(() => import('./screens/Home'));
const AsyncAbout = lazy(() => import('./screens/About'));
const AsyncNoMatch = lazy(() => import('./screens/NoMatch'));

const Loader = () => <h1>Loading...</h1>;

export default class route extends Component {
  state = {};

  render() {
    return (
      <Switch>
        <Suspense fallback={<Loader />}>
          <Route path="/" exact component={AsyncHome} />
          <Route path="/about/" component={AsyncAbout} />
          <PrivateRoute isAuthenticated path="/todo/" component={AsyncTodo} />
          <Route component={AsyncNoMatch} />
        </Suspense>
      </Switch>
    );
  }
}
