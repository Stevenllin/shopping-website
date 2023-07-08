import { ModalNamesEnum } from '../../core/enums/ui/modals';

/** UI 相關 State */
export interface UIState {
  spinners: SpinnersState;
  modals: ModalState;
}

interface SpinnersState {
  asyncSpinner: {
    visible: boolean;
    count: number;
  }
}

interface ModalState {
  memberLoginModalVisible: boolean;
  remindModalVisible: boolean;
}

/** UI 相關 Action */
export const UI_SPINNERS__SET_ASYNC_SPINNER_VISIBLE = 'UI_SPINNERS__SET_ASYNC_SPINNER_VISIBLE';
export const UI_MODALS__SET_MODAL_VISIBLE = 'UI_MODALS__SET_MODAL_VISIBLE';

/** 設定 Async 的 Spinner 能見度 */
export interface SetAsyncSpinnerVisibleAction {
  type: typeof UI_SPINNERS__SET_ASYNC_SPINNER_VISIBLE;
  payload: {
    isRequest: boolean;
  };
}

export interface SetModalVisibleAction {
  type: typeof UI_MODALS__SET_MODAL_VISIBLE;
  payload: {
    name: ModalNamesEnum;
    visible: boolean;
  };
}

export type UIActions = SetAsyncSpinnerVisibleAction | SetModalVisibleAction
