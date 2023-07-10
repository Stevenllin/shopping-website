import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { ROUTES } from '../../core/router/paths';
import RouterRoute from '../../common/components/Router/RouterRoute';
import LazySpinner from '../../common/components/Spinner/LazySpinner';

const PayRoutes: React.FC = () => {
  return (
    <React.Suspense fallback={<LazySpinner />}>
      <Switch>
        <RouterRoute
          exact
          component={React.lazy(() => import('./ConfirmInfo/ConfirmInfo'))}
        />
        <RouterRoute
          exact
          component={React.lazy(() => import('./Clause/Clause'))}
        />
        <Redirect to={ROUTES.HOME} />
      </Switch>
    </React.Suspense>
  )
}

export default PayRoutes;
