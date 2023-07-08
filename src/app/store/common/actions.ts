import { GetUsersResp } from '../../api/models/get/getUsers';
import { CommonActions, COMMON__INIT_FETCH_COMMON_DATA, COMMON__INIT_FETCH_COMMON_DATA_DONE, COMMON__FETCH_MEMBER_DATA, COMMON__FETCH_MEMBER_DATA_DONE } from './types';

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
export const initFetchCommonDataDoneAction = (response: string[]): CommonActions => ({
  type: COMMON__INIT_FETCH_COMMON_DATA_DONE,
  payload: { response }
});

/**
 * @description 取得 Member 資料 (Action)
 */
export const fetchMemberDataAction = (username: string): CommonActions => ({
  type: COMMON__FETCH_MEMBER_DATA,
  payload: { username }
});

/** 
 * @description 儲存 Member 資料
 */
export const fetchMemberDataDoneAction = (response: GetUsersResp): CommonActions => ({
  type: COMMON__FETCH_MEMBER_DATA_DONE,
  payload: { response }
})