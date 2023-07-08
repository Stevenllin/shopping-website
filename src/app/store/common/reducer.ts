import { Reducer } from 'redux';
import { CommonState, CommonActions, COMMON__INIT_FETCH_COMMON_DATA_DONE, COMMON__FETCH_MEMBER_DATA_DONE } from './types';

/** 初始共用 State */
const initialState: CommonState = {
  category: [],
  member: null
}

const commonReducer: Reducer<CommonState, CommonActions> = (state = initialState, action): CommonState => {
  switch (action.type) {
    case COMMON__INIT_FETCH_COMMON_DATA_DONE: {
      return { ...state, category: [...action.payload.response] }
    }
    case COMMON__FETCH_MEMBER_DATA_DONE : {
      return { ...state, member: action.payload.response }
    }
    default:
      return state;
  }
}

export default commonReducer;
