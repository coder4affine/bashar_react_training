import React, { Component, Suspense } from 'react';
// import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import routeDetails from './utils/routeDetails';
import { Consumer } from './context/themeContext';

// const AsyncNoMatch = lazy(() => import('./screens/NoMatch'));

const Loader = () => <h1>Loading...</h1>;

export default class route extends Component {
  state = {};

  render() {
    return (
      <Consumer>
        {value => (
          <div style={{ backgroundColor: value.theme === 'light' ? '#fff' : '#4a4a4a' }}>
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
                        render={props => (
                          <routeDetail.component title={routeDetail.label} {...props} />
                        )}
                      />
                    );
                  }
                  return (
                    <Route
                      key={routeDetail.id}
                      path={routeDetail.path}
                      exact={routeDetail.isExact}
                      render={props => (
                        <routeDetail.component title={routeDetail.label} {...props} />
                      )}
                    />
                  );
                })}
              </Suspense>
            </Switch>
          </div>
        )}
      </Consumer>
    );
  }
}
