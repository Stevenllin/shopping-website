import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { initFetchCommonDataAction } from '../../../store/common/actions';
import Header from '../Header';
import AsyncSpinner from '../../components/Spinner/AsyncSpinner';
import ModalCollection from '../../components/Modals/ModalCollection';

const MainLayout: React.FC = (props) => {
  const reduxDispatch = useDispatch();

  /**
   * @description 組件初始化後執行的 Effect
  */
  useEffect(() => {
    reduxDispatch(initFetchCommonDataAction());
  }, [reduxDispatch]);

  return (
    <>
      <Header />
      <main>
        {props.children}
      </main>
      <ModalCollection />
      <AsyncSpinner />
    </>
  )
}

export default MainLayout;
