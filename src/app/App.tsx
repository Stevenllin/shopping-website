import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import AppRoutes from './AppRoutes';
import { ConnectedRouter } from 'connected-react-router';
import MainLayout from './common/layouts/MainLayout';
import { routerHistory } from './core/router/service';

const App: React.FC = () => (
  <Provider store={store}>
    <ConnectedRouter history={routerHistory}>
      <MainLayout>
        <AppRoutes />
      </MainLayout>
    </ConnectedRouter>
  </Provider>
);

export default App;
