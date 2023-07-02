import React from 'react';
import AppRoutes from './AppRoutes';
import MainLayout from './common/layouts/MainLayout';

const App: React.FC = () => (
  <MainLayout>
    <AppRoutes />
  </MainLayout>
);

export default App;
