import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/types';
import MemberLoginModal from '../MemberLoginModal';
import RemindModal from '../RemindModal';

const ModalCollection: React.FC = () => {
  const modalsState = useSelector((state: RootState) => state.UI.modals);
  return (
    <>
      {/* 會員登入 Modal */}
      {modalsState.memberLoginModalVisible && (
        <MemberLoginModal visible={modalsState.memberLoginModalVisible} />
      )}
      {/** 共用提醒 Modal */}
      {
        <RemindModal visible={modalsState.remindModalVisible} />
      }
    </>
  )
}

export default ModalCollection;
