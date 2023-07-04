import React from 'react';
import { ModalNamesEnum } from '../../../../core/enums/ui/modals';
import { MemberLoginModalProps } from './types';
import Modal from '../Modal';

const MemberLoginModal: React.FC<MemberLoginModalProps> = (props) => {
  return (
    <Modal
      name={ModalNamesEnum.MemberLoginModal}
      className="member-login-modal"
      title="會員登入"
      visible={props.visible}
    >
      <div>
        Login
      </div>
    </Modal>
  )
}

export default MemberLoginModal;
