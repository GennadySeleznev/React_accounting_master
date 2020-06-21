import React from "react";
import { Switch } from "react-router-dom";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import ErrorBoundaryRoute from "app/shared/error/error-boundary-route";
import Company from "./company";
import ProfitLoss from "./profit-loss/profit-loss";
import BalanceSheet from "./balance-sheet/balance-sheet";
import GroupConfiguration from "./group-configuration/group-configuration";

/* jhipster-needle-add-route-import - JHipster will add routes here */

const Routes = ({ match }) => (
  <div>
    <Switch>
      {/* prettier-ignore */}
      <ErrorBoundaryRoute path={`${match.url}company`} component={Company} />
      <ErrorBoundaryRoute
        path={`${match.url}profit-loss`}
        component={ProfitLoss}
      />
      <ErrorBoundaryRoute
        path={`${match.url}balance-sheet`}
        component={BalanceSheet}
      />
      <ErrorBoundaryRoute
        path={`${match.url}group-configuration`}
        component={GroupConfiguration}
      />
      {/* jhipster-needle-add-route-path - JHipster will add routes here */}
    </Switch>
  </div>
);

export default Routes;
