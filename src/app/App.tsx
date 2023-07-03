import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import AppRoutes from './AppRoutes';
import MainLayout from './common/layouts/MainLayout';

const App: React.FC = () => (
  <Provider store={store}>
    <MainLayout>
      <AppRoutes />
    </MainLayout>
  </Provider>
);

export default App;
