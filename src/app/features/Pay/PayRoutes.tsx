import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { ROUTES } from '../../core/router/paths';
import usePayGuard from '../../core/router/guards/usePayGuard';
import RouterRoute from '../../common/components/Router/RouterRoute';
import LazySpinner from '../../common/components/Spinner/LazySpinner';

const PayRoutes: React.FC = () => {
  return (
    <React.Suspense fallback={<LazySpinner />}>
      <Switch>
        <RouterRoute
          exact
          path={ROUTES.PAY_CONFIRMINFO}
          component={React.lazy(() => import('./ConfirmInfo/ConfirmInfo'))}
          activate={[usePayGuard]}
        />
        <RouterRoute
          exact
          path={ROUTES.PAY_CLAUSE}
          component={React.lazy(() => import('./Clause/Clause'))}
          activate={[usePayGuard]}
        />
        <Redirect to={ROUTES.HOME} />
      </Switch>
    </React.Suspense>
  )
}

export default PayRoutes;
