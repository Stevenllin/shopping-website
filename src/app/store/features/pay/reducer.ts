import { Reducer } from 'redux';
import { PayState, PayActions, EXECUTE__SET_ACCESSIBLE_STEP } from './types';
import { ProcessStepCodesEnum } from '../../../features/Pay/types';

/** 初始結帳流程 State */
const initialState: PayState = {
  process: [ProcessStepCodesEnum.ConfirmInfo]
}

const payReducer: Reducer<PayState, PayActions> = (state = initialState, action) => {
  switch (action.type) {
    case EXECUTE__SET_ACCESSIBLE_STEP: {
      const currentStep = action.payload.step;
      const accessibleSteps = state.process.filter(step => step !== currentStep).concat(currentStep)
      return { process: accessibleSteps }
    }
    default:
      return state;
  }
}

export default payReducer;
