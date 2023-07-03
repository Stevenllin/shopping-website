/** 共用 State */
export interface CommonState {
  category: string[];
}

/** 共用 Action */
export const COMMON__INIT_FETCH_COMMON_DATA = 'COMMON__INIT_FETCH_COMMON_DATA';
export const COMMON__INIT_FETCH_COMMON_DATA_DONE = 'COMMON__INIT_FETCH_COMMON_DATA_DONE';

export interface InitFetchCommonDataAction {
  type: typeof COMMON__INIT_FETCH_COMMON_DATA;
}

export interface InitFetchCommonDataDoneAction {
  type: typeof COMMON__INIT_FETCH_COMMON_DATA_DONE;
  payload: {
    response: CommonState;
  };
}

export type CommonActions = InitFetchCommonDataAction | InitFetchCommonDataDoneAction
