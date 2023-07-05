import React from 'react';
import { Redirect, Switch, } from 'react-router-dom';
import { ROUTES } from './core/router/paths/routerPaths';
import RouterScrollToTop from './common/components/Router/RouterScrollToTop';
import RouterRoute from './common/components/Router/RouterRoute';
import LazySpinner from './common/components/Spinner/LazySpinner';

const AppRoutes: React.FC = () => (
  <React.Suspense fallback={<LazySpinner />}>
    <RouterScrollToTop />
    <Switch>
      <RouterRoute
        path={ROUTES.PRODUCT_DETAIL}
        component={React.lazy(() => import('./features/ProductDetail/ProductDetail'))}
      />
      <RouterRoute
        path={ROUTES.HOME}
        component={React.lazy(() => import('./features/Home/Home'))}
      />
      <Redirect to={ROUTES.HOME} />
    </Switch>
  </React.Suspense>
);

export default AppRoutes;
