import {
  UIActions,
  UI_SPINNERS__SET_ASYNC_SPINNER_VISIBLE
} from './types';

/**
 * @description [Spinners] 設置 Async Spinner 能見度 (Action)
 * @param isRequest 是否為請求 (Request) 動作
*/
export const setAsyncSpinnerVisibleAction = (isRequest: boolean): UIActions => ({
  type: UI_SPINNERS__SET_ASYNC_SPINNER_VISIBLE,
  payload: { isRequest }
});