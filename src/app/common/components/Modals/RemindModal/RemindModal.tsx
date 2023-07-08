import React from 'react';
import Modal from '../Modal';
import { RemindModalProps } from './types';
import { ModalNamesEnum } from '../../../../core/enums/ui/modals';
import { PiWarningCircleBold } from 'react-icons/pi';

const RemindModal: React.FC<RemindModalProps> = (props) => {
  return (
    <Modal
      name={ModalNamesEnum.RemindModal}
      className="remind-modal"
      visible={props.visible}
      confirmBtnText="Confirm"
    >
      <div className="d-flex justify-content-center mb-3">
        <PiWarningCircleBold className="icons-main-dark icons-xl" />
      </div>
      <p className="color-main-normal">Please log in bofore adding product to the shopping cart.</p>
    </Modal>
  )
}

export default RemindModal;
