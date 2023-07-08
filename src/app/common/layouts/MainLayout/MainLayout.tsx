import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMemberDataAction, initFetchCommonDataAction } from '../../../store/common/actions';
import { executeInitCartAction } from '../../../store/features/cart/actions';
import Header from '../Header';
import AsyncSpinner from '../../components/Spinner/AsyncSpinner';
import ModalCollection from '../../components/Modals/ModalCollection';
import storageService from '../../../core/services/storageService';
import { StorageKeysEnum } from '../../../core/enums/storage';
import { RootState } from '../../../store/types';

const MainLayout: React.FC = (props) => {
  const reduxDispatch = useDispatch();
  const username = storageService.getItem(StorageKeysEnum.Username);
  const member = useSelector((state: RootState) => state.common.member);
  const carts = useSelector((state: RootState) => state.features.cart);
  console.log('carts', carts)

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

  useEffect(() => {
    if (member) reduxDispatch(executeInitCartAction(member.id))
  }, [member, reduxDispatch])

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
