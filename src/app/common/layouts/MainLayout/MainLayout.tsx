import React from 'react';
import Header from '../Header';
import AsyncSpinner from '../../components/Spinner/AsyncSpinner';

const MainLayout: React.FC = (props) => {
  return (
    <>
      <Header />
      <main>
        {props.children}
      </main>
      <AsyncSpinner />
    </>
  )
}

export default MainLayout;
