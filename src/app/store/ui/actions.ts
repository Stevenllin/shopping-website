import { ModalNamesEnum } from '../../core/enums/ui/modals';

import {
  UIActions,
  UI_SPINNERS__SET_ASYNC_SPINNER_VISIBLE,
  UI_MODALS__SET_MODAL_VISIBLE
} from './types';

/**
 * @description [Spinners] 設置 Async Spinner 能見度 (Action)
 * @param isRequest 是否為請求 (Request) 動作
*/
export const setAsyncSpinnerVisibleAction = (isRequest: boolean): UIActions => ({
  type: UI_SPINNERS__SET_ASYNC_SPINNER_VISIBLE,
  payload: { isRequest }
});

/**
 * @description [Modals] 設置 Modals 能見度 (Action)
 * @param name Modal 的名稱
 * @param visible 能見度 
 * 
*/
export const setModalVisibleAction = (name: ModalNamesEnum, visible: boolean) => ({
  type: UI_MODALS__SET_MODAL_VISIBLE,
  payload: { name, visible }
})
