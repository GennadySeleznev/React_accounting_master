import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Company from './company';
import CompanyDetail from './company-detail';
import CompanyUpdate from './company-update';
import CompanyDeleteDialog from './company-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/detail/:id/delete`} component={CompanyDeleteDialog} />
      <ErrorBoundaryRoute exact path={`${match.url}/detail/:id/edit`} component={CompanyUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/detail/:id`} component={CompanyDetail} />
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={CompanyUpdate} />
    </Switch>

    <ErrorBoundaryRoute path={match.url} component={Company} />
  </>
);

export default Routes;
