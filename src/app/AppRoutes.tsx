import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ROUTES } from './core/router/paths/routerPaths';
import RouterScrollToTop from './common/components/Router/RouterScrollToTop';
import RouterRoute from './common/components/Router/RouterRoute';
import LazySpinner from './common/components/Spinner/LazySpinner';

const AppRoutes: React.FC = () => (
  <React.Suspense fallback={<LazySpinner />}>
    <BrowserRouter>
      <RouterScrollToTop />
      <Switch>
        <RouterRoute
          path={ROUTES.HOME}
          component={React.lazy(() => import('./features/Home/Home'))}
        />
      </Switch>
    </BrowserRouter>
  </React.Suspense>
);

export default AppRoutes;
