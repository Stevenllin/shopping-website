import { GetUsersResp } from '../../api/models/get/getUsers';

/** 共用 State */
export interface CommonState {
  category: string[];
  member: GetUsersResp | null;
}

/** 共用 Action */
export const COMMON__INIT_FETCH_COMMON_DATA = 'COMMON__INIT_FETCH_COMMON_DATA';
export const COMMON__INIT_FETCH_COMMON_DATA_DONE = 'COMMON__INIT_FETCH_COMMON_DATA_DONE';
export const COMMON__FETCH_MEMBER_DATA = 'COMMON__FETCH_MEMBER_DATA';
export const COMMON__FETCH_MEMBER_DATA_DONE = 'COMMON__FETCH_MEMBER_DATA_DONE';

export interface InitFetchCommonDataAction {
  type: typeof COMMON__INIT_FETCH_COMMON_DATA;
}

export interface InitFetchCommonDataDoneAction {
  type: typeof COMMON__INIT_FETCH_COMMON_DATA_DONE;
  payload: {
    response: string[];
  };
}

export interface FetchMemberDataAction {
  type: typeof COMMON__FETCH_MEMBER_DATA;
  payload: {
    username: string;
  }
}

export interface FetchMemberDataDoneAction {
  type: typeof COMMON__FETCH_MEMBER_DATA_DONE;
  payload: {
    response: GetUsersResp;
  }
}

export type CommonActions = InitFetchCommonDataAction | InitFetchCommonDataDoneAction | FetchMemberDataAction | FetchMemberDataDoneAction
