import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';
import SystemConfiguration from './system-configuration';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}`} component={SystemConfiguration} />
    </Switch>
  </>
);

export default Routes;
