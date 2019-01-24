import React, { Component, Suspense } from 'react';
// import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import routeDetails from './utils/routeDetails';

// const AsyncNoMatch = lazy(() => import('./screens/NoMatch'));

const Loader = () => <h1>Loading...</h1>;

export default class route extends Component {
  state = {};

  render() {
    return (
      <Switch>
        <Suspense fallback={<Loader />}>
          {routeDetails.map(routeDetail => {
            if (route.isPrivate) {
              return (
                <PrivateRoute
                  key={routeDetail.id}
                  isAuthenticated
                  exact={routeDetail.isExact}
                  path={routeDetail.path}
                  render={props => <routeDetail.component {...props} />}
                />
              );
            }
            return (
              <Route
                key={routeDetail.id}
                path={routeDetail.path}
                exact={routeDetail.isExact}
                render={props => <routeDetail.component {...props} />}
              />
            );
          })}
        </Suspense>
      </Switch>
    );
  }
}
