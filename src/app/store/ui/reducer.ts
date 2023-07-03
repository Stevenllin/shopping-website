import { Reducer } from 'redux';
import {
  UI_SPINNERS__SET_ASYNC_SPINNER_VISIBLE,
  UIActions,
  UIState
} from './types';

/** 初始 UI State */
const initialState: UIState = {
  spinners: {
    asyncSpinner: {
      visible: false,
      count: 0
    }
  }
};

const UIReducer: Reducer<UIState, UIActions> = (state = initialState, action) => {
  switch (action.type) {
    // [Spinners] 設置 Async Spinner 能見度 (Action)
    case UI_SPINNERS__SET_ASYNC_SPINNER_VISIBLE: {
      const count = action.payload.isRequest
        ? state.spinners.asyncSpinner.count + 1
        : state.spinners.asyncSpinner.count - 1;
      const visible = !!count;
      return { ...state, spinners: { ...state.spinners, asyncSpinner: { count, visible } } };
    }
    // Default
    default:
      return state;
  }
}

export default UIReducer;