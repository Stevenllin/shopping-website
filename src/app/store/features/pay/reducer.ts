import { Reducer } from 'redux';
import { PayState, PayActions, EXECUTE__SET_ACCESSIBLE_STEP, EXECUTE__SET_CLAUSE, EXECUTE__RESET_PAY } from './types';
import { ProcessStepCodesEnum } from '../../../features/Pay/types';

/** 初始結帳流程 State */
const initialState: PayState = {
  process: [ProcessStepCodesEnum.ConfirmInfo],
  clauses: false
}

const payReducer: Reducer<PayState, PayActions> = (state = initialState, action) => {
  switch (action.type) {
    case EXECUTE__SET_ACCESSIBLE_STEP: {
      const currentStep = action.payload.step;
      const accessibleSteps = state.process.filter(step => step !== currentStep).concat(currentStep)
      return { ...state, process: accessibleSteps }
    }
    case EXECUTE__SET_CLAUSE: {
      return { ...state, clauses: action.payload.clause }
    }
    case EXECUTE__RESET_PAY: {
      return { ...initialState }
    }
    default:
      return state;
  }
}

export default payReducer;
