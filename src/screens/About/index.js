import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import PropTypes from 'prop-types'

const AsyncChild1 = lazy(() => import('./child1'));
const AsyncChild2 = lazy(() => import('./child2'));

const Loader = () => <h1>Loading...</h1>;

const index = () => (
  <div>
    <h1>About Page</h1>
    <Router>
      <>
        <nav>
          <ul>
            <li>
              <Link to="/about/">Child 1</Link>
            </li>
            <li>
              <Link to="/about/child2">Child 2</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Suspense fallback={<Loader />}>
            <Route exact path="/about/" component={AsyncChild1} />
            <Route path="/about/child2" component={AsyncChild2} />
          </Suspense>
        </Switch>
      </>
    </Router>
  </div>
);

index.propTypes = {};

export default index;
