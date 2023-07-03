import { Reducer } from 'redux';
import { CommonState, CommonActions, COMMON__INIT_FETCH_COMMON_DATA_DONE } from './types';

/** 初始共用 State */
const initialState: CommonState = {
  category: []
}

const commonReducer: Reducer<CommonState, CommonActions> = (state = initialState, action): CommonState => {
  switch (action.type) {
    case COMMON__INIT_FETCH_COMMON_DATA_DONE: {
      return { ...state, ...action.payload.response }
    }
    default:
      return state;
  }
}

export default commonReducer;
