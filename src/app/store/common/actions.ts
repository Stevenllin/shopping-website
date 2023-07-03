import { CommonState, CommonActions, COMMON__INIT_FETCH_COMMON_DATA, COMMON__INIT_FETCH_COMMON_DATA_DONE } from './types';

/**
 * @description 初始取得系統共用選項資料 (Action)
 */
export const initFetchCommonDataAction = (): CommonActions => ({
  type: COMMON__INIT_FETCH_COMMON_DATA
});

/**
 * @description 初始取得系統共用選項資料 完成 (Action)
 * @param response 請求回傳的 Response
 */
export const initFetchCommonDataDoneAction = (response: CommonState): CommonActions => ({
  type: COMMON__INIT_FETCH_COMMON_DATA_DONE,
  payload: { response }
});