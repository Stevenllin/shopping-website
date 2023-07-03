/** UI 相關 State */
export interface UIState {
  spinners: SpinnersState;
}

interface SpinnersState {
  asyncSpinner: {
    visible: boolean;
    count: number;
  }
}

/** UI 相關 Action */
export const UI_SPINNERS__SET_ASYNC_SPINNER_VISIBLE = 'UI_SPINNERS__SET_ASYNC_SPINNER_VISIBLE';

/** 設定 Async 的 Spinner 能見度 */
export interface SetAsyncSpinnerVisibleAction {
  type: typeof UI_SPINNERS__SET_ASYNC_SPINNER_VISIBLE;
  payload: {
    isRequest: boolean;
  };
}

export type UIActions = SetAsyncSpinnerVisibleAction
