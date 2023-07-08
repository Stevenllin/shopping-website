import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMemberDataAction, initFetchCommonDataAction } from '../../../store/common/actions';
import Header from '../Header';
import AsyncSpinner from '../../components/Spinner/AsyncSpinner';
import ModalCollection from '../../components/Modals/ModalCollection';
import storageService from '../../../core/services/storageService';
import { StorageKeysEnum } from '../../../core/enums/storage';

const MainLayout: React.FC = (props) => {
  const reduxDispatch = useDispatch();
  const username = storageService.getItem(StorageKeysEnum.Username);

  /**
   * @description 組件初始化後執行的 Effect
  */
  useEffect(() => {
    reduxDispatch(initFetchCommonDataAction());
  }, [reduxDispatch]);

  /**
   * @description 根據使用者索取個人資料
  */
  useEffect(() => {
    if (username) reduxDispatch(fetchMemberDataAction(username))
  }, [username, reduxDispatch])

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
