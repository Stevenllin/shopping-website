import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setModalVisibleAction } from '../../../../store/ui/actions';
import { ModalNamesEnum } from '../../../../core/enums/ui/modals';
import { ModalProps } from './types';

const Modal: React.FC<ModalProps> = (props) => {
  const modalElemRef = useRef<HTMLDivElement>(null);
  const reduxDispatch = useDispatch();

  /**
   * @description 處理關閉
   */
  const handleClose = () => {
    if (props.onClose) props.onClose();
    reduxDispatch(setModalVisibleAction(props.name, false));
  };

  /**
   * @description 處理背景點擊執行的事件
   * @param event event object
   */
  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === modalElemRef.current) {
      handleClose();
    }
  };

  /**
   * @description 處理確認
   */
  const handleConfirm = () => {
    if (props.onConfirm) props.onConfirm();
    handleClose();
  };

  return (
    <>
      <div aria-label={`modal-${ModalNamesEnum.MemberLoginModal}`} className={'modal fade' + (props.className ? ` ${props.className}` : '') + (props.visible ? ' modal--show show' : '')} ref={modalElemRef} onClick={handleBackdropClick}>
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              {props.title && (
                <h4 className="modal-title">{props.title}</h4>
              )}
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="close" onClick={handleClose} />
            </div>
            <div className="modal-body">
              {props.children}
            </div>
            <div className="modal-footer">
              <div className="m-auto">
                {props.confirmBtnText && (
                  <button className="button-main" onClick={handleConfirm}>
                    {props.confirmBtnText}
                  </button>
                )}
                {props.cancelBtnText && (
                  <button className="" onClick={handleClose}>
                    {props.cancelBtnText}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={'modal-backdrop fade' + (props.visible ? ' modal-backdrop--show show' : '')} />
    </>
  );
};

export default Modal;